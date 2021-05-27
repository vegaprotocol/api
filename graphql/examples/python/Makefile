# Makefile

.PHONY: default
default:
	@pipenv --bare sync
	@pipenv --bare clean
	@pipenv run python3 prepare_proposal.py --proposal ../json/proposal-newmarket.json
