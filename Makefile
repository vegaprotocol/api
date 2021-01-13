# Makefile

SHELL := /usr/bin/env bash

VEGA_VERSION := $(shell cat proto/from.txt | sed -e 's/^v//')
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
	@find proto -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega";' # \n// option java_outer_classname = "tbd";\noption java_multiple_files = true;
	@find proto/api -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.api";'
	@find proto/tm -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.tm";'

.PHONY: buf-build
buf-build:
	@buf build

.PHONY: buf-generate
buf-generate: buf-build
	@buf generate

CPP_GENERATED_DIR := cpp/generated
PYTHON_GENERATED_DIR := python/vegaapiclient/generated

.PHONY: proto
proto: buf-generate
	@env CPP_GENERATED_DIR="$(CPP_GENERATED_DIR)" ./cpp/post-generate.sh
	@env PYTHON_GENERATED_DIR="$(PYTHON_GENERATED_DIR)" ./python/post-generate.sh

JAVA_GENERATED_DIR := java/generated
JAVA_LIB_DIR := java/lib
JAR_PROTOBUF_VERSION := 3.13.0
JAR_PROTOBUF := protobuf-java-$(JAR_PROTOBUF_VERSION).jar
JAR_PROTOBUF_URL := https://search.maven.org/remotecontent?filepath=com/google/protobuf/protobuf-java/$(JAR_PROTOBUF_VERSION)/protobuf-java-$(JAR_PROTOBUF_VERSION).jar

.PHONY: proto-java
proto-java:
	@echo "Java"
	@rm -rf "$(JAVA_GENERATED_DIR)" && mkdir -p "$(JAVA_GENERATED_DIR)"
	@mkdir -p "$(JAVA_LIB_DIR)"
	@test -f "$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)" || wget -qO "$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)" "$(JAR_PROTOBUF_URL)"
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--java_out="$(JAVA_GENERATED_DIR)"
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--java_out="$(JAVA_GENERATED_DIR)"
	@find "$(JAVA_GENERATED_DIR)" -name '*.java' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'
	@find "$(JAVA_GENERATED_DIR)" -name '*.java' -print0 | xargs -0 javac -cp "$(JAVA_GENERATED_DIR):$(JAVA_LIB_DIR)/$(JAR_PROTOBUF)"
	@echo -e 'Manifest-Version: 1.0\nCreated-by: $(shell java -version 2>&1 | awk '/^openjdk version/ {gsub(/"/, ""); print $$3}') (OpenJDK)\nMain-Class: n/a\nClass-Path: $(JAR_PROTOBUF)\nName: com.vegaprotocol.vega\nSpecification-Title: Vega\nSpecification-Version: $(VEGA_VERSION)\nSpecification-Vendor: Vega\nImplementation-Title: Vega\nImplementation-Version: $(API_CLIENTS_VERSION)\nImplementation-Vendor: Vega\nExport-Package: io.vegaprotocol.vega;version="$(VEGA_VERSION)"\nImport-Package: com.google.protobuf;version="[3.13,4)"' >"$(JAVA_GENERATED_DIR)/manifest.txt"
	@cd "$(JAVA_GENERATED_DIR)" && jar cfm "vega-$(VEGA_VERSION).jar" manifest.txt com io && ln -s "vega-$(VEGA_VERSION).jar" io.vegaprotocol.vega.jar

JAVASCRIPT_GENERATED_DIR := js/generated
PROTOC_GEN_TS := ./js/node_modules/.bin/protoc-gen-ts

.PHONY: proto-javascript
proto-javascript:
	@echo "Javascript"
	@rm -rf "$(JAVASCRIPT_GENERATED_DIR)" && mkdir -p "$(JAVASCRIPT_GENERATED_DIR)"
	@cd js && npm install
	@if ! test -r "$(PROTOC_GEN_TS)" -a -x "$(PROTOC_GEN_TS)" ; then \
		echo "Not found/executable: $(PROTOC_GEN_TS)" ; \
		exit 1 ; \
	fi
	@# JS + TS definitions
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--js_out=import_style=commonjs,binary:$(JAVASCRIPT_GENERATED_DIR) \
		--ts_out="${JAVASCRIPT_GENERATED_DIR}"
	@# TS gRPC-node
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--ts_out="service=grpc-node:${JAVASCRIPT_GENERATED_DIR}"
	@# TS gRPC-web
	@find proto \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--ts_out="service=grpc-web:${JAVASCRIPT_GENERATED_DIR}"
	@# JS + TS definitions
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--js_out=import_style=commonjs,binary:$(JAVASCRIPT_GENERATED_DIR) \
		--ts_out="${JAVASCRIPT_GENERATED_DIR}"
	@# TS gRPC node
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--ts_out="service=grpc-node:${JAVASCRIPT_GENERATED_DIR}"
	@# TS gRPC web
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs protoc \
		-I. \
		-Iexternal \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
		--ts_out="service=grpc-web:${JAVASCRIPT_GENERATED_DIR}"
	@sed --in-place \
		-e 's#\.\./\.\./github.com#../../external/github.com#' \
		"$(JAVASCRIPT_GENERATED_DIR)/proto/api"/*.js
	@sed --in-place \
		-e 's#\.\./github.com#../external/github.com#' \
		"$(JAVASCRIPT_GENERATED_DIR)/proto"/*.js
	@(cd js; ./.generate_indexjs.sh)
	@find js/generated -name '*.js' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'

# Test

.PHONY: test
test: test-cpp test-java test-javascript test-python

.PHONY: test-cpp
test-cpp:
	@echo "TBD: test-cpp"

.PHONY: test-java
test-java:
	@echo "TBD: test-java"

.PHONY: test-javascript
test-javascript:
	@cd js && npm install && npm test

.PHONY: test
test-python:
	@cd python && make test

# Clean

.PHONY: clean
clean: clean-cpp clean-java clean-javascript clean-python

.PHONY: clean-cpp
clean-cpp:
	@rm -rf "$(CPP_GENERATED_DIR)"

.PHONY: clean-java
clean-java:
	@rm -rf "$(JAVA_GENERATED_DIR)"

.PHONY: clean-javascript
clean-javascript:
	@rm -rf "$(JAVASCRIPT_GENERATED_DIR)"

.PHONY: clean-python
clean-python:
	@rm -rf "$(PYTHON_GENERATED_DIR)"
