EVSRESTAPI client SDK: Java Tutorial
======================================

This tutorial shows how to use a locally defined Java client to interact with the EVSREST API.

Prerequisites
-------------

* JDK 11+ must be installed

The various scripts make use of the `src/main/resources/url.properties` file to define the EVSRESTAPI endpoint that the
java client will connect to.

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
- [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)
- [Get concepts by list (minimal information)](#get-concepts-by-list-minimal-information)
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
- [Get root concepts](#get-root-concepts)
- [Get paths to/from root from a code](#get-paths-to-from-root-from-a-code)
- [Get paths to an ancestor code from a code](#get-paths-to-an-ancestor-code-from-a-code)
- [Get subtree](#get-subtree)
- [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term)
- [Find concepts by search term (restrict by concept status)](#find-concepts-by-search-term-restrict-by-concept-status)
- [Find concepts by search term (restrict by contributing source)](#find-concepts-by-search-term-restrict-by-contributing-source)
- [Find concepts by search term (restrict by definition source)](#find-concepts-by-search-term-restrict-by-definition-source)
- [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-by-search-term-restrict-by-synonym-source-and-termgroup)
- [Find concepts by search term (where search term is a code)](#find-concepts-by-search-term-where-search-term-is-a-code)
- [Find concepts by search term (using type=match)](#find-concepts-by-search-term-using-type-match)
- [Find concepts by search term (using type=startsWith)](#find-concepts-by-search-term-using-type-startswith)
- [Find concepts by search term (using type=phrase)](#find-concepts-by-search-term-using-type-phrase)
- [Find concepts by search term (using type=fuzzy)](#find-concepts-by-search-term-using-type-fuzzy)
- [Find concepts by search term (using type=AND)](#find-concepts-by-search-term-using-type-and)
- [Find concepts by search term (using type=OR)](#find-concepts-by-search-term-using-type-or)
- [Find concepts by search term (with highlights)](#find-concepts-by-search-term-with-highlights)
- [Find concepts by property](#find-concepts-by-property)
- [Get all subsets](#get-all-subsets)
- [Get subset by code](#get-subset-by-code)
- [Get subset members by subset code](#get-subset-members-by-code)

### Get terminologies

Run the gradle command in the terminal to return all loaded terminologies currently hosted by the API.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTerminologiesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all terminologies for ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    terminologies = [class Terminology {
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

### Get concept by code (custom include)

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

### Get concept children

Run the gradle command in the terminal to return concept children for a given terminology and code.

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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all properties for a term & list of codes/labels - ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    properties = [class Concept {
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
}, class Concept {
    uri: null
    ct: null
    code: P90
    name: FULL_SYN
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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get full property for code - P216
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    property = class Concept {
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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all qualifiers for ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    qualifiers = [class Concept {
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
}, class Concept {
    uri: null
    ct: null
    code: P378
    name: Definition Source
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
    code: P381
    name: attribution
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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get qualified for code - P390
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    qualifier = class Concept {
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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get qualifier values for code/name - P390
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     qualifier values = [CGAP]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all roles

Run the gradle command in the terminal to return all roles.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRolesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all roles for ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    roles = [class Concept {
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
    code: R163
    name: Procedure_Has_Target_Anatomy
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
    code: R100
    name: Disease_Has_Associated_Anatomic_Site
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

### Get role by code (or label)

Run the gradle command in the terminal to return a role definition for a specified code. This test demonstrates the "
include" set to full

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getRoleTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get the role for code - R123
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    role = class Concept {
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

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

Run the gradle command in the terminal to return association for the specified code or label. The test shows a comple of
examples of how to parameterize this.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

Run the gradle command in the terminal to return metadata for all term types for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTermTypesTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get root concepts

Run the gradle command in the terminal to return concept roots for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getRootsTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

Run the gradle command in the terminal to return paths to the root concept from a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToRootTest`

```

```

Run the gradle command in the terminal to return paths from the root concept from a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsFromRootTest` -

```

```

XXX
[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

Run the gradle command in the terminal to return paths to the root concept for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsToAncestorTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree

Run the gradle command in the terminal to return an entire subtree graph from the root concepts to a specified node.
This
call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getSubtreeTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology. Include is
set to minimal

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Header_Concept". This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByConceptStatusTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by contributing source) 
// TODO: Find this method!

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a contributing source of "CDISC". This example uses paging to get only
the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.testFindConceptsBySearchTermContributingSource()`

```
2021-12-08T21:30:18-05:00 INFO  : Get concept by search term=melanoma, contributingSource=CDISC
2021-12-08T21:30:18-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:18-05:00 INFO  :   concepts = {"total":1362,"timeTaken":145,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by definition source)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a definition source of "NCI". This example uses paging to get only the
first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByDefinitionSourceTest()`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterBySynonymSourceAndTermGroupTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (where search term is a code)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByCodeTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=match)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeMatchTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=startsWith)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeStartsWithTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=phrase)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "phrase". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypePhraseTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=fuzzy)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "fuzzy". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeFuzzyTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=AND)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeANDTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=OR)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeORTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (with highlights)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchWithHighlightsTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by property

Run the gradle command in the terminal to get concepts matching a search term that is searched within a certain set
of properties. The search results are set to include the property values so you can easily see the match. The property
setting here can be either based on code or on label

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.testFindConceptsByProperty()`

```
2021-12-08T21:34:23-05:00 INFO  : Get concept by search term=XAV05295I5, property=FDA_UNII_Code
2021-12-08T21:34:23-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:34:23-05:00 INFO  :   concepts = {"total":1,"timeTaken":74,"parameters":{"term":"XAV05295I5","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"property":["FDA_UNII_Code"],"terminology":["ncit"]},"concepts":[{"code":"C61305","name":"Sivifene","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all subsets

Run the gradle command in the terminal to get all subsets (with minimal information) for a specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.testGetAllSubsets()`

```
2021-12-01T15:09:19-05:00 INFO  :   subsets = [{"code":"C167405","name":"ACC/AHA EHR Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"ACC/AHA"},{"type":"NCI_META_CUI","value":"CL972587"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The American College of Cardiology (ACC)/ American Heart Association (AHA) Terminology is a set of terms intended to represent key data elements and definitions for electronic health records (EHRs) created for patients with cardiovascular disorders. The primary goal for the development of these clinical data standards is to optimize uniform data collection by providing a platform of harmonized clinical terms and corresponding definitions that will promote interoperability among EHRs and thus improve their application to research and to clinical practice.</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/ACC-AHA_EHR_Terminology/\"> ACC-AHA EHR Terminology</a></p>."}],
...
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset by code

Run the gradle command in the terminal to get subsets (with summary information) for a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.testGetSubsetByCode()`

```
2021-12-01T15:14:28-05:00 INFO  : Get subset - ncit, C81222
2021-12-01T15:14:28-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T15:14:28-05:00 INFO  :   subset = {"code":"C81222","name":"CDISC ADaM Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The terminology subset that includes terms pertaining to the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825525"},{"type":"Value_Set_Pair","value":"No"}],"children":[{"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Date_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Date Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825526"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Derivation_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Derivation Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825527"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172334","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406497"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172335","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406496"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158114","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937724"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158115","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937725"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81225","name":"CDISC ADaM Parameter Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Parameter_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Parameter Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825528"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C165644","name":"CDISC ADaM Pool for Integration Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"NCI_META_CUI","value":"CL978787"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Pool for Integration codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C124296","name":"CDISC ADaM Subject Trial Status Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Subject Trial Status codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C4086047"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81226","name":"CDISC ADaM Time Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Time_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Time Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825529"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset members by code

Run the gradle command in the terminal to get subset members paging parameters for a specified terminology and
code.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.testGetSubsetMembersByCode()`

```
2021-12-01T21:35:12-05:00 INFO  : Get all subset members - ncit, C81222
2021-12-01T21:35:12-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T21:35:12-05:00 INFO  :   subset members = [{"code":"C117751","name":"Analysis Requested by Regulatory Agency","terminology":"ncit"}, {"code":"C117752","name":"Analysis Specified in Protocol","terminology":"ncit"}, {"code":"C117753","name":"Analysis Specified in Statistical Analysis Plan","terminology":"ncit"}, {"code":"C81209","name":"Average of Value Derivation Technique","terminology":"ncit"}, {"code":"C81201","name":"Baseline Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C92225","name":"Best Case Imputation Technique","terminology":"ncit"}, {"code":"C92226","name":"Best Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C132340","name":"Best Observed Case Imputation Technique","terminology":"ncit"}, {"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit"}, {"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

