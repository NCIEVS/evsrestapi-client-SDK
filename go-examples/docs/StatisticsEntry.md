# StatisticsEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for what this statistic is measuring | [optional] 
**Key** | Pointer to **string** | Key defining an additional element to the statistic | [optional] 
**Value** | Pointer to **string** | Value of the statistic | [optional] 

## Methods

### NewStatisticsEntry

`func NewStatisticsEntry() *StatisticsEntry`

NewStatisticsEntry instantiates a new StatisticsEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticsEntryWithDefaults

`func NewStatisticsEntryWithDefaults() *StatisticsEntry`

NewStatisticsEntryWithDefaults instantiates a new StatisticsEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *StatisticsEntry) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *StatisticsEntry) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *StatisticsEntry) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *StatisticsEntry) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetKey

`func (o *StatisticsEntry) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *StatisticsEntry) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *StatisticsEntry) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *StatisticsEntry) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *StatisticsEntry) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *StatisticsEntry) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *StatisticsEntry) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *StatisticsEntry) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


