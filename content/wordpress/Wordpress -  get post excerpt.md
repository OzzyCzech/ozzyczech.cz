---
title: Wordpress - get post excerpt
date: 2013-12-02
tags: [excerpt, wordpress]
---

# Wordpress: get post excerpt

```php
$excerpt = apply_filters('the_excerpt', get_post_field('post_excerpt', $post_id));
```
