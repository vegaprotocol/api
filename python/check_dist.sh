#!/usr/bin/env bash

# Check that the number of python files in the tgz and whl files matches the
# number of python files in the source tree.

set -e

tgz="$(find dist -name 'Vega API client-*.tar.gz')"
if test -z "$tgz" ; then
	echo "No source archive found."
	exit 1
fi

whl="$(find dist -name 'Vega_API_client-*-py3-none-any.whl')"
if test -z "$tgz" ; then
	echo "No wheel archive found."
	exit 1
fi

tgz_pyfiles="$(tar tzf "$tgz" | grep -E '/(tests|vegaapiclient)/.*\.py$')"
tgz_pycount="$(echo "$tgz_pyfiles" | wc -l)"

whl_pyfiles="$(zipinfo "$whl" | grep -E ' (tests|vegaapiclient)/.*\.py$')"
whl_pycount="$(echo "$whl_pyfiles" | wc -l)"

srctree_pyfiles="$(find vegaapiclient/ tests/ -name '*.py')"
srctree_pycount="$(echo "$srctree_pyfiles" | wc -l)"

if test "$tgz_pycount" -ne "$srctree_pycount" -o "$whl_pycount" -ne "$srctree_pycount" ; then
	echo "Python file counts do not match:"
	echo "In the tar.gz file: $tgz_pycount"
	echo "In the wheel file : $whl_pycount"
	echo "In the source tree: $srctree_pycount"

	echo "=== Files in the tar.gz ==="
	echo "$tgz_pyfiles"
	echo "=== Files in the wheel ==="
	echo "$whl_pyfiles"
	echo "=== Files in the source tree ==="
	echo "$srctree_pyfiles"
	exit 1
fi
