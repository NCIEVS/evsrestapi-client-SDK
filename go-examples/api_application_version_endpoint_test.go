package evs_test

import (
	"fmt"
	"strings"
	"testing"
	"evs"
)

// Return all loaded terminologies currently hosted by the API.
func TestGetVersion(t *testing.T) {

	t.Skip("Skip: TestGetVersion")
	
	var used_url = evs.ValidateUrlFile()
	fmt.Println(used_url)

	fmt.Println("applicationVersion_test.go: Get Application Version")
	fmt.Println(strings.Replace(string(used_url), "/api/v1", "/version", 1) + "\n")
	var url = strings.Replace(string(used_url), "/api/v1", "/version", 1)

	evs.ProcessData(url)
}
