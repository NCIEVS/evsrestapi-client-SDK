#!/bin/bash
#
# Script to call EVSRESTAPI to perform term searches to find concept codes.
#
get=1
while [[ "$#" -gt 0 ]]; do case $1 in
  --include) include="$2"; shift;;
  --type) type="$2"; shift;;
  --fromRecord) fromRecord="$2"; shift;;
  --pageSize) pageSize="$2"; shift;;
  --sparql) sparql="$2"; get=0; shift;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ] && [ $get -eq 1 ]; then
  echo "Usage: $0 <terminology> <term> [--include <include>] [--type <type>]"
  echo "          [--fromRecord #] [--pageSize #] [--sparql <query|file>]"
  echo "  e.g. $0 ncit "'"'"malignant melanoma"'"'
  echo "  e.g. $0 ncit "'"'"malignant melanoma"'"'" --pageSize 5"
  echo "  e.g. $0 ncit "'"'"malignant melanoma"'"'" --include summary"
  echo "  e.g. $0 ncit "'"'"malignant melanoma"'"'" --type AND"
  echo "  e.g. $0 ncit --sparql ../curl-examples/sparql-queries/no-prefix.txt"
  echo "  e.g. $0 ncit melanoma --sparql ../curl-examples/sparql-queries/no-prefix.txt"
  exit 1
fi

terminology=${arr[0]}
term=${arr[1]}

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
echo "terminology = $terminology"
echo "term = $term"
echo "include = $include"
if [ ! -z "$sparql" ]; then
  echo "sparql = $sparql"

  # if sparql is a file, read the contents
  if [ -f "$sparql" ]; then
    sparql="@$sparql"
  fi
fi
echo ""

# Default include
if [[ -z $include ]]; then
  include=minimal
fi
if [[ -z $type ]]; then
  type=contains
fi
if [[ -z $fromRecord ]]; then
  fromRecord=0
fi
if [[ -z $pageSize ]]; then
  pageSize=10
fi

# GET call
echo "  Find concepts for $terminology $term:"
if [[ $get -eq 1 ]]; then
  curl -v -w "\n%{http_code}" -G "$url/concept/search" --data-urlencode "term=$term" --data-urlencode "fromRecord=$fromRecord" --data-urlencode "pageSize=$pageSize" --data-urlencode "terminology=$terminology" --data-urlencode "include=$include" --data-urlencode "type=$type" 2> /dev/null > /tmp/x.$$
  if [ $? -ne 0 ]; then
    echo "ERROR: GET $url/concept/search?terminology=$terminology&term=$term failed"
    exit 1
  fi

# POST call
else
  # Compute optional term clause and urlencode
  termClause=
  if [ ! -z "$term" ]; then
    term=$(echo -n $term | jq -sRr @uri)
    termClause="term=$term&"
  fi
  curl -v -w "\n%{http_code}" -X POST "$url/concept/$terminology/search?${termClause}fromRecord=$fromRecord&pageSize=$pageSize&type=$type&include=$include" -d "$sparql" -H "Content-type: text/plain" 2> /dev/null > /tmp/x.$$
  if [ $? -ne 0 ]; then
    echo "ERROR: POST $url/concept/$terminology/search?term=$term failed"
    exit 1
  fi
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: $url/concept/search?terminology=$terminology&term=term returned $status, expected 200"
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
