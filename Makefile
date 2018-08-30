all:
	rm -rf public && mkdir public
	yarn processmd "content/**/*.{yml,md}" --outputDir public --summaryOutput public/summary.json
PHONY: all