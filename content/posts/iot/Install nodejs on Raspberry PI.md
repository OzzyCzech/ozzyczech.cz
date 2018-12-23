---
title: Install nodejs on Raspberry PI
date: 2018-12-23
---

# Install nodejs on Raspberry PI


```bash
wget -qO- http://nodejs.org/dist/latest-v11.x/node-v11.5.0-linux-armv6l.tar.xz | tar xvz -C ./nodejs
cd nodejs
sudo cp -R bin/* /usr/bin/
sudo cp -R lib/* /usr/lib/
sudo apt update && sudo apt upgrade
sudo apt install build-essential
```