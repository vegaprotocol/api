#!/usr/bin/env bash

python_generated_dir="${PYTHON_GENERATED_DIR:?}"

cat >"$python_generated_dir/api/__init__.py" <<EOF
from . import trading_pb2 as trading
from . import trading_pb2_grpc as trading_grpc

__all__ = ["trading", "trading_grpc"]
EOF

cat >"$python_generated_dir/oracles/v1/__init__.py" <<EOF
from . import oracle_data_pb2 as oracle_data
from . import oracle_data_pb2_grpc as oracle_data_grpc
from . import oracle_spec_pb2 as oracle_spec
from . import oracle_spec_pb2_grpc as oracle_spec_grpc

__all__ = [
    "oracle_data",
    "oracle_data_grpc",
    "oracle_spec",
    "oracle_spec_grpc",
]
EOF

cat >"$python_generated_dir/oracles/__init__.py" <<EOF
from . import v1

__all__ = ["v1"]
EOF

cat >"$python_generated_dir/tm/__init__.py" <<EOF
from . import replay_pb2 as replay
from . import replay_pb2_grpc as replay_grpc

__all__ = ["replay", "replay_grpc"]
EOF

mv "$python_generated_dir/github.com/mwitkow/go_proto_validators/validator_pb2_grpc.py" "$python_generated_dir/github/com/mwitkow/go_proto_validators/"
rm -rf "$python_generated_dir/github.com"

cat >"$python_generated_dir/github/com/mwitkow/go_proto_validators/__init__.py" <<EOF
from . import validator_pb2 as validator
from . import validator_pb2_grpc as validator_grpc

__all__ = ["validator", "validator_grpc"]
EOF

touch "$python_generated_dir/oracles/__init__.py"
touch "$python_generated_dir/github/com/mwitkow/__init__.py"
touch "$python_generated_dir/github/com/__init__.py"
touch "$python_generated_dir/github/__init__.py"
touch "$python_generated_dir/__init__.py"

find "$python_generated_dir" -maxdepth 1 -name '*.py' -print0 | xargs -0r sed --in-place -r \
	-e 's#^from github.com.mwitkow.go_proto_validators #from .github.com.mwitkow.go_proto_validators #' \
	-e 's#^import ([a-z_]*)_pb2 as #from . import \1_pb2 as #'

find "$python_generated_dir/api" -maxdepth 1 -name '*.py' -print0 | xargs -0r sed --in-place -r \
	-e 's#^from github.com.mwitkow.go_proto_validators #from ..github.com.mwitkow.go_proto_validators #' \
	-e 's#^import ([a-z_]*)_pb2 as #from .. import \1_pb2 as #' \
	-e 's#^from api import #from . import #'

pushd python 1>/dev/null || exit 1
python3 generate_init.py >"vegaapiclient/__init__.py"
popd 1>/dev/null || exit 1

find "$python_generated_dir" -name '*.py' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
