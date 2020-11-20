---
title: Create macOS Big Sur ISO Image File
date: 2020-11-20
tags: [macOS]
---

# Create macOS Big Sur ISO Image File

First download macOS Big Sur From Apple with App Store. Quit installator with `⌘+q`, then create new empty volume:

```bash
sudo hdiutil create -o /tmp/BigSur -size 16384m -volname BigSur -layout SPUD -fs HFS+J
```

Mount new volume:

```bash
sudo hdiutil attach /tmp/BigSur.dmg -noverify -mountpoint /Volumes/BigSur
```

Create bootable `dmg` and copy to new volume:

```bash
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/BigSur --nointeraction
```

Eject installator:

```bash
hdiutil eject -force /Volumes/Install\ macOS\ Big\ Sur
```

Convert `dmg` to `cdr` file:

```bash
hdiutil convert /tmp/BigSur.dmg -format UDTO -o ~/Downloads/BigSur
```

Rename `cdr` to `iso`:

```bash
mv -v ~/Downloads/BigSur.cdr ~/Downloads/BigSur.iso
```

Delete original created `dmg` file:

```bash
sudo rm -fv /tmp/BigSur.dmg
```