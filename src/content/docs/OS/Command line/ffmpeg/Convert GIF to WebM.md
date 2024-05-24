---
title: Convert GIF to WebM
---

```shell
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm
```

```html
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm">
</video>
```