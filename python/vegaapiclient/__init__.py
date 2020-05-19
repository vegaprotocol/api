from .vegatradingclient import VegaTradingClient
from .vegatradingdataclient import VegaTradingDataClient
from .walletclient import WalletClient
from .generated.proto import (
    api,
    governance_pb2 as governance,
    governance_pb2_grpc as governance_grpc,
    markets_pb2 as markets,
    markets_pb2_grpc as markets_grpc,
    vega_pb2 as vega,
    vega_pb2_grpc as vega_grpc
)

__all__ = [
    "VegaTradingClient",
    "VegaTradingDataClient",
    "WalletClient"
    "api",
    "governance",
    "governance_grpc",
    "markets",
    "markets_grpc",
    "vega",
    "vega_grpc"
]
