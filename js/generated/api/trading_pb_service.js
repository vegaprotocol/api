// package: api.v1
// file: api/trading.proto

var api_trading_pb = require("../api/trading_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TradingService = (function () {
  function TradingService() {}
  TradingService.serviceName = "api.v1.TradingService";
  return TradingService;
}());

TradingService.PrepareSubmitOrder = {
  methodName: "PrepareSubmitOrder",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareSubmitOrderRequest,
  responseType: api_trading_pb.PrepareSubmitOrderResponse
};

TradingService.PrepareCancelOrder = {
  methodName: "PrepareCancelOrder",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareCancelOrderRequest,
  responseType: api_trading_pb.PrepareCancelOrderResponse
};

TradingService.PrepareAmendOrder = {
  methodName: "PrepareAmendOrder",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareAmendOrderRequest,
  responseType: api_trading_pb.PrepareAmendOrderResponse
};

TradingService.PrepareWithdraw = {
  methodName: "PrepareWithdraw",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareWithdrawRequest,
  responseType: api_trading_pb.PrepareWithdrawResponse
};

TradingService.SubmitTransaction = {
  methodName: "SubmitTransaction",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.SubmitTransactionRequest,
  responseType: api_trading_pb.SubmitTransactionResponse
};

TradingService.PrepareProposal = {
  methodName: "PrepareProposal",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareProposalRequest,
  responseType: api_trading_pb.PrepareProposalResponse
};

TradingService.PrepareVote = {
  methodName: "PrepareVote",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareVoteRequest,
  responseType: api_trading_pb.PrepareVoteResponse
};

TradingService.PropagateChainEvent = {
  methodName: "PropagateChainEvent",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PropagateChainEventRequest,
  responseType: api_trading_pb.PropagateChainEventResponse
};

TradingService.PrepareLiquidityProvision = {
  methodName: "PrepareLiquidityProvision",
  service: TradingService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PrepareLiquidityProvisionRequest,
  responseType: api_trading_pb.PrepareLiquidityProvisionResponse
};

exports.TradingService = TradingService;

function TradingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TradingServiceClient.prototype.prepareSubmitOrder = function prepareSubmitOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareSubmitOrder, {
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

TradingServiceClient.prototype.prepareCancelOrder = function prepareCancelOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareCancelOrder, {
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

TradingServiceClient.prototype.prepareAmendOrder = function prepareAmendOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareAmendOrder, {
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

TradingServiceClient.prototype.prepareWithdraw = function prepareWithdraw(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareWithdraw, {
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

TradingServiceClient.prototype.submitTransaction = function submitTransaction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.SubmitTransaction, {
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

TradingServiceClient.prototype.prepareProposal = function prepareProposal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareProposal, {
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

TradingServiceClient.prototype.prepareVote = function prepareVote(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareVote, {
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

TradingServiceClient.prototype.propagateChainEvent = function propagateChainEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PropagateChainEvent, {
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

TradingServiceClient.prototype.prepareLiquidityProvision = function prepareLiquidityProvision(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingService.PrepareLiquidityProvision, {
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

exports.TradingServiceClient = TradingServiceClient;

var TradingDataService = (function () {
  function TradingDataService() {}
  TradingDataService.serviceName = "api.v1.TradingDataService";
  return TradingDataService;
}());

TradingDataService.MarketAccounts = {
  methodName: "MarketAccounts",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketAccountsRequest,
  responseType: api_trading_pb.MarketAccountsResponse
};

TradingDataService.PartyAccounts = {
  methodName: "PartyAccounts",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PartyAccountsRequest,
  responseType: api_trading_pb.PartyAccountsResponse
};

TradingDataService.FeeInfrastructureAccounts = {
  methodName: "FeeInfrastructureAccounts",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.FeeInfrastructureAccountsRequest,
  responseType: api_trading_pb.FeeInfrastructureAccountsResponse
};

TradingDataService.Candles = {
  methodName: "Candles",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.CandlesRequest,
  responseType: api_trading_pb.CandlesResponse
};

TradingDataService.MarketDataByID = {
  methodName: "MarketDataByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketDataByIDRequest,
  responseType: api_trading_pb.MarketDataByIDResponse
};

TradingDataService.MarketsData = {
  methodName: "MarketsData",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketsDataRequest,
  responseType: api_trading_pb.MarketsDataResponse
};

TradingDataService.MarketByID = {
  methodName: "MarketByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketByIDRequest,
  responseType: api_trading_pb.MarketByIDResponse
};

TradingDataService.MarketDepth = {
  methodName: "MarketDepth",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketDepthRequest,
  responseType: api_trading_pb.MarketDepthResponse
};

TradingDataService.Markets = {
  methodName: "Markets",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarketsRequest,
  responseType: api_trading_pb.MarketsResponse
};

TradingDataService.OrderByMarketAndID = {
  methodName: "OrderByMarketAndID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrderByMarketAndIDRequest,
  responseType: api_trading_pb.OrderByMarketAndIDResponse
};

TradingDataService.OrderByReference = {
  methodName: "OrderByReference",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrderByReferenceRequest,
  responseType: api_trading_pb.OrderByReferenceResponse
};

TradingDataService.OrdersByMarket = {
  methodName: "OrdersByMarket",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrdersByMarketRequest,
  responseType: api_trading_pb.OrdersByMarketResponse
};

TradingDataService.OrdersByParty = {
  methodName: "OrdersByParty",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrdersByPartyRequest,
  responseType: api_trading_pb.OrdersByPartyResponse
};

TradingDataService.OrderByID = {
  methodName: "OrderByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrderByIDRequest,
  responseType: api_trading_pb.OrderByIDResponse
};

TradingDataService.OrderVersionsByID = {
  methodName: "OrderVersionsByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OrderVersionsByIDRequest,
  responseType: api_trading_pb.OrderVersionsByIDResponse
};

TradingDataService.MarginLevels = {
  methodName: "MarginLevels",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.MarginLevelsRequest,
  responseType: api_trading_pb.MarginLevelsResponse
};

TradingDataService.Parties = {
  methodName: "Parties",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PartiesRequest,
  responseType: api_trading_pb.PartiesResponse
};

TradingDataService.PartyByID = {
  methodName: "PartyByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PartyByIDRequest,
  responseType: api_trading_pb.PartyByIDResponse
};

TradingDataService.PositionsByParty = {
  methodName: "PositionsByParty",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.PositionsByPartyRequest,
  responseType: api_trading_pb.PositionsByPartyResponse
};

TradingDataService.LastTrade = {
  methodName: "LastTrade",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.LastTradeRequest,
  responseType: api_trading_pb.LastTradeResponse
};

TradingDataService.TradesByMarket = {
  methodName: "TradesByMarket",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.TradesByMarketRequest,
  responseType: api_trading_pb.TradesByMarketResponse
};

TradingDataService.TradesByOrder = {
  methodName: "TradesByOrder",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.TradesByOrderRequest,
  responseType: api_trading_pb.TradesByOrderResponse
};

TradingDataService.TradesByParty = {
  methodName: "TradesByParty",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.TradesByPartyRequest,
  responseType: api_trading_pb.TradesByPartyResponse
};

TradingDataService.GetProposals = {
  methodName: "GetProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetProposalsRequest,
  responseType: api_trading_pb.GetProposalsResponse
};

TradingDataService.GetProposalsByParty = {
  methodName: "GetProposalsByParty",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetProposalsByPartyRequest,
  responseType: api_trading_pb.GetProposalsByPartyResponse
};

TradingDataService.GetVotesByParty = {
  methodName: "GetVotesByParty",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetVotesByPartyRequest,
  responseType: api_trading_pb.GetVotesByPartyResponse
};

TradingDataService.GetNewMarketProposals = {
  methodName: "GetNewMarketProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetNewMarketProposalsRequest,
  responseType: api_trading_pb.GetNewMarketProposalsResponse
};

TradingDataService.GetUpdateMarketProposals = {
  methodName: "GetUpdateMarketProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetUpdateMarketProposalsRequest,
  responseType: api_trading_pb.GetUpdateMarketProposalsResponse
};

TradingDataService.GetNetworkParametersProposals = {
  methodName: "GetNetworkParametersProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetNetworkParametersProposalsRequest,
  responseType: api_trading_pb.GetNetworkParametersProposalsResponse
};

TradingDataService.GetNewAssetProposals = {
  methodName: "GetNewAssetProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetNewAssetProposalsRequest,
  responseType: api_trading_pb.GetNewAssetProposalsResponse
};

TradingDataService.GetProposalByID = {
  methodName: "GetProposalByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetProposalByIDRequest,
  responseType: api_trading_pb.GetProposalByIDResponse
};

TradingDataService.GetProposalByReference = {
  methodName: "GetProposalByReference",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetProposalByReferenceRequest,
  responseType: api_trading_pb.GetProposalByReferenceResponse
};

TradingDataService.ObserveGovernance = {
  methodName: "ObserveGovernance",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.ObserveGovernanceRequest,
  responseType: api_trading_pb.ObserveGovernanceResponse
};

TradingDataService.ObservePartyProposals = {
  methodName: "ObservePartyProposals",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.ObservePartyProposalsRequest,
  responseType: api_trading_pb.ObservePartyProposalsResponse
};

TradingDataService.ObservePartyVotes = {
  methodName: "ObservePartyVotes",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.ObservePartyVotesRequest,
  responseType: api_trading_pb.ObservePartyVotesResponse
};

TradingDataService.ObserveProposalVotes = {
  methodName: "ObserveProposalVotes",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.ObserveProposalVotesRequest,
  responseType: api_trading_pb.ObserveProposalVotesResponse
};

TradingDataService.ObserveEventBus = {
  methodName: "ObserveEventBus",
  service: TradingDataService,
  requestStream: true,
  responseStream: true,
  requestType: api_trading_pb.ObserveEventBusRequest,
  responseType: api_trading_pb.ObserveEventBusResponse
};

TradingDataService.Statistics = {
  methodName: "Statistics",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.StatisticsRequest,
  responseType: api_trading_pb.StatisticsResponse
};

TradingDataService.GetVegaTime = {
  methodName: "GetVegaTime",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetVegaTimeRequest,
  responseType: api_trading_pb.GetVegaTimeResponse
};

TradingDataService.AccountsSubscribe = {
  methodName: "AccountsSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.AccountsSubscribeRequest,
  responseType: api_trading_pb.AccountsSubscribeResponse
};

TradingDataService.CandlesSubscribe = {
  methodName: "CandlesSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.CandlesSubscribeRequest,
  responseType: api_trading_pb.CandlesSubscribeResponse
};

TradingDataService.MarginLevelsSubscribe = {
  methodName: "MarginLevelsSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.MarginLevelsSubscribeRequest,
  responseType: api_trading_pb.MarginLevelsSubscribeResponse
};

TradingDataService.MarketDepthSubscribe = {
  methodName: "MarketDepthSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.MarketDepthSubscribeRequest,
  responseType: api_trading_pb.MarketDepthSubscribeResponse
};

TradingDataService.MarketDepthUpdatesSubscribe = {
  methodName: "MarketDepthUpdatesSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.MarketDepthUpdatesSubscribeRequest,
  responseType: api_trading_pb.MarketDepthUpdatesSubscribeResponse
};

TradingDataService.MarketsDataSubscribe = {
  methodName: "MarketsDataSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.MarketsDataSubscribeRequest,
  responseType: api_trading_pb.MarketsDataSubscribeResponse
};

TradingDataService.OrdersSubscribe = {
  methodName: "OrdersSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.OrdersSubscribeRequest,
  responseType: api_trading_pb.OrdersSubscribeResponse
};

TradingDataService.PositionsSubscribe = {
  methodName: "PositionsSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.PositionsSubscribeRequest,
  responseType: api_trading_pb.PositionsSubscribeResponse
};

TradingDataService.TradesSubscribe = {
  methodName: "TradesSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.TradesSubscribeRequest,
  responseType: api_trading_pb.TradesSubscribeResponse
};

TradingDataService.TransferResponsesSubscribe = {
  methodName: "TransferResponsesSubscribe",
  service: TradingDataService,
  requestStream: false,
  responseStream: true,
  requestType: api_trading_pb.TransferResponsesSubscribeRequest,
  responseType: api_trading_pb.TransferResponsesSubscribeResponse
};

TradingDataService.GetNodeSignaturesAggregate = {
  methodName: "GetNodeSignaturesAggregate",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.GetNodeSignaturesAggregateRequest,
  responseType: api_trading_pb.GetNodeSignaturesAggregateResponse
};

TradingDataService.AssetByID = {
  methodName: "AssetByID",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.AssetByIDRequest,
  responseType: api_trading_pb.AssetByIDResponse
};

TradingDataService.Assets = {
  methodName: "Assets",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.AssetsRequest,
  responseType: api_trading_pb.AssetsResponse
};

TradingDataService.EstimateFee = {
  methodName: "EstimateFee",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.EstimateFeeRequest,
  responseType: api_trading_pb.EstimateFeeResponse
};

TradingDataService.EstimateMargin = {
  methodName: "EstimateMargin",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.EstimateMarginRequest,
  responseType: api_trading_pb.EstimateMarginResponse
};

TradingDataService.ERC20WithdrawalApproval = {
  methodName: "ERC20WithdrawalApproval",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.ERC20WithdrawalApprovalRequest,
  responseType: api_trading_pb.ERC20WithdrawalApprovalResponse
};

TradingDataService.Withdrawal = {
  methodName: "Withdrawal",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.WithdrawalRequest,
  responseType: api_trading_pb.WithdrawalResponse
};

TradingDataService.Withdrawals = {
  methodName: "Withdrawals",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.WithdrawalsRequest,
  responseType: api_trading_pb.WithdrawalsResponse
};

TradingDataService.Deposit = {
  methodName: "Deposit",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.DepositRequest,
  responseType: api_trading_pb.DepositResponse
};

TradingDataService.Deposits = {
  methodName: "Deposits",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.DepositsRequest,
  responseType: api_trading_pb.DepositsResponse
};

TradingDataService.NetworkParameters = {
  methodName: "NetworkParameters",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.NetworkParametersRequest,
  responseType: api_trading_pb.NetworkParametersResponse
};

TradingDataService.LiquidityProvisions = {
  methodName: "LiquidityProvisions",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.LiquidityProvisionsRequest,
  responseType: api_trading_pb.LiquidityProvisionsResponse
};

TradingDataService.OracleSpec = {
  methodName: "OracleSpec",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OracleSpecRequest,
  responseType: api_trading_pb.OracleSpecResponse
};

TradingDataService.OracleSpecs = {
  methodName: "OracleSpecs",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OracleSpecsRequest,
  responseType: api_trading_pb.OracleSpecsResponse
};

TradingDataService.OracleDataBySpec = {
  methodName: "OracleDataBySpec",
  service: TradingDataService,
  requestStream: false,
  responseStream: false,
  requestType: api_trading_pb.OracleDataBySpecRequest,
  responseType: api_trading_pb.OracleDataBySpecResponse
};

exports.TradingDataService = TradingDataService;

function TradingDataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TradingDataServiceClient.prototype.marketAccounts = function marketAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarketAccounts, {
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

TradingDataServiceClient.prototype.partyAccounts = function partyAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.PartyAccounts, {
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

TradingDataServiceClient.prototype.feeInfrastructureAccounts = function feeInfrastructureAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.FeeInfrastructureAccounts, {
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

TradingDataServiceClient.prototype.candles = function candles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Candles, {
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

TradingDataServiceClient.prototype.marketDataByID = function marketDataByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarketDataByID, {
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

TradingDataServiceClient.prototype.marketsData = function marketsData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarketsData, {
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

TradingDataServiceClient.prototype.marketByID = function marketByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarketByID, {
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

TradingDataServiceClient.prototype.marketDepth = function marketDepth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarketDepth, {
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

TradingDataServiceClient.prototype.markets = function markets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Markets, {
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

TradingDataServiceClient.prototype.orderByMarketAndID = function orderByMarketAndID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrderByMarketAndID, {
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

TradingDataServiceClient.prototype.orderByReference = function orderByReference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrderByReference, {
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

TradingDataServiceClient.prototype.ordersByMarket = function ordersByMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrdersByMarket, {
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

TradingDataServiceClient.prototype.ordersByParty = function ordersByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrdersByParty, {
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

TradingDataServiceClient.prototype.orderByID = function orderByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrderByID, {
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

TradingDataServiceClient.prototype.orderVersionsByID = function orderVersionsByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OrderVersionsByID, {
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

TradingDataServiceClient.prototype.marginLevels = function marginLevels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.MarginLevels, {
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

TradingDataServiceClient.prototype.parties = function parties(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Parties, {
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

TradingDataServiceClient.prototype.partyByID = function partyByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.PartyByID, {
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

TradingDataServiceClient.prototype.positionsByParty = function positionsByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.PositionsByParty, {
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

TradingDataServiceClient.prototype.lastTrade = function lastTrade(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.LastTrade, {
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

TradingDataServiceClient.prototype.tradesByMarket = function tradesByMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.TradesByMarket, {
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

TradingDataServiceClient.prototype.tradesByOrder = function tradesByOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.TradesByOrder, {
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

TradingDataServiceClient.prototype.tradesByParty = function tradesByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.TradesByParty, {
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

TradingDataServiceClient.prototype.getProposals = function getProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetProposals, {
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

TradingDataServiceClient.prototype.getProposalsByParty = function getProposalsByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetProposalsByParty, {
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

TradingDataServiceClient.prototype.getVotesByParty = function getVotesByParty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetVotesByParty, {
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

TradingDataServiceClient.prototype.getNewMarketProposals = function getNewMarketProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetNewMarketProposals, {
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

TradingDataServiceClient.prototype.getUpdateMarketProposals = function getUpdateMarketProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetUpdateMarketProposals, {
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

TradingDataServiceClient.prototype.getNetworkParametersProposals = function getNetworkParametersProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetNetworkParametersProposals, {
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

TradingDataServiceClient.prototype.getNewAssetProposals = function getNewAssetProposals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetNewAssetProposals, {
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

TradingDataServiceClient.prototype.getProposalByID = function getProposalByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetProposalByID, {
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

TradingDataServiceClient.prototype.getProposalByReference = function getProposalByReference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetProposalByReference, {
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

TradingDataServiceClient.prototype.observeGovernance = function observeGovernance(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.ObserveGovernance, {
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

TradingDataServiceClient.prototype.observePartyProposals = function observePartyProposals(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.ObservePartyProposals, {
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

TradingDataServiceClient.prototype.observePartyVotes = function observePartyVotes(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.ObservePartyVotes, {
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

TradingDataServiceClient.prototype.observeProposalVotes = function observeProposalVotes(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.ObserveProposalVotes, {
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

TradingDataServiceClient.prototype.observeEventBus = function observeEventBus(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(TradingDataService.ObserveEventBus, {
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

TradingDataServiceClient.prototype.statistics = function statistics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Statistics, {
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

TradingDataServiceClient.prototype.getVegaTime = function getVegaTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetVegaTime, {
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

TradingDataServiceClient.prototype.accountsSubscribe = function accountsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.AccountsSubscribe, {
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

TradingDataServiceClient.prototype.candlesSubscribe = function candlesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.CandlesSubscribe, {
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

TradingDataServiceClient.prototype.marginLevelsSubscribe = function marginLevelsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.MarginLevelsSubscribe, {
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

TradingDataServiceClient.prototype.marketDepthSubscribe = function marketDepthSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.MarketDepthSubscribe, {
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

TradingDataServiceClient.prototype.marketDepthUpdatesSubscribe = function marketDepthUpdatesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.MarketDepthUpdatesSubscribe, {
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

TradingDataServiceClient.prototype.marketsDataSubscribe = function marketsDataSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.MarketsDataSubscribe, {
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

TradingDataServiceClient.prototype.ordersSubscribe = function ordersSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.OrdersSubscribe, {
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

TradingDataServiceClient.prototype.positionsSubscribe = function positionsSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.PositionsSubscribe, {
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

TradingDataServiceClient.prototype.tradesSubscribe = function tradesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.TradesSubscribe, {
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

TradingDataServiceClient.prototype.transferResponsesSubscribe = function transferResponsesSubscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TradingDataService.TransferResponsesSubscribe, {
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

TradingDataServiceClient.prototype.getNodeSignaturesAggregate = function getNodeSignaturesAggregate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.GetNodeSignaturesAggregate, {
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

TradingDataServiceClient.prototype.assetByID = function assetByID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.AssetByID, {
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

TradingDataServiceClient.prototype.assets = function assets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Assets, {
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

TradingDataServiceClient.prototype.estimateFee = function estimateFee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.EstimateFee, {
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

TradingDataServiceClient.prototype.estimateMargin = function estimateMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.EstimateMargin, {
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

TradingDataServiceClient.prototype.eRC20WithdrawalApproval = function eRC20WithdrawalApproval(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.ERC20WithdrawalApproval, {
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

TradingDataServiceClient.prototype.withdrawal = function withdrawal(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Withdrawal, {
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

TradingDataServiceClient.prototype.withdrawals = function withdrawals(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Withdrawals, {
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

TradingDataServiceClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Deposit, {
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

TradingDataServiceClient.prototype.deposits = function deposits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.Deposits, {
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

TradingDataServiceClient.prototype.networkParameters = function networkParameters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.NetworkParameters, {
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

TradingDataServiceClient.prototype.liquidityProvisions = function liquidityProvisions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.LiquidityProvisions, {
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

TradingDataServiceClient.prototype.oracleSpec = function oracleSpec(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OracleSpec, {
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

TradingDataServiceClient.prototype.oracleSpecs = function oracleSpecs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OracleSpecs, {
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

TradingDataServiceClient.prototype.oracleDataBySpec = function oracleDataBySpec(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TradingDataService.OracleDataBySpec, {
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

exports.TradingDataServiceClient = TradingDataServiceClient;

