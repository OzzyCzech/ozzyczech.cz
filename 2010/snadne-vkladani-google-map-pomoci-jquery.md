<!--
title : Snadné vkládání Google Map pomocí jQuery
author : Roman Ožana <ozana@omdesign.cz>
date : 7.1.2010 11:23:46
tags : google, jquery, maps, programovani
-->

# Snadné vkládání Google Map pomocí jQuery

Vkládání� [Google Maps][1] do webu není nijak zvlášť složité ([Google maps cheat sheet][2]). K vložení základní mapy, stačí napsat pár řádků javascriptu. Přesto se tento proces dá ještě zjednodušit díky [Google Maps plugin for jQuery][3].

Celý plugin je vměstnán do méně než 10KB javascript kódu. Díky tomuto pluginu, se vložení mapy smrskne na jeden řádek.

<pre>$('selector').googleMaps();
</pre>

Plugin toho samozřejmě podporuje mnohem více. Například jednoduché vkládání špendlíku (značky) do mapy:

<pre>$(document).ready(function() {
  $('selector').googleMaps({
    markers: {
    latitude:     37.4416,
   longitude: -122.1516
  }
});
});
</pre>

 [1]: http://maps.google.com/ "Google Maps"
 [2]: http://www.nabito.net/google-maps-cheat-sheets/ "Google Maps Cheat Sheet"
 [3]: http://www.mayzes.org/googlemaps.jquery.html "Google Maps jQuery"