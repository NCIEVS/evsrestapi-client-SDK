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

// checks if the Path type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Path{}

// Path Represents a path (or partial path) in a hierarchy
type Path struct {
	// URI for this element in an rdf-based source file
	Uri *string `json:"uri,omitempty"`
	// Used to indicate the total amount of data in cases where a limit is being applied
	Ct *int32 `json:"ct,omitempty"`
	// Direction of the map (1 means node-to-root, -1 means root-to-node)
	Direction *int32 `json:"direction,omitempty"`
	// Concepts on the path
	Concepts []ConceptMinimal `json:"concepts,omitempty"`
}

// NewPath instantiates a new Path object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPath() *Path {
	this := Path{}
	return &this
}

// NewPathWithDefaults instantiates a new Path object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPathWithDefaults() *Path {
	this := Path{}
	return &this
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *Path) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Path) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *Path) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *Path) SetUri(v string) {
	o.Uri = &v
}

// GetCt returns the Ct field value if set, zero value otherwise.
func (o *Path) GetCt() int32 {
	if o == nil || IsNil(o.Ct) {
		var ret int32
		return ret
	}
	return *o.Ct
}

// GetCtOk returns a tuple with the Ct field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Path) GetCtOk() (*int32, bool) {
	if o == nil || IsNil(o.Ct) {
		return nil, false
	}
	return o.Ct, true
}

// HasCt returns a boolean if a field has been set.
func (o *Path) HasCt() bool {
	if o != nil && !IsNil(o.Ct) {
		return true
	}

	return false
}

// SetCt gets a reference to the given int32 and assigns it to the Ct field.
func (o *Path) SetCt(v int32) {
	o.Ct = &v
}

// GetDirection returns the Direction field value if set, zero value otherwise.
func (o *Path) GetDirection() int32 {
	if o == nil || IsNil(o.Direction) {
		var ret int32
		return ret
	}
	return *o.Direction
}

// GetDirectionOk returns a tuple with the Direction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Path) GetDirectionOk() (*int32, bool) {
	if o == nil || IsNil(o.Direction) {
		return nil, false
	}
	return o.Direction, true
}

// HasDirection returns a boolean if a field has been set.
func (o *Path) HasDirection() bool {
	if o != nil && !IsNil(o.Direction) {
		return true
	}

	return false
}

// SetDirection gets a reference to the given int32 and assigns it to the Direction field.
func (o *Path) SetDirection(v int32) {
	o.Direction = &v
}

// GetConcepts returns the Concepts field value if set, zero value otherwise.
func (o *Path) GetConcepts() []ConceptMinimal {
	if o == nil || IsNil(o.Concepts) {
		var ret []ConceptMinimal
		return ret
	}
	return o.Concepts
}

// GetConceptsOk returns a tuple with the Concepts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Path) GetConceptsOk() ([]ConceptMinimal, bool) {
	if o == nil || IsNil(o.Concepts) {
		return nil, false
	}
	return o.Concepts, true
}

// HasConcepts returns a boolean if a field has been set.
func (o *Path) HasConcepts() bool {
	if o != nil && !IsNil(o.Concepts) {
		return true
	}

	return false
}

// SetConcepts gets a reference to the given []ConceptMinimal and assigns it to the Concepts field.
func (o *Path) SetConcepts(v []ConceptMinimal) {
	o.Concepts = v
}

func (o Path) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Path) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.Ct) {
		toSerialize["ct"] = o.Ct
	}
	if !IsNil(o.Direction) {
		toSerialize["direction"] = o.Direction
	}
	if !IsNil(o.Concepts) {
		toSerialize["concepts"] = o.Concepts
	}
	return toSerialize, nil
}

type NullablePath struct {
	value *Path
	isSet bool
}

func (v NullablePath) Get() *Path {
	return v.value
}

func (v *NullablePath) Set(val *Path) {
	v.value = val
	v.isSet = true
}

func (v NullablePath) IsSet() bool {
	return v.isSet
}

func (v *NullablePath) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePath(val *Path) *NullablePath {
	return &NullablePath{value: val, isSet: true}
}

func (v NullablePath) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePath) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


