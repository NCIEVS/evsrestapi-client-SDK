# EVSRESTAPI client SDK: Python Tutorial

======================================

This tutorial shows how to use a locally installed version of Python to interact with the EVSREST API. Shown here are examples that demonstrate
the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the ones shown.

## Prerequisites

- Python 3.5 or higher must be installed. The latest version can be found [here](https://www.python.org/downloads/).

- All libraries in 'requirements.txt' must be installed.
  - Run the command 'pip install -r requirements.txt' in a console window to check these libraries and install any that are not already installed.
  - If pip itself is not installed, run the command 'curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py; python get-pip.py' to install it.

The various scripts make use of the `python-examples/config.ini` file to load necessary information that is uniform across all tests.

## Sample Python Calls

The following examples are exhibited by various unit tests defined in the code in `python-examples`.
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
* [Find concepts by search term (use paging to get only first 5 results)](#find-concepts-by-search-term-using-paging-to-get-only-first-5-results)
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

`pytest test_metadata_endpoint_api.py::test_get_all_terminologies`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (minimal information)

Return concept object with minimal information for a specified code.

`pytest test_concept_endpoint_api.py::test_get_minimal_concept_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concepts by list (minimal information)

Return concept objects with minimal information for a specified list of codes.

`pytest test_concept_endpoint_api.py::test_get_minimal_concept_list_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (summary information)

Return concept object with summary information for a specified code.

`pytest test_concept_endpoint_api.py::test_get_summary_concept_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (full information)

Return concept object with full information for a specified code.

`pytest test_concept_endpoint_api.py::test_get_full_concept_by_code`

```
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept by code (custom include)

Return custom concept information for a given terminology and code. To show a range of options, in this case, the request asks for synonyms, children, maps, and inverse associations.

`pytest test_concept_endpoint_api.py::test_get_custom_concept_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept part

Return concept part information for a given terminology, concept part, and code. Some possible concept parts include Children, Parents, Roles, Associations, InverseRoles, InverseAssociations, Maps, and DisjointWith. The example below shows Children.

`pytest test_concept_endpoint_api.py::test_get_concept_part_children_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get concept descendants

Return concept descendants information for a given terminology and code. The call client can be constrained by a maxLevel to prevent going deeper than a certain amount. Level 0 entries in the result are the direct children. The test sets the max level to 2.

`pytest test_concept_endpoint_api.py::test_get_concept_descendants_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all properties

Return all properties for a given terminology with default include setting (minimal).

`pytest test_metadata_endpoint_api.py::test_get_all_properties`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get property by code or label

Return property for the specified code or label.

`pytest test_metadata_endpoint_api.py::test_get_property_by_code_or_label`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all qualifiers

Return all qualifiers for a given terminology with default include setting (minimal).

`pytest test_metadata_endpoint_api.py::test_get_all_qualifiers`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get qualifier by code (or label)

Return qualifier for the specified code or label.

`pytest test_metadata_endpoint_api.py::test_get_qualifier_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get qualifier values by code (or label)

Return distinct value set for the qualifier with the specified code or label.

`pytest test_metadata_endpoint_api.py::test_get_qualifier_values_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all roles

Return all roles.

`pytest test_metadata_endpoint_api.py::test_get_roles`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get roles by code (or label)

Returns a role definition for a specified code.

`pytest test_metadata_endpoint_api.py::test_get_roles_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all associations

Return all associations.

`pytest test_metadata_endpoint_api.py::test_get_associations`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get associations by code (or label)

Returns associations for a specified code.

`pytest test_metadata_endpoint_api.py::test_get_associations_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all term types

Return metadata for all term types for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_term_types`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all synonym sources

Return metadata for all synonym sources for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_synonym_sources`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all definition sources

Return metadata for all definition sources for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_definition_sources`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all definition types

Return metadata for all definition types for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_definition_types`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get definition type by code

Get definition type by code. Include parameter allowed customizing how much data to return.

`pytest test_metadata_endpoint_api.py::`

```

```
[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all synonym types

Return metadata for all synonym types for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_synonym_types`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get synonym types by code

Return metadata for all synonym types for the specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_synonym_type_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find root concepts

Return all root concepts for the specified terminology.

`pytest test_concept_endpoint_api.py::test_get_roots`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get paths to/from root from a code

Return paths to/from the root concept from a specified terminology and code.

`pytest test_concept_endpoint_api.py::test_get_path_to_root_by_code`

`pytest test_concept_endpoint_api.py::test_get_path_from_root_by_code`


```

```

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get paths to an ancestor code from a code

Return paths to the root concept for a specified terminology and code.

`pytest test_concept_endpoint_api.py::test_get_ancestor_paths_from_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subtree for code

Return an entire subtree graph from the root concepts to a specified node. This call is specifically tuned to support a tree-view based hierarchy browser in a UI.

`pytest test_concept_endpoint_api.py::test_get_subtree`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term

Find concepts matching a search term within a specified terminology. This example uses paging to get only the first 5 
results. Include is set to minimal.

`pytest test_search_endpoint_api.py::test_get_concept`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (restrict by concept status)

Find concepts matching a search term within a specified terminology and restrict the search results by concept status of
"Retired_Concept". This example uses paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_concept_status`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (restrict by definition source)

Get concepts matching a search term within a specified terminology and restrict the search results by a definition 
source of "NCI". This example uses paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_definition_source`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (restrict by definition type)

Find concepts matching a search term within a specified terminology and restrict the search results by a definition type
of "DEFINITION". This example uses paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_definition_type`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (restrict by synonym source and termgroup)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym source
of "NCI" and synonymTermGroup of "PT".

`pytest test_search_endpoint_api.py::test_get_concept_by_synonym_source`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (restrict by synonym type)

Find concepts matching a search term within a specified terminology and restrict the search results by a synonym type
of "FULL_SYN".

`pytest test_search_endpoint_api.py::`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (where search term is a code)

Find concepts matching a search term within a specified terminology and restrict the search results using a code as the
search term.

`pytest test_search_endpoint_api.py::`


[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type match)

Find concepts matching a search term within a specified terminology and a search type of "match". This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type startsWith)

Find concepts matching a search term within a specified terminology and a search type of "startsWith".This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_starts_with`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type phrase)

Find concepts matching a search term within a specified terminology and a search type of "phrase". This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_phrase`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type fuzzy)

Find concepts matching a search term within a specified terminology and a search type of "fuzzy". This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_fuzzy`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type AND)

Find concepts matching a search term within a specified terminology and a search type of "and". This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_and`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (using type OR)

Find concepts matching a search term within a specified terminology and a search type of "or". This example uses 
paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_or`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by search term (with highlights)

Find concepts matching a search term within a specified terminology and include synonyms and highlighted text in the 
response. This example uses paging to get only the first 5 results.

`pytest test_search_endpoint_api.py::test_get_concept_by_search_term_highlights`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by property

Find concepts matching a search term that is searched within a certain set of properties. The search results are set to 
include the property values, so you can easily see the match. The property setting here can be either based on code or 
on label

`pytest test_search_endpoint_api.py::`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by subset

Get concepts matching a search term within a specified terminology and subset. This example searches within C165258 
(e.g. Cellosaurus Disease Terminology).

`pytest test_search_endpoint_api.py::test_get_concept_by_subset`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find concepts by SPARQL code

Find concepts for a specified SPARQL query that returns a ?code field.

`pytest test_search_endpoint_api.py::`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all subsets

Get all subsets for a specified terminology.

`pytest test_metadata_endpoint_api.py::test_get_subsets`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subset by code

Get subset for a specified terminology and code.

`pytest test_metadata_endpoint_api.py::test_get_subset_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get subset members by code

Get subset members for a specified terminology and code.

`pytest test_subset_endpoint_api.py::test_get_subset_members_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Find Concepts by SPARQL Code

Get concepts for a specified SPARQL query without prefixes.

Command: `pytest test_concept_tests.py::test_get_concepts_by_sparql_query_with_prefix`

```{.python}
(data is too long for display on this page)
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get all mapsets

Get all mapsets. Include parameter allows customizing how much data to return.

`pytest test_mapset_endpoint_api.py::test_get_all_mapsets`

```
 
```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get mapset by code

Get mapset information for a specified code. Include parameter allows customizing how much data to return.

`pytest test_mapset_endpoint_api.py::test_get_mapset_by_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get maps by mapset code

Get the maps for a specified mapset code.

`pytest test_mapset_endpoint_api.py::test_get_maps_by_mapset_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get replacement concepts for an inactive concept code

Get the replacement concepts for a specified inactive concept code.

`pytest test_history_endpoint_api.py::test_get_inactive_replacement_code`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

### Get replacement concepts for a list of inactive concept codes

Get the replacement concepts for a specified list of inactive concept codes.

`pytest test_history_endpoint_api.py::test_get_inactive_replacement_codes`

```

```

[Back to Top](#evsrestapi-client-sdk-python-tutorial)

# Get SPARQL bindings from query

Get SPARQL bindings for a specified SPARQL query.

`pytest test_search_endpoints_api.py::`

```

```
