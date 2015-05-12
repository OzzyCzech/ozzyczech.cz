<!--
title : Proč je hodnocení hvězdičkama blbost
author : Roman Ožana <ozana@omdesign.cz>
date : 16.2.2009 12:50:53
tags : webdesign
-->

# Proč je hodnocení hvězdičkama blbost

<img class="alignright" title="star-rating.gif" src="http://grafikdesign.files.wordpress.com/2008/01/rating-sample.gif" alt="Star Rating" width="308" height="261" />

Většina současných moderních webů používá tzv. hodnocení obsahu **pomocí hvězdiček** (_star rating_). Na tom by nebylo nic špatného, je dobré znát názory ostatních, často Vám to pomůže v rozhodování. Jenže hvězdičkový koncept, tak jak je dneska používán, je postaven na velmi **zavádějících datech**. Hned uvedu příklad, jak to myslím:

Deset uživatelů zahlasuje **5 hvězdičkami**, pro svůj oblíbený například Terminátor. A pro jiný film, například Forest Gump zahlasuje celkem 5000 osob, v průměru 4.5 hvězdy. Který film je favoritem? Podle čistého hvězdičkového hodnocení, tak jak jej dnes používá většina současných serverů**, je to Terminátor**.

Jenže to je špatně! Terminátor zaujal jen 10 lidí natolik, aby pro něj hlasovali, zatímco Forest Gump zaujal 5000 lidí. Proto by měl být Forest Gump v žebříčku na prvním místě. Mnohem **průkažnější** by bylo, kdyby se do hodnocení promítl také **počet hlasujících**.

Tento špatný koncept používá například: <http://www.opensourcecms.com/>.