<!--
title : 15 užitečných tipů pro jQuery
author : Roman Ožana <ozana@omdesign.cz>
date : 23.7.2011 04:00:46
tags : jquery
-->

# 15 užitečných tipů pro jQuery

Vytvoření prázdného jQuery objektu, který pak může sloužit jako kontejner pro další objekty.

<pre>var container = $([]);
container.add(another_element);</pre>

Nebo změna globálního nastavení pro AJAX requesty

<pre>// ajaxSetup is useful for setting general defaults:
$.ajaxSetup({
	url			: '/ajax/',
	dataType	: 'json'
});

$.ajaxStart(function(){
	showIndicator();
	disableButtons();
});

$.ajaxComplete(function(){
	hideIndicator();
	enableButtons();
});

/*
	// Additional methods you can use:
	$.ajaxStop();
	$.ajaxError();
	$.ajaxSuccess();
	$.ajaxSend();
*/
</pre>

Zbytek je k nalezení zde: [15 Powerful jQuery Tips and Tricks for Developers][1]

 [1]: http://tutorialzine.com/2011/06/15-powerful-jquery-tips-and-tricks-for-developers/ "15 Powerful jQuery Tips and Tricks for Developers"