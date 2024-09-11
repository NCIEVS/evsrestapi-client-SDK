# \SubsetEndpointsAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSubset**](SubsetEndpointsAPI.md#GetSubset) | **Get** /api/v1/subset/{terminology}/{code} | Get the subset for the specified terminology and code.
[**GetSubsetMembers**](SubsetEndpointsAPI.md#GetSubsetMembers) | **Get** /api/v1/subset/{terminology}/{code}/members | Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
[**GetSubsets**](SubsetEndpointsAPI.md#GetSubsets) | **Get** /api/v1/subset/{terminology} | Get all subsets (or those specified by list parameter) for the specified terminology



## GetSubset

> Concept GetSubset(ctx, terminology, code).Include(include).Execute()

Get the subset for the specified terminology and code.

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit'.
	code := "code_example" // string | Subset code, e.g. 'C116978' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "summary" // string | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SubsetEndpointsAPI.GetSubset(context.Background(), terminology, code).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SubsetEndpointsAPI.GetSubset``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubset`: Concept
	fmt.Fprintf(os.Stdout, "Response from `SubsetEndpointsAPI.GetSubset`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;. | 
**code** | **string** | Subset code, e.g. &#39;C116978&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubsetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSubsetMembers

> []Concept GetSubsetMembers(ctx, terminology, code).FromRecord(fromRecord).PageSize(pageSize).Include(include).Execute()

Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit'
	code := "code_example" // string | Code for a subset concept in the specified terminology, e.g. 'C157225' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	fromRecord := "0" // string | Start index of the search results (optional)
	pageSize := "10000" // string | Max number of results to return (optional)
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SubsetEndpointsAPI.GetSubsetMembers(context.Background(), terminology, code).FromRecord(fromRecord).PageSize(pageSize).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SubsetEndpointsAPI.GetSubsetMembers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubsetMembers`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `SubsetEndpointsAPI.GetSubsetMembers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code for a subset concept in the specified terminology, e.g. &#39;C157225&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubsetMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fromRecord** | **string** | Start index of the search results | 
 **pageSize** | **string** | Max number of results to return | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSubsets

> []Concept GetSubsets(ctx, terminology).Include(include).List(list).Execute()

Get all subsets (or those specified by list parameter) for the specified terminology

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit'.  This call is only meaningful for <i>ncit</i>.
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SubsetEndpointsAPI.GetSubsets(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SubsetEndpointsAPI.GetSubsets``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubsets`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `SubsetEndpointsAPI.GetSubsets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubsetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

### Return type

[**[]Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

