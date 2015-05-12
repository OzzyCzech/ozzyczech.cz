<!--
title : Snadné stránkování ve WordPress bez pluginu
author : Roman Ožana <ozana@omdesign.cz>
date : 3.10.2010 09:04:25
tags : PHP, plugin, wordpress
-->

# Snadné stránkování ve WordPress bez pluginu

Pokud chcete své příspěvky ve stránkovat, musíte obvykle� sáhnout po [nějakém pluginu][1]. Což rozhodně **není ideální řešení**. Stránkování obsahu je prostě **základní funkce**. Je škoda, že to Wordpress neumí bez nějakého zbytečného pluginu!

Jenže on to umí. V administraci se stránkování obsahu používá téměř všude. Což mimo jiné znamená, že na to [existuje funkce][2]. Stačí ji tedy jen dobře použít:

<pre>$pagination = array(
	'base' =&gt; str_replace('91919', '%#%', get_pagenum_link(91919)),
	'format' =&gt; 'page/%#%',
	'total' =&gt; ceil($wp_query-&gt;found_posts / get_settings('posts_per_page')),
	'current' =&gt; absint( get_query_var( 'paged' ) ),
	'show_all' =&gt; false,
	'prev_next' =&gt; true,
	'prev_text' =&gt; __('&laquo; Previous'),
	'next_text' =&gt; __('Next &raquo;'),
	'end_size' =&gt; 3,
	'mid_size' =&gt; 5,
	'type' =&gt; 'plain',
	'add_args' =&gt; false,
	'add_fragment' =&gt; ''
);

echo paginate_links($pagination);</pre>

Funkce [paginate_links][2] má řadu vstupních parametrů, které jsou podrobně popsány v [dokumentaci][2].

Nejdůležitější je samozřejmě **total** &#8211; měl by obsahovat počet stránek. Ten jsem vypočítal jako **zaokrouhlený podíl** celkového počtu příspěvku a počtu příspěvků na stránku (tohle se nastavuje se v administraci).

Parametr **current** by měl obsahovat číslo aktuálně prohlížené stránky. Zjistíte jej snadno pomocí `get_query_var`. Další dva neméně důležité parametry jsou **base** a **format** &#8211; pomocí kterých se tvoří URL odkazu.

**Base** by měl obsahovat základní část URL. Což je ta část, které se při procházení jednotlivých stránek nemění. Nenapadl mě lepší způsob, než zavolat funkci get\_pagenum\_link. Řetězec `%_%` bude při tvorbě URL nahrazen obsahem parametru **format**.

**Format** je ono samotné stránkování. Měl by obsahovat tu část URL, která se bude měnit. V mém příkladu využívám tzv. hezké URL. Takže číslo stránky je očekávané za _page_. Řetězec `%#%` bude nahrazen čísly. Výsledná URL tak bude vypadat například takto `http://www.nabito.net/page/2`

Ostatní parametry jsou spíš doplňkové.<p</p>

 [1]: http://wordpress.org/extend/plugins/wp-pagenavi/
 [2]: http://codex.wordpress.org/Function_Reference/paginate_links