---
title: Useful commands
---

## Network speed quality

Since macOS Monterey is there a command to test your network quality:

```shell
networkQuality -v
```

Output will looks like follow:

```
==== SUMMARY ====
Upload capacity: 16.239 Mbps
Download capacity: 475.129 Mbps
Upload flows: 20
Download flows: 12
Responsiveness: Low (154 RPM)
Base RTT: 26
Start: 19.04.2022 13:56:47
End: 19.04.2022 13:57:04
OS Version: Version 12.3.1 (Build 21E258)
```

If you’re curious, networkQuality uses Apple’s CDN at https://mensura.cdn-apple.com/api/v1/gm/config as the target for its testing.

## List all mounted drives on Mac

```shell
df -h
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
caffeinate -i make
# caffeinate forks a process, execs "make" in it 
# and prevents idle sleep as long as that 
# process is running
```

```shell
caffeinate -t 18000 # 18000 seconds
```

Or you can just use free app [KeepingYouAwake](https://keepingyouawake.app/)
