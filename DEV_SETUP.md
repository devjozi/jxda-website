# Dev environment & AI tooling (continuation)

For anyone (or AI) continuing work on this project. Capture of the current machine setup so tooling can be reused or matched.

## Platform

- **OS:** Windows 11 + Ubuntu WSL2 (Zsh)
- **Hardware:** AMD Ryzen 5 5500U (Cezanne) | 16GB RAM (12GB allocated to WSL)
- **GPU:** Radeon iGPU via ROCm — `HSA_OVERRIDE_GFX_VERSION=9.0.0` (no NVIDIA/CUDA; use ROCm or Vulkan where GPU is needed)

## Paths

- **WSL/Linux:** Prefer `/home/...` paths.
- **Windows access from WSL:** `/mnt/c/Users/...`

## Python

- **Version:** 3.12
- **Environment:** Managed via `~/.venv` (activate before Python/AI CLI work)

## AI tooling

- **Local:** Ollama — Qwen2.5-Coder:7b on GPU (ROCm)
- **Cloud:** Groq (Llama 3.3-70b), Gemini 2.0 Flash
- **Tools:** Open Interpreter (autonomous), Continue CLI (chat/refactor)
- **Invocation:** Assume tools run via `.venv` or custom aliases in `~/.zshrc`

## Project usage

- Use this doc when setting up a new machine or onboarding AI/contractors.
- For GPU-related work (e.g. local inference), use ROCm/Vulkan; do not assume NVIDIA/CUDA.
- Commands and scripts: prefer Linux paths and WSL context unless explicitly targeting Windows.

## Testing / TDD rules

- This project follows Test-Driven Development (TDD) as an implementation rule: write tests for new behavior before or alongside implementation.
- Run tests with `npm run test` (uses `vitest`).
- Developers must add unit tests for new modules and integration tests for pages that contain business logic (e.g., signup flows).
- CI quality gate runs lint, typecheck, tests, and static build (`npm run check`) on PRs; include validation instructions in PR descriptions.

Basic commands:
```bash
# Run tests once
npm run test

# Run typecheck
npm run typecheck

# Run lint
npm run lint
```
