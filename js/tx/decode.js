"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTx = exports.ErrorDeserializingTransaction = exports.ErrorGettingTransaction = void 0;
const vega_pb_1 = require("../generated/vega_pb");
const buffer_1 = require("buffer");
const transaction_types_1 = require("./lib/transaction-types");
exports.ErrorGettingTransaction = new Error('Cannot decode signed bundle');
exports.ErrorDeserializingTransaction = new Error('Cannot deserialise transaction');
function decodeTx(encodedTx) {
    let txArray, txBuf, res;
    // Decode the raw tx from tendermint to a signed bundle
    try {
        const buf = buffer_1.Buffer.from(encodedTx, 'base64');
        const signedBundle = vega_pb_1.SignedBundle.deserializeBinary(buf);
        txArray = signedBundle.getTx_asU8();
    }
    catch (e) {
        throw exports.ErrorGettingTransaction;
    }
    // Get the Vega TX from the signed bundle
    try {
        const rawTx = vega_pb_1.Transaction.deserializeBinary(txArray);
        // @ts-ignore
        txBuf = buffer_1.Buffer.from(rawTx.toObject().inputdata, 'base64');
    }
    catch (e) {
        throw exports.ErrorDeserializingTransaction;
    }
    const { type, tx } = transaction_types_1.getTransactionTypeFromBuffer(txBuf);
    if (type === 'SubmitOrderCommand') {
        // Note that this won't have a partyID. It should have come from tawTx.pubKey
        res = vega_pb_1.OrderSubmission.deserializeBinary(tx).toObject();
    }
    return res;
}
exports.decodeTx = decodeTx;
