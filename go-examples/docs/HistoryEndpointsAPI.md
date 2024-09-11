# \HistoryEndpointsAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetReplacements**](HistoryEndpointsAPI.md#GetReplacements) | **Get** /api/v1/history/{terminology}/{code}/replacements | Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;.
[**GetReplacementsFromList**](HistoryEndpointsAPI.md#GetReplacementsFromList) | **Get** /api/v1/history/{terminology}/replacements | Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;.



## GetReplacements

> []History GetReplacements(ctx, terminology, code).Execute()

Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".

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
	code := "code_example" // string | Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HistoryEndpointsAPI.GetReplacements(context.Background(), terminology, code).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HistoryEndpointsAPI.GetReplacements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetReplacements`: []History
	fmt.Fprintf(os.Stdout, "Response from `HistoryEndpointsAPI.GetReplacements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**code** | **string** | Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReplacementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]History**](History.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReplacementsFromList

> []History GetReplacementsFromList(ctx, terminology).List(list).Execute()

Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".

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
	list := "list_example" // string | Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HistoryEndpointsAPI.GetReplacementsFromList(context.Background(), terminology).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HistoryEndpointsAPI.GetReplacementsFromList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetReplacementsFromList`: []History
	fmt.Fprintf(os.Stdout, "Response from `HistoryEndpointsAPI.GetReplacementsFromList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReplacementsFromListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **list** | **string** | Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. | 

### Return type

[**[]History**](History.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

