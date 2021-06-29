#!/usr/bin/env bash

python_generated_dir="${PYTHON_GENERATED_DIR:?}"

mv "$python_generated_dir/github.com/mwitkow/go_proto_validators/validator_pb2_grpc.py" "$python_generated_dir/github/com/mwitkow/go_proto_validators/"
rm -rf "$python_generated_dir/github.com"

for x in \
	api \
	commands/v1 \
	events/v1 \
	github/com/mwitkow/go_proto_validators \
	oracles/v1 \
	tm \
	wallet/v1
do
	# from . import XX as XX
	pb_py="$(find "$python_generated_dir/$x/" -maxdepth 1 -name '*_pb2.py' -o -name '*_pb2_grpc.py' -o -type d | sort | tail -n +2)"
	(
		echo "$pb_py" | while read -r pb ; do
			if test -f "$pb" ; then
				imp="$(basename "${pb//.py/}")"
				echo "from . import $imp as ${imp/_pb2/}"
			elif test -d "$pb" ; then
				imp="$(basename "$pb")"
				echo "from . import $imp"
			else
				echo "# Ignoring: $pb"
			fi
		done
		echo
	) > "$python_generated_dir/$x/__init__.py"

	# __all__ = [...]
	(
		echo "__all__ = ["
		echo "$pb_py" | while read -r pb ; do
			if test -f "$pb" ; then
				imp="$(basename "${pb//.py/}")"
				echo "    \"${imp/_pb2/}\","
			elif test -d "$pb" ; then
				imp="$(basename "$pb")"
				echo "    \"$imp\","
			else
				echo "# Ignoring: $pb"
			fi
		done
		echo "]"
	) >> "$python_generated_dir/$x/__init__.py"
done

for x in \
	commands \
	events \
	github \
	github/com \
	github/com/mwitkow \
	oracles \
	wallet
do
	touch "$python_generated_dir/$x/__init__.py"
done
touch "$python_generated_dir/__init__.py"

find "$python_generated_dir" -maxdepth 1 -name '*.py' -print0 | xargs -0r sed --in-place -r \
	-e 's#^from github.com.mwitkow.go_proto_validators #from .github.com.mwitkow.go_proto_validators #' \
	-e 's#^from commands.v1 import#from .commands.v1 import#' \
	-e 's#^from events.v1 import#from .events.v1 import#' \
	-e 's#^from oracles.v1 import#from .oracles.v1 import#' \
	-e 's#^from wallet.v1 import#from .wallet.v1 import#' \
	-e 's#^import ([a-z_]*)_pb2 as #from . import \1_pb2 as #'

find "$python_generated_dir/api" -maxdepth 1 -name '*.py' -print0 | xargs -0r sed --in-place -r \
	-e 's#^from github.com.mwitkow.go_proto_validators #from ..github.com.mwitkow.go_proto_validators #' \
	-e 's#^from commands.v1 import#from ..commands.v1 import#' \
	-e 's#^from events.v1 import#from ..events.v1 import#' \
	-e 's#^from oracles.v1 import#from ..oracles.v1 import#' \
	-e 's#^from wallet.v1 import#from ..wallet.v1 import#' \
	-e 's#^import ([a-z_]*)_pb2 as #from .. import \1_pb2 as #' \
	-e 's#^from api import #from . import #'

find \
	"$python_generated_dir/commands/v1" \
	"$python_generated_dir/events/v1" \
	"$python_generated_dir/oracles/v1" \
	"$python_generated_dir/wallet/v1" \
	-maxdepth 1 -name '*.py' -print0 | xargs -0r sed --in-place -r \
	-e 's#^import ([a-z_]*_pb2) as #from ... import \1 as #' \
	-e 's#^from (commands.v1|events.v2|oracles.v1|wallet.v1|github.com.mwitkow.go_proto_validators) import #from ...\1 import #'

pushd grpc/clients/python 1>/dev/null || exit 1
python3 generate_init.py >"vegaapiclient/__init__.py"
popd 1>/dev/null || exit 1

find "$python_generated_dir" -name '*.py' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
