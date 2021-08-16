// source: wallet/v1/wallet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var commands_v1_commands_pb = require('../../commands/v1/commands_pb.js');
goog.object.extend(proto, commands_v1_commands_pb);
var commands_v1_validator_commands_pb = require('../../commands/v1/validator_commands_pb.js');
goog.object.extend(proto, commands_v1_validator_commands_pb);
var commands_v1_oracles_pb = require('../../commands/v1/oracles_pb.js');
goog.object.extend(proto, commands_v1_oracles_pb);
goog.exportSymbol('proto.vega.wallet.v1.SubmitTransactionRequest', null, global);
goog.exportSymbol('proto.vega.wallet.v1.SubmitTransactionRequest.CommandCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.wallet.v1.SubmitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_);
};
goog.inherits(proto.vega.wallet.v1.SubmitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.wallet.v1.SubmitTransactionRequest.displayName = 'proto.vega.wallet.v1.SubmitTransactionRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_ = [[1001,1002,1003,1004,1005,1006,1007,1008,1009,2001,2002,2003,2004,3001]];

/**
 * @enum {number}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.CommandCase = {
  COMMAND_NOT_SET: 0,
  ORDER_SUBMISSION: 1001,
  ORDER_CANCELLATION: 1002,
  ORDER_AMENDMENT: 1003,
  WITHDRAW_SUBMISSION: 1004,
  PROPOSAL_SUBMISSION: 1005,
  VOTE_SUBMISSION: 1006,
  LIQUIDITY_PROVISION_SUBMISSION: 1007,
  DELEGATE_SUBMISSION: 1008,
  UNDELEGATE_SUBMISSION: 1009,
  NODE_REGISTRATION: 2001,
  NODE_VOTE: 2002,
  NODE_SIGNATURE: 2003,
  CHAIN_EVENT: 2004,
  ORACLE_DATA_SUBMISSION: 3001
};

/**
 * @return {proto.vega.wallet.v1.SubmitTransactionRequest.CommandCase}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getCommandCase = function() {
  return /** @type {proto.vega.wallet.v1.SubmitTransactionRequest.CommandCase} */(jspb.Message.computeOneofCase(this, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.wallet.v1.SubmitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.wallet.v1.SubmitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.wallet.v1.SubmitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propagate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    orderSubmission: (f = msg.getOrderSubmission()) && commands_v1_commands_pb.OrderSubmission.toObject(includeInstance, f),
    orderCancellation: (f = msg.getOrderCancellation()) && commands_v1_commands_pb.OrderCancellation.toObject(includeInstance, f),
    orderAmendment: (f = msg.getOrderAmendment()) && commands_v1_commands_pb.OrderAmendment.toObject(includeInstance, f),
    withdrawSubmission: (f = msg.getWithdrawSubmission()) && commands_v1_commands_pb.WithdrawSubmission.toObject(includeInstance, f),
    proposalSubmission: (f = msg.getProposalSubmission()) && commands_v1_commands_pb.ProposalSubmission.toObject(includeInstance, f),
    voteSubmission: (f = msg.getVoteSubmission()) && commands_v1_commands_pb.VoteSubmission.toObject(includeInstance, f),
    liquidityProvisionSubmission: (f = msg.getLiquidityProvisionSubmission()) && commands_v1_commands_pb.LiquidityProvisionSubmission.toObject(includeInstance, f),
    delegateSubmission: (f = msg.getDelegateSubmission()) && commands_v1_commands_pb.DelegateSubmission.toObject(includeInstance, f),
    undelegateSubmission: (f = msg.getUndelegateSubmission()) && commands_v1_commands_pb.UndelegateSubmission.toObject(includeInstance, f),
    nodeRegistration: (f = msg.getNodeRegistration()) && commands_v1_validator_commands_pb.NodeRegistration.toObject(includeInstance, f),
    nodeVote: (f = msg.getNodeVote()) && commands_v1_validator_commands_pb.NodeVote.toObject(includeInstance, f),
    nodeSignature: (f = msg.getNodeSignature()) && commands_v1_validator_commands_pb.NodeSignature.toObject(includeInstance, f),
    chainEvent: (f = msg.getChainEvent()) && commands_v1_validator_commands_pb.ChainEvent.toObject(includeInstance, f),
    oracleDataSubmission: (f = msg.getOracleDataSubmission()) && commands_v1_oracles_pb.OracleDataSubmission.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.wallet.v1.SubmitTransactionRequest;
  return proto.vega.wallet.v1.SubmitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.wallet.v1.SubmitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPropagate(value);
      break;
    case 1001:
      var value = new commands_v1_commands_pb.OrderSubmission;
      reader.readMessage(value,commands_v1_commands_pb.OrderSubmission.deserializeBinaryFromReader);
      msg.setOrderSubmission(value);
      break;
    case 1002:
      var value = new commands_v1_commands_pb.OrderCancellation;
      reader.readMessage(value,commands_v1_commands_pb.OrderCancellation.deserializeBinaryFromReader);
      msg.setOrderCancellation(value);
      break;
    case 1003:
      var value = new commands_v1_commands_pb.OrderAmendment;
      reader.readMessage(value,commands_v1_commands_pb.OrderAmendment.deserializeBinaryFromReader);
      msg.setOrderAmendment(value);
      break;
    case 1004:
      var value = new commands_v1_commands_pb.WithdrawSubmission;
      reader.readMessage(value,commands_v1_commands_pb.WithdrawSubmission.deserializeBinaryFromReader);
      msg.setWithdrawSubmission(value);
      break;
    case 1005:
      var value = new commands_v1_commands_pb.ProposalSubmission;
      reader.readMessage(value,commands_v1_commands_pb.ProposalSubmission.deserializeBinaryFromReader);
      msg.setProposalSubmission(value);
      break;
    case 1006:
      var value = new commands_v1_commands_pb.VoteSubmission;
      reader.readMessage(value,commands_v1_commands_pb.VoteSubmission.deserializeBinaryFromReader);
      msg.setVoteSubmission(value);
      break;
    case 1007:
      var value = new commands_v1_commands_pb.LiquidityProvisionSubmission;
      reader.readMessage(value,commands_v1_commands_pb.LiquidityProvisionSubmission.deserializeBinaryFromReader);
      msg.setLiquidityProvisionSubmission(value);
      break;
    case 1008:
      var value = new commands_v1_commands_pb.DelegateSubmission;
      reader.readMessage(value,commands_v1_commands_pb.DelegateSubmission.deserializeBinaryFromReader);
      msg.setDelegateSubmission(value);
      break;
    case 1009:
      var value = new commands_v1_commands_pb.UndelegateSubmission;
      reader.readMessage(value,commands_v1_commands_pb.UndelegateSubmission.deserializeBinaryFromReader);
      msg.setUndelegateSubmission(value);
      break;
    case 2001:
      var value = new commands_v1_validator_commands_pb.NodeRegistration;
      reader.readMessage(value,commands_v1_validator_commands_pb.NodeRegistration.deserializeBinaryFromReader);
      msg.setNodeRegistration(value);
      break;
    case 2002:
      var value = new commands_v1_validator_commands_pb.NodeVote;
      reader.readMessage(value,commands_v1_validator_commands_pb.NodeVote.deserializeBinaryFromReader);
      msg.setNodeVote(value);
      break;
    case 2003:
      var value = new commands_v1_validator_commands_pb.NodeSignature;
      reader.readMessage(value,commands_v1_validator_commands_pb.NodeSignature.deserializeBinaryFromReader);
      msg.setNodeSignature(value);
      break;
    case 2004:
      var value = new commands_v1_validator_commands_pb.ChainEvent;
      reader.readMessage(value,commands_v1_validator_commands_pb.ChainEvent.deserializeBinaryFromReader);
      msg.setChainEvent(value);
      break;
    case 3001:
      var value = new commands_v1_oracles_pb.OracleDataSubmission;
      reader.readMessage(value,commands_v1_oracles_pb.OracleDataSubmission.deserializeBinaryFromReader);
      msg.setOracleDataSubmission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.wallet.v1.SubmitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.wallet.v1.SubmitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.wallet.v1.SubmitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropagate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getOrderSubmission();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      commands_v1_commands_pb.OrderSubmission.serializeBinaryToWriter
    );
  }
  f = message.getOrderCancellation();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      commands_v1_commands_pb.OrderCancellation.serializeBinaryToWriter
    );
  }
  f = message.getOrderAmendment();
  if (f != null) {
    writer.writeMessage(
      1003,
      f,
      commands_v1_commands_pb.OrderAmendment.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawSubmission();
  if (f != null) {
    writer.writeMessage(
      1004,
      f,
      commands_v1_commands_pb.WithdrawSubmission.serializeBinaryToWriter
    );
  }
  f = message.getProposalSubmission();
  if (f != null) {
    writer.writeMessage(
      1005,
      f,
      commands_v1_commands_pb.ProposalSubmission.serializeBinaryToWriter
    );
  }
  f = message.getVoteSubmission();
  if (f != null) {
    writer.writeMessage(
      1006,
      f,
      commands_v1_commands_pb.VoteSubmission.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionSubmission();
  if (f != null) {
    writer.writeMessage(
      1007,
      f,
      commands_v1_commands_pb.LiquidityProvisionSubmission.serializeBinaryToWriter
    );
  }
  f = message.getDelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      1008,
      f,
      commands_v1_commands_pb.DelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      1009,
      f,
      commands_v1_commands_pb.UndelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getNodeRegistration();
  if (f != null) {
    writer.writeMessage(
      2001,
      f,
      commands_v1_validator_commands_pb.NodeRegistration.serializeBinaryToWriter
    );
  }
  f = message.getNodeVote();
  if (f != null) {
    writer.writeMessage(
      2002,
      f,
      commands_v1_validator_commands_pb.NodeVote.serializeBinaryToWriter
    );
  }
  f = message.getNodeSignature();
  if (f != null) {
    writer.writeMessage(
      2003,
      f,
      commands_v1_validator_commands_pb.NodeSignature.serializeBinaryToWriter
    );
  }
  f = message.getChainEvent();
  if (f != null) {
    writer.writeMessage(
      2004,
      f,
      commands_v1_validator_commands_pb.ChainEvent.serializeBinaryToWriter
    );
  }
  f = message.getOracleDataSubmission();
  if (f != null) {
    writer.writeMessage(
      3001,
      f,
      commands_v1_oracles_pb.OracleDataSubmission.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pub_key = 1;
 * @return {string}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool propagate = 2;
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getPropagate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setPropagate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional vega.commands.v1.OrderSubmission order_submission = 1001;
 * @return {?proto.vega.commands.v1.OrderSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getOrderSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OrderSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.OrderSubmission, 1001));
};


/**
 * @param {?proto.vega.commands.v1.OrderSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setOrderSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1001, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearOrderSubmission = function() {
  return this.setOrderSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasOrderSubmission = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional vega.commands.v1.OrderCancellation order_cancellation = 1002;
 * @return {?proto.vega.commands.v1.OrderCancellation}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getOrderCancellation = function() {
  return /** @type{?proto.vega.commands.v1.OrderCancellation} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.OrderCancellation, 1002));
};


/**
 * @param {?proto.vega.commands.v1.OrderCancellation|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setOrderCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1002, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearOrderCancellation = function() {
  return this.setOrderCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasOrderCancellation = function() {
  return jspb.Message.getField(this, 1002) != null;
};


/**
 * optional vega.commands.v1.OrderAmendment order_amendment = 1003;
 * @return {?proto.vega.commands.v1.OrderAmendment}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getOrderAmendment = function() {
  return /** @type{?proto.vega.commands.v1.OrderAmendment} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.OrderAmendment, 1003));
};


/**
 * @param {?proto.vega.commands.v1.OrderAmendment|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setOrderAmendment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1003, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearOrderAmendment = function() {
  return this.setOrderAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasOrderAmendment = function() {
  return jspb.Message.getField(this, 1003) != null;
};


/**
 * optional vega.commands.v1.WithdrawSubmission withdraw_submission = 1004;
 * @return {?proto.vega.commands.v1.WithdrawSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getWithdrawSubmission = function() {
  return /** @type{?proto.vega.commands.v1.WithdrawSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.WithdrawSubmission, 1004));
};


/**
 * @param {?proto.vega.commands.v1.WithdrawSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setWithdrawSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1004, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearWithdrawSubmission = function() {
  return this.setWithdrawSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasWithdrawSubmission = function() {
  return jspb.Message.getField(this, 1004) != null;
};


/**
 * optional vega.commands.v1.ProposalSubmission proposal_submission = 1005;
 * @return {?proto.vega.commands.v1.ProposalSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getProposalSubmission = function() {
  return /** @type{?proto.vega.commands.v1.ProposalSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.ProposalSubmission, 1005));
};


/**
 * @param {?proto.vega.commands.v1.ProposalSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setProposalSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1005, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearProposalSubmission = function() {
  return this.setProposalSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasProposalSubmission = function() {
  return jspb.Message.getField(this, 1005) != null;
};


/**
 * optional vega.commands.v1.VoteSubmission vote_submission = 1006;
 * @return {?proto.vega.commands.v1.VoteSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getVoteSubmission = function() {
  return /** @type{?proto.vega.commands.v1.VoteSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.VoteSubmission, 1006));
};


/**
 * @param {?proto.vega.commands.v1.VoteSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setVoteSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1006, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearVoteSubmission = function() {
  return this.setVoteSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasVoteSubmission = function() {
  return jspb.Message.getField(this, 1006) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionSubmission liquidity_provision_submission = 1007;
 * @return {?proto.vega.commands.v1.LiquidityProvisionSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getLiquidityProvisionSubmission = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.LiquidityProvisionSubmission, 1007));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setLiquidityProvisionSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1007, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearLiquidityProvisionSubmission = function() {
  return this.setLiquidityProvisionSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasLiquidityProvisionSubmission = function() {
  return jspb.Message.getField(this, 1007) != null;
};


/**
 * optional vega.commands.v1.DelegateSubmission delegate_submission = 1008;
 * @return {?proto.vega.commands.v1.DelegateSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getDelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.DelegateSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.DelegateSubmission, 1008));
};


/**
 * @param {?proto.vega.commands.v1.DelegateSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setDelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1008, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearDelegateSubmission = function() {
  return this.setDelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasDelegateSubmission = function() {
  return jspb.Message.getField(this, 1008) != null;
};


/**
 * optional vega.commands.v1.UndelegateSubmission undelegate_submission = 1009;
 * @return {?proto.vega.commands.v1.UndelegateSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getUndelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.UndelegateSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_commands_pb.UndelegateSubmission, 1009));
};


/**
 * @param {?proto.vega.commands.v1.UndelegateSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setUndelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1009, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearUndelegateSubmission = function() {
  return this.setUndelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasUndelegateSubmission = function() {
  return jspb.Message.getField(this, 1009) != null;
};


/**
 * optional vega.commands.v1.NodeRegistration node_registration = 2001;
 * @return {?proto.vega.commands.v1.NodeRegistration}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getNodeRegistration = function() {
  return /** @type{?proto.vega.commands.v1.NodeRegistration} */ (
    jspb.Message.getWrapperField(this, commands_v1_validator_commands_pb.NodeRegistration, 2001));
};


/**
 * @param {?proto.vega.commands.v1.NodeRegistration|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setNodeRegistration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2001, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearNodeRegistration = function() {
  return this.setNodeRegistration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasNodeRegistration = function() {
  return jspb.Message.getField(this, 2001) != null;
};


/**
 * optional vega.commands.v1.NodeVote node_vote = 2002;
 * @return {?proto.vega.commands.v1.NodeVote}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getNodeVote = function() {
  return /** @type{?proto.vega.commands.v1.NodeVote} */ (
    jspb.Message.getWrapperField(this, commands_v1_validator_commands_pb.NodeVote, 2002));
};


/**
 * @param {?proto.vega.commands.v1.NodeVote|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setNodeVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2002, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearNodeVote = function() {
  return this.setNodeVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasNodeVote = function() {
  return jspb.Message.getField(this, 2002) != null;
};


/**
 * optional vega.commands.v1.NodeSignature node_signature = 2003;
 * @return {?proto.vega.commands.v1.NodeSignature}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getNodeSignature = function() {
  return /** @type{?proto.vega.commands.v1.NodeSignature} */ (
    jspb.Message.getWrapperField(this, commands_v1_validator_commands_pb.NodeSignature, 2003));
};


/**
 * @param {?proto.vega.commands.v1.NodeSignature|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setNodeSignature = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2003, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearNodeSignature = function() {
  return this.setNodeSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasNodeSignature = function() {
  return jspb.Message.getField(this, 2003) != null;
};


/**
 * optional vega.commands.v1.ChainEvent chain_event = 2004;
 * @return {?proto.vega.commands.v1.ChainEvent}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getChainEvent = function() {
  return /** @type{?proto.vega.commands.v1.ChainEvent} */ (
    jspb.Message.getWrapperField(this, commands_v1_validator_commands_pb.ChainEvent, 2004));
};


/**
 * @param {?proto.vega.commands.v1.ChainEvent|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setChainEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2004, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearChainEvent = function() {
  return this.setChainEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasChainEvent = function() {
  return jspb.Message.getField(this, 2004) != null;
};


/**
 * optional vega.commands.v1.OracleDataSubmission oracle_data_submission = 3001;
 * @return {?proto.vega.commands.v1.OracleDataSubmission}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.getOracleDataSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OracleDataSubmission} */ (
    jspb.Message.getWrapperField(this, commands_v1_oracles_pb.OracleDataSubmission, 3001));
};


/**
 * @param {?proto.vega.commands.v1.OracleDataSubmission|undefined} value
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
*/
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.setOracleDataSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3001, proto.vega.wallet.v1.SubmitTransactionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.wallet.v1.SubmitTransactionRequest} returns this
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.clearOracleDataSubmission = function() {
  return this.setOracleDataSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.wallet.v1.SubmitTransactionRequest.prototype.hasOracleDataSubmission = function() {
  return jspb.Message.getField(this, 3001) != null;
};


goog.object.extend(exports, proto.vega.wallet.v1);
