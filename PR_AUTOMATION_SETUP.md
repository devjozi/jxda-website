# PR Automation Setup

This repository uses `.github/workflows/pr-automation.yml` to:
- run tests on every PR update,
- auto-approve eligible PRs,
- enable auto-merge with **SQUASH** (`gh pr merge --auto --squash`).

## Required repository settings

1. Go to **Settings → Actions → General**.
2. Under **Workflow permissions**, select **Read and write permissions**.
3. Enable **Allow GitHub Actions to create and approve pull requests**.

Without steps 2 and 3, approval and auto-merge steps will fail.

## Enable auto-merge in repository settings

1. Go to **Settings → General → Pull Requests**.
2. Enable **Allow auto-merge**.

## Branch protection recommendations

For your base branch (`main`):
- Require pull requests before merging.
- Require status checks to pass.
- Add `PR Automation / PR Tests` as a required check (or your existing stricter gate such as `Quality Gate / quality`).
- Require at least 1 approval if you want approvals enforced.

## Notes

- This workflow skips auto-approval/auto-merge for PRs from forks (`head.repo.fork == true`) for safety.
- Auto-merge only activates after checks pass and branch protection requirements are satisfied.
- Merge method is explicitly **SQUASH**.
