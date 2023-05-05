EVSRESTAPI CT in 5 minutes: bash Tutorial
=========================================

This tutorial shows how to use bash scripts to access NCI Thesaurus content from the EVSRESTAPI.

Prerequisites
-------------
* bash must be installed
* curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
* jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))

The various scripts make use of the local `url.env` file to define the EVSRESTAPI endpoint that scripts will connect to.

Test Scripts
------------
- [get-terminologies.sh](#get-terminologiessh)
- [get-concept.sh](#get-conceptsh)
- [get-concept-part.sh](#get-concept-partsh)
- [find-concepts.sh](#find-conceptssh)
- [get-descendants.sh](#get-descendantssh)
- [get-subtree.sh](#get-subtreesh)
- [get-paths.sh](#get-pathssh)
- [get-association.sh](#get-conceptsh)
- [get-role.sh](#get-rolesh)
- [get-property.sh](#get-propertysh)
- [get-qualifier.sh](#get-qualifiersh)
- [get-term-types.sh](#get-term-typessh)
- [get-synonym-sources.sh](#get-synonym-sourcessh)
- [get-synonym-types.sh](#get-synonym-typessh)
- [get-definition-types.sh](#get-definition-typessh)
- [get-subsets.sh](#get-subsetssh)
- [get-mapsets.sh](#get-mapsetsssh)
- [get-inactive-replacements.sh](#get-inactive-replacementsssh)

The following examples can be typed into the command line of any terminal that has bash, cURL and jq installed.  Run each script with no parameters for examples of how to call each one.

### get-terminologies.sh

Return terminologies currently hosted by the API.  This script takes parameters to
filter the results by terminology, by latest flag, and by tags associated with
the terminology (primarily for ncit "monthly" and "weekly").  This example returns
the latest monthly version of NCI Thesaurus.

```
$ ./get-terminologies.sh  --terminology ncit --latest true --tag monthly
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:06:30 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
tag = monthly
latest = true

  Performing terminologies lookup
    count = 1

    [
      {
        "terminology": "ncit",
        "version": "21.11e",
        "date": "November 29, 2021",
        "name": "NCI Thesaurus 21.11e",
        "description": "NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise
Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Instit
utes of Health, Bethesda, MD 20892, U.S.A.",
        "graph": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
        "source": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl",
        "terminologyVersion": "ncit_21.11e",
        "latest": true,
        "tags": {
          "monthly": "true",
          "weekly": "true"
        },
        "indexName": "concept_ncit_2111e",
        "objectIndexName": "evs_object_ncit_2111e",
        "metadata": {
          "code": "NHC0",
          "conceptStatus": "P310",
          "retiredStatusValue": "Retired_Concept",
          "preferredName": "P108",
          "relationshipToTarget": "P393",
          "synonym": [
            "P90",
            "P108",
            "P107"
          ],
          "synonymTermType": "P383",
          "synonymSource": "P384",
          "synonymCode": "P385",
          "synonymSubSource": "P386",
          "definition": [
            "P325",
            "P97"
          ],
          "definitionSource": "P378",
          "mapRelation": "P393",
          "map": "P375",
          "mapTarget": "P395",
          "mapTargetTermType": "P394",
          "mapTargetTerminology": "P396",
          "mapTargetTerminologyVersion": "P397",
          "propertyNames": {
            "NHC0": "code",
            "P107": "Display_Name",
            "P108": "Preferred_Name",
            "P97": "DEFINITION",
            "P325": "ALT_DEFINITION",
            "P90": "FULL_SYN",
            "rdfs:label": "label",
            "P375": "Maps_To"
          },
          "subsetMember": [
            "A8"
          ],
          "monthlyDb": "NCIT2",
          "subset": [
            "C54443"
          ]
        }
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:06:31 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-concept.sh

Return concept information for a specified terminology and code.  The "include" parameter
can be used to specify the amount of information you want back.  Try with "minimal",
"summary", and "full".

```
$ ./get-concept.sh ncit C3224 --include minimal
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:08:01 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224
include  = minimal

  Get role for ncit C3224:

    {
      "code": "C3224",
      "name": "Melanoma",
      "terminology": "ncit",
      "version": "21.11e",
      "leaf": false
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:08:02 PM
-----------------------------------------------------
```

This script can also concept information for a list of concept codes.  
The "include" parameter can be used to specify the amount of information you 
want back.  Try with "minimal", "summary", and "full".

```
$ ./get-concept.sh ncit C3224,C3910 --include minimal
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:08:30 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224,C3910
include  = minimal

  Get roles for ncit C3224,C3910:

    [
      {
        "code": "C3224",
        "name": "Melanoma",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C3910",
        "name": "Molecular Abnormality",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:08:31 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-concept-part.sh

Used to call the APIs for the sub-parts of concepts.  The supported list includes:
children, parents, roles, associations, inverseRoles, inverseAssociations, maps,
and disjointWith. The following examples shows the "children", but this parameter
could be easily replaced by any of the options listed above.

```
$ ./get-concept-part.sh ncit C3224 children
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:09:34 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224
part = children

  Get children for ncit C3224:

    [
      {
        "code": "C3802",
        "name": "Amelanotic Melanoma",
        "leaf": false
      },
      {
        "code": "C8410",
        "name": "Breast Melanoma",
        "leaf": true
      },
      {
        "code": "C131506",
        "name": "Childhood Melanoma",
        "leaf": true
      },
      {
        "code": "C3510",
        "name": "Cutaneous Melanoma",
        "leaf": false
      },
      {
        "code": "C4236",
        "name": "Epithelioid Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C9499",
        "name": "Melanomatosis",
        "leaf": false
      },
      {
        "code": "C8925",
        "name": "Metastatic Melanoma",
        "leaf": false
      },
      {
        "code": "C66756",
        "name": "Mixed Epithelioid and Spindle Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C8711",
        "name": "Non-Cutaneous Melanoma",
        "leaf": false
      },
      {
        "code": "C8562",
        "name": "Ocular Melanoma",
        "leaf": false
      },
      {
        "code": "C118828",
        "name": "Orbital Melanoma",
        "leaf": true
      },
      {
        "code": "C162547",
        "name": "Penile Melanoma",
        "leaf": false
      },
      {
        "code": "C7087",
        "name": "Recurrent Melanoma",
        "leaf": false
      },
      {
        "code": "C147983",
        "name": "Refractory Melanoma",
        "leaf": false
      },
      {
        "code": "C4228",
        "name": "Regressing Melanoma",
        "leaf": false
      },
      {
        "code": "C4237",
        "name": "Spindle Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C148517",
        "name": "Unresectable Melanoma",
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:09:35 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### find-concepts.sh

Used to perform text searches to find matching concepts. In its simplest form the
script will perform a simple "contains" text search for concepts within the specified
terminology.  Use the --include parameter to control how much information to get back,
use the --type to change the nature of the search, and use --fromRecord and --pageSize
to control which records to return. 

```
$ ./find-concepts.sh ncit "malignant melanoma" --pageSize 5
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:09:59 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
term = malignant melanoma
include =

  Find concept for ncit malignant melanoma:

    {
      "total": 4834,
      "timeTaken": 153,
      "parameters": {
        "term": "malignant melanoma",
        "type": "contains",
        "include": "minimal",
        "fromRecord": 0,
        "pageSize": 5,
        "terminology": [
          "ncit"
        ]
      },
      "concepts": [
        {
          "code": "C16835",
          "name": "Experimental Malignant Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "leaf": false
        },
        {
          "code": "C60451",
          "name": "Rat Malignant Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "leaf": true
        },
        {
          "code": "C16317",
          "name": "B16 Malignant Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "leaf": true
        },
        {
          "code": "C128801",
          "name": "Cutaneous Malignant Melanoma 2",
          "terminology": "ncit",
          "version": "21.11e",
          "leaf": true
        },
        {
          "code": "C16444",
          "name": "Cloudman S91 Malignant Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "leaf": true
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:10:00 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-descendants.sh

Used to get descendant graph for a specified terminology and code.  
The --fromRecord and --pageSize parameters allow the descendant list to
be paged for very large results.  This example shows just five descendants.

```
$ ./get-descendants.sh ncit C3224 --pageSize 5
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:10:45 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224
fromRecord =
pageSize = 5

  Get descendants for ncit C3224:
    count = 5

    [
      {
        "code": "C4022",
        "name": "Acral Lentiginous Melanoma",
        "level": 3,
        "leaf": false
      },
      {
        "code": "C5319",
        "name": "Adult Meningeal Melanoma",
        "level": 4,
        "leaf": true
      },
      {
        "code": "C155311",
        "name": "Advanced Cutaneous Melanoma of the Extremity",
        "level": 3,
        "leaf": true
      },
      {
        "code": "C171572",
        "name": "Advanced Cutaneous Melanoma",
        "level": 3,
        "leaf": false
      },
      {
        "code": "C153169",
        "name": "Advanced Melanoma",
        "level": 2,
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:10:46 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-subtree.sh

Used to get the entire subtree from the root node to the specified code, for a specified terminology. The result includes the sibling nodes at each level as well.

```
$ ./get-subtree.sh ncit C3224
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:12:05 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224

  Get subtree for ncit C3224:
    count = 19

    [
      {
        "code": "C12913",
        "label": "Abnormal Cell",
        "leaf": false
      },
...
      {
        "code": "C20189",
        "label": "Property or Attribute",
        "leaf": false
      },
      {
        "code": "C28428",
        "label": "Retired Concept",
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:12:07 PM
-----------------------------------------------------
```

Can also be used to get the children subtree nodes for the specified code. For example:

```
$ ./get-subtree.sh ncit C3224 --children
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:13:50 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224

  Get subtree children for ncit C3224:
    count = 17

    [
      {
        "code": "C3802",
        "label": "Amelanotic Melanoma",
        "leaf": false
      },
      {
        "code": "C8410",
        "label": "Breast Melanoma",
        "leaf": true
      },
      {
        "code": "C131506",
        "label": "Childhood Melanoma",
        "leaf": true
      },
      {
        "code": "C3510",
        "label": "Cutaneous Melanoma",
        "leaf": false
      },
      {
        "code": "C4236",
        "label": "Epithelioid Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C9499",
        "label": "Melanomatosis",
        "leaf": false
      },
      {
        "code": "C8925",
        "label": "Metastatic Melanoma",
        "leaf": false
      },
      {
        "code": "C66756",
        "label": "Mixed Epithelioid and Spindle Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C8711",
        "label": "Non-Cutaneous Melanoma",
        "leaf": false
      },
      {
        "code": "C8562",
        "label": "Ocular Melanoma",
        "leaf": false
      },
      {
        "code": "C118828",
        "label": "Orbital Melanoma",
        "leaf": true
      },
      {
        "code": "C162547",
        "label": "Penile Melanoma",
        "leaf": false
      },
      {
        "code": "C7087",
        "label": "Recurrent Melanoma",
        "leaf": false
      },
      {
        "code": "C147983",
        "label": "Refractory Melanoma",
        "leaf": false
      },
      {
        "code": "C4228",
        "label": "Regressing Melanoma",
        "leaf": false
      },
      {
        "code": "C4237",
        "label": "Spindle Cell Melanoma",
        "leaf": false
      },
      {
        "code": "C148517",
        "label": "Unresectable Melanoma",
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:13:51 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-paths.sh

Return information about root codes, paths to root codes, or paths from
a code to an ancestor code.  In its simplest form, the script will return
a list of root concepts.

```
$ ./get-paths.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:14:26 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code =
ancestor code =
include =

  Get root codes

    [
      {
        "code": "C12913",
        "name": "Abnormal Cell",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C43431",
        "name": "Activity",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C12219",
        "name": "Anatomic Structure, System, or Substance",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C20633",
        "name": "Biochemical Pathway",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C17828",
        "name": "Biological Process",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C12218",
        "name": "Chemotherapy Regimen or Agent Combination",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C20181",
        "name": "Conceptual Entity",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C20047",
        "name": "Diagnostic or Prognostic Factor",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C7057",
        "name": "Disease, Disorder or Finding",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C1908",
        "name": "Drug, Food, Chemical or Biomedical Material",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C22188",
        "name": "Experimental Organism Anatomical Concept",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C22187",
        "name": "Experimental Organism Diagnosis",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C16612",
        "name": "Gene",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C26548",
        "name": "Gene Product",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C97325",
        "name": "Manufactured Object",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C3910",
        "name": "Molecular Abnormality",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C14250",
        "name": "Organism",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C20189",
        "name": "Property or Attribute",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      },
      {
        "code": "C28428",
        "name": "Retired Concept",
        "terminology": "ncit",
        "version": "21.11e",
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:14:28 PM
-----------------------------------------------------
```

By specifying a code, the script will produce a list of paths from that 
code to the corresponding root concept.  There may be more than one path through
the tree.

```
$ ./get-paths.sh ncit C3224
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:14:50 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224
ancestor code =
include =

  Get paths to root concept

    [
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 0,
          "leaf": false
        },
        {
          "code": "C7058",
          "name": "Melanocytic Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 1,
          "leaf": false
        },
        {
          "code": "C4741",
          "name": "Neoplasm by Morphology",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 2,
          "leaf": false
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 3,
          "leaf": false
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 4,
          "leaf": false
        },
        {
          "code": "C7057",
          "name": "Disease, Disorder or Finding",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 5,
          "leaf": false
        }
      ],
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 0,
          "leaf": false
        },
        {
          "code": "C9305",
          "name": "Malignant Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 1,
          "leaf": false
        },
        {
          "code": "C7062",
          "name": "Neoplasm by Special Category",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 2,
          "leaf": false
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 3,
          "leaf": false
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 4,
          "leaf": false
        },
        {
          "code": "C7057",
          "name": "Disease, Disorder or Finding",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 5,
          "leaf": false
        }
      ]
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:14:52 PM
-----------------------------------------------------
```

By specifying a code and an optional ancestor code, the script will produce a list of 
paths from that code to the corresponding ancestor code.  There may be more than one 
path through the tree.

```
$ ./get-paths.sh ncit C3224 --anc C2991
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:15:13 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C3224
ancestor code = C2991
include =

  Get paths to ancestor codes

    [
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 0,
          "leaf": false
        },
        {
          "code": "C7058",
          "name": "Melanocytic Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 1,
          "leaf": false
        },
        {
          "code": "C4741",
          "name": "Neoplasm by Morphology",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 2,
          "leaf": false
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 3,
          "leaf": false
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 4,
          "leaf": false
        }
      ],
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 0,
          "leaf": false
        },
        {
          "code": "C9305",
          "name": "Malignant Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 1,
          "leaf": false
        },
        {
          "code": "C7062",
          "name": "Neoplasm by Special Category",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 2,
          "leaf": false
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 3,
          "leaf": false
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "terminology": "ncit",
          "version": "21.11e",
          "level": 4,
          "leaf": false
        }
      ]
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:15:15 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-association.sh

Return information about associations for a specified terminology.  In its simplest form,
this script will return basic information about all associations for a terminology.

```
$ ./get-association.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:15:39 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get associations for ncit:

    [
      {
        "code": "A8",
        "name": "Concept_In_Subset",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A10",
        "name": "Has_CDRH_Parent",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A15",
        "name": "Has_CTCAE_5_Parent",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A27",
        "name": "Has_CTDC_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A40",
        "name": "Has_DIPG_DMG_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A12",
        "name": "Has_Data_Element",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A6",
        "name": "Has_Free_Acid_Or_Base_Form",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A31",
        "name": "Has_GDC_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A30",
        "name": "Has_ICDC_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A16",
        "name": "Has_INC_Parent",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A11",
        "name": "Has_NICHD_Parent",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A36",
        "name": "Has_PCDC_ALL_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A26",
        "name": "Has_PCDC_AML_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A23",
        "name": "Has_PCDC_Data_Type",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A29",
        "name": "Has_PCDC_EWS_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A34",
        "name": "Has_PCDC_GCT_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A39",
        "name": "Has_PCDC_HL_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A38",
        "name": "Has_PCDC_OS_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A19",
        "name": "Has_Pharmaceutical_Administration_Method",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A18",
        "name": "Has_Pharmaceutical_Basic_Dose_Form",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A20",
        "name": "Has_Pharmaceutical_Intended_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A21",
        "name": "Has_Pharmaceutical_Release_Characteristics",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A17",
        "name": "Has_Pharmaceutical_State_Of_Matter",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A22",
        "name": "Has_Pharmaceutical_Transformation",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A5",
        "name": "Has_Salt_Form",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A37",
        "name": "Has_SeroNet_Permissible_Value",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A7",
        "name": "Has_Target",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A35",
        "name": "Is_PCDC_ALL_Permissible_Value_For_Variable",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A24",
        "name": "Is_PCDC_AML_Permissible_Value_For_Variable",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A28",
        "name": "Is_PCDC_EWS_Permissible_Value_For_Variable",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A33",
        "name": "Is_PCDC_GCT_Permissible_Value_For_Variable",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A9",
        "name": "Is_Related_To_Endogenous_Product",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A32",
        "name": "Is_Value_For_GDC_Property",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A14",
        "name": "Neoplasm_Has_Special_Category",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A4",
        "name": "Qualifier_Applies_To",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A13",
        "name": "Related_To_Genetic_Biomarker",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A1",
        "name": "Role_Has_Domain",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A3",
        "name": "Role_Has_Parent",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A2",
        "name": "Role_Has_Range",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "A25",
        "name": "Value_Set_Is_Paired_With",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:15:40 PM
-----------------------------------------------------
```

The script can also return information about a single association (by code or label), 
or a list of associations.

```
$ ./get-association.sh ncit A10
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:16:12 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = A10
include =

  Get association for ncit A10:

    {
      "code": "A10",
      "name": "Has_CDRH_Parent",
      "terminology": "ncit",
      "version": "21.11e"
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:16:14 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-association.sh ncit Role_Has_Domain --include synonyms
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:16:28 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Role_Has_Domain
include = synonyms

  Get association for ncit Role_Has_Domain:

    {
      "code": "A1",
      "name": "Role_Has_Domain",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "Role Has Domain",
          "type": "Display_Name"
        },
        {
          "name": "Role_Has_Domain",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "Role_Has_Domain",
          "type": "Preferred_Name"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:16:29 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-role.sh

Return information about roles for a specified terminology.  In its simplest form,
this script will return basic information about all roles for a terminology.

```
$ ./get-role.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:16:46 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get roles for ncit:

    [
      {
        "code": "R156",
        "name": "Allele_Absent_From_Wild-type_Chromosomal_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R153",
        "name": "Allele_Has_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R159",
        "name": "Allele_Has_Activity",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R155",
        "name": "Allele_In_Chromosomal_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R158",
        "name": "Allele_Plays_Altered_Role_In_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R160",
        "name": "Allele_Plays_Role_In_Metabolism_Of_Chemical_Or_Drug",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R81",
        "name": "Anatomic_Structure_Has_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R82",
        "name": "Anatomic_Structure_Is_Physical_Part_Of",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R30",
        "name": "Biological_Process_Has_Associated_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R32",
        "name": "Biological_Process_Has_Initiator_Chemical_Or_Drug",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R28",
        "name": "Biological_Process_Has_Initiator_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R31",
        "name": "Biological_Process_Has_Result_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R34",
        "name": "Biological_Process_Has_Result_Biological_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R29",
        "name": "Biological_Process_Has_Result_Chemical_Or_Drug",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R35",
        "name": "Biological_Process_Is_Part_Of_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R150",
        "name": "Chemical_Or_Drug_Affects_Abnormal_Cell",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R72",
        "name": "Chemical_Or_Drug_Affects_Cell_Type_Or_Tissue",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R146",
        "name": "Chemical_Or_Drug_Affects_Gene_Product",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R124",
        "name": "Chemical_Or_Drug_Has_Mechanism_Of_Action",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R125",
        "name": "Chemical_Or_Drug_Has_Physiologic_Effect",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R122",
        "name": "Chemical_Or_Drug_Is_Metabolized_By_Enzyme",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R66",
        "name": "Chemical_Or_Drug_Plays_Role_In_Biological_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R123",
        "name": "Chemotherapy_Regimen_Has_Component",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R27",
        "name": "Conceptual_Part_Of",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R173",
        "name": "Cytogenetic_Abnormality_Involves_Chromosome",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R139",
        "name": "Disease_Excludes_Abnormal_Cell",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R141",
        "name": "Disease_Excludes_Cytogenetic_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R142",
        "name": "Disease_Excludes_Finding",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R136",
        "name": "Disease_Excludes_Metastatic_Anatomic_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R140",
        "name": "Disease_Excludes_Molecular_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R138",
        "name": "Disease_Excludes_Normal_Cell_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R137",
        "name": "Disease_Excludes_Normal_Tissue_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R135",
        "name": "Disease_Excludes_Primary_Anatomic_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R105",
        "name": "Disease_Has_Abnormal_Cell",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R100",
        "name": "Disease_Has_Associated_Anatomic_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R126",
        "name": "Disease_Has_Associated_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R107",
        "name": "Disease_Has_Cytogenetic_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R108",
        "name": "Disease_Has_Finding",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R102",
        "name": "Disease_Has_Metastatic_Anatomic_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R106",
        "name": "Disease_Has_Molecular_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R104",
        "name": "Disease_Has_Normal_Cell_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R103",
        "name": "Disease_Has_Normal_Tissue_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R101",
        "name": "Disease_Has_Primary_Anatomic_Site",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R110",
        "name": "Disease_Is_Grade",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R88",
        "name": "Disease_Is_Stage",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R174",
        "name": "Disease_Mapped_To_Chromosome",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R176",
        "name": "Disease_Mapped_To_Gene",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R113",
        "name": "Disease_May_Have_Abnormal_Cell",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R116",
        "name": "Disease_May_Have_Associated_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R114",
        "name": "Disease_May_Have_Cytogenetic_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R115",
        "name": "Disease_May_Have_Finding",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R89",
        "name": "Disease_May_Have_Molecular_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R112",
        "name": "Disease_May_Have_Normal_Cell_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R111",
        "name": "Disease_May_Have_Normal_Tissue_Origin",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R23",
        "name": "EO_Disease_Has_Associated_Cell_Type",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R25",
        "name": "EO_Disease_Has_Associated_EO_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R26",
        "name": "EO_Disease_Has_Property_Or_Attribute",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R24",
        "name": "EO_Disease_Maps_To_Human_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R38",
        "name": "Gene_Associated_With_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R41",
        "name": "Gene_Found_In_Organism",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R132",
        "name": "Gene_Has_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R145",
        "name": "Gene_Has_Physical_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R40",
        "name": "Gene_In_Chromosomal_Location",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R175",
        "name": "Gene_Involved_In_Pathogenesis_Of_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R36",
        "name": "Gene_Is_Biomarker_Type",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R130",
        "name": "Gene_Is_Element_In_Pathway",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R178",
        "name": "Gene_Mutant_Encodes_Gene_Product_Sequence_Variation",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R37",
        "name": "Gene_Plays_Role_In_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R54",
        "name": "Gene_Product_Encoded_By_Gene",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R49",
        "name": "Gene_Product_Expressed_In_Tissue",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R133",
        "name": "Gene_Product_Has_Abnormality",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R46",
        "name": "Gene_Product_Has_Associated_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R52",
        "name": "Gene_Product_Has_Biochemical_Function",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R44",
        "name": "Gene_Product_Has_Chemical_Classification",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R45",
        "name": "Gene_Product_Has_Organism_Source",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R50",
        "name": "Gene_Product_Has_Structural_Domain_Or_Motif",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R47",
        "name": "Gene_Product_Is_Biomarker_Of",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R42",
        "name": "Gene_Product_Is_Biomarker_Type",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R131",
        "name": "Gene_Product_Is_Element_In_Pathway",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R51",
        "name": "Gene_Product_Is_Physical_Part_Of",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R48",
        "name": "Gene_Product_Malfunction_Associated_With_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R53",
        "name": "Gene_Product_Plays_Role_In_Biological_Process",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R179",
        "name": "Gene_Product_Sequence_Variation_Encoded_By_Gene_Mutant",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R182",
        "name": "Gene_Product_Variant_Of_Gene_Product",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R177",
        "name": "Molecular_Abnormality_Involves_Gene",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R171",
        "name": "Procedure_Has_Completely_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R167",
        "name": "Procedure_Has_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R165",
        "name": "Procedure_Has_Imaged_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R169",
        "name": "Procedure_Has_Partially_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R163",
        "name": "Procedure_Has_Target_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R180",
        "name": "Procedure_Has_Target_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R170",
        "name": "Procedure_May_Have_Completely_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R166",
        "name": "Procedure_May_Have_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R168",
        "name": "Procedure_May_Have_Partially_Excised_Anatomy",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R181",
        "name": "Procedure_Uses_Manufactured_Object",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "R172",
        "name": "Regimen_Has_Accepted_Use_For_Disease",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:16:47 PM
-----------------------------------------------------
```

The script can also return information about a single role (by code or label), 
or a list of role.

```
$ ./get-role.sh ncit R156
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:17:27 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = R156
include =

  Get role for ncit R156:

    {
      "code": "R156",
      "name": "Allele_Absent_From_Wild-type_Chromosomal_Location",
      "terminology": "ncit",
      "version": "21.11e"
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:17:28 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-role.sh ncit Allele_Has_Abnormality --include synonyms
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:17:41 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Allele_Has_Abnormality
include = synonyms

  Get role for ncit Allele_Has_Abnormality:

    {
      "code": "R153",
      "name": "Allele_Has_Abnormality",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "Has Abnormality",
          "type": "Display_Name"
        },
        {
          "name": "Allele_Has_Abnormality",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "Allele_Has_Abnormality",
          "type": "Preferred_Name"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:17:43 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-property.sh

Return information about properties for a specified terminology.  In its simplest form,
this script will return basic information about all properties for a terminology.

```
$ ./get-property.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:17:58 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get properties for ncit:

    [
      {
        "code": "P302",
        "name": "Accepted_Therapeutic_Use_For",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P216",
        "name": "BioCarta_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P210",
        "name": "CAS_Registry",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P368",
        "name": "CHEBI_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P350",
        "name": "Chemical_Formula",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P310",
        "name": "Concept_Status",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P322",
        "name": "Contributing_Source",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P98",
        "name": "DesignNote",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P321",
        "name": "EntrezGene_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P356",
        "name": "Essential_Amino_Acid",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P357",
        "name": "Essential_Fatty_Acid",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P361",
        "name": "Extensible_List",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P317",
        "name": "FDA_Table",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P319",
        "name": "FDA_UNII_Code",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P211",
        "name": "GO_Annotation",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P102",
        "name": "GenBank_Accession_Number",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P96",
        "name": "Gene_Encodes_Product",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P369",
        "name": "HGNC_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P101",
        "name": "Homologous_Gene",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P334",
        "name": "ICD-O-3_Code",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P353",
        "name": "INFOODS",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P167",
        "name": "Image_Link",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P215",
        "name": "KEGG_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P366",
        "name": "Legacy Concept Name",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P332",
        "name": "MGI_Accession_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P360",
        "name": "Macronutrient",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P375",
        "name": "Maps_To",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P359",
        "name": "Micronutrient",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P331",
        "name": "NCBI_Taxon_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P399",
        "name": "NCI_Drug_Dictionary_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P208",
        "name": "NCI_META_CUI",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P371",
        "name": "NICHD_Hierarchy_Term",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P175",
        "name": "NSC Number",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P363",
        "name": "Neoplastic_Status",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P358",
        "name": "Nutrient",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P320",
        "name": "OID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P364",
        "name": "OLD_ASSOCIATION",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P201",
        "name": "OLD_CHILD",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P203",
        "name": "OLD_KIND",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P200",
        "name": "OLD_PARENT",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P204",
        "name": "OLD_ROLE",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P365",
        "name": "OLD_SOURCE_ASSOCIATION",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P205",
        "name": "OLD_STATE",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P100",
        "name": "OMIM_Number",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P330",
        "name": "PDQ_Closed_Trial_Search_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P329",
        "name": "PDQ_Open_Trial_Search_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P367",
        "name": "PID_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P171",
        "name": "PubMedID_Primary_Reference",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P372",
        "name": "Publish_Value_Set",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P316",
        "name": "Relative_Enzyme_Activity",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P315",
        "name": "SNP_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P106",
        "name": "Semantic_Type",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P92",
        "name": "Subsource",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P93",
        "name": "Swiss_Prot",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P376",
        "name": "Term_Browser_Value_Set_Description",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P352",
        "name": "Tolerable_Level",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P207",
        "name": "UMLS_CUI",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P354",
        "name": "USDA_ID",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P351",
        "name": "US_Recommended_Intake",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P355",
        "name": "Unit",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P333",
        "name": "Use_For",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P398",
        "name": "Value_Set_Pair",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P362",
        "name": "miRBase_ID",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:17:59 PM
-----------------------------------------------------
```

The script can also return information about a single property (by code or label), 
or a list of property.

```
$ ./get-property.sh ncit P302
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:19:18 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P302
include =

  Get property for ncit P302:

    {
      "code": "P302",
      "name": "Accepted_Therapeutic_Use_For",
      "terminology": "ncit",
      "version": "21.11e"
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:19:20 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-property.sh ncit Accepted_Therapeutic_Use_For --include synonyms
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:19:36 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Accepted_Therapeutic_Use_For
include = synonyms

  Get property for ncit Accepted_Therapeutic_Use_For:

    {
      "code": "P302",
      "name": "Accepted_Therapeutic_Use_For",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "Accepted Therapeutic Use For",
          "type": "Display_Name"
        },
        {
          "name": "Accepted_Therapeutic_Use_For",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "Accepted_Therapeutic_Use_For",
          "type": "Preferred_Name"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:19:37 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-qualifier.sh

Return information about qualifiers for a specified terminology.  In its simplest form,
this script will return basic information about all qualifiers for a terminology.

```
$ ./get-qualifier.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:19:56 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get qualifiers for ncit:

    [
      {
        "code": "P381",
        "name": "attribution",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P387",
        "name": "go-id",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P389",
        "name": "go-evi",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P390",
        "name": "go-source",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P391",
        "name": "source-date",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:19:57 PM
-----------------------------------------------------
```

The script can also return information about a single qualifier (by code or label), 
or a list of qualifier.

```
$ ./get-qualifier.sh  ncit P389
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:20:13 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P389
include =

  Get qualifier for ncit P389:

    {
      "code": "P389",
      "name": "go-evi",
      "terminology": "ncit",
      "version": "21.11e"
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:20:14 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-qualifier.sh ncit go-evi --include synonyms
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:20:32 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = go-evi
include = synonyms

  Get qualifier for ncit go-evi:

    {
      "code": "P389",
      "name": "go-evi",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "go-evi",
          "type": "Preferred_Name"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:20:33 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-term-types.sh

Return information about term types for a specified terminology.

```
$ ./get-term-types.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:20:53 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit

  Get term types for ncit:

    [
      {
        "code": "AB",
        "name": "Abbreviation",
        "terminology": "ncit"
      },
      {
        "code": "AD",
        "name": "Adjectival form (and other parts of grammar)",
        "terminology": "ncit"
      },
      {
        "code": "AQ*",
        "name": "Antiquated preferred term",
        "terminology": "ncit"
      },
      {
        "code": "AQS",
        "name": "Antiquated term, use when there are antiquated synonyms within a concept",
        "terminology": "ncit"
      },
      {
        "code": "BR",
        "name": "US brand name, which may be trademarked",
        "terminology": "ncit"
      },
      {
        "code": "CA2",
        "name": "ISO 3166 alpha-2 country code",
        "terminology": "ncit"
      },
      {
        "code": "CA3",
        "name": "ISO 3166 alpha-3 country code",
        "terminology": "ncit"
      },
      {
        "code": "CN",
        "name": "Drug study code",
        "terminology": "ncit"
      },
      {
        "code": "CNU",
        "name": "ISO 3166 numeric country code",
        "terminology": "ncit"
      },
      {
        "code": "CS",
        "name": "US State Department country code",
        "terminology": "ncit"
      },
      {
        "code": "DN",
        "name": "Display name",
        "terminology": "ncit"
      },
      {
        "code": "FB",
        "name": "Foreign brand name, which may be trademarked",
        "terminology": "ncit"
      },
      {
        "code": "HD*",
        "name": "Header (groups concepts, but not used for coding data)",
        "terminology": "ncit"
      },
      {
        "code": "PT*",
        "name": "Preferred term",
        "terminology": "ncit"
      },
      {
        "code": "SN",
        "name": "Chemical structure name",
        "terminology": "ncit"
      },
      {
        "code": "SY",
        "name": "Synonym",
        "terminology": "ncit"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:20:57 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-synonym-sources.sh

Return information about synonym sources for a specified terminology.

```
$ ./get-synonym-sources.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:21:17 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit

  Get synonym sources for ncit:

    [
      {
        "code": "ACC/AHA",
        "name": "American College of Cardiology / American Heart Association",
        "terminology": "ncit"
      },
      {
        "code": "BIOCARTA",
        "name": "BioCarta online maps of molecular pathways, adapted for NCI use",
        "terminology": "ncit"
      },
      {
        "code": "BRIDG",
        "name": "Biomedical Research Integrated Domain Model Group",
        "terminology": "ncit"
      },
      {
        "code": "BRIDG 3.0.3",
        "name": "Biomedical Research Integrated Domain Model Group, version 3.0.3",
        "terminology": "ncit"
      },
      {
        "code": "BRIDG 5.3",
        "name": "Biomedical Research Integrated Domain Model Group, version 5.3",
        "terminology": "ncit"
      },
      {
        "code": "CBDD",
        "name": "Chemical Biology and Drug Development",
        "terminology": "ncit"
      },
      {
        "code": "CCPS",
        "name": "Childhood Cancer Predisposition Study",
        "terminology": "ncit"
      },
      {
        "code": "CDC",
        "name": "U.S. Centers for Disease Control and Prevention",
        "terminology": "ncit"
      },
      {
        "code": "CDISC",
        "name": "Clinical Data Interchange Standards Consortium",
        "terminology": "ncit"
      },
      {
        "code": "CDISC-GLOSS",
        "name": "CDISC Glossary Terminology",
        "terminology": "ncit"
      },
      {
        "code": "CPTAC",
        "name": "Clinical Proteomic Tumor Analysis Consortium",
        "terminology": "ncit"
      },
      {
        "code": "CRCH",
        "name": "Cancer Research Center of Hawaii Nutrition Terminology",
        "terminology": "ncit"
      },
      {
        "code": "CTCAE",
        "name": "Common Terminology Criteria for Adverse Events",
        "terminology": "ncit"
      },
      {
        "code": "CTCAE 3.0",
        "name": "Common Terminology Criteria for Adverse Events, version 3.0",
        "terminology": "ncit"
      },
      {
        "code": "CTCAE 5.0",
        "name": "Common Terminology Criteria for Adverse Events, version 5.0",
        "terminology": "ncit"
      },
      {
        "code": "CTDC",
        "name": "Clinical Trials Data Commons",
        "terminology": "ncit"
      },
      {
        "code": "CTEP",
        "name": "Cancer Therapy Evaluation Program",
        "terminology": "ncit"
      },
      {
        "code": "CTRP",
        "name": "Clinical Trials Reporting Program",
        "terminology": "ncit"
      },
      {
        "code": "CareLex",
        "name": "CareLex electronic Trial Master File Terminology",
        "terminology": "ncit"
      },
      {
        "code": "Cellosaurus",
        "name": "Cellosaurus - a knowledge resource on cell lines",
        "terminology": "ncit"
      },
      {
        "code": "DCP",
        "name": "NCI Division of Cancer Prevention Program",
        "terminology": "ncit"
      },
      {
        "code": "DICOM",
        "name": "Digital Imaging Communications in Medicine",
        "terminology": "ncit"
      },
      {
        "code": "DIPG/DMG",
        "terminology": "ncit"
      },
      {
        "code": "DTP",
        "name": "NCI Developmental Therapeutics Program",
        "terminology": "ncit"
      },
      {
        "code": "EDQM-HC",
        "name": "European Directorate for the Quality of Medicines & Healthcare",
        "terminology": "ncit"
      },
      {
        "code": "FDA",
        "name": "U.S. Food and Drug Administration",
        "terminology": "ncit"
      },
      {
        "code": "GAIA",
        "name": "Global Alignment of Immunization safety Assessment in pregnancy Terminology",
        "terminology": "ncit"
      },
      {
        "code": "GDC",
        "name": "Genomic Data Commons",
        "terminology": "ncit"
      },
      {
        "code": "GENC",
        "name": "Geopolitical Entities, Names, and Codes Terminology",
        "terminology": "ncit"
      },
      {
        "code": "HGNC",
        "name": "HUGO Gene Nomenclature Committee",
        "terminology": "ncit"
      },
      {
        "code": "HL7",
        "name": "Health Level Seven International",
        "terminology": "ncit"
      },
      {
        "code": "ICD-10",
        "terminology": "ncit"
      },
      {
        "code": "ICDC",
        "name": "International Cancer Genome Consortium",
        "terminology": "ncit"
      },
      {
        "code": "ICH",
        "name": "International Conference on Harmonization",
        "terminology": "ncit"
      },
      {
        "code": "INC",
        "name": "International Neonatal Consortium",
        "terminology": "ncit"
      },
      {
        "code": "JAX",
        "name": "Jackson Laboratories Mouse Terminology, adapted for NCI use",
        "terminology": "ncit"
      },
      {
        "code": "KEGG",
        "name": "KEGG Pathway Database",
        "terminology": "ncit"
      },
      {
        "code": "NCI",
        "name": "National Cancer Institute Thesaurus",
        "terminology": "ncit"
      },
      {
        "code": "NCI-GLOSS",
        "name": "NCI Dictionary of Cancer Terms",
        "terminology": "ncit"
      },
      {
        "code": "NCPDP",
        "name": "National Council for Prescription Drug Programs",
        "terminology": "ncit"
      },
      {
        "code": "NDC",
        "name": "National Drug Code",
        "terminology": "ncit"
      },
      {
        "code": "NICHD",
        "name": "National Institute of Child Health and Human Development",
        "terminology": "ncit"
      },
      {
        "code": "PCDC",
        "name": "Pediatric Cancer Data Commons",
        "terminology": "ncit"
      },
      {
        "code": "PI-RADS",
        "name": "Prostate Imaging-Reporting and Data System",
        "terminology": "ncit"
      },
      {
        "code": "PID",
        "name": "NCI Nature Pathway Interaction Database",
        "terminology": "ncit"
      },
      {
        "code": "RENI",
        "name": "Registry Nomenclature Information System",
        "terminology": "ncit"
      },
      {
        "code": "SEER",
        "name": "Surveillance, Epidemiology, and End Results Program",
        "terminology": "ncit"
      },
      {
        "code": "SeroNet",
        "name": "NCI Serological Sciences Network for COVID-19",
        "terminology": "ncit"
      },
      {
        "code": "UCUM",
        "name": "Unified Code for Units of Measure",
        "terminology": "ncit"
      },
      {
        "code": "WHO",
        "name": "World Health Organization",
        "terminology": "ncit"
      },
      {
        "code": "ZFin",
        "name": "Zebrafish Information Network",
        "terminology": "ncit"
      },
      {
        "code": "caDSR",
        "name": "Cancer Data Standards Registry and Repository",
        "terminology": "ncit"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:21:18 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-synonym-types.sh

Return information about all synonym types for a specified terminology.

```
$ ./get-synonym-types.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:21:41 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get synonym types for ncit:

    [
      {
        "code": "P90",
        "name": "FULL_SYN",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P108",
        "name": "Preferred_Name",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P107",
        "name": "Display_Name",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:21:42 PM
-----------------------------------------------------
```

Return information about a specific synonym type for a specified terminology.

```
$ ./get-synonym-types.sh ncit P90 --include summary
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:24:11 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P90
include = summary

  Get synonym types for ncit P90:

    {
      "code": "P90",
      "name": "FULL_SYN",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "Term & Source Data",
          "type": "Display_Name"
        },
        {
          "name": "FULL_SYN",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "Synonym with Source Data",
          "termGroup": "SY",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "FULL_SYN",
          "type": "Preferred_Name"
        }
      ],
      "definitions": [
        {
          "definition": "A property representing a fully qualified synonym, contains the string, term type, source, and an optional source code if appropriate. Each subfield is deliniated to facilitate interpretation by software.",
          "type": "DEFINITION",
          "source": "NCI"
        }
      ],
      "properties": [
        {
          "type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
          "value": "http://www.w3.org/2002/07/owl#AnnotationProperty"
        },
        {
          "type": "http://www.w3.org/2000/01/rdf-schema#range",
          "value": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#textArea"
        },
        {
          "type": "Semantic_Type",
          "value": "Conceptual Entity"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:24:12 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-definition-types.sh

Return information about all definition types for a specified terminology.

```
$ ./get-definition-types.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:23:06 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get definition types for ncit:

    [
      {
        "code": "P325",
        "name": "ALT_DEFINITION",
        "terminology": "ncit",
        "version": "21.11e"
      },
      {
        "code": "P97",
        "name": "DEFINITION",
        "terminology": "ncit",
        "version": "21.11e"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:23:07 PM
-----------------------------------------------------
```

Return information about a specific definition type for a specified terminology.

```
$ ./get-definition-types.sh ncit P325 --include summary
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:23:49 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P325
include = summary

  Get definition types for ncit P325:

    {
      "code": "P325",
      "name": "ALT_DEFINITION",
      "terminology": "ncit",
      "version": "21.11e",
      "synonyms": [
        {
          "name": "[source] Definition",
          "type": "Display_Name"
        },
        {
          "name": "ALT_DEFINITION",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        },
        {
          "name": "ALT_DEFINITION",
          "type": "Preferred_Name"
        }
      ],
      "definitions": [
        {
          "definition": "A property representing the English language definition of a concept from a source other than NCI.",
          "type": "DEFINITION",
          "source": "NCI"
        }
      ],
      "properties": [
        {
          "type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
          "value": "http://www.w3.org/2002/07/owl#AnnotationProperty"
        },
        {
          "type": "http://www.w3.org/2000/01/rdf-schema#range",
          "value": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#textArea"
        },
        {
          "type": "Semantic_Type",
          "value": "Conceptual Entity"
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:23:50 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-subsets.sh

Return information about all subsets for the specified terminology. The result
includes the hierarchical structure of the subsets where they have parent/child
relationships.

```
$ ./get-subsets.sh ncit
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:24:33 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit

  Get all subsets

    [
      {
        "code": "C167405",
        "name": "ACC/AHA EHR Terminology",
        "terminology": "ncit",
        "version": "21.11e",
        "properties": [
          {
            "type": "Contributing_Source",
            "value": "ACC/AHA"
          },
          {
            "type": "NCI_META_CUI",
            "value": "CL972587"
... lots of data ...
          {
            "type": "Term_Browser_Value_Set_Description",
            "value": "The <a href=http://unitsofmeasure.org/trac/>Unified Code for Units of Measure (UCUM)</a> is a code system intended to include all units of measure being used in international science, engineering, and business. The purpose is to facilitate unambiguous electronic communication of quantities together with their units. The focus is on electronic communication, as opposed to communication between humans."
          },
          {
            "type": "UMLS_CUI",
            "value": "C2348843"
          }
        ]
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:25:14 PM
-----------------------------------------------------
```

Return information about a single subset for a specified terminology and code.

```
$ ./get-subsets.sh ncit C81222
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:25:24 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C81222

  Get subset for C81222

    {
      "code": "C81222",
      "name": "CDISC ADaM Terminology",
      "terminology": "ncit",
      "version": "21.11e",
      "properties": [
        {
          "type": "Contributing_Source",
          "value": "CDISC"
        },
        {
          "type": "Legacy Concept Name",
          "value": "CDISC_ADaM_Terminology"
        },
        {
          "type": "Publish_Value_Set",
          "value": "Yes"
        },
        {
          "type": "Semantic_Type",
          "value": "Intellectual Product"
        },
        {
          "type": "Term_Browser_Value_Set_Description",
          "value": "<p>The terminology subset that includes terms pertaining to the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
        },
        {
          "type": "UMLS_CUI",
          "value": "C2825525"
        },
        {
          "type": "Value_Set_Pair",
          "value": "No"
        }
      ],
      "children": [
        {
          "code": "C81223",
          "name": "CDISC ADaM Date Imputation Flag Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "Legacy Concept Name",
              "value": "CDISC_ADaM_Date_Imputation_Flag_Terminology"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Date Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "UMLS_CUI",
              "value": "C2825526"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        },
        {
          "code": "C81224",
          "name": "CDISC ADaM Derivation Type Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "Yes"
            },
            {
              "type": "Legacy Concept Name",
              "value": "CDISC_ADaM_Derivation_Type_Terminology"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Derivation Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "UMLS_CUI",
              "value": "C2825527"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        },
        {
          "code": "C172334",
          "name": "CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Code Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "NCI_META_CUI",
              "value": "CL1406497"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "Value_Set_Pair",
              "value": "Yes"
            }
          ]
        },
        {
          "code": "C172335",
          "name": "CDISC ADaM Generalized Anxiety Disorder-7 Version 2 Questionnaire Parameter Name Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "NCI_META_CUI",
              "value": "CL1406496"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Generalized Anxiety Disorder-7 version 2 questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "Value_Set_Pair",
              "value": "Yes"
            }
          ]
        },
        {
          "code": "C158114",
          "name": "CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Code Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "NCI_META_CUI",
              "value": "CL937724"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter code codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "Value_Set_Pair",
              "value": "Yes"
            }
          ]
        },
        {
          "code": "C158115",
          "name": "CDISC ADaM Geriatric Depression Scale Short Form Questionnaire Parameter Name Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "NCI_META_CUI",
              "value": "CL937725"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Geriatric Depression Scale Short Form questionnaire parameter name codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "Value_Set_Pair",
              "value": "Yes"
            }
          ]
        },
        {
          "code": "C81225",
          "name": "CDISC ADaM Parameter Type Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "Legacy Concept Name",
              "value": "CDISC_ADaM_Parameter_Type_Terminology"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Parameter Type codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "UMLS_CUI",
              "value": "C2825528"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        },
        {
          "code": "C165644",
          "name": "CDISC ADaM Pool for Integration Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "Yes"
            },
            {
              "type": "NCI_META_CUI",
              "value": "CL978787"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Pool for Integration codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        },
        {
          "code": "C124296",
          "name": "CDISC ADaM Subject Trial Status Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "Yes"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Subject Trial Status codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "UMLS_CUI",
              "value": "C4086047"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        },
        {
          "code": "C81226",
          "name": "CDISC ADaM Time Imputation Flag Terminology",
          "terminology": "ncit",
          "version": "21.11e",
          "subsetLink": "https://evs.nci.nih.gov/ftp1/CDISC/ADaM/",
          "properties": [
            {
              "type": "Contributing_Source",
              "value": "CDISC"
            },
            {
              "type": "Extensible_List",
              "value": "No"
            },
            {
              "type": "Legacy Concept Name",
              "value": "CDISC_ADaM_Time_Imputation_Flag_Terminology"
            },
            {
              "type": "Publish_Value_Set",
              "value": "Yes"
            },
            {
              "type": "Semantic_Type",
              "value": "Intellectual Product"
            },
            {
              "type": "Term_Browser_Value_Set_Description",
              "value": "<p>Terminology associated with the Time Imputation Flag codelist of the Clinical Data Interchange Standards Consortium (CDISC) Analysis Data Model (ADaM).</p> <p>The terminology can be downloaded at this location: <a href=\"https://evs.nci.nih.gov/ftp1/CDISC/ADaM/\"> CDISC ADaM Terminology</a>.</p>"
            },
            {
              "type": "UMLS_CUI",
              "value": "C2825529"
            },
            {
              "type": "Value_Set_Pair",
              "value": "No"
            }
          ]
        }
      ]
    }

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:25:26 PM
-----------------------------------------------------
```

Return subset members for a specified terminology and code.

```
$ ./get-subsets.sh ncit C81222 --members --fromRecord 0 --pageSize 10
-----------------------------------------------------
Starting ...Tue, Dec  7, 2021  5:26:06 PM
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C81222
members = 1

  Get subset members (fromRecord=0, pageSize=10)

    [
      {
        "code": "C117751",
        "name": "Analysis Requested by Regulatory Agency",
        "terminology": "ncit"
      },
      {
        "code": "C117752",
        "name": "Analysis Specified in Protocol",
        "terminology": "ncit"
      },
      {
        "code": "C117753",
        "name": "Analysis Specified in Statistical Analysis Plan",
        "terminology": "ncit"
      },
      {
        "code": "C81209",
        "name": "Average of Value Derivation Technique",
        "terminology": "ncit"
      },
      {
        "code": "C81201",
        "name": "Baseline Observation Carried Forward Imputation Technique",
        "terminology": "ncit"
      },
      {
        "code": "C92225",
        "name": "Best Case Imputation Technique",
        "terminology": "ncit"
      },
      {
        "code": "C92226",
        "name": "Best Observation Carried Forward Imputation Technique",
        "terminology": "ncit"
      },
      {
        "code": "C132340",
        "name": "Best Observed Case Imputation Technique",
        "terminology": "ncit"
      },
      {
        "code": "C81223",
        "name": "CDISC ADaM Date Imputation Flag Terminology",
        "terminology": "ncit"
      },
      {
        "code": "C81224",
        "name": "CDISC ADaM Derivation Type Terminology",
        "terminology": "ncit"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Dec  7, 2021  5:26:07 PM
-----------------------------------------------------
```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-mapsets.sh

Return information about all mapsets. The include parameter allows customizing 
how much data to return.

```
$ ./get-mapsets.sh --include properties
-----------------------------------------------------
Starting ...Mon May  1 09:53:06 HST 2023
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
include = properties

  Get all mapsets
  
	[
	   {
		  "code":"GO_to_NCIt_Mapping",
		  "name":"GO_to_NCIt_Mapping",
		  "version":"1.1",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This is a manual EVS mapping of concepts with equivalent meaning in the source and target terminology versions shown\r\nbelow:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: GO (Gene Ontology) February2020\r\n<br>\r\n&nbsp;&nbsp;&nbsp;Target: NCIt (NCI Thesaurus) 20.02d\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nThe first GO to NCIt mapping was manually curated by editors working at NCI in 2009. Automated term matching was\r\nperformed to create a preliminary map of the content in the Biological Process branch of NCIt and the GO\r\nbiological_process branch. The preliminary map was reviewed and validated by editors working at NCI to ensure that terms\r\nwith the same definitions were mapped. The map is updated when changes to the GO content invalidate current mapped\r\nentries.\r\n<br><br>\r\nThe Version shows the month and year that the mapping data were extracted. The Release Date shows the day that this\r\nmapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"SNOMEDCT_US_2022_09_01_TO_ICD10_2016",
		  "name":"SNOMEDCT_US_2022_09_01_TO_ICD10_2016",
		  "version":"20220901",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This mapping is extracted from the SNOMED CT US Edition release files via the UMLS Metathesaurus.<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: SNOMEDCT_US (SNOMED CT US Edition)<br>\r\n&nbsp;&nbsp;&nbsp;Target: ICD-10 (International Classification of Diseases, Tenth Revision)<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology (if\r\nthat concept is present in the current version).<br><br>\r\nThe SNOMED CT US Edition to ICD-10 Mapping is extracted from the SNOMED CT US Edition release files.<br><br>\r\nThe Version shows the SNOMED CT US Edition release date from which the data were extracted. The Release Date shows the\r\nday that this mapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"NCIT_TO_SWISSPROT",
		  "name":"NCIT_TO_SWISSPROT",
		  "version":"20230307",
		  "properties":[
			 {
				"type":"downloadOnly",
				"value":"true"
			 },
			 {
				"type":"mapsetLink",
				"value":"https://ncit.nci.nih.gov/ncitbrowser/ajax?action=exportMapping&uri=https://evs.nci.nih.gov/ftp1/NCI_Thesaurus/Mappings/NCIt-SwissProt_Mapping.txt"
			 }
		  ]
	   },
	   {
		  "code":"ICDO_TO_NCI_MORPHOLOGY",
		  "name":"ICDO_TO_NCI_MORPHOLOGY",
		  "properties":[
			 {
				"type":"downloadOnly",
				"value":"true"
			 },
			 {
				"type":"mapsetLink",
				"value":"https://ncit.nci.nih.gov/ncitbrowser/ajax?action=exportMapping&uri=https://evs.nci.nih.gov/ftp1/NCI_Thesaurus/Mappings/ICD-O-3_Mappings/ICD-O-3.1-NCIt_Morphology_Mapping.txt"
			 }
		  ]
	   },
	   {
		  "code":"SNOMEDCT_US_2022_09_01_TO_ICD10CM_2023",
		  "name":"SNOMEDCT_US_2022_09_01_TO_ICD10CM_2023",
		  "version":"20220901",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This mapping is extracted from the SNOMED CT US Edition release files via the UMLS Metathesaurus.<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: SNOMEDCT_US (SNOMED CT US Edition)<br>\r\n&nbsp;&nbsp;&nbsp;Target: ICD-10-CM (International Classification of Diseases, Tenth Revision, Clinical\r\nModification)<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology (if\r\nthat concept is present in the current version).<br><br>\r\nThe SNOMED CT US Edition to ICD-10-CM Mapping is extracted from the SNOMED CT US Edition release files.<br><br>\r\nThe Version shows the SNOMED CT US Edition release date from which the data were extracted. The Release Date shows the\r\nday that this mapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"PDQ_2016_07_31_TO_NCI_2016_10E",
		  "name":"PDQ_2016_07_31_TO_NCI_2016_10E",
		  "version":"2016_07_31",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"The PDQ to NCIt mapping is extracted from the NCI Metathesaurus (NCIm), and it reflects the mappings created by EVS NCIm\r\neditors and available in the NCIm MRMAP.RRF file. This mapping is updated when a new version of PDQ is published in\r\nNCIm. The current mapping is based on the source and target terminology versions shown below:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: PDQ (Physician Data Query) 2016_07\r\n<br>\r\n&nbsp;&nbsp;&nbsp;Target: NCIt (NCI Thesaurus) 16.10e\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nThe Version shows the year followed by the month and reflects the version of NCIm from which the MRMAP.RRF was\r\nextracted. The Release Date shows the day that this mapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"NCIt_to_HGNC_Mapping",
		  "name":"NCIt_to_HGNC_Mapping",
		  "version":"1.0",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This is a manual EVS mapping of concepts with equivalent meaning in the source and target terminology versions shown\r\nbelow:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: NCIt (NCI Thesaurus) 23.02d\r\n<br>\r\n&nbsp;&nbsp;&nbsp;Target: HGNC (HUGO Gene Nomenclature Committee) February2023\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nThe first NCIt to HGNC mapping was manually curated by editors working at NCI in March of 2012. Automated term matching\r\nwas performed to create a preliminary mapping from the Gene branch of NCIt to the Approved Symbols in HGNC. The\r\npreliminary map was reviewed by editors at NCI to map the HGNC to the wild-type (wt) allele concepts in NCIt. In\r\nNovember 2016, the map was revised to better reflect the nature of both HGNC and NCIt concepts by mapping the HGNC codes\r\nto the NCIt parent gene concepts. When new gene concepts are published in NCIt, they are mapped to the appropriate HGNC\r\nconcept, the mapping data file is updated, and the new mapping relationships are published\r\n<br><br>\r\nThe Version shows the month and year that the mapping data were extracted. The Release Date shows the day that this\r\nmapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"ICDO_TO_NCI_TOPOGRAPHY",
		  "name":"ICDO_TO_NCI_TOPOGRAPHY",
		  "properties":[
			 {
				"type":"downloadOnly",
				"value":"true"
			 },
			 {
				"type":"mapsetLink",
				"value":"https://ncit.nci.nih.gov/ncitbrowser/ajax?action=exportMapping&uri=https://evs.nci.nih.gov/ftp1/NCI_Thesaurus/Mappings/ICD-O-3_Mappings/ICD-O-3.1-NCIt_Topography_Mapping.txt"
			 }
		  ]
	   },
	   {
		  "code":"ICDO_TO_NCI_AXIS",
		  "name":"ICDO_TO_NCI_AXIS",
		  "properties":[
			 {
				"type":"downloadOnly",
				"value":"true"
			 },
			 {
				"type":"mapsetLink",
				"value":"https://ncit.nci.nih.gov/ncitbrowser/ajax?action=exportMapping&uri=https://evs.nci.nih.gov/ftp1/NCI_Thesaurus/Mappings/ICD-O-3_Mappings/ICD-O-3.1-NCIt_Axis_Mappings.xls"
			 }
		  ]
	   },
	   {
		  "code":"NCIt_to_ChEBI_Mapping",
		  "name":"NCIt_to_ChEBI_Mapping",
		  "version":"1.0",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This is a manual EVS mapping of concepts with equivalent meaning in the source and target terminology versions shown\r\nbelow:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: NCIt (NCI Thesaurus) 23.02d\r\n<br>\r\n&nbsp;&nbsp;&nbsp;Target: CHEBI (Chemical Entities of Biological Interest) v218\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nThe first NCIt to CHEBI mapping was manually curated by editors working at NCI in November of 2011. Automated term\r\nmatching was performed to create a preliminary map of all of the content in NCIt with all of the content in CHEBI. The\r\npreliminary map was reviewed and validated by editors working at NCI to ensure accuracy. Minor updates occur when new\r\nchemical concepts published in NCIt are mapped to CHEBI concepts, and when changes in the CHEBI content invalidate\r\ncurrent mapped entries. Major updates, which involve the manual review of all of the unmapped content in NCIt against\r\nall of the unmapped content in CHEBI, may occur approximately once every 2 or 3 years.\r\n<br><br>\r\nThe Version shows the month and year that the mapping data were extracted. The Release Date shows the day that this\r\nmapping was approved for publication."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   },
	   {
		  "code":"MA_to_NCIt_Mapping",
		  "name":"MA_to_NCIt_Mapping",
		  "version":"1.0",
		  "properties":[
			 {
				"type":"welcomeText",
				"value":"This is a manual EVS mapping of concepts with equivalent meaning in the source and target terminology versions shown\r\nbelow:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;&nbsp;Source: MA (Anatomical Dictionary for the Adult Mouse) July2011\r\n<br>\r\n&nbsp;&nbsp;&nbsp;&nbsp;Target: NCIt (NCI Thesaurus) 11.09d\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nAs part of the caBIG-funded Mouse-Human Anatomy Project (MHAP), the Adult Mouse Anatomy (MA) ontology and the set of\r\nanatomy concepts contained in the NCI Thesaurus (NCIt) were compared and harmonized. Matches between mouse and human\r\nanatomy terms were identified and validated, resulting in a highly curated set of mappings between the two ontologies.\r\nAs both anatomical ontologies are being used to annotate different types of research data for mouse and human,\r\nrespectively, cross-mappings between the two ontologies will facilitate the integration of mouse and human data, and the\r\ntranslation of basic research discoveries into clinical settings."
			 },
			 {
				"type":"downloadOnly",
				"value":"false"
			 }
		  ]
	   }
	]

-----------------------------------------------------
Finished ...Mon May  1 09:53:07 HST 2023
-----------------------------------------------------
```

Return information about a single mapset for a specified code. The include 
parameter allows customizing how much data to return.

```
$ ./get-mapsets.sh GO_to_NCIt_Mapping --include properties
-----------------------------------------------------
Starting ...Mon May  1 10:00:47 HST 2023
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
code = GO_to_NCIt_Mapping
include = properties

  Get mapset for GO_to_NCIt_Mapping

    {
      "code": "GO_to_NCIt_Mapping",
      "name": "GO_to_NCIt_Mapping",
      "version": "1.1",
      "properties": [
        {
          "type": "welcomeText",
          "value": "This is a manual EVS mapping of concepts with equivalent meaning in the source and target terminology versions shown\r\nbelow:\r\n<br><br>\r\n&nbsp;&nbsp;&nbsp;Source: GO (Gene Ontology) February2020\r\n<br>\r\n&nbsp;&nbsp;&nbsp;Target: NCIt (NCI Thesaurus) 20.02d\r\n<br><br>\r\nThe browser links each mapped concept to that concept's page in the current production version of its terminology.\r\n<br><br>\r\nThe first GO to NCIt mapping was manually curated by editors working at NCI in 2009. Automated term matching was\r\nperformed to create a preliminary map of the content in the Biological Process branch of NCIt and the GO\r\nbiological_process branch. The preliminary map was reviewed and validated by editors working at NCI to ensure that terms\r\nwith the same definitions were mapped. The map is updated when changes to the GO content invalidate current mapped\r\nentries.\r\n<br><br>\r\nThe Version shows the month and year that the mapping data were extracted. The Release Date shows the day that this\r\nmapping was approved for publication."
        },
        {
          "type": "downloadOnly",
          "value": "false"
        }
      ]
    }

-----------------------------------------------------
Finished ...Mon May  1 10:00:47 HST 2023
-----------------------------------------------------
```

Get the maps for a specified mapset code.

```
$ ./get-mapsets.sh GO_to_NCIt_Mapping --maps --fromRecord 0 --pageSize 5
-----------------------------------------------------
Starting ...Mon May  1 10:01:47 HST 2023
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
code = GO_to_NCIt_Mapping
include = minimal

  Get maps for mapset GO_to_NCIt_Mapping (fromRecord=0, pageSize=5)

    {
      "total": 305,
      "parameters": {
        "fromRecord": 0,
        "pageSize": 5
      },
      "maps": [
        {
          "source": "GO",
          "sourceName": "activation of cysteine-type endopeptidase activity involved in apoptotic process",
          "sourceCode": "GO:0006919",
          "type": "mapsTo",
          "rank": "1",
          "targetName": "Caspase Activation",
          "targetCode": "C42784",
          "targetTerminology": "NCI_Thesaurus",
          "targetTerminologyVersion": "23.02d"
        },
        {
          "source": "GO",
          "sourceName": "aerobic respiration",
          "sourceCode": "GO:0009060",
          "type": "mapsTo",
          "rank": "1",
          "targetName": "Cell Respiration",
          "targetCode": "C17894",
          "targetTerminology": "NCI_Thesaurus",
          "targetTerminologyVersion": "23.02d"
        },
        {
          "source": "GO",
          "sourceName": "aging",
          "sourceCode": "GO:0007568",
          "type": "mapsTo",
          "rank": "1",
          "targetName": "Aging",
          "targetCode": "C16269",
          "targetTerminology": "NCI_Thesaurus",
          "targetTerminologyVersion": "23.02d"
        },
        {
          "source": "GO",
          "sourceName": "anatomical structure morphogenesis",
          "sourceCode": "GO:0009653",
          "type": "mapsTo",
          "rank": "1",
          "targetName": "Morphogenesis",
          "targetCode": "C16879",
          "targetTerminology": "NCI_Thesaurus",
          "targetTerminologyVersion": "23.02d"
        },
        {
          "source": "GO",
          "sourceName": "androgen metabolic process",
          "sourceCode": "GO:0008209",
          "type": "mapsTo",
          "rank": "1",
          "targetName": "Androgen Metabolism Process",
          "targetCode": "C19958",
          "targetTerminology": "NCI_Thesaurus",
          "targetTerminologyVersion": "23.02d"
        }
      ]
    }

-----------------------------------------------------
Finished ...Mon May  1 10:01:47 HST 2023
-----------------------------------------------------

```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-inactive-replacements.sh

Return replacement concepts for a specified inactive concept code.

```
$ ./get-inactive-replacements.sh ncit C12658
-----------------------------------------------------
Starting ...Mon May  1 12:04:22 HST 2023
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
code = C12658
  Get replacement concepts for C12658

    [
      {
        "code": "C12658",
        "action": "retire",
        "date": "2003-08-22",
        "replacementCode": "C19157",
        "replacementName": "Specimen"
      }
    ]

-----------------------------------------------------
Finished ...Mon May  1 12:04:22 HST 2023
-----------------------------------------------------

```

Return replacement concepts for a specified list of inactive concept codes.

```
$ ./get-inactive-replacements.sh ncit C12658,C13320
-----------------------------------------------------
Starting ...Mon May  1 12:015:07 HST 2023
-----------------------------------------------------
url = https://api-evsrest.nci.nih.gov/api/v1
terminology = ncit
list = C12658,C13320
  Get replacement concepts for C12658,C13320

    [
      {
        "code": "C12658",
        "action": "retire",
        "date": "2003-08-22",
        "replacementCode": "C19157",
        "replacementName": "Specimen"
      },
      {
        "code": "C13320",
        "action": "merge",
        "date": "2003-08-22",
        "replacementCode": "C12756",
        "replacementName": "Nose"
      },
      {
        "code": "C13320",
        "action": "retire",
        "date": "2003-08-22"
      }
    ]

-----------------------------------------------------
Finished ...Mon May  1 12:15:07 HST 2023
-----------------------------------------------------

```
[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)