<!--
title : Prevent Heartbleed: upgrade openssl with brew on your mac
author : Roman Ožana <ozana@omdesign.cz>
date : 14.4.2014 08:48:27
tags : brew, heartbleed, mac, openssl
-->

# Prevent Heartbleed: upgrade openssl with brew on your mac

The [Heartbleed Bug][1]� is a serious vulnerability in the popular OpenSSL cryptographic software library. Follow [brew][2] command will upgrade your openssl library:

    brew install openssl && brew link openssl --force

Relaunch your Terminal (has to be hard quit ⌘ + Q) and check your openssl version:

    openssl version

Now you shall have OpenSSL 1.0.1g 7 Apr 2014 or newer.<p</p>

 [1]: http://heartbleed.com/
 [2]: http://brew.sh/