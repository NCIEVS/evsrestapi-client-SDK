EVSRESTAPI CT in 5 minutes: bash Tutorial
=========================================

This tutorial shows how to use bash scripts to access NCI Thesaurus content from the EVSRESTAPI.

Prerequisites
* bash must be installed
* curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
* jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))


Test Scripts
------------

The following examples can be typed into the command line of any terminal that has bash, cURL and  jq configured.

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
Finished ..Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
```


### get-concept.sh

Return concept information for a given terminology and code.  The "include" parameter
can be used to specify the amount of information you want back.  Try with "minimal",
"summary", and "full".

```
$ ./get-concept.sh ncit C3224 minimal
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
Finished ..Tue, Feb  4, 2020 12:09:16 PM
-----------------------------------------------------
```


### get-concepts.sh

Return concept information for a given terminology and list of concept codes.  
The "include" parameter can be used to specify the amount of information you 
want back.  Try with "minimal", "summary", and "full".

```
$ ./get-concepts.sh ncit C3224,C3910 minimal
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
Finished ..Tue, Feb  4, 2020 12:20:30 PM
-----------------------------------------------------
```

