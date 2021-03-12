# Makefile

SHELL := /usr/bin/env bash

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- graphql:   Copy schema.graphql from vega core repository. Build documentation."
	@echo "- preproto:  Copy *.proto from vega core repository."
	@echo "- proto:     Run buf to auto-generate API clients and documentation."

.PHONY: graphql
graphql:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@cp -a "$(VEGACORE)/gateway/graphql/schema.graphql" graphql/
	@cd graphql && npm install && ./node_modules/.bin/graphqldoc -f -s schema.graphql -o doc/

.PHONY: preproto
preproto:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@rm -rf proto && mkdir proto
	@mkdir -p proto && find "$(VEGACORE)"/proto -maxdepth 1 -name '*.proto' -exec cp '{}' proto/ ';'
	@mkdir -p proto/api && find "$(VEGACORE)"/proto/api -maxdepth 1 -name '*.proto' -exec cp '{}' proto/api/ ';'
	@mkdir -p proto/oracles/v1 && find "$(VEGACORE)"/proto/oracles/v1 -maxdepth 1 -name '*.proto' -exec cp '{}' proto/oracles/v1/ ';'
	@mkdir -p proto/tm && find "$(VEGACORE)"/proto/tm -maxdepth 1 -name '*.proto' -exec cp '{}' proto/tm/ ';'
	@find proto -name '*.proto' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'
	@(cd "$(VEGACORE)" && git describe --tags) >proto/from.txt
	@find proto -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega";' # \n// option java_outer_classname = "tbd";\noption java_multiple_files = true;
	@find proto/api -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.api";'
	@find proto/oracles/v1 -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.oracles.v1";'
	@find proto/tm -maxdepth 1 -name '*.proto' | xargs sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega.tm";'

.PHONY: buf-build
buf-build:
	@buf build

CPP_GENERATED_DIR := cpp/generated
GO_GENERATED_DIR := go/generated
JAVA_GENERATED_DIR := java/generated
JAVASCRIPT_GENERATED_DIR := js/generated
PYTHON_GENERATED_DIR := python/vegaapiclient/generated

.PHONY: buf-generate
buf-generate: buf-build
	@if ! command -v protoc-gen-doc 1>/dev/null ; then \
		go get github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@v1.4.1 || exit 1 ; \
	fi
	@if ! command -v protoc-gen-go 1>/dev/null ; then \
		go get github.com/golang/protobuf/protoc-gen-go@v1.4.3 || exit 1 ; \
	fi
	@if ! command -v protoc-gen-go-grpc 1>/dev/null ; then \
		go get google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0 || exit 1 ; \
	fi
	@if ! command -v protoc-gen-govalidators 1>/dev/null ; then \
		go get github.com/mwitkow/go-proto-validators/protoc-gen-govalidators@v0.3.2 || exit 1 ; \
	fi
	@for cmd in grpc_cpp_plugin grpc_python_plugin ; do \
		if ! command -v "$$cmd" 1>/dev/null ; then \
			echo "Not found/executable: $$cmd" ; \
			echo "See https://github.com/grpc/grpc/blob/master/BUILDING.md#building-with-cmake" ; \
			exit 1 ; \
		fi ; \
	done
	@proto_gen_ts=./js/node_modules/.bin/protoc-gen-ts && \
	if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
		pushd js 1>/dev/null && \
		npm install && \
		popd 1>/dev/null && \
		if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
			echo "Not found/executable: protoc-gen-ts" ; \
			exit 1 ; \
		fi ; \
	fi
	@for d in \
		"$(CPP_GENERATED_DIR)" \
		"$(GO_GENERATED_DIR)" \
		"$(JAVA_GENERATED_DIR)" \
		"$(JAVASCRIPT_GENERATED_DIR)" \
		"$(PYTHON_GENERATED_DIR)" ; \
	do \
		rm -rf "$$d" && mkdir -p "$$d" || exit 1 ; \
	done
	@buf generate

.PHONY: proto
proto: buf-generate
	@env CPP_GENERATED_DIR="$(CPP_GENERATED_DIR)" ./cpp/post-generate.sh
	@env GO_GENERATED_DIR="$(GO_GENERATED_DIR)" ./go/post-generate.sh
	@env JAVA_GENERATED_DIR="$(JAVA_GENERATED_DIR)" ./java/post-generate.sh
	@env JAVASCRIPT_GENERATED_DIR="$(JAVASCRIPT_GENERATED_DIR)" ./js/post-generate.sh
	@env PYTHON_GENERATED_DIR="$(PYTHON_GENERATED_DIR)" ./python/post-generate.sh

# Test

.PHONY: test
test: test-cpp test-java test-javascript test-python

.PHONY: test-cpp
test-cpp:
	@echo "TBD: test-cpp"

.PHONY: test-go
test-go:
	@echo "TBD: test-go"

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
clean: clean-cpp clean-go clean-java clean-javascript clean-python

.PHONY: clean-cpp
clean-cpp:
	@rm -rf "$(CPP_GENERATED_DIR)"

.PHONY: clean-go
clean-go:
	@rm -rf "$(GO_GENERATED_DIR)"

.PHONY: clean-java
clean-java:
	@rm -rf "$(JAVA_GENERATED_DIR)"

.PHONY: clean-javascript
clean-javascript:
	@rm -rf "$(JAVASCRIPT_GENERATED_DIR)"

.PHONY: clean-python
clean-python:
	@rm -rf "$(PYTHON_GENERATED_DIR)" python/build
