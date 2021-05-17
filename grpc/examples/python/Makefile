# Makefile

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- black:       autoformat non-auto-generated py files"
	@echo "- blackcheck:  check non-auto-generated py files"
	@echo "- examples_ci: run example python scripts in CI mode"
	@echo "- flake8:      run flake8"
	@echo "- mypy:        run mypy"

.PHONY: black
black:
	@black -l 79 .

.PHONY: blackcheck
blackcheck:
	@black --check .

.PHONY: flake8
flake8:
	@flake8 .

.PHONY: mypy
mypy:
	@env MYPYPATH=. mypy --ignore-missing-imports .

.PHONY: examples_ci
examples_ci:
	@pipenv --bare sync
	@pipenv --bare clean
	@env PYTHONPATH=../../clients/python:. pipenv run python3 submit-order.py --ci
