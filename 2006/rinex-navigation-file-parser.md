<!--
title : RINEX navigation file parser
author : Roman Ožana <ozana@omdesign.cz>
date : 6.3.2006 00:13:19
tags : GIS, GPS
-->

# RINEX navigation file parser

Pustil jsem se do [výpočtu polohy GPS satelitů][1] na základě jejich observace stanicí, která je umístěná na V� B.

Jako první jsem napsal jednoduchý parser GPS Navigation message file v PHP 5 ([zdrojáky ke stažení zde][2]). Parser přeloží změť čísel do srozumitelné tabulkové podoby.

 [1]: http://gis.vsb.cz/vojtek/index.php?page=gnps_c/index
 [2]: https://github.com/OzzyCzech/gpsrinex