<!--
title : WordPress: register and setup witgets from PHP code
author : Roman Ožana <ozana@omdesign.cz>
date : 29.1.2013 17:30:26
tags : en, PHP, Widgets, wordpress
-->

# WordPress: register and setup witgets from PHP code

PHP driven registration of the in can be quite confusing. There is my way how to handle it:

<pre>class Widgets {

 private $widgets = array();
 private $options = array();

 public function __construct() {
  $this-&gt;options = wp_get_sidebars_widgets();
 }

 public function unregisterAllWidgets() {
  foreach ($this-&gt;options as $name =&gt; $values)
   $this-&gt;options[$name] = array();
 }

 public function cleanWidgetSettings($type, $multi = null) {
  $this-&gt;widgets[$type] = array();
  if ($multi !== null) $this-&gt;widgets[$type]['_multiwidget'] = (int)(bool)$multi;
 }

 public function setMultiWidget($type, $val = 1) {
  $this-&gt;widgets[$type]['_multiwidget'] = $val;
 }

 public function add($type, array $options, $area = null) {
  $this-&gt;widgets[$type][] = $options;
  if ($area !== null) {
   if (array_key_exists($area, $this-&gt;options) === false) {
    throw new Exception('Widget area ' . $area . ' not exists.');
   }
   end($this-&gt;widgets[$type]);
   $this-&gt;options[$area][] = $type . '-' . key($this-&gt;widgets[$type]);
  }
 }

 public function __destruct() {
  foreach ($this-&gt;widgets as $name =&gt; $settings) {
   if (!array_key_exists('_multiwidget', $settings)) $settings['_multiwidget'] = 1;
   update_option('widget_' . $name, $settings);
  }
  wp_set_sidebars_widgets($this-&gt;options);
 }

}</pre>

Following code is an example how to use `class Witgets`:

<pre>$widgets = new Widgets();
$widgets-&gt;unregisterAllWidgets();

$widgets-&gt;add(
 'text',
 array(
  'title' =&gt; 'About us',
  'text' =&gt; 'Simple text about us',
  'filter' =&gt; true,
  'classes' =&gt; '',
  'ids' =&gt; null,
 ),
 'footer-1'
);

// ...</pre>

This code need to be call only once. Put your code to `function.php` to `after_switch_theme` action:

<pre>add_action(
 'after_switch_theme', function () {
  $widgets = new Widgets();
  $widgets-&gt;unregisterAllWidgets();
  // ...
 }
);</pre>

https://gist.github.com/4663766/ <p</p>