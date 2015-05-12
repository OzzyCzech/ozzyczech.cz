<!--
title : Setup email sending from PHP on Mac
author : Roman OÅ¾ana <ozana@omdesign.cz>
date : 14.5.2013 13:18:22
tags : email, mac, PHP
-->

# Setup email sending from PHP on Mac

First write in terminal: `which sendmail` wlll return path to sendmail app (in my case `/usr/sbin/sendmail`). Then open `php.ini` file and setup:

<pre>sendmail_path = /usr/sbin/sendmail -t -i</pre>

CreateÂ necessary folder and setup postfix permissions:

<pre>sudo mkdir -p /Library/Server/Mail/Data/spool
sudo /usr/sbin/postfix set-permissions
sudo /usr/sbin/postfix start</pre>

And check if emails will come:

<pre>php -r "mail('youremail@domain.com', 'subject', 'message', 'From: &lt;youremail@domain.com&gt;' . PHP_EOL);"</pre><p</p>