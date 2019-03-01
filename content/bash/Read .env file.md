---
title: Read .env file in bash
date: 2019-03-01
---

# Read .env file in bash

Let's have example **.env** file:

```
example=value
example2=value
```

then you can read this file like this:

```bash
#!/usr/bin/env bash

set -o allexport
[[ -f .env ]] && source .env
set +o allexport
```

Warning: All existing variables are overridden by `.env` content.