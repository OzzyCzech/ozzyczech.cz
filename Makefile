all:
	yarn install --dev --no-color
	rm -rf ./public
	yarn run build

update: 
	git commit -a -m "autoupdate `date +%F-%T`"
	git push
PHONY: all update