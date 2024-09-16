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

// checks if the MapResultList type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MapResultList{}

// MapResultList Represents a list of objects returned from a find call
type MapResultList struct {
	// URI for this element in an rdf-based source file
	Uri *string `json:"uri,omitempty"`
	// Used to indicate the total amount of data in cases where a limit is being applied
	Ct *int32 `json:"ct,omitempty"`
	// Total nubmer of results (if paging is not considered)
	Total *int64 `json:"total,omitempty"`
	// Total time taken to compute the result
	TimeTaken *int64 `json:"timeTaken,omitempty"`
	Parameters *SearchCriteria `json:"parameters,omitempty"`
	// Search criteria used to arrive at this result
	Results []map[string]string `json:"results,omitempty"`
}

// NewMapResultList instantiates a new MapResultList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMapResultList() *MapResultList {
	this := MapResultList{}
	return &this
}

// NewMapResultListWithDefaults instantiates a new MapResultList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMapResultListWithDefaults() *MapResultList {
	this := MapResultList{}
	return &this
}

// GetUri returns the Uri field value if set, zero value otherwise.
func (o *MapResultList) GetUri() string {
	if o == nil || IsNil(o.Uri) {
		var ret string
		return ret
	}
	return *o.Uri
}

// GetUriOk returns a tuple with the Uri field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetUriOk() (*string, bool) {
	if o == nil || IsNil(o.Uri) {
		return nil, false
	}
	return o.Uri, true
}

// HasUri returns a boolean if a field has been set.
func (o *MapResultList) HasUri() bool {
	if o != nil && !IsNil(o.Uri) {
		return true
	}

	return false
}

// SetUri gets a reference to the given string and assigns it to the Uri field.
func (o *MapResultList) SetUri(v string) {
	o.Uri = &v
}

// GetCt returns the Ct field value if set, zero value otherwise.
func (o *MapResultList) GetCt() int32 {
	if o == nil || IsNil(o.Ct) {
		var ret int32
		return ret
	}
	return *o.Ct
}

// GetCtOk returns a tuple with the Ct field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetCtOk() (*int32, bool) {
	if o == nil || IsNil(o.Ct) {
		return nil, false
	}
	return o.Ct, true
}

// HasCt returns a boolean if a field has been set.
func (o *MapResultList) HasCt() bool {
	if o != nil && !IsNil(o.Ct) {
		return true
	}

	return false
}

// SetCt gets a reference to the given int32 and assigns it to the Ct field.
func (o *MapResultList) SetCt(v int32) {
	o.Ct = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *MapResultList) GetTotal() int64 {
	if o == nil || IsNil(o.Total) {
		var ret int64
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetTotalOk() (*int64, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *MapResultList) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given int64 and assigns it to the Total field.
func (o *MapResultList) SetTotal(v int64) {
	o.Total = &v
}

// GetTimeTaken returns the TimeTaken field value if set, zero value otherwise.
func (o *MapResultList) GetTimeTaken() int64 {
	if o == nil || IsNil(o.TimeTaken) {
		var ret int64
		return ret
	}
	return *o.TimeTaken
}

// GetTimeTakenOk returns a tuple with the TimeTaken field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetTimeTakenOk() (*int64, bool) {
	if o == nil || IsNil(o.TimeTaken) {
		return nil, false
	}
	return o.TimeTaken, true
}

// HasTimeTaken returns a boolean if a field has been set.
func (o *MapResultList) HasTimeTaken() bool {
	if o != nil && !IsNil(o.TimeTaken) {
		return true
	}

	return false
}

// SetTimeTaken gets a reference to the given int64 and assigns it to the TimeTaken field.
func (o *MapResultList) SetTimeTaken(v int64) {
	o.TimeTaken = &v
}

// GetParameters returns the Parameters field value if set, zero value otherwise.
func (o *MapResultList) GetParameters() SearchCriteria {
	if o == nil || IsNil(o.Parameters) {
		var ret SearchCriteria
		return ret
	}
	return *o.Parameters
}

// GetParametersOk returns a tuple with the Parameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetParametersOk() (*SearchCriteria, bool) {
	if o == nil || IsNil(o.Parameters) {
		return nil, false
	}
	return o.Parameters, true
}

// HasParameters returns a boolean if a field has been set.
func (o *MapResultList) HasParameters() bool {
	if o != nil && !IsNil(o.Parameters) {
		return true
	}

	return false
}

// SetParameters gets a reference to the given SearchCriteria and assigns it to the Parameters field.
func (o *MapResultList) SetParameters(v SearchCriteria) {
	o.Parameters = &v
}

// GetResults returns the Results field value if set, zero value otherwise.
func (o *MapResultList) GetResults() []map[string]string {
	if o == nil || IsNil(o.Results) {
		var ret []map[string]string
		return ret
	}
	return o.Results
}

// GetResultsOk returns a tuple with the Results field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MapResultList) GetResultsOk() ([]map[string]string, bool) {
	if o == nil || IsNil(o.Results) {
		return nil, false
	}
	return o.Results, true
}

// HasResults returns a boolean if a field has been set.
func (o *MapResultList) HasResults() bool {
	if o != nil && !IsNil(o.Results) {
		return true
	}

	return false
}

// SetResults gets a reference to the given []map[string]string and assigns it to the Results field.
func (o *MapResultList) SetResults(v []map[string]string) {
	o.Results = v
}

func (o MapResultList) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MapResultList) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Uri) {
		toSerialize["uri"] = o.Uri
	}
	if !IsNil(o.Ct) {
		toSerialize["ct"] = o.Ct
	}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	if !IsNil(o.TimeTaken) {
		toSerialize["timeTaken"] = o.TimeTaken
	}
	if !IsNil(o.Parameters) {
		toSerialize["parameters"] = o.Parameters
	}
	if !IsNil(o.Results) {
		toSerialize["results"] = o.Results
	}
	return toSerialize, nil
}

type NullableMapResultList struct {
	value *MapResultList
	isSet bool
}

func (v NullableMapResultList) Get() *MapResultList {
	return v.value
}

func (v *NullableMapResultList) Set(val *MapResultList) {
	v.value = val
	v.isSet = true
}

func (v NullableMapResultList) IsSet() bool {
	return v.isSet
}

func (v *NullableMapResultList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMapResultList(val *MapResultList) *NullableMapResultList {
	return &NullableMapResultList{value: val, isSet: true}
}

func (v NullableMapResultList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMapResultList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


