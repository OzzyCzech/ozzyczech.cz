---
title: How to transfer drive to APFS
date: 2017-09-26
tags: [apfs, macos]
---

# How to transfer drive to APFS

The macOS High Sierra installer offers nondestructive in-place upgrades from HFS+ to APFS for bootable volumes. 
You can use Disk Utility to **convert external volumes** from HFS+ to APFS format.

Apple File System is a more modern file system than HFS+ and is optimized for solid state drives. It is 
safe and secure, offering crash protection, safe document saves, stable snapshots simplified backups,
and strong native encryption. 

1. Open Disk Utility with Spotlight (⌘ + Space)
2. Chose drive on right side
3. Edit > Convert to APFS
4. Wait... and profit

## Known limitations

* Right now APFS can’t be used in Fusion Drives, but it will be posible in [Future macOS High Sierra Update](https://www.macrumors.com/2017/09/25/apfs-fusion-drive-high-sierra-update/)
* Time Machine supports **APFS as a source** and not a destination. You **can't backup to an APFS destination** disk and Time Machine will inform you that the disk needs to be HFS+ if you attempt to do this.
* FileVault can’t encrypt an APFS drive.
* APFS can be read only on macOS High Sierra and newer
