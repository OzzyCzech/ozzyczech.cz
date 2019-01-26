all:
	yarn install --production --no-color
	yarn run build

deploy: 
	git commit --allow-empty -m "Deploy `date +%F-%T`"
	git push
	
PHONY: all deploy
