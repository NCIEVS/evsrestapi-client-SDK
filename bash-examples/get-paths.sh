#!/bin/bash
#
# Script to call EVSRESTAPI to lookup root concepts, paths to the roots,
# and paths to optional ancestors.
#
while [[ "$#" -gt 0 ]]; do case $1 in
  --include) include="$2"; shift;;
  --anc) ancCode="$2"; shift;;
  --from) fromFlag=1;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ] && [ ${#arr[@]} -ne 1 ]; then
  echo "Usage: $0 <terminology> [<code>] [--anc <ancestorCode>] [--from]"
  echo "          [--include <include>]"
  echo "  e.g. $0 ncit"
  echo "  e.g. $0 ncit C3224"
  echo "  e.g. $0 ncit C3224 --from"
  echo "  e.g. $0 ncit C3224 --anc C2991"
  echo "  e.g. $0 ncit C3224 --anc C2991 --include summary"
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
echo "ancestor code = $ancCode"
echo "include = $include"
echo ""

# Default include
if [ "x$include" == "x" ]; then
  include=minimal
fi

# GET call
if [[ -z $code ]]; then
  echo "  Get root codes"
  curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/roots" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
elif [[ ! -z $ancCode ]]; then
  echo "  Get paths to ancestor codes"
  curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/pathsToAncestor/$ancCode" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
elif [[ $fromFlag ]]; then
  echo "  Get paths from root concept"
  curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/pathsFromRoot" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
else
  echo "  Get paths to root concept"
  curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code/pathsToRoot" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
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
