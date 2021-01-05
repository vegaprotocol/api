// package: api
// file: proto/api/trading.proto

var proto_api_trading_pb = require("../../proto/api/trading_pb");
var proto_vega_pb = require("../../proto/vega_pb");
var proto_governance_pb = require("../../proto/governance_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var trading = (function () {
  function trading() {}
  trading.serviceName = "api.trading";
  return trading;
}());

trading.PrepareSubmitOrder = {
  methodName: "PrepareSubmitOrder",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.SubmitOrderRequest,
  responseType: proto_api_trading_pb.PrepareSubmitOrderResponse
};

trading.PrepareCancelOrder = {
  methodName: "PrepareCancelOrder",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.CancelOrderRequest,
  responseType: proto_api_trading_pb.PrepareCancelOrderResponse
};

trading.PrepareAmendOrder = {
  methodName: "PrepareAmendOrder",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.AmendOrderRequest,
  responseType: proto_api_trading_pb.PrepareAmendOrderResponse
};

trading.PrepareWithdraw = {
  methodName: "PrepareWithdraw",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PrepareWithdrawRequest,
  responseType: proto_api_trading_pb.PrepareWithdrawResponse
};

trading.SubmitTransaction = {
  methodName: "SubmitTransaction",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.SubmitTransactionRequest,
  responseType: proto_api_trading_pb.SubmitTransactionResponse
};

trading.PrepareProposal = {
  methodName: "PrepareProposal",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PrepareProposalRequest,
  responseType: proto_api_trading_pb.PrepareProposalResponse
};

trading.PrepareVote = {
  methodName: "PrepareVote",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PrepareVoteRequest,
  responseType: proto_api_trading_pb.PrepareVoteResponse
};

trading.PropagateChainEvent = {
  methodName: "PropagateChainEvent",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PropagateChainEventRequest,
  responseType: proto_api_trading_pb.PropagateChainEventResponse
};

trading.PrepareLiquidityProvision = {
  methodName: "PrepareLiquidityProvision",
  service: trading,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PrepareLiquidityProvisionRequest,
  responseType: proto_api_trading_pb.PrepareLiquidityProvisionResponse
};

exports.trading = trading;

function tradingClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

tradingClient.prototype.prepareSubmitOrder = function prepareSubmitOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareSubmitOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareCancelOrder = function prepareCancelOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareCancelOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareAmendOrder = function prepareAmendOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareAmendOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareWithdraw = function prepareWithdraw(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareWithdraw, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.submitTransaction = function submitTransaction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.SubmitTransaction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareProposal = function prepareProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareProposal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareVote = function prepareVote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareVote, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.propagateChainEvent = function propagateChainEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PropagateChainEvent, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

tradingClient.prototype.prepareLiquidityProvision = function prepareLiquidityProvision(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading.PrepareLiquidityProvision, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.tradingClient = tradingClient;

var trading_data = (function () {
  function trading_data() {}
  trading_data.serviceName = "api.trading_data";
  return trading_data;
}());

trading_data.MarketAccounts = {
  methodName: "MarketAccounts",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.MarketAccountsRequest,
  responseType: proto_api_trading_pb.MarketAccountsResponse
};

trading_data.PartyAccounts = {
  methodName: "PartyAccounts",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PartyAccountsRequest,
  responseType: proto_api_trading_pb.PartyAccountsResponse
};

trading_data.FeeInfrastructureAccounts = {
  methodName: "FeeInfrastructureAccounts",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.FeeInfrastructureAccountsRequest,
  responseType: proto_api_trading_pb.FeeInfrastructureAccountsResponse
};

trading_data.Candles = {
  methodName: "Candles",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.CandlesRequest,
  responseType: proto_api_trading_pb.CandlesResponse
};

trading_data.MarketDataByID = {
  methodName: "MarketDataByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.MarketDataByIDRequest,
  responseType: proto_api_trading_pb.MarketDataByIDResponse
};

trading_data.MarketsData = {
  methodName: "MarketsData",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_api_trading_pb.MarketsDataResponse
};

trading_data.MarketByID = {
  methodName: "MarketByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.MarketByIDRequest,
  responseType: proto_api_trading_pb.MarketByIDResponse
};

trading_data.MarketDepth = {
  methodName: "MarketDepth",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.MarketDepthRequest,
  responseType: proto_api_trading_pb.MarketDepthResponse
};

trading_data.Markets = {
  methodName: "Markets",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_api_trading_pb.MarketsResponse
};

trading_data.OrderByMarketAndID = {
  methodName: "OrderByMarketAndID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrderByMarketAndIdRequest,
  responseType: proto_api_trading_pb.OrderByMarketAndIdResponse
};

trading_data.OrderByReference = {
  methodName: "OrderByReference",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrderByReferenceRequest,
  responseType: proto_api_trading_pb.OrderByReferenceResponse
};

trading_data.OrdersByMarket = {
  methodName: "OrdersByMarket",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrdersByMarketRequest,
  responseType: proto_api_trading_pb.OrdersByMarketResponse
};

trading_data.OrdersByParty = {
  methodName: "OrdersByParty",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrdersByPartyRequest,
  responseType: proto_api_trading_pb.OrdersByPartyResponse
};

trading_data.OrderByID = {
  methodName: "OrderByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrderByIDRequest,
  responseType: proto_vega_pb.Order
};

trading_data.OrderVersionsByID = {
  methodName: "OrderVersionsByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.OrderVersionsByIDRequest,
  responseType: proto_api_trading_pb.OrderVersionsResponse
};

trading_data.MarginLevels = {
  methodName: "MarginLevels",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.MarginLevelsRequest,
  responseType: proto_api_trading_pb.MarginLevelsResponse
};

trading_data.Parties = {
  methodName: "Parties",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_api_trading_pb.PartiesResponse
};

trading_data.PartyByID = {
  methodName: "PartyByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PartyByIDRequest,
  responseType: proto_api_trading_pb.PartyByIDResponse
};

trading_data.PositionsByParty = {
  methodName: "PositionsByParty",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.PositionsByPartyRequest,
  responseType: proto_api_trading_pb.PositionsByPartyResponse
};

trading_data.LastTrade = {
  methodName: "LastTrade",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.LastTradeRequest,
  responseType: proto_api_trading_pb.LastTradeResponse
};

trading_data.TradesByMarket = {
  methodName: "TradesByMarket",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.TradesByMarketRequest,
  responseType: proto_api_trading_pb.TradesByMarketResponse
};

trading_data.TradesByOrder = {
  methodName: "TradesByOrder",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.TradesByOrderRequest,
  responseType: proto_api_trading_pb.TradesByOrderResponse
};

trading_data.TradesByParty = {
  methodName: "TradesByParty",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.TradesByPartyRequest,
  responseType: proto_api_trading_pb.TradesByPartyResponse
};

trading_data.GetProposals = {
  methodName: "GetProposals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetProposalsRequest,
  responseType: proto_api_trading_pb.GetProposalsResponse
};

trading_data.GetProposalsByParty = {
  methodName: "GetProposalsByParty",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetProposalsByPartyRequest,
  responseType: proto_api_trading_pb.GetProposalsByPartyResponse
};

trading_data.GetVotesByParty = {
  methodName: "GetVotesByParty",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetVotesByPartyRequest,
  responseType: proto_api_trading_pb.GetVotesByPartyResponse
};

trading_data.GetNewMarketProposals = {
  methodName: "GetNewMarketProposals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetNewMarketProposalsRequest,
  responseType: proto_api_trading_pb.GetNewMarketProposalsResponse
};

trading_data.GetUpdateMarketProposals = {
  methodName: "GetUpdateMarketProposals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetUpdateMarketProposalsRequest,
  responseType: proto_api_trading_pb.GetUpdateMarketProposalsResponse
};

trading_data.GetNetworkParametersProposals = {
  methodName: "GetNetworkParametersProposals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetNetworkParametersProposalsRequest,
  responseType: proto_api_trading_pb.GetNetworkParametersProposalsResponse
};

trading_data.GetNewAssetProposals = {
  methodName: "GetNewAssetProposals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetNewAssetProposalsRequest,
  responseType: proto_api_trading_pb.GetNewAssetProposalsResponse
};

trading_data.GetProposalByID = {
  methodName: "GetProposalByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetProposalByIDRequest,
  responseType: proto_api_trading_pb.GetProposalByIDResponse
};

trading_data.GetProposalByReference = {
  methodName: "GetProposalByReference",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetProposalByReferenceRequest,
  responseType: proto_api_trading_pb.GetProposalByReferenceResponse
};

trading_data.ObserveGovernance = {
  methodName: "ObserveGovernance",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_governance_pb.GovernanceData
};

trading_data.ObservePartyProposals = {
  methodName: "ObservePartyProposals",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.ObservePartyProposalsRequest,
  responseType: proto_governance_pb.GovernanceData
};

trading_data.ObservePartyVotes = {
  methodName: "ObservePartyVotes",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.ObservePartyVotesRequest,
  responseType: proto_governance_pb.Vote
};

trading_data.ObserveProposalVotes = {
  methodName: "ObserveProposalVotes",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.ObserveProposalVotesRequest,
  responseType: proto_governance_pb.Vote
};

trading_data.ObserveEventBus = {
  methodName: "ObserveEventBus",
  service: trading_data,
  requestStream: true,
  responseStream: true,
  requestType: proto_api_trading_pb.ObserveEventsRequest,
  responseType: proto_api_trading_pb.ObserveEventsResponse
};

trading_data.Statistics = {
  methodName: "Statistics",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_vega_pb.Statistics
};

trading_data.GetVegaTime = {
  methodName: "GetVegaTime",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_api_trading_pb.VegaTimeResponse
};

trading_data.AccountsSubscribe = {
  methodName: "AccountsSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.AccountsSubscribeRequest,
  responseType: proto_vega_pb.Account
};

trading_data.CandlesSubscribe = {
  methodName: "CandlesSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.CandlesSubscribeRequest,
  responseType: proto_vega_pb.Candle
};

trading_data.MarginLevelsSubscribe = {
  methodName: "MarginLevelsSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.MarginLevelsSubscribeRequest,
  responseType: proto_vega_pb.MarginLevels
};

trading_data.MarketDepthSubscribe = {
  methodName: "MarketDepthSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.MarketDepthSubscribeRequest,
  responseType: proto_vega_pb.MarketDepth
};

trading_data.MarketDepthUpdatesSubscribe = {
  methodName: "MarketDepthUpdatesSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.MarketDepthUpdatesSubscribeRequest,
  responseType: proto_vega_pb.MarketDepthUpdate
};

trading_data.MarketsDataSubscribe = {
  methodName: "MarketsDataSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.MarketsDataSubscribeRequest,
  responseType: proto_vega_pb.MarketData
};

trading_data.OrdersSubscribe = {
  methodName: "OrdersSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.OrdersSubscribeRequest,
  responseType: proto_api_trading_pb.OrdersStream
};

trading_data.PositionsSubscribe = {
  methodName: "PositionsSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.PositionsSubscribeRequest,
  responseType: proto_vega_pb.Position
};

trading_data.TradesSubscribe = {
  methodName: "TradesSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: proto_api_trading_pb.TradesSubscribeRequest,
  responseType: proto_api_trading_pb.TradesStream
};

trading_data.TransferResponsesSubscribe = {
  methodName: "TransferResponsesSubscribe",
  service: trading_data,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: proto_vega_pb.TransferResponse
};

trading_data.GetNodeSignaturesAggregate = {
  methodName: "GetNodeSignaturesAggregate",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.GetNodeSignaturesAggregateRequest,
  responseType: proto_api_trading_pb.GetNodeSignaturesAggregateResponse
};

trading_data.AssetByID = {
  methodName: "AssetByID",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.AssetByIDRequest,
  responseType: proto_api_trading_pb.AssetByIDResponse
};

trading_data.Assets = {
  methodName: "Assets",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.AssetsRequest,
  responseType: proto_api_trading_pb.AssetsResponse
};

trading_data.EstimateFee = {
  methodName: "EstimateFee",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.EstimateFeeRequest,
  responseType: proto_api_trading_pb.EstimateFeeResponse
};

trading_data.EstimateMargin = {
  methodName: "EstimateMargin",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.EstimateMarginRequest,
  responseType: proto_api_trading_pb.EstimateMarginResponse
};

trading_data.ERC20WithdrawalApproval = {
  methodName: "ERC20WithdrawalApproval",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.ERC20WithdrawalApprovalRequest,
  responseType: proto_api_trading_pb.ERC20WithdrawalApprovalResponse
};

trading_data.Withdrawal = {
  methodName: "Withdrawal",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.WithdrawalRequest,
  responseType: proto_api_trading_pb.WithdrawalResponse
};

trading_data.Withdrawals = {
  methodName: "Withdrawals",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.WithdrawalsRequest,
  responseType: proto_api_trading_pb.WithdrawalsResponse
};

trading_data.Deposit = {
  methodName: "Deposit",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.DepositRequest,
  responseType: proto_api_trading_pb.DepositResponse
};

trading_data.Deposits = {
  methodName: "Deposits",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.DepositsRequest,
  responseType: proto_api_trading_pb.DepositsResponse
};

trading_data.NetworkParameters = {
  methodName: "NetworkParameters",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.NetworkParametersRequest,
  responseType: proto_api_trading_pb.NetworkParametersResponse
};

trading_data.LiquidityProvisions = {
  methodName: "LiquidityProvisions",
  service: trading_data,
  requestStream: false,
  responseStream: false,
  requestType: proto_api_trading_pb.LiquidityProvisionsRequest,
  responseType: proto_api_trading_pb.LiquidityProvisionsResponse
};

exports.trading_data = trading_data;

function trading_dataClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

trading_dataClient.prototype.marketAccounts = function marketAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarketAccounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.partyAccounts = function partyAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.PartyAccounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.feeInfrastructureAccounts = function feeInfrastructureAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.FeeInfrastructureAccounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.candles = function candles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Candles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketDataByID = function marketDataByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarketDataByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketsData = function marketsData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarketsData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketByID = function marketByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarketByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketDepth = function marketDepth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarketDepth, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.markets = function markets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Markets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.orderByMarketAndID = function orderByMarketAndID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrderByMarketAndID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.orderByReference = function orderByReference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrderByReference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.ordersByMarket = function ordersByMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrdersByMarket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.ordersByParty = function ordersByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrdersByParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.orderByID = function orderByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrderByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.orderVersionsByID = function orderVersionsByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.OrderVersionsByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marginLevels = function marginLevels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.MarginLevels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.parties = function parties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Parties, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.partyByID = function partyByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.PartyByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.positionsByParty = function positionsByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.PositionsByParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.lastTrade = function lastTrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.LastTrade, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.tradesByMarket = function tradesByMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.TradesByMarket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.tradesByOrder = function tradesByOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.TradesByOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.tradesByParty = function tradesByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.TradesByParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getProposals = function getProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getProposalsByParty = function getProposalsByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetProposalsByParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getVotesByParty = function getVotesByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetVotesByParty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getNewMarketProposals = function getNewMarketProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetNewMarketProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getUpdateMarketProposals = function getUpdateMarketProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetUpdateMarketProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getNetworkParametersProposals = function getNetworkParametersProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetNetworkParametersProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getNewAssetProposals = function getNewAssetProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetNewAssetProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getProposalByID = function getProposalByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetProposalByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getProposalByReference = function getProposalByReference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetProposalByReference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.observeGovernance = function observeGovernance(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.ObserveGovernance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.observePartyProposals = function observePartyProposals(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.ObservePartyProposals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.observePartyVotes = function observePartyVotes(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.ObservePartyVotes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.observeProposalVotes = function observeProposalVotes(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.ObserveProposalVotes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.observeEventBus = function observeEventBus(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(trading_data.ObserveEventBus, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.statistics = function statistics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Statistics, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getVegaTime = function getVegaTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetVegaTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.accountsSubscribe = function accountsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.AccountsSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.candlesSubscribe = function candlesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.CandlesSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marginLevelsSubscribe = function marginLevelsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.MarginLevelsSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketDepthSubscribe = function marketDepthSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.MarketDepthSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketDepthUpdatesSubscribe = function marketDepthUpdatesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.MarketDepthUpdatesSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.marketsDataSubscribe = function marketsDataSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.MarketsDataSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.ordersSubscribe = function ordersSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.OrdersSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.positionsSubscribe = function positionsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.PositionsSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.tradesSubscribe = function tradesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.TradesSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.transferResponsesSubscribe = function transferResponsesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(trading_data.TransferResponsesSubscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.getNodeSignaturesAggregate = function getNodeSignaturesAggregate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.GetNodeSignaturesAggregate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.assetByID = function assetByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.AssetByID, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.assets = function assets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Assets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.estimateFee = function estimateFee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.EstimateFee, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.estimateMargin = function estimateMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.EstimateMargin, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.eRC20WithdrawalApproval = function eRC20WithdrawalApproval(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.ERC20WithdrawalApproval, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.withdrawal = function withdrawal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Withdrawal, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.withdrawals = function withdrawals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Withdrawals, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Deposit, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.deposits = function deposits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.Deposits, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.networkParameters = function networkParameters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.NetworkParameters, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

trading_dataClient.prototype.liquidityProvisions = function liquidityProvisions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(trading_data.LiquidityProvisions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.trading_dataClient = trading_dataClient;

