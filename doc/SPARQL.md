# Using SPARQL with EVSRESTAPI

EVSRESTAPI now supports search API calls that accept a SPARQL query that can be
run against terminologies loaded from RDF (e.g. /terminologies entries with
metadata.loader == 'rdf').

These endpoints have been designed so that users do not have to worry about
prefixes or graph names. Those features are handled seamlessly in the background.
API calls that return terminology metadata will provide information about the
namespace prefixes that are used with queries for that terminology so you can
properly use prefixes in your queries.

There are two ways to pass SPARQL queries

1. [POST /concept/{terminology}/search endpoint](#sparql-with-concept-queries):
   When used like this, the query serves as an additional constraint on the concept
   search. The query must SELECT a ?code parameter which is the code. The endpoint will
   return all concepts matching that query and additional criteria. This allows SPARQL to
   be combined with text searching (and other search filters) to produce a combined result.
   This also means the "include" parameter can be used to read as much information about
   the concepts returned as desired.

2. [POST /sparql/{terminology} endpoint](#standalone-sparql-queries):
   the query can contain any fields and really be any valid SPARQL query. The result of the
   endpoint is an array rendering the bindings for the result of the call. Effectively this
   allows for arbitrary SPARQL querying. There are some controls to interrupt and block
   long-running calls, invalid calls, and other similar situations that may cause problems.

## SPARQL with concept queries

Use an API_URL setting like the one below.

`export API_URL=https://api-evsrest.nci.nih.gov/api/v1`

### Simple concept query

This query is appropriate for NCI Thesaurus and finds concepts with a preferred name of "Melanoma".  
Note: the use of `?code` in the select is required for this to work.

```
cat << EOF > query.txt
SELECT ?code WHERE { ?x a owl:Class . ?x :NHC0 ?code .?x :P108 "Melanoma" }
EOF

curl -X POST "$API_URL/concept/ncit/search?include=minimal" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

### Concept query based on a specified association to a specified code

This query is appropriate for NCI Thesaurus and finds concepts with a association of 
"Related_To_Genetic_Biomarker" to "KLK3 Gene". The call also includes a term search
among the set of codes returned by the SPARQL query. All matches must also contain
the word "doubling".

Note: the use of `?code` in the select is required for this to work.

```
cat << EOF > query.txt
SELECT ?code ?name
  { 
    ?concept a owl:Class . 
    ?concept :NHC0 ?code . 
    ?concept :P108 ?name . 
    ?concept ?relationship ?relatedConcept . 
    ?relationship :NHC0 "A13" . 
    ?relationship :P108 "Related_To_Genetic_Biomarker" .
    ?relatedConcept a owl:Class .
    ?relatedConcept :NHC0 "C26585" .
    ?relatedConcept :P108 "KLK3 Gene" .
  }
EOF

curl -X POST "$API_URL/concept/ncit/search?include=minimal&term=doubling" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

### PROBLEM: not using ?code in select

Here is an example to demonstrate the error that occurs when not selecting a ?code column.

```
cat << EOF > query.txt
SELECT ?xxx WHERE { ?x a owl:Class . ?x :NHC0 ?xxx .?x :P108 "Melanoma" }
EOF

curl -X POST "$API_URL/concept/ncit/search?include=minimal" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

### PROBLEM: Bad Sparql

Here is an example to demonstrate the error that occurs when using an invalid sparql query.

```
cat << EOF > query.txt
SELECT ?code WHERE { ?x a owl:Class . ?x :NHC0 ?code .?x :P108 "Melanoma" ABCDEF 123456 }
EOF

curl -X POST "$API_URL/concept/ncit/search?include=minimal" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

[Back to Top](#using-sparql-with-evsrestapi)

## Standalone SPARQL queries

Use an API_URL setting like the one below.

`export API_URL=https://api-evsrest.nci.nih.gov/api/v1`

### Simple query to get code, name

This query is appropriate for NCI Thesaurus and finds the URIs for each class
and the code property that goes along with it. Because the REST call uses paging
parameters, you can select which part of the query to resolve. The results are
an array of the bindings requested.

```
cat << EOF > query.txt
SELECT ?code ?x { ?x a owl:Class . ?x :NHC0 ?code . }
EOF

curl -X POST "$API_URL/sparql/ncit?fromRecord=0&pageSize=10" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

### PROBLEM: Bad Sparql

Here is an example to demonstrate the error that occurs when using an invalid sparql query.

```
cat << EOF > query.txt
SELECT ?code ?x { ?x a owl:Class . ?x :NHC0 ?code . ABCDEF 12345 }
EOF

curl -X POST "$API_URL/sparql/ncit?fromRecord=0&pageSize=10" \
  -H 'Content-type: text/plain' \
  -d '@query.txt' | jq '.'
```

[Back to Top](#using-sparql-with-evsrestapi)
