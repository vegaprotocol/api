const COMMAND_BYTE = 36
const ENCODED_COMMAND_START = 37

const transactionTypes = {
    '40': 'SubmitOrderCommand',
    '41': 'CancelOrderCommand',
    '42': 'AmendOrderCommand',
    '44': 'WithdrawCommand',
    '45': 'ProposeCommand',
    '46': 'VoteCommand',
    '47': 'RegisterNodeCommand',
    '48': 'NodeVoteCommand',
    '49': 'NodeSignatureCommand',
    '4A': 'LiquidityProvisionCommand',
    '50': 'ChainEventCommand'
}

const UnknownTransactionType = new Error('Unknown transaction type')
const InvalidTransaction = new Error('Invalid transaction (transaction too short)')

/**
 * Looks for the magic byte that tells us what transaction type this is
*/
function getTransactionType(transactionTypeByte) {
  // Convert hex to string
  var byte = (+transactionTypeByte).toString(16);

  // If we have a named type, return it
  if (transactionTypes[byte]) {
      return transactionTypes[byte]
  }

  throw UnknownTransactionType 
}

/**
 * Takes an encoded transaction, and returns the type & relevant bytes
 *  
 * @param {string} Transaction as a string
 */
function getTransactionTypeFromBuffer(txBuf) {
  if (txBuf.length <= ENCODED_COMMAND_START) {
    throw InvalidTransaction
  }
  let transactionType 

  transactionType = getTransactionType(txBuf[COMMAND_BYTE]) 

  return {
    type: transactionType,
    tx: txBuf.subarray(ENCODED_COMMAND_START)
  }
}

module.exports = {
  getTransactionType: getTransactionType,
  getTransactionTypeFromBuffer: getTransactionTypeFromBuffer,
  UnknownTransactionType: UnknownTransactionType,
  InvalidTransaction: InvalidTransaction
}