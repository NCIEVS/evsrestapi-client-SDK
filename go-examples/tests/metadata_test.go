package tests

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"testing"
)

// Get available terminologies.
func TestGetTerminology(t *testing.T) {
	var used_url, err = ioutil.ReadFile("../url.txt")
	fmt.Println("concepts_test.go: Get Terminology Version")
	fmt.Println(string(used_url) + "/metadata/terminologies?latest=true&tag=monthly&terminology=ncit\n")
	var url = string(used_url) + "/metadata/terminologies?latest=true&tag=monthly&terminology=ncit"

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
