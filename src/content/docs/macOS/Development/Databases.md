---
title: Databases
---

## SQL

- [Sequel Ace](https://sequel-ace.com/) - MySQL/MariaDB database management for macOS

## Redis GUI

- [Medis](https://getmedis.com/) is a beautiful, easy-to-use Mac database management application for Redis.

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
