---
title: Claude Code
---

[Claude Code](https://claude.ai/code/) is AI-powered code agent by Anthropic.

## Commands

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `/help`             | Get help with using Claude Code |
| `/compact`          | Compact conversation history   |
| `/clear`            | Clear conversation             |
| `/commit`           | Create a git commit            |
| `/review-pr`        | Review a pull request          |
| `/fast`             | Toggle fast mode               |
| `/plugin`           | Manage plugins                 |
| `/loop`             | Run a command on interval      |
| `/schedule`         | Manage scheduled agents        |

## Skills

Skills are specialized prompts that extend Claude Code capabilities. They are invoked with `/<skill-name>` syntax.

| Skill               | Description                            |
| -------------------- | -------------------------------------- |
| `/commit`            | Create a git commit                    |
| `/rebase`            | Rebase the current branch              |
| `/simplify`          | Review code for reuse and quality      |
| `/loop`              | Run a prompt on recurring interval     |
| `/schedule`          | Manage scheduled remote agents         |
| `/claude-api`        | Help building apps with Claude API     |
| `/update-config`     | Configure Claude Code settings         |

## Plugins

- **[Impeccable](https://impeccable.style/)** — code style and formatting plugin

  ```bash
  /plugin marketplace add pbakaus/impeccable
  ```

- **[Nette](https://github.com/nette/claude-code)** — skills for Nette framework development

  ```bash
  /plugin marketplace add nette/claude-code
  ```

## Settings

Settings are stored in `~/.claude/settings.json`:

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "attribution": {
    "commit": "",
    "pr": ""
  },
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Write",
      "Edit",
      "MultiEdit",
      "Bash(git *)",
      "Bash(glab *)",
      "Bash(gh *)",
      "Bash(npm *)",
      "Bash(npx *)",
      "Bash(yarn *)",
      "Bash(pnpm *)",
      "Bash(curl:*)",
      "Bash(wget:*)",
      "Bash(ls:*)",
      "Bash(ls -la:*)",
      "Bash(cp:*)",
      "Bash(mv:*)",
      "Bash(mkdir:*)",
      "Bash(touch:*)",
      "Bash(find:*)",
      "Bash(cat:*)",
      "Bash(echo:*)",
      "Bash(pwd:*)",
      "Bash(cd:*)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)",
      "Read(./.ssh/**)",
      "Write(./.env)",
      "Write(./.env.*)",
      "Write(./secrets/**)",
      "Bash(chmod 777:*)",
      "Bash(rm -rf:*)",
      "Bash(sudo:*)",
      "Bash(ssh:*)",
      "Bash(scp:*)"
    ]
  },
  "model": "opus",
  "enabledPlugins": {
    "nette@nette": true,
    "impeccable@impeccable": true
  },
  "extraKnownMarketplaces": {
    "nette": {
      "source": {
        "source": "github",
        "repo": "nette/claude-code"
      },
      "autoUpdate": true
    },
    "impeccable": {
      "source": {
        "source": "github",
        "repo": "pbakaus/impeccable"
      },
      "autoUpdate": true
    }
  },
  "voiceEnabled": false
}
```
