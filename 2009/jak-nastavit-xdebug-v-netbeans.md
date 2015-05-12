<!--
title : Jak nastavit xDebug v NetBeans
author : Roman Ožana <ozana@omdesign.cz>
date : 14.5.2009 07:52:34
tags : PHP, programovani, webdesign
-->

# Jak nastavit xDebug v NetBeans

Slíbil jsem, že popíšu postup toho, jak nastavit [xDebug][1] pro [NetBeans][2]. Takže tady je postup:

Používám [Wamp server][3], který v sobě obsahuje jak PHP, Apache tak MySQL. Pokud neznáte rozhodně doporučuji zkusit, ta pohodlnost za to stojí!

První věc, kterou musíte udělat je stáhnout si [dobrou verzi xDebug][4]. Správná verze musí být určena pro vaši verzi PHP &#8211; já mám PHP 5.2, takže jsem zvolil: \*5.2 VC6\*.

xDebug jsem nakopíroval do složky php konkrétně do \*ext\*. Pak stačilo na konec php.ini přidat tohle:

<pre>zend_extension_ts="C:\Program Files\wamp\bin\php\php5.2.9-1\ext\php_xdebug.dll"

[XDebug]
xdebug.remote_enable=1
xdebug.remote_host=127.0.0.1
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.profiler_enable=1
xdebug.profiler_output_dir="C:\Program Files\wamp\tmp"
</pre>

Poté stačilo restartovat Apache a ve výpisu phpinfo() by měla přibýt položka xDebug. Když ne tak zkuste:

  * místo klasické verze [použít Non-thread-safe][4] a nezapomeňte přepsat v php.ini \*zend\_extension\_ts\* na \*zend\_extension\_nts\*
  * zkontrolujte jestli máte ve Firefox rozšíření NetBeans
  * podívejte se [na fórum][5] nebo na [oficiální postup][6]

Přeji všem hodně štěstí při nastavování a krokování svých kódů.

 [1]: http://www.xdebug.org/
 [2]: http://netbeans.org/
 [3]: http://www.wampserver.com/en/
 [4]: http://www.xdebug.org/download.php
 [5]: http://forums.netbeans.org/topic7509.html
 [6]: http://www.netbeans.org/kb/docs/php/configure-php-environment-windows.html#installXDebug