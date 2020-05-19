# Makefile

GENERATED_DIR := vegaapiclient/generated
VENV := /tmp/venv-python-api-client

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- coverage:  make coverage report"
	@echo "- dist:      build and upload to PyPI"
	@echo "- dist_test: build and upload to test-PyPI"
	@echo "- flake8:    run flake8 on (non-auto-generated) py files"
	@echo "- mypy:      run mypy"
	@echo "- venv:      Create a python virtualenv and install requirements"
	@echo "- clean:     remove the generated dir"

.PHONY: coverage
coverage: varcheck
	@env PYTHONPATH=. pytest --cov=vegaapiclient --cov-report=term --cov-report=html:coverage tests/

.PHONY: dist
dist:
	@rm -rf dist && mkdir dist
	@python3 setup.py sdist bdist_wheel
	@twine upload dist/*

.PHONY: dist_test
dist_test:
	@rm -rf dist && mkdir dist
	@python3 setup.py sdist bdist_wheel
	@twine upload --repository-url https://test.pypi.org/legacy/ dist/*

.PHONY: flake8
flake8:
	@find -name build -prune -o -name generated -prune -o -name '*.py' -print0 | xargs -0r flake8

.PHONY: mypy
mypy:
	@env MYPYPATH=. mypy --ignore-missing-imports . | grep -vE '(^Found|/generated/|: note: )' ; \
	code="$$?" ; test "$$code" -ne 0

.PHONY: test
test: varcheck
	@env PYTHONPATH=. pytest tests/

.PHONY: varcheck
varcheck:
	@if test -z "$$GRPC_NODE" ; then echo "Please set GRPC_NODE (e.g. node.xx.vega.zzz:1111)." ; exit 1 ; fi
	@if test -z "$$WALLETSERVER" ; then echo "Please set WALLETSERVER (e.g. https://wallet.xx.vega.zzz)." ; exit 1 ; fi

.PHONY: venv
venv:
	@test -d "$(VENV)" || virtualenv -p /usr/bin/python3 "$(VENV)"
	@. "$(VENV)/bin/activate" && \
	pip install -r requirements.txt 1>/dev/null

.PHONY: clean
clean:
	@rm -rf "$(GENERATED_DIR)"
