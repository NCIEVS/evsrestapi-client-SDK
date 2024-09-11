# AssociationEntryResultList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Total** | Pointer to **int64** | Total nubmer of results (if paging is not considered) | [optional] 
**TimeTaken** | Pointer to **int64** | Total time taken to compute the result | [optional] 
**Parameters** | Pointer to [**SearchCriteria**](SearchCriteria.md) |  | [optional] 
**AssociationEntries** | Pointer to [**[]AssociationEntry**](AssociationEntry.md) |  | [optional] 

## Methods

### NewAssociationEntryResultList

`func NewAssociationEntryResultList() *AssociationEntryResultList`

NewAssociationEntryResultList instantiates a new AssociationEntryResultList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociationEntryResultListWithDefaults

`func NewAssociationEntryResultListWithDefaults() *AssociationEntryResultList`

NewAssociationEntryResultListWithDefaults instantiates a new AssociationEntryResultList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *AssociationEntryResultList) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *AssociationEntryResultList) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *AssociationEntryResultList) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *AssociationEntryResultList) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *AssociationEntryResultList) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *AssociationEntryResultList) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *AssociationEntryResultList) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *AssociationEntryResultList) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTotal

`func (o *AssociationEntryResultList) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *AssociationEntryResultList) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *AssociationEntryResultList) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *AssociationEntryResultList) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTimeTaken

`func (o *AssociationEntryResultList) GetTimeTaken() int64`

GetTimeTaken returns the TimeTaken field if non-nil, zero value otherwise.

### GetTimeTakenOk

`func (o *AssociationEntryResultList) GetTimeTakenOk() (*int64, bool)`

GetTimeTakenOk returns a tuple with the TimeTaken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeTaken

`func (o *AssociationEntryResultList) SetTimeTaken(v int64)`

SetTimeTaken sets TimeTaken field to given value.

### HasTimeTaken

`func (o *AssociationEntryResultList) HasTimeTaken() bool`

HasTimeTaken returns a boolean if a field has been set.

### GetParameters

`func (o *AssociationEntryResultList) GetParameters() SearchCriteria`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *AssociationEntryResultList) GetParametersOk() (*SearchCriteria, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *AssociationEntryResultList) SetParameters(v SearchCriteria)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *AssociationEntryResultList) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetAssociationEntries

`func (o *AssociationEntryResultList) GetAssociationEntries() []AssociationEntry`

GetAssociationEntries returns the AssociationEntries field if non-nil, zero value otherwise.

### GetAssociationEntriesOk

`func (o *AssociationEntryResultList) GetAssociationEntriesOk() (*[]AssociationEntry, bool)`

GetAssociationEntriesOk returns a tuple with the AssociationEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationEntries

`func (o *AssociationEntryResultList) SetAssociationEntries(v []AssociationEntry)`

SetAssociationEntries sets AssociationEntries field to given value.

### HasAssociationEntries

`func (o *AssociationEntryResultList) HasAssociationEntries() bool`

HasAssociationEntries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


