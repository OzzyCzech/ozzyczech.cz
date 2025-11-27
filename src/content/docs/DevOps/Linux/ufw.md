---
title: "UFW (Uncomplicated Firewall) Basics"
---

UFW (Uncomplicated Firewall) is a user-friendly front-end for managing iptables firewall rules on Linux systems. It
simplifies the process of configuring a firewall by providing an easy-to-use command-line interface.

```shell
ufw enable
ufw default allow outgoing
ufw default deny incoming
```

### Allow SSH connections

```shell
ufw allow ssh
ufw allow 22
```

Show all rules:

```shell
ufw status verbose
```

### Delete a rule

Remove existing rule:

```shell
ufw delete allow 3002
```

### Disable UFW

```shell
ufw disable
```