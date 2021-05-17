# Makefile

GENERATED_DIR := vegaapiclient/generated

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- black:      autoformat non-auto-generated py files"
	@echo "- blackcheck: check non-auto-generated py files"
	@echo "- coverage:   make coverage report"
	@echo "- dist:       build and upload to PyPI"
	@echo "- dist_test:  build and upload to test-PyPI"
	@echo "- flake8:     run flake8"
	@echo "- mypy:       run mypy"
	@echo "- test:       run pytest"
	@echo "- clean:      remove the generated dir"

.PHONY: black
black:
	@black --exclude generated -l 79 vegaapiclient/ tests/

.PHONY: blackcheck
blackcheck:
	@black --exclude generated -l 79 --check vegaapiclient/ tests/

.PHONY: coverage
coverage: | varcheck pipenv_install
	@pipenv run pytest --cov=vegaapiclient --cov-report=term --cov-report=html:coverage tests/

.PHONY: check_dist
check_dist:
	@bash check_dist.sh

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
	@echo twine upload --repository-url https://test.pypi.org/legacy/ dist/*

.PHONY: flake8
flake8:
	@find tests/ vegaapiclient/ -name generated -prune -o -name '*.py' -print |xargs flake8

.PHONY: mypy
mypy:
	@env MYPYPATH=. mypy --ignore-missing-imports . | grep -vE '(^Found|/generated/|: note: )' ; \
	code="$$?" ; test "$$code" -ne 0

.PHONY: pipenv_install
pipenv_install:
	@pipenv --bare install # 1>/dev/null 2>&1

.PHONY: test
test: | varcheck pipenv_install
	@pipenv run pip install -e .
	@env PYTHONPATH=. pipenv run pytest tests/

.PHONY: varcheck
varcheck:
	@if test -z "$$GRPC_NODE" ; then echo "Please set GRPC_NODE (e.g. node.xx.vega.zzz:1111)." ; exit 1 ; fi
	@if test -z "$$WALLETSERVER" ; then echo "Please set WALLETSERVER (e.g. https://wallet.xx.vega.zzz)." ; exit 1 ; fi

.PHONY: clean
clean:
	@rm -rf "$(GENERATED_DIR)"
