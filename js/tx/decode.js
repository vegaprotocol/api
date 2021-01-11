var vega = require('../generated/proto/vega_pb.js')
var lib = require('./lib/transaction-types')

const ErrorGettingTransaction = new Error('Cannot decode signed bundle')
const ErrorDeserializingTransaction = new Error('Cannot deserialise transaction')

function decodeTx(encodedTx) {
  let txArray, txBuf, res

  // Decode the raw tx from tendermint to a signed bundle
  try {
    const buf = new Buffer.from(encodedTx, 'base64')
    const signedBundle = new vega.SignedBundle.deserializeBinary(buf)
    txArray = signedBundle.getTx_asB64()
  } catch(e) {
    throw ErrorGettingTransaction
  }

  // Get the Vega TX from the signed bundle
  try {
    const rawTx = new vega.Transaction.deserializeBinary(txArray)

    txBuf = new Buffer.from(rawTx.toObject().inputdata, 'base64')
  } catch (e) {
    throw ErrorDeserializingTransaction
  }
  const { type, tx } = lib.getTransactionTypeFromBuffer(txBuf)

  if (type === 'SubmitOrderCommand') {
    // Note that this won't have a partyID. It should have come from tawTx.pubKey
    res = vega.OrderSubmission.deserializeBinary(tx).toObject()
  }

  return res
}

module.exports = {
    decodeTx: decodeTx,
    ErrorDeserializingTransaction: ErrorDeserializingTransaction,
    ErrorGettingTransaction: ErrorGettingTransaction
}