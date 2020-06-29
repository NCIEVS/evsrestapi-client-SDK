# EVSRESTAPI client SDK: Python Tutorial

======================================

This tutorial shows how to use a locally installed version of Python to interact with the EVSREST API.

## Prerequisites

* Python 3.5 or higher must be installed. The latest version (3.8) can be found [here](https://www.python.org/downloads/).

* All libraries in 'requirements.txt' must be installed.
  * Run the command 'pip install -r requirements.txt' in a console window to check these libraries and install any that are not already installed.
  * If pip itself is not installed, run the command 'curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py; python get-pip.py' to install it.

The various scripts make use of the `python-examples/config.ini` file to load necessary information that is uniform across all tests.

## Sample Python Calls

The following examples are exhibited by various unit tests defined in the code in `python-examples`.

* [Get terminologies](#get-terminologies)
* [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)

### Get terminologies

`MetadataTests.testGetTerminologies()` - Return all loaded terminologies currently hosted by the API.

```{.python}
2020-04-28T19:36:53-04:00 INFO  : Get Terminologies
2020-04-28T19:36:53-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-04-28T19:36:53-04:00 INFO  :   ncit = {"terminology":"ncit","version":"20.04d","date":"April 27, 2020","name":"NCI Thesaurus 20.04d","description":"NCI Thesaurus, a controlled vocabulary in support of NCI administrative and scientific activities. Produced by the Enterprise Vocabulary System (EVS), a project by the NCI Center for Biomedical Informatics and Information Technology. National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, U.S.A.","graph":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","source":"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl","terminologyVersion":"ncit_20.04d","latest":true,"tags":{"monthly":"true"}}
```

[Back to Top](#EVSRESTAPI-client-SDK-Python-Tutorial)

### Get concept by code (minimal information)

`ConceptTests.testGetConceptByCode()` - Return concept object with minimal information for a specified code.

```{.python}
2020-04-28T19:39:52-04:00 INFO  : Get concept by code - C3224
2020-04-28T19:39:52-04:00 INFO  :   base url = https://api-evsrest.nci.nih.gov/api/v1
2020-04-28T19:39:52-04:00 INFO  :   concept = {"code":"C3224","name":"Melanoma","terminology":"ncit"}
```

[Back to Top](#EVSRESTAPI-client-SDK-Python-Tutorial)
