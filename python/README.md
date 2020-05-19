# Vega API client

![Python tests](https://github.com/vegaprotocol/api-clients/workflows/Python%20tests/badge.svg?branch=master)

This is the Vega API client, which talks to a Vega node using gRPC, and to a
Vega Wallet server using REST.

## Disclaimer

This is a community effort. It is not supported by Vega, nor is it guaranteed
to be up to date or compatible with new Vega releases.

## Examples

### Connect to a Vega Wallet server

The methods of `WalletClient` each return a plain `requests.Response` object.
See [Python requests](http://python-requests.org/) for details.

```python
import vegaapiclient as vac

walletclient = vac.WalletClient("https://wallet.example.com")

wname = "my_vega_wallet"
wpass = "supersecret_passphrase"

# If this is your first time: create a new wallet.
response = walletclient.create(wname, wpass)
assert response.status_code == 200

# If this is *not* your first time: log in to an existing wallet.
response = walletclient.login(wname, wpass)
assert response.status_code == 200

# If you don't already have a keypair, generate one.
response = walletclient.generatekey(wpass, [])
assert response.status_code == 200
# Print key information. Note that the private key is *not* returned.
print("Key: {}".format(response.json()["key"]))

# List keypairs
response = walletclient.listkeys()
assert response.status_code == 200
for key in response.json()["keys"]:
    print("Key: {}".format(key))

myPubKey = "1122aabb..."  # hex-encoded public key

# Get one keypair
response = walletclient.getkey(myPubKey)
assert response.status_code == 200
print("Key: {}".format(response.json()["key"]))

# Sign a transaction
blob = b"data returned from a Vega node 'Prepare' call"
tx = base64.b64encode(blob).decode("ascii")
response = walletclient.signtx(tx, myPubKey)
assert response.status_code == 200
print("Signed tx: {}".format(response.json()["signedTx"]))

# When finished with the wallet, log out.
response = walletclient.logout()
assert response.status_code == 200
```

## Connect to a Vega node

In order to interact with a Vega node, create:

* `VegaTradingClient`: for trading, e.g. submitting, amending, cancelling orders
* `VegaTradingDataClient`: for accessing public data

```python
import vegaapiclient as vac

# Create client for accessing public data
datacli = vac.VegaTradingDataClient("veganode.example.com:1234")

# Create client for trading (e.g. submitting orders)
tradingcli = vac.VegaTradingClient("veganode.example.com:1234")
```

### Get market data

```python
from google.protobuf.empty_pb2 import Empty
import vegaapiclient as vac

# Create client for accessing public data
datacli = vac.VegaTradingDataClient("veganode.example.com:1234")

# Get a list of markets
markets = datacli.Markets(Empty()).markets
print("{}".format(markets))

# Get a specific market by ID
req = vac.api.trading.MarketByIDRequest(marketID="MARKETID")
market = datacli.MarketByID(req)
print("{}: {}".format(market.id, market.name))
```

### Submit a signed `SubmitOrder` transaction

The flow to submit a signed transaction to a Vega node is as follows:

1. Wallet server: Create a new wallet, or log in to an existing one.
1. Wallet server: Create a keypair, if one has not already been created.
1. Vega node: Call `PrepareSubmitOrder`. Send the order details. Receive a
   `PreparedOrder` object.
1. Wallet server: Call `SignTx`. Send the `PreparedOrder` object and a public
   key associated with the logged-in wallet. Receive a `SignedBundle` object.
1. Vega node: Call `SubmitTransaction`. Send the `SignedBundle` object.

```python
import base64, binascii
import vegaapiclient as vac

# Vega node: Create client for trading (e.g. submitting orders)
tradingcli = vac.VegaTradingClient(nodeurl)

# Wallet server: Create a walletclient (see above for details)
walletclient = vac.WalletClient(walleturl)
walletclient.login(wallet_name, wallet_passphrase)

marketID = "MARKETID"
myPubKey = "1122aabb..."

# Vega node: Prepare the SubmitOrder
order = vac.api.trading.SubmitOrderRequest(
    submission=vac.vega.OrderSubmission(
        marketID=marketID,
        partyID=myPubKey,
        # price is an integer. For example 123456 is a price of 1.23456,
        # assuming 5 decimal places.
        price=100000,
        side=vac.vega.Side.Buy,
        size=100,
        timeInForce=vac.vega.Order.TimeInForce.GTC,
        type=vac.vega.Order.Type.LIMIT
    )
)
response = tradingcli.PrepareSubmitOrder(order)

# Wallet server: Sign the prepared transaction
blob_base64 = base64.b64encode(response.blob).decode("ascii")
response = walletclient.signtx(blob_base64, myPubKey)
assert response.status_code == 200
signedTx = response.json()["signedTx"]

# Vega node: Submit the signed transaction
request = vac.api.trading.SubmitTransactionRequest(
    tx=vac.vega.SignedBundle(
        data=base64.b64decode(signedTx["data"]),
        sig=base64.b64decode(signedTx["sig"]),
        pubKey=binascii.unhexlify(signedTx["pubKey"])
    )
)
response = tradingcli.SubmitTransaction(request)
assert response.success
```
