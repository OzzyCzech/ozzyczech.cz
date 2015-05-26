<!--
title : Změna přístupnosti private metody pomocí Reflection v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 30.7.2011 16:37:05
tags : PHP
-->

# Změna přístupnosti private metody pomocí Reflection v PHP

PHP dokáže relativně snadno, pomocí [reflection][1], zpřístupnit původně nepřístupné (private, protected) metody a property třídy. Mějmě následující třídu:

<pre>class mujClass {
 protected $data = '';
 private function badabum($input) {
  echo $input . $this->data . '<br />';
 }
}
</pre>

Nejprve zpřístupním a zavolám metodu _badabum_. Využiji k tomu objekt [ReflectionMethod][2]

<pre>$mujClassInstance = new \mujClass(); // muj class ma private metodu badabum
$method = new \ReflectionMethod(get_class($mujClassInstance), 'badabum');
$method->setAccessible(true); // zpristupnim si metodu
$method->invokeArgs($mujClassInstance, array('aaa')); // volani privatni metody
</pre>

V případě protected property _$data_ je postup obdobný.

<pre>$property = new \ReflectionProperty(get_class($mujClassInstance), 'data');
$property->setAccessible(true); // zpristupnim si propertu
$property->setValue($mujClassInstance, ' protected data');
$method->invokeArgs($mujClassInstance, array('bbb')); // zase zavolam badabum

echo $property->getValue($mujClassInstance);
</pre>

Zpřístupnění původně nepřístupných vlastností třídy se může hodit například při testování kódu pomocí [PHPUnit][3] testů.

 [1]: http://www.php.net/manual/en/book.reflection.php
 [2]: http://php.net/manual/en/class.reflectionmethod.php
 [3]: https://github.com/sebastianbergmann/phpunit/