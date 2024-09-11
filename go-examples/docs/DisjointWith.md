# DisjointWith

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Type** | Pointer to **string** | Relationship type | [optional] 
**RelatedCode** | Pointer to **string** | Related code (the code on the other side of the relationship) | [optional] 
**RelatedName** | Pointer to **string** | Preferred name of the related code | [optional] 
**Source** | Pointer to **string** | Relationship source | [optional] 
**Highlight** | Pointer to **string** | Used by search calls to provide information for highlighting a view of results | [optional] 
**Qualifiers** | Pointer to [**[]Qualifier**](Qualifier.md) | Type/value qualifiers on the relationship | [optional] 

## Methods

### NewDisjointWith

`func NewDisjointWith() *DisjointWith`

NewDisjointWith instantiates a new DisjointWith object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisjointWithWithDefaults

`func NewDisjointWithWithDefaults() *DisjointWith`

NewDisjointWithWithDefaults instantiates a new DisjointWith object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *DisjointWith) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *DisjointWith) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *DisjointWith) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *DisjointWith) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *DisjointWith) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *DisjointWith) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *DisjointWith) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *DisjointWith) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetType

`func (o *DisjointWith) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DisjointWith) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DisjointWith) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DisjointWith) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRelatedCode

`func (o *DisjointWith) GetRelatedCode() string`

GetRelatedCode returns the RelatedCode field if non-nil, zero value otherwise.

### GetRelatedCodeOk

`func (o *DisjointWith) GetRelatedCodeOk() (*string, bool)`

GetRelatedCodeOk returns a tuple with the RelatedCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedCode

`func (o *DisjointWith) SetRelatedCode(v string)`

SetRelatedCode sets RelatedCode field to given value.

### HasRelatedCode

`func (o *DisjointWith) HasRelatedCode() bool`

HasRelatedCode returns a boolean if a field has been set.

### GetRelatedName

`func (o *DisjointWith) GetRelatedName() string`

GetRelatedName returns the RelatedName field if non-nil, zero value otherwise.

### GetRelatedNameOk

`func (o *DisjointWith) GetRelatedNameOk() (*string, bool)`

GetRelatedNameOk returns a tuple with the RelatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedName

`func (o *DisjointWith) SetRelatedName(v string)`

SetRelatedName sets RelatedName field to given value.

### HasRelatedName

`func (o *DisjointWith) HasRelatedName() bool`

HasRelatedName returns a boolean if a field has been set.

### GetSource

`func (o *DisjointWith) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DisjointWith) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DisjointWith) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *DisjointWith) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetHighlight

`func (o *DisjointWith) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *DisjointWith) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *DisjointWith) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *DisjointWith) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetQualifiers

`func (o *DisjointWith) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *DisjointWith) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *DisjointWith) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *DisjointWith) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


