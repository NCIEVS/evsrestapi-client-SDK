# HierarchyNode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uri** | Pointer to **string** | URI for this element in an rdf-based source file | [optional] 
**Ct** | Pointer to **int32** | Used to indicate the total amount of data in cases where a limit is being applied | [optional] 
**Code** | Pointer to **string** | Code of the hierarchy node | [optional] 
**Label** | Pointer to **string** | Code label for the hierarchy node | [optional] 
**Level** | Pointer to **int32** | Indicates level of depth in the (respective) hierarchy | [optional] 
**Leaf** | Pointer to **bool** | Indicates whether the code has children | [optional] 
**Expanded** | Pointer to **bool** | Indicates whether the node has been expanded | [optional] 
**Children** | Pointer to [**[]HierarchyNode**](HierarchyNode.md) | Child nodes | [optional] 

## Methods

### NewHierarchyNode

`func NewHierarchyNode() *HierarchyNode`

NewHierarchyNode instantiates a new HierarchyNode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHierarchyNodeWithDefaults

`func NewHierarchyNodeWithDefaults() *HierarchyNode`

NewHierarchyNodeWithDefaults instantiates a new HierarchyNode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUri

`func (o *HierarchyNode) GetUri() string`

GetUri returns the Uri field if non-nil, zero value otherwise.

### GetUriOk

`func (o *HierarchyNode) GetUriOk() (*string, bool)`

GetUriOk returns a tuple with the Uri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUri

`func (o *HierarchyNode) SetUri(v string)`

SetUri sets Uri field to given value.

### HasUri

`func (o *HierarchyNode) HasUri() bool`

HasUri returns a boolean if a field has been set.

### GetCt

`func (o *HierarchyNode) GetCt() int32`

GetCt returns the Ct field if non-nil, zero value otherwise.

### GetCtOk

`func (o *HierarchyNode) GetCtOk() (*int32, bool)`

GetCtOk returns a tuple with the Ct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCt

`func (o *HierarchyNode) SetCt(v int32)`

SetCt sets Ct field to given value.

### HasCt

`func (o *HierarchyNode) HasCt() bool`

HasCt returns a boolean if a field has been set.

### GetCode

`func (o *HierarchyNode) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HierarchyNode) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HierarchyNode) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HierarchyNode) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetLabel

`func (o *HierarchyNode) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *HierarchyNode) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *HierarchyNode) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *HierarchyNode) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetLevel

`func (o *HierarchyNode) GetLevel() int32`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *HierarchyNode) GetLevelOk() (*int32, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *HierarchyNode) SetLevel(v int32)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *HierarchyNode) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetLeaf

`func (o *HierarchyNode) GetLeaf() bool`

GetLeaf returns the Leaf field if non-nil, zero value otherwise.

### GetLeafOk

`func (o *HierarchyNode) GetLeafOk() (*bool, bool)`

GetLeafOk returns a tuple with the Leaf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeaf

`func (o *HierarchyNode) SetLeaf(v bool)`

SetLeaf sets Leaf field to given value.

### HasLeaf

`func (o *HierarchyNode) HasLeaf() bool`

HasLeaf returns a boolean if a field has been set.

### GetExpanded

`func (o *HierarchyNode) GetExpanded() bool`

GetExpanded returns the Expanded field if non-nil, zero value otherwise.

### GetExpandedOk

`func (o *HierarchyNode) GetExpandedOk() (*bool, bool)`

GetExpandedOk returns a tuple with the Expanded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpanded

`func (o *HierarchyNode) SetExpanded(v bool)`

SetExpanded sets Expanded field to given value.

### HasExpanded

`func (o *HierarchyNode) HasExpanded() bool`

HasExpanded returns a boolean if a field has been set.

### GetChildren

`func (o *HierarchyNode) GetChildren() []HierarchyNode`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *HierarchyNode) GetChildrenOk() (*[]HierarchyNode, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *HierarchyNode) SetChildren(v []HierarchyNode)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *HierarchyNode) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


