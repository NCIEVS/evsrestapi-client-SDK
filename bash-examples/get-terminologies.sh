#!/bin/bash
#
# Script to call EVSRESTAPI to lookup terminologies
#

help=0
while [[ "$#" -gt 0 ]]; do case $1 in
  --terminology) terminology="$2"; shift;;
  --tag) tag="$2"; shift;;
  --latest) latest="$2"; shift;;
  --help) help=1;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ $help -eq 1 ] || [ ${#arr[@]} -ne 0 ]; then
  echo "Usage: $0 [--terminology <terminology>] [--latest <true|false>] [--tag <tag>]"
  echo "  e.g. $0 --terminology ncit"
  echo "  e.g. $0 --terminology ncit --latest true"
  echo "  e.g. $0 --terminology ncit --latest true --tag monthly"
  echo "  e.g. $0 --terminology ncim"
  exit 1
fi

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
qp="?x=y"
if [ $terminology ]; then
    echo "terminology = $terminology"
    qp="$qp&terminology=$terminology"
fi
if [ $tag ]; then
    echo "tag = $tag"
    qp="$qp&tag=$tag"
fi
if [ $latest ]; then
    echo "latest = $latest"
    qp="$qp&latest=$latest"
fi
echo ""


# GET call
echo "  Performing terminologies lookup"
curl -v -w "\n%{http_code}" -G "$url/metadata/terminologies$qp" 2> /dev/null > /tmp/x.$$
if [ $? -ne 0 ]; then
  echo "qp=$qp"
  echo "ERROR: GET $url/metadata/terminologies failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/metadata/terminologies returned $status, expected 200"
  exit 1
fi

# Output the result
ct=`perl -pe 's/200$//' /tmp/x.$$ | jq '. | length'`
echo "    count = $ct"
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
