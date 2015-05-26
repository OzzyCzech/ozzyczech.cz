<!--
title : WordPress: How to get user by metadata
author : Roman Ožana <ozana@omdesign.cz>
date : 16.4.2013 14:31:18
tags : meta, user, wordpress
-->

# WordPress: How to get user by metadata

Getting user by field name is easy, have function for that [get\_user\_by][1]. Getting user by his metadata is a little bit complicated. You can found on the Internet some complex procedures how to **get user by metadata** using [WP_Query][2] object. Forget about them!

You need prepare correct meta query as array or string and call `get_users`. Thats all! 

<pre>/**
 * Get user by his metadata
 * @author Roman Ozana &lt;ozana@omdesign.cz&gt;
 * @param $meta_key
 * @param $meta_value
 * @return mixed
 */
function get_user_by_meta($meta_key, $meta_value) {
 return reset(
  get_users(
   array(
    'meta_key' =&gt; $meta_key,
    'meta_value' =&gt; $meta_value,
    'number' =&gt; 1,
    'count_total' =&gt; false
   )
  )
 );
}</pre><p</p>

 [1]: http://codex.wordpress.org/Function_Reference/get_user_by
 [2]: https://codex.wordpress.org/Class_Reference/WP_Query