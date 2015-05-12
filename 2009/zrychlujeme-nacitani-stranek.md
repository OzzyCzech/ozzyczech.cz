<!--
title : Zrychlujeme načítání stránek
author : Roman Ožana <ozana@omdesign.cz>
date : 3.9.2009 16:03:45
tags : google, how-to, webdesign
-->

# Zrychlujeme načítání stránek

Zvýšení rychlosti internetové stránky není nikdy na škodu. Této záslužné činnosti by se měl čas od času věnovat každý [internetový vývojář][1].

Možná si říkáte proč? V době DSL a megabitového internetu? Snadná odpověď! Vzpomeňte si, jak jste čekali na 10 hodinu večerní, kdy se konečně budete moci za levný tarif napojit přes svůj modemem. A vzpomeňte si také na to, že některé stránka se načítala **klidně i pár minut** &#8211; kolik nervů Vás to stálo? Dnes to není jiné, ba právě naopak.

No a pro koho je to nedostatečný důvod, třeba se nechá přesvědčit tím, že zrychlováním stránek (a aplikací) se zabývá také [Google][2] a [Yahoo][3].

### JavaScript a javascript knihovny

Bez javascript knihoven se dnes obejde málokterý [internetový vývojář][4]. Mezi nejúspěšnější zástupce patří například [jQuery][5], [Prototype][6] nebo [Dojo][7]. O výhodách rozhraní Google Ajax LIBS jsem zde [už jednou psal][8]. Existuje cesta, jak jej využít bez jediného zásahu do aplikace. Stačí do .[htaccess][9] přidat:

<pre>&lt;IfModule mod_rewrite.c&gt;
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} jquery.js [nc]
RewriteRule . http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js [L]
&lt;/IfModule&gt;
</pre>

Tento jednoduchý kód bude veškeré požadavky o načtení jquery.js smětovat na Google. Obdobě jej lze upravit také pro ostatní knihovny.

<!--more-->

U ostatních javascriptových souborů alespoň zmenšete jejich velikost. Ideálním nástrojem je [YUI Compressor][10] od Yahoo (jeho [online verze][11]). Dost pomůže také to, když své javascripty umístíte dolů pod obsah stránky.

### Kešování obsahu

Další účinnou metodou, jak dosáhnout vyšší rychlosti načítání je, nastavit pro jednotlivé komponenty **cache**. Cest existuje několik, nejjednodušší vede opět přes [htaccess][9]. Cache můžete nastavit například takto:

<pre>#1 ROK
&lt;FilesMatch "\.(ico|pdf|flv|swf|mov|mp3|wmv|ppt)$"&gt;
Header set Cache-Control "max-age=31536000, public, proxy-revalidate"
&lt;/FilesMatch&gt;

# 3 MESICE
&lt;FilesMatch "\.(gif|jpg|jpeg|png|js)$"&gt;
Header set Cache-Control "max-age=7257600, public, proxy-revalidate"
&lt;/FilesMatch&gt;

# 1 MESIC
&lt;FilesMatch "\.(css)$"&gt;
  Header set Cache-Control "max-age=2678400, public, proxy-revalidate"
&lt;/FilesMatch&gt;

# 7 DNI
&lt;FilesMatch "\.(txt)$"&gt;
Header set Cache-Control "max-age=604800, public, proxy-revalidate"
&lt;/FilesMatch&gt;

# 10 MINUT
&lt;FilesMatch "\.(html|htm|xml)$"&gt;
Header set Cache-Control "max-age=600, private, proxy-revalidate"
&lt;/FilesMatch&gt;

# BEZ CACHE
&lt;FilesMatch "\.(php)$"&gt;
Header unset Cache-Control
Header unset Expires
Header unset Last-Modified
FileETag None
Header unset Pragma
&lt;/FilesMatch&gt;
</pre>

Vše samozřejmě závisí případ od případu. Další varianty najdete například zde: [htaccess Caching][12].

### PHP

Pominu optimalizaci samotného kódu, o tom se dá [najít dost][13]. A raději zde uvedu například [PHPSpeedy][14], nebo pokud máte přístup přímo na server zkuste [kešová pomocí APC][15]. Rozhodně také pomůže volba [dobrého Frameworku][16].

### GZIP komprese

Zapnutím GZIP komprese obsahu ([mod_deflate][17] na [apache][18]) můžete dosáhnout snížení objemu přenášených dat. Na druhou stranu tato metoda poněkud více zatížíte server. Kompresi pro JS a CSS soubory zapnete opět velice jednoduše úpravou htaccess souboru:

<pre>&lt;IfModule mod_deflate.c&gt;
&lt;FilesMatch "\.(js|css)$"&gt;
SetOutputFilter DEFLATE
&lt;/FilesMatch&gt;
&lt;/IfModule&gt;

</pre>

### Co je ještě důležité

  1. Dodržujte internetové standardy.
  2. Optimalizujte obrázky pro web, najděte kompromis mezi kvalitou a jejich velikostí.
  3. � etřete každý request.� Zkombinujte vkládané [obrázky][19], CSS soubory a Javascripty.
  4. Nikdy nezapisujte CSS přímo do HTML.
  5. Zadávat dimenze obrázků (šířku a výšku).
  6. Jedna 404 (chybějící obsah) může prodloužit natahování stránky v řádu sekund.

### Užitečné nástroje

Na závěr ještě jednou přehled užitečných nástrojů:

  * [YUI Compressor online][11]
  * [Google Page Speed][20] &#8211; doplněk do Firefox
  * [YSlow][3] &#8211; další doplněk Firefox pro měření rychlosti stránek
  * [Pingdom Tools][21] &#8211; nástroj pro měření stránky Online

<div id="_mcePaste" style="overflow: hidden; position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px;">
  http://jquery.com/
</div>

 [1]: http://www.omdesign.cz "Internetové stránky Ostrava"
 [2]: http://code.google.com/intl/cs/speed/page-speed/ "Google Page Speed"
 [3]: http://developer.yahoo.com/yslow/ "YSlow"
 [4]: http://www.omdesign.cz "Internetové stránky"
 [5]: http://jquery.com/ "jQuery"
 [6]: http://www.prototypejs.org/ "Prototype"
 [7]: http://www.dojotoolkit.org/ "Dojo"
 [8]: http://www.nabito.net/bleskove-na-ajax-pres-google/ "Bleskově na AJAX přes Google"
 [9]: http://www.jakpsatweb.cz/server/htaccess.html
 [10]: http://developer.yahoo.com/yui/compressor/
 [11]: http://yui.2clics.net/ "YUI Compressor"
 [12]: http://www.askapache.com/htaccess/speed-up-sites-with-htaccess-caching.html "htaccess Caching"
 [13]: http://www.google.com/search?hl=cs&q=optimize+PHP+code&btnG=Hledat&lr=
 [14]: http://aciddrop.com/php-speedy/ "PHP Speedy"
 [15]: http://pecl.php.net/package/APC "APC"
 [16]: http://nette.org
 [17]: http://www.askapache.com/htaccess/apache-speed-compression.html
 [18]: http://httpd.apache.org/docs/2.0/mod/mod_deflate.html "mod_deflate"
 [19]: http://css-tricks.com/css-sprites/
 [20]: http://code.google.com/intl/cs/speed/page-speed/download.html
 [21]: http://tools.pingdom.com/ "Pingdom Tools"