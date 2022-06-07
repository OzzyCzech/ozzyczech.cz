
for file in content/**/*.md; do
	# echo "{ \"file\": \"$file\" \"date\": \"`git log --reverse --pretty=format:'%ad' --date=short -- $file | head -1`\"}";
	echo $file;
	git log --reverse --pretty=format:"%ad" --date=short -- $file | head -1;
done
