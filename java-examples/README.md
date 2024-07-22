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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all associates for terminology - ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     associations = [class Concept {
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

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getAssociationTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

Run the gradle command in the terminal to return metadata for all term types for the specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getTermTypesTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all associates for code - A18
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     associations = class Concept {
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

### Get root concepts

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

Run the gradle command in the terminal to return paths from the root concept from a specified terminology and code.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getPathsFromRootTest` -

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

XXX
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

### Get subtree

Run the gradle command in the terminal to return an entire subtree graph from the root concepts to a specified node.
This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`./gradlew test --tests gov.nih.nci.evs.api.ConceptEndpointsApiTest.getSubtreeTest`

```

```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology. Include is
set to minimal

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchTest`

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
    highlight: null
    children: null
}, class HierarchyNode {
    uri: null
    ct: null
    code: C43431
    label: Activity
    level: null
    leaf: false
    expanded: null
    highlight: null
    children: null
}, 
...
...
}, class HierarchyNode {
    uri: null
    ct: null
    code: C7057
    label: Disease, Disorder or Finding
    level: null
    leaf: false
    expanded: true
    highlight: null
    children: [class HierarchyNode {
        uri: null
        ct: null
        code: C2991
        label: Disease or Disorder
        level: null
        leaf: false
        expanded: true
        highlight: null
        children: [class HierarchyNode {
            uri: null
            ct: null
            code: C35470
            label: Behavioral Disorder
            level: null
            leaf: false
            expanded: null
            highlight: null
            children: null
        },
        ...
        ...
        }, class HierarchyNode {
            uri: null
            ct: null
            code: C3262
            label: Neoplasm
            level: null
            leaf: false
            expanded: true
            highlight: null
            children: [class HierarchyNode {
                uri: null
                ct: null
                code: C4741
                label: Neoplasm by Morphology
                level: null
                leaf: false
                expanded: true
                highlight: null
                children: [class HierarchyNode {
                    uri: null
                    ct: null
                    code: C3709
                    label: Epithelial Neoplasm
                    level: null
                    leaf: false
                    expanded: null
                    highlight: null
                    children: null
                },
                 ...
                 ...
                }, class HierarchyNode {
                    uri: null
                    ct: null
                    code: C7058
                    label: Melanocytic Neoplasm
                    level: null
                    leaf: false
                    expanded: true
                    highlight: null
                    children: [class HierarchyNode {
                        uri: null
                        ct: null
                        code: C5504
                        label: Central Nervous System Melanocytic Neoplasm
                        level: null
                        leaf: false
                        expanded: null
                        highlight: null
                        children: null
                    },
                    ...
                    ...
                    }]
                }, class HierarchyNode {
                    uri: null
                    ct: null
                    code: C7059
                    label: Mesenchymal Cell Neoplasm
                    level: null
                    leaf: false
                    expanded: null
                    highlight: null
                    children: null
                },
                ...
                ...
                }]
            }, class HierarchyNode {
                uri: null
                ct: null
                code: C3263
                label: Neoplasm by Site
                level: null
                leaf: false
                expanded: null
                highlight: null
                children: null
            }, class HierarchyNode {
                uri: null
                ct: null
                code: C7062
                label: Neoplasm by Special Category
                level: null
                leaf: false
                expanded: true
                highlight: null
                children: [class HierarchyNode {
                    uri: null
                    ct: null
                    code: C3677
                    label: Benign Neoplasm
                    level: null
                    leaf: false
                    expanded: null
                    highlight: null
                    children: null
                }, 
                ...
                ...
            ...
            ...
        ...
        ...
    ...
    ...
    }]                    
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
restrict the search results by concept status of "Header_Concept". This example uses paging to get only the first 5
results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByConceptStatusTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term =  respiratory, concept status = Header_Concept
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 1
    timeTaken: 41
    parameters: class SearchCriteria {
        uri: null
        ct: null
        term: respiratory
        type: contains
        include: minimal
        sort: null
        ascending: true
        fromRecord: 0
        pageSize: 25
        conceptStatus: [Header_Concept]
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
        code: C13037
        name: Respiratory System Part
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

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterByDefinitionSourceTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = dsDNA, definition source =  NCI
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 12
    timeTaken: 38
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
        conceptStatus: null
        property: null
        value: null
        synonymSource: null
        synonymType: null
        definitionSource: [NCI]
        definitionType: null
        synonymTermType: null
        subset: null
        terminology: [ncit]
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C449
        name: DNA
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
        code: C14348
        name: Double Stranded DNA Virus
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
        code: C25832
        name: DNA Double Strand Break
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
        code: C114565
        name: Anti-ds DNA Antibody
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
        code: C121337
        name: Systemic Lupus International Collaborating Clinics Classification Criteria
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

### Find concepts by search term (restrict by synonym source and termgroup)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchFilterBySynonymSourceAndTermGroupTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = dsDNA, synonym source =  NCI, synonym term type = PT
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
    uri: null
    ct: null
    total: 13
    timeTaken: 49
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
        conceptStatus: null
        property: null
        value: null
        synonymSource: [NCI]
        synonymType: null
        definitionSource: null
        definitionType: null
        synonymTermType: [PT]
        subset: null
        terminology: [ncit]
    }
    concepts: [class Concept {
        uri: null
        ct: null
        code: C449
        name: DNA
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
        code: C14348
        name: Double Stranded DNA Virus
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
        code: C25832
        name: DNA Double Strand Break
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
        code: C114565
        name: Anti-ds DNA Antibody
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
        code: C121337
        name: Systemic Lupus International Collaborating Clinics Classification Criteria
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

### Find concepts by search term (where search term is a code)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByCodeTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term code = C3224
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
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

### Find concepts by search term (using type=match)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeMatchTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = enzyme, type = match
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
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

### Find concepts by search term (using type=startsWith)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

`./gradlew test --tests gov.nih.nci.evs.api.SearchEndpointApiTest.searchByTypeStartsWithTest`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get search results from NCIT for term = enzyme, type = startsWith
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    search results = class ConceptResultList {
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

### Find concepts by search term (using type=AND)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
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

### Find concepts by search term (using type=OR)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
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

Run the gradle command in the terminal to get concepts matching a search term within a specified
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

Run the gradle command in the terminal to get concepts matching a search term that is searched within a certain set
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

### Get all subsets

Run the gradle command in the terminal to get all subsets (with minimal information) for a specified terminology.

`./gradlew test --tests gov.nih.nci.evs.api.MetadataEndpointsApiTest.getSubsets1Test`

```
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get all subsets for ncit
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -    subsets = [class Concept {
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
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest - Get the subset for code - C81222
[Test worker] INFO gov.nih.nci.evs.api.ConceptEndpointsApiTest -     subset = class Concept {
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
}                   
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
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

