#!/bin/bash

# Bash script to run a Postman collection with a dynamically calculated API_URL

# TODO: Calculate or fetch the API_URL
# Replace this local URL with the actual method to determine API_URL.
# API_URL="http://localhost:8082/api/v1"  # local URL; update as needed.
API_URL="https://api-evsrest.nci.nih.gov/api/v1" # Prod API_URL
# API_URL="https://api-test-evsrest.nci.nih.gov/api/v1" # Test API_URL
# API_URL="https://api-qa-evsrest.nci.nih.gov/api/v1" # QA API_URL

# Ensure API_URL is set in the environment
if [ -z "$API_URL" ]; then
    echo "Error: API_URL is not set. Please export API_URL before running this script."
    exit 1
fi

# Construct the collection file name
COLLECTION_FILE="EVSRESTAPI-Postman-Client.json"

# Check if the collection file exists
if [ ! -f "$COLLECTION_FILE" ]; then
  echo "Warning: Collection file '$COLLECTION_FILE' does not exist."
  exit 0
fi

# Verify if newman is installed
if ! command -v newman &> /dev/null; then
    echo "Newman is not installed. Attempting to install it locally..."
    # Try installing Newman globally
    # Newman site suggests global install over local
    npm install -g newman
    if [ $? -ne 0 ]; then
        echo "Error: Newman installation failed. Please install it manually."
        exit 1
    fi

    # Verify if Newman is installed correctly
    if ! command -v newman &> /dev/null; then
        echo "Error: Newman is still not recognized after installation."
        echo "Please try installing it manually using the following command:"
        echo "npm install -g newman"
        exit 1
    fi
fi

# Run the Postman collection using newman and track the exit status
echo "Running the Postman collection with API_URL=$API_URL..."

# add --verbose for more info
# NODE_OPTIONS require using ipv4 instead of ipv6 (default on mac)
NODE_OPTIONS="--dns-result-order=ipv4first" newman run "$COLLECTION_FILE" --env-var "API_URL=$API_URL"
newman_status=$?

# Check if newman run succeeded
if [ $newman_status -eq 0 ]; then
    echo "Postman collection ran successfully."
    exit 0
else
    echo "Error: Postman collection failed with status code $newman_status."
    exit $newman_status
fi