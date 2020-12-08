---
title: Retrieve IP adress of AirPrint Printer
date: 2020-11-12
tags: [macOS]
---

# Retrieve IP adress of AirPrint Printer


You can use [ippfind](https://manpages.debian.org/testing/cups-ipp-utils/ippfind.1.en.html) command that finds services
registered with a DNS server or available through local devices. Its primary purpose is to find IPP printers
and show their URIs, show their current status, or run commands.

```shell
ippfind
```

Then you get local adress of printer (Internet Printing Protocol (IPP, [RFC 2911](https://tools.ietf.org/html/rfc2911))):

```
ipp://3036B5000000.local:XXX/ipp/print
```

then ping local address

```shell
ping 3036B5000000.local
```

and here we go

```
PING 3036B5000000.local (192.168.0.108): 56 data bytes
64 bytes from 192.168.0.108: icmp_seq=0 ttl=64 time=262.342 ms
64 bytes from 192.168.0.108: icmp_seq=1 ttl=64 time=285.290 ms
```

our printer has `192.168.0.108`