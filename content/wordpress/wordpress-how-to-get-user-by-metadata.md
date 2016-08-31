---
title: Wordpress - How to get user by metadata
date: 2013-04-16
tags: meta, user, wordpress
---


# Wordpress - How to get user by metadata

Getting user by field name is easy, #Wordpress have function for that [get_user_by](http://codex.wordpress.org/Function_Reference/get_user_by). Getting user by his metadata is a little bit complicated. You can found on the Internet some complex procedures how to **get user by metadata** using [WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query) object. Forget about them! You need prepare correct meta query as array or string and call `get_users`. Thats all!

```
/**
 * Get user by his metadata
 * @author Roman Ozana <ozana@omdesign.cz>
 * @param $meta_key
 * @param $meta_value
 * @return mixed
 */
function get_user_by_meta($meta_key, $meta_value) {
 return reset(
  get_users(
   array(
    'meta_key' => $meta_key,
    'meta_value' => $meta_value,
    'number' => 1,
    'count_total' => false
   )
  )
 );
}
```
