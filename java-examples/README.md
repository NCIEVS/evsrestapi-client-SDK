# EVSRESTAPI client SDK: Java Tutorial

This tutorial shows how to use a locally defined Java client to interact with the EVSREST API.

## Prerequisites

- JDK 11+ must be installed
- Gradle (7.2+)

The various scripts make use of the `src/main/resources/url.properties` file to define the EVSRESTAPI endpoint that the
java client will connect to.

## Building the Code

Building the java-examples should be as simple as running the following command from
this directory.

```
./gradlew clean build
```

This will invoke Gradle to build the model objects and the clients themselves and then
will also run the unit tests which demonstrate use of the client to make actual API
calls against EVSRESTAPI.

## Sample Java Calls

The following examples are exhibited by various unit tests defined in the code in
`src/test/java`.

* [Get terminologies](#get-terminologies)
* [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)
* [Get concepts by list (minimal information)](#get-concepts-by-list-minimal-information)
* [Get concept by code (summary information)](#get-concept-by-code-summary-information)
* [Get concept by code (full information)](#get-concept-by-code-full-information)
* [Get concept by code (custom include)](#get-concept-by-code-custom-information)
* [Get concept part](#get-concept-part)
* [Get concept descendants](#get-descendants)
* [Get all properties](#get-all-properties)
* [Get property by code (or label)](#get-property-by-code-or-label)
* [Get all qualifiers](#get-all-qualifiers)
* [Get qualifier by code (or label)](#get-qualifier-by-code-or-label)
* [Get qualifier values by code (or label)](#get-qualifier-values-by-code-or-label)
* [Get all roles](#get-all-roles)
* [Get role by code (or label)](#get-role-by-code-or-label)
* [Get all associations](#get-all-associations)
* [Get association by code (or label)](#get-association-by-code-or-label)
* [Get all term types](#get-all-term-types)
* [Get all synonym sources](#get-all-synonym-sources)
* [Get all definition types](#get-all-definition-types)
* [Get definition type by code](#get-definition-type-by-code)
* [Get all synonym types](#get-all-synonym-types)
* [Get synonym type by code](#get-synonym-type-by-code)
* [Find root concepts](#find-root-concepts)
* [Get paths to/from root from a code](#get-paths-tofrom-root-from-a-code)
* [Get paths to an ancestor code from a code](#get-paths-to-an-ancestor-code-from-a-code)
* [Get subtree for code](#get-subtree-for-code)
* [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term)
* [Find concepts by search term (restrict by concept status)](#find-concepts-by-search-term-restrict-by-concept-status)
* [Find concepts by search term (restrict by definition source)](#find-concepts-by-search-term-restrict-by-definition-source)
* [Find concepts by search term (restrict by definition type)](#find-concepts-by-search-term-restrict-by-definition-type)
* [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-by-search-term-restrict-by-synonym-source-and-termgroup)
* [Find concepts by search term (restrict by synonym type)](#find-concepts-by-search-term-restrict-by-synonym-type)
* [Find concepts by search term (where search term is a code)](#find-concepts-by-search-term-where-search-term-is-a-code)
* [Find concepts by search term (using type=match)](#find-concepts-by-search-term-using-type-match)
* [Find concepts by search term (using type=startsWith)](#find-concepts-by-search-term-using-type-startswith)
* [Find concepts by search term (using type=phrase)](#find-concepts-by-search-term-using-type-phrase)
* [Find concepts by search term (using type=fuzzy)](#find-concepts-by-search-term-using-type-fuzzy)
* [Find concepts by search term (using type=AND)](#find-concepts-by-search-term-using-type-and)
* [Find concepts by search term (using type=OR)](#find-concepts-by-search-term-using-type-or)
* [Find concepts by search term (with highlights)](#find-concepts-by-search-term-with-highlights)
* [Find concepts by property](#find-concepts-by-property)
* [Find concepts by subset](#find-concepts-by-subset)
* [Find concepts by SPARQL code](#find-concepts-by-sparql-code)
* [Get all subsets](#get-all-subsets)
* [Get subset by code](#get-subset-by-code)
* [Get subset members by subset code](#get-subset-members-by-code)
* [Get all mapsets](#get-all-mapsets)
* [Get mapset by code](#get-mapset-by-code)
* [Get maps by mapset code](#get-maps-by-mapset-code)
* [Get replacement concepts for an inactive concept code](#get-replacement-concepts-for-an-inactive-concept-code)
* [Get replacement concepts for a list of inactive concept codes](#get-replacement-concepts-for-a-list-of-inactive-concept-codes)
* [Get SPARQL bindings from query](#get-sparql-bindings-from-query)

### Get terminologies

Run the gradle command in the terminal to return all loaded terminologies currently hosted by the API.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTerminologiesTest`

See sample payload data from this call in [`samples/get-terminologies.txt`](samples/get-terminologies.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (minimal information)

Run the gradle command in the terminal to return concept object with minimal information for a specified code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptTest`

See sample payload data from this call in [`samples/get-concept-by-code-minimum.txt`](samples/get-concept-by-code-minimum.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concepts by list (minimal information)

Run the gradle command in the terminal to return concept objects with minimal information for a specified list of
codes.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptsTest`

See sample payload data from this call in See sample payload data from this call in [`samples/get-concepts-by-list-of-codes-minimum.txt`](samples/get-concepts-by-list-of-codes-minimum.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (summary information)

Run the gradle command in the terminal to return summary concept information for a given terminology and code

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptSummaryTest`

See sample payload data from this call in [`samples/get-concept-by-code-summary.txt`](samples/get-concept-by-code-summary.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (full information)

Run the gradle command in the terminal to return full concept information for a given terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptFullTest`

See sample payload data from this call in [`samples/get-concept-by-code-full.txt`](samples/get-concept-by-code-full.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (custom information)

Run the gradle command in the terminal to return custom concept information for a given terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptCustomIncludeTest`

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

See sample payload data from this call in [`samples/get-concept-by-code-custom.txt`](samples/get-concept-by-code-custom.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept part

Run the gradle command in the terminal to return concept children for a given terminology and code. Returns sub-part of
the concept for a given terminology and code. NOTE: in the call below, you can replace "children" in the URL with any
of the following and retrieve the corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getChildrenTest`

See sample payload data from this call in [`samples/get-concept-by-code-children.txt`](samples/get-concept-by-code-children.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get descendants

Run the gradle command in the terminal to return concept descendants information for a given terminology and code. The
call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the
result are
the direct children. The test sets the max level to 4, page size to 100, and fromRecord to 3.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getDescendantsTest`

See sample payload data from this call in [`samples/get-concept-descendants.txt`](samples/get-concept-descendants.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all properties

Run the gradle command in the terminal to return all properties for a given terminology with default include setting (
minimal).

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getPropertiesTest`

See sample payload data from this call in [`samples/get-properties.txt`](samples/get-properties.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get property by code (or label)

Run the gradle command in the terminal to return property for the specified code or label. This example has "include"
set to full

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getPropertyTest`

See sample payload data from this call in [`samples/get-property-with-code.txt`](samples/get-property-with-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all qualifiers

Run the gradle command in the terminal to return all qualifiers for a given terminology with default include setting (
minimal).

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifiersTest`

See sample payload data from this call in [`samples/get-qualifiers.txt`](samples/get-qualifiers.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier by code (or label)

Run the gradle command in the terminal to return qualifier for the specified code or label. This test show the "include"
set to summary

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifierTest`

See sample payload data from this call in [`samples/get-qualifier-with-code.txt`](samples/get-qualifier-with-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier values by code (or label)

Run the gradle command in the terminal to return distinct value set for the qualifier with the specified code or
label.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifierValuesTest`

See sample payload data from this call in [`samples/get-qualifier-values-with-code.txt`](samples/get-qualifier-values-with-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all roles

Run the gradle command in the terminal to return all roles.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRolesTest`

See sample payload data from this call in [`samples/get-roles.txt`](samples/get-roles.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get role by code (or label)

Run the gradle command in the terminal to return a role definition for a specified code. This test demonstrates the "
include" set to full

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRoleTest`

See sample payload data from this call in [`samples/get-role-with-code.txt`](samples/get-role-with-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all associations

Run the gradle command in the terminal to return all associations.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationsTest`

See sample payload data from this call in [`samples/get-associations.txt`](samples/get-associations.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

Run the gradle command in the terminal to return association for the specified code or label. The test shows a comple of
examples of how to parameterize this.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationByCodeTest`

See sample payload data from this call in [`samples/get-association-with-code.txt`](samples/get-association-with-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

Run the gradle command in the terminal to return metadata for all term types for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTermTypesTest`

See sample payload data from this call in [`samples/get-term-types.txt`](samples/get-term-types.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all synonym sources

Run the gradle command in the terminal to return metadata for all synonym sources for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymSourcesTest`

See sample payload data from this call in [`samples/get-synonym-sources.txt`](samples/get-synonym-sources.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all definition types

Run the gradle command in the terminal to find all definition types. Include parameter allowed customizing how much data
to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getDefinitionTypesTest`

See sample payload data from this call in [`samples/get-definition-types.txt`](samples/get-definition-types.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get definition type by code

Run the gradle command in the terminal to find definition type by code. Include parameter allowed customizing how much
data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getDefinitionTypeByCodeTest`

See sample payload data from this call in [`samples/get-definition-type-by-code.txt`](samples/get-definition-type-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all synonym types

Run the gradle command in the terminal to find all synonym types. Include parameter allowed customizing how much data to
return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymTypesTest`

See sample payload data from this call in [`samples/get-synonym-types.txt`](samples/get-synonym-types.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get synonym type by code

Run the gradle command in the terminal to find synonym type by code. Include parameter allowed customizing how much data
to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymTypeByCodeTest`

See sample payload data from this call in [`samples/get-synonym-type-by-code.txt`](samples/get-synonym-type-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find root concepts

Run the gradle command in the terminal to return concept roots for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getRootsTest`

See sample payload data from this call in [`samples/find-roots.txt`](samples/find-roots.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

Run the gradle command in the terminal to return paths to the root concept from a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToRootTest`
`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsFromRootTest`

See sample payload data from this call in:
- [`samples/get-paths-to-root.txt`](samples/get-paths-to-root.txt)
- [`samples/get-paths-from-root.txt`](samples/get-paths-from-root.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

Run the gradle command in the terminal to return paths to the root concept for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToAncestorTest`

See sample payload data from this call in [`samples/get-paths-to-ancestor.txt`](samples/get-paths-to-ancestor.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree for code

Run the gradle command in the terminal to return an entire subtree graph from the root concepts to a specified node.
This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getSubtreeTest`

See sample payload data from this call in [`samples/get-subtree.txt`](samples/get-subtree.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology. This
example uses paging to get only the first 5 results. Include is set to minimal.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term.txt`](samples/find-concepts-by-search-term.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Retired_Concept". This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchFilterByConceptStatusTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-retired-concepts.txt`](samples/find-concepts-by-search-term-retired-concepts.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition source)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and restrict the search results by a definition source of "NCI". This example uses paging to get only the
first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchFilterByDefinitionSourceTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-definition-nci.txt`](samples/find-concepts-by-search-term-definition-nci.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition type)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
restrict the search results by a definition type of "DEFINITION". This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchFilterByDefinitionTypeTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-nci-pt.txt`](samples/find-concepts-by-search-term-nci-pt.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym source and term type)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and restrict the search results by a synonym source of "NCI" and synonymTermType of "PT".

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchFilterBySynonymSourceAndTermTypeTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-synonym-souce-and-term-type.txt`](samples/find-concepts-by-search-term-synonym-souce-and-term-type.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym type)

Run the gradle command in the terminal to find concepts matching a search term with a specified synonym type. This
example restricts results to matching FULL_SYNs.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchFilterBySynonymType`

See sample payload data from this call in [`samples/find-concepts-by-search-term-synonym-type.txt`](samples/find-concepts-by-search-term-synonym-type.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (where search term is a code)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByCodeTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-C3224.txt`](samples/find-concepts-by-search-term-C3224.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type match)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypeMatchTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-match.txt`](samples/find-concepts-by-search-term-match.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type startsWith)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypeStartsWithTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointApiTest - Get search results from NCIT for term = enzyme, type = startsWith
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 41
    timeTaken: 29
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: enzyme
        type: startsWith
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: null
        property: null
        value: null
        synonymSource: null
        synonymType: null
        definitionSource: null
        definitionType: null
        synonymTermType: null
        subset: null
        terminology: [ncit]
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C16554
        name: Enzyme
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: false
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: null
        parents: null
        descendants: null
        associations: null
        inverseAssociations: null
        roles: null
        disjointWith: null
        inverseRoles: null
        maps: null
        paths: null
        extensions: null
    }, class Concept {
        uri: null
        ct: null
        code: C102632
        name: Enzyme-linked Immunosorbent Spot Assay
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: true
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: null
        parents: null
        descendants: null
        associations: null
        inverseAssociations: null
        roles: null
        disjointWith: null
        inverseRoles: null
        maps: null
        paths: null
        extensions: null
    }, class Concept {
        uri: null
        ct: null
        code: C111196
        name: Enzyme Multiplied Immunoassay Technique
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: true
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: null
        parents: null
        descendants: null
        associations: null
        inverseAssociations: null
        roles: null
        disjointWith: null
        inverseRoles: null
        maps: null
        paths: null
        extensions: null
    }, class Concept {
        uri: null
        ct: null
        code: C122205
        name: Enzyme Immunoassay Unit
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: true
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: null
        parents: null
        descendants: null
        associations: null
        inverseAssociations: null
        roles: null
        disjointWith: null
        inverseRoles: null
        maps: null
        paths: null
        extensions: null
    }, class Concept {
        uri: null
        ct: null
        code: C147130
        name: Enzyme Unit per Liter
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: true
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: null
        parents: null
        descendants: null
        associations: null
        inverseAssociations: null
        roles: null
        disjointWith: null
        inverseRoles: null
        maps: null
        paths: null
        extensions: null
    }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type phrase)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and a search type of "phrase". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypePhraseTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-startsWith.txt`](samples/find-concepts-by-search-term-startsWith.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type fuzzy)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and a search type of "fuzzy". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypeFuzzyTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-fuzzy.txt`](samples/find-concepts-by-search-term-fuzzy.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type AND)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypeANDTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-AND.txt`](samples/find-concepts-by-search-term-AND.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type OR)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchByTypeORTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-OR.txt`](samples/find-concepts-by-search-term-OR.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (with highlights)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchWithHighlightsTest`

See sample payload data from this call in [`samples/find-concepts-by-search-term-highlights.txt`](samples/find-concepts-by-search-term-highlights.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by property

Run the gradle command in the terminal to find concepts matching a search term that is searched within a certain set
of properties. The search results are set to include the property values so you can easily see the match. The property
setting here can be either based on code or on label

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchConceptsByPropertyTest`

See sample payload data from this call in [`samples/find-concepts-by-search-property-label.txt`](samples/find-concepts-by-search-property-label.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by subset

Find concepts matching a search term and restrict results to members of one or more subsets. This example searches
within C165258 (e.g. Cellosaurus Disease Terminology).

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.searchConceptsBySubsetTest`

See sample payload data from this call in [`samples/find-concepts-by-search-subset.txt`](samples/find-concepts-by-search-subset.txt)

### Find concepts by SPARQL code

Run the gradle command in the terminal to find concepts for a specified SPARQL query that returns a ?code field.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.findConceptsBySparqlCode`

See sample payload data from this call in [`samples/find-concepts-by-sparql-code.txt`](samples/find-concepts-by-sparql-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all subsets

Run the gradle command in the terminal to get all subsets (with minimal information) for a specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSubsets1Test`

See sample payload data from this call in [`samples/get-all-subsets.txt`](samples/get-all-subsets.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset by code

Run the gradle command in the terminal to get subsets (with summary information) for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.SubsetEndpointsApiTest.getSubsetTest`

See sample payload data from this call in [`samples/get-subset-by-code.txt`](samples/get-subset-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset members by code

Run the gradle command in the terminal to get subset members paging parameters for a specified terminology and
code.

`./gradlew test --tests gov.nih.nci.evs.api.SubsetEndpointsApiTest.getSubsetMembersTest`

See sample payload data from this call in [`samples/get-subset-members-by-code.txt`](samples/get-subset-members-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.
`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetsTest`

See sample payload data from this call in [`samples/get-mapsets.txt`](samples/get-mapsets.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetByCodeTest`

See sample payload data from this call in [`samples/get-mapset-by-code.txt`](samples/get-mapset-by-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetMappingsByCodeTest`

See sample payload data from this call in [`samples/get-maps-by-mapset-code.txt`](samples/get-maps-by-mapset-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get replacement concepts for an inactive concept code

`./gradlew test --tests gov.nih.nci.evs.api.HistoryEndpointsApiTest.getReplacementsTest`

See sample payload data from this call in [`samples/get-replacements-for-concept-code.txt`](samples/get-replacements-for-concept-code.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get replacement concepts for a list of inactive concept codes

`./gradlew test --tests gov.nih.nci.evs.api.HistoryEndpointsApiTest.getReplacementsFromListTest`

See sample payload data from this call in [`samples/get-replacements-for-concept-code-list.txt`](samples/get-replacements-for-concept-code-list.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get SPARQL bindings from query

Run the gradle command in the terminal to get SPARQL bindings for a specified SPARQL query.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointsApiTest.getSPARQLBindingsTest`

See sample payload data from this call in [`samples/get-sparql-bindings.txt`](samples/get-sparql-bindings.txt)

[Back to Top](#evsrestapi-client-sdk-java-tutorial)
