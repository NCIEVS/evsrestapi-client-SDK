# SubsetEndpointsApi

All URIs are relative to *https://api-evsrest.nci.nih.gov*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSubset**](SubsetEndpointsApi.md#getSubset) | **GET** /api/v1/subset/{terminology}/{code} |  |
| [**getSubsetMembers**](SubsetEndpointsApi.md#getSubsetMembers) | **GET** /api/v1/subset/{terminology}/{code}/members | Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints. |
| [**getSubsets**](SubsetEndpointsApi.md#getSubsets) | **GET** /api/v1/subset/{terminology} | Get all subsets (or those specified by list parameter) for the specified terminology |


<a id="getSubset"></a>
# **getSubset**
> Concept getSubset(terminology, code, include)



Get the subset for the specified terminology and code.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.SubsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    SubsetEndpointsApi apiInstance = new SubsetEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.
    String code = "code_example"; // String | Subset code, e.g. 'C116978' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "summary"; // String | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getSubset(terminology, code, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SubsetEndpointsApi#getSubset");
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
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39;. | |
| **code** | **String**| Subset code, e.g. &#39;C116978&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **include** | **String**| Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |

### Return type

[**Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSubsetMembers"></a>
# **getSubsetMembers**
> List&lt;Concept&gt; getSubsetMembers(terminology, code, fromRecord, pageSize, include)

Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.SubsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    SubsetEndpointsApi apiInstance = new SubsetEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code for a subset concept in the specified terminology, e.g. 'C157225' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String fromRecord = "0"; // String | Start index of the search results
    String pageSize = "10000"; // String | Max number of results to return
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      List<Concept> result = apiInstance.getSubsetMembers(terminology, code, fromRecord, pageSize, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SubsetEndpointsApi#getSubsetMembers");
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
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39; | |
| **code** | **String**| Code for a subset concept in the specified terminology, e.g. &#39;C157225&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **fromRecord** | **String**| Start index of the search results | [optional] |
| **pageSize** | **String**| Max number of results to return | [optional] |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |

### Return type

[**List&lt;Concept&gt;**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSubsets"></a>
# **getSubsets**
> List&lt;Concept&gt; getSubsets(terminology, include, _list)

Get all subsets (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.SubsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    SubsetEndpointsApi apiInstance = new SubsetEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.  This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getSubsets(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SubsetEndpointsApi#getSubsets");
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
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

### Return type

[**List&lt;Concept&gt;**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

