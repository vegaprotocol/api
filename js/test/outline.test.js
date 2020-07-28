var test = require('tape');
// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');

var x = require('../index')

test('Basic test: Can be imported', function (t) {
  t.plan(1);
  t.equal(typeof x, 'object');
});

test('Voting: PrepareVoteRequest exists', function (t) {
  t.plan(1);
  t.equal(typeof x.api.trading.PrepareVoteRequest, 'function');
});

test('SubmitOrderRequest (de)serializeBinary', function (t) {
  t.plan(1);

  var sub = new x.vega.OrderSubmission()
  sub.setExpiresat(2000000000000000000)
  sub.setMarketid("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPP")
  sub.setPartyid("1122aabb") // a public key
  sub.setPrice(99912345)
  sub.setSide(x.vega.Side.SIDE_BUY)
  sub.setSize(1)
  sub.setTimeinforce(x.vega.Order.TimeInForce.TIF_GTT)
  sub.setType(x.vega.Order.Type.TYPE_LIMIT)

  var req1 = new x.api.trading.SubmitOrderRequest();
  req1.setSubmission(sub)

  var req2 = x.api.trading.SubmitOrderRequest.deserializeBinary(req1.serializeBinary())
  t.deepEqual(req2, req1)
});
