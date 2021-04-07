#!/usr/bin/env bash

doc_generated_dir="${DOC_GENERATED_DIR:?}"

find "$doc_generated_dir" '(' -name '*.html' -o -name '*.md' ')' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
