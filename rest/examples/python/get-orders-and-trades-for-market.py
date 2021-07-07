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

url = "{base}/markets".format(base=node_url_rest)
response = requests.get(url)
helpers.check_response(response)
responseJson = response.json()
marketID = responseJson["markets"][0]["id"]
assert marketID != ""

# __get_orders_for_market:
# Request a list of orders by market on a Vega network
url = "{base}/markets/{marketID}/orders".format(
    base=node_url_rest, marketID=marketID
)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("OrdersByMarket:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_orders_for_market__

# __get_trades_for_market:
# Request a list of trades by market on a Vega network
url = "{base}/markets/{marketID}/trades".format(
    base=node_url_rest, marketID=marketID
)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("TradesByMarket:\n{}".format(
    json.dumps(response_json, indent=2, sort_keys=True)
))
# :get_trades_for_market__
