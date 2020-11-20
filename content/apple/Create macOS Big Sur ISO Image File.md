---
title: Create macOS Big Sur ISO Image File
date: 2020-11-20
tags: [macOS]
---

# Create macOS Big Sur ISO Image File

First download macOS Big Sur From Apple with App Store. Quit installator with `⌘+q`. Then run follow commands:

```bash
sudo hdiutil create -o /tmp/BigSur -size 16384m -volname BigSur -layout SPUD -fs HFS+J
```

```bash
sudo hdiutil attach /tmp/BigSur.dmg -noverify -mountpoint /Volumes/BigSur
```

```bash
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/BigSur --nointeraction
```

```bash
hdiutil eject -force /Volumes/Install\ macOS\ Big\ Sur
```

```bash
hdiutil convert /tmp/BigSur.dmg -format UDTO -o ~/Downloads/BigSur
mv -v ~/Downloads/BigSur.cdr ~/Downloads/BigSur.iso
sudo rm -fv /tmp/BigSur.dmg
```