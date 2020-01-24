---
title: Docker cleanup guide
date: 24. 1. 2020
tags: [Docker]
---

# Docker cleanup guide

Docker **doesn't remove unused objects** such as containers, images, volumes, and networks unless you explicitly tell it to do so.
How To Remove them?

## Removing All Unused Objects
 
Remove stopped containers, all dangling images, and all unused networks:

```bash
docker system prune
```

```text
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] 
```

You can also include all unused volumes, then add `--volumes`:
 
```bash
docker system prune --volumes
```

## Docker Containers

```bash
docker container ls -a
```
#### Remove selected container

```bash
docker container rm [CONTAINER ID]
```

#### Remove all stopped containers

To remove all stopped containers use:

```bash
docker container prune
```

You can also list what will be removed:

```bash
docker container ls -a --filter status=exited --filter status=created 
```

#### Stop and remove all containers

```bash
docker container stop $(docker container ls -aq)
docker container rm $(docker container ls -aq)
```

## Docker Images

You can list them:

```bash
docker image ls
```

#### Remove selected image

```bash
docker image rm [IMAGE ID]
```

#### Remove dangling images

A dangling image is an image that is not tagged and is not used by any container.
You can remove them by:

```bash
docker image prune
```

#### Remove all unused images

To remove all images which are not referenced by any existing container, 
not just the dangling ones, use the `prune` command with the `-a` flag:

```bash
docker image prune -a
```

## Docker Networks

You can list them with:

```bash
docker network ls
```

#### Remove selected network

```bash
docker network rm [NETWORK ID]
```

#### Remove all unused networks

Use the `docker network prune` command to remove all unused networks.

Remove all networks that are created more than 12 hours ago:

```bash
docker network prune -a --filter "until=12h"
```

## Docker Volumes

```bash
docker volume ls
```

#### Remove selected Volume

```bash
docker volume rm [VOLUME NAME]
```

#### Remove all unused volumes

```bash
docker volume prune
```