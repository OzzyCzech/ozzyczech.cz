<!--
title : HTML 5 elementy ve starých IE
author : Roman Ožana <ozana@omdesign.cz>
date : 6.8.2011 05:23:50
tags : MSIE, webdesign
-->

# HTML 5 elementy ve starých IE

Starší verze IE (< IE9) neznají HTML 5 elementy jako jsou například article, aside nebo header. Aby se stránka ve starších IE nerozbila stačí do HTML hlavičky přidat následující javascript:

<pre>(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}})()</pre>

Případně je možné využít **podmíněný komentář** a vložit skript **přímo z repositáře**:

<pre>&lt;!--[if lt IE 9]&gt;
&lt;script src="http://html5shim.googlecode.com/svn/trunk/html5.js"&gt;&lt;/script&gt;
&lt;![endif]--&gt;</pre>

Ještě samozřejmě přidám odkaz na autora skriptu [HTML5 Shine][1].

Podobných šikovných udělátek existuje několik:

  * <http://code.google.com/p/ie7-js/>� &#8211; donutí různé verze IE, aby se chovali jako &#8220;normální&#8221; prohlížeč
  * <http://www.modernizr.com/>� &#8211; usnadní otestovat přes 40 moderních vlastností prohlížeče

 [1]: http://remysharp.com/2009/01/07/html5-enabling-script/