<!--
title: Upgrading PHP with Homebrew
date: 14.4.2014 10:29:51
author: Roman Ožana <ozana@omdesign.cz>
tags: brew, mac, osx, PHP
-->


# Upgrading PHP with Homebrew

Are you using [josegonzalez brew repository](https://github.com/josegonzalez/homebrew-php) according my [ previous blog post](http://www.nabito.net/hot-to-install-nginx-php-fpm-5-5-6-mongo-and-mysql-on-mac-with-homebrew/)? You will need switch your brew to an [official PHP repository](https://github.com/Homebrew/homebrew-php).


    brew untap josegonzalez/homebrew-php
    brew tap homebrew/dupes
    brew tap homebrew/versions
    brew tap homebrew/homebrew-php

 Then you can exec upgrade everything: 
`brew update && brew upgrade`
 Do not forgot change your shortcut in your [bash profile](https://github.com/OzzyCzech/dotfiles/blob/master/.bash_profile): 
    alias php-start="sudo launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php55.plist"
    alias php-stop="sudo launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.php55.plist"
    alias php-restart="php-stop && php-start"

 You can also getting an error **Dubious ownership on file...** then change *.*plists* rights: 
    sudo chown root ~/Library/LaunchAgents/*
    sudo chmod 644 ~/Library/LaunchAgents/*

 #brew #php #osx #mac