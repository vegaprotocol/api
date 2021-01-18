
const test = require('tape');
const tx = require('../index').tx.default;

const encodedTx = `CvABCsABNDliOTk4MzEtMmRjYS00YzA1LThhZTAtN2I3MDA4YWYzN2M4QBIQMjgzOUQ5QjIzMjlDOUU3MBpAMGZjOTM2YWJjNTFkYzk0OTkxOWVkOGE1NmM5MzRkZmFiMWMxNTFkNWFmMWFiMzZjZTc2NDdjNmY1YTYzMTc4OCgiMAE4AkDE5rTVmfDXrRZIAVIkYTg1ZDVlYTctZjNmNi00NjE1LTkyNDUtNzM0NjA3NDBkODM5Wg0IAhD///////////8BEMi/pITL8J2wQ9I+IA/JNqvFHclJkZ7YpWyTTfqxwVHVrxqzbOdkfG9aYxeIElIKQL7B8BUvF+z/fdRi4thGvvpzFuzXdZUov3V2Xt+k0Q992B2JKChioGQ7NpG1mFriYrnwj8n7gCa3kPcX35nqbAcSDHZlZ2EvZWQyNTUxORgB`

test('A raw encoded TX decodes', t => {
   const res = tx.decodeTx(encodedTx)

   t.equal(res.marketid, '2839D9B2329C9E70')
   t.end()
})

test('A totally invalid transaction throws an error', t => {
   t.throws(() => {
       tx.decodeTx('decode-this')
   }, /Cannot decode signed bundle/)

   t.end()
})

test('A more reasonable invalid signed transaction throws an error', t => {
   t.throws(() => {
       tx.decodeTx(encodedTx.substring(20))
   }, /Cannot decode signed bundle/)

   t.end()
})

