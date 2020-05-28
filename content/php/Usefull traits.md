---

title: Usefull traits
date: 2020-04-02
tags: [PHP, Traits]
---



# Usefull traits

## Get class_basename trait

```php
trait ClassBasename {
  public static function class_basename() {
		return substr(strrchr('\\' . static::class, '\\'), 1);
  }
}
```

This trait returns class basename. If you have e.g. class `something\\class\\path\\MyClass` it will returns only `MyClass`.

## Get class_namespace trait

```php
trait ClassNamespace {
  public static function class_namespace() {
		return trim(substr(static::class, 0, strrpos('\\' . static::class, '\\')), '\\');
  }
}
```

This trait returns class namespace. If you have e.g. class `something\\class\\path\\MyClass` it will returns only `something\\class\\path`.

