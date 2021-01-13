#!/usr/bin/env bash

cpp_generated_dir="${CPP_GENERATED_DIR:?}"

find "$cpp_generated_dir" -name '*.pb.cc' -o -name '*.pb.h' -print0 | xargs -0r sed --in-place -re 's#[ \t]+$##'
