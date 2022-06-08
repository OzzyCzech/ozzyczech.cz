# Zvýraznění právě hledaných slov ve Wordpress

Několik následujících řádků kódu **obalí** všechna právě vyhledávaná **klíčová slova** do značky `<strong>` (class search-keyword). Kód je možné vložit do `function.php` ve Vašem template. Nebo jej můžete vložit rovnou do `search.php` někde těsně za volání funkce `get_header()`. Předpokladem samozřejmě je, že využíváte standardních vyhledávacích funkcí [Wordpress](http://codex.wordpress.org/Function_Reference/get_search_form).

```php 
function omSearchHeighlight($text) {
    $keys = explode(" ", get_search_query());
    $text = preg_replace('/('.implode('|', $keys) .')/iu', '<strong class="search-keyword">\0</strong>', $text);
    return $text;
}

add_filter('the_title','omSearchHeighlight');
add_filter('the_content','omSearchHeighlight');
add_filter('the_excerpt','omSearchHeighlight');

// nezapomeňte strong element nastylovat např.
// strong.search-keyword {background:#f3ff0f!important; color:#000!important;}
```

 Výsledkem je malé, ale užitečné, vylepšení výsledků vyhledávání, které Vás navíc nestojí téměř žádnou námahu. Ještě malá poznámka na závěr: Kód nedbá na velikost písmen.

#PHP #Wordpress #CSS