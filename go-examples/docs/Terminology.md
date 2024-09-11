# Terminology

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Terminology** | Pointer to **string** | Terminology abbreviation, e.g. &#39;ncit&#39; | [optional] 
**Version** | Pointer to **string** | Terminology version, e.g. &#39;23.11d&#39; | [optional] 
**Date** | Pointer to **string** | Terminology publication/release date | [optional] 
**Name** | Pointer to **string** | Terminology name | [optional] 
**Description** | Pointer to **string** | Terminology description | [optional] 
**Graph** | Pointer to **string** | Name of the RDF triplestore graph if this data is backed by a triplestore | [optional] 
**TerminologyVersion** | Pointer to **string** | Underscore-separated value for terminology and version used by the API to precisely pinpoint a particular version, e.g. &#39;ncit_23.11d&#39; | [optional] 
**Latest** | Pointer to **bool** | Indicates whether this is the latest version | [optional] 
**Tags** | Pointer to **map[string]string** | Additional terminology tags | [optional] 
**IndexName** | Pointer to **string** | for internal use | [optional] 
**ObjectIndexName** | Pointer to **string** | for internal use | [optional] 
**Metadata** | Pointer to [**TerminologyMetadata**](TerminologyMetadata.md) |  | [optional] 
**SparqlFlag** | Pointer to **bool** | Indicates whether the terminology can be used with SPARQL | [optional] 

## Methods

### NewTerminology

`func NewTerminology() *Terminology`

NewTerminology instantiates a new Terminology object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminologyWithDefaults

`func NewTerminologyWithDefaults() *Terminology`

NewTerminologyWithDefaults instantiates a new Terminology object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Terminology) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Terminology) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Terminology) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Terminology) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Terminology) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Terminology) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Terminology) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Terminology) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetTerminology

`func (o *Terminology) GetTerminology() string`

GetTerminology returns the Terminology field if non-nil, zero value otherwise.

### GetTerminologyOk

`func (o *Terminology) GetTerminologyOk() (*string, bool)`

GetTerminologyOk returns a tuple with the Terminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminology

`func (o *Terminology) SetTerminology(v string)`

SetTerminology sets Terminology field to given value.

### HasTerminology

`func (o *Terminology) HasTerminology() bool`

HasTerminology returns a boolean if a field has been set.

### GetVersion

`func (o *Terminology) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Terminology) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Terminology) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Terminology) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetDate

`func (o *Terminology) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *Terminology) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *Terminology) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *Terminology) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetName

`func (o *Terminology) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Terminology) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Terminology) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Terminology) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Terminology) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Terminology) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Terminology) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Terminology) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGraph

`func (o *Terminology) GetGraph() string`

GetGraph returns the Graph field if non-nil, zero value otherwise.

### GetGraphOk

`func (o *Terminology) GetGraphOk() (*string, bool)`

GetGraphOk returns a tuple with the Graph field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraph

`func (o *Terminology) SetGraph(v string)`

SetGraph sets Graph field to given value.

### HasGraph

`func (o *Terminology) HasGraph() bool`

HasGraph returns a boolean if a field has been set.

### GetTerminologyVersion

`func (o *Terminology) GetTerminologyVersion() string`

GetTerminologyVersion returns the TerminologyVersion field if non-nil, zero value otherwise.

### GetTerminologyVersionOk

`func (o *Terminology) GetTerminologyVersionOk() (*string, bool)`

GetTerminologyVersionOk returns a tuple with the TerminologyVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminologyVersion

`func (o *Terminology) SetTerminologyVersion(v string)`

SetTerminologyVersion sets TerminologyVersion field to given value.

### HasTerminologyVersion

`func (o *Terminology) HasTerminologyVersion() bool`

HasTerminologyVersion returns a boolean if a field has been set.

### GetLatest

`func (o *Terminology) GetLatest() bool`

GetLatest returns the Latest field if non-nil, zero value otherwise.

### GetLatestOk

`func (o *Terminology) GetLatestOk() (*bool, bool)`

GetLatestOk returns a tuple with the Latest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatest

`func (o *Terminology) SetLatest(v bool)`

SetLatest sets Latest field to given value.

### HasLatest

`func (o *Terminology) HasLatest() bool`

HasLatest returns a boolean if a field has been set.

### GetTags

`func (o *Terminology) GetTags() map[string]string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Terminology) GetTagsOk() (*map[string]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Terminology) SetTags(v map[string]string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Terminology) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetIndexName

`func (o *Terminology) GetIndexName() string`

GetIndexName returns the IndexName field if non-nil, zero value otherwise.

### GetIndexNameOk

`func (o *Terminology) GetIndexNameOk() (*string, bool)`

GetIndexNameOk returns a tuple with the IndexName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndexName

`func (o *Terminology) SetIndexName(v string)`

SetIndexName sets IndexName field to given value.

### HasIndexName

`func (o *Terminology) HasIndexName() bool`

HasIndexName returns a boolean if a field has been set.

### GetObjectIndexName

`func (o *Terminology) GetObjectIndexName() string`

GetObjectIndexName returns the ObjectIndexName field if non-nil, zero value otherwise.

### GetObjectIndexNameOk

`func (o *Terminology) GetObjectIndexNameOk() (*string, bool)`

GetObjectIndexNameOk returns a tuple with the ObjectIndexName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectIndexName

`func (o *Terminology) SetObjectIndexName(v string)`

SetObjectIndexName sets ObjectIndexName field to given value.

### HasObjectIndexName

`func (o *Terminology) HasObjectIndexName() bool`

HasObjectIndexName returns a boolean if a field has been set.

### GetMetadata

`func (o *Terminology) GetMetadata() TerminologyMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Terminology) GetMetadataOk() (*TerminologyMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Terminology) SetMetadata(v TerminologyMetadata)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Terminology) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSparqlFlag

`func (o *Terminology) GetSparqlFlag() bool`

GetSparqlFlag returns the SparqlFlag field if non-nil, zero value otherwise.

### GetSparqlFlagOk

`func (o *Terminology) GetSparqlFlagOk() (*bool, bool)`

GetSparqlFlagOk returns a tuple with the SparqlFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSparqlFlag

`func (o *Terminology) SetSparqlFlag(v bool)`

SetSparqlFlag sets SparqlFlag field to given value.

### HasSparqlFlag

`func (o *Terminology) HasSparqlFlag() bool`

HasSparqlFlag returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


