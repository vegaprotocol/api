# Makefile

SHELL := /usr/bin/env bash

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- preproto:  copy *.proto from vega core repository"

.PHONY: preproto
preproto:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@mkdir -p proto && find "$(VEGACORE)"/proto -maxdepth 1 -name '*.proto' -exec cp '{}' proto/ ';'
	@mkdir -p proto/api && find "$(VEGACORE)"/proto/api -maxdepth 1 -name '*.proto' -exec cp '{}' proto/api/ ';'
	@find proto -name '*.proto' -print0 | xargs -0 sed --in-place -re 's#^[ \\t]+$$##'
	@(cd "$(VEGACORE)" && git describe --tags) >proto/from.txt

.PHONY: proto
proto: proto-cpp proto-javascript proto-python

CPP_GENERATED_DIR := cpp/generated

.PHONY: proto-cpp
proto-cpp:
	@mkdir -p "$(CPP_GENERATED_DIR)"
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--cpp_out="$(CPP_GENERATED_DIR)"
	@find cpp/generated -name '*.pb.cc' -o -name '*.pb.h' -print0 | xargs -0 sed --in-place -re 's#^[ \\t]+$$##'

JAVASCRIPT_GENERATED_DIR := js/generated

.PHONY: proto-javascript
proto-javascript:
	@mkdir -p "$(JAVASCRIPT_GENERATED_DIR)"
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--js_out=import_style=commonjs,binary:$(JAVASCRIPT_GENERATED_DIR)
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--js_out=import_style=commonjs,binary:$(JAVASCRIPT_GENERATED_DIR)
	@sed --in-place \
		-e 's#\.\./\.\./github.com#../../external/github.com#' \
		"$(JAVASCRIPT_GENERATED_DIR)/proto/api"/*.js
	@sed --in-place \
		-e 's#\.\./github.com#../external/github.com#' \
		"$(JAVASCRIPT_GENERATED_DIR)/proto"/*.js
	@(cd js; ./.generate_indexjs.sh >index.js)


PYTHON_GENERATED_DIR := python/vegaapiclient/generated

.PHONY: proto-python
proto-python:
	@mkdir -p "$(PYTHON_GENERATED_DIR)"
	@cd python && make venv && cd .. && source /tmp/venv-api-clients/bin/activate && \
	find proto \
		-name '*.proto' | \
		xargs python3 -m grpc_tools.protoc \
		-I. \
		-Iexternal \
		--python_out="$(PYTHON_GENERATED_DIR)" \
		--grpc_python_out="$(PYTHON_GENERATED_DIR)" && \
	find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs python3 -m grpc_tools.protoc \
		-Iexternal \
		--python_out="$(PYTHON_GENERATED_DIR)" \
		--grpc_python_out="$(PYTHON_GENERATED_DIR)"
	@sed --in-place \
		-e 's#^from proto import#from . import#' \
		"$(PYTHON_GENERATED_DIR)/proto/"*.py
	@sed --in-place \
		-e 's#^from proto import#from .. import#' \
		-e 's#^from proto.api import#from . import#' \
		"$(PYTHON_GENERATED_DIR)/proto/api"/*.py
	@echo -e 'from . import trading_pb2 as trading\nfrom . import trading_pb2_grpc as trading_grpc\n\n__all__ = ["trading", "trading_grpc"]' \
		>"$(PYTHON_GENERATED_DIR)/proto/api/__init__.py"
	@touch "$(PYTHON_GENERATED_DIR)/__init__.py" "$(PYTHON_GENERATED_DIR)/proto/__init__.py"
	@mv "$(PYTHON_GENERATED_DIR)/github/com/mwitkow/go_proto_validators/validator_pb2.py" "$(PYTHON_GENERATED_DIR)/proto/mwitkow_goprotovalidators_validator_pb2.py"
	@mv "$(PYTHON_GENERATED_DIR)/github.com/mwitkow/go_proto_validators/validator_pb2_grpc.py" "$(PYTHON_GENERATED_DIR)/proto/mwitkow_goprotovalidators_validator_pb2_grpc.py"
	@sed --in-place \
		-e 's#^from github.com.mwitkow.go_proto_validators import validator_pb2 as#from . import mwitkow_goprotovalidators_validator_pb2 as#' \
		"$(PYTHON_GENERATED_DIR)/proto"/*.py
	@sed --in-place \
		-e 's#^from github.com.mwitkow.go_proto_validators import validator_pb2 as#from .. import mwitkow_goprotovalidators_validator_pb2 as#' \
		"$(PYTHON_GENERATED_DIR)/proto/api"/*.py
	@rm -rf "$(PYTHON_GENERATED_DIR)/github" "$(PYTHON_GENERATED_DIR)/github.com"
	@cd python && python3 generate_init.py >"vegaapiclient/__init__.py"

.PHONY: test
test: test-cpp test-javascript test-python
	##

.PHONY: test-cpp
test-cpp:
	@echo "TBD: test-cpp"

.PHONY: test-javascript
test-javascript:
	@cd js && npm install && npm test

.PHONY: test
test-python:
	@cd python && make venv && source /tmp/venv-api-clients/bin/activate && make test
