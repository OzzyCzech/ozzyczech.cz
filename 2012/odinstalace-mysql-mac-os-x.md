<!--
title : Odinstalace MySQL Mac OS X
author : Roman Ožana <ozana@omdesign.cz>
date : 19.8.2012 11:34:49
tags : mac, mysql
-->

# Odinstalace MySQL Mac OS X

Postup je aplikovatelný na MySQL instalované prostřednictvím [instalátoru][1].

<pre>sudo rm /usr/local/mysql
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
edit /etc/hostconfig and remove the line MYSQLCOM=-YES-
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*</pre>

Na závěr odeberte ovládací panel z Předvoleb Systému. Hotovo!<p</p>

 [1]: http://dev.mysql.com/doc/refman/5.6/en/macosx-installation-pkg.html