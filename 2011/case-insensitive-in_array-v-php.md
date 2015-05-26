<!--
title : Case insensitive in_array v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 20.6.2011 16:28:44
tags : PHP
-->

# Case insensitive in_array v PHP

PHP funkce [in_array][1] je case sensitive &#8211; což se nemusí vždy hodit. Občas potřebujete prohledat pole a nezáleží Vám na velikosti písmen u jeho prvků:

<pre>$array = array('a', 'B', 'cE');

function inArrayCaseInsensitive($needle, $array) {
 return (bool) preg_grep('/^' . preg_quote($needle, '/') . '$/i', $array);
}

inArrayCaseInsensitive('a', $array); // true
inArrayCaseInsensitive('A', $array); // true
inArrayCaseInsensitive('ce', $array); // true
inArrayCaseInsensitive('be', $array); // false
</pre>

Funkce [preg_grep][2] má ještě zajímavý přepínač PREG\_GREP\_INVERT. Tímto přepínačem odfiltrujete všechny hodnoty v poli, které neodpovídají zadanému **regulárnímu výrazu**. Filtrace zachovává klíče pole.

<pre>$array = array('a', 'A', 'cE');

function filterArrayValues($needle, $array) {
 return preg_grep('/^' . preg_quote($needle, '/') . '$/i', $array, PREG_GREP_INVERT);
}

print_r(filterArrayValues('a', $array)); // vypíše jen cE
</pre>

 [1]: http://php.net/manual/en/function.in-array.php
 [2]: http://php.net/manual/en/function.preg-grep.php