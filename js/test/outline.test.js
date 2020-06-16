var vega = require('../generated/proto/api/trading_pb.js')
var test = require('tape');

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
});
