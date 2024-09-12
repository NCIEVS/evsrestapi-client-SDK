# Role

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

### NewRole

`func NewRole() *Role`

NewRole instantiates a new Role object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleWithDefaults

`func NewRoleWithDefaults() *Role`

NewRoleWithDefaults instantiates a new Role object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Role) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Role) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Role) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Role) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Role) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Role) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Role) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Role) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetType

`func (o *Role) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Role) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Role) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Role) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRelatedCode

`func (o *Role) GetRelatedCode() string`

GetRelatedCode returns the RelatedCode field if non-nil, zero value otherwise.

### GetRelatedCodeOk

`func (o *Role) GetRelatedCodeOk() (*string, bool)`

GetRelatedCodeOk returns a tuple with the RelatedCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedCode

`func (o *Role) SetRelatedCode(v string)`

SetRelatedCode sets RelatedCode field to given value.

### HasRelatedCode

`func (o *Role) HasRelatedCode() bool`

HasRelatedCode returns a boolean if a field has been set.

### GetRelatedName

`func (o *Role) GetRelatedName() string`

GetRelatedName returns the RelatedName field if non-nil, zero value otherwise.

### GetRelatedNameOk

`func (o *Role) GetRelatedNameOk() (*string, bool)`

GetRelatedNameOk returns a tuple with the RelatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedName

`func (o *Role) SetRelatedName(v string)`

SetRelatedName sets RelatedName field to given value.

### HasRelatedName

`func (o *Role) HasRelatedName() bool`

HasRelatedName returns a boolean if a field has been set.

### GetSource

`func (o *Role) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Role) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Role) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Role) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetHighlight

`func (o *Role) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *Role) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *Role) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *Role) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetQualifiers

`func (o *Role) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *Role) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *Role) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *Role) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

