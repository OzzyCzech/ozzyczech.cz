---
title: Yarn tips and tricks
date: 2020-10-02
tags: [yarn, npm, javascript]
---

# Yarn tips and tricks

## Chose Yarn version

Let’s find out your current Yarn version with `yarn --version`. 
If your local Yarn version is 1.22 and above go ahead and type-in:

```shell
yarn set version berry
```

This should fetch [Yarn 2](https://yarnpkg.com/) and show you an output as follows:

```txt
Resolving berry to a url...
Downloading https://github.com/yarnpkg/berry/raw/master/packages/berry-cli/bin/berry.js...
Saving it into /Volumes/Work/web/.yarn/releases/yarn-berry.cjs...
Updating /Volumes/Work/web/.yarnrc.yml...
Done!
```

You can downgrade back with follow:

```shell
yarn set version 1.22.5
```

## Upgrade all npm packages interactively

This is similar to [npm-check interactive](https://www.npmjs.com/package/npm-check-interactive) update mode. 
It provides an easy way to update outdated packages


```shell
yarn upgrade-interactive --latest 
```

Will looks like follow:

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

## Offline package mirrors

Yarn can maintain offline copies of your packages for more repeatable and reliable build.
Create `.yarnrc` file with follow content:

```yaml
yarn-offline-mirror "./.npm"
yarn-offline-mirror-pruning true
--install.prefer-offline true
--install.dev true
```

All npm packages will be saved to `.npm` folder locally.