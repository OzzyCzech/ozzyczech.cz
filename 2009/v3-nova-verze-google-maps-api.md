<!--
title : V3 nová verze Google Maps API
author : Roman Ožana <ozana@omdesign.cz>
date : 6.11.2009 21:31:56
tags : google, GPS, mapy
-->

# V3 nová verze Google Maps API

Google vypustil na světlo světa již třetí verzi [Google Maps API][1] (V3). Nové API je navrženo tak, aby se načítalo velmi rychle, zejména pak na mobilních zařízeních ([iPhone][2] a [Android][3]). Proti předchozím verzím, tohle nové API využívá modifikovanou [MVC architekturu][4].

Podstatnou změnou je také fakt, že nová verze již **nevyžaduje** pro svoji funkci API klíč. Takže naprogramovanou aplikaci můžete bez úpravy kódu klidně přesunout na jiný server.

Co však nová verze vyžaduje je předání parametru [sensor][5] (boolean), který určuje zda Vaše aplikace využívá nějaký **prostorový sensor** (nejčastěji GPS). Senzor své smysluplné využití najde samozřejmě pouze na **mobilních klientech**. Možná si říkáte, jak se do webové aplikace **dostane aktuální poloha**? No přeci prostřednictvím AJAXU přímo z [Vaší IP adresy][6]. Vaše zařízení to samozřejmě musí umět zpracovat.

Tady je Googlí navigace v akci:

http://www.youtube.com/watch?v=tGXK4jKN_jY

 [1]: http://code.google.com/intl/cs/apis/maps/documentation/v3/ "Google Maps API V3"
 [2]: http://www.apple.com/iphone/ "iPhone"
 [3]: http://developer.android.com/index.html "Google Android"
 [4]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller "MVC"
 [5]: http://code.google.com/intl/cs/apis/maps/documentation/v3 "Sensor"
 [6]: http://code.google.com/query=ClientLocation "ClientLocation"