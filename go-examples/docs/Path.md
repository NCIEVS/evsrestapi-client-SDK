# Path

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Direction** | Pointer to **int32** | Direction of the map (1 means node-to-root, -1 means root-to-node) | [optional] 
**Concepts** | Pointer to [**[]ConceptMinimal**](ConceptMinimal.md) | Concepts on the path | [optional] 

## Methods

### NewPath

`func NewPath() *Path`

NewPath instantiates a new Path object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPathWithDefaults

`func NewPathWithDefaults() *Path`

NewPathWithDefaults instantiates a new Path object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Path) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Path) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Path) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Path) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Path) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Path) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Path) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Path) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetDirection

`func (o *Path) GetDirection() int32`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *Path) GetDirectionOk() (*int32, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *Path) SetDirection(v int32)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *Path) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetConcepts

`func (o *Path) GetConcepts() []ConceptMinimal`

GetConcepts returns the Concepts field if non-nil, zero value otherwise.

### GetConceptsOk

`func (o *Path) GetConceptsOk() (*[]ConceptMinimal, bool)`

GetConceptsOk returns a tuple with the Concepts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConcepts

`func (o *Path) SetConcepts(v []ConceptMinimal)`

SetConcepts sets Concepts field to given value.

### HasConcepts

`func (o *Path) HasConcepts() bool`

HasConcepts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


