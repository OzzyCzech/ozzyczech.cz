<!--
title : Upgrading PHP with Homebrew
author : Roman Ožana <ozana@omdesign.cz>
date : 14.4.2014 08:29:51
tags : brew, mac, osx, PHP
-->

# Upgrading PHP with Homebrew

Are you using [josegonzalez brew repository][1] according my [previous blog post][2]? You will need switch your brew to an [official PHP repository][3].

    brew untap josegonzalez/homebrew-php
    brew tap homebrew/dupes
    brew tap homebrew/versions
    brew tap homebrew/homebrew-php

Then you can exec upgrade everything:

    brew update && brew upgrade

Do not forgot change your shortcut in your [bash profile][4]:

    alias php-start="sudo launchctl load ~/Library/LaunchAgents/homebrew.mxcl.php55.plist"
    alias php-stop="sudo launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.php55.plist"
    alias php-restart="php-stop && php-start"

You can also getting an error **Dubious ownership on file&#8230;** then change *._plists_ rights:

    sudo chown root ~/Library/LaunchAgents/*
    sudo chmod 644 ~/Library/LaunchAgents/*<p</p>

 [1]: https://github.com/josegonzalez/homebrew-php
 [2]: http://www.nabito.net/hot-to-install-nginx-php-fpm-5-5-6-mongo-and-mysql-on-mac-with-homebrew/
 [3]: https://github.com/Homebrew/homebrew-php
 [4]: https://github.com/OzzyCzech/dotfiles/blob/master/.bash_profile