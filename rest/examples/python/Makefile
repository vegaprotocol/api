# Makefile

.PHONY: default
default:
	@pipenv --bare sync
	@pipenv --bare clean
	@env PYTHONPATH=../../../grpc/examples/python:. pipenv run python3 submit-order.py --ci
