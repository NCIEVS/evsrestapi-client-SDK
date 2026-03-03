# EVSRESTAPI Client SDK

This is an easy-to-use tutorial for accessing EVSRESTAPI APIs.

## Table of Contents

1. [Tutorials by Language](#tutorials-by-language)
2. [Use Cases](#use-cases)
3. [Resources](#resources)
4. [Contributing](#contributing)
5. [License](#license)

## Tutorials by Language

- [Click for Bash examples.](../master/bash-examples/ "Bash Examples")
- [Click for Curl examples.](../master/curl-examples/ "Curl Examples")
- [Click for FHIR examples](../master/fhir-examples/ "FHIR Examples")
- [Click for Go examples.](../master/go-examples/ "Go Examples")
- [Click for Java examples.](../master/java-examples/ "Java Examples")
- [Click for Postman examples.](../master/postman-examples/ "Postman Examples")
- [Click for Python examples.](../master/python-examples/ "Python Examples")
- [Click for Swagger API documentation](https://api-evsrest.nci.nih.gov/swagger-ui/index.html)

## Automation scripts for examples

A set of convenience scripts is provided in some of the example directories to help you run the example collections/tests and capture outputs quickly. These scripts are optional helpers and use the examples' local files and tooling.

- `postman-examples/postman.sh` — Runs the Postman collection via Newman. Example:
	```bash
	cd postman-examples
	./postman.sh
	```
- `fhir-examples/postman_fhir.sh` — Runs the FHIR collections (R4 or R5) via Newman. Example:
	```bash
	cd fhir-examples
	./postman_fhir.sh R4
	```
	You can override the API URL used by these Postman scripts by setting the `API_URL` environment variable before running them.
- `python-examples/python_check.py` — Scans `python-examples/README.md` for backticked pytest commands and runs them using your Python environment. Example:
	```bash
	cd python-examples
	python python_check.py
	```
- `java-examples/java_check.py` — Scans `java-examples/README.md` for `./gradlew` commands, executes them, and writes captured outputs to the `samples/` folder. Example:
	```bash
	cd java-examples
	python java_check.py
	```

Requirements: `newman` (npm) for Postman scripts; `pytest` (pip) for the Python helper; Java (JDK) and a working `./gradlew` (Gradle wrapper) for the Java helper.

**[Back to top](#table-of-contents)**

## Use Cases

The following cases are used to demonstrate accessing the EVS REST API. Each of the
"Tutorials by language" provides specific details on how to implement them specifically
in the technology approach used by that tutorial. 

- Get terminologies
- Get concept by code (minimum information)
- Get concepts by list of codes (minimum information)
- Get concept by code (summary information)
- Get concept by code (full information)
- Get concept by code (custom include)
- Get concept part
- Get concept descendants
- Get all properties
- Get property by code (or label)
- Get qualifier values by code (or label)
- Get all roles
- Get role by code (or label)
- Get all associations
- Get association by code (or label)
- Get all term types
- Get all definition sources
- Get all synonym sources
- Get all synonym types
- Get synonym types by code
- Get all definition types
- Get definition types by code
- Find root concepts
- Get paths to/from root from a code
- Get paths to an ancestor from a code
- Get subtree for a code
- Find concepts by search term (use paging to get only first 5 results)
- Find concepts by search term (restrict by concept status)
- Find concepts by search term (restrict by definition source)
- Find concepts by search term (restrict by definition type)
- Find concepts by search term (restrict by synonym source and termgroup)
- Find concepts by search term (restrict by synonym type)
- Find concepts by search term (where term is a code)
- Find concepts by search term (using type=match)
- Find concepts by search term (using type=startsWith)
- Find concepts by search term (using type=phrase)
- Find concepts by search term (using type=fuzzy)
- Find concepts by search term (using type=AND)
- Find concepts by search term (using type=OR)
- Find concepts by search term (with highlights)
- Find concepts by property
- Find concepts by subset
- Find concepts by SPARQL code
- Find concepts based on associations query
- Get all subsets
- Get subset by code
- Get subset members by subset code
- Get all mapsets
- Get mapset by code
- Get maps by mapset code
- Get replacement concepts for an inactive concept code
- Get replacement concepts for a list of inactive concept codes
- Get SPARQL bindings from query

All of the tutorials use an environment variable for the API URL of the deployment:

- API_URL=<https://api-evsrest.nci.nih.gov/api/v1/>

**[Back to top](#table-of-contents)**

## Resources

- [Frequently Asked Questions (FAQ)](../master/doc/FAQ.md)
- [Additional Documentation](../master/doc/)
- [For App Support from NCI](https://evsexplore.semantics.cancer.gov/evsexplore/contact)

**[Back to top](#table-of-contents)**

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

**[Back to top](#table-of-contents)**

## Current Contributors

- [Brian Carlsen](https://github.com/bcarlsenca)
- [Other Contributors](https://github.com/NCIEVS/evsrestapi-client-SDK/graphs/contributors)

**[Back to top](#table-of-contents)**

## License

See the included [`LICENSE`](LICENSE) file for details.

**[Back to top](#table-of-contents)**
