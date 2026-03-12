---
title: File or folder permission
---

Function to get permissions of file or folder in PHP.

```php
function getPermission($path) {
  return (is_dir($path) || is_file($path)) ? substr(decoct(fileperms($path)), -4) : '0000';
}
```

or you can check if permissions are sufficient:

```php
function hasPermission($path, $permission = 777) {
  $current = substr(decoct(fileperms($path)), $permission > 1000 ? -4 : -3);
  return ($current > $permission);
}
```
