---
title: Timelapse image capture 
date: 2017-09-11
---

# Timelapse image capture

```
apt-get install fswebcam
```

Capture *cron* from camera from 5 AM to 7 PM every day:

```
crontab -e
```

add follow line

```
*  5-19 * * * fswebcam --jpeg 95 -r 1024x768 -S 100 --no-banner /home/images$
```

you can also share every xxx image via twitter or something

```
59  5-19 * * * tweet it...
```

Generate timelapse video from all images:

````
ffmpeg -framerate 30 -pattern_type glob -i 'images/*.jpeg' -vcodec libx264 video.mp4
```
