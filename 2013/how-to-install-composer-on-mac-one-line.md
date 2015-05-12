<!--
title : How to install Composer on Mac (one line)
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 5.3.2013 10:15:42
tags : composer, en, mac, PHP
-->

# How to install Composer on Mac (one line)

There is simple way how to install [Composer][1] on Mac OS

<pre>sudo curl -s http://getcomposer.org/installer | php && mv ./composer.phar /usr/local/bin/composer</pre>

Now you can run `composer`Â from command line anywhere! Including self-update:

<pre>sudo composer self-update</pre><p</p>

 [1]: http://getcomposer.org/ "Composer Homepage"