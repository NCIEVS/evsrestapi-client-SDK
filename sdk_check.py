import os
import re
import subprocess
import sys
import time
from argparse import ArgumentParser, Namespace
from dataclasses import dataclass
from typing import List, Sequence


"""Run all generated SDK example test checkers and print a final summary."""


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

SDK_CHECKS = [
    ("Java", "java-examples", "java_check.py"),
    ("Go", "go-examples", "go_check.py"),
    ("Python", "python-examples", "python_check.py"),
    ("TypeScript", "typescript-examples", "typescript_check.py"),
]


@dataclass
class CheckResult:
    name: str
    command_count: int
    working_count: int
    not_working_count: int
    failed_commands: List[str]
    returncode: int


def run_checker(name: str, directory: str, script: str, verbose: bool) -> CheckResult:
    check_dir = os.path.join(BASE_DIR, directory)
    command = [sys.executable, script]

    print(f"\n=== Running {name} SDK tests ===")
    print(f"Command: {sys.executable} {script}")
    print(f"Directory: {check_dir}")

    started_at = time.perf_counter()
    try:
        result = subprocess.run(
            command,
            cwd=check_dir,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
    except Exception as exc:
        failed_command = f"{script} failed before running tests: {exc}"
        print(failed_command, file=sys.stderr)
        return CheckResult(name, 0, 0, 1, [failed_command], 1)

    check_result = summarize_result(name, script, result.returncode, result.stdout, result.stderr)
    elapsed = time.perf_counter() - started_at

    if verbose and result.stdout:
        print(result.stdout, end="" if result.stdout.endswith("\n") else "\n")
    if (verbose or check_result.not_working_count) and result.stderr:
        print(result.stderr, end="" if result.stderr.endswith("\n") else "\n", file=sys.stderr)

    print(
        f"Completed {name}: {check_result.working_count} working, "
        f"{check_result.not_working_count} not working in {elapsed:.1f}s"
    )
    return check_result


def summarize_result(name: str, script: str, returncode: int, stdout: str, stderr: str) -> CheckResult:
    stdout_lines = stdout.splitlines()
    stderr_lines = stderr.splitlines()
    running_commands = parse_running_commands(stdout_lines)
    failed_commands = parse_unhealthy_commands(stdout_lines)

    if not failed_commands:
        failed_commands = parse_error_commands(stderr_lines)

    if returncode != 0 and not failed_commands:
        failure = first_non_empty(stderr_lines) or first_non_empty(stdout_lines) or "unknown error"
        failed_commands = [f"{script} failed before reporting test health: {failure}"]

    command_count = len(running_commands)
    not_working_count = len(failed_commands)
    if command_count:
        working_count = max(command_count - not_working_count, 0)
    elif not_working_count:
        working_count = 0
    else:
        working_count = 0

    return CheckResult(
        name=name,
        command_count=command_count,
        working_count=working_count,
        not_working_count=not_working_count,
        failed_commands=failed_commands,
        returncode=returncode,
    )


def parse_running_commands(lines: Sequence[str]) -> List[str]:
    prefix = "Running: "
    return [line[len(prefix):].strip() for line in lines if line.startswith(prefix)]


def parse_unhealthy_commands(lines: Sequence[str]) -> List[str]:
    failed_commands: List[str] = []
    in_unhealthy_section = False

    for line in lines:
        stripped = line.strip()
        if re.match(r"^Unhealthy scripts \(count \d+\):$", stripped):
            in_unhealthy_section = True
            continue
        if not in_unhealthy_section:
            continue
        if not stripped:
            continue
        if stripped.startswith("Healthy scripts "):
            break
        failed_commands.append(stripped)

    return failed_commands


def parse_error_commands(lines: Sequence[str]) -> List[str]:
    failed_commands = []
    for line in lines:
        match = re.match(r"^Error executing: (.+)$", line.strip())
        if match:
            failed_commands.append(match.group(1))
    return failed_commands


def first_non_empty(lines: Sequence[str]) -> str:
    for line in lines:
        stripped = line.strip()
        if stripped:
            return stripped
    return ""


def print_summary(results: Sequence[CheckResult]) -> None:
    print("\n=== SDK Test Summary ===")
    for result in results:
        print(
            f"{result.name}: {result.working_count} working, "
            f"{result.not_working_count} not working"
        )
        if result.failed_commands:
            print("  Not working:")
            for command in result.failed_commands:
                print(f"  - {command}")
            print("\n")

    total_working = sum(result.working_count for result in results)
    total_not_working = sum(result.not_working_count for result in results)
    print(f"\nTotal: {total_working} working, {total_not_working} not working")


def parse_args() -> Namespace:
    parser = ArgumentParser(description="Run all generated SDK example test checkers.")
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="print the full output from each underlying checker before the final summary",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    results = [run_checker(*check, verbose=args.verbose) for check in SDK_CHECKS]
    print_summary(results)

    return 1 if any(result.not_working_count or result.returncode != 0 for result in results) else 0


if __name__ == "__main__":
    sys.exit(main())
