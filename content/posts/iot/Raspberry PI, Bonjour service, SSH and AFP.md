---
title: Raspberry PI, Bonjour service, SSH and AFP
date: 2018-12-27
---

# Raspberry PI, Bonjour service, SSH and AFP

### Install clean Raspberry (withou desktop)

1. Download **Raspbian Stretch Lite** https://www.raspberrypi.org/downloads/raspbian/
2. [Install Raspbian](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) with [etcher](https://www.balena.io/etcher/) to SD card
3. Boot from SD card...

### Basic configuration and Wifi connection

```bash
sudo raspi-config
```

1. Change User Password :-) ([default user](https://www.raspberrypi.org/documentation/linux/usage/users.md) `pi` with password `raspberry`)
2. Change *Localisation Options*
3. Enable SSH in *Interfacing Options*
4. Configure WiFi in *Network Options* and change *Hostname* (in my case to **pi**)

If you have Wifi with hidden SSID, you will need change `/etc/wpa_supplicant/wpa_supplicant.conf` file
and add `scan_ssid=1`:

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=CZ

network={
	ssid="HiddenWifiSSID"
	scan_ssid=1
	psk="and password :)"
}
```

Reboot (`sudo reboot`) and then check with `iwgetid` if you are connected to your Wifi!

### Install AFP and Bonjour service

Install [netatalk](http://netatalk.sourceforge.net/2.2/htmldocs/configuration.html) thats provide AppleTalk Filing Protocol (AFP) interface.

```
sudo apt install netatalk
```

Install [avahi](https://www.avahi.org/)

```
sudo apt install avahi-daemon avahi-utils
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

#### Now Awvvaaaahhhhiii

Enable **afp** and **avahi**

```
sudo systemctl enable netatalk
sudo systemctl enable avahi-daemon
```

and start them

```
sudo service avahi-daemon start
sudo service netatalk start
```

now check if everything works well with

```
avahi-browse -a | grep $(hostname)
```

<!-- 
https://medium.com/@abjurato/using-raspberry-pi-as-an-apple-timemachine-d2fceecb6876
-->

### Links

* http://www.avahi.org/
* https://support.apple.com/bonjour
