# EVSRESTAPI: FHIR Tutorial

This tutorial shows how to interact with the FHIR APIs through use of a Postman collection.

## Prerequisites

- Postman must be installed (with a version capable of importing a v2.1 collection)
- Import the desired file into Postman with `File -> Import`. 

## Using the Postman Files

Once imported, no additional steps are required to "set up" use of the postman file
as EVSRESTAPI does not require authentication tokens. The collection makes use of
a `baseUrl` parameter, which is set in the "Variables" tab for the collection.
The default value is `https://api-evsrest.nci.nih.gov` and does not need to be changed.

FHIR Swagger APIs are also available for these end points.

- <https://api-evsrest.nci.nih.gov/fhir/swagger-ui/index.html>

## Sample FHIR Calls

Once loaded in, you will see the calls divided into four sections

- [CodeSystem](#codesystem)
  - [Get all code systems](#get-all-code-systems)
  - [Get code systems by id](#get-code-systems-by-id)
  - [Find code systems by id](#find-code-systems-by-id)
  - [Find code systems by system url](#find-code-systems-by-system-url)
  - [Lookup an NCIt code](#lookup-an-ncit-code)
  - [Lookup a LOINC code](#lookup-a-loinc-code)
  - [Test for NCIt concept subsumption](#test-for-ncit-concept-subsumption)
  - [Validate a SNOMED CT code](#validate-a-snomed-ct-code)
  - [Validate a GO code by id](#validate-a-go-code-by-id)
  - [Validate an NCIt code](#validate-an-ncit-code)
- [ValueSet](#valueset)
    - [Get all value sets](#get-all-value-sets)
    - [Get all value set by id](#get-all-value-set-by-id)
    - [Find value sets by id](#find-value-sets-by-id)
    - [Validate values set with id](#validate-values-set-with-id)
    - [Validate code without id](#validate-code-without-id)
    - [Expand terminology ValueSet](#expand-terminology-valueset)
    - [Expand NCIt ValueSet](#expand-ncit-valueset)
- [ConceptMap](#conceptmap)
  - [Get all concept maps](#get-all-concept-maps)
  - [Get concept map by id](#get-concept-map-by-id)
  - [Translate Code no id](#translate-code-no-id)
  - [Translate Code with id](#translate-code-with-id)
  - [Translate Code in reverse](#translate-code-in-reverse)
  - [Translate Code in reverse with id](#translate-code-in-reverse-with-id)
- [Server capability statement](#server-capability-statement)

## CodeSystem
This section holds the api calls for CodeSystem only. The example outputs shown below are for `FHIR R4.` 

[Back to Top](#evsrestapi-fhir-tutorial)

### Get all code systems

Returns a bundle of all code systems for the specified project.

```json
{
    "resourceType": "Bundle",
    "id": "fca18121-e0b1-4cff-b8ea-2796b606408d",
    "meta": {
        "lastUpdated": "2024-09-04T18:08:01.438-04:00"
    },
    "type": "searchset",
    "total": 30,
    "link": [
        {
            "relation": "self",
            "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/radlex_4_1",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "radlex_4_1",
                "url": "http://radlex.org/",
                "version": "4_1",
                "name": "RadLex: Radiology Lexicon 4_1",
                "title": "radlex",
                "status": "active",
                "experimental": false,
                "publisher": "RSNA (Radiological Society of North America)",
                "hierarchyMeaning": "is-a"
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/ncit_24.08d",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "ncit_24.08d",
                "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                "version": "24.08d",
                "name": "NCI Thesaurus 24.08d",
                "title": "ncit",
                "status": "active",
                "experimental": false,
                "publisher": "NCI",
                "hierarchyMeaning": "is-a"
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/canmed_202408",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "canmed_202408",
                "url": "http://seer.nci.nih.gov/CanMED.owl",
                "version": "202408",
                "name": "CanMED 202408",
                "title": "canmed",
                "status": "active",
                "experimental": false,
                "publisher": "National Cancer Institute Enterprise Vocabulary Services",
                "hierarchyMeaning": "is-a"
            }
        },
      ...
      ...
      ...
    ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Get code systems by id

Returns a bundle containing the code system for a specified `_id` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find code systems by id

Returns a bundle containing the code system for the specified `_id` parameter.

```json
{
    "resourceType": "Bundle",
    "id": "a9620763-cb6f-4f4c-9087-17e527f7c01f",
    "meta": {
        "lastUpdated": "2024-09-04T18:16:43.411-04:00"
    },
    "type": "searchset",
    "total": 0,
    "link": [
        {
            "relation": "self",
            "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem?_id=umlssemnet_2023AA"
        }
    ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find code systems by system url

Returns a bundle contain the code systems for the specified `_url` parameter

```json
{
    "resourceType": "Bundle",
    "id": "f9369c1d-6572-4599-ae95-a9f509e5a337",
    "meta": {
        "lastUpdated": "2024-09-04T18:22:41.145-04:00"
    },
    "type": "searchset",
    "total": 3,
    "link": [
        {
            "relation": "self",
            "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem?system=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/ncit_24.08d",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "ncit_24.08d",
                "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                "version": "24.08d",
                "name": "NCI Thesaurus 24.08d",
                "title": "ncit",
                "status": "active",
                "experimental": false,
                "publisher": "NCI",
                "hierarchyMeaning": "is-a"
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/ncit_24.07e",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "ncit_24.07e",
                "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                "version": "24.07e",
                "name": "NCI Thesaurus 24.07e",
                "title": "ncit",
                "status": "active",
                "experimental": false,
                "publisher": "NCI",
                "hierarchyMeaning": "is-a"
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/ncit_24.06d",
            "resource": {
                "resourceType": "CodeSystem",
                "id": "ncit_24.06d",
                "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                "version": "24.06d",
                "name": "NCI Thesaurus 24.06d",
                "title": "ncit",
                "status": "active",
                "experimental": false,
                "publisher": "NCI",
                "hierarchyMeaning": "is-a"
            }
        }
    ]
}
```
[Back to Top](#evsrestapi-fhir-tutorial)

### Lookup an NCIt code

Returns a Parameters of all the code systems for a `_system_url` and NCIt `_code`

```json
{
    "resourceType": "Parameters",
    "parameter": [
        {
            "name": "code",
            "valueString": "code"
        },
        {
            "name": "system",
            "valueString": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"
        },
        {
            "name": "code",
            "valueString": "NCI Thesaurus 24.08d"
        },
        {
            "name": "version",
            "valueString": "24.08d"
        },
        {
            "name": "display",
            "valueString": "Melanoma"
        },
        {
            "name": "active",
            "valueBoolean": true
        },
        {
            "name": "property",
            "part": [
                {
                    "name": "code",
                    "valueCode": "child"
                },
                {
                    "name": "value",
                    "valueCode": "C3802"
                }
            ]
        },
        {
            "name": "property",
            "part": [
                {
                    "name": "code",
                    "valueCode": "child"
                },
                {
                    "name": "value",
                    "valueCode": "C8410"
                }
            ]
        },
        {
            "name": "property",
            "part": [
                {
                    "name": "code",
                    "valueCode": "child"
                },
                {
                    "name": "value",
                    "valueCode": "C131506"
                }
            ]
        },
      ...
      ...
      ...
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Lookup a LOINC code

Returns a Parameters of all the code systems for a `_system_url` and LOINC `_code`

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Test for NCIt concept subsumption

Returns a Parameters of all the code systems for a `_system_url` and NCIt `_code`

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "system",
      "valueString": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"
    },
    {
      "name": "version",
      "valueString": "24.08d"
    },
    {
      "name": "outcome",
      "valueString": "subsumed-by"
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate a SNOMED CT code

Returns a Parameters of all the code systems for a `_system_url` and SNOMED CT `_code`

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "code",
      "valueString": "138875005"
    },
    {
      "name": "url",
      "valueString": "http://terminology.hl7.org/CodeSystem/snomedct_us"
    },
    {
      "name": "version",
      "valueString": "2024_03_01"
    },
    {
      "name": "display",
      "valueString": "SNOMED CT Concept"
    },
    {
      "name": "active",
      "valueBoolean": true
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate a GO code by id

Returns a Parameters for all code systems for a `_system_url` and GO `_code`

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate an NCIt code

Returns a Parameters for all code systems for a `_system_url` and NCIt `_code`

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

## ValueSet

This section holds the api calls for ValueSet only. The example outputs shown below are for `FHIR R5`.


### Get all value sets

Returns a bundle of all value sets for the specified project. EVSRESTAPI always returns value sets in this call that
represent all the codes of the terminology. Thus, there will always be at least one value set for each code system in
the project.

### Get all value set by id

Returns a bundles of all velue sets for a specified `_id` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find value sets by id

Returns a bundle containing the value set for the specified `_id` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate values set with id

Returns a Parameters for all value sets for a specified `_url` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate code without id

Returns a Parameters for all value sets for a specified `_url` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Expand terminology ValueSet

Returns a ValueSet for all value sets for a specified `_url` parameter.

```json

```

[Back to Top](#evsrestapi-fhir-tutorial)

### Expand NCIt ValueSet

Returns a ValueSet for all value sets for a specified `_url` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)


## ConceptMap

This section holds the api calls for ConceptMap only. The example outputs shown below are for `FHIR R4`.


### Get all concept maps

Returns a Bundle of all concept maps for the specified project.

```json
{
  "resourceType": "Bundle",
  "id": "cb83ea23-e3e5-477f-bf4a-44c666bcce8d",
  "meta": {
    "lastUpdated": "2024-09-04T18:50:10.632-04:00"
  },
  "type": "searchset",
  "total": 8,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ConceptMap"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ConceptMap/GO_to_NCIt_Mapping_February2020",
      "resource": {
        "resourceType": "ConceptMap",
        "id": "GO_to_NCIt_Mapping_February2020",
        "url": "http://purl.obolibrary.org/obo/go.owl?fhir_cm=GO_to_NCIt_Mapping",
        "version": "February2020",
        "name": "GO_to_NCIt_Mapping",
        "title": "GO_to_NCIt_Mapping",
        "status": "active",
        "experimental": false,
        "publisher": "GO Consortium",
        "group": [
          {
            "source": "http://purl.obolibrary.org/obo/go.owl",
            "sourceVersion": "February2020",
            "target": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
            "targetVersion": "20.02d"
          }
        ]
      }
    },
    {
      "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ConceptMap/ICD10_to_MedDRA_Mapping_July2023",
      "resource": {
        "resourceType": "ConceptMap",
        "id": "ICD10_to_MedDRA_Mapping_July2023",
        "url": "http://hl7.org/fhir/sid/icd-10?fhir_cm=ICD10_to_MedDRA_Mapping",
        "version": "July2023",
        "name": "ICD10_to_MedDRA_Mapping",
        "title": "ICD10_to_MedDRA_Mapping",
        "status": "active",
        "experimental": false,
        "publisher": "World Health Organization",
        "group": [
          {
            "source": "http://hl7.org/fhir/sid/icd-10",
            "sourceVersion": "2019",
            "target": "https://www.meddra.org",
            "targetVersion": "23.1"
          }
        ]
      }
    },
    {
      ...
      ...
    }
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Get concept map by id

Returns a ConceptMap for the specified `_id` parameter.

```json
{
    "resourceType": "ConceptMap",
    "id": "GO_to_NCIt_Mapping_February2020",
    "url": "http://purl.obolibrary.org/obo/go.owl?fhir_cm=GO_to_NCIt_Mapping",
    "version": "February2020",
    "name": "GO_to_NCIt_Mapping",
    "title": "GO_to_NCIt_Mapping",
    "status": "active",
    "experimental": false,
    "publisher": "GO Consortium",
    "group": [
        {
            "source": "http://purl.obolibrary.org/obo/go.owl",
            "sourceVersion": "February2020",
            "target": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
            "targetVersion": "20.02d"
        }
    ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate Code no id

Returns a Parameters for all concept maps for a specified `_code` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate Code with id

Returns a Parameters for all concept maps for a specified `_id` and `_code` parameter.

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "equivalence",
          "valueString": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "system": "NCI_Thesaurus",
            "code": "C19939",
            "display": "ATP Hydrolysis"
          }
        }
      ]
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate Code in reverse

Returns a Parameters for all concept maps for a specified `_code` and `_reverse` parameter.

```json
TBD
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate Code in reverse with id

Returns a Parameters for all concept maps for a specified `_id`, `_code`, and `_reverse` parameter.

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "match",
      "part": [
        {
          "name": "equivalence",
          "valueString": "equivalent"
        },
        {
          "name": "concept",
          "valueCoding": {
            "code": "GO:0016887",
            "display": "ATP hydrolysis activity"
          }
        }
      ]
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

## Server capability statement

This is just the FHIR metadata call that describes the capabilities of the server deployment.

[Back to Top](#evsrestapi-fhir-tutorial)
