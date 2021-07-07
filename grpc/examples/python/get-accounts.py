#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega node (gRPC)

Apps/Libraries:
- Vega-API-client (https://pypi.org/project/Vega-API-client/)

Responses:
- response-examples.txt
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

print(token)

###############################################################################
#                        M A R K E T   A C C O U N T S                        #
###############################################################################

# Request a list of markets and select the first one
req = vac.api.trading.MarketsRequest()
markets = data_client.Markets(req).markets
marketID = markets[0].id

assert marketID != ""
print(f"Market found: {marketID}")

# __get_accounts_by_market:
# Request a list of accounts for a market on a Vega network
request = vac.api.trading.MarketAccountsRequest(market_id=marketID)
market_accounts = data_client.MarketAccounts(request)
print("Market accounts:\n{}".format(market_accounts))
# :get_accounts_by_market__

###############################################################################
#                         P A R T Y   A C C O U N T S                         #
###############################################################################

# __get_accounts_by_party:
# Request a list of accounts for a party (pubkey) on a Vega network
request = vac.api.trading.PartyAccountsRequest(party_id=pubkey)
party_accounts = data_client.PartyAccounts(request)
print("Party accounts:\n{}".format(party_accounts))
# :get_accounts_by_party__

###############################################################################
#                        P A R T Y   P O S I T I O N S                        #
###############################################################################

# __get_positions_by_party:
# Request a list of positions for a party (pubkey) on a Vega network
request = vac.api.trading.PositionsByPartyRequest(party_id=pubkey)
party_positions = data_client.PositionsByParty(request)
print("Party positions:\n{}".format(party_positions))
# :get_positions_by_party__
