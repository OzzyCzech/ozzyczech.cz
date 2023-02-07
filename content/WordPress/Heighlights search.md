# Heighlights search

The next few lines of code **wrap** all the **keywords** currently being searched for in the `<strong class="search-keyword"></strong>` tag.

The code can be inserted into `function.php` in your template. Or you can paste it directly into `search.php` somewhere just after the `get_header()` function call. The assumption, of course, is that you are using the standard [WordPress](http://codex.wordpress.org/Function_Reference/get_search_form) search functions.

```php 
function searchHeighlight($text) {
    $keys = explode(" ", get_search_query());
    $text = preg_replace(
	    '/('.implode('|', $keys) .')/iu',
	    '<strong class="search-keyword">\0</strong>',
	    $text
	  );
    return $text;
}

add_filter('the_title','searchHeighlight');
add_filter('the_content','searchHeighlight');
add_filter('the_excerpt','searchHeighlight');
```

then just add follow code to your css:

```css
.search-keyword {
	background:#f3ff0f!important;
	color:#000!important;
}
```

 The result is a small, but useful, improvement in search results that costs you almost no effort.

#PHP #WordPress #CSS