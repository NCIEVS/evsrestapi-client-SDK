<a name="top" />

EVSRESTAPI REGENERATE CLIENT SDKs
==================================
This is a how-to guide for rebuilding openapi generated code as updates to the swagger are implemented.

## Requirements

1. Java 17+
2. Gradle 8.2+

## How to Build a Single Client

If you need to regenerate a single client for a given language:

1. Open your terminal and cd to the dir. e.g. `evsrestapi-client-sdk/doc/code-gen`
2. Execute `gradle <nameOfTask>` in your terminal
3. The code will generate in a `build` dir. Navigate to the `build` dir.
4. From the `build` dir, copy the generated code files and any other files required to build the project to the
   corresponding "examples" folder.
    1. See [next steps](#tasks-to-regenerate-code--next-steps) for details based on your language generated

**[Back to top](#evsrestapi-generate-client-code)**

## How to Build All Clients

If you need to rebuild all the clients for all languages, typically after a big update to the `.yaml` file:

1. Open your terminal and cd to the project directory. e.g. `evsrestapi-client-sdk`
2. Execute `gradle buildDependentTasks`
3. All generated projects will be in a `build` folder. Navigate to the `build` folder to see the generated code
4. From the `build` folder, copy the generated code files and additional files needs to build/compile the project to the
   corresponding examples folder.
    1. See [next steps](#tasks-to-regenerate-code--next-steps) for details

**[Back to top](#evsrestapi-generate-client-code)**

## Tasks to Regenerate Code & Next Steps...

The following is a list of the available gradle tasks for each language the openapi code generator can generate. The
location the generated code is generated is also provided.

* **All clients** - `buildDependentTasks`

* **Java client** - `buildJavaSdk`
    * **Generate Location** = `build/openapi-java-client`
        * Copy the new files generated from the `src/main` folder to the `java-examples/src/main` folder.
            * <span style="color:red"> DO NOT replace `ApiClient.java`.</span> 
            * <span style="color:red"> DO NOT replace tests. Update tests to demo the new api calls or fix failing tests. </span> 
        * java-examples uses `src/main/resources/url.properties` to set the basePath url in `ApiClient.java`. This
          should not be changed and the url should be updated in the properties file only.
        * Verify the gradle files match between what was generated vs what exists in `java-examples`. Update as needed,
          but don't override.
        * Verify the project builds and the tests run successfully before pushing changes
* **Python client** - `buildPythonSdk`
  * **Generate Location** = `build/openai-python-client`

**[Back to top](#evsrestapi-generate-client-code)**

## Resources
https://github.com/int128/gradle-swagger-generator-plugin?tab=readme-ov-file#introduction

## Current Contributors

- [Brian Carlsen](https://github.com/bcarlsenca)
- [Alicia Garcia](https://github.com/gaaliciA1990)
- [Other Contributors](https://github.com/NCIEVS/evsrestapi-client-SDK/graphs/contributors)

**[Back to top](#evsrestapi-generate-client-code)**