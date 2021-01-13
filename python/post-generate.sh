#!/usr/bin/env bash

python_generated_dir="${PYTHON_GENERATED_DIR:?}"

cat >"$python_generated_dir/api/__init__.py" <<EOF
from . import trading_pb2 as trading
from . import trading_pb2_grpc as trading_grpc

__all__ = ["trading", "trading_grpc"]
EOF

cat >"$python_generated_dir/tm/__init__.py" <<EOF
from . import replay_pb2 as replay
from . import replay_pb2_grpc as replay_grpc

__all__ = ["replay", "replay_grpc"]
EOF

touch "$python_generated_dir/__init__.py"

mv "$python_generated_dir/github.com/mwitkow/go_proto_validators/validator_pb2_grpc.py" "$python_generated_dir/github/com/mwitkow/go_proto_validators/"
rm -rf "$python_generated_dir/github.com"

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
