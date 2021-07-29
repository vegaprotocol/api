import base64
import uuid
from typing import Any, Callable

import google.protobuf.json_format as goog_json

from .blockchain import CommandByte
from .generated import vega_pb2 as vega
from .generated.api import (
    trading_pb2 as trading,
    trading_pb2_grpc as trading_grpc,
)
from .grpcclient import GRPCClient
from .walletclient import WalletClient


class VegaTradingClient(GRPCClient):
    """
    The Vega Trading Client talks to a back-end node.
    """

    def __init__(self, url: str, channel=None) -> None:
        super().__init__(url, channel=channel)
        self._trading = trading_grpc.TradingServiceStub(self.channel)

    def PrepareSubmitOrder(self, request: Any, contact_node=True) -> Any:
        """
        `PrepareSubmitOrder` prepares the `SubmitOrder` request in one of two
        ways:

        - contact_node=True (default)
            Use the Vega node's `PrepareSubmitOrder` gRPC endpoint.
            Latency is higher due to the network round trip.
            Some validation is done by the Vega node.

        - contact_node=False:
            Prepare the `SubmitOrder` request in Python.
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
            submit_id=request.submission.reference,
        )

    def prepare_sign_submit_tx(
        self,
        walletclient: WalletClient,
        pubkey: str,
        request: Any,
        prepare_func: Callable[[Any], Any],
    ) -> None:
        """
        This is a convenience function that:
        * prepares the transaction, using the provided function
        * signs the prepared transaction, using the provided `WalletClient`
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

    def sign_submit_tx_v2(
        self,
        walletcli: WalletClient,
        submit_tx_req: Any,  # wallet.v1.wallet_pb2.SubmitTransactionRequest
    ):
        """Sign and submit a V2 transaction."""

        # Sign the tx
        response = walletcli.signtxv2(submit_tx_req)
        if response.status_code != 200:
            raise Exception(
                "wallet server failed to sign tx v2: HTTP "
                f"{response.status_code} {response.text}"
            )
        responsej = response.json()
        if "error" in responsej:
            msg = "wallet server failed to sign tx v2: " + responsej["error"]
            if "details" in responsej and responsej["details"] is not None:
                msg += " details: " + responsej["details"]
            raise Exception(msg)

        if not submit_tx_req.propagate:
            # The wallet server was not instructed to send the signed tx to the
            # Vega node, so do this now.
            asy = trading.SubmitTransactionV2Request.TYPE_ASYNC  # type: ignore
            req = goog_json.ParseDict(
                {
                    "tx": responsej,
                    "type": asy,
                },
                trading.SubmitTransactionV2Request(),
                ignore_unknown_fields=False,
                descriptor_pool=None,
            )
            submit_response = self.SubmitTransactionV2(req)
            if not submit_response.success:
                msg = "failed to submit tx v2 to Vega node: success=false"
                raise Exception(msg)

    def __getattr__(self, funcname):
        return getattr(self._trading, funcname)
