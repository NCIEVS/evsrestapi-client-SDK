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
