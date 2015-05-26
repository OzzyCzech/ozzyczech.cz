<!--
title : Geolokace snadno a rychle
author : Roman Ožana <ozana@omdesign.cz>
date : 18.3.2010 12:11:47
tags : GEO, GIS, GPS, js, webdesign
-->

# Geolokace snadno a rychle

Geolokace se stává skutečným **hitem současného webu** ([Další velká věc &#8211; Vaše poloha][1]). Skoro se mi až chce napsat, nezapomeňte naskočit, odjíždíme.� Ke snadnému a bezpečnému naskočení Vám může velmi pomoci Javascriptová knihovna [YQL][2].

YQL Vám umožní:

  * zjistit pozici návštěvníka webu pomocí W3C geo API
  * vyhledat souřadnice na základě řetězce (paříž, francie)
  * provádět [reverzní geokódování][3]
  * zjistit polohu webu (serveru) na základě URL adresy
  * a nebo zjistit název dle IP adresy

Použití knihovny není vůbec složité:

<pre>yqlgeo.get('paris,fr',function(o){
  alert(o.place.name+' ('+
    o.place.centroid.latitude+','+
    o.place.centroid.longitude+
  ')');
})
</pre>

Předchozí kód Vám zjistí souřadnice Paříže.

 [1]: http://www.nabito.net/dalsi-velka-vec-vase-poloha/ "Další velká věc - Vaše poloha"
 [2]: http://isithackday.com/hacks/geo/yql-geo-library/ "YQL Geo Library - get all your geo needs in JavaScript - geolocation, reverse geocoding, content analysis"
 [3]: http://www.nabito.net/reverzni-geokodovani-v-google-maps/ "Reverzní geokódování"