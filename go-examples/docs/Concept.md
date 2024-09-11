# Concept

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
**Highlight** | Pointer to **string** | Used by search calls to provide information for highlighting a view of results | [optional] 
**SubsetLink** | Pointer to **string** | Link to download data for a subset, used when the concept represents subset metadata | [optional] 
**MapsetLink** | Pointer to **string** | Metadata for downloading a mapset | [optional] 
**ConceptStatus** | Pointer to **string** | Status value for the concept, e.g. Retired_Concept | [optional] 
**Source** | Pointer to **string** | Associations from this concept to other ones | [optional] 
**Leaf** | Pointer to **bool** | Indicates whether concept is a leaf node | [optional] 
**Active** | Pointer to **bool** | Indicates whether the concept is active | [optional] 
**Synonyms** | Pointer to [**[]Synonym**](Synonym.md) | Synonyms, or all of the names for this concept, including the preferred name | [optional] 
**Definitions** | Pointer to [**[]Definition**](Definition.md) | Text definitions | [optional] 
**Properties** | Pointer to [**[]Property**](Property.md) | Key/value properties | [optional] 
**Children** | Pointer to [**[]Concept**](Concept.md) | Child concepts in the hierarchy | [optional] 
**Parents** | Pointer to [**[]Concept**](Concept.md) | Parent concepts in the hierarchy | [optional] 
**Descendants** | Pointer to [**[]Concept**](Concept.md) | Descendant concepts in the hierarchy | [optional] 
**Qualifiers** | Pointer to [**[]Qualifier**](Qualifier.md) | Qualifiers for use when a concept is used as a parent/child - to indicate RELA for NCIm-derived content | [optional] 
**Associations** | Pointer to [**[]Association**](Association.md) | Associations from this concept to other ones | [optional] 
**InverseAssociations** | Pointer to [**[]Association**](Association.md) | Associations to this concept from other ones | [optional] 
**Roles** | Pointer to [**[]Role**](Role.md) | Roles from this concept to other ones | [optional] 
**DisjointWith** | Pointer to [**[]DisjointWith**](DisjointWith.md) | Assertions of disjointness with respect to other concepts | [optional] 
**InverseRoles** | Pointer to [**[]Role**](Role.md) | Roles to this concept from other ones | [optional] 
**History** | Pointer to [**[]History**](History.md) | History records | [optional] 
**Maps** | Pointer to [**[]ConceptMap**](ConceptMap.md) | Maps from this concept to concepts in other terminologies | [optional] 
**Paths** | Pointer to [**Paths**](Paths.md) |  | [optional] 

## Methods

### NewConcept

`func NewConcept() *Concept`

NewConcept instantiates a new Concept object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConceptWithDefaults

`func NewConceptWithDefaults() *Concept`

NewConceptWithDefaults instantiates a new Concept object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *Concept) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *Concept) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *Concept) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *Concept) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *Concept) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *Concept) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *Concept) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *Concept) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetCode

`func (o *Concept) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Concept) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Concept) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *Concept) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetName

`func (o *Concept) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Concept) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Concept) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Concept) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTerminology

`func (o *Concept) GetTerminology() string`

GetTerminology returns the Terminology field if non-nil, zero value otherwise.

### GetTerminologyOk

`func (o *Concept) GetTerminologyOk() (*string, bool)`

GetTerminologyOk returns a tuple with the Terminology field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminology

`func (o *Concept) SetTerminology(v string)`

SetTerminology sets Terminology field to given value.

### HasTerminology

`func (o *Concept) HasTerminology() bool`

HasTerminology returns a boolean if a field has been set.

### GetVersion

`func (o *Concept) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Concept) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Concept) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Concept) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetLevel

`func (o *Concept) GetLevel() int32`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *Concept) GetLevelOk() (*int32, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *Concept) SetLevel(v int32)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *Concept) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetHighlight

`func (o *Concept) GetHighlight() string`

GetHighlight returns the Highlight field if non-nil, zero value otherwise.

### GetHighlightOk

`func (o *Concept) GetHighlightOk() (*string, bool)`

GetHighlightOk returns a tuple with the Highlight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHighlight

`func (o *Concept) SetHighlight(v string)`

SetHighlight sets Highlight field to given value.

### HasHighlight

`func (o *Concept) HasHighlight() bool`

HasHighlight returns a boolean if a field has been set.

### GetSubsetLink

`func (o *Concept) GetSubsetLink() string`

GetSubsetLink returns the SubsetLink field if non-nil, zero value otherwise.

### GetSubsetLinkOk

`func (o *Concept) GetSubsetLinkOk() (*string, bool)`

GetSubsetLinkOk returns a tuple with the SubsetLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsetLink

`func (o *Concept) SetSubsetLink(v string)`

SetSubsetLink sets SubsetLink field to given value.

### HasSubsetLink

`func (o *Concept) HasSubsetLink() bool`

HasSubsetLink returns a boolean if a field has been set.

### GetMapsetLink

`func (o *Concept) GetMapsetLink() string`

GetMapsetLink returns the MapsetLink field if non-nil, zero value otherwise.

### GetMapsetLinkOk

`func (o *Concept) GetMapsetLinkOk() (*string, bool)`

GetMapsetLinkOk returns a tuple with the MapsetLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMapsetLink

`func (o *Concept) SetMapsetLink(v string)`

SetMapsetLink sets MapsetLink field to given value.

### HasMapsetLink

`func (o *Concept) HasMapsetLink() bool`

HasMapsetLink returns a boolean if a field has been set.

### GetConceptStatus

`func (o *Concept) GetConceptStatus() string`

GetConceptStatus returns the ConceptStatus field if non-nil, zero value otherwise.

### GetConceptStatusOk

`func (o *Concept) GetConceptStatusOk() (*string, bool)`

GetConceptStatusOk returns a tuple with the ConceptStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConceptStatus

`func (o *Concept) SetConceptStatus(v string)`

SetConceptStatus sets ConceptStatus field to given value.

### HasConceptStatus

`func (o *Concept) HasConceptStatus() bool`

HasConceptStatus returns a boolean if a field has been set.

### GetSource

`func (o *Concept) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Concept) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Concept) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Concept) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetLeaf

`func (o *Concept) GetLeaf() bool`

GetLeaf returns the Leaf field if non-nil, zero value otherwise.

### GetLeafOk

`func (o *Concept) GetLeafOk() (*bool, bool)`

GetLeafOk returns a tuple with the Leaf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeaf

`func (o *Concept) SetLeaf(v bool)`

SetLeaf sets Leaf field to given value.

### HasLeaf

`func (o *Concept) HasLeaf() bool`

HasLeaf returns a boolean if a field has been set.

### GetActive

`func (o *Concept) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Concept) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Concept) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Concept) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetSynonyms

`func (o *Concept) GetSynonyms() []Synonym`

GetSynonyms returns the Synonyms field if non-nil, zero value otherwise.

### GetSynonymsOk

`func (o *Concept) GetSynonymsOk() (*[]Synonym, bool)`

GetSynonymsOk returns a tuple with the Synonyms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynonyms

`func (o *Concept) SetSynonyms(v []Synonym)`

SetSynonyms sets Synonyms field to given value.

### HasSynonyms

`func (o *Concept) HasSynonyms() bool`

HasSynonyms returns a boolean if a field has been set.

### GetDefinitions

`func (o *Concept) GetDefinitions() []Definition`

GetDefinitions returns the Definitions field if non-nil, zero value otherwise.

### GetDefinitionsOk

`func (o *Concept) GetDefinitionsOk() (*[]Definition, bool)`

GetDefinitionsOk returns a tuple with the Definitions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitions

`func (o *Concept) SetDefinitions(v []Definition)`

SetDefinitions sets Definitions field to given value.

### HasDefinitions

`func (o *Concept) HasDefinitions() bool`

HasDefinitions returns a boolean if a field has been set.

### GetProperties

`func (o *Concept) GetProperties() []Property`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *Concept) GetPropertiesOk() (*[]Property, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *Concept) SetProperties(v []Property)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *Concept) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetChildren

`func (o *Concept) GetChildren() []Concept`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Concept) GetChildrenOk() (*[]Concept, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Concept) SetChildren(v []Concept)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Concept) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### GetParents

`func (o *Concept) GetParents() []Concept`

GetParents returns the Parents field if non-nil, zero value otherwise.

### GetParentsOk

`func (o *Concept) GetParentsOk() (*[]Concept, bool)`

GetParentsOk returns a tuple with the Parents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParents

`func (o *Concept) SetParents(v []Concept)`

SetParents sets Parents field to given value.

### HasParents

`func (o *Concept) HasParents() bool`

HasParents returns a boolean if a field has been set.

### GetDescendants

`func (o *Concept) GetDescendants() []Concept`

GetDescendants returns the Descendants field if non-nil, zero value otherwise.

### GetDescendantsOk

`func (o *Concept) GetDescendantsOk() (*[]Concept, bool)`

GetDescendantsOk returns a tuple with the Descendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescendants

`func (o *Concept) SetDescendants(v []Concept)`

SetDescendants sets Descendants field to given value.

### HasDescendants

`func (o *Concept) HasDescendants() bool`

HasDescendants returns a boolean if a field has been set.

### GetQualifiers

`func (o *Concept) GetQualifiers() []Qualifier`

GetQualifiers returns the Qualifiers field if non-nil, zero value otherwise.

### GetQualifiersOk

`func (o *Concept) GetQualifiersOk() (*[]Qualifier, bool)`

GetQualifiersOk returns a tuple with the Qualifiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQualifiers

`func (o *Concept) SetQualifiers(v []Qualifier)`

SetQualifiers sets Qualifiers field to given value.

### HasQualifiers

`func (o *Concept) HasQualifiers() bool`

HasQualifiers returns a boolean if a field has been set.

### GetAssociations

`func (o *Concept) GetAssociations() []Association`

GetAssociations returns the Associations field if non-nil, zero value otherwise.

### GetAssociationsOk

`func (o *Concept) GetAssociationsOk() (*[]Association, bool)`

GetAssociationsOk returns a tuple with the Associations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociations

`func (o *Concept) SetAssociations(v []Association)`

SetAssociations sets Associations field to given value.

### HasAssociations

`func (o *Concept) HasAssociations() bool`

HasAssociations returns a boolean if a field has been set.

### GetInverseAssociations

`func (o *Concept) GetInverseAssociations() []Association`

GetInverseAssociations returns the InverseAssociations field if non-nil, zero value otherwise.

### GetInverseAssociationsOk

`func (o *Concept) GetInverseAssociationsOk() (*[]Association, bool)`

GetInverseAssociationsOk returns a tuple with the InverseAssociations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverseAssociations

`func (o *Concept) SetInverseAssociations(v []Association)`

SetInverseAssociations sets InverseAssociations field to given value.

### HasInverseAssociations

`func (o *Concept) HasInverseAssociations() bool`

HasInverseAssociations returns a boolean if a field has been set.

### GetRoles

`func (o *Concept) GetRoles() []Role`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *Concept) GetRolesOk() (*[]Role, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *Concept) SetRoles(v []Role)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *Concept) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetDisjointWith

`func (o *Concept) GetDisjointWith() []DisjointWith`

GetDisjointWith returns the DisjointWith field if non-nil, zero value otherwise.

### GetDisjointWithOk

`func (o *Concept) GetDisjointWithOk() (*[]DisjointWith, bool)`

GetDisjointWithOk returns a tuple with the DisjointWith field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisjointWith

`func (o *Concept) SetDisjointWith(v []DisjointWith)`

SetDisjointWith sets DisjointWith field to given value.

### HasDisjointWith

`func (o *Concept) HasDisjointWith() bool`

HasDisjointWith returns a boolean if a field has been set.

### GetInverseRoles

`func (o *Concept) GetInverseRoles() []Role`

GetInverseRoles returns the InverseRoles field if non-nil, zero value otherwise.

### GetInverseRolesOk

`func (o *Concept) GetInverseRolesOk() (*[]Role, bool)`

GetInverseRolesOk returns a tuple with the InverseRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverseRoles

`func (o *Concept) SetInverseRoles(v []Role)`

SetInverseRoles sets InverseRoles field to given value.

### HasInverseRoles

`func (o *Concept) HasInverseRoles() bool`

HasInverseRoles returns a boolean if a field has been set.

### GetHistory

`func (o *Concept) GetHistory() []History`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *Concept) GetHistoryOk() (*[]History, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *Concept) SetHistory(v []History)`

SetHistory sets History field to given value.

### HasHistory

`func (o *Concept) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetMaps

`func (o *Concept) GetMaps() []ConceptMap`

GetMaps returns the Maps field if non-nil, zero value otherwise.

### GetMapsOk

`func (o *Concept) GetMapsOk() (*[]ConceptMap, bool)`

GetMapsOk returns a tuple with the Maps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaps

`func (o *Concept) SetMaps(v []ConceptMap)`

SetMaps sets Maps field to given value.

### HasMaps

`func (o *Concept) HasMaps() bool`

HasMaps returns a boolean if a field has been set.

### GetPaths

`func (o *Concept) GetPaths() Paths`

GetPaths returns the Paths field if non-nil, zero value otherwise.

### GetPathsOk

`func (o *Concept) GetPathsOk() (*Paths, bool)`

GetPathsOk returns a tuple with the Paths field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaths

`func (o *Concept) SetPaths(v Paths)`

SetPaths sets Paths field to given value.

### HasPaths

`func (o *Concept) HasPaths() bool`

HasPaths returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


