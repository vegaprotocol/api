var test = require('tape');
// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');

var Vega = require('../index')

test('Voting: PrepareVoteRequest exists', t => {
  t.equal(typeof Vega.api.trading.PrepareVoteRequest, 'function');
  t.end()
});
