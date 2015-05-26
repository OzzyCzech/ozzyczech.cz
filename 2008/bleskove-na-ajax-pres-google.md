<!--
title : Bleskově na AJAX přes Google
author : Roman Ožana <ozana@omdesign.cz>
date : 14.10.2008 16:11:00
tags : google, programovani, webdesign
-->

# Bleskově na AJAX přes Google

Populárních javascriptových **AJAX knihoven** (frameworks) dnes existuje celá řada. Většina z nich **narostla** za dobu své existence ke **stovkám kilobajt**.

Velikost knihoven má spolu s odezvou serveru **fatální** vliv na rychlost **načítání každé stránky**, která by je ráda používala. Doba prvního načtení tak může běžně vystoupat až k jednotkám sekund.

Další nemilou (i milou) vlastností těchto AJAX frameworks, je fakt, že jsou v neustálém a **zuřivém vývoji**. Což má za následek **nové a nové** verze knihoven. Pokud chcete být v obraze, nezbude než neustále stahovat **nové a nové** verze. Navíc je to často taky otázka bezpečnosti vašich stránek.

No a na závěr mé obžaloby AJAX frameworks, bych se rád zmínil o replikaci dat. Každý server (stránky) to většinou řeší tak, že si prostě vytvoří svoji vlastní kopii příslušných knihoven. Vývojáři tímto krokem **nutí** uživatele **neustále stahovat** (prakticky) tatáž data dokola.

Ale pak se pár chytrých hlav dalo dohromady a řeklo: Dost! A není náhodou, že těch pár chytrých hlav se sešlo ve společnosti Google :-) a vytvořilo [AJAX Libraries API][1].

http://www.youtube.com/watch?v=4F4Jb1ssEvI

Výhody jsou zřejmé:

  * Primitivní kód pro vložení &#8211; jeden řádek
  * Při načítání knihoven využíváte infrastruktury Google, takže **odezva je doslova perfektní**.
  * Aktualizaci provedete tak, že přepíšete číslo verze příslušné knihovny.
  * Knihovny jsou před přenosem **komprimovány metodou gzip**.
  * Skript se načítá z jediné URL a do cache se ukládá jednou pro všechny projekty, využívající AJAX Libraries API

Příklad vložení Prototype verze 1.6 a rozšíření Scrip.aculo.us 1.8.

<pre>&lt;script src="http://www.google.com/jsapi" type="text/javascript"&gt;&lt;/script&gt;
 &lt;script type="text/javascript"&gt;// &lt;![CDATA[
google.load("prototype", "1.6.0.3");
google.load("scriptaculous", "1.8.1");
// ]]&gt;&lt;/script&gt;
</pre>

Rozhraní dnes dokáže vložit knihovny: [Prototype][2], [Scrip.aculo.us][3], [Dojo][4], [jQuery][5] a [Mootools][6]. Časem možná přibudou některé další.

 [1]: http://code.google.com/apis/ajaxlibs/ "AJAX library API od Google"
 [2]: http://www.prototypejs.org/ "Prototype"
 [3]: http://script.aculo.us/
 [4]: http://dojotoolkit.org/ "Dojo"
 [5]: http://jquery.com/ "jQuery"
 [6]: http://mootools.net/ "Mootols"