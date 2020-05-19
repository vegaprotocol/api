import grpc

from .generated.proto.api import trading_pb2_grpc as trading_grpc


class VegaTradingClient(object):
    """
    The Vega Trading Client talks to a back-end node.
    """

    def __init__(
        self,
        url: str,
        channel=None
    ) -> None:
        if url is None:
            raise Exception("Missing node URL")
        self.url = url

        if channel is None:
            # get a gRPC channel
            channel = grpc.insecure_channel(self.url)
            grpc.channel_ready_future(channel).result(timeout=10)

        self._trading = trading_grpc.tradingStub(channel)

    def __getattr__(self, funcname):
        return getattr(self._trading, funcname)
