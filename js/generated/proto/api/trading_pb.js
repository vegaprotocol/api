/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_vega_pb = require('../../proto/vega_pb.js');
goog.object.extend(proto, proto_vega_pb);
var proto_markets_pb = require('../../proto/markets_pb.js');
goog.object.extend(proto, proto_markets_pb);
var proto_governance_pb = require('../../proto/governance_pb.js');
goog.object.extend(proto, proto_governance_pb);
var proto_chain_events_pb = require('../../proto/chain_events_pb.js');
goog.object.extend(proto, proto_chain_events_pb);
var proto_assets_pb = require('../../proto/assets_pb.js');
goog.object.extend(proto, proto_assets_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var github_com_mwitkow_go$proto$validators_validator_pb = require('../../external/github.com/mwitkow/go-proto-validators/validator_pb.js');
goog.object.extend(proto, github_com_mwitkow_go$proto$validators_validator_pb);
goog.exportSymbol('proto.api.AccountsSubscribeRequest', null, global);
goog.exportSymbol('proto.api.AmendOrderRequest', null, global);
goog.exportSymbol('proto.api.AssetByIDRequest', null, global);
goog.exportSymbol('proto.api.AssetByIDResponse', null, global);
goog.exportSymbol('proto.api.AssetsRequest', null, global);
goog.exportSymbol('proto.api.AssetsResponse', null, global);
goog.exportSymbol('proto.api.CancelOrderRequest', null, global);
goog.exportSymbol('proto.api.CandlesRequest', null, global);
goog.exportSymbol('proto.api.CandlesResponse', null, global);
goog.exportSymbol('proto.api.CandlesSubscribeRequest', null, global);
goog.exportSymbol('proto.api.GetNetworkParametersProposalsRequest', null, global);
goog.exportSymbol('proto.api.GetNetworkParametersProposalsResponse', null, global);
goog.exportSymbol('proto.api.GetNewAssetProposalsRequest', null, global);
goog.exportSymbol('proto.api.GetNewAssetProposalsResponse', null, global);
goog.exportSymbol('proto.api.GetNewMarketProposalsRequest', null, global);
goog.exportSymbol('proto.api.GetNewMarketProposalsResponse', null, global);
goog.exportSymbol('proto.api.GetNodeSignaturesAggregateRequest', null, global);
goog.exportSymbol('proto.api.GetNodeSignaturesAggregateResponse', null, global);
goog.exportSymbol('proto.api.GetProposalByIDRequest', null, global);
goog.exportSymbol('proto.api.GetProposalByIDResponse', null, global);
goog.exportSymbol('proto.api.GetProposalByReferenceRequest', null, global);
goog.exportSymbol('proto.api.GetProposalByReferenceResponse', null, global);
goog.exportSymbol('proto.api.GetProposalsByPartyRequest', null, global);
goog.exportSymbol('proto.api.GetProposalsByPartyResponse', null, global);
goog.exportSymbol('proto.api.GetProposalsRequest', null, global);
goog.exportSymbol('proto.api.GetProposalsResponse', null, global);
goog.exportSymbol('proto.api.GetUpdateMarketProposalsRequest', null, global);
goog.exportSymbol('proto.api.GetUpdateMarketProposalsResponse', null, global);
goog.exportSymbol('proto.api.GetVotesByPartyRequest', null, global);
goog.exportSymbol('proto.api.GetVotesByPartyResponse', null, global);
goog.exportSymbol('proto.api.LastTradeRequest', null, global);
goog.exportSymbol('proto.api.LastTradeResponse', null, global);
goog.exportSymbol('proto.api.MarginLevelsRequest', null, global);
goog.exportSymbol('proto.api.MarginLevelsResponse', null, global);
goog.exportSymbol('proto.api.MarginLevelsSubscribeRequest', null, global);
goog.exportSymbol('proto.api.MarketAccountsRequest', null, global);
goog.exportSymbol('proto.api.MarketAccountsResponse', null, global);
goog.exportSymbol('proto.api.MarketByIDRequest', null, global);
goog.exportSymbol('proto.api.MarketByIDResponse', null, global);
goog.exportSymbol('proto.api.MarketDataByIDRequest', null, global);
goog.exportSymbol('proto.api.MarketDataByIDResponse', null, global);
goog.exportSymbol('proto.api.MarketDepthRequest', null, global);
goog.exportSymbol('proto.api.MarketDepthResponse', null, global);
goog.exportSymbol('proto.api.MarketDepthSubscribeRequest', null, global);
goog.exportSymbol('proto.api.MarketsDataResponse', null, global);
goog.exportSymbol('proto.api.MarketsDataSubscribeRequest', null, global);
goog.exportSymbol('proto.api.MarketsResponse', null, global);
goog.exportSymbol('proto.api.NotifyTraderAccountRequest', null, global);
goog.exportSymbol('proto.api.NotifyTraderAccountResponse', null, global);
goog.exportSymbol('proto.api.ObservePartyProposalsRequest', null, global);
goog.exportSymbol('proto.api.ObservePartyVotesRequest', null, global);
goog.exportSymbol('proto.api.ObserveProposalVotesRequest', null, global);
goog.exportSymbol('proto.api.OptionalProposalState', null, global);
goog.exportSymbol('proto.api.OrderByIDRequest', null, global);
goog.exportSymbol('proto.api.OrderByMarketAndIdRequest', null, global);
goog.exportSymbol('proto.api.OrderByMarketAndIdResponse', null, global);
goog.exportSymbol('proto.api.OrderByReferenceIDRequest', null, global);
goog.exportSymbol('proto.api.OrderByReferenceRequest', null, global);
goog.exportSymbol('proto.api.OrderByReferenceResponse', null, global);
goog.exportSymbol('proto.api.OrderVersionsByIDRequest', null, global);
goog.exportSymbol('proto.api.OrderVersionsResponse', null, global);
goog.exportSymbol('proto.api.OrdersByMarketRequest', null, global);
goog.exportSymbol('proto.api.OrdersByMarketResponse', null, global);
goog.exportSymbol('proto.api.OrdersByPartyRequest', null, global);
goog.exportSymbol('proto.api.OrdersByPartyResponse', null, global);
goog.exportSymbol('proto.api.OrdersStream', null, global);
goog.exportSymbol('proto.api.OrdersSubscribeRequest', null, global);
goog.exportSymbol('proto.api.Pagination', null, global);
goog.exportSymbol('proto.api.PartiesResponse', null, global);
goog.exportSymbol('proto.api.PartyAccountsRequest', null, global);
goog.exportSymbol('proto.api.PartyAccountsResponse', null, global);
goog.exportSymbol('proto.api.PartyByIDRequest', null, global);
goog.exportSymbol('proto.api.PartyByIDResponse', null, global);
goog.exportSymbol('proto.api.PositionsByPartyRequest', null, global);
goog.exportSymbol('proto.api.PositionsByPartyResponse', null, global);
goog.exportSymbol('proto.api.PositionsSubscribeRequest', null, global);
goog.exportSymbol('proto.api.PrepareAmendOrderResponse', null, global);
goog.exportSymbol('proto.api.PrepareCancelOrderResponse', null, global);
goog.exportSymbol('proto.api.PrepareProposalRequest', null, global);
goog.exportSymbol('proto.api.PrepareProposalResponse', null, global);
goog.exportSymbol('proto.api.PrepareSubmitOrderResponse', null, global);
goog.exportSymbol('proto.api.PrepareVoteRequest', null, global);
goog.exportSymbol('proto.api.PrepareVoteResponse', null, global);
goog.exportSymbol('proto.api.PropagateChainEventRequest', null, global);
goog.exportSymbol('proto.api.PropagateChainEventResponse', null, global);
goog.exportSymbol('proto.api.SubmitOrderRequest', null, global);
goog.exportSymbol('proto.api.SubmitTransactionRequest', null, global);
goog.exportSymbol('proto.api.SubmitTransactionResponse', null, global);
goog.exportSymbol('proto.api.TradesByMarketRequest', null, global);
goog.exportSymbol('proto.api.TradesByMarketResponse', null, global);
goog.exportSymbol('proto.api.TradesByOrderRequest', null, global);
goog.exportSymbol('proto.api.TradesByOrderResponse', null, global);
goog.exportSymbol('proto.api.TradesByPartyRequest', null, global);
goog.exportSymbol('proto.api.TradesByPartyResponse', null, global);
goog.exportSymbol('proto.api.TradesStream', null, global);
goog.exportSymbol('proto.api.TradesSubscribeRequest', null, global);
goog.exportSymbol('proto.api.VegaTimeResponse', null, global);
goog.exportSymbol('proto.api.WithdrawRequest', null, global);
goog.exportSymbol('proto.api.WithdrawResponse', null, global);
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
proto.api.PropagateChainEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PropagateChainEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PropagateChainEventRequest.displayName = 'proto.api.PropagateChainEventRequest';
}
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
proto.api.PropagateChainEventResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PropagateChainEventResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PropagateChainEventResponse.displayName = 'proto.api.PropagateChainEventResponse';
}
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
proto.api.SubmitTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.SubmitTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.SubmitTransactionRequest.displayName = 'proto.api.SubmitTransactionRequest';
}
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
proto.api.SubmitTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.SubmitTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.SubmitTransactionResponse.displayName = 'proto.api.SubmitTransactionResponse';
}
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
proto.api.WithdrawRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.WithdrawRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.WithdrawRequest.displayName = 'proto.api.WithdrawRequest';
}
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
proto.api.WithdrawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.WithdrawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.WithdrawResponse.displayName = 'proto.api.WithdrawResponse';
}
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
proto.api.NotifyTraderAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.NotifyTraderAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.NotifyTraderAccountRequest.displayName = 'proto.api.NotifyTraderAccountRequest';
}
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
proto.api.NotifyTraderAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.NotifyTraderAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.NotifyTraderAccountResponse.displayName = 'proto.api.NotifyTraderAccountResponse';
}
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
proto.api.PrepareSubmitOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareSubmitOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareSubmitOrderResponse.displayName = 'proto.api.PrepareSubmitOrderResponse';
}
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
proto.api.PrepareCancelOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareCancelOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareCancelOrderResponse.displayName = 'proto.api.PrepareCancelOrderResponse';
}
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
proto.api.PrepareAmendOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareAmendOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareAmendOrderResponse.displayName = 'proto.api.PrepareAmendOrderResponse';
}
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
proto.api.SubmitOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.SubmitOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.SubmitOrderRequest.displayName = 'proto.api.SubmitOrderRequest';
}
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
proto.api.CancelOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CancelOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.CancelOrderRequest.displayName = 'proto.api.CancelOrderRequest';
}
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
proto.api.AmendOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AmendOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AmendOrderRequest.displayName = 'proto.api.AmendOrderRequest';
}
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
proto.api.AssetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AssetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AssetsRequest.displayName = 'proto.api.AssetsRequest';
}
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
proto.api.AssetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.AssetsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.AssetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AssetsResponse.displayName = 'proto.api.AssetsResponse';
}
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
proto.api.AssetByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AssetByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AssetByIDRequest.displayName = 'proto.api.AssetByIDRequest';
}
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
proto.api.AssetByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AssetByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AssetByIDResponse.displayName = 'proto.api.AssetByIDResponse';
}
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
proto.api.GetNodeSignaturesAggregateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetNodeSignaturesAggregateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNodeSignaturesAggregateRequest.displayName = 'proto.api.GetNodeSignaturesAggregateRequest';
}
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
proto.api.GetNodeSignaturesAggregateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetNodeSignaturesAggregateResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetNodeSignaturesAggregateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNodeSignaturesAggregateResponse.displayName = 'proto.api.GetNodeSignaturesAggregateResponse';
}
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
proto.api.OptionalProposalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OptionalProposalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OptionalProposalState.displayName = 'proto.api.OptionalProposalState';
}
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
proto.api.GetProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalsRequest.displayName = 'proto.api.GetProposalsRequest';
}
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
proto.api.GetProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalsResponse.displayName = 'proto.api.GetProposalsResponse';
}
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
proto.api.GetProposalsByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalsByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalsByPartyRequest.displayName = 'proto.api.GetProposalsByPartyRequest';
}
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
proto.api.GetProposalsByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetProposalsByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetProposalsByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalsByPartyResponse.displayName = 'proto.api.GetProposalsByPartyResponse';
}
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
proto.api.GetVotesByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetVotesByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetVotesByPartyRequest.displayName = 'proto.api.GetVotesByPartyRequest';
}
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
proto.api.GetVotesByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetVotesByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetVotesByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetVotesByPartyResponse.displayName = 'proto.api.GetVotesByPartyResponse';
}
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
proto.api.GetNewMarketProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetNewMarketProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNewMarketProposalsRequest.displayName = 'proto.api.GetNewMarketProposalsRequest';
}
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
proto.api.GetNewMarketProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetNewMarketProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetNewMarketProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNewMarketProposalsResponse.displayName = 'proto.api.GetNewMarketProposalsResponse';
}
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
proto.api.GetUpdateMarketProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetUpdateMarketProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetUpdateMarketProposalsRequest.displayName = 'proto.api.GetUpdateMarketProposalsRequest';
}
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
proto.api.GetUpdateMarketProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetUpdateMarketProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetUpdateMarketProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetUpdateMarketProposalsResponse.displayName = 'proto.api.GetUpdateMarketProposalsResponse';
}
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
proto.api.GetNetworkParametersProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetNetworkParametersProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNetworkParametersProposalsRequest.displayName = 'proto.api.GetNetworkParametersProposalsRequest';
}
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
proto.api.GetNetworkParametersProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetNetworkParametersProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetNetworkParametersProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNetworkParametersProposalsResponse.displayName = 'proto.api.GetNetworkParametersProposalsResponse';
}
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
proto.api.GetNewAssetProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetNewAssetProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNewAssetProposalsRequest.displayName = 'proto.api.GetNewAssetProposalsRequest';
}
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
proto.api.GetNewAssetProposalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.GetNewAssetProposalsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.GetNewAssetProposalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetNewAssetProposalsResponse.displayName = 'proto.api.GetNewAssetProposalsResponse';
}
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
proto.api.GetProposalByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalByIDRequest.displayName = 'proto.api.GetProposalByIDRequest';
}
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
proto.api.GetProposalByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalByIDResponse.displayName = 'proto.api.GetProposalByIDResponse';
}
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
proto.api.GetProposalByReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalByReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalByReferenceRequest.displayName = 'proto.api.GetProposalByReferenceRequest';
}
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
proto.api.GetProposalByReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetProposalByReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.GetProposalByReferenceResponse.displayName = 'proto.api.GetProposalByReferenceResponse';
}
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
proto.api.ObservePartyProposalsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ObservePartyProposalsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ObservePartyProposalsRequest.displayName = 'proto.api.ObservePartyProposalsRequest';
}
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
proto.api.ObserveProposalVotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ObserveProposalVotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ObserveProposalVotesRequest.displayName = 'proto.api.ObserveProposalVotesRequest';
}
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
proto.api.ObservePartyVotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ObservePartyVotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.ObservePartyVotesRequest.displayName = 'proto.api.ObservePartyVotesRequest';
}
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
proto.api.MarginLevelsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarginLevelsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarginLevelsSubscribeRequest.displayName = 'proto.api.MarginLevelsSubscribeRequest';
}
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
proto.api.MarginLevelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarginLevelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarginLevelsRequest.displayName = 'proto.api.MarginLevelsRequest';
}
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
proto.api.MarginLevelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.MarginLevelsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.MarginLevelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarginLevelsResponse.displayName = 'proto.api.MarginLevelsResponse';
}
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
proto.api.MarketsDataSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketsDataSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketsDataSubscribeRequest.displayName = 'proto.api.MarketsDataSubscribeRequest';
}
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
proto.api.MarketDataByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketDataByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDataByIDRequest.displayName = 'proto.api.MarketDataByIDRequest';
}
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
proto.api.MarketDataByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketDataByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDataByIDResponse.displayName = 'proto.api.MarketDataByIDResponse';
}
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
proto.api.MarketsDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.MarketsDataResponse.repeatedFields_, null);
};
goog.inherits(proto.api.MarketsDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketsDataResponse.displayName = 'proto.api.MarketsDataResponse';
}
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
proto.api.LastTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.LastTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.LastTradeRequest.displayName = 'proto.api.LastTradeRequest';
}
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
proto.api.LastTradeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.LastTradeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.LastTradeResponse.displayName = 'proto.api.LastTradeResponse';
}
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
proto.api.MarketByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketByIDRequest.displayName = 'proto.api.MarketByIDRequest';
}
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
proto.api.MarketByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketByIDResponse.displayName = 'proto.api.MarketByIDResponse';
}
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
proto.api.PartyByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PartyByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PartyByIDRequest.displayName = 'proto.api.PartyByIDRequest';
}
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
proto.api.PartyByIDResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PartyByIDResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PartyByIDResponse.displayName = 'proto.api.PartyByIDResponse';
}
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
proto.api.PartiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PartiesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.PartiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PartiesResponse.displayName = 'proto.api.PartiesResponse';
}
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
proto.api.TradesByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TradesByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByPartyRequest.displayName = 'proto.api.TradesByPartyRequest';
}
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
proto.api.TradesByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.TradesByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.TradesByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByPartyResponse.displayName = 'proto.api.TradesByPartyResponse';
}
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
proto.api.TradesByOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TradesByOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByOrderRequest.displayName = 'proto.api.TradesByOrderRequest';
}
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
proto.api.TradesByOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.TradesByOrderResponse.repeatedFields_, null);
};
goog.inherits(proto.api.TradesByOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByOrderResponse.displayName = 'proto.api.TradesByOrderResponse';
}
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
proto.api.AccountsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AccountsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.AccountsSubscribeRequest.displayName = 'proto.api.AccountsSubscribeRequest';
}
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
proto.api.OrdersSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrdersSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersSubscribeRequest.displayName = 'proto.api.OrdersSubscribeRequest';
}
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
proto.api.TradesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TradesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesSubscribeRequest.displayName = 'proto.api.TradesSubscribeRequest';
}
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
proto.api.CandlesSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CandlesSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.CandlesSubscribeRequest.displayName = 'proto.api.CandlesSubscribeRequest';
}
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
proto.api.MarketDepthSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketDepthSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDepthSubscribeRequest.displayName = 'proto.api.MarketDepthSubscribeRequest';
}
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
proto.api.PositionsSubscribeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PositionsSubscribeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PositionsSubscribeRequest.displayName = 'proto.api.PositionsSubscribeRequest';
}
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
proto.api.OrdersByMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrdersByMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersByMarketRequest.displayName = 'proto.api.OrdersByMarketRequest';
}
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
proto.api.OrdersByMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.OrdersByMarketResponse.repeatedFields_, null);
};
goog.inherits(proto.api.OrdersByMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersByMarketResponse.displayName = 'proto.api.OrdersByMarketResponse';
}
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
proto.api.OrdersByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrdersByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersByPartyRequest.displayName = 'proto.api.OrdersByPartyRequest';
}
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
proto.api.OrdersByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.OrdersByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.OrdersByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersByPartyResponse.displayName = 'proto.api.OrdersByPartyResponse';
}
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
proto.api.OrderByMarketAndIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByMarketAndIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByMarketAndIdRequest.displayName = 'proto.api.OrderByMarketAndIdRequest';
}
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
proto.api.OrderByMarketAndIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByMarketAndIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByMarketAndIdResponse.displayName = 'proto.api.OrderByMarketAndIdResponse';
}
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
proto.api.OrderByReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByReferenceRequest.displayName = 'proto.api.OrderByReferenceRequest';
}
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
proto.api.OrderByReferenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByReferenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByReferenceResponse.displayName = 'proto.api.OrderByReferenceResponse';
}
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
proto.api.MarketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.MarketsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.MarketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketsResponse.displayName = 'proto.api.MarketsResponse';
}
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
proto.api.CandlesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CandlesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.CandlesRequest.displayName = 'proto.api.CandlesRequest';
}
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
proto.api.CandlesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.CandlesResponse.repeatedFields_, null);
};
goog.inherits(proto.api.CandlesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.CandlesResponse.displayName = 'proto.api.CandlesResponse';
}
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
proto.api.MarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDepthRequest.displayName = 'proto.api.MarketDepthRequest';
}
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
proto.api.MarketDepthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.MarketDepthResponse.repeatedFields_, null);
};
goog.inherits(proto.api.MarketDepthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketDepthResponse.displayName = 'proto.api.MarketDepthResponse';
}
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
proto.api.TradesByMarketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.TradesByMarketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByMarketRequest.displayName = 'proto.api.TradesByMarketRequest';
}
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
proto.api.TradesByMarketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.TradesByMarketResponse.repeatedFields_, null);
};
goog.inherits(proto.api.TradesByMarketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesByMarketResponse.displayName = 'proto.api.TradesByMarketResponse';
}
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
proto.api.PositionsByPartyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PositionsByPartyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PositionsByPartyRequest.displayName = 'proto.api.PositionsByPartyRequest';
}
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
proto.api.PositionsByPartyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PositionsByPartyResponse.repeatedFields_, null);
};
goog.inherits(proto.api.PositionsByPartyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PositionsByPartyResponse.displayName = 'proto.api.PositionsByPartyResponse';
}
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
proto.api.VegaTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.VegaTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.VegaTimeResponse.displayName = 'proto.api.VegaTimeResponse';
}
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
proto.api.Pagination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Pagination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Pagination.displayName = 'proto.api.Pagination';
}
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
proto.api.OrdersStream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.OrdersStream.repeatedFields_, null);
};
goog.inherits(proto.api.OrdersStream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrdersStream.displayName = 'proto.api.OrdersStream';
}
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
proto.api.TradesStream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.TradesStream.repeatedFields_, null);
};
goog.inherits(proto.api.TradesStream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.TradesStream.displayName = 'proto.api.TradesStream';
}
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
proto.api.PartyAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PartyAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PartyAccountsRequest.displayName = 'proto.api.PartyAccountsRequest';
}
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
proto.api.PartyAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PartyAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.PartyAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PartyAccountsResponse.displayName = 'proto.api.PartyAccountsResponse';
}
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
proto.api.MarketAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MarketAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketAccountsRequest.displayName = 'proto.api.MarketAccountsRequest';
}
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
proto.api.MarketAccountsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.MarketAccountsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.MarketAccountsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.MarketAccountsResponse.displayName = 'proto.api.MarketAccountsResponse';
}
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
proto.api.PrepareProposalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareProposalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareProposalRequest.displayName = 'proto.api.PrepareProposalRequest';
}
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
proto.api.PrepareProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareProposalResponse.displayName = 'proto.api.PrepareProposalResponse';
}
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
proto.api.PrepareVoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareVoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareVoteRequest.displayName = 'proto.api.PrepareVoteRequest';
}
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
proto.api.PrepareVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PrepareVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PrepareVoteResponse.displayName = 'proto.api.PrepareVoteResponse';
}
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
proto.api.OrderByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByIDRequest.displayName = 'proto.api.OrderByIDRequest';
}
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
proto.api.OrderByReferenceIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderByReferenceIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderByReferenceIDRequest.displayName = 'proto.api.OrderByReferenceIDRequest';
}
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
proto.api.OrderVersionsByIDRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.OrderVersionsByIDRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderVersionsByIDRequest.displayName = 'proto.api.OrderVersionsByIDRequest';
}
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
proto.api.OrderVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.OrderVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.api.OrderVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.OrderVersionsResponse.displayName = 'proto.api.OrderVersionsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PropagateChainEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PropagateChainEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PropagateChainEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PropagateChainEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    evt: (f = msg.getEvt()) && proto_chain_events_pb.ChainEvent.toObject(includeInstance, f)
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
 * @return {!proto.api.PropagateChainEventRequest}
 */
proto.api.PropagateChainEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PropagateChainEventRequest;
  return proto.api.PropagateChainEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PropagateChainEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PropagateChainEventRequest}
 */
proto.api.PropagateChainEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_chain_events_pb.ChainEvent;
      reader.readMessage(value,proto_chain_events_pb.ChainEvent.deserializeBinaryFromReader);
      msg.setEvt(value);
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
proto.api.PropagateChainEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PropagateChainEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PropagateChainEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PropagateChainEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_chain_events_pb.ChainEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.ChainEvent evt = 1;
 * @return {?proto.vega.ChainEvent}
 */
proto.api.PropagateChainEventRequest.prototype.getEvt = function() {
  return /** @type{?proto.vega.ChainEvent} */ (
    jspb.Message.getWrapperField(this, proto_chain_events_pb.ChainEvent, 1));
};


/** @param {?proto.vega.ChainEvent|undefined} value */
proto.api.PropagateChainEventRequest.prototype.setEvt = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PropagateChainEventRequest.prototype.clearEvt = function() {
  this.setEvt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PropagateChainEventRequest.prototype.hasEvt = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PropagateChainEventResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PropagateChainEventResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PropagateChainEventResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PropagateChainEventResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.api.PropagateChainEventResponse}
 */
proto.api.PropagateChainEventResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PropagateChainEventResponse;
  return proto.api.PropagateChainEventResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PropagateChainEventResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PropagateChainEventResponse}
 */
proto.api.PropagateChainEventResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.api.PropagateChainEventResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PropagateChainEventResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PropagateChainEventResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PropagateChainEventResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.PropagateChainEventResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.api.PropagateChainEventResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.SubmitTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.SubmitTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.SubmitTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: (f = msg.getTx()) && proto_vega_pb.SignedBundle.toObject(includeInstance, f)
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
 * @return {!proto.api.SubmitTransactionRequest}
 */
proto.api.SubmitTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.SubmitTransactionRequest;
  return proto.api.SubmitTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.SubmitTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.SubmitTransactionRequest}
 */
proto.api.SubmitTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.SignedBundle;
      reader.readMessage(value,proto_vega_pb.SignedBundle.deserializeBinaryFromReader);
      msg.setTx(value);
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
proto.api.SubmitTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.SubmitTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.SubmitTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.SignedBundle.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.SignedBundle tx = 1;
 * @return {?proto.vega.SignedBundle}
 */
proto.api.SubmitTransactionRequest.prototype.getTx = function() {
  return /** @type{?proto.vega.SignedBundle} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.SignedBundle, 1));
};


/** @param {?proto.vega.SignedBundle|undefined} value */
proto.api.SubmitTransactionRequest.prototype.setTx = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SubmitTransactionRequest.prototype.clearTx = function() {
  this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SubmitTransactionRequest.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.SubmitTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.SubmitTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.SubmitTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.api.SubmitTransactionResponse}
 */
proto.api.SubmitTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.SubmitTransactionResponse;
  return proto.api.SubmitTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.SubmitTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.SubmitTransactionResponse}
 */
proto.api.SubmitTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.api.SubmitTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.SubmitTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.SubmitTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.SubmitTransactionResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.api.SubmitTransactionResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.WithdrawRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.WithdrawRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.WithdrawRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.WithdrawRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdraw: (f = msg.getWithdraw()) && proto_vega_pb.Withdraw.toObject(includeInstance, f)
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
 * @return {!proto.api.WithdrawRequest}
 */
proto.api.WithdrawRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.WithdrawRequest;
  return proto.api.WithdrawRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.WithdrawRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.WithdrawRequest}
 */
proto.api.WithdrawRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Withdraw;
      reader.readMessage(value,proto_vega_pb.Withdraw.deserializeBinaryFromReader);
      msg.setWithdraw(value);
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
proto.api.WithdrawRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.WithdrawRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.WithdrawRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.WithdrawRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdraw();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.Withdraw.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Withdraw withdraw = 1;
 * @return {?proto.vega.Withdraw}
 */
proto.api.WithdrawRequest.prototype.getWithdraw = function() {
  return /** @type{?proto.vega.Withdraw} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Withdraw, 1));
};


/** @param {?proto.vega.Withdraw|undefined} value */
proto.api.WithdrawRequest.prototype.setWithdraw = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.WithdrawRequest.prototype.clearWithdraw = function() {
  this.setWithdraw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.WithdrawRequest.prototype.hasWithdraw = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.WithdrawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.WithdrawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.WithdrawResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.WithdrawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.api.WithdrawResponse}
 */
proto.api.WithdrawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.WithdrawResponse;
  return proto.api.WithdrawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.WithdrawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.WithdrawResponse}
 */
proto.api.WithdrawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.api.WithdrawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.WithdrawResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.WithdrawResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.WithdrawResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.WithdrawResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.api.WithdrawResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.NotifyTraderAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.NotifyTraderAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.NotifyTraderAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.NotifyTraderAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notif: (f = msg.getNotif()) && proto_vega_pb.NotifyTraderAccount.toObject(includeInstance, f)
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
 * @return {!proto.api.NotifyTraderAccountRequest}
 */
proto.api.NotifyTraderAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.NotifyTraderAccountRequest;
  return proto.api.NotifyTraderAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.NotifyTraderAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.NotifyTraderAccountRequest}
 */
proto.api.NotifyTraderAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.NotifyTraderAccount;
      reader.readMessage(value,proto_vega_pb.NotifyTraderAccount.deserializeBinaryFromReader);
      msg.setNotif(value);
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
proto.api.NotifyTraderAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.NotifyTraderAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.NotifyTraderAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.NotifyTraderAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotif();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.NotifyTraderAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.NotifyTraderAccount notif = 1;
 * @return {?proto.vega.NotifyTraderAccount}
 */
proto.api.NotifyTraderAccountRequest.prototype.getNotif = function() {
  return /** @type{?proto.vega.NotifyTraderAccount} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.NotifyTraderAccount, 1));
};


/** @param {?proto.vega.NotifyTraderAccount|undefined} value */
proto.api.NotifyTraderAccountRequest.prototype.setNotif = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.NotifyTraderAccountRequest.prototype.clearNotif = function() {
  this.setNotif(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.NotifyTraderAccountRequest.prototype.hasNotif = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.NotifyTraderAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.NotifyTraderAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.NotifyTraderAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.NotifyTraderAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    submitted: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.api.NotifyTraderAccountResponse}
 */
proto.api.NotifyTraderAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.NotifyTraderAccountResponse;
  return proto.api.NotifyTraderAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.NotifyTraderAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.NotifyTraderAccountResponse}
 */
proto.api.NotifyTraderAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubmitted(value);
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
proto.api.NotifyTraderAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.NotifyTraderAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.NotifyTraderAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.NotifyTraderAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubmitted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool submitted = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.NotifyTraderAccountResponse.prototype.getSubmitted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.api.NotifyTraderAccountResponse.prototype.setSubmitted = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareSubmitOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareSubmitOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareSubmitOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareSubmitOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: msg.getBlob_asB64(),
    submitid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.PrepareSubmitOrderResponse}
 */
proto.api.PrepareSubmitOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareSubmitOrderResponse;
  return proto.api.PrepareSubmitOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareSubmitOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareSubmitOrderResponse}
 */
proto.api.PrepareSubmitOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlob(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitid(value);
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
proto.api.PrepareSubmitOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareSubmitOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareSubmitOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareSubmitOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSubmitid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.api.PrepareSubmitOrderResponse.prototype.getBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blob = 1;
 * This is a type-conversion wrapper around `getBlob()`
 * @return {string}
 */
proto.api.PrepareSubmitOrderResponse.prototype.getBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlob()));
};


/**
 * optional bytes blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlob()`
 * @return {!Uint8Array}
 */
proto.api.PrepareSubmitOrderResponse.prototype.getBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.api.PrepareSubmitOrderResponse.prototype.setBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string submitID = 2;
 * @return {string}
 */
proto.api.PrepareSubmitOrderResponse.prototype.getSubmitid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.PrepareSubmitOrderResponse.prototype.setSubmitid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareCancelOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareCancelOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareCancelOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareCancelOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: msg.getBlob_asB64()
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
 * @return {!proto.api.PrepareCancelOrderResponse}
 */
proto.api.PrepareCancelOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareCancelOrderResponse;
  return proto.api.PrepareCancelOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareCancelOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareCancelOrderResponse}
 */
proto.api.PrepareCancelOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlob(value);
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
proto.api.PrepareCancelOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareCancelOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareCancelOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareCancelOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.api.PrepareCancelOrderResponse.prototype.getBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blob = 1;
 * This is a type-conversion wrapper around `getBlob()`
 * @return {string}
 */
proto.api.PrepareCancelOrderResponse.prototype.getBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlob()));
};


/**
 * optional bytes blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlob()`
 * @return {!Uint8Array}
 */
proto.api.PrepareCancelOrderResponse.prototype.getBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.api.PrepareCancelOrderResponse.prototype.setBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareAmendOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareAmendOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareAmendOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareAmendOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: msg.getBlob_asB64()
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
 * @return {!proto.api.PrepareAmendOrderResponse}
 */
proto.api.PrepareAmendOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareAmendOrderResponse;
  return proto.api.PrepareAmendOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareAmendOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareAmendOrderResponse}
 */
proto.api.PrepareAmendOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlob(value);
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
proto.api.PrepareAmendOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareAmendOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareAmendOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareAmendOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.api.PrepareAmendOrderResponse.prototype.getBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blob = 1;
 * This is a type-conversion wrapper around `getBlob()`
 * @return {string}
 */
proto.api.PrepareAmendOrderResponse.prototype.getBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlob()));
};


/**
 * optional bytes blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlob()`
 * @return {!Uint8Array}
 */
proto.api.PrepareAmendOrderResponse.prototype.getBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.api.PrepareAmendOrderResponse.prototype.setBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.SubmitOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.SubmitOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.SubmitOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    submission: (f = msg.getSubmission()) && proto_vega_pb.OrderSubmission.toObject(includeInstance, f)
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
 * @return {!proto.api.SubmitOrderRequest}
 */
proto.api.SubmitOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.SubmitOrderRequest;
  return proto.api.SubmitOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.SubmitOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.SubmitOrderRequest}
 */
proto.api.SubmitOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.OrderSubmission;
      reader.readMessage(value,proto_vega_pb.OrderSubmission.deserializeBinaryFromReader);
      msg.setSubmission(value);
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
proto.api.SubmitOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.SubmitOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.SubmitOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SubmitOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubmission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.OrderSubmission.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.OrderSubmission submission = 1;
 * @return {?proto.vega.OrderSubmission}
 */
proto.api.SubmitOrderRequest.prototype.getSubmission = function() {
  return /** @type{?proto.vega.OrderSubmission} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.OrderSubmission, 1));
};


/** @param {?proto.vega.OrderSubmission|undefined} value */
proto.api.SubmitOrderRequest.prototype.setSubmission = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SubmitOrderRequest.prototype.clearSubmission = function() {
  this.setSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SubmitOrderRequest.prototype.hasSubmission = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CancelOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CancelOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CancelOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CancelOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancellation: (f = msg.getCancellation()) && proto_vega_pb.OrderCancellation.toObject(includeInstance, f)
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
 * @return {!proto.api.CancelOrderRequest}
 */
proto.api.CancelOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CancelOrderRequest;
  return proto.api.CancelOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CancelOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CancelOrderRequest}
 */
proto.api.CancelOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.OrderCancellation;
      reader.readMessage(value,proto_vega_pb.OrderCancellation.deserializeBinaryFromReader);
      msg.setCancellation(value);
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
proto.api.CancelOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.CancelOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.CancelOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CancelOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancellation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.OrderCancellation.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.OrderCancellation cancellation = 1;
 * @return {?proto.vega.OrderCancellation}
 */
proto.api.CancelOrderRequest.prototype.getCancellation = function() {
  return /** @type{?proto.vega.OrderCancellation} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.OrderCancellation, 1));
};


/** @param {?proto.vega.OrderCancellation|undefined} value */
proto.api.CancelOrderRequest.prototype.setCancellation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.CancelOrderRequest.prototype.clearCancellation = function() {
  this.setCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.CancelOrderRequest.prototype.hasCancellation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AmendOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AmendOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AmendOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AmendOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    amendment: (f = msg.getAmendment()) && proto_vega_pb.OrderAmendment.toObject(includeInstance, f)
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
 * @return {!proto.api.AmendOrderRequest}
 */
proto.api.AmendOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AmendOrderRequest;
  return proto.api.AmendOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AmendOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AmendOrderRequest}
 */
proto.api.AmendOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.OrderAmendment;
      reader.readMessage(value,proto_vega_pb.OrderAmendment.deserializeBinaryFromReader);
      msg.setAmendment(value);
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
proto.api.AmendOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AmendOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AmendOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AmendOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmendment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.OrderAmendment.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.OrderAmendment amendment = 1;
 * @return {?proto.vega.OrderAmendment}
 */
proto.api.AmendOrderRequest.prototype.getAmendment = function() {
  return /** @type{?proto.vega.OrderAmendment} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.OrderAmendment, 1));
};


/** @param {?proto.vega.OrderAmendment|undefined} value */
proto.api.AmendOrderRequest.prototype.setAmendment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.AmendOrderRequest.prototype.clearAmendment = function() {
  this.setAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.AmendOrderRequest.prototype.hasAmendment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AssetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AssetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AssetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.api.AssetsRequest}
 */
proto.api.AssetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AssetsRequest;
  return proto.api.AssetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AssetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AssetsRequest}
 */
proto.api.AssetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.api.AssetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AssetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AssetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.AssetsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AssetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AssetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AssetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    proto_assets_pb.Asset.toObject, includeInstance)
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
 * @return {!proto.api.AssetsResponse}
 */
proto.api.AssetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AssetsResponse;
  return proto.api.AssetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AssetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AssetsResponse}
 */
proto.api.AssetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_assets_pb.Asset;
      reader.readMessage(value,proto_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
proto.api.AssetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AssetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AssetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.api.AssetsResponse.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_assets_pb.Asset, 1));
};


/** @param {!Array<!proto.vega.Asset>} value */
proto.api.AssetsResponse.prototype.setAssetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.api.AssetsResponse.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.AssetsResponse.prototype.clearAssetsList = function() {
  this.setAssetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AssetByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AssetByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AssetByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.AssetByIDRequest}
 */
proto.api.AssetByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AssetByIDRequest;
  return proto.api.AssetByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AssetByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AssetByIDRequest}
 */
proto.api.AssetByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.api.AssetByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AssetByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AssetByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.api.AssetByIDRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.AssetByIDRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AssetByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AssetByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AssetByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: (f = msg.getAsset()) && proto_assets_pb.Asset.toObject(includeInstance, f)
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
 * @return {!proto.api.AssetByIDResponse}
 */
proto.api.AssetByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AssetByIDResponse;
  return proto.api.AssetByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AssetByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AssetByIDResponse}
 */
proto.api.AssetByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_assets_pb.Asset;
      reader.readMessage(value,proto_assets_pb.Asset.deserializeBinaryFromReader);
      msg.setAsset(value);
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
proto.api.AssetByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AssetByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AssetByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AssetByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Asset asset = 1;
 * @return {?proto.vega.Asset}
 */
proto.api.AssetByIDResponse.prototype.getAsset = function() {
  return /** @type{?proto.vega.Asset} */ (
    jspb.Message.getWrapperField(this, proto_assets_pb.Asset, 1));
};


/** @param {?proto.vega.Asset|undefined} value */
proto.api.AssetByIDResponse.prototype.setAsset = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.AssetByIDResponse.prototype.clearAsset = function() {
  this.setAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.AssetByIDResponse.prototype.hasAsset = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNodeSignaturesAggregateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNodeSignaturesAggregateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNodeSignaturesAggregateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNodeSignaturesAggregateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.GetNodeSignaturesAggregateRequest}
 */
proto.api.GetNodeSignaturesAggregateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNodeSignaturesAggregateRequest;
  return proto.api.GetNodeSignaturesAggregateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNodeSignaturesAggregateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNodeSignaturesAggregateRequest}
 */
proto.api.GetNodeSignaturesAggregateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.api.GetNodeSignaturesAggregateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNodeSignaturesAggregateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNodeSignaturesAggregateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNodeSignaturesAggregateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.api.GetNodeSignaturesAggregateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetNodeSignaturesAggregateRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetNodeSignaturesAggregateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNodeSignaturesAggregateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNodeSignaturesAggregateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNodeSignaturesAggregateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNodeSignaturesAggregateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(),
    proto_vega_pb.NodeSignature.toObject, includeInstance)
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
 * @return {!proto.api.GetNodeSignaturesAggregateResponse}
 */
proto.api.GetNodeSignaturesAggregateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNodeSignaturesAggregateResponse;
  return proto.api.GetNodeSignaturesAggregateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNodeSignaturesAggregateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNodeSignaturesAggregateResponse}
 */
proto.api.GetNodeSignaturesAggregateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.NodeSignature;
      reader.readMessage(value,proto_vega_pb.NodeSignature.deserializeBinaryFromReader);
      msg.addSignatures(value);
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
proto.api.GetNodeSignaturesAggregateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNodeSignaturesAggregateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNodeSignaturesAggregateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNodeSignaturesAggregateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.NodeSignature.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.NodeSignature signatures = 1;
 * @return {!Array<!proto.vega.NodeSignature>}
 */
proto.api.GetNodeSignaturesAggregateResponse.prototype.getSignaturesList = function() {
  return /** @type{!Array<!proto.vega.NodeSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.NodeSignature, 1));
};


/** @param {!Array<!proto.vega.NodeSignature>} value */
proto.api.GetNodeSignaturesAggregateResponse.prototype.setSignaturesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.NodeSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.NodeSignature}
 */
proto.api.GetNodeSignaturesAggregateResponse.prototype.addSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.NodeSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetNodeSignaturesAggregateResponse.prototype.clearSignaturesList = function() {
  this.setSignaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OptionalProposalState.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OptionalProposalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OptionalProposalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OptionalProposalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.OptionalProposalState}
 */
proto.api.OptionalProposalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OptionalProposalState;
  return proto.api.OptionalProposalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OptionalProposalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OptionalProposalState}
 */
proto.api.OptionalProposalState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.Proposal.State} */ (reader.readEnum());
      msg.setValue(value);
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
proto.api.OptionalProposalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OptionalProposalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OptionalProposalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OptionalProposalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional vega.Proposal.State value = 1;
 * @return {!proto.vega.Proposal.State}
 */
proto.api.OptionalProposalState.prototype.getValue = function() {
  return /** @type {!proto.vega.Proposal.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.vega.Proposal.State} value */
proto.api.OptionalProposalState.prototype.setValue = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetProposalsRequest}
 */
proto.api.GetProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalsRequest;
  return proto.api.GetProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalsRequest}
 */
proto.api.GetProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState selectInState = 1;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetProposalsRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 1));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetProposalsRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetProposalsRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetProposalsRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetProposalsResponse}
 */
proto.api.GetProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalsResponse;
  return proto.api.GetProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalsResponse}
 */
proto.api.GetProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetProposalsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetProposalsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalsByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalsByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalsByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetProposalsByPartyRequest}
 */
proto.api.GetProposalsByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalsByPartyRequest;
  return proto.api.GetProposalsByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalsByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalsByPartyRequest}
 */
proto.api.GetProposalsByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetProposalsByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalsByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalsByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.GetProposalsByPartyRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetProposalsByPartyRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OptionalProposalState selectInState = 2;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetProposalsByPartyRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 2));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetProposalsByPartyRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetProposalsByPartyRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetProposalsByPartyRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetProposalsByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalsByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalsByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalsByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetProposalsByPartyResponse}
 */
proto.api.GetProposalsByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalsByPartyResponse;
  return proto.api.GetProposalsByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalsByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalsByPartyResponse}
 */
proto.api.GetProposalsByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetProposalsByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalsByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalsByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalsByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetProposalsByPartyResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetProposalsByPartyResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetProposalsByPartyResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetProposalsByPartyResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetVotesByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetVotesByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetVotesByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetVotesByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.GetVotesByPartyRequest}
 */
proto.api.GetVotesByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetVotesByPartyRequest;
  return proto.api.GetVotesByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetVotesByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetVotesByPartyRequest}
 */
proto.api.GetVotesByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.GetVotesByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetVotesByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetVotesByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetVotesByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.GetVotesByPartyRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetVotesByPartyRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetVotesByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetVotesByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetVotesByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetVotesByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetVotesByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    proto_governance_pb.Vote.toObject, includeInstance)
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
 * @return {!proto.api.GetVotesByPartyResponse}
 */
proto.api.GetVotesByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetVotesByPartyResponse;
  return proto.api.GetVotesByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetVotesByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetVotesByPartyResponse}
 */
proto.api.GetVotesByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.Vote;
      reader.readMessage(value,proto_governance_pb.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
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
proto.api.GetVotesByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetVotesByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetVotesByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetVotesByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Vote votes = 1;
 * @return {!Array<!proto.vega.Vote>}
 */
proto.api.GetVotesByPartyResponse.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.vega.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.Vote, 1));
};


/** @param {!Array<!proto.vega.Vote>} value */
proto.api.GetVotesByPartyResponse.prototype.setVotesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Vote}
 */
proto.api.GetVotesByPartyResponse.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetVotesByPartyResponse.prototype.clearVotesList = function() {
  this.setVotesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNewMarketProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNewMarketProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNewMarketProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewMarketProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetNewMarketProposalsRequest}
 */
proto.api.GetNewMarketProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNewMarketProposalsRequest;
  return proto.api.GetNewMarketProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNewMarketProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNewMarketProposalsRequest}
 */
proto.api.GetNewMarketProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetNewMarketProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNewMarketProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNewMarketProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewMarketProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState selectInState = 1;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetNewMarketProposalsRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 1));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetNewMarketProposalsRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetNewMarketProposalsRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetNewMarketProposalsRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetNewMarketProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNewMarketProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNewMarketProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNewMarketProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewMarketProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetNewMarketProposalsResponse}
 */
proto.api.GetNewMarketProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNewMarketProposalsResponse;
  return proto.api.GetNewMarketProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNewMarketProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNewMarketProposalsResponse}
 */
proto.api.GetNewMarketProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetNewMarketProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNewMarketProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNewMarketProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewMarketProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetNewMarketProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetNewMarketProposalsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetNewMarketProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetNewMarketProposalsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetUpdateMarketProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetUpdateMarketProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetUpdateMarketProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUpdateMarketProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetUpdateMarketProposalsRequest}
 */
proto.api.GetUpdateMarketProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetUpdateMarketProposalsRequest;
  return proto.api.GetUpdateMarketProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetUpdateMarketProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetUpdateMarketProposalsRequest}
 */
proto.api.GetUpdateMarketProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetUpdateMarketProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetUpdateMarketProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetUpdateMarketProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUpdateMarketProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.GetUpdateMarketProposalsRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetUpdateMarketProposalsRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OptionalProposalState selectInState = 2;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetUpdateMarketProposalsRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 2));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetUpdateMarketProposalsRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetUpdateMarketProposalsRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetUpdateMarketProposalsRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetUpdateMarketProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetUpdateMarketProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetUpdateMarketProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetUpdateMarketProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUpdateMarketProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetUpdateMarketProposalsResponse}
 */
proto.api.GetUpdateMarketProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetUpdateMarketProposalsResponse;
  return proto.api.GetUpdateMarketProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetUpdateMarketProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetUpdateMarketProposalsResponse}
 */
proto.api.GetUpdateMarketProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetUpdateMarketProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetUpdateMarketProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetUpdateMarketProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetUpdateMarketProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetUpdateMarketProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetUpdateMarketProposalsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetUpdateMarketProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetUpdateMarketProposalsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNetworkParametersProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNetworkParametersProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNetworkParametersProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNetworkParametersProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetNetworkParametersProposalsRequest}
 */
proto.api.GetNetworkParametersProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNetworkParametersProposalsRequest;
  return proto.api.GetNetworkParametersProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNetworkParametersProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNetworkParametersProposalsRequest}
 */
proto.api.GetNetworkParametersProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetNetworkParametersProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNetworkParametersProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNetworkParametersProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNetworkParametersProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState selectInState = 1;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetNetworkParametersProposalsRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 1));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetNetworkParametersProposalsRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetNetworkParametersProposalsRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetNetworkParametersProposalsRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetNetworkParametersProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNetworkParametersProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNetworkParametersProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNetworkParametersProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNetworkParametersProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetNetworkParametersProposalsResponse}
 */
proto.api.GetNetworkParametersProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNetworkParametersProposalsResponse;
  return proto.api.GetNetworkParametersProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNetworkParametersProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNetworkParametersProposalsResponse}
 */
proto.api.GetNetworkParametersProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetNetworkParametersProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNetworkParametersProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNetworkParametersProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNetworkParametersProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetNetworkParametersProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetNetworkParametersProposalsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetNetworkParametersProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetNetworkParametersProposalsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNewAssetProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNewAssetProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNewAssetProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewAssetProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectinstate: (f = msg.getSelectinstate()) && proto.api.OptionalProposalState.toObject(includeInstance, f)
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
 * @return {!proto.api.GetNewAssetProposalsRequest}
 */
proto.api.GetNewAssetProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNewAssetProposalsRequest;
  return proto.api.GetNewAssetProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNewAssetProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNewAssetProposalsRequest}
 */
proto.api.GetNewAssetProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.OptionalProposalState;
      reader.readMessage(value,proto.api.OptionalProposalState.deserializeBinaryFromReader);
      msg.setSelectinstate(value);
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
proto.api.GetNewAssetProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNewAssetProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNewAssetProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewAssetProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectinstate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.OptionalProposalState.serializeBinaryToWriter
    );
  }
};


/**
 * optional OptionalProposalState selectInState = 1;
 * @return {?proto.api.OptionalProposalState}
 */
proto.api.GetNewAssetProposalsRequest.prototype.getSelectinstate = function() {
  return /** @type{?proto.api.OptionalProposalState} */ (
    jspb.Message.getWrapperField(this, proto.api.OptionalProposalState, 1));
};


/** @param {?proto.api.OptionalProposalState|undefined} value */
proto.api.GetNewAssetProposalsRequest.prototype.setSelectinstate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetNewAssetProposalsRequest.prototype.clearSelectinstate = function() {
  this.setSelectinstate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetNewAssetProposalsRequest.prototype.hasSelectinstate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.GetNewAssetProposalsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetNewAssetProposalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetNewAssetProposalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetNewAssetProposalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewAssetProposalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto_governance_pb.GovernanceData.toObject, includeInstance)
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
 * @return {!proto.api.GetNewAssetProposalsResponse}
 */
proto.api.GetNewAssetProposalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetNewAssetProposalsResponse;
  return proto.api.GetNewAssetProposalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetNewAssetProposalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetNewAssetProposalsResponse}
 */
proto.api.GetNewAssetProposalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.api.GetNewAssetProposalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetNewAssetProposalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetNewAssetProposalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetNewAssetProposalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.GovernanceData data = 1;
 * @return {!Array<!proto.vega.GovernanceData>}
 */
proto.api.GetNewAssetProposalsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.GovernanceData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {!Array<!proto.vega.GovernanceData>} value */
proto.api.GetNewAssetProposalsResponse.prototype.setDataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.GovernanceData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.GovernanceData}
 */
proto.api.GetNewAssetProposalsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.GovernanceData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.GetNewAssetProposalsResponse.prototype.clearDataList = function() {
  this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.GetProposalByIDRequest}
 */
proto.api.GetProposalByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalByIDRequest;
  return proto.api.GetProposalByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalByIDRequest}
 */
proto.api.GetProposalByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalid(value);
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
proto.api.GetProposalByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string proposalID = 1;
 * @return {string}
 */
proto.api.GetProposalByIDRequest.prototype.getProposalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetProposalByIDRequest.prototype.setProposalid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto_governance_pb.GovernanceData.toObject(includeInstance, f)
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
 * @return {!proto.api.GetProposalByIDResponse}
 */
proto.api.GetProposalByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalByIDResponse;
  return proto.api.GetProposalByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalByIDResponse}
 */
proto.api.GetProposalByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.api.GetProposalByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.api.GetProposalByIDResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {?proto.vega.GovernanceData|undefined} value */
proto.api.GetProposalByIDResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetProposalByIDResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetProposalByIDResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalByReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalByReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalByReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.GetProposalByReferenceRequest}
 */
proto.api.GetProposalByReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalByReferenceRequest;
  return proto.api.GetProposalByReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalByReferenceRequest}
 */
proto.api.GetProposalByReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
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
proto.api.GetProposalByReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalByReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Reference = 1;
 * @return {string}
 */
proto.api.GetProposalByReferenceRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.GetProposalByReferenceRequest.prototype.setReference = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetProposalByReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetProposalByReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetProposalByReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto_governance_pb.GovernanceData.toObject(includeInstance, f)
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
 * @return {!proto.api.GetProposalByReferenceResponse}
 */
proto.api.GetProposalByReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetProposalByReferenceResponse;
  return proto.api.GetProposalByReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetProposalByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetProposalByReferenceResponse}
 */
proto.api.GetProposalByReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.GovernanceData;
      reader.readMessage(value,proto_governance_pb.GovernanceData.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.api.GetProposalByReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.GetProposalByReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.GetProposalByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.GetProposalByReferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_governance_pb.GovernanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.GovernanceData data = 1;
 * @return {?proto.vega.GovernanceData}
 */
proto.api.GetProposalByReferenceResponse.prototype.getData = function() {
  return /** @type{?proto.vega.GovernanceData} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.GovernanceData, 1));
};


/** @param {?proto.vega.GovernanceData|undefined} value */
proto.api.GetProposalByReferenceResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.GetProposalByReferenceResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.GetProposalByReferenceResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ObservePartyProposalsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ObservePartyProposalsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ObservePartyProposalsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObservePartyProposalsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.ObservePartyProposalsRequest}
 */
proto.api.ObservePartyProposalsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ObservePartyProposalsRequest;
  return proto.api.ObservePartyProposalsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ObservePartyProposalsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ObservePartyProposalsRequest}
 */
proto.api.ObservePartyProposalsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.ObservePartyProposalsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ObservePartyProposalsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ObservePartyProposalsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObservePartyProposalsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.ObservePartyProposalsRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.ObservePartyProposalsRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ObserveProposalVotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ObserveProposalVotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ObserveProposalVotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObserveProposalVotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.ObserveProposalVotesRequest}
 */
proto.api.ObserveProposalVotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ObserveProposalVotesRequest;
  return proto.api.ObserveProposalVotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ObserveProposalVotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ObserveProposalVotesRequest}
 */
proto.api.ObserveProposalVotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposalid(value);
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
proto.api.ObserveProposalVotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ObserveProposalVotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ObserveProposalVotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObserveProposalVotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string proposalID = 1;
 * @return {string}
 */
proto.api.ObserveProposalVotesRequest.prototype.getProposalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.ObserveProposalVotesRequest.prototype.setProposalid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ObservePartyVotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ObservePartyVotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ObservePartyVotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObservePartyVotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.ObservePartyVotesRequest}
 */
proto.api.ObservePartyVotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ObservePartyVotesRequest;
  return proto.api.ObservePartyVotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ObservePartyVotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ObservePartyVotesRequest}
 */
proto.api.ObservePartyVotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.ObservePartyVotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.ObservePartyVotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.ObservePartyVotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.ObservePartyVotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.ObservePartyVotesRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.ObservePartyVotesRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarginLevelsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarginLevelsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarginLevelsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.MarginLevelsSubscribeRequest}
 */
proto.api.MarginLevelsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarginLevelsSubscribeRequest;
  return proto.api.MarginLevelsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarginLevelsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarginLevelsSubscribeRequest}
 */
proto.api.MarginLevelsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarginLevelsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarginLevelsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarginLevelsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.MarginLevelsSubscribeRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarginLevelsSubscribeRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.api.MarginLevelsSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.MarginLevelsSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarginLevelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarginLevelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarginLevelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.MarginLevelsRequest}
 */
proto.api.MarginLevelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarginLevelsRequest;
  return proto.api.MarginLevelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarginLevelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarginLevelsRequest}
 */
proto.api.MarginLevelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarginLevelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarginLevelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarginLevelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.MarginLevelsRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarginLevelsRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.api.MarginLevelsRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.MarginLevelsRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.MarginLevelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarginLevelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarginLevelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarginLevelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marginlevelsList: jspb.Message.toObjectList(msg.getMarginlevelsList(),
    proto_vega_pb.MarginLevels.toObject, includeInstance)
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
 * @return {!proto.api.MarginLevelsResponse}
 */
proto.api.MarginLevelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarginLevelsResponse;
  return proto.api.MarginLevelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarginLevelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarginLevelsResponse}
 */
proto.api.MarginLevelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.MarginLevels;
      reader.readMessage(value,proto_vega_pb.MarginLevels.deserializeBinaryFromReader);
      msg.addMarginlevels(value);
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
proto.api.MarginLevelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarginLevelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarginLevelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarginLevelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarginlevelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.MarginLevels.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.MarginLevels marginLevels = 1;
 * @return {!Array<!proto.vega.MarginLevels>}
 */
proto.api.MarginLevelsResponse.prototype.getMarginlevelsList = function() {
  return /** @type{!Array<!proto.vega.MarginLevels>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.MarginLevels, 1));
};


/** @param {!Array<!proto.vega.MarginLevels>} value */
proto.api.MarginLevelsResponse.prototype.setMarginlevelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.MarginLevels=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.MarginLevels}
 */
proto.api.MarginLevelsResponse.prototype.addMarginlevels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.MarginLevels, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarginLevelsResponse.prototype.clearMarginlevelsList = function() {
  this.setMarginlevelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketsDataSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketsDataSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketsDataSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsDataSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.MarketsDataSubscribeRequest}
 */
proto.api.MarketsDataSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketsDataSubscribeRequest;
  return proto.api.MarketsDataSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketsDataSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketsDataSubscribeRequest}
 */
proto.api.MarketsDataSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarketsDataSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketsDataSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketsDataSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsDataSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketsDataSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketsDataSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDataByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDataByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDataByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDataByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.MarketDataByIDRequest}
 */
proto.api.MarketDataByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDataByIDRequest;
  return proto.api.MarketDataByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDataByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDataByIDRequest}
 */
proto.api.MarketDataByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarketDataByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDataByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDataByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDataByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketDataByIDRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketDataByIDRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDataByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDataByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDataByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDataByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketdata: (f = msg.getMarketdata()) && proto_vega_pb.MarketData.toObject(includeInstance, f)
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
 * @return {!proto.api.MarketDataByIDResponse}
 */
proto.api.MarketDataByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDataByIDResponse;
  return proto.api.MarketDataByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDataByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDataByIDResponse}
 */
proto.api.MarketDataByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.MarketData;
      reader.readMessage(value,proto_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.setMarketdata(value);
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
proto.api.MarketDataByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDataByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDataByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDataByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketdata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.MarketData marketData = 1;
 * @return {?proto.vega.MarketData}
 */
proto.api.MarketDataByIDResponse.prototype.getMarketdata = function() {
  return /** @type{?proto.vega.MarketData} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.MarketData, 1));
};


/** @param {?proto.vega.MarketData|undefined} value */
proto.api.MarketDataByIDResponse.prototype.setMarketdata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.MarketDataByIDResponse.prototype.clearMarketdata = function() {
  this.setMarketdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.MarketDataByIDResponse.prototype.hasMarketdata = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.MarketsDataResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketsDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketsDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketsDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsdataList: jspb.Message.toObjectList(msg.getMarketsdataList(),
    proto_vega_pb.MarketData.toObject, includeInstance)
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
 * @return {!proto.api.MarketsDataResponse}
 */
proto.api.MarketsDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketsDataResponse;
  return proto.api.MarketsDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketsDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketsDataResponse}
 */
proto.api.MarketsDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.MarketData;
      reader.readMessage(value,proto_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.addMarketsdata(value);
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
proto.api.MarketsDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketsDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketsDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.MarketData marketsData = 1;
 * @return {!Array<!proto.vega.MarketData>}
 */
proto.api.MarketsDataResponse.prototype.getMarketsdataList = function() {
  return /** @type{!Array<!proto.vega.MarketData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.MarketData, 1));
};


/** @param {!Array<!proto.vega.MarketData>} value */
proto.api.MarketsDataResponse.prototype.setMarketsdataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.MarketData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.MarketData}
 */
proto.api.MarketsDataResponse.prototype.addMarketsdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.MarketData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarketsDataResponse.prototype.clearMarketsdataList = function() {
  this.setMarketsdataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.LastTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.LastTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.LastTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.LastTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.LastTradeRequest}
 */
proto.api.LastTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.LastTradeRequest;
  return proto.api.LastTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.LastTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.LastTradeRequest}
 */
proto.api.LastTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.LastTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.LastTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.LastTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.LastTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.LastTradeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.LastTradeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.LastTradeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.LastTradeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.LastTradeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.LastTradeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto_vega_pb.Trade.toObject(includeInstance, f)
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
 * @return {!proto.api.LastTradeResponse}
 */
proto.api.LastTradeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.LastTradeResponse;
  return proto.api.LastTradeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.LastTradeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.LastTradeResponse}
 */
proto.api.LastTradeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.setTrade(value);
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
proto.api.LastTradeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.LastTradeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.LastTradeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.LastTradeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Trade trade = 1;
 * @return {?proto.vega.Trade}
 */
proto.api.LastTradeResponse.prototype.getTrade = function() {
  return /** @type{?proto.vega.Trade} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Trade, 1));
};


/** @param {?proto.vega.Trade|undefined} value */
proto.api.LastTradeResponse.prototype.setTrade = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.LastTradeResponse.prototype.clearTrade = function() {
  this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.LastTradeResponse.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.MarketByIDRequest}
 */
proto.api.MarketByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketByIDRequest;
  return proto.api.MarketByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketByIDRequest}
 */
proto.api.MarketByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarketByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketByIDRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketByIDRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && proto_markets_pb.Market.toObject(includeInstance, f)
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
 * @return {!proto.api.MarketByIDResponse}
 */
proto.api.MarketByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketByIDResponse;
  return proto.api.MarketByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketByIDResponse}
 */
proto.api.MarketByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_markets_pb.Market;
      reader.readMessage(value,proto_markets_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
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
proto.api.MarketByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_markets_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Market market = 1;
 * @return {?proto.vega.Market}
 */
proto.api.MarketByIDResponse.prototype.getMarket = function() {
  return /** @type{?proto.vega.Market} */ (
    jspb.Message.getWrapperField(this, proto_markets_pb.Market, 1));
};


/** @param {?proto.vega.Market|undefined} value */
proto.api.MarketByIDResponse.prototype.setMarket = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.MarketByIDResponse.prototype.clearMarket = function() {
  this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.MarketByIDResponse.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PartyByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PartyByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PartyByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.PartyByIDRequest}
 */
proto.api.PartyByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PartyByIDRequest;
  return proto.api.PartyByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PartyByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PartyByIDRequest}
 */
proto.api.PartyByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.PartyByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PartyByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PartyByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.PartyByIDRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.PartyByIDRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PartyByIDResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PartyByIDResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PartyByIDResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyByIDResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: (f = msg.getParty()) && proto_vega_pb.Party.toObject(includeInstance, f)
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
 * @return {!proto.api.PartyByIDResponse}
 */
proto.api.PartyByIDResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PartyByIDResponse;
  return proto.api.PartyByIDResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PartyByIDResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PartyByIDResponse}
 */
proto.api.PartyByIDResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Party;
      reader.readMessage(value,proto_vega_pb.Party.deserializeBinaryFromReader);
      msg.setParty(value);
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
proto.api.PartyByIDResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PartyByIDResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PartyByIDResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyByIDResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.Party.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Party party = 1;
 * @return {?proto.vega.Party}
 */
proto.api.PartyByIDResponse.prototype.getParty = function() {
  return /** @type{?proto.vega.Party} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Party, 1));
};


/** @param {?proto.vega.Party|undefined} value */
proto.api.PartyByIDResponse.prototype.setParty = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PartyByIDResponse.prototype.clearParty = function() {
  this.setParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PartyByIDResponse.prototype.hasParty = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PartiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PartiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PartiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PartiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partiesList: jspb.Message.toObjectList(msg.getPartiesList(),
    proto_vega_pb.Party.toObject, includeInstance)
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
 * @return {!proto.api.PartiesResponse}
 */
proto.api.PartiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PartiesResponse;
  return proto.api.PartiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PartiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PartiesResponse}
 */
proto.api.PartiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Party;
      reader.readMessage(value,proto_vega_pb.Party.deserializeBinaryFromReader);
      msg.addParties(value);
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
proto.api.PartiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PartiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PartiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Party.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Party parties = 1;
 * @return {!Array<!proto.vega.Party>}
 */
proto.api.PartiesResponse.prototype.getPartiesList = function() {
  return /** @type{!Array<!proto.vega.Party>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Party, 1));
};


/** @param {!Array<!proto.vega.Party>} value */
proto.api.PartiesResponse.prototype.setPartiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Party=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Party}
 */
proto.api.PartiesResponse.prototype.addParties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Party, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.PartiesResponse.prototype.clearPartiesList = function() {
  this.setPartiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pagination: (f = msg.getPagination()) && proto.api.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.api.TradesByPartyRequest}
 */
proto.api.TradesByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByPartyRequest;
  return proto.api.TradesByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByPartyRequest}
 */
proto.api.TradesByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = new proto.api.Pagination;
      reader.readMessage(value,proto.api.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.api.TradesByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.TradesByPartyRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.TradesByPartyRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.api.TradesByPartyRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.TradesByPartyRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Pagination pagination = 3;
 * @return {?proto.api.Pagination}
 */
proto.api.TradesByPartyRequest.prototype.getPagination = function() {
  return /** @type{?proto.api.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.api.Pagination, 3));
};


/** @param {?proto.api.Pagination|undefined} value */
proto.api.TradesByPartyRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.TradesByPartyRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.TradesByPartyRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.TradesByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto_vega_pb.Trade.toObject, includeInstance)
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
 * @return {!proto.api.TradesByPartyResponse}
 */
proto.api.TradesByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByPartyResponse;
  return proto.api.TradesByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByPartyResponse}
 */
proto.api.TradesByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.api.TradesByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.api.TradesByPartyResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Trade, 1));
};


/** @param {!Array<!proto.vega.Trade>} value */
proto.api.TradesByPartyResponse.prototype.setTradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.api.TradesByPartyResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.TradesByPartyResponse.prototype.clearTradesList = function() {
  this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.TradesByOrderRequest}
 */
proto.api.TradesByOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByOrderRequest;
  return proto.api.TradesByOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByOrderRequest}
 */
proto.api.TradesByOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
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
proto.api.TradesByOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.TradesByOrderRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.TradesByOrderRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.TradesByOrderResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto_vega_pb.Trade.toObject, includeInstance)
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
 * @return {!proto.api.TradesByOrderResponse}
 */
proto.api.TradesByOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByOrderResponse;
  return proto.api.TradesByOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByOrderResponse}
 */
proto.api.TradesByOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.api.TradesByOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.api.TradesByOrderResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Trade, 1));
};


/** @param {!Array<!proto.vega.Trade>} value */
proto.api.TradesByOrderResponse.prototype.setTradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.api.TradesByOrderResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.TradesByOrderResponse.prototype.clearTradesList = function() {
  this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AccountsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AccountsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AccountsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AccountsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.api.AccountsSubscribeRequest}
 */
proto.api.AccountsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AccountsSubscribeRequest;
  return proto.api.AccountsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AccountsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AccountsSubscribeRequest}
 */
proto.api.AccountsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
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
proto.api.AccountsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.AccountsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.AccountsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.AccountsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.AccountsSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.AccountsSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.api.AccountsSubscribeRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.AccountsSubscribeRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.api.AccountsSubscribeRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.api.AccountsSubscribeRequest.prototype.setAsset = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional vega.AccountType type = 4;
 * @return {!proto.vega.AccountType}
 */
proto.api.AccountsSubscribeRequest.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.vega.AccountType} value */
proto.api.AccountsSubscribeRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.OrdersSubscribeRequest}
 */
proto.api.OrdersSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersSubscribeRequest;
  return proto.api.OrdersSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersSubscribeRequest}
 */
proto.api.OrdersSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.OrdersSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.OrdersSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrdersSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.api.OrdersSubscribeRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.OrdersSubscribeRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.TradesSubscribeRequest}
 */
proto.api.TradesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesSubscribeRequest;
  return proto.api.TradesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesSubscribeRequest}
 */
proto.api.TradesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.TradesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.TradesSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.TradesSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.api.TradesSubscribeRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.TradesSubscribeRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CandlesSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CandlesSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CandlesSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.CandlesSubscribeRequest}
 */
proto.api.CandlesSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CandlesSubscribeRequest;
  return proto.api.CandlesSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CandlesSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CandlesSubscribeRequest}
 */
proto.api.CandlesSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
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
proto.api.CandlesSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.CandlesSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.CandlesSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.CandlesSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.CandlesSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vega.Interval interval = 2;
 * @return {!proto.vega.Interval}
 */
proto.api.CandlesSubscribeRequest.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.vega.Interval} value */
proto.api.CandlesSubscribeRequest.prototype.setInterval = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDepthSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDepthSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDepthSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.MarketDepthSubscribeRequest}
 */
proto.api.MarketDepthSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDepthSubscribeRequest;
  return proto.api.MarketDepthSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDepthSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDepthSubscribeRequest}
 */
proto.api.MarketDepthSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.MarketDepthSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDepthSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDepthSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketDepthSubscribeRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketDepthSubscribeRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PositionsSubscribeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PositionsSubscribeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PositionsSubscribeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsSubscribeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.PositionsSubscribeRequest}
 */
proto.api.PositionsSubscribeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PositionsSubscribeRequest;
  return proto.api.PositionsSubscribeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PositionsSubscribeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PositionsSubscribeRequest}
 */
proto.api.PositionsSubscribeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
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
proto.api.PositionsSubscribeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PositionsSubscribeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PositionsSubscribeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsSubscribeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.PositionsSubscribeRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.PositionsSubscribeRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersByMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersByMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersByMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.api.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.api.OrdersByMarketRequest}
 */
proto.api.OrdersByMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersByMarketRequest;
  return proto.api.OrdersByMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersByMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersByMarketRequest}
 */
proto.api.OrdersByMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto.api.Pagination;
      reader.readMessage(value,proto.api.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.api.OrdersByMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersByMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersByMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.OrdersByMarketRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrdersByMarketRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.api.Pagination}
 */
proto.api.OrdersByMarketRequest.prototype.getPagination = function() {
  return /** @type{?proto.api.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.api.Pagination, 2));
};


/** @param {?proto.api.Pagination|undefined} value */
proto.api.OrdersByMarketRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.OrdersByMarketRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.OrdersByMarketRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.OrdersByMarketResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersByMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersByMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersByMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.api.OrdersByMarketResponse}
 */
proto.api.OrdersByMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersByMarketResponse;
  return proto.api.OrdersByMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersByMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersByMarketResponse}
 */
proto.api.OrdersByMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.api.OrdersByMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersByMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersByMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.api.OrdersByMarketResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {!Array<!proto.vega.Order>} value */
proto.api.OrdersByMarketResponse.prototype.setOrdersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.api.OrdersByMarketResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.OrdersByMarketResponse.prototype.clearOrdersList = function() {
  this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.api.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.api.OrdersByPartyRequest}
 */
proto.api.OrdersByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersByPartyRequest;
  return proto.api.OrdersByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersByPartyRequest}
 */
proto.api.OrdersByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = new proto.api.Pagination;
      reader.readMessage(value,proto.api.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.api.OrdersByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.OrdersByPartyRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrdersByPartyRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.api.Pagination}
 */
proto.api.OrdersByPartyRequest.prototype.getPagination = function() {
  return /** @type{?proto.api.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.api.Pagination, 2));
};


/** @param {?proto.api.Pagination|undefined} value */
proto.api.OrdersByPartyRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.OrdersByPartyRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.OrdersByPartyRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.OrdersByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.api.OrdersByPartyResponse}
 */
proto.api.OrdersByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersByPartyResponse;
  return proto.api.OrdersByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersByPartyResponse}
 */
proto.api.OrdersByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.api.OrdersByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.api.OrdersByPartyResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {!Array<!proto.vega.Order>} value */
proto.api.OrdersByPartyResponse.prototype.setOrdersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.api.OrdersByPartyResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.OrdersByPartyResponse.prototype.clearOrdersList = function() {
  this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByMarketAndIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByMarketAndIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByMarketAndIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByMarketAndIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.OrderByMarketAndIdRequest}
 */
proto.api.OrderByMarketAndIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByMarketAndIdRequest;
  return proto.api.OrderByMarketAndIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByMarketAndIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByMarketAndIdRequest}
 */
proto.api.OrderByMarketAndIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
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
proto.api.OrderByMarketAndIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByMarketAndIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByMarketAndIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByMarketAndIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.OrderByMarketAndIdRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrderByMarketAndIdRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string orderID = 2;
 * @return {string}
 */
proto.api.OrderByMarketAndIdRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.OrderByMarketAndIdRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByMarketAndIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByMarketAndIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByMarketAndIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByMarketAndIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto_vega_pb.Order.toObject(includeInstance, f)
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
 * @return {!proto.api.OrderByMarketAndIdResponse}
 */
proto.api.OrderByMarketAndIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByMarketAndIdResponse;
  return proto.api.OrderByMarketAndIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByMarketAndIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByMarketAndIdResponse}
 */
proto.api.OrderByMarketAndIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
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
proto.api.OrderByMarketAndIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByMarketAndIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByMarketAndIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByMarketAndIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.api.OrderByMarketAndIdResponse.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {?proto.vega.Order|undefined} value */
proto.api.OrderByMarketAndIdResponse.prototype.setOrder = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.OrderByMarketAndIdResponse.prototype.clearOrder = function() {
  this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.OrderByMarketAndIdResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.OrderByReferenceRequest}
 */
proto.api.OrderByReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByReferenceRequest;
  return proto.api.OrderByReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByReferenceRequest}
 */
proto.api.OrderByReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
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
proto.api.OrderByReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reference = 1;
 * @return {string}
 */
proto.api.OrderByReferenceRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrderByReferenceRequest.prototype.setReference = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByReferenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByReferenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByReferenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto_vega_pb.Order.toObject(includeInstance, f)
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
 * @return {!proto.api.OrderByReferenceResponse}
 */
proto.api.OrderByReferenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByReferenceResponse;
  return proto.api.OrderByReferenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByReferenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByReferenceResponse}
 */
proto.api.OrderByReferenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
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
proto.api.OrderByReferenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByReferenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByReferenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.api.OrderByReferenceResponse.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {?proto.vega.Order|undefined} value */
proto.api.OrderByReferenceResponse.prototype.setOrder = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.OrderByReferenceResponse.prototype.clearOrder = function() {
  this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.OrderByReferenceResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.MarketsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    proto_markets_pb.Market.toObject, includeInstance)
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
 * @return {!proto.api.MarketsResponse}
 */
proto.api.MarketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketsResponse;
  return proto.api.MarketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketsResponse}
 */
proto.api.MarketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_markets_pb.Market;
      reader.readMessage(value,proto_markets_pb.Market.deserializeBinaryFromReader);
      msg.addMarkets(value);
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
proto.api.MarketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_markets_pb.Market.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Market markets = 1;
 * @return {!Array<!proto.vega.Market>}
 */
proto.api.MarketsResponse.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.vega.Market>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_markets_pb.Market, 1));
};


/** @param {!Array<!proto.vega.Market>} value */
proto.api.MarketsResponse.prototype.setMarketsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Market=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Market}
 */
proto.api.MarketsResponse.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Market, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarketsResponse.prototype.clearMarketsList = function() {
  this.setMarketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CandlesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CandlesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CandlesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sincetimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    interval: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.api.CandlesRequest}
 */
proto.api.CandlesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CandlesRequest;
  return proto.api.CandlesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CandlesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CandlesRequest}
 */
proto.api.CandlesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSincetimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
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
proto.api.CandlesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.CandlesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.CandlesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSincetimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.CandlesRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.CandlesRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sinceTimestamp = 2;
 * @return {number}
 */
proto.api.CandlesRequest.prototype.getSincetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.CandlesRequest.prototype.setSincetimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional vega.Interval interval = 3;
 * @return {!proto.vega.Interval}
 */
proto.api.CandlesRequest.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.vega.Interval} value */
proto.api.CandlesRequest.prototype.setInterval = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.CandlesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CandlesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CandlesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CandlesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    candlesList: jspb.Message.toObjectList(msg.getCandlesList(),
    proto_vega_pb.Candle.toObject, includeInstance)
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
 * @return {!proto.api.CandlesResponse}
 */
proto.api.CandlesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CandlesResponse;
  return proto.api.CandlesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CandlesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CandlesResponse}
 */
proto.api.CandlesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Candle;
      reader.readMessage(value,proto_vega_pb.Candle.deserializeBinaryFromReader);
      msg.addCandles(value);
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
proto.api.CandlesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.CandlesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.CandlesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.CandlesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Candle.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Candle candles = 1;
 * @return {!Array<!proto.vega.Candle>}
 */
proto.api.CandlesResponse.prototype.getCandlesList = function() {
  return /** @type{!Array<!proto.vega.Candle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Candle, 1));
};


/** @param {!Array<!proto.vega.Candle>} value */
proto.api.CandlesResponse.prototype.setCandlesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Candle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Candle}
 */
proto.api.CandlesResponse.prototype.addCandles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Candle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.CandlesResponse.prototype.clearCandlesList = function() {
  this.setCandlesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxdepth: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.MarketDepthRequest}
 */
proto.api.MarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDepthRequest;
  return proto.api.MarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDepthRequest}
 */
proto.api.MarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxdepth(value);
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
proto.api.MarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxdepth();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketDepthRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketDepthRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 maxDepth = 2;
 * @return {number}
 */
proto.api.MarketDepthRequest.prototype.getMaxdepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.MarketDepthRequest.prototype.setMaxdepth = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.MarketDepthResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketDepthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketDepthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketDepthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto_vega_pb.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    proto_vega_pb.PriceLevel.toObject, includeInstance),
    lasttrade: (f = msg.getLasttrade()) && proto_vega_pb.Trade.toObject(includeInstance, f)
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
 * @return {!proto.api.MarketDepthResponse}
 */
proto.api.MarketDepthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketDepthResponse;
  return proto.api.MarketDepthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketDepthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketDepthResponse}
 */
proto.api.MarketDepthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto_vega_pb.PriceLevel;
      reader.readMessage(value,proto_vega_pb.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new proto_vega_pb.PriceLevel;
      reader.readMessage(value,proto_vega_pb.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.setLasttrade(value);
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
proto.api.MarketDepthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketDepthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketDepthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketDepthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_vega_pb.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_vega_pb.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getLasttrade();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketDepthResponse.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketDepthResponse.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.api.MarketDepthResponse.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.PriceLevel, 2));
};


/** @param {!Array<!proto.vega.PriceLevel>} value */
proto.api.MarketDepthResponse.prototype.setBuyList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.api.MarketDepthResponse.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarketDepthResponse.prototype.clearBuyList = function() {
  this.setBuyList([]);
};


/**
 * repeated vega.PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.api.MarketDepthResponse.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.PriceLevel, 3));
};


/** @param {!Array<!proto.vega.PriceLevel>} value */
proto.api.MarketDepthResponse.prototype.setSellList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.api.MarketDepthResponse.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarketDepthResponse.prototype.clearSellList = function() {
  this.setSellList([]);
};


/**
 * optional vega.Trade lastTrade = 4;
 * @return {?proto.vega.Trade}
 */
proto.api.MarketDepthResponse.prototype.getLasttrade = function() {
  return /** @type{?proto.vega.Trade} */ (
    jspb.Message.getWrapperField(this, proto_vega_pb.Trade, 4));
};


/** @param {?proto.vega.Trade|undefined} value */
proto.api.MarketDepthResponse.prototype.setLasttrade = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.MarketDepthResponse.prototype.clearLasttrade = function() {
  this.setLasttrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.MarketDepthResponse.prototype.hasLasttrade = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByMarketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByMarketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByMarketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByMarketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.api.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.api.TradesByMarketRequest}
 */
proto.api.TradesByMarketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByMarketRequest;
  return proto.api.TradesByMarketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByMarketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByMarketRequest}
 */
proto.api.TradesByMarketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto.api.Pagination;
      reader.readMessage(value,proto.api.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.api.TradesByMarketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByMarketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByMarketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByMarketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.TradesByMarketRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.TradesByMarketRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.api.Pagination}
 */
proto.api.TradesByMarketRequest.prototype.getPagination = function() {
  return /** @type{?proto.api.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.api.Pagination, 2));
};


/** @param {?proto.api.Pagination|undefined} value */
proto.api.TradesByMarketRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.TradesByMarketRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.TradesByMarketRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.TradesByMarketResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesByMarketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesByMarketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesByMarketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByMarketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto_vega_pb.Trade.toObject, includeInstance)
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
 * @return {!proto.api.TradesByMarketResponse}
 */
proto.api.TradesByMarketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesByMarketResponse;
  return proto.api.TradesByMarketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesByMarketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesByMarketResponse}
 */
proto.api.TradesByMarketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.api.TradesByMarketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesByMarketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesByMarketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesByMarketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.api.TradesByMarketResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Trade, 1));
};


/** @param {!Array<!proto.vega.Trade>} value */
proto.api.TradesByMarketResponse.prototype.setTradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.api.TradesByMarketResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.TradesByMarketResponse.prototype.clearTradesList = function() {
  this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PositionsByPartyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PositionsByPartyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PositionsByPartyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsByPartyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.PositionsByPartyRequest}
 */
proto.api.PositionsByPartyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PositionsByPartyRequest;
  return proto.api.PositionsByPartyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PositionsByPartyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PositionsByPartyRequest}
 */
proto.api.PositionsByPartyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
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
proto.api.PositionsByPartyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PositionsByPartyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PositionsByPartyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsByPartyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.PositionsByPartyRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.PositionsByPartyRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.api.PositionsByPartyRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.PositionsByPartyRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PositionsByPartyResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PositionsByPartyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PositionsByPartyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PositionsByPartyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsByPartyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    proto_vega_pb.Position.toObject, includeInstance)
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
 * @return {!proto.api.PositionsByPartyResponse}
 */
proto.api.PositionsByPartyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PositionsByPartyResponse;
  return proto.api.PositionsByPartyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PositionsByPartyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PositionsByPartyResponse}
 */
proto.api.PositionsByPartyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Position;
      reader.readMessage(value,proto_vega_pb.Position.deserializeBinaryFromReader);
      msg.addPositions(value);
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
proto.api.PositionsByPartyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PositionsByPartyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PositionsByPartyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PositionsByPartyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Position positions = 1;
 * @return {!Array<!proto.vega.Position>}
 */
proto.api.PositionsByPartyResponse.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.vega.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Position, 1));
};


/** @param {!Array<!proto.vega.Position>} value */
proto.api.PositionsByPartyResponse.prototype.setPositionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Position}
 */
proto.api.PositionsByPartyResponse.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.PositionsByPartyResponse.prototype.clearPositionsList = function() {
  this.setPositionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.VegaTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.VegaTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.VegaTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.VegaTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.api.VegaTimeResponse}
 */
proto.api.VegaTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.VegaTimeResponse;
  return proto.api.VegaTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.VegaTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.VegaTimeResponse}
 */
proto.api.VegaTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.api.VegaTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.VegaTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.VegaTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.VegaTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.api.VegaTimeResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.api.VegaTimeResponse.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Pagination.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Pagination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Pagination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Pagination.toObject = function(includeInstance, msg) {
  var f, obj = {
    skip: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    descending: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.api.Pagination}
 */
proto.api.Pagination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Pagination;
  return proto.api.Pagination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Pagination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Pagination}
 */
proto.api.Pagination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSkip(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
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
proto.api.Pagination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Pagination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Pagination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Pagination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkip();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 skip = 1;
 * @return {number}
 */
proto.api.Pagination.prototype.getSkip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.api.Pagination.prototype.setSkip = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.api.Pagination.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.Pagination.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool descending = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.Pagination.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.api.Pagination.prototype.setDescending = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.OrdersStream.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrdersStream.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrdersStream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrdersStream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersStream.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.api.OrdersStream}
 */
proto.api.OrdersStream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrdersStream;
  return proto.api.OrdersStream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrdersStream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrdersStream}
 */
proto.api.OrdersStream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.api.OrdersStream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrdersStream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrdersStream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrdersStream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.api.OrdersStream.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {!Array<!proto.vega.Order>} value */
proto.api.OrdersStream.prototype.setOrdersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.api.OrdersStream.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.OrdersStream.prototype.clearOrdersList = function() {
  this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.TradesStream.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.TradesStream.prototype.toObject = function(opt_includeInstance) {
  return proto.api.TradesStream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.TradesStream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesStream.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto_vega_pb.Trade.toObject, includeInstance)
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
 * @return {!proto.api.TradesStream}
 */
proto.api.TradesStream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.TradesStream;
  return proto.api.TradesStream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.TradesStream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.TradesStream}
 */
proto.api.TradesStream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Trade;
      reader.readMessage(value,proto_vega_pb.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.api.TradesStream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.TradesStream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.TradesStream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.TradesStream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.api.TradesStream.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Trade, 1));
};


/** @param {!Array<!proto.vega.Trade>} value */
proto.api.TradesStream.prototype.setTradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.api.TradesStream.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.TradesStream.prototype.clearTradesList = function() {
  this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PartyAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PartyAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PartyAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.api.PartyAccountsRequest}
 */
proto.api.PartyAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PartyAccountsRequest;
  return proto.api.PartyAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PartyAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PartyAccountsRequest}
 */
proto.api.PartyAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
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
proto.api.PartyAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PartyAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PartyAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.PartyAccountsRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.PartyAccountsRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.api.PartyAccountsRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.PartyAccountsRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional vega.AccountType type = 3;
 * @return {!proto.vega.AccountType}
 */
proto.api.PartyAccountsRequest.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.vega.AccountType} value */
proto.api.PartyAccountsRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.api.PartyAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.api.PartyAccountsRequest.prototype.setAsset = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PartyAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PartyAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PartyAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PartyAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto_vega_pb.Account.toObject, includeInstance)
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
 * @return {!proto.api.PartyAccountsResponse}
 */
proto.api.PartyAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PartyAccountsResponse;
  return proto.api.PartyAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PartyAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PartyAccountsResponse}
 */
proto.api.PartyAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Account;
      reader.readMessage(value,proto_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
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
proto.api.PartyAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PartyAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PartyAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PartyAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.api.PartyAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Account, 1));
};


/** @param {!Array<!proto.vega.Account>} value */
proto.api.PartyAccountsResponse.prototype.setAccountsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.api.PartyAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.PartyAccountsResponse.prototype.clearAccountsList = function() {
  this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.api.MarketAccountsRequest}
 */
proto.api.MarketAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketAccountsRequest;
  return proto.api.MarketAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketAccountsRequest}
 */
proto.api.MarketAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
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
proto.api.MarketAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.api.MarketAccountsRequest.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.MarketAccountsRequest.prototype.setMarketid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string asset = 2;
 * @return {string}
 */
proto.api.MarketAccountsRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.MarketAccountsRequest.prototype.setAsset = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.MarketAccountsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MarketAccountsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MarketAccountsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MarketAccountsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketAccountsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto_vega_pb.Account.toObject, includeInstance)
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
 * @return {!proto.api.MarketAccountsResponse}
 */
proto.api.MarketAccountsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MarketAccountsResponse;
  return proto.api.MarketAccountsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MarketAccountsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MarketAccountsResponse}
 */
proto.api.MarketAccountsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Account;
      reader.readMessage(value,proto_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
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
proto.api.MarketAccountsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.MarketAccountsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.MarketAccountsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.MarketAccountsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.api.MarketAccountsResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Account, 1));
};


/** @param {!Array<!proto.vega.Account>} value */
proto.api.MarketAccountsResponse.prototype.setAccountsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.api.MarketAccountsResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.MarketAccountsResponse.prototype.clearAccountsList = function() {
  this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareProposalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareProposalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareProposalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareProposalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reference: jspb.Message.getFieldWithDefault(msg, 2, ""),
    proposal: (f = msg.getProposal()) && proto_governance_pb.ProposalTerms.toObject(includeInstance, f)
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
 * @return {!proto.api.PrepareProposalRequest}
 */
proto.api.PrepareProposalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareProposalRequest;
  return proto.api.PrepareProposalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareProposalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareProposalRequest}
 */
proto.api.PrepareProposalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 3:
      var value = new proto_governance_pb.ProposalTerms;
      reader.readMessage(value,proto_governance_pb.ProposalTerms.deserializeBinaryFromReader);
      msg.setProposal(value);
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
proto.api.PrepareProposalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareProposalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareProposalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareProposalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_governance_pb.ProposalTerms.serializeBinaryToWriter
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.api.PrepareProposalRequest.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.PrepareProposalRequest.prototype.setPartyid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reference = 2;
 * @return {string}
 */
proto.api.PrepareProposalRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.PrepareProposalRequest.prototype.setReference = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional vega.ProposalTerms proposal = 3;
 * @return {?proto.vega.ProposalTerms}
 */
proto.api.PrepareProposalRequest.prototype.getProposal = function() {
  return /** @type{?proto.vega.ProposalTerms} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.ProposalTerms, 3));
};


/** @param {?proto.vega.ProposalTerms|undefined} value */
proto.api.PrepareProposalRequest.prototype.setProposal = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PrepareProposalRequest.prototype.clearProposal = function() {
  this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PrepareProposalRequest.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: msg.getBlob_asB64(),
    pendingproposal: (f = msg.getPendingproposal()) && proto_governance_pb.Proposal.toObject(includeInstance, f)
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
 * @return {!proto.api.PrepareProposalResponse}
 */
proto.api.PrepareProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareProposalResponse;
  return proto.api.PrepareProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareProposalResponse}
 */
proto.api.PrepareProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlob(value);
      break;
    case 2:
      var value = new proto_governance_pb.Proposal;
      reader.readMessage(value,proto_governance_pb.Proposal.deserializeBinaryFromReader);
      msg.setPendingproposal(value);
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
proto.api.PrepareProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPendingproposal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_governance_pb.Proposal.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.api.PrepareProposalResponse.prototype.getBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blob = 1;
 * This is a type-conversion wrapper around `getBlob()`
 * @return {string}
 */
proto.api.PrepareProposalResponse.prototype.getBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlob()));
};


/**
 * optional bytes blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlob()`
 * @return {!Uint8Array}
 */
proto.api.PrepareProposalResponse.prototype.getBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.api.PrepareProposalResponse.prototype.setBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional vega.Proposal pendingProposal = 2;
 * @return {?proto.vega.Proposal}
 */
proto.api.PrepareProposalResponse.prototype.getPendingproposal = function() {
  return /** @type{?proto.vega.Proposal} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.Proposal, 2));
};


/** @param {?proto.vega.Proposal|undefined} value */
proto.api.PrepareProposalResponse.prototype.setPendingproposal = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PrepareProposalResponse.prototype.clearPendingproposal = function() {
  this.setPendingproposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PrepareProposalResponse.prototype.hasPendingproposal = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareVoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareVoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareVoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareVoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: (f = msg.getVote()) && proto_governance_pb.Vote.toObject(includeInstance, f)
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
 * @return {!proto.api.PrepareVoteRequest}
 */
proto.api.PrepareVoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareVoteRequest;
  return proto.api.PrepareVoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareVoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareVoteRequest}
 */
proto.api.PrepareVoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_governance_pb.Vote;
      reader.readMessage(value,proto_governance_pb.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
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
proto.api.PrepareVoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareVoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareVoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareVoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Vote vote = 1;
 * @return {?proto.vega.Vote}
 */
proto.api.PrepareVoteRequest.prototype.getVote = function() {
  return /** @type{?proto.vega.Vote} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.Vote, 1));
};


/** @param {?proto.vega.Vote|undefined} value */
proto.api.PrepareVoteRequest.prototype.setVote = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PrepareVoteRequest.prototype.clearVote = function() {
  this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PrepareVoteRequest.prototype.hasVote = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PrepareVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PrepareVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PrepareVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blob: msg.getBlob_asB64(),
    vote: (f = msg.getVote()) && proto_governance_pb.Vote.toObject(includeInstance, f)
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
 * @return {!proto.api.PrepareVoteResponse}
 */
proto.api.PrepareVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PrepareVoteResponse;
  return proto.api.PrepareVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PrepareVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PrepareVoteResponse}
 */
proto.api.PrepareVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlob(value);
      break;
    case 2:
      var value = new proto_governance_pb.Vote;
      reader.readMessage(value,proto_governance_pb.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
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
proto.api.PrepareVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PrepareVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PrepareVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PrepareVoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlob_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes blob = 1;
 * @return {!(string|Uint8Array)}
 */
proto.api.PrepareVoteResponse.prototype.getBlob = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes blob = 1;
 * This is a type-conversion wrapper around `getBlob()`
 * @return {string}
 */
proto.api.PrepareVoteResponse.prototype.getBlob_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlob()));
};


/**
 * optional bytes blob = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlob()`
 * @return {!Uint8Array}
 */
proto.api.PrepareVoteResponse.prototype.getBlob_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlob()));
};


/** @param {!(string|Uint8Array)} value */
proto.api.PrepareVoteResponse.prototype.setBlob = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional vega.Vote vote = 2;
 * @return {?proto.vega.Vote}
 */
proto.api.PrepareVoteResponse.prototype.getVote = function() {
  return /** @type{?proto.vega.Vote} */ (
    jspb.Message.getWrapperField(this, proto_governance_pb.Vote, 2));
};


/** @param {?proto.vega.Vote|undefined} value */
proto.api.PrepareVoteResponse.prototype.setVote = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.PrepareVoteResponse.prototype.clearVote = function() {
  this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PrepareVoteResponse.prototype.hasVote = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.api.OrderByIDRequest}
 */
proto.api.OrderByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByIDRequest;
  return proto.api.OrderByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByIDRequest}
 */
proto.api.OrderByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
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
proto.api.OrderByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.OrderByIDRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrderByIDRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 version = 2;
 * @return {number}
 */
proto.api.OrderByIDRequest.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.OrderByIDRequest.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderByReferenceIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderByReferenceIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderByReferenceIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    referenceid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.api.OrderByReferenceIDRequest}
 */
proto.api.OrderByReferenceIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderByReferenceIDRequest;
  return proto.api.OrderByReferenceIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderByReferenceIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderByReferenceIDRequest}
 */
proto.api.OrderByReferenceIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceid(value);
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
proto.api.OrderByReferenceIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderByReferenceIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderByReferenceIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderByReferenceIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferenceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string referenceID = 1;
 * @return {string}
 */
proto.api.OrderByReferenceIDRequest.prototype.getReferenceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrderByReferenceIDRequest.prototype.setReferenceid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderVersionsByIDRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderVersionsByIDRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderVersionsByIDRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderVersionsByIDRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pagination: (f = msg.getPagination()) && proto.api.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.api.OrderVersionsByIDRequest}
 */
proto.api.OrderVersionsByIDRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderVersionsByIDRequest;
  return proto.api.OrderVersionsByIDRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderVersionsByIDRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderVersionsByIDRequest}
 */
proto.api.OrderVersionsByIDRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = new proto.api.Pagination;
      reader.readMessage(value,proto.api.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.api.OrderVersionsByIDRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderVersionsByIDRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderVersionsByIDRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderVersionsByIDRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.api.OrderVersionsByIDRequest.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.OrderVersionsByIDRequest.prototype.setOrderid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.api.Pagination}
 */
proto.api.OrderVersionsByIDRequest.prototype.getPagination = function() {
  return /** @type{?proto.api.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.api.Pagination, 2));
};


/** @param {?proto.api.Pagination|undefined} value */
proto.api.OrderVersionsByIDRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.OrderVersionsByIDRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.OrderVersionsByIDRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.OrderVersionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.OrderVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.OrderVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.OrderVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    proto_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.api.OrderVersionsResponse}
 */
proto.api.OrderVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.OrderVersionsResponse;
  return proto.api.OrderVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.OrderVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.OrderVersionsResponse}
 */
proto.api.OrderVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_vega_pb.Order;
      reader.readMessage(value,proto_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.api.OrderVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.OrderVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.OrderVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.OrderVersionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order orders = 1;
 * @return {!Array<!proto.vega.Order>}
 */
proto.api.OrderVersionsResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_vega_pb.Order, 1));
};


/** @param {!Array<!proto.vega.Order>} value */
proto.api.OrderVersionsResponse.prototype.setOrdersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.api.OrderVersionsResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.OrderVersionsResponse.prototype.clearOrdersList = function() {
  this.setOrdersList([]);
};


goog.object.extend(exports, proto.api);
