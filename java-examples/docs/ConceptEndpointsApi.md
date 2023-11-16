# ConceptEndpointsApi

All URIs are relative to *https://api-evsrest.nci.nih.gov/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAssociationEntries**](ConceptEndpointsApi.md#getAssociationEntries) | **GET** /api/v1/concept/{terminology}/associations/{codeOrLabel} | Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call |
| [**getAssociations1**](ConceptEndpointsApi.md#getAssociations1) | **GET** /api/v1/concept/{terminology}/{code}/associations | Get the associations for the specified terminology and code |
| [**getChildren**](ConceptEndpointsApi.md#getChildren) | **GET** /api/v1/concept/{terminology}/{code}/children | Get child concepts for the specified terminology and code |
| [**getConcept**](ConceptEndpointsApi.md#getConcept) | **GET** /api/v1/concept/{terminology}/{code} | Get the concept for the specified terminology and code |
| [**getConcepts**](ConceptEndpointsApi.md#getConcepts) | **GET** /api/v1/concept/{terminology} | Get concepts specified by list parameter |
| [**getDescendants**](ConceptEndpointsApi.md#getDescendants) | **GET** /api/v1/concept/{terminology}/{code}/descendants | Get descendant concepts for the specified terminology and code |
| [**getDisjointWith**](ConceptEndpointsApi.md#getDisjointWith) | **GET** /api/v1/concept/{terminology}/{code}/disjointWith | Get \&quot;disjoint with\&quot; info for the specified terminology and code |
| [**getHistory**](ConceptEndpointsApi.md#getHistory) | **GET** /api/v1/concept/{terminology}/{code}/history | Get history for the specified terminology and code |
| [**getInverseAssociations**](ConceptEndpointsApi.md#getInverseAssociations) | **GET** /api/v1/concept/{terminology}/{code}/inverseAssociations | Get inverse associations for the specified terminology and code |
| [**getInverseRoles**](ConceptEndpointsApi.md#getInverseRoles) | **GET** /api/v1/concept/{terminology}/{code}/inverseRoles | Get inverse roles for the specified terminology and code |
| [**getMaps**](ConceptEndpointsApi.md#getMaps) | **GET** /api/v1/concept/{terminology}/{code}/maps | Get maps for the specified terminology and code |
| [**getParents**](ConceptEndpointsApi.md#getParents) | **GET** /api/v1/concept/{terminology}/{code}/parents | Get parent concepts for the specified terminology and code |
| [**getPathsFromRoot**](ConceptEndpointsApi.md#getPathsFromRoot) | **GET** /api/v1/concept/{terminology}/{code}/pathsFromRoot | Get paths from the hierarchy root to the specified concept. |
| [**getPathsToAncestor**](ConceptEndpointsApi.md#getPathsToAncestor) | **GET** /api/v1/concept/{terminology}/{code}/pathsToAncestor/{ancestorCode} | Get paths from the specified code to the specified ancestor code |
| [**getPathsToRoot**](ConceptEndpointsApi.md#getPathsToRoot) | **GET** /api/v1/concept/{terminology}/{code}/pathsToRoot | Get paths to the hierarchy root from the specified code |
| [**getRoles1**](ConceptEndpointsApi.md#getRoles1) | **GET** /api/v1/concept/{terminology}/{code}/roles | Get roles for the specified terminology and code |
| [**getRoots**](ConceptEndpointsApi.md#getRoots) | **GET** /api/v1/concept/{terminology}/roots | Get root concepts for the specified terminology |
| [**getSubsetMembers1**](ConceptEndpointsApi.md#getSubsetMembers1) | **GET** /api/v1/concept/{terminology}/subsetMembers/{code} | Get subset members for the specified terminology and code. |
| [**getSubtree**](ConceptEndpointsApi.md#getSubtree) | **GET** /api/v1/concept/{terminology}/{code}/subtree | Get the entire subtree from the root node to the specified code |
| [**getSubtreeChildren**](ConceptEndpointsApi.md#getSubtreeChildren) | **GET** /api/v1/concept/{terminology}/{code}/subtree/children | Get the entire subtree from the root node to the specified code |


<a id="getAssociationEntries"></a>
# **getAssociationEntries**
> AssociationEntryResultList getAssociationEntries(terminology, codeOrLabel, fromRecord, pageSize)

Get the association entries for the specified terminology and code. Associations used to define subset membership are not resolved by this call

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String codeOrLabel = "codeOrLabel_example"; // String | Code/label in the specified terminology, e.g. 'A5' or 'Has_Salt_Form' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 10; // Integer | Max number of results to return
    try {
      AssociationEntryResultList result = apiInstance.getAssociationEntries(terminology, codeOrLabel, fromRecord, pageSize);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getAssociationEntries");
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
| **codeOrLabel** | **String**| Code/label in the specified terminology, e.g. &#39;A5&#39; or &#39;Has_Salt_Form&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |

### Return type

[**AssociationEntryResultList**](AssociationEntryResultList.md)

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

<a id="getAssociations1"></a>
# **getAssociations1**
> List&lt;Association&gt; getAssociations1(terminology, code)

Get the associations for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
    try {
      List<Association> result = apiInstance.getAssociations1(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getAssociations1");
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
| **code** | **String**| Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |

### Return type

[**List&lt;Association&gt;**](Association.md)

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

<a id="getChildren"></a>
# **getChildren**
> List&lt;Concept&gt; getChildren(terminology, code)

Get child concepts for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
    try {
      List<Concept> result = apiInstance.getChildren(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getChildren");
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
| **code** | **String**| Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |

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

<a id="getConcept"></a>
# **getConcept**
> Concept getConcept(terminology, code, limit, include)

Get the concept for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g.<ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
    Integer limit = 100; // Integer | If set to an integer (between <i>1</i> and <i>100</i>), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with <i>include=full</i>) and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count.
    String include = "summary"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      Concept result = apiInstance.getConcept(terminology, code, limit, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getConcept");
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
| **code** | **String**| Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
| **limit** | **Integer**| If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), elements of the concept should be limited to that specified number of entries. Thus a user interface can quickly retrieve initial data for a concept (even with &lt;i&gt;include&#x3D;full&lt;/i&gt;) and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | [optional] |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |

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
| **400** | Bad request |  -  |
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getConcepts"></a>
# **getConcepts**
> List&lt;Concept&gt; getConcepts(terminology, _list, include)

Get concepts specified by list parameter

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String _list = "_list_example"; // String | List (comma-separated) of codes to return concepts for, e.g.<ul><li>'C2291,C3224' for <i>ncit</i></li><li>'C0010137,C0025202' for <i>ncim</i></li></ul>
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      List<Concept> result = apiInstance.getConcepts(terminology, _list, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getConcepts");
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
| **_list** | **String**| List (comma-separated) of codes to return concepts for, e.g.&lt;ul&gt;&lt;li&gt;&#39;C2291,C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0010137,C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |
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
| **400** | Bad request |  -  |
| **417** | Expectation failed |  -  |
| **404** | Resource not found |  -  |
| **200** | Successfully retrieved the requested information |  -  |

<a id="getDescendants"></a>
# **getDescendants**
> List&lt;Concept&gt; getDescendants(terminology, code, fromRecord, pageSize, maxLevel)

Get descendant concepts for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit''
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 50000; // Integer | Max number of results to return
    Integer maxLevel = 10000; // Integer | Max level of results to return
    try {
      List<Concept> result = apiInstance.getDescendants(terminology, code, fromRecord, pageSize, maxLevel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getDescendants");
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
| **terminology** | **String**| Terminology, e.g. &#39;ncit&#39;&#39; | |
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |
| **maxLevel** | **Integer**| Max level of results to return | [optional] |

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

<a id="getDisjointWith"></a>
# **getDisjointWith**
> List&lt;DisjointWith&gt; getDisjointWith(terminology, code)

Get \&quot;disjoint with\&quot; info for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3910' for <i>ncit</i>.  This call is only meaningful for <i>ncit</i>.
    try {
      List<DisjointWith> result = apiInstance.getDisjointWith(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getDisjointWith");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3910&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |

### Return type

[**List&lt;DisjointWith&gt;**](DisjointWith.md)

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

<a id="getHistory"></a>
# **getHistory**
> Concept getHistory(terminology, code)

Get history for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i> and <i>ncim</i>.
    try {
      Concept result = apiInstance.getHistory(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getHistory");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt; and &lt;i&gt;ncim&lt;/i&gt;. | |

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

<a id="getInverseAssociations"></a>
# **getInverseAssociations**
> List&lt;Association&gt; getInverseAssociations(terminology, code)

Get inverse associations for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g.<ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
    try {
      List<Association> result = apiInstance.getInverseAssociations(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getInverseAssociations");
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
| **code** | **String**| Code in the specified terminology, e.g.&lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |

### Return type

[**List&lt;Association&gt;**](Association.md)

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

<a id="getInverseRoles"></a>
# **getInverseRoles**
> List&lt;Role&gt; getInverseRoles(terminology, code)

Get inverse roles for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>.  This call is only meaningful for <i>ncit</i>.
    try {
      List<Role> result = apiInstance.getInverseRoles(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getInverseRoles");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |

### Return type

[**List&lt;Role&gt;**](Role.md)

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

<a id="getMaps"></a>
# **getMaps**
> List&lt;ConceptMap&gt; getMaps(terminology, code)

Get maps for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    try {
      List<ConceptMap> result = apiInstance.getMaps(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getMaps");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |

### Return type

[**List&lt;ConceptMap&gt;**](ConceptMap.md)

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

<a id="getParents"></a>
# **getParents**
> List&lt;Concept&gt; getParents(terminology, code)

Get parent concepts for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit' or 'ncim'
    String code = "code_example"; // String | Code in the specified terminology, e.g. <ul><li>'C3224' for <i>ncit</i></li><li>'C0025202' for <i>ncim</i></li></ul>
    try {
      List<Concept> result = apiInstance.getParents(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getParents");
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
| **code** | **String**| Code in the specified terminology, e.g. &lt;ul&gt;&lt;li&gt;&#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;C0025202&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | |

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

<a id="getPathsFromRoot"></a>
# **getPathsFromRoot**
> List&lt;List&lt;Concept&gt;&gt; getPathsFromRoot(terminology, code, include, fromRecord, pageSize)

Get paths from the hierarchy root to the specified concept.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results. 
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 100; // Integer | Max number of results to return
    try {
      List<List<Concept>> result = apiInstance.getPathsFromRoot(terminology, code, include, fromRecord, pageSize);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getPathsFromRoot");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | [optional] |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |

### Return type

[**List&lt;List&lt;Concept&gt;&gt;**](List.md)

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

<a id="getPathsToAncestor"></a>
# **getPathsToAncestor**
> List&lt;List&lt;Concept&gt;&gt; getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, pageSize)

Get paths from the specified code to the specified ancestor code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String ancestorCode = "ancestorCode_example"; // String | Ancestor code of the other specified code, e.g. 'C2991' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results. 
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 100; // Integer | Max number of results to return
    try {
      List<List<Concept>> result = apiInstance.getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, pageSize);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getPathsToAncestor");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **ancestorCode** | **String**| Ancestor code of the other specified code, e.g. &#39;C2991&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | [optional] |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |

### Return type

[**List&lt;List&lt;Concept&gt;&gt;**](List.md)

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

<a id="getPathsToRoot"></a>
# **getPathsToRoot**
> List&lt;List&lt;Concept&gt;&gt; getPathsToRoot(terminology, code, include, fromRecord, pageSize)

Get paths to the hierarchy root from the specified code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than 'minimal' may produce very large payload results. 
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 100; // Integer | Max number of results to return
    try {
      List<List<Concept>> result = apiInstance.getPathsToRoot(terminology, code, include, fromRecord, pageSize);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getPathsToRoot");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. For this call, it is recommended to avoid using this parameter unless you need it for a specific use case.  Any value other than &#39;minimal&#39; may produce very large payload results.  | [optional] |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |

### Return type

[**List&lt;List&lt;Concept&gt;&gt;**](List.md)

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

<a id="getRoles1"></a>
# **getRoles1**
> List&lt;Role&gt; getRoles1(terminology, code)

Get roles for the specified terminology and code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    try {
      List<Role> result = apiInstance.getRoles1(terminology, code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getRoles1");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |

### Return type

[**List&lt;Role&gt;**](Role.md)

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

<a id="getRoots"></a>
# **getRoots**
> List&lt;Concept&gt; getRoots(terminology, include)

Get root concepts for the specified terminology

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'.  This call is only meaningful for <i>ncit</i>.
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      List<Concept> result = apiInstance.getRoots(terminology, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getRoots");
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

<a id="getSubsetMembers1"></a>
# **getSubsetMembers1**
> List&lt;Concept&gt; getSubsetMembers1(terminology, code, fromRecord, pageSize, include)

Get subset members for the specified terminology and code.

This endpoint will be deprecated in v2 in favor of a top level subset member endpoint.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code for a subset concept in the specified terminology, e.g. 'C157225' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 10000; // Integer | Max number of results to return
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    try {
      List<Concept> result = apiInstance.getSubsetMembers1(terminology, code, fromRecord, pageSize, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getSubsetMembers1");
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
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |
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

<a id="getSubtree"></a>
# **getSubtree**
> List&lt;HierarchyNode&gt; getSubtree(terminology, code, limit)

Get the entire subtree from the root node to the specified code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    Integer limit = 100; // Integer | If set to an integer (between <i>1</i> and <i>100</i>), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count.
    try {
      List<HierarchyNode> result = apiInstance.getSubtree(terminology, code, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getSubtree");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **limit** | **Integer**| If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), subtrees and siblings at each level will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | [optional] |

### Return type

[**List&lt;HierarchyNode&gt;**](HierarchyNode.md)

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

<a id="getSubtreeChildren"></a>
# **getSubtreeChildren**
> List&lt;HierarchyNode&gt; getSubtreeChildren(terminology, code, limit)

Get the entire subtree from the root node to the specified code

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.ConceptEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/api/v1");

    ConceptEndpointsApi apiInstance = new ConceptEndpointsApi(defaultClient);
    String terminology = "ncit"; // String | Terminology, e.g. 'ncit'
    String code = "code_example"; // String | Code in the specified terminology, e.g. 'C3224' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
    Integer limit = 100; // Integer | If set to an integer (between <i>1</i> and <i>100</i>), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a <i>ct</i> field will be included to indicate the total count.
    try {
      List<HierarchyNode> result = apiInstance.getSubtreeChildren(terminology, code, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConceptEndpointsApi#getSubtreeChildren");
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
| **code** | **String**| Code in the specified terminology, e.g. &#39;C3224&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | |
| **limit** | **Integer**| If set to an integer (between &lt;i&gt;1&lt;/i&gt; and &lt;i&gt;100&lt;/i&gt;), children will be limited to the specified number of entries. Thus a user interface can quickly retrieve initial data for a subtree and then call back for more data. An extra placeholder entry with just a &lt;i&gt;ct&lt;/i&gt; field will be included to indicate the total count. | [optional] |

### Return type

[**List&lt;HierarchyNode&gt;**](HierarchyNode.md)

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

