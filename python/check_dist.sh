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

tgz_pycount="$(tar tzf "$tgz" | grep -cE '/(tests|vegaapiclient)/.*\.py$')"

whl_pycount="$(zipinfo "$whl" | grep -cE ' (tests|vegaapiclient)/.*\.py$')"

srctree_pycount="$(find vegaapiclient/ tests/ -name '*.py' |wc -l)"

if test "$tgz_pycount" -ne "$srctree_pycount" -o "$whl_pycount" -ne "$srctree_pycount" ; then
	echo "Python file counts do not match:"
	echo "In the tar.gz file: $tgz_pycount"
	echo "In the wheel file : $tgz_pycount"
	echo "In the source tree: $srctree_pycount"
	exit 1
fi
