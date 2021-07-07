#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega node (REST)

Apps/Libraries:
- REST: requests (https://pypi.org/project/requests/)

Responses:
- response-examples.txt
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

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

# __get_parties:
# Request a list of parties trading on a Vega network
url = "{base}/parties".format(base=node_url_rest)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("Parties:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_parties__

assert len(response_json["parties"]) > 0
pubkey = response_json["parties"][0]["id"]

# __get_party_by_id:
# Request a party by their identifier (this is their public key)
url = "{base}/parties/{partyID}".format(base=node_url_rest, partyID=pubkey)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("PartyById:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_party_by_id__
