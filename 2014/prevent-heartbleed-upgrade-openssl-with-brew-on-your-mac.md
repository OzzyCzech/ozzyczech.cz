<!--
title: Prevent Heartbleed: upgrade openssl with brew on your mac
date: 14.4.2014 10:48:27
author: Roman Ožana <ozana@omdesign.cz>
tags: brew, heartbleed, mac, openssl
-->


# Prevent Heartbleed: upgrade openssl with brew on your mac

The [Heartbleed Bug](http://heartbleed.com/) is a serious vulnerability in the popular OpenSSL cryptographic software library. Follow [brew](http://brew.sh/) command will upgrade your openssl library:


`brew install openssl && brew link openssl --force`
 Relaunch your Terminal (has to be hard quit ⌘ + Q) and check your openssl version: 
`openssl version`
 Now you shall have OpenSSL 1.0.1g 7 Apr 2014 or newer. #brew #mac #openssl #heartbleed