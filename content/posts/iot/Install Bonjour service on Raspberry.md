---
title: Install Bonjour service on Raspberry
date: 2018-11-16
tags: [raspberry, iot]
---

# Install Bonjour service on Raspberry

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install avahi-daemon
```

You can also change hostname:

```
sudo echo "pi" > /etc/hostname
sudo reboot
```

Then you can try ping `pi.local`

```bash
$ ping pi.local
PING pi.local (192.168.0.75): 56 data bytes
64 bytes from 192.168.0.75: icmp_seq=0 ttl=64 time=7.834 ms
64 bytes from 192.168.0.75: icmp_seq=1 ttl=64 time=7.185 ms
```

or just 

```bash
ssh pi@pi.local
```

* http://www.avahi.org/
* https://support.apple.com/bonjour