# SearchCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Term** | Pointer to **string** | Search term, e.g. &#39;heart&#39;, or &#39;C3224&#39; | [optional] 
**Type** | Pointer to **string** | The match type, one of: contains, match, startsWith, phrase, AND, OR, fuzzy | [optional] 
**Include** | Pointer to **string** | Include parameter value, e.g. &#39;minimal&#39;, &#39;summary&#39;, &#39;synonyms,properties,children&#39; | [optional] 
**Sort** | Pointer to **string** | Sort field | [optional] 
**Ascending** | Pointer to **bool** | Indicates whether sort is ascending (true), descending (false), or not specified (null) | [optional] 
**FromRecord** | Pointer to **int32** | Start index of the search results | [optional] 
**PageSize** | Pointer to **int32** | Max number of results to return | [optional] 
**ConceptStatus** | Pointer to **[]string** | Comma-separated list of concept status values to restrict search results by | [optional] 
**Property** | Pointer to **[]string** | Comma-separated list of properties to restrict search results by | [optional] 
**Value** | Pointer to **string** | A property value to restrict search results by | [optional] 
**SynonymSource** | Pointer to **[]string** | Comma-separated list of synonym sources to restrict search results by | [optional] 
**SynonymType** | Pointer to **[]string** | Comma-separated list of synonym types to restrict search results by | [optional] 
**DefinitionSource** | Pointer to **[]string** | Comma-separated list of definition sources to restrict search results by | [optional] 
**DefinitionType** | Pointer to **[]string** | Comma-separated list of definition types to restrict search results by | [optional] 
**SynonymTermType** | Pointer to **[]string** | Comma-separated list of synonym term types to restrict search results by | [optional] 
**Subset** | Pointer to **[]string** | Comma-separated list of subsets to restrict search results by, e.g. &#39;C157225&#39; | [optional] 
**CodeList** | Pointer to **[]string** | Comma-separated list of concept codes to restrict search results by, e.g. &#39;C157225&#39; | [optional] 
**Terminology** | Pointer to **[]string** | Comma-separated list of terminologies to search | [optional] 
**Sparql** | Pointer to **string** | SPARQL query, only available as an output parameter | [optional] 

## Methods

### NewSearchCriteria

`func NewSearchCriteria() *SearchCriteria`

NewSearchCriteria instantiates a new SearchCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaWithDefaults

`func NewSearchCriteriaWithDefaults() *SearchCriteria`

NewSearchCriteriaWithDefaults instantiates a new SearchCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *SearchCriteria) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *SearchCriteria) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *SearchCriteria) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *SearchCriteria) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *SearchCriteria) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *SearchCriteria) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *SearchCriteria) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *SearchCriteria) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTerm

`func (o *SearchCriteria) GetTerm() string`

GetTerm returns the Term field if non-nil, zero value otherwise.

### GetTermOk

`func (o *SearchCriteria) GetTermOk() (*string, bool)`

GetTermOk returns a tuple with the Term field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerm

`func (o *SearchCriteria) SetTerm(v string)`

SetTerm sets Term field to given value.

### HasTerm

`func (o *SearchCriteria) HasTerm() bool`

HasTerm returns a boolean if a field has been set.

### GetType

`func (o *SearchCriteria) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SearchCriteria) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SearchCriteria) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SearchCriteria) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInclude

`func (o *SearchCriteria) GetInclude() string`

GetInclude returns the Include field if non-nil, zero value otherwise.

### GetIncludeOk

`func (o *SearchCriteria) GetIncludeOk() (*string, bool)`

GetIncludeOk returns a tuple with the Include field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclude

`func (o *SearchCriteria) SetInclude(v string)`

SetInclude sets Include field to given value.

### HasInclude

`func (o *SearchCriteria) HasInclude() bool`

HasInclude returns a boolean if a field has been set.

### GetSort

`func (o *SearchCriteria) GetSort() string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *SearchCriteria) GetSortOk() (*string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *SearchCriteria) SetSort(v string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *SearchCriteria) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetAscending

`func (o *SearchCriteria) GetAscending() bool`

GetAscending returns the Ascending field if non-nil, zero value otherwise.

### GetAscendingOk

`func (o *SearchCriteria) GetAscendingOk() (*bool, bool)`

GetAscendingOk returns a tuple with the Ascending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAscending

`func (o *SearchCriteria) SetAscending(v bool)`

SetAscending sets Ascending field to given value.

### HasAscending

`func (o *SearchCriteria) HasAscending() bool`

HasAscending returns a boolean if a field has been set.

### GetFromRecord

`func (o *SearchCriteria) GetFromRecord() int32`

GetFromRecord returns the FromRecord field if non-nil, zero value otherwise.

### GetFromRecordOk

`func (o *SearchCriteria) GetFromRecordOk() (*int32, bool)`

GetFromRecordOk returns a tuple with the FromRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRecord

`func (o *SearchCriteria) SetFromRecord(v int32)`

SetFromRecord sets FromRecord field to given value.

### HasFromRecord

`func (o *SearchCriteria) HasFromRecord() bool`

HasFromRecord returns a boolean if a field has been set.

### GetPageSize

`func (o *SearchCriteria) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *SearchCriteria) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *SearchCriteria) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *SearchCriteria) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetConceptStatus

`func (o *SearchCriteria) GetConceptStatus() []string`

GetConceptStatus returns the ConceptStatus field if non-nil, zero value otherwise.

### GetConceptStatusOk

`func (o *SearchCriteria) GetConceptStatusOk() (*[]string, bool)`

GetConceptStatusOk returns a tuple with the ConceptStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConceptStatus

`func (o *SearchCriteria) SetConceptStatus(v []string)`

SetConceptStatus sets ConceptStatus field to given value.

### HasConceptStatus

`func (o *SearchCriteria) HasConceptStatus() bool`

HasConceptStatus returns a boolean if a field has been set.

### GetProperty

`func (o *SearchCriteria) GetProperty() []string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *SearchCriteria) GetPropertyOk() (*[]string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *SearchCriteria) SetProperty(v []string)`

SetProperty sets Property field to given value.

### HasProperty

`func (o *SearchCriteria) HasProperty() bool`

HasProperty returns a boolean if a field has been set.

### GetValue

`func (o *SearchCriteria) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SearchCriteria) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SearchCriteria) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SearchCriteria) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSynonymSource

`func (o *SearchCriteria) GetSynonymSource() []string`

GetSynonymSource returns the SynonymSource field if non-nil, zero value otherwise.

### GetSynonymSourceOk

`func (o *SearchCriteria) GetSynonymSourceOk() (*[]string, bool)`

GetSynonymSourceOk returns a tuple with the SynonymSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynonymSource

`func (o *SearchCriteria) SetSynonymSource(v []string)`

SetSynonymSource sets SynonymSource field to given value.

### HasSynonymSource

`func (o *SearchCriteria) HasSynonymSource() bool`

HasSynonymSource returns a boolean if a field has been set.

### GetSynonymType

`func (o *SearchCriteria) GetSynonymType() []string`

GetSynonymType returns the SynonymType field if non-nil, zero value otherwise.

### GetSynonymTypeOk

`func (o *SearchCriteria) GetSynonymTypeOk() (*[]string, bool)`

GetSynonymTypeOk returns a tuple with the SynonymType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynonymType

`func (o *SearchCriteria) SetSynonymType(v []string)`

SetSynonymType sets SynonymType field to given value.

### HasSynonymType

`func (o *SearchCriteria) HasSynonymType() bool`

HasSynonymType returns a boolean if a field has been set.

### GetDefinitionSource

`func (o *SearchCriteria) GetDefinitionSource() []string`

GetDefinitionSource returns the DefinitionSource field if non-nil, zero value otherwise.

### GetDefinitionSourceOk

`func (o *SearchCriteria) GetDefinitionSourceOk() (*[]string, bool)`

GetDefinitionSourceOk returns a tuple with the DefinitionSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionSource

`func (o *SearchCriteria) SetDefinitionSource(v []string)`

SetDefinitionSource sets DefinitionSource field to given value.

### HasDefinitionSource

`func (o *SearchCriteria) HasDefinitionSource() bool`

HasDefinitionSource returns a boolean if a field has been set.

### GetDefinitionType

`func (o *SearchCriteria) GetDefinitionType() []string`

GetDefinitionType returns the DefinitionType field if non-nil, zero value otherwise.

### GetDefinitionTypeOk

`func (o *SearchCriteria) GetDefinitionTypeOk() (*[]string, bool)`

GetDefinitionTypeOk returns a tuple with the DefinitionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionType

`func (o *SearchCriteria) SetDefinitionType(v []string)`

SetDefinitionType sets DefinitionType field to given value.

### HasDefinitionType

`func (o *SearchCriteria) HasDefinitionType() bool`

HasDefinitionType returns a boolean if a field has been set.

### GetSynonymTermType

`func (o *SearchCriteria) GetSynonymTermType() []string`

GetSynonymTermType returns the SynonymTermType field if non-nil, zero value otherwise.

### GetSynonymTermTypeOk

`func (o *SearchCriteria) GetSynonymTermTypeOk() (*[]string, bool)`

GetSynonymTermTypeOk returns a tuple with the SynonymTermType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynonymTermType

`func (o *SearchCriteria) SetSynonymTermType(v []string)`

SetSynonymTermType sets SynonymTermType field to given value.

### HasSynonymTermType

`func (o *SearchCriteria) HasSynonymTermType() bool`

HasSynonymTermType returns a boolean if a field has been set.

### GetSubset

`func (o *SearchCriteria) GetSubset() []string`

GetSubset returns the Subset field if non-nil, zero value otherwise.

### GetSubsetOk

`func (o *SearchCriteria) GetSubsetOk() (*[]string, bool)`

GetSubsetOk returns a tuple with the Subset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubset

`func (o *SearchCriteria) SetSubset(v []string)`

SetSubset sets Subset field to given value.

### HasSubset

`func (o *SearchCriteria) HasSubset() bool`

HasSubset returns a boolean if a field has been set.

### GetCodeList

`func (o *SearchCriteria) GetCodeList() []string`

GetCodeList returns the CodeList field if non-nil, zero value otherwise.

### GetCodeListOk

`func (o *SearchCriteria) GetCodeListOk() (*[]string, bool)`

GetCodeListOk returns a tuple with the CodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeList

`func (o *SearchCriteria) SetCodeList(v []string)`

SetCodeList sets CodeList field to given value.

### HasCodeList

`func (o *SearchCriteria) HasCodeList() bool`

HasCodeList returns a boolean if a field has been set.

### GetTerminology

`func (o *SearchCriteria) GetTerminology() []string`

GetTerminology returns the Terminology field if non-nil, zero value otherwise.

### GetTerminologyOk

`func (o *SearchCriteria) GetTerminologyOk() (*[]string, bool)`

GetTerminologyOk returns a tuple with the Terminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminology

`func (o *SearchCriteria) SetTerminology(v []string)`

SetTerminology sets Terminology field to given value.

### HasTerminology

`func (o *SearchCriteria) HasTerminology() bool`

HasTerminology returns a boolean if a field has been set.

### GetSparql

`func (o *SearchCriteria) GetSparql() string`

GetSparql returns the Sparql field if non-nil, zero value otherwise.

### GetSparqlOk

`func (o *SearchCriteria) GetSparqlOk() (*string, bool)`

GetSparqlOk returns a tuple with the Sparql field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSparql

`func (o *SearchCriteria) SetSparql(v string)`

SetSparql sets Sparql field to given value.

### HasSparql

`func (o *SearchCriteria) HasSparql() bool`

HasSparql returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


