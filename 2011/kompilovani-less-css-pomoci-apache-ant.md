<!--
title : Kompilovaní Less CSS pomocí Apache ANT
author : Roman Ožana <ozana@omdesign.cz>
date : 3.10.2011 19:54:47
tags : ANT Less CSS kompilace, Less CSS kompilace
-->

# Kompilovaní Less CSS pomocí Apache ANT

[Less CSS][1]� patří mezi mé nové oblíbené &#8220;novoty&#8221; &#8211; jedná se o nadstavbu CSS, která přináší do CSS funkce, konstanty nebo vnořené prvky. [Less CSS][1]� je možné kompilovat on the fly pomocí javascriptu přímo v prohlížeči, ale mnohem lepší je soubory CSS připravit dopředu.

Pro automatické kompilování [Less CSS][1] souborů jsem využil� [Apache ANT][2]� a [maven-less-pluginu][3].� Target _less.compile_ navíc kontroluje změnu souboru _style.less_. Kompilace se tak provede jen pokud se originální soubor less změnil:

<pre>&lt;target name="checkLessChanges"&gt;
  &lt;uptodate property="lessChange" targetfile="www/css/style.css"&gt;
    &lt;srcfiles dir="www/css" includes="style.less"/&gt;
  &lt;/uptodate&gt;
&lt;/target&gt;

&lt;target name="less.compile" depends="checkLessChanges" unless="lessChange"&gt;
  &lt;java jar="build/tools/less-utils.jar" fork="true" failonerror="true" maxmemory="128m"&gt;
    &lt;arg line=" www/css/" /&gt;
  &lt;/java&gt;
&lt;/target&gt;</pre>

Pokud vám nevyhovuje java less kompilátor můžete využít například [PHP Compiler][4].

 [1]: http://lesscss.org/
 [2]: http://ant.apache.org/
 [3]: http://code.google.com/p/maven-less-plugin/
 [4]: https://github.com/leafo/lessphp