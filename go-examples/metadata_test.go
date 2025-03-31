package evs_test

import (
	"fmt"
	"testing"
	"evs"
)

// Get available terminologies.
func TestGetTerminology(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Terminology Version")
	fmt.Println(string(used_url) + "/metadata/terminologies?latest=true&tag=monthly&terminology=ncit\n")
	var url = string(used_url) + "/metadata/terminologies?latest=true&tag=monthly&terminology=ncit"

	evs.ProcessData(url)
}

// Get all properties for a terminology.
func TestGetProperties(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Properties")
	fmt.Println(string(used_url) + "/metadata/ncit/properties?include=minimal\n")
	var url = string(used_url) + "/metadata/ncit/properties?include=minimal"

	evs.ProcessData(url)
}

// Get properties for a terminology by code.
func TestGetPropertyByCodeOrLabel(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Properties By Code")
	fmt.Println(string(used_url) + "/metadata/ncit/properties?include=summary&list=P302\n")
	var url = string(used_url) + "/metadata/ncit/properties?include=summary&list=P302"

	evs.ProcessData(url)
}

// Get qualifiers for a terminology.
func TestGetQualifiers(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Qualifiers")
	fmt.Println(string(used_url) + "/metadata/ncit/properties?include=minimal\n")
	var url = string(used_url) + "/metadata/ncit/properties?include=minimal"

	evs.ProcessData(url)
}

// Get qualifiers for a terminology by code.
func TestGetQualifierByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Qualifer By Code")
	fmt.Println(string(used_url) + "/metadata/ncit/qualifiers?include=summary&list=P387\n")
	var url = string(used_url) + "/metadata/ncit/qualifiers?include=summary&list=P387"

	evs.ProcessData(url)
}

// Get qualifier values for a terminology by code.
func TestGetQualifierValuesByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Qualifer Values By Code")
	fmt.Println(string(used_url) + "/metadata/ncit/qualifier/P390/values\n")
	var url = string(used_url) + "/metadata/ncit/qualifier/P390/values"

	evs.ProcessData(url)
}

// Get roles for a terminology
func TestGetRoles(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Roles")
	fmt.Println(string(used_url) + "/metadata/ncit/roles?include=minimal\n")
	var url = string(used_url) + "/metadata/ncit/roles?include=minimal"

	evs.ProcessData(url)
}

// Get role by code
func TestGetRoleByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Roles")
	fmt.Println(string(used_url) + "/metadata/ncit/role/R123\n")
	var url = string(used_url) + "/metadata/ncit/role/R123"

	evs.ProcessData(url)
}

// Get associations for a terminology
func TestGetAssociations(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Associations")
	fmt.Println(string(used_url) + "/metadata/ncit/associations?include=minimal\n")
	var url = string(used_url) + "/metadata/ncit/associations?include=minimal"

	evs.ProcessData(url)
}

// Get association by code
func TestGetAssociationByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Association by Code")
	fmt.Println(string(used_url) + "/metadata/ncit/association/A10\n")
	var url = string(used_url) + "/metadata/ncit/association/A10"

	evs.ProcessData(url)
}

// Get Term Types for a terminology
func TestGetTermTypes(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Term Types")
	fmt.Println(string(used_url) + "/metadata/ncit/termTypes\n")
	var url = string(used_url) + "/metadata/ncit/termTypes"

	evs.ProcessData(url)
}

// Get Definition Sources for a terminology
func TestGetDefinitionSources(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Definition Sources")
	fmt.Println(string(used_url) + "/metadata/ncit/definitionSources\n")
	var url = string(used_url) + "/metadata/ncit/definitionSources"

	evs.ProcessData(url)
}

// Get Synonym Sources for a terminology
func TestGetSynonymSources(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Synonym Sources")
	fmt.Println(string(used_url) + "/metadata/ncit/synonymSources\n")
	var url = string(used_url) + "/metadata/ncit/synonymSources"

	evs.ProcessData(url)
}

// Get Synonym Types for a terminology
func TestGetSynonymTypes(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Synonym Types")
	fmt.Println(string(used_url) + "/metadata/ncit/synonymTypes\n")
	var url = string(used_url) + "/metadata/ncit/synonymTypes"

	evs.ProcessData(url)
}

// Get Synonym Types for a terminology
func TestGetSynonymTypeByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Synonym Types")
	fmt.Println(string(used_url) + "/metadata/ncit/synonymType/P90?include=summary\n")
	var url = string(used_url) + "/metadata/ncit/synonymType/P90?include=summary"

	evs.ProcessData(url)
}

// Get Definition Types for a terminology
func TestGetDefinitionTypes(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Definition Types")
	fmt.Println(string(used_url) + "/metadata/ncit/definitionTypes\n")
	var url = string(used_url) + "/metadata/ncit/definitionTypes"

	evs.ProcessData(url)
}

// Get Definition Types for a terminology
func TestGetDefinitionTypeByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Definition Types")
	fmt.Println(string(used_url) + "/metadata/ncit/definitionType/P325?include=summary\n")
	var url = string(used_url) + "/metadata/ncit/definitionType/P325?include=summary"

	evs.ProcessData(url)
}

// Get Subsets for a terminology
func TestGetSubsets(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Subsets")
	fmt.Println(string(used_url) + "/metadata/ncit/subsets\n")
	var url = string(used_url) + "/metadata/ncit/subsets"

	evs.ProcessData(url)
}

// Return subset (with summary information) for a specified terminology and code.
func TestGetSubsetByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Subset by code")
	fmt.Println(string(used_url) + "/metadata/ncit/subsets?list=C81222&include=summary\n")
	var url = string(used_url) + "/metadata/ncit/subsets?list=C81222&include=summary"

	evs.ProcessData(url)
}

// Return subset members paging parameters for a specified terminology and code.
func TestGetSubsetMembersByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("metadata_test.go: Get Subset by code")
	fmt.Println(string(used_url) + "/metadata/ncit/subset/C116978\n")
	var url = string(used_url) + "/metadata/ncit/subset/C116978"

	evs.ProcessData(url)
}
