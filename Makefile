all:
	yarn install --production --no-color
	yarn run build

deploy: 
	git commit --allow-empty -m "Deploy `date +%F-%T`"
	git push

clean:
	rm -rf node_modules
	rm -rf public
	
PHONY: all deploy clean
