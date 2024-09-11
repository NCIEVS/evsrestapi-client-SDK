# ConceptMinimal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Code** | Pointer to **string** | Code (unique identifier) for this meaning | [optional] 
**Name** | Pointer to **string** | Preferred name for the code | [optional] 
**Terminology** | Pointer to **string** | Terminology abbreviation, e.g. &#39;nci&#39; | [optional] 
**Version** | Pointer to **string** | Terminology version, e.g. &#39;23.11d&#39; | [optional] 
**Level** | Pointer to **int32** | Level of depth in a hierarchy (when this object is used to represent an element in a path) | [optional] 

## Methods

### NewConceptMinimal

`func NewConceptMinimal() *ConceptMinimal`

NewConceptMinimal instantiates a new ConceptMinimal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConceptMinimalWithDefaults

`func NewConceptMinimalWithDefaults() *ConceptMinimal`

NewConceptMinimalWithDefaults instantiates a new ConceptMinimal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *ConceptMinimal) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ConceptMinimal) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ConceptMinimal) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ConceptMinimal) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *ConceptMinimal) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *ConceptMinimal) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *ConceptMinimal) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *ConceptMinimal) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetCode

`func (o *ConceptMinimal) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConceptMinimal) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConceptMinimal) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConceptMinimal) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetName

`func (o *ConceptMinimal) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConceptMinimal) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConceptMinimal) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConceptMinimal) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTerminology

`func (o *ConceptMinimal) GetTerminology() string`

GetTerminology returns the Terminology field if non-nil, zero value otherwise.

### GetTerminologyOk

`func (o *ConceptMinimal) GetTerminologyOk() (*string, bool)`

GetTerminologyOk returns a tuple with the Terminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminology

`func (o *ConceptMinimal) SetTerminology(v string)`

SetTerminology sets Terminology field to given value.

### HasTerminology

`func (o *ConceptMinimal) HasTerminology() bool`

HasTerminology returns a boolean if a field has been set.

### GetVersion

`func (o *ConceptMinimal) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ConceptMinimal) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ConceptMinimal) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ConceptMinimal) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetLevel

`func (o *ConceptMinimal) GetLevel() int32`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *ConceptMinimal) GetLevelOk() (*int32, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *ConceptMinimal) SetLevel(v int32)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *ConceptMinimal) HasLevel() bool`

HasLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


