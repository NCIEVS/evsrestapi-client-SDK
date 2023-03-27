#!/bin/bash
#
# Script to call EVSRESTAPI to perform a concept code lookup.
#
file=0
while [[ "$#" -gt 0 ]]; do case $1 in
  --include) include="$2"; shift;;
  --file) file=1;;
  *) arr=( "${arr[@]}" "$1" );;
esac; shift; done

if [ ${#arr[@]} -ne 2 ]; then
  echo "Usage: $0 <terminology> <code>[,<code>] [--include <include>]"
  echo "Usage: $0 <terminology> --file <file of codes>  [--include <include>]"
  echo "  e.g. $0 ncit C3224"
  echo "  e.g. $0 ncit C3224 --include full"
  echo "  e.g. $0 ncit C3224,C2991 --include synonyms"
  echo "  e.g. $0 ncit --file codes.txt"
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
if  [[ $file -eq 1 ]]; then
  filename=$code
  out="$filename.out"
  echo "filename = $filename"
  echo "output   = $out"
else
  echo "code = $code"
fi
echo "include  = $include"
echo ""

# Default include
if [ "x$include" == "x" ]; then
  include=summary
fi

# GET call
if  [[ $file -eq 1 ]]; then
  offset=1
  limit=500
  length=`cat $filename | wc -l`
  bin/rm -f $out >> /dev/null 2>&1
  touch $out
  echo "    count = $length"
  while [ $offset -le $length ]
  do
    total=$[$limit+$offset-1]
	list=`sed "${offset},${total}! d;${total}q" $filename | perl -pe 's/[\r\n]+/,/g;' | perl -pe 's/,$//'`
	len=`echo $list | awk -F"," '{print NF-1}'`
    echo "    offset = $offset, limit = $limit, length = $[$len+1] ... `/bin/date`"

    # make the call
    curl -v -w "\n%{http_code}" -G "$url/concept/$terminology" --data-urlencode "list=$list" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
    if [ $? -ne 0 ]; then
      cat /tmp/x.$$
      echo "ERROR: GET call failed"
      exit 1
    fi
    # check status
    status=`tail -1 /tmp/x.$$`
    if [ $status -ne 200 ]; then
      perl -pe 's/200$//' /tmp/x.$$ | sed 's/^/    /'
      echo "ERROR: GET returned $status, expected 200"
      exit 1
    fi
  
    # write output
    perl -pe 's/200$//' /tmp/x.$$ | jq '.' >> $out

    # update range
 	offset=$[$limit+$offset]
  done

else
  if  [[ $code =~ "," ]]; then
  echo "  Get concepts for $terminology $code:"
    curl -v -w "\n%{http_code}" -G "$url/concept/$terminology" --data-urlencode "list=$code" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
  else
  echo "  Get concept for $terminology $code:"
    curl -v -w "\n%{http_code}" -G "$url/concept/$terminology/$code" --data-urlencode "include=$include" 2> /dev/null > /tmp/x.$$
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
fi




# ---------------------------------------------------------
# Cleanup
#
/bin/rm -f /tmp/x.$$

echo "-----------------------------------------------------"
echo "Finished ...`/bin/date`"
echo "-----------------------------------------------------"
