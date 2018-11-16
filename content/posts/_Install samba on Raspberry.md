---
title: Install samba on Raspberry
date: 2018-11-16
tags: [raspberry, iot]
---

# Install samba on Raspberry

```
sudo apt update 
sudo apt upgrade
```

```
sudo apt install samba samba-common-bin
```

```
sudo mkdir /home/shares 
sudo mkdir /home/shares/public 
sudo chown -R root:users /home/shares/public 
sudo chmod -R ug=rwx, o=rx /home/shares/public
```




```text
[share]
comment = public storage 
path = /share
browseable = yes
writeable = yes
only guest = no
create mask = 0660 
directory mask = 0771
read only = no
public = yes
```

Close the file by saving it and restart samba:

```
sudo /etc/init.d/samba restart
```

## Connect storage on Mac

Open Finder and press ⌘+K and write:

```
smb://pi.local
```

Hit connect and write login and password.