#!/usr/bin/env bash

protodir=./generated/proto

requires="$(mktemp)"
modexports="$(mktemp)"
ts_exports="$(mktemp)"

# Handle top-level proto
find "$protodir" -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
do
	filename="$(basename "$pbjs")"
	varname="${filename//_pb.js/}"
	echo "var $varname = require('$pbjs')" >>"$requires"
	echo "  $varname: $varname," >>"$modexports"

	echo "export * as $varname from \"${pbjs//.js/}\";" >>"$ts_exports"
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

		echo "export * as ${prefix}_${varname} from \"${pbjs//.js/}\";" >>"$ts_exports"
	done
	echo "  }," >>"$modexports"
done

cat >index.js <<EOF
// GENERATED CODE -- DO NOT EDIT!

$(cat "$requires")

module.exports = {
$(cat "$modexports")
}
EOF

cat >index.d.ts <<EOF
// GENERATED CODE -- DO NOT EDIT!

$(cat "$ts_exports")
EOF

rm -f "$requires" "$modexports" "$ts_exports"
