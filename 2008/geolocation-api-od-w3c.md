<!--
title : Geolocation API od W3C
author : Roman Ožana <ozana@omdesign.cz>
date : 10.10.2008 08:11:30
tags : GIS, GPS
-->

# Geolocation API od W3C

V polovině září přišla W3C s **návrhem** specifikace [Geolocation API][1]. Tato specifikace definuje komunikační rozhraní (API) pro přístup k souřadnicím zařízení.

Specifikace Geolocation API uvádí hned několik možností, jak je možné získat **polohu zařízení:**

  * Přímé [GPS][2] souřadnice (pokud existují)
  * Na základě IP adresy zařízení
  * [RFID][3] &#8211; radiový identifikační prvek
  * MAC adresa WiFi nebo Bluetooth
  * ID buňky GSM/CDMA

Přesnosti **získané polohy** se u jednotlivých možností pochopitelně **velmi různí**. Na druhou stranu je lepší získat alespoň něco, než vůbec nic.

**První** vlaštovkou, která využívá tohle API, je rozšíření [Geode][4] pro Firefox. Toto rozšíření spolupracuje se� serverem [SkyHookWoreless][5].[][6]

<p style="text-align: center;">
  <img class="aligncenter" title="Geode" src="http://docs.google.com/File?id=aq5zpf783fj_175gb885mhb_b" alt="" width="227" height="96" />
</p>

V připravované **verzi Firefox 3.1** se (pravděpodobně) dočkáme nativní podpory Geolocation API. Což může mít v budoucnu celkem **zajímavý komerční potenciál**. Umím si představit webové aplikace, které Vám, na základě získané polohy, dokáží:

  * vyhledávat **volné pracovní místa**
  * doporučovat restaurace, obchody, firmy, společnosti, akce
  * přinášet **místní zprávy**
  * hledat nové přátele, partnery, známé
  * vyhledávat nemovitosti
  * měnit prostředí prohlížeče podle toho, kde právě jste (práce x doma)
  * ještě lépe cílit reklamu
  * (jakkoli) zneužít získané data

Ano tahle specifikace se někomu může zdát, jako vystřižená z [Velkého Bratra][7]. Firefox přeci používá přes 40 procent z nás. Vše se dá **vypnout**, na druhou stranu to zase **někdo může zapnout**. Pak je k zneužití už jen malý krůček.

 [1]: http://dev.w3.org/geo/api/spec-source.html "Geolocation API"
 [2]: http://cs.wikipedia.org/wiki/GPS "Co je to GPS?"
 [3]: http://cs.wikipedia.org/wiki/RFID "Co je to RFID?"
 [4]: http://labs.mozilla.com/2008/10/introducing-geode/ "Geode Addon"
 [5]: http://www.skyhookwireless.com/ "SkyHook Wireless"
 [6]: http://www.skyhookwireless.com/
 [7]: http://cs.wikipedia.org/wiki/Velk%C3%BD_bratr "Velký Bratr"