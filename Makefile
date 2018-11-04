all:
	npm install # yarn install --dev --no-color
	rm -rf ./public
	npm run build #yarn run build

autoupdate: 
	git commit -a -m "autoupdate `date +%F-%T`"
	git push
	
PHONY: all autoupdate
