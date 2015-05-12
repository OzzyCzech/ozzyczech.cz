<!--
title : Get GIT stats in JSON
author : Roman Ožana <ozana@omdesign.cz>
date : 10.7.2013 08:34:08
-->

# Get GIT stats in JSON

One commit per line in valid JSON format

<pre>git rev-list --all --pretty=format:'{"commit_hash":"%H","commit_hash_abbreviated":"%h","tree_hash":"%T","tree_hash_abbreviated":"%t","parent":{"hashes":"%P","hashes_abbreviated":"%p"},"author":{"name":"%an","email":"%ae","date":"%ad","date_rfc2822_style":"%aD","date_relative":"%ar","date_unix_timestamp":"%at","date_iso_8601":"%ai"},"committer":{"name":"%cn","email":"%ce","date":"%cd","date_relative":"%cr"},"subject":"%s"}'</pre>