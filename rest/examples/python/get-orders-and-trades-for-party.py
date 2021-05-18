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
import os
import requests
import helpers

# Vega wallet interaction helper, please see login.py for more detail
from login import token, pubkey

node_url_rest = os.getenv("NODE_URL_REST")
if not helpers.check_url(node_url_rest):
    print("Error: Invalid or missing NODE_URL_REST environment variable.")
    exit(1)

# __get_orders_for_party:
# Request a list of orders by party (pubKey)
url = "{base}/parties/{party}/orders".format(base=node_url_rest, party=pubkey)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("OrdersByParty:\n{}".format(json.dumps(response_json, indent=2, sort_keys=True)))
# :get_orders_for_party__

# __get_trades_for_party:
# Request a list of trades by party (pubKey)
url = "{base}/parties/{party}/trades".format(base=node_url_rest, party=pubkey)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("TradesByParty:\n{}".format(json.dumps(response_json, indent=2, sort_keys=True)))
# :get_trades_for_party__
