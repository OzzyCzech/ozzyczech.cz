# Case insensitive in_array v PHP

PHP funkce [in_array](http://php.net/manual/en/function.in-array.php) je case
sensitive - což se nemusí vždy hodit. Občas potřebujete prohledat pole a
nezáleží Vám na velikosti písmen u jeho prvků:


```php
$array = array('a', 'B', 'cE');

function inArrayCaseInsensitive($needle, $array) {
 return (bool) preg_grep('/^' . preg_quote($needle, '/') . '$/i', $array);
}

inArrayCaseInsensitive('a', $array); // true
inArrayCaseInsensitive('A', $array); // true
inArrayCaseInsensitive('ce', $array); // true
inArrayCaseInsensitive('be', $array); // false
```

Funkce [preg_grep](http://php.net/manual/en/function.preg-grep.php) má ještě
zajímavý přepínač PREG_GREP_INVERT. Tímto přepínačem odfiltrujete všechny
hodnoty v poli, které neodpovídají zadanému **regulárnímu výrazu**.
Filtrace zachovává klíče pole.

```php
$array = array('a', 'A', 'cE');

function filterArrayValues($needle, $array) {
 return preg_grep('/^' . preg_quote($needle, '/') . '$/i', $array, PREG_GREP_INVERT);
}

print_r(filterArrayValues('a', $array)); // vypíše jen cE
```

#PHP