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

// checks if the ApplicationVersion type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApplicationVersion{}

// ApplicationVersion struct for ApplicationVersion
type ApplicationVersion struct {
	Name *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
	Description *string `json:"description,omitempty"`
}

// NewApplicationVersion instantiates a new ApplicationVersion object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApplicationVersion() *ApplicationVersion {
	this := ApplicationVersion{}
	return &this
}

// NewApplicationVersionWithDefaults instantiates a new ApplicationVersion object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApplicationVersionWithDefaults() *ApplicationVersion {
	this := ApplicationVersion{}
	return &this
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ApplicationVersion) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationVersion) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ApplicationVersion) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ApplicationVersion) SetName(v string) {
	o.Name = &v
}

// GetVersion returns the Version field value if set, zero value otherwise.
func (o *ApplicationVersion) GetVersion() string {
	if o == nil || IsNil(o.Version) {
		var ret string
		return ret
	}
	return *o.Version
}

// GetVersionOk returns a tuple with the Version field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationVersion) GetVersionOk() (*string, bool) {
	if o == nil || IsNil(o.Version) {
		return nil, false
	}
	return o.Version, true
}

// HasVersion returns a boolean if a field has been set.
func (o *ApplicationVersion) HasVersion() bool {
	if o != nil && !IsNil(o.Version) {
		return true
	}

	return false
}

// SetVersion gets a reference to the given string and assigns it to the Version field.
func (o *ApplicationVersion) SetVersion(v string) {
	o.Version = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ApplicationVersion) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationVersion) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ApplicationVersion) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ApplicationVersion) SetDescription(v string) {
	o.Description = &v
}

func (o ApplicationVersion) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApplicationVersion) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Version) {
		toSerialize["version"] = o.Version
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	return toSerialize, nil
}

type NullableApplicationVersion struct {
	value *ApplicationVersion
	isSet bool
}

func (v NullableApplicationVersion) Get() *ApplicationVersion {
	return v.value
}

func (v *NullableApplicationVersion) Set(val *ApplicationVersion) {
	v.value = val
	v.isSet = true
}

func (v NullableApplicationVersion) IsSet() bool {
	return v.isSet
}

func (v *NullableApplicationVersion) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApplicationVersion(val *ApplicationVersion) *NullableApplicationVersion {
	return &NullableApplicationVersion{value: val, isSet: true}
}

func (v NullableApplicationVersion) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApplicationVersion) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

