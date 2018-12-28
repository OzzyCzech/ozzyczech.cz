---
title: Install Netatalk 3.x on Raspberry PI
date: 2018-12-28
---

# Install Netatalk 3.x on Raspberry PI

### Compile Netatalk from source

Install required Packages

```
sudo apt install build-essential \
libevent-dev libssl-dev libgcrypt-dev libkrb5-dev libpam0g-dev \
libwrap0-dev libdb-dev libtdb-dev libmariadbclient-dev \
avahi-daemon libavahi-client-dev libacl1-dev libldap2-dev \
libcrack2-dev systemtap-sdt-dev libdbus-1-dev \
libdbus-glib-1-dev libglib2.0-dev libio-socket-inet6-perl \
tracker libtracker-sparql-1.0-dev libtracker-miner-1.0-dev
```

Remove old version:

```
sudo apt remove netatalk
```

then download and extract latest version

```
wget http://prdownloads.sourceforge.net/netatalk/netatalk-3.1.12.tar.bz2 -qO - | tar -xj
cd netatalk-3.1.12/
```

Do configure!

```
./configure \
        --with-init-style=debian-systemd \
        --without-libevent \
        --without-tdb \
        --with-cracklib \
        --enable-krbV-uam \
        --with-pam-confdir=/etc/pam.d \
        --with-dbus-daemon=/usr/bin/dbus-daemon \
        --with-dbus-sysconf-dir=/etc/dbus-1/system.d \
        --with-tracker-pkgconfig-version=1.0
```

```
make
sudo make install
```

Check features and paths, using `netatalk -V` and `afpd -V`.

edit `/usr/local/etc/afp.conf`

```
[Global]
; mimic model = RackMac

[Homes]
basedir regex = /home

;[My AFP Volume]
;path = /path/to/volume

;[My Time Machine Volume]
;path = /path/to/backup
;time machine = yes
```

```
sudo systemctl enable avahi-daemon
sudo systemctl enable netatalk
sudo systemctl start avahi-daemon
sudo systemctl start netatalk
```

### Sources

* [Install Netatalk 3.1.12 on Debian 9 Stretch](http://netatalk.sourceforge.net/wiki/index.php/Install_Netatalk_3.1.12_on_Debian_9_Stretch)
