# SSH Key with Ed25519

Ed25519 uses elliptic curve cryptography with good security and performance.

## Create new key

```shell
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C "$(whoami)@$(hostname)"
```

or if you prefer email address

```shell
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C "your@email.com"
```

Start the SSH agent in the background:

```shell
eval "$(ssh-agent -s)"
```

Update your  `~/.ssh/config`:

```ini
Host *
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_rsa
 IdentityFile ~/.ssh/id_ed25519
```

Add the private key to the SSH agent on macOS:

```shell
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```
[]()
## Copy public key to clipboard

```shell
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Upload your key to [GitHub](https://github.com/settings/keys)

[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)