<!--
title : Grafické tlačítko pomocí CSS
author : Roman Ožana <ozana@omdesign.cz>
date : 1.5.2006 07:43:33
tags : webdesign
-->

# Grafické tlačítko pomocí CSS

Včera jsem tvořil pěkné grafické tlačítko za pomocí CSS a HTML. Myslím si, že by se to mohlo někomu hodit.

Nejpreve je nutné navrhnout grafickou podobu tlačítka &#8211; viz níže. Následující obrázek je jeden kus, i když to tak možná nevypadá.

<p style="text-align: center;">
  <img src="next.png" alt="NEXT BUTTON" width="64" height="32" />
</p>

Pokud chci tlačítko 32 x 32 musím vytvořit obrázek 64 x 32 (jedna polovina se bude zobrazovat po přejetí myší). Pro definici stylu tlačítka použiji následující CSS :

<pre>a.next
{
display:block;
width:32px;
height:32px;
background:white url("./next.png") 0px 0px;
line-height:0px;
font-size:0px;/*FF*/
text-decoration:none;
content:';/*OPERA*/
}
a:hover.next
{
background:white url("./next.png") 32px 0px;
}</pre>

Posun obrázku na pozadí je realizován **čistě pomocí CSS** (background). Velikost písma jsem nastavil na 0, aby nebylo vidět, ale bylo tam &#8211; pro čtečky a textové prohlížeče.

Jelikož je obrázek tlačítka jeden kus **nedochází k blikání** v důsledku stahování dalšího obrázku, jako k tomu dochází v případě použití JavaScriptu.

Do HTML pak stačí nějakému odkazu přiřadit třídu **class=&#8221;next&#8221;**, toť vše.