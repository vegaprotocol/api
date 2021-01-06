const test = require('tape');
const mainExport = require('../index')

test('Basic test: Can be imported', t => {
  t.equal(typeof mainExport, 'object');
  t.end()
});

test('Basic fields are exported', t => {
  /* This is a pretty naive test, but it's set not to fail if we *add* fields, only if
  * fields shift unexpectedly. */
  t.ok(mainExport.assets)
  t.ok(mainExport.chain_events)
  t.ok(mainExport.events)
  t.ok(mainExport.governance)
  t.ok(mainExport.markets)
  t.ok(mainExport.vega)
  t.ok(mainExport.api.trading)
  t.ok(mainExport.tm.replay)
  t.end()
})
