<!--
title : GEO-mikroformáty na Seznamu
author : Roman Ožana <ozana@omdesign.cz>
date : 29.1.2009 09:06:14
tags : mapy, Seznam
-->

# GEO-mikroformáty na Seznamu

Už jsem viděl nad mapou ledacos, ale **zvukovou vrstvu** ještě ne. Na stránkách http://aporee.org/maps/ nalezenete mapu ve které je spousta ozvučených míst. Více informací o této službě [přineslo Živě.cz][1]. To byla jen taková perlička na úvod, no a teď tedy o těch GEO mikroformátech na Seznamu.

[Seznam.cz][2] přidal do svého vyhledávače podporu [mikroformátu GEO][3]. V současnosti jsou podporovány následující tři možnosti zápisu:

<pre>&lt;cokoliv class="geo"&gt;
&lt;cokoliv class="latitude"&gt;37.408183&lt;/cokoliv&gt;,
&lt;cokoliv class="longitude"&gt;-122.13855&lt;/cokoliv&gt;
&lt;/cokoliv&gt;</pre>

<pre>&lt;cokoliv class="geo"&gt;
&lt;abbr class="latitude" title="37.408183"&gt;N 37° 24.491&lt;/abbr&gt;
&lt;abbr class="longitude" title="-122.13855"&gt;W 122° 08.313&lt;/abbr&gt;
&lt;/cokoliv&gt;</pre>

<pre>&lt;abbr class="geo" title="37.408183;-122.13855"&gt; Popis lokace &lt;/abbr&gt;</pre>

Pokud robot seznamu najde nějaký z těchto kódů na stránce, automaticky se do výsledku vyhledávání na Seznamu přidá odkaz **Zobrazit na mapě**. Další informace naleznete na [Seznam Fulltext Blogu][4].

 [1]: http://www.zive.cz/Bleskovky/Aporee-Maps-zvuk-velkomesta-cikad-a-ledovce-v-Google-Mapach/sc-4-a-145452/default.aspx "Aporee Maps: zvuk velkoměsta, cikád a ledovce v Google Mapách"
 [2]: http://www.seznam.cz "Seznam.cz"
 [3]: http://microformats.org/wiki/geo "GEO Microformat"
 [4]: http://fulltext.sblog.cz/2009/01/28/26 "Podpora GEO-mikroformátu"