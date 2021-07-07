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

# Load gRPC Vega Node URL, this is set using 'source examples-config'
# located in the root folder of the api repository

# __import_client:
import vegaapiclient as vac
node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")
data_client = vac.VegaTradingDataClient(node_url_grpc)
# :import_client__

print(token)

###############################################################################
#                            L I S T   P R O P O S A L S                      #
###############################################################################

# __get_proposals:
# Request a list of proposals on a Vega network
request = vac.api.trading.GetProposalsRequest()
proposals = data_client.GetProposals(request)
print("Proposals:\n{}".format(proposals))
# :get_proposals__

proposalID = proposals.data[0].proposal.id
assert proposalID != ""
print(f"Proposal found: {proposalID}")

###############################################################################
#                         P R O P O S A L   D E T A I L S                     #
###############################################################################

# __get_proposal_detail:
# Request results of a specific proposal on a Vega network
request = vac.api.trading.GetProposalByIDRequest(proposal_id=proposalID)
proposal = data_client.GetProposalByID(request)
print("Proposal:\n{}".format(proposal))
# :get_proposal_detail__

###############################################################################
#                          P A R T Y   P R O P O S A L S                      #
###############################################################################

# __get_proposals_by_party:
# Request a list of proposals for a party (pubkey) on a Vega network
request = vac.api.trading.GetProposalsByPartyRequest(party_id=pubkey)
party_proposals = data_client.GetProposalsByParty(request)
print("Party proposals:\n{}".format(party_proposals))
# :get_proposals_by_party__
