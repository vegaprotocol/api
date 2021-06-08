# Makefile

SHELL := /usr/bin/env bash

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- preproto:    Copy *.proto from vega core repository."
	@echo "- proto:       Run buf to auto-generate API clients and gRPC documentation."

.PHONY: preproto
preproto:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@rm -rf proto && mkdir proto
	@for x in proto proto/api proto/commands/v1 proto/events/v1 proto/oracles/v1 proto/tm proto/wallet/v1 ; do \
		mkdir -p "$$x" && \
		java_pkg="$$(echo "$${x//proto/}" | tr / .)" && \
		find "$(VEGACORE)/$$x" -maxdepth 1 -name '*.proto' -exec cp '{}' "$$x/" ';' && \
		find "$$x" -maxdepth 1 -name '*.proto' -exec sed --in-place -e '/^package/a\\option java_package = "io.vegaprotocol.vega'"$$java_pkg"'";' '{}' ';' || exit 1 ; \
	done
	@find proto -name '*.proto' -print0 | xargs -0 sed --in-place -re 's#[ \t]+$$##'
	@(cd "$(VEGACORE)" && git describe --tags) >proto/from.txt
	@cp -a "$(VEGACORE)/gateway/rest/grpc-rest-bindings.yml" ./rest/
	@core_protos_fn="$$(mktemp -t protofiles-core-XXXXXX.txt)" && \
	api_protos_fn="$$(mktemp -t protofiles-api-XXXXXX.txt)" && \
	find "$(VEGACORE)/proto" -name '*.proto' | sed -e 's#^$(VEGACORE)/##' | sort >"$$core_protos_fn" && \
	find "./proto" -name '*.proto' | sed -e 's#^./##' | sort >"$$api_protos_fn" && \
	diff "$$core_protos_fn" "$$api_protos_fn"

.PHONY: buf-build
buf-build:
	@buf build

DOC_GENERATED_DIR := grpc/doc

CPP_GENERATED_DIR := grpc/clients/cpp/generated
GO_GENERATED_DIR := grpc/clients/go/generated
JAVA_GENERATED_DIR := grpc/clients/java/generated
JAVASCRIPT_GENERATED_DIR := grpc/clients/js/generated
PYTHON_GENERATED_DIR := grpc/clients/python/vegaapiclient/generated

# Pull the version from pom.xml
PROTOC_GEN_GRPC_JAVA_VER := $(shell awk '/<grpc.version>1.38.0/ {print $1}' grpc/clients/java/pom.xml | cut -f2 -d '>' | cut -f1 -d '<')
ifeq ($(OS),Windows_NT)
	PROTOC_GEN_GRPC_JAVA_OS_ARCH := windows-x86_64
else
	UNAME_S := $(shell uname -s)
	ifeq ($(UNAME_S),Linux)
		PROTOC_GEN_GRPC_JAVA_OS_ARCH := linux-x86_64
	endif
	ifeq ($(UNAME_S),Darwin)
		PROTOC_GEN_GRPC_JAVA_OS_ARCH := osx-x86_64
	endif
endif
# yes, all protoc-gen-grpc-java binaries end in ".exe", whatever the OS.
PROTOC_GEN_GRPC_JAVA_URL := https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/$(PROTOC_GEN_GRPC_JAVA_VER)/protoc-gen-grpc-java-$(PROTOC_GEN_GRPC_JAVA_VER)-$(PROTOC_GEN_GRPC_JAVA_OS_ARCH).exe
PROTOC_GEN_GRPC_JAVA := ./tools/java/protoc-gen-grpc-java

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
	@if ! command -v protoc-gen-swagger 1>/dev/null ; then \
		go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@v1.8.5 || exit 1 ; \
	fi
	@for cmd in grpc_cpp_plugin grpc_python_plugin ; do \
		if ! command -v "$$cmd" 1>/dev/null ; then \
			echo "Not found/executable: $$cmd" ; \
			echo "See https://github.com/grpc/grpc/blob/master/BUILDING.md#building-with-cmake" ; \
			exit 1 ; \
		fi ; \
	done
	@proto_gen_ts=./grpc/clients/js/node_modules/.bin/protoc-gen-ts && \
	if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
		pushd grpc/clients/js 1>/dev/null && \
		npm install && \
		popd 1>/dev/null && \
		if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
			echo "Not found/executable: protoc-gen-ts" ; \
			exit 1 ; \
		fi ; \
	fi
	@if ! [[ -x "$(PROTOC_GEN_GRPC_JAVA)" ]] ; then \
		mkdir -p "$$(dirname "$(PROTOC_GEN_GRPC_JAVA)")" && \
		wget -qO "$(PROTOC_GEN_GRPC_JAVA)" "$(PROTOC_GEN_GRPC_JAVA_URL)" && \
		chmod +x "$(PROTOC_GEN_GRPC_JAVA)" ; \
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
	@buf generate --path=./proto/api --template=./rest/buf.gen.yaml

.PHONY: proto
proto: buf-generate
	@env DOC_GENERATED_DIR="$(DOC_GENERATED_DIR)" ./grpc/doc/post-generate.sh
	@env CPP_GENERATED_DIR="$(CPP_GENERATED_DIR)" ./grpc/clients/cpp/post-generate.sh
	@env GO_GENERATED_DIR="$(GO_GENERATED_DIR)" ./grpc/clients/go/post-generate.sh
	@env JAVA_GENERATED_DIR="$(JAVA_GENERATED_DIR)" ./grpc/clients/java/post-generate.sh
	@env JAVASCRIPT_GENERATED_DIR="$(JAVASCRIPT_GENERATED_DIR)" ./grpc/clients/js/post-generate.sh
	@env PYTHON_GENERATED_DIR="$(PYTHON_GENERATED_DIR)" ./grpc/clients/python/post-generate.sh
	@./rest/post-generate.sh

# Test

.PHONY: test
test: test-cpp test-go test-java test-javascript test-python

.PHONY: test-cpp
test-cpp:
	@echo "TBD: test-cpp"

.PHONY: test-go
test-go:
	@cd grpc/clients/go && make test

.PHONY: test-java
test-java:
	@echo "TBD: test-java"

.PHONY: test-javascript
test-javascript:
	@cd grpc/clients/js && npm install && npm test

.PHONY: test
test-python:
	@cd grpc/clients/python && make test

# Misc

.PHONY: spellcheck
spellcheck:
	@if ! test -d "/tmp/venv-pyspelling" ; then \
		virtualenv /tmp/venv-pyspelling || exit 1 ; \
	fi && \
	source /tmp/venv-pyspelling/bin/activate && \
	pip install -q --upgrade pyspelling && \
	pyspelling -c spellcheck.yaml && \
	deactivate

# Just for Python

.PHONY: black
black:
	@black --exclude generated -l 79 .

.PHONY: blackcheck
blackcheck:
	@black --exclude generated -l 79 --check .

.PHONY: flake8
flake8:
	@find . -name generated -prune -o -name '*.py' -print | xargs flake8

.PHONY: mypy
mypy:
	@echo "Running mypy in grpc/clients/python" ; \
	( \
		cd grpc/clients/python && \
		env MYPYPATH=. mypy --ignore-missing-imports . | grep -vE '(^Found|/generated/|: note: )' ; \
		code="$$?" ; \
		test "$$code" -ne 0 \
	)
	@for d in grpc/examples/python rest/examples/python ; do \
		echo "Running mypy in $$d" ; \
		( \
			cd "$$d" && \
			env MYPYPATH=. mypy --ignore-missing-imports . || exit 1 \
		) || exit 1 ; \
	done

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
	@rm -rf tools/java "$(JAVA_GENERATED_DIR)"

.PHONY: clean-javascript
clean-javascript:
	@rm -rf "$(JAVASCRIPT_GENERATED_DIR)"

.PHONY: clean-python
clean-python:
	@rm -rf "$(PYTHON_GENERATED_DIR)" grpc/clients/python/build
