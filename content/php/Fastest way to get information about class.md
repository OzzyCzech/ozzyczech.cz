---
title: Usefull traits
---



# Usefull traits

## Get class_basename trait

```php
trait ClassBasename {
  public static class_basename() {
    return substr(strrchr(get_called_class(), '\\'), 1)
  }
}
```

## Get class_namespace  trait

```php
trait ClassNamespace {
  public static class_namespace() {
		return substr(get_called_class(), 0, strrpos(get_called_class(), '\\'))
  }
}
```

