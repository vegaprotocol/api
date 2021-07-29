#!/usr/bin/env python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
- Vega node (gRPC)

Apps/Libraries:
- REST (wallet): Vega-API-client (https://pypi.org/project/Vega-API-client/)
- gRPC (node): Vega-API-client (https://pypi.org/project/Vega-API-client/)
"""

# Note: this file uses special tags in comments to enable snippets to be
# included in documentation.
# Example
#   # __something:
#   some code here
#   # :something__

import sys

# __import_client:
import vegaapiclient as vac

# :import_client__
import helpers

# --- Edit these values below ---
node_url_grpc = ">> e.g. n06.testnet.vega.xyz:3002"
walletserver_url = ">> Vega-hosted wallet: https://wallet.testnet.vega.xyz"
walletserver_url = ">> self-hosted wallet: http://localhost:1789"
wallet_name = ">> your wallet name here"
wallet_passphrase = ">> your passphrase here"
# --- Edit these values above ---

if "--ci" in sys.argv:
    node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")
    walletserver_url = helpers.get_from_env("WALLETSERVER_URL")
    wallet_name = helpers.get_from_env("WALLET_NAME")
    wallet_passphrase = helpers.get_from_env("WALLET_PASSPHRASE")

if not helpers.check_var(node_url_grpc):
    print("Invalid Vega node URL (gRPC)")
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
# Vega node: Create client for accessing public data
datacli = vac.VegaTradingDataClient(node_url_grpc)

# Vega node: Create client for trading (e.g. submitting orders)
tradingcli = vac.VegaTradingClient(node_url_grpc)

# Wallet server: Create a walletclient (see above for details)
walletclient = vac.WalletClient(walletserver_url)
login_response = walletclient.login(wallet_name, wallet_passphrase)
# :create_wallet__
helpers.check_response(login_response)

# __get_market:
# Get a list of markets
markets = datacli.Markets(vac.api.trading.MarketsRequest()).markets
# Choose the first.
marketID = markets[0].id
# :get_market__

# __generate_keypair:
GENERATE_NEW_KEYPAIR = False
if GENERATE_NEW_KEYPAIR:
    # If you don't already have a keypair, generate one.
    response = walletclient.generatekey(
        wallet_passphrase,
        [{"key": "alias", "value": "my_key_alias"}],
    )
    helpers.check_response(response)
    pub_key = response.json()["key"]["pub"]
else:
    # List keypairs
    response = walletclient.listkeys()
    helpers.check_response(response)
    keys = response.json()["keys"]
    assert len(keys) > 0
    pub_key = keys[0]["pub"]
# :generate_keypair__

# __prepare_order:
req = vac.wallet.v1.wallet.SubmitTransactionRequest(
    pub_key=pub_key,
    propagate=False,
    order_submission=vac.commands.v1.commands.OrderSubmission(
        market_id=marketID,
        # price is an integer. For example 123456 is a price of 1.23456,
        # assuming 5 decimal places.
        price=100000,
        size=1,
        side=vac.vega.Side.SIDE_BUY,
        time_in_force=vac.vega.Order.TimeInForce.TIME_IN_FORCE_GTC,
        expires_at=0,  # not needed for GTC orders
        type=vac.vega.Order.Type.TYPE_LIMIT,
        reference="repo:api;lang:python;sample:submit-order-grpc",
        # pegged_order=None,
    ),
)
# :prepare_order__

# __sign_tx:
# Use the helper function to sign and submit the tx
tradingcli.sign_submit_tx_v2(walletclient, req)
# :sign_tx__

print("All is well.")
