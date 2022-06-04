---
title: Remove link manager from Wordpress
date: 2011-09-11
tags: [Wordpress]
---

# Remove link manager from Wordpress

WordPress [link manager](http://codex.wordpress.org/Links_Manager) is useless. Why do not remove that from menu? It's easy:

```php
add_action('admin_menu', function (){
  remove_menu_page('link-manager.php');
});
```

You can remove other functions as well e.g.: `remove_menu_page('edit-comments.php');`  remove comments edit from menu.

#WordPress 