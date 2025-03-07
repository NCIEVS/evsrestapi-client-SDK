import os
import re
import subprocess
import sys

def execute_curl(command):
    """Runs a curl command and returns the output."""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            return result.stdout.strip()
        else:
            print(f"Error executing: {command}", file=sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running curl: {e}", file=sys.stderr)
        return None

def process_markdown():
    """Parses README.md, extracts curl commands and corresponding sample files."""
    file_path = "README.md"
    if not os.path.exists(file_path):
        print("Error: README.md not found.")
        sys.exit(1)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    sections = []
    current_section = {"curls": [], "files": []}
    in_section = False
    
    for line in lines:
        if line.startswith("### "):
            if current_section["curls"]:
                sections.append(current_section)
            current_section = {"curls": [], "files": []}
            in_section = True
        
        if in_section:
            curl_match = re.match(r'```curl (.*)', line)
            if curl_match:
                current_section["curls"].append(curl_match.group(1))
            
            file_matches = re.findall(r'`samples/([^`]+)`', line)
            for match in file_matches:
                current_section["files"].append(f"samples/{match}")
        
        if "[Back to Top]" in line:
            in_section = False
    
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
            if response and file_index < len(section["files"]):
                with open(section["files"][file_index], 'w', encoding='utf-8') as f:
                    f.write(response + "\n")
                print(f"Updated: {section['files'][file_index]}")
                file_index += 1

if __name__ == "__main__":
    sections = process_markdown()
    run_sections(sections)