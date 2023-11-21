<a name="top" />

EVSRESTAPI REGENERATE CLIENT SDKs
==================================
This is a how-to guide for rebuilding openapi generated code as updates to the swagger are implemented.

## Requirements

1. Java 17+
2. Gradle 8.2+
3. Add the updated `evs-swagger.yaml` to `openapi-code-generator/src`. Be sure the old on is removed from the /src folder 

## Task Names to Regenerate Code

The following is a list of the available gradle tasks for each language the openapi code generator can generate. The
location the generated code is generated is also provided.

* **All clients** - `buildDependentTasks`
* **Java client** - `buildJavaSdk`
    * **Location** = `/openapi-java-client`

## How to Build a Single Client

If you need to regenerate a single client for a given language:

1. Open your terminal and cd to the project directory. e.g. `evsrestapi-client-sdk`
2. Execute `./gradlew <nameOfTask>` in your terminal
3. Follow the README in the directory generated to build and compile the client.

## How to Build All Clients

If you need to rebuild all the clients for all languages, typically after a big update to the `.yaml` file:

1. Open your terminal and cd to the project directory. e.g. `evsrestapi-client-sdk`
2. Execute `./gradlew buildDependentTasks`

### Notes

The projects will have a demo directory that can be run to test the client's functionality. If major changes have been
made to the `.yaml` file, be sure to run the demo project associated with the client of your choice and update as needed.
Any additional api calls that have been added to the `.yaml` documentation should be included in the demo project,
following the existing format.

## Current Contributors

- [Brian Carlsen](https://github.com/bcarlsenca)
- [Alicia Garcia](https://github.com/gaaliciA1990)
- [Other Contributors](https://github.com/NCIEVS/evsrestapi-client-SDK/graphs/contributors)

**[Back to top](#evsrestapi-generate-client-code)**