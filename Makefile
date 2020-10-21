# Makefile

SHELL := /usr/bin/env bash

VEGA_VERSION := $(shell cat proto/from.txt)
API_CLIENTS_VERSION := $(shell git describe --tags 2>/dev/null || echo unknown)

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- preproto:  copy *.proto from vega core repository"

.PHONY: preproto
preproto:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@rm -rf proto && mkdir proto
	@mkdir -p proto && find "$(VEGACORE)"/proto -maxdepth 1 -name '*.proto' -exec cp '{}' proto/ ';'
	@mkdir -p proto/api && find "$(VEGACORE)"/proto/api -maxdepth 1 -name '*.proto' -exec cp '{}' proto/api/ ';'
	@mkdir -p proto/tm && find "$(VEGACORE)"/proto/tm -maxdepth 1 -name '*.proto' -exec cp '{}' proto/tm/ ';'
	@find proto -name '*.proto' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'
	@(cd "$(VEGACORE)" && git describe --tags) >proto/from.txt
	@find proto -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega";'
	@find proto/api -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.api";'
	@find proto/tm -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.tm";'

.PHONY: proto
proto: proto-cpp proto-java proto-javascript proto-python

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
	@find "$(CPP_GENERATED_DIR)" -name '*.pb.cc' -o -name '*.pb.h' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'

JAVA_GENERATED_DIR := java/generated
JAVA_LIB_DIR := java/lib
JAR_PROTOBUF_VERSION := 3.13.0
JAR_PROTOBUF := protobuf-java-$(JAR_PROTOBUF_VERSION).jar
JAR_PROTOBUF_URL := https://search.maven.org/remotecontent?filepath=com/google/protobuf/protobuf-java/$(JAR_PROTOBUF_VERSION)/protobuf-java-$(JAR_PROTOBUF_VERSION).jar

.PHONY: proto-java
proto-java:
	@rm -rf "$(JAVA_GENERATED_DIR)" && mkdir -p "$(JAVA_GENERATED_DIR)"
	@mkdir -p "$(JAVA_LIB_DIR)"
	@test -f "$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)" || wget -qO "$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)" "$(JAR_PROTOBUF_URL)"
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--java_out="$(JAVA_GENERATED_DIR)" \
		--java_out="$(JAVA_GENERATED_DIR)/vega-$(VEGA_VERSION)-api-$(API_CLIENTS_VERSION)-source.jar"
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--java_out="$(JAVA_GENERATED_DIR)" \
		--java_out="$(JAVA_GENERATED_DIR)/mwitkow-go_proto_validators-source.jar"
	@find "$(JAVA_GENERATED_DIR)" -name '*.java' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'
	@find "$(JAVA_GENERATED_DIR)" -name '*.java' -print0 | xargs -0 javac -cp "$(JAVA_GENERATED_DIR):$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)"
	@echo -e 'Manifest-Version: 1.0\nCreated-by: $(shell java -version 2>&1 | awk '/^openjdk version/ {gsub(/"/, ""); print $$3}') (OpenJDK)\nMain-Class: n/a\nClass-Path: $(JAR_PROTOBUF)\nName: Vega\nSpecification-Title: Vega\nSpecification-Version: $(VEGA_VERSION)\nSpecification-Vendor: Vega\nImplementation-Title: Vega\nImplementation-Version: $(API_CLIENTS_VERSION)\nImplementation-Vendor: Vega' >"$(JAVA_GENERATED_DIR)/manifest.txt"
	@cd "$(JAVA_GENERATED_DIR)" && jar cfm "vega-$(VEGA_VERSION)-api-$(API_CLIENTS_VERSION).jar" manifest.txt com io

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
	@find js/generated -name '*.js' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'

PYTHON_GENERATED_DIR := python/vegaapiclient/generated

.PHONY: proto-python
proto-python:
	@mkdir -p "$(PYTHON_GENERATED_DIR)"
	@pipenv --bare install 1>/dev/null 2>&1 && \
	find proto \
		-name '*.proto' | \
		xargs pipenv run python3 pyproto.py \
		-I. \
		-Iexternal \
		--python_out="$(PYTHON_GENERATED_DIR)" \
		--grpc_python_out="$(PYTHON_GENERATED_DIR)" && \
	find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs pipenv run python3 pyproto.py \
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
	@echo -e 'from . import replay_pb2 as replay\nfrom . import replay_pb2_grpc as replay_grpc\n\n__all__ = ["replay", "replay_grpc"]' \
		>"$(PYTHON_GENERATED_DIR)/proto/tm/__init__.py"
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
	@find "$(PYTHON_GENERATED_DIR)" -name '*.py' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'

.PHONY: test
test: test-cpp test-javascript test-python

.PHONY: test-cpp
test-cpp:
	@echo "TBD: test-cpp"

.PHONY: test-javascript
test-javascript:
	@cd js && npm install && npm test

.PHONY: test
test-python:
	@cd python && make test
