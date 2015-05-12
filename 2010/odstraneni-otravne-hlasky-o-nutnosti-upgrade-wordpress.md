<!--
title : Odstranění otravné hlášky o nutnosti upgrade WordPress
author : Roman Ožana <ozana@omdesign.cz>
date : 17.8.2010 11:18:03
tags : how-to, programovani, wordpress
-->

# Odstranění otravné hlášky o nutnosti upgrade WordPress

Určitě ji znáte, otravnou žlutou hlášku, která Vás informuje o nutnosti Aktualizace Wordpress. Zde je postup, jak ji nadobro zrušit (funguje ve všech verzích).

<pre># 2.3 to 2.7:
add_action( 'init', create_function( '$a', "remove_action( 'init', 'wp_version_check' );" ), 2 );
add_filter( 'pre_option_update_core', create_function( '$a', "return null;" ) );

# 2.8 to 3.0:
remove_action( 'wp_version_check', 'wp_version_check' );
remove_action( 'admin_init', '_maybe_update_core' );
add_filter( 'pre_transient_update_core', create_function( '$a', "return null;" ) );

# 3.0:
add_filter( 'pre_site_transient_update_core', create_function( '$a', "return null;" ) );
</pre>

Tenhle kousek kódu stačí vložit do function.php ve Vašem template a máte na vždy pokoj od aktualizací. Netřeba připomínat, že se tomu stejně jednou nevyhnete :).