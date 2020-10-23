import base64
import time
import uuid
from google.protobuf.empty_pb2 import Empty

import vegaapiclient as vac

from .fixtures import (  # noqa: F401
    trading,
    tradingdata,
    faucetclient,
    walletclient,
    walletClientWalletKeypair,
    walletname,
    walletpassphrase,
)
from .helpers import check_response


def test_SubmitOrder(
    trading, tradingdata, walletClientWalletKeypair, faucetclient  # noqa: F811
):
    (walletclient, _, _, pubKey) = walletClientWalletKeypair  # noqa: F811

    # Get a market
    markets = tradingdata.Markets(Empty()).markets
    assert len(markets) > 0
    market = markets[0]

    # Mint some tokens in the market's settlement token
    amt = 10
    assetID = market.tradableInstrument.instrument.future.asset
    print(f"{pubKey}: Minting {amt} {assetID}")
    mintresponse = faucetclient.mint(amt, assetID, pubKey)
    assert mintresponse.status_code == 200
    assert mintresponse.json()["success"]

    # Wait until funds are in accounts
    x = 0
    maxwait = 300  # seconds
    while True:
        request = vac.api.trading.PartyAccountsRequest(
            partyID=pubKey,
            marketID=market.id,
            type=vac.vega.AccountType.ACCOUNT_TYPE_GENERAL,
            asset=assetID,
        )
        response = tradingdata.PartyAccounts(request)
        n = len(response.accounts)
        print(f"Account count: {n}")
        if n > 0:
            print(f"Accounts: {response.accounts}")
        if n == 1 and response.accounts[0].balance == amt:
            # Log time taken
            # with open("/tmp/log", "a") as fh:
            #     fh.write(f"{x}\n")
            break
        if x >= maxwait:
            assert (
                False
            ), f"Failed to see {amt} {assetID} in {pubKey}'s general account"
        time.sleep(1)
        x += 1

    # Prepare the SubmitOrder
    now = int(tradingdata.GetVegaTime(Empty()).timestamp)
    request = vac.api.trading.SubmitOrderRequest(
        submission=vac.vega.OrderSubmission(
            expiresAt=now + 120000000000,
            marketID=market.id,
            partyID=pubKey,
            price=10,
            side=vac.vega.Side.SIDE_BUY,
            size=1,
            timeInForce=vac.vega.Order.TimeInForce.TIF_GTT,
            type=vac.vega.Order.Type.TYPE_LIMIT,
            reference=str(uuid.uuid4()),
        )
    )
    # Either: Prepare the SubmitOrder using the Vega node
    # blob = trading.PrepareSubmitOrder(request, contact_node=True).blob
    # Or: Prepare the SubmitOrder ourselves
    blob = trading.PrepareSubmitOrder(request, contact_node=False).blob

    # Sign the tx
    r = walletclient.signtx(
        base64.b64encode(blob).decode("ascii"), pubKey, False
    )
    check_response(r)
    signedTx = r.json()["signedTx"]

    # Submit the signed transaction
    # assert blob == base64.b64decode(signedTx["data"])
    request = vac.api.trading.SubmitTransactionRequest(
        tx=vac.vega.SignedBundle(
            tx=base64.b64decode(signedTx["tx"]),
            sig=vac.vega.Signature(
                sig=base64.b64decode(signedTx["sig"]["sig"]),
                algo=signedTx["sig"]["algo"],
                version=signedTx["sig"]["version"],
            ),
        )
    )
    response = trading.SubmitTransaction(request)
    assert response.success
