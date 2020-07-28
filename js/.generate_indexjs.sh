#!/usr/bin/env bash

requires="$(mktemp)"
modexports="$(mktemp)"

find ./generated/proto -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
do
	filename="$(basename "$pbjs")"
	varname="${filename//_pb.js/}"
	echo "var $varname = require('$pbjs')" >>"$requires"
	echo "  $varname: $varname," >>"$modexports"
done

modexports_api="$(mktemp)"
find ./generated/proto/api -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
do
	filename="$(basename "$pbjs")"
	varname="${filename//_pb.js/}"
	echo "var api_$varname = require('$pbjs')" >>"$requires"
	echo "    $varname: api_$varname," >>"$modexports_api"
done

cat <<EOF
// GENERATED CODE -- DO NOT EDIT!

$(cat "$requires")

module.exports = {
$(cat "$modexports")
  api: {
$(cat "$modexports_api")
  },
}
EOF

rm -f "$requires" "$modexports" "$modexports_api"
