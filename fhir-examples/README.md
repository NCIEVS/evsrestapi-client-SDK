# EVSRESTAPI: FHIR Tutorial

This tutorial shows how to interact with the FHIR R4 APIs through use of a Postman collection.

## Prerequisites

- Postman must be installed (with a version capable of importing a v2.1 collection)
- The [EVSRESTAPI-FHIR-R4.postman_collection.json](EVSRESTAPI-FHIR-R4.postman_collection.json) file must be loaded into Postman using File->Iimport to access the R4 FHIR APIs

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
- [ValueSet](#valueset)
- [ConceptMap](#conceptmap)
- [Server capability statement](#server-capability-statement)

### CodeSystem

## Get all code systems\_

Returns a bundle of all code systems for the specified proejct.

## Find code systems by id

Returns a bundle containing the code system for the specified `_id` parameter.

... more info needed here

[Back to Top](#evsrestapi-fhir-tutorial)

### ValueSet

## Get all value sets

Returns a bundle of all value sets for the specified project. EVSRESTAPI always returns value sets in this call that represent all of the codes of the terminology. Thus, there will always be at least one value set for each code system in the project.

## Find value sets by id

Returns a bundle containing the value set for the specified `_id` parameter.

... more info needed here

[Back to Top](#evsrestapi-fhir-tutorial)

### ConceptMap

## Get all concept maps

We are working on implementing concept maps and currently there are none loaded for testing.

... more info needed here

[Back to Top](#evsrestapi-fhir-tutorial)

### Server capability statement

This is just the FHIR metadata call that describes the capabilities of the server deployment.

[Back to Top](#evsrestapi-fhir-tutorial)
