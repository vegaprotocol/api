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

# __get_markets:
# Request a list of markets available on a Vega network
url = "{base}/markets".format(base=node_url_rest)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("Markets:\n{}".format(json.dumps(response_json, indent=2, sort_keys=True)))
# :get_markets__

market_id = response_json["markets"][0]["id"]
assert market_id != ""

# __get_market_data:
# Request the market data for a market on a Vega network
url = "{base}/markets-data/{marketId}".format(base=node_url_rest, marketId=market_id)
response = requests.get(url)
helpers.check_response(response)
response_json = response.json()
print("MarketData:\n{}".format(json.dumps(response_json, indent=2, sort_keys=True)))
# :get_market_data__
