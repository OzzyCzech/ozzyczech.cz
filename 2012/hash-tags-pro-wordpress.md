<!--
title : Hash tags pro WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 15.9.2012 05:30:00
excerpt : ...($post_id, $matches[1], 'post_tag', false); ten totiž ukládá nalezené tagy k postu. Pokud je poslední hodnota true, provede append (přidání ke stávajícím tagům). Pokud je false, provede nahrazení všech tagů u postu nalezenými <strong>hashtag</strong>y. #php  #plugin  #hash...
tags : hash, PHP, plugin, wordpress
-->

# Hash tags pro WordPress

Napsal jsem velmi jednoduchý plugin, který přidává do podporu pro tagy:

<pre>&lt;?php
/*
Plugin Name: Hashs
Description: Twitter like hash for Wordpress
Version: 1.0
Author: Roman Ozana &lt;ozana@omdesign.cz&gt;
Author URI: http://www.omdesign.cz/
*/
class Hashs {

  const PATTERN = '/\B#([^\s\W#]+)/i';

  /**
   * @param string $content
   * @return string mixed
   */
  public static function processContent($content) {
    return preg_replace(Hashs::PATTERN, '&lt;a href="' . get_home_url(null, '/tag/$1') . '" class="tag"&gt;#$1&lt;/a&gt; ', $content);
  }

  /**
   * Auto hash tags
   *
   * @param $post_id
   * @return bool
   */
  public static function addAutoTags($post_id) {
    $post = get_post($post_id);
    preg_match_all(Hashs::PATTERN, $post-&gt;post_content, $matches);
    if (!isset($matches[1])) return;
    wp_set_object_terms($post_id, $matches[1], 'post_tag', false); // replace
  }
}

add_filter('the_content', array('Hashs', 'processContent'), 1);
add_action('save_post', array('Hashs', 'addAutoTags'));</pre>

Povšimněte si zejména řádku `wp_set_object_terms($post_id, $matches[1], 'post_tag', false);` ten totiž ukládá nalezené tagy k postu. Pokud je poslední hodnota `true`, provede append (přidání ke stávajícím tagům). Pokud je `false`, provede nahrazení všech tagů u postu nalezenými hashtagy.

Zdrojový kód ke stažení zde: https://bitbucket.org/OzzyCzech/omhashtag<p</p>