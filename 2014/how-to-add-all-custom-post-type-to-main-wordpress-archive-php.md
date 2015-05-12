<!--
title : How to add all custom post type to main WordPress archive.php
author : Roman Ožana <ozana@omdesign.cz>
date : 24.7.2014 14:54:39
tags : archive, hack, PHP, wordpress
-->

# How to add all custom post type to main WordPress archive.php

Default archive shows only `post` type if you need show all post types just add follow code to `function.php`

    
    add_filter(
    'pre_get_posts', function ($query) {
            if (
                $query->is_main_query() &#038;&#038;
                !is_admin() &#038;&#038;
                (is_category() || is_tag())
                &#038;&#038; empty($query->query_vars['suppress_filters'])
            ) {
                $posts = array_diff(
                    get_post_types(['public' => true]), ['page', 'attachment', 'revision', 'forum', 'reply', 'topic'] /* array of ignored types*/
                );
                $query->set(
                    'post_type', $posts
                );
                return $query;
            }
        }
    );
    <p</p>