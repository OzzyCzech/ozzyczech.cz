---
title: Download all images from URL into a single folder
date: 2019-09-12
tags: [bash, wget]
---


# Download all images from URL into a single folder

There is plenty options, but easiest one is use command line. 
The **wget** is command line utility allows you to download whole web pages, files and images from the specific URL.

Follow command works just fine: 

```shell script
wget -nd -nc -np \
     -e robots=off \
     --recursive -p \
     --level=1 \
     --accept jpg,jpeg,png,gif \
     
     [example.website.com]
```

What's mean all that?

* `-nd`, `--no-directories`: Do not create a hierarchy of directories when retrieving recursively.
* `-nc`, `--no-clobber`: Do not overwrite existing files.
* `-np`, `--no-parent`: Do not ever ascend to the parent directory when retrieving recursively.
* `-e robots=off`: execute command `robots=off` as if it was part of
   `.wgetrc` file. This turns off the robot exclusion which means you ignore
   robots.txt and the robot meta tags (you should know the implications this comes with, take care).
* `-r`, `--recursive`: Turn on recursive retrieving
* `-p`, `--page-requisites`: Download all the files that are necessary.
* `-l depth`, `--level=depth`: Specify recursion maximum depth level.
* `-A`, `--accept`: Accepted file extensions.

Other useful download options:

* `-H`: span hosts (wget doesn't download files from different domains or subdomains by default)
* `--random-wait`: This option causes the time between requests to vary between 0.5 and 1.5
* `--wait 1.0`: Wait the specified number of seconds between the retrievals.
* `--limit-rate=amount`: Limit the download speed to amount bytes per second
* `-U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"`: Identify as agent-string to the HTTP server as Mozilla Firefox from Windows

Read more on [wget manual page](https://www.gnu.org/software/wget/manual/wget.html).

### Real world example

Download all [Homophones, Weakly](http://homophonesweakly.blogspot.com/) images since 2011

```shell script
wget -nd -nc -np \
     -e robots=off \
     --recursive -p \
     --level=1 \
     --accept jpg,jpeg \
     -H --random-wait \
     -U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36" \
     http://homophonesweakly.blogspot.com/{2011..2019}
```

