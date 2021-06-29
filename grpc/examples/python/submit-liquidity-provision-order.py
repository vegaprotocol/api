#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
- Vega node (gRPC)

Apps/Libraries:
- Vega-API-client (https://pypi.org/project/Vega-API-client/)
"""

# Note: this file uses smart-tags in comments to section parts of the code to
# show them as snippets in our documentation. They are not necessary to be
# included when creating your own custom code.
#
# Example of smart-tags:
#  __something:
# some code here
# :something__
#

import base64
import helpers
import time
import requests

# Vega wallet interaction helper, see login.py for detail
from login import token, pubkey

# Load Vega network URLs, these are set using 'source examples-config'
# located in the root folder of the api repository
wallet_server_url = helpers.get_from_env("WALLETSERVER_URL")
node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")


# __import_client:
import vegaapiclient as vac

# Vega gRPC clients for reading/writing data
data_client = vac.VegaTradingDataClient(node_url_grpc)
trading_client = vac.VegaTradingClient(node_url_grpc)
# :import_client__

#####################################################################################
#                               F I N D   M A R K E T                               #
#####################################################################################

# __get_market:
# Request the identifier for the market to place on
markets = data_client.Markets(vac.api.trading.MarketsRequest()).markets
marketID = markets[0].id
# :get_market__

assert marketID != ""
marketName = markets[0].tradable_instrument.instrument.name
print(f"Market found: {marketID} {marketName}")

#####################################################################################
#                 L I S T   L I Q U I D I T Y   P R O V I S I O N S                 #
#####################################################################################

# __get_liquidity_provisions:
# Request liquidity provisions for the market
partyID="" # specify party ID if needed, otherwise all liquidity provisions for the market get returned 
liquidityProvisions = data_client.LiquidityProvisions(vac.api.trading.LiquidityProvisionsRequest(
    party=partyID,
    market=marketID
))

print("Liquidity provisions:\n{}".format(liquidityProvisions))
# :get_liquidity_provisions__

#####################################################################################
#              S U B M I T   L I Q U I D I T Y   C O M M I T M E N T                #
#####################################################################################

# Note: commitment_amount is an integer. For example 123456 is a price of 1.23456,
# for a market which is configured to have a precision of 5 decimal places.

# __prepare_liquidity_order:
# Prepare a liquidity commitment transaction message
order = vac.api.trading.PrepareLiquidityProvisionRequest(
    submission=vac.commands.v1.commands.LiquidityProvisionSubmission(
        market_id=marketID,
        commitment_amount=100,
        fee="0.01",
        reference="my-lp-reference",
        buys=[
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=1,
                offset=-1
            ),
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=2,
                offset=-2
            )
        ],
        sells=[
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=1,
                offset=1
            ),
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=2,
                offset=2
            ),
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=5,
                offset=3
            )
        ]
    )
)
prepared_order = trading_client.PrepareLiquidityProvision(order)
# :prepare_liquidity_order__

#####################################################################################
#               A M E N D    L I Q U I D I T Y   C O M M I T M E N T                #
#####################################################################################

# __amend_liquidity_order:
# Prepare a liquidity commitment order message (it will now serve as an amendment request): modify fields to be amended
order = vac.api.trading.PrepareLiquidityProvisionRequest(
    submission=vac.commands.v1.commands.LiquidityProvisionSubmission(
        market_id=marketID,
        commitment_amount=500,
        fee="0.005",
        reference="my-lp-reference",
        buys=[
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=1,
                offset=-1
            )
        ],
        sells=[
            vac.vega.LiquidityOrder(
                reference=vac.vega.PEGGED_REFERENCE_MID,
                proportion=1,
                offset=1
            )
        ]
    )
)
prepared_order = trading_client.PrepareLiquidityProvision(order)
# :amend_liquidity_order__

print(f"Prepared liquidity commitment (amendment)  for market: {marketID}")

# Sign the prepared transaction
# Note: Setting propagate to true will submit to a Vega node
blob_base64 = base64.b64encode(prepared_order.blob).decode("ascii")
req = {"tx": blob_base64, "pubKey": pubkey, "propagate": True}
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)

print("Signed order and sent to Vega")

time.sleep(10)

#####################################################################################
#               C A N C E L    L I Q U I D I T Y   C O M M I T M E N T              #
#####################################################################################

# __cancel_liquidity_order:
# Prepare a liquidity commitment order message (it will now serve as a cancellation request): set commitmentAmount to 0, 
# note that transaction may get rejected if removing previously supplied liquidity 
# will result in insufficient liquidity for the market
order = vac.api.trading.PrepareLiquidityProvisionRequest(
    submission=vac.commands.v1.commands.LiquidityProvisionSubmission(
        market_id=marketID,
        commitment_amount=0,
        reference="my-lp-reference",
    )
)
prepared_order = trading_client.PrepareLiquidityProvision(order)
# :cancel_liquidity_order__

print(f"Prepared liquidity commitment (cancellation) for market: {marketID}")

# Sign the prepared transaction
# Note: Setting propagate to true will submit to a Vega node
blob_base64 = base64.b64encode(prepared_order.blob).decode("ascii")
req = {"tx": blob_base64, "pubKey": pubkey, "propagate": True}
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)

print("Signed order and sent to Vega")


# Completed.
