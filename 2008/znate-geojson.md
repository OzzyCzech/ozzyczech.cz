<!--
title : Znáte GeoJSON?
author : Roman Ožana <ozana@omdesign.cz>
date : 4.9.2008 22:37:57
tags : GIS, programovani
-->

# Znáte GeoJSON?

Dnes jsem se rozhodl představit <a href="http://geojson.org/" target="_blank">GeoJSON</a>. Jak už název napovídá je tento formát spjat s geoinformatickou oblastí. GeoJSON je **celkem nový**, jednoduchý datový formát, který dokáže přenášet informace o geografických objektech jako jsou:

  * body
  * linie
  * polygony a multipoligony
  * kolekce (nebo též skupiny prvků)

Základem GeoJSON je klasický _JavaScript Object Notation_ ([JSON][1]) &#8211; formát pro výměnu dat. JSON je dnes podporován nejen v Javascriptu, ale také v celé řadě dalších programovacích jazyků. Což z něj dělá výborný spojovací článek mezi platformami.

V současnosti je GeoJSON používán zhruba ve 20 projektech. Mezi nejzvučnější jména patří zřejmě [OpenLayers][2] a [FireEagle][3] o němž jsem [nedávno psal][4]. Formát je publikován pod [CC licencí][5], takže jej můžete celkem svobodně používat. Co Vás možná potěší ještě více, že specifikace verze 1.0 má jen několik stránek.

 [1]: http://en.wikipedia.org/wiki/JSON "Co je to JSON?"
 [2]: http://openlayers.org "Webová mapová nádstavba"
 [3]: http://fireeagle.yahoo.net/ "Fire Eagle od Yahoo!"
 [4]: http://www.nabito.net/fire-eaglelokalizacni-platforma/ "FireEagle: lokalizační platforma"
 [5]: http://creativecommons.org/ "Creative Commons"