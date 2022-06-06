# Zjištění práv k souboru nebo adresáři v PHP

```php
function getPermisions($file) {
  return (is_dir($file) || is_file($file)) ? substr(decoct(fileperms($path)), -4) : '0000';
}
```

Nebo pro kontrolu, zda jsou práva dostatečná:

```php
function hasPermisions($path, $permission = 777) {
  $current = substr(decoct(fileperms($path)), $permission > 1000 ? -4 : -3);
  return ($current > $permission);
}
```

#PHP