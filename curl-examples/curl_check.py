import os
import re
import subprocess
import sys

"""This script reads the README.md file, extracts curl commands and corresponding sample files, executes the curl commands, checks that said commands run properly, and updates the sample files with the output."""

# Define API_URL as a global variable
API_URL = "https://api-evsrest.nci.nih.gov/api/v1"

def check_jq():
    """Checks if jq is installed."""
    try:
        subprocess.run(["jq", "--version"], check = True, stdout = subprocess.DEVNULL, stderr = subprocess.DEVNULL)
    except subprocess.CalledProcessError:
        print("Error: jq is not installed. Please install jq to process JSON output.", file = sys.stderr)
        sys.exit(1)

def execute_curl(command):
    """Runs a curl command and returns the raw output."""
    try:
        result = subprocess.run(command, shell = True, capture_output = True, text = True)
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"Error executing: {command}", file = sys.stderr)
            print(f"Curl error: {result.stderr}", file = sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running curl: {e}", file = sys.stderr)
        return None

def process_markdown():
    """Parses README.md, extracts curl commands and corresponding sample files."""
    if not os.path.exists("README.md"):
        print("Error: README.md not found.")
        sys.exit(1)
    
    with open("README.md", 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    sections = []
    # set up each section with commands and corresponding files
    current_section = {"curls": [], "files": []}
    in_section = False
    
    for line in lines:
        # each section that has curl commands and corresponding sample files starts with "### "
        if line.startswith("### ") and not in_section:
            current_section = {"curls": [], "files": []}
            in_section = True
            continue

        # sections end with a "[Back to Top]"
        if line.startswith("[Back to Top]") and in_section:
            in_section = False
            if current_section["curls"]:
                sections.append(current_section)
            continue
        
        if in_section:
            # found a curl command
            if line.startswith("curl \"$API_URL"):
                # processing command with API_URL
                curl_command = line.strip().replace("$API_URL", API_URL)
                current_section["curls"].append(curl_command)
            
            # all sample files are in the samples directory, so look for that
            file_matches = re.findall(r'`samples/([^`]+)`', line)
            for match in file_matches:
                current_section["files"].append(f"samples/{match}")
    
    if current_section["curls"]:
        sections.append(current_section)
    
    return sections

def run_sections(sections):
    """Executes curl commands and updates corresponding sample files."""
    for section in sections:
        file_index = 0
        for curl_cmd in section["curls"]:
            print(f"Running: {curl_cmd}")
            response = execute_curl(curl_cmd)
            # ignore extra responses if there are more responses in a section than sample files
            if response and file_index < len(section["files"]):
                try:
                    jq_process = subprocess.run(["jq", "."], input = response, text = True, capture_output = True, check = True)
                    formatted_response = jq_process.stdout
                except subprocess.CalledProcessError:
                    print(f"Error processing JSON with jq: {curl_cmd}", file = sys.stderr)
                    formatted_response = response
                
                with open(section["files"][file_index], 'w', encoding='utf-8') as f:
                   f.write(formatted_response + "\n")
                print(f"Updated: {section['files'][file_index]}")
                file_index += 1

if __name__ == "__main__":
    if(len(sys.argv) > 1):
        print("This script ignores any command line arguments. Usage: python curl_check.py")
    check_jq()
    sections = process_markdown()
    run_sections(sections)
