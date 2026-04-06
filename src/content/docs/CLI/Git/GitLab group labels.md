---
title: GitLab group labels
---

Setup group labels for GitLab using [glab](https://gitlab.com/gitlab-org/cli) CLI.

First, get the group ID:

```bash
GROUP_ID=$(glab api "groups?search=testomato" | python3 -c "import sys,json; print(json.load(sys.stdin)[0]['id'])")
```

## Origin

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Origin: From customer ♥" -f "color=#D6336C" -f "description=Requested by a customer"
```

## Priority

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Critical" -f "color=#E03131" -f "description=Must be resolved immediately"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: High" -f "color=#E8590C" -f "description=Should be resolved soon"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Medium" -f "color=#F08C00" -f "description=Normal priority, plan for upcoming cycle"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Low" -f "color=#51CF66" -f "description=Nice to have, no rush"
```

## Status

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: In Progress" -f "color=#4C6EF5" -f "description=Currently being worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Confirmed" -f "color=#1C7ED6" -f "description=Verified and ready to be worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Review Needed" -f "color=#AE3EC9" -f "description=Ready for code review"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Feedback Needed" -f "color=#0CA678" -f "description=Waiting for input from reporter or stakeholder"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: On Hold" -f "color=#868E96" -f "description=Paused or blocked, not actively worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Blocked" -f "color=#343A40" -f "description=Blocked by an external dependency"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Complete" -f "color=#2F9E44" -f "description=Done and ready to close"
```

## Type

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Bug" -f "color=#E03131" -f "description=Something is broken or not working as expected"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Feature" -f "color=#4C6EF5" -f "description=New functionality or capability"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Enhancement" -f "color=#1C7ED6" -f "description=Improvement to an existing feature"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Idea" -f "color=#BE4BDB" -f "description=Concept or suggestion for future consideration"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Security" -f "color=#FA5252" -f "description=Security vulnerability or hardening"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Refactoring" -f "color=#E8590C" -f "description=Code restructuring without changing behavior"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Maintenance" -f "color=#868E96" -f "description=Routine upkeep, dependencies, or infrastructure"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Content" -f "color=#15AABF" -f "description=Blog posts, help articles, and other content changes"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Documentation" -f "color=#22B8CF" -f "description=Documentation updates"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Question" -f "color=#0CA678" -f "description=Needs clarification or discussion"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Help Needed" -f "color=#D6336C" -f "description=Assistance needed to move forward"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Delegable" -f "color=#F08C00" -f "description=Suitable for delegation to new team members"
```

## Scope

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Frontend" -f "color=#845EF7" -f "description=Changes to Vue/JS/CSS"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Backend" -f "color=#FF922B" -f "description=Changes to PHP/API/database"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Infrastructure" -f "color=#495057" -f "description=Docker, CI/CD, deployment"
```
