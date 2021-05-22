#!/usr/bin/env bash

check_var() {
	var_name="${1:?}"
	var_value="${!var_name}"
	if [[ -z "$var_value" ]] ; then
		echo "Invalid $var_name - empty"
		return 1
	fi
}

check_url() {
	var_name="${1:?}"
	check_var "$var_name" || return 1
	invalid "$var_name" && return 1
	var_value="${!var_name}"
	if ! echo "$var_value" | grep -qE '^http[s]?://' ; then
		echo "Invalid $var_name - does not start with \"http://\" or \"https://\""
		return 1
	fi
}

invalid() {
	var_name="${1:?}"
	var_value="${!var_name}"
	for substr in ">>" "e.g." "example" ; do
		if echo "$var_value" | grep -qF "$substr" ; then
			echo "Invalid $var_name - contains \"$substr\""
			return 0
		fi
	done
	return 1
}
