---
title: Install Docker
sidebar:
  label: Install Docker
---

The recommended way to install Docker on Linux is using the official [convenience script](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script):

```bash
if ! command -v docker &>/dev/null; then
  echo "Installing Docker..."
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker.service
fi
```

This script automatically detects your Linux distribution and installs Docker Engine with all required dependencies.
