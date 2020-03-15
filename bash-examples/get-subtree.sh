#!/bin/bash
#
# Script to call EVSRESTAPI to fetch subtree from the root node to the specified code.
#
arr=( "$@" )

if [ ${#arr[@]} -ne 2 ]; then
  echo "Usage: $0 <terminology> <code>"
  echo "  e.g. $0 ncit C3224"
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
echo "code = $code"
echo ""

# if  [[ $maxLevel ]] && [[ ! $maxLevel =~ ^[0-9]+$ ]]; then
#   echo "ERROR: maxLevel must be blank or a number = $maxLevel"
#   exit 1
# fi

# GET call
echo "  Get subtree for $terminology $code:"
curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/subtree" 2> /dev/null > /tmp/x.$$
if [ $? -ne 0 ]; then
  echo "ERROR: GET $url/concept/$terminology/$code/subtree failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/concept/$terminology/$code/subtree returned $status, expected 200"
  exit 1
fi

# write output
perl -pe 's/200$//' /tmp/x.$$ | jq '. | length' | sed 's/^/    count = /'
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
