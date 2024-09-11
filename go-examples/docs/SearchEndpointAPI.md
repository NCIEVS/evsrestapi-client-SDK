# \SearchEndpointAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSparqlBindings**](SearchEndpointAPI.md#GetSparqlBindings) | **Post** /api/v1/sparql/{terminology} | Get SPARQL query results
[**Search**](SearchEndpointAPI.md#Search) | **Get** /api/v1/concept/search | Get concept search results
[**SearchSingleTerminology**](SearchEndpointAPI.md#SearchSingleTerminology) | **Get** /api/v1/concept/{terminology}/search | Get concept search results for a specified terminology
[**SearchSingleTerminologySparql**](SearchEndpointAPI.md#SearchSingleTerminologySparql) | **Post** /api/v1/concept/{terminology}/search | Get concept search results for a specified terminology



## GetSparqlBindings

> MapResultList GetSparqlBindings(ctx, terminology).Body(body).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get SPARQL query results



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	terminology := "ncit" // string | Single terminology to search, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	body := "body_example" // string | SPARQL query to execute on the graph for the specified terminology. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md' target='_blank'>See here for more information and examples of using SPARQL with EVSRESTAPI</a>.
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchEndpointAPI.GetSparqlBindings(context.Background(), terminology).Body(body).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchEndpointAPI.GetSparqlBindings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSparqlBindings`: MapResultList
	fmt.Fprintf(os.Stdout, "Response from `SearchEndpointAPI.GetSparqlBindings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Single terminology to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSparqlBindingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | SPARQL query to execute on the graph for the specified terminology. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;. | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**MapResultList**](MapResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Search

> ConceptResultList Search(ctx).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Terminology(terminology).Term(term).Type_(type_).Sort(sort).Ascending(ascending).Include(include).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()

Get concept search results



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)
	terminology := "ncit" // string | Comma-separated list of terminologies to search, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (optional)
	term := "term_example" // string | The term, phrase, or code to be searched, e.g. 'melanoma' (optional)
	type_ := "contains" // string | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. (optional)
	sort := "sort_example" // string | The search parameter to sort results by (optional)
	ascending := true // bool | Sort ascending (if true) or descending (if false) (optional)
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	conceptStatus := "conceptStatus_example" // string | Comma-separated list of concept status values to restrict search results by. <p><a href='/api/v1/metadata/ncit/conceptStatuses' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	property := "property_example" // string | Comma-separated list of properties to restrict search results by (see also <i>value</i>). e.g.<ul><li>'P106,P322' for <i>terminology=ncit</i></li><li>'COLOR,SHAPE' for <i>terminology=ncim</i></li></ul><p><a href='/api/v1/metadata/ncit/properties' target='_blank'>Click here for a list of NCI Thesaurus properties</a>.</p><p><a href='/api/v1/metadata/ncim/properties' target='_blank'>Click here for a list of NCI Metathesaurus properties</a>.</p> The properties can be specified as code or name. NOTE: This feature works with <i>value</i> to find concepts having one of the specified properties with an exact value matching the <i>value</i> parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	value := "value_example" // string | A property value to restrict search results by.  NOTE: This feature works with <i>property</i> to find concepts having one of the specified properties with an exact value matching this parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	definitionSource := "definitionSource_example" // string | Comma-separated list of definition sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/definitionSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p><p><a href='/api/v1/metadata/ncim/definitionSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	definitionType := "definitionType_example" // string | Comma-separated list of definition types to restrict search results by, e.g. 'DEFINITION,ALT_DEFINITION' for <i>terminology=ncit</i>. <p><a href='/api/v1/metadata/ncit/definitionTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymSource := "synonymSource_example" // string | Comma-separated list of synonym sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/synonymSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/synonymSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	synonymType := "synonymType_example" // string | Comma-separated list of synonym types to restrict search results by, e.g. 'FULL_SYN'. <p><a href='/api/v1/metadata/ncit/synonymTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymTermType := "synonymTermType_example" // string | Comma-separated list of synonym term type values to restrict search results by. <p><a href='/api/v1/metadata/ncit/termTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/termTypes' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	subset := "subset_example" // string | Comma-separated list of subsets to restrict search results by, e.g. 'C157225'. The value '*' can also be used to return results that participate in at least one subset. This parameter is only meaningful for <i>terminology=ncit</i> (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchEndpointAPI.Search(context.Background()).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Terminology(terminology).Term(term).Type_(type_).Sort(sort).Ascending(ascending).Include(include).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchEndpointAPI.Search``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Search`: ConceptResultList
	fmt.Fprintf(os.Stdout, "Response from `SearchEndpointAPI.Search`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **terminology** | **string** | Comma-separated list of terminologies to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
 **term** | **string** | The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | 
 **type_** | **string** | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. | 
 **sort** | **string** | The search parameter to sort results by | 
 **ascending** | **bool** | Sort ascending (if true) or descending (if false) | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **conceptStatus** | **string** | Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/conceptStatuses&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **property** | **string** | Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;&#39;P106,P322&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;COLOR,SHAPE&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **value** | **string** | A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **definitionSource** | **string** | Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **definitionType** | **string** | Comma-separated list of definition types to restrict search results by, e.g. &#39;DEFINITION,ALT_DEFINITION&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymSource** | **string** | Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **synonymType** | **string** | Comma-separated list of synonym types to restrict search results by, e.g. &#39;FULL_SYN&#39;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymTermType** | **string** | Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **subset** | **string** | Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39;. The value &#39;*&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt; | 

### Return type

[**ConceptResultList**](ConceptResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchSingleTerminology

> ConceptResultList SearchSingleTerminology(ctx, terminology).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Term(term).Type_(type_).Sort(sort).Ascending(ascending).Include(include).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()

Get concept search results for a specified terminology



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	terminology := "ncit" // string | Single terminology to search, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)
	term := "term_example" // string | The term, phrase, or code to be searched, e.g. 'melanoma' (optional)
	type_ := "contains" // string | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. (optional)
	sort := "sort_example" // string | The search parameter to sort results by (optional)
	ascending := true // bool | Sort ascending (if true) or descending (if false) (optional)
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	conceptStatus := "conceptStatus_example" // string | Comma-separated list of concept status values to restrict search results by. <p><a href='/api/v1/metadata/ncit/conceptStatuses' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	property := "property_example" // string | Comma-separated list of properties to restrict search results by (see also <i>value</i>). e.g.<ul><li>'P106,P322' for <i>terminology=ncit</i></li><li>'COLOR,SHAPE' for <i>terminology=ncim</i></li></ul><p><a href='/api/v1/metadata/ncit/properties' target='_blank'>Click here for a list of NCI Thesaurus properties</a>.</p><p><a href='/api/v1/metadata/ncim/properties' target='_blank'>Click here for a list of NCI Metathesaurus properties</a>.</p> The properties can be specified as code or name. NOTE: This feature works with <i>value</i> to find concepts having one of the specified properties with an exact value matching the <i>value</i> parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	value := "value_example" // string | A property value to restrict search results by.  NOTE: This feature works with <i>property</i> to find concepts having one of the specified properties with an exact value matching this parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	definitionSource := "definitionSource_example" // string | Comma-separated list of definition sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/definitionSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p><p><a href='/api/v1/metadata/ncim/definitionSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	definitionType := "definitionType_example" // string | Comma-separated list of definition types to restrict search results by, e.g. 'DEFINITION,ALT_DEFINITION' for <i>terminology=ncit</i>. <p><a href='/api/v1/metadata/ncit/definitionTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymSource := "synonymSource_example" // string | Comma-separated list of synonym sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/synonymSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/synonymSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	synonymType := "synonymType_example" // string | Comma-separated list of synonym types to restrict search results by, e.g. 'FULL_SYN'. <p><a href='/api/v1/metadata/ncit/synonymTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymTermType := "synonymTermType_example" // string | Comma-separated list of synonym term type values to restrict search results by. <p><a href='/api/v1/metadata/ncit/termTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/termTypes' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	subset := "subset_example" // string | Comma-separated list of subsets to restrict search results by, e.g. 'C157225'. The value '*' can also be used to return results that participate in at least one subset. This parameter is only meaningful for <i>terminology=ncit</i> (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Term(term).Type_(type_).Sort(sort).Ascending(ascending).Include(include).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchEndpointAPI.SearchSingleTerminology``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchSingleTerminology`: ConceptResultList
	fmt.Fprintf(os.Stdout, "Response from `SearchEndpointAPI.SearchSingleTerminology`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Single terminology to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchSingleTerminologyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **term** | **string** | The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | 
 **type_** | **string** | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. | 
 **sort** | **string** | The search parameter to sort results by | 
 **ascending** | **bool** | Sort ascending (if true) or descending (if false) | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **conceptStatus** | **string** | Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/conceptStatuses&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **property** | **string** | Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;&#39;P106,P322&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;COLOR,SHAPE&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **value** | **string** | A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **definitionSource** | **string** | Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **definitionType** | **string** | Comma-separated list of definition types to restrict search results by, e.g. &#39;DEFINITION,ALT_DEFINITION&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymSource** | **string** | Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **synonymType** | **string** | Comma-separated list of synonym types to restrict search results by, e.g. &#39;FULL_SYN&#39;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymTermType** | **string** | Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **subset** | **string** | Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39;. The value &#39;*&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt; | 

### Return type

[**ConceptResultList**](ConceptResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchSingleTerminologySparql

> ConceptResultList SearchSingleTerminologySparql(ctx, terminology).Body(body).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Term(term).Type_(type_).Sort(sort).Ascending(ascending).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()

Get concept search results for a specified terminology



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	terminology := "ncit" // string | Single terminology to search, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	body := "body_example" // string | SPARQL query that returns ?code identifying a valid code in the specified terminology. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md' target='_blank'>See here for more information and examples of using SPARQL with EVSRESTAPI</a>.
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)
	term := "term_example" // string | The term, phrase, or code to be searched, e.g. 'melanoma' (optional)
	type_ := "contains" // string | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. (optional)
	sort := "sort_example" // string | The search parameter to sort results by (optional)
	ascending := true // bool | Sort ascending (if true) or descending (if false) (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	conceptStatus := "conceptStatus_example" // string | Comma-separated list of concept status values to restrict search results by. <p><a href='/api/v1/metadata/ncit/conceptStatuses' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	property := "property_example" // string | Comma-separated list of properties to restrict search results by (see also <i>value</i>). e.g.<ul><li>'P106,P322' for <i>terminology=ncit</i></li><li>'COLOR,SHAPE' for <i>terminology=ncim</i></li></ul><p><a href='/api/v1/metadata/ncit/properties' target='_blank'>Click here for a list of NCI Thesaurus properties</a>.</p><p><a href='/api/v1/metadata/ncim/properties' target='_blank'>Click here for a list of NCI Metathesaurus properties</a>.</p> The properties can be specified as code or name. NOTE: This feature works with <i>value</i> to find concepts having one of the specified properties with an exact value matching the <i>value</i> parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	value := "value_example" // string | A property value to restrict search results by.  NOTE: This feature works with <i>property</i> to find concepts having one of the specified properties with an exact value matching this parameter.  Using a <i>term</i> will further restrict results to those also matching the term. (optional)
	definitionSource := "definitionSource_example" // string | Comma-separated list of definition sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/definitionSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p><p><a href='/api/v1/metadata/ncim/definitionSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	definitionType := "definitionType_example" // string | Comma-separated list of definition types to restrict search results by, e.g. 'DEFINITION,ALT_DEFINITION' for <i>terminology=ncit</i>. <p><a href='/api/v1/metadata/ncit/definitionTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymSource := "synonymSource_example" // string | Comma-separated list of synonym sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/synonymSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/synonymSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	synonymType := "synonymType_example" // string | Comma-separated list of synonym types to restrict search results by, e.g. 'FULL_SYN'. <p><a href='/api/v1/metadata/ncit/synonymTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p> (optional)
	synonymTermType := "synonymTermType_example" // string | Comma-separated list of synonym term type values to restrict search results by. <p><a href='/api/v1/metadata/ncit/termTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/termTypes' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p> (optional)
	subset := "subset_example" // string | Comma-separated list of subsets to restrict search results by, e.g. 'C157225'. The value '*' can also be used to return results that participate in at least one subset. This parameter is only meaningful for <i>terminology=ncit</i> (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchEndpointAPI.SearchSingleTerminologySparql(context.Background(), terminology).Body(body).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Term(term).Type_(type_).Sort(sort).Ascending(ascending).FromRecord(fromRecord).PageSize(pageSize).ConceptStatus(conceptStatus).Property(property).Value(value).DefinitionSource(definitionSource).DefinitionType(definitionType).SynonymSource(synonymSource).SynonymType(synonymType).SynonymTermType(synonymTermType).Subset(subset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchEndpointAPI.SearchSingleTerminologySparql``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchSingleTerminologySparql`: ConceptResultList
	fmt.Fprintf(os.Stdout, "Response from `SearchEndpointAPI.SearchSingleTerminologySparql`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Single terminology to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchSingleTerminologySparqlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | SPARQL query that returns ?code identifying a valid code in the specified terminology. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/SPARQL.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for more information and examples of using SPARQL with EVSRESTAPI&lt;/a&gt;. | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **term** | **string** | The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | 
 **type_** | **string** | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. | 
 **sort** | **string** | The search parameter to sort results by | 
 **ascending** | **bool** | Sort ascending (if true) or descending (if false) | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **conceptStatus** | **string** | Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/conceptStatuses&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **property** | **string** | Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;&#39;P106,P322&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;COLOR,SHAPE&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **value** | **string** | A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | 
 **definitionSource** | **string** | Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **definitionType** | **string** | Comma-separated list of definition types to restrict search results by, e.g. &#39;DEFINITION,ALT_DEFINITION&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymSource** | **string** | Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **synonymType** | **string** | Comma-separated list of synonym types to restrict search results by, e.g. &#39;FULL_SYN&#39;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | 
 **synonymTermType** | **string** | Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | 
 **subset** | **string** | Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39;. The value &#39;*&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt; | 

### Return type

[**ConceptResultList**](ConceptResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

