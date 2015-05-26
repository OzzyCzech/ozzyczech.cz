<!--
title : Instalace XHProf a graphviz na Mac OS
author : Roman Ožana <ozana@omdesign.cz>
date : 22.8.2012 20:04:51
tags : callgraph,, DB, facebook, graphviz, lion, mac, macports, PHP
-->

# Instalace XHProf a graphviz na Mac OS

[XHProf][1] je výborný nástroj od pro profilování aplikací. Dokáže profilovat aplikaci do úrovně jednotlivých funkcí. Počítá kolikrát bylo co voláno. Kolik kdo použil kde paměti a jak moc zatížil procesor. Dokáže vygenerovat, nebo srovnat � dva requesty mezi sebou.

### Instalace pod Mac OS X Lion /� Mountain Lion

Pro instalaci využijeme oblíbené [MacPorts][2].

<pre>sudo port install php5-xhprof
php -i | grep xhprof
mkdir -m 777 ~/tmp/xhprof</pre>

Nakonec nainstalujeme [graphviz][3]� `sudo port install graphviz`. Tato knihovna je **nepovinná** a XHProf funguje i bez ní, ale připravíte se tak o velmi zajímavou funkcionalitu &#8211; generování **call graphs** &#8211; tedy grafu volání funkcí.

Současná verze portu má **bohužel problémy** s přístupovými právy k instalačním souborům (přestože ji spouštíte jako sudo &#8211; nechápu). Pokud vám instalace selhává, zkuste postupně přidělovat plná práva jednotlivým souborům, na kterých instalace umírá.

Pokud se vám instalace přesto nedaří, zkuste [použít instalátor][4]. Instalátor není ověřen Applem. Musíte tedy na čas vypnout ochranné pravidlo _Gatekeepru_ (Předvolby systému &#8211; Zabezpečení a soukromí &#8211; Obecné &#8211; _Povolit aplikace stažené: Z libovolného zdroje_).

Pokud se vám nepodaří ani tohle, budete muset přistoupit ke� **kompilaci** a následné� **instalaci** (novější verzi než 2.24 se mi nepodařilo zkompilovat vůbec):

<pre>wget http://www.graphviz.org/pub/graphviz/stable/SOURCES/graphviz-2.24.0.tar.gz
tar zxf graphviz-2.24.0.tar.gz
cd graphviz-2.24.0
./configure
make && make install</pre>

### Nastavení XHProf

Pak je potřeba nastavit **tmp** adresář v php.ini� `sudo nano /opt/local/et­c/php5/php.ini`� v závislosti na umístění vašeho php.ini

<pre>[xhprof]
xhprof.output_dir=/Users/roman/Temp/xhprof</pre>

Vytvořte si pomocí [oblíbeného MySQL manageru][5] novou DB a v ní tabulku:

<pre>CREATE TABLE `details` (
`id` char(17) NOT NULL,
`url` varchar(255) default NULL,
`c_url` varchar(255) default NULL,
`timestamp` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
`server name` varchar(64) default NULL,
`perfdata` MEDIUMBLOB,
`type` tinyint(4) default NULL,
`cookie` BLOB,
`post` BLOB,
`get` BLOB,
`pmu` int(11) unsigned default NULL,
`wt` int(11) unsigned default NULL,
`cpu` int(11) unsigned default NULL,
`server_id` char(3) NOT NULL default 't11',
`aggregateCalls_include` varchar(255) DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `url` (`url`),
KEY `c_url` (`c_url`),
KEY `cpu` (`cpu`),
KEY `wt` (`wt`),
KEY `pmu` (`pmu`),
KEY `timestamp` (`timestamp`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;</pre>

Stáhneme webovou aplikaci, která slouží k zachytávání a zobrazování profilových dat.

<pre>git clone git://github.com/preinheimer/xhprof.git ~/Sites/xhprof
cp ~/Sites/xhprof/xhprof_lib/config.sample.php ~/Sites/xhprof/xhprof_lib/config.php
edit ~/Sites/xhprof/xhprof_lib/config.php</pre>

V konfiguraci upravte pripojeni k

<pre class="php">// Change these:
$_xhprof['dbtype'] = 'mysql'; // Only relevant for PDO
$_xhprof['dbhost'] = 'localhost';
$_xhprof['dbuser'] = 'root';
$_xhprof['dbpass'] = '';
$_xhprof['dbname'] = 'xhprof';
$_xhprof['servername'] = 'myserver';
$_xhprof['namespace'] = 'myapp';
$_xhprof['url'] = 'http://localhost/xhprof/xhprof_html';
// ...
$_xhprof['doprofile'] = true; // zde povolime profiler
// ...</pre>

Odkomentujte a upravte:

<pre>$_xhprof['dot_binary'] = '/opt/local/bin/dot'; // tam kde jej máte umístěn
$_xhprof['dot_tempdir'] = '/tmp';
$_xhprof['dot_errfile'] = '/tmp/xh_dot.err';</pre>

Hotovo! Můžete profilovat jako o závod, stačí už jen nastavit svůj **virtualhost** a restartovat apache:

<pre>&lt;VirtualHost *:80&gt;
DocumentRoot "/Users/roman/Sites"
ServerName localhost
php_value auto_prepend_file "/Users/roman/Sites/xhprof/external/header.php"
&lt;/VirtualHost&gt;</pre><p</p>

 [1]: https://github.com/facebook/xhprof/
 [2]: http://www.macports.org/
 [3]: http://www.graphviz.org/
 [4]: http://www.graphviz.org/Download_macos.php
 [5]: http://www.adminer.org/