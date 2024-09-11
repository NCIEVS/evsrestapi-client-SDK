# ConceptMap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**MapsetCode** | Pointer to **string** |  | [optional] 
**Source** | Pointer to **string** | Terminology of the source code, e.g. &#39;ncit&#39; | [optional] 
**SourceName** | Pointer to **string** | Preferred name of the source code | [optional] 
**SourceTermType** | Pointer to **string** | Term type of the source code | [optional] 
**SourceCode** | Pointer to **string** | Source code of the map (the thing being mapped &#39;from&#39;) | [optional] 
**SourceTerminology** | Pointer to **string** | Human-readable label for the terminology of the source code, e.g. &#39;NCI Thesaurus&#39; | [optional] 
**SourceTerminologyVersion** | Pointer to **string** | Terminology version of the source code | [optional] 
**SourceLoaded** | Pointer to **bool** | Indicates whether the source code terminology/version is currently loaded | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Rank** | Pointer to **string** |  | [optional] 
**Group** | Pointer to **string** |  | [optional] 
**Rule** | Pointer to **string** |  | [optional] 
**Target** | Pointer to **string** | Terminology of the target code, e.g. &#39;ncit&#39; | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**TargetTermType** | Pointer to **string** |  | [optional] 
**TargetCode** | Pointer to **string** | Target code of the map (the thing being mapped &#39;to&#39;) | [optional] 
**TargetTerminology** | Pointer to **string** | Human-readable label for the terminology of the target code, e.g. &#39;NCI Thesaurus&#39; | [optional] 
**TargetTerminologyVersion** | Pointer to **string** | Terminology version of the target code | [optional] 
**TargetLoaded** | Pointer to **bool** | Indicates whether the target terminology/version is currently loaded | [optional] 
**SortKey** | Pointer to **string** |  | [optional] 
**TargetTermGroup** | Pointer to **string** |  | [optional] 

## Methods

### NewConceptMap

`func NewConceptMap() *ConceptMap`

NewConceptMap instantiates a new ConceptMap object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConceptMapWithDefaults

`func NewConceptMapWithDefaults() *ConceptMap`

NewConceptMapWithDefaults instantiates a new ConceptMap object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *ConceptMap) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *ConceptMap) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *ConceptMap) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *ConceptMap) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *ConceptMap) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *ConceptMap) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *ConceptMap) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *ConceptMap) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetMapsetCode

`func (o *ConceptMap) GetMapsetCode() string`

GetMapsetCode returns the MapsetCode field if non-nil, zero value otherwise.

### GetMapsetCodeOk

`func (o *ConceptMap) GetMapsetCodeOk() (*string, bool)`

GetMapsetCodeOk returns a tuple with the MapsetCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMapsetCode

`func (o *ConceptMap) SetMapsetCode(v string)`

SetMapsetCode sets MapsetCode field to given value.

### HasMapsetCode

`func (o *ConceptMap) HasMapsetCode() bool`

HasMapsetCode returns a boolean if a field has been set.

### GetSource

`func (o *ConceptMap) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ConceptMap) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ConceptMap) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *ConceptMap) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSourceName

`func (o *ConceptMap) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ConceptMap) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ConceptMap) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ConceptMap) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceTermType

`func (o *ConceptMap) GetSourceTermType() string`

GetSourceTermType returns the SourceTermType field if non-nil, zero value otherwise.

### GetSourceTermTypeOk

`func (o *ConceptMap) GetSourceTermTypeOk() (*string, bool)`

GetSourceTermTypeOk returns a tuple with the SourceTermType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTermType

`func (o *ConceptMap) SetSourceTermType(v string)`

SetSourceTermType sets SourceTermType field to given value.

### HasSourceTermType

`func (o *ConceptMap) HasSourceTermType() bool`

HasSourceTermType returns a boolean if a field has been set.

### GetSourceCode

`func (o *ConceptMap) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *ConceptMap) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *ConceptMap) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *ConceptMap) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetSourceTerminology

`func (o *ConceptMap) GetSourceTerminology() string`

GetSourceTerminology returns the SourceTerminology field if non-nil, zero value otherwise.

### GetSourceTerminologyOk

`func (o *ConceptMap) GetSourceTerminologyOk() (*string, bool)`

GetSourceTerminologyOk returns a tuple with the SourceTerminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTerminology

`func (o *ConceptMap) SetSourceTerminology(v string)`

SetSourceTerminology sets SourceTerminology field to given value.

### HasSourceTerminology

`func (o *ConceptMap) HasSourceTerminology() bool`

HasSourceTerminology returns a boolean if a field has been set.

### GetSourceTerminologyVersion

`func (o *ConceptMap) GetSourceTerminologyVersion() string`

GetSourceTerminologyVersion returns the SourceTerminologyVersion field if non-nil, zero value otherwise.

### GetSourceTerminologyVersionOk

`func (o *ConceptMap) GetSourceTerminologyVersionOk() (*string, bool)`

GetSourceTerminologyVersionOk returns a tuple with the SourceTerminologyVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTerminologyVersion

`func (o *ConceptMap) SetSourceTerminologyVersion(v string)`

SetSourceTerminologyVersion sets SourceTerminologyVersion field to given value.

### HasSourceTerminologyVersion

`func (o *ConceptMap) HasSourceTerminologyVersion() bool`

HasSourceTerminologyVersion returns a boolean if a field has been set.

### GetSourceLoaded

`func (o *ConceptMap) GetSourceLoaded() bool`

GetSourceLoaded returns the SourceLoaded field if non-nil, zero value otherwise.

### GetSourceLoadedOk

`func (o *ConceptMap) GetSourceLoadedOk() (*bool, bool)`

GetSourceLoadedOk returns a tuple with the SourceLoaded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceLoaded

`func (o *ConceptMap) SetSourceLoaded(v bool)`

SetSourceLoaded sets SourceLoaded field to given value.

### HasSourceLoaded

`func (o *ConceptMap) HasSourceLoaded() bool`

HasSourceLoaded returns a boolean if a field has been set.

### GetType

`func (o *ConceptMap) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConceptMap) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConceptMap) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ConceptMap) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRank

`func (o *ConceptMap) GetRank() string`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *ConceptMap) GetRankOk() (*string, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *ConceptMap) SetRank(v string)`

SetRank sets Rank field to given value.

### HasRank

`func (o *ConceptMap) HasRank() bool`

HasRank returns a boolean if a field has been set.

### GetGroup

`func (o *ConceptMap) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *ConceptMap) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *ConceptMap) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *ConceptMap) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetRule

`func (o *ConceptMap) GetRule() string`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *ConceptMap) GetRuleOk() (*string, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *ConceptMap) SetRule(v string)`

SetRule sets Rule field to given value.

### HasRule

`func (o *ConceptMap) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetTarget

`func (o *ConceptMap) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *ConceptMap) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *ConceptMap) SetTarget(v string)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *ConceptMap) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetTargetName

`func (o *ConceptMap) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *ConceptMap) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *ConceptMap) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *ConceptMap) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetTargetTermType

`func (o *ConceptMap) GetTargetTermType() string`

GetTargetTermType returns the TargetTermType field if non-nil, zero value otherwise.

### GetTargetTermTypeOk

`func (o *ConceptMap) GetTargetTermTypeOk() (*string, bool)`

GetTargetTermTypeOk returns a tuple with the TargetTermType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTermType

`func (o *ConceptMap) SetTargetTermType(v string)`

SetTargetTermType sets TargetTermType field to given value.

### HasTargetTermType

`func (o *ConceptMap) HasTargetTermType() bool`

HasTargetTermType returns a boolean if a field has been set.

### GetTargetCode

`func (o *ConceptMap) GetTargetCode() string`

GetTargetCode returns the TargetCode field if non-nil, zero value otherwise.

### GetTargetCodeOk

`func (o *ConceptMap) GetTargetCodeOk() (*string, bool)`

GetTargetCodeOk returns a tuple with the TargetCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetCode

`func (o *ConceptMap) SetTargetCode(v string)`

SetTargetCode sets TargetCode field to given value.

### HasTargetCode

`func (o *ConceptMap) HasTargetCode() bool`

HasTargetCode returns a boolean if a field has been set.

### GetTargetTerminology

`func (o *ConceptMap) GetTargetTerminology() string`

GetTargetTerminology returns the TargetTerminology field if non-nil, zero value otherwise.

### GetTargetTerminologyOk

`func (o *ConceptMap) GetTargetTerminologyOk() (*string, bool)`

GetTargetTerminologyOk returns a tuple with the TargetTerminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTerminology

`func (o *ConceptMap) SetTargetTerminology(v string)`

SetTargetTerminology sets TargetTerminology field to given value.

### HasTargetTerminology

`func (o *ConceptMap) HasTargetTerminology() bool`

HasTargetTerminology returns a boolean if a field has been set.

### GetTargetTerminologyVersion

`func (o *ConceptMap) GetTargetTerminologyVersion() string`

GetTargetTerminologyVersion returns the TargetTerminologyVersion field if non-nil, zero value otherwise.

### GetTargetTerminologyVersionOk

`func (o *ConceptMap) GetTargetTerminologyVersionOk() (*string, bool)`

GetTargetTerminologyVersionOk returns a tuple with the TargetTerminologyVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTerminologyVersion

`func (o *ConceptMap) SetTargetTerminologyVersion(v string)`

SetTargetTerminologyVersion sets TargetTerminologyVersion field to given value.

### HasTargetTerminologyVersion

`func (o *ConceptMap) HasTargetTerminologyVersion() bool`

HasTargetTerminologyVersion returns a boolean if a field has been set.

### GetTargetLoaded

`func (o *ConceptMap) GetTargetLoaded() bool`

GetTargetLoaded returns the TargetLoaded field if non-nil, zero value otherwise.

### GetTargetLoadedOk

`func (o *ConceptMap) GetTargetLoadedOk() (*bool, bool)`

GetTargetLoadedOk returns a tuple with the TargetLoaded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetLoaded

`func (o *ConceptMap) SetTargetLoaded(v bool)`

SetTargetLoaded sets TargetLoaded field to given value.

### HasTargetLoaded

`func (o *ConceptMap) HasTargetLoaded() bool`

HasTargetLoaded returns a boolean if a field has been set.

### GetSortKey

`func (o *ConceptMap) GetSortKey() string`

GetSortKey returns the SortKey field if non-nil, zero value otherwise.

### GetSortKeyOk

`func (o *ConceptMap) GetSortKeyOk() (*string, bool)`

GetSortKeyOk returns a tuple with the SortKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortKey

`func (o *ConceptMap) SetSortKey(v string)`

SetSortKey sets SortKey field to given value.

### HasSortKey

`func (o *ConceptMap) HasSortKey() bool`

HasSortKey returns a boolean if a field has been set.

### GetTargetTermGroup

`func (o *ConceptMap) GetTargetTermGroup() string`

GetTargetTermGroup returns the TargetTermGroup field if non-nil, zero value otherwise.

### GetTargetTermGroupOk

`func (o *ConceptMap) GetTargetTermGroupOk() (*string, bool)`

GetTargetTermGroupOk returns a tuple with the TargetTermGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTermGroup

`func (o *ConceptMap) SetTargetTermGroup(v string)`

SetTargetTermGroup sets TargetTermGroup field to given value.

### HasTargetTermGroup

`func (o *ConceptMap) HasTargetTermGroup() bool`

HasTargetTermGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


