#!/usr/bin/python3

"""
Script language: Python3

Talks to:
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

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

# __get_trades_for_order:
# Request a list of trades for a specific order on a Vega network
orderID = "V0000929211-0046318720"
url = "{base}/orders/{orderID}/trades".format(base=node_url_rest, orderID=orderID)
response = requests.get(url)
helpers.check_response(response)
responseJson = response.json()
print("TradesByOrderID:\n{}".format(json.dumps(responseJson, indent=2, sort_keys=True)))
# :get_trades_for_order__
