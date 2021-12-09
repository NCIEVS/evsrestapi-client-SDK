#!/bin/bash
#
# Script to call EVSRESTAPI to fetch all subsets, individual subsets, or subset members.
#

while [[ "$#" -gt 0 ]]; do case $1 in
  --members) members=1;;
  --fromRecord) fromRecord="$2"; shift;;
  --pageSize) pageSize="$2"; shift;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ] && [ ${#arr[@]} -ne 1 ]; then
  echo "Usage: $0 <terminology> [<code>] [--members]"
  echo "          [--fromRecord #] [--pageSize #]"
  echo "  e.g. $0 ncit"
  echo "  e.g. $0 ncit C81222"
  echo "  e.g. $0 ncit C81222 --members --fromRecord 0 --pageSize 10"
  exit 1
fi

if [ ${#arr[@]} -ne 1 ]; then
    mode=subset
    terminology=${arr[0]}
    code=${arr[1]}
else
    mode=subsets
    terminology=${arr[0]}
fi

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"
if [[ $code ]]; then
    echo "code = $code"
fi
if [[ $members ]]; then
    echo "members = $members"
fi
echo ""

if [[ -z $fromRecord ]]; then
  fromRecord=0
fi
if [[ -z $pageSize ]]; then
  pageSize=10
fi


# GET call
if [[ $members ]]; then
    echo "  Get subset members (fromRecord=$fromRecord, pageSize=$pageSize)"
    curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/subsetMembers/$code" --data-urlencode "fromRecord=$fromRecord" --data-urlencode "pageSize=$pageSize" 2> /dev/null > /tmp/x.$$
elif [[ $mode == "subset" ]]; then
    echo "  Get subset for $code"
    curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/subset/$code" 2> /dev/null > /tmp/x.$$
else
    echo "  Get all subsets"
    curl -v -w "\n%{http_code}" -G "$url/metadata/$terminology/subsets" 2> /dev/null > /tmp/x.$$
fi
if [ $? -ne 0 ]; then
  echo "ERROR: GET failed"
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
