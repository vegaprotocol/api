# from google.protobuf.empty_pb2 import Empty

# import vegaapiclient as vac


# def test_MarketByID(tradingdata):
#     markets = tradingdata.Markets(Empty()).markets
#     assert len(markets) > 0
#     marketID = markets[0].id

#     req = vac.api.trading.MarketByIDRequest(market_id=marketID)
#     market = tradingdata.MarketByID(req)

#     assert market.market.id == markets[0].id


# def test_Markets(tradingdata):
#     markets = tradingdata.Markets(Empty())
#     assert len(markets.markets) > 0
