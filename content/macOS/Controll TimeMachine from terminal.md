# Controll TimeMachine from terminal

You can enable `sudo tmutil enable` or disable `sudo tmutil disable` from command line. If you want to run a Time
Machine backup right away, just run `tmutil startbackup` or
`tmutil stopbackup` if you ever want to stop a backup.

## Local snapshots

Follow command will disable and delete "local snapshots":

```shell
sudo tmutil disablelocal
```

You can turn local snapshots back on by running:

```shell
sudo tmutil enablelocal
```

## Exclude selected folders

```shell
sudo tmutil addexclusion ~/Downloads
```

There is interesting property `-p` that controls whether or not folder remains in exclusion when is moved.
If you use the above command with the `-p` flag, then it will not be sticky.

If you are developer there is few quite common folders that should be excluded:

```shell
sudo tmutil addexclusion ~/.composer 
sudo tmutil addexclusion ~/.npm 
sudo tmutil addexclusion ~/Library/Developer 
sudo tmutil addexclusion ~/Library/Containers/com.docker.docker/Data/ 
```

### List excluded

```shell
sudo mdfind "com_apple_backup_excludeItem = 'com.apple.backupd'"
```

## Get Time Machine stats

```shell
tmutil listbackups
```

#macOS #TimeMachine 