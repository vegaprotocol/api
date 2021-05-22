#!/usr/bin/env bash

# Set version strings everywhere.

version="${1:-}"
versionregex='^[0-9]+\.[0-9]+\.[0-9]+(-(a|pre)[0-9]+)?$'
if ! echo "$version" | grep -qE "$versionregex" ; then
	echo "Version does not match regex."
	echo "Regex: $versionregex"
	exit 1
fi

checkfile() {
	file="${1:-}"
	regex="${2:-}"
	if ! grep -qE "$regex" "$file" ; then
		echo "Failed to set version in $file"
		exit 1
	fi
}

# Main readme
sed --in-place -e 's#^Version: .*$#Version: '"$version"'#' README.md
checkfile README.md '^Version: '"$version"'$'

# CPP
# to be done

# Java
sed --in-place -e 's#^    <version>[^<]*</version>#    <version>'"$version"'</version>#' grpc/clients/java/pom.xml
checkfile grpc/clients/java/pom.xml "<version>$version</version>"

# Javascript
sed --in-place -e 's#"version": "[^"]*"#"version": "'"$version"'"#' grpc/clients/js/package.json
checkfile grpc/clients/js/package.json '"version": "'"$version"'",'
sed --in-place -e 's#^  "version": "[^"]*"#  "version": "'"$version"'"#' grpc/clients/js/package-lock.json
checkfile grpc/clients/js/package-lock.json '^  "version": "'"$version"'",'
(cd grpc/clients/js && npm install)

# Python
sed --in-place -e 's#^VERSION = "[^"]*"#VERSION = "'"$version"'"#' grpc/clients/python/setup.py
checkfile grpc/clients/python/setup.py '^VERSION = "'"$version"'"'
