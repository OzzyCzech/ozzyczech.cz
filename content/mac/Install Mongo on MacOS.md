---
titla: Install mongo on MacOS
date: 2020-04-07
tags: [brew, macos, mongo]
---



# Install mongo on MacOS

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

### Starting mongo

```shell
brew services start mongodb-community
```

or stop

```shell
brew services stop mongodb-community
```

