# My Recommended database structure for OAuth

Here is my recommended database structure for storing consumer and token data on the server side. Example is for Mysql, but can be easily transform to others.

Starts with schema of `users` table:

```sql
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL COMMENT 'User password hashed or empty if is created by oauth',
  `username` varchar(255) NOT NULL COMMENT 'User e-mail',
  `email` varchar(255) NOT NULL COMMENT 'Account username',
  `date` datetime NOT NULL COMMENT 'Date of creation',
  `stamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Registrovaní uživatelé';
```

and follow by `users_oauths` table:

```sql
DROP TABLE IF EXISTS `users_oauths`;
CREATE TABLE `users_oauths` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `users_id` bigint(20) unsigned NOT NULL COMMENT 'Foreign key',
  `created` datetime NOT NULL COMMENT 'When was connection created',
  `oauth_provider` varchar(20) NOT NULL DEFAULT '' COMMENT 'Provider twitter, facebook, github etc.',
  `access_token` varchar(40) NOT NULL DEFAULT '' COMMENT 'Access token',
  `refresh_token` varchar(40) NOT NULL DEFAULT '' COMMENT 'Refresh token',
  `expire_date` datetime NOT NULL COMMENT 'When token expires',
  `response_raw` text CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`),
  CONSTRAINT `users_oauths_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='oAuths connected to the users';
```

Advantages

- If you delete user account, all connected oAuths are deleted also.
- Real user account is created, user can also login via email and password.
- User can connect multiple providers.

SELECT FROM 