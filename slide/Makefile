.PHONY: docs

install:
	yarn

local-server:
	yarn run start

docs:
	rm -rf docs
	yarn run build
	cp -r assets docs/
