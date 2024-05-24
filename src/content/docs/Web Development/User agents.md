---
title: User agents
---

To change the user agent with the #httpie or #curl, you can use the `--user-agent` option followed by the desired user agent string:

```shell
curl --user-agent 'My User Agent' example.com
http --user-agent='My User Agent' example.com
```

### Google Chrome

```shell
curl --user-agen 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
```

```shell
http --user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
```

### Mozilla Firefox

```shell
curl --user-agen 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0'
```

```shell
http --user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0'
```

### Apple Safari

```shell
curl --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
```

```shell
http --user-agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
```

### Microsoft Edge

```shell
curl --user-agent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.864.48 Safari/537.36 Edg/93.0.864.70'
```

```shell
http --user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.864.48 Safari/537.36 Edg/93.0.864.70'
```
