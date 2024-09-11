# \MetadataEndpointsAPI

All URIs are relative to *http://localhost:8082*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAssociation**](MetadataEndpointsAPI.md#GetAssociation) | **Get** /api/v1/metadata/{terminology}/association/{codeOrName} | Get the association for the specified terminology and code/name
[**GetAssociations**](MetadataEndpointsAPI.md#GetAssociations) | **Get** /api/v1/metadata/{terminology}/associations | Get all associations (or those specified by list parameter) for the specified terminology
[**GetConceptStatuses**](MetadataEndpointsAPI.md#GetConceptStatuses) | **Get** /api/v1/metadata/{terminology}/conceptStatuses | Get all concept status values for the specified terminology
[**GetDefinitionSources**](MetadataEndpointsAPI.md#GetDefinitionSources) | **Get** /api/v1/metadata/{terminology}/definitionSources | Get all definition sources for the specified terminology
[**GetDefinitionType**](MetadataEndpointsAPI.md#GetDefinitionType) | **Get** /api/v1/metadata/{terminology}/definitionType/{codeOrName} | Get the definition type for the specified terminology and code/name.
[**GetDefinitionTypes**](MetadataEndpointsAPI.md#GetDefinitionTypes) | **Get** /api/v1/metadata/{terminology}/definitionTypes | Get all definition types (or those specified by list parameter) for the specified terminology
[**GetProperties**](MetadataEndpointsAPI.md#GetProperties) | **Get** /api/v1/metadata/{terminology}/properties | Get all properties (or those specified by list parameter) for the specified terminology
[**GetProperty**](MetadataEndpointsAPI.md#GetProperty) | **Get** /api/v1/metadata/{terminology}/property/{codeOrName} | Get the property for the specified terminology and code/name
[**GetQualifier**](MetadataEndpointsAPI.md#GetQualifier) | **Get** /api/v1/metadata/{terminology}/qualifier/{codeOrName} | Get the qualifier for the specified terminology and code/name
[**GetQualifierValues**](MetadataEndpointsAPI.md#GetQualifierValues) | **Get** /api/v1/metadata/{terminology}/qualifier/{codeOrName}/values | Get qualifier values for the specified terminology and code/name
[**GetQualifiers**](MetadataEndpointsAPI.md#GetQualifiers) | **Get** /api/v1/metadata/{terminology}/qualifiers | Get all qualifiers (properties on properties) for the specified terminology
[**GetRole**](MetadataEndpointsAPI.md#GetRole) | **Get** /api/v1/metadata/{terminology}/role/{codeOrName} | Get the role for the specified terminology and code/name
[**GetRoles**](MetadataEndpointsAPI.md#GetRoles) | **Get** /api/v1/metadata/{terminology}/roles | Get all roles (or those specified by list parameter) for the specified terminology
[**GetSourceStats**](MetadataEndpointsAPI.md#GetSourceStats) | **Get** /api/v1/metadata/{terminology}/stats/{source} | Get statistics for the source within the specified terminology.
[**GetSubset1**](MetadataEndpointsAPI.md#GetSubset1) | **Get** /api/v1/metadata/{terminology}/subset/{code} | Get the subset for the specified terminology and code.
[**GetSubsets1**](MetadataEndpointsAPI.md#GetSubsets1) | **Get** /api/v1/metadata/{terminology}/subsets | Get all subsets (or those specified by list parameter) for the specified terminology.
[**GetSynonymSources**](MetadataEndpointsAPI.md#GetSynonymSources) | **Get** /api/v1/metadata/{terminology}/synonymSources | Get all synonym sources for the specified terminology
[**GetSynonymType**](MetadataEndpointsAPI.md#GetSynonymType) | **Get** /api/v1/metadata/{terminology}/synonymType/{codeOrName} | Get the synonym type for the specified terminology and code/name
[**GetSynonymTypes**](MetadataEndpointsAPI.md#GetSynonymTypes) | **Get** /api/v1/metadata/{terminology}/synonymTypes | Get all synonym types (or those specified by list parameter) for the specified terminology
[**GetTermTypes**](MetadataEndpointsAPI.md#GetTermTypes) | **Get** /api/v1/metadata/{terminology}/termTypes | Get all term types for the specified terminology
[**GetTerminologies**](MetadataEndpointsAPI.md#GetTerminologies) | **Get** /api/v1/metadata/terminologies | Get all available terminologies
[**GetWelcomeText**](MetadataEndpointsAPI.md#GetWelcomeText) | **Get** /api/v1/metadata/{terminology}/welcomeText | Get welcome text for the specified terminology



## GetAssociation

> Concept GetAssociation(ctx, terminology, codeOrName).Include(include).Execute()

Get the association for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Association code (or name), e.g. <ul><li>'A10' or 'Has_CDRH_Parent' for <i>ncit</i></li><li>'RB' or 'has a broader relationship' for <i>ncim</i></li></ul>
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetAssociation(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetAssociation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssociation`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetAssociation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Association code (or name), e.g. &lt;ul&gt;&lt;li&gt;&#39;A10&#39; or &#39;Has_CDRH_Parent&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RB&#39; or &#39;has a broader relationship&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAssociationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetAssociations

> []Concept GetAssociations(ctx, terminology).Include(include).List(list).Execute()

Get all associations (or those specified by list parameter) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetAssociations(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetAssociations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssociations`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetAssociations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAssociationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return associations for (or leave blank for all). If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetConceptStatuses

> []string GetConceptStatuses(ctx, terminology).Execute()

Get all concept status values for the specified terminology

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
	terminology := "ncit" // string | Terminology, e.g. 'ncit'. This call is only meaningful for <i>ncit</i>.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetConceptStatuses(context.Background(), terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetConceptStatuses``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConceptStatuses`: []string
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetConceptStatuses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConceptStatusesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDefinitionSources

> []ConceptMinimal GetDefinitionSources(ctx, terminology).Execute()

Get all definition sources for the specified terminology

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetDefinitionSources(context.Background(), terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetDefinitionSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDefinitionSources`: []ConceptMinimal
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetDefinitionSources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefinitionSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ConceptMinimal**](ConceptMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDefinitionType

> Concept GetDefinitionType(ctx, terminology, codeOrName).Include(include).Execute()

Get the definition type for the specified terminology and code/name.

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
	codeOrName := "codeOrName_example" // string | Definition type code (or name), e.g.<ul><li>'P325' or 'DEFINITION' for <i>ncit</i></li><li>'DEFINITION' for <i>ncim</i></li></ul>
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetDefinitionType(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetDefinitionType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDefinitionType`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetDefinitionType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Definition type code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P325&#39; or &#39;DEFINITION&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;DEFINITION&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefinitionTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetDefinitionTypes

> []Concept GetDefinitionTypes(ctx, terminology).Include(include).List(list).Execute()

Get all definition types (or those specified by list parameter) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetDefinitionTypes(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetDefinitionTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDefinitionTypes`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetDefinitionTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefinitionTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return definition types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetProperties

> []Concept GetProperties(ctx, terminology).Include(include).List(list).Execute()

Get all properties (or those specified by list parameter) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetProperties(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetProperties``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProperties`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetProperties`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPropertiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return properties for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetProperty

> Concept GetProperty(ctx, terminology, codeOrName).Include(include).Execute()

Get the property for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Property code (or name), e.g. <ul><li>'P216' or 'BioCarta_ID' for <i>ncit</i></li><li>'BioCarta_ID' or ''BioCarta ID' for <i>ncim</i></li></ul>
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetProperty(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProperty`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetProperty`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Property code (or name), e.g. &lt;ul&gt;&lt;li&gt;&#39;P216&#39; or &#39;BioCarta_ID&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;BioCarta_ID&#39; or &#39;&#39;BioCarta ID&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPropertyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetQualifier

> Concept GetQualifier(ctx, terminology, codeOrName).Include(include).Execute()

Get the qualifier for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Qualifier code (or name), e.g.<ul><li>'P390' or 'go-source' for <i>ncit</i></li><li>'RG' or 'Relationship group' for <i>ncim</i></li></ul>
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetQualifier(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetQualifier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQualifier`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetQualifier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P390&#39; or &#39;go-source&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RG&#39; or &#39;Relationship group&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQualifierRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetQualifierValues

> []string GetQualifierValues(ctx, terminology, codeOrName).Execute()

Get qualifier values for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Qualifier code (or name), e.g.<ul><li>'P390' or 'go-source' for <i>ncit</i></li><li>'RG' or 'Relationship group' for <i>ncim</i></li></ul>

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetQualifierValues(context.Background(), terminology, codeOrName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetQualifierValues``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQualifierValues`: []string
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetQualifierValues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Qualifier code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P390&#39; or &#39;go-source&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;RG&#39; or &#39;Relationship group&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQualifierValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetQualifiers

> []Concept GetQualifiers(ctx, terminology).Include(include).List(list).Execute()

Get all qualifiers (properties on properties) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return qualifiers for (or leave blank for all) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetQualifiers(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetQualifiers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetQualifiers`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetQualifiers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetQualifiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return qualifiers for (or leave blank for all) | 

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


## GetRole

> Concept GetRole(ctx, terminology, codeOrName).Include(include).Execute()

Get the role for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Role code (or name), e.g. 'R123' or 'Chemotherapy_Regimen_Has_Component' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetRole(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRole`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; | 
**codeOrName** | **string** | Role code (or name), e.g. &#39;R123&#39; or &#39;Chemotherapy_Regimen_Has_Component&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetRoles

> []Concept GetRoles(ctx, terminology).Include(include).List(list).Execute()

Get all roles (or those specified by list parameter) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetRoles(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetRoles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoles`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetRoles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return roles for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetSourceStats

> map[string][]StatisticsEntry GetSourceStats(ctx, terminology, source).Execute()

Get statistics for the source within the specified terminology.



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
	terminology := "ncim" // string | Terminology, e.g. 'ncit'.
	source := "source_example" // string | terminology source code, e.g. 'LNC' for <i>ncim</i>.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSourceStats(context.Background(), terminology, source).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSourceStats``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourceStats`: map[string][]StatisticsEntry
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSourceStats`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;. | 
**source** | **string** | terminology source code, e.g. &#39;LNC&#39; for &lt;i&gt;ncim&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourceStatsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**map[string][]StatisticsEntry**](array.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSubset1

> Concept GetSubset1(ctx, terminology, code).Include(include).Execute()

Get the subset for the specified terminology and code.



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
	terminology := "ncit" // string | Terminology, e.g. 'ncit'.
	code := "code_example" // string | Subset code, e.g. 'C116978' for <i>ncit</i>. This call is only meaningful for <i>ncit</i>.
	include := "summary" // string | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSubset1(context.Background(), terminology, code).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSubset1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubset1`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSubset1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;. | 
**code** | **string** | Subset code, e.g. &#39;C116978&#39; for &lt;i&gt;ncit&lt;/i&gt;. This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubset1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data tc return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetSubsets1

> []Concept GetSubsets1(ctx, terminology).Include(include).List(list).Execute()

Get all subsets (or those specified by list parameter) for the specified terminology.



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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSubsets1(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSubsets1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSubsets1`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSubsets1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39;.  This call is only meaningful for &lt;i&gt;ncit&lt;/i&gt;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSubsets1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return subsets for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetSynonymSources

> []ConceptMinimal GetSynonymSources(ctx, terminology).Execute()

Get all synonym sources for the specified terminology

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSynonymSources(context.Background(), terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSynonymSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSynonymSources`: []ConceptMinimal
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSynonymSources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSynonymSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ConceptMinimal**](ConceptMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSynonymType

> Concept GetSynonymType(ctx, terminology, codeOrName).Include(include).Execute()

Get the synonym type for the specified terminology and code/name

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
	codeOrName := "codeOrName_example" // string | Synonym type code (or name), e.g.<ul><li>'P90' or 'FULL_SYN' for <i>ncit</i></li><li>'Preferred_Name' or 'Preferred name' for <i>ncim</i></li></ul>
	include := "summary" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSynonymType(context.Background(), terminology, codeOrName).Include(include).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSynonymType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSynonymType`: Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSynonymType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 
**codeOrName** | **string** | Synonym type code (or name), e.g.&lt;ul&gt;&lt;li&gt;&#39;P90&#39; or &#39;FULL_SYN&#39; for &lt;i&gt;ncit&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&#39;Preferred_Name&#39; or &#39;Preferred name&#39; for &lt;i&gt;ncim&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSynonymTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 

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


## GetSynonymTypes

> []Concept GetSynonymTypes(ctx, terminology).Include(include).List(list).Execute()

Get all synonym types (or those specified by list parameter) for the specified terminology

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
	include := "minimal" // string | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. <a href='https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md' target='_blank'>See here for detailed information</a>. (optional)
	list := "list_example" // string | List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetSynonymTypes(context.Background(), terminology).Include(include).List(list).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetSynonymTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSynonymTypes`: []Concept
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetSynonymTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSynonymTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **include** | **string** | Indicator of how much data to return. Comma-separated list of any of the following values: minimal, summary, full, associations, children, definitions, disjointWith, inverseAssociations, inverseRoles, maps, parents, properties, roles, synonyms. &lt;a href&#x3D;&#39;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/INCLUDE.md&#39; target&#x3D;&#39;_blank&#39;&gt;See here for detailed information&lt;/a&gt;. | 
 **list** | **string** | List of codes or labels to return synonym types for (or leave blank for all).  If invalid values are passed, the result will simply include no entries for those invalid values. | 

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


## GetTermTypes

> []ConceptMinimal GetTermTypes(ctx, terminology).Execute()

Get all term types for the specified terminology

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetTermTypes(context.Background(), terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetTermTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTermTypes`: []ConceptMinimal
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetTermTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTermTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ConceptMinimal**](ConceptMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTerminologies

> []Terminology GetTerminologies(ctx).Latest(latest).Tag(tag).Terminology(terminology).Execute()

Get all available terminologies

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
	latest := true // bool | Return terminologies with matching <i>latest</i> value. e.g. true or false (optional)
	tag := "tag_example" // string | Return terminologies with matching tag. e.g. 'monthly' or 'weekly' for <i>ncit</i> (optional)
	terminology := "terminology_example" // string | Return entries with matching terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetTerminologies(context.Background()).Latest(latest).Tag(tag).Terminology(terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetTerminologies``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTerminologies`: []Terminology
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetTerminologies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTerminologiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latest** | **bool** | Return terminologies with matching &lt;i&gt;latest&lt;/i&gt; value. e.g. true or false | 
 **tag** | **string** | Return terminologies with matching tag. e.g. &#39;monthly&#39; or &#39;weekly&#39; for &lt;i&gt;ncit&lt;/i&gt; | 
 **terminology** | **string** | Return entries with matching terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Return type

[**[]Terminology**](Terminology.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWelcomeText

> string GetWelcomeText(ctx, terminology).Execute()

Get welcome text for the specified terminology

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetadataEndpointsAPI.GetWelcomeText(context.Background(), terminology).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetadataEndpointsAPI.GetWelcomeText``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWelcomeText`: string
	fmt.Fprintf(os.Stdout, "Response from `MetadataEndpointsAPI.GetWelcomeText`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**terminology** | **string** | Terminology, e.g. &#39;ncit&#39; or &#39;ncim&#39; (&lt;a href&#x3D;\&quot;https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\&quot;&gt;See here for complete list&lt;/a&gt;) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWelcomeTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

