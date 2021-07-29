# Makefile

.PHONY: default
default:
	@pipenv --bare sync
	@pipenv --bare clean
	@find . -name '*.py' | while read -r pyscript ; do \
		env PYTHONPATH=../../clients/python:. pipenv run python3 "$$pyscript" || exit 1 ; \
	done

.PHONY: ci
ci:
	@pipenv --bare sync
	@pipenv --bare clean
	@find . -name '*.py' | while read -r pyscript ; do \
		env PYTHONPATH=../../clients/python:. pipenv run python3 "$$pyscript" --ci || exit 1 ; \
	done
