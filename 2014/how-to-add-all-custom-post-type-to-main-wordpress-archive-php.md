<!--
title: How to add all custom post type to main Wordpress archive.php
date: 24.7.2014 16:54:39
author: Roman Ožana <ozana@omdesign.cz>
tags: archive, hack, PHP, wordpress
-->


# How to add all custom post type to main Wordpress archive.php

Default archive shows only `post` type if you need show all post types just add follow code to `function.php`


    add_filter(
    'pre_get_posts', function ($query) {
            if (
                $query->is_main_query() &&
                !is_admin() &&
                (is_category() || is_tag())
                && empty($query->query_vars['suppress_filters'])
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


 #wordpress #php #archive #hack