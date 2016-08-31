---
title: Getting GitHub latest release URL
date: 2014-09-28
tags: [github, PHP, tip]
---

# Getting GitHub latest release URL

Do you need **Download Latest Version** button? Try follow PHP code:

```
function getLatestTagUrl($repository, $default = 'master') {
    $file = @json_decode(@file_get_contents("https://api.github.com/repos/$repository/tags", false,
        stream_context_create(['http' => ['header' => "User-Agent: Vestibulum\r\n"]])
    ));
    return sprintf("https://github.com/$repository/archive/%s.zip", $file ? reset($file)->name : $default);
}

echo getLatestTagUrl('OzzyCzech/vestibulum');
// will return https://github.com/OzzyCzech/vestibulum/archive/v0.2.1.zip
```
