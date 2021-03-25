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

# Javascript
sed --in-place -e 's#"version": "[^"]*"#"version": "'"$version"'"#' grpc/js/package.json
checkfile grpc/js/package.json '"version": "'"$version"'",'
sed --in-place -e 's#^  "version": "[^"]*"#  "version": "'"$version"'"#' grpc/js/package-lock.json
checkfile grpc/js/package-lock.json '^  "version": "'"$version"'",'

# Python
sed --in-place -e 's#^VERSION = "[^"]*"#VERSION = "'"$version"'"#' grpc/python/setup.py
checkfile grpc/python/setup.py '^VERSION = "'"$version"'"'
