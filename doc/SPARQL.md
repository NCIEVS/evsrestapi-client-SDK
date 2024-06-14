<a name="top" />

Using SPARQL with EVSRESTAPI
============================

EVSRESTAPI now supports search API calls that accept a SPARQL query that can be
run against data loaded from RDF (results from /terminologies call that have 
metadata.loader == 'rdf').

There are two ways to pass SPARQL queries

The first is as the body of a POST form of the /concept/{terminology}/search endpoint.  
When used like this, the query serves as an additional constraint on the concept
search.  The query must SELECT a ?code parameter which is the code.  The endpoint will
return all concepts matching that query and additional criteria.  This allows SPARQL to 
be combined with text searching (and other search filters) to produce a combined result.
This also means the "include" parameter can be used to read as much information about
the concepts returned as desired.

The second is as the body of a POST form of the /concept/search endpoint.  When used like this,
the query can contain any fields and really be any valid SPARQL query.  The result of the
endpoint is an array rendering the bindings for the result of the call.  Effectively this
allows for arbitrary SPARQL querying.  There are some controls to interrupt and block
long-running calls, invalid calls, and other similar situations that may cause problems.

Examples of the two calls described above are shown below.  These examples include demonstrations
of how prefixes and the GRAPH specfication can be used but are effectively computed and overridden
in the backend based on the terminology parameter supplied.  This means simple SPARQL queries can
be supplied without worring about the other constructs.


## SPARQL with concept queries

### Simple concept query

```
cat << EOF > query.txt
SELECT ?code WHERE { ?x a owl:Class . ?x :NHC0 ?code .?x :P108 "Melanoma" }
EOF

curl -X POST "$API_URL/concept/ncit/search?include=minimal" \
  -H 'Content-type: text/plain' \
  -d 'query.txt' | jq '.'
```  
  
### Other side of an association query

### PROBLEM: Missing graph

### PROBLEM: Bad Sparql (bad select field)

### PROBLEM: Takes too long to resolve

### PROBLEM: ... ?








## Standalone SPARQL queries

### Simple query to get code, name (without graph)

### Simple query to get code/name on both sides of an association


### PROBLEM:


