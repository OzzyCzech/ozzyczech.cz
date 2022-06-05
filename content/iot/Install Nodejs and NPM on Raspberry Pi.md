# Install Nodejs and NPM on Raspberry Pi

_Node.js_ is an open source server environment; _Node.js_ is free; _Node.js_ runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). There are two ways you can use to install #NodeJS and NPM on your #Raspberry.

### Install nodejs from NodeSource repository

Launch the Terminal and execute the command below:

```shell
sudo su  
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
sudo apt install nodejs
```

### Install nodejs from source code

```shell
sudo apt update  
sudo apt upgrade
```

Then you have to detect platform with `uname -m` and download correct file from [dist](https://nodejs.org/dist/latest/) wigh wget:

```shell
sudo wget https://nodejs.org/dist/latest/node-v18.3.0-linux-armv7l.tar.gz
```

Untar file and copy content to `/usr/local` folder:

```shell
sudo tar -xzf node-v18.3.0-linux-armv7l.tar.gz
cd node-v18.3.0-linux-armv7l
sudo copy -R * /usr/local
```
