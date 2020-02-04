 EVSRESTAPI client SDK: CURL Tutorial
======================================

This tutorial shows how to use raw cURL commands to access NCI Thesaurus content from the EVSRESTAPI.

Prerequisites
* curl must be installled ([cURL site](https://curl.haxx.se/dlwiz/))
* jq must be installed ([jq](https://stedolan.github.io/jq/download/))

The Browser as a terminology server
------------------------------------

The base API url for the EVSRESTAPI is: 

`export API_URL=https://api-evsrest-dev.nci.nih.gov/api/v1/`

Run this command before the sample curl calls below as they expect $API_URL to be set.

All the operations described here perform a GET request.

The full documentation of the REST API can be consulted in the Swagger documentation at `http://https://api-evsrest-dev.nci.nih.gov/swagger-ui.html`

Sample cURL Calls
-----------------

The following examples can be types into the command line of any terminal that has cURL and jq installed.

### Get terminologies

Return all loaded terminologies currently hosted by the API:

```
curl "$API_URL/metadata/terminologies" | jq '.'
```

See sample payload data from this call in `samples/get-terminologies.txt`


### Get concept by code (minimal information)

Return minimal concept information for a given terminology and code:

```
curl "$API_URL/concept/ncit/C3224?include=minimal" | jq '.'
```

See sample payload data from this call in `samples/get-concept-by-code-minimum.txt`


### Get concepts by list of codes (minimal information)

Return minimal concept information for a given terminology and list of codes:

```
curl "$API_URL/concept/ncit?list=C3224,C3910&include=minimal" | jq '.'
```

See sample payload data from this call in `samples/get-concepts-by-list-of-codes-minimum.txt`
