---
title: Zjištění práv k souboru nebo adresáři v PHP
date: 2012-09-05
tags: [PHP, tip]
---


# Zjištění práv k souboru nebo adresáři v PHP

```
function getPermisions($file) {
  return (is_dir($file) || is_file($file)) ? substr(decoct(fileperms($path)), -4) : '0000';
}
```

Nebo pro kontrolu, zda jsou práva dostatečná:

```
function hasPermisions($path, $permission = 777) {
  $current = substr(decoct(fileperms($path)), $permission > 1000 ? -4 : -3);
  return ($current > $permission);
}
```
