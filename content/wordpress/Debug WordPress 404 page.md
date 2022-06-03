# Debug WordPress 404 page

Insert following code to `functions.php` for debuging 404 page:

```php
ini_set('error_reporting', -1);
ini_set('display_errors', 'On');

add_action(
	'parse_request',
	function (&$wp) {
		global $wp_rewrite;

		printf('<h2>rewrite rules</h2><pre>%s</pre>', var_export($wp_rewrite->wp_rewrite_rules(), true));
		printf('<h2>permalink structure</h2><pre>%s</pre>', var_export($wp_rewrite->permalink_structure, true));
		printf('<h2>page permastruct</h2><pre>%s</pre>', var_export($wp_rewrite->get_page_permastruct(), true));
		printf('<h2>matched rule and query</h2><pre>%s</pre>', var_export($wp->matched_rule, true));
		printf('<h2>matched query</h2><pre>%s</pre>', var_export($wp->matched_query, true));
		printf('<h2>request</h2><pre>%s</pre>', var_export($wp->request, true));

		global $wp_the_query;
		printf('<h2>the query</h2><pre>%s</pre>', var_export($wp_the_query, true));
	}
);

add_action(
	'template_redirect',
	function () {
		global $wp_filter;
		printf(
			'<h2>template redirect filters</h2><pre>%s</pre>',
			var_export($wp_filter[current_filter()], true)
		);
	}, 99999
);

add_filter(
	'template_include',
	function ($template) {

		printf(
			'<h2>template file selected</h2><pre>%s</pre>',
			var_export($template, true)
		);
		exit();
	}
);
```

#Wordpress 