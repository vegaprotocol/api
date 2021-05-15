# Makefile

.PHONY: default
default:
	@echo "Please specify a target."

.PHONY: gosec
gosec:
	@gosec ./...

.PHONY: lint
lint:
	@outputfile="$$(mktemp)" ; \
	golint ./... 2>&1 | tee "$$outputfile" ; \
	lines="$$(wc -l <"$$outputfile")" ; \
	rm -f "$$outputfile" ; \
	exit "$$lines"

.PHONY: retest
retest:
	@go test -count=1 ./...

.PHONY: test
test:
	@go test ./...

.PHONY: vet
vet:
	@go vet ./...
