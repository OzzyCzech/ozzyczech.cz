<!--
title : Jak okopírovat adresář s celým obsahem v PHP
author : Roman Ožana <ozana@omdesign.cz>
date : 15.10.2011 05:35:25
tags : PHP, recursive copy of directory, Recursive Copy Of Folder
-->

# Jak okopírovat adresář s celým obsahem v PHP

Složitých a ošklivých funkcí pro kopírování adresářů a podadresářů vč. jejich obsahu jsem viděl několik. Tahle celkem běžná úloha jde vyřešit i jednoduše pomocí [PHP iterátoru][1]:

<pre>$source = "/foo/bar/dir";
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
</pre>

 [1]: http://cz.php.net/manual/en/spl.iterators.php