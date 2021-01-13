#!/usr/bin/env bash

js_generated_dir="${JS_GENERATED_DIR:?}"

pushd js 1>/dev/null || exit 1
./.generate_indexjs.sh
popd 1>/dev/null || exit 1

find "$js_generated_dir" -name '*.js' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
find "$js_generated_dir" -name '*.ts' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
