<!--
title : Odstranění odkazů z admin menu WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 11.9.2011 20:06:48
tags : wordpress
-->

# Odstranění odkazů z admin menu WordPress

Pro� [manažer odkazů][1] jsem nenašel nikdy **smysluplné využití**. Proč ho rovnou z menu neodstranit? Stejně tam jen zavazí:

<pre>add_action('admin_menu', function(){
  remove_menu_page('link-manager.php');
});</pre>

Obdobně je možné odstranit cokoliv dalšího např. `remove_menu_page('edit-comments.php');`� &#8211; odstraní odkaz na komentáře.

 [1]: http://codex.wordpress.org/Links_Manager