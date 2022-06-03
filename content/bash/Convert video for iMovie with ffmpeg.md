# Convert video for iMovie with ffmpeg

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

* Apple Animation Codec
* Apple Intermediate Codec
* Apple ProRes
* AVCHD (including AVCCAM, AVCHD Lite, and NXCAM)
* DV (including DVCAM, DVCPRO, and DVCPRO50)
* H.264
* HDV
* HEVC
* iFrame
* Motion JPEG (OpenDML only)
* MPEG-4 SP
* Photo JPEG
* XAVC-S

Container formats: **3GP**, **AVI**, **M4V**, **MOV** (QuickTime) and **MP4**
Audio formats: AAC, AIFF, BWF, CAF, MP3, MP4, RF64 and WAV

More information [about incompatible media in iMovie for macOS](https://support.apple.com/en-us/HT209029)

#ffmpeg #macOS 