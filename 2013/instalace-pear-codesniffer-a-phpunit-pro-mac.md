<!--
title : Instalace pear, Codesniffer a PHPUnit pro Mac
author : Roman Ožana <ozana@omdesign.cz>
date : 6.5.2013 10:56:29
tags : codesniffer, mac, pear, PHP, phpunit
-->

# Instalace pear, Codesniffer a PHPUnit pro Mac

### Instalace Pear

<pre>cd /usr/local
sudo curl http://pear.php.net/go-pear.phar -o go-pear.phar
sudo php go-pear.phar</pre>

V mnoha případech bude potřeba přidat cestu k `pear` do� `~/.bash_profile`� pomocí příkazu:� `export PATH=/opt/local/bin:$PATH`.� Pro ověření instalace stačí spustit� `which pear`� výslekdem by měla být cesta k binárce pear� `/opt/local/bin/pear`. Nezapomeňte po sobě uklidit� `sudo rm go-pear.phar`.

Ověřte, zda máte správně nastavenu include path:

    php -r 'echo get_include_path() . PHP_EOL;' # overeni nastaveni include path

Ostatní kontroly jsou popsány zde:� http://pear.php.net/manual/hu/installation.checking.php

### Instalace Codesniffer

<pre>sudo pear install PHP_CodeSniffer</pre>

Code sniffer binárku `phpcs` najdete ve svém domovském adresáři� `cd ~/pear/bin/`

<pre>sudo ./phpcs -i # zobrazi nainstalovane standardy</pre>

Vlastní code sniffer standardy postačí nakopírovat do složky� `~/pear/share/pear/PHP/CodeSniffer/Standards`

<pre>sudo ./phpcs --config-set default_standard Zend</pre>

### Instalace PHPUnit

<pre>sudo pear config-set auto_discover 1; sudo pear install pear.phpunit.de/PHPUnit
pear info phpunit/PHPUnit # vypsani informaci o balicku</pre><p</p>