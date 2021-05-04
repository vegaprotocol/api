var test = require('tape');
// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');

var { api } = require('../index')

test('Voting: PrepareVoteSubmissionRequest exists', t => {
  t.equal(typeof api.trading.PrepareVoteSubmissionRequest, 'function');
  t.end()
});
