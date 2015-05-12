<!--
title : Make WordPress globals more accessible
author : Roman Ožana <ozana@omdesign.cz>
date : 8.2.2013 16:30:52
tags : en, hack, PHP, wordpress
-->

# Make WordPress globals more accessible

Wordpress using a lot [globals variables][1]. These variables are used throughout WordPress code for various reasons. Great example is database connection object [wpdb][2]. Here is common example how to use **wpdb** in some function:

<pre>function something() { 
 global $wpdb;
 /** @var wpdb $wpdb */
 $wpdb->query('SQL...');
}
</pre>

It&#8217;s highly uncomfortable and long! Therefore, I have prepared a simple object which make all global variables much more accesible from anywhere: https://gist.github.com/OzzyCzech/4737518 (PHP 5.3+ only)

<pre>function something() { 
 Globals::wpdb()->query('SQL...');
}
</pre><p </p>

 [1]: http://codex.wordpress.org/Global_Variables
 [2]: http://codex.wordpress.org/Class_Reference/wpdb