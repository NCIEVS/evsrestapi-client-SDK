package tests

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func ProcessData(url string) {
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

func ProcessDataPost(url string) {
	resp, err := http.Post(url, "application/json", nil)
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

// validate url file
func ValidateUrlFile() []byte {
	var used_url, err = ioutil.ReadFile("url.txt")
	if err != nil {
		fmt.Print("ERROR: ")
		fmt.Println(err)
		os.Exit(1)
	}
	return used_url
}

func main() {
	// Hello world, the web server

	println("Hello EVSREST API Users!")

}
