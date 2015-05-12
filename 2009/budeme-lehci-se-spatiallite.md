<!--
title : Budeme lehčí se SpatiaLite
author : Roman Ožana <ozana@omdesign.cz>
date : 17.1.2009 13:00:54
tags : GIS
-->

# Budeme lehčí se SpatiaLite

[SpatiaLite][1] je rozšíření populárního [SQLite][2], které přidává podporu prostorových dat. SpatiaLite podědilo po svém rodiči veškeré dobré vlastnosti:

  * jednoduchost
  * robustnost
  * veškeré data jsou ukládány do jednoho souboru
  * nezávislost na platformě

SpatiaLite v současnosti podporuje formáty **WKT a WKB**. Implementovány jsou také některé **SQL prostorové funkce** jako AsText(), GeomFromText(), Area(), PointN() a podobně.

SpatiaLite podporuje také některé jednoduché **prostorové dotazy** Overlaps(), Touches(), Contains(). Rozumí si z jazyky, díky GNU libiconv. Více informací naleznete na [oficiálních stránkách projektu][3].

Tento projekt rozhodně stojí za to sledovat, v budoucnu to může být velmi zajímavý způsob uložení prostorových dat.

 [1]: http://www.gaia-gis.it/spatialite/ "SpatiaLite"
 [2]: http://www.sqlite.org/ "SQLite"
 [3]: http://www.gaia-gis.it/spatialite/ "SpatiaLite - oficiální stránky projektu"