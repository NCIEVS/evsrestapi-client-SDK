# HistoryEndpointsApi

All URIs are relative to *https://api-evsrest.nci.nih.gov/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getReplacements**](HistoryEndpointsApi.md#getReplacements) | **GET** /api/v1/history/{terminology}/{code}/replacements | Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;. |
| [**getReplacementsFromList**](HistoryEndpointsApi.md#getReplacementsFromList) | **GET** /api/v1/history/{terminology}/replacements | Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;. |


<a id="getReplacements"></a>
# **getReplacements**
> List&lt;History&gt; getReplacements(terminology, code)

Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \&quot;active\&quot;.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.HistoryEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    HistoryEndpointsApi apiInstance = new HistoryEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>.
    try {
      List<History> result = apiInstance.getReplacements(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HistoryEndpointsApi#getReplacements");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; | |
| **code** | **String**| Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. | |

### Return type

[**List&lt;History&gt;**](History.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad request |  -  |
| **417** | Expectation failed |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getReplacementsFromList"></a>
# **getReplacementsFromList**
> List&lt;History&gt; getReplacementsFromList(terminology, _list)

Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \&quot;active\&quot;.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.HistoryEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    HistoryEndpointsApi apiInstance = new HistoryEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String _list = "_list_example"; // String | Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>.
    try {
      List<History> result = apiInstance.getReplacementsFromList(terminology, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HistoryEndpointsApi#getReplacementsFromList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; | |
| **_list** | **String**| Comma-separated list of codes, e.g. &lt;ul&gt;&lt;li&gt;&#39;C4654,C40117&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0000733,C3551741&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;. | |

### Return type

[**List&lt;History&gt;**](History.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **400** | Bad request |  -  |
| **417** | Expectation failed |  -  |
| **200** | Successfully retrieved the requested information |  -  |

