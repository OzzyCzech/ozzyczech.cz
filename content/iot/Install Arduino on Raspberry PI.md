---
title: Install Arduino on Raspberry PI
date: 2019-10-24
tags: [Raspberry, iot]
---


# Install Arduino on Raspberry PI

1. [Download arduino Linux ARM 64 bit](https://www.arduino.cc/en/Main/software)

2. Untar
   ```shell script
   sudo tar xvJf ~/Downloads/arduino-1.8.9-linux64.tar.xz -C /opt
   ```
   
3. Install 
   ```shell script
   sudo -E /opt/arduino-1.8.9/install.sh
   ```

Now, you have to add the Debian 10 login user to the dialout, tty, uucp and plugdev group.
Otherwise, you won’t be able to upload your Arduino code to the Arduino microcontroller.

```shell script
sudo usermod -aG dialout $(whoami)
sudo usermod -aG tty $(whoami)
sudo usermod -aG uucp $(whoami)
sudo usermod -aG plugdev $(whoami)
sudo reboot
```