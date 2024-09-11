# Synonym

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Name** | Pointer to **string** | Name for a concept | [optional] 
**Highlight** | Pointer to **string** | Used by search calls to provide information for highlighting a view of results | [optional] 
**TermType** | Pointer to **string** | Synonym term type | [optional] 
**Type** | Pointer to **string** | Synonym type | [optional] 
**Source** | Pointer to **string** | Synonym source | [optional] 
**Code** | Pointer to **string** | Code of the synonym, used in particular for Metathesaurus data where the source of the synonym is not the terminology itself | [optional] 
**SubSource** | Pointer to **string** | Synonym sub-source | [optional] 
**Qualifiers** | Pointer to [**[]Qualifier**](Qualifier.md) | Type/value qualifiers on the synonym | [optional] 
**Active** | Pointer to **bool** | Indicates whether the synonym is active | [optional] 

## Methods

### NewSynonym

`func NewSynonym() *Synonym`

NewSynonym instantiates a new Synonym object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSynonymWithDefaults

`func NewSynonymWithDefaults() *Synonym`

NewSynonymWithDefaults instantiates a new Synonym object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Synonym) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Synonym) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Synonym) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Synonym) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Synonym) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Synonym) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Synonym) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Synonym) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetName

`func (o *Synonym) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Synonym) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Synonym) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Synonym) HasName() bool`

HasName returns a boolean if a field has been set.

### GetHighlight

`func (o *Synonym) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *Synonym) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *Synonym) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *Synonym) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetTermType

`func (o *Synonym) GetTermType() string`

GetTermType returns the TermType field if non-nil, zero value otherwise.

### GetTermTypeOk

`func (o *Synonym) GetTermTypeOk() (*string, bool)`

GetTermTypeOk returns a tuple with the TermType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermType

`func (o *Synonym) SetTermType(v string)`

SetTermType sets TermType field to given value.

### HasTermType

`func (o *Synonym) HasTermType() bool`

HasTermType returns a boolean if a field has been set.

### GetType

`func (o *Synonym) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Synonym) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Synonym) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Synonym) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *Synonym) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Synonym) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Synonym) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Synonym) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetCode

`func (o *Synonym) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Synonym) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Synonym) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *Synonym) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetSubSource

`func (o *Synonym) GetSubSource() string`

GetSubSource returns the SubSource field if non-nil, zero value otherwise.

### GetSubSourceOk

`func (o *Synonym) GetSubSourceOk() (*string, bool)`

GetSubSourceOk returns a tuple with the SubSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubSource

`func (o *Synonym) SetSubSource(v string)`

SetSubSource sets SubSource field to given value.

### HasSubSource

`func (o *Synonym) HasSubSource() bool`

HasSubSource returns a boolean if a field has been set.

### GetQualifiers

`func (o *Synonym) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *Synonym) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *Synonym) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *Synonym) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.

### GetActive

`func (o *Synonym) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Synonym) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Synonym) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Synonym) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


