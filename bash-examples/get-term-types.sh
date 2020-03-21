#!/bin/bash
#
# Script to call EVSRESTAPI to perform term type lookups
#
while [[ "$#" -gt 0 ]]; do case $1 in
  --include) include="$2"; shift;;
esac; shift; done

arr=(`echo ${list}`);
if [ ${#arr[@]} -ne 1 ]; then
  echo "Usage: $0 <terminology>"
  echo "  e.g. $0 ncit"
fi

terminology=${arr[0]}

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"
echo ""

echo "  Get term types for $terminology:"
curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/termTypes" 2> /dev/null > /tmp/x.$$

if [ $? -ne 0 ]; then
  cat /tmp/x.$$
  echo "ERROR: GET call failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET returned $status, expected 200"
  exit 1
fi

# write output
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
