# MetadataEndpointsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAssociation**](MetadataEndpointsApi.md#getAssociation) | **GET** /api/v1/metadata/{terminology}/association/{codeOrName} | Get the association for the specified terminology and code/name |
| [**getAssociations**](MetadataEndpointsApi.md#getAssociations) | **GET** /api/v1/metadata/{terminology}/associations | Get all associations (or those specified by list parameter) for the specified terminology |
| [**getConceptStatuses**](MetadataEndpointsApi.md#getConceptStatuses) | **GET** /api/v1/metadata/{terminology}/conceptStatuses | Get all concept status values for the specified terminology |
| [**getDefinitionSources**](MetadataEndpointsApi.md#getDefinitionSources) | **GET** /api/v1/metadata/{terminology}/definitionSources | Get all definition sources for the specified terminology |
| [**getDefinitionType**](MetadataEndpointsApi.md#getDefinitionType) | **GET** /api/v1/metadata/{terminology}/definitionType/{codeOrName} | Get the definition type for the specified terminology and code/name. |
| [**getDefinitionTypes**](MetadataEndpointsApi.md#getDefinitionTypes) | **GET** /api/v1/metadata/{terminology}/definitionTypes | Get all definition types (or those specified by list parameter) for the specified terminology |
| [**getProperties**](MetadataEndpointsApi.md#getProperties) | **GET** /api/v1/metadata/{terminology}/properties | Get all properties (or those specified by list parameter) for the specified terminology |
| [**getProperty**](MetadataEndpointsApi.md#getProperty) | **GET** /api/v1/metadata/{terminology}/property/{codeOrName} | Get the property for the specified terminology and code/name |
| [**getQualifier**](MetadataEndpointsApi.md#getQualifier) | **GET** /api/v1/metadata/{terminology}/qualifier/{codeOrName} | Get the qualifier for the specified terminology and code/name |
| [**getQualifierValues**](MetadataEndpointsApi.md#getQualifierValues) | **GET** /api/v1/metadata/{terminology}/qualifier/{codeOrName}/values | Get qualifier values for the specified terminology and code/name |
| [**getQualifiers**](MetadataEndpointsApi.md#getQualifiers) | **GET** /api/v1/metadata/{terminology}/qualifiers | Get all qualifiers (properties on properties) for the specified terminology |
| [**getRole**](MetadataEndpointsApi.md#getRole) | **GET** /api/v1/metadata/{terminology}/role/{codeOrName} | Get the role for the specified terminology and code/name |
| [**getRoles**](MetadataEndpointsApi.md#getRoles) | **GET** /api/v1/metadata/{terminology}/roles | Get all roles (or those specified by list parameter) for the specified terminology |
| [**getSubset1**](MetadataEndpointsApi.md#getSubset1) | **GET** /api/v1/metadata/{terminology}/subset/{code} | Get the subset for the specified terminology and code. |
| [**getSubsets1**](MetadataEndpointsApi.md#getSubsets1) | **GET** /api/v1/metadata/{terminology}/subsets | Get all subsets (or those specified by list parameter) for the specified terminology. |
| [**getSynonymSources**](MetadataEndpointsApi.md#getSynonymSources) | **GET** /api/v1/metadata/{terminology}/synonymSources | Get all synonym sources for the specified terminology |
| [**getSynonymType**](MetadataEndpointsApi.md#getSynonymType) | **GET** /api/v1/metadata/{terminology}/synonymType/{codeOrName} | Get the synonym type for the specified terminology and code/name |
| [**getSynonymTypes**](MetadataEndpointsApi.md#getSynonymTypes) | **GET** /api/v1/metadata/{terminology}/synonymTypes | Get all synonym types (or those specified by list parameter) for the specified terminology |
| [**getTermTypes**](MetadataEndpointsApi.md#getTermTypes) | **GET** /api/v1/metadata/{terminology}/termTypes | Get all term types for the specified terminology |
| [**getTerminologies**](MetadataEndpointsApi.md#getTerminologies) | **GET** /api/v1/metadata/terminologies | Get all available terminologies |
| [**getWelcomeText**](MetadataEndpointsApi.md#getWelcomeText) | **GET** /api/v1/metadata/{terminology}/welcomeText | Get welcome text for the specified terminology |


<a id="getAssociation"></a>
# **getAssociation**
> Concept getAssociation(terminology, codeOrName, include)

Get the association for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Association code (or name), e.g. <ul><li>'A10' or 'Has_CDRH_Parent' for <i>ncit</i></li><li>'RB' or 'has a broader relationship' for <i>ncim</i></li></ul>
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getAssociation(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getAssociation");
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
| **codeOrName** | **String**| Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;&#39;A10&#39; or &#39;Has_CDRH_Parent&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RB&#39; or &#39;has a broader relationship&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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

<a id="getAssociations"></a>
# **getAssociations**
> List&lt;Concept&gt; getAssociations(terminology, include, _list)

Get all associations (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getAssociations(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getAssociations");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

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

<a id="getConceptStatuses"></a>
# **getConceptStatuses**
> List&lt;String&gt; getConceptStatuses(terminology)

Get all concept status values for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'. This call is only meaningful for <i>ncit</i>.
    try {
      List<String> result = apiInstance.getConceptStatuses(terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getConceptStatuses");
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
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |

### Return type

**List&lt;String&gt;**

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

<a id="getDefinitionSources"></a>
# **getDefinitionSources**
> List&lt;ConceptMinimal&gt; getDefinitionSources(terminology)

Get all definition sources for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    try {
      List<ConceptMinimal> result = apiInstance.getDefinitionSources(terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getDefinitionSources");
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

### Return type

[**List&lt;ConceptMinimal&gt;**](ConceptMinimal.md)

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

<a id="getDefinitionType"></a>
# **getDefinitionType**
> Concept getDefinitionType(terminology, codeOrName, include)

Get the definition type for the specified terminology and code/name.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Definition type code (or name), e.g.<ul><li>'P325' or 'DEFINITION' for <i>ncit</i></li><li>'DEFINITION' for <i>ncim</i></li></ul>
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getDefinitionType(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getDefinitionType");
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
| **codeOrName** | **String**| Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P325&#39; or &#39;DEFINITION&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;DEFINITION&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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

<a id="getDefinitionTypes"></a>
# **getDefinitionTypes**
> List&lt;Concept&gt; getDefinitionTypes(terminology, include, _list)

Get all definition types (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getDefinitionTypes(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getDefinitionTypes");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

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

<a id="getProperties"></a>
# **getProperties**
> List&lt;Concept&gt; getProperties(terminology, include, _list)

Get all properties (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getProperties(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getProperties");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

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

<a id="getProperty"></a>
# **getProperty**
> Concept getProperty(terminology, codeOrName, include)

Get the property for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Property code (or name), e.g. <ul><li>'P216' or 'BioCarta_ID' for <i>ncit</i></li><li>'BioCarta_ID' or ''BioCarta ID' for <i>ncim</i></li></ul>
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getProperty(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getProperty");
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
| **codeOrName** | **String**| Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;&#39;P216&#39; or &#39;BioCarta_ID&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;BioCarta_ID&#39; or &#39;&#39;BioCarta ID&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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

<a id="getQualifier"></a>
# **getQualifier**
> Concept getQualifier(terminology, codeOrName, include)

Get the qualifier for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Qualifier code (or name), e.g.<ul><li>'P390' or 'go-source' for <i>ncit</i></li><li>'RG' or 'Relationship group' for <i>ncim</i></li></ul>
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getQualifier(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getQualifier");
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
| **codeOrName** | **String**| Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P390&#39; or &#39;go-source&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RG&#39; or &#39;Relationship group&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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

<a id="getQualifierValues"></a>
# **getQualifierValues**
> List&lt;String&gt; getQualifierValues(terminology, codeOrName)

Get qualifier values for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Qualifier code (or name), e.g.<ul><li>'P390' or 'go-source' for <i>ncit</i></li><li>'RG' or 'Relationship group' for <i>ncim</i></li></ul>
    try {
      List<String> result = apiInstance.getQualifierValues(terminology, codeOrName);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getQualifierValues");
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
| **codeOrName** | **String**| Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P390&#39; or &#39;go-source&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RG&#39; or &#39;Relationship group&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |

### Return type

**List&lt;String&gt;**

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

<a id="getQualifiers"></a>
# **getQualifiers**
> List&lt;Concept&gt; getQualifiers(terminology, include, _list)

Get all qualifiers (properties on properties) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return qualifiers for (or leave blank for all)
    try {
      List<Concept> result = apiInstance.getQualifiers(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getQualifiers");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return qualifiers for (or leave blank for all) | [optional] |

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

<a id="getRole"></a>
# **getRole**
> Concept getRole(terminology, codeOrName, include)

Get the role for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String codeOrName = "codeOrName_example"; // String | Role code (or name), e.g. 'R123' or 'Chemotherapy_Regimen_Has_Component' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getRole(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getRole");
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
| **codeOrName** | **String**| Role code (or name), e.g. &#39;R123&#39; or &#39;Chemotherapy_Regimen_Has_Component&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
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

<a id="getRoles"></a>
# **getRoles**
> List&lt;Concept&gt; getRoles(terminology, include, _list)

Get all roles (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.  This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getRoles(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getRoles");
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
| **_list** | **String**| List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

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
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSubset1"></a>
# **getSubset1**
> Concept getSubset1(terminology, code, include)

Get the subset for the specified terminology and code.

This endpoint will be deprecated in v2 in favor of top level subset endpoints.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.
    String code = "code_example"; // String | Subset code, e.g. 'C116978' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "summary"; // String | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getSubset1(terminology, code, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getSubset1");
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
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSubsets1"></a>
# **getSubsets1**
> List&lt;Concept&gt; getSubsets1(terminology, include, _list)

Get all subsets (or those specified by list parameter) for the specified terminology.

This endpoint will be deprecated in v2 in favor of top level subset endpoints.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.  This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getSubsets1(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getSubsets1");
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
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSynonymSources"></a>
# **getSynonymSources**
> List&lt;ConceptMinimal&gt; getSynonymSources(terminology)

Get all synonym sources for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    try {
      List<ConceptMinimal> result = apiInstance.getSynonymSources(terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getSynonymSources");
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

### Return type

[**List&lt;ConceptMinimal&gt;**](ConceptMinimal.md)

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

<a id="getSynonymType"></a>
# **getSynonymType**
> Concept getSynonymType(terminology, codeOrName, include)

Get the synonym type for the specified terminology and code/name

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String codeOrName = "codeOrName_example"; // String | Synonym type code (or name), e.g.<ul><li>'P90' or 'FULL_SYN' for <i>ncit</i></li><li>'Preferred_Name' or 'Preferred name' for <i>ncim</i></li></ul>
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getSynonymType(terminology, codeOrName, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getSynonymType");
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
| **codeOrName** | **String**| Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P90&#39; or &#39;FULL_SYN&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;Preferred_Name&#39; or &#39;Preferred name&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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
| **417** | Resource not found |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getSynonymTypes"></a>
# **getSynonymTypes**
> List&lt;Concept&gt; getSynonymTypes(terminology, include, _list)

Get all synonym types (or those specified by list parameter) for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    String _list = "_list_example"; // String | List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values.
    try {
      List<Concept> result = apiInstance.getSynonymTypes(terminology, include, _list);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getSynonymTypes");
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
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **_list** | **String**| List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | [optional] |

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

<a id="getTermTypes"></a>
# **getTermTypes**
> List&lt;ConceptMinimal&gt; getTermTypes(terminology)

Get all term types for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    try {
      List<ConceptMinimal> result = apiInstance.getTermTypes(terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getTermTypes");
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

### Return type

[**List&lt;ConceptMinimal&gt;**](ConceptMinimal.md)

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

<a id="getTerminologies"></a>
# **getTerminologies**
> List&lt;Terminology&gt; getTerminologies(latest, tag, terminology)

Get all available terminologies

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    Boolean latest = true; // Boolean | Return terminologies with matching <i>latest</i> value. e.g. true or false
    String tag = "tag_example"; // String | Return terminologies with matching tag. e.g. 'monthly' or 'weekly' for <i>ncit</i>
    String terminology = "terminology_example"; // String | Return entries with matching terminology, e.g. 'ncit' or 'ncim'
    try {
      List<Terminology> result = apiInstance.getTerminologies(latest, tag, terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getTerminologies");
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
| **latest** | **Boolean**| Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false | [optional] |
| **tag** | **String**| Return terminologies with matching tag. e.g. &#39;monthly&#39; or &#39;weekly&#39; for &lt;i&gt;ncit&lt;/i&gt; | [optional] |
| **terminology** | **String**| Return entries with matching terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; | [optional] |

### Return type

[**List&lt;Terminology&gt;**](Terminology.md)

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

<a id="getWelcomeText"></a>
# **getWelcomeText**
> String getWelcomeText(terminology)

Get welcome text for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.MetadataEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    MetadataEndpointsApi apiInstance = new MetadataEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    try {
      String result = apiInstance.getWelcomeText(terminology);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MetadataEndpointsApi#getWelcomeText");
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

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

