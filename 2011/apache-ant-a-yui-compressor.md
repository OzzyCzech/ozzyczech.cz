<!--
title : Apache ANT a YUI Compressor
author : Roman Ožana <ozana@omdesign.cz>
date : 18.1.2011 10:17:35
tags : Apache Ant, webdesign, YUI Compressor
-->

# Apache ANT a YUI Compressor

Minimalizace kódu je proces, při kterém se **odstraní z kódu veškerá vata** – komentáře, zbytečné mezery, odsazení atd. Výsledný minimalizovaný kód je menší a rychleji se přenese do prohlížeče. Pro minimalizaci kódu existuje [řada nástrojů][1] – některé se soustředí na Javascript, jiné zase umí minimalizovat CSS nebo HTML.

Můj oblíbenec [YUI compressor][2] zvládne minimalizovat [CSS][3] a Javascript &#8211; je naprogramovaný v Javě a spouští se přes příkazovou řádku.

Následující příkaz vytvoří nový soubor _sample.min.css_, který bude obsahovat minimalizovaný kód ze souboru _sample.css_:

<pre>java -jar yuicompressor-2.4.2.jar -o sample.min.css sample.css</pre>

Celý proces minimalizace kódu je možné automatizovat prostřednictvím nástroje [Apache ANT][4] o kterém jsem [psal minule][5].

Následující [sekvence úloh][6] vytvoří ve složce _build/wp-content/themes/omdesign_ minimalizované verze všech CSS souborů, které pro změnu najde ve složce _wp-content/themes/omdesign_.

<pre>&lt;target name="css.minify"&gt;
  &lt;mkdir dir="build/wp-content/themes/omdesign" /&gt;
  &lt;apply executable="java" parallel="false" verbose="true" failonerror="true" dest="build/wp-content/themes/omdesign"&gt;
    &lt;fileset dir="wp-content/themes/omdesign"&gt;
      &lt;include name="*.css" /&gt;
    &lt;/fileset&gt;
    &lt;arg line="-jar"/&gt;
    &lt;arg path="c:\Program Files\yuicompressor-2.4.2\build\yuicompressor-2.4.2.jar"/&gt;
    &lt;arg line="--line-break 0"/&gt;
    &lt;srcfile/&gt;
    &lt;arg line="-o"/&gt;
    &lt;mapper type="glob" from="*.css" to="*.css"/&gt;
    &lt;targetfile/&gt;
  &lt;/apply&gt;
&lt;/target&gt;</pre>

Je důležité dobře nastavit všechny cesty, jinak se úloha nespustí. Celou sekvenci je možné vylepšit změnou příkazu **mapper**, díky které budou nové soubory opatřeny o příponu min:

<pre>&lt;mapper type="glob" from="*.css" to="*.min.css"/&gt;</pre>

Všimněte si, že jednotlivé přepínače jsou zasílány do YUI compressoru pomocí příkazu **arg**.� Na závěr alternativní sekvence pro Javascript:

<pre>&lt;target name="js.minify"&gt;
  &lt;mkdir dir="build/wp-content/themes/omdesign/js" /&gt;
  &lt;apply executable="java" parallel="false" verbose="true" failonerror="true" dest="build/wp-content/themes/omdesign/js"&gt;
    &lt;fileset dir="wp-content/themes/omdesign/js"&gt;
      &lt;include name="*.js" /&gt;
    &lt;/fileset&gt;
    &lt;arg line="-jar"/&gt;
    &lt;arg path="c:\Program Files\yuicompressor-2.4.2\build\yuicompressor-2.4.2.jar"/&gt;
    &lt;srcfile/&gt;
    &lt;arg value="--charset" /&gt;
    &lt;arg value="UTF-8" /&gt;
    &lt;arg line="-o"/&gt;
    &lt;mapper type="glob" from="*.js" to="*.js"/&gt;
    &lt;targetfile/&gt;
  &lt;/apply&gt;
&lt;/target&gt;</pre>

 [1]: http://en.wikipedia.org/wiki/Minification_(programming)
 [2]: http://developer.yahoo.com/yui/compressor/
 [3]: http://developer.yahoo.com/yui/compressor/css.html
 [4]: http://ant.apache.org/
 [5]: http://www.nabito.net/automatizovan-dump-mysql-databze-pomoc-apache-ant/
 [6]: http://ant.apache.org/manual/tasksoverview.html