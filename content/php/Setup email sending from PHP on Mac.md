# Setup email sending from PHP on Mac

First write in terminal: `which sendmail` wlll return path to sendmail app (in my case `/usr/sbin/sendmail`). Then open `php.ini` file and setup:

```shell
sendmail_path = /usr/sbin/sendmail -t -i
```

Create necessary folder and setup postfix permissions:

```shell
sudo mkdir -p /Library/Server/Mail/Data/spool
sudo /usr/sbin/postfix set-permissions
sudo /usr/sbin/postfix start
```

And check if emails will come:

```shell
php -r "mail('youremail@domain.com', 'subject', 'message', 'From: <youremail@domain.com>' . PHP_EOL);"
```

#macOS #PHP 