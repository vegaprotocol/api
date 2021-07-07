#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega node (REST)
- Vega wallet (REST)

Apps/Libraries:
- REST: requests (https://pypi.org/project/requests/)
"""

# Note: this file uses smart-tags in comments to section parts of the code to
# show them as snippets in our documentation. They are not necessary to be
# included when creating your own custom code.
#
# Example of smart-tags:
#  __something:
# some code here
# :something__

import json
import requests
import helpers

# Vega wallet interaction helper, please see login.py for more detail
from login import token, pubkey
print(token)

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

###############################################################################
#                        L I S T   P R O P O S A L S                          #
###############################################################################

# There are two types of REST request for proposals on Vega:
# 1 - MARKET proposals (/governance/market/proposals)
# 2 - ASSET proposals (/governance/asset/proposals)
# Note: Future users will be able to call an endpoint to retrieve ALL proposals

# __get_proposals:
# Request a list of proposals on a Vega network
response = requests.get(node_url_rest + "/governance/market/proposals")
helpers.check_response(response)
proposals = response.json()
print("Proposals:\n{}".format(json.dumps(proposals, indent=2, sort_keys=True)))
# :get_proposals__

proposalID = proposals["data"][0]["proposal"]["id"]
assert proposalID != ""
print(f"Proposal found: {proposalID}")

###############################################################################
#                       P R O P O S A L   D E T A I L S                       #
###############################################################################

# __get_proposal_detail:
# Request results of a specific proposal on a Vega network
response = requests.get(node_url_rest + "/governance/proposal/" + proposalID)
helpers.check_response(response)
response_json = response.json()
print("Proposal:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_proposal_detail__

###############################################################################
#                        P A R T Y   P R O P O S A L S                        #
###############################################################################

# __get_proposals_by_party:
# Request results of a specific proposal on a Vega network
response = requests.get(node_url_rest + "/parties/" + pubkey + "/proposals")
helpers.check_response(response)
response_json = response.json()
print("Party proposals:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_proposals_by_party__
