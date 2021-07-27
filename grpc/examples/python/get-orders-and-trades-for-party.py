#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
- Vega node (gRPC)

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

import helpers

# Vega wallet interaction helper, see login.py for detail
from login import token, pubkey

# __import_client:
import vegaapiclient as vac
node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")
data_client = vac.VegaTradingDataClient(node_url_grpc)
# :import_client__

print("Token:", token)

# __get_orders_for_party:
# Request a list of orders by party (pubKey)
orders_by_party_request = vac.api.trading.OrdersByPartyRequest(
    party_id=pubkey
)
orders_response = data_client.OrdersByParty(orders_by_party_request)
print("OrdersByParty:\n{}".format(orders_response))
# :get_orders_for_party__

# __get_trades_for_party:
# Request a list of trades by party (pubKey)
trades_by_party_request = vac.api.trading.TradesByPartyRequest(
    party_id=pubkey
)
trades_response = data_client.TradesByParty(trades_by_party_request)
print("TradesByParty:\n{}".format(trades_response))
# :get_trades_for_party__
