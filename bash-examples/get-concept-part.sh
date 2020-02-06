#!/bin/bash
#
# Script to call EVSRESTAPI to perform a code lookup.
#
if [ $# -ne 3 ]; then
  echo "Usage: $0 <terminology> <conceptCode> <part>"
  echo "  e.g. $0 ncit C3224 children"
  echo "  e.g. $0 ncit C3224 parents"
  echo "  e.g. $0 ncit C3224 roles"
  echo "  e.g. $0 ncit C3224 associations"
  echo "  e.g. $0 ncit C3224 inverseRoles"
  echo "  e.g. $0 ncit C3224 inverseAssociations"
  echo "  e.g. $0 ncit C3224 maps"
  echo "  e.g. $0 ncit C3910 disjointWith"
  exit 1
fi
terminology=$1
code=$2
part=$3

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"
echo "code = $code"
echo "part = $part"
echo ""


list="children parents roles associations inverseRoles inverseAssociations maps disjointWith"
if [[ ! $list =~ (^|[[:space:]])$part($|[[:space:]]) ]];  then
  echo "ERROR: part has an unexpected value = $part"
  echo "       valid values = $list"
  exit 1
fi

# GET call
echo "  Get $part for $terminology $code:"
curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/$part" 2> /dev/null > /tmp/x.$$
if [ $? -ne 0 ]; then
  echo "ERROR: GET $url/concept/$terminology/$code/$part failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/concept/$terminology/$code/$part returned $status, expected 200"
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
echo "Finished ..`/bin/date`"
echo "-----------------------------------------------------"
