---
title: Make WordPress globals more accessible
date: 8.2.2013 17:30:52
author: Roman Ožana <ozana@omdesign.cz>
tags: en, hack, PHP, wordpress
---


# Make WordPress globals more accessible

Wordpress using a lot [globals variables](http://codex.wordpress.org/Global_Variables). These variables are used throughout WordPress code for various reasons. Great example is database connection object [wpdb](http://codex.wordpress.org/Class_Reference/wpdb). Here is common example how to use **wpdb** in some function:


    function something() { 
     global $wpdb;
     /** @var wpdb $wpdb */
     $wpdb->query('SQL...');
    }


 It's highly uncomfortable and long! Therefore, I have prepared a simple object which make all global variables much more accesible from anywhere: https://gist.github.com/OzzyCzech/4737518 (PHP 5.3+ only) 
    function something() { 
     Globals::wpdb()->query('SQL...');
    }


 #wordpress #hack #php #en