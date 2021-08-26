from .generated.coreapi.v1 import coreapi_pb2_grpc as coreapi_grpc
from .grpcclient import GRPCClient


class VegaCoreAPIClient(GRPCClient):
    """
    The Vega Trading Data Client talks to a back-end node.
    """

    def __init__(self, url: str, channel=None) -> None:
        super().__init__(url, channel=channel)
        self._core_api = coreapi_grpc.CoreApiServiceStub(self.channel)

    def __getattr__(self, funcname):
        return getattr(self._core_api, funcname)
