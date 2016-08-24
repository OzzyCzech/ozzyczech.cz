---
title: Snadné připojení k FTP pomocí PHP
date: 13.4.2011 22:57:15
author: Roman Ožana <ozana@omdesign.cz>
tags: PHP
---


# Snadné připojení k FTP pomocí PHP

Mám v oblibě [zkrácený zápis](http://en.wikipedia.org/wiki/File_Transfer_Protocol) připojení k FTP. PHP tento [způsob zápisu připojení](http://php.net/manual/en/function.ftp-connect.php) bohužel nepodporuje. Proto jsem napsal jednoduchou funkci, která patřičně rozebere zaslanou adresu, vytvoří nové připojení, přihlásí uživatele a změní cestu.


    /**
     * Vraci ID FTP pripojeni na zaklade zadane URL
     * ftp://username:password@sld.domain.tld:21/path1/path2/
     */
    function getFtpConnection($uri) 
    {  
      preg_match("/(?P<protocol>ftps?:\/\/)(?P<username>.*?):(?P<password>.*?)@(?P<url>.*?):?(?P<port>[1-9]+)?(?<dir>\/.*)/i", $uri, $match);
      $conn = ftp_connect($match['url'], empty($match['port']) ? 21 : (int)$match['port']) or die("Couldn't connect to " . $match['url']);
      if (ftp_login($conn, $match['username'], $match['password'])) { 
        ftp_chdir($conn, $match['dir']); 
        return $conn; 
      }
    
      return null; 
    }


 Výstupem funkce je samozřejmě ID připojení, se kterým pak můžete [normálně pracovat](http://www.php.net/manual/en/ref.ftp.php) dál. Funkci najdete také zde: [https://gist.github.com/998091](https://gist.github.com/998091)