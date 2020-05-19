from google.protobuf.empty_pb2 import Empty

import vegaapiclient as vac

from .fixtures import tradingdata  # noqa: F401


def test_MarketByID(tradingdata):  # noqa: F811
    markets = tradingdata.Markets(Empty()).markets
    assert len(markets) > 0
    marketID = markets[0].id

    req = vac.api.trading.MarketByIDRequest(marketID=marketID)
    market = tradingdata.MarketByID(req)

    assert market.market.id == markets[0].id


def test_Markets(tradingdata):  # noqa: F811
    markets = tradingdata.Markets(Empty())
    assert len(markets.markets) > 0
