---
title: List of useful macOS commands
date: 2022-04-19
tags: [macOS, bash]
---

# List of useful macOS commands

## List all mounted drives on Mac

```shell
df -h
```

## Network speed quality

```shell
networkQuality -v
```

## Open any source

```shell
open # [url|filename|directory...]
```

## Prevent the system from sleeping

The `caffeinate` command is used to prevent a Mac from going to sleep.

* `-d` - Prevent the display from sleeping.
* `-i` - Prevent the system from idle sleeping.
* `-m` - Prevent the disk from idle sleeping.
* `-s` - Prevent the system from sleeping. This assertion is valid only when system is running on AC power.
* `-u` - Declare that a user is active. If the display is off, this option turns the display on and prevents the display from going into idle sleep.
* `-t` - Specifies the timeout value in seconds for which the command is valid.
* `-w` - Waits for the process with the specified pid to exit.


```shell
caffeinate -i make # caffeinate forks a process, execs "make" in it and prevents idle sleep as long as that process is running
```

```shell
caffeinate -t 18000 # seconds
```

Or you can just use free app [KeepingYouAwake](https://keepingyouawake.app/)