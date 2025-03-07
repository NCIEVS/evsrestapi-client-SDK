# EVSRESTAPI client SDK: CURL Tutorial

This tutorial shows how to use raw cURL commands to access NCI Thesaurus content from the EVSRESTAPI.

## Prerequisites

- curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
- jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))

The base API url for the EVSRESTAPI is:

`export API_URL=https://api-evsrest.nci.nih.gov/api/v1`

Run this command before the sample curl calls below as they expect $API_URL to be set.
NOTE: "dev" URLs are only accessible while behind the NIH firewall.

All the operations described here perform a GET request.

The full documentation of the REST API can be consulted in the Swagger documentation at <a href="http://https://api-evsrest.nci.nih.gov/swagger-ui.html">http://https://api-evsrest.nci.nih.gov/swagger-ui.html</a>.

## Sample cURL Calls

The following examples can be types into the command line of any terminal that has cURL and jq installed.

- [Get terminologies](#get-terminologies)
- [Get concept by code (minimum information)](#get-concept-by-code-minimal-information)
- [Get concepts by list of codes (minimum information)](#get-concepts-by-list-minimal-information)
- [Get concept by code (summary information)](#get-concept-by-code-summary-information)
- [Get concept by code (full information)](#get-concept-by-code-full-information)
- [Get concept by code (custom include)](#get-concept-by-code-custom-include)
- [Get concept part](#get-concept-part)
- [Get concept descendants](#get-descendants)
- [Get all properties](#get-all-properties)
- [Get property by code (or label)](#get-property-by-code-or-label)
- [Get all qualifiers](#get-all-qualifiers)
- [Get qualifier by code (or label)](#get-qualifier-by-code-or-label)
- [Get qualifier values by code (or label)](#get-qualifier-values-by-code-or-label)
- [Get all roles](#get-all-roles)
- [Get role by code (or label)](#get-role-by-code-or-label)
- [Get all associations](#get-all-associations)
- [Get association by code (or label)](#get-association-by-code-or-label)
- [Get all term types](#get-all-term-types)
- [Get all synonym sources](#get-all-synonym-sources)
- [Get all definition types](#get-all-definition-types)
- [Get definition type by code](#get-definition-type-by-code)
- [Get all synonym types](#get-all-synonym-types)
- [Get synonym type by code](#get-synonym-type-by-code)
- [Find root concepts](#find-root-concepts)
- [Get paths to/from root from a code](#get-paths-to-from-root-from-a-code)
- [Get paths to an ancestor code from a code](#get-paths-to-an-ancestor-code-from-a-code)
- [Get subtree for code](#get-subtree-for-code)
- [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term)
- [Find concepts by search term (restrict by concept status)](#find-concepts-by-search-term-restrict-by-concept-status)
- [Find concepts by search term (restrict by definition source)](#find-concepts-by-search-term-restrict-by-definition-source)
- [Find concepts by search term (restrict by definition type)](#find-concepts-by-search-term-restrict-by-definition-type)
- [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-by-search-term-restrict-by-synonym-source-and-termgroup)
- [Find concepts by search term (restrict by synonym type)](#find-concepts-by-search-term-restrict-by-synonym-type)
- [Find concepts by search term (where search term is a code)](#find-concepts-by-search-term-where-search-term-is-a-code)
- [Find concepts by search term (using type=match)](#find-concepts-by-search-term-using-type-match)
- [Find concepts by search term (using type=startsWith)](#find-concepts-by-search-term-using-type-startswith)
- [Find concepts by search term (using type=phrase)](#find-concepts-by-search-term-using-type-phrase)
- [Find concepts by search term (using type=fuzzy)](#find-concepts-by-search-term-using-type-fuzzy)
- [Find concepts by search term (using type=AND)](#find-concepts-by-search-term-using-type-and)
- [Find concepts by search term (using type=OR)](#find-concepts-by-search-term-using-type-or)
- [Find concepts by search term (with highlights)](#find-concepts-by-search-term-with-highlights)
- [Find concepts by property](#find-concepts-by-property)
- [Find concepts by subset](#find-concepts-by-subset)
- [Find concepts by SPARQL code](#find-concepts-by-sparql-code)
- [Get all subsets](#get-all-subsets)
- [Get subset by code](#get-subset-by-code)
- [Get subset members by subset code](#get-subset-members-by-code)
- [Get all mapsets](#get-all-mapsets)
- [Get mapset by code](#get-mapset-by-code)
- [Get maps by mapset code](#get-maps-by-mapset-code)
- [Get replacement concepts for an inactive concept code](#get-replacement-concepts-for-an-inactive-concept-code)
- [Get replacement concepts for a list of inactive concept codes](#get-replacement-concepts-for-a-list-of-inactive-concept-codes)
- [Get SPARQL bindings from query](#get-sparql-bindings-from-query)
- [Find concepts based on associations query](#find-concept-based-on-associations-query)

### Get terminologies

Return all loaded terminologies currently hosted by the API.
Use "terminology", "latest", and "tag" parameters to limit the results. This
sample call finds the latest monthly version of NCI Thesaurus.

```
curl "$API_URL/metadata/terminologies?terminology=ncit&latest=true&tag=monthly" | jq .
```

See sample payload data from this call in [`samples/get-terminologies.txt`](samples/get-terminologies.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concept by code (minimal information)

Return minimal concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=minimal" | jq .
```

See sample payload data from this call in [`samples/get-concept-by-code-minimum.txt`](samples/get-concept-by-code-minimum.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concepts by list (minimal information)

Return minimal concept information for a given terminology and list of codes.

```
curl "$API_URL/concept/ncit?list=C3224,C3910&include=minimal" | jq .
```

See sample payload data from this call in See sample payload data from this call in [`samples/get-concepts-by-list-of-codes-minimum.txt`](samples/get-concepts-by-list-of-codes-minimum.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concept by code (summary information)

Return summary concept information for a given terminology and code (note the
'summary' is the default value for include in this context, using 'include=summary'
would produce the same result).

```
curl "$API_URL/concept/ncit/C3224" | jq .
```

See sample payload data from this call in [`samples/get-concept-by-code-summary.txt`](samples/get-concept-by-code-summary.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concept by code (full information)

Return full concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=full" | jq .
```

See sample payload data from this call in [`samples/get-concept-by-code-full.txt`](samples/get-concept-by-code-full.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concept by code (custom include)

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
curl "$API_URL/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations" | jq .
```

See sample payload data from this call in [`samples/get-concept-by-code-custom.txt`](samples/get-concept-by-code-custom.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get concept part

Returns sub-part of the concept for a given terminology and code. NOTE: in the call below,
you can replace "children" in the URL with any of the following and retrieve the
corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps.

```
curl "$API_URL/concept/ncit/C3224/children" | jq .
curl "$API_URL/concept/ncit/C3224/parents" | jq .
curl "$API_URL/concept/ncit/C3224/roles" | jq .
curl "$API_URL/concept/ncit/C3224/associations" | jq .
curl "$API_URL/concept/ncit/C3224/inverseRoles" | jq .
curl "$API_URL/concept/ncit/C3224/inverseAssociations" | jq .
curl "$API_URL/concept/ncit/C3224/maps" | jq .
```

See the full set of examples for this "style" of call

- [`samples/get-concept-by-code-children.txt`](samples/get-concept-by-code-children.txt)
- [`samples/get-concept-by-code-parents.txt`](samples/get-concept-by-code-parents.txt)
- [`samples/get-concept-by-code-roles.txt`](samples/get-concept-by-code-roles.txt)
- [`samples/get-concept-by-code-associations.txt`](samples/get-concept-by-code-associations.txt)
- [`samples/get-concept-by-code-inverseRoles.txt`](samples/get-concept-by-code-inverseRoles.txt)
- [`samples/get-concept-by-code-inverseAssociations.txt`](samples/get-concept-by-code-inverseAssociations.txt)
- [`samples/get-concept-by-code-maps.txt`](samples/get-concept-by-code-maps.txt)

For disjointWith, a different concept id is needed

```
curl "$API_URL/concept/ncit/C3910/children" | jq .
```

See sample payload data from this call in [`samples/get-concept-by-code-disjointWith.txt`](samples/get-concept-by-code-disjointWith.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get descendants

Return concept descendants information for a given terminology and code. The call
can page the results with standard fromRecord and pageSize parameters. The default
page size is 50000 which works well for all NCI Thesaurus concepts.

```
curl "$API_URL/concept/ncit/C3224/descendants" | jq .
```

See sample payload data from this call in [`samples/get-concept-descendants.txt`](samples/get-concept-descendants.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all properties

Return all properties. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed properties (by code).
The fourth call returns summary information for the three listed properties (by label).

```
curl "$API_URL/metadata/ncit/properties" | jq .
curl "$API_URL/metadata/ncit/properties?include=summary" | jq .
curl "$API_URL/metadata/ncit/properties?list=P201,P203,P205&include=summary" | jq .
curl "$API_URL/metadata/ncit/properties?list=OLD_CHILD,OLD_KIND,OLD_STATE&include=summary" | jq .
```

See sample payload data from this call in:

- [`samples/get-properties.txt`](samples/get-properties.txt)
- [`samples/get-properties-with-summary.txt`](samples/get-properties-with-summary.txt)
- [`samples/get-properties-with-code-list.txt`](samples/get-properties-with-code-list.txt)
- [`samples/get-properties-with-label-list.txt`](samples/get-properties-with-label-list.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get property by code (or label)

Return property for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P302?include=summary" | jq .
curl "$API_URL/metadata/ncit/property/Accepted_Therapeutic_Use_For?include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-property-with-code.txt`](samples/get-property-with-code.txt)
- [`samples/get-property-with-name.txt`](samples/get-property-with-name.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all qualifiers

Return all qualifiers. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed qualifiers (by code).
The fourth call returns summary information for the three listed qualifiers (by label).

```
curl "$API_URL/metadata/ncit/qualifiers" | jq .
curl "$API_URL/metadata/ncit/qualifiers?include=summary" | jq .
curl "$API_URL/metadata/ncit/qualifiers?list=P387,P381&include=summary" | jq .
curl "$API_URL/metadata/ncit/qualifiers?list=def-source,attr&include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-qualifiers.txt`](samples/get-qualifiers.txt)
- [`samples/get-qualifiers-with-summary.txt`](samples/get-qualifiers-with-summary.txt)
- [`samples/get-qualifiers-with-code-list.txt`](samples/get-qualifiers-with-code-list.txt)
- [`samples/get-qualifiers-with-label-list.txt`](samples/get-qualifiers-with-label-list.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

```
curl "$API_URL/metadata/ncit/qualifier/P387?include=summary" | jq .
curl "$API_URL/metadata/ncit/qualifier/go-id?include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-qualifier-with-code.txt`](samples/get-qualifier-with-code.txt)
- [`samples/get-qualifier-with-label.txt`](samples/get-qualifier-with-label.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get qualifier values by code (or label)

Return qualifier values for the specified code or label.

```
curl "$API_URL/metadata/ncit/qualifier/P390/values" | jq .
curl "$API_URL/metadata/ncit/qualifier/go-source/values" | jq .
```

See sample payload data from this call in:
- [`samples/get-qualifier-values-with-code.txt`](samples/get-qualifier-values-with-code.txt)
- [`samples/get-qualifier-values-with-label.txt`](samples/get-qualifier-values-with-label.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all roles

Return all roles. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed roles (by code).
The fourth call returns summary information for the three listed roles (by label).

```
curl "$API_URL/metadata/ncit/roles" | jq .
curl "$API_URL/metadata/ncit/roles?include=summary" | jq .
curl "$API_URL/metadata/ncit/roles?list=R113,R114,R115&include=summary" | jq .
curl "$API_URL/metadata/ncit/roles?list=Disease_May_Have_Abnormal_Cell,Disease_May_Have_Cytogenetic_Abnormality,Disease_May_Have_Finding&include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-roles.txt`](samples/get-roles.txt)
- [`samples/get-roles-with-summary.txt`](samples/get-roles-with-summary.txt)
- [`samples/get-roles-with-code-list.txt`](samples/get-roles-with-code-list.txt)
- [`samples/get-roles-with-label-list.txt`](samples/get-roles-with-label-list.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get role by code (or label)

Return role for the specified code or label.

```
curl "$API_URL/metadata/ncit/role/R123?include=summary" | jq .
curl "$API_URL/metadata/ncit/role/Chemotherapy_Regimen_Has_Component?include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-role-with-code.txt`](samples/get-role-with-code.txt)
- [`samples/get-role-with-label.txt`](samples/get-role-with-label.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all associations

Return all associations. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code. The
third call returns summary information for the three listed associations (by code).
The fourth call returns summary information for the three listed associations (by label).

```
curl "$API_URL/metadata/ncit/associations" | jq .
curl "$API_URL/metadata/ncit/associations?include=summary" | jq .
curl "$API_URL/metadata/ncit/associations?list=A1,A2,A3&include=summary" | jq .
curl "$API_URL/metadata/ncit/associations?list=Role_Has_Domain,Role_Has_Range,Role_Has_Parent&include=summary" | jq .
```

See sample payload data from this call in
- [`samples/get-associations.txt`](samples/get-associations.txt)
- [`samples/get-associations-with-summary.txt`](samples/get-associations-with-summary.txt)
- [`samples/get-associations-with-code-list.txt`](samples/get-associations-with-code-list.txt)
- [`samples/get-associations-with-label-list.txt`](samples/get-associations-with-label-list.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get association by code (or label)

Return association for the specified code or label.

```
curl "$API_URL/metadata/ncit/association/A10?include=summary" | jq .
curl "$API_URL/metadata/ncit/association/Has_CDRH_Parent?include=summary" | jq .
```

See sample payload data from this call in:
- [`samples/get-association-with-code.txt`](samples/get-association-with-code.txt)
- [`samples/get-association-with-label.txt`](samples/get-association-with-label.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all term types

Return metadata for all term types for the specified terminology.

```
curl "$API_URL/metadata/ncit/termTypes" | jq .
```

See sample payload data from this call in [`samples/get-term-types.txt`](samples/get-term-types.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all synonym sources

Return metadata for all synonym sources for the specified terminology.

```
curl "$API_URL/metadata/ncit/synonymSources" | jq .
```

See sample payload data from this call in [`samples/get-synonym-sources.txt`](samples/get-synonym-sources.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all definition types

Find all definition types. Include parameter allowed customizing how much data to return.

```
curl "$API_URL/metadata/ncit/definitionTypes?include=summary" | jq .
```

See sample payload data from this call in [`samples/get-definition-types.txt`](samples/get-definition-types.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get definition type by code

Find definition type by code. Include parameter allowed customizing how much data to return.

```
curl "$API_URL/metadata/ncit/definitionType/P325?include=summary" | jq .
```

See sample payload data from this call in [`samples/get-definition-type-by-code.txt`](samples/get-definition-type-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all synonym types

Find all synonym types. Include parameter allowed customizing how much data to return.

```
curl "$API_URL/metadata/ncit/synonymTypes?include=summary" | jq .
```

See sample payload data from this call in [`samples/get-synonym-types.txt`](samples/get-synonym-types.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get synonym type by code

Find synonym type by code. Include parameter allowed customizing how much data to return.

```
curl "$API_URL/metadata/ncit/synonymType/P90?include=summary" | jq .
```

See sample payload data from this call in [`samples/get-synonym-type-by-code.txt`](samples/get-synonym-type-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find root concepts

Return concept roots for the specified terminology.

```
curl "$API_URL/concept/ncit/roots" | jq .
```

See sample payload data from this call in [`samples/find-roots.txt`](samples/find-roots.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToRoot" | jq .
curl "$API_URL/concept/ncit/C3224/pathsFromRoot" | jq .
```

See sample payload data from this call in:
- [`samples/get-paths-to-root.txt`](samples/get-paths-to-root.txt)
- [`samples/get-paths-from-root.txt`](samples/get-paths-from-root.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get paths to an ancestor code from a code

Return paths to/from the specified ancestor code from a specified
terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToAncestor/C2991" | jq .
```

See sample payload data from this call in [`samples/get-paths-to-ancestor.txt`](samples/get-paths-to-ancestor.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get subtree for code

Return an entire subtree graph from the root concepts to a specified node. This
call is specifically tuned to support a tree-view based hierarchy browser in a UI.

```
curl "$API_URL/concept/ncit/C3224/subtree" | jq .
curl "$API_URL/concept/ncit/C3224/subtree/children" | jq .
```

See sample payload data from this call in
- [`samples/get-subtree.txt`](samples/get-subtree.txt)
- [`samples/get-subtree-children.txt`](samples/get-subtree-children.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term

Find concepts matching a search term within a specified terminology. This
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?term=melanoma&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term.txt`](samples/find-concepts-by-search-term.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Retired_Concept". This
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&conceptStatus=Retired_Concept&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-retired-concepts.txt`](samples/find-concepts-by-search-term-retired-concepts.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (restrict by definition source)

Find concepts matching a search term within a specified terminology and
restrict the search results by a definition source of "NCI". This
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-definition-nci.txt`](samples/find-concepts-by-search-term-definition-nci.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (restrict by definition type)

Find concepts matching a search term within a specified terminology and
restrict the search results by a definition type of "DEFINITION". This
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=DEFINITION&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-definition-type.txt`](samples/find-concepts-by-search-term-definition-type.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and
restrict the search results by a synonym source of "NCI" and synonym
termgroup of "PT".

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-nci-pt.txt`](samples/find-concepts-by-search-term-nci-pt.txt)

### Find concepts by search term (restrict by synonym type)

Find concepts matching a search term with a specified synonym type. This
example restricts results to matching FULL_SYNs.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-synonym-type.txt`](samples/find-concepts-by-search-term-synonym-type.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (where search term is a code)

Find concepts matching a search term within a specified terminology and
restrict the search results using a code as the search term.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=C3224" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-C3224.txt`](samples/find-concepts-by-search-term-C3224.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=match)

Find concepts matching a search term within a specified terminology and
a search type of "match". This example uses paging to get only the first
5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=Lung%20Carcinoma&type=match&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-match.txt`](samples/find-concepts-by-search-term-match.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=startsWith)

Find concepts matching a search term within a specified terminology and
a search type of "startsWith". This example uses paging to get only the
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzyme&type=startsWith&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-startsWith.txt`](samples/find-concepts-by-search-term-startsWith.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=phrase)

Find concepts matching a search term within a specified terminology and
a search type of "phrase". This example uses paging to get only the
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=malignant%20melanoma&type=phrase&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-phrase.txt`](samples/find-concepts-by-search-term-phrase.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=fuzzy)

Find concepts matching a search term within a specified terminology and
a search type of "fuzzy". This example uses paging to get only the
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzymi&type=fuzzy&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-fuzzy.txt`](samples/find-concepts-by-search-term-fuzzy.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=AND)

Find concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=AND&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-AND.txt`](samples/find-concepts-by-search-term-AND.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (using type=OR)

Find concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=OR&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-OR.txt`](samples/find-concepts-by-search-term-OR.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology
and include synonyms and highlighted text in the response. This example
uses paging to get only the first 5 results.

```
curl "$API_URL/concept/search?terminology=ncit&term=melanoma&include=synonyms,highlights&pageSize=5" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-term-highlights.txt`](samples/find-concepts-by-search-term-highlights.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by property

Find concepts matching a search term that is searched within a certain
set of properties. The search results are set to include the property
values so you can easily see the match. The property setting here can be either
based on code or on label

```
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=FDA_UNII_Code&include=properties" | jq .
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=P319&include=properties" | jq .
```

See sample payload data from this call in:
- [`samples/find-concepts-by-search-property-label.txt`](samples/find-concepts-by-search-property-label.txt)
- [`samples/find-concepts-by-search-property-code.txt`](samples/find-concepts-by-search-property-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by subset

Find concepts matching a search term and restrict results to members of
one or more subsets. This example searches within C165258 (e.g. Cellosaurus Disease Terminology).

```
curl "$API_URL/concept/search?terminology=ncit&term=immune&subset=C165258" | jq .
```

See sample payload data from this call in [`samples/find-concepts-by-search-subset.txt`](samples/find-concepts-by-search-subset.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts by SPARQL code

Find concepts for a specified SPARQL query that returns a ?code field.

```{text}
curl -X POST "$API_URL/concept/ncit/search?include=minimal" \
  -H 'Content-type: text/plain' \
  -d '@sparql-queries/code-query.txt' | jq .
```

See sample SPARQL query from this call in [`sparql-queries/code-query.txt`](sparql-queries/code-query.txt)
See sample payload data from this call in [`samples/find-concepts-by-sparql-code.txt`](samples/find-concepts-by-sparql-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Find concepts based on associations query

This query is appropriate for NCI Thesaurus and finds concepts with a relationship of "Related_To_Genetic_Biomarker" to "KLK3 Gene".  
Note: the use of `?code` in the select is required for this to work.

```{text}
curl -X POST "$API_URL/sparql/ncit" \
  -H 'Content-type: text/plain' \
  -d '@sparql-queries/advanced-query.txt' | jq .
```

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all subsets

Get all subsets (with minimal information) associated for a specified terminology.

```
curl "$API_URL/metadata/ncit/subsets" | jq .
```

See sample payload data from this call in [`samples/get-all-subsets.txt`](samples/get-all-subsets.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get subset by code

Get subset with summary information for a specified code.

```
curl "$API_URL/metadata/ncit/subset/C81222?include=summary" | jq .
```

See sample payload data from this call in [`samples/get-subset-by-code.txt`](samples/get-subset-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get subset members by code

Get subset members for a specified subset code. This example uses paging to get only the first 10 results.

```
curl "$API_URL/concept/ncit/subsetMembers/C81222?fromRecord=0&pageSize=10" | jq .
```

See sample payload data from this call in [`samples/get-subset-members-by-code.txt`](samples/get-subset-members-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.

```
curl "$API_URL/mapset?include=minimal" | jq .
```

See sample payload data from this call in [`samples/get-mapsets.txt`](samples/get-mapsets.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

```
curl "$API_URL/mapset/GO_to_NCIt_Mapping?include=properties" | jq .
```

See sample payload data from this call in [`samples/get-mapset-by-code.txt`](samples/get-mapset-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

```
curl "$API_URL/mapset/GO_to_NCIt_Mapping/maps?pageSize=5" | jq .
```

See sample payload data from this call in [`samples/get-maps-by-mapset-code.txt`](samples/get-maps-by-mapset-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get replacement concepts for an inactive concept code

Get the replacement concepts for a specified inactive concept code.

```
curl "$API_URL/history/ncit/C12658/replacements" | jq .
```

See sample payload data from this call in [`samples/get-replacements-for-concept-code.txt`](samples/get-replacements-for-concept-code.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get replacement concepts for a list of inactive concept codes

Get the replacement concepts for a specified list of inactive concept codes.

```
curl "$API_URL/history/ncit/replacements?list=C12658,C13320" | jq .
```

See sample payload data from this call in [`samples/get-replacements-for-concept-code-list.txt`](samples/get-replacements-for-concept-code-list.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)

### Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

```{text}
curl -X POST "$API_URL/sparql/ncit?fromRecord=0&pageSize=100" \
  -H 'Content-type: text/plain' \
  -d '@sparql-queries/bindings-query.txt' | jq .
```

See sample SPARQL query from this call in [`sparql-queries/bindings-query.txt`](sparql-queries/bindings-query.txt)
See sample payload data from this call in [`samples/get-sparql-bindings.txt`](samples/get-sparql-bindings.txt)

[Back to Top](#evsrestapi-client-sdk-curl-tutorial)
