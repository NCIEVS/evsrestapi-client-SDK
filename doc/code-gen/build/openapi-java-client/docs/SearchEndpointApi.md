# SearchEndpointApi

All URIs are relative to *https://api-evsrest.nci.nih.gov*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**search**](SearchEndpointApi.md#search) | **GET** /api/v1/concept/search | Get concept search results |
| [**searchSingleTerminology**](SearchEndpointApi.md#searchSingleTerminology) | **GET** /api/v1/concept/{terminology}/search | Get concept search results for a specified terminology |


<a id="search"></a>
# **search**
> ConceptResultList search(terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset)

Get concept search results

Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK&#39; target&#x3D;&#39;_blank&#39;&gt;Github client SDK library created for the NCI EVS Rest API&lt;/a&gt;.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.SearchEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    SearchEndpointApi apiInstance = new SearchEndpointApi(defaultClient);
    String terminology = "ncit"; // String | Comma-separated list of terminologies to search, e.g. 'ncit' or 'ncim'
    String term = "term_example"; // String | The term, phrase, or code to be searched, e.g. 'melanoma'
    String type = "contains"; // String | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
    String sort = "sort_example"; // String | The search parameter to sort results by
    Boolean ascending = true; // Boolean | Sort ascending (if true) or descending (if false)
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 10; // Integer | Max number of results to return
    String conceptStatus = "conceptStatus_example"; // String | Comma-separated list of concept status values to restrict search results by. <p><a href='/api/v1/metadata/ncit/conceptStatuses' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String property = "property_example"; // String | Comma-separated list of properties to restrict search results by (see also <i>value</i>). e.g.<ul><li>'P106,P322' for <i>terminology=ncit</i></li><li>'COLOR,SHAPE' for <i>terminology=ncim</i></li></ul><p><a href='/api/v1/metadata/ncit/properties' target='_blank'>Click here for a list of NCI Thesaurus properties</a>.</p><p><a href='/api/v1/metadata/ncim/properties' target='_blank'>Click here for a list of NCI Metathesaurus properties</a>.</p> The properties can be specified as code or name. NOTE: This feature works with <i>value</i> to find concepts having one of the specified properties with an exact value matching the <i>value</i> parameter.  Using a <i>term</i> will further restrict results to those also matching the term.
    String value = "value_example"; // String | A property value to restrict search results by.  NOTE: This feature works with <i>property</i> to find concepts having one of the specified properties with an exact value matching this parameter.  Using a <i>term</i> will further restrict results to those also matching the term.
    String definitionSource = "definitionSource_example"; // String | Comma-separated list of definition sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/definitionSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p><p><a href='/api/v1/metadata/ncim/definitionSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String definitionType = "definitionType_example"; // String | Comma-separated list of definition types to restrict search results by, e.g. 'DEFINITION,ALT_DEFINITION' for <i>terminology=ncit</i>. <p><a href='/api/v1/metadata/ncit/definitionTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String synonymSource = "synonymSource_example"; // String | Comma-separated list of synonym sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/synonymSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/synonymSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String synonymType = "synonymType_example"; // String | Comma-separated list of synonym types to restrict search results by, e.g. 'FULL_SYN'. <p><a href='/api/v1/metadata/ncit/synonymTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String synonymTermType = "synonymTermType_example"; // String | Comma-separated list of synonym term type values to restrict search results by. <p><a href='/api/v1/metadata/ncit/termTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/termTypes' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String subset = "subset_example"; // String | Comma-separated list of subsets to restrict search results by, e.g. 'C157225'. The value '*' can also be used to return results that participate in at least one subset. This parameter is only meaningful for <i>terminology=ncit</i>
    try {
      ConceptResultList result = apiInstance.search(terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchEndpointApi#search");
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
| **terminology** | **String**| Comma-separated list of terminologies to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; | [optional] |
| **term** | **String**| The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | [optional] |
| **type** | **String**| The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. | [optional] |
| **sort** | **String**| The search parameter to sort results by | [optional] |
| **ascending** | **Boolean**| Sort ascending (if true) or descending (if false) | [optional] |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |
| **conceptStatus** | **String**| Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/conceptStatuses&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **property** | **String**| Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;&#39;P106,P322&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;COLOR,SHAPE&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | [optional] |
| **value** | **String**| A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | [optional] |
| **definitionSource** | **String**| Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **definitionType** | **String**| Comma-separated list of definition types to restrict search results by, e.g. &#39;DEFINITION,ALT_DEFINITION&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **synonymSource** | **String**| Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **synonymType** | **String**| Comma-separated list of synonym types to restrict search results by, e.g. &#39;FULL_SYN&#39;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **synonymTermType** | **String**| Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **subset** | **String**| Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39;. The value &#39;*&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt; | [optional] |

### Return type

[**ConceptResultList**](ConceptResultList.md)

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

<a id="searchSingleTerminology"></a>
# **searchSingleTerminology**
> ConceptResultList searchSingleTerminology(terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset)

Get concept search results for a specified terminology

Use cases for search range from very simple term searches, use of paging parameters, additional filters, searches properties, roles, and associations, and so on.  To further explore the range of search options, take a look at the &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK&#39; target&#x3D;&#39;_blank&#39;&gt;Github client SDK library created for the NCI EVS Rest API&lt;/a&gt;.

### Example
```java
// Import classes:
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.invoker.models.*;
import gov.nih.nci.evs.api.SearchEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov");

    SearchEndpointApi apiInstance = new SearchEndpointApi(defaultClient);
    String terminology = "ncit"; // String | Single terminology to search, e.g. 'ncit' or 'ncim'
    String term = "term_example"; // String | The term, phrase, or code to be searched, e.g. 'melanoma'
    String type = "contains"; // String | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy.
    String sort = "sort_example"; // String | The search parameter to sort results by
    Boolean ascending = true; // Boolean | Sort ascending (if true) or descending (if false)
    String include = "minimal"; // String | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>.
    Integer fromRecord = 0; // Integer | Start index of the search results
    Integer pageSize = 10; // Integer | Max number of results to return
    String conceptStatus = "conceptStatus_example"; // String | Comma-separated list of concept status values to restrict search results by. <p><a href='/api/v1/metadata/ncit/conceptStatuses' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String property = "property_example"; // String | Comma-separated list of properties to restrict search results by (see also <i>value</i>). e.g.<ul><li>'P106,P322' for <i>terminology=ncit</i></li><li>'COLOR,SHAPE' for <i>terminology=ncim</i></li></ul><p><a href='/api/v1/metadata/ncit/properties' target='_blank'>Click here for a list of NCI Thesaurus properties</a>.</p><p><a href='/api/v1/metadata/ncim/properties' target='_blank'>Click here for a list of NCI Metathesaurus properties</a>.</p> The properties can be specified as code or name. NOTE: This feature works with <i>value</i> to find concepts having one of the specified properties with an exact value matching the <i>value</i> parameter.  Using a <i>term</i> will further restrict results to those also matching the term.
    String value = "value_example"; // String | A property value to restrict search results by.  NOTE: This feature works with <i>property</i> to find concepts having one of the specified properties with an exact value matching this parameter.  Using a <i>term</i> will further restrict results to those also matching the term.
    String definitionSource = "definitionSource_example"; // String | Comma-separated list of definition sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/definitionSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p><p><a href='/api/v1/metadata/ncim/definitionSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String definitionType = "definitionType_example"; // String | Comma-separated list of definition types to restrict search results by, e.g. 'DEFINITION,ALT_DEFINITION' for <i>terminology=ncit</i>. <p><a href='/api/v1/metadata/ncit/definitionTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String synonymSource = "synonymSource_example"; // String | Comma-separated list of synonym sources to restrict search results by. <p><a href='/api/v1/metadata/ncit/synonymSources' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/synonymSources' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String synonymType = "synonymType_example"; // String | Comma-separated list of synonym types to restrict search results by, e.g. 'FULL_SYN'. <p><a href='/api/v1/metadata/ncit/synonymTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>. This parameter is only meaningful for <i>terminology=ncit</i>.</p>
    String synonymTermType = "synonymTermType_example"; // String | Comma-separated list of synonym term type values to restrict search results by. <p><a href='/api/v1/metadata/ncit/termTypes' target='_blank'>Click here for a list of NCI Thesaurus values</a>.</p> <p><a href='/api/v1/metadata/ncim/termTypes' target='_blank'>Click here for a list of NCI Metathesaurus values</a>.</p>
    String subset = "subset_example"; // String | Comma-separated list of subsets to restrict search results by, e.g. 'C157225'. The value '*' can also be used to return results that participate in at least one subset. This parameter is only meaningful for <i>terminology=ncit</i>
    try {
      ConceptResultList result = apiInstance.searchSingleTerminology(terminology, term, type, sort, ascending, include, fromRecord, pageSize, conceptStatus, property, value, definitionSource, definitionType, synonymSource, synonymType, synonymTermType, subset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchEndpointApi#searchSingleTerminology");
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
| **terminology** | **String**| Single terminology to search, e.g. &#39;ncit&#39; or &#39;ncim&#39; | |
| **term** | **String**| The term, phrase, or code to be searched, e.g. &#39;melanoma&#39; | [optional] |
| **type** | **String**| The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy. | [optional] |
| **sort** | **String**| The search parameter to sort results by | [optional] |
| **ascending** | **Boolean**| Sort ascending (if true) or descending (if false) | [optional] |
| **include** | **String**| Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, history, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | [optional] |
| **fromRecord** | **Integer**| Start index of the search results | [optional] |
| **pageSize** | **Integer**| Max number of results to return | [optional] |
| **conceptStatus** | **String**| Comma-separated list of concept status values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/conceptStatuses&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **property** | **String**| Comma-separated list of properties to restrict search results by (see also &lt;i&gt;value&lt;/i&gt;). e.g.&lt;ul&gt;&lt;li&gt;&#39;P106,P322&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;COLOR,SHAPE&#39; for &lt;i&gt;terminology&#x3D;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus properties&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/properties&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus properties&lt;/a&gt;.&lt;/p&gt; The properties can be specified as code or name. NOTE: This feature works with &lt;i&gt;value&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching the &lt;i&gt;value&lt;/i&gt; parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | [optional] |
| **value** | **String**| A property value to restrict search results by.  NOTE: This feature works with &lt;i&gt;property&lt;/i&gt; to find concepts having one of the specified properties with an exact value matching this parameter.  Using a &lt;i&gt;term&lt;/i&gt; will further restrict results to those also matching the term. | [optional] |
| **definitionSource** | **String**| Comma-separated list of definition sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/definitionSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **definitionType** | **String**| Comma-separated list of definition types to restrict search results by, e.g. &#39;DEFINITION,ALT_DEFINITION&#39; for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/definitionTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **synonymSource** | **String**| Comma-separated list of synonym sources to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/synonymSources&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **synonymType** | **String**| Comma-separated list of synonym types to restrict search results by, e.g. &#39;FULL_SYN&#39;. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/synonymTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt;.&lt;/p&gt; | [optional] |
| **synonymTermType** | **String**| Comma-separated list of synonym term type values to restrict search results by. &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncit/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Thesaurus values&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;&lt;a href&#x3D;&#39;/api/v1/metadata/ncim/termTypes&#39; target&#x3D;&#39;_blank&#39;&gt;Click here for a list of NCI Metathesaurus values&lt;/a&gt;.&lt;/p&gt; | [optional] |
| **subset** | **String**| Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39;. The value &#39;*&#39; can also be used to return results that participate in at least one subset. This parameter is only meaningful for &lt;i&gt;terminology&#x3D;ncit&lt;/i&gt; | [optional] |

### Return type

[**ConceptResultList**](ConceptResultList.md)

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

