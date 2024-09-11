# TerminologyMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**UiLabel** | Pointer to **string** | Human-readable name for the terminology to use in a UI label | [optional] 
**MaxVersions** | Pointer to **int32** | Max number of versions to keep at the same time | [optional] 
**Loader** | Pointer to **string** | Label for the loader used to populate this data | [optional] 
**ConceptStatuses** | Pointer to **[]string** | Concept status values used by the terminology | [optional] 
**ExcludedProperties** | Pointer to **[]string** |  | [optional] 
**RetiredStatusValue** | Pointer to **string** | Concept status value for retired concepts | [optional] 
**DetailsColumns** | Pointer to **map[string]bool** | Metadata for displaying concept | [optional] 
**Hierarchy** | Pointer to **bool** | Indicates whether or not the terminology has a hierarchy | [optional] 
**HierarchyRoles** | Pointer to **[]string** | Indicates role codes that are reinterpreted as parent/child | [optional] 
**History** | Pointer to **bool** | Indicates whether or not the terminology has history records | [optional] 
**SourceCt** | Pointer to **int32** | Count of included sources | [optional] 
**SubsetLink** | Pointer to **string** | Metadata for downloading a subset | [optional] 
**LicenseText** | Pointer to **string** | License text for the UI | [optional] 
**MetaConceptField** | Pointer to **string** | Metadata for concept display | [optional] 
**CodeLabel** | Pointer to **string** | Metadata for concept display | [optional] 
**WelcomeText** | Pointer to **string** | Metadata for landing page welcome text | [optional] 
**PreferredTermGroups** | Pointer to **[]string** |  | [optional] 
**SynonymTermGroup** | Pointer to **string** |  | [optional] 
**TermGroups** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewTerminologyMetadata

`func NewTerminologyMetadata() *TerminologyMetadata`

NewTerminologyMetadata instantiates a new TerminologyMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerminologyMetadataWithDefaults

`func NewTerminologyMetadataWithDefaults() *TerminologyMetadata`

NewTerminologyMetadataWithDefaults instantiates a new TerminologyMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *TerminologyMetadata) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *TerminologyMetadata) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *TerminologyMetadata) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *TerminologyMetadata) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *TerminologyMetadata) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *TerminologyMetadata) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *TerminologyMetadata) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *TerminologyMetadata) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetUiLabel

`func (o *TerminologyMetadata) GetUiLabel() string`

GetUiLabel returns the UiLabel field if non-nil, zero value otherwise.

### GetUiLabelOk

`func (o *TerminologyMetadata) GetUiLabelOk() (*string, bool)`

GetUiLabelOk returns a tuple with the UiLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUiLabel

`func (o *TerminologyMetadata) SetUiLabel(v string)`

SetUiLabel sets UiLabel field to given value.

### HasUiLabel

`func (o *TerminologyMetadata) HasUiLabel() bool`

HasUiLabel returns a boolean if a field has been set.

### GetMaxVersions

`func (o *TerminologyMetadata) GetMaxVersions() int32`

GetMaxVersions returns the MaxVersions field if non-nil, zero value otherwise.

### GetMaxVersionsOk

`func (o *TerminologyMetadata) GetMaxVersionsOk() (*int32, bool)`

GetMaxVersionsOk returns a tuple with the MaxVersions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxVersions

`func (o *TerminologyMetadata) SetMaxVersions(v int32)`

SetMaxVersions sets MaxVersions field to given value.

### HasMaxVersions

`func (o *TerminologyMetadata) HasMaxVersions() bool`

HasMaxVersions returns a boolean if a field has been set.

### GetLoader

`func (o *TerminologyMetadata) GetLoader() string`

GetLoader returns the Loader field if non-nil, zero value otherwise.

### GetLoaderOk

`func (o *TerminologyMetadata) GetLoaderOk() (*string, bool)`

GetLoaderOk returns a tuple with the Loader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoader

`func (o *TerminologyMetadata) SetLoader(v string)`

SetLoader sets Loader field to given value.

### HasLoader

`func (o *TerminologyMetadata) HasLoader() bool`

HasLoader returns a boolean if a field has been set.

### GetConceptStatuses

`func (o *TerminologyMetadata) GetConceptStatuses() []string`

GetConceptStatuses returns the ConceptStatuses field if non-nil, zero value otherwise.

### GetConceptStatusesOk

`func (o *TerminologyMetadata) GetConceptStatusesOk() (*[]string, bool)`

GetConceptStatusesOk returns a tuple with the ConceptStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConceptStatuses

`func (o *TerminologyMetadata) SetConceptStatuses(v []string)`

SetConceptStatuses sets ConceptStatuses field to given value.

### HasConceptStatuses

`func (o *TerminologyMetadata) HasConceptStatuses() bool`

HasConceptStatuses returns a boolean if a field has been set.

### GetExcludedProperties

`func (o *TerminologyMetadata) GetExcludedProperties() []string`

GetExcludedProperties returns the ExcludedProperties field if non-nil, zero value otherwise.

### GetExcludedPropertiesOk

`func (o *TerminologyMetadata) GetExcludedPropertiesOk() (*[]string, bool)`

GetExcludedPropertiesOk returns a tuple with the ExcludedProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedProperties

`func (o *TerminologyMetadata) SetExcludedProperties(v []string)`

SetExcludedProperties sets ExcludedProperties field to given value.

### HasExcludedProperties

`func (o *TerminologyMetadata) HasExcludedProperties() bool`

HasExcludedProperties returns a boolean if a field has been set.

### GetRetiredStatusValue

`func (o *TerminologyMetadata) GetRetiredStatusValue() string`

GetRetiredStatusValue returns the RetiredStatusValue field if non-nil, zero value otherwise.

### GetRetiredStatusValueOk

`func (o *TerminologyMetadata) GetRetiredStatusValueOk() (*string, bool)`

GetRetiredStatusValueOk returns a tuple with the RetiredStatusValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetiredStatusValue

`func (o *TerminologyMetadata) SetRetiredStatusValue(v string)`

SetRetiredStatusValue sets RetiredStatusValue field to given value.

### HasRetiredStatusValue

`func (o *TerminologyMetadata) HasRetiredStatusValue() bool`

HasRetiredStatusValue returns a boolean if a field has been set.

### GetDetailsColumns

`func (o *TerminologyMetadata) GetDetailsColumns() map[string]bool`

GetDetailsColumns returns the DetailsColumns field if non-nil, zero value otherwise.

### GetDetailsColumnsOk

`func (o *TerminologyMetadata) GetDetailsColumnsOk() (*map[string]bool, bool)`

GetDetailsColumnsOk returns a tuple with the DetailsColumns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailsColumns

`func (o *TerminologyMetadata) SetDetailsColumns(v map[string]bool)`

SetDetailsColumns sets DetailsColumns field to given value.

### HasDetailsColumns

`func (o *TerminologyMetadata) HasDetailsColumns() bool`

HasDetailsColumns returns a boolean if a field has been set.

### GetHierarchy

`func (o *TerminologyMetadata) GetHierarchy() bool`

GetHierarchy returns the Hierarchy field if non-nil, zero value otherwise.

### GetHierarchyOk

`func (o *TerminologyMetadata) GetHierarchyOk() (*bool, bool)`

GetHierarchyOk returns a tuple with the Hierarchy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHierarchy

`func (o *TerminologyMetadata) SetHierarchy(v bool)`

SetHierarchy sets Hierarchy field to given value.

### HasHierarchy

`func (o *TerminologyMetadata) HasHierarchy() bool`

HasHierarchy returns a boolean if a field has been set.

### GetHierarchyRoles

`func (o *TerminologyMetadata) GetHierarchyRoles() []string`

GetHierarchyRoles returns the HierarchyRoles field if non-nil, zero value otherwise.

### GetHierarchyRolesOk

`func (o *TerminologyMetadata) GetHierarchyRolesOk() (*[]string, bool)`

GetHierarchyRolesOk returns a tuple with the HierarchyRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHierarchyRoles

`func (o *TerminologyMetadata) SetHierarchyRoles(v []string)`

SetHierarchyRoles sets HierarchyRoles field to given value.

### HasHierarchyRoles

`func (o *TerminologyMetadata) HasHierarchyRoles() bool`

HasHierarchyRoles returns a boolean if a field has been set.

### GetHistory

`func (o *TerminologyMetadata) GetHistory() bool`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *TerminologyMetadata) GetHistoryOk() (*bool, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *TerminologyMetadata) SetHistory(v bool)`

SetHistory sets History field to given value.

### HasHistory

`func (o *TerminologyMetadata) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetSourceCt

`func (o *TerminologyMetadata) GetSourceCt() int32`

GetSourceCt returns the SourceCt field if non-nil, zero value otherwise.

### GetSourceCtOk

`func (o *TerminologyMetadata) GetSourceCtOk() (*int32, bool)`

GetSourceCtOk returns a tuple with the SourceCt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCt

`func (o *TerminologyMetadata) SetSourceCt(v int32)`

SetSourceCt sets SourceCt field to given value.

### HasSourceCt

`func (o *TerminologyMetadata) HasSourceCt() bool`

HasSourceCt returns a boolean if a field has been set.

### GetSubsetLink

`func (o *TerminologyMetadata) GetSubsetLink() string`

GetSubsetLink returns the SubsetLink field if non-nil, zero value otherwise.

### GetSubsetLinkOk

`func (o *TerminologyMetadata) GetSubsetLinkOk() (*string, bool)`

GetSubsetLinkOk returns a tuple with the SubsetLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsetLink

`func (o *TerminologyMetadata) SetSubsetLink(v string)`

SetSubsetLink sets SubsetLink field to given value.

### HasSubsetLink

`func (o *TerminologyMetadata) HasSubsetLink() bool`

HasSubsetLink returns a boolean if a field has been set.

### GetLicenseText

`func (o *TerminologyMetadata) GetLicenseText() string`

GetLicenseText returns the LicenseText field if non-nil, zero value otherwise.

### GetLicenseTextOk

`func (o *TerminologyMetadata) GetLicenseTextOk() (*string, bool)`

GetLicenseTextOk returns a tuple with the LicenseText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseText

`func (o *TerminologyMetadata) SetLicenseText(v string)`

SetLicenseText sets LicenseText field to given value.

### HasLicenseText

`func (o *TerminologyMetadata) HasLicenseText() bool`

HasLicenseText returns a boolean if a field has been set.

### GetMetaConceptField

`func (o *TerminologyMetadata) GetMetaConceptField() string`

GetMetaConceptField returns the MetaConceptField field if non-nil, zero value otherwise.

### GetMetaConceptFieldOk

`func (o *TerminologyMetadata) GetMetaConceptFieldOk() (*string, bool)`

GetMetaConceptFieldOk returns a tuple with the MetaConceptField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetaConceptField

`func (o *TerminologyMetadata) SetMetaConceptField(v string)`

SetMetaConceptField sets MetaConceptField field to given value.

### HasMetaConceptField

`func (o *TerminologyMetadata) HasMetaConceptField() bool`

HasMetaConceptField returns a boolean if a field has been set.

### GetCodeLabel

`func (o *TerminologyMetadata) GetCodeLabel() string`

GetCodeLabel returns the CodeLabel field if non-nil, zero value otherwise.

### GetCodeLabelOk

`func (o *TerminologyMetadata) GetCodeLabelOk() (*string, bool)`

GetCodeLabelOk returns a tuple with the CodeLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeLabel

`func (o *TerminologyMetadata) SetCodeLabel(v string)`

SetCodeLabel sets CodeLabel field to given value.

### HasCodeLabel

`func (o *TerminologyMetadata) HasCodeLabel() bool`

HasCodeLabel returns a boolean if a field has been set.

### GetWelcomeText

`func (o *TerminologyMetadata) GetWelcomeText() string`

GetWelcomeText returns the WelcomeText field if non-nil, zero value otherwise.

### GetWelcomeTextOk

`func (o *TerminologyMetadata) GetWelcomeTextOk() (*string, bool)`

GetWelcomeTextOk returns a tuple with the WelcomeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeText

`func (o *TerminologyMetadata) SetWelcomeText(v string)`

SetWelcomeText sets WelcomeText field to given value.

### HasWelcomeText

`func (o *TerminologyMetadata) HasWelcomeText() bool`

HasWelcomeText returns a boolean if a field has been set.

### GetPreferredTermGroups

`func (o *TerminologyMetadata) GetPreferredTermGroups() []string`

GetPreferredTermGroups returns the PreferredTermGroups field if non-nil, zero value otherwise.

### GetPreferredTermGroupsOk

`func (o *TerminologyMetadata) GetPreferredTermGroupsOk() (*[]string, bool)`

GetPreferredTermGroupsOk returns a tuple with the PreferredTermGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredTermGroups

`func (o *TerminologyMetadata) SetPreferredTermGroups(v []string)`

SetPreferredTermGroups sets PreferredTermGroups field to given value.

### HasPreferredTermGroups

`func (o *TerminologyMetadata) HasPreferredTermGroups() bool`

HasPreferredTermGroups returns a boolean if a field has been set.

### GetSynonymTermGroup

`func (o *TerminologyMetadata) GetSynonymTermGroup() string`

GetSynonymTermGroup returns the SynonymTermGroup field if non-nil, zero value otherwise.

### GetSynonymTermGroupOk

`func (o *TerminologyMetadata) GetSynonymTermGroupOk() (*string, bool)`

GetSynonymTermGroupOk returns a tuple with the SynonymTermGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynonymTermGroup

`func (o *TerminologyMetadata) SetSynonymTermGroup(v string)`

SetSynonymTermGroup sets SynonymTermGroup field to given value.

### HasSynonymTermGroup

`func (o *TerminologyMetadata) HasSynonymTermGroup() bool`

HasSynonymTermGroup returns a boolean if a field has been set.

### GetTermGroups

`func (o *TerminologyMetadata) GetTermGroups() map[string]string`

GetTermGroups returns the TermGroups field if non-nil, zero value otherwise.

### GetTermGroupsOk

`func (o *TerminologyMetadata) GetTermGroupsOk() (*map[string]string, bool)`

GetTermGroupsOk returns a tuple with the TermGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermGroups

`func (o *TerminologyMetadata) SetTermGroups(v map[string]string)`

SetTermGroups sets TermGroups field to given value.

### HasTermGroups

`func (o *TerminologyMetadata) HasTermGroups() bool`

HasTermGroups returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


