<!--
title: Setup email sending from PHP on Mac
date: 14.5.2013 15:18:22
author: Roman Ožana <ozana@omdesign.cz>
tags: email, mac, PHP
-->


# Setup email sending from PHP on Mac

First write in terminal: `which sendmail` wlll return path to sendmail app (in my case `/usr/sbin/sendmail`). Then open `php.ini` file and setup:


    sendmail_path = /usr/sbin/sendmail -t -i


 Create necessary folder and setup postfix permissions: 
    sudo mkdir -p /Library/Server/Mail/Data/spool
    sudo /usr/sbin/postfix set-permissions
    sudo /usr/sbin/postfix start


 And check if emails will come: 
    php -r "mail('youremail@domain.com', 'subject', 'message', 'From: <youremail@domain.com>' . PHP_EOL);"


 #php #email #mac