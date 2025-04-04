package evs_test

import (
	"fmt"
	"testing"
	"evs"
)

// Get all mapsets. Include parameter allows customizing how much data to return.
func TestGetAllMaps(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("mapping_test.go: Get all maps")
	fmt.Println(string(used_url) + "/mapset?include=minimal\n")
	var url = string(used_url) + "/mapset?include=minimal"

	evs.ProcessData(url)
}

// Get mapset information for a specified code. Include parameter allows customizing how much data to return.
func TestGetMapsetByCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("mapping_test.go: Get mapset information for a specified code")
	fmt.Println(string(used_url) + "/mapset/GO_to_NCIt_Mapping?include=minimal\n")
	var url = string(used_url) + "/mapset/GO_to_NCIt_Mapping?include=minimal"

	evs.ProcessData(url)
}

// Get the maps for a specified mapset code.
func TestGetMapsByMapsetCode(t *testing.T) {
	var used_url = evs.ValidateUrlFile()

	fmt.Println("mapping_test.go: Get the maps for a specified mapset code")
	fmt.Println(string(used_url) + "/mapset/GO_to_NCIt_Mapping/maps\n")
	var url = string(used_url) + "/mapset/GO_to_NCIt_Mapping/maps"

	evs.ProcessData(url)
}
