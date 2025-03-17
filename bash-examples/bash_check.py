import os
import re
import subprocess
import sys

"""This script reads the README.md file, extracts bash commands and corresponding sample files, executes the bash commands, checks that said commands run properly, and updates the sample files with the output."""

healthy_scripts = []
unhealthy_scripts = []

def check_bash_installation():
    """Checks if bash is installed and exits with an error if not."""
    try:
        subprocess.run(["bash", "--version"], capture_output=True, check=True)
    except subprocess.CalledProcessError:
        print("Bash is not installed or not accessible.", file=sys.stderr)
        sys.exit(1)

def execute_bash(command):
    """Runs a bash command and returns the raw output."""
    try:
        result = subprocess.run(f"bash -c \"{command}\"", shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            healthy_scripts.append(command)
            return result.stdout
        else:
            unhealthy_scripts.append(command)
            print(f"Error executing: {command}", file=sys.stderr)
            print(f"bash error: {result.stderr}", file=sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running bash: {e}", file=sys.stderr)
        return None

def process_markdown():
    """Parses README.md, extracts bash commands and corresponding sample files."""
    if not os.path.exists("README.md"):
        print("Error: README.md not found.")
        sys.exit(1)
    
    with open("README.md", 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    sections = []
    # set up each section with commands and corresponding files
    current_section = {"bashs": [], "files": []}
    in_section = False
    
    for line in lines:
        # each section that has bash commands and corresponding sample files starts with "### "
        if line.startswith("### ") and not in_section:
            current_section = {"bashs": [], "files": []}
            in_section = True
            continue

        # sections end with a "[Back to Top]"
        if line.startswith("[Back to Top]") and in_section:
            in_section = False
            if current_section["bashs"]:
                sections.append(current_section)
            continue
        
        if in_section:
            # found a bash command
            if line.startswith("$ ./"):
                bash_command = line.strip()
                current_section["bashs"].append(bash_command[2:])
            
            # all sample files are in the samples directory, so look for that
            file_matches = re.findall(r'`samples/([^`]+)`', line)
            for match in file_matches:
                current_section["files"].append(f"samples/{match}")
    
    if current_section["bashs"]:
        sections.append(current_section)
    
    return sections

def run_sections(sections):
    """Executes bash commands and updates corresponding sample files."""
    for section in sections:
        file_index = 0
        for bash_cmd in section["bashs"]:
            print(f"Running: {bash_cmd}")
            response = execute_bash(bash_cmd)
            # ignore extra responses if there are more responses in a section than sample files
            if response and file_index < len(section["files"]):
                with open(section["files"][file_index], 'w', encoding='utf-8') as f:
                   f.write(response + "\n")
                print(f"Updated: {section['files'][file_index]}")
                file_index += 1

def report_script_health():
    if(unhealthy_scripts):
        print("Healthy scripts (count {}): ".format(len(healthy_scripts))) if healthy_scripts else None
        for script in healthy_scripts:
            print(script)
        print("Unhealthy scripts (count {}):".format(len(unhealthy_scripts)))
        for script in unhealthy_scripts:
            print(script)
    else:
        print("\nAll scripts executed successfully.")

if __name__ == "__main__":
    if(len(sys.argv) > 1):
        print("This script ignores any command line arguments. Usage: python bash_check.py")
    check_bash_installation()
    sections = process_markdown()
    run_sections(sections)
    report_script_health()
    
