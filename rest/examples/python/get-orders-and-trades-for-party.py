#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
- Vega node (REST)

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

# Vega wallet interaction helper, see login.py for detail
from login import token, pubkey
print(token)

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

# __get_orders_for_party:
# Request a list of orders by party (pubKey)
url = "{base}/parties/{party}/orders".format(base=node_url_rest, party=pubkey)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("OrdersByParty:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_orders_for_party__

# __get_trades_for_party:
# Request a list of trades by party (pubKey)
url = "{base}/parties/{party}/trades".format(base=node_url_rest, party=pubkey)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("TradesByParty:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_trades_for_party__
