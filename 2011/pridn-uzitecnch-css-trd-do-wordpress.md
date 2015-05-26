<!--
title : Přidání užitečných CSS tříd do WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 10.1.2011 11:43:00
tags : how-to, PHP, programovani, wordpress
-->

# Přidání užitečných CSS tříd do WordPress

Wordpress má několik funkcí, které se starají o generování seznamu CSS tříd. První z nich se jmenuje [body_class][1] a generuje seznam tříd pro tag [body][2]. Její správné použití (v _header.php_) by mělo vypadat takto:

<pre>&lt;body &lt;?php body_class(); ?&gt;&gt;</pre>

Funkce vygeneruje celkem [bohatý seznam][1] různých CSS tříd, v závislosti na právě zobrazeném obsahu. Tyto třídy je pak možné využívat při stylování jak celého webu, tak konkrétní stránky. Výsledný HTML kód vypadá třeba takto:

<pre>&lt;body class="page page-id-4 logged-in"&gt; </pre>

Jenže já si **bohužel nikdy nepamatuji** jaké ID která stránka má. A nepřipadá mi přehledné, stylovat obsah stránek pomocí nicneříkajících čísel. Vždy mi zde prostě chyběl nějaký **dobře zapamatovatelný**, snadno čitelný a jedinečný identifikátor – jakým vždy byl [slug příspěvku][3].

Slug, jako třídu, přidáte jednoduše! Do _function.php_ ve svém template stačí přidat následující kód:

<pre>function body_class_filter($class)
{
  global $post;
  if (is_page())
  {
    $class[] = $post-&gt;post_name;
  }
  // + bonus přidávající třídu se jménem webu
  $class[] = sanitize_title(get_option('blogname')); 
  return $class;
}

add_filter('body_class', 'body_class_filter');</pre>

Alternativní způsob je ještě jednodušší a počítá s využitím funkce [post_class][4]&#160; v _page.php_. Na patřičné místo (obvykle k nějakému obalovému DIV tagu) stračí vložit:

<pre>&lt;?php post_class(basename(get_permalink())); ?&gt;</pre>

 [1]: http://codex.wordpress.org/Template_Tags/body_class
 [2]: http://www.w3schools.com/tags/tag_body.asp
 [3]: http://codex.wordpress.org/Glossary#Post_Slug
 [4]: http://codex.wordpress.org/Function_Reference/post_class