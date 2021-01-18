import { SignedBundle, Transaction, OrderSubmission } from '../generated/vega_pb'
import { Buffer } from 'buffer'
import { getTransactionTypeFromBuffer } from "./lib/transaction-types";

export const ErrorGettingTransaction = new Error('Cannot decode signed bundle')
export const ErrorDeserializingTransaction = new Error('Cannot deserialise transaction')

export function decodeTx(encodedTx: string) {
  let txArray: Uint8Array, txBuf, res

  // Decode the raw tx from tendermint to a signed bundle
  try {
    const buf = Buffer.from(encodedTx, 'base64')
    const signedBundle = SignedBundle.deserializeBinary(buf)
    txArray = signedBundle.getTx_asU8()
  } catch(e) {
    throw ErrorGettingTransaction
  }

  // Get the Vega TX from the signed bundle
  try {
    const rawTx = Transaction.deserializeBinary(txArray)

    // @ts-ignore
    txBuf = Buffer.from(rawTx.toObject().inputdata, 'base64')
  } catch (e) {
    throw ErrorDeserializingTransaction
  }
  const { type, tx } = getTransactionTypeFromBuffer(txBuf)

  if (type === 'SubmitOrderCommand') {
    // Note that this won't have a partyID. It should have come from tawTx.pubKey
    res = OrderSubmission.deserializeBinary(tx).toObject()
  }

  return res
}
