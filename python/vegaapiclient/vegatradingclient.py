import base64
import grpc
import uuid
from typing import Any, Callable

from .blockchain import CommandByte
from .generated import vega_pb2 as vega
from .generated.api import (
    trading_pb2 as trading,
    trading_pb2_grpc as trading_grpc,
)
from .walletclient import WalletClient


class VegaTradingClient(object):
    """
    The Vega Trading Client talks to a back-end node.
    """

    def __init__(self, url: str, channel=None) -> None:
        if url is None:
            raise Exception("Missing node URL")
        self.url = url

        if channel is None:
            # get a gRPC channel
            channel = grpc.insecure_channel(self.url)
            grpc.channel_ready_future(channel).result(timeout=10)

        self._trading = trading_grpc.TradingServiceStub(channel)

    def PrepareSubmitOrder(self, request: Any, contact_node=True) -> Any:
        """
        PrepareSubmitOrder prepares the SubmitOrder request in one of two ways:

        - contact_node=True (default)
            Use the Vega node's PrepareSubmitOrder gRPC endpoint.
            Latency is higher due to the network round trip.
            Some validation is done by the Vega node.

        - contact_node=False:
            Prepare the SubmitOrder request in Python.
            Latency is lower due to the lack of network round trip.
            Only very simple validation is done (e.g. data types).
        """

        if contact_node:
            # use the Vega node
            return self._trading.PrepareSubmitOrder(request)

        # do it in Python
        blob = bytes(str(uuid.uuid4()), "utf-8")
        blob += CommandByte.SubmitOrder.value
        request.submission.reference = str(uuid.uuid4())
        blob += request.SerializeToString()
        return trading.PrepareSubmitOrderResponse(
            blob=blob,
            submitID=request.submission.reference,
        )

    def prepare_sign_submit_tx(
        self,
        walletclient: WalletClient,
        pubkey: str,
        request: Any,
        prepare_func: Callable[[Any], Any],
    ) -> None:
        """
        submit_signed_tx is a convenience function that:
        * prepares the transaction, using the provided function
        * signs the prepared transaction, using the provided WalletClient
        * submits the signed transaction.
        """

        # Prepare the transaction
        response = prepare_func(request)
        blob_base64 = base64.b64encode(response.blob).decode("ascii")

        # Sign the transaction
        response = walletclient.signtx(blob_base64, pubkey, False)
        if response.status_code != 200:
            raise Exception(
                "Error: Wallet failed to sign transaction: HTTP {} {}".format(
                    response.status_code,
                    response.text,
                )
            )

        signedTx = response.json()["signedTx"]

        # Submit the signed transaction
        request = trading.SubmitTransactionRequest(
            tx=vega.SignedBundle(
                tx=base64.b64decode(signedTx["tx"]),
                sig=vega.Signature(
                    sig=base64.b64decode(signedTx["sig"]["sig"]),
                    algo="vega/ed25519",
                    version=1,
                ),
            ),
        )
        response = self.SubmitTransaction(request)
        if not response.success:
            raise Exception(
                "Vega node failed to submit signed transaction (success=false)"
            )

    def __getattr__(self, funcname):
        return getattr(self._trading, funcname)
