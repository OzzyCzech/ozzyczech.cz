---
title: Download all subreddit images
date: 2019-10-15
tags: [bash, redddit, curl]
---


# Download all subreddit images

```bash
#!/usr/bin/env bash

subreddit=${1-catpictures} && json=${subreddit}
dir=`realpath ${2-.}`
pages=${3-1}

printf "Download subreddit \e[1;31m/r/${subreddit}\e[m images to \e[1;31m${dir}\e[m\n"
mkdir -p ${dir}
# curl -sS "https://www.reddit.com/r/${subreddit}.json?limit=100" -A 'random' > ${dir}/${subreddit}.json

for i in $(seq ${pages});
do

	printf "\e[1;90mProcessing from ${dir}/${json}.json\e[m\n"

	images=$(cat ${dir}/${json}.json | jq -r ".data.children[].data.url" | egrep '\.jpg$|\.png$|\.gif$')
	for img in ${images}
	do
		file=$(basename ${img})

		if [[ ! -f "${dir}/${file}" ]]; then
			echo "- ${img} => ${file}"
			curl -sS -A 'random' ${img} -o ${dir}/${file}
		fi

	done;

	json=$(cat ${dir}/${json}.json | jq -r ".data.after")

	if [[ ${json} == "" ]]; then
		exit 0;
	fi

	if [[ ! -f "${dir}/${json}.json" ]]; then
		echo "DOWNLOAD : https://www.reddit.com/r/${subreddit}.json?after=${json}&limit=100"
		curl -sS "https://www.reddit.com/r/${subreddit}.json?after=${json}&limit=100" -A 'random' > ${dir}/${json}.json
	fi;

done;
```

usage 

```bash
./download.sh catpictures ~/Downloads/
```
* https://stedolan.github.io/jq/