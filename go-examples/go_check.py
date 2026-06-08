import os
import re
import shlex
import subprocess
import sys

"""This script reads the README.md file, extracts go test commands and corresponding output files, executes the go test commands, checks that said commands run properly, and updates the output files with the output."""

healthy_scripts = []
unhealthy_scripts = []
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
README_PATH = os.path.join(BASE_DIR, "README.md")


def check_go_installation():
    """Checks if Go is installed and exits with an error if not."""
    try:
        subprocess.run(["go", "version"], capture_output=True, check=True)
    except (FileNotFoundError, subprocess.CalledProcessError):
        print("Go is not installed or not accessible.", file=sys.stderr)
        sys.exit(1)


def execute_go(command):
    """Runs a go test command and returns the raw output."""
    try:
        result = subprocess.run(
            shlex.split(command),
            cwd=BASE_DIR,
            capture_output=True,
            text=True,
        )
        if result.returncode == 0 and "no tests to run" not in result.stdout:
            healthy_scripts.append(command)
            return result.stdout
        else:
            unhealthy_scripts.append(command)
            print(f"Error executing: {command}", file=sys.stderr)
            print(f"go test error: {result.stderr or result.stdout}", file=sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running go test: {e}", file=sys.stderr)
        return None


def process_markdown():
    """Parses README.md, extracts go test commands and corresponding output files."""
    if not os.path.exists(README_PATH):
        print("Error: README.md not found.")
        sys.exit(1)

    with open(README_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    sections = []
    current_section = {"gos": [], "files": []}
    in_section = False

    for line in lines:
        # each section that has go test commands and corresponding output files starts with "### "
        if line.startswith("### ") and not in_section:
            current_section = {"gos": [], "files": []}
            in_section = True
            continue

        # sections end with a "[Back to Top]"
        if line.startswith("[Back to Top]") and in_section:
            in_section = False
            if current_section["gos"]:
                sections.append(current_section)
            continue

        if in_section:
            # found a go test command
            go_match = re.match(r"^`(go test[^`]+)`$", line.strip())
            if go_match:
                current_section["gos"].append(go_match.group(1))

            # all generated test outputs are in the outputs directory
            file_matches = re.findall(r"\(outputs/([^)]+)\)", line)
            for match in file_matches:
                current_section["files"].append(f"outputs/{match}")

    if in_section and current_section["gos"]:
        sections.append(current_section)

    return sections


def run_sections(sections):
    """Executes go test commands and updates corresponding output files."""
    for section in sections:
        file_index = 0
        for go_cmd in section["gos"]:
            print(f"Running: {go_cmd}")
            response = execute_go(go_cmd)
            # ignore extra responses if there are more responses in a section than output files
            if response and file_index < len(section["files"]):
                output_path = os.path.join(BASE_DIR, section["files"][file_index])
                with open(output_path, "w", encoding="utf-8") as f:
                    f.write(response + "\n")
                print(f"Updated: {section['files'][file_index]}")
                file_index += 1


def report_script_health():
    if unhealthy_scripts:
        print("Healthy scripts (count {}): ".format(len(healthy_scripts))) if healthy_scripts else None
        for script in healthy_scripts:
            print(script)
        print("Unhealthy scripts (count {}):".format(len(unhealthy_scripts)))
        for script in unhealthy_scripts:
            print(script)
    else:
        print("\nAll scripts executed successfully.")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        print("This script ignores any command line arguments. Usage: python go_check.py")
    check_go_installation()
    sections = process_markdown()
    run_sections(sections)
    report_script_health()
