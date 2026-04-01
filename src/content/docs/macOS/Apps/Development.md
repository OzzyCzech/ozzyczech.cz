---
title: Development
---

## Package manager and databases

- [Homebrew](https://brew.sh/) - The missing package manager for macOS

### SQL

- [Sequel Ace](https://sequel-ace.com/) - MySQL/MariaDB database management for macOS

### Redis GUI

- [Medis](https://getmedis.com/) is a beautiful, easy-to-use Mac database management application for Redis.

## Command line tools

- [ack](https://beyondgrep.com/) - ack is a grep-like source code search tool
- [httpie](https://github.com/jakubroztocil/httpie) - HTTP client
- [git](https://github.com/git/git) - version control
- [jq](https://github.com/stedolan/jq) - JSON processor
- [curl](https://curl.haxx.se/docs/manpage.html) - Transfer data from or to a server
- [now](https://github.com/zeit/now-cli) - real time global deployments served over HTTP/2
- [tldr](https://github.com/tldr-pages/tldr) - simplified and community-driven man pages
- [trash](http://hasseg.org/trash/) - moves files or folders to the trash
- [dog](https://github.com/ogham/dog) - A command-line DNS client

## MongoDB (Homebrew)

First you need to tap the official MongoDB brew:

```bash
brew tap mongodb/brew
```

Then just install mongo with:

```bash
brew install mongodb-community
```

There is one tool which people often want to install on its own, and that's the MongoDB shell.

```bash
brew install mongodb-community-shell
```

You can also install only [database tools](https://docs.mongodb.com/database-tools/) for managing mongo database:

```bash
brew install mongodb-database-tools
```

### Starting mongo

```bash
brew services start mongodb-community
```

or stop

```bash
brew services stop mongodb-community
```

## Terminal apps

List of the best terminal apps for macOS.

### [cmux](https://www.cmux.dev/)

Native macOS terminal built on Ghostty, designed for managing multiple AI coding agents. Features vertical tabs, notification rings, split panes, and a scriptable socket API.

```shell
brew install --cask cmux
```

### [Ghostty](https://ghostty.org/)

GPU-accelerated terminal with native macOS feel, ligatures, and image protocol support. Free and open source.

```shell
brew install --cask ghostty
```

### [iTerm2](https://iterm2.com/)

A powerful replacement for the default Terminal app. Split panes, search, autocomplete, paste history, and extensive customization. Free and open source.

```shell
brew install --cask iterm2
```

### [Warp](https://www.warp.dev/)

Modern, AI-powered terminal with blocks, command palette, and collaborative features. Built for speed and developer workflow.

```shell
brew install --cask warp
```

### [Kitty](https://sw.kovidgoyal.net/kitty/)

GPU-based terminal emulator with fast rendering, ligatures, and image support. Highly configurable and lightweight.

```shell
brew install --cask kitty
```

### [Alacritty](https://alacritty.org/)

A fast, cross-platform terminal emulator written in Rust. GPU-accelerated rendering, minimal configuration, and focuses on performance.

```shell
brew install --cask alacritty
```

### [WezTerm](https://wezterm.org/)

A GPU-accelerated cross-platform terminal emulator written in Rust. Offers multiplexing, ligatures, color emoji, and extensive Lua-based configuration. Features built-in image protocol support and rich text formatting.

```shell
brew install --cask wezterm
```

### [Hyper](https://hyper.is/)

Terminal built on web technologies (HTML, CSS, JS). Extensible via plugins and themes.

```shell
brew install --cask hyper
```
