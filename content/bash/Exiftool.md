---
title: Exiftool tips & tricks
date: 2019-06-24
tags: [bash, photo, exiftool, exif]
---

# Exiftool tips & tricks

## Organize images

Organize images by years/months

```bash
exiftool -d "%Y/%m/%Y-%m-%d %H.%M.%S%%-c.%%le" "-filename<CreateDate" -r ./Photos
```
Download RAW files from SD card to current folder:

```bash
exiftool -d "%Y/%m/%Y-%m-%d %H.%M.%S%%-c.%%le" "-filename<CreateDate" --ext raf -r /Volumes/SD
```

Move all Olympus images to directory Olympus:

```bash
exiftool -r '-directory=Olympus' -if '$make eq "OLYMPUS CORPORATION"' .
```

Rename files to datestamp:

*Filename looks like 2014-01-01 12:00:00.jpg and will append -NUM if DateTimeOriginal is the same for multiple files*

```bash
exiftool '-FileName<DateTimeOriginal' -d "%Y-%m-%d %H.%M.%S%%-c.%%e" .  
```

## Date & time

Find images in a directory that don't have a DateTimeOriginal:

```bash
exiftool -filename -filemodifydate -createdate -r -if '(not $datetimeoriginal) and $filetype eq "JPEG"' .
```

Update any photo that doesn't have DateTimeOriginal to have it based on file modify date:

```bash
exiftool '-datetimeoriginal<filemodifydate' -if '(not $datetimeoriginal or ($datetimeoriginal eq "0000:00:00 00:00:00")) and ($filetype eq "JPEG")' .
```

Set date by filename:

```bash
exiftool "-alldates<filename" $@
```

## All metadata

Remove all metadata of a image file:

```bash
exiftool -all= -overwrite_original photo.jpg
```

Remove all metadata of all `*.jpg` files in current directory:

```bash
exiftool -all= -overwrite_original -ext *.jpg
```

## GPS

Strip all metadata except for location (GPS):

```bash
exiftool -all= -tagsfromfile @ -gps:all *.jpg
```

Remove all GPS metadata of `*.jpg` files in current directory:

```bash
exiftool -gps:all= *.jpg
```

Create KML from geotagged photos:

```bash
DESKTOP=$HOME/Desktop
cat $DESKTOP/kml-start.fmt > out.kml
exiftool -n -r -q -p $DESKTOP/kml-placemark.fmt . >> out.kml
cat $DESKTOP/kml-end.fmt >> out.kml
```
Create CSV of Geo Information:

```bash
exiftool -csv -filename -imagesize -gps:GPSLatitude -gps:GPSLongitude ./ > long.csv
```

## Extra

Check Shutter Count:

```bash
exiftool -ImageCount [filename]
```

## JSON

Outputs a grouped collection of records as JSON in a directory:

```bash
exiftool -json -g /path > collectionprofile.json
```