---
title: MariaDB and Docker Compose
date: 2018-10-24 17:30:00
---

# MariaDB and Docker Compose

This is a short instructions how to run [MariaDB Docker](https://hub.docker.com/_/mariadb/) with 
[docker compose](https://docs.docker.com/compose/) and have suitable developer env.

Let's have follow `docker-compose.yml` and two folders `./etc/db` and `./data`

```
version: '3.3'

services:

  mariadb:
    image: mariadb:latest
    environment:
      TZ: Europe/Prague
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: exampledb
    restart: always
    volumes:
      - ./etc/db:/db # shared DB folder
      - ./data/mysql:/var/lib/mysql # database data
      - ./etc/mysql.ini:/etc/mysql/conf.d/my.ini # config file
      - ./etc/db/init.sh:/docker-entrypoint-initdb.d/init.sh # init
    ports:
      - 3306
# php-fpm:
# nginx:
# ...
```

Optionally you can define database with config file - here is mine `./etc/mysql.ini`:

```ini
[mysqld]
character-set-server=utf8
collation-server=utf8_czech_ci
```

## Initializing a fresh instance

Most important is **env** - with **MYSQL_ROOT_PASSWORD** and **MYSQL_DATABASE** variable.
When a container is started for the first time it will execute
files with extensions **.sh**, **.sql** and **.sql.gz** that are 
found in `/docker-entrypoint-initdb.d`. Lets have follow `./etc/db/init.sh` script:

```bash
#!/bin/bash
if [ -f /db/$MYSQL_DATABASE.sql ]; then
  mysql --protocol=socket -uroot -p -p"$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE < /db/$MYSQL_DATABASE.sql
fi
```

This `init.sh` script execute content of sql file with same name as database.
This solution helps you run your project without worrying about init data.
You can commit this file to git and share with all coworkers.

Now it's time run `docker-compose up`

### Connect to database prompt

```bash
docker-compose exec \
 mariadb bash -c 'mysql -u root -p$MYSQL_ROOT_PASSWORD $MYSQL_DATABASE'
```
### Backup database to SQL file

```bash
docker-compose exec \
 mariadb bash -c 'mysqldump -u root --password=$MYSQL_ROOT_PASSWORD  $MYSQL_DATABASE > /db/$MYSQL_DATABASE.sql'
```

### Restore database from SQL file

```bash
docker-compose exec \
 mariadb bash -c 'mysql -u root -p$MYSQL_ROOT_PASSWORD $MYSQL_DATABASE < /db/$MYSQL_DATABASE.sql'
```

### Execute mysql_upgrade after upgrade

```bash
docker-compose exec mariadb bash -c 'mysql_upgrade -uroot -proot'
```

