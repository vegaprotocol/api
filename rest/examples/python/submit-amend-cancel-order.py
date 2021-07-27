#!/usr/bin/python3

"""
Script language: Python3

Talks to:
- Vega wallet (REST)
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
#

import requests
import time
import helpers

# Vega wallet interaction helper, see login.py for detail
from login import token, pubkey

# Load Vega network URLs, these are set using 'source examples-config'
# located in the root folder of the api repository
wallet_server_url = helpers.get_from_env("WALLETSERVER_URL")
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
marketName = response.json()["markets"][0]["tradableInstrument"]["instrument"]["name"]
print(f"Market found: {marketID} {marketName}")

#####################################################################################
#                          B L O C K C H A I N   T I M E                            #
#####################################################################################

# __get_expiry_time:
# Request the current blockchain time, calculate an expiry time
response = requests.get(f"{node_url_rest}/time")
helpers.check_response(response)
blockchain_time = int(response.json()["timestamp"])
expiresAt = str(int(blockchain_time + 120 * 1e9))  # expire in 2 minutes
# :get_expiry_time__

assert blockchain_time > 0
print(f"Blockchain time: {blockchain_time}")

#####################################################################################
#                              S U B M I T   O R D E R                              #
#####################################################################################

# __prepare_submit_order:
# Prepare a submit order message
req = {
    "submission": {
        "marketId": marketID,
        "price": "1",  # Note: price is an integer. For example 123456
        "size": "100",  # is a price of 1.23456, assuming 5 decimal places.
        "side": "SIDE_BUY",
        "timeInForce": "TIME_IN_FORCE_GTT",
        "expiresAt": expiresAt,
        "type": "TYPE_LIMIT",
    }
}
url = f"{node_url_rest}/orders/prepare/submit"
response = requests.post(url, json=req)
helpers.check_response(response)
prepared_order = response.json()
# :prepare_submit_order__

order_ref = prepared_order["submitId"]
print(f"Prepared order, ref: {order_ref}")

# __sign_tx_order:
# Sign the prepared order transaction
# Note: Setting propagate to true will also submit to a Vega node
blob = prepared_order["blob"]
req = {"tx": blob, "pubKey": pubkey, "propagate": True}
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)
# :sign_tx_order__

print("Signed order and sent to Vega")

# Wait for order submission to be included in a block
print("Waiting for blockchain...", end="", flush=True)
url = f"{node_url_rest}/orders/{order_ref}"
response = requests.get(url)
while response.status_code != 200:
  time.sleep(0.5)
  print(".", end="", flush=True)
  response = requests.get(url)

response_json = response.json()
orderID = response_json["order"]["id"]
orderStatus = response_json["order"]["status"]
createVersion = response_json["order"]["version"]
orderReason = response_json["order"]["reason"]

print(f"\nOrder processed, ID: {orderID}, Status: {orderStatus}, Version: {createVersion}")
if orderStatus == "STATUS_REJECTED":
    print(f"Rejection reason: {orderReason}")

#####################################################################################
#                               A M E N D   O R D E R                               #
#####################################################################################

# __prepare_amend_order:
# Prepare the amend order message
req = {
    "amendment": {
        "orderId": orderID,
        "marketId": marketID,
        "price": {
            "value": "2"
        },
        "sizeDelta": "-25",
        "timeInForce": "TIME_IN_FORCE_GTC",
    }
}
url = f"{node_url_rest}/orders/prepare/amend"
response = requests.post(url, json=req)
helpers.check_response(response)
prepared_amend = response.json()
blob = prepared_amend["blob"]
# :prepare_amend_order__

print(f"Amendment prepared for order ID: {orderID}")

# __sign_tx_amend:
# Sign the prepared order transaction for amendment
# Note: Setting propagate to true will also submit to a Vega node
req = {"tx": blob, "pubKey": pubkey, "propagate": True}
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)
# :sign_tx_amend__

print("Signed amendment and sent to Vega")

# Wait for amendment to be included in a block
print("Waiting for blockchain...")
time.sleep(3)
url = f"{node_url_rest}/orders/{order_ref}"
response = requests.get(url)
response_json = response.json()
orderID = response_json["order"]["id"]
orderPrice = response_json["order"]["price"]
orderSize = response_json["order"]["size"]
orderTif = response_json["order"]["timeInForce"]
orderStatus = response_json["order"]["status"]
orderVersion = response_json["order"]["version"]
orderReason = response_json["order"]["reason"]

print("Amended Order:")
print(f"ID: {orderID}, Status: {orderStatus}, Price(Old): 1, "
      f"Price(New): {orderPrice}, Size(Old): 100, Size(New): {orderSize}, "
      f"TimeInForce(Old): TIME_IN_FORCE_GTT, TimeInForce(New): {orderTif}, "
      f"Version(Old): {createVersion}, Version(new): {orderVersion}")
if orderStatus == "STATUS_REJECTED":
    print(f"Rejection reason: {orderReason}")

#####################################################################################
#                             C A N C E L   O R D E R S                             #
#####################################################################################

# Select the mode to cancel orders from the following (comment out others), default = 3

# __prepare_cancel_order_req1:
# 1 - Cancel single order for the signing party (pubkey)
req = {
    "cancellation": {
        # Include market and order identifier fields to cancel single order.
        "marketId": marketID,
        "orderId": orderID,
    }
}
# :prepare_cancel_order_req1__

# __prepare_cancel_order_req2:
# 2 - Cancel all orders on market for the signing party (pubkey)
req = {
    "cancellation": {
        # Only include market identifier field.
        "marketId": marketID,
    }
}
# :prepare_cancel_order_req2__

# __prepare_cancel_order_req3:
# 3 - Cancel all orders on all markets for the signing party (pubkey)
req = {
    "cancellation": {}
}
# :prepare_cancel_order_req3__

# __prepare_cancel_order:
# Prepare the cancel order message
url = f"{node_url_rest}/orders/prepare/cancel"
response = requests.post(url, json=req)
helpers.check_response(response)
prepared_cancel = response.json()
blob = prepared_cancel["blob"]
# :prepare_cancel_order__

print(f"Cancellation prepared for order ID: {orderID}")

# __sign_tx_cancel:
# Sign the prepared order transaction for cancellation
# Note: Setting propagate to true will also submit to a Vega node
req = {"tx": blob, "pubKey": pubkey, "propagate": True}
url = f"{wallet_server_url}/api/v1/messages"
headers = {"Authorization": f"Bearer {token}"}
response = requests.post(url, headers=headers, json=req)
helpers.check_response(response)
# :sign_tx_cancel__

print("Signed cancellation and sent to Vega")

# Wait for cancellation to be included in a block
print("Waiting for blockchain...")
time.sleep(3)
url = f"{node_url_rest}/orders/{order_ref}"
response = requests.get(url)
response_json = response.json()
orderID = response_json["order"]["id"]
orderStatus = response_json["order"]["status"]
orderReason = response_json["order"]["reason"]

print("Cancelled Order:")
print(f"ID: {orderID}, Status: {orderStatus}")
if orderStatus == "STATUS_REJECTED":
    print(f"Rejection reason: {orderReason}")

# Completed.
