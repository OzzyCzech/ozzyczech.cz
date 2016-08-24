---
title: Snadné vložené YouTube videa pomocí PHP
date: 27.3.2011 23:49:51
author: Roman Ožana <ozana@omdesign.cz>
tags: PHP, YouTube
---


# Snadné vložené YouTube videa pomocí PHP

Následující PHP kód zamění jakýkoliv odkazu na [YouTube](http://www.youtube.com/) video za vložený přehrávač. Prostřednictvím jediného regulárního výrazu se dokáží automaticky nahradit celkem čtyři různé formáty URL adresy za embed video přehrávač.


    function youtube($string)
    {
      return preg_replace(
        '#(http://(www.)?youtube.com)?/(v/|watch\?v\=)([-|~_0-9A-Za-z]+)&?.*?#i',
        '<iframe title="YouTube video player" width="480" height="390" src="http://www.youtube.com/embed/$4" frameborder="0" allowfullscreen></iframe>',
        $string
      );
    }
    
    echo youtube('http://www.youtube.com/watch?v=VWsjWCt1PsQ');
    echo youtube('http://youtube.com/watch?v=VWsjWCt1PsQ');
    echo youtube('http://youtube.com/v/VWsjWCt1PsQ');
    echo youtube('http://www.youtube.com/v/VWsjWCt1PsQ');