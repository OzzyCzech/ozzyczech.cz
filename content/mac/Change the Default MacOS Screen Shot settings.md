---
title: Change the Default Screen Shot File Name in MacOS
date: 2020-03-24
tags: [macOS, screenshot]
---

# Change the Default MacOS Screen Shot settings

Change Screen Shot filename to date and time only:

```shell script
defaults write com.apple.screencapture name ""
killall SystemUIServer
```

Change the Screen Shot Save File Location:

```shell script
defaults write com.apple.screencapture location ~/Downloads/
killall SystemUIServer
```
