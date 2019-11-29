---
title: Run FTP server on Mac OS X
date: 2013-11-28
tags: [ftp, mac, macOS]
---

# Run FTP server on Mac OS X

Setup everyhing: `sudo subl /etc/ftpd.conf`

```bash
# match umask from Mac OS X Server ftpd
umask all 022
chroot GUEST /Users/roman/ftp
modify guest off
umask  guest 0707
upload guest on
```

Start FTP server

```bash
sudo launchctl load /System/Library/LaunchDaemons/ftp.plist
```

And stop again:

```bash
sudo launchctl unload /System/Library/LaunchDaemons/ftp.plist
```
