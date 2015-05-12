<!--
title : Zvýraznění právě hledaných slov ve WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 15.11.2010 16:21:28
tags : CSS, PHP, wordpress
-->

# Zvýraznění právě hledaných slov ve WordPress

Několik následujících řádků kódu **obalí** všechna právě vyhledávaná **klíčová slova** do značky STRONG (class search-keyword). Kód je možné vložit do _function.php_ ve Vašem template. Nebo jej můžete vložit rovnou do _search.php_ někde těsně za� volání funkce get_header(). Předpokladem samozřejmě je, že využíváte standardních vyhledávacích funkcí [Wordpress][1].

<pre>function omSearchHeighlight($text)
{
$keys = explode(" ", get_search_query());
$text = preg_replace('/('.implode('|', $keys) .')/iu', '&lt;strong class="search-keyword"&gt;\0&lt;/strong&gt;', $text);
return $text;
}

add_filter('the_title','omSearchHeighlight');
add_filter('the_content','omSearchHeighlight');
add_filter('the_excerpt','omSearchHeighlight');

// nezapomeňte strong element nastylovat např.
// strong.search-keyword {background:!important; color:#000!important;}</pre>

Výsledkem je malé, ale užitečné, vylepšení výsledků vyhledávání, které Vás navíc nestojí téměř žádnou námahu. Ještě malá poznámka na závěr: Kód nedbá na velikost písmen.

 [1]: http://codex.wordpress.org/Function_Reference/get_search_form