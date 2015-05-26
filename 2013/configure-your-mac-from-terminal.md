<!--
title : Configure your mac from terminal
author : Roman Ožana <ozana@omdesign.cz>
date : 26.12.2013 11:22:25
tags : mac, osx, terminal, tip
-->

# Configure your mac from terminal

Enable AirDrop over Ethernet and on unsupported Macs running Lion

<pre>defaults write com.apple.NetworkBrowser BrowseAllInterfaces -bool true</pre>

Disable the warning before emptying the Trash

<pre>defaults write com.apple.finder WarnOnEmptyTrash -bool false</pre>

And much more can be found here: https://github.com/addyosmani/dotfiles/blob/master/.osx<p</p>