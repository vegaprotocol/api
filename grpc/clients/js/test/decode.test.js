const test = require('tape');
const { decodeTx } = require('../tx/decode.js')

const encodedTx = `CvABCsABNDliOTk4MzEtMmRjYS00YzA1LThhZTAtN2I3MDA4YWYzN2M4QBIQMjgzOUQ5QjIzMjlDOUU3MBpAMGZjOTM2YWJjNTFkYzk0OTkxOWVkOGE1NmM5MzRkZmFiMWMxNTFkNWFmMWFiMzZjZTc2NDdjNmY1YTYzMTc4OCgiMAE4AkDE5rTVmfDXrRZIAVIkYTg1ZDVlYTctZjNmNi00NjE1LTkyNDUtNzM0NjA3NDBkODM5Wg0IAhD///////////8BEMi/pITL8J2wQ9I+IA/JNqvFHclJkZ7YpWyTTfqxwVHVrxqzbOdkfG9aYxeIElIKQL7B8BUvF+z/fdRi4thGvvpzFuzXdZUov3V2Xt+k0Q992B2JKChioGQ7NpG1mFriYrnwj8n7gCa3kPcX35nqbAcSDHZlZ2EvZWQyNTUxORgB`

/* test('A raw encoded TX decodes', t => {
   const res = decodeTx(encodedTx)

   t.equal(res.marketId, '2839D9B2329C9E70', 'Decodes marketId correctly')
   t.equal(res.partyId, '0fc936abc51dc949919ed8a56c934dfab1c151d5af1ab36ce7647c6f5a631788', 'Decodes partyId correctly')
   t.equal(res.type, 1, 'Decodes the TX type')
   t.end()
}) */

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

