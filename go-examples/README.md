======================================

This tutorial shows how to use a locally installed version of Goland to interact with the EVSREST API. Shown here are
examples that demonstrate
the range of functionality that the EVSREST API has. Many of these API calls can take in different parameters than the
ones shown.

## Prerequisites

- Golang 1.18 or higher must be installed. The latest version can be found [here](https://go.dev/doc/install).


## Extra Library Installation

Install the following dependencies via command line in the `go-examples` directory:

```sh
go get github.com/stretchr/testify/assert
go get github.com/stretchr/testify/require
go get golang.org/x/net/context
```

### URLs Configuration per Operation

Each operation can use different server URL defined using `url` in [configuration.go](configuration.go#L87). This file includes a list of currently supported API environments. To change the environment used to run, set the url variable to the desired environment mentioned in the url mapping `baseUrls`

```go
// Define base URLs for different environments
 baseUrls := map[string]string{
  "development": "https://api-evsrest-dev.nci.nih.gov/",
  "testing":     "https://api-evsrest-test.nci.nih.gov/m",
  "production":  "https://api-evsrest.nci.nih.gov/",
  "local":       "http://localhost:8082",
 }

 // define environment
 url := baseUrls["production"] // set API environment here

 cfg := &Configuration{
  DefaultHeader: make(map[string]string),
  UserAgent:     "OpenAPI-Generator/1.0.0/go",
  Debug:         false,
  Servers: ServerConfigurations{
   {
    URL:         url, // configuration built based on selected baseUrl
    Description: "No description provided",
   },
  },
  OperationServers: map[string]ServerConfigurations{},
 }
```

## Test Running

### 1. **Run a Single Test**

To run a specific test from a test file, use the `-run` flag with the name of the test:

```bash
go test -run TestMetadataEndpointsAPIService/GetAssociationByCode api_metadata_endpoints_test.go
```

### 2. Run Multiple Tests in a File (Regex)

You can run multiple tests that match a regular expression:

```bash
go test -run 'TestMetadataEndpointsAPIService/GetAssociationByCode|GetAssociations' api_metadata_endpoints_test.go
```

### 3. Run All Tests in a Single File

To execute all tests in a specific test file:

```bash
go test api_metadata_endpoints_test.go
```

### Run All Tests

To run all tests in all files across the entire directory:

```bash
go test ./...
```

### Run Tests with Verbose Output

To see detailed output of each test, including pass/fail status and log output, add the -v flag:

```bash
go test -v api_metadata_endpoints_test.go        # For a single file
go test -v ./...                           # For all tests in the project
```

**The -v verbose option is necessary to see the exact output of each API call made in the tests. They will otherwise only display success or failure states.**