all:
	yarn install --dev --no-color
	rm -rf ./public
	mkdir -p log public
	yarn run build

autoupdate: 
	git commit -a -m "autoupdate `date +%F-%T`"
	git push
	
PHONY: all autoupdate
