var test = require('tape');
// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');

var x = require('../index')

test('Voting: PrepareVoteRequest exists', t => {
  t.plan(1);
  t.equal(typeof x.api.trading.PrepareVoteRequest, 'function');
});
