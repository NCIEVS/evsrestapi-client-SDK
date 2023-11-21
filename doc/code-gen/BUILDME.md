<a name="top" />

EVSRESTAPI REGENERATE CLIENT SDKs
==================================
This is a how-to guide for rebuilding openapi generated code as updates to the swagger are implemented.

## Requirements

1. Java 17+
2. Gradle 8.2+
3. Add the updated `evs-swagger.yaml` to `openapi-code-generator/src`. Be sure the old on is removed from the /src
   folder

## Task Names to Regenerate Code

The following is a list of the available gradle tasks for each language the openapi code generator can generate. The
location the generated code is generated is also provided.

* **All clients** - `buildDependentTasks`
* **Java client** - `buildJavaSdk`
    * **Location** = `/openapi-java-client`

## How to Build a Single Client

If you need to regenerate a single client for a given language:

1. Open your terminal and cd to the project directory. e.g. `evsrestapi-client-sdk`
2. Execute `gradle <nameOfTask>` in your terminal
3. The code will generate in a `build` folder. Navigate to the project in the `build` folder.
4. From the `build` folder, copy the generated code files and any other files required to build the project to the
   corresponding examples folder. 
   1. e.g. For Java, the `src` folder and `gradle` files will need to be copied to the
      `java-examples` directory.

## How to Build All Clients

If you need to rebuild all the clients for all languages, typically after a big update to the `.yaml` file:

1. Open your terminal and cd to the project directory. e.g. `evsrestapi-client-sdk`
2. Execute `gradle buildDependentTasks`
3. All generated projects will be in a `build` folder. Navigate to the `build` folder to see the generated code
4. From the `build` folder, copy the generated code files and additional files needs to build/compile the project to the
   corresponding examples folder. 
    1. e.g. For Java, the `src` folder and `gradle` files will need to be copied to the
       `java-examples` directory.

## Current Contributors

- [Brian Carlsen](https://github.com/bcarlsenca)
- [Alicia Garcia](https://github.com/gaaliciA1990)
- [Other Contributors](https://github.com/NCIEVS/evsrestapi-client-SDK/graphs/contributors)

**[Back to top](#evsrestapi-generate-client-code)**