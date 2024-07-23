---
title: Add album art to mp3 or m4a with ffmpeg
---

Do you want your audio files to look as good as they sound? Adding a cover image
to your `MP3` or `M4A` files can significantly enhance your music library's
visual appeal. With this nifty Bash function, set-cover, you can automate the
process of embedding cover images into your audio files using `ffmpeg`.

Copy the function definition and paste it into your terminal or add it to your
`.bashrc` or `.bash_profile` file to make it available in every session.

```shell
# Set cover image to audio files
# example: set-cover -i cover.png *.mp3
function set-cover() {
  if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: set-cover cover.png|jpg *.mp3|*.m4a"
    return 1
  fi

  # Check if ffmpeg is installed
  if ! command -v ffmpeg &>/dev/null; then
    echo "Error: ffmpeg is not installed."
    return 1
  fi

  cover="$1"
  shift
  files=("$@")

  for file in "${files[@]}"; do
    ext="${file##*.}"
    output="out.${ext}"
    
    # common arguments
    args=(-y -loglevel error -hide_banner -nostats -i "$file" -i "$cover" -codec copy -map 0:a -map 1)
    
    # set cover image based on file extension 
    if [ "$ext" = "mp3" ]; then
      ffmpeg "${args[@]}" -metadata:s:v title="Album Cover" -metadata:s:v comment="Cover (front)" "$output" && mv "$output" "$file"
    elif [ "$ext" = "m4a" ]; then
      ffmpeg "${args[@]}" -disposition:v:0 attached_pic "$output" && mv "$output" "$file"
    fi
  done
}
```

Then you can use the function like this:

```shell
set-cover cover.jpg *.mp3
```
