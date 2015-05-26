<!--
title : iCalendar parser v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 11.8.2006 09:28:05
tags : programovani, webdesign
-->

# iCalendar parser v PHP

Napsal jsem v PHP překladač standardu iCal. Tento standard slouží pro sdílení kalendářových dat mezi různými aplikacemi.

Jak to funguje? Události ve Vašem kalendáři jsou ukládána jako textový soubor s definovaným způsobem zápisu hodnot ([definice je zde][1]). Tento soubor je možné automatizovaně odesílat pomocí FTP na internet. Tam jej může číst můj parser.

Snažil jsem se jej napsat jednoduše a srozumitelně. Podporován by měl být standard verze 2. Mysím si, že by neměl být problém ani s verzí 3.

Výstupem mého parseru jest klasické pole. Standard iCal podporuje například aplikace [Sunbird od Mozilly][2].

Přesunuto na GitHub: <http://github.com/OzzyCzech/icalparser>

 [1]: http://www.ietf.org/rfc/rfc2445.txt "iCal standard"
 [2]: http://www.mozilla.org/projects/calendar/sunbird/index.html "Stránky SunBird"