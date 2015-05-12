<!--
title : Reverzní geokódování v Google Maps
author : Roman Ožana <ozana@omdesign.cz>
date : 2.11.2008 18:56:11
tags : GIS, google, mapy
-->

# Reverzní geokódování v Google Maps

Troška teorie ze startu. **Geokódování** je proces, kdy se adrese (např. Ostrava 17. Listopadu 25) přiřadí číselné souřadnice. Nejčastěji jsou tyto souřadnice zeměpisná šířka a délka (GPS).

**Reverzní geokódování** je samozřejmě proces opačný, kdy nějakému bodu (souřadnicím) přiřadíte konkrétní adresu. Oba tyto procesy umí [Google Maps][1] API.

Geokódování adres, s využitím Javascriptu, Google Maps už nějaký ten [čas dokáže][2]. Nově však **přidal možnost** [geokódování přes HTTP][3]. Metodu GET můžete předat celkem 6 parametrů, tři nejdůležitější jsou:

  * q &#8211; samotná adresa
  * key &#8211; Váš API klíč
  * output &#8211; JSON nebo XML (KML)

XML se souřadnicemi Ostravy naleznete na adrese:

<pre>http://maps.google.com/maps/geo?q=Ostrava&amp;output=xml</pre>

Reverzní geokódování je možné pouze prostřednictvím javascript objektu [GClientGeocoder][4]. Operace getLocations požaduje dva parametry, první z nich jsou souřadnice a druhý handler, tedy funkce &#8211; která se má zavolat po dokončení operace. Malá příklad [dle dokumentace][5]:

<pre>var map;
var geocoder;

function initialize() {
 map = new GMap2(document.getElementById("map_canvas"));
 map.addControl(new GLargeMapControl);
 GEvent.addListener(map, "click", getAddress);
 geocoder = new GClientGeocoder();
}

function getAddress(overlay, latlng) {
 if (latlng != null) {
  geocoder.getLocations(latlng, showAddress);
 }
}

function showAddress(response) {
 alert(response.name);
}
</pre>

 [1]: http://mapy.google.cz/ "Google Maps"
 [2]: http://code.google.com/apis/maps/documentation/services.html#Geocoding "Google Maps Geocode via javascript"
 [3]: http://code.google.com/apis/maps/documentation/services.html#Geocoding_Direct "Geokódování adresy - přes protokol HTTP"
 [4]: http://code.google.com/apis/maps/documentation/reference.html#GClientGeocoder "Dokumentace GClientGeocoder"
 [5]: http://code.google.com/apis/maps/documentation/services.html#ReverseGeocoding "Dokumentace ReverseGeocoding"