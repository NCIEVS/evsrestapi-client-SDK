package tests

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"testing"
)

// Get minimal concept by code
func TestGetMinimalConceptByCode(t *testing.T) {
	var used_url, err = ioutil.ReadFile("../url.txt")
	fmt.Println("concepts_test.go: Get Minimal Concept by Code")
	fmt.Println(string(used_url) + "/concept/ncit/C3224?include=minimal\n")
	var url = string(used_url) + "/concept/ncit/C3224?include=minimal"

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
