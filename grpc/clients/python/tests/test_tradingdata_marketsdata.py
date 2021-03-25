from google.protobuf.empty_pb2 import Empty

from .fixtures import tradingdata  # noqa: F401


def test_MarketsData(tradingdata):  # noqa: F811
    md = tradingdata.MarketsData(Empty())
    assert len(md.markets_data) > 0
