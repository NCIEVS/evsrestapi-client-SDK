# MapsetEndpointsApi

All URIs are relative to *https://api-evsrest.nci.nih.gov*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMapsetByCode**](MapsetEndpointsApi.md#getMapsetByCode) | **GET** /api/v1/mapset/{code} | Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another) |
| [**getMapsetMappingsByCode**](MapsetEndpointsApi.md#getMapsetMappingsByCode) | **GET** /api/v1/mapset/{code}/maps | Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another) |
| [**getMapsets**](MapsetEndpointsApi.md#getMapsets) | **GET** /api/v1/mapset | Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another) |


<a id="getMapsetByCode"></a>
# **getMapsetByCode**
> Concept getMapsetByCode(code, include)

Get the mapset for the specified code (no terminology parameter is needed as mapsets connect codes in one terminology to another)

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MapsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    MapsetEndpointsApi apiInstance = new MapsetEndpointsApi(defaultClient);
    String code = "code_example"; // String | Mapset code
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getMapsetByCode(code, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MapsetEndpointsApi#getMapsetByCode");
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
| **code** | **String**| Mapset code | |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |

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
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getMapsetMappingsByCode"></a>
# **getMapsetMappingsByCode**
> MapResultList getMapsetMappingsByCode(code, fromRecord, pageSize, term, ascending, sort)

Get the maps for the mapset specified by the code (no terminology parameter is needed as mapsets connect codes in one terminology to another)

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MapsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    MapsetEndpointsApi apiInstance = new MapsetEndpointsApi(defaultClient);
    String code = "code_example"; // String | Mapset code
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 10; // Integer | Max number of results to return
    String term = "term_example"; // String | 
    Boolean ascending = true; // Boolean | Sort ascending (if true) or descending (if false)
    String sort = "sort_example"; // String | The search parameter to sort results by
    try {
      MapResultList result = apiInstance.getMapsetMappingsByCode(code, fromRecord, pageSize, term, ascending, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MapsetEndpointsApi#getMapsetMappingsByCode");
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
| **code** | **String**| Mapset code | |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |
| **term** | **String**|  | [optional] |
| **ascending** | **Boolean**| Sort ascending (if true) or descending (if false) | [optional] |
| **sort** | **String**| The search parameter to sort results by | [optional] |

### Return type

[**MapResultList**](MapResultList.md)

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

<a id="getMapsets"></a>
# **getMapsets**
> List&lt;Concept&gt; getMapsets(include)

Get all mapsets (no terminology parameter is needed as mapsets connect codes in one terminology to another)

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MapsetEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    MapsetEndpointsApi apiInstance = new MapsetEndpointsApi(defaultClient);
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      List<Concept> result = apiInstance.getMapsets(include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MapsetEndpointsApi#getMapsets");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |

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
| **200** | Successfully retrieved the requested information |  -  |

