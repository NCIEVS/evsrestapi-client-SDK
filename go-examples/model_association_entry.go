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

// checks if the AssociationEntry type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AssociationEntry{}

// AssociationEntry Represents an entry in a table of associations between two concepts
type AssociationEntry struct {
	// URI for this element in an rdf-based source file
	Uri *string `json:"uri,omitempty"`
	// Used to indicate the total amount of data in cases where a limit is being applied
	Ct *int32 `json:"ct,omitempty"`
	// Code on the 'from' side of the association
	Code *string `json:"code,omitempty"`
	// Relationship type
	Type *string `json:"type,omitempty"`
	// Code on the 'to' side of the association
	RelatedCode *string `json:"relatedCode,omitempty"`
	// Preferred name of the related code
	RelatedName *string `json:"relatedName,omitempty"`
	// Relationship source
	Source *string `json:"source,omitempty"`
	// Used by search calls to provide information for highlighting a view of results
	Highlight *string `json:"highlight,omitempty"`
	// Type/value qualifiers on the relationship
	Qualifiers []Qualifier `json:"qualifiers,omitempty"`
	// Terminology abbreviation, e.g. 'nci'
	Terminology *string `json:"terminology,omitempty"`
	// Terminology version, e.g. '23.11d'
	Version *string `json:"version,omitempty"`
	// Type of relationship between code and related code
	Association *string `json:"association,omitempty"`
	// Preferred name of the code
	Name *string `json:"name,omitempty"`
}

// NewAssociationEntry instantiates a new AssociationEntry object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssociationEntry() *AssociationEntry {
	this := AssociationEntry{}
	return &this
}

// NewAssociationEntryWithDefaults instantiates a new AssociationEntry object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssociationEntryWithDefaults() *AssociationEntry {
	this := AssociationEntry{}
	return &this
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *AssociationEntry) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *AssociationEntry) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *AssociationEntry) SetUri(v string) {
	o.Uri = &v
}

// GetCt returns the Ct field value if set, zero value otherwise.
func (o *AssociationEntry) GetCt() int32 {
	if o == nil || IsNil(o.Ct) {
		var ret int32
		return ret
	}
	return *o.Ct
}

// GetCtOk returns a tuple with the Ct field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetCtOk() (*int32, bool) {
	if o == nil || IsNil(o.Ct) {
		return nil, false
	}
	return o.Ct, true
}

// HasCt returns a boolean if a field has been set.
func (o *AssociationEntry) HasCt() bool {
	if o != nil && !IsNil(o.Ct) {
		return true
	}

	return false
}

// SetCt gets a reference to the given int32 and assigns it to the Ct field.
func (o *AssociationEntry) SetCt(v int32) {
	o.Ct = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *AssociationEntry) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *AssociationEntry) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *AssociationEntry) SetCode(v string) {
	o.Code = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *AssociationEntry) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *AssociationEntry) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *AssociationEntry) SetType(v string) {
	o.Type = &v
}

// GetRelatedCode returns the RelatedCode field value if set, zero value otherwise.
func (o *AssociationEntry) GetRelatedCode() string {
	if o == nil || IsNil(o.RelatedCode) {
		var ret string
		return ret
	}
	return *o.RelatedCode
}

// GetRelatedCodeOk returns a tuple with the RelatedCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetRelatedCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RelatedCode) {
		return nil, false
	}
	return o.RelatedCode, true
}

// HasRelatedCode returns a boolean if a field has been set.
func (o *AssociationEntry) HasRelatedCode() bool {
	if o != nil && !IsNil(o.RelatedCode) {
		return true
	}

	return false
}

// SetRelatedCode gets a reference to the given string and assigns it to the RelatedCode field.
func (o *AssociationEntry) SetRelatedCode(v string) {
	o.RelatedCode = &v
}

// GetRelatedName returns the RelatedName field value if set, zero value otherwise.
func (o *AssociationEntry) GetRelatedName() string {
	if o == nil || IsNil(o.RelatedName) {
		var ret string
		return ret
	}
	return *o.RelatedName
}

// GetRelatedNameOk returns a tuple with the RelatedName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetRelatedNameOk() (*string, bool) {
	if o == nil || IsNil(o.RelatedName) {
		return nil, false
	}
	return o.RelatedName, true
}

// HasRelatedName returns a boolean if a field has been set.
func (o *AssociationEntry) HasRelatedName() bool {
	if o != nil && !IsNil(o.RelatedName) {
		return true
	}

	return false
}

// SetRelatedName gets a reference to the given string and assigns it to the RelatedName field.
func (o *AssociationEntry) SetRelatedName(v string) {
	o.RelatedName = &v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *AssociationEntry) GetSource() string {
	if o == nil || IsNil(o.Source) {
		var ret string
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetSourceOk() (*string, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *AssociationEntry) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given string and assigns it to the Source field.
func (o *AssociationEntry) SetSource(v string) {
	o.Source = &v
}

// GetHighlight returns the Highlight field value if set, zero value otherwise.
func (o *AssociationEntry) GetHighlight() string {
	if o == nil || IsNil(o.Highlight) {
		var ret string
		return ret
	}
	return *o.Highlight
}

// GetHighlightOk returns a tuple with the Highlight field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetHighlightOk() (*string, bool) {
	if o == nil || IsNil(o.Highlight) {
		return nil, false
	}
	return o.Highlight, true
}

// HasHighlight returns a boolean if a field has been set.
func (o *AssociationEntry) HasHighlight() bool {
	if o != nil && !IsNil(o.Highlight) {
		return true
	}

	return false
}

// SetHighlight gets a reference to the given string and assigns it to the Highlight field.
func (o *AssociationEntry) SetHighlight(v string) {
	o.Highlight = &v
}

// GetQualifiers returns the Qualifiers field value if set, zero value otherwise.
func (o *AssociationEntry) GetQualifiers() []Qualifier {
	if o == nil || IsNil(o.Qualifiers) {
		var ret []Qualifier
		return ret
	}
	return o.Qualifiers
}

// GetQualifiersOk returns a tuple with the Qualifiers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetQualifiersOk() ([]Qualifier, bool) {
	if o == nil || IsNil(o.Qualifiers) {
		return nil, false
	}
	return o.Qualifiers, true
}

// HasQualifiers returns a boolean if a field has been set.
func (o *AssociationEntry) HasQualifiers() bool {
	if o != nil && !IsNil(o.Qualifiers) {
		return true
	}

	return false
}

// SetQualifiers gets a reference to the given []Qualifier and assigns it to the Qualifiers field.
func (o *AssociationEntry) SetQualifiers(v []Qualifier) {
	o.Qualifiers = v
}

// GetTerminology returns the Terminology field value if set, zero value otherwise.
func (o *AssociationEntry) GetTerminology() string {
	if o == nil || IsNil(o.Terminology) {
		var ret string
		return ret
	}
	return *o.Terminology
}

// GetTerminologyOk returns a tuple with the Terminology field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetTerminologyOk() (*string, bool) {
	if o == nil || IsNil(o.Terminology) {
		return nil, false
	}
	return o.Terminology, true
}

// HasTerminology returns a boolean if a field has been set.
func (o *AssociationEntry) HasTerminology() bool {
	if o != nil && !IsNil(o.Terminology) {
		return true
	}

	return false
}

// SetTerminology gets a reference to the given string and assigns it to the Terminology field.
func (o *AssociationEntry) SetTerminology(v string) {
	o.Terminology = &v
}

// GetVersion returns the Version field value if set, zero value otherwise.
func (o *AssociationEntry) GetVersion() string {
	if o == nil || IsNil(o.Version) {
		var ret string
		return ret
	}
	return *o.Version
}

// GetVersionOk returns a tuple with the Version field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetVersionOk() (*string, bool) {
	if o == nil || IsNil(o.Version) {
		return nil, false
	}
	return o.Version, true
}

// HasVersion returns a boolean if a field has been set.
func (o *AssociationEntry) HasVersion() bool {
	if o != nil && !IsNil(o.Version) {
		return true
	}

	return false
}

// SetVersion gets a reference to the given string and assigns it to the Version field.
func (o *AssociationEntry) SetVersion(v string) {
	o.Version = &v
}

// GetAssociation returns the Association field value if set, zero value otherwise.
func (o *AssociationEntry) GetAssociation() string {
	if o == nil || IsNil(o.Association) {
		var ret string
		return ret
	}
	return *o.Association
}

// GetAssociationOk returns a tuple with the Association field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetAssociationOk() (*string, bool) {
	if o == nil || IsNil(o.Association) {
		return nil, false
	}
	return o.Association, true
}

// HasAssociation returns a boolean if a field has been set.
func (o *AssociationEntry) HasAssociation() bool {
	if o != nil && !IsNil(o.Association) {
		return true
	}

	return false
}

// SetAssociation gets a reference to the given string and assigns it to the Association field.
func (o *AssociationEntry) SetAssociation(v string) {
	o.Association = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *AssociationEntry) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociationEntry) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *AssociationEntry) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *AssociationEntry) SetName(v string) {
	o.Name = &v
}

func (o AssociationEntry) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AssociationEntry) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.Ct) {
		toSerialize["ct"] = o.Ct
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.RelatedCode) {
		toSerialize["relatedCode"] = o.RelatedCode
	}
	if !IsNil(o.RelatedName) {
		toSerialize["relatedName"] = o.RelatedName
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.Highlight) {
		toSerialize["highlight"] = o.Highlight
	}
	if !IsNil(o.Qualifiers) {
		toSerialize["qualifiers"] = o.Qualifiers
	}
	if !IsNil(o.Terminology) {
		toSerialize["terminology"] = o.Terminology
	}
	if !IsNil(o.Version) {
		toSerialize["version"] = o.Version
	}
	if !IsNil(o.Association) {
		toSerialize["association"] = o.Association
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	return toSerialize, nil
}

type NullableAssociationEntry struct {
	value *AssociationEntry
	isSet bool
}

func (v NullableAssociationEntry) Get() *AssociationEntry {
	return v.value
}

func (v *NullableAssociationEntry) Set(val *AssociationEntry) {
	v.value = val
	v.isSet = true
}

func (v NullableAssociationEntry) IsSet() bool {
	return v.isSet
}

func (v *NullableAssociationEntry) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssociationEntry(val *AssociationEntry) *NullableAssociationEntry {
	return &NullableAssociationEntry{value: val, isSet: true}
}

func (v NullableAssociationEntry) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssociationEntry) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

