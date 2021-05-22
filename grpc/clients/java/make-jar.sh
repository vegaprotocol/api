#!/usr/bin/env bash

# This script generates a jar file. Run it as:
#
#     cd java
#     ./make-jar.sh

set -e

java_generated_dir=generated

mv pom.xml $java_generated_dir/

pushd $java_generated_dir 1>/dev/null || exit 1
mvn clean package
popd 1>/dev/null || exit 1
