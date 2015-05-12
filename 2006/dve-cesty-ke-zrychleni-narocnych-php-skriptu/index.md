<!--
title : Dvě cesty ke zrychlení PHP skriptů
author : Roman Ožana <ozana@omdesign.cz>
date : 24.9.2006 14:29:31
tags : programovani, webdesign
-->

# Dvě cesty ke zrychlení PHP skriptů

<img style="display: inline; float: right; width: 140px; height: 191px;" title="Čas je relativní :-)" src="timewarp.jpg" alt="Čas je relativní :-)" width="140" height="191" />Pokoušeli jste se někdy v PHP spustit nějaký časově náročný skript? Třebas **stáhnout 90 RSS** zdrojů a něco s nimi dělat? Většinou to dopadně pěknou hláškou _Maximum execution time of 60 seconds exceeded_. (viz. _index2.php_).

Jak z toho ven? Během svého bádání jsem našel **dvě cesty**, ta první je řešení převážně u klienta (a je to vlastně takový malý podvod v rychlosti) a ta druhá je řešení na straně serveru.

**Takže něco o prvním řešení:** (viz. _index.php_)
  
Udělal jsem to tak, že jsem si vytvořil v javascriptu pole, do nějž jsem si uložil odkazy na RSS zdroje. Pak jsem zobrazil stránku a pomoci [AJAXU][1] jsem se postupně dotazoval na jednotlivé zdroje. Dotazy zpracovávalo jednoduché PHP a výsledky se zobrazují Javascriptem.

**Pěkné** na tomto řešení je, že se pořád něco děje, alespoň v prohlížeči. Tímto řešením nějaký ten čas naženete, ale v podstatě to taky není žádná sláva. Další **nevýhoda** je, že zdrojový kód obsahuje pouze javascript, takže zapomeňte na to, že si něco uložíte.

**Něco o druhém řešení:** (viz. _index1.php_)
  
Druhé řešení je **zabudováno v PHP5** a sice knihovna [CURL][2]. Bohužel tahle knihovna se nějak zvláštně chová pod Windows, [četl jsem nějaké řešení][3], ale moc se jim nechtělo fungovat. Rychlostně to je velmi pěkné, těch 90 zdrojů to zvládne za 7-14 sekund !!! Což je docela síla proti 280 sekundám klasického skriptu (viz _index2.php_).

Takže na závěr zdrojové kódy [time_warp][4]. Jo a abych nezapoměl, pokud někoho napadá lepší řešení budu rád, když mi dá vědět :-).

 [1]: http://en.wikipedia.org/wiki/Ajax_%28programming%29 "AJAX na Wiki"
 [2]: http://www.php.net/manual/en/ref.curl.php "Odkaz na knihovnu CURL"
 [3]: http://php.vrana.cz/paralelni-zpracovani.php "Paralelní zpracování"
 [4]: time-warp.zip