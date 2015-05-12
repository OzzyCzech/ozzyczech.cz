<!--
title : Výpočet hash objektu v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 25.9.2011 06:31:20
tags : Hash object PHP, PHP
-->

# Výpočet hash objektu v PHP

Funkce [spl\_object\_hash()][1] má jednu **nevýhodu**, její výsledek se v čase mění. Pokud objekt naplníte stejnými hodnotami, dostanete při dvou requestech dva různé výsledky. Což nemusí být vždy žádoucí. Někdy potřebujete objekt identifikovat na základě jeho vnitřních hodnot pomocí neměnného řetězce. Takový hash můžete snadno získat například takto:

<pre>class Foo {
 private $p;
 public function setProperty($p) {
  $this->p = $p;
 }
 // vypocita hash objektu na zaklade hodnot jeho propert
 public function __toString() {
  return md5(http_build_query(get_object_vars($this)));
 }
}
</pre>

Pro vypsání/získání hash pak stačí:

<pre>$bar = new Foo();
$bar->setProperty('25');
echo $bar;
$hash = (string) $bar;
</pre>

 [1]: http://php.net/manual/en/function.spl-object-hash.php