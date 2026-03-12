---
title: TinyMCE for user description
---

By default, the WordPress user description is plain text. The following PHP code adds the WYSIWYG editor TinyMCE to
display the author description in the user profile.

Simply add the code to `function.php` in your template:

```php
class CustomUserProfile {

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

public function initDescriptionWysywig($options) {
  if ( ! class_exists('_WP_Editors' ) )
    require_once( ABSPATH . WPINC . '/class-wp-editor.php' );

  $options = _WP_Editors::parse_settings('description', $this->tinymceOptions);
  _WP_Editors::editor_settings('description', $options);
  wp_print_styles('editor-buttons');
}

}
new CustomUserProfile();
```
