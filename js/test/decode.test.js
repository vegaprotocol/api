
const test = require('tape');
const { VegaTimeResponse } = require('../generated/proto/api/trading_pb');
const mainExport = require('../index')

const encodedTx = `CuUBCrUBNTdjZjc1OGEtOGY5ZS00ZTFkLTkxZGUtNDk0ZmEyNTU5ZTRiQBIQM0M1OEVEMkE0QTZDNUQ3RRpAMjZlNjk4YzFlM2EyODRkZjIwMWM2MTdmOWUzZWMxZjcxOWQxZThjMmYyYzVhYjE2ZjZiNTA1YjIzYTQ3MDRmNyCqpiAoJjABOAJAwc6J7O+Ry6wWSAFSJGVhZTdiOTY3LTk1OGUtNDYwOS1hZDcwLWYzMzg3ZDcyMjAyZhDVhZXPwOuelQnSPiAm5pjB46KE3yAcYX+ePsH3GdHowvLFqxb2tQWyOkcE9xJSCkCn9DqudFl4WdtaLGtubmuAr4pa4RMKRxkVXbmeCq1fHPdwf7G59lr7YewbL95+7Xkpn8gb9LCjgeCRZBsClfsEEgx2ZWdhL2VkMjU1MTkYAQ==`

test('A raw encoded TX does not decode', t => {
    const vega = mainExport.vega 
    const buf = new Buffer.from(encodedTx, 'base64')
    const signedBundle = new vega.SignedBundle.deserializeBinary(buf)
    const txArray = signedBundle.getTx_asB64()
    const tx = new vega.Transaction.deserializeBinary(txArray)

    const txBuf = new Buffer.from(tx.toObject().inputdata, 'base64')
    console.log(txBuf[36] === 0x40 ? 'This is an order' : 'This is not an order')

    const order = vega.OrderSubmission.deserializeBinary(txBuf.subarray(37))
    console.log(order.toObject())
    t.end()
})

test('Can decode an encoded tx', t => {
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

