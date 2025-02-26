package evs

import (
	"bytes"
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

func ProcessDataPost(url string, query string) {
	requestBody := bytes.NewBuffer([]byte(query))

	req, err := http.NewRequest("POST", url, requestBody)
	if err != nil {
		fmt.Println("ERROR:", err)
		os.Exit(1)
	}

	// Change Content-Type to match SPARQL
	req.Header.Set("Content-Type", "text/plain")
	req.Header.Set("Accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("ERROR:", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Println("ERROR:", resp.Status)
		os.Exit(1)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("ERROR:", err)
		os.Exit(1)
	}

	fmt.Println(string(body) + "\n")
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
