package tests

import (
	"fmt"
	"strings"
	"testing"
)

// Return all loaded terminologies currently hosted by the API.
func TestGetVersion(t *testing.T) {
	var used_url = ValidateUrlFile()

	fmt.Println("applicationVersion_test.go: Get Application Version")
	fmt.Println(strings.Replace(string(used_url), "/api/v1", "/version", 1) + "\n")
	var url = strings.Replace(string(used_url), "/api/v1", "/version", 1)

	ProcessData(url)
}
