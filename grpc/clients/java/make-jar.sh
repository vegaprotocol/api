#!/usr/bin/env bash

# This script generates a jar file. Run it as:
#
#     cd grpc/clients/java
#     ./make-jar.sh

set -e

cp pom.xml generated/

pushd generated 1>/dev/null || exit 1
mvn clean package
popd 1>/dev/null || exit 1
