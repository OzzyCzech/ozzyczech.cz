<!--
title : myLocation v Google maps mobile
author : Roman Ožana <ozana@omdesign.cz>
date : 29.11.2007 09:10:00
tags : google, GPS, mapy
-->

# myLocation v Google maps mobile

Poslední verze [<span style="COLOR:">Google maps mobile 2.0</span>][1] umožňuje zjistit a vizualizovat Vaši polohu jak s GPS, tak bez GPS přijímače. Možná si říkáte jak to ten Google udělal, že **dokáže určit polohu i bez GPS přijímače**. Vysvětlení je velmi jednoduché.

Veškerá vaše komunikace s operátorem probíhá přes tzv. BTS stanice. Před určováním polohy vycházíme z toho, že známe přesnou polohu BTS stanice a také z toho, že známe rychlost šíření signálu. Pak stačí znát zpoždění mezi vysláním (mobil) a přijetím signálu (BTS) a můžeme se pustit do **přiblíženého výpočtu polohy** mobilního telefonu. Více si můžete přečíst na [<span style="COLOR:">Mobilmanii</span>][2]. Bohužel myLocation nefunguje na Sony Ericssonu (moje K610i se chudera nechytla). Pro více informací se podívejte na video.

http://www.youtube.com/watch?v=v6gqipmbcok

 [1]: http://www.google.com/gmm/index.html
 [2]: http://www.mobilmania.cz/default.aspx?article=1107567 "Jak určit polohu mobilního telefonu"