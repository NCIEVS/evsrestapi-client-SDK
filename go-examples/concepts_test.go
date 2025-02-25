package evs_test

import (
	"fmt"
	"os"
	"testing"
	"evs"
)

// Get minimal concept by code
func TestGetMinimalConceptByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=minimal"

	evs.ProcessData(url)

}

// Get minimal concept list by code
func TestGetMinimalConceptListByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit?include=minimal&list=C3224,C3910\n")
	var url = string(used_url) + "/concept/ncit?include=minimal&list=C3224,C3910"

	evs.ProcessData(url)

}

// Get summary concept information by code
func TestGetSummaryConceptByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=summary\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=summary"

	evs.ProcessData(url)

}

// Get full concept information by code
func TestGetFullConceptByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=full\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=full"

	evs.ProcessData(url)

}

// Get custom concept information by code
func TestGetCustomConceptInfoByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=synonyms,children,maps,inverseAssociations"

	evs.ProcessData(url)

}

// Get concept part (children) by code
func TestGetConceptPartByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/children\n")
	var url = string(used_url) + "/concept/ncit/C3224/children"

	evs.ProcessData(url)

}

// Get concept descendants by code
func TestGetConceptDescendantsByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/descendants?maxLevel=2\n")
	var url = string(used_url) + "/concept/ncit/C3224/descendants?maxLevel=2"

	evs.ProcessData(url)

}

// Get terminology root(s)
func TestGetRoots(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/roots?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/roots?include=minimal"

	evs.ProcessData(url)

}

// Get paths to terminology root(s) from code
func TestGetPathsToRootByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsToRoot?fromRecord=0&include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsToRoot?fromRecord=0&include=minimal"

	evs.ProcessData(url)

}

// Get paths from terminology root(s) to code
func TestGetPathsFromRootByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsFromRoot?fromRecord=0&include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsFromRoot?fromRecord=0&include=minimal"

	evs.ProcessData(url)

}

// Get ancestor paths from code to code
func TestGetAncestorPathsFromCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/pathsToAncestor/C2991?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224/pathsToAncestor/C2991?include=minimal"

	evs.ProcessData(url)

}

// Get subtree of a code
func TestGetSubtree(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224/subtree/children\n")
	var url = string(used_url) + "/concept/ncit/C3224/subtree/children"

	evs.ProcessData(url)

}

// Get concepts matching a search term within a specified terminology.
func TestGetConceptBySearchTerm(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get concept by search term")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by concept status of "Header_Concept".
func TestGetConceptByConceptStatus(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by Concept Status")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=respiratory&conceptStatus=Header_Concept"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a contributing source of "CDISC".
func TestGetConceptByContributingSource(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by contributing source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&contributingSource=CDISC"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a definition source of "NCI".
func TestGetConceptByDefinitionSource(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by definition source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionSource=NCI"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a by a definition type of "P97".
func TestGetConceptByDefinitionType(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by definition source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=melanoma&definitionType=P97"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a synonym source of "NCI" and synonymTermGroup of "PT".
func TestGetConceptBySynonymSource(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by synonym source")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymSource=NCI&synonymTermGroup=PT"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and restrict the search results by a synonym type of "FULL_SYN".
func TestGetConceptBySynonymType(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by synonym type")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=dsDNA&synonymType=FULL_SYN"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "match".
func TestGetConceptBySearchTermMatch(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term match")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=match\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=match"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "startsWith".
func TestGetConceptBySearchTermStartsWith(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term startsWith")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=startsWith\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=startsWith"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "phrase".
func TestGetConceptBySearchTermPhrase(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term phrase")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=phrase\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=phrase"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "fuzzy".
func TestGetConceptBySearchTermFuzzy(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term fuzzy")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=fuzzy\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=fuzzy"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "or".
func TestGetConceptBySearchTermOr(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term or")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=or\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=or"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "and".
func TestGetConceptBySearchTermAnd(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term and")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=and\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=and"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and a search type of "highlights".
func TestGetConceptBySearchTermHighlights(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by search term highlights")
	fmt.Println(string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=synonym,highlights\n")
	var url = string(used_url) + "/concept/ncit/search?terminology=ncit&term=enzyme&term=synonym,highlights"

	evs.ProcessData(url)
}

// Get concepts matching a search term within a specified terminology and subset.
func TestGetConceptBySubset(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("concept_test.go: Get Concept by subset")
	fmt.Println(string(used_url) + "/concept/ncit/search?subset=C157225&term=Hydrogenation\n")
	var url = string(used_url) + "/concept/ncit/search?subset=C157225&term=Hydrogenation"

	evs.ProcessData(url)
}

// Find Concepts by SPARQL Code.
func TestGetConceptsBySparqlWithoutPrefix(t *testing.T) {
	var used_url = evs.ValidateUrlFile()
	var query, err = os.ReadFile("../curl-examples/sparql-queries/code-query.txt")
	if err != nil {
		fmt.Print(err)
	}
	fmt.Println("concept_test.go: Find Concepts by SPARQL Code")
	fmt.Println(string(used_url) + "/concept/ncit/search?query=" + string(query) + "\n")
	var url = string(used_url) + "/concept/ncit/search?query=" + string(query)

	evs.ProcessData(url)
}

// Get concepts by SPARQL with prefix.
func TestGetConceptsBySparqlWithPrefix(t *testing.T) {
	var used_url = evs.ValidateUrlFile()
	var query, err = os.ReadFile("../curl-examples/sparql-queries/advanced-query.txt")
	if err != nil {
		fmt.Print(err)
	}
	fmt.Println("concept_test.go: Get concepts by SPARQL with prefix")
	fmt.Println(string(used_url) + "/concept/ncit/search?query=" + string(query) + "\n")
	var url = string(used_url) + "/concept/ncit/search?query=" + string(query)

	evs.ProcessData(url)
}

// Get SPARQL bindings.
func TestGetSparqlBindings(t *testing.T) {
	var used_url = evs.ValidateUrlFile()
	var query, err = os.ReadFile("../curl-examples/sparql-queries/bindings-query.txt")
	if err != nil {
		fmt.Print(err)
	}
	fmt.Println("concept_test.go: Get SPARQL bindings")
	fmt.Println(string(used_url) + "/sparql/ncit?query=" + string(query) + "\n")
	var url = string(used_url) + "/sparql/ncit?query=" + string(query)

	evs.ProcessDataPost(url)
}
