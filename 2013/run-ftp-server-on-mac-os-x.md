<!--
title : Run FTP server on Mac OS X
author : Roman Ožana <ozana@omdesign.cz>
date : 28.11.2013 12:21:22
tags : ftp, mac, protip
-->

# Run FTP server on Mac OS X

Setup everyhing: `sudo subl /etc/ftpd.conf`

    # match umask from Mac OS X Server ftpd
    umask all 022
    chroot GUEST /Users/roman/ftp
    modify guest off
    umask  guest 0707
    upload guest on
    

Start FTP server

    sudo launchctl load /System/Library/LaunchDaemons/ftp.plist
    

And stop again:

    sudo launchctl unload /System/Library/LaunchDaemons/ftp.plist<p</p>