# Generate SSH key

Ed25519 uses elliptic curve cryptography with good security and performance.

## Create new key

```shell
ssh-keygen -t ed25519 -C "$(whoami)@$(hostname)" -P "" -f ~/.ssh/id_ed25519
```

or if you prefer email address

```shell
ssh-keygen -t ed25519 -C "your@email.com" -P "" -f ~/.ssh/id_ed25519
```

Start the SSH agent in the background:

```shell
eval "$(ssh-agent -s)"
```

Update your `~/.ssh/config`:

```text
Host *
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_ed25519
 IdentityFile ~/.ssh/id_rsa
```

Add the private key to the SSH agent on macOS:

```shell
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

## Copy public key to clipboard

```shell
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Once you have created a new SSH public key, this key can be copied to the `.ssh/authorized_keys` file on remote hosts
to allow remote login or upload your key to [GitHub](https://github.com/settings/keys)

```shell
ssh-copy-id -i ~/.ssh/id_ed25519.pub root@remote.server.address
```

[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)