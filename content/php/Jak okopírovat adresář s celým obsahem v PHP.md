---
title: Jak okopírovat adresář s celým obsahem v PHP
date: 2011-10-15
tags: [PHP]
---

# Jak okopírovat adresář s celým obsahem v PHP

Složitých a ošklivých funkcí pro kopírování adresářů a podadresářů vč. jejich obsahu jsem viděl několik. Tahle celkem běžná úloha jde vyřešit i jednoduše pomocí [PHP iterátoru](http://cz.php.net/manual/en/spl.iterators.php):

```php
$source = "/foo/bar/dir";
$dest= "/dest/dir";

foreach (
 $iterator = new RecursiveIteratorIterator(
  new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS),
  RecursiveIteratorIterator::SELF_FIRST) as $item
) {
  if ($item->isDir()) {
    mkdir($dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
  } else {
    copy($item, $dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
  }
}
```