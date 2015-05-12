<!--
title : Toggle Hidden Files in Finder
author : Roman Ožana <ozana@omdesign.cz>
date : 26.3.2013 08:47:26
tags : automator, mac, osx, shell
-->

# Toggle Hidden Files in Finder

Run [Automator][1] and create new Application. Add task **Run Shell script** and paste follow code:

<pre>STATUS=`defaults read com.apple.finder AppleShowAllFiles`
if [ $STATUS == YES ]; 
then
    defaults write com.apple.finder AppleShowAllFiles NO
else
    defaults write com.apple.finder AppleShowAllFiles YES
fi
killall Finder</pre>

Save application. From now can Tooggle<p</p>

 [1]: http://en.wikipedia.org/wiki/Automator_(software)