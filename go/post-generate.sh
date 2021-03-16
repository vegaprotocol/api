#!/usr/bin/env bash

set -e

if ! command -v goimports 1>/dev/null ; then
	echo "Please install goimports."
	exit 1
fi

go_generated_dir="${GO_GENERATED_DIR:?}"

find "$go_generated_dir" -name '*.go' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'

# AWK script to remove all blank lines in the "imports" section of a golang source file.
awkscript="$(mktemp)"
cat >"$awkscript" <<EOF
BEGIN {
	IMP=0
}
IMP==1 && /^\\)$/ {
	IMP=0
}
(IMP==1 && !/^$/) || IMP==0 {
	print
}
IMP==0 && /^import \\($/ {
	IMP=1
}
EOF

find "$go_generated_dir" -name '*.pb.go' | sort | while read -r pbgo
do
	# Rename Size_ back to Size. See https://github.com/mwitkow/go-proto-validators/issues/51
	sed -i -re 's/this\.Size_/this.Size/' "$pbgo"
	sed -i -re 's/"code\.vegaprotocol\.io\/vega\/proto"/"github.com\/vegaprotocol\/api\/go\/generated\/code\.vegaprotocol\.io\/vega\/proto"/' "$pbgo"

	# Make the import list order deterministic.
	f="$(mktemp)"
	awk -f "$awkscript" <"$pbgo" >"$f"
	mv "$f" "$pbgo"
	goimports -w "$pbgo"
done
rm -f "$awkscript"
