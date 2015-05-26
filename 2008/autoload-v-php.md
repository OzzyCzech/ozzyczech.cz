<!--
title : Autoload v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 29.10.2008 06:53:00
tags : PHP, programovani
-->

# Autoload v PHP

[Autoload][1] je velmi **užitečná funkce PHP 5**, sloužící k automatickému **načtení tříd** (souborů). Autoload je vlastně takové vylepšení require\_once (include). Funkce \__autoload se zavolá v případě, že požadujete třídu, která prozatím neexistuje.

Následující kód stačí vložit do core.php. Pokud máte **rádi pořádek** a své class umisťujete dle jejich významu do různých adresářů, je nutné nejprve nastavit include path.

<pre>// DS - oddelovac pro adresare
define ('DS', DIRECTORY_SEPARATOR);
// pak najdeme absolutni cestu
define ('ABSPATH', realpath(dirname(__FILE__)).DS);

// nastavime potrebne cesty k vasim class
set_include_path
(
ABSPATH.'libs'.DS.'core'.DS.PATH_SEPARATOR. // libs/core/
ABSPATH.'libs'.DS.'helper'.DS.PATH_SEPARATOR. // libs/helper/
get_include_path()
);
</pre>

Většinou je **dobrým zvykem** dodržovat nějakou strukturu pojmenování tříd. V mém případě jsou třídy pojmenované class.nazev.php. Funkce __autoload bude vypadat následovně:

<pre>// automaticke nahrani trid umistenych v core nebo helper
function __autoload($class_name)
{
if (!class_exists($class_name, false) ||
!interface_exists($class_name, false))
require_once ('class.'.$class_name.'.php');
}
</pre>

Tento kód si uložte např. do _aload.php_, pak už jen stačí napsat

<pre>require_once('aload.php');
</pre>

kdekoliv, kde budete potřebovat pracovat se svými class.

 [1]: http://cz.php.net/autoload "Autoload"