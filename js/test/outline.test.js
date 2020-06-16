var vega = require('../generated/proto/api/trading_pb.js')
var test = require('tape');

test('Passing test', function (t) {
  t.plan(1);
  t.equal(typeof Date.now, 'function');
});
