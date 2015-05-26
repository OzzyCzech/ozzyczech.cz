<!--
title : IE6 patří na smetiště dějin
author : Roman Ožana <ozana@omdesign.cz>
date : 4.1.2010 16:08:00
tags : HTML, internet, webdesign
-->

# IE6 patří na smetiště dějin

Nemáte rádi starý [Internet Explorer][1]? Myslíte si, že to je **brzda internetu**? Tak proč neupozorníte své návštěvníky, že používají zastaralý prohlížeč? Stačí na Váš web vložit následující HTML kód. Pokud stránky navštíví nějaký **internetový dinosaurus** (MSIE6 a níž), zobrazí se mu nahoře žlutá hláška ve znění: _Používáte velmi zastaralý prohlížeč. Tyto stránky nemusí být zobrazeny správně. Zkuste použít třebas Chrome, Firefox, IE8 nebo Operu_.

<pre>&lt;!--[if lt IE 7]&gt;
&lt;p style="position:absolute;top:0px;left:0px;background-color;height:35px;width:100%;clear:both;line-height:35px;color:#000;font-size:16px!important;text-align:center;"&gt;
 Používáte velmi &lt;strong style="color:red;"&gt;zastaralý prohlížeč&lt;/strong&gt;. Tyto stránky &lt;strong&gt;nemusí být zobrazeny&lt;/strong&gt; správně. Zkuste použít třeba &lt;a href="http://www.google.cz/chrome" style="color:#000;"&gt;Chrome&lt;/a&gt;, &lt;a href="http://www.mozilla-europe.org/cs/firefox/" style="color:#000;"&gt;Firefox&lt;/a&gt;, &lt;a href="http://www.microsoft.com/windows/Internet-explorer/default.aspx" style="color:#000;"&gt;IE8&lt;/a&gt; nebo &lt;a href="http://www.opera.com/download/" style="color:#000;"&gt;Operu&lt;/a&gt;.
&lt;/p&gt;
&lt;![endif]--&gt;
</pre>

 [1]: http://en.wikipedia.org/wiki/Internet_Explorer_6 "MSIE 6"