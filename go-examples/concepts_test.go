package tests

import (
	"fmt"
	"testing"
)

// Get minimal concept by code
func TestGetMinimalConceptByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=minimal"

	ProcessData(url)

}

// Get minimal concept list by code
func TestGetMinimalConceptListByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit?include=minimal&list=C3224,C3910\n")
	var url = string(used_url) + "/concept/ncit?include=minimal&list=C3224,C3910"

	ProcessData(url)

}

// Get summary concept information by code
func TestGetSummaryConceptByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=summary\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=summary"

	ProcessData(url)

}

// Get full concept information by code
func TestGetFullConceptByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=full\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=full"

	ProcessData(url)

}

// Get custom concept information by code
func TestGetCustomConceptInfoByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations"

	ProcessData(url)

}

// Get concept part (children) by code
func TestGetConceptPartByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/children\n")
	var url = string(used_url) + "/concept/ncit/C3224/children"

	ProcessData(url)

}

// Get concept descendants by code
func TestGetConceptDescendantsByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/descendants?maxLevel=2\n")
	var url = string(used_url) + "/concept/ncit/C3224/descendants?maxLevel=2"

	ProcessData(url)

}

// Get terminology root(s)
func TestGetRoots(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/roots?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/roots?include=minimal"

	ProcessData(url)

}

// Get paths to terminology root(s) from code
func TestGetPathsToRootByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsToRoot?fromRecord=0&include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsToRoot?fromRecord=0&include=minimal"

	ProcessData(url)

}

// Get paths from terminology root(s) to code
func TestGetPathsFromRootByCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsFromRoot?fromRecord=0&include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsFromRoot?fromRecord=0&include=minimal"

	ProcessData(url)

}

// Get ancestor paths from code to code
func TestGetAncestorPathsFromCode(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsToAncestor/C2991?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsToAncestor/C2991?include=minimal"

	ProcessData(url)

}

// Get subtree of a code
func TestGetSubtree(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/subtree/children\n")
	var url = string(used_url) + "/concept/ncit/C3224/subtree/children"

	ProcessData(url)

}

// Get concepts matching a search term within a specified terminology.
func TestGetConceptBySearchTerm(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get concept by search term")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept".
func TestGetConceptByConceptStatus(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by Concept Status")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC".
func TestGetConceptByContributingSource(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by contributing source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a definition source of "NCI".
func TestGetConceptByDefinitionSource(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by definition source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition type of "P97".
func TestGetConceptByDefinitionType(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by definition source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".
func TestGetConceptBySynonymSource(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by synonym source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT"

	ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of "FULL_SYN".
func TestGetConceptBySynonymType(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by synonym type")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN"

	ProcessData(url)
}
