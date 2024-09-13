# EVSRESTAPI client SDK: Go Tutorial

======================================

This tutorial shows how to use a locally installed version of Golang to interact with the EVSREST API. Shown here are
examples that demonstrate the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the ones shown.

## Prerequisites

- Golang 1.18 or higher must be installed. The latest version can be found [here](https://go.dev/doc/install).


## Extra Library Installation

Install the following dependencies via command line in the `go-examples` directory:

```sh
go get github.com/stretchr/testify/assert
go get github.com/stretchr/testify/require
go get golang.org/x/net/context
```

### URLs Configuration per Operation

Each operation can use different server URL defined using `url` in [configuration.go](configuration.go#L87). This file includes a list of currently supported API environments. To change the environment used to run, set the url variable to the desired environment mentioned in the url mapping `baseUrls`

```go
// Define base URLs for different environments
 baseUrls := map[string]string{
  "development": "https://api-evsrest-dev.nci.nih.gov/",
  "testing":     "https://api-evsrest-test.nci.nih.gov/m",
  "production":  "https://api-evsrest.nci.nih.gov/",
  "local":       "http://localhost:8082",
 }

 // define environment
 url := baseUrls["production"] // set API environment here

 cfg := &Configuration{
  DefaultHeader: make(map[string]string),
  UserAgent:     "OpenAPI-Generator/1.0.0/go",
  Debug:         false,
  Servers: ServerConfigurations{
   {
    URL:         url, // configuration built based on selected baseUrl
    Description: "No description provided",
   },
  },
  OperationServers: map[string]ServerConfigurations{},
 }
```

## Test Running

### **Run a Single Test**

To run a specific test from a test file, use the `-run` flag with the name of the test:

```bash
go test -run "^TestMetadataEndpointsAPIService/GetAssociationByCode$" api_metadata_endpoints_test.go
```

The "^$" surrounding test name is necessary to run only the specified test, as go defaults to running all substring matches of the run parameter.

### Run Multiple Tests in a File (Regex)

You can run multiple tests that match a regular expression:

```bash
go test -run 'TestMetadataEndpointsAPIService/GetAssociationByCode|GetAssociations' api_metadata_endpoints_test.go
```

### Run All Tests in a Single File

To execute all tests in a specific test file:

```bash
go test api_metadata_endpoints_test.go
```

### Run All Tests

To run all tests in all files across the entire directory:

```bash
go test ./...
```

### Run Tests with Verbose Output

To see detailed output of each test, including pass/fail status and log output, add the -v flag:

```bash
go test -v api_metadata_endpoints_test.go        # For a single file
go test -v ./...                           # For all tests in the project
```

**The -v verbose option is necessary to see the exact output of each API call made in the tests. They will otherwise only display success or failure states.**

## Sample Go Calls

The following examples are exhibited by various unit tests defined in the code in `go-examples`.
All commands to run these tests should be run from that directory.

* [Get terminologies](#get-terminologies)
* [Get concept by code (minimal information)](#get-concept-by-code-minimal-information)
* [Get concepts by list (minimal information)](#get-concepts-by-list-minimal-information)
* [Get concept by code (summary information)](#get-concept-by-code-summary-information)
* [Get concept by code (full information)](#get-concept-by-code-full-information)
* [Get concept by code (custom include)](#get-concept-by-code-custom-include)
* [Get concept part](#get-concept-part)
* [Get concept descendants](#get-concept-descendants)
* [Get all properties](#get-all-properties)
* [Get property by code (or label)](#get-property-by-code-or-label)
* [Get all qualifiers](#get-all-qualifiers)
* [Get qualifier by code (or label)](#get-qualifier-by-code-or-label)
* [Get qualifier values by code (or label)](#get-qualifier-values-by-code-or-label)
* [Get all roles](#get-all-roles)
* [Get role by code (or label)](#get-roles-by-code-or-label)
* [Get all associations](#get-all-associations)
* [Get association by code (or label)](#get-associations-by-code-or-label)
* [Get all term types](#get-all-term-types)
* [Get all synonym sources](#get-all-synonym-sources)
* [Get all definition types](#get-all-definition-types)
* [Get definition type by code](#get-definition-type-by-code)
* [Get all synonym types](#get-all-synonym-types)
* [Get synonym type by code](#get-synonym-types-by-code)
* [Find root concepts](#find-root-concepts)
* [Get paths to/from root from a code](#get-paths-tofrom-root-from-a-code)
* [Get paths to an ancestor code from a code](#get-paths-to-an-ancestor-code-from-a-code)
* [Get subtree for code](#get-subtree-for-code)
* [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term)
* [Find concepts by search term (restrict by concept status)](#find-concepts-by-search-term-restrict-by-concept-status)
* [Find concepts by search term (restrict by definition source)](#find-concepts-by-search-term-restrict-by-definition-source)
* [Find concepts by search term (restrict by definition type)](#find-concepts-by-search-term-restrict-by-definition-type)
* [Find concepts by search term (restrict by synonym source and termgroup)](#find-concepts-by-search-term-restrict-by-synonym-source-and-termgroup)
* [Find concepts by search term (restrict by synonym type)](#find-concepts-by-search-term-restrict-by-synonym-type)
* [Find concepts by search term (where search term is a code)](#find-concepts-by-search-term-where-search-term-is-a-code)
* [Find concepts by search term (using type=match)](#find-concepts-by-search-term-using-type-match)
* [Find concepts by search term (using type=startsWith)](#find-concepts-by-search-term-using-type-startswith)
* [Find concepts by search term (using type=phrase)](#find-concepts-by-search-term-using-type-phrase)
* [Find concepts by search term (using type=fuzzy)](#find-concepts-by-search-term-using-type-fuzzy)
* [Find concepts by search term (using type=AND)](#find-concepts-by-search-term-using-type-and)
* [Find concepts by search term (using type=OR)](#find-concepts-by-search-term-using-type-or)
* [Find concepts by search term (with highlights)](#find-concepts-by-search-term-with-highlights)
* [Find concepts by property](#find-concepts-by-property)
* [Find concepts by subset](#find-concepts-by-subset)
* [Find concepts by SPARQL code](#find-concepts-by-sparql-code)
* [Get all subsets](#get-all-subsets)
* [Get subset by code](#get-subset-by-code)
* [Get subset members by subset code](#get-subset-members-by-code)
* [Get all mapsets](#get-all-mapsets)
* [Get mapset by code](#get-mapset-by-code)
* [Get maps by mapset code](#get-maps-by-mapset-code)
* [Get replacement concepts for an inactive concept code](#get-replacement-concepts-for-an-inactive-concept-code)
* [Get replacement concepts for a list of inactive concept codes](#get-replacement-concepts-for-a-list-of-inactive-concept-codes)
* [Get SPARQL bindings from query](#get-sparql-bindings-from-query)

### Get terminologies

Return all loaded terminologies currently hosted by the API.

`go test -run "^TestMetadataEndpointsAPIService/GetTerminologies$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetTerminologies.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (minimal information)

Return concept object with minimal information for a specified code.

`go test -run "^TestConceptEndpointsAPIService/GetConcept$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetConcept.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concepts by list (minimal information)

Return concept objects with minimal information for a specified list of codes.

`go test -run "^TestConceptEndpointsAPIService/GetConcepts$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetConcepts.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (summary information)

Return concept object with summary information for a specified code.

`go test -run "^TestConceptEndpointsAPIService/GetConceptSummary$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetConceptSummary.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (full information)

Return concept object with full information for a specified code.

`go test -run "^TestConceptEndpointsAPIService/GetConceptFull$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetConceptFull.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept by code (custom include)

Return custom concept information for a given terminology and code. To show a range of options, in this case, the
request asks for synonyms, children, maps, and inverse associations.

`go test -run "^TestConceptEndpointsAPIService/GetConceptCustomInclude$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetConceptCustomInclude.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept part

Returns sub-part of the concept for a given terminology and code. NOTE: in the call below,
you can replace "children" in the URL with any of the following and retrieve the
corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps.

`go test -run "^TestConceptEndpointsAPIService/GetChildren$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetChildren.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get concept descendants

Return concept descendants information for a given terminology and code. The call client can be constrained by a
maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children. The test
sets the max level to 2.

`go test -run "^TestConceptEndpointsAPIService/GetDescendants$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetDescendants.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all properties

Return all properties for a given terminology with default include setting (minimal).

`go test -run "^TestMetadataEndpointsAPIService/GetProperties$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetProperties.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get property by code or label

Return property for the specified code or label.

`go test -run "^TestMetadataEndpointsAPIService/GetProperty$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetProperty.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all qualifiers

Return all qualifiers for a given terminology with default include setting (minimal).

`go test -run "^TestMetadataEndpointsAPIService/GetQualifiers$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetQualifiers.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

`go test -run "^TestMetadataEndpointsAPIService/GetQualifier$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetQualifier.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get qualifier values by code (or label)

Return distinct value set for the qualifier with the specified code or label.

`go test -run "^TestMetadataEndpointsAPIService/GetQualifierValues$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetQualifierValues.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all roles

Return all roles.

`go test -run "^TestMetadataEndpointsAPIService/GetRoles$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetRoles.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get roles by code (or label)

Returns a role definition for a specified code.

`go test -run "^TestMetadataEndpointsAPIService/GetRole$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetRole.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all associations

Return all associations.

`go test -run "^TestMetadataEndpointsAPIService/GetAssociations$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetAssociations.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get associations by code (or label)

Returns associations for a specified code.

`go test -run "^TestMetadataEndpointsAPIService/GetAssociationByCode$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetAssociationByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all term types

Return metadata for all term types for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetTermTypes$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetTermTypes.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all synonym sources

Return metadata for all synonym sources for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetSynonymSources$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetSynonymSources.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all definition sources

Return metadata for all definition sources for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetDefinitionSources$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetDefinitionSources.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all definition types

Return metadata for all definition types for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetDefinitionTypes$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetDefinitionTypes.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get definition type by code

Get definition type by code. Include parameter allowed customizing how much data to return.

`go test -run "^TestMetadataEndpointsAPIService/GetDefinitionTypeByCode$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetDefinitionTypeByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all synonym types

Return metadata for all synonym types for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetSynonymTypes$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetSynonymTypes.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get synonym types by code

Return metadata for all synonym types for the specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetSynonymTypeByCode$" api_metadata_endpoints_test.go -v`

[See output here](outputs/GetSynonymTypeByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find root concepts

Return all root concepts for the specified terminology.

`go test -run "^TestConceptEndpointsAPIService/GetRoots$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetRoots.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

`go test -run "^TestConceptEndpointsAPIService/GetPathsFromRoot$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetPathsFromRoot.txt)

`go test -run "^TestConceptEndpointsAPIService/GetPathsToRoot$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetPathsToRoot.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get paths to an ancestor code from a code

Return paths to the root concept for a specified terminology and code.

`go test -run "^TestConceptEndpointsAPIService/GetPathsToAncestor$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetPathsToAncestor.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subtree for code

Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a
tree-view based hierarchy browser in a UI.

`go test -run "^TestConceptEndpointsAPIService/GetSubtree$" api_concept_endpoints_test.go -v`

[See output here](outputs/GetSubtree.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term

Find concepts matching a search term within a specified terminology. This example uses paging to get only the first 5
results. Include is set to minimal.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and restrict the search results by concept status of
"Retired_Concept". This example uses paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_concept_status`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition
source of "NCI". This example uses paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_definition_source`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by definition type)

Find concepts matching a search term within a specified terminology and restrict the search results by a definition type
of "DEFINITION". This example uses paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_definition_type`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym source
of "NCI" and synonymTermGroup of "PT".

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_synonym_source`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by synonym type)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym type
of "FULL_SYN".

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (where search term is a code)

Find concepts matching a search term within a specified terminology and restrict the search results using a code as the
search term.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::`

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type match)

Find concepts matching a search term within a specified terminology and a search type of "match". This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type startsWith)

Find concepts matching a search term within a specified terminology and a search type of "startsWith".This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_starts_with`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type phrase)

Find concepts matching a search term within a specified terminology and a search type of "phrase". This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_phrase`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type fuzzy)

Find concepts matching a search term within a specified terminology and a search type of "fuzzy". This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_fuzzy`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type AND)

Find concepts matching a search term within a specified terminology and a search type of "and". This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_and`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type OR)

Find concepts matching a search term within a specified terminology and a search type of "or". This example uses
paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_or`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology and include synonyms and highlighted text in the
response. This example uses paging to get only the first 5 results.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_search_term_highlights`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by property

Find concepts matching a search term that is searched within a certain set of properties. The search results are set to
include the property values, so you can easily see the match. The property setting here can be either based on code or
on label

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by subset

Get concepts matching a search term within a specified terminology and subset. This example searches within C165258
(e.g. Cellosaurus Disease Terminology).

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_concept_by_subset`

```

```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by SPARQL code

Find concepts for a specified SPARQL query that returns a ?code field.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::`

```
2024-07-12T12:35:44.440 INFO : Get search results from ncit for SPARQL query = SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . ?x :P108 "Melanoma" } }
2024-07-12T12:35:44.440 INFO :     search results = uri=None ct=None total=1 time_taken=24 parameters=SearchCriteria(uri=None, ct=None, term=None, type='contains', include='minimal', sort=None, ascending=True, from_record=0, page_size=25, concept_status=None, var_property=None, value=None, synonym_source=None, synonym_type=None, definition_source=None, definition_type=None, synonym_term_type=None, subset=None, code_list=['C3224'], terminology=['ncit'], sparql='SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . ?x :P108 "Melanoma" } }') concepts=[Concept(uri=None, ct=None, code='C3224', name='Melanoma', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=False, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None)]
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

`pytest tests/test_metadata_endpoints_api.py::TestMetadataEndpointsApi::test_get_subsets1`

```
2024-07-03T16:49:18.906 INFO : Get all subsets for terminology - ncit
2024-07-03T16:49:18.918 INFO :     subsets - [Concept(uri=None, ct=None, code='C167405', name='ACC/AHA EHR Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, history=None, properties=None, children=[Concept(uri=None, ct=None, code='C167409', name='ACC/AHA Pediatric and Congenital Cardiology EHR Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=None, active=True, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None)], parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157225', name='CBDD Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, history=None, properties=None, children=[Concept(uri=None, ct=None, code='C168696', name='CBDD Process Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=None, active=True, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C168697', name='CBDD Structure Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=None, active=True, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None)], parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C165258', name='Cellosaurus Disease Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C177281', name='Childhood Cancer Predisposition Study Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, history=None, properties=None, children=[Concept(uri=None, ct=None, code='C177516', name='CCPS Disease Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=None, active=True, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C177517', name='CCPS Genetics Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=None, active=True, synonyms=None, definitions=None, history=None, properties=None, children=None, parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None)], parents=None, descendants=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C61410', name='Clinical Data Interchange Standards Consortium Terminology', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None,...
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

`pytest tests/test_subset_endpoints_api.py::TestSubsetEndpointsApi::test_get_subset`

```
2024-07-12T12:53:47.395 INFO : Get the subset for code - C116978
2024-07-12T12:53:47.395 INFO :     subsets: uri=None ct=None code='C116978' name='CTRP Agent Terminology' terminology='ncit' version='21.06e' level=None highlight=None subset_link=None mapset_link=None concept_status='DEFAULT' source=None leaf=True active=True synonyms=[Synonym(uri=None, ct=None, name='Clinical Trials Reporting Program Agent Terminology', highlight=None, term_type='SY', type='FULL_SYN', source='NCI', code=None, sub_source=None, qualifiers=None, active=None), Synonym(uri=None, ct=None, name='CTRP Agent Terminology', highlight=None, term_type='PT', type='FULL_SYN', source='NCI', code=None, sub_source=None, qualifiers=None, active=None), Synonym(uri=None, ct=None, name='CTRP Agent Terminology', highlight=None, term_type=None, type='Preferred_Name', source=None, code=None, sub_source=None, qualifiers=None, active=None)] definitions=[Definition(uri=None, ct=None, definition='A subset of terminology about pharmacologic substances and formulations that are currently being used or tested in clinical trials for the treatment of cancer, cancer-related conditions and chemo/radiotherapy-related side effects.', highlight=None, type='DEFINITION', source='NCI', qualifiers=None)] properties=[ModelProperty(uri=None, ct=None, type='Contributing_Source', value='CTRP', highlight=None, qualifiers=None, source=None), ModelProperty(uri=None, ct=None, type='Publish_Value_Set', value='Yes', highlight=None, qualifiers=None, source=None), ModelProperty(uri=None, ct=None, type='Semantic_Type', value='Intellectual Product', highlight=None, qualifiers=None, source=None), ModelProperty(uri=None, ct=None, type='Term_Browser_Value_Set_Description', value='A subset of terminology about pharmacologic substances and formulations that are currently being used or tested in clinical trials for the treatment of cancer, cancer-related conditions and chemo/radiotherapy-related side effects. This data is available for viewing and download at the <a href="https://evs.nci.nih.gov/ftp1/CTRP/NCIt-CTRP_Subsets.xls">NCI FTP</a> site.', highlight=None, qualifiers=None, source=None), ModelProperty(uri=None, ct=None, type='UMLS_CUI', value='C3899744', highlight=None, qualifiers=None, source=None)] children=None parents=None descendants=None qualifiers=None associations=None inverse_associations=None roles=None disjoint_with=None inverse_roles=None history=None maps=None paths=None
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

`pytest tests/test_subset_endpoints_api.py::TestSubsetEndpointsApi::test_get_subset_members`

```
2024-07-12T12:52:28.745 INFO : Get the subset members for code - C157225
2024-07-12T12:52:28.746 INFO :     subsets: [Concept(uri=None, ct=None, code='C16255', name='Acetylation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=False, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157214', name='Acylation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157206', name='Adsorption', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157210', name='Amidation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157220', name='Antigen Cultivation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C61471', name='Attenuation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=False, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C41544', name='Catabolic Process', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=False, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C157211', name='Cell Expansion', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C40483', name='Chelating Activity', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=False, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C164238', name='Chemical Attenuation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='C175901', name='Chemical Inactivation', terminology='ncit', version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status='DEFAULT', source=None, leaf=True, active=True, synonyms=None, definitions=None,...
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.

`pytest tests/test_mapset_endpoints_api.py::TestMapsetEndpointsApi::test_get_mapsets`

```
2024-07-12T12:50:27.715 INFO : Get all mapsets
2024-07-12T12:50:27.717 INFO :    mapsets = [Concept(uri=None, ct=None, code='SNOMEDCT_US_2020_09_01_to_ICD10CM_2021_Mappings', name='SNOMEDCT_US_2020_09_01 to ICD10CM_2021 Mappings', terminology='snomedct_us', version='2020_09_01', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='SNOMEDCT_US_2020_09_01_to_ICD10_2016_Mappings', name='SNOMEDCT_US_2020_09_01 to ICD10_2016 Mappings', terminology='snomedct_us', version='2020_09_01', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_ICD10CM', name='NCIt_Maps_To_ICD10CM', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_MedDRA', name='NCIt_Maps_To_MedDRA', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_GDC', name='NCIt_Maps_To_GDC', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_ICD9CM', name='NCIt_Maps_To_ICD9CM', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_ICDO3', name='NCIt_Maps_To_ICDO3', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_Maps_To_ICD10', name='NCIt_Maps_To_ICD10', terminology=None, version='21.06e', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=True, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='PDQ_2016_07_31_TO_NCI_2016_10E', name='PDQ_2016_07_31_TO_NCI_2016_10E', terminology=None, version='201607', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_to_HGNC_Mapping', name='NCIt_to_HGNC_Mapping', terminology=None, version='June2024', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIt_to_ChEBI_Mapping', name='NCIt_to_ChEBI_Mapping', terminology=None, version='August2023', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='MA_to_NCIt_Mapping', name='MA_to_NCIt_Mapping', terminology=None, version='November2011', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='GO_to_NCIt_Mapping', name='GO_to_NCIt_Mapping', terminology=None, version='February2020', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='ICD10_to_MedDRA_Mapping', name='ICD10_to_MedDRA_Mapping', terminology=None, version='July2023', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='NCIT_TO_SWISSPROT', name='NCIT_TO_SWISSPROT', terminology=None, version='June2024', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='ICDO_TO_NCI_TOPOGRAPHY', name='ICDO_TO_NCI_TOPOGRAPHY', terminology=None, version='2017-12-21', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='ICDO_TO_NCI_MORPHOLOGY', name='ICDO_TO_NCI_MORPHOLOGY', terminology=None, version='2017-12-21', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None), Concept(uri=None, ct=None, code='ICDO_TO_NCI_AXIS', name='ICDO_TO_NCI_AXIS', terminology=None, version='2017-12-21', level=None, highlight=None, subset_link=None, mapset_link=None, concept_status=None, source=None, leaf=None, active=None, synonyms=None, definitions=None, properties=None, children=None, parents=None, descendants=None, qualifiers=None, associations=None, inverse_associations=None, roles=None, disjoint_with=None, inverse_roles=None, history=None, maps=None, paths=None)]
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`pytest tests/test_mapset_endpoints_api.py::TestMapsetEndpointsApi::test_get_mapset_by_code`

```
2024-07-12T12:49:54.187 INFO : Get mapsets for code - NCIt_Maps_To_ICDO3 
2024-07-12T12:49:54.187 INFO :    mapset = uri=None ct=None code='NCIt_Maps_To_ICDO3' name='NCIt_Maps_To_ICDO3' terminology=None version='21.06e' level=None highlight=None subset_link=None mapset_link=None concept_status=None source=None leaf=None active=True synonyms=None definitions=None properties=None children=None parents=None descendants=None qualifiers=None associations=None inverse_associations=None roles=None disjoint_with=None inverse_roles=None history=None maps=None paths=None
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

`pytest tests/test_mapset_endpoints_api.py::TestMapsetEndpointsApi::test_get_mapset_mappings_by_code`

```
2024-07-12T12:49:21.257 INFO : Get mapset mappings for code - GO_to_NCIt_Mapping 
2024-07-12T12:49:21.257 INFO :    mappings = uri=None ct=None total=305 time_taken=None parameters=SearchCriteria(uri=None, ct=None, term=None, type=None, include=None, sort=None, ascending=None, from_record=0, page_size=25, concept_status=None, var_property=None, value=None, synonym_source=None, synonym_type=None, definition_source=None, definition_type=None, synonym_term_type=None, subset=None, code_list=None, terminology=None, sparql=None) maps=[ConceptMap(uri=None, ct=None, source='GO', source_name='ATP hydrolysis activity', source_term_type=None, source_code='GO:0016887', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='ATP Hydrolysis', target_term_type=None, target_code='C19939', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='B cell activation', source_term_type=None, source_code='GO:0042113', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='B-Cell Activation', target_term_type=None, target_code='C19255', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='B cell proliferation', source_term_type=None, source_code='GO:0042100', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='B Cell Proliferation', target_term_type=None, target_code='C19385', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA alkylation', source_term_type=None, source_code='GO:0006305', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Alkylation', target_term_type=None, target_code='C25826', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA binding', source_term_type=None, source_code='GO:0003677', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Binding', target_term_type=None, target_code='C18597', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA integration', source_term_type=None, source_code='GO:0015074', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Integration', target_term_type=None, target_code='C18855', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA methylation', source_term_type=None, source_code='GO:0006306', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Methylation', target_term_type=None, target_code='C17961', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA modification', source_term_type=None, source_code='GO:0006304', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Modification Process', target_term_type=None, target_code='C19449', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA recombination', source_term_type=None, source_code='GO:0006310', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Recombination Process', target_term_type=None, target_code='C17082', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA repair', source_term_type=None, source_code='GO:0006281', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Repair', target_term_type=None, target_code='C16513', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA replication initiation', source_term_type=None, source_code='GO:0006270', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='Replication Initiation', target_term_type=None, target_code='C28677', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA replication proofreading', source_term_type=None, source_code='GO:0045004', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Replication Proofreading', target_term_type=None, target_code='C21048', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA replication', source_term_type=None, source_code='GO:0006260', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='DNA Replication', target_term_type=None, target_code='C16514', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA-templated transcription elongation', source_term_type=None, source_code='GO:0006354', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='Transcription Elongation', target_term_type=None, target_code='C28586', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA-templated transcription initiation', source_term_type=None, source_code='GO:0006352', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='Transcription Initiation', target_term_type=None, target_code='C20147', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA-templated transcription termination', source_term_type=None, source_code='GO:0006353', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='Transcription Termination', target_term_type=None, target_code='C28615', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='DNA-templated transcription', source_term_type=None, source_code='GO:0006351', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='Transcription', target_term_type=None, target_code='C17208', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='G1 phase', source_term_type=None, source_code='GO:0051318', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='G1 Phase Process', target_term_type=None, target_code='C17355', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='G2 phase', source_term_type=None, source_code='GO:0051319', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='G2 Phase Process', target_term_type=None, target_code='C17356', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='GTP binding', source_term_type=None, source_code='GO:0005525', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='GTP Binding', target_term_type=None, target_code='C20979', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='M phase', source_term_type=None, source_code='GO:0000279', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='M Phase Process', target_term_type=None, target_code='C20349', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='RNA binding', source_term_type=None, source_code='GO:0003723', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='RNA Binding', target_term_type=None, target_code='C20737', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='RNA biosynthetic process', source_term_type=None, source_code='GO:0032774', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='RNA Synthesis', target_term_type=None, target_code='C19018', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='RNA catabolic process', source_term_type=None, source_code='GO:0006401', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='RNA Degradation', target_term_type=None, target_code='C19144', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None), ConceptMap(uri=None, ct=None, source='GO', source_name='RNA folding', source_term_type=None, source_code='GO:0034337', source_terminology=None, source_terminology_version=None, source_loaded=None, type='mapsTo', rank='1', group=None, rule=None, target_name='RNA Folding', target_term_type=None, target_code='C19017', target_terminology='NCI_Thesaurus', target_terminology_version='23.02d', target_loaded=None, target_term_group=None)]
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get replacement concepts for an inactive concept code

Get the replacement concepts for a specified inactive concept code.

`pytest tests/test_history_endpoints_api.py::TestHistoryEndpointsApi::test_get_replacements`

```
2024-07-12T12:48:58.044 INFO : Get suggested replacements for code - C12658
2024-07-12T12:48:58.044 INFO :     replacements = [History(uri=None, ct=None, code='C12658', name='Prokaryotic Cell', action='retire', var_date='2003-08-22', replacement_code='C19157', replacement_name='Specimen')]
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get replacement concepts for a list of inactive concept codes

Get the replacement concepts for a specified list of inactive concept codes.

`pytest tests/test_history_endpoints_api.py::TestHistoryEndpointsApi::test_get_replacements_from_list`

```
2024-07-12T12:48:34.574 INFO : Get suggested replacements for code - C & 1
2024-07-12T12:48:34.575 INFO :     suggested replacements = [History(uri=None, ct=None, code='C12658', name='Prokaryotic Cell', action='retire', var_date='2003-08-22', replacement_code='C19157', replacement_name='Specimen'), History(uri=None, ct=None, code='C13320', name='Nose, Nasal Passages', action='merge', var_date='2003-08-22', replacement_code='C12756', replacement_name='Nose')]
```

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

`pytest tests/test_search_endpoint_api.py::TestSearchEndpointApi::test_get_sparql_bindings`

```
2024-07-12T12:39:16.468 INFO : Get SPARQL bindings for query = SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }
2024-07-12T12:39:16.469 INFO :     search results = uri=None ct=None total=166616 time_taken=None parameters=SearchCriteria(uri=None, ct=None, term=None, type='contains', include='minimal', sort=None, ascending=None, from_record=None, page_size=None, concept_status=None, var_property=None, value=None, synonym_source=None, synonym_type=None, definition_source=None, definition_type=None, synonym_term_type=None, subset=None, code_list=None, terminology=None, sparql='SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }') results=[{'code': 'C7057'}, {'code': 'C12219'}, {'code': 'C12913'}, {'code': 'C3910'}, {'code': 'C20189'}, {'code': 'C1908'}, {'code': 'C26548'}, {'code': 'C12218'}, {'code': 'C17828'}, {'code': 'C16612'}]
```
