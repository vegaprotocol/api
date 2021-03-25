# Makefile

SHELL := /usr/bin/env bash

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- pregraphql:  Copy schema.graphql from vega core repository."
	@echo "- graphql:     Build GraphQL documentation."

.PHONY: pregraphql
pregraphql:
	@if test -z "$(VEGACORE)" ; then echo "Please set VEGACORE" ; exit 1 ; fi
	@cp -a "$(VEGACORE)/gateway/graphql/schema.graphql" ./

.PHONY: graphql
graphql:
	@gd=./node_modules/.bin/graphqldoc && \
	if ! test -x "$$gd" ; then \
		npm install || exit 1 ; \
	fi && \
	"$$gd" -f -s schema.graphql -o doc/

