---
title: Install node with multi-stage Dockerfile
---
My Dockerfile uses a multi-stage build pattern to optimize the final image size.
The first stage uses the official Node.js slim image to build a temporary 
image with Node.js installed. The second stage uses a minimal Debian base image.

In the second stage, it avoids re-installing Node by selectively copying only the
specific binaries and libraries needed to run Node.js from the temporary node image.

Specifically, it copies:

* The node and npm binaries from `/usr/local/bin/`
* The core Node.js libraries from `/usr/local/lib/`
* The `npm` packages from `/usr/local/lib/node_modules/`


```dockerfile
FROM node:current-slim as node
FROM debian:bookworm-slim

---
title: Install Node
---COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/include/node /usr/local/include/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
---
title: Install yarn
---COPY --from=node /opt/yarn-v*/bin/* /usr/local/bin/
COPY --from=node /opt/yarn-v*/lib/* /usr/local/lib/
---
title: Link npm and yarn
---RUN ln -vs /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -vs /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

---
title: install whatever you need e.g. PHP
---
```
