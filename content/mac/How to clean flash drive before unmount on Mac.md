---
title: How to clean flash drive before unmount on Mac
date: 2013-12-21
tags: [macOS, bash]
---


# How to clean flash drive before unmount on Mac

How to **clean flash drive** and delete all hidden (dot) files on mac before unmount? It's simple, save follow commands as `flash`:

```shell script
#!/bin/bash

if [ -n "$1" ]; then
  read -r -p "Clean /Volumes/$1/ and unmount? [y/N] " response
  if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]; then      
    find /Volumes/$1/ -name '._*' -type f -delete
    rm -rf /Volumes/$1/.Spotlight-V100/
    rm -rf /Volumes/$1/.Trashes/
    diskutil unmount /Volumes/$1/
    echo "Done..."
  fi
else
  echo "Flash drive name missing"
fi
```

Then change the access mode of a file `chmod +x flash`. To unmount a clean flash drive just run
`./flash Flashka` (Flashka is name od drive).
