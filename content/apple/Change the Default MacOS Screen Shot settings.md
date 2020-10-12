---
title: Change the Default MacOS Screenshot settings
date: 2020-03-24
tags: [macOS, screenshot]
---

# Change the Default MacOS Screenshot settings

Change Screen Shot filename:

```shell
defaults write com.apple.screencapture name "From " && killall SystemUIServer
```

Change the Screen Shot Save File Location:

```shell
defaults write com.apple.screencapture location ~/Downloads/ && killall SystemUIServer
```
