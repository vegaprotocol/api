# Makefile

.PHONY: default
default:
	@find . -name '*.sh' | while read -r shscript ; do \
		"$$shscript" || exit 1 ; \
	done

.PHONY: ci
ci:
	@find . -name '*.sh' | while read -r shscript ; do \
		"$$shscript" --ci || exit 1 ; \
	done
