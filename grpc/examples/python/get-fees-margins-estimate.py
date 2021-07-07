#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega node (gRPC)

Apps/Libraries:
- gRPC: Vega-API-client (https://pypi.org/project/Vega-API-client/)
"""

# Note: this file uses smart-tags in comments to section parts of the code to
# show them as snippets in our documentation. They are not necessary to be
# included when creating your own custom code.
#
# Example of smart-tags:
#  __something:
# some code here
# :something__

import helpers

# __import_client:
import vegaapiclient as vac
# :import_client__

# Vega wallet interaction helper, please see login.py for more detail
from login import token, pubkey
print(token)

# Load gRPC Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository
node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")

# Vega gRPC clients for reading/writing data
data_client = vac.VegaTradingDataClient(node_url_grpc)

###############################################################################
#                           F I N D   M A R K E T                             #
###############################################################################

# __get_market:
# Request the identifier for the market to place on
markets = data_client.Markets(vac.api.trading.MarketsRequest()).markets
marketID = markets[0].id
# :get_market__

assert marketID != ""
print(f"Market found: {marketID}")

###############################################################################
#                        F E E   E S T I M A T I O N                          #
###############################################################################

# __get_fees_estimate:
# Request to estimate trading fees on a Vega network
estimate = vac.api.trading.EstimateFeeRequest(
    order=vac.vega.Order(
        market_id=marketID,
        party_id=pubkey,
        price=100000,
        size=100,
        side=vac.vega.Side.SIDE_BUY,
        time_in_force=vac.vega.Order.TimeInForce.TIME_IN_FORCE_GTC,
        type=vac.vega.Order.Type.TYPE_LIMIT,
    )
)
estimated_fees = data_client.EstimateFee(estimate)
print("FeeEstimates:\n{}".format(estimated_fees))
# :get_fees_estimate__

###############################################################################
#                      M A R G I N   E S T I M A T I O N                      #
###############################################################################

# __get_margins_estimate:
# Request to estimate trading margin on a Vega network
estimate = vac.api.trading.EstimateMarginRequest(
    order=vac.vega.Order(
        market_id=marketID,
        party_id=pubkey,
        price=600000,
        size=10,
        side=vac.vega.Side.SIDE_BUY,
        time_in_force=vac.vega.Order.TimeInForce.TIME_IN_FORCE_GTC,
        type=vac.vega.Order.Type.TYPE_LIMIT,
    )
)
estimated_margins = data_client.EstimateMargin(estimate)
print("MarginEstimates:\n{}".format(estimated_margins))
# :get_margins_estimate__
