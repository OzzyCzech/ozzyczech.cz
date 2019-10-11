---
title: Fix casks with `depends_on` that reference pre-Mavericks
date: 2019-10-11
tags: [macOS, Catalina, brew, cask]
---

# Fix casks with `depends_on` that reference pre-Mavericks

If you get an error of the type **Error: Cask 'xxx' definition is invalid: invalid 'depends_on macos' value: ":mountain_lion", 
where hex-fiend-beta can be any cask name, and :mountain_lion any macOS release name, run the following command:

```bash
/usr/bin/find "$(brew --prefix)/Caskroom/"*'/.metadata' -type f -name '*.rb' -print0 \
| /usr/bin/xargs -0 /usr/bin/perl -i -pe 's/depends_on macos: \[.*?\]//gsm;s/depends_on macos: .*//g'
```