# Run FTP server on Mac OS X

Setup everyhing: `sudo subl /etc/ftpd.conf`

```shell
# match umask from Mac OS×Server ftpd
umask all 022
chroot GUEST /Users/roman/ftp
modify guest off
umask  guest 0707
upload guest on
```

Start #FTP server

```shell
sudo launchctl load /System/Library/LaunchDaemons/ftp.plist
```

And stop again:

```shell
sudo launchctl unload /System/Library/LaunchDaemons/ftp.plist
```

#macOS