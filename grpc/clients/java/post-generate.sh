#!/usr/bin/env bash

java_generated_dir="${JAVA_GENERATED_DIR:?}"

find "$java_generated_dir" -name '*.java' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
