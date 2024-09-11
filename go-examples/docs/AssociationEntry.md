# AssociationEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Code** | Pointer to **string** | Code on the &#39;from&#39; side of the association | [optional] 
**Type** | Pointer to **string** | Relationship type | [optional] 
**RelatedCode** | Pointer to **string** | Code on the &#39;to&#39; side of the association | [optional] 
**RelatedName** | Pointer to **string** | Preferred name of the related code | [optional] 
**Source** | Pointer to **string** | Relationship source | [optional] 
**Highlight** | Pointer to **string** | Used by search calls to provide information for highlighting a view of results | [optional] 
**Qualifiers** | Pointer to [**[]Qualifier**](Qualifier.md) | Type/value qualifiers on the relationship | [optional] 
**Terminology** | Pointer to **string** | Terminology abbreviation, e.g. &#39;nci&#39; | [optional] 
**Version** | Pointer to **string** | Terminology version, e.g. &#39;23.11d&#39; | [optional] 
**Association** | Pointer to **string** | Type of relationship between code and related code | [optional] 
**Name** | Pointer to **string** | Preferred name of the code | [optional] 

## Methods

### NewAssociationEntry

`func NewAssociationEntry() *AssociationEntry`

NewAssociationEntry instantiates a new AssociationEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociationEntryWithDefaults

`func NewAssociationEntryWithDefaults() *AssociationEntry`

NewAssociationEntryWithDefaults instantiates a new AssociationEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *AssociationEntry) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *AssociationEntry) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *AssociationEntry) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *AssociationEntry) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *AssociationEntry) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *AssociationEntry) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *AssociationEntry) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *AssociationEntry) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetCode

`func (o *AssociationEntry) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AssociationEntry) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AssociationEntry) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AssociationEntry) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetType

`func (o *AssociationEntry) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AssociationEntry) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AssociationEntry) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AssociationEntry) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRelatedCode

`func (o *AssociationEntry) GetRelatedCode() string`

GetRelatedCode returns the RelatedCode field if non-nil, zero value otherwise.

### GetRelatedCodeOk

`func (o *AssociationEntry) GetRelatedCodeOk() (*string, bool)`

GetRelatedCodeOk returns a tuple with the RelatedCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedCode

`func (o *AssociationEntry) SetRelatedCode(v string)`

SetRelatedCode sets RelatedCode field to given value.

### HasRelatedCode

`func (o *AssociationEntry) HasRelatedCode() bool`

HasRelatedCode returns a boolean if a field has been set.

### GetRelatedName

`func (o *AssociationEntry) GetRelatedName() string`

GetRelatedName returns the RelatedName field if non-nil, zero value otherwise.

### GetRelatedNameOk

`func (o *AssociationEntry) GetRelatedNameOk() (*string, bool)`

GetRelatedNameOk returns a tuple with the RelatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedName

`func (o *AssociationEntry) SetRelatedName(v string)`

SetRelatedName sets RelatedName field to given value.

### HasRelatedName

`func (o *AssociationEntry) HasRelatedName() bool`

HasRelatedName returns a boolean if a field has been set.

### GetSource

`func (o *AssociationEntry) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AssociationEntry) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AssociationEntry) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *AssociationEntry) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetHighlight

`func (o *AssociationEntry) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *AssociationEntry) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *AssociationEntry) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *AssociationEntry) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetQualifiers

`func (o *AssociationEntry) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *AssociationEntry) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *AssociationEntry) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *AssociationEntry) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.

### GetTerminology

`func (o *AssociationEntry) GetTerminology() string`

GetTerminology returns the Terminology field if non-nil, zero value otherwise.

### GetTerminologyOk

`func (o *AssociationEntry) GetTerminologyOk() (*string, bool)`

GetTerminologyOk returns a tuple with the Terminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminology

`func (o *AssociationEntry) SetTerminology(v string)`

SetTerminology sets Terminology field to given value.

### HasTerminology

`func (o *AssociationEntry) HasTerminology() bool`

HasTerminology returns a boolean if a field has been set.

### GetVersion

`func (o *AssociationEntry) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *AssociationEntry) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *AssociationEntry) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *AssociationEntry) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetAssociation

`func (o *AssociationEntry) GetAssociation() string`

GetAssociation returns the Association field if non-nil, zero value otherwise.

### GetAssociationOk

`func (o *AssociationEntry) GetAssociationOk() (*string, bool)`

GetAssociationOk returns a tuple with the Association field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociation

`func (o *AssociationEntry) SetAssociation(v string)`

SetAssociation sets Association field to given value.

### HasAssociation

`func (o *AssociationEntry) HasAssociation() bool`

HasAssociation returns a boolean if a field has been set.

### GetName

`func (o *AssociationEntry) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssociationEntry) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssociationEntry) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AssociationEntry) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


