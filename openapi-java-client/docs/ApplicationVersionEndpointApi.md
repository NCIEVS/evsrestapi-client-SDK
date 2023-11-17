# ApplicationVersionEndpointApi

All URIs are relative to *https://api-evsrest.nci.nih.gov*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApplicationVersion**](ApplicationVersionEndpointApi.md#getApplicationVersion) | **GET** /api/v1/version | Get the application version information |


<a id="getApplicationVersion"></a>
# **getApplicationVersion**
> ApplicationVersion getApplicationVersion()

Get the application version information

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ApplicationVersionEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    ApplicationVersionEndpointApi apiInstance = new ApplicationVersionEndpointApi(defaultClient);
    try {
      ApplicationVersion result = apiInstance.getApplicationVersion();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationVersionEndpointApi#getApplicationVersion");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApplicationVersion**](ApplicationVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad request |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

