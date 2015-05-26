<!--
title : Minifikace CSS pomocí PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 14.1.2012 15:54:25
tags : CSS, PHP, PHP minifikace CSS, programovani
-->

# Minifikace CSS pomocí PHP

Pro minifikaci CSS existuje řada nástrojů (např. [YUI Compressor][1]), nejraději však používám klasické PHP:

<pre>$regex = array(
  "`^([\t\s]+)`ism" =&gt; '',
  "`([:;}{]{1})([\t\s]+)(\S)`ism" =&gt; '$1$3',
  "`(\S)([\t\s]+)([:;}{]{1})`ism" =&gt; '$1$3',
  "`\/\*(.+?)\*\/`ism" =&gt; "",
  "`([\n|\A|;]+)\s//(.+?)[\n\r]`ism" =&gt; "$1\n",
  "`(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+`ism" =&gt; "\n"
);

$css = preg_replace(array_keys($regex), $regex, file_get_contents(__DIR__ . '/style.css'));

file_put_contents(__DIR__ . '/style.min.css', $css);</pre>

 [1]: http://www.nabito.net/minifikace-css-a-js-pomoci-yui-compress-a-apache-ant-vylepsena-verze-s-makrem/