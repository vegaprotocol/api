import vegaapiclient as vac


# def test_order_submission(trading, tradingdata, walletClientWalletKeypair):
#     (walletclient, _, _, pub_key) = walletClientWalletKeypair

#     # Get a market
#     req = vac.api.trading.MarketsRequest()
#     markets = tradingdata.Markets(req).markets
#     assert len(markets) > 0
#     market = markets[0]

#     # Get the chain time
#     timereq = vac.api.trading.GetVegaTimeRequest()
#     now = int(tradingdata.GetVegaTime(timereq).timestamp)

#     # Create the tx
#     req = vac.wallet.v1.wallet.SubmitTransactionRequest(
#         pub_key=pub_key,
#         propagate=False,
#         order_submission=vac.commands.v1.commands.OrderSubmission(
#             market_id=market.id,
#             price=10,
#             size=1,
#             side=vac.vega.Side.SIDE_BUY,
#             time_in_force=vac.vega.Order.TimeInForce.TIME_IN_FORCE_GTT,
#             expires_at=now + 120000000000,
#             type=vac.vega.Order.Type.TYPE_LIMIT,
#             reference="repo:api;lang:python;test_order_submission",
#             # pegged_order=None,
#         ),
#     )

#     # Use the helper function to sign and submit the tx
#     trading.sign_submit_tx_v2(walletclient, req)
