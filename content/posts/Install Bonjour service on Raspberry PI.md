---
title: Install Bonjour service on Raspberry PI
date: 2018-11-16
tags: [raspberry, iot]
---

# Install Bonjour on Raspberry PI

```bash
sudo apt-get update
sudo apt-get install libnss-mdns
```

You can change hostname:

```
echo "pi" > /etc/hostname 
reboot
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
ssh root@pi.local
```

* https://support.apple.com/bonjour