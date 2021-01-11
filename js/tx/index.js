const txTypes = require('./lib/transaction-types')
const decode = require('./decode')

module.exports = {
   getTransactionType: txTypes.getTransactionType,
   getTransactionTypeFromBuffer: txTypes.getTransactionTypeFromBuffer,
   UnknownTransactionType: txTypes.UnknownTransactionType,
   InvalidTransaction: txTypes.InvalidTransaction,
   
   decodeTx: decode.decodeTx
}