all:
	npm install
	rm -rf ./public
	npm run build

autoupdate: 
	git commit -a -m "autoupdate `date +%F-%T`"
	git push
	
PHONY: all autoupdate
