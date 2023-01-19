package tests

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"testing"
)

// Return all loaded terminologies currently hosted by the API.
func TestGetVersion(t *testing.T) {
	var used_url, err = ioutil.ReadFile("../url.txt")
	fmt.Println("applicationVersion_test.go: Get Application Version")
	fmt.Println(strings.Replace(string(used_url), "/api/v1", "/version", 1) + "\n")
	var url = strings.Replace(string(used_url), "/api/v1", "/version", 1)

	resp, err := http.Get(url)
	if err != nil {
		fmt.Print("ERROR: ")
		fmt.Println(err)
		os.Exit(1)
	}
	if resp.StatusCode != 200 {
		fmt.Print("ERROR: ")
		fmt.Println(resp.Status)
		os.Exit(1)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Print("ERROR: ")
		fmt.Println(err)
		os.Exit(1)
	}

	var sb = string(body)
	fmt.Println(sb + "\n")
}
