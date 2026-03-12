---
title: Screenshots on macOS
---

## Keyboard shortcuts

You can capture the entire screen, a window, or just a portion of the screen.

- `⌘ + ⇧ + 3` Capture the whole screen.
- `⌘ + ⇧ + 4` Capture a selection.
- `⌘ + ⇧ + 4 + Space` Capture a window.
- `⌘ + ⇧ + 5` Capture the whole screen, a selection or a window.

See more information in [Take a screenshot on your Mac](https://support.apple.com/en-us/HT201361).

## Command line

Command line tool that capture an image of the whole, or part of the screen.

```shell
screencapture -ioW ~/Desktop/screenshot.png
```

- `-i` Capture screen interactively, by selection or window.
- `-W` Start interaction in window selection mode.
- `-o` In window capture mode, do not capture the shadow of the window.

More information in [screencapture manual page](https://ss64.com/osx/screencapture.html).

## Change default settings of screen capture

```shell
defaults write com.apple.screencapture name "Screenshot"
```

Disable shadow in screenshots:

```shell
defaults write com.apple.screencapture disable-shadow -bool true
```

Save screenshots to the `~/Downloads`

```shell
defaults write com.apple.screencapture location -string "${HOME}/Downloads"
```

Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)

```shell
defaults write com.apple.screencapture type -string "png"
```

Disable datetime in screenshots filename

```shell
defaults write com.apple.screencapture include-date -bool false
```

To apply the changes, you need to restart the **SystemUIServer**:

```shell
killall SystemUIServer
```
