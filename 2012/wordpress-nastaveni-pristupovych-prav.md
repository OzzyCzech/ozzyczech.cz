<!--
title : WordPress: nastavení přístupových práv
author : Roman Ožana <ozana@omdesign.cz>
date : 4.3.2012 16:57:41
tags : Apache, mac, permission
-->

# WordPress: nastavení přístupových práv

<pre>ls -l # vypsani majitele

-rwxr-xr-x    1 roman  staff     395 Dec 13 07:40 index.php
-rwxr-xr-x    1 roman  staff   19929 Dec 13 07:40 license.txt
-rwxr-xr-x    1 roman  staff    9175 Dec 13 07:40 readme.html
-rwxr-xr-x    1 roman  staff     595 Dec 13 07:40 robots.txt
.....</pre>

Pro převlastnění Wordpress pod _www spusťte:

<pre>sudo chown -R :_www * && sudo chmod -R g+w *</pre>

Na závěr opět ověříme, práva:

<pre>ls -l # kontrola...

-rwxrwxr-x    1 roman  _www     395 Dec 13 07:40 index.php
-rwxrwxr-x    1 roman  _www   19929 Dec 13 07:40 license.txt
-rwxrwxr-x    1 roman  _www    9175 Dec 13 07:40 readme.html
-rwxrwxr-x    1 roman  _www     595 Dec 13 07:40 robots.txt
....</pre>

Do souboru `wp-config.php` přidejte ještě tohle: `define('FS_METHOD', 'direct');` &#8211; aktualizace budou prováděny přímo na disku, ne prostřednictvím FTP.