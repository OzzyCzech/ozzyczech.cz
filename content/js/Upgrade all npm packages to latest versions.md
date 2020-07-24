---
title: Upgrade all npm packages to latest versions
date: 2013-12-30
tags: [nodejs, npm, yarn, javascript]
---

# Upgrade all npm packages to latest versions

This is similar to [npm-check interactive](https://www.npmjs.com/package/npm-check-interactive) update mode. 
It provides an easy way to update outdated packages

```shell script
yarn upgrade-interactive --latest 
```

```
[1/? Choose which packages to update. (Press <space> to select, <a> to toggle all, <i> to inverse selection)

 devDependencies
❯◯ autoprefixer      6.7.7  ❯  7.0.0          https://github.com/postcss/autoprefixer#readme
 ◯ webpack           2.4.1  ❯  2.5.1          https://github.com/webpack/webpack

 dependencies
 ◯ bull              2.2.6  ❯  3.0.0-alpha.3  https://github.com/OptimalBits/bull#readme
 ◯ fs-extra          3.0.0  ❯  3.0.1          https://github.com/jprichardson/node-fs-extra
 ◯ socket.io         1.7.3  ❯  1.7.4          https://github.com/socketio/socket.io#readme
 ◯ socket.io-client  1.7.3  ❯  1.7.4          https://github.com/Automattic/socket.io-client#readme

```