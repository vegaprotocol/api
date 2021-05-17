# Makefile

.PHONY: default
default:
	@pipenv --bare sync
	@pipenv --bare clean
	@env PYTHONPATH=../../clients/python:. pipenv run python3 submit-order.py --ci
