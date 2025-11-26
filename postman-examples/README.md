# EVSRESTAPI client SDK: Postman Tutorial

This tutorial shows how to use a Postman collection to access NCI Thesaurus content from the EVSRESTAPI.

## Prerequisites

- Postman must be installed (with a version capable of importing a v2.1 collection)
- The [EVSRESTAPI-Postman-Client.json](EVSRESTAPI-Postman-Client.json) file must be loaded into Postman using File->Iimport
- The base API url for the EVSRESTAPI is set as the API_URL variable in the collection. To change this, edit the collection, select the "Variables" tab, change the value, click "Update".

- It is currently set to `https://api-evsrest.nci.nih.gov/api/v1`

## Running the Postman Script

A convenience script is included to help run the Postman collection using Newman.

- Script: `postman.sh` (located in this directory)
- Usage:
	```bash
	cd postman-examples
	./postman.sh
	```
- To override the default API URL (the script uses a production default), set the `API_URL` environment variable before running the script:
	```bash
	export API_URL=https://api-test-evsrest.nci.nih.gov
	./postman.sh
	```
- Requirements: `newman` (npm). The script will attempt to install `newman` if it is not found.

## Sample Postman Calls

When the collection is loaded into Postman, you will see a number
of requests matching the scenarios defined in the top level README file of this project. Simply choose any one and click the "Send"
button to see the result.

[Back to Top](#evsrestapi-client-sdk-postman-tutorial)
