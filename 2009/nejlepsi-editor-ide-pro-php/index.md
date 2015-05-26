<!--
title : Nejlepší editor (IDE) pro PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 1.5.2009 20:08:08
tags : programovani, webdesign
-->

# Nejlepší editor (IDE) pro PHP

Hledání ideálního vývojového prostředí pro PHP bych v mém případě přirovnal k� hledání svatého grálu. Popíšu Vám nyní cestu, přes kterou jsem se k všeobecné spokojenosti dostal až k Eclipse.

Mé vůbec první vývojové prostředí neslo název� [Crimson Editor][1]. V tomto editoru jsme se učil programátorským základům a taky jsem v něm napsal své první webové aplikace. Bohužel jeho vývoj� skončil s rokem 2004.

Byl jsem tedy nucen přesedlat na nového koně. Tím koněm se na stal dobře známý� český editor� [PSPad][2]. Musím se přiznat, že na tento editor jsem si nikdy nezvykl, takže jsem jej záhy opustil.

Další zastávku jsem učinil na planetě� [Scite][3]. Scite nejlépe vystihuje věta:� V jednoduchosti je krása. Editor má jen jedno hlavní okno, dokáže si však poradit s nepřeberným� množstvím různých jazyků. Konfigurace je prováděna ručně, prostřednictvím konfiguračního souboru. Mou konfiguraci si ostatně můžete stáhnout v sekci� <span style="text-decoration: line-through;">download</span>. Musím říct, že tento editor mi vskutku� přirostl k srdci, dodnes jej používám jako rychlou prohlížečku. Jenže ani Scite nedokázal odolat mým vzrůstajícím nároků.

Nějaký ten čas jsme si pohrával s myšlenkou zakoupit licenci na editor� [ZDE od Zendu][4]. Hlavní výhodou ZDE je, že dokáže uspokojivě� pracovat s většími projekty. To je totiž přesně to co jsem hledal a proč jsem opustil Scite. Jenže se ukázalo, že ZDE nepatří k nejrychlejším. Posledním hřebíčkem do rakve ZDE bylo to, že základní licence je poměrně drahá (proti studentské).

Poměrně dlouho jsme taky používal [Eclipse PDT][5], jenže ten se pro větší projekty stává nepoužitelným. Navíc mně spousta vlastností Eclipse doslova zvedala ze židle &#8211; například ustavičné padání prostředí.

Hledal jsem dál:

  * [Komodo IDE][6]
  * [PHP ED][7]
  * [Aptana][8]
  * [Geany][9]
  * [RapidPHP][10]
  * [Delphi for PHP][11]
  * [][11]a spoustu dalších (viz. [tohle srovnání][12])

Nakonec jsem skončil u [NetBeans][13] pro PHP a dneska na ně nedám dopustit!

[<img class="aligncenter size-full wp-image-540" title="netbeans-logo" src="netbeans-logo.png" alt="netbeans-logo" width="224" height="224" />][14]

Proč jsem si vybral NetBeans?

  * NetBeans je nesrovnatelně rychlejší než jiné free editory s napovídáním kódu a správou projektů.
  * Umí [krokovat PHP][15] &#8211; sice to není triviální nastavení, ale podařilo se mi to rozchodit.
  * Podporuje javascriptové frameworky.
  * Vcelku obstojně umí pracovat s napsaným kódem (Autoformát, )
  * Ctrl + R přejmenuje proměnnou všude v kódu (refactoring)
  * Podporuje FTP (nativně), GIT (přes plugin), SVN (přes plugin)
  * Zobrazuje nápovědu k jednotlivým PHP funkcím.
  * Základní barevné kódů schéma je mnohem více promyšlené.
  * Podporuje code template.

Některé fakt vychytané záležitosti přinese také nová verze 6.7. Namátkou asistent pro psaní [SQL dotazů v PHP][16].

 [1]: http://www.crimsoneditor.com/ "Crimson Editor"
 [2]: http://www.pspad.com/ "PSPad"
 [3]: http://www.scintilla.org/SciTE.html "Scite Editor"
 [4]: http://www.zend.com/en/store/php-training/zend-studio-for-eclipse "Zend Studio"
 [5]: http://www.eclipse.org/pdt/ "Eclipse PDT"
 [6]: http://www.activestate.com/komodo-ide
 [7]: http://www.nusphere.com/
 [8]: http://www.aptana.com/
 [9]: http://www.geany.org/
 [10]: http://www.blumentals.net/rapidphp/
 [11]: http://www.embarcadero.com/products/delphi-for-php
 [12]: http://goo.gl/lfOG
 [13]: http://www.netbeans.org/ "NetBeans"
 [14]: http://netbeans.org/ "NetBeans"
 [15]: http://wiki.netbeans.org/PHP "PHP na netbeans WIKI"
 [16]: http://blogs.sun.com/netbeansphp/entry/sql_code_completion_in_the "SQL completion in the PHP"