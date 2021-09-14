---
title: Join multiple GoPro MP4 files to single one
date: 2021-05-10
tags: [bash, ffmpeg, gopro]
---

# Join multiple GoPro MP4 files to single one

GoPro 'chapters' are footage around 4 GB - The camera starts a new file every ~ 10 minutes.
If you have media files with exactly the same codec and codec parameters you can concatenate them quite easily.
Fastest way, that I found, is use [ffmpeg](https://www.ffmpeg.org/) with [concating function](https://trac.ffmpeg.org/wiki/Concatenate),
but there is one unnecessary step with `mylist.txt`, the list of all files, you want to have concatenated.

```shell
for f in *.MP4; do echo "file '$PWD/$f'"; done > mylist.txt
```

If your shell supports process substitution (like Bash and Zsh), you can avoid explicitly creating a list
file and do the whole thing in a single line:

```shell
ffmpeg -f concat -safe 0 -i <(for f in *.MP4; do echo "file '$PWD/$f'"; done) -c copy output.mp4
```

Here is also nice bash function, that can be put to your [`.bash_profile`](https://github.com/OzzyCzech/dotfiles/commit/0fb4669caddff9f6ddd6a64cee6f9e43377be148):

```shell
function video-concat() {
  ffmpeg -f concat -safe 0 -i <(for f in ${@:1:${#}-1}; do echo "file '$PWD/$f'"; done) -c copy $_
}
```

Then you can call `video-concat` function as follow:

```shell
video-concat *.MP4 output.mp3
```

