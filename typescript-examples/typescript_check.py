import os
import re
import shlex
import subprocess
import sys

"""typescript_check.py

Reads the `typescript-examples/README.md`, finds backticked jest commands (lines that start with
`jest apis/...`), and runs each jest invocation using `npx jest`.
Updates the corresponding output files in the `outputs/` directory.
"""

healthy_scripts = []
unhealthy_scripts = []
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
README_PATH = os.path.join(BASE_DIR, "README.md")


def check_node_installation():
    try:
        # Check if node and npx are available (shell=True is often required on Windows for .cmd files)
        subprocess.run(["node", "--version"], capture_output=True, check=True, shell=os.name == 'nt')
        subprocess.run(["npx", "--version"], capture_output=True, check=True, shell=os.name == 'nt')
    except (FileNotFoundError, subprocess.CalledProcessError):
        print("Node.js or npx is not installed or not available in the current environment.", file=sys.stderr)
        sys.exit(1)


def execute_jest(command):
    """Execute a jest command string and return stdout (or None on failure)."""
    cmd_args = shlex.split(command)
    
    # Prepend npx if not present and the command starts with jest
    if cmd_args and cmd_args[0] == "jest":
        cmd_args = ["npx"] + cmd_args

    try:
        # We need to run in BASE_DIR so that npx finds the local jest and package.json
        result = subprocess.run(
            cmd_args,
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            shell=os.name == 'nt',
        )
        if result.returncode == 0:
            healthy_scripts.append(command)
            return result.stdout
        else:
            unhealthy_scripts.append(command)
            print(f"Error executing: {command}", file=sys.stderr)
            print(result.stderr, file=sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running jest command: {e}", file=sys.stderr)
        return None


def process_markdown():
    """Parse README.md and extract jest commands and their associated output files."""
    if not os.path.exists(README_PATH):
        print(f"Error: README.md not found.")
        sys.exit(1)

    with open(README_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    sections = []
    current_section = {"jests": [], "files": []}
    in_section = False

    for line in lines:
        if line.startswith("### ") and not in_section:
            current_section = {"jests": [], "files": []}
            in_section = True
            continue

        if line.startswith("[Back to Top]") and in_section:
            in_section = False
            if current_section["jests"]:
                sections.append(current_section)
            continue

        if in_section:
            # look for a backticked jest invocation
            if line.startswith("`jest "):
                cmd_match = re.match(r'^`([^`]+)`$', line.strip())
                if cmd_match:
                    current_section["jests"].append(cmd_match.group(1))
            
            # look for output file links: [See output here](outputs/test_get_terminologies.txt)
            file_matches = re.findall(r'\(outputs/([^)]+)\)', line)
            for match in file_matches:
                current_section["files"].append(f"outputs/{match}")

    if current_section["jests"]:
        sections.append(current_section)

    return sections


def run_sections(sections):
    """Run jest commands from each section and update output files."""
    for section in sections:
        file_index = 0
        for jest_cmd in section["jests"]:
            print(f"Running: {jest_cmd}")
            response = execute_jest(jest_cmd)
            # ignore extra responses if there are more responses in a section than output files
            if response and file_index < len(section["files"]):
                output_path = os.path.join(BASE_DIR, section["files"][file_index])
                with open(output_path, "w", encoding="utf-8") as f:
                    f.write(response + "\n")
                print(f"Updated: {section['files'][file_index]}")
                file_index += 1
            elif response is None:
                # To maintain alignment in sections with multiple commands/files
                file_index += 1


def report_script_health():
    if unhealthy_scripts:
        if healthy_scripts:
            print("Healthy scripts (count {}): ".format(len(healthy_scripts)))
            for script in healthy_scripts:
                print(script)
        print("Unhealthy scripts (count {}):".format(len(unhealthy_scripts)))
        for script in unhealthy_scripts:
            print(script)
    else:
        print("\nAll scripts executed successfully.")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        print("This script ignores any command line arguments. Usage: python typescript_check.py")
    
    # Verify Node.js is available
    check_node_installation()
    
    sections = process_markdown()
    run_sections(sections)
    report_script_health()
