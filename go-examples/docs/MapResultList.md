# MapResultList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Total** | Pointer to **int64** | Total nubmer of results (if paging is not considered) | [optional] 
**TimeTaken** | Pointer to **int64** | Total time taken to compute the result | [optional] 
**Parameters** | Pointer to [**SearchCriteria**](SearchCriteria.md) |  | [optional] 
**Results** | Pointer to **[]map[string]string** | Search criteria used to arrive at this result | [optional] 

## Methods

### NewMapResultList

`func NewMapResultList() *MapResultList`

NewMapResultList instantiates a new MapResultList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMapResultListWithDefaults

`func NewMapResultListWithDefaults() *MapResultList`

NewMapResultListWithDefaults instantiates a new MapResultList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *MapResultList) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *MapResultList) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *MapResultList) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *MapResultList) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *MapResultList) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *MapResultList) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *MapResultList) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *MapResultList) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTotal

`func (o *MapResultList) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *MapResultList) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *MapResultList) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *MapResultList) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTimeTaken

`func (o *MapResultList) GetTimeTaken() int64`

GetTimeTaken returns the TimeTaken field if non-nil, zero value otherwise.

### GetTimeTakenOk

`func (o *MapResultList) GetTimeTakenOk() (*int64, bool)`

GetTimeTakenOk returns a tuple with the TimeTaken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeTaken

`func (o *MapResultList) SetTimeTaken(v int64)`

SetTimeTaken sets TimeTaken field to given value.

### HasTimeTaken

`func (o *MapResultList) HasTimeTaken() bool`

HasTimeTaken returns a boolean if a field has been set.

### GetParameters

`func (o *MapResultList) GetParameters() SearchCriteria`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *MapResultList) GetParametersOk() (*SearchCriteria, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *MapResultList) SetParameters(v SearchCriteria)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *MapResultList) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetResults

`func (o *MapResultList) GetResults() []map[string]string`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *MapResultList) GetResultsOk() (*[]map[string]string, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *MapResultList) SetResults(v []map[string]string)`

SetResults sets Results field to given value.

### HasResults

`func (o *MapResultList) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


