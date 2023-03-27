#!/bin/bash
#
# Script to call EVSRESTAPI to perform a property code or label lookup.
#
while [[ "$#" -gt 0 ]]; do case $1 in
  --include) include="$2"; shift;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 1 ] && [ ${#arr[@]} -ne 2 ]; then
  echo "Usage: $0 <terminology> [<propertyCodeOrLabel>[,<propertyCodeOrLabel>]] [--include <include>]"
  echo "  e.g. $0 ncit"
  echo "  e.g. $0 ncit P90"
  echo "  e.g. $0 ncit P90 --include summary"
  echo "  e.g. $0 ncit FULL_SYN --include synonyms"
  echo "  e.g. $0 ncit P317,P319 --include summary"
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
echo "codeOrLabel = $code"
echo "include = $include"
echo ""

# Default include
if [ "x$include" == "x" ]; then
  include=minimal
fi

# GET call
if [[ -z  $code ]]; then
  echo "  Get properties for $terminology:"
  curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/properties" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
elif  [[ $code =~ "," ]]; then
  echo "  Get properties for $terminology $code:"
  curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/properties" --data-urlencode "list=$code" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
else
  echo "  Get property for $terminology $code:"
  curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/property/$code" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
fi

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
