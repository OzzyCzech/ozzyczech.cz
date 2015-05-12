<!--
title : FTP synchronizace s pomocí PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 21.8.2011 17:55:16
tags : FTP sync PHP, FTP upload PHP, PHP
-->

# FTP synchronizace s pomocí PHP

Upload souborů na server přes FTP je **fakt opruz**! Každou chvilku **něco zapomenete** nahrát. Často zbytečně nahráváte soubory, které se vůbec nezměnili. Něco zapomenete smazat, přejmenovat, přesunout atd. Jednoduše děláte chyby, jste jen člověk!

Proto jsem napsal [synchronizační skript][1] v PHP, který vše vyřeší automaticky. Skript udržuje seznam všech lokálních souborů� ([díky za inspiraci][2]) a pokud se některý soubor změní, tak jej nahraje na server. Pokud naopak soubor smažete, pokusí se jej smazat také na serveru. Použití je vcelku triviální:

<pre>require_once 'FtpSync.php';

$ftpSync = new FtpSync('ftp://uzivatel:heslo@nabito.net:21/mojecesta/');
$ftpSync-&gt;skip(array ('build.xml', 'skipThisDir', 'sitemap.xml'))
 -&gt;fullSync(realpath('./'));</pre>

Skript ignoruje soubory a adresáře **začínající tečkou** (např. .git .svn .htaccess). Seznam přeskakovaných souborů a adresářů je možné nastavit pomocí metody _skip()_ � &#8211; víc jsem zatím nepotřeboval.� � Synchronizační proces je **jednostranný** &#8211; soubory se tedy přenáší pouze od vás na server.

Skript umí rozpoznat nejen změnu, ale také smazání souboru &#8211; pamatuje si totiž poslední stav. Smazané soubory pak automaticky smaže i na serveru.

Pomocí příznaku _repeatOnError()_ je možné donutit synchronizaci nepodařené akce opakovat, takhle funkce je však spíš experimentální = má několik neduhů.

 [1]: https://gist.github.com/1160838
 [2]: http://code.google.com/p/ftpsync-php/