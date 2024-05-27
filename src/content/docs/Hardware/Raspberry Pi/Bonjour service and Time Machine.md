---
title: Install AFP (Time Machine) and Bonjour service on Raspberry PI
description: How to setup Bonjour service and Time Machine on Raspberry Pi
sidebar:
  label: Bonjour and Time Machine
---

### Raspbian Buster Lite (without desktop)

1. [Download Raspbian Buster Lite](https://downloads.raspberrypi.org/raspbian_lite_latest)
2. [Install Raspbian](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) with [etcher](https://www.balena.io/etcher/) to SD card
3. Boot from SD card...

### Basic configuration and Wifi connection

```shell
sudo raspi-config
```

1. Change User Password :-) ([default user](https://www.raspberrypi.org/documentation/linux/usage/users.md) `pi` with password `raspberry`)
2. Change *Localisation Options*... select `en_US.utf8` and whatever else
3. Enable SSH in *Interfacing Options*...
4. Configure WiFi in *Network Options* and change *Hostname* (in my case to **pi**)

If you have Wifi with hidden SSID, you will need change `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf` file
and add `scan_ssid=1`:

```shell
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=CZ

network={
	ssid="HiddenWifiSSID"
	scan_ssid=1
	psk="and password :)"
}
```

If your language characters are still wrong (square), you have to reconfigure locales again:

```
sudo dpkg-reconfigure locales
sudo dpkg-reconfigure console-setup
sudo dpkg-reconfigure keyboard-configuration
```

Reboot (`sudo reboot`) and then check with `iwgetid` if you are connected to your Wifi!

### Install AFP support: [netatalk](http://netatalk.sourceforge.net/)

Netatalk provide **AppleTalk Filing Protocol** (AFP) interface:

```shell
sudo apt install netatalk -y
```

edit `sudo nano /etc/netatalk/afp.conf`

```ini
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

### Install Bonjour support: [avahi](https://www.avahi.org/) )

```shell
sudo apt install avahi-daemon avahi-utils -y
sudo update-rc.d avahi-daemon defaults
```

#### Config AFPD with `/etc/avahi/services/afpd.service`

```xml
<?xml version="1.0" standalone='no'?><!--*-nxml-*-->
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
   <name replace-wildcards="yes">%h</name>
   <service>
        <type>_afpovertcp._tcp</type>
        <port>548</port>
   </service>
   <service>
        <type>_device-info._tcp</type>
        <port>0</port>
        <txt-record>model=RackMac</txt-record>
    </service>
</service-group>
```

PS: `RackMac` is define icon that will be shown in Finder (there is plenty other options e.g. `Windows`, `Macintosh`, `TimeCapsule` [and so on](https://www.google.com/?q=avahi%20icons))

#### Config SSH with `/etc/avahi/services/ssh.service`

```xml
<?xml version="1.0" standalone='no'?><!--*-nxml-*-->
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
     <name replace-wildcards="yes">%h SSH</name>
     <service>
          <type>_ssh._tcp</type>
          <port>22</port>
     </service>
</service-group>
```

For server less ssh you can copy your key to pi:

```shell
ssh-copy-id pi@pi.local
```

#### Configure avahi daemon

Then in `/etc/avahi/avahi-daemon.conf` change two parametters `host-name` and `publish-workstation`:

```ini
[server]
host-name=pi # this row
# ...

[publish]
publish-workstation=yes # this row

# ...
```

### Enable Avahi and Nettalk

Enable **afp** and **avahi**

```shell
sudo systemctl enable netatalk
sudo systemctl enable avahi-daemon
```

and start them

```shell
sudo service avahi-daemon start
sudo service netatalk start
```

now check if everything works well with

```shell
avahi-browse -a | grep $(hostname)
```

### Links

* http://www.avahi.org/
* https://support.apple.com/bonjour
