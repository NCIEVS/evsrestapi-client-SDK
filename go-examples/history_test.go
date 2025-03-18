package evs_test

import (
	"fmt"
	"testing"
	"evs"
)

// Get the replacement concepts for a specified inactive concept code.
func TestGetInactiveReplacementCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("history_test.go: Get inactive replacement code")
	fmt.Println(string(used_url) + "/history/ncit/replacements?list=C12658\n")
	var url = string(used_url) + "/history/ncit/replacements?list=C12658"

	evs.ProcessData(url)
}

// Get the replacement concepts for a specified list of inactive concept codes.
func TestGetInactiveReplacementCodes(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("history_test.go: Get list of inactive replacement codes")
	fmt.Println(string(used_url) + "/history/ncit/replacements?list=C12658,C13320\n")
	var url = string(used_url) + "/history/ncit/replacements?list=C12658,C13320"

	evs.ProcessData(url)
}
