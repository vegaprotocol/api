#!/usr/bin/env bash

protodir=./generated/proto

requires="$(mktemp)"
modexports="$(mktemp)"

# Handle top-level proto
find "$protodir" -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
do
	filename="$(basename "$pbjs")"
	varname="${filename//_pb.js/}"
	echo "var $varname = require('$pbjs')" >>"$requires"
	echo "  $varname: $varname," >>"$modexports"
done

# Handle proto subdirs
find "$protodir" -name '*_pb.js' -print0 | xargs -0 dirname | sort -u | tail +2 | while read -r protosubdir ; do
	echo "  $(basename "$protosubdir"): {" >>"$modexports"
	find "$protosubdir" -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
	do
		filename="$(basename "$pbjs")"
		varname="${filename//_pb.js/}"
		prefix="$(basename "$(dirname "$pbjs")")"
		echo "var ${prefix}_${varname} = require('$pbjs')" >>"$requires"
		echo "    $varname: ${prefix}_${varname}," >>"$modexports"
	done
	echo "  }," >>"$modexports"
done

cat <<EOF
// GENERATED CODE -- DO NOT EDIT!

$(cat "$requires")

module.exports = {
$(cat "$modexports")
}
EOF

rm -f "$requires" "$modexports"
