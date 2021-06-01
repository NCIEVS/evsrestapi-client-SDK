#!/bin/bash
#
# Script to compute contents of https://evs.nci.nih.gov/ftp1/CDISC/ADaM/ADaM%20Terminology.txt
# from a series of API calls
#
if [ ${#arr[@]} -ne 0 ]; then
  echo "Usage: $0"
  exit 1
fi

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

terminology=ncit

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"

# check status
check_status() {
    local retval=$1
    local message=$2
    if [ $retval -ne 0 ]; then
      cat /tmp/x.$$
      echo "ERROR: $messge"
      exit 1
    fi
}
# check status
check_http_status() {
    retval=$1
    message=$2
    status=`tail -1 /tmp/x.$$`
    if [ $status -ne $retval ]; then
      perl -pe 's/'$retval'$//' /tmp/x.$$ | sed 's/^/    /'
      echo "ERROR: $message"
      exit 1
    fi
}

# Print header 
echo "Code	Codelist Code	Codelist Extensible (Yes/No)	Codelist Name	CDISC Submission Value	CDISC Synonym(s)	CDISC Definition	NCI Preferred Term"

# Get descendants of C81222
curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/C81222/descendants" 2> /dev/null > /tmp/x.$$
check_status $? "GET descendants of C81222 call failed"
check_http_status 200 "GET descendants of C81222  returned $status, expected 200"
head -1 /tmp/x.$$ | jq -r '.[].code' | perl -pe 's/\r//;' > /tmp/x2.$$

# For each codelist
for code in `cat /tmp/x2.$$`; do

    # Write codelist header
    # C81223		No	Date Imputation Flag	DATEFL	Date Imputation Flag	Date Imputation Flag: Indicates the level of imputation reflected in a date value.	CDISC ADaM Date Imputation Flag Terminology
    curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code" --data-urlencode "include=summary,inverseAssociations" 2> /dev/null > /tmp/x.$$
    check_status $? "GET $code call failed"
    check_http_status 200 "GET $code returned $status, expected 200"

    # extract data
	extensible=`head -1 /tmp/x.$$ | jq -r '.properties[] | select(.type=="Extensible_List") | .value' | perl -pe 's/\r//;'`
	sy=`head -1 /tmp/x.$$ | jq -r '.synonyms[] | select(.source=="CDISC" and .termGroup == "SY") | .name' | perl -pe 's/\r//;'`
	pt=`head -1 /tmp/x.$$ | jq -r '.synonyms[] | select(.source=="CDISC" and .termGroup == "PT") | .name' | perl -pe 's/\r//;'`
	ncipt=`head -1 /tmp/x.$$ | jq -r '.synonyms[] | select(.source=="NCI" and .termGroup == "PT") | .name' | perl -pe 's/\r//;'`
	def=`head -1 /tmp/x.$$ | jq -r '.definitions[] | select(.source=="CDISC") | .definition' | perl -pe 's/\r//;'`

	echo "$code		$extensible	$sy	$pt	$sy	$def	$ncipt"	

    # Collect subset members
	head -1 /tmp/x.$$ | jq -r '.inverseAssociations[] | select(.type=="Concept_In_Subset") | .relatedCode' | perl -pe 's/\r//;' > /tmp/x2.$$
    for code2 in `cat /tmp/x2.$$`; do
		# Write entry 
		# C81212	C81223		Date Imputation Flag	D		Day Imputed: Day is imputed.	Day Imputed	
    	curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code2" --data-urlencode "include=summary" 2> /dev/null > /tmp/x2.$$
    	check_status $? "GET $code2 call failed"
    	check_http_status 200 "GET $code returned $status, expected 200"

		memberpt=`head -1 /tmp/x2.$$ | jq -r '.synonyms[] | select(.source=="CDISC" and .termGroup == "PT") | .name' | perl -pe 's/\r//;'`
		memberdef=`head -1 /tmp/x2.$$ | jq -r '.definitions[] | select(.source=="CDISC") | .definition' | perl -pe 's/\r//;'`
		memberncipt=`head -1 /tmp/x2.$$ | jq -r '.synonyms[] | select(.source=="NCI" and .termGroup == "PT") | .name' | perl -pe 's/\r//;'`
		
		echo "$code2	$code		$sy	$memberpt		$memberdef	$memberncipt"    

done		


done


# ---------------------------------------------------------
# Cleanup
#
/bin/rm -f /tmp/x.$$
/bin/rm -f /tmp/x2.$$

echo "-----------------------------------------------------"
echo "Finished ...`/bin/date`"
echo "-----------------------------------------------------"
