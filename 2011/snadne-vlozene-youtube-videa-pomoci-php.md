<!--
title : Snadné vložené YouTube videa pomocí PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 27.3.2011 21:49:51
tags : PHP, YouTube
-->

# Snadné vložené YouTube videa pomocí PHP

Následující PHP kód zamění jakýkoliv odkazu na [YouTube][1] video za vložený přehrávač. Prostřednictvím jediného regulárního výrazu se dokáží automaticky nahradit celkem čtyři různé formáty URL adresy za embed video přehrávač.

<pre>function youtube($string)
{
  return preg_replace(
    '#(http://(www.)?youtube.com)?/(v/|watch\?v\=)([-|~_0-9A-Za-z]+)&#038;?.*',
    '&lt;iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/$4" frameborder="0" allowfullscreen>&lt;/iframe>',
    $string
  );
}

echo youtube('http://www.youtube.com/watch?v=VWsjWCt1PsQ');
echo youtube('http://youtube.com/watch?v=VWsjWCt1PsQ');
echo youtube('http://youtube.com/v/VWsjWCt1PsQ');
echo youtube('http://www.youtube.com/v/VWsjWCt1PsQ');</pre>

 [1]: http://www.youtube.com/