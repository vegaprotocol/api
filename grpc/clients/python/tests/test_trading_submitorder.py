import base64
import uuid
from google.protobuf.empty_pb2 import Empty

import vegaapiclient as vac

from .fixtures import (  # noqa: F401
    trading,
    tradingdata,
    walletclient,
    walletClientWalletKeypair,
    walletname,
    walletpassphrase,
)
from .helpers import check_response


def test_SubmitOrder(
    trading, tradingdata, walletClientWalletKeypair  # noqa: F811
):
    (walletclient, _, _, pubKey) = walletClientWalletKeypair  # noqa: F811

    # Get a market
    req = vac.api.trading.MarketByIDRequest(market_id="076BB86A5AA41E3E")
    market = tradingdata.MarketByID(req).market

    # Prepare the SubmitOrder
    now = int(tradingdata.GetVegaTime(Empty()).timestamp)
    request = vac.api.trading.PrepareSubmitOrderRequest(
        submission=vac.vega.OrderSubmission(
            expires_at=now + 120000000000,
            market_id=market.id,
            party_id=pubKey,
            price=10,
            side=vac.vega.Side.SIDE_BUY,
            size=1,
            time_in_force=vac.vega.Order.TimeInForce.TIME_IN_FORCE_GTT,
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
