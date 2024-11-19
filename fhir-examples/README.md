# EVSRESTAPI: FHIR Tutorial

This tutorial shows how to interact with the FHIR APIs through use of a Postman collection. All outputs were generated
with the R4 version of the file. 

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
  - [Validate an NCIt code with code system url](#validate-an-ncit-code-with-code-system-url)
  - [Validate a ULMSSEMNET code with code system url](#validate-a-ulmssemnet-code-with-code-system-url)
- [ValueSet](#valueset)
    - [Get all value sets](#get-all-value-sets)
    - [Get all value set by id](#get-all-value-set-by-id)
    - [Find value sets by id](#find-value-sets-by-id)
    - [Find value set by url](#find-value-set-by-url)
    - [Validate NCIt code with value set id](#validate-ncit-code-with-value-set-id)
    - [Validate NCIt code value set url](#validate-ncit-code-with-value-set-url)
    - [Expand NCIt value set with value set url](#expand-ncit-value-set-with-value-set-url)

- [ConceptMap](#conceptmap)
  - [Get all concept maps](#get-all-concept-maps)
  - [Get concept map by id](#get-concept-map-by-id)
  - [Find concept maps by id](#find-concept-maps-by-id)
  - [Find concept maps by url](#find-concept-maps-by-url)
  - [Translate GO code no id](#translate-go-code-no-id)
  - [Translate GO code with id](#translate-go-code-with-id)
  - [Translate GO code in reverse](#translate-go-code-in-reverse)
  - [Translate GO code in reverse with id](#translate-go-code-in-reverse-with-id)

## CodeSystem
This section holds the api calls for CodeSystem only. The example outputs shown below are for `FHIR R4.` 

[Back to Top](#evsrestapi-fhir-tutorial)

### Get all code systems

Returns a Bundle of all code systems for the specified project.

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

Returns a code system for a specified `_id` parameter.

```json
{
  "resourceType": "CodeSystem",
  "id": "umlssemnet_2023aa",
  "url": "http://www.nlm.nih.gov/research/umls/umlssemnet.owl",
  "version": "2023aa",
  "name": "UMLS Semantic Network 2023aa",
  "title": "umlssemnet",
  "status": "active",
  "experimental": false,
  "publisher": "National Library of Medicine",
  "hierarchyMeaning": "is-a"
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find code systems by id

Returns a Bundle containing the code system for the specified `_id` parameter.

```json
{
  "resourceType": "Bundle",
  "id": "d8c3f2f5-e70f-4eed-a89c-e16f9eeb9175",
  "meta": {
    "lastUpdated": "2024-09-05T15:37:19.067-04:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem?_id=umlssemnet_2023aa"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/CodeSystem/umlssemnet_2023aa",
      "resource": {
        "resourceType": "CodeSystem",
        "id": "umlssemnet_2023aa",
        "url": "http://www.nlm.nih.gov/research/umls/umlssemnet.owl",
        "version": "2023aa",
        "name": "UMLS Semantic Network 2023aa",
        "title": "umlssemnet",
        "status": "active",
        "experimental": false,
        "publisher": "National Library of Medicine",
        "hierarchyMeaning": "is-a"
      }
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find code systems by system url

Returns a Bundle contain the code systems for the specified `_url` parameter

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
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "code",
      "valueString": "code"
    },
    {
      "name": "system",
      "valueString": "http://loinc.org"
    },
    {
      "name": "code",
      "valueString": "LOINC: Logical Observation Identifier Names and Codes 2_77"
    },
    {
      "name": "version",
      "valueString": "2_77"
    },
    {
      "name": "display",
      "valueString": "Physical findings:Find:Pt:Abdomen:Nar:Observed"
    },
    {
      "name": "active",
      "valueBoolean": true
    }
  ]
}
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

### Validate an NCIt code with code system url

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
      "valueString": "C3224"
    },
    {
      "name": "url",
      "valueString": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl"
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
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate a ULMSSEMNET code with code system url

Returns a Parameters for all code systems for a `_system_url` and GO `_code`

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
      "valueString": "T042"
    },
    {
      "name": "url",
      "valueString": "http://www.nlm.nih.gov/research/umls/umlssemnet.owl"
    },
    {
      "name": "version",
      "valueString": "2023aa"
    },
    {
      "name": "display",
      "valueString": "Organ or Tissue Function"
    },
    {
      "name": "active",
      "valueBoolean": true
    }
  ]
}
```

## ValueSet

This section holds the api calls for ValueSet only. The example outputs shown below are for `FHIR R4`.


### Get all value sets

Returns a Bundle of all value sets for the specified project. EVSRESTAPI always returns value sets in this call that
represent all the codes of the terminology. Thus, there will always be at least one value set for each code system in
the project.

```json
{
    "resourceType": "Bundle",
    "id": "051463e7-1f14-44d9-8629-d1d07b99c6dc",
    "meta": {
        "lastUpdated": "2024-09-05T15:43:50.225-04:00"
    },
    "type": "searchset",
    "total": 2067,
    "link": [
        {
            "relation": "self",
            "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet"
        },
        {
            "relation": "next",
            "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet?_offset=100&_count=100"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet/radlex_4_1",
            "resource": {
                "resourceType": "ValueSet",
                "id": "radlex_4_1",
                "url": "http://radlex.org/",
                "version": "4_1",
                "name": "RadLex: Radiology Lexicon 4_1",
                "title": "radlex",
                "status": "active",
                "experimental": false,
                "publisher": "RSNA (Radiological Society of North America)",
                "description": ";;Radiological Society of North America;;RadLex 4.1;;;;;;;March 20, 2018;Oak Brook, IL;;;RadLex 4.1"
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet/ncit_24.08d",
            "resource": {
                "resourceType": "ValueSet",
                "id": "ncit_24.08d",
                "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
                "version": "24.08d",
                "name": "NCI Thesaurus 24.08d",
                "title": "ncit",
                "status": "active",
                "experimental": false,
                "publisher": "NCI",
                "description": "NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A."
            }
        },
        {
            "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet/canmed_202408",
            "resource": {
                "resourceType": "ValueSet",
                "id": "canmed_202408",
                "url": "http://seer.nci.nih.gov/CanMED.owl",
                "version": "202408",
                "name": "CanMED 202408",
                "title": "canmed",
                "status": "active",
                "experimental": false,
                "publisher": "National Cancer Institute Enterprise Vocabulary Services",
                "description": "Cancer Medications Enquiry Database (CanMED)"
            }
        },
        ...
        ...
        ...
        }
    ]
}
```

### Get all value set by id

Returns a Value Set for a specified `_id` parameter.

```json
{
  "resourceType": "ValueSet",
  "id": "ncit_C54585",
  "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
  "identifier": [
    {
      "value": "C54585"
    }
  ],
  "version": "24.08d",
  "name": "Occupation ICSR Terminology",
  "title": "ncit",
  "status": "active",
  "experimental": false,
  "publisher": "NCI",
  "description": "Value set representing the ncit subset C54585"
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find value sets by id

Returns a Bundle containing the value set for the specified `_id` parameter.

```json
{
  "resourceType": "Bundle",
  "id": "b5aeb115-c384-424c-b054-19c0745e5046",
  "meta": {
    "lastUpdated": "2024-09-05T15:45:43.349-04:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet?_id=ncit_C54585"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet/ncit_C54585",
      "resource": {
        "resourceType": "ValueSet",
        "id": "ncit_C54585",
        "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "identifier": [
          {
            "value": "C54585"
          }
        ],
        "version": "24.08d",
        "name": "Occupation ICSR Terminology",
        "title": "ncit",
        "status": "active",
        "experimental": false,
        "publisher": "NCI",
        "description": "Value set representing the ncit subset C54585"
      }
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find value set by url

Returns a Bundle for all value sets for a specified `_url` parameter.

```json
{
  "resourceType": "Bundle",
  "id": "95e2dd50-a816-4dd2-97d4-e050acab83f0",
  "meta": {
    "lastUpdated": "2024-09-05T15:46:00.412-04:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet?url=http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ValueSet/ncit_C54585",
      "resource": {
        "resourceType": "ValueSet",
        "id": "ncit_C54585",
        "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "identifier": [
          {
            "value": "C54585"
          }
        ],
        "version": "24.08d",
        "name": "Occupation ICSR Terminology",
        "title": "ncit",
        "status": "active",
        "experimental": false,
        "publisher": "NCI",
        "description": "Value set representing the ncit subset C54585"
      }
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate NCIt code with value set id

Returns a Parameters for a specified value set `_id` parameter.

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": true
    },
    {
      "name": "display",
      "valueString": "Nurse"
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Validate NCIt code with value set url

Returns a Parameters for a specified value set `_url` parameter.

```json
{
    "resourceType": "Parameters",
    "parameter": [
        {
            "name": "result",
            "valueBoolean": true
        },
        {
            "name": "display",
            "valueString": "Nurse"
        }
    ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Expand NCIt value set with value set url

Returns a Value Set for all value sets for a specified `_url` parameter.

```json
{
  "resourceType": "ValueSet",
  "id": "ncit_C54585",
  "url": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
  "identifier": [
    {
      "value": "C54585"
    }
  ],
  "version": "24.08d",
  "name": "Occupation ICSR Terminology",
  "title": "ncit",
  "status": "active",
  "experimental": false,
  "publisher": "NCI",
  "description": "Value set representing the ncit subset C54585",
  "expansion": {
    "timestamp": "2024-09-05T15:47:46-04:00",
    "total": 10,
    "offset": 0,
    "contains": [
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C1000",
        "display": "Recombinant Amphiregulin"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C10000",
        "display": "Cyclophosphamide/Fluoxymesterone/Mitolactol/Prednisone/Tamoxifen"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100000",
        "display": "Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Stable-Over 12 Hours From Symptom Onset"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100001",
        "display": "Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Stable After Successful Full-Dose Thrombolytic Therapy"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100002",
        "display": "Percutaneous Coronary Intervention for ST Elevation Myocardial Infarction-Unstable-Over 12 Hours From Symptom Onset"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100003",
        "display": "Percutaneous Mitral Valve Repair"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100004",
        "display": "Pericardial Stripping"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100005",
        "display": "Post-Cardiac Transplant Evaluation"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100006",
        "display": "Pre-Operative Evaluation for Non-Cardiovascular Surgery"
      },
      {
        "system": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl?fhir_vs=C54585",
        "code": "C100007",
        "display": "Previously Implanted Cardiac Lead"
      }
    ]
  }
}
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

Returns a Concept Map for the specified `_id` parameter.

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

### Find concept maps by id

Returns a Bundle for a specified concept map `_code` parameter.

```json
{
  "resourceType": "Bundle",
  "id": "e97ec651-f6a0-47ff-8cdc-66c876e20ac5",
  "meta": {
    "lastUpdated": "2024-09-05T15:54:21.526-04:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ConceptMap?_id=GO_to_NCIt_Mapping_February2020"
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
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Find concept maps by url

Returns a Bundle for a specified concept map `_url` parameter.

```json
{
  "resourceType": "Bundle",
  "id": "0513296b-5b32-4f92-bfcd-5414845a6014",
  "meta": {
    "lastUpdated": "2024-09-05T15:55:07.423-04:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://ncias-p2325-c.nci.nih.gov:8080/fhir/r4/ConceptMap?url=http://purl.obolibrary.org/obo/go.owl?fhir_cm=GO_to_NCIt_Mapping"
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
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)


### Translate GO code no id

Returns a Parameters for a specified GO code but no `_id` parameter.

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": false
    },
    {
      "name": "match",
      "valueString": "none"
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate GO code with id

Returns a Parameters for a specified concept map `_id` and GO `_code`  parameter.

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

### Translate GO code in reverse

Returns a Parameters for a specified `_code`, and `_reverse=true` parameter.

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "result",
      "valueBoolean": false
    },
    {
      "name": "match",
      "valueString": "none"
    }
  ]
}
```

[Back to Top](#evsrestapi-fhir-tutorial)

### Translate GO code in reverse with id

Returns a Parameters for a specified concept map `_id`, `_code`, and `_reverse=true` parameter.

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