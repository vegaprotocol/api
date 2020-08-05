import base64
import binascii
from google.protobuf.empty_pb2 import Empty

import vegaapiclient as vac

from .fixtures import (  # noqa: F401
    trading,
    tradingdata,
    walletclient,
    walletname,
    walletpassphrase,
    walletClientWalletKeypair,
)


def test_SubmitOrder(trading, tradingdata, walletClientWalletKeypair):  # noqa: F811
    (
        walletclient,
        walletname,
        passphrase,
        pubKey,  # noqa: F811
    ) = walletClientWalletKeypair

    # Get free money for the pubKey
    request = vac.api.trading.NotifyTraderAccountRequest(
        notif=vac.vega.NotifyTraderAccount(traderID=pubKey, amount=10000000)
    )
    response = trading.NotifyTraderAccount(request)
    assert response.submitted

    markets = tradingdata.Markets(Empty()).markets
    assert len(markets) > 0
    market = markets[0]

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
        )
    )
    response = trading.PrepareSubmitOrder(request)
    blob = response.blob

    # Sign the tx
    r = walletclient.signtx(base64.b64encode(blob).decode("ascii"), pubKey)
    assert r.status_code == 200
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
