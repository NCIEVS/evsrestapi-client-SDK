<a name="top" />

EVSRESTAPI client SDK: Java Tutorial
======================================

This tutorial shows how to use a locally defined Java client to interact with the EVSREST API.

Prerequisites
-------------
* JDK 1.8 must be installed ([Download Java](https://www.java.com/en/download/))

The various scripts make use of the `src/main/resources/url.properties` file to define the EVSRESTAPI endpoint that the java client will connect to.

Building the Code
-----------------
Building the java-examples should be as simple as running the following command from
this directory.

```
./gradlew clean build
```

This will invoke Gradle to build the model objects and the clients themselves and then
will also run the unit tests which demonstrate use of the client to make actual API
calls against EVSRESTAPI.

Sample Java Calls
-----------------

The following examples are exhibited by various unit tests defined in the code in 
`src/test/java`.

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
- [Get root concepts](#get-roots)
- [Get paths to/from root from a code](#get-paths)
- [Get paths to an ancestor from a code](#get-paths-ancestor)
- [Get subtree](#get-subtree)
- [Get concepts by search term (use paging to get only first 5 results)](#get-concepts)
- [Get concepts by search term (restrict by concept status)](#get-concepts-restrict-concept-status)
- [Get concepts by search term (restrict by contributing source)](#get-concepts-restrict-contributing-source)
- [Get concepts by search term (restrict by definition source)](#get-concepts-restrict-concept-definition-source)
- [Get concepts by search term (restrict by synonym source and termgroup)](#get-concepts-restrict-synonym-source)
- [Get concepts by search term (where term is a code)](#get-concepts-by-code)
- [Get concepts by search term (using type=match)](#get-concepts-match)
- [Get concepts by search term (using type=startsWith)](#get-concepts-startsWith)
- [Get concepts by search term (using type=phrase)](#get-concepts-phrase)
- [Get concepts by search term (using type=fuzzy)](#get-concepts-fuzzy)
- [Get concepts by search term (using type=AND)](#get-concepts-and)
- [Get concepts by search term (using type=OR)](#get-concepts-or)
- [Get concepts by search term (with highlights)](#get-concepts-highlights)
- [Get concepts by property](#get-concepts-property)

<a name="get-terminologies"/>

### Get terminologies

`MetadataTests.testGetTerminologies()` - Return all loaded terminologies currently hosted by the API.

```
2020-04-28T19:36:53-04:00 INFO  : Get Terminologies
2020-04-28T19:36:53-04:00 INFO  :   base url = https://api-evsrest-dev.nci.nih.gov/api/v1
2020-04-28T19:36:53-04:00 INFO  :   ncit = {"terminology":"ncit","version":"20.04d","date":"April 27, 2020","name":"NCI Thesaurus 20.04d","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_20.04d","latest":true,"tags":{"monthly":"true"}}
```

[Back to Top](#top)

<a name="get-concept-by-code"/>

### Get concept by code (minimal information)

`ConceptTests.getConceptByCode()` - Return concept object with minimal information for a specified code.

```
2020-04-28T19:39:52-04:00 INFO  : Get concept by code - C3224
2020-04-28T19:39:52-04:00 INFO  :   base url = https://api-evsrest-dev.nci.nih.gov/api/v1
2020-04-28T19:39:52-04:00 INFO  :   concept = {"code":"C3224","name":"Melanoma","terminology":"ncit"}
```

[Back to Top](#top)

<a name="get-concepts-by-list"/>

### Get concepts by list of codes (minimal information)

`ConceptTests.getConceptsByListMinimal()` - Return concept objects with minimal information for a specified list of codes.

```
2020-04-28T19:57:47-04:00 INFO  : Get concepts by list - [C3224, C3910]
2020-04-28T19:57:47-04:00 INFO  :   base url = https://api-evsrest-dev.nci.nih.gov/api/v1
2020-04-28T19:57:47-04:00 INFO  :   concepts = [{"code":"C3224","name":"Melanoma","terminology":"ncit"}, {"code":"C3910","name":"Molecular Abnormality","terminology":"ncit"}]
```

<a name="get-concept-summary"/>

### Get concept by code (summary information)

`ConceptTests.getConceptByListSummary()` - Return summary concept information for a given terminology and code

```
curl "$API_URL/concept/ncit/C3224" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-summary.txt`](samples/get-concept-by-code-summary.txt)

[Back to Top](#top)

<a name="get-concept-full"/>

### Get concept by code (full information)

`ConceptTests.getConceptByListFull()` - Return full concept information for a given terminology and code.

```
curl "$API_URL/concept/ncit/C3224?include=full" | jq '.'
```

See sample payload data from this call in [`samples/get-concept-by-code-full.txt`](samples/get-concept-by-code-full.txt)

[Back to Top](#top)

<a name="get-concept-custom"/>

### Get concept by code (custom information)

`ConceptTests.getConceptByListCustom()` - Return custom concept information for a given terminology and code.

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

`ConceptTests.getConceptPart<x>()` - Return concept part information for a given terminology, concept part, and code.

Returns sub-part of the concept for a given terminology, concept part, and code. 

NOTE: in the call below, you can replace "children" in the URL with any of the following and retrieve the 
corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps, or disjointWith.

```
curl "$API_URL/concept/ncit/C3224/children" | jq '.'
```

See the full set of example payload data for this "style" of call
* [`samples/get-concept-by-code-children.txt`](samples/get-concept-by-code-children.txt)
* [`samples/get-concept-by-code-parents.txt`](samples/get-concept-by-code-parents.txt)
* [`samples/get-concept-by-code-roles.txt`](samples/get-concept-by-code-roles.txt)
* [`samples/get-concept-by-code-associations.txt`](samples/get-concept-by-code-associations.txt)
* [`samples/get-concept-by-code-inverseRoles.txt`](samples/get-concept-by-code-inverseRoles.txt)
* [`samples/get-concept-by-code-inverseAssociations.txt`](samples/get-concept-by-code-inverseAssociations.txt)
* [`samples/get-concept-by-code-maps.txt`](samples/get-concept-by-code-maps.txt)
* [`samples/get-concept-by-code-disjointWith.txt`](samples/get-concept-by-code-disjointWith.txt) (using 'C3910' instead of 'C3224')

[Back to Top](#top)

<a name="get-descendants"/>

### Get descendants

`ConceptTests.getDescendants()` - Return concept descendants information for a given terminology and code.

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

`MetadataTests.getProperties()` - Return all properties for a given terminology.

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

`MetadataTests.GetPropertyByCode()` - Return property for the specified code or label.

```
curl "$API_URL/metadata/ncit/property/P90?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/property/FULL_SYN?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-property-by-code.txt`](samples/get-property-by-code.txt)

[Back to Top](#top)

<a name="get-property-aq"/>

### Get property axiom qualifiers by code (or label)

`MetadataTests.GetPropertyByCodeWithAxiomQualifiers()` - Return property for the specified code or label with Axiom Qualifiers.

Return property axiom qualifiers for the specified code or label with Axiom Qualifiers.

```
curl "$API_URL/metadata/ncit/qualifier/P383/values" | jq '.'
curl "$API_URL/metadata/ncit/qualifier/term-group/values" | jq '.'
```

See sample payload data from this call in [`samples/get-property-by-code-with-axiom-qualifiers.txt`](samples/get-property-by-code-with-axiom-qualifiers.txt)

[Back to Top](#top)

<a name="get-roles"/>

### Get all roles

`MetadataTests.GetRoles()` - Return all roles.

Return all roles. The first sample below returns just the names and codes
while the include=summary yields summary level information for each code.
The third call returns summary information for the three listed roles (by code).
The fourth call returns summary information for the three listed roles (by label).

```
curl "$API_URL/metadata/ncit/roles" | jq '.'
curl "$API_URL/metadata/ncit/roles?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/roles?list=R113,R114,R115&include=summary" | jq '.'
curl "$API_URL/metadata/ncit/roles?list=Disease_May_Have_Abnormal_Cell,Disease_May_Have_Cytogenetic_Abnormality,Disease_May_Have_Geting&include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-roles.txt`](samples/get-roles.txt)

[Back to Top](#top)

<a name="get-role"/>

### Get role by code (or label)

`MetadataTests.GetRolesByCode()` - Return all roles by code or label.

Return role for the specified code or label.

```
curl "$API_URL/metadata/ncit/role/R123?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/role/Chemotherapy_Regimen_Has_Component?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-role-by-code-or-label.txt`](samples/get-role-by-code-or-label.txt)

[Back to Top](#top)

<a name="get-associations"/>

### Get all associations

`MetadataTests.GetAssociations()` - Return all associations.

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

`MetadataTests.GetAssociationByCode()` - Return association for the specified code or label.

Return association for the specified code or label.

```
curl "$API_URL/metadata/ncit/association/A10?include=summary" | jq '.'
curl "$API_URL/metadata/ncit/association/Has_CDRH_Parent?include=summary" | jq '.'
```

See sample payload data from this call in [`samples/get-association-by-code.txt`](samples/get-association-by-code.txt)

[Back to Top](#top)

<a name="get-term-types"/>

### Get all term types

`MetadataTests.GetTermTypes()` - Return  metadata for all term types for the specified terminology.

```
curl "$API_URL/metadata/ncit/termTypes" | jq '.'
```

See sample payload data from this call in [`samples/get-term-types.txt`](samples/get-term-types.txt)

[Back to Top](#top)

<a name="get-roots"/>

### Get root concepts

`ConceptTests.GetRoots()` - Return concept roots for the specified terminology.

```
curl "$API_URL/concept/ncit/roots" | jq '.'
```

See sample payload data from this call in [`samples/get-roots.txt`](samples/get-roots.txt)

[Back to Top](#top)

<a name="get-paths"/>

### Get paths to/from root from a code

`ConceptTests.GetPathToRoot()` - Return paths to the root concept from a specified terminology and code.
`ConceptTests.GetPathFromRoot()` - Return paths from the root concept from a specified terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToRoot" | jq '.'
curl "$API_URL/concept/ncit/C3224/pathsFromRoot" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-root.txt`](samples/get-paths-to-root.txt) and [`samples/get-paths-from-root.txt`](samples/get-paths-from-root.txt)

[Back to Top](#top)

<a name="get-paths-ancestor"/>

### Get paths to an ancestor code from a code

`ConceptTests.GetPathToAncestor()` - Return paths from the root concept from a specified terminology and code.

Return paths to/from the specified ancestor code from a specified 
terminology and code.

```
curl "$API_URL/concept/ncit/C3224/pathsToAncestor/C2991" | jq '.'
```

See sample payload data from this call in [`samples/get-paths-to-ancestor.txt`](samples/get-paths-to-ancestor.txt)

[Back to Top](#top)

<a name="get-subtree"/>

### Get subtree for code

`ConceptTests.GetSubtreeForCode()` - Return an entire subtree graph from the root concepts to a specified node.
`ConceptTests.GetSubtreeForCodeNoChildren()` - Return an entire subtree graph from the root concepts to a specified node, without children.

This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

```
curl "$API_URL/concept/ncit/C3224/subtree" | jq '.'
curl "$API_URL/concept/ncit/C3224/subtree/children" | jq '.'
```

See sample payload data from this call in [`samples/get-subtree.txt`](samples/get-subtree.txt) and [`samples/get-subtree-no-children.txt`](samples/get-subtree-no-children.txt)

[Back to Top](#top)

<a name="get-concepts"/>

### Get concepts by search term

`ConceptTests.GetConceptBySearchTerm()` - Get concepts matching a search term within a specified terminology.

Get concepts matching a search term within a specified terminology. This 
example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?term=melanoma&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term.txt`](samples/get-concepts-by-search-term.txt)

[Back to Top](#top)

<a name="get-concepts-restrict-concept-status"/>

### Get concepts by search term (restrict by concept status)

`ConceptTests.GetConceptBySearchTermConceptStatus()` - Get concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Header_Concept". This example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&conceptStatus=Header_Concept&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-header-concepts.txt`](samples/get-concepts-by-search-term-header-concepts.txt)

[Back to Top](#top)

<a name="get-concepts-restrict-contributing-source"/>

### Get concepts by search term (restrict by contributing source)

`ConceptTests.GetConceptBySearchTermContributingSource()` - Get concepts matching a search term within a specified terminology and
restrict the search results by a contributing source of "CDISC". This example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-cdisc.txt`](samples/get-concepts-by-search-term-cdisc.txt)

[Back to Top](#top)

<a name="get-concepts-restrict-definition-source"/>

### Get concepts by search term (restrict by definition source)

`ConceptTests.GetConceptBySearchTermDefinitionSource()` - Get concepts matching a search term within a specified terminology and
restrict the search results by a definition source of "NCI". This example uses paging to get only the first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-definition-nci.txt`](samples/get-concepts-by-search-term-definition-nci.txt)

[Back to Top](#top)

<a name="get-concepts-restrict-synonym-source"/>

### Get concepts by search term (restrict by synonym source and termgroup)

`ConceptTests.GetConceptBySearchTermSynonymSource()` - Get concepts matching a search term within a specified terminology and
restrict the search results by a synonym source of "NCI" and synonymtermgroup of "PT".

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-nci-pt.txt`](samples/get-concepts-by-search-term-nci-pt.txt)

[Back to Top](#top)

<a name="get-concepts-by-code"/>

### Get concepts by search term (where search term is a code)

`ConceptTests.GetConceptBySearchTermAsCode()` - Get concepts matching a search term within a specified terminology and
restrict the search results using a code as the search term. 

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=C3224" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-C3224.txt`](samples/get-concepts-by-search-term-C3224.txt)

[Back to Top](#top)

<a name="get-concepts-match"/>

### Get concepts by search term (using type=match)

Get concepts matching a search term within a specified terminology and
a search type of "match". This example uses paging to get only the first 
5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=Lung%20Carcinoma&type=match&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-match.txt`](samples/get-concepts-by-search-term-match.txt)

[Back to Top](#top)

<a name="get-concepts-startsWith"/>

### Get concepts by search term (using type=startsWith)

Get concepts matching a search term within a specified terminology and
a search type of "startsWith". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzyme&type=startsWith&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-startsWith.txt`](samples/get-concepts-by-search-term-startsWith.txt)

[Back to Top](#top)

<a name="get-concepts-phrase"/>

### Get concepts by search term (using type=phrase)

Get concepts matching a search term within a specified terminology and
a search type of "phrase". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=malignant%20melanoma&type=phrase&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-phrase.txt`](samples/get-concepts-by-search-term-phrase.txt)

[Back to Top](#top)

<a name="get-concepts-fuzzy"/>

### Get concepts by search term (using type=fuzzy)

Get concepts matching a search term within a specified terminology and
a search type of "fuzzy". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=enzymi&type=fuzzy&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-fuzzy.txt`](samples/get-concepts-by-search-term-fuzzy.txt)

[Back to Top](#top)

<a name="get-concepts-and"/>

### Get concepts by search term (using type=AND)

Get concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=AND&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-AND.txt`](samples/get-concepts-by-search-term-AND.txt)

[Back to Top](#top)

<a name="get-concepts-or"/>

### Get concepts by search term (using type=OR)

Get concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the 
first 5 results.

```
curl "$API_URL/concept/ncit/search?terminology=ncit&term=lentiginous%20melanoma&type=OR&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-OR.txt`](samples/get-concepts-by-search-term-OR.txt)

[Back to Top](#top)

<a name="get-concepts-highlights"/>

### Get concepts by search term (with highlights)

Get concepts matching a search term within a specified terminology
and include synonyms and highlighted text in the response. This example 
uses paging to get only the first 5 results.

```
curl "$API_URL/concept/search?terminology=ncit&term=melanoma&include=synonyms,highlights&pageSize=5" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-term-highlights.txt`](samples/get-concepts-by-search-term-highlights.txt)

[Back to Top](#top)

<a name="get-concepts-property"/>

### Get concepts by property

`ConceptTests.GetConceptByProperty()` - Get concepts matching a search term that is searched within a certain
set of properties. The search results are set to include the propertyvalues so you can easily see the match.  
The property setting here can be either based on code or on label

```
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=fda_unii_code&include=properties" | jq '.'
curl "$API_URL/concept/search?terminology=ncit&term=XAV05295I5&property=P319&include=properties" | jq '.'
```

See sample payload data from this call in [`samples/get-concepts-by-search-property.txt`](samples/get-concepts-by-search-property.txt)

[Back to Top](#top)
