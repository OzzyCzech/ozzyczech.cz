---
title: Copying a folder with contents
---

I've seen several complicated and ugly functions for copying directories and subdirectories, including their contents.
This fairly common task can be solved simply with a [PHP iterator](http://cz.php.net/manual/en/spl.iterators.php)::

```php
function copyAll($src, $dst) {
  $iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($src, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::SELF_FIRST
  );

  foreach ($iterator as $item) {
    if ($item->isDir()) {
      mkdir($dst . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
    } else {
      copy($item, $dst . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
    }
  }
}
```
