---
title: Class traits
---

## Class basename trait

```php
trait ClassBasename {
  public static function class_basename() {
		return substr(strrchr('\\' . static::class, '\\'), 1);
  }
}
```

This trait returns class basename. If you have e.g. class `something\\class\\path\\MyClass` it will return only `MyClass`.

## Class namespace trait

```php
trait ClassNamespace {
  public static function class_namespace() {
		return trim(substr(static::class, 0, strrpos('\\' . static::class, '\\')), '\\');
  }
}
```

This trait returns class namespace. If you have e.g. class `something\\class\\path\\MyClass`
it will return only `something\\class\\path`.