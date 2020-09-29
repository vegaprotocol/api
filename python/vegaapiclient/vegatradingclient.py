import base64
import grpc
from typing import Any, Callable

from .walletclient import WalletClient
import vegaapiclient.generated.vega_grpc as vega_grpc
import vegaapiclient.generated.api.trading_grpc as trading_grpc


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

        self._trading = trading_grpc.tradingStub(channel)

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
        request = trading_grpc.SubmitTransactionRequest(
            tx=vega_grpc.SignedBundle(
                tx=base64.b64decode(signedTx["tx"]),
                sig=vega_grpc.Signature(
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
