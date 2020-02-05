# EVSRESTAPI Client SDK

This is an easy-to-use tutorial for accessing EVSRESTAPI APIs.

## Table of Contents

1. [Tutorials by Language](#tutorials-by-language)
2. [Use Cases](#use-cases)
3. [Resources](#resources)
4. [Contributing](#contributing)
5. [License](#license)

## Tutorials by Language

### Bash

- [Click for Bash examples.](../master/bash-examples/ "Bash Examples")

### Curl

- [Click for Curl examples.](../master/curl-examples/ "Curl Examples")


**[Back to top](#table-of-contents)**


## Use Cases

The following cases will be used to demonstrate accessing the EVSREST API

- Get terminologies
- Get concept by code (minimum information)
- Get concepts by list of codes (minimum information)
- Get concept by code (summary information)
- Get concept by code (full information)
- Get concept by code (custom include)
- Get concept children
- Get property by code (or label)
- Get role by code (or label)
- Get association by code (or label)
- Find root concepts
- Get paths to/from root from a code
- Get paths to an ancestor from a code
- Find concepts by search term (use paging to get only first 5 results)
- Find concepts by search term (restrict by concept status)
- Find concepts by search term (restrict by contributing source)
- Find concepts by search term (restrict by definition source)
- Find concepts by search term (restrict by synonym source and termgroup)
- Find concepts by search term (where term is a code)
- Find concepts by search term (using type=match)
- Find concepts by search term (using type=startsWith)
- Find concepts by search term (using type=phrase)
- Find concepts by search term (using type=fuzzy)
- Find concepts by search term (using type=AND)
- Find concepts by search term (using type=OR)
- Find concepts by property


All of the tutorials use an environment variable for the API URL of the deployment:

- API_URL=https://api-evsrest-dev.nci.nih.gov/api/v1/

**[Back to top](#table-of-contents)**


## Resources

- Swagger Documentation - https://api-evsrest-dev.nci.nih.gov/swagger-ui.html


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


