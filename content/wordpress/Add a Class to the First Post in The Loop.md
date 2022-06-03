# Add a Class to the First Post in The Loop

```php
add_filter(
    'post_class', 
    function ( $classes ) {
        global $wp_query;
        if( 0 == $wp_query->current_post )
            $classes[] = 'first';
        return $classes;
    }
);
```

#Wordpress 