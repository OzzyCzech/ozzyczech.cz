# Download website mirror with wget

```shell
wget --mirror \
     --convert-links \
     --adjust-extension \
     --page-requisites \
     --no-parent \
     --no-check-certificate http://example.com
```

#wget