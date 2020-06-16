var test = require('tape');
// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');

var trading = require('../generated/proto/api/trading_pb.js')
var vega = require('../generated/proto/vega_pb.js')


test('Basic test: Can be imported', function (t) {
  t.plan(1);
  t.equal(typeof vega, 'object');
});

test('Voting: PrepareVoteRequest exists', function (t) {
  t.plan(1);
  t.equal(typeof vega.PrepareVoteRequest, 'function');
});

test('Voting: PrepareVoteResponse exists', function (t) {
  t.plan(1);
  t.equal(typeof vega.PrepareVoteResponse, 'function');
}

test('SubmitOrderRequest (de)serializeBinary', function (t) {
  t.plan(1);

  var sub = new vega.OrderSubmission()
  sub.setExpiresat(2000000000000000000)
  sub.setMarketid("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPP")
  sub.setPartyid("1122aabb") // a public key
  sub.setPrice(99912345)
  sub.setSide(vega.Side.SIDE_BUY)
  sub.setSize(1)
  sub.setTimeinforce(vega.Order.TimeInForce.TIF_GTT)
  sub.setType(vega.Order.Type.TYPE_LIMIT)

  var req1 = new trading.SubmitOrderRequest();
  req1.setSubmission(sub)

  var req2 = trading.SubmitOrderRequest.deserializeBinary(req1.serializeBinary())
  t.deepEqual(req2, req1)
});
