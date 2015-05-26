<!--
title : Přidání tlačítka Facebook like do WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 26.4.2010 16:40:20
-->

# Přidání tlačítka Facebook like do WordPress

Tlačítko [Like][1], které znáte z [Facebook][2], opustilo své � rodiště a postupně dobývá nové internetové světy.).

Přidání tlačítka **Facebook Like do Wordpress** je snadné. Stačí si do _function.php_ ve wp-content/templates/vas_template přidat tohle:

<pre>function the_facebook_like($method = 'like')
{
  ?&gt;&lt;iframe src="http://www.facebook.com/plugins/like.php?href=&lt;?php echo urlencode(get_permalink($post-&gt;ID)); ?&gt;&amp;layout=button_count&amp;show-faces=true&amp;width=500&amp;action=&lt;?= $method?&gt;&amp;colorscheme=light" scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; width:100%; height:30px; float:right;"&gt;&lt;/iframe&gt;&lt;?php
}
</pre>

Do `header.php` (také ve vas_template) je zase dobré přidat do html hlavičky tyto meta tagy, aby Facebook věděl s kým má tu čest.

<pre>&lt;meta property="og:site_name" content="&lt;?php bloginfo('name'); ?&gt;" /&gt;
&lt;meta property="og:title" content="&lt;?php wp_title(); ?&gt;" /&gt;
&lt;meta property="og:type" content="blog" /&gt;
</pre>

No a nakonec si můžete své tlačítko přidat kde budete potřebovat. Například do `index.php` (také ve vas_template).

<pre>&lt;div class="entry"&gt;
&lt;?php the_content('Čti zbytek...', false); ?&gt;
&lt;?php the_facebook_like() ?&gt;
&lt;/div&gt;
</pre>

Funkci� `the_facebook_like()` je možné volat tam, kde je dostupná proměnná $post (`single.php`, `page.php` atd.).

 [1]: http://developers.facebook.com/docs/reference/plugins/like "Facebook Like Button"
 [2]: http://www.facebook.com/ "Facebook"