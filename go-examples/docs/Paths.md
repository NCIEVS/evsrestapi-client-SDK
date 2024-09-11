# Paths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Paths** | Pointer to [**[]Path**](Path.md) | List of paths | [optional] 

## Methods

### NewPaths

`func NewPaths() *Paths`

NewPaths instantiates a new Paths object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPathsWithDefaults

`func NewPathsWithDefaults() *Paths`

NewPathsWithDefaults instantiates a new Paths object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Paths) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Paths) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Paths) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Paths) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Paths) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Paths) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Paths) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Paths) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetPaths

`func (o *Paths) GetPaths() []Path`

GetPaths returns the Paths field if non-nil, zero value otherwise.

### GetPathsOk

`func (o *Paths) GetPathsOk() (*[]Path, bool)`

GetPathsOk returns a tuple with the Paths field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaths

`func (o *Paths) SetPaths(v []Path)`

SetPaths sets Paths field to given value.

### HasPaths

`func (o *Paths) HasPaths() bool`

HasPaths returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


