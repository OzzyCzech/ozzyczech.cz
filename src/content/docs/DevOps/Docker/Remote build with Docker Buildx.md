---
title: Remote build with Docker Buildx
---

## Create builder instance on remote machine

```shell
docker buildx create \
  --name MyBuilder \
  --driver docker-container \
  --platform linux/amd64 \
  ssh://user@remote-machine
```

## Use the builder instance

```shell
docker buildx build \
  --builder MyBuilder \
  --load .
```

## Switch to the builder instance

To switch to the builder instance, use the following command:

```shell
docker buildx use MyBuilder
```

More info: [Docker Buildx documentation](https://docs.docker.com/build/builders/drivers/remote/)
