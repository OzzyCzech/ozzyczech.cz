---
title: Install nodejs on Raspberry PI
date: 2018-12-23
tags: [iot, Raspberry]
---

# Install nodejs on Raspberry PI


First download latest version of nodejs:

```bash
wget -qO- http://nodejs.org/dist/latest/node-v12.4.0-linux-armv7l.tar.xz | tar xvz -C ./nodejs
cd nodejs
```

Compile from sources:

```bash
sudo cp -R bin/* /usr/bin/
sudo cp -R lib/* /usr/lib/
sudo apt update && sudo apt upgrade
sudo apt install build-essential
```
