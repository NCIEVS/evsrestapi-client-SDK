#!/bin/bash
#
# Script to call EVSRESTAPI and validate a number of calls
# against expected results
#
# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo ""
error=0

# ---------------------------------------------------------
# get "get concept" "/concept/$terminology/$code"
get() {
  message=$1
  path=$2
  json=""
  
  echo "  $message ...`/bin/date`"
  curl -v -w "\n%{http_code}" -G "$url/$path" 2> /dev/null > /tmp/x.$$
  if [ $? -ne 0 ]; then
    echo "    ERROR: GET $url/concept/$terminology/$code failed"
    error=1
    return 1
  fi

  # check status
  status=`tail -1 /tmp/x.$$`
  if [ $status -ne 200 ]; then
    perl -pe 's/\d+$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
    echo "    ERROR: GET $url/concept/$terminology/$code returned $status, expected 200"
    error=1
    return 1
  fi
  json=`perl -pe 's/200$//' /tmp/x.$$ | jq '.'`
}

checkNotEmpty() {
  ct=`echo "$1" | jq '. | length' | sed 's/\r//'`
  if [ 1 -gt "$ct" ]; then
    echo "JSON = $1"
    error=1
    echo "    ERROR: json unexpectedly empty"
  fi
}

checkEmpty() {
  ct=`echo "$1" | jq '. | length' | sed 's/\r//'`
  if [ 1 -le "$ct" ]; then
    echo "      JSON = $1"
    error=1
    echo "    ERROR: json unexpectedly NOT empty"
  fi
}

checkGrep() {
  ptn=$1
  ct=`echo "$json" | grep -c "$ptn"`
  if [ "$ct" -eq 0 ]; then
    error=1
    echo "    ERROR: found zero occurences of '$ptn' in json"
  fi
}

checkCount() {
  ct1=$1
  ct2=$2
  if [ "$ct1" -ne "$ct2" ]; then
    error=1
    echo "    ERROR: expected counts do not match = $ct1 $ct2"
  fi
}

#
# Test basic concept retrieval
#
get "TEST basic concept retrieval" "concept/ncit/C3224"
# check synonyms count
if [[ $(echo "$json" | jq '.synonyms | length') < 10 ]]; then
    error=1
    echo "ERROR: unexpected missing synonyms"
fi 
# check definitions
if [[ $(echo "$json" | jq '.definitions | length') < 2 ]]; then
    error=1
    echo "ERROR: unexpected missing definitions"
fi 
# check properties
if [[ $(echo "$json" | jq '.properties| length') < 5 ]]; then
    error=1
    echo "ERROR: unexpected missing properties"
fi 
# check contributing sources
if [[ $(echo "$json" | jq '.contributingSources | length') < 5 ]]; then
    error=1
    echo "ERROR: unexpected missing contributing sources"
fi 

#
# Test concept parts
#
get "TEST concept part - children" "concept/ncit/C3224/children"
checkNotEmpty "$json"
get "TEST concept part - parents" "concept/ncit/C3224/parents"
checkNotEmpty "$json"
get "TEST concept part - roles" "concept/ncit/C3224/roles"
checkNotEmpty "$json"
get "TEST concept part - associations" "concept/ncit/C3224/associations"
checkNotEmpty "$json"
get "TEST concept part - inverse roles" "concept/ncit/C3224/inverseRoles"
checkNotEmpty "$json"
get "TEST concept part - inverse associations" "concept/ncit/C3224/inverseAssociations"
checkNotEmpty "$json"
get "TEST concept part - inverse maps" "concept/ncit/C3224/maps"
checkNotEmpty "$json"
get "TEST concept part - (empty) disjointWith" "concept/ncit/C3224/disjointWith"
checkEmpty "$json"
get "TEST concept part - disjointWith" "concept/ncit/C3910/disjointWith"
checkNotEmpty "$json"

#
# Test descendants
#
get "TEST concept descendants" "concept/ncit/C3224/descendants?maxLevel=2"
checkNotEmpty "$json"
checkGrep '"level": 2'

#
# Test term search
#
get "TEST search term=melanoma" "concept/ncit/search?term=melanoma&include=minimal&pageSize=11"
checkNotEmpty "$json"
ct=`echo "$json" | jq '.concepts | length' | sed 's/\r//'`
checkCount 11 $ct

#
# Test code search
#
get "TEST search term=C3224" "concept/ncit/search?term=C3224&include=minimal&pageSize=11"
checkNotEmpty "$json"
ct=`echo "$json" | jq '.concepts | length' | sed 's/\r//'`
checkCount 1 $ct

#
# Test property search
#
get "TEST search property" "concept/search?terminology=ncit&term=XAV05295I5&property=fda_unii_code&include=properties"
checkNotEmpty "$json"
ct=`echo "$json" | jq '.concepts | length' | sed 's/\r//'`
checkCount 1 $ct

# ---------------------------------------------------------
# Error check
if [[ $error != 0 ]]; then
  echo ""
  echo "FAILED: at least one error occurred (see log)"
  echo ""
else
  echo ""
  echo "SUCCESS!"
  echo ""
fi
# ---------------------------------------------------------
# Cleanup
#
/bin/rm -f /tmp/x.$$

echo "-----------------------------------------------------"
echo "Finished ..`/bin/date`"
echo "-----------------------------------------------------"
