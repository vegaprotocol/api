from .generated.api import trading_pb2_grpc as trading_grpc
from .grpcclient import GRPCClient


class VegaTradingDataClient(GRPCClient):
    """
    The Vega Trading Data Client talks to a back-end node.
    """

    def __init__(self, url: str, channel=None) -> None:
        super().__init__(url, channel=channel)
        self._trading_data = trading_grpc.TradingDataServiceStub(self.channel)

    def __getattr__(self, funcname):
        return getattr(self._trading_data, funcname)
