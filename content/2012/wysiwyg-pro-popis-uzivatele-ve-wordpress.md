---
title: WYSIWYG pro popis uživatele ve Wordpress
date: 29.10.2012 13:33:04
author: Roman Ožana <ozana@omdesign.cz>
tags: PHP, wordpress, WYSIWYG
---


# WYSIWYG pro popis uživatele ve Wordpress

Následující kratičký kód zobrazí #WYSIWYG editor u popisu autora u uživatelského profilu: Kód stačí přidat do `function.php` ve vašem template:


    <?php
    /**
     * WYSIWYG pro uzivatelsky profil Wordpress
     *
     * @author Roman Ozana <ozana@omdesign.cz>
     */
    class CustomUserProfile {
    
      /** @var array */
      private $tinymceOptions = array(
        'teeny' => true,
        'quicktags' => false,
        'media_buttons' => false, 'textarea_rows' => 8,
        'wpautop' => false,
        'tinymce' => array(
          'theme_advanced_buttons1' => 'p, bold, italic, ul, |,link,unlink,code',
          'theme_advanced_buttons2' => '',
          'theme_advanced_buttons3' => '',
          'theme_advanced_buttons4' => '',
        ),
      );
    
      public function __construct() {
        add_action('show_user_profile', array($this, 'initDescriptionWysywig'));
        add_action('edit_user_profile', array($this, 'initDescriptionWysywig'));
      }
    
      /**
       * Wysywig editor take pro description
       *
       * @param $options
       */
      public function initDescriptionWysywig($options) {
        if ( ! class_exists('_WP_Editors' ) )
          require_once( ABSPATH . WPINC . '/class-wp-editor.php' );
    
        $options = _WP_Editors::parse_settings('description', $this->tinymceOptions);
        _WP_Editors::editor_settings('description', $options);
        wp_print_styles('editor-buttons');
      }
    
    }
    new CustomUserProfile();


 #wordpress #php