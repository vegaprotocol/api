# Makefile

GENERATED_DIR := vegaapiclient/generated

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- check_dist: check file counts in tgz and whl packages"
	@echo "- dist:       build and upload to PyPI"
	@echo "- dist_test:  build and upload to test-PyPI"
	@echo "- test:       run pytest"
	@echo "- clean:      remove the generated dir"

.PHONY: check_dist
check_dist:
	@bash check_dist.sh

.PHONY: coverage
coverage:
	@if test -z "$$GRPC_NODE" ; then echo "Please set GRPC_NODE (e.g. node.xx.vega.zzz:1111)." ; exit 1 ; fi
	@if test -z "$$WALLETSERVER" ; then echo "Please set WALLETSERVER (e.g. https://wallet.xx.vega.zzz)." ; exit 1 ; fi
	@rm -rf .coverage.d
	@pipenv --bare install # 1>/dev/null 2>&1
	@pipenv run pip install -e .
	@find . -name __pycache__ | xargs -r rm -rf
	@find . -name  '*.pyc' -o -name '*.so' | xargs -r rm -rf
	@pipenv run pytest --cov=vegaapiclient --cov-report=term --cov-report=html:.coverage.d tests/

.PHONY: dist
dist:
	@if test -z "$$TWINE_USERNAME" -o -z "$$TWINE_PASSWORD" ; then \
		echo "Please set TWINE_USERNAME and TWINE_PASSWORD." ; \
		exit 1 ; \
	fi
	@rm -rf build dist && mkdir build dist
	@python3 setup.py sdist bdist_wheel
	@twine upload dist/*

.PHONY: dist_test
dist_test:
	@if test -z "$$TWINE_USERNAME" -o -z "$$TWINE_PASSWORD" ; then \
		echo "Please set TWINE_USERNAME and TWINE_PASSWORD." ; \
		exit 1 ; \
	fi
	@rm -rf build dist && mkdir build dist
	@python3 setup.py sdist bdist_wheel
	@twine upload --repository-url https://test.pypi.org/legacy/ dist/*

.PHONY: pylint
pylint:
	@pipenv --bare install # 1>/dev/null 2>&1
	@pipenv run pip install -e .
	@pipenv run pylint --ignore=generated vegaapiclient

.PHONY: test
test:
	@if test -z "$$GRPC_NODE" ; then echo "Please set GRPC_NODE (e.g. node.xx.vega.zzz:1111)." ; exit 1 ; fi
	@if test -z "$$WALLETSERVER" ; then echo "Please set WALLETSERVER (e.g. https://wallet.xx.vega.zzz)." ; exit 1 ; fi
	@pipenv --bare install # 1>/dev/null 2>&1
	@pipenv run pip install -e .
	@env PYTHONPATH=. pipenv run pytest tests/

.PHONY: clean
clean:
	@rm -rf "$(GENERATED_DIR)"
