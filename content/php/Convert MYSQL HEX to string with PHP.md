---
title: Convert MYSQL HEX to string with PHP
date: 2019-11-27
tags: [PHP, mysql]
---

# Convert MYSQL HEX to string with PHP

[Hexadecimal literal](https://dev.mysql.com/doc/refman/8.0/en/hexadecimal-literals.html) values are 
written using `X'string'` or `0xstring` notation, where string contains hexadecimal digits (`0..9, A..F`). 
 
```sql
SELECT HEX('EXAMPLE'), X'4558414D504C45';
```

```
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

Inserting string to the table will be easy just `"INSERT INTO table (column) VALUES HEX(?)"` or with [Hexadecimal Literal](https://dev.mysql.com/doc/refman/8.0/en/hexadecimal-literals.html) string starting with `0x` or `X'string'`.

