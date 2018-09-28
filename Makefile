all:
	yarn install --dev --no-color
	rm -rf ./public
	yarn run build
PHONY: all