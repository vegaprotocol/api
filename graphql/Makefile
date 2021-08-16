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
	@(cd "$(VEGACORE)" && git describe --tags) >from.txt

.PHONY: graphql
graphql:
	@npm install
	@npm run docs
	@npm run generate
