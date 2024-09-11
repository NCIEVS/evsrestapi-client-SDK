# ConceptMapResultList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Total** | Pointer to **int64** | Total nubmer of results (if paging is not considered) | [optional] 
**TimeTaken** | Pointer to **int64** | Total time taken to compute the result | [optional] 
**Parameters** | Pointer to [**SearchCriteria**](SearchCriteria.md) |  | [optional] 
**Maps** | Pointer to [**[]ConceptMap**](ConceptMap.md) | List of maps | [optional] 

## Methods

### NewConceptMapResultList

`func NewConceptMapResultList() *ConceptMapResultList`

NewConceptMapResultList instantiates a new ConceptMapResultList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConceptMapResultListWithDefaults

`func NewConceptMapResultListWithDefaults() *ConceptMapResultList`

NewConceptMapResultListWithDefaults instantiates a new ConceptMapResultList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *ConceptMapResultList) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ConceptMapResultList) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ConceptMapResultList) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ConceptMapResultList) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *ConceptMapResultList) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *ConceptMapResultList) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *ConceptMapResultList) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *ConceptMapResultList) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTotal

`func (o *ConceptMapResultList) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ConceptMapResultList) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ConceptMapResultList) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ConceptMapResultList) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTimeTaken

`func (o *ConceptMapResultList) GetTimeTaken() int64`

GetTimeTaken returns the TimeTaken field if non-nil, zero value otherwise.

### GetTimeTakenOk

`func (o *ConceptMapResultList) GetTimeTakenOk() (*int64, bool)`

GetTimeTakenOk returns a tuple with the TimeTaken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeTaken

`func (o *ConceptMapResultList) SetTimeTaken(v int64)`

SetTimeTaken sets TimeTaken field to given value.

### HasTimeTaken

`func (o *ConceptMapResultList) HasTimeTaken() bool`

HasTimeTaken returns a boolean if a field has been set.

### GetParameters

`func (o *ConceptMapResultList) GetParameters() SearchCriteria`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ConceptMapResultList) GetParametersOk() (*SearchCriteria, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ConceptMapResultList) SetParameters(v SearchCriteria)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ConceptMapResultList) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetMaps

`func (o *ConceptMapResultList) GetMaps() []ConceptMap`

GetMaps returns the Maps field if non-nil, zero value otherwise.

### GetMapsOk

`func (o *ConceptMapResultList) GetMapsOk() (*[]ConceptMap, bool)`

GetMapsOk returns a tuple with the Maps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaps

`func (o *ConceptMapResultList) SetMaps(v []ConceptMap)`

SetMaps sets Maps field to given value.

### HasMaps

`func (o *ConceptMapResultList) HasMaps() bool`

HasMaps returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


