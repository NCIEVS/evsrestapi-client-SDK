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

`go test -run "^TestSearchEndpointAPIService/GetSearch$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearch.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and restrict the search results by concept status of
"Retired_Concept". This example uses paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchFilterByConceptStatus$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchFilterByConceptStatus.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition
source of "NCI". This example uses paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchFilterByDefinitionSource$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchFilterByDefinitionSource.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by definition type)

Find concepts matching a search term within a specified terminology and restrict the search results by a definition type
of "DEFINITION". This example uses paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchFilterByDefinitionType$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchFilterByDefinitionType.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym source
of "NCI" and synonymTermGroup of "PT".

`go test -run "^TestSearchEndpointAPIService/GetSearchFilterBySynonymSourceAndTermType$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchFilterBySynonymSourceAndTermType.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (restrict by synonym type)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym type
of "FULL_SYN".

`go test -run "^TestSearchEndpointAPIService/GetSearchFilterBySynonymType$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchFilterBySynonymType.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (where search term is a code)

`go test -run "^TestSearchEndpointAPIService/GetSearchByCode$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type match)

Find concepts matching a search term within a specified terminology and a search type of "match". This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypeMatch$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypeMatch.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type startsWith)

Find concepts matching a search term within a specified terminology and a search type of "startsWith".This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypeStartsWith$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypeStartsWith.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type phrase)

Find concepts matching a search term within a specified terminology and a search type of "phrase". This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypePhrase$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypePhrase.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type fuzzy)

Find concepts matching a search term within a specified terminology and a search type of "fuzzy". This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypeFuzzy$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypeFuzzy.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type AND)

Find concepts matching a search term within a specified terminology and a search type of "and". This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypeAnd$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypeAnd.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (using type OR)

Find concepts matching a search term within a specified terminology and a search type of "or". This example uses
paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchByTypeOr$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchByTypeOr.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology and include synonyms and highlighted text in the
response. This example uses paging to get only the first 5 results.

`go test -run "^TestSearchEndpointAPIService/GetSearchWithHighlights$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchWithHighlights.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by property

Find concepts matching a search term that is searched within a certain set of properties. The search results are set to
include the property values, so you can easily see the match. The property setting here can be either based on code or
on label

`go test -run "^TestSearchEndpointAPIService/GetSearchConceptsByProperty$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchConceptsByProperty.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by subset

Get concepts matching a search term within a specified terminology and subset. This example searches within C165258
(e.g. Cellosaurus Disease Terminology).

`go test -run "^TestSearchEndpointAPIService/GetSearchConceptsBySubset$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSearchConceptsBySubset.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Find concepts by SPARQL code

Find concepts for a specified SPARQL query that returns a ?code field.


`go test -run "^TestSearchEndpointAPIService/GetConceptsBySPARQLCode$" api_search_endpoint_test.go -v`

[See output here](outputs/GetConceptsBySPARQLCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

`go test -run "^TestMetadataEndpointsAPIService/GetSubsets$" api_metadatas_endpoint_test.go -v`

[See output here](outputs/GetSubsets.txt)


[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

`go test -run "^TestMetadataEndpointsAPIService/GetSubset1$" api_metadatas_endpoint_test.go -v`

[See output here](outputs/GetSubset1.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

`go test -run "^TestMetadataEndpointsAPIService/GetSubsetMembers1$" api_metadatas_endpoint_test.go -v`

[See output here](outputs/GetSubsetMembers1.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.

`go test -run "^TestMapsetEndpointsAPIService/GetMapsets$" api_mapset_endpoints_test.go -v`

[See output here](outputs/GetMapsets.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`go test -run "^TestMapsetEndpointsAPIService/GetMapsetByCode$" api_mapset_endpoints_test.go -v`

[See output here](outputs/GetMapsetByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

`go test -run "^TestMapsetEndpointsAPIService/GetMapsetMappingsByCode$" api_mapset_endpoints_test.go -v`

[See output here](outputs/GetMapsetMappingsByCode.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get replacement concepts for an inactive concept code

Get the replacement concepts for a specified inactive concept code.

`go test -run "^TestHistoryEndpointsAPIService/GetReplacements$" api_history_endpoints_test.go -v`

[See output here](outputs/GetReplacements.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get replacement concepts for a list of inactive concept codes

Get the replacement concepts for a specified list of inactive concept codes.

`go test -run "^TestHistoryEndpointsAPIService/GetReplacementsFromList$" api_history_endpoints_test.go -v`

[See output here](outputs/GetReplacementsFromList.txt)

[Back to Top](#evsrestapi-client-sdk-go-tutorial)

### Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

`go test -run "^TestSearchEndpointAPIService/GetSPARQLBindings$" api_search_endpoint_test.go -v`

[See output here](outputs/GetSPARQLBindings.txt)
