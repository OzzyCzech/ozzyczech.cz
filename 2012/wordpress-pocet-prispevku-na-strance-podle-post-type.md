<!--
title : WordPress: počet příspěvků na stránce podle post type
author : Roman Ožana <ozana@omdesign.cz>
date : 26.1.2012 20:23:10
tags : wordpress
-->

# WordPress: počet příspěvků na stránce podle post type

Wordpress neumožňuje zobrazit různé počty příspěvků podle jejich typů. V administraci najdete pouze jedno jediné číslo (post per page).

<pre>if( !is_admin() )
  add_filter( 'pre_get_posts', function($query) {
    if ( $query-&gt;query_vars['post_type'] == 'tweet')
      $query-&gt;query_vars['posts_per_page'] = 15;
  });</pre>

Díky tomu se v archivu [Tweets][1] zobrazí jiný počet příspěvků než na [homepage][2].

 [1]: http://www.nabito.net/tweets/
 [2]: http://www.nabito.net