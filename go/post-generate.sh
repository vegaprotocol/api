#!/usr/bin/env bash

go_generated_dir="${GO_GENERATED_DIR:?}"

find "$go_generated_dir" -name '*.go' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
