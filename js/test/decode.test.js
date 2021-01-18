
const test = require('tape');
const tx = require('../index').tx.default;

const encodedTx = `CuUBCrUBNTdjZjc1OGEtOGY5ZS00ZTFkLTkxZGUtNDk0ZmEyNTU5ZTRiQBIQM0M1OEVEMkE0QTZDNUQ3RRpAMjZlNjk4YzFlM2EyODRkZjIwMWM2MTdmOWUzZWMxZjcxOWQxZThjMmYyYzVhYjE2ZjZiNTA1YjIzYTQ3MDRmNyCqpiAoJjABOAJAwc6J7O+Ry6wWSAFSJGVhZTdiOTY3LTk1OGUtNDYwOS1hZDcwLWYzMzg3ZDcyMjAyZhDVhZXPwOuelQnSPiAm5pjB46KE3yAcYX+ePsH3GdHowvLFqxb2tQWyOkcE9xJSCkCn9DqudFl4WdtaLGtubmuAr4pa4RMKRxkVXbmeCq1fHPdwf7G59lr7YewbL95+7Xkpn8gb9LCjgeCRZBsClfsEEgx2ZWdhL2VkMjU1MTkYAQ==`

test('A raw encoded TX does not decode', t => {
   const res = tx.decodeTx(encodedTx)

   t.equal(res.marketid, '3C58ED2A4A6C5D7E')
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

