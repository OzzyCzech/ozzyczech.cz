<!--
title: Výpočet hash objektu v PHP
date: 25.9.2011 08:31:20
author: Roman Ožana <ozana@omdesign.cz>
tags: Hash object PHP, PHP
-->


# Výpočet hash objektu v PHP

Funkce [spl_object_hash()](http://php.net/manual/en/function.spl-object-hash.php) má jednu **nevýhodu**, její výsledek se v čase mění. Pokud objekt naplníte stejnými hodnotami, dostanete při dvou requestech dva různé výsledky. Což nemusí být vždy žádoucí. Někdy potřebujete objekt identifikovat na základě jeho vnitřních hodnot pomocí neměnného řetězce. Takový hash můžete snadno získat například takto:


    class Foo {
     private $p;
     public function setProperty($p) {
      $this->p = $p;
     }
     // vypocita hash objektu na zaklade hodnot jeho propert
     public function __toString() {
      return md5(http_build_query(get_object_vars($this)));
     }
    }


 Pro vypsání/získání hash pak stačí: 
    $bar = new Foo();
    $bar->setProperty('25');
    echo $bar;
    $hash = (string) $bar;