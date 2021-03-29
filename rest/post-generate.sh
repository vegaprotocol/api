#!/usr/bin/env bash

set -e

# Inject extra content into spec
t="$(mktemp -p "$PWD" -t tmp-XXXXXXXX.json)"
final=rest/api/trading.swagger.json
python3 .merge.py \
	"$final" \
	rest/extra.json \
	>"$t"
mv "$t" "$final"
