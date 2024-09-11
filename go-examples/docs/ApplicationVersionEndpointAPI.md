# \ApplicationVersionEndpointAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetApplicationVersion**](ApplicationVersionEndpointAPI.md#GetApplicationVersion) | **Get** /api/v1/version | Get the application version information
[**RewriteUrl**](ApplicationVersionEndpointAPI.md#RewriteUrl) | **Get** /api/v1/rewrite | Rewrite the specified LexEVS URL to EVS Explore



## GetApplicationVersion

> ApplicationVersion GetApplicationVersion(ctx).Execute()

Get the application version information

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationVersionEndpointAPI.GetApplicationVersion(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionEndpointAPI.GetApplicationVersion``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetApplicationVersion`: ApplicationVersion
	fmt.Fprintf(os.Stdout, "Response from `ApplicationVersionEndpointAPI.GetApplicationVersion`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetApplicationVersionRequest struct via the builder pattern


### Return type

[**ApplicationVersion**](ApplicationVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RewriteUrl

> string RewriteUrl(ctx).Url(url).Execute()

Rewrite the specified LexEVS URL to EVS Explore

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
	url := "url_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApplicationVersionEndpointAPI.RewriteUrl(context.Background()).Url(url).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApplicationVersionEndpointAPI.RewriteUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RewriteUrl`: string
	fmt.Fprintf(os.Stdout, "Response from `ApplicationVersionEndpointAPI.RewriteUrl`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRewriteUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **string** |  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

