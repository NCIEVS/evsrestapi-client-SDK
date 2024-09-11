# History

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Code** | Pointer to **string** | Code for this history record | [optional] 
**Name** | Pointer to **string** | Last known preferred name for the code | [optional] 
**Action** | Pointer to **string** | Indicates the history action, e.g. &#39;merge&#39;, &#39;active&#39;, &#39;retire&#39;, &#39;SY&#39;, &#39;RB&#39;, etc. | [optional] 
**Date** | Pointer to **string** | Date of the history record | [optional] 
**ReplacementCode** | Pointer to **string** | Code replacing this code | [optional] 
**ReplacementName** | Pointer to **string** | Preferred name of the code replacing this code | [optional] 

## Methods

### NewHistory

`func NewHistory() *History`

NewHistory instantiates a new History object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHistoryWithDefaults

`func NewHistoryWithDefaults() *History`

NewHistoryWithDefaults instantiates a new History object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *History) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *History) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *History) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *History) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *History) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *History) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *History) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *History) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetCode

`func (o *History) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *History) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *History) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *History) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetName

`func (o *History) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *History) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *History) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *History) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAction

`func (o *History) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *History) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *History) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *History) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetDate

`func (o *History) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *History) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *History) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *History) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetReplacementCode

`func (o *History) GetReplacementCode() string`

GetReplacementCode returns the ReplacementCode field if non-nil, zero value otherwise.

### GetReplacementCodeOk

`func (o *History) GetReplacementCodeOk() (*string, bool)`

GetReplacementCodeOk returns a tuple with the ReplacementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacementCode

`func (o *History) SetReplacementCode(v string)`

SetReplacementCode sets ReplacementCode field to given value.

### HasReplacementCode

`func (o *History) HasReplacementCode() bool`

HasReplacementCode returns a boolean if a field has been set.

### GetReplacementName

`func (o *History) GetReplacementName() string`

GetReplacementName returns the ReplacementName field if non-nil, zero value otherwise.

### GetReplacementNameOk

`func (o *History) GetReplacementNameOk() (*string, bool)`

GetReplacementNameOk returns a tuple with the ReplacementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacementName

`func (o *History) SetReplacementName(v string)`

SetReplacementName sets ReplacementName field to given value.

### HasReplacementName

`func (o *History) HasReplacementName() bool`

HasReplacementName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


