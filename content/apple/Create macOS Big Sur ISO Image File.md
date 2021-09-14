---
title: Create macOS Big Sur ISO Image File
date: 2020-11-20
tags: [macOS]
---

# Create macOS Big Sur ISO Image File

First download macOS Big Sur From Apple with App Store. Quit installator with `⌘+q`, then create new empty volume:

```shell
sudo hdiutil create -o /tmp/BigSur -size 16384m -volname BigSur -layout SPUD -fs HFS+J
```

Mount new volume:

```shell
sudo hdiutil attach /tmp/BigSur.dmg -noverify -mountpoint /Volumes/BigSur
```

Create bootable `dmg` and copy to new volume:

```shell
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/BigSur --nointeraction
```

Eject installator:

```shell
hdiutil eject -force /Volumes/Install\ macOS\ Big\ Sur
```

Convert `dmg` to `cdr` file:

```shell
hdiutil convert /tmp/BigSur.dmg -format UDTO -o ~/Downloads/BigSur
```

Rename `cdr` to `iso`:

```shell
mv -v ~/Downloads/BigSur.cdr ~/Downloads/BigSur.iso
```

Delete original created `dmg` file:

```shell
sudo rm -fv /tmp/BigSur.dmg
```

[How to create a bootable installer for macOS](https://support.apple.com/en-us/HT201372)
