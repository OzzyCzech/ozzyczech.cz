---
title: Timelapse image capture
---

```shell
apt-get install fswebcam
```

Capture *cron* from camera from 5 AM to 7 PM every day:

```shell
crontab -e
```

add follow line

```shell
*  5-19 * * * fswebcam --jpeg 95 -r 1024x768 -S 100 --no-banner /home/images$
```

you can also share every xxx image via twitter or something

```shell
59  5-19 * * * tweet it...
```

Generate timelapse video from all images:

```shell
ffmpeg -framerate 30 -pattern_type glob -i 'images/*.jpeg' -vcodec libx264 video.mp4
```