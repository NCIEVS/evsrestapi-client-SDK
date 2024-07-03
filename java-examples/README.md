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

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all terminologies for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    terminologies = [class Terminology {
    uri: null
    ct: null
    terminology: ncit
    version: 23.10e
    date: October 30, 2023
    name: NCI Thesaurus 23.10e
    description: NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.
    graph: http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus23.10e.owl
    source: http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl
    terminologyVersion: ncit_23.10e
    latest: true
    tags: {monthly=true}
    indexName: concept_ncit_2310e
    objectIndexName: evs_object_ncit_2310e
    metadata: class TerminologyMetadata {
        uri: null
        ct: null
        uiLabel: NCI Thesaurus
        maxVersions: 3
        loader: rdf
        code: NHC0
        conceptStatus: null
        conceptStatuses: [Obsolete_Concept, Header_Concept, Retired_Concept, Concept_Pending_Approval, Provisional_Concept]
        retiredStatusValue: Retired_Concept
        preferredName: P108
        relationshipToTarget: P393
        synonym: [P90, P108, P107]
        synonymTermType: P383
        synonymSource: P384
        synonymCode: P385
        synonymSubSource: P386
        definition: [P325, P97]
        definitionSource: P378
        mapRelation: P393
        map: P375
        mapTarget: P395
        mapTargetTermType: P394
        mapTargetTerminology: P396
        mapTargetTerminologyVersion: P397
        sources: {}
        detailsColumns: {definitions-source=true, definitions-attribution=true, synonyms-source=true, synonyms-termType=true, synonyms-code=true, synonyms-subSource=true}
        hierarchy: true
        history: false
        mapsets: null
        sourceCt: 71
        definitionSourceSet: null
        synonymSourceSet: null
        termTypes: {}
        subsetPrefix: null
        subsetLink: P374
        sourcesToRemove: null
        subsetMember: [A8]
        unpublished: null
        monthlyDb: null
        subset: [C54443]
        licenseText: null
        metaConceptField: null
        preferredTermTypes: null
        codeLabel: NCI Thesaurus Code
        welcomeText: null
        synonymTermGroup: null
        mapTargetTermGroup: null
        termGroups: {}
        preferredTermGroups: null
    }
    sparqlFlag: null
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (minimal information)

Run the gradle command in the terminal to return concept object with minimal information for a specified code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptTest`

```
    [Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get a single concept for code - C3224
    [Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    concept = class Concept {
        uri: null
        ct: null
        code: C3224
        name: Melanoma
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
    }
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concepts by list (minimal information)

Run the gradle command in the terminal to return concept objects with minimal information for a specified list of
codes.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get list of concepts for codes - C3224 & C3910
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    concepts = [class Concept {
    uri: null
    ct: null
    code: C3910
    name: Molecular Abnormality
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
    code: C3224
    name: Melanoma
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
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (summary information)

Run the gradle command in the terminal to return summary concept information for a given terminology and code

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptSummaryTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get a summary concept for code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    concept = class Concept {
    uri: null
    ct: null
    code: C3224
    name: Melanoma
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
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: Melanoma
        normName: null
        highlight: null
        termType: SY
        type: FULL_SYN
        typeCode: null
        source: caDSR
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: Malignant Melanoma
        normName: null
        highlight: null
        termType: SY
        type: FULL_SYN
        typeCode: null
        source: CDISC
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    },
     ...
     ...
     ...
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.
        highlight: null
        code: null
        type: ALT_DEFINITION
        source: NCI-GLOSS
        qualifiers: null
    }, class Definition {
        uri: null
        ct: null
        definition: A malignant neoplasm composed of melanocytes.
        highlight: null
        code: null
        type: ALT_DEFINITION
        source: CDISC
        qualifiers: null
    },
    ...
    ...
    ...
    }]
    history: null
    properties: [class Property {
        uri: null
        ct: null
        code: null
        type: Contributing_Source
        value: CDISC
        highlight: null
        qualifiers: null
        source: null
    }, class Property {
        uri: null
        ct: null
        code: null
        type: Contributing_Source
        value: Cellosaurus
        highlight: null
        qualifiers: null
        source: null
    },
    ...
    ...
    ...
    }]
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
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (full information)

Run the gradle command in the terminal to return full concept information for a given terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptFullTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get a full concept for code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    concept = class Concept {
    uri: null
    ct: null
    code: C3224
    name: Melanoma
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
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: Melanoma
        normName: null
        highlight: null
        termType: SY
        type: FULL_SYN
        typeCode: null
        source: caDSR
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    },
    ...
    ...
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.
        highlight: null
        code: null
        type: ALT_DEFINITION
        source: NCI-GLOSS
        qualifiers: null
    },
    ...
    ...
    }]
    history: [class History {
        uri: null
        ct: null
        code: C3224
        name: null
        action: create
        date: 2003-08-12
        replacementCode: null
        replacementName: null
    },
    ...
    ...
    }]
    properties: [class Property {
        uri: null
        ct: null
        code: null
        type: Contributing_Source
        value: CDISC
        highlight: null
        qualifiers: null
        source: null
    },
    ...
    ...
    }]
    qualifiers: null
    children: [class Concept {
        uri: null
        ct: null
        code: C3802
        name: Amelanotic Melanoma
        terminology: null
        version: null
        level: null
        highlight: null
        highlights: {}
        ...
        ...
    },
    ...
    ...
    }]
    descendants: null
    associations: [class Association {
        uri: null
        ct: null
        code: null
        type: Concept_In_Subset
        relatedCode: C77526
        relatedName: CDISC SEND Terminology
        source: null
        highlight: null
        qualifiers: null
    },
    ...
    ...
    }]
    inverseAssociations: [class Association {
        uri: null
        ct: null
        code: null
        type: Has_GDC_Value
        relatedCode: C178243
        relatedName: Family Cancer History Relative Primary Diagnosis Question
        source: null
        highlight: null
        qualifiers: null
    },
    ...
    ...
    }]
    roles: [class Role {
        uri: null
        ct: null
        code: null
        type: Disease_Excludes_Finding
        relatedCode: C36122
        relatedName: Benign Cellular Infiltrate
        source: null
        highlight: null
        qualifiers: null
    },
    ...
    ...
    }]
    disjointWith: null
    inverseRoles: [class Role {
        uri: null
        ct: null
        code: null
        type: Gene_Product_Malfunction_Associated_With_Disease
        relatedCode: C21390
        relatedName: Beta/Gamma Crystallin Domain-Containing Protein 1
        source: null
        highlight: null
        qualifiers: null
    },
    ...
    ...
    }]
    maps: [class ConceptMap {
        uri: null
        ct: null
        source: null
        sourceName: null
        sourceTermType: null
        sourceCode: null
        sourceTerminology: null
        type: Related To
        rank: null
        group: null
        rule: null
        targetName: 8720/3
        targetTermType: PT
        targetCode: morphology
        targetTerminology: GDC
        targetTerminologyVersion: null
        targetTermGroup: null
    },
    ...
    ...
    }]
    paths: null
    extensions: null
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept by code (custom information)

Run the gradle command in the terminal to return custom concept information for a given terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getConceptCustomIncludeTest`

Return custom concept information for a given terminology and code. To show a range
of options, in this case, the request asks for synonyms, children, maps, and inverse
associations.

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get a custom include concept for code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    concept = class Concept {
    uri: null
    ct: null
    code: C3224
    name: Melanoma
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
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: Melanoma
        normName: null
        highlight: null
        termType: SY
        type: FULL_SYN
        typeCode: null
        source: caDSR
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    },
    ...
    ...
    }]
    definitions: null
    history: null
    properties: null
    qualifiers: null
    children: [class Concept {
        uri: null
        ct: null
        code: C3802
        name: Amelanotic Melanoma
        terminology: null
        version: null
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
    },
    ...
    ...
    }]
    parents: null
    descendants: null
    associations: null
    inverseAssociations: [class Association {
        uri: null
        ct: null
        code: null
        type: Has_GDC_Value
        relatedCode: C178243
        relatedName: Family Cancer History Relative Primary Diagnosis Question
        source: null
        highlight: null
        qualifiers: null
    },
     ...
     ...
    }]
    roles: null
    disjointWith: null
    inverseRoles: null
    maps: [class ConceptMap {
        uri: null
        ct: null
        source: null
        sourceName: null
        sourceTermType: null
        sourceCode: null
        sourceTerminology: null
        type: Related To
        rank: null
        group: null
        rule: null
        targetName: 8720/3
        targetTermType: PT
        targetCode: morphology
        targetTerminology: GDC
        targetTerminologyVersion: null
        targetTermGroup: null
    },
    ...
    ...
    }]
    paths: null
    extensions: null
    }
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get concept part

Run the gradle command in the terminal to return concept children for a given terminology and code. Returns sub-part of 
the concept for a given terminology and code. NOTE: in the call below, you can replace "children" in the URL with any 
of the following and retrieve the corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getChildrenTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get children for code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    children = [class Concept {
    uri: null
    ct: null
    code: C3802
    name: Amelanotic Melanoma
    terminology: null
    version: null
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
    code: C8410
    name: Breast Melanoma
    terminology: null
    version: null
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
},
...
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get descendants

Run the gradle command in the terminal to return concept descendants information for a given terminology and code. The
call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the
result are
the direct children. The test sets the max level to 4, page size to 100, and fromRecord to 3.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getDescendantsTest`

```
    [Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    descendents = [class Concept {
        uri: null
        ct: null
        code: C155311
        name: Advanced Cutaneous Melanoma of the Extremity
        terminology: null
        version: null
        level: 4
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
        code: C171572
        name: Advanced Cutaneous Melanoma
        terminology: null
        version: null
        level: 3
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
        code: C153169
        name: Advanced Melanoma
        terminology: null
        version: null
        level: 2
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
    },
    ...
    ...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all properties

Run the gradle command in the terminal to return all properties for a given terminology with default include setting (
minimal).

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getPropertiesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all properties for a term & list of codes/labels - ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    properties = [class Concept {
    uri: null
    ct: null
    code: NHC0
    name: code
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
    leaf: null
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
    code: P106
    name: Semantic_Type
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
    leaf: null
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
    code: P108
    name: Preferred_Name
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
    leaf: null
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
  },
  ...
  ...
  ...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get property by code (or label)

Run the gradle command in the terminal to return property for the specified code or label. This example has "include"
set to full

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getPropertyTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get full property for code - P216
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    property = class Concept {
    uri: null
    ct: null
    code: P216
    name: BioCarta_ID
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
    leaf: null
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: BioCarta ID
        normName: null
        highlight: null
        termType: null
        type: Display_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: BioCarta_ID
        normName: null
        highlight: null
        termType: null
        type: FULL_SYN
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: BioCarta_ID
        normName: null
        highlight: null
        termType: null
        type: Preferred_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: A property representing the BioCarta ID code for a pathway. It can be used to link a BioCarta pathway reference to the primary pathway information.
        highlight: null
        code: null
        type: DEFINITION
        source: null
        qualifiers: null
    }]
    history: null
    properties: [class Property {
        uri: null
        ct: null
        code: null
        type: Semantic_Type
        value: Conceptual Entity
        highlight: null
        qualifiers: null
        source: null
    }]
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
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all qualifiers

Run the gradle command in the terminal to return all qualifiers for a given terminology with default include setting (
minimal).

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifiersTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all qualifiers for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    qualifiers = [class Concept {
    uri: null
    ct: null
    code: P383
    name: term-group
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
    leaf: null
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
    code: P384
    name: term-source
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
    leaf: null
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
  },
  ....
  ...
  ...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier by code (or label)

Run the gradle command in the terminal to return qualifier for the specified code or label. This test show the "include"
set to summary

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifierTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get qualified for code - P390
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    qualifier = class Concept {
    uri: null
    ct: null
    code: P390
    name: go-source
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
    leaf: null
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: go-source
        normName: null
        highlight: null
        termType: null
        type: Preferred_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: A property representing the organization that is the supplier or owner of each GO_Annotation associated with a concept.
        highlight: null
        code: null
        type: DEFINITION
        source: null
        qualifiers: null
    }]
    history: null
    properties: [class Property {
        uri: null
        ct: null
        code: null
        type: required
        value: true
        highlight: null
        qualifiers: null
        source: null
    }]
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
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get qualifier values by code (or label)

Run the gradle command in the terminal to return distinct value set for the qualifier with the specified code or
label.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getQualifierValuesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get qualifier values for code/name - P390
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -     qualifier values = [CGAP]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all roles

Run the gradle command in the terminal to return all roles.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRolesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all roles for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    roles = [class Concept {
    uri: null
    ct: null
    code: R100
    name: Disease_Has_Associated_Anatomic_Site
    terminology: ncit
    version: 21.06e
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}, class Concept {
    uri: null
    ct: null
    code: R101
    name: Disease_Has_Primary_Anatomic_Site
    terminology: ncit
    version: 21.06e
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}, 
...
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get role by code (or label)

Run the gradle command in the terminal to return a role definition for a specified code. This test demonstrates the "
include" set to full

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRoleTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get the role for code - R123
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    role = class Concept {
    uri: null
    ct: null
    code: R123
    name: Chemotherapy_Regimen_Has_Component
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
    leaf: null
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: Has Component
        normName: null
        highlight: null
        termType: null
        type: Display_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: Chemotherapy_Regimen_Has_Component
        normName: null
        highlight: null
        termType: null
        type: FULL_SYN
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: Chemotherapy_Regimen_Has_Component
        normName: null
        highlight: null
        termType: null
        type: Preferred_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: A role used to specify the component agents which are used in a particular chemotherapy regimen or agent combination. The domain and the range for this role are 'Chemotherapy Regimen or Agent Combination' and 'Drug, Food, Chemical or Biomedical Material', respectively.
        highlight: null
        code: null
        type: DEFINITION
        source: null
        qualifiers: null
    }]
    history: null
    properties: [class Property {
        uri: null
        ct: null
        code: null
        type: Semantic_Type
        value: Conceptual Entity
        highlight: null
        qualifiers: null
        source: null
    }]
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
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all associations

Run the gradle command in the terminal to return all associations.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all associates for terminology - ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -     associations = [class Concept {
    uri: null
    ct: null
    code: A1
    name: Role_Has_Domain
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
    leaf: null
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
    code: A12
    name: Has_Data_Element
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
    leaf: null
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
    code: A13
    name: Related_To_Genetic_Biomarker
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
    leaf: null
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
},
...
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

Run the gradle command in the terminal to return association for the specified code or label. The test shows a comple of
examples of how to parameterize this.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all associates for code - A18
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -     associations = class Concept {
    uri: null
    ct: null
    code: A18
    name: Has_Pharmaceutical_Basic_Dose_Form
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

Run the gradle command in the terminal to return metadata for all term types for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTermTypesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all associates for code - A18
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -     associations = class Concept {
    uri: null
    ct: null
    code: A18
    name: Has_Pharmaceutical_Basic_Dose_Form
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
    leaf: null
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
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all synonym sources

Run the gradle command in the terminal to return metadata for all synonym sources for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymSourcesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all synonyms for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    synonyms = [class ConceptMinimal {
    uri: null
    ct: null
    code: ACC/AHA
    name: American College of Cardiology / American Heart Association
    terminology: ncit
    version: 24.06d
    level: null
}, class ConceptMinimal {
    uri: null
    ct: null
    code: BIOCARTA
    name: BioCarta online maps of molecular pathways, adapted for NCI use
    terminology: ncit
    version: 24.06d
    level: null
}, class ConceptMinimal {
    uri: null
    ct: null
    code: BRIDG
    name: Biomedical Research Integrated Domain Model Group
    terminology: ncit
    version: 24.06d
    level: null
}, class ConceptMinimal {
    uri: null
    ct: null
    code: BRIDG 3.0.3
    name: Biomedical Research Integrated Domain Model Group, version 3.0.3
    terminology: ncit
    version: 24.06d
    level: null
}, class ConceptMinimal {
    uri: null
    ct: null
    code: BRIDG 5.3
    name: Biomedical Research Integrated Domain Model Group, version 5.3
    terminology: ncit
    version: 24.06d
    level: null
}, class ConceptMinimal {
    uri: null
    ct: null
    code: CBDD
    name: Chemical Biology and Drug Development
    terminology: ncit
    version: 24.06d
    level: null
},
...
...
...
}]
```


[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all definition types

Run the gradle command in the terminal to find all definition types. Include parameter allowed customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getDefinitionTypesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all definition types for list of codes - A1 & A12
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    definition types = [class Concept {
    uri: null
    ct: null
    code: P97
    name: DEFINITION
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}, class Concept {
    uri: null
    ct: null
    code: P325
    name: ALT_DEFINITION
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)


### Get definition type by code

Run the gradle command in the terminal to find definition type by code. Include parameter allowed customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getDefinitionTypeByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get the definition type for code - P325
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    definition type = class Concept {
    uri: null
    ct: null
    code: P325
    name: ALT_DEFINITION
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all synonym types

Run the gradle command in the terminal to find all synonym types. Include parameter allowed customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymTypesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all synonym types for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    synonym types = [class Concept {
    uri: null
    ct: null
    code: P108
    name: Preferred_Name
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: Preferred Name
        highlight: null
        termType: null
        type: Display_Name
        source: null
        code: null
        subSource: null
        qualifiers: []
        active: null
    }, class Synonym {
        uri: null
        ct: null
        name: Preferred Name
        highlight: null
        termType: null
        type: FULL_SYN
        source: null
        code: null
        subSource: null
        qualifiers: []
        active: null
    }, class Synonym {
        uri: null
        ct: null
        name: Preferred Term
        highlight: null
        termType: null
        type: FULL_SYN
        source: null
        code: null
        subSource: null
        qualifiers: []
        active: null
    },
    ...
    ...
    ...
}]  
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get synonym type by code

Run the gradle command in the terminal to find synonym type by code. Include parameter allowed customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSynonymTypeByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get synonym for code/name - P90
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    synonym = class Concept {
    uri: null
    ct: null
    code: P90
    name: FULL_SYN
    terminology: ncit
    version: 24.06d
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}
```


[Back to Top](#evsrestapi-client-sdk-java-tutorial)


### Find root concepts

Run the gradle command in the terminal to return concept roots for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getRootsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get root concepts for terminology - ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    root concepts = [class Concept {
    uri: null
    ct: null
    code: C12913
    name: Abnormal Cell
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
    code: C43431
    name: Activity
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
    code: C12219
    name: Anatomic Structure, System, or Substance
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
},
...
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

Run the gradle command in the terminal to return paths to the root concept from a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToRootTest`
`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsFromRootTest`


```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get paths to hierarchy root from code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     paths to root = [[class Concept {
    uri: null
    ct: null
    code: C3224
    name: Melanoma
    terminology: ncit
    version: 23.10e
    level: 0
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
    code: C7058
    name: Melanocytic Neoplasm
    terminology: ncit
    version: 23.10e
    level: 1
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
    code: C4741
    name: Neoplasm by Morphology
    terminology: ncit
    version: 23.10e
    level: 2
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
},
...
...
...
}]
```

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get paths from hierarchy root for code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     paths from root = [[class Concept {
    uri: null
    ct: null
    code: C7057
    name: Disease, Disorder or Finding
    terminology: ncit
    version: 23.10e
    level: 0
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
    code: C2991
    name: Disease or Disorder
    terminology: ncit
    version: 23.10e
    level: 1
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
    code: C3262
    name: Neoplasm
    terminology: ncit
    version: 23.10e
    level: 2
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
    code: C4741
    name: Neoplasm by Morphology
    terminology: ncit
    version: 23.10e
    level: 3
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
},
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

Run the gradle command in the terminal to return paths to the root concept for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToAncestorTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get paths from code to ancestor code - C3224 to C2991
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    paths to ancestor code = [[class Concept {
    uri: null
    ct: null
    code: C3224
    name: Melanoma
    terminology: ncit
    version: 23.10e
    level: 0
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
    code: C7058
    name: Melanocytic Neoplasm
    terminology: ncit
    version: 23.10e
    level: 1
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
    code: C4741
    name: Neoplasm by Morphology
    terminology: ncit
    version: 23.10e
    level: 2
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
},
...
...
...
}]]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree for code

Run the gradle command in the terminal to return an entire subtree graph from the root concepts to a specified node.
This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getSubtreeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get the entire subtree from the root node of code - C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    subtree = [class HierarchyNode {
    uri: null
    ct: null
    code: C12913
    label: Abnormal Cell
    level: null
    leaf: false
    expanded: null
    children: []
}, class HierarchyNode {
    uri: null
    ct: null
    code: C43431
    label: Activity
    level: null
    leaf: false
    expanded: null
    children: []
}, class HierarchyNode {
    uri: null
    ct: null
    code: C12219
    label: Anatomic Structure, System, or Substance
    level: null
    leaf: false
    expanded: null
    children: []
}, class HierarchyNode {
    uri: null
    ct: null
    code: C20633
    label: Biochemical Pathway
    level: null
    leaf: false
    expanded: null
    children: []
}, class HierarchyNode {
    uri: null
    ct: null
    code: C17828
    label: Biological Process
    level: null
    leaf: false
    expanded: null
    children: []
},
...
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology. This
example uses paging to get only the first 5 results. Include is set to minimal.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for - ncit
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 166616
    timeTaken: 187
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: null
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C1000
        name: Recombinant Amphiregulin
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: true
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, class Concept {
        uri: null
        ct: null
        code: C10000
        name: Cyclophosphamide/Fluoxymesterone/Mitolactol/Prednisone/Tamoxifen
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: Obsolete_Concept
        source: null
        leaf: true
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, class Concept {
        uri: null
        ct: null
        code: C100000
        name: Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Stable-Over 12 Hours From Symptom Onset
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: true
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, class Concept {
        uri: null
        ct: null
        code: C100001
        name: Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Stable After Successful Full-Dose Thrombolytic Therapy
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: true
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, class Concept {
        uri: null
        ct: null
        code: C100002
        name: Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Unstable-Over 12 Hours From Symptom Onset
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: true
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }]
}               
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and 
restrict the search results by concept status of "Retired_Concept". This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByConceptStatusTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term =  respiratory, concept status = Retired_Concept
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 18
    timeTaken: 83
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: respiratory
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: [Retired_Concept]
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C83505
        name: Respiratory Acidosis
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: Retired_Concept
        source: null
        leaf: true
        active: false
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, 
    ...
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition source)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and restrict the search results by a definition source of "NCI". This example uses paging to get only the
first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByDefinitionSourceTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = dsDNA, definition source =  NCI
[Test worker] INFO gov.nih.nci.evs.apiSearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 11
    timeTaken: 58
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: dsDNA
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: [NCI]
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C449
        name: DNA
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, 
    ...
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition type)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and 
restrict the search results by a definition type of "DEFINITION". This example uses paging to get only the first 5 
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByDefinitionTypeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = melanoma, definition type =  DEFINITION
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1283
    timeTaken: 133
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: melanoma
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: [DEFINITION]
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C3224
        name: Melanoma
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, 
    ...
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

###  Find concepts by search term (restrict by synonym source and termgroup)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterBySynonymSourceAndTermGroupTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = dsDNA, synonym source =  NCI, synonym term type = PT
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 12
    timeTaken: 84
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: dsDNA
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: [NCI]
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: [PT]
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C449
        name: DNA
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    },
    ...
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym type)
Run the gradle command in the terminal to find concepts matching a search term with a specified synonym type. This
example restricts results to matching FULL_SYNs.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterBySynonymType`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = dsDNA, synonym type = FULL_SYN
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 12
    timeTaken: 114
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: dsDNA
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: [FULL_SYN]
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C449
        name: DNA
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    },
    ...
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)


### Find concepts by search term (where search term is a code)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term code = C3224
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1
    timeTaken: 28
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: C3224
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 25
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
        code: C3224
        name: Melanoma
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
    }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type match)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeMatchTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = enzyme, type = match
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1
    timeTaken: 60
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: enzyme
        type: match
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
    }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type startsWith)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeStartsWithTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = enzyme, type = startsWith
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
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

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypePhraseTest`

```
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest - Get search results from NCIT for term = enzyme, type = phrase
[Test worker] INFO gov.nih.nci.evs.api.SearchEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 223
    timeTaken: 231
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: enzyme
        type: phrase
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C16554
        name: Enzyme
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, class Concept {
        uri: null
        ct: null
        code: C17455
        name: Enzyme Immunoassay
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    },
    ...
    ...
  }]
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type fuzzy)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology
and a search type of "fuzzy". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeFuzzyTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = enzyme, type = phrase
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 251
    timeTaken: 29
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: enzyme
        type: phrase
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
        code: C17455
        name: Enzyme Immunoassay
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
        code: C180567
        name: Enzyme Activity
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
        code: C180669
        name: Enzyme Substrate
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
        code: C18296
        name: Pancreatic Enzyme
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

### Find concepts by search term (using type AND)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeANDTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = malignant melanoma, type = AND
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 149
    timeTaken: 30
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: malignant melanoma
        type: AND
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
        code: C16835
        name: Experimental Malignant Melanoma
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
        code: C60451
        name: Rat Malignant Melanoma
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
        code: C3224
        name: Melanoma
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
        code: C16317
        name: B16 Malignant Melanoma
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
        code: C194143
        name: Malignant Melanoma of Lip
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

### Find concepts by search term (using type OR)

Run the gradle command in the terminal to find concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeORTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = malignant melanoma, type = OR
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 5469
    timeTaken: 30
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: malignant melanoma
        type: OR
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
        code: C16835
        name: Experimental Malignant Melanoma
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
        code: C60451
        name: Rat Malignant Melanoma
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
        code: C3224
        name: Melanoma
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
        code: C16317
        name: B16 Malignant Melanoma
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
        code: C194143
        name: Malignant Melanoma of Lip
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

### Find concepts by search term (with highlights)

Run the gradle command in the terminal to find concepts matching a search term within a specified
terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchWithHighlightsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = XAV05295I5 (with highlights)
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1
    timeTaken: 33
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: XAV05295I5
        type: contains
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
        code: C61305
        name: Sivifene
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

### Find concepts by property

Run the gradle command in the terminal to find concepts matching a search term that is searched within a certain set
of properties. The search results are set to include the property values so you can easily see the match. The property
setting here can be either based on code or on label

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchConceptsByPropertyTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = XAV05295I5, property = FDA_UNII_Code
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1
    timeTaken: 32
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: XAV05295I5
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: null
        property: [FDA_UNII_Code]
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
        code: C61305
        name: Sivifene
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

### Find concepts by subset
Find concepts matching a search term and restrict results to members of one or more subsets. This example searches 
within C165258 (e.g. Cellosaurus Disease Terminology).

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchConceptsBySubsetTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = immune, subset = C165258
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 33
    timeTaken: 122
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: immune
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 5
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: [C165258]
        codeList: []
        terminology: [ncit]
        sparql: null
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C3507
        name: Immune System Disorder
        terminology: ncit
        version: 21.06e
        level: null
        highlight: null
        subsetLink: null
        mapsetLink: null
        conceptStatus: DEFAULT
        source: null
        leaf: false
        active: true
        synonyms: []
        definitions: []
        properties: []
        children: []
        parents: []
        descendants: []
        associations: []
        inverseAssociations: []
        roles: []
        disjointWith: []
        inverseRoles: []
        history: []
        maps: []
        paths: null
    }, 
    ...
    ...
    ...
  }]
}
```

### Find concepts by SPARQL code

Run the gradle command in the terminal to find concepts for a specified SPARQL query that returns a ?code field.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.findConceptsBySparqlCode`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get SPARQL search results from NCIT for query = SELECT ?code
    { GRAPH <http://NCI_T_monthly>
      {
        ?x a owl:Class .
        ?x :NHC0 ?code .
        ?x :P108 "Melanoma"
      }
    }
    [Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
        uri: null
        ct: null
        total: 1
        timeTaken: 18
        parameters: class SearchCriteria {
            uri: null
            ct: null
            term: null
            type: contains
            include: minimal
            sort: null
            ascending: true
            fromRecord: 0
            pageSize: 25
            conceptStatus: null
            property: null
            value: null
            synonymSource: null
            synonymType: null
            definitionSource: null
            definitionType: null
            synonymTermType: null
            subset: null
            codeList: [C3224]
            terminology: [ncit]
        }
        concepts: [class Concept {
            uri: null
            ct: null
            code: C3224
            name: Melanoma
            terminology: ncit
            version: 21.06e
            level: null
            highlight: null
            subsetLink: null
            mapsetLink: null
            conceptStatus: DEFAULT
            source: nulls
            leaf: false
            active: true
            synonyms: null
            definitions: null
            history: null
            properties: null
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
        }]
    }
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all subsets

Run the gradle command in the terminal to get all subsets (with minimal information) for a specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSubsets1Test`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get all subsets for ncit
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -    subsets = [class Concept {
    uri: null
    ct: null
    code: C167405
    name: ACC/AHA EHR Terminology
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
    leaf: null
    synonyms: null
    definitions: null
    history: null
    properties: null
    qualifiers: null
    children: [class Concept {
        uri: null
        ct: null
        code: C191200
        name: ACC/AHA Cardiovascular and Noncardiovascular Complications of COVID-19 Terminology
        terminology: ncit
        version: 23.10e
        level: null
        highlight: null
        highlights: {}
        normName: null
        subsetLink: https://evs.nci.nih.gov/ftp1/ACC-AHA_EHR_Terminology
        mapsetLink: null
        conceptStatus: null
        source: null
        leaf: null
        synonyms: null
        definitions: null
        history: null
        properties: null
        qualifiers: null
        children: [class Concept {
            uri: null
            ct: null
            code: C191389
            name: Appendix 10: End-of-Life Management Terminology
            terminology: ncit
            version: 23.10e
            level: null
            highlight: null
            highlights: {}
            normName: null
            subsetLink: https://evs.nci.nih.gov/ftp1/ACC-AHA_EHR_Terminology
            mapsetLink: null
            conceptStatus: null
            source: null
            leaf: null
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
        },
        ...
        ...
        }]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset by code

Run the gradle command in the terminal to get subsets (with summary information) for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSubset1Test`

```
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest - Get the subset for code - C81222
[Test worker] INFO gov.nih.nci.evs.api.MetadataEndpointsApiTest -     subset = class Concept {
    uri: null
    ct: null
    code: C81222
    name: CDISC ADaM Terminology
    terminology: ncit
    version: 23.10e
    level: null
    highlight: null
    highlights: {}
    normName: null
    subsetLink: https://evs.nci.nih.gov/ftp1/CDISC/ADaM
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: false
    synonyms: [class Synonym {
        uri: null
        ct: null
        name: ADaM
        normName: null
        highlight: null
        termType: PT
        type: FULL_SYN
        typeCode: null
        source: CDISC
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: CDISC ADaM Terminology
        normName: null
        highlight: null
        termType: PT
        type: FULL_SYN
        typeCode: null
        source: NCI
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }, class Synonym {
        uri: null
        ct: null
        name: CDISC ADaM Terminology
        normName: null
        highlight: null
        termType: null
        type: Preferred_Name
        typeCode: null
        source: null
        code: null
        subSource: null
        qualifiers: null
        termGroup: null
    }]
    definitions: [class Definition {
        uri: null
        ct: null
        definition: The terminology subset that includes terms pertaining to the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).
        highlight: null
        code: null
        type: DEFINITION
        source: NCI
        qualifiers: null
    },
    ...
    ...
}]                   
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset members by code

Run the gradle command in the terminal to get subset members paging parameters for a specified terminology and
code.

`./gradlew test --tests gov.nih.nci.evs.api.SubsetEndpointsApiTest.getSubsetMembersTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get subset members for code - C157225
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    subset members = [class Concept {
    uri: null
    ct: null
    code: C16255
    name: Acetylation
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
    code: C157214
    name: Acylation
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
    code: C157206
    name: Adsorption
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
},
...
...
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all mapsets
Get all mapsets. Include parameter allows customizing how much data to return.
`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all mapsets
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    mapsets = [class Concept {
    uri: null
    ct: null
    code: SNOMEDCT_US_2020_09_01_to_ICD10CM_2021_Mappings
    name: SNOMEDCT_US_2020_09_01 to ICD10CM_2021 Mappings
    terminology: snomedct_us
    version: 2020_09_01
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}, class Concept {
    uri: null
    ct: null
    code: SNOMEDCT_US_2020_09_01_to_ICD10_2016_Mappings
    name: SNOMEDCT_US_2020_09_01 to ICD10_2016 Mappings
    terminology: snomedct_us
    version: 2020_09_01
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: null
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}, class Concept {
    uri: null
    ct: null
    code: NCIt_Maps_To_ICD10CM
    name: NCIt_Maps_To_ICD10CM
    terminology: null
    version: 21.06e
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: true
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
},
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get mapset by code
Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get mapset for code - NCIt_Maps_To_ICDO3
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -  mapset = class Concept {
    uri: null
    ct: null
    code: NCIt_Maps_To_ICDO3
    name: NCIt_Maps_To_ICDO3
    terminology: null
    version: 21.06e
    level: null
    highlight: null
    subsetLink: null
    mapsetLink: null
    conceptStatus: null
    source: null
    leaf: null
    active: true
    synonyms: []
    definitions: []
    properties: []
    children: []
    parents: []
    descendants: []
    associations: []
    inverseAssociations: []
    roles: []
    disjointWith: []
    inverseRoles: []
    history: []
    maps: []
    paths: null
}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get maps by mapset code
Get the maps for a specified mapset code.

`./gradlew test --tests gov.nih.nci.evs.api.MapsetEndpointsApiTest.getMapsetByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get mappings for mapsets by code
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    mappings = class ConceptMapResultList {
    uri: null
    ct: null
    total: 305
    timeTaken: null
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: null
        type: null
        include: null
        sort: null
        ascending: null
        fromRecord: 0
        pageSize: 25
        conceptStatus: []
        property: []
        value: null
        synonymSource: []
        synonymType: []
        definitionSource: []
        definitionType: []
        synonymTermType: []
        subset: []
        codeList: []
        terminology: []
        sparql: null
    }
    maps: [class ConceptMap {
        uri: null
        ct: null
        source: GO
        sourceName: ATP hydrolysis activity
        sourceTermType: null
        sourceCode: GO:0016887
        sourceTerminology: null
        sourceTerminologyVersion: null
        sourceLoaded: null
        type: mapsTo
        rank: 1
        group: null
        rule: null
        targetName: ATP Hydrolysis
        targetTermType: null
        targetCode: C19939
        targetTerminology: NCI_Thesaurus
        targetTerminologyVersion: 23.02d
        targetLoaded: null
        targetTermGroup: null
    }, class ConceptMap {
        uri: null
        ct: null
        source: GO
        sourceName: B cell activation
        sourceTermType: null
        sourceCode: GO:0042113
        sourceTerminology: null
        sourceTerminologyVersion: null
        sourceLoaded: null
        type: mapsTo
        rank: 1
        group: null
        rule: null
        targetName: B-Cell Activation
        targetTermType: null
        targetCode: C19255
        targetTerminology: NCI_Thesaurus
        targetTerminologyVersion: 23.02d
        targetLoaded: null
        targetTermGroup: null
    }, 
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get replacement concepts for an inactive concept code

`./gradlew test --tests gov.nih.nci.evs.api.HistoryEndpointsApiTest.getReplacementsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get suggested replacements for code - C4654
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    replacements = [class History {
    uri: null
    ct: null
    code: C12658
    name: Prokaryotic Cell
    action: retire
    date: 2003-08-22
    replacementCode: C19157
    replacementName: Specimen
}]
```
[Back to Top](#evsrestapi-client-sdk-java-tutorial)


### Get replacement concepts for a list of inactive concept codes

`./gradlew test --tests gov.nih.nci.evs.api.HistoryEndpointsApiTest.getReplacementsFromListTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get list of suggested replacements for retired codes - C4654 & C40117
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    suggested replacements = [class History {
    uri: null
    ct: null
    code: C12658
    name: Prokaryotic Cell
    action: retire
    date: 2003-08-22
    replacementCode: C19157
    replacementName: Specimen
}, class History {
    uri: null
    ct: null
    code: C13320
    name: Nose, Nasal Passages
    action: merge
    date: 2003-08-22
    replacementCode: C12756
    replacementName: Nose
}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)


### Get SPARQL bindings from query

Run the gradle command in the terminal to get SPARQL bindings for a specified SPARQL query.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.getSPARQLBindingsTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get SPARQL binding results from query = SELECT ?code ?x { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }
    [Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class MapResultList {
        uri: null
        ct: null
        total: 1000
        timeTaken: null
        parameters: class SearchCriteria {
            uri: null
            ct: null
            term: null
            type: contains
            include: minimal
            sort: null
            ascending: null
            fromRecord: null
            pageSize: null
            conceptStatus: null
            property: null
            value: null
            synonymSource: null
            synonymType: null
            definitionSource: null
            definitionType: null
            synonymTermType: null
            subset: null
            codeList: null
            terminology: null
        }
        results: [{code=C7057, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C7057}, {code=C12219, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12219}, {code=C12913, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12913}, {code=C3910, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C3910}, {code=C20189, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C20189}, {code=C1908, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C1908}, {code=C26548, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C26548}, {code=C12218, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C12218}, {code=C17828, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C17828}, {code=C16612, x=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C16612}]
    }
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)
