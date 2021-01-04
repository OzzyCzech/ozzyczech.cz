---
titla: Install mongo on macOS
date: 2020-04-07
tags: [brew, macOS, mongo]
---



# Install mongo on macOS

First you need tap official mongo brew:

```shell
brew tap mongodb/brew
```

Then just install mongo with:

```shell
 brew install mongodb-community
```

There is one tool which people often want to install on its own, and that’s the MongoDB shell.

```shell
brew install mongodb-community-shell
```

You can also install only [database tools](https://docs.mongodb.com/database-tools/) for managing mongo database:

```shell
brew install mongodb-database-tools
```

### Starting mongo

```shell
brew services start mongodb-community
```

or stop

```shell
brew services stop mongodb-community
```

