const test = require('tape');
const { decodeTx } = require('../tx/decode.js')

/*
  To recreate encodedTx, run submit-order/submit-order-with-Vega-API-client.py from the sample-API-scripts repo,
  and pull base64Bundle from the SignTx response.
*/
const encodedTx = `CpkBCmk4MTFiYTA2My03ZmI1LTRkYzEtYjNmMi1hZmQzYjU1MTQxYjFAChAwNzZCQjg2QTVBQTQxRTNFEKCNBhgBIAEoATgBQiRkMDNkY2Y0YS00ZWY4LTRhZGUtYWVkZS1kZDQ5NGZmMjI1YzgQjvblvped87SXAdI+IBeZMfUYuQ83X9agIcDX0QX71PCsHrqMb0XApWFXD+M4ElIKQBDh/AxXZFVPI+f8cyaYxV186o/5J6EO8JpoYL0MhMGYYwKB8RrPM7De7SQFkDhbdIVNnQghikwSLj/Yz5/JeQkSDHZlZ2EvZWQyNTUxORgB`

test('A raw encoded TX decodes', t => {
   const res = decodeTx(encodedTx)

   t.equal(res.marketId, '076BB86A5AA41E3E', 'Decodes marketId correctly')
   t.equal(res.price, 100000, 'Decodes price correctly')
   t.equal(res.size, 1, 'Decodes size correctly')
   t.equal(res.timeInForce, 1, 'Decodes timeInForce correctly')
   t.equal(res.type, 1, 'Decodes the TX type')
   t.end()
})

test('A totally invalid transaction throws an error', t => {
   t.throws(() => {
       decodeTx('decode-this')
   }, /Cannot decode signed bundle/, 'Correctly throws a cannot decode error')

   t.end()
})

test('A more reasonable invalid signed transaction throws an error', t => {
   t.throws(() => {
       decodeTx(encodedTx.substring(20))
   }, /Cannot decode signed bundle/, 'Correctly throws a cannot decode error')

   t.end()
})

