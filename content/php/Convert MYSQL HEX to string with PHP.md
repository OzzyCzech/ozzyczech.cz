---
title: Convert MYSQL HEX to string with PHP
date: 2019-11-27
---

# Convert MYSQL HEX to string with PHP

Hexadecimal literal values are written using `X'val'` or `0xval` notation, where val contains hexadecimal digits (0..9, A..F). 
 
```sql
SELECT HEX('EXAMPLE'), X'4558414D504C45';
```

```text
+----------------+-------------------+
| HEX('EXAMPLE') | X'4558414D504C45' |
+----------------+-------------------+
| 4558414D504C45 | EXAMPLE           |
+----------------+-------------------+
```

You can also transform this value `HEX` value also with PHP instead of `SELECT *, HEX(column) as column_name ... ` SQL.

```php
<?php
function hexToString($hex) {
	$string = '';
	for ($i = 0; $i < strlen($hex); $i++) {
		$string .= dechex(ord($hex[$i]));
	}
	return $string;
}
```

Inserting string to the table will be easy just `"INSERT INTO table (column) VALUES HEX(?)"` or with [Gexadecimal Literals](https://dev.mysql.com/doc/refman/8.0/en/hexadecimal-literals.html) string starting with `0x`.

