<!--
title : Zjištění práv k souboru nebo adresáři v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 5.9.2012 10:43:05
tags : PHP, tip
-->

# Zjištění práv k souboru nebo adresáři v PHP

<pre>function getPermisions($file) {
 return (is_dir($file) || is_file($file)) ? substr(decoct(fileperms($path)), -4) : '0000';
}</pre>

Nebo pro kontrolu, zda jsou práva dostatečná:

<pre>function hasPermisions($path, $permission = 777) {
 $current = substr(decoct(fileperms($path)), $permission &gt; 1000 ? -4 : -3);
 return ($current &gt; $permission);
}</pre><p</p>