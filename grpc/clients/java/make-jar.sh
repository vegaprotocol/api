#!/usr/bin/env bash

# This script generates a jar file. Run it as:
#
#     cd java
#     ./make-jar.sh

set -e

java_generated_dir=generated
jar_protobuf_version=3.13.0
jar_protobuf="protobuf-java-$jar_protobuf_version.jar"

mkdir -p lib
if ! test -f "lib/$jar_protobuf" ; then
	filepath="com/google/protobuf/protobuf-java/$jar_protobuf_version/protobuf-java-$jar_protobuf_version.jar"
	wget -q -O "lib/$jar_protobuf" "https://search.maven.org/remotecontent?filepath=$filepath"
fi

find "$java_generated_dir" -name '*.java' -print0 | xargs -0r javac -cp "$java_generated_dir:lib/$jar_protobuf"

api_clients_version="$(git describe --tags 2>/dev/null || echo unknown)"
java_version="$(java -version 2>&1 | awk '$2 == "version" {gsub(/"/, ""); print $3" ("$1")"}')"
vega_version="$(sed -e 's/^v//' ../proto/from.txt)"

cat >"$java_generated_dir/manifest.txt" <<EOF
Manifest-Version: 1.0
Created-by: $java_version
Main-Class: n/a
Class-Path: $jar_protobuf
Name: com.vegaprotocol.vega
Specification-Title: Vega
Specification-Version: $vega_version
Specification-Vendor: Vega
Implementation-Title: Vega
Implementation-Version: $api_clients_version
Implementation-Vendor: Vega
Export-Package: io.vegaprotocol.vega;version="$vega_version"
Import-Package: com.google.protobuf;version="[3.13,4)"
EOF

pushd "$java_generated_dir" 1>/dev/null || exit 1
jar cfm "vega-$vega_version.jar" manifest.txt com io
ln -s "vega-$vega_version.jar" io.vegaprotocol.vega.jar
popd 1>/dev/null || exit 1
