#!/bin/bash
#
# Script to call EVSRESTAPI to fetch all replacement concepts for an inactive concept code, or a list of such codes.
#

while [[ "$#" -gt 0 ]]; do case $1 in
  --list) list=1;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ]; then
  echo "Usage: $0 <terminology> <code>"
  echo "  e.g. $0 ncit C3224"
  echo "  e.g. $0 ncit C3224,C27789"
  exit 1
fi

terminology=${arr[0]}
code=${arr[1]}

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"
if [[ $code == *","* ]]; then
    echo "list = $code"
	mode="list"
else
	echo "code = $code"
	mode="single"
fi

echo "  Get replacement concepts for $code"

# GET call
if [[ $mode == "list" ]]; then
    curl -v -w "\n%{http_code}" -G "$url/history/$terminology/replacements" --data-urlencode "list=$code" 2> /dev/null > /tmp/x.$$
else
    curl -v -w "\n%{http_code}" -G "$url/history/$terminology/$code/replacements" 2> /dev/null > /tmp/x.$$

fi
if [ $? -ne 0 ]; then
  echo "ERROR: GET failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/history/$terminology/$code returned $status, expected 200"
  exit 1
fi

# write output
#perl -pe 's/200$//' /tmp/x.$$ | jq '. | length' | sed 's/^/    count = /'
echo ""
perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
echo ""

# ---------------------------------------------------------
# Cleanup
#
/bin/rm -f /tmp/x.$$

echo "-----------------------------------------------------"
echo "Finished ...`/bin/date`"
echo "-----------------------------------------------------"
