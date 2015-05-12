<!--
title : Snadné připojení k FTP pomocí PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 13.4.2011 20:57:15
tags : PHP
-->

# Snadné připojení k FTP pomocí PHP

Mám v oblibě [zkrácený zápis][1] připojení k FTP. PHP tento [způsob zápisu připojení][2] bohužel nepodporuje. Proto jsem napsal jednoduchou funkci, která patřičně rozebere zaslanou adresu, vytvoří nové připojení, přihlásí uživatele a změní cestu.

<pre>/**
 * Vraci ID FTP pripojeni na zaklade zadane URL
 * ftp://username:password@sld.domain.tld:21/path1/path2/
 */
function getFtpConnection($uri) 
{  
  preg_match("/(?P&lt;protocol>ftps?:\/\/)(?P&lt;username>.*?):(?P&lt;password>.*?)@(?P&lt;url>.*?):?(?P&lt;port>[1-9]+)?(?&lt;dir>\/.*)/i", $uri, $match);
  $conn = ftp_connect($match['url'], empty($match['port']) ? 21 : (int)$match['port']) or die("Couldn't connect to " . $match['url']);
  if (ftp_login($conn, $match['username'], $match['password'])) { 
    ftp_chdir($conn, $match['dir']); 
    return $conn; 
  }

  return null; 
}</pre>

Výstupem funkce je samozřejmě ID připojení, se kterým pak můžete [normálně pracovat][3] dál. Funkci najdete také zde: <https://gist.github.com/998091>

 [1]: http://en.wikipedia.org/wiki/File_Transfer_Protocol
 [2]: http://php.net/manual/en/function.ftp-connect.php
 [3]: http://www.php.net/manual/en/ref.ftp.php