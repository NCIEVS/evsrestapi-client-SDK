#!/bin/bash
#
# Script to call EVSRESTAPI to fetch all mapsets, individual mapsets, or maps for a specific mapset.
#

include="minimal"

while [[ "$#" -gt 0 ]]; do case $1 in
  --maps) maps=1;;
  --include) include="$2"; shift;;
  --fromRecord) fromRecord="$2"; shift;;
  --pageSize) pageSize="$2"; shift;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 0 ] && [ ${#arr[@]} -ne 1 ]; then
  echo "Usage: $0 [<code>] [--include]"
  echo "          [--fromRecord #] [--pageSize #]"
  echo "  e.g. $0 --include properties"
  echo "  e.g. $0 GO_to_NCIt_Mapping --include properties"
  echo "  e.g. $0 GO_to_NCIt_Mapping --maps --fromRecord 0 --pageSize 10"
  exit 1
fi

if [ ${#arr[@]} -eq 1 ]; then
    mode=mapset
    code=${arr[0]}
else
    mode=mapsets
fi

# import URL into environment from config
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
. $DIR/url.env

echo "-----------------------------------------------------"
echo "Starting ...$(/bin/date)"
echo "-----------------------------------------------------"
echo "url = $url"
if [[ $code ]]; then
    echo "code = $code"
fi
if [[ $members ]]; then
    echo "maps = $maps"
fi
if [[ -n "$include" ]]; then
    echo "include = $include"
fi
echo ""

if [[ -z $fromRecord ]]; then
  fromRecord=0
fi
if [[ -z $pageSize ]]; then
  pageSize=5
fi

# GET call
if [[ $maps ]]; then
    echo "  Get maps for mapset $code (fromRecord=$fromRecord, pageSize=$pageSize)"
    curl -v -w "\n%{http_code}" -G "$url/mapset/$code/maps" --data-urlencode "fromRecord=$fromRecord" --data-urlencode "pageSize=$pageSize" 2> /dev/null > /tmp/x.$$
elif [[ $mode == "mapset" ]]; then
    echo "  Get mapset for $code"
    curl -v -w "\n%{http_code}" -G "$url/mapset/$code" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
else
    echo "  Get all mapsets"
    curl -v -w "\n%{http_code}" -G "$url/mapset" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
fi
if [ $? -ne 0 ]; then
  echo "ERROR: GET failed"
  exit 1
fi

# check status
status=`tail -1 /tmp/x.$$`
if [ $status -ne 200 ]; then
  perl -pe 's/200$//' /tmp/x.$$ | jq '.' | sed 's/^/    /'
  echo "ERROR: GET $url/mapset/$code returned $status, expected 200"
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
