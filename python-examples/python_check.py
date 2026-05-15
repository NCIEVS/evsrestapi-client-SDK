import os
import re
import shlex
import subprocess
import sys

"""python_check.py

Reads the `python-examples/README.md`, finds backticked pytest commands (lines that start with
`pytest tests...`), and runs each pytest invocation using the current Python interpreter
(`sys.executable -m pytest ...`).

This mirrors the behavior of `java-examples/java_check.py` but for pytest commands, though without outputting to sample files.
"""

healthy_scripts = []
unhealthy_scripts = []
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
README_PATH = os.path.join(BASE_DIR, "README.md")


def check_pytest_installation():
    try:
        # Use the current python interpreter to check pytest availability
        subprocess.run([sys.executable, "-m", "pytest", "--version"], capture_output=True, check=True)
    except subprocess.CalledProcessError:
        print("pytest is not installed or not available in the current Python environment.", file=sys.stderr)
        sys.exit(1)


def execute_pytest(command):
    """Execute a pytest command string and return stdout (or None on failure)."""
    cmd_args = shlex.split(command)
    if cmd_args and cmd_args[0] == "pytest":
        cmd_args = [sys.executable, "-m", "pytest"] + cmd_args[1:]

    try:
        result = subprocess.run(cmd_args, cwd=BASE_DIR, capture_output=True, text=True)
        if result.returncode == 0:
            healthy_scripts.append(command)
            return result.stdout
        else:
            unhealthy_scripts.append(command)
            print(f"Error executing: {command}", file=sys.stderr)
            print(result.stderr, file=sys.stderr)
            return None
    except Exception as e:
        print(f"Exception running pytest command: {e}", file=sys.stderr)
        return None


def process_markdown():
    """Parse README.md and extract pytest commands and their associated sample files."""
    if not os.path.exists(README_PATH):
        print(f"Error: README.md not found.")
        sys.exit(1)

    with open(README_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    sections = []
    current_section = {"pys": []}
    in_section = False

    for line in lines:
        if line.startswith("### ") and not in_section:
            current_section = {"pys": [], "files": []}
            in_section = True
            continue

        if line.startswith("[Back to Top]") and in_section:
            in_section = False
            if current_section["pys"]:
                sections.append(current_section)
            continue

        if in_section:
            # look for a backticked pytest invocation
            if line.startswith("`pytest tests") or line.startswith("`pytest "):
                py_command = line.strip()
                # strip only the surrounding backticks
                if py_command.startswith("`") and py_command.endswith("`"):
                    current_section["pys"].append(py_command[1:-1])
                else:
                    current_section["pys"].append(py_command)

    if current_section["pys"]:
        sections.append(current_section)

    return sections


def run_sections(sections):
    """Run pytest commands from each section and print outputs to stdout."""
    for section in sections:
        for py_cmd in section["pys"]:
            print(f"Running: {py_cmd}")
            response = execute_pytest(py_cmd)
            if response is None:
                print("(no stdout captured — pytest returned non-zero or failed)\n")


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
        print("This script ignores any command line arguments. Usage: python python_check.py")
    # Verify pytest is available in this Python environment
    check_pytest_installation()
    sections = process_markdown()
    run_sections(sections)
    report_script_health()
    
