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
import os
import helpers

# Vega wallet interaction helper, see login.py for detail
from login import pubkey

# Load REST Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_rest = helpers.get_from_env("NODE_URL_REST")

#####################################################################################
#                               F I N D   M A R K E T                               #
#####################################################################################

# __get_market:
# Request the identifier for the market to place on
url = f"{node_url_rest}/markets"
response = requests.get(url)
helpers.check_response(response)
marketID = response.json()["markets"][0]["id"]
# :get_market__

assert marketID != ""
print(f"Market found: {marketID}")

#####################################################################################
#                           F E E   E S T I M A T I O N                             #
#####################################################################################

# __get_fees_estimate:
# Request to estimate trading fees on a Vega network
req = {
    "order": {
        "marketId": marketID,
        "partyId": pubkey,
        "price": "100000",
        "size": "100",
        "side": "SIDE_BUY",
        "timeInForce": "TIME_IN_FORCE_GTC",
        "type": "TYPE_LIMIT",
    }
}
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{node_url_rest}/orders/fee/estimate"
response = requests.post(url, json=req)
helpers.check_response(response)
estimatedFees = response.json()
print("FeeEstimates:\n{}".format(
    json.dumps(estimatedFees, indent=2, sort_keys=True)))
# :get_fees_estimate__

#####################################################################################
#                         M A R G I N   E S T I M A T I O N                         #
#####################################################################################

# __get_margins_estimate:
# Request to estimate trading margin on a Vega network
req = {
    "order": {
        "marketId": marketID,
        "partyId": pubkey,
        "price": "600000",
        "size": "10",
        "side": "SIDE_BUY",
        "timeInForce": "TIME_IN_FORCE_GTC",
        "type": "TYPE_LIMIT",
    }
}
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{node_url_rest}/orders/margins/estimate"
response = requests.post(url, json=req)
helpers.check_response(response)
estimatedMargin = response.json()
print("MarginsEstimate:\n{}".format(
    json.dumps(estimatedMargin, indent=2, sort_keys=True)))
# :get_margins_estimate__
