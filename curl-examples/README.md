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


### Get property by code (or label)

Return property for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P90?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/property/FULL_SYN?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-property.txt`](samples/get-property.txt)


### Get role by code (or label)

Return role for the specified code or label.

```
curl "$API_URL/metadata/ncit/role/R123?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/role/Chemotherapy_Regimen_Has_Component?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-role.txt`](samples/get-role.txt)


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

