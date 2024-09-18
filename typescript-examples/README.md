# EVSRESTAPI client SDK: Typescript Tutorial

======================================

This tutorial shows how to use a locally installed version of typescript/npm to interact with the EVSREST API. Shown here are
examples that demonstrate the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the ones shown.

## Prerequisites

- Node.js 18 or higher. Download can be found [here](https://nodejs.org/en/download/prebuilt-installer). This also includes a compatible version of npm, which is also necessary for using this client.


## Extra Library Installation

Install the following dependencies via command line in the `typescript-examples` directory:

```sh
npm install jest
```

## Test Running

### **Run a Single Test**

To run a specific test from a test file, use the `-run` flag with the name of the test:

```bash
jest apis/HistoryEndpointsApiTest.test.ts -t 'test_get_code_replacements'
```

### Run Multiple Tests in a File (Regex)

You can run multiple tests that match a regular expression:

```bash
jest apis/HistoryEndpointsApiTest.test.ts -t 'test_get_code_replacements|test_get_replacements_from_list'
```

### Run All Tests in a Single File

To execute all tests in a specific test file:

```bash
jest apis/HistoryEndpointsApiTest.test.ts
```

### Run All Tests

To run all tests in all files across the entire directory:

```bash
jest test
```

## Sample Typescript Calls

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

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_terminologies`

[See output here](outputs/test_get_terminologies.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept by code (minimal information)

Return concept object with minimal information for a specified code.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_concept_minimal`

[See output here](outputs/test_get_concept_minimal.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concepts by list (minimal information)

Return concept objects with minimal information for a specified list of codes.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_concepts`

[See output here](outputs/test_get_concepts.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept by code (summary information)

Return concept object with summary information for a specified code.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_concept_summary`

[See output here](outputs/test_get_concept_summary.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept by code (full information)

Return concept object with full information for a specified code.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_concept_full`

[See output here](outputs/test_get_concept_full.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept by code (custom include)

Return custom concept information for a given terminology and code. To show a range of options, in this case, the
request asks for synonyms, children, maps, and inverse associations.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_concept_custom_include`

[See output here](outputs/test_get_concept_custom_include.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept part

Returns sub-part of the concept for a given terminology and code. NOTE: in the call below,
you can replace "children" in the URL with any of the following and retrieve the
corresponding underlying info: children, parents, roles, associations, inverseRoles,
inverseAssociations, maps.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_children`

[See output here](outputs/test_get_children.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get concept descendants

Return concept descendants information for a given terminology and code. The call client can be constrained by a
maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children. The test
sets the max level to 2.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_descendants`

[See output here](outputs/test_get_descendants.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all properties

Return all properties for a given terminology with default include setting (minimal).

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_properties`

[See output here](outputs/test_get_properties.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get property by code or label

Return property for the specified code or label.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_property`

[See output here](outputs/test_get_property.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all qualifiers

Return all qualifiers for a given terminology with default include setting (minimal).

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_qualifiers`

[See output here](outputs/test_get_qualifiers.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_qualifier`

[See output here](outputs/test_get_qualifier.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get qualifier values by code (or label)

Return distinct value set for the qualifier with the specified code or label.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_qualifier_values`

[See output here](outputs/test_get_qualifier_values.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all roles

Return all roles.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_roles`

[See output here](outputs/test_get_roles.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get roles by code (or label)

Returns a role definition for a specified code.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_role`

[See output here](outputs/test_get_role.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all associations

Return all associations.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_associations`

[See output here](outputs/test_get_associations.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get associations by code (or label)

Returns associations for a specified code.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_association_by_code`

[See output here](outputs/test_get_association_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all term types

Return metadata for all term types for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_term_types`

[See output here](outputs/test_get_term_types.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all synonym sources

Return metadata for all synonym sources for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_synonym_sources`

[See output here](outputs/test_get_synonym_sources.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all definition sources

Return metadata for all definition sources for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_definition_sources`

[See output here](outputs/test_get_definition_sources.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all definition types

Return metadata for all definition types for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_definition_types`

[See output here](outputs/test_get_definition_types.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get definition type by code

Get definition type by code. Include parameter allowed customizing how much data to return.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_definition_type_by_code`

[See output here](outputs/test_get_definition_type_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all synonym types

Return metadata for all synonym types for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_synonym_types`

[See output here](outputs/test_get_synonym_types.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get synonym types by code

Return metadata for all synonym types for the specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_synonym_type_by_code`

[See output here](outputs/test_get_synonym_type_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find root concepts

Return all root concepts for the specified terminology.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_roots`

[See output here](outputs/test_get_roots.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_paths_from_root`

[See output here](outputs/test_get_paths_from_root.txt)

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_paths_to_root`

[See output here](outputs/test_get_paths_to_root.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get paths to an ancestor code from a code

Return paths to the root concept for a specified terminology and code.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_paths_to_ancestor`

[See output here](outputs/test_get_paths_to_ancestor.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get subtree for code

Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a
tree-view based hierarchy browser in a UI.

`jest apis/ConceptEndpointsApiTest.test.ts -t test_get_subtree`

[See output here](outputs/test_get_subtree.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term

Find concepts matching a search term within a specified terminology. This example uses paging to get only the first 5
results. Include is set to minimal.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search`

[See output here](outputs/test_get_search.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and restrict the search results by concept status of
"Retired_Concept". This example uses paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_filter_by_concept_status`

[See output here](outputs/test_get_search_filter_by_concept_status.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition
source of "NCI". This example uses paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_filter_by_definition_source`

[See output here](outputs/test_get_search_filter_by_definition_source.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (restrict by definition type)

Find concepts matching a search term within a specified terminology and restrict the search results by a definition type
of "DEFINITION". This example uses paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_filter_by_definition_type`

[See output here](outputs/test_get_search_filter_by_definition_type.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym source
of "NCI" and synonymTermGroup of "PT".

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_filter_by_synonym_source_and_term_type`

[See output here](outputs/test_get_search_filter_by_synonym_source_and_term_type.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (restrict by synonym type)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym type
of "FULL_SYN".

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_filter_by_synonym_type`

[See output here](outputs/test_get_search_filter_by_synonym_type.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (where search term is a code)

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_code`

[See output here](outputs/test_get_search_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type match)

Find concepts matching a search term within a specified terminology and a search type of "match". This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_match`

[See output here](outputs/test_get_search_by_type_match.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type startsWith)

Find concepts matching a search term within a specified terminology and a search type of "startsWith".This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_starts_with`

[See output here](outputs/test_get_search_by_type_starts_with.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type phrase)

Find concepts matching a search term within a specified terminology and a search type of "phrase". This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_phrase`

[See output here](outputs/test_get_search_by_type_phrase.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type fuzzy)

Find concepts matching a search term within a specified terminology and a search type of "fuzzy". This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_fuzzy`

[See output here](outputs/test_get_search_by_type_fuzzy.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type AND)

Find concepts matching a search term within a specified terminology and a search type of "and". This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_and`

[See output here](outputs/test_get_search_by_type_and.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (using type OR)

Find concepts matching a search term within a specified terminology and a search type of "or". This example uses
paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_by_type_or`

[See output here](outputs/test_get_search_by_type_or.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology and include synonyms and highlighted text in the
response. This example uses paging to get only the first 5 results.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_with_highlights`

[See output here](outputs/test_get_search_with_highlights.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by property

Find concepts matching a search term that is searched within a certain set of properties. The search results are set to
include the property values, so you can easily see the match. The property setting here can be either based on code or
on label

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_concepts_by_property`

[See output here](outputs/test_get_search_concepts_by_property.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by subset

Get concepts matching a search term within a specified terminology and subset. This example searches within C165258
(e.g. Cellosaurus Disease Terminology).

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_search_concepts_by_subset`

[See output here](outputs/test_get_search_concepts_by_subset.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Find concepts by SPARQL code

Find concepts for a specified SPARQL query that returns a ?code field.


`jest apis/SearchEndpointsApiTest.test.ts -t test_get_concepts_by_sparql_code`

[See output here](outputs/test_get_concepts_by_sparql_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

`jest apis/MetadataEndpointsApiTest.test.ts -t test_get_subsets`

[See output here](outputs/test_get_subsets.txt)


[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

`jest apis/MetadataEndpointsApiTest.test.ts1 -t test_get_subset1`

[See output here](outputs/test_get_subset1.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

`jest apis/MetadataEndpointsApiTest.test.ts1 -t test_get_subset_members1`

[See output here](outputs/test_get_subset_members1.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.

`jest apis/MapsetEndpointsApiTest.test.ts -t test_get_mapsets`

[See output here](outputs/test_get_mapsets.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`jest apis/MapsetEndpointsApiTest.test.ts -t test_get_mapset_by_code`

[See output here](outputs/test_get_mapset_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

`jest apis/MapsetEndpointsApiTest.test.ts -t test_get_mapset_mappings_by_code`

[See output here](outputs/test_get_mapset_mappings_by_code.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get replacement concepts for an inactive concept code

Get the replacement concepts for a specified inactive concept code.

`jest apis/HistoryEndpointsApiTest.test.ts -t test_get_code_replacements`

[See output here](outputs/test_test_get_replacements_from_list.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get replacement concepts for a list of inactive concept codes

Get the replacement concepts for a specified list of inactive concept codes.

`jest apis/HistoryEndpointsApiTest.test.ts -t test_get_replacements_from_list`

[See output here](outputs/test_test_get_code_replacements.txt)

[Back to Top](#evsrestapi-client-sdk-typescript-tutorial)

### Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

`jest apis/SearchEndpointsApiTest.test.ts -t test_get_sparql_bindings`

[See output here](outputs/test_get_sparql_bindings.txt)
