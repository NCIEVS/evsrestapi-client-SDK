<a name="top"/>

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
- [get-terminologies.sh](#get-terminologies-sh)
- [get-concept.sh](#get-concept-sh)
- [get-concept-part.sh](#get-concept-part-sh)
- [find-concepts.sh](#find-concepts-sh)
- [get-descendants.sh](#get-descendants-sh)
- [get-subtree.sh](#get-subtree-sh)
- [get-paths.sh](#get-paths-sh)
- [get-association.sh](#get-concept-sh)
- [get-role.sh](#get-role-sh)
- [get-property.sh](#get-property-sh)
- [get-qualifier.sh](#get-qualifier-sh)
- [get-term-types.sh](#get-term-types-sh)
- [get-synonym-sources.sh](#get-synonym-sources-sh)

The following examples can be typed into the command line of any terminal that has bash, cURL and jq installed.  Run each script with no parameters for examples of how to call each one.

<a name="get-terminologies-sh"/>

### get-terminologies.sh

Return all loaded terminologies currently hosted by the API:

```
$ ./get-termniologies.sh
-----------------------------------------------------
Starting ...Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1

  Performing terminologies lookup
    count = 1

    [
      {
        "terminology": "ncit",
        "version": "19.08d",
        "name": "NCI Thesaurus 19.08d",
        "description": "NCI Thesaurus, a controlled vo...",
        "graph": "http://NCI_T",
        "terminologyVersion": "ncit_19.08d",
        "latest": true,
        "tags": {
          "monthly": "true"
        }
      }
    ]
-----------------------------------------------------
Finished ...Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-concept-sh"/>

### get-concept.sh

Return concept information for a given terminology and code.  The "include" parameter
can be used to specify the amount of information you want back.  Try with "minimal",
"summary", and "full".

```
$ ./get-concept.sh ncit C3224 --include minimal
-----------------------------------------------------
Starting ...Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224
include = minimal

  Get concept for ncit C3224:

    {
      "code": "C3224",
      "name": "Melanoma",
      "terminology": "ncit"
    }

-----------------------------------------------------
Finished ...Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
```

This script can also concept information for a list of concept codes.  
The "include" parameter can be used to specify the amount of information you 
want back.  Try with "minimal", "summary", and "full".

```
$ ./get-concepts.sh ncit C3224,C3910 --include minimal
-----------------------------------------------------
Starting ...Tue, Feb  4, 2020 12:20:29 PM
-----------------------------------------------------
url = http://localhost:8080/api/v1
terminology = ncit
list = C3224,C3910
include = minimal

  Get concept for ncit C3224,C3910:

    [
      {
        "code": "C3224",
        "name": "Melanoma",
        "terminology": "ncit"
      },
      {
        "code": "C3910",
        "name": "Molecular Abnormality",
        "terminology": "ncit"
      }
    ]

-----------------------------------------------------
Finished ...Tue, Feb  4, 2020 12:20:30 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-concept-part-sh"/>

### get-concept-part.sh

Used to call the APIs for the sub-parts of concepts.  The supported list includes:
children, parents, roles, associations, inverseRoles, inverseAssociations, maps,
and disjointWith. The following examples shows the "children", but this parameter
could be easily replaced by any of the options listed above.

```
$  ./get-concept-part.sh ncit C3224 children
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:38:52 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224
part = children

  Get children for ncit C3224:

    [
      {
        "code": "C3802",
        "name": "Amelanotic Melanoma"
      },
      {
        "code": "C8410",
        "name": "Breast Melanoma"
      },
      {
        "code": "C131506",
        "name": "Childhood Melanoma"
      },
      {
        "code": "C3510",
        "name": "Cutaneous Melanoma"
      },
      {
        "code": "C4236",
        "name": "Epithelioid Cell Melanoma"
      },
      {
        "code": "C9499",
        "name": "Melanomatosis"
      },
      {
        "code": "C8925",
        "name": "Metastatic Melanoma"
      },
      {
        "code": "C66756",
        "name": "Mixed Epithelioid and Spindle Cell Melanoma"
      },
      {
        "code": "C8711",
        "name": "Non-Cutaneous Melanoma"
      },
      {
        "code": "C8562",
        "name": "Ocular Melanoma"
      },
      {
        "code": "C118828",
        "name": "Orbital Melanoma"
      },
      {
        "code": "C162547",
        "name": "Penile Melanoma"
      },
      {
        "code": "C7087",
        "name": "Recurrent Melanoma"
      },
      {
        "code": "C147983",
        "name": "Refractory Melanoma"
      },
      {
        "code": "C4228",
        "name": "Regressing Melanoma"
      },
      {
        "code": "C4237",
        "name": "Spindle Cell Melanoma"
      },
      {
        "code": "C148517",
        "name": "Unresectable Melanoma"
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:38:53 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-find-sh">

### find-concepts.sh

Used to perform text searches to find matching concepts. In its simplest form the
script will perform a simple "contains" text search for concepts within the specified
terminology.  Use the --include parameter to control how much information to get back,
use the --type to change the nature of the search, and use --fromRecord and --pageSize
to control which records to return. 

```
$ ./find-concepts.sh ncit "malignant melanoma" --pageSize 5
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:46:39 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
term = malignant melanoma
include =

  Find concept for ncit malignant melanoma:

    {
      "total": 11428,
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
          "code": "C3224",
          "name": "Melanoma",
          "terminology": "ncit"
        },
        {
          "code": "C8410",
          "name": "Breast Melanoma",
          "terminology": "ncit"
        },
        {
          "code": "C4640",
          "name": "Rectal Melanoma",
          "terminology": "ncit"
        },
        {
          "code": "C8601",
          "name": "Retinal Melanoma",
          "terminology": "ncit"
        },
        {
          "code": "C4639",
          "name": "Anal Melanoma",
          "terminology": "ncit"
        }
      ]
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:46:40 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-descendants-sh"/>

### get-descendants.sh

Used to get descendant graph for a specified terminology and code.  The --level parameter
can be used to restrict the number of levels deep into the graph to look.  

```
$  ./get-descendants.sh ncit C3224 --level 2 | more
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:49:41 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224
maxLevel = 2

  Get descendants for ncit C3224:
    child count = 17

    [
      {
        "code": "C3802",
        "name": "Amelanotic Melanoma",
        "level": 0,
        "children": [
          {
            "code": "C4633",
            "name": "Amelanotic Cutaneous Melanoma",
            "level": 1,
            "leaf": true
          }
        ]
      },
...
      {
        "code": "C148517",
        "name": "Unresectable Melanoma",
        "level": 0,
        "children": [
          {
            "code": "C148245",
            "name": "Unresectable Cutaneous Melanoma",
            "level": 1,
            "children": [
              {
                "code": "C165535",
                "name": "Unresectable Acral Lentiginous Melanoma",
                "level": 2,
                "leaf": true
              }
            ]
          },
          {
            "code": "C165536",
            "name": "Unresectable Mucosal Melanoma",
            "level": 1,
            "leaf": true
          }
        ]
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:35:35 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-subtree-sh"/>

### get-subtree.sh

Used to get the entire subtree from the root node to the specified code, for a specified terminology.

```
$  ./get-subtree.sh ncit C3224 | more
-----------------------------------------------------
Starting ...Mon Mar 16 15:40:38 PDT 2020
-----------------------------------------------------
url = http://localhost:8080/evs/api/v1
terminology = ncit
code = C3224

  Get subtree for ncit C3224:
    count = 19

    [
      {
        "code": "C12913",
        "label": "Abnormal Cell",
        "leaf": false,
        "children": [
          {
            "code": "C36843",
            "label": "Abnormal Connective and Soft Tissue Cell",
            "level": 0,
            "leaf": false,
            "children": [
              {
                "code": "C37086",
                "label": "Abnormal Endothelial Cell",
                "level": 1,
                "leaf": false
              },
              {
                "code": "C36832",
                "label": "Abnormal Macrophage",
                "level": 1,
                "leaf": false
              },
              {
                "code": "C168534",
                "label": "Cancer-Associated Fibroblast",
                "level": 1,
                "leaf": false
              },
              {
                "code": "C36887",
                "label": "Neoplastic Connective and Soft Tissue Cell",
                "level": 1,
                "leaf": false
              }
            ]
          },
          ....
          {
            "code": "C83485",
            "label": "Retired Concept Current Year",
            "level": 0,
            "leaf": false,
            "children": [
              {
                "code": "C166252",
                "label": "Actual Dose of Medication",
                "level": 1,
                "leaf": true
              },
              {
                "code": "C157792",
                "label": "Assistive Devices",
                "level": 1,
                "leaf": true
              },
              ....
              {
                "code": "C116892",
                "label": "Urea/Lactic Acid-based Topical Cream",
                "level": 1,
                "leaf": true
              },
              {
                "code": "C94838",
                "label": "Warm Ischemia During Surgery",
                "level": 1,
                "leaf": true
              }
            ]
          }
        ]
      }
    ]

-----------------------------------------------------
Finished ...Mon Mar 16 15:40:39 PDT 2020
-----------------------------------------------------
```

Can also be used to get the children subtree nodes for the specified code. For example:

```
$  ./get-subtree.sh ncit C3224 --children
-----------------------------------------------------
Starting ...Wed, Mar 18, 2020  2:15:45 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224

  Get subtree children for ncit C3224:
    count = 17

    [
      {
        "code": "C3802",
        "label": "Amelanotic Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C8410",
        "label": "Breast Melanoma",
        "level": 0,
        "leaf": true
      },
      {
        "code": "C131506",
        "label": "Childhood Melanoma",
        "level": 0,
        "leaf": true
      },
      {
        "code": "C3510",
        "label": "Cutaneous Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C4236",
        "label": "Epithelioid Cell Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C9499",
        "label": "Melanomatosis",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C8925",
        "label": "Metastatic Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C66756",
        "label": "Mixed Epithelioid and Spindle Cell Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C8711",
        "label": "Non-Cutaneous Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C8562",
        "label": "Ocular Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C118828",
        "label": "Orbital Melanoma",
        "level": 0,
        "leaf": true
      },
      {
        "code": "C162547",
        "label": "Penile Melanoma",
        "level": 0,
        "leaf": true
      },
      {
        "code": "C7087",
        "label": "Recurrent Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C147983",
        "label": "Refractory Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C4228",
        "label": "Regressing Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C4237",
        "label": "Spindle Cell Melanoma",
        "level": 0,
        "leaf": false
      },
      {
        "code": "C148517",
        "label": "Unresectable Melanoma",
        "level": 0,
        "leaf": false
      }
    ]

-----------------------------------------------------
Finished ...Wed, Mar 18, 2020  2:15:46 PM
-----------------------------------------------------
```


[Back to Top](#top)

<a name="get-paths-sh"/>

### get-paths.sh

Return information about root codes, paths to root codes, or paths from
a code to an ancestor code.  In its simplest form, the script will return
a list of root concepts.

```
$ ./get-paths.sh ncit
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:32:27 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code =
ancestor code =

  Get descendants for ncit :

    [
      {
        "code": "C12913",
        "name": "Abnormal Cell"
      },
      {
        "code": "C43431",
        "name": "Activity"
      },
...
      {
        "code": "C20189",
        "name": "Property or Attribute"
      },
      {
        "code": "C28428",
        "name": "Retired Concept"
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:32:28 PM
-----------------------------------------------------
```

By specifying a code, the script will produce a list of paths from that 
code to the corresponding root concept.  There may be more than one path through
the tree.

```
$ ./get-paths.sh ncit C3224
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:32:53 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224
ancestor code =

  Get descendants for ncit C3224:

    [
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "level": 0
        },
        {
          "code": "C7058",
          "name": "Melanocytic Neoplasm",
          "level": 1
        },
        {
          "code": "C4741",
          "name": "Neoplasm by Morphology",
          "level": 2
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "level": 3
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "level": 4
        },
        {
          "code": "C7057",
          "name": "Disease, Disorder or Finding",
          "level": 5
        }
      ],
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "level": 0
        },
        {
          "code": "C9305",
          "name": "Malignant Neoplasm",
          "level": 1
        },
        {
          "code": "C7062",
          "name": "Neoplasm by Special Category",
          "level": 2
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "level": 3
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "level": 4
        },
        {
          "code": "C7057",
          "name": "Disease, Disorder or Finding",
          "level": 5
        }
      ]
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:32:54 PM
-----------------------------------------------------
```

By specifying a code and an optional ancestor code, the script will produce a list of 
paths from that code to the corresponding ancestor code.  There may be more than one 
path through the tree.

```
$ ./get-paths.sh ncit C3224 --anc C2991
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:34:21 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
code = C3224
ancestor code = C2991

  Get descendants for ncit C3224:

    [
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "level": 0
        },
        {
          "code": "C7058",
          "name": "Melanocytic Neoplasm",
          "level": 1
        },
        {
          "code": "C4741",
          "name": "Neoplasm by Morphology",
          "level": 2
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "level": 3
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "level": 4
        }
      ],
      [
        {
          "code": "C3224",
          "name": "Melanoma",
          "level": 0
        },
        {
          "code": "C9305",
          "name": "Malignant Neoplasm",
          "level": 1
        },
        {
          "code": "C7062",
          "name": "Neoplasm by Special Category",
          "level": 2
        },
        {
          "code": "C3262",
          "name": "Neoplasm",
          "level": 3
        },
        {
          "code": "C2991",
          "name": "Disease or Disorder",
          "level": 4
        }
      ]
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:34:23 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-association-sh"/>

### get-association.sh

Return information about associations for a given terminology.  In its simplest form,
this script will return basic information about all associations for a terminology.

```
$ ./get-association.sh ncit
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  3:20:34 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get associations for ncit:

    [
      {
        "code": "A8",
        "name": "Concept_In_Subset"
      },
      {
        "code": "A10",
        "name": "Has_CDRH_Parent"
      },
...
      {
        "code": "A3",
        "name": "Role_Has_Parent"
      },
      {
        "code": "A2",
        "name": "Role_Has_Range"
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  3:20:35 PM
-----------------------------------------------------
```

The script can also return information about a single association (by code or label), 
or a list of associations.

```
$ ./get-association.sh ncit A10
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  3:23:51 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = A10
include =

  Get association for ncit A10:

    {
      "code": "A10",
      "name": "Has_CDRH_Parent"
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  3:23:52 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-association.sh ncit Role_Has_Domain --include synonyms
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  3:24:21 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Role_Has_Domain
include = synonyms

  Get association for ncit Role_Has_Domain:

    {
      "code": "A1",
      "name": "Role_Has_Domain",
      "synonyms": [
        {
          "name": "Role_Has_Domain",
          "type": "Preferred_Name"
        },
        {
          "name": "Role Has Domain",
          "type": "Display_Name"
        },
        {
          "name": "Role_Has_Domain",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        }
      ]
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  3:24:22 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-role-sh"/>

### get-role.sh

Return information about roles for a given terminology.  In its simplest form,
this script will return basic information about all roles for a terminology.

```
$ ./get-role.sh ncit
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:24:58 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get roles for ncit:

    [
      {
        "code": "R156",
        "name": "Allele_Absent_From_Wild-type_Chromosomal_Location"
      },
      {
        "code": "R153",
        "name": "Allele_Has_Abnormality"
      },
...
      {
        "code": "R181",
        "name": "Procedure_Uses_Manufactured_Object"
      },
      {
        "code": "R172",
        "name": "Regimen_Has_Accepted_Use_For_Disease"
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:25:01 PM
-----------------------------------------------------
```

The script can also return information about a single role (by code or label), 
or a list of role.

```
$ ./get-role.sh ncit R156
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:26:29 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = R156
include =

  Get role for ncit R156:

    {
      "code": "R156",
      "name": "Allele_Absent_From_Wild-type_Chromosomal_Location"
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:26:29 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-role.sh ncit Allele_Has_Abnormality --include synonyms
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:28:18 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Allele_Has_Abnormality
include = synonyms

  Get role for ncit Allele_Has_Abnormality:

    {
      "code": "R153",
      "name": "Allele_Has_Abnormality",
      "synonyms": [
        {
          "name": "Allele_Has_Abnormality",
          "type": "Preferred_Name"
        },
        {
          "name": "Has Abnormality",
          "type": "Display_Name"
        },
        {
          "name": "Allele_Has_Abnormality",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        }
      ]
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:28:21 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-property-sh"/>

### get-property.sh

Return information about properties for a given terminology.  In its simplest form,
this script will return basic information about all properties for a terminology.

```
$ ./get-property.sh ncit
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:28:45 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel =
include =

  Get properties for ncit:

    [
      {
        "code": "P325",
        "name": "ALT_DEFINITION"
      },
      {
        "code": "P302",
        "name": "Accepted_Therapeutic_Use_For"
      },
...
      {
        "code": "P391",
        "name": "source-date"
      },
      {
        "code": "P382",
        "name": "term-name"
      }
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:28:47 PM
-----------------------------------------------------
```

The script can also return information about a single property (by code or label), 
or a list of property.

```
$ ./get-property.sh ncit P325
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:29:40 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P325
include =

  Get property for ncit P325:

    {
      "code": "P325",
      "name": "ALT_DEFINITION"
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:29:41 PM
-----------------------------------------------------
```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-property.sh ncit Accepted_Therapeutic_Use_For --include synonyms
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:30:17 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = Accepted_Therapeutic_Use_For
include = synonyms

  Get property for ncit Accepted_Therapeutic_Use_For:

    {
      "code": "P302",
      "name": "Accepted_Therapeutic_Use_For",
      "synonyms": [
        {
          "name": "Accepted_Therapeutic_Use_For",
          "type": "Preferred_Name"
        },
        {
          "name": "Accepted Therapeutic Use For",
          "type": "Display_Name"
        },
        {
          "name": "Accepted_Therapeutic_Use_For",
          "termGroup": "PT",
          "type": "FULL_SYN",
          "source": "NCI"
        }
      ]
    }

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:30:19 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-qualifier-sh"/>

### get-qualifier.sh

Return information about qualifiers for a given terminology.  In its simplest form,
this script will return basic information about all qualifiers for a terminology.

```
$ ./get-qualifier.sh  ncit
-----------------------------------------------------
Starting ...Wed, Apr 15, 2020  7:53:01 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
url = http://localhost:8082/api/v1
terminology = ncit
codeOrLabel =
include =

  Get qualifiers for ncit:

    [
      {
        "code": "P378",
        "name": "def-source"
      },
      {
        "code": "P381",
        "name": "attr"
      },
      ...
      {
        "code": "P396",
        "name": "Target_Terminology"
      },
      {
        "code": "P397",
        "name": "Target_Terminology_Version"
      }
    ]

-----------------------------------------------------
Finished ...Wed, Apr 15, 2020  7:53:01 PM
-----------------------------------------------------

```

The script can also return information about a single qualifier (by code or label), 
or a list of qualifier.

```
$ ./get-qualifier.sh  ncit P389
-----------------------------------------------------
Starting ...Wed, Apr 15, 2020  7:53:35 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = P389
include =

  Get qualifier for ncit P389:

    {
      "code": "P389",
      "name": "go-evi",
      "synonyms": [
        {
          "name": "go-evi",
          "type": "Preferred_Name"
        }
      ],
      "definitions": [
        {
          "definition": "A property representing a three letter code that indicates the type of supporting evidence fo
r each GO_Annotation associated with a concept.",
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
          "value": "http://www.w3.org/2001/XMLSchema#string"
        },
        {
          "type": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#required",
          "value": "true"
        }
      ]
    }

-----------------------------------------------------
Finished ...Wed, Apr 15, 2020  7:53:35 PM

```

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```
$ ./get-qualifier.sh  ncit go-evi --include synonyms
-----------------------------------------------------
Starting ...Wed, Apr 15, 2020  7:54:57 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit
codeOrLabel = go-evi
include = synonyms

  Get qualifier for ncit go-evi:

    {
      "code": "P389",
      "name": "go-evi",
      "synonyms": [
        {
          "name": "go-evi",
          "type": "Preferred_Name"
        }
      ],
      "definitions": [
        {
          "definition": "A property representing a three letter code that indicates the type of supporting evidence for each GO_Annotation associated with a concept.",
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
          "value": "http://www.w3.org/2001/XMLSchema#string"
        },
        {
          "type": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#required",
          "value": "true"
        }
      ]
    }

-----------------------------------------------------
Finished ...Wed, Apr 15, 2020  7:54:57 PM
-----------------------------------------------------

```
[Back to Top](#top)

<a name="get-term-types-sh"/>

### get-term-types.sh

Return information about term types for a given terminology.

```
$ ./get-term-types.sh ncit
-----------------------------------------------------
Starting ...Thu, Feb  6, 2020  4:28:45 PM
-----------------------------------------------------
url = https://api-evsrest-dev.nci.nih.gov/api/v1
terminology = ncit

  Get term types for ncit:

    [
      {
        "code": "AB",
        "name": "Abbreviation"
      },
...
    ]

-----------------------------------------------------
Finished ...Thu, Feb  6, 2020  4:28:47 PM
-----------------------------------------------------
```
[Back to Top](#top)

<a name="get-synonym-sources-sh"/>

### get-synonym-sources.sh

Return information about synonym sources for a given terminology.

```
$ ./get-synonym-sources.sh ncit
-----------------------------------------------------
Starting ...Fri, Apr  3, 2020  6:16:20 PM
-----------------------------------------------------
url = http://localhost:8082/api/v1
terminology = ncit

  Get synonym sources for ncit:

    [
      {
        "code": "ACC",
        "name": "American College of Cardiology",
        "terminology": "ncit"
      },
      ...
      {
        "code": "Zebrafish",
        "name": "Zebrafish Model Organism Database",
        "terminology": "ncit"
      }
    ]

-----------------------------------------------------
Finished ...Fri, Apr  3, 2020  6:16:20 PM
-----------------------------------------------------
```
[Back to Top](#top)
