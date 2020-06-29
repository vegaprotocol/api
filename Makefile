# Makefile

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- preproto:  copy *.proto from vega core repository"

.PHONY: preproto
preproto:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@mkdir -p proto && find "$(VEGACORE)"/proto -maxdepth 1 -name '*.proto' -exec cp '{}' proto/ ';'
	@mkdir -p proto/api && find "$(VEGACORE)"/proto/api -maxdepth 1 -name '*.proto' -exec cp '{}' proto/api/ ';'
	@(cd "$(VEGACORE)" && git describe --tags) >proto/from.txt

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


PYTHON_GENERATED_DIR := python/vegaapiclient/generated

.PHONY: proto-python
proto-python:
	@mkdir -p "$(PYTHON_GENERATED_DIR)"
	@find proto \
		-name '*.proto' | \
		xargs python3 -m grpc_tools.protoc \
		-I. \
		-Iexternal \
		--python_out="$(PYTHON_GENERATED_DIR)" \
		--grpc_python_out="$(PYTHON_GENERATED_DIR)"
	@find external/github.com/mwitkow \
		-name '*.proto' | \
		xargs python3 -m grpc_tools.protoc \
		-Iexternal \
		--python_out="$(PYTHON_GENERATED_DIR)" \
		--grpc_python_out="$(PYTHON_GENERATED_DIR)"
	@sed --in-place \
		-e 's#from proto import assets_pb2 as proto_dot_assets__pb2#from .assets_pb2 import (DESCRIPTOR as assets_DESCRIPTOR, _ASSET as assets_ASSET, _ASSETSOURCE as assets_ASSETSOURCE)#' \
		-e 's#proto_dot_assets__pb2.DESCRIPTOR#assets_DESCRIPTOR#' \
		-e 's#proto_dot_assets__pb2._ASSET#assets_ASSET#' \
		-e 's#from proto import markets_pb2 as proto_dot_markets__pb2#from .markets_pb2 import (DESCRIPTOR as markets_DESCRIPTOR, _MARKET as markets_MARKET)#' \
		-e 's#proto_dot_markets__pb2.DESCRIPTOR#markets_DESCRIPTOR#' \
		-e 's#proto_dot_markets__pb2._MARKET#markets_MARKET#' \
		"$(PYTHON_GENERATED_DIR)/proto/governance_pb2.py"
	@sed --in-place \
		-e 's#from proto import#from .. import#' \
		-e 's#from proto.api import#from . import#' \
		"$(PYTHON_GENERATED_DIR)/proto/api"/*.py
	@echo 'from . import trading_pb2 as trading\nfrom . import trading_pb2_grpc as trading_grpc\n\n__all__ = ["trading", "trading_grpc"]' \
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
