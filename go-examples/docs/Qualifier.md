# Qualifier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Type** | Pointer to **string** | Qualifier type | [optional] 
**Value** | Pointer to **string** | Qualifier value | [optional] 

## Methods

### NewQualifier

`func NewQualifier() *Qualifier`

NewQualifier instantiates a new Qualifier object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQualifierWithDefaults

`func NewQualifierWithDefaults() *Qualifier`

NewQualifierWithDefaults instantiates a new Qualifier object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Qualifier) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Qualifier) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Qualifier) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Qualifier) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Qualifier) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Qualifier) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Qualifier) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Qualifier) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetType

`func (o *Qualifier) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Qualifier) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Qualifier) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Qualifier) HasType() bool`

HasType returns a boolean if a field has been set.

### GetValue

`func (o *Qualifier) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Qualifier) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Qualifier) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Qualifier) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


