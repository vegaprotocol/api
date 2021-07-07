#!/usr/bin/env python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
- Vega node (REST)

Apps/Libraries:
- REST (wallet): requests (https://pypi.org/project/requests/)
- REST (node): requests (https://pypi.org/project/requests/)
"""

# Note: this file uses special tags in comments to enable snippets to be
# included in documentation.
# Example
#   #  __something:
#   some code here
#   # :something__

import json
import requests
import helpers

# Vega wallet interaction helper, see login.py for detail
from login import token, pubkey

# Load Vega network URLs, these are set using 'source examples-config'
# located in the root folder of the api repository
wallet_server_url = helpers.get_from_env("WALLETSERVER_URL")
node_url_rest = helpers.get_from_env("NODE_URL_REST")

assert pubkey != ""

# __get_market:
# Next, get a Market ID
url = f"{node_url_rest}/markets"
response = requests.get(url)
helpers.check_response(response)
marketID = response.json()["markets"][0]["id"]
# :get_market__

# __prepare_order:
# Next, prepare a SubmitOrder
response = requests.get(f"{node_url_rest}/time")
helpers.check_response(response)
blockchainTime = int(response.json()["timestamp"])
expiresAt = str(int(blockchainTime + 120 * 1e9))  # expire in 2 minutes

req = {
    "submission": {
        "marketId": marketID,
        "partyId": pubkey,
        "price": "100000",  # Note: price is an integer. For example 123456
        "size": "100",  # is a price of 1.23456, assuming 5 decimal places.
        "side": "SIDE_BUY",
        "timeInForce": "TIME_IN_FORCE_GTT",
        "expiresAt": expiresAt,
        "type": "TYPE_LIMIT",
    }
}
print("Request for PrepareSubmitOrder:")
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{node_url_rest}/orders/prepare/submit"
response = requests.post(url, json=req)
helpers.check_response(response)
preparedOrder = response.json()
# :prepare_order__
print("Response from PrepareSubmitOrder:")
print(json.dumps(preparedOrder, indent=2, sort_keys=True))

# __sign_tx:
# Wallet server: Sign the prepared transaction
blob = preparedOrder["blob"]
req = {"tx": blob, "pubKey": pubkey, "propagate": False}
print("Request for SignTx:")
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)
signedTx = response.json()["signedTx"]
# :sign_tx__
print("Response from SignTx:")
print(json.dumps(signedTx, indent=2, sort_keys=True))

# __submit_tx:
# Vega node: Submit the signed transaction
req = {"tx": signedTx}
print("Request for SubmitTransaction:")
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{node_url_rest}/transaction"
response = requests.post(url, json=req)
helpers.check_response(response)
# :submit_tx__

assert response.json()["success"]
print("All is well.")
