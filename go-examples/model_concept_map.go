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

// checks if the ConceptMap type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConceptMap{}

// ConceptMap Represents a map from a concept to concepts in other terminologies
type ConceptMap struct {
	// URI for this element in an rdf-based source file
	Uri *string `json:"uri,omitempty"`
	// Used to indicate the total amount of data in cases where a limit is being applied
	Ct *int32 `json:"ct,omitempty"`
	MapsetCode *string `json:"mapsetCode,omitempty"`
	// Terminology of the source code, e.g. 'ncit'
	Source *string `json:"source,omitempty"`
	// Preferred name of the source code
	SourceName *string `json:"sourceName,omitempty"`
	// Term type of the source code
	SourceTermType *string `json:"sourceTermType,omitempty"`
	// Source code of the map (the thing being mapped 'from')
	SourceCode *string `json:"sourceCode,omitempty"`
	// Human-readable label for the terminology of the source code, e.g. 'NCI Thesaurus'
	SourceTerminology *string `json:"sourceTerminology,omitempty"`
	// Terminology version of the source code
	SourceTerminologyVersion *string `json:"sourceTerminologyVersion,omitempty"`
	// Indicates whether the source code terminology/version is currently loaded
	SourceLoaded *bool `json:"sourceLoaded,omitempty"`
	Type *string `json:"type,omitempty"`
	Rank *string `json:"rank,omitempty"`
	Group *string `json:"group,omitempty"`
	Rule *string `json:"rule,omitempty"`
	// Terminology of the target code, e.g. 'ncit'
	Target *string `json:"target,omitempty"`
	TargetName *string `json:"targetName,omitempty"`
	TargetTermType *string `json:"targetTermType,omitempty"`
	// Target code of the map (the thing being mapped 'to')
	TargetCode *string `json:"targetCode,omitempty"`
	// Human-readable label for the terminology of the target code, e.g. 'NCI Thesaurus'
	TargetTerminology *string `json:"targetTerminology,omitempty"`
	// Terminology version of the target code
	TargetTerminologyVersion *string `json:"targetTerminologyVersion,omitempty"`
	// Indicates whether the target terminology/version is currently loaded
	TargetLoaded *bool `json:"targetLoaded,omitempty"`
	SortKey *string `json:"sortKey,omitempty"`
	TargetTermGroup *string `json:"targetTermGroup,omitempty"`
}

// NewConceptMap instantiates a new ConceptMap object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConceptMap() *ConceptMap {
	this := ConceptMap{}
	return &this
}

// NewConceptMapWithDefaults instantiates a new ConceptMap object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConceptMapWithDefaults() *ConceptMap {
	this := ConceptMap{}
	return &this
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *ConceptMap) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *ConceptMap) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *ConceptMap) SetUri(v string) {
	o.Uri = &v
}

// GetCt returns the Ct field value if set, zero value otherwise.
func (o *ConceptMap) GetCt() int32 {
	if o == nil || IsNil(o.Ct) {
		var ret int32
		return ret
	}
	return *o.Ct
}

// GetCtOk returns a tuple with the Ct field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetCtOk() (*int32, bool) {
	if o == nil || IsNil(o.Ct) {
		return nil, false
	}
	return o.Ct, true
}

// HasCt returns a boolean if a field has been set.
func (o *ConceptMap) HasCt() bool {
	if o != nil && !IsNil(o.Ct) {
		return true
	}

	return false
}

// SetCt gets a reference to the given int32 and assigns it to the Ct field.
func (o *ConceptMap) SetCt(v int32) {
	o.Ct = &v
}

// GetMapsetCode returns the MapsetCode field value if set, zero value otherwise.
func (o *ConceptMap) GetMapsetCode() string {
	if o == nil || IsNil(o.MapsetCode) {
		var ret string
		return ret
	}
	return *o.MapsetCode
}

// GetMapsetCodeOk returns a tuple with the MapsetCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetMapsetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.MapsetCode) {
		return nil, false
	}
	return o.MapsetCode, true
}

// HasMapsetCode returns a boolean if a field has been set.
func (o *ConceptMap) HasMapsetCode() bool {
	if o != nil && !IsNil(o.MapsetCode) {
		return true
	}

	return false
}

// SetMapsetCode gets a reference to the given string and assigns it to the MapsetCode field.
func (o *ConceptMap) SetMapsetCode(v string) {
	o.MapsetCode = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ConceptMap) GetSource() string {
	if o == nil || IsNil(o.Source) {
		var ret string
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceOk() (*string, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ConceptMap) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given string and assigns it to the Source field.
func (o *ConceptMap) SetSource(v string) {
	o.Source = &v
}

// GetSourceName returns the SourceName field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceName() string {
	if o == nil || IsNil(o.SourceName) {
		var ret string
		return ret
	}
	return *o.SourceName
}

// GetSourceNameOk returns a tuple with the SourceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceNameOk() (*string, bool) {
	if o == nil || IsNil(o.SourceName) {
		return nil, false
	}
	return o.SourceName, true
}

// HasSourceName returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceName() bool {
	if o != nil && !IsNil(o.SourceName) {
		return true
	}

	return false
}

// SetSourceName gets a reference to the given string and assigns it to the SourceName field.
func (o *ConceptMap) SetSourceName(v string) {
	o.SourceName = &v
}

// GetSourceTermType returns the SourceTermType field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceTermType() string {
	if o == nil || IsNil(o.SourceTermType) {
		var ret string
		return ret
	}
	return *o.SourceTermType
}

// GetSourceTermTypeOk returns a tuple with the SourceTermType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceTermTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceTermType) {
		return nil, false
	}
	return o.SourceTermType, true
}

// HasSourceTermType returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceTermType() bool {
	if o != nil && !IsNil(o.SourceTermType) {
		return true
	}

	return false
}

// SetSourceTermType gets a reference to the given string and assigns it to the SourceTermType field.
func (o *ConceptMap) SetSourceTermType(v string) {
	o.SourceTermType = &v
}

// GetSourceCode returns the SourceCode field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceCode() string {
	if o == nil || IsNil(o.SourceCode) {
		var ret string
		return ret
	}
	return *o.SourceCode
}

// GetSourceCodeOk returns a tuple with the SourceCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SourceCode) {
		return nil, false
	}
	return o.SourceCode, true
}

// HasSourceCode returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceCode() bool {
	if o != nil && !IsNil(o.SourceCode) {
		return true
	}

	return false
}

// SetSourceCode gets a reference to the given string and assigns it to the SourceCode field.
func (o *ConceptMap) SetSourceCode(v string) {
	o.SourceCode = &v
}

// GetSourceTerminology returns the SourceTerminology field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceTerminology() string {
	if o == nil || IsNil(o.SourceTerminology) {
		var ret string
		return ret
	}
	return *o.SourceTerminology
}

// GetSourceTerminologyOk returns a tuple with the SourceTerminology field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceTerminologyOk() (*string, bool) {
	if o == nil || IsNil(o.SourceTerminology) {
		return nil, false
	}
	return o.SourceTerminology, true
}

// HasSourceTerminology returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceTerminology() bool {
	if o != nil && !IsNil(o.SourceTerminology) {
		return true
	}

	return false
}

// SetSourceTerminology gets a reference to the given string and assigns it to the SourceTerminology field.
func (o *ConceptMap) SetSourceTerminology(v string) {
	o.SourceTerminology = &v
}

// GetSourceTerminologyVersion returns the SourceTerminologyVersion field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceTerminologyVersion() string {
	if o == nil || IsNil(o.SourceTerminologyVersion) {
		var ret string
		return ret
	}
	return *o.SourceTerminologyVersion
}

// GetSourceTerminologyVersionOk returns a tuple with the SourceTerminologyVersion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceTerminologyVersionOk() (*string, bool) {
	if o == nil || IsNil(o.SourceTerminologyVersion) {
		return nil, false
	}
	return o.SourceTerminologyVersion, true
}

// HasSourceTerminologyVersion returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceTerminologyVersion() bool {
	if o != nil && !IsNil(o.SourceTerminologyVersion) {
		return true
	}

	return false
}

// SetSourceTerminologyVersion gets a reference to the given string and assigns it to the SourceTerminologyVersion field.
func (o *ConceptMap) SetSourceTerminologyVersion(v string) {
	o.SourceTerminologyVersion = &v
}

// GetSourceLoaded returns the SourceLoaded field value if set, zero value otherwise.
func (o *ConceptMap) GetSourceLoaded() bool {
	if o == nil || IsNil(o.SourceLoaded) {
		var ret bool
		return ret
	}
	return *o.SourceLoaded
}

// GetSourceLoadedOk returns a tuple with the SourceLoaded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSourceLoadedOk() (*bool, bool) {
	if o == nil || IsNil(o.SourceLoaded) {
		return nil, false
	}
	return o.SourceLoaded, true
}

// HasSourceLoaded returns a boolean if a field has been set.
func (o *ConceptMap) HasSourceLoaded() bool {
	if o != nil && !IsNil(o.SourceLoaded) {
		return true
	}

	return false
}

// SetSourceLoaded gets a reference to the given bool and assigns it to the SourceLoaded field.
func (o *ConceptMap) SetSourceLoaded(v bool) {
	o.SourceLoaded = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ConceptMap) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ConceptMap) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ConceptMap) SetType(v string) {
	o.Type = &v
}

// GetRank returns the Rank field value if set, zero value otherwise.
func (o *ConceptMap) GetRank() string {
	if o == nil || IsNil(o.Rank) {
		var ret string
		return ret
	}
	return *o.Rank
}

// GetRankOk returns a tuple with the Rank field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetRankOk() (*string, bool) {
	if o == nil || IsNil(o.Rank) {
		return nil, false
	}
	return o.Rank, true
}

// HasRank returns a boolean if a field has been set.
func (o *ConceptMap) HasRank() bool {
	if o != nil && !IsNil(o.Rank) {
		return true
	}

	return false
}

// SetRank gets a reference to the given string and assigns it to the Rank field.
func (o *ConceptMap) SetRank(v string) {
	o.Rank = &v
}

// GetGroup returns the Group field value if set, zero value otherwise.
func (o *ConceptMap) GetGroup() string {
	if o == nil || IsNil(o.Group) {
		var ret string
		return ret
	}
	return *o.Group
}

// GetGroupOk returns a tuple with the Group field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetGroupOk() (*string, bool) {
	if o == nil || IsNil(o.Group) {
		return nil, false
	}
	return o.Group, true
}

// HasGroup returns a boolean if a field has been set.
func (o *ConceptMap) HasGroup() bool {
	if o != nil && !IsNil(o.Group) {
		return true
	}

	return false
}

// SetGroup gets a reference to the given string and assigns it to the Group field.
func (o *ConceptMap) SetGroup(v string) {
	o.Group = &v
}

// GetRule returns the Rule field value if set, zero value otherwise.
func (o *ConceptMap) GetRule() string {
	if o == nil || IsNil(o.Rule) {
		var ret string
		return ret
	}
	return *o.Rule
}

// GetRuleOk returns a tuple with the Rule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetRuleOk() (*string, bool) {
	if o == nil || IsNil(o.Rule) {
		return nil, false
	}
	return o.Rule, true
}

// HasRule returns a boolean if a field has been set.
func (o *ConceptMap) HasRule() bool {
	if o != nil && !IsNil(o.Rule) {
		return true
	}

	return false
}

// SetRule gets a reference to the given string and assigns it to the Rule field.
func (o *ConceptMap) SetRule(v string) {
	o.Rule = &v
}

// GetTarget returns the Target field value if set, zero value otherwise.
func (o *ConceptMap) GetTarget() string {
	if o == nil || IsNil(o.Target) {
		var ret string
		return ret
	}
	return *o.Target
}

// GetTargetOk returns a tuple with the Target field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetOk() (*string, bool) {
	if o == nil || IsNil(o.Target) {
		return nil, false
	}
	return o.Target, true
}

// HasTarget returns a boolean if a field has been set.
func (o *ConceptMap) HasTarget() bool {
	if o != nil && !IsNil(o.Target) {
		return true
	}

	return false
}

// SetTarget gets a reference to the given string and assigns it to the Target field.
func (o *ConceptMap) SetTarget(v string) {
	o.Target = &v
}

// GetTargetName returns the TargetName field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetName() string {
	if o == nil || IsNil(o.TargetName) {
		var ret string
		return ret
	}
	return *o.TargetName
}

// GetTargetNameOk returns a tuple with the TargetName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetNameOk() (*string, bool) {
	if o == nil || IsNil(o.TargetName) {
		return nil, false
	}
	return o.TargetName, true
}

// HasTargetName returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetName() bool {
	if o != nil && !IsNil(o.TargetName) {
		return true
	}

	return false
}

// SetTargetName gets a reference to the given string and assigns it to the TargetName field.
func (o *ConceptMap) SetTargetName(v string) {
	o.TargetName = &v
}

// GetTargetTermType returns the TargetTermType field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetTermType() string {
	if o == nil || IsNil(o.TargetTermType) {
		var ret string
		return ret
	}
	return *o.TargetTermType
}

// GetTargetTermTypeOk returns a tuple with the TargetTermType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetTermTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TargetTermType) {
		return nil, false
	}
	return o.TargetTermType, true
}

// HasTargetTermType returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetTermType() bool {
	if o != nil && !IsNil(o.TargetTermType) {
		return true
	}

	return false
}

// SetTargetTermType gets a reference to the given string and assigns it to the TargetTermType field.
func (o *ConceptMap) SetTargetTermType(v string) {
	o.TargetTermType = &v
}

// GetTargetCode returns the TargetCode field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetCode() string {
	if o == nil || IsNil(o.TargetCode) {
		var ret string
		return ret
	}
	return *o.TargetCode
}

// GetTargetCodeOk returns a tuple with the TargetCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TargetCode) {
		return nil, false
	}
	return o.TargetCode, true
}

// HasTargetCode returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetCode() bool {
	if o != nil && !IsNil(o.TargetCode) {
		return true
	}

	return false
}

// SetTargetCode gets a reference to the given string and assigns it to the TargetCode field.
func (o *ConceptMap) SetTargetCode(v string) {
	o.TargetCode = &v
}

// GetTargetTerminology returns the TargetTerminology field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetTerminology() string {
	if o == nil || IsNil(o.TargetTerminology) {
		var ret string
		return ret
	}
	return *o.TargetTerminology
}

// GetTargetTerminologyOk returns a tuple with the TargetTerminology field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetTerminologyOk() (*string, bool) {
	if o == nil || IsNil(o.TargetTerminology) {
		return nil, false
	}
	return o.TargetTerminology, true
}

// HasTargetTerminology returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetTerminology() bool {
	if o != nil && !IsNil(o.TargetTerminology) {
		return true
	}

	return false
}

// SetTargetTerminology gets a reference to the given string and assigns it to the TargetTerminology field.
func (o *ConceptMap) SetTargetTerminology(v string) {
	o.TargetTerminology = &v
}

// GetTargetTerminologyVersion returns the TargetTerminologyVersion field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetTerminologyVersion() string {
	if o == nil || IsNil(o.TargetTerminologyVersion) {
		var ret string
		return ret
	}
	return *o.TargetTerminologyVersion
}

// GetTargetTerminologyVersionOk returns a tuple with the TargetTerminologyVersion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetTerminologyVersionOk() (*string, bool) {
	if o == nil || IsNil(o.TargetTerminologyVersion) {
		return nil, false
	}
	return o.TargetTerminologyVersion, true
}

// HasTargetTerminologyVersion returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetTerminologyVersion() bool {
	if o != nil && !IsNil(o.TargetTerminologyVersion) {
		return true
	}

	return false
}

// SetTargetTerminologyVersion gets a reference to the given string and assigns it to the TargetTerminologyVersion field.
func (o *ConceptMap) SetTargetTerminologyVersion(v string) {
	o.TargetTerminologyVersion = &v
}

// GetTargetLoaded returns the TargetLoaded field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetLoaded() bool {
	if o == nil || IsNil(o.TargetLoaded) {
		var ret bool
		return ret
	}
	return *o.TargetLoaded
}

// GetTargetLoadedOk returns a tuple with the TargetLoaded field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetLoadedOk() (*bool, bool) {
	if o == nil || IsNil(o.TargetLoaded) {
		return nil, false
	}
	return o.TargetLoaded, true
}

// HasTargetLoaded returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetLoaded() bool {
	if o != nil && !IsNil(o.TargetLoaded) {
		return true
	}

	return false
}

// SetTargetLoaded gets a reference to the given bool and assigns it to the TargetLoaded field.
func (o *ConceptMap) SetTargetLoaded(v bool) {
	o.TargetLoaded = &v
}

// GetSortKey returns the SortKey field value if set, zero value otherwise.
func (o *ConceptMap) GetSortKey() string {
	if o == nil || IsNil(o.SortKey) {
		var ret string
		return ret
	}
	return *o.SortKey
}

// GetSortKeyOk returns a tuple with the SortKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetSortKeyOk() (*string, bool) {
	if o == nil || IsNil(o.SortKey) {
		return nil, false
	}
	return o.SortKey, true
}

// HasSortKey returns a boolean if a field has been set.
func (o *ConceptMap) HasSortKey() bool {
	if o != nil && !IsNil(o.SortKey) {
		return true
	}

	return false
}

// SetSortKey gets a reference to the given string and assigns it to the SortKey field.
func (o *ConceptMap) SetSortKey(v string) {
	o.SortKey = &v
}

// GetTargetTermGroup returns the TargetTermGroup field value if set, zero value otherwise.
func (o *ConceptMap) GetTargetTermGroup() string {
	if o == nil || IsNil(o.TargetTermGroup) {
		var ret string
		return ret
	}
	return *o.TargetTermGroup
}

// GetTargetTermGroupOk returns a tuple with the TargetTermGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConceptMap) GetTargetTermGroupOk() (*string, bool) {
	if o == nil || IsNil(o.TargetTermGroup) {
		return nil, false
	}
	return o.TargetTermGroup, true
}

// HasTargetTermGroup returns a boolean if a field has been set.
func (o *ConceptMap) HasTargetTermGroup() bool {
	if o != nil && !IsNil(o.TargetTermGroup) {
		return true
	}

	return false
}

// SetTargetTermGroup gets a reference to the given string and assigns it to the TargetTermGroup field.
func (o *ConceptMap) SetTargetTermGroup(v string) {
	o.TargetTermGroup = &v
}

func (o ConceptMap) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConceptMap) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.Ct) {
		toSerialize["ct"] = o.Ct
	}
	if !IsNil(o.MapsetCode) {
		toSerialize["mapsetCode"] = o.MapsetCode
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.SourceName) {
		toSerialize["sourceName"] = o.SourceName
	}
	if !IsNil(o.SourceTermType) {
		toSerialize["sourceTermType"] = o.SourceTermType
	}
	if !IsNil(o.SourceCode) {
		toSerialize["sourceCode"] = o.SourceCode
	}
	if !IsNil(o.SourceTerminology) {
		toSerialize["sourceTerminology"] = o.SourceTerminology
	}
	if !IsNil(o.SourceTerminologyVersion) {
		toSerialize["sourceTerminologyVersion"] = o.SourceTerminologyVersion
	}
	if !IsNil(o.SourceLoaded) {
		toSerialize["sourceLoaded"] = o.SourceLoaded
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Rank) {
		toSerialize["rank"] = o.Rank
	}
	if !IsNil(o.Group) {
		toSerialize["group"] = o.Group
	}
	if !IsNil(o.Rule) {
		toSerialize["rule"] = o.Rule
	}
	if !IsNil(o.Target) {
		toSerialize["target"] = o.Target
	}
	if !IsNil(o.TargetName) {
		toSerialize["targetName"] = o.TargetName
	}
	if !IsNil(o.TargetTermType) {
		toSerialize["targetTermType"] = o.TargetTermType
	}
	if !IsNil(o.TargetCode) {
		toSerialize["targetCode"] = o.TargetCode
	}
	if !IsNil(o.TargetTerminology) {
		toSerialize["targetTerminology"] = o.TargetTerminology
	}
	if !IsNil(o.TargetTerminologyVersion) {
		toSerialize["targetTerminologyVersion"] = o.TargetTerminologyVersion
	}
	if !IsNil(o.TargetLoaded) {
		toSerialize["targetLoaded"] = o.TargetLoaded
	}
	if !IsNil(o.SortKey) {
		toSerialize["sortKey"] = o.SortKey
	}
	if !IsNil(o.TargetTermGroup) {
		toSerialize["targetTermGroup"] = o.TargetTermGroup
	}
	return toSerialize, nil
}

type NullableConceptMap struct {
	value *ConceptMap
	isSet bool
}

func (v NullableConceptMap) Get() *ConceptMap {
	return v.value
}

func (v *NullableConceptMap) Set(val *ConceptMap) {
	v.value = val
	v.isSet = true
}

func (v NullableConceptMap) IsSet() bool {
	return v.isSet
}

func (v *NullableConceptMap) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConceptMap(val *ConceptMap) *NullableConceptMap {
	return &NullableConceptMap{value: val, isSet: true}
}

func (v NullableConceptMap) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConceptMap) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

