from typing import Any

import google.protobuf.json_format as goog_json

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
