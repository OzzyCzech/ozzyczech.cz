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