# \MapsetEndpointsAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMapsetByCode**](MapsetEndpointsAPI.md#GetMapsetByCode) | **Get** /api/v1/mapset/{code} | Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
[**GetMapsetMappingsByCode**](MapsetEndpointsAPI.md#GetMapsetMappingsByCode) | **Get** /api/v1/mapset/{code}/maps | Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)
[**GetMapsets**](MapsetEndpointsAPI.md#GetMapsets) | **Get** /api/v1/mapset | Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)



## GetMapsetByCode

> Concept GetMapsetByCode(ctx, code).Include(include).Execute()

Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)

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
	code := "code_example" // string | Mapset code
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MapsetEndpointsAPI.GetMapsetByCode(context.Background(), code).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MapsetEndpointsAPI.GetMapsetByCode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMapsetByCode`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MapsetEndpointsAPI.GetMapsetByCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Mapset code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMapsetByCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetMapsetMappingsByCode

> ConceptMapResultList GetMapsetMappingsByCode(ctx, code).Term(term).FromRecord(fromRecord).PageSize(pageSize).Sort(sort).Ascending(ascending).Execute()

Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)

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
	code := "code_example" // string | Mapset code
	term := "term_example" // string | The term, phrase, or code to be searched, e.g. 'melanoma' (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	sort := "sort_example" // string | The search parameter to sort results by (optional)
	ascending := true // bool | Sort ascending (if true) or descending (if false) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MapsetEndpointsAPI.GetMapsetMappingsByCode(context.Background(), code).Term(term).FromRecord(fromRecord).PageSize(pageSize).Sort(sort).Ascending(ascending).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MapsetEndpointsAPI.GetMapsetMappingsByCode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMapsetMappingsByCode`: ConceptMapResultList
	fmt.Fprintf(os.Stdout, "Response from `MapsetEndpointsAPI.GetMapsetMappingsByCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Mapset code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMapsetMappingsByCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **term** | **string** | The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **sort** | **string** | The search parameter to sort results by | 
 **ascending** | **bool** | Sort ascending (if true) or descending (if false) | 

### Return type

[**ConceptMapResultList**](ConceptMapResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMapsets

> []Concept GetMapsets(ctx).Include(include).Execute()

Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MapsetEndpointsAPI.GetMapsets(context.Background()).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MapsetEndpointsAPI.GetMapsets``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMapsets`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MapsetEndpointsAPI.GetMapsets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMapsetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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

