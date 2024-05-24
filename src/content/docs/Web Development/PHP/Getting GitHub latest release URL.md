---
title: Getting GitHub latest release URL
---

Do you need **Download Latest Version** button? Try follow PHP code:

```php
function getLatestTagUrl($repository, $default = 'master') {
    $file = @json_decode(@file_get_contents("https://api.github.com/repos/$repository/tags", false,
        stream_context_create(['http' => ['header' => "User-Agent: Vestibulum\r\n"]])
    ));
    return sprintf("https://github.com/$repository/archive/%s.zip", $file ? reset($file)->name : $default);
}

echo getLatestTagUrl('sphido/sphido');
// will return https://github.com/sphido/sphido/archive/v0.2.1.zip
```