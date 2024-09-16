/*
NCI EVS Rest API

Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>

API version: 1.7.2.RELEASE
Contact: NCIAppSupport@nih.gov
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evs

import (
	"encoding/json"
)

// checks if the TerminologyMetadata type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TerminologyMetadata{}

// TerminologyMetadata Represents additional terminology metadata
type TerminologyMetadata struct {
	// URI for this element in an rdf-based source file
	Uri *string `json:"uri,omitempty"`
	// Used to indicate the total amount of data in cases where a limit is being applied
	Ct *int32 `json:"ct,omitempty"`
	// Human-readable name for the terminology to use in a UI label
	UiLabel *string `json:"uiLabel,omitempty"`
	// Max number of versions to keep at the same time
	MaxVersions *int32 `json:"maxVersions,omitempty"`
	// Label for the loader used to populate this data
	Loader *string `json:"loader,omitempty"`
	// Concept status values used by the terminology
	ConceptStatuses []string `json:"conceptStatuses,omitempty"`
	ExcludedProperties []string `json:"excludedProperties,omitempty"`
	// Concept status value for retired concepts
	RetiredStatusValue *string `json:"retiredStatusValue,omitempty"`
	// Metadata for displaying concept
	DetailsColumns *map[string]bool `json:"detailsColumns,omitempty"`
	// Indicates whether or not the terminology has a hierarchy
	Hierarchy *bool `json:"hierarchy,omitempty"`
	// Indicates role codes that are reinterpreted as parent/child
	HierarchyRoles []string `json:"hierarchyRoles,omitempty"`
	// Indicates whether or not the terminology has history records
	History *bool `json:"history,omitempty"`
	// Count of included sources
	SourceCt *int32 `json:"sourceCt,omitempty"`
	// Metadata for downloading a subset
	SubsetLink *string `json:"subsetLink,omitempty"`
	// License text for the UI
	LicenseText *string `json:"licenseText,omitempty"`
	// Metadata for concept display
	MetaConceptField *string `json:"metaConceptField,omitempty"`
	// Metadata for concept display
	CodeLabel *string `json:"codeLabel,omitempty"`
	// Metadata for landing page welcome text
	WelcomeText *string `json:"welcomeText,omitempty"`
	PreferredTermGroups []string `json:"preferredTermGroups,omitempty"`
	SynonymTermGroup *string `json:"synonymTermGroup,omitempty"`
	TermGroups *map[string]string `json:"termGroups,omitempty"`
}

// NewTerminologyMetadata instantiates a new TerminologyMetadata object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTerminologyMetadata() *TerminologyMetadata {
	this := TerminologyMetadata{}
	return &this
}

// NewTerminologyMetadataWithDefaults instantiates a new TerminologyMetadata object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTerminologyMetadataWithDefaults() *TerminologyMetadata {
	this := TerminologyMetadata{}
	return &this
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *TerminologyMetadata) SetUri(v string) {
	o.Uri = &v
}

// GetCt returns the Ct field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetCt() int32 {
	if o == nil || IsNil(o.Ct) {
		var ret int32
		return ret
	}
	return *o.Ct
}

// GetCtOk returns a tuple with the Ct field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetCtOk() (*int32, bool) {
	if o == nil || IsNil(o.Ct) {
		return nil, false
	}
	return o.Ct, true
}

// HasCt returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasCt() bool {
	if o != nil && !IsNil(o.Ct) {
		return true
	}

	return false
}

// SetCt gets a reference to the given int32 and assigns it to the Ct field.
func (o *TerminologyMetadata) SetCt(v int32) {
	o.Ct = &v
}

// GetUiLabel returns the UiLabel field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetUiLabel() string {
	if o == nil || IsNil(o.UiLabel) {
		var ret string
		return ret
	}
	return *o.UiLabel
}

// GetUiLabelOk returns a tuple with the UiLabel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetUiLabelOk() (*string, bool) {
	if o == nil || IsNil(o.UiLabel) {
		return nil, false
	}
	return o.UiLabel, true
}

// HasUiLabel returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasUiLabel() bool {
	if o != nil && !IsNil(o.UiLabel) {
		return true
	}

	return false
}

// SetUiLabel gets a reference to the given string and assigns it to the UiLabel field.
func (o *TerminologyMetadata) SetUiLabel(v string) {
	o.UiLabel = &v
}

// GetMaxVersions returns the MaxVersions field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetMaxVersions() int32 {
	if o == nil || IsNil(o.MaxVersions) {
		var ret int32
		return ret
	}
	return *o.MaxVersions
}

// GetMaxVersionsOk returns a tuple with the MaxVersions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetMaxVersionsOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxVersions) {
		return nil, false
	}
	return o.MaxVersions, true
}

// HasMaxVersions returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasMaxVersions() bool {
	if o != nil && !IsNil(o.MaxVersions) {
		return true
	}

	return false
}

// SetMaxVersions gets a reference to the given int32 and assigns it to the MaxVersions field.
func (o *TerminologyMetadata) SetMaxVersions(v int32) {
	o.MaxVersions = &v
}

// GetLoader returns the Loader field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetLoader() string {
	if o == nil || IsNil(o.Loader) {
		var ret string
		return ret
	}
	return *o.Loader
}

// GetLoaderOk returns a tuple with the Loader field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetLoaderOk() (*string, bool) {
	if o == nil || IsNil(o.Loader) {
		return nil, false
	}
	return o.Loader, true
}

// HasLoader returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasLoader() bool {
	if o != nil && !IsNil(o.Loader) {
		return true
	}

	return false
}

// SetLoader gets a reference to the given string and assigns it to the Loader field.
func (o *TerminologyMetadata) SetLoader(v string) {
	o.Loader = &v
}

// GetConceptStatuses returns the ConceptStatuses field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetConceptStatuses() []string {
	if o == nil || IsNil(o.ConceptStatuses) {
		var ret []string
		return ret
	}
	return o.ConceptStatuses
}

// GetConceptStatusesOk returns a tuple with the ConceptStatuses field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetConceptStatusesOk() ([]string, bool) {
	if o == nil || IsNil(o.ConceptStatuses) {
		return nil, false
	}
	return o.ConceptStatuses, true
}

// HasConceptStatuses returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasConceptStatuses() bool {
	if o != nil && !IsNil(o.ConceptStatuses) {
		return true
	}

	return false
}

// SetConceptStatuses gets a reference to the given []string and assigns it to the ConceptStatuses field.
func (o *TerminologyMetadata) SetConceptStatuses(v []string) {
	o.ConceptStatuses = v
}

// GetExcludedProperties returns the ExcludedProperties field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetExcludedProperties() []string {
	if o == nil || IsNil(o.ExcludedProperties) {
		var ret []string
		return ret
	}
	return o.ExcludedProperties
}

// GetExcludedPropertiesOk returns a tuple with the ExcludedProperties field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetExcludedPropertiesOk() ([]string, bool) {
	if o == nil || IsNil(o.ExcludedProperties) {
		return nil, false
	}
	return o.ExcludedProperties, true
}

// HasExcludedProperties returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasExcludedProperties() bool {
	if o != nil && !IsNil(o.ExcludedProperties) {
		return true
	}

	return false
}

// SetExcludedProperties gets a reference to the given []string and assigns it to the ExcludedProperties field.
func (o *TerminologyMetadata) SetExcludedProperties(v []string) {
	o.ExcludedProperties = v
}

// GetRetiredStatusValue returns the RetiredStatusValue field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetRetiredStatusValue() string {
	if o == nil || IsNil(o.RetiredStatusValue) {
		var ret string
		return ret
	}
	return *o.RetiredStatusValue
}

// GetRetiredStatusValueOk returns a tuple with the RetiredStatusValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetRetiredStatusValueOk() (*string, bool) {
	if o == nil || IsNil(o.RetiredStatusValue) {
		return nil, false
	}
	return o.RetiredStatusValue, true
}

// HasRetiredStatusValue returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasRetiredStatusValue() bool {
	if o != nil && !IsNil(o.RetiredStatusValue) {
		return true
	}

	return false
}

// SetRetiredStatusValue gets a reference to the given string and assigns it to the RetiredStatusValue field.
func (o *TerminologyMetadata) SetRetiredStatusValue(v string) {
	o.RetiredStatusValue = &v
}

// GetDetailsColumns returns the DetailsColumns field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetDetailsColumns() map[string]bool {
	if o == nil || IsNil(o.DetailsColumns) {
		var ret map[string]bool
		return ret
	}
	return *o.DetailsColumns
}

// GetDetailsColumnsOk returns a tuple with the DetailsColumns field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetDetailsColumnsOk() (*map[string]bool, bool) {
	if o == nil || IsNil(o.DetailsColumns) {
		return nil, false
	}
	return o.DetailsColumns, true
}

// HasDetailsColumns returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasDetailsColumns() bool {
	if o != nil && !IsNil(o.DetailsColumns) {
		return true
	}

	return false
}

// SetDetailsColumns gets a reference to the given map[string]bool and assigns it to the DetailsColumns field.
func (o *TerminologyMetadata) SetDetailsColumns(v map[string]bool) {
	o.DetailsColumns = &v
}

// GetHierarchy returns the Hierarchy field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetHierarchy() bool {
	if o == nil || IsNil(o.Hierarchy) {
		var ret bool
		return ret
	}
	return *o.Hierarchy
}

// GetHierarchyOk returns a tuple with the Hierarchy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetHierarchyOk() (*bool, bool) {
	if o == nil || IsNil(o.Hierarchy) {
		return nil, false
	}
	return o.Hierarchy, true
}

// HasHierarchy returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasHierarchy() bool {
	if o != nil && !IsNil(o.Hierarchy) {
		return true
	}

	return false
}

// SetHierarchy gets a reference to the given bool and assigns it to the Hierarchy field.
func (o *TerminologyMetadata) SetHierarchy(v bool) {
	o.Hierarchy = &v
}

// GetHierarchyRoles returns the HierarchyRoles field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetHierarchyRoles() []string {
	if o == nil || IsNil(o.HierarchyRoles) {
		var ret []string
		return ret
	}
	return o.HierarchyRoles
}

// GetHierarchyRolesOk returns a tuple with the HierarchyRoles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetHierarchyRolesOk() ([]string, bool) {
	if o == nil || IsNil(o.HierarchyRoles) {
		return nil, false
	}
	return o.HierarchyRoles, true
}

// HasHierarchyRoles returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasHierarchyRoles() bool {
	if o != nil && !IsNil(o.HierarchyRoles) {
		return true
	}

	return false
}

// SetHierarchyRoles gets a reference to the given []string and assigns it to the HierarchyRoles field.
func (o *TerminologyMetadata) SetHierarchyRoles(v []string) {
	o.HierarchyRoles = v
}

// GetHistory returns the History field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetHistory() bool {
	if o == nil || IsNil(o.History) {
		var ret bool
		return ret
	}
	return *o.History
}

// GetHistoryOk returns a tuple with the History field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetHistoryOk() (*bool, bool) {
	if o == nil || IsNil(o.History) {
		return nil, false
	}
	return o.History, true
}

// HasHistory returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasHistory() bool {
	if o != nil && !IsNil(o.History) {
		return true
	}

	return false
}

// SetHistory gets a reference to the given bool and assigns it to the History field.
func (o *TerminologyMetadata) SetHistory(v bool) {
	o.History = &v
}

// GetSourceCt returns the SourceCt field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetSourceCt() int32 {
	if o == nil || IsNil(o.SourceCt) {
		var ret int32
		return ret
	}
	return *o.SourceCt
}

// GetSourceCtOk returns a tuple with the SourceCt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetSourceCtOk() (*int32, bool) {
	if o == nil || IsNil(o.SourceCt) {
		return nil, false
	}
	return o.SourceCt, true
}

// HasSourceCt returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasSourceCt() bool {
	if o != nil && !IsNil(o.SourceCt) {
		return true
	}

	return false
}

// SetSourceCt gets a reference to the given int32 and assigns it to the SourceCt field.
func (o *TerminologyMetadata) SetSourceCt(v int32) {
	o.SourceCt = &v
}

// GetSubsetLink returns the SubsetLink field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetSubsetLink() string {
	if o == nil || IsNil(o.SubsetLink) {
		var ret string
		return ret
	}
	return *o.SubsetLink
}

// GetSubsetLinkOk returns a tuple with the SubsetLink field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetSubsetLinkOk() (*string, bool) {
	if o == nil || IsNil(o.SubsetLink) {
		return nil, false
	}
	return o.SubsetLink, true
}

// HasSubsetLink returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasSubsetLink() bool {
	if o != nil && !IsNil(o.SubsetLink) {
		return true
	}

	return false
}

// SetSubsetLink gets a reference to the given string and assigns it to the SubsetLink field.
func (o *TerminologyMetadata) SetSubsetLink(v string) {
	o.SubsetLink = &v
}

// GetLicenseText returns the LicenseText field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetLicenseText() string {
	if o == nil || IsNil(o.LicenseText) {
		var ret string
		return ret
	}
	return *o.LicenseText
}

// GetLicenseTextOk returns a tuple with the LicenseText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetLicenseTextOk() (*string, bool) {
	if o == nil || IsNil(o.LicenseText) {
		return nil, false
	}
	return o.LicenseText, true
}

// HasLicenseText returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasLicenseText() bool {
	if o != nil && !IsNil(o.LicenseText) {
		return true
	}

	return false
}

// SetLicenseText gets a reference to the given string and assigns it to the LicenseText field.
func (o *TerminologyMetadata) SetLicenseText(v string) {
	o.LicenseText = &v
}

// GetMetaConceptField returns the MetaConceptField field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetMetaConceptField() string {
	if o == nil || IsNil(o.MetaConceptField) {
		var ret string
		return ret
	}
	return *o.MetaConceptField
}

// GetMetaConceptFieldOk returns a tuple with the MetaConceptField field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetMetaConceptFieldOk() (*string, bool) {
	if o == nil || IsNil(o.MetaConceptField) {
		return nil, false
	}
	return o.MetaConceptField, true
}

// HasMetaConceptField returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasMetaConceptField() bool {
	if o != nil && !IsNil(o.MetaConceptField) {
		return true
	}

	return false
}

// SetMetaConceptField gets a reference to the given string and assigns it to the MetaConceptField field.
func (o *TerminologyMetadata) SetMetaConceptField(v string) {
	o.MetaConceptField = &v
}

// GetCodeLabel returns the CodeLabel field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetCodeLabel() string {
	if o == nil || IsNil(o.CodeLabel) {
		var ret string
		return ret
	}
	return *o.CodeLabel
}

// GetCodeLabelOk returns a tuple with the CodeLabel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetCodeLabelOk() (*string, bool) {
	if o == nil || IsNil(o.CodeLabel) {
		return nil, false
	}
	return o.CodeLabel, true
}

// HasCodeLabel returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasCodeLabel() bool {
	if o != nil && !IsNil(o.CodeLabel) {
		return true
	}

	return false
}

// SetCodeLabel gets a reference to the given string and assigns it to the CodeLabel field.
func (o *TerminologyMetadata) SetCodeLabel(v string) {
	o.CodeLabel = &v
}

// GetWelcomeText returns the WelcomeText field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetWelcomeText() string {
	if o == nil || IsNil(o.WelcomeText) {
		var ret string
		return ret
	}
	return *o.WelcomeText
}

// GetWelcomeTextOk returns a tuple with the WelcomeText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetWelcomeTextOk() (*string, bool) {
	if o == nil || IsNil(o.WelcomeText) {
		return nil, false
	}
	return o.WelcomeText, true
}

// HasWelcomeText returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasWelcomeText() bool {
	if o != nil && !IsNil(o.WelcomeText) {
		return true
	}

	return false
}

// SetWelcomeText gets a reference to the given string and assigns it to the WelcomeText field.
func (o *TerminologyMetadata) SetWelcomeText(v string) {
	o.WelcomeText = &v
}

// GetPreferredTermGroups returns the PreferredTermGroups field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetPreferredTermGroups() []string {
	if o == nil || IsNil(o.PreferredTermGroups) {
		var ret []string
		return ret
	}
	return o.PreferredTermGroups
}

// GetPreferredTermGroupsOk returns a tuple with the PreferredTermGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetPreferredTermGroupsOk() ([]string, bool) {
	if o == nil || IsNil(o.PreferredTermGroups) {
		return nil, false
	}
	return o.PreferredTermGroups, true
}

// HasPreferredTermGroups returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasPreferredTermGroups() bool {
	if o != nil && !IsNil(o.PreferredTermGroups) {
		return true
	}

	return false
}

// SetPreferredTermGroups gets a reference to the given []string and assigns it to the PreferredTermGroups field.
func (o *TerminologyMetadata) SetPreferredTermGroups(v []string) {
	o.PreferredTermGroups = v
}

// GetSynonymTermGroup returns the SynonymTermGroup field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetSynonymTermGroup() string {
	if o == nil || IsNil(o.SynonymTermGroup) {
		var ret string
		return ret
	}
	return *o.SynonymTermGroup
}

// GetSynonymTermGroupOk returns a tuple with the SynonymTermGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetSynonymTermGroupOk() (*string, bool) {
	if o == nil || IsNil(o.SynonymTermGroup) {
		return nil, false
	}
	return o.SynonymTermGroup, true
}

// HasSynonymTermGroup returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasSynonymTermGroup() bool {
	if o != nil && !IsNil(o.SynonymTermGroup) {
		return true
	}

	return false
}

// SetSynonymTermGroup gets a reference to the given string and assigns it to the SynonymTermGroup field.
func (o *TerminologyMetadata) SetSynonymTermGroup(v string) {
	o.SynonymTermGroup = &v
}

// GetTermGroups returns the TermGroups field value if set, zero value otherwise.
func (o *TerminologyMetadata) GetTermGroups() map[string]string {
	if o == nil || IsNil(o.TermGroups) {
		var ret map[string]string
		return ret
	}
	return *o.TermGroups
}

// GetTermGroupsOk returns a tuple with the TermGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TerminologyMetadata) GetTermGroupsOk() (*map[string]string, bool) {
	if o == nil || IsNil(o.TermGroups) {
		return nil, false
	}
	return o.TermGroups, true
}

// HasTermGroups returns a boolean if a field has been set.
func (o *TerminologyMetadata) HasTermGroups() bool {
	if o != nil && !IsNil(o.TermGroups) {
		return true
	}

	return false
}

// SetTermGroups gets a reference to the given map[string]string and assigns it to the TermGroups field.
func (o *TerminologyMetadata) SetTermGroups(v map[string]string) {
	o.TermGroups = &v
}

func (o TerminologyMetadata) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TerminologyMetadata) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.Ct) {
		toSerialize["ct"] = o.Ct
	}
	if !IsNil(o.UiLabel) {
		toSerialize["uiLabel"] = o.UiLabel
	}
	if !IsNil(o.MaxVersions) {
		toSerialize["maxVersions"] = o.MaxVersions
	}
	if !IsNil(o.Loader) {
		toSerialize["loader"] = o.Loader
	}
	if !IsNil(o.ConceptStatuses) {
		toSerialize["conceptStatuses"] = o.ConceptStatuses
	}
	if !IsNil(o.ExcludedProperties) {
		toSerialize["excludedProperties"] = o.ExcludedProperties
	}
	if !IsNil(o.RetiredStatusValue) {
		toSerialize["retiredStatusValue"] = o.RetiredStatusValue
	}
	if !IsNil(o.DetailsColumns) {
		toSerialize["detailsColumns"] = o.DetailsColumns
	}
	if !IsNil(o.Hierarchy) {
		toSerialize["hierarchy"] = o.Hierarchy
	}
	if !IsNil(o.HierarchyRoles) {
		toSerialize["hierarchyRoles"] = o.HierarchyRoles
	}
	if !IsNil(o.History) {
		toSerialize["history"] = o.History
	}
	if !IsNil(o.SourceCt) {
		toSerialize["sourceCt"] = o.SourceCt
	}
	if !IsNil(o.SubsetLink) {
		toSerialize["subsetLink"] = o.SubsetLink
	}
	if !IsNil(o.LicenseText) {
		toSerialize["licenseText"] = o.LicenseText
	}
	if !IsNil(o.MetaConceptField) {
		toSerialize["metaConceptField"] = o.MetaConceptField
	}
	if !IsNil(o.CodeLabel) {
		toSerialize["codeLabel"] = o.CodeLabel
	}
	if !IsNil(o.WelcomeText) {
		toSerialize["welcomeText"] = o.WelcomeText
	}
	if !IsNil(o.PreferredTermGroups) {
		toSerialize["preferredTermGroups"] = o.PreferredTermGroups
	}
	if !IsNil(o.SynonymTermGroup) {
		toSerialize["synonymTermGroup"] = o.SynonymTermGroup
	}
	if !IsNil(o.TermGroups) {
		toSerialize["termGroups"] = o.TermGroups
	}
	return toSerialize, nil
}

type NullableTerminologyMetadata struct {
	value *TerminologyMetadata
	isSet bool
}

func (v NullableTerminologyMetadata) Get() *TerminologyMetadata {
	return v.value
}

func (v *NullableTerminologyMetadata) Set(val *TerminologyMetadata) {
	v.value = val
	v.isSet = true
}

func (v NullableTerminologyMetadata) IsSet() bool {
	return v.isSet
}

func (v *NullableTerminologyMetadata) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTerminologyMetadata(val *TerminologyMetadata) *NullableTerminologyMetadata {
	return &NullableTerminologyMetadata{value: val, isSet: true}
}

func (v NullableTerminologyMetadata) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTerminologyMetadata) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


