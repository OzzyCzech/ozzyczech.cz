# Convert GIF to WebM with ffmpeg

```shell
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm
```

```html
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm">
</video>
```

#bash #ffmpeg