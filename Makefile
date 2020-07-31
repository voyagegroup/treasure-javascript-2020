.PHONY: docs

setup:
	$(MAKE) -C slide install

docs:
	$(MAKE) -C slide $@
	rm -rf docs
	cp -r slide/docs .