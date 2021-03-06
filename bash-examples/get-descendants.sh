#!/bin/bash
#
# Script to call EVSRESTAPI to lookup descendants for a code.
#
while [[ "$#" -gt 0 ]]; do case $1 in
  --fromRecord) fromRecord="$2"; shift;;
  --pageSize) pageSize="$2"; shift;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ]; then
  echo "Usage: $0 <terminology> <code> [--fromRecord #] [--pageSize #]"
  echo "  e.g. $0 ncit C3224"
  echo "  e.g. $0 ncit C3224 --fromRecord 100 --pageSize 100"
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
echo "fromRecord = $fromRecord"
echo "pageSize = $pageSize"
echo ""

if [[ -z $fromRecord ]]; then
  fromRecord=0
fi
if [[ -z $pageSize ]]; then
  pageSize=50000
fi

# GET call
echo "  Get descendants for $terminology $code:"
curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/descendants" --data-urlencode "fromRecord=$fromRecord" --data-urlencode "pageSize=$pageSize" 2> /dev/null > /tmp/x.$$
if [ $? -ne 0 ]; then
  echo "ERROR: GET $url/concept/$terminology/$code/descendants failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/concept/$terminology/$code/descendants returned $status, expected 200"
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
