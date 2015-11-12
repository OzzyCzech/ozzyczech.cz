<!--
title: Wodpress constants for human-readable intervals
date: 20.2.2013 12:26:32
author: Roman Ožana <ozana@omdesign.cz>
tags: wordpress
-->


# Wodpress constants for human-readable intervals

Constants for expressing human-readable intervals in new #Wordpress are very useful:


    define( 'MINUTE_IN_SECONDS', 60 );
    define( 'HOUR_IN_SECONDS',   60 * MINUTE_IN_SECONDS );
    define( 'DAY_IN_SECONDS',    24 * HOUR_IN_SECONDS   );
    define( 'WEEK_IN_SECONDS',    7 * DAY_IN_SECONDS    );
    define( 'YEAR_IN_SECONDS',  365 * DAY_IN_SECONDS    );


 Example: 
    wp_cache_add($key, $data, 'default, 5 * DAY_IN_SECONDS);