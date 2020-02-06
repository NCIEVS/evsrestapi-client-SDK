 EVSRESTAPI client SDK: CURL Tutorial
======================================

This tutorial shows how to use raw cURL commands to access NCI Thesaurus content from the EVSRESTAPI.

Prerequisites
* curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
* jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))

The Browser as a terminology server
------------------------------------

The base API url for the EVSRESTAPI is: 

`export API_URL=https://api-evsrest-dev.nci.nih.gov/api/v1`

Run this command before the sample curl calls below as they expect $API_URL to be set.

All the operations described here perform a GET request.

The full documentation of the REST API can be consulted in the Swagger documentation at `http://https://api-evsrest-dev.nci.nih.gov/swagger-ui.html`

Sample cURL Calls
-----------------

The following examples can be types into the command line of any terminal that has cURL and jq installed.

### Get terminologies

Return all loaded terminologies currently hosted by the API.

```
curl "$API_URL/metadata/terminologies" | jq '.'
```

See sample payload data from this call in [`samples/get-terminologies.txt`](samples/get-terminologies.txt)


### Get concept by code (minimal information)

Return minimal concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=minimal" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-minimum.txt`](samples/get-concept-by-code-minimum.txt)


### Get concepts by list of codes (minimal information)

Return minimal concept information for a given terminology and list of codes.

```
curl "$API_URL/concept/ncit?list=C3224,C3910&include=minimal" | jq '.'
```

See sample payload data from this call in See sample payload data from this call in [`samples/get-concepts-by-list-of-codes-minimum.txt`](samples/get-concepts-by-list-of-codes-minimum.txt)



### Get concept by code (summary information)

Return summary concept information for a given terminology and code (note the
'summary' is the default value for include in this context, using 'include=summary'
would produce the same result).

```
curl "$API_URL/concept/ncit/C3224" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-summary.txt`](samples/get-concept-by-code-summary.txt)


### Get concept by code (full information)

Return full concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=full" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-full.txt`](samples/get-concept-by-code-full.txt)


### Get concept by code (custom information)

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
curl "$API_URL/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-custom.txt`](samples/get-concept-by-code-custom.txt)


### Get concept part

Returns sub-part of the concept for a given terminology and code.  NOTE: in the call below,
you can replace "children" in the URL with any of the following and retrieve the 
corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps, or disjointWith.

```
curl "$API_URL/concept/ncit/C3224/children" | jq '.'
```

See the full set of examples for this "style" of call
* [`samples/get-concept-by-code-children.txt`](samples/get-concept-by-code-children.txt)
* [`samples/get-concept-by-code-parents.txt`](samples/get-concept-by-code-parents.txt)
* [`samples/get-concept-by-code-roles.txt`](samples/get-concept-by-code-roles.txt)
* [`samples/get-concept-by-code-associations.txt`](samples/get-concept-by-code-associations.txt)
* [`samples/get-concept-by-code-inverseRoles.txt`](samples/get-concept-by-code-inverseRoles.txt)
* [`samples/get-concept-by-code-inverseAssociations.txt`](samples/get-concept-by-code-inverseAssociations.txt)
* [`samples/get-concept-by-code-maps.txt`](samples/get-concept-by-code-maps.txt)
* [`samples/get-concept-by-code-disjointWith.txt`](samples/get-concept-by-code-disjointWith.txt)


### Get descendants

Return concept descendants information for a given terminology and code. The call
can be constrained by a maxLevel to prevent going deeper than a certain amount.
The level 0 entries in the result are the direct children.

```
curl "$API_URL/concept/ncit/C3224/descendants?maxLevel=4" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-descendants.txt`](samples/get-concept-descendants.txt)


### Get all properties

Return all properties. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed properties (by code).
The fourth call returns summary information for the three listed properties (by label).

```
curl "$API_URL/metadata/ncit/properties" | jq '.'
curl "$API_URL/metadata/ncit/properties?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/properties?list=P201,P203,P205&include=summary" | jq '.'
curl "$API_URL/metadata/ncit/properties?list=OLD_CHILD,OLD_KIND,OLD_STATE&include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-properties.txt`](samples/get-properties.txt)


### Get property by code (or label)

Return property for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P90?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/property/FULL_SYN?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-property.txt`](samples/get-property.txt)


### Get all roles

Return all roles. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed roles (by code).
The fourth call returns summary information for the three listed roles (by label).

```
curl "$API_URL/metadata/ncit/roles" | jq '.'
curl "$API_URL/metadata/ncit/roles?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/roles?list=R113,R114,R115&include=summary" | jq '.'
curl "$API_URL/metadata/ncit/roles?list=Disease_May_Have_Abnormal_Cell,Disease_May_Have_Cytogenetic_Abnormality,Disease_May_Have_Finding&include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-associations.txt`](samples/get-associations.txt)


### Get role by code (or label)

Return role for the specified code or label.

```
curl "$API_URL/metadata/ncit/role/R123?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/role/Chemotherapy_Regimen_Has_Component?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-role.txt`](samples/get-role.txt)


### Get all associations

Return all associations. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code. The
third call returns summary information for the three listed associations (by code).
The fourth call returns summary information for the three listed associations (by label).

```
curl "$API_URL/metadata/ncit/associations" | jq '.'
curl "$API_URL/metadata/ncit/associations?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/associations?list=A1,A2,A3&include=summary" | jq '.'
curl "$API_URL/metadata/ncit/associations?list=Role_Has_Domain,Role_Has_Range,Role_Has_Parent&include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-associations.txt`](samples/get-associations.txt)


### Get association by code (or label)

Return association for the specified code or label.

```
curl "$API_URL/metadata/ncit/association/A10?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/association/Has_CDRH_Parent?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-association.txt`](samples/get-association.txt)


### Find root concepts

Return concept roots for the specified terminology.

```
curl "$API_URL/concept/ncit/roots" | jq '.'
```

See sample payload data from this call in [`samples/find-roots.txt`](samples/find-roots.txt)


### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToRoot" | jq '.'
curl "$API_URL/concept/ncit/C3224/pathsFromRoot" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-root.txt`](samples/get-paths-to-root.txt) and [`samples/get-paths-from-root.txt`](samples/get-paths-from-root.txt)


### Get paths to an ancestor code from a code

Return paths to/from the specified ancestor code from a specified 
terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToAncestor/C2991" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-ancestor.txt`](samples/get-paths-to-ancestor.txt)


### Find concepts by search term

Find concepts matching a search term within a specified terminology. This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?term=melanoma&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term.txt`](samples/find-concepts-by-search-term.txt)


### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Retired_Concept". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&conceptStatus=Retired_Concept&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-retired-concepts.txt`](samples/find-concepts-by-search-term-retired-concepts.txt)


### Find concepts by search term (restrict by contributing source)

Find concepts matching a search term within a specified terminology and
restrict the search results by a contributing source of "CDISC". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-cdisc.txt`](samples/find-concepts-by-search-term-cdisc.txt)


### Find concepts by search term (restrict by definition source)

Find concepts matching a search term within a specified terminology and
restrict the search results by a definition source of "NCI". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-definition-nci.txt`](samples/find-concepts-by-search-term-definition-nci.txt)


### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and
restrict the search results by a synonym source of "NCI" and synonym
termgroup of "PT".

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-nci-pt.txt`](samples/find-concepts-by-search-term-nci-pt.txt)


### Find concepts by search term (where search term is a code)

Find concepts matching a search term within a specified terminology and
restrict the search results using a code as the search term. 

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=C3224" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-C3224.txt`](samples/find-concepts-by-search-term-C3224.txt)


### Find concepts by search term (using type=match)

Find concepts matching a search term within a specified terminology and
a search type of "match". This example uses paging to get only the first 
5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=Lung%20Carcinoma&type=match&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-match.txt`](samples/find-concepts-by-search-term-match.txt)


### Find concepts by search term (using type=startsWith)

Find concepts matching a search term within a specified terminology and
a search type of "startsWith". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzyme&type=startsWith&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-startsWith.txt`](samples/find-concepts-by-search-term-startsWith.txt)


### Find concepts by search term (using type=phrase)

Find concepts matching a search term within a specified terminology and
a search type of "phrase". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=malignant%20melanoma&type=phrase&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-phrase.txt`](samples/find-concepts-by-search-term-phrase.txt)


### Find concepts by search term (using type=fuzzy)

Find concepts matching a search term within a specified terminology and
a search type of "fuzzy". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzymi&type=fuzzy&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-fuzzy.txt`](samples/find-concepts-by-search-term-fuzzy.txt)


### Find concepts by search term (using type=AND)

Find concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=AND&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-AND.txt`](samples/find-concepts-by-search-term-AND.txt)

### Find concepts by search term (using type=OR)

Find concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=OR&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-OR.txt`](samples/find-concepts-by-search-term-OR.txt)


### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology
and include synonyms and highlighted text in the response. This example 
uses paging to get only the first 5 results.

```
curl "$API_URL/concept/search?terminology=ncit&term=melanoma&include=synonyms,highlights&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-highlights.txt`](samples/find-concepts-by-search-term-highlights.txt)


### Find concepts by property

Find concepts matching a search term that is searched within a certain
set of properties. The search results are set to include the property
values so you can easily see the match.  The property setting here can be either
based on code or on label

```
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=fda_unii_code&include=properties" | jq '.'
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=P319&include=properties" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-property.txt`](samples/find-concepts-by-search-property.txt)
