# \ConceptEndpointsAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAssociationEntries**](ConceptEndpointsAPI.md#GetAssociationEntries) | **Get** /api/v1/concept/{terminology}/associations/{codeOrLabel} | Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call
[**GetAssociations1**](ConceptEndpointsAPI.md#GetAssociations1) | **Get** /api/v1/concept/{terminology}/{code}/associations | Get the associations for the specified terminology and code
[**GetChildren**](ConceptEndpointsAPI.md#GetChildren) | **Get** /api/v1/concept/{terminology}/{code}/children | Get child concepts for the specified terminology and code
[**GetConcept**](ConceptEndpointsAPI.md#GetConcept) | **Get** /api/v1/concept/{terminology}/{code} | Get the concept for the specified terminology and code
[**GetConcepts**](ConceptEndpointsAPI.md#GetConcepts) | **Get** /api/v1/concept/{terminology} | Get concepts specified by list parameter
[**GetDescendants**](ConceptEndpointsAPI.md#GetDescendants) | **Get** /api/v1/concept/{terminology}/{code}/descendants | Get descendant concepts for the specified terminology and code
[**GetDisjointWith**](ConceptEndpointsAPI.md#GetDisjointWith) | **Get** /api/v1/concept/{terminology}/{code}/disjointWith | Get \&quot;disjoint with\&quot; info for the specified terminology and code
[**GetHistory**](ConceptEndpointsAPI.md#GetHistory) | **Get** /api/v1/concept/{terminology}/{code}/history | Get history for the specified terminology and code
[**GetInverseAssociations**](ConceptEndpointsAPI.md#GetInverseAssociations) | **Get** /api/v1/concept/{terminology}/{code}/inverseAssociations | Get inverse associations for the specified terminology and code
[**GetInverseRoles**](ConceptEndpointsAPI.md#GetInverseRoles) | **Get** /api/v1/concept/{terminology}/{code}/inverseRoles | Get inverse roles for the specified terminology and code
[**GetMaps**](ConceptEndpointsAPI.md#GetMaps) | **Get** /api/v1/concept/{terminology}/{code}/maps | Get maps for the specified terminology and code
[**GetParents**](ConceptEndpointsAPI.md#GetParents) | **Get** /api/v1/concept/{terminology}/{code}/parents | Get parent concepts for the specified terminology and code
[**GetPathsFromRoot**](ConceptEndpointsAPI.md#GetPathsFromRoot) | **Get** /api/v1/concept/{terminology}/{code}/pathsFromRoot | Get paths from the hierarchy root to the specified concept.
[**GetPathsToAncestor**](ConceptEndpointsAPI.md#GetPathsToAncestor) | **Get** /api/v1/concept/{terminology}/{code}/pathsToAncestor/{ancestorCode} | Get paths from the specified code to the specified ancestor code
[**GetPathsToRoot**](ConceptEndpointsAPI.md#GetPathsToRoot) | **Get** /api/v1/concept/{terminology}/{code}/pathsToRoot | Get paths to the hierarchy root from the specified code
[**GetRoles1**](ConceptEndpointsAPI.md#GetRoles1) | **Get** /api/v1/concept/{terminology}/{code}/roles | Get roles for the specified terminology and code
[**GetRoots**](ConceptEndpointsAPI.md#GetRoots) | **Get** /api/v1/concept/{terminology}/roots | Get root concepts for the specified terminology
[**GetSubsetMembers1**](ConceptEndpointsAPI.md#GetSubsetMembers1) | **Get** /api/v1/concept/{terminology}/subsetMembers/{code} | Get subset members for the specified terminology and code.
[**GetSubtree**](ConceptEndpointsAPI.md#GetSubtree) | **Get** /api/v1/concept/{terminology}/{code}/subtree | Get the entire subtree from the root node to the specified code
[**GetSubtreeChildren**](ConceptEndpointsAPI.md#GetSubtreeChildren) | **Get** /api/v1/concept/{terminology}/{code}/subtree/children | Get the entire subtree from the root node to the specified code



## GetAssociationEntries

> AssociationEntryResultList GetAssociationEntries(ctx, terminology, codeOrLabel).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call

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
	codeOrLabel := "codeOrLabel_example" // string | Code/label in the specified terminology, e.g. 'A5' or 'Has_Salt_Form' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10) // int32 | Max number of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetAssociationEntries(context.Background(), terminology, codeOrLabel).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetAssociationEntries``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssociationEntries`: AssociationEntryResultList
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetAssociationEntries`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**codeOrLabel** | **string** | Code/label in the specified terminology, e.g. &#39;A5&#39; or &#39;Has_Salt_Form&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAssociationEntriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**AssociationEntryResultList**](AssociationEntryResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssociations1

> []Association GetAssociations1(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get the associations for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	code := "code_example" // string | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetAssociations1(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetAssociations1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssociations1`: []Association
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetAssociations1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAssociations1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]Association**](Association.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChildren

> []Concept GetChildren(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get child concepts for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	code := "code_example" // string | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetChildren(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetChildren``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetChildren`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetChildren`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChildrenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetConcept

> Concept GetConcept(ctx, terminology, code).Limit(limit).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get the concept for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	code := "code_example" // string | Code in the specified terminology, e.g.<ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
	limit := int32(100) // int32 | If set to an integer (between <i>1</i> and <i>100</i>), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with <i>include=full</i>) and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count. (optional)
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetConcept(context.Background(), terminology, code).Limit(limit).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetConcept``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConcept`: Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetConcept`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConceptRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetConcepts

> []Concept GetConcepts(ctx, terminology).List(list).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get concepts specified by list parameter

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	list := "list_example" // string | List (comma-separated) of codes to return concepts for, e.g.<ul><li>'C2291,C3224' for <i>ncit</i></li><li>'C0010137,C0025202' for <i>ncim</i></li></ul>
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetConcepts(context.Background(), terminology).List(list).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetConcepts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConcepts`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetConcepts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConceptsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **list** | **string** | List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;&#39;C2291,C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0010137,C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetDescendants

> []Concept GetDescendants(ctx, terminology, code).FromRecord(fromRecord).PageSize(pageSize).MaxLevel(maxLevel).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get descendant concepts for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit''
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(50000) // int32 | Max number of results to return (optional)
	maxLevel := int32(10000) // int32 | Max level of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetDescendants(context.Background(), terminology, code).FromRecord(fromRecord).PageSize(pageSize).MaxLevel(maxLevel).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetDescendants``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDescendants`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetDescendants`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDescendantsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **maxLevel** | **int32** | Max level of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetDisjointWith

> []DisjointWith GetDisjointWith(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get \"disjoint with\" info for the specified terminology and code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3910' for <i>ncit</i>.  This call is only meaningful for <i>ncit</i>.
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetDisjointWith(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetDisjointWith``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDisjointWith`: []DisjointWith
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetDisjointWith`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3910&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDisjointWithRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]DisjointWith**](DisjointWith.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHistory

> Concept GetHistory(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get history for the specified terminology and code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i> and <i>ncim</i>.
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetHistory(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetHistory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetHistory`: Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetInverseAssociations

> []Association GetInverseAssociations(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get inverse associations for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	code := "code_example" // string | Code in the specified terminology, e.g.<ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetInverseAssociations(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetInverseAssociations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInverseAssociations`: []Association
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetInverseAssociations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInverseAssociationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]Association**](Association.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInverseRoles

> []Role GetInverseRoles(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get inverse roles for the specified terminology and code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>.  This call is only meaningful for <i>ncit</i>.
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetInverseRoles(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetInverseRoles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInverseRoles`: []Role
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetInverseRoles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInverseRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMaps

> []ConceptMap GetMaps(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get maps for the specified terminology and code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetMaps(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetMaps``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMaps`: []ConceptMap
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetMaps`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMapsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]ConceptMap**](ConceptMap.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetParents

> []Concept GetParents(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get parent concepts for the specified terminology and code

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)
	code := "code_example" // string | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetParents(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetParents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetParents`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetParents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetParentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetPathsFromRoot

> [][]Concept GetPathsFromRoot(ctx, terminology, code).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get paths from the hierarchy root to the specified concept.

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results.  (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(100) // int32 | Max number of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetPathsFromRoot(context.Background(), terminology, code).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetPathsFromRoot``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPathsFromRoot`: [][]Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetPathsFromRoot`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPathsFromRootRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[][]Concept**](array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPathsToAncestor

> [][]Concept GetPathsToAncestor(ctx, terminology, code, ancestorCode).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get paths from the specified code to the specified ancestor code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	ancestorCode := "ancestorCode_example" // string | Ancestor code of the other specified code, e.g. 'C2991' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results.  (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(100) // int32 | Max number of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetPathsToAncestor(context.Background(), terminology, code, ancestorCode).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetPathsToAncestor``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPathsToAncestor`: [][]Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetPathsToAncestor`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 
**ancestorCode** | **string** | Ancestor code of the other specified code, e.g. &#39;C2991&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPathsToAncestorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[][]Concept**](array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPathsToRoot

> [][]Concept GetPathsToRoot(ctx, terminology, code).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get paths to the hierarchy root from the specified code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results.  (optional)
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(100) // int32 | Max number of results to return (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetPathsToRoot(context.Background(), terminology, code).Include(include).FromRecord(fromRecord).PageSize(pageSize).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetPathsToRoot``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPathsToRoot`: [][]Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetPathsToRoot`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPathsToRootRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | 
 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[][]Concept**](array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoles1

> []Role GetRoles1(ctx, terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get roles for the specified terminology and code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetRoles1(context.Background(), terminology, code).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetRoles1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoles1`: []Role
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetRoles1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoles1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoots

> []Concept GetRoots(ctx, terminology).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get root concepts for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetRoots(context.Background(), terminology).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetRoots``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoots`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetRoots`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRootsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetSubsetMembers1

> []Concept GetSubsetMembers1(ctx, terminology, code).FromRecord(fromRecord).PageSize(pageSize).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get subset members for the specified terminology and code.



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
	fromRecord := int32(0) // int32 | Start index of the search results (optional)
	pageSize := int32(10000) // int32 | Max number of results to return (optional)
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetSubsetMembers1(context.Background(), terminology, code).FromRecord(fromRecord).PageSize(pageSize).Include(include).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetSubsetMembers1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubsetMembers1`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetSubsetMembers1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code for a subset concept in the specified terminology, e.g. &#39;C157225&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubsetMembers1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fromRecord** | **int32** | Start index of the search results | 
 **pageSize** | **int32** | Max number of results to return | 
 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetSubtree

> []HierarchyNode GetSubtree(ctx, terminology, code).Limit(limit).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get the entire subtree from the root node to the specified code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	limit := int32(100) // int32 | If set to an integer (between <i>1</i> and <i>100</i>), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetSubtree(context.Background(), terminology, code).Limit(limit).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetSubtree``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubtree`: []HierarchyNode
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetSubtree`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubtreeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]HierarchyNode**](HierarchyNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSubtreeChildren

> []HierarchyNode GetSubtreeChildren(ctx, terminology, code).Limit(limit).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()

Get the entire subtree from the root node to the specified code

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
	code := "code_example" // string | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	limit := int32(100) // int32 | If set to an integer (between <i>1</i> and <i>100</i>), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count. (optional)
	xEVSRESTAPILicenseKey := "xEVSRESTAPILicenseKey_example" // string | Required license information for restricted terminologies. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConceptEndpointsAPI.GetSubtreeChildren(context.Background(), terminology, code).Limit(limit).XEVSRESTAPILicenseKey(xEVSRESTAPILicenseKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConceptEndpointsAPI.GetSubtreeChildren``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubtreeChildren`: []HierarchyNode
	fmt.Fprintf(os.Stdout, "Response from `ConceptEndpointsAPI.GetSubtreeChildren`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**code** | **string** | Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubtreeChildrenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **int32** | If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | 
 **xEVSRESTAPILicenseKey** | **string** | Required license information for restricted terminologies. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/LICENSE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

### Return type

[**[]HierarchyNode**](HierarchyNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

