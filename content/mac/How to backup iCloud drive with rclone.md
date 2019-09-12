---
title: How to backup iCloud drive with rclone
date: 2019-09-12
tags: [icloud, backup, macos]
---

# How to backup iCloud drive with rclone

All iCloud drive data are located in `~/Library/Mobile\ Documents/com~apple~CloudDocs/` folder. 
You can easily sync them with [rclone](https://rclone.org/) to backup hard drive connected to Mac. 
In my case it will be mounted to `/Volumes/Backup/`.
 
```bash
rclone sync ~/Library/Mobile\ Documents/com~apple~CloudDocs/ /Volumes/Backup/iCloudDriveBackup --copy-links
```


If you will need also backup of all deleted files (sync usually remove files that was delete from source) is there `--backup-dir` parameter.

```bash
rclone sync ~/Library/Mobile\ Documents/com~apple~CloudDocs/ /Volumes/Backup/iCloudDriveBackup --copy-links 
       --backup-dir="/Volumes/Backup/iCloudDriveArchive/$(date +%Y)/$(date +%F_%T)"
```