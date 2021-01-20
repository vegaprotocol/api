#!/usr/bin/env bash

javascript_generated_dir="${JAVASCRIPT_GENERATED_DIR:?}"

pushd js 1>/dev/null || exit 1
./.generate_indexjs.sh
popd 1>/dev/null || exit 1

find "$javascript_generated_dir" -name '*.js' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
find "$javascript_generated_dir" -name '*.ts' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
