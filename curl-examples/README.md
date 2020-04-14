<a name="top" />

EVSRESTAPI client SDK: CURL Tutorial
======================================

This tutorial shows how to use raw cURL commands to access NCI Thesaurus content from the EVSRESTAPI.

Prerequisites
* curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
* jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))

The base API url for the EVSRESTAPI is: 

`export API_URL=https://api-evsrest-dev.nci.nih.gov/api/v1`

Run this command before the sample curl calls below as they expect $API_URL to be set.
NOTE: "dev" URLs are only accessible while behind the NIH firewall.

All the operations described here perform a GET request.

The full documentation of the REST API can be consulted in the Swagger documentation at <a href="http://https://api-evsrest-dev.nci.nih.gov/swagger-ui.html">http://https://api-evsrest-dev.nci.nih.gov/swagger-ui.html</a>.

Sample cURL Calls
-----------------

The following examples can be types into the command line of any terminal that has cURL and jq installed.

- [Get terminologies](#get-terminologies)
- [Get concept by code (minimum information)](#get-concept-by-code)
- [Get concepts by list of codes (minimum information)](#get-concepts-by-list)
- [Get concept by code (summary information)](#get-concept-by-code-summary)
- [Get concept by code (full information)](#get-concept-by-code-full)
- [Get concept by code (custom include)](#get-concept-by-code-custom)
- [Get concept part](#get-concept-part)
- [Get concept descendants](#get-descendants)
- [Get all properties](#get-properties)
- [Get property by code (or label)](#get-property)
- [Get property axiom qualifiers by code (or label)](#get-property-aq)
- [Get all roles](#get-roles)
- [Get role by code (or label)](#get-role)
- [Get all associations](#get-associations)
- [Get association by code (or label)](#get-association)
- [Get all term types](#get-term-types)
- [Get all contributing sources](#get-contributing-sources)
- [Find root concepts](#get-roots)
- [Get paths to/from root from a code](#get-paths)
- [Get paths to an ancestor from a code](#get-paths-ancestor)
- [Get subtree](#get-subtree)
- [Find concepts by search term (use paging to get only first 5 results)](#find-concepts)
- [Find concepts by search term (restrict by concept status)](#find-concepts-restrict-concept-status)
- [Find concepts by search term (restrict by contributing source)](#find-concepts-restrict-contributing-source)
- [Find concepts by search term (restrict by definition source)](#find-concepts-restrict-concept-definition-source)
- [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-restrict-synonym-source)
- [Find concepts by search term (where term is a code)](#find-concepts-by-code)
- [Find concepts by search term (using type=match)](#find-concepts-match)
- [Find concepts by search term (using type=startsWith)](#find-concepts-startsWith)
- [Find concepts by search term (using type=phrase)](#find-concepts-phrase)
- [Find concepts by search term (using type=fuzzy)](#find-concepts-fuzzy)
- [Find concepts by search term (using type=AND)](#find-concepts-and)
- [Find concepts by search term (using type=OR)](#find-concepts-or)
- [Find concepts by search term (with highlights)](#find-concepts-highlights)
- [Find concepts by property](#find-concepts-property)

<a name="get-terminologies"/>

### Get terminologies

Return all loaded terminologies currently hosted by the API.

```
curl "$API_URL/metadata/terminologies" | jq '.'
```

See sample payload data from this call in [`samples/get-terminologies.txt`](samples/get-terminologies.txt)

[Back to Top](#top)

<a name="get-concept-by-code"/>

### Get concept by code (minimal information)

Return minimal concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=minimal" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-minimum.txt`](samples/get-concept-by-code-minimum.txt)

[Back to Top](#top)

<a name="get-concepts-by-list"/>

### Get concepts by list of codes (minimal information)

Return minimal concept information for a given terminology and list of codes.

```
curl "$API_URL/concept/ncit?list=C3224,C3910&include=minimal" | jq '.'
```

See sample payload data from this call in See sample payload data from this call in [`samples/get-concepts-by-list-of-codes-minimum.txt`](samples/get-concepts-by-list-of-codes-minimum.txt)

[Back to Top](#top)

<a name="get-concept-summary"/>

### Get concept by code (summary information)

Return summary concept information for a given terminology and code (note the
'summary' is the default value for include in this context, using 'include=summary'
would produce the same result).

```
curl "$API_URL/concept/ncit/C3224" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-summary.txt`](samples/get-concept-by-code-summary.txt)

[Back to Top](#top)

<a name="get-concept-full"/>

### Get concept by code (full information)

Return full concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=full" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-full.txt`](samples/get-concept-by-code-full.txt)

[Back to Top](#top)

<a name="get-concept-custom"/>

### Get concept by code (custom information)

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
curl "$API_URL/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-custom.txt`](samples/get-concept-by-code-custom.txt)

[Back to Top](#top)

<a name="get-concept-part"/>

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

[Back to Top](#top)

<a name="get-descendants"/>

### Get descendants

Return concept descendants information for a given terminology and code. The call
can be constrained by a maxLevel to prevent going deeper than a certain amount.
The level 0 entries in the result are the direct children.

```
curl "$API_URL/concept/ncit/C3224/descendants?maxLevel=4" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-descendants.txt`](samples/get-concept-descendants.txt)

[Back to Top](#top)

<a name="get-properties"/>

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

[Back to Top](#top)

<a name="get-property"/>

### Get property by code (or label)

Return property for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P302?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/property/Accepted_Therapeutic_Use_For?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-property.txt`](samples/get-property.txt)

[Back to Top](#top)

<a name="get-property-aq"/>

### Get property axiom qualifiers by code (or label)

Return property axiom qualifiers for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P383/axiomQualifiers" | jq '.'
curl "$API_URL/metadata/ncit/property/term-group/axiomQualifiers" | jq '.'
```

See sample payload data from this call in [`samples/get-property.txt`](samples/get-property-axiomQualifiers.txt)

[Back to Top](#top)

<a name="get-roles"/>

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

See sample payload data from this call in [`samples/get-associations.txt`](samples/get-roless.txt)

[Back to Top](#top)

<a name="get-role"/>

### Get role by code (or label)

Return role for the specified code or label.

```
curl "$API_URL/metadata/ncit/role/R123?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/role/Chemotherapy_Regimen_Has_Component?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-role.txt`](samples/get-role.txt)

[Back to Top](#top)

<a name="get-associations"/>

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

[Back to Top](#top)

<a name="get-association"/>

### Get association by code (or label)

Return association for the specified code or label.

```
curl "$API_URL/metadata/ncit/association/A10?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/association/Has_CDRH_Parent?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-association.txt`](samples/get-association.txt)

[Back to Top](#top)

<a name="get-term-types"/>

### Get all term types

Return metadata for all term types for the specified terminology.

```
curl "$API_URL/metadata/ncit/termTypes" | jq '.'
```

See sample payload data from this call in [`samples/get-term-types.txt`](samples/get-term-types.txt)

[Back to Top](#top)

<a name="get-contributing-sources"/>

### Get all contributing sources

Return metadata for all contributing sources for the specified terminology.

```
curl "$API_URL/metadata/ncit/contributingSources" | jq '.'
```

See sample payload data from this call in [`samples/get-contributing-sources.txt`](samples/get-contributing-sources.txt)

[Back to Top](#top)

<a name="get-roots"/>

### Find root concepts

Return concept roots for the specified terminology.

```
curl "$API_URL/concept/ncit/roots" | jq '.'
```

See sample payload data from this call in [`samples/find-roots.txt`](samples/find-roots.txt)

[Back to Top](#top)

<a name="get-paths"/>

### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToRoot" | jq '.'
curl "$API_URL/concept/ncit/C3224/pathsFromRoot" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-root.txt`](samples/get-paths-to-root.txt) and [`samples/get-paths-from-root.txt`](samples/get-paths-from-root.txt)

[Back to Top](#top)

<a name="get-paths-ancestor"/>

### Get paths to an ancestor code from a code

Return paths to/from the specified ancestor code from a specified 
terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToAncestor/C2991" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-ancestor.txt`](samples/get-paths-to-ancestor.txt)

[Back to Top](#top)

<a name="get-subtree"/>

### Get subtree for code

Return an entire subtree graph from the root concepts to a specified node.  This
call is specifically tuned to support a tree-view based hierarchy browser in a UI.

```
curl "$API_URL/concept/ncit/C3224/subtree" | jq '.'
curl "$API_URL/concept/ncit/C3224/subtree/children" | jq '.'
```

See sample payload data from this call in [`samples/get-subtree.txt`](samples/get-subtree.txt) and [`samples/get-subtree-children.txt`](samples/get-subtree-children.txt)

[Back to Top](#top)

<a name="find-concepts"/>

### Find concepts by search term

Find concepts matching a search term within a specified terminology. This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?term=melanoma&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term.txt`](samples/find-concepts-by-search-term.txt)

[Back to Top](#top)

<a name="find-concepts-restrict-concept-status"/>

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Retired_Concept". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&conceptStatus=Retired_Concept&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-retired-concepts.txt`](samples/find-concepts-by-search-term-retired-concepts.txt)

[Back to Top](#top)

<a name="find-concepts-restrict-contributing-source"/>

### Find concepts by search term (restrict by contributing source)

Find concepts matching a search term within a specified terminology and
restrict the search results by a contributing source of "CDISC". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-cdisc.txt`](samples/find-concepts-by-search-term-cdisc.txt)

[Back to Top](#top)

<a name="find-concepts-restrict-definition-source"/>

### Find concepts by search term (restrict by definition source)

Find concepts matching a search term within a specified terminology and
restrict the search results by a definition source of "NCI". This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-definition-nci.txt`](samples/find-concepts-by-search-term-definition-nci.txt)

[Back to Top](#top)

<a name="find-concepts-restrict-synonym-source"/>

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and
restrict the search results by a synonym source of "NCI" and synonym
termgroup of "PT".

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-nci-pt.txt`](samples/find-concepts-by-search-term-nci-pt.txt)

[Back to Top](#top)

<a name="find-concepts-by-code"/>

### Find concepts by search term (where search term is a code)

Find concepts matching a search term within a specified terminology and
restrict the search results using a code as the search term. 

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=C3224" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-C3224.txt`](samples/find-concepts-by-search-term-C3224.txt)

[Back to Top](#top)

<a name="find-concepts-match"/>

### Find concepts by search term (using type=match)

Find concepts matching a search term within a specified terminology and
a search type of "match". This example uses paging to get only the first 
5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=Lung%20Carcinoma&type=match&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-match.txt`](samples/find-concepts-by-search-term-match.txt)

[Back to Top](#top)

<a name="find-concepts-startsWith"/>

### Find concepts by search term (using type=startsWith)

Find concepts matching a search term within a specified terminology and
a search type of "startsWith". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzyme&type=startsWith&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-startsWith.txt`](samples/find-concepts-by-search-term-startsWith.txt)

[Back to Top](#top)

<a name="find-concepts-phrase"/>

### Find concepts by search term (using type=phrase)

Find concepts matching a search term within a specified terminology and
a search type of "phrase". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=malignant%20melanoma&type=phrase&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-phrase.txt`](samples/find-concepts-by-search-term-phrase.txt)

[Back to Top](#top)

<a name="find-concepts-fuzzy"/>

### Find concepts by search term (using type=fuzzy)

Find concepts matching a search term within a specified terminology and
a search type of "fuzzy". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzymi&type=fuzzy&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-fuzzy.txt`](samples/find-concepts-by-search-term-fuzzy.txt)

[Back to Top](#top)

<a name="find-concepts-and"/>

### Find concepts by search term (using type=AND)

Find concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=AND&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-AND.txt`](samples/find-concepts-by-search-term-AND.txt)

[Back to Top](#top)

<a name="find-concepts-or"/>

### Find concepts by search term (using type=OR)

Find concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=OR&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-OR.txt`](samples/find-concepts-by-search-term-OR.txt)

[Back to Top](#top)

<a name="find-concepts-highlights"/>

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology
and include synonyms and highlighted text in the response. This example 
uses paging to get only the first 5 results.

```
curl "$API_URL/concept/search?terminology=ncit&term=melanoma&include=synonyms,highlights&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-highlights.txt`](samples/find-concepts-by-search-term-highlights.txt)

[Back to Top](#top)

<a name="find-concepts-property"/>

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

[Back to Top](#top)
