<!--
title : WordPress: get post excerpt
author : Roman Ožana <ozana@omdesign.cz>
date : 2.12.2013 14:01:51
tags : excerpt, wordpress
-->

# WordPress: get post excerpt

    $excerpt = apply_filters('the_excerpt', get_post_field('post_excerpt', $post_id));<p</p>