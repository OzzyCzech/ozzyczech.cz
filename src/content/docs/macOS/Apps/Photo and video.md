---
title: Photo and video
---

## Image viewers

- [FlowVision](https://flowvision.app/) - Image viewer and organizer for macOS
- [qView](https://interversehq.com/qview/) - Minimalist image viewer

## Image editing

- [Affinity Studio](https://www.affinity.studio) - Free all design and photo editing tools
- [Pixelmator Pro](https://www.pixelmator.com/pro/) - Image editing made easy
- [Procreate](https://procreate.art/) - The most powerful and intuitive digital illustration app

## Video players

- [IINA](https://iina.io/) - The modern video player for macOS
- [Elmedia Player](https://www.elmedia-video-player.com/) - Video player for Mac

## Video editing

- [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) - Free video editor for Windows/macOS
- [LumaFusion](https://luma-touch.com/) - Professional Editing Reimagined for Mobile
- [Final Cut Pro](https://www.apple.com/final-cut-pro/) - best for mac
- [iMovie](https://www.apple.com/imovie/) - free video editor for mac

## Screen recorders

- [Kap](https://getkap.co/) - An open-source screen recorder built with web technology.
- [Screen Studio](https://www.screen.studio/) - Beautiful Screen Recordings in Minutes

## FFmpeg for iMovie / Apple-friendly export

You need to include the argument `-pix_fmt yuv420p` to generate `H.264` content for Apple software/devices, and a bunch of other decoders that don't handle `yuv444p`.

```shell
ffmpeg -i input.avi -pix_fmt yuv420p output.mp4
```

Apple added ProRes support sometime in late 2014 since iMovie 10 you can use follow code:

```shell
ffmpeg -i input.avi -c:v prores -c:a pcm_s16le output.mov
```

Formats compatible with macOS Catalina:

Video formats:

- Apple Animation Codec
- Apple Intermediate Codec
- Apple ProRes
- AVCHD (including AVCCAM, AVCHD Lite, and NXCAM)
- DV (including DVCAM, DVCPRO, and DVCPRO50)
- H.264
- HDV
- HEVC
- iFrame
- Motion JPEG (OpenDML only)
- MPEG-4 SP
- Photo JPEG
- XAVC-S

Container formats: **3GP**, **AVI**, **M4V**, **MOV** (QuickTime) and **MP4**
Audio formats: AAC, AIFF, BWF, CAF, MP3, MP4, RF64 and WAV

More information [about incompatible media in iMovie for macOS](https://support.apple.com/en-us/HT209029)
