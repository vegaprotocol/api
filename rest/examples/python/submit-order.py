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
import sys
from typing import Any, Dict

import helpers

# --- Edit these values below ---
node_url_rest = ">> e.g. https://lb.testnet.vega.xyz"
walletserver_url = ">> Vega-hosted wallet: https://wallet.testnet.vega.xyz"
walletserver_url = ">> self-hosted wallet: http://localhost:1789"
wallet_name = ">> your wallet name here"
wallet_passphrase = ">> your passphrase here"

node_url_rest = "https://n03.s.vega.xyz"
walletserver_url = "https://wallet.s.vega.xyz"
wallet_name = "demo"
wallet_passphrase = "123"

# --- Edit these values above ---

if "--ci" in sys.argv:
    node_url_rest = helpers.get_from_env("NODE_URL_REST")
    walletserver_url = helpers.get_from_env("WALLETSERVER_URL")
    wallet_name = helpers.get_from_env("WALLET_NAME")
    wallet_passphrase = helpers.get_from_env("WALLET_PASSPHRASE")

if not helpers.check_url(node_url_rest):
    print("Invalid Vega node URL (REST)")
    print('Edit this script and look for "Edit these values"')
    exit(1)

if not helpers.check_url(walletserver_url):
    print("Invalid wallet server URL")
    print('Edit this script and look for "Edit these values"')
    exit(1)

if not helpers.check_var(wallet_name):
    print("Invalid wallet name")
    print('Edit this script and look for "Edit these values"')
    exit(1)

if not helpers.check_var(wallet_passphrase):
    print("Invalid wallet passphrase")
    print('Edit this script and look for "Edit these values"')
    exit(1)

# Help guide users against including api version suffix on url
walletserver_url = helpers.fix_walletserver_url(walletserver_url)

# __create_wallet:
CREATE_NEW_WALLET = False
if CREATE_NEW_WALLET:
    # EITHER: Create new wallet
    url = f"{walletserver_url}/api/v1/wallets"
else:
    # OR: Log in to existing wallet
    url = f"{walletserver_url}/api/v1/auth/token"

req: Dict[str, Any]

# Make request to create new wallet or log in to existing wallet
req = {"wallet": wallet_name, "passphrase": wallet_passphrase}
response = requests.post(url, json=req)
helpers.check_response(response)

# Pull out the token and make a headers dict
token = response.json()["token"]
headers = {"Authorization": f"Bearer {token}"}
# :create_wallet__

# __generate_keypair:
GENERATE_NEW_KEYPAIR = False
pub_key = ""
if GENERATE_NEW_KEYPAIR:
    # EITHER: Generate a new keypair
    req = {
        "passphrase": wallet_passphrase,
        "meta": [{"key": "alias", "value": "my_key_alias"}],
    }
    url = f"{walletserver_url}/api/v1/keys"
    response = requests.post(url, headers=headers, json=req)
    helpers.check_response(response)
    pub_key = response.json()["key"]["pub"]
else:
    # OR: List existing keypairs
    url = f"{walletserver_url}/api/v1/keys"
    response = requests.get(url, headers=headers)
    helpers.check_response(response)
    keys = response.json()["keys"]
    assert len(keys) > 0
    pub_key = keys[0]["pub"]
# :generate_keypair__

assert pub_key != ""

# __get_market:
# Next, get a Market ID
url = f"{node_url_rest}/markets"
response = requests.get(url)
helpers.check_response(response)
marketID = response.json()["markets"][0]["id"]
# :get_market__

# __prepare_order:
# Next, prepare an order_submission tx
response = requests.get(f"{node_url_rest}/time")
helpers.check_response(response)
blockchaintime = int(response.json()["timestamp"])
expiresAt = str(int(blockchaintime + 120 * 1e9))  # expire in 2 minutes

req = {
    "pub_key": pub_key,
    "propagate": True,
    "order_submission": {
        "market_id": marketID,
        # Note: price is an integer. For example 123456 is a price of 1.23456,
        # assuming 5 decimal places.
        "price": "100000",
        "size": "100",
        "side": "SIDE_BUY",
        "time_in_force": "TIME_IN_FORCE_GTT",
        "expires_at": expiresAt,
        "type": "TYPE_LIMIT",
        "reference": "222repo:api;lang:python;sample:submit-order-rest",
        # "pegged_order": None,
    },
}
# :prepare_order__

# __sign_tx:
# Wallet server: Sign the prepared transaction
print("Request for SignTx:")
print(json.dumps(req, indent=2, sort_keys=True))
url = f"{walletserver_url}/api/v1/command"
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)
responsejson = response.json()
# :sign_tx__

print("Response from SignTx:")
print(json.dumps(responsejson, indent=2, sort_keys=True))

print("All is well.")
