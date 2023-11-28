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

`MetadataTests.testGetAssociations()`

```
2021-12-08T20:57:25-05:00 INFO  : Get all associations for ncit (default include)
2021-12-08T20:57:25-05:00 INFO  :   url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:25-05:00 INFO  :   A8 = {"code":"A8","name":"Concept_In_Subset","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A15 = {"code":"A15","name":"Has_CTCAE_5_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A27 = {"code":"A27","name":"Has_CTDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A40 = {"code":"A40","name":"Has_DIPG_DMG_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A12 = {"code":"A12","name":"Has_Data_Element","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A6 = {"code":"A6","name":"Has_Free_Acid_Or_Base_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A31 = {"code":"A31","name":"Has_GDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A30 = {"code":"A30","name":"Has_ICDC_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A16 = {"code":"A16","name":"Has_INC_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A11 = {"code":"A11","name":"Has_NICHD_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A36 = {"code":"A36","name":"Has_PCDC_ALL_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A26 = {"code":"A26","name":"Has_PCDC_AML_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A23 = {"code":"A23","name":"Has_PCDC_Data_Type","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A29 = {"code":"A29","name":"Has_PCDC_EWS_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A34 = {"code":"A34","name":"Has_PCDC_GCT_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A39 = {"code":"A39","name":"Has_PCDC_HL_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A38 = {"code":"A38","name":"Has_PCDC_OS_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A19 = {"code":"A19","name":"Has_Pharmaceutical_Administration_Method","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A18 = {"code":"A18","name":"Has_Pharmaceutical_Basic_Dose_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A20 = {"code":"A20","name":"Has_Pharmaceutical_Intended_Site","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A21 = {"code":"A21","name":"Has_Pharmaceutical_Release_Characteristics","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A17 = {"code":"A17","name":"Has_Pharmaceutical_State_Of_Matter","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A22 = {"code":"A22","name":"Has_Pharmaceutical_Transformation","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A5 = {"code":"A5","name":"Has_Salt_Form","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A37 = {"code":"A37","name":"Has_SeroNet_Permissible_Value","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A7 = {"code":"A7","name":"Has_Target","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A35 = {"code":"A35","name":"Is_PCDC_ALL_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A24 = {"code":"A24","name":"Is_PCDC_AML_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A28 = {"code":"A28","name":"Is_PCDC_EWS_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A33 = {"code":"A33","name":"Is_PCDC_GCT_Permissible_Value_For_Variable","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A9 = {"code":"A9","name":"Is_Related_To_Endogenous_Product","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A32 = {"code":"A32","name":"Is_Value_For_GDC_Property","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A14 = {"code":"A14","name":"Neoplasm_Has_Special_Category","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A4 = {"code":"A4","name":"Qualifier_Applies_To","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A13 = {"code":"A13","name":"Related_To_Genetic_Biomarker","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A1 = {"code":"A1","name":"Role_Has_Domain","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A3 = {"code":"A3","name":"Role_Has_Parent","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A2 = {"code":"A2","name":"Role_Has_Range","terminology":"ncit","version":"21.11e"}
2021-12-08T20:57:25-05:00 INFO  :   A25 = {"code":"A25","name":"Value_Set_Is_Paired_With","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get association by code (or label)

Run the gradle command in the terminal to return association for the specified code or label. The test shows a comple of
examples of how to parameterize this.

`MetadataTests.testGetAssociation()`

```
2021-12-08T20:57:44-05:00 INFO  : Get A10 (full information)
2021-12-08T20:57:44-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:44-05:00 INFO  :   A10 = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e","synonyms":[{"name":"Has CDRH Parent","type":"Display_Name"},{"name":"Has_CDRH_Parent","termGroup":"PT","type":"FULL_SYN","source":"NCI"},{"name":"Has_CDRH_Parent","type":"Preferred_Name"}],"definitions":[{"definition":"An association created to allow the source CDRH to assign a parent to each concept with the intent of creating a hierarchy that includes only terms in which they are the contributing source.","type":"DEFINITION","source":"NCI"}],"properties":[{"type":"http://www.w3.org/1999/02/22-rdf-syntax-ns#type","value":"http://www.w3.org/2002/07/owl#AnnotationProperty"},{"type":"http://www.w3.org/2000/01/rdf-schema#range","value":"http://www.w3.org/2001/XMLSchema#anyURI"},{"type":"Semantic_Type","value":"Conceptual Entity"}]}
2021-12-08T20:57:44-05:00 INFO  : Get Has_CDRH_Parent (minimal information)
2021-12-08T20:57:44-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:57:44-05:00 INFO  :   Has_CDRH_Parent = {"code":"A10","name":"Has_CDRH_Parent","terminology":"ncit","version":"21.11e"}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all term types

Run the gradle command in the terminal to return metadata for all term types for the specified terminology.

`MetadataTests.testGetTermTypes()`

```
2021-12-08T20:58:04-05:00 INFO  : Get term types by terminology - ncit
2021-12-08T20:58:04-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:58:04-05:00 INFO  :   term types = [{"code":"AB","name":"Abbreviation","terminology":"ncit"}, {"code":"AD","name":"Adjectival form (and other parts of grammar)","terminology":"ncit"}, {"code":"AQ*","name":"Antiquated preferred term","terminology":"ncit"}, {"code":"AQS","name":"Antiquated term, use when there are antiquated synonyms within a concept","terminology":"ncit"}, {"code":"BR","name":"US brand name, which may be trademarked","terminology":"ncit"}, {"code":"CA2","name":"ISO 3166 alpha-2 country code","terminology":"ncit"}, {"code":"CA3","name":"ISO 3166 alpha-3 country code","terminology":"ncit"}, {"code":"CN","name":"Drug study code","terminology":"ncit"}, {"code":"CNU","name":"ISO 3166 numeric country code","terminology":"ncit"}, {"code":"CS","name":"US State Department country code","terminology":"ncit"}, {"code":"DN","name":"Display name","terminology":"ncit"}, {"code":"FB","name":"Foreign brand name, which may be trademarked","terminology":"ncit"}, {"code":"HD*","name":"Header (groups concepts, but not used for coding data)","terminology":"ncit"}, {"code":"PT*","name":"Preferred term","terminology":"ncit"}, {"code":"SN","name":"Chemical structure name","terminology":"ncit"}, {"code":"SY","name":"Synonym","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get root concepts

Run the gradle command in the terminal to return concept roots for the specified terminology.

`ConceptTests.testGetRoots()`

```
2021-12-08T20:58:30-05:00 INFO  : Get concept by terminologyncit
2021-12-08T20:58:30-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:58:30-05:00 INFO  :   roots = [{"code":"C12913","name":"Abnormal Cell","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C43431","name":"Activity","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C12219","name":"Anatomic Structure, System, or Substance","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20633","name":"Biochemical Pathway","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C17828","name":"Biological Process","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C12218","name":"Chemotherapy Regimen or Agent Combination","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20181","name":"Conceptual Entity","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20047","name":"Diagnostic or Prognostic Factor","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C1908","name":"Drug, Food, Chemical or Biomedical Material","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C22188","name":"Experimental Organism Anatomical Concept","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C22187","name":"Experimental Organism Diagnosis","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C16612","name":"Gene","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C26548","name":"Gene Product","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C97325","name":"Manufactured Object","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C3910","name":"Molecular Abnormality","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C14250","name":"Organism","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C20189","name":"Property or Attribute","terminology":"ncit","version":"21.11e","leaf":false}, {"code":"C28428","name":"Retired Concept","terminology":"ncit","version":"21.11e","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to/from root from a code

Run the gradle command in the terminal to return paths to the root concept from a specified terminology and code.

`ConceptTests.testGetPathsToRoot()`

```
2021-12-08T20:59:09-05:00 INFO  : Get paths to root by code - C3224
2021-12-08T20:59:09-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:59:09-05:00 INFO  :   paths to root = [[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":5,"leaf":false}], [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":5,"leaf":false}]]
```

Run the gradle command in the terminal to return paths from the root concept from a specified terminology and code.

`ConceptTests.testGetPathsFromRoot()` -

```
2021-12-08T20:59:29-05:00 INFO  : Get paths to root by code - C3224
2021-12-08T20:59:29-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T20:59:29-05:00 INFO  :   paths from root = [[{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":5,"leaf":false}], [{"code":"C7057","name":"Disease, Disorder or Finding","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":4,"leaf":false}, {"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":5,"leaf":false}]]
```

XXX
[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get paths to an ancestor code from a code

Run the gradle command in the terminal to return paths to the root concept for a specified terminology and code.

`ConceptTests.testGetPathToAncestor()`

```
2021-12-08T21:27:16-05:00 INFO  : Get paths to ancestor code by code - C3224/C2991
2021-12-08T21:27:16-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:27:16-05:00 INFO  :   path to ancestor = [[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C7058","name":"Melanocytic Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C4741","name":"Neoplasm by Morphology","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}], [{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","level":0,"leaf":false}, {"code":"C9305","name":"Malignant Neoplasm","terminology":"ncit","version":"21.11e","level":1,"leaf":false}, {"code":"C7062","name":"Neoplasm by Special Category","terminology":"ncit","version":"21.11e","level":2,"leaf":false}, {"code":"C3262","name":"Neoplasm","terminology":"ncit","version":"21.11e","level":3,"leaf":false}, {"code":"C2991","name":"Disease or Disorder","terminology":"ncit","version":"21.11e","level":4,"leaf":false}]]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subtree

Run the gradle command in the terminal to return an entire subtree graph from the root concepts to a specified node.
This
call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`ConceptTests.testGetSubtreeForCode()`

```
2021-12-08T21:28:45-05:00 INFO  : Get subtree graph by code - C3224
2021-12-08T21:28:45-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:28:45-05:00 INFO  :   subtree = [{"code":"C12913","label":"Abnormal Cell","leaf":false}, {"code":"C43431","label":"Activity","leaf":false}, {"code":"C12219","label":"Anatomic Structure, System, or Substance","leaf":false}, {"code":"C20633","label":"Biochemical Pathway","leaf":false}, {"code":"C17828","label":"Biological Process","leaf":false}, {"code":"C12218","label":"Chemotherapy Regimen or Agent Combination","leaf":false}, {"code":"C20181","label":"Conceptual Entity","leaf":false}, {"code":"C20047","label":"Diagnostic or Prognostic Factor","leaf":false}, {"code":"C7057","label":"Disease, Disorder or Finding","leaf":false,"expanded":true,"children":[{"code":"C2991","label":"Disease or Disorder","leaf":false,"expanded":true,"children":[{"code":"C35470","label":"Behavioral Disorder","leaf":false},{"code":"C8278","label":"Cancer-Related Condition","leaf":false},{"code":"C27551","label":"Disorder by Site","leaf":false},{"code":"C3101","label":"Genetic Disorder","leaf":false},{"code":"C3262","label":"Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C4741","label":"Neoplasm by Morphology","leaf":false,"expanded":true,"children":[{"code":"C3709","label":"Epithelial Neoplasm","leaf":false},{"code":"C3708","label":"Germ Cell Tumor","leaf":false},{"code":"C7069","label":"Giant Cell Neoplasm","leaf":false},{"code":"C27134","label":"Hematopoietic and Lymphoid Cell Neoplasm","leaf":false},{"code":"C7058","label":"Melanocytic Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C5504","label":"Central Nervous System Melanocytic Neoplasm","leaf":false},{"code":"C173488","label":"Head and Neck Melanocytic Neoplasm","leaf":false},{"code":"C7570","label":"Melanocytic Nevus","leaf":false},{"code":"C9498","label":"Melanocytoma","leaf":false},{"code":"C3224","label":"Melanoma","leaf":false},{"code":"C7161","label":"Skin Melanocytic Neoplasm","leaf":false},{"code":"C40335","label":"Vulvar Melanocytic Neoplasm","leaf":false}]},{"code":"C6971","label":"Meningothelial Cell Neoplasm","leaf":false},{"code":"C7059","label":"Mesenchymal Cell Neoplasm","leaf":false},{"code":"C3786","label":"Mesothelial Neoplasm","leaf":false},{"code":"C6974","label":"Neoplasm of Uncertain Histogenesis","leaf":false},{"code":"C35562","label":"Neuroepithelial, Perineurial, and Schwann Cell Neoplasm","leaf":false},{"code":"C3422","label":"Trophoblastic Tumor","leaf":false}]},{"code":"C3263","label":"Neoplasm by Site","leaf":false},{"code":"C7062","label":"Neoplasm by Special Category","leaf":false,"expanded":true,"children":[{"code":"C3677","label":"Benign Neoplasm","leaf":false},{"code":"C6283","label":"Childhood Neoplasm","leaf":false},{"code":"C6784","label":"Cystic Neoplasm","leaf":false},{"code":"C3264","label":"Embryonal Neoplasm","leaf":false},{"code":"C36035","label":"Encapsulated Neoplasm","leaf":false},{"code":"C7201","label":"Infrequent Neoplasm","leaf":false},{"code":"C116915","label":"Liquid Tumor","leaf":true},{"code":"C36037","label":"Localized Neoplasm","leaf":false},{"code":"C9305","label":"Malignant Neoplasm","leaf":false,"expanded":true,"children":[{"code":"C3851","label":"Aggravated Malignant Neoplasm","leaf":true},{"code":"C36025","label":"Anaplastic Malignant Neoplasm","leaf":false},{"code":"C7627","label":"Bilateral Malignant Neoplasm","leaf":false},{"code":"C2916","label":"Carcinoma","leaf":false},{"code":"C4005","label":"Childhood Malignant Neoplasm","leaf":false},{"code":"C2948","label":"Choriocarcinoma","leaf":false},{"code":"C4992","label":"Environment-Related Malignant Neoplasm","leaf":false},{"code":"C81758","label":"Fibroblastic Reticular Cell Tumor","leaf":true},{"code":"C9479","label":"Hereditary Malignant Neoplasm","leaf":false},{"code":"C27770","label":"Immunodeficiency-Related Malignant Neoplasm","leaf":false},{"code":"C27223","label":"Infection-Related Malignant Neoplasm","leaf":false},{"code":"C8505","label":"Invasive Malignant Neoplasm","leaf":false},{"code":"C3161","label":"Leukemia","leaf":false},{"code":"C8576","label":"Localized Malignant Neoplasm","leaf":false},{"code":"C3208","label":"Lymphoma","leaf":false},{"code":"C156714","label":"Malignant Abdominal Neoplasm","leaf":false},{"code":"C7586","label":"Malignant Basal Cell Neoplasm","leaf":false},{"code":"C35501","label":"Malignant Bone Marrow Neoplasm","leaf":false},{"code":"C9335","label":"Malignant Breast Neoplasm","leaf":false},{"code":"C114940","label":"Malignant Cardiovascular Neoplasm","leaf":false},{"code":"C4890","label":"Malignant Digestive System Neoplasm","leaf":false},{"code":"C3575","label":"Malignant Endocrine Neoplasm","leaf":false},{"code":"C4767","label":"Malignant Eye Neoplasm","leaf":false},{"code":"C121500","label":"Malignant Fibrohistiocytic Neoplasm","leaf":false},{"code":"C156484","label":"Malignant Genitourinary System Neoplasm","leaf":false},{"code":"C4925","label":"Malignant Germ Cell Tumor","leaf":false},{"code":"C4090","label":"Malignant Giant Cell Neoplasm","leaf":false},{"code":"C4013","label":"Malignant Head and Neck Neoplasm","leaf":false},{"code":"C35812","label":"Malignant Lymph Node Neoplasm","leaf":false},{"code":"C8991","label":"Malignant Mastocytosis","leaf":false},{"code":"C4456","label":"Malignant Mesothelioma","leaf":false},{"code":"C3729","label":"Malignant Mixed Neoplasm","leaf":false},{"code":"C166357","label":"Malignant Musculoskeletal Neoplasm","leaf":false},{"code":"C36041","label":"Malignant Neoplasm by Grade","leaf":false},{"code":"C35427","label":"Malignant Neoplasm of Multiple Primary Sites","leaf":false},{"code":"C65153","label":"Malignant Neoplasm, Uncertain Whether Primary or Metastatic","leaf":true},{"code":"C4788","label":"Malignant Nervous System Neoplasm","leaf":false},{"code":"C156715","label":"Malignant Pelvic Neoplasm","leaf":false},{"code":"C156711","label":"Malignant Peritoneal and Retroperitoneal Neoplasm","leaf":false},{"code":"C4571","label":"Malignant Respiratory System Neoplasm","leaf":false},{"code":"C2920","label":"Malignant Skin Neoplasm","leaf":false},{"code":"C4867","label":"Malignant Soft Tissue Neoplasm","leaf":false},{"code":"C132146","label":"Malignant Solid Neoplasm","leaf":false},{"code":"C6894","label":"Malignant Solitary Fibrous Tumor","leaf":false},{"code":"C3539","label":"Malignant Splenic Neoplasm","leaf":false},{"code":"C3576","label":"Malignant Thoracic Neoplasm","leaf":false},{"code":"C3224","label":"Melanoma","leaf":false},{"code":"C38156","label":"Metachronous Malignant Neoplasm","leaf":false},{"code":"C36049","label":"Moderately Differentiated Malignant Neoplasm","leaf":true},{"code":"C7151","label":"Monoclonal Immunoglobulin Deposition Disease","leaf":false},{"code":"C3520","label":"Myeloid Sarcoma","leaf":false},{"code":"C84270","label":"Myeloid/Lymphoid Neoplasms with Eosinophilia and Rearrangement of PDGFRA, PDGFRB, or FGFR1, or with PCM1-JAK2","leaf":false},{"code":"C9226","label":"Non-Hematologic Malignancy","leaf":true},{"code":"C46080","label":"Nonestrogen-Dependent Malignant Neoplasm","leaf":true},{"code":"C167168","label":"Obesity-Related Malignant Neoplasm","leaf":true},{"code":"C4993","label":"Occupational Malignant Neoplasm","leaf":false},{"code":"C3242","label":"Plasma Cell Myeloma","leaf":false},{"code":"C9349","label":"Plasmacytoma","leaf":false},{"code":"C36050","label":"Poorly Differentiated Malignant Neoplasm","leaf":true},{"code":"C7055","label":"Precursor Lymphoid Neoplasm","leaf":false},{"code":"C84509","label":"Primary Malignant Neoplasm","leaf":false},{"code":"C172183","label":"Progesterone Receptor Expressing Malignant Neoplasm","leaf":true},{"code":"C27209","label":"Radiation-Related Malignant Neoplasm","leaf":false},{"code":"C4813","label":"Recurrent Malignant Neoplasm","leaf":false},{"code":"C120186","label":"Refractory Malignant Neoplasm","leaf":false},{"code":"C150602","label":"Resectable Malignant Neoplasm","leaf":false},{"code":"C9118","label":"Sarcoma","leaf":false},{"code":"C4968","label":"Secondary Malignant Neoplasm","leaf":false},{"code":"C177364","label":"Somatic-Type Malignancy","leaf":true},{"code":"C4969","label":"Therapy-Related Malignant Neoplasm","leaf":false},{"code":"C36051","label":"Undifferentiated Malignant Neoplasm","leaf":true},{"code":"C27359","label":"Unresectable Malignant Neoplasm","leaf":false},{"code":"C36052","label":"Well Differentiated Malignant Neoplasm","leaf":true}]},{"code":"C3261","label":"Metastatic Neoplasm","leaf":false},{"code":"C102883","label":"Miscellaneous Neoplasm","leaf":true},{"code":"C6930","label":"Mixed Neoplasm","leaf":false},{"code":"C36029","label":"Necrotic Neoplasm","leaf":true},{"code":"C27933","label":"Neoplasm by Cause","leaf":false},{"code":"C45230","label":"Neoplasm by Obsolete Classification","leaf":false},{"code":"C3646","label":"Neoplasm of Uncertain Malignant Potential","leaf":false},{"code":"C65157","label":"Neoplasm, Uncertain Whether Benign or Malignant","leaf":true},{"code":"C7068","label":"Neoplastic Polyp","leaf":false},{"code":"C36012","label":"Nodular Neoplasm","leaf":true},{"code":"C36036","label":"Non-Encapsulated Neoplasm","leaf":true},{"code":"C163003","label":"Non-Malignant Neoplasm","leaf":true},{"code":"C36030","label":"Osteolytic Neoplasm","leaf":false},{"code":"C36031","label":"Papillary Neoplasm","leaf":false},{"code":"C36032","label":"Premalignant Neoplasm","leaf":true},{"code":"C8509","label":"Primary Neoplasm","leaf":false},{"code":"C4798","label":"Recurrent Neoplasm","leaf":false},{"code":"C7628","label":"Refractory Neoplasm","leaf":false},{"code":"C36255","label":"Secondary Neoplasm","leaf":false},{"code":"C9292","label":"Solid Neoplasm","leaf":false},{"code":"C27263","label":"Spindle Cell Neoplasm","leaf":false},{"code":"C36033","label":"Tubular Neoplasm","leaf":true},{"code":"C36034","label":"Villous Neoplasm","leaf":true}]}]},{"code":"C53529","label":"Non-Neoplastic Disorder","leaf":false},{"code":"C89328","label":"Pediatric Disorder","leaf":false},{"code":"C3340","label":"Polyp","leaf":false},{"code":"C2893","label":"Psychiatric Disorder","leaf":false},{"code":"C26684","label":"Radiation-Induced Disorder","leaf":false},{"code":"C4873","label":"Rare Disorder","leaf":false},{"code":"C28193","label":"Syndrome","leaf":false}]},{"code":"C3367","label":"Finding","leaf":false}]}, {"code":"C1908","label":"Drug, Food, Chemical or Biomedical Material","leaf":false}, {"code":"C22188","label":"Experimental Organism Anatomical Concept","leaf":false}, {"code":"C22187","label":"Experimental Organism Diagnosis","leaf":false}, {"code":"C16612","label":"Gene","leaf":false}, {"code":"C26548","label":"Gene Product","leaf":false}, {"code":"C97325","label":"Manufactured Object","leaf":false}, {"code":"C3910","label":"Molecular Abnormality","leaf":false}, {"code":"C14250","label":"Organism","leaf":false}, {"code":"C20189","label":"Property or Attribute","leaf":false}, {"code":"C28428","label":"Retired Concept","leaf":false}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology.

`SearchTests.testFindConceptsBySearchTerm()`

```
2021-12-08T21:29:28-05:00 INFO  : Get concept by search term=melanoma
2021-12-08T21:29:28-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:29:28-05:00 INFO  :   concepts = {"total":1362,"timeTaken":171,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C91477","name":"Melanoma Pathway","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21790","name":"Mouse Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by concept status)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by concept status of "Header_Concept". This example uses paging to get only
the first 5 results.

`SearchTests.testFindConceptsBySearchTermConceptStatus()`

```
2021-12-08T21:29:51-05:00 INFO  : Get concept by search term=respiratory, status=Header_Concept
2021-12-08T21:29:51-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:29:51-05:00 INFO  :   concepts = {"total":1,"timeTaken":179,"parameters":{"term":"respiratory","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"conceptStatus":["Header_Concept"],"terminology":["ncit"]},"concepts":[{"code":"C13037","name":"Respiratory System Part","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by contributing source)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a contributing source of "CDISC". This example uses paging to get only
the first 5 results.

`SearchTests.testFindConceptsBySearchTermContributingSource()`

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

`SearchTests.testFindConceptsBySearchTermDefinitionSource()`

```
2021-12-08T21:30:38-05:00 INFO  : Get concept by search term=dsDNA, definitionSource=NCI
2021-12-08T21:30:38-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:38-05:00 INFO  :   concepts = {"total":1294,"timeTaken":2017,"parameters":{"term":"melanoma","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"definitionSource":["NCI"],"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C103113","name":"NCI CTEP SDC Melanoma Sub-Category Terminology","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C114828","name":"Mucosal Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C118828","name":"Orbital Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C120298","name":"Canine Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".

`SearchTests.testFindConceptsBySearchTermSynonymSource()`

```
2021-12-08T21:30:55-05:00 INFO  : Get concept by search term=dsDNA, synonymSource=NCI, synonymTermGroup=PT
2021-12-08T21:30:55-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:30:55-05:00 INFO  :   concepts = {"total":12,"timeTaken":99,"parameters":{"term":"dsDNA","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"synonymSource":["NCI"],"synonymTermGroup":["PT"],"terminology":["ncit"]},"concepts":[{"code":"C449","name":"DNA","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C14348","name":"Double Stranded DNA Virus","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C114565","name":"Anti-ds DNA Antibody","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C121337","name":"Systemic Lupus International Collaborating Clinics Classification Criteria","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C148186","name":"TALEN-edited HPV16/18 E6/E7 Plasmid","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C151956","name":"HPV16-E6-T27","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C151958","name":"HPV16-E7-T512","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C158432","name":"PicoGreen Dye","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16517","name":"DNA Helicase","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C20064","name":"Conformation Dependent Mutation Detection","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (where search term is a code)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and restrict the search results using a code as the search term.
`SearchTests.testFindConceptsBySearchTermAsCode()`

```
2021-12-08T21:31:12-05:00 INFO  : Get concept by search term=C3224
2021-12-08T21:31:12-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:12-05:00 INFO  :   concepts = {"total":1,"timeTaken":112,"parameters":{"term":"C3224","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"terminology":["ncit"]},"concepts":[{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=match)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "match". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermMatch()`

```
2021-12-08T21:31:32-05:00 INFO  : Get concept by search term=enzyme, type=match
2021-12-08T21:31:32-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:32-05:00 INFO  :   concepts = {"total":1,"timeTaken":30,"parameters":{"term":"enzyme","type":"match","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=startsWith)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and a search type of "startsWith". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermStartsWith()`

```
2021-12-08T21:31:56-05:00 INFO  : Get concept by search term=enzyme, type=startsWith
2021-12-08T21:31:56-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:31:56-05:00 INFO  :   concepts = {"total":53,"timeTaken":35,"parameters":{"term":"enzyme","type":"startsWith","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C102632","name":"Enzyme-linked Immunosorbent Spot Assay","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C111196","name":"Enzyme Multiplied Immunoassay Technique","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C122205","name":"Enzyme Immunoassay Unit","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C147130","name":"Enzyme Unit per Liter","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=phrase)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "phrase". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermPhrase()`

```
2021-12-08T21:32:15-05:00 INFO  : Get concept by search term=malignant melanoma, type=phrase
2021-12-08T21:32:15-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:15-05:00 INFO  :   concepts = {"total":75,"timeTaken":169,"parameters":{"term":"malignant melanoma","type":"phrase","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16444","name":"Cloudman S91 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=fuzzy)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology
and a search type of "fuzzy". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermFuzzy()`

```
2021-12-08T21:32:34-05:00 INFO  : Get concept by search term=enzyme, type=fuzzy
2021-12-08T21:32:34-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:34-05:00 INFO  :   concepts= {"total":3351,"timeTaken":140,"parameters":{"term":"enzyme","type":"fuzzy","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C21281","name":"Enzyme Gene","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C18296","name":"Pancreatic Enzyme","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C38728","name":"Pancreatic Proteolytic Enzymes","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C21557","name":"Deubiquitinating Enzyme","terminology":"ncit","version":"21.11e","leaf":false}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=AND)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
a search type of "AND". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermAnd()`

```
2021-12-08T21:32:50-05:00 INFO  : Get concept by search term=malignant melanoma, type=AND
2021-12-08T21:32:50-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:32:50-05:00 INFO  :   concepts = {"total":122,"timeTaken":59,"parameters":{"term":"malignant melanoma","type":"AND","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16444","name":"Cloudman S91 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (using type=OR)

Run the gradle command in the terminal to get concepts matching a search term within a specified terminology and
a search type of "OR". This example uses paging to get only the first 5 results.

`SearchTests.testFindConceptsBySearchTermOr()`

```
2021-12-08T21:33:07-05:00 INFO  : Get concept by search term=malignant melanoma, type=OR
2021-12-08T21:33:07-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:33:07-05:00 INFO  :   concepts = {"total":4786,"timeTaken":126,"parameters":{"term":"malignant melanoma","type":"OR","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16835","name":"Experimental Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C60451","name":"Rat Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C16317","name":"B16 Malignant Melanoma","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C3224","name":"Melanoma","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C128801","name":"Cutaneous Malignant Melanoma 2","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by search term (with highlights)

Run the gradle command in the terminal to get concepts matching a search term within a specified
terminology and include synonyms and highlighted text in the response. This example uses paging to get only the first 5
results.

`SearchTests.testFindConceptsBySearchTermHighlights()`

```
2021-12-08T21:33:26-05:00 INFO  : Get concept by search term=XAV05295I5 (with highlights)
2021-12-08T21:33:26-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:33:26-05:00 INFO  :   concepts = {"total":2045,"timeTaken":78,"parameters":{"term":"enzyme","type":"contains","include":"minimal","fromRecord":0,"pageSize":5,"terminology":["ncit"]},"concepts":[{"code":"C16554","name":"Enzyme","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C17455","name":"Enzyme Immunoassay","terminology":"ncit","version":"21.11e","leaf":false},{"code":"C180567","name":"Enzyme Activity","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C180669","name":"Enzyme Substrate","terminology":"ncit","version":"21.11e","leaf":true},{"code":"C18296","name":"Pancreatic Enzyme","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Find concepts by property

Run the gradle command in the terminal to get concepts matching a search term that is searched within a certain set
of properties. The search results are set to include the property values so you can easily see the match. The property
setting here can be either based on code or on label

`SearchTests.testFindConceptsByProperty()`

```
2021-12-08T21:34:23-05:00 INFO  : Get concept by search term=XAV05295I5, property=FDA_UNII_Code
2021-12-08T21:34:23-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-08T21:34:23-05:00 INFO  :   concepts = {"total":1,"timeTaken":74,"parameters":{"term":"XAV05295I5","type":"contains","include":"minimal","fromRecord":0,"pageSize":10,"property":["FDA_UNII_Code"],"terminology":["ncit"]},"concepts":[{"code":"C61305","name":"Sivifene","terminology":"ncit","version":"21.11e","leaf":true}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get all subsets

Run the gradle command in the terminal to get all subsets (with minimal information) for a specified terminology.

`MetadataTests.testGetAllSubsets()`

```
2021-12-01T15:09:19-05:00 INFO  :   subsets = [{"code":"C167405","name":"ACC/AHA EHR Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"ACC/AHA"},{"type":"NCI_META_CUI","value":"CL972587"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The American College of Cardiology (ACC)/ American Heart Association (AHA) Terminology is a set of terms intended to represent key data elements and definitions for electronic health records (EHRs) created for patients with cardiovascular disorders. The primary goal for the development of these clinical data standards is to optimize uniform data collection by providing a platform of harmonized clinical terms and corresponding definitions that will promote interoperability among EHRs and thus improve their application to research and to clinical practice.</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/ACC-AHA_EHR_Terminology/\"> ACC-AHA EHR Terminology</a></p>."}],
...
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset by code

Run the gradle command in the terminal to get subsets (with summary information) for a specified terminology and code.

`MetadataTests.testGetSubsetByCode()`

```
2021-12-01T15:14:28-05:00 INFO  : Get subset - ncit, C81222
2021-12-01T15:14:28-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T15:14:28-05:00 INFO  :   subset = {"code":"C81222","name":"CDISC ADaM Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>The terminology subset that includes terms pertaining to the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825525"},{"type":"Value_Set_Pair","value":"No"}],"children":[{"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Date_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Date Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825526"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Derivation_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Derivation Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825527"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172334","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406497"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C172335","name":"CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL1406496"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158114","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Code Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937724"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C158115","name":"CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Name Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"NCI_META_CUI","value":"CL937725"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"Yes"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81225","name":"CDISC ADaM Parameter Type Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Parameter_Type_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Parameter Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825528"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C165644","name":"CDISC ADaM Pool for Integration Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"NCI_META_CUI","value":"CL978787"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Pool for Integration codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C124296","name":"CDISC ADaM Subject Trial Status Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"Yes"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Subject Trial Status codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C4086047"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"},{"code":"C81226","name":"CDISC ADaM Time Imputation Flag Terminology","terminology":"ncit","version":"21.11e","properties":[{"type":"Contributing_Source","value":"CDISC"},{"type":"Extensible_List","value":"No"},{"type":"Legacy Concept Name","value":"CDISC_ADaM_Time_Imputation_Flag_Terminology"},{"type":"Publish_Value_Set","value":"Yes"},{"type":"Semantic_Type","value":"Intellectual Product"},{"type":"Term_Browser_Value_Set_Description","value":"<p>Terminology associated with the Time Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"},{"type":"UMLS_CUI","value":"C2825529"},{"type":"Value_Set_Pair","value":"No"}],"subsetLink":"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/"}]}
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

### Get subset members by code

Run the gradle command in the terminal to get subset members paging parameters for a specified terminology and
code.

`MetadataTests.testGetSubsetMembersByCode()`

```
2021-12-01T21:35:12-05:00 INFO  : Get all subset members - ncit, C81222
2021-12-01T21:35:12-05:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2021-12-01T21:35:12-05:00 INFO  :   subset members = [{"code":"C117751","name":"Analysis Requested by Regulatory Agency","terminology":"ncit"}, {"code":"C117752","name":"Analysis Specified in Protocol","terminology":"ncit"}, {"code":"C117753","name":"Analysis Specified in Statistical Analysis Plan","terminology":"ncit"}, {"code":"C81209","name":"Average of Value Derivation Technique","terminology":"ncit"}, {"code":"C81201","name":"Baseline Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C92225","name":"Best Case Imputation Technique","terminology":"ncit"}, {"code":"C92226","name":"Best Observation Carried Forward Imputation Technique","terminology":"ncit"}, {"code":"C132340","name":"Best Observed Case Imputation Technique","terminology":"ncit"}, {"code":"C81223","name":"CDISC ADaM Date Imputation Flag Terminology","terminology":"ncit"}, {"code":"C81224","name":"CDISC ADaM Derivation Type Terminology","terminology":"ncit"}]
```

[Back to Top](#evsrestapi-client-sdk-java-tutorial)

