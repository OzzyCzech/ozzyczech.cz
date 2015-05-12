<!--
title : Simple AJAX
author : Roman Ožana <ozana@omdesign.cz>
date : 5.5.2006 05:43:38
tags : programovani, webdesign
-->

# Simple AJAX

Hladal jsem co nejjednodušší způsob jak vyřešit na stránkách AJAX ([Co je to AJAX ?][1]).

Podařilo se mi najít [Simple AJAX Code-Kit (SACK)][2]. Třída SACK napsaná v Javascriptu umožní používat AJAX na stránce tak jednoduše jak to jen jde. Nakonec podívejte se sami jak jednoduše to jde :

<pre>function doit()
{
var form = document.getElementById('form');
ajax.setVar("myTextBox", form.mytext.value);
ajax.requestFile = "sackdemo.php";
ajax.method = form.method.value;
ajax.element = 'replaceme';
ajax.onLoading = whenLoading;
ajax.onLoaded = whenLoaded;
ajax.onInteractive = whenInteractive;
ajax.onCompletion = whenCompleted; ajax.runAJAX();
}
</pre>

 [1]: http://www.root.cz/clanky/ajax/ "Root.cz - AJAX"
 [2]: http://twilightuniverse.com/resources/code/sack/ "Třída SACK"