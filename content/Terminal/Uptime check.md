# Uptime check

Let's create `uptime` file with follow content

```shell
#!/usr/bin/env bash  
  
format=$(cat <<EOF  
---------------------------------------------  
Uptime of $@ is  
---------------------------------------------  
      time_namelookup:  %{time_namelookup}s  
        time_connect:  %{time_connect}s  
     time_appconnect:  %{time_appconnect}s  
    time_pretransfer:  %{time_pretransfer}s  
       time_redirect:  %{time_redirect}s  
  time_starttransfer:  %{time_starttransfer}s  
---------------------------------------------  
          time_total:  %{time_total}s  
EOF)  
  
curl -w "$format" -o /dev/null -s "$@"
```

Then you can run:

```shell
$ uptime https://www.google.com
```

And you get following results:

```text
---------------------------------------------
Uptime of https://www.google.com is
---------------------------------------------
      time_namelookup:  0.021137s
        time_connect:  0.033610s
     time_appconnect:  0.064180s
    time_pretransfer:  0.064246s
       time_redirect:  0.000000s
  time_starttransfer:  0.134371s
---------------------------------------------
          time_total:  0.136121s
```


Format can be also loded from file

```shell
curl -w "@format.txt" -o /dev/null -s https://www.google.com
```

[StackOverflow[]()](https://stackoverflow.com/a/22625150/355316)