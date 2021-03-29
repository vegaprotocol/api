#!/usr/bin/env bash

set -e

# Inject extra content into spec
t="$(mktemp -p "$PWD" -t tmp-XXXXXXXX.json)"
final=rest/api/trading.swagger.json
jq -sMS '.[0] * .[1]' "$final" rest/extra.json >"$t"
mv "$t" "$final"
