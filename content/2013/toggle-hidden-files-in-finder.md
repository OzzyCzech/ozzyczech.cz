---
title: Toggle Hidden Files in Finder
date: 26.3.2013 09:47:26
author: Roman Ožana <ozana@omdesign.cz>
tags: automator, mac, osx, shell
---


# Toggle Hidden Files in Finder

Run [Automator](http://en.wikipedia.org/wiki/Automator_(software)) and create new Application. Add task **Run Shell script** and paste follow code:


    STATUS=`defaults read com.apple.finder AppleShowAllFiles`
    if [ $STATUS == YES ]; 
    then
        defaults write com.apple.finder AppleShowAllFiles NO
    else
        defaults write com.apple.finder AppleShowAllFiles YES
    fi
    killall Finder


 Save application. From now can Tooggle #mac #shell #osx #automator