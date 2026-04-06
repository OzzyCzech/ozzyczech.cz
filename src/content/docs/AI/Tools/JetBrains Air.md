---
title: JetBrains Air
description: Standalone agentic development environment from JetBrains — multiple AI coding agents in parallel with isolated workspaces.
created: 2026-04-06
updated: 2026-04-06
---

[Air](https://air.dev/) is a standalone **agentic development environment** from JetBrains. It lets you run several AI coding agents side by side with separate task loops, instead of one sequential chat or terminal session. The product emphasizes workflow: task definition, isolation, oversight, and review—not only the model.

## Supported agents

At launch, Air integrates:

| Agent | Provider |
| ----- | -------- |
| Claude Agent | Anthropic |
| Codex | OpenAI |
| Gemini CLI | Google |
| Junie | JetBrains |

Air is **agent-agnostic**: you can pick the agent per task or compare outputs in parallel.

## Core workflow

- **Task definition** — Reference files, commits, symbols, or images so agents get precise context (not only pasted paths).
- **Parallel runs** — Start multiple agents; each run is isolated via **Docker**, **Git worktrees**, or (planned) **cloud** environments to reduce conflicts.
- **Oversight** — Overview of async tasks; switch in to add input or see what an agent is doing.
- **Review** — Language-aware navigation across the project when reviewing and committing changes.

## Workspaces

Workspaces scope **sessions, Git state, navigation, and tools** to one project. They help run tasks concurrently, keep history, and avoid branch collisions without juggling many windows.

## Licensing and API access

- **JetBrains AI Pro or Ultimate** — Sign in and use supported agents at no extra cost. **JetBrains AI Free** and **JetBrains AI Enterprise** are not supported; trials cannot be started from Air.
- **BYOK (Bring Your Own Key)** — Connect API keys from Anthropic, OpenAI, or Google, or bring your own Codex/Gemini subscription; you pay providers directly. **BYOK overrides** the bundled subscription when configured; otherwise Air uses the JetBrains AI subscription.

## Relation to JetBrains IDEs

Air is a **separate desktop app** focused on agent orchestration. It is not a full IDE replacement; typical editing and tooling can stay in your existing JetBrains (or other) IDE while Air manages agent-powered tasks.

## Platform availability

macOS is available first; **Windows and Linux** were announced as coming. **Cloud agents and automations** (browser access, team visibility, integrations) are on the public roadmap.

## Sources

- [Air — JetBrains](https://air.dev/) — product positioning, FAQ, supported agents, licensing (retrieved 2026-04-06)
