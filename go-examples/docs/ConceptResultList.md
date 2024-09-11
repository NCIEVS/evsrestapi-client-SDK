# ConceptResultList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Total** | Pointer to **int64** | Total nubmer of results (if paging is not considered) | [optional] 
**TimeTaken** | Pointer to **int64** | Total time taken to compute the result | [optional] 
**Parameters** | Pointer to [**SearchCriteria**](SearchCriteria.md) |  | [optional] 
**Concepts** | Pointer to [**[]Concept**](Concept.md) | List of concepts | [optional] 

## Methods

### NewConceptResultList

`func NewConceptResultList() *ConceptResultList`

NewConceptResultList instantiates a new ConceptResultList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConceptResultListWithDefaults

`func NewConceptResultListWithDefaults() *ConceptResultList`

NewConceptResultListWithDefaults instantiates a new ConceptResultList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *ConceptResultList) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ConceptResultList) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ConceptResultList) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ConceptResultList) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *ConceptResultList) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *ConceptResultList) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *ConceptResultList) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *ConceptResultList) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTotal

`func (o *ConceptResultList) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ConceptResultList) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ConceptResultList) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ConceptResultList) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTimeTaken

`func (o *ConceptResultList) GetTimeTaken() int64`

GetTimeTaken returns the TimeTaken field if non-nil, zero value otherwise.

### GetTimeTakenOk

`func (o *ConceptResultList) GetTimeTakenOk() (*int64, bool)`

GetTimeTakenOk returns a tuple with the TimeTaken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeTaken

`func (o *ConceptResultList) SetTimeTaken(v int64)`

SetTimeTaken sets TimeTaken field to given value.

### HasTimeTaken

`func (o *ConceptResultList) HasTimeTaken() bool`

HasTimeTaken returns a boolean if a field has been set.

### GetParameters

`func (o *ConceptResultList) GetParameters() SearchCriteria`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ConceptResultList) GetParametersOk() (*SearchCriteria, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ConceptResultList) SetParameters(v SearchCriteria)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ConceptResultList) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetConcepts

`func (o *ConceptResultList) GetConcepts() []Concept`

GetConcepts returns the Concepts field if non-nil, zero value otherwise.

### GetConceptsOk

`func (o *ConceptResultList) GetConceptsOk() (*[]Concept, bool)`

GetConceptsOk returns a tuple with the Concepts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConcepts

`func (o *ConceptResultList) SetConcepts(v []Concept)`

SetConcepts sets Concepts field to given value.

### HasConcepts

`func (o *ConceptResultList) HasConcepts() bool`

HasConcepts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


