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

node_url_grpc = helpers.get_from_env("NODE_URL_GRPC")

# __get_order_by_ref:
# Request an order by reference on a Vega network
# Note: This is an example and order reference will be provided in the response
# from a prepareSubmitOrder request in the field named `submitID` or similar.
reference = "15b757d2-9dcd-4442-81da-18c709c8d97e"
data_client = vac.VegaTradingDataClient(node_url_grpc)
order_by_ref_request = vac.api.trading.OrderByReferenceRequest(
    reference=reference
)
response = data_client.OrderByReference(order_by_ref_request)
print("OrderByReference:\n{}".format(response))
# :get_order_by_ref__
