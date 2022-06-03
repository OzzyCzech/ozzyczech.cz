# Change the Default MacOS Screenshot settings

Change Screen Shot filename:

```shell
defaults write com.apple.screencapture name "From " && killall SystemUIServer
```

Change the Screen Shot Save File Location:

```shell
defaults write com.apple.screencapture location ~/Downloads/ && killall SystemUIServer
```

#macOS 