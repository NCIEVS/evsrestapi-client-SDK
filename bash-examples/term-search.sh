#!/bin/bash
#
# Script to call EVSRESTAPI to perform a term search
#
if [ $# -ne 1 ]; then
  echo "Usage: $0 <query>"
  exit 1
fi
query=$1

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "query = $query"
echo ""

# GET call
echo "  Performing search for '$query'"
curl -v -w "\n%{http_code}" -G "$url/search" --data-urlencode "format=clean" --data-urlencode "term=$query" 2> /dev/null > /tmp/x.$$
if [ $? -ne 0 ]; then
  echo "ERROR: GET $url/search failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  cat /tmp/x.$$
  echo "ERROR: GET $url/search returned $status, expected 200"
  exit 1
fi
#=`head -1 /tmp/x.$$ | python -c 'import sys, json; print json.load(sys.stdin)["xxx"]'`
echo ""
perl -pe 's/200$//' /tmp/x.$$

# ---------------------------------------------------------
# Cleanup
#
/bin/rm -f /tmp/x.$$

echo "-----------------------------------------------------"
echo "Finished ..`/bin/date`"
echo "-----------------------------------------------------"
