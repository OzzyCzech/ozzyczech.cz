<!--
title : AJAX bude mít zítra rok
author : Roman Ožana <ozana@omdesign.cz>
date : 17.2.2006 19:55:10
tags : google, webdesign
-->

# AJAX bude mít zítra rok

<img id="ajax.png" title="Ajax na nádobí" src="ajax.jpg" alt="Toto je AJAX" name="ajax.png" width="122" height="200" align="right" border="0" / je nejen prací prášek, ale také a hlavně technologie, která má podle mě budoucnost (už to že [přežila rok][1] znamená, že má budoucnost). Tuhle **webovou technologii** jste začli používat a ani jste si toho nevšimli a to je na tom to nejkrásnější.

**Někdo může říct :** Já to nikdy nepoužil !

  * [beta.mapy.cz][2] &#8211; v podstatě celá tahle aplikace využívá tuto technologii
  * <a title="Našeptávač Google" href="http://www.google.com/webhp?complete=1&hl=en" hreflang="en">Google Suggest</a> &#8211; našeptávač od &#8211; byl asi první
  * [Seznam][3] &#8211; našeptávač seznamu
  * [Centrum][4] &#8211; našeptávač centra a nějaké další věci v nové verzi vyhledávače
  * [T-zones][5] &#8211; Posílání SMS a různé další

**A co je to ? To je bílá díra &#8230;**� <strong :</strong> je zkratka _Asynchronous JavaScript and <abbr>XML</abbr>_. Samotná technologie **umí poslat požadavek** (nebo jen nějaké data) na server aniž by bylo nutné **obnovovat celou stránku** (Máte pocit jako by jste pracovali s běžnou aplikací na desktopu).

<p style="text-align: center;">
  <img id="radceajax.png" src="ajax-naseptavac.png" alt="ajax_naseptavac.png" name="radceajax.png" width="293" height="93" border="0" />
</p>

**Příklad našeptávače**

  1. Napíšete slovo do formuláře
  2. Javascript, který je **spuštěn ve vašem prohlížeči** vás stále dokola hlídá
  3. **Načte zadané slovo** aniž by jste jej museli odeslat (třeba kliknutím na tlačítko)
  4. Vyšle **požadavek na server** &#8211; konktétními skriptu, funkce (PHP)
  5. Ten se napojí na databázi a **dotáže se na zadané slovo**
  6. Skript výsledek odešle zpět Javascriptu, ten zařídí, že se vám vylistuje **seznam nalezených slov**

**Chcete-li se dozvědět více**

  * [Root][6] &#8211; Článek na Root
  * [PHP Triky][7] &#8211; Taky článek o AJAXu
  * [Snížekweb][8] &#8211; kde jsou hranice AJAXu
  * AJAX Matters &#8211; všecko možné o AJAXu &#8211; ukázkové aplikace
  * [AJAX magazín][9] &#8211; magazín věnující se výhradně této technologii<p</p>

 [1]: http://ajax.phpmagazine.net/2006/02/happy_birthday_ajax.html "Narozeniny AJAXU"
 [2]: http://beta.mapy.cz "Beta Mapy Seznam"
 [3]: http://www.seznam.cz "Seznam - super Vyhledávač"
 [4]: http://www.centrum.cz "Centrum - Super vyhledávač"
 [5]: http://t-zones.cz/ "T-Mobile zóna pro zákazníky"
 [6]: http://www.root.cz/clanky/ajax/?SID=54F82AE4E7E493D25C7F0AF375DC2F5B "AJAX"
 [7]: http://php.vrana.cz/ajax.php "Technologie AJAX"
 [8]: http://www.snizekweb.cz/clanky/ajax-kde-jsou-hranice/
 [9]: http://ajax.phpmagazine.net/