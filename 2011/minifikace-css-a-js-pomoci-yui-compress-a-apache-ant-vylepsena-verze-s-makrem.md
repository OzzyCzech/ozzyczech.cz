<!--
title : Minifikace CSS a JS pomocí YUI compress a Apache ANT – vylepšená verze s makrem
author : Roman Ožana <ozana@omdesign.cz>
date : 6.8.2011 09:06:54
tags : ANT, Apache, Build
-->

# Minifikace CSS a JS pomocí YUI compress a Apache ANT – vylepšená verze s makrem

Před časem jsem zde psal o [Apache ANT a Yui Compressoru][1]. Přišel jsem na rychlejší a elegantnější způsob, jak minifikovat javascript a CSS soubory. Vše je možné zařídit prostřednictvím [Ant makra][2]:

<pre>&lt;!-- Minifi css/js with YUI compressor --&gt;
 &lt;macrodef name="Minify" description="Minifi css/js with YUI compressor"&gt;
  &lt;attribute name="file" /&gt;
  &lt;attribute name="args" default="--charset utf-8 -o '@{file}'"/&gt;
  &lt;sequential&gt;
    &lt;java jar="omPress/tools/yuicompressor.jar" fork="true" failonerror="true" maxmemory="128m"&gt;
      &lt;arg line="'@{file}' @{args}" /&gt;
    &lt;/java&gt;
  &lt;/sequential&gt;
&lt;/macrodef&gt;</pre>

Předdefinované makro, stačí vložit do vašeho [Apache Ant][3] projektu a zavolat v libovolném [targetu][4].� Jako vstupní parametr vyžaduje makro pouze **jméno souboru**.

<pre>&lt;target name="js.build"&gt;
 &lt;Minify file="js/main.js" /&gt;
&lt;/target&gt;</pre>

Pokud makro zavoláte bez nepovinného parametru args, **dojde k přepsání originálního souboru minifikovanou verzí** (viz hodnota default). Tohle chování je možné samozřejmě snadno změnit:

<pre>&lt;target name="js.build"&gt;
 &lt;Minify
   file="js/main.js"
   args="--charset utf-8 -o 'js/main.min.js'"
 /&gt;
&lt;/target&gt;</pre>

[YUI Compressor][5]� zvládne minifikovat také CSS soubory &#8211; stačí zavolat:

<pre>&lt;target name="css.build"&gt;
 &lt;Minify file="css/main.css" /&gt;
&lt;/target&gt;</pre>

 [1]: http://www.nabito.net/apache-ant-a-yui-compressor/ "Apache ANT a YUI Compressor"
 [2]: http://ant.apache.org/manual/Tasks/macrodef.html
 [3]: http://ant.apache.org/
 [4]: http://ant.apache.org/manual/using.html
 [5]: http://developer.yahoo.com/yui/compressor/