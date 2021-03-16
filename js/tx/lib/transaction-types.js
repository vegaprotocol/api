"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionTypeFromBuffer = exports.getTransactionType = exports.InvalidTransaction = exports.UnknownTransactionType = void 0;
const COMMAND_BYTE = 36;
const ENCODED_COMMAND_START = 37;
const transactionTypes = {
    "40": "SubmitOrderCommand",
    "41": "CancelOrderCommand",
    "42": "AmendOrderCommand",
    "44": "WithdrawCommand",
    "45": "ProposeCommand",
    "46": "VoteCommand",
    "47": "RegisterNodeCommand",
    "48": "NodeVoteCommand",
    "49": "NodeSignatureCommand",
    "4A": "LiquidityProvisionCommand",
    "50": "ChainEventCommand",
};
exports.UnknownTransactionType = new Error("Unknown transaction type");
exports.InvalidTransaction = new Error("Invalid transaction (transaction too short)");
/**
 * Looks for the magic byte that tells us what transaction type this is
 * @param transactionTypeByte
 */
function getTransactionType(transactionTypeByte) {
    // Convert hex to string
    const byte = (+transactionTypeByte).toString(16);
    // If we have a named type, return it
    if (transactionTypes[byte]) {
        return transactionTypes[byte];
    }
    throw exports.UnknownTransactionType;
}
exports.getTransactionType = getTransactionType;
/**
 * Takes an encoded transaction, and returns the type & relevant bytes
 * @param txBuf
 */
function getTransactionTypeFromBuffer(txBuf) {
    if (txBuf.length <= ENCODED_COMMAND_START) {
        throw exports.InvalidTransaction;
    }
    let transactionType;
    transactionType = getTransactionType(txBuf.readInt8(COMMAND_BYTE));
    return {
        type: transactionType,
        tx: txBuf.subarray(ENCODED_COMMAND_START),
    };
}
exports.getTransactionTypeFromBuffer = getTransactionTypeFromBuffer;
