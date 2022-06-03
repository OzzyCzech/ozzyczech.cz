# Install nodejs on Raspberry PI

First download latest version of nodejs:

```shell
wget -qO- http://nodejs.org/dist/latest/node-v12.4.0-linux-armv7l.tar.xz | tar xvz -C ./nodejs
cd nodejs
```

Compile from sources:

```shell
sudo cp -R bin/* /usr/bin/
sudo cp -R lib/* /usr/lib/
sudo apt update && sudo apt upgrade
sudo apt install build-essential
```


#iot #Raspberry 