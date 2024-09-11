# Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Definition** | Pointer to **string** | Text definition value | [optional] 
**Highlight** | Pointer to **string** | Used by search calls to provide information for highlighting a view of results | [optional] 
**Type** | Pointer to **string** | Definition type | [optional] 
**Source** | Pointer to **string** | Definition source | [optional] 
**Qualifiers** | Pointer to [**[]Qualifier**](Qualifier.md) | Type/value qualifiers on the definition | [optional] 

## Methods

### NewDefinition

`func NewDefinition() *Definition`

NewDefinition instantiates a new Definition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefinitionWithDefaults

`func NewDefinitionWithDefaults() *Definition`

NewDefinitionWithDefaults instantiates a new Definition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Definition) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Definition) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Definition) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Definition) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Definition) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Definition) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Definition) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Definition) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetDefinition

`func (o *Definition) GetDefinition() string`

GetDefinition returns the Definition field if non-nil, zero value otherwise.

### GetDefinitionOk

`func (o *Definition) GetDefinitionOk() (*string, bool)`

GetDefinitionOk returns a tuple with the Definition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinition

`func (o *Definition) SetDefinition(v string)`

SetDefinition sets Definition field to given value.

### HasDefinition

`func (o *Definition) HasDefinition() bool`

HasDefinition returns a boolean if a field has been set.

### GetHighlight

`func (o *Definition) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *Definition) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *Definition) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *Definition) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetType

`func (o *Definition) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Definition) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Definition) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Definition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *Definition) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Definition) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Definition) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Definition) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetQualifiers

`func (o *Definition) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *Definition) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *Definition) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *Definition) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


