<!--
title : Přidání tlačítka do editoru WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 30.7.2009 18:23:18
tags : programovani, wordpress
-->

# Přidání tlačítka do editoru WordPress

Občas narazíte na potřebu **zapnout** v editoru Wordpress ([TinyMCE][1]) nějaké tlačítko navíc. Například pro změnu velikosti fontů. Tady je postup, jak to udělat.

<pre>function tiny_mce_button($a) {
$a[] = 'fontsizeselect';
return $a;
}
add_filter( 'mce_buttons', 'tiny_mce_button');
</pre>

Seznam zpětných volání (callback) je mce\_buttons, mce\_buttons\_2, mce\_buttons\_3, mce\_buttons_4 &#8211; pro jednotlivé řádky TinyMCE editoru. Seznam všech možných tlačítek najdete [na stránkách TinyMCE][2]. Funkci stačí nakopírovat do function.php ve vašem template.

 [1]: http://tinymce.moxiecode.com/ "TinyMCE"
 [2]: http://wiki.moxiecode.com/index.php/TinyMCE:Control_reference "TinyMCE"