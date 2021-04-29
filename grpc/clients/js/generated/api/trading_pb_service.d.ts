// package: api.v1
// file: api/trading.proto

import * as api_trading_pb from "../api/trading_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TradingServicePrepareSubmitOrder = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareSubmitOrderRequest;
  readonly responseType: typeof api_trading_pb.PrepareSubmitOrderResponse;
};

type TradingServicePrepareCancelOrder = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareCancelOrderRequest;
  readonly responseType: typeof api_trading_pb.PrepareCancelOrderResponse;
};

type TradingServicePrepareAmendOrder = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareAmendOrderRequest;
  readonly responseType: typeof api_trading_pb.PrepareAmendOrderResponse;
};

type TradingServicePrepareWithdraw = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareWithdrawRequest;
  readonly responseType: typeof api_trading_pb.PrepareWithdrawResponse;
};

type TradingServiceSubmitTransaction = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.SubmitTransactionRequest;
  readonly responseType: typeof api_trading_pb.SubmitTransactionResponse;
};

type TradingServicePrepareProposal = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareProposalRequest;
  readonly responseType: typeof api_trading_pb.PrepareProposalResponse;
};

type TradingServicePrepareVoteSubmission = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareVoteSubmissionRequest;
  readonly responseType: typeof api_trading_pb.PrepareVoteSubmissionResponse;
};

type TradingServicePropagateChainEvent = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PropagateChainEventRequest;
  readonly responseType: typeof api_trading_pb.PropagateChainEventResponse;
};

type TradingServicePrepareLiquidityProvision = {
  readonly methodName: string;
  readonly service: typeof TradingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PrepareLiquidityProvisionRequest;
  readonly responseType: typeof api_trading_pb.PrepareLiquidityProvisionResponse;
};

export class TradingService {
  static readonly serviceName: string;
  static readonly PrepareSubmitOrder: TradingServicePrepareSubmitOrder;
  static readonly PrepareCancelOrder: TradingServicePrepareCancelOrder;
  static readonly PrepareAmendOrder: TradingServicePrepareAmendOrder;
  static readonly PrepareWithdraw: TradingServicePrepareWithdraw;
  static readonly SubmitTransaction: TradingServiceSubmitTransaction;
  static readonly PrepareProposal: TradingServicePrepareProposal;
  static readonly PrepareVoteSubmission: TradingServicePrepareVoteSubmission;
  static readonly PropagateChainEvent: TradingServicePropagateChainEvent;
  static readonly PrepareLiquidityProvision: TradingServicePrepareLiquidityProvision;
}

type TradingDataServiceMarketAccounts = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketAccountsRequest;
  readonly responseType: typeof api_trading_pb.MarketAccountsResponse;
};

type TradingDataServicePartyAccounts = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PartyAccountsRequest;
  readonly responseType: typeof api_trading_pb.PartyAccountsResponse;
};

type TradingDataServiceFeeInfrastructureAccounts = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.FeeInfrastructureAccountsRequest;
  readonly responseType: typeof api_trading_pb.FeeInfrastructureAccountsResponse;
};

type TradingDataServiceCandles = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.CandlesRequest;
  readonly responseType: typeof api_trading_pb.CandlesResponse;
};

type TradingDataServiceMarketDataByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketDataByIDRequest;
  readonly responseType: typeof api_trading_pb.MarketDataByIDResponse;
};

type TradingDataServiceMarketsData = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketsDataRequest;
  readonly responseType: typeof api_trading_pb.MarketsDataResponse;
};

type TradingDataServiceMarketByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketByIDRequest;
  readonly responseType: typeof api_trading_pb.MarketByIDResponse;
};

type TradingDataServiceMarketDepth = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketDepthRequest;
  readonly responseType: typeof api_trading_pb.MarketDepthResponse;
};

type TradingDataServiceMarkets = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarketsRequest;
  readonly responseType: typeof api_trading_pb.MarketsResponse;
};

type TradingDataServiceOrderByMarketAndID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrderByMarketAndIDRequest;
  readonly responseType: typeof api_trading_pb.OrderByMarketAndIDResponse;
};

type TradingDataServiceOrderByReference = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrderByReferenceRequest;
  readonly responseType: typeof api_trading_pb.OrderByReferenceResponse;
};

type TradingDataServiceOrdersByMarket = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrdersByMarketRequest;
  readonly responseType: typeof api_trading_pb.OrdersByMarketResponse;
};

type TradingDataServiceOrdersByParty = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrdersByPartyRequest;
  readonly responseType: typeof api_trading_pb.OrdersByPartyResponse;
};

type TradingDataServiceOrderByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrderByIDRequest;
  readonly responseType: typeof api_trading_pb.OrderByIDResponse;
};

type TradingDataServiceOrderVersionsByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OrderVersionsByIDRequest;
  readonly responseType: typeof api_trading_pb.OrderVersionsByIDResponse;
};

type TradingDataServiceMarginLevels = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.MarginLevelsRequest;
  readonly responseType: typeof api_trading_pb.MarginLevelsResponse;
};

type TradingDataServiceParties = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PartiesRequest;
  readonly responseType: typeof api_trading_pb.PartiesResponse;
};

type TradingDataServicePartyByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PartyByIDRequest;
  readonly responseType: typeof api_trading_pb.PartyByIDResponse;
};

type TradingDataServicePositionsByParty = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.PositionsByPartyRequest;
  readonly responseType: typeof api_trading_pb.PositionsByPartyResponse;
};

type TradingDataServiceLastTrade = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.LastTradeRequest;
  readonly responseType: typeof api_trading_pb.LastTradeResponse;
};

type TradingDataServiceTradesByMarket = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.TradesByMarketRequest;
  readonly responseType: typeof api_trading_pb.TradesByMarketResponse;
};

type TradingDataServiceTradesByOrder = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.TradesByOrderRequest;
  readonly responseType: typeof api_trading_pb.TradesByOrderResponse;
};

type TradingDataServiceTradesByParty = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.TradesByPartyRequest;
  readonly responseType: typeof api_trading_pb.TradesByPartyResponse;
};

type TradingDataServiceGetProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetProposalsRequest;
  readonly responseType: typeof api_trading_pb.GetProposalsResponse;
};

type TradingDataServiceGetProposalsByParty = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetProposalsByPartyRequest;
  readonly responseType: typeof api_trading_pb.GetProposalsByPartyResponse;
};

type TradingDataServiceGetVotesByParty = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetVotesByPartyRequest;
  readonly responseType: typeof api_trading_pb.GetVotesByPartyResponse;
};

type TradingDataServiceGetNewMarketProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetNewMarketProposalsRequest;
  readonly responseType: typeof api_trading_pb.GetNewMarketProposalsResponse;
};

type TradingDataServiceGetUpdateMarketProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetUpdateMarketProposalsRequest;
  readonly responseType: typeof api_trading_pb.GetUpdateMarketProposalsResponse;
};

type TradingDataServiceGetNetworkParametersProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetNetworkParametersProposalsRequest;
  readonly responseType: typeof api_trading_pb.GetNetworkParametersProposalsResponse;
};

type TradingDataServiceGetNewAssetProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetNewAssetProposalsRequest;
  readonly responseType: typeof api_trading_pb.GetNewAssetProposalsResponse;
};

type TradingDataServiceGetProposalByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetProposalByIDRequest;
  readonly responseType: typeof api_trading_pb.GetProposalByIDResponse;
};

type TradingDataServiceGetProposalByReference = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetProposalByReferenceRequest;
  readonly responseType: typeof api_trading_pb.GetProposalByReferenceResponse;
};

type TradingDataServiceObserveGovernance = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.ObserveGovernanceRequest;
  readonly responseType: typeof api_trading_pb.ObserveGovernanceResponse;
};

type TradingDataServiceObservePartyProposals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.ObservePartyProposalsRequest;
  readonly responseType: typeof api_trading_pb.ObservePartyProposalsResponse;
};

type TradingDataServiceObservePartyVotes = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.ObservePartyVotesRequest;
  readonly responseType: typeof api_trading_pb.ObservePartyVotesResponse;
};

type TradingDataServiceObserveProposalVotes = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.ObserveProposalVotesRequest;
  readonly responseType: typeof api_trading_pb.ObserveProposalVotesResponse;
};

type TradingDataServiceObserveEventBus = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.ObserveEventBusRequest;
  readonly responseType: typeof api_trading_pb.ObserveEventBusResponse;
};

type TradingDataServiceStatistics = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.StatisticsRequest;
  readonly responseType: typeof api_trading_pb.StatisticsResponse;
};

type TradingDataServiceGetVegaTime = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetVegaTimeRequest;
  readonly responseType: typeof api_trading_pb.GetVegaTimeResponse;
};

type TradingDataServiceAccountsSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.AccountsSubscribeRequest;
  readonly responseType: typeof api_trading_pb.AccountsSubscribeResponse;
};

type TradingDataServiceCandlesSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.CandlesSubscribeRequest;
  readonly responseType: typeof api_trading_pb.CandlesSubscribeResponse;
};

type TradingDataServiceMarginLevelsSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.MarginLevelsSubscribeRequest;
  readonly responseType: typeof api_trading_pb.MarginLevelsSubscribeResponse;
};

type TradingDataServiceMarketDepthSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.MarketDepthSubscribeRequest;
  readonly responseType: typeof api_trading_pb.MarketDepthSubscribeResponse;
};

type TradingDataServiceMarketDepthUpdatesSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.MarketDepthUpdatesSubscribeRequest;
  readonly responseType: typeof api_trading_pb.MarketDepthUpdatesSubscribeResponse;
};

type TradingDataServiceMarketsDataSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.MarketsDataSubscribeRequest;
  readonly responseType: typeof api_trading_pb.MarketsDataSubscribeResponse;
};

type TradingDataServiceOrdersSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.OrdersSubscribeRequest;
  readonly responseType: typeof api_trading_pb.OrdersSubscribeResponse;
};

type TradingDataServicePositionsSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.PositionsSubscribeRequest;
  readonly responseType: typeof api_trading_pb.PositionsSubscribeResponse;
};

type TradingDataServiceTradesSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.TradesSubscribeRequest;
  readonly responseType: typeof api_trading_pb.TradesSubscribeResponse;
};

type TradingDataServiceTransferResponsesSubscribe = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_trading_pb.TransferResponsesSubscribeRequest;
  readonly responseType: typeof api_trading_pb.TransferResponsesSubscribeResponse;
};

type TradingDataServiceGetNodeSignaturesAggregate = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.GetNodeSignaturesAggregateRequest;
  readonly responseType: typeof api_trading_pb.GetNodeSignaturesAggregateResponse;
};

type TradingDataServiceAssetByID = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.AssetByIDRequest;
  readonly responseType: typeof api_trading_pb.AssetByIDResponse;
};

type TradingDataServiceAssets = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.AssetsRequest;
  readonly responseType: typeof api_trading_pb.AssetsResponse;
};

type TradingDataServiceEstimateFee = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.EstimateFeeRequest;
  readonly responseType: typeof api_trading_pb.EstimateFeeResponse;
};

type TradingDataServiceEstimateMargin = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.EstimateMarginRequest;
  readonly responseType: typeof api_trading_pb.EstimateMarginResponse;
};

type TradingDataServiceERC20WithdrawalApproval = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.ERC20WithdrawalApprovalRequest;
  readonly responseType: typeof api_trading_pb.ERC20WithdrawalApprovalResponse;
};

type TradingDataServiceWithdrawal = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.WithdrawalRequest;
  readonly responseType: typeof api_trading_pb.WithdrawalResponse;
};

type TradingDataServiceWithdrawals = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.WithdrawalsRequest;
  readonly responseType: typeof api_trading_pb.WithdrawalsResponse;
};

type TradingDataServiceDeposit = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.DepositRequest;
  readonly responseType: typeof api_trading_pb.DepositResponse;
};

type TradingDataServiceDeposits = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.DepositsRequest;
  readonly responseType: typeof api_trading_pb.DepositsResponse;
};

type TradingDataServiceNetworkParameters = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.NetworkParametersRequest;
  readonly responseType: typeof api_trading_pb.NetworkParametersResponse;
};

type TradingDataServiceLiquidityProvisions = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.LiquidityProvisionsRequest;
  readonly responseType: typeof api_trading_pb.LiquidityProvisionsResponse;
};

type TradingDataServiceOracleSpec = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OracleSpecRequest;
  readonly responseType: typeof api_trading_pb.OracleSpecResponse;
};

type TradingDataServiceOracleSpecs = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OracleSpecsRequest;
  readonly responseType: typeof api_trading_pb.OracleSpecsResponse;
};

type TradingDataServiceOracleDataBySpec = {
  readonly methodName: string;
  readonly service: typeof TradingDataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_trading_pb.OracleDataBySpecRequest;
  readonly responseType: typeof api_trading_pb.OracleDataBySpecResponse;
};

export class TradingDataService {
  static readonly serviceName: string;
  static readonly MarketAccounts: TradingDataServiceMarketAccounts;
  static readonly PartyAccounts: TradingDataServicePartyAccounts;
  static readonly FeeInfrastructureAccounts: TradingDataServiceFeeInfrastructureAccounts;
  static readonly Candles: TradingDataServiceCandles;
  static readonly MarketDataByID: TradingDataServiceMarketDataByID;
  static readonly MarketsData: TradingDataServiceMarketsData;
  static readonly MarketByID: TradingDataServiceMarketByID;
  static readonly MarketDepth: TradingDataServiceMarketDepth;
  static readonly Markets: TradingDataServiceMarkets;
  static readonly OrderByMarketAndID: TradingDataServiceOrderByMarketAndID;
  static readonly OrderByReference: TradingDataServiceOrderByReference;
  static readonly OrdersByMarket: TradingDataServiceOrdersByMarket;
  static readonly OrdersByParty: TradingDataServiceOrdersByParty;
  static readonly OrderByID: TradingDataServiceOrderByID;
  static readonly OrderVersionsByID: TradingDataServiceOrderVersionsByID;
  static readonly MarginLevels: TradingDataServiceMarginLevels;
  static readonly Parties: TradingDataServiceParties;
  static readonly PartyByID: TradingDataServicePartyByID;
  static readonly PositionsByParty: TradingDataServicePositionsByParty;
  static readonly LastTrade: TradingDataServiceLastTrade;
  static readonly TradesByMarket: TradingDataServiceTradesByMarket;
  static readonly TradesByOrder: TradingDataServiceTradesByOrder;
  static readonly TradesByParty: TradingDataServiceTradesByParty;
  static readonly GetProposals: TradingDataServiceGetProposals;
  static readonly GetProposalsByParty: TradingDataServiceGetProposalsByParty;
  static readonly GetVotesByParty: TradingDataServiceGetVotesByParty;
  static readonly GetNewMarketProposals: TradingDataServiceGetNewMarketProposals;
  static readonly GetUpdateMarketProposals: TradingDataServiceGetUpdateMarketProposals;
  static readonly GetNetworkParametersProposals: TradingDataServiceGetNetworkParametersProposals;
  static readonly GetNewAssetProposals: TradingDataServiceGetNewAssetProposals;
  static readonly GetProposalByID: TradingDataServiceGetProposalByID;
  static readonly GetProposalByReference: TradingDataServiceGetProposalByReference;
  static readonly ObserveGovernance: TradingDataServiceObserveGovernance;
  static readonly ObservePartyProposals: TradingDataServiceObservePartyProposals;
  static readonly ObservePartyVotes: TradingDataServiceObservePartyVotes;
  static readonly ObserveProposalVotes: TradingDataServiceObserveProposalVotes;
  static readonly ObserveEventBus: TradingDataServiceObserveEventBus;
  static readonly Statistics: TradingDataServiceStatistics;
  static readonly GetVegaTime: TradingDataServiceGetVegaTime;
  static readonly AccountsSubscribe: TradingDataServiceAccountsSubscribe;
  static readonly CandlesSubscribe: TradingDataServiceCandlesSubscribe;
  static readonly MarginLevelsSubscribe: TradingDataServiceMarginLevelsSubscribe;
  static readonly MarketDepthSubscribe: TradingDataServiceMarketDepthSubscribe;
  static readonly MarketDepthUpdatesSubscribe: TradingDataServiceMarketDepthUpdatesSubscribe;
  static readonly MarketsDataSubscribe: TradingDataServiceMarketsDataSubscribe;
  static readonly OrdersSubscribe: TradingDataServiceOrdersSubscribe;
  static readonly PositionsSubscribe: TradingDataServicePositionsSubscribe;
  static readonly TradesSubscribe: TradingDataServiceTradesSubscribe;
  static readonly TransferResponsesSubscribe: TradingDataServiceTransferResponsesSubscribe;
  static readonly GetNodeSignaturesAggregate: TradingDataServiceGetNodeSignaturesAggregate;
  static readonly AssetByID: TradingDataServiceAssetByID;
  static readonly Assets: TradingDataServiceAssets;
  static readonly EstimateFee: TradingDataServiceEstimateFee;
  static readonly EstimateMargin: TradingDataServiceEstimateMargin;
  static readonly ERC20WithdrawalApproval: TradingDataServiceERC20WithdrawalApproval;
  static readonly Withdrawal: TradingDataServiceWithdrawal;
  static readonly Withdrawals: TradingDataServiceWithdrawals;
  static readonly Deposit: TradingDataServiceDeposit;
  static readonly Deposits: TradingDataServiceDeposits;
  static readonly NetworkParameters: TradingDataServiceNetworkParameters;
  static readonly LiquidityProvisions: TradingDataServiceLiquidityProvisions;
  static readonly OracleSpec: TradingDataServiceOracleSpec;
  static readonly OracleSpecs: TradingDataServiceOracleSpecs;
  static readonly OracleDataBySpec: TradingDataServiceOracleDataBySpec;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TradingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  prepareSubmitOrder(
    requestMessage: api_trading_pb.PrepareSubmitOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareSubmitOrderResponse|null) => void
  ): UnaryResponse;
  prepareSubmitOrder(
    requestMessage: api_trading_pb.PrepareSubmitOrderRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareSubmitOrderResponse|null) => void
  ): UnaryResponse;
  prepareCancelOrder(
    requestMessage: api_trading_pb.PrepareCancelOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareCancelOrderResponse|null) => void
  ): UnaryResponse;
  prepareCancelOrder(
    requestMessage: api_trading_pb.PrepareCancelOrderRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareCancelOrderResponse|null) => void
  ): UnaryResponse;
  prepareAmendOrder(
    requestMessage: api_trading_pb.PrepareAmendOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareAmendOrderResponse|null) => void
  ): UnaryResponse;
  prepareAmendOrder(
    requestMessage: api_trading_pb.PrepareAmendOrderRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareAmendOrderResponse|null) => void
  ): UnaryResponse;
  prepareWithdraw(
    requestMessage: api_trading_pb.PrepareWithdrawRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareWithdrawResponse|null) => void
  ): UnaryResponse;
  prepareWithdraw(
    requestMessage: api_trading_pb.PrepareWithdrawRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareWithdrawResponse|null) => void
  ): UnaryResponse;
  submitTransaction(
    requestMessage: api_trading_pb.SubmitTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.SubmitTransactionResponse|null) => void
  ): UnaryResponse;
  submitTransaction(
    requestMessage: api_trading_pb.SubmitTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.SubmitTransactionResponse|null) => void
  ): UnaryResponse;
  prepareProposal(
    requestMessage: api_trading_pb.PrepareProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareProposalResponse|null) => void
  ): UnaryResponse;
  prepareProposal(
    requestMessage: api_trading_pb.PrepareProposalRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareProposalResponse|null) => void
  ): UnaryResponse;
  prepareVoteSubmission(
    requestMessage: api_trading_pb.PrepareVoteSubmissionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareVoteSubmissionResponse|null) => void
  ): UnaryResponse;
  prepareVoteSubmission(
    requestMessage: api_trading_pb.PrepareVoteSubmissionRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareVoteSubmissionResponse|null) => void
  ): UnaryResponse;
  propagateChainEvent(
    requestMessage: api_trading_pb.PropagateChainEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PropagateChainEventResponse|null) => void
  ): UnaryResponse;
  propagateChainEvent(
    requestMessage: api_trading_pb.PropagateChainEventRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PropagateChainEventResponse|null) => void
  ): UnaryResponse;
  prepareLiquidityProvision(
    requestMessage: api_trading_pb.PrepareLiquidityProvisionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareLiquidityProvisionResponse|null) => void
  ): UnaryResponse;
  prepareLiquidityProvision(
    requestMessage: api_trading_pb.PrepareLiquidityProvisionRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PrepareLiquidityProvisionResponse|null) => void
  ): UnaryResponse;
}

export class TradingDataServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  marketAccounts(
    requestMessage: api_trading_pb.MarketAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketAccountsResponse|null) => void
  ): UnaryResponse;
  marketAccounts(
    requestMessage: api_trading_pb.MarketAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketAccountsResponse|null) => void
  ): UnaryResponse;
  partyAccounts(
    requestMessage: api_trading_pb.PartyAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartyAccountsResponse|null) => void
  ): UnaryResponse;
  partyAccounts(
    requestMessage: api_trading_pb.PartyAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartyAccountsResponse|null) => void
  ): UnaryResponse;
  feeInfrastructureAccounts(
    requestMessage: api_trading_pb.FeeInfrastructureAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.FeeInfrastructureAccountsResponse|null) => void
  ): UnaryResponse;
  feeInfrastructureAccounts(
    requestMessage: api_trading_pb.FeeInfrastructureAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.FeeInfrastructureAccountsResponse|null) => void
  ): UnaryResponse;
  candles(
    requestMessage: api_trading_pb.CandlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.CandlesResponse|null) => void
  ): UnaryResponse;
  candles(
    requestMessage: api_trading_pb.CandlesRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.CandlesResponse|null) => void
  ): UnaryResponse;
  marketDataByID(
    requestMessage: api_trading_pb.MarketDataByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketDataByIDResponse|null) => void
  ): UnaryResponse;
  marketDataByID(
    requestMessage: api_trading_pb.MarketDataByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketDataByIDResponse|null) => void
  ): UnaryResponse;
  marketsData(
    requestMessage: api_trading_pb.MarketsDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketsDataResponse|null) => void
  ): UnaryResponse;
  marketsData(
    requestMessage: api_trading_pb.MarketsDataRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketsDataResponse|null) => void
  ): UnaryResponse;
  marketByID(
    requestMessage: api_trading_pb.MarketByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketByIDResponse|null) => void
  ): UnaryResponse;
  marketByID(
    requestMessage: api_trading_pb.MarketByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketByIDResponse|null) => void
  ): UnaryResponse;
  marketDepth(
    requestMessage: api_trading_pb.MarketDepthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketDepthResponse|null) => void
  ): UnaryResponse;
  marketDepth(
    requestMessage: api_trading_pb.MarketDepthRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketDepthResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: api_trading_pb.MarketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: api_trading_pb.MarketsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  orderByMarketAndID(
    requestMessage: api_trading_pb.OrderByMarketAndIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByMarketAndIDResponse|null) => void
  ): UnaryResponse;
  orderByMarketAndID(
    requestMessage: api_trading_pb.OrderByMarketAndIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByMarketAndIDResponse|null) => void
  ): UnaryResponse;
  orderByReference(
    requestMessage: api_trading_pb.OrderByReferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByReferenceResponse|null) => void
  ): UnaryResponse;
  orderByReference(
    requestMessage: api_trading_pb.OrderByReferenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByReferenceResponse|null) => void
  ): UnaryResponse;
  ordersByMarket(
    requestMessage: api_trading_pb.OrdersByMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrdersByMarketResponse|null) => void
  ): UnaryResponse;
  ordersByMarket(
    requestMessage: api_trading_pb.OrdersByMarketRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrdersByMarketResponse|null) => void
  ): UnaryResponse;
  ordersByParty(
    requestMessage: api_trading_pb.OrdersByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrdersByPartyResponse|null) => void
  ): UnaryResponse;
  ordersByParty(
    requestMessage: api_trading_pb.OrdersByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrdersByPartyResponse|null) => void
  ): UnaryResponse;
  orderByID(
    requestMessage: api_trading_pb.OrderByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByIDResponse|null) => void
  ): UnaryResponse;
  orderByID(
    requestMessage: api_trading_pb.OrderByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderByIDResponse|null) => void
  ): UnaryResponse;
  orderVersionsByID(
    requestMessage: api_trading_pb.OrderVersionsByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderVersionsByIDResponse|null) => void
  ): UnaryResponse;
  orderVersionsByID(
    requestMessage: api_trading_pb.OrderVersionsByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OrderVersionsByIDResponse|null) => void
  ): UnaryResponse;
  marginLevels(
    requestMessage: api_trading_pb.MarginLevelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarginLevelsResponse|null) => void
  ): UnaryResponse;
  marginLevels(
    requestMessage: api_trading_pb.MarginLevelsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.MarginLevelsResponse|null) => void
  ): UnaryResponse;
  parties(
    requestMessage: api_trading_pb.PartiesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartiesResponse|null) => void
  ): UnaryResponse;
  parties(
    requestMessage: api_trading_pb.PartiesRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartiesResponse|null) => void
  ): UnaryResponse;
  partyByID(
    requestMessage: api_trading_pb.PartyByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartyByIDResponse|null) => void
  ): UnaryResponse;
  partyByID(
    requestMessage: api_trading_pb.PartyByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PartyByIDResponse|null) => void
  ): UnaryResponse;
  positionsByParty(
    requestMessage: api_trading_pb.PositionsByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PositionsByPartyResponse|null) => void
  ): UnaryResponse;
  positionsByParty(
    requestMessage: api_trading_pb.PositionsByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.PositionsByPartyResponse|null) => void
  ): UnaryResponse;
  lastTrade(
    requestMessage: api_trading_pb.LastTradeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.LastTradeResponse|null) => void
  ): UnaryResponse;
  lastTrade(
    requestMessage: api_trading_pb.LastTradeRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.LastTradeResponse|null) => void
  ): UnaryResponse;
  tradesByMarket(
    requestMessage: api_trading_pb.TradesByMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByMarketResponse|null) => void
  ): UnaryResponse;
  tradesByMarket(
    requestMessage: api_trading_pb.TradesByMarketRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByMarketResponse|null) => void
  ): UnaryResponse;
  tradesByOrder(
    requestMessage: api_trading_pb.TradesByOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByOrderResponse|null) => void
  ): UnaryResponse;
  tradesByOrder(
    requestMessage: api_trading_pb.TradesByOrderRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByOrderResponse|null) => void
  ): UnaryResponse;
  tradesByParty(
    requestMessage: api_trading_pb.TradesByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByPartyResponse|null) => void
  ): UnaryResponse;
  tradesByParty(
    requestMessage: api_trading_pb.TradesByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.TradesByPartyResponse|null) => void
  ): UnaryResponse;
  getProposals(
    requestMessage: api_trading_pb.GetProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposals(
    requestMessage: api_trading_pb.GetProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposalsByParty(
    requestMessage: api_trading_pb.GetProposalsByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalsByPartyResponse|null) => void
  ): UnaryResponse;
  getProposalsByParty(
    requestMessage: api_trading_pb.GetProposalsByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalsByPartyResponse|null) => void
  ): UnaryResponse;
  getVotesByParty(
    requestMessage: api_trading_pb.GetVotesByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetVotesByPartyResponse|null) => void
  ): UnaryResponse;
  getVotesByParty(
    requestMessage: api_trading_pb.GetVotesByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetVotesByPartyResponse|null) => void
  ): UnaryResponse;
  getNewMarketProposals(
    requestMessage: api_trading_pb.GetNewMarketProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNewMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getNewMarketProposals(
    requestMessage: api_trading_pb.GetNewMarketProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNewMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getUpdateMarketProposals(
    requestMessage: api_trading_pb.GetUpdateMarketProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetUpdateMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getUpdateMarketProposals(
    requestMessage: api_trading_pb.GetUpdateMarketProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetUpdateMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getNetworkParametersProposals(
    requestMessage: api_trading_pb.GetNetworkParametersProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNetworkParametersProposalsResponse|null) => void
  ): UnaryResponse;
  getNetworkParametersProposals(
    requestMessage: api_trading_pb.GetNetworkParametersProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNetworkParametersProposalsResponse|null) => void
  ): UnaryResponse;
  getNewAssetProposals(
    requestMessage: api_trading_pb.GetNewAssetProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNewAssetProposalsResponse|null) => void
  ): UnaryResponse;
  getNewAssetProposals(
    requestMessage: api_trading_pb.GetNewAssetProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNewAssetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposalByID(
    requestMessage: api_trading_pb.GetProposalByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalByIDResponse|null) => void
  ): UnaryResponse;
  getProposalByID(
    requestMessage: api_trading_pb.GetProposalByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalByIDResponse|null) => void
  ): UnaryResponse;
  getProposalByReference(
    requestMessage: api_trading_pb.GetProposalByReferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalByReferenceResponse|null) => void
  ): UnaryResponse;
  getProposalByReference(
    requestMessage: api_trading_pb.GetProposalByReferenceRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetProposalByReferenceResponse|null) => void
  ): UnaryResponse;
  observeGovernance(requestMessage: api_trading_pb.ObserveGovernanceRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.ObserveGovernanceResponse>;
  observePartyProposals(requestMessage: api_trading_pb.ObservePartyProposalsRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.ObservePartyProposalsResponse>;
  observePartyVotes(requestMessage: api_trading_pb.ObservePartyVotesRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.ObservePartyVotesResponse>;
  observeProposalVotes(requestMessage: api_trading_pb.ObserveProposalVotesRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.ObserveProposalVotesResponse>;
  observeEventBus(metadata?: grpc.Metadata): BidirectionalStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
  statistics(
    requestMessage: api_trading_pb.StatisticsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.StatisticsResponse|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: api_trading_pb.StatisticsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.StatisticsResponse|null) => void
  ): UnaryResponse;
  getVegaTime(
    requestMessage: api_trading_pb.GetVegaTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetVegaTimeResponse|null) => void
  ): UnaryResponse;
  getVegaTime(
    requestMessage: api_trading_pb.GetVegaTimeRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetVegaTimeResponse|null) => void
  ): UnaryResponse;
  accountsSubscribe(requestMessage: api_trading_pb.AccountsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.AccountsSubscribeResponse>;
  candlesSubscribe(requestMessage: api_trading_pb.CandlesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.CandlesSubscribeResponse>;
  marginLevelsSubscribe(requestMessage: api_trading_pb.MarginLevelsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.MarginLevelsSubscribeResponse>;
  marketDepthSubscribe(requestMessage: api_trading_pb.MarketDepthSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.MarketDepthSubscribeResponse>;
  marketDepthUpdatesSubscribe(requestMessage: api_trading_pb.MarketDepthUpdatesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.MarketDepthUpdatesSubscribeResponse>;
  marketsDataSubscribe(requestMessage: api_trading_pb.MarketsDataSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.MarketsDataSubscribeResponse>;
  ordersSubscribe(requestMessage: api_trading_pb.OrdersSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.OrdersSubscribeResponse>;
  positionsSubscribe(requestMessage: api_trading_pb.PositionsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.PositionsSubscribeResponse>;
  tradesSubscribe(requestMessage: api_trading_pb.TradesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.TradesSubscribeResponse>;
  transferResponsesSubscribe(requestMessage: api_trading_pb.TransferResponsesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<api_trading_pb.TransferResponsesSubscribeResponse>;
  getNodeSignaturesAggregate(
    requestMessage: api_trading_pb.GetNodeSignaturesAggregateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNodeSignaturesAggregateResponse|null) => void
  ): UnaryResponse;
  getNodeSignaturesAggregate(
    requestMessage: api_trading_pb.GetNodeSignaturesAggregateRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.GetNodeSignaturesAggregateResponse|null) => void
  ): UnaryResponse;
  assetByID(
    requestMessage: api_trading_pb.AssetByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.AssetByIDResponse|null) => void
  ): UnaryResponse;
  assetByID(
    requestMessage: api_trading_pb.AssetByIDRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.AssetByIDResponse|null) => void
  ): UnaryResponse;
  assets(
    requestMessage: api_trading_pb.AssetsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.AssetsResponse|null) => void
  ): UnaryResponse;
  assets(
    requestMessage: api_trading_pb.AssetsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.AssetsResponse|null) => void
  ): UnaryResponse;
  estimateFee(
    requestMessage: api_trading_pb.EstimateFeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.EstimateFeeResponse|null) => void
  ): UnaryResponse;
  estimateFee(
    requestMessage: api_trading_pb.EstimateFeeRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.EstimateFeeResponse|null) => void
  ): UnaryResponse;
  estimateMargin(
    requestMessage: api_trading_pb.EstimateMarginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.EstimateMarginResponse|null) => void
  ): UnaryResponse;
  estimateMargin(
    requestMessage: api_trading_pb.EstimateMarginRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.EstimateMarginResponse|null) => void
  ): UnaryResponse;
  eRC20WithdrawalApproval(
    requestMessage: api_trading_pb.ERC20WithdrawalApprovalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.ERC20WithdrawalApprovalResponse|null) => void
  ): UnaryResponse;
  eRC20WithdrawalApproval(
    requestMessage: api_trading_pb.ERC20WithdrawalApprovalRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.ERC20WithdrawalApprovalResponse|null) => void
  ): UnaryResponse;
  withdrawal(
    requestMessage: api_trading_pb.WithdrawalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.WithdrawalResponse|null) => void
  ): UnaryResponse;
  withdrawal(
    requestMessage: api_trading_pb.WithdrawalRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.WithdrawalResponse|null) => void
  ): UnaryResponse;
  withdrawals(
    requestMessage: api_trading_pb.WithdrawalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.WithdrawalsResponse|null) => void
  ): UnaryResponse;
  withdrawals(
    requestMessage: api_trading_pb.WithdrawalsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.WithdrawalsResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: api_trading_pb.DepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.DepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: api_trading_pb.DepositRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.DepositResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: api_trading_pb.DepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.DepositsResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: api_trading_pb.DepositsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.DepositsResponse|null) => void
  ): UnaryResponse;
  networkParameters(
    requestMessage: api_trading_pb.NetworkParametersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.NetworkParametersResponse|null) => void
  ): UnaryResponse;
  networkParameters(
    requestMessage: api_trading_pb.NetworkParametersRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.NetworkParametersResponse|null) => void
  ): UnaryResponse;
  liquidityProvisions(
    requestMessage: api_trading_pb.LiquidityProvisionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.LiquidityProvisionsResponse|null) => void
  ): UnaryResponse;
  liquidityProvisions(
    requestMessage: api_trading_pb.LiquidityProvisionsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.LiquidityProvisionsResponse|null) => void
  ): UnaryResponse;
  oracleSpec(
    requestMessage: api_trading_pb.OracleSpecRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleSpecResponse|null) => void
  ): UnaryResponse;
  oracleSpec(
    requestMessage: api_trading_pb.OracleSpecRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleSpecResponse|null) => void
  ): UnaryResponse;
  oracleSpecs(
    requestMessage: api_trading_pb.OracleSpecsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleSpecsResponse|null) => void
  ): UnaryResponse;
  oracleSpecs(
    requestMessage: api_trading_pb.OracleSpecsRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleSpecsResponse|null) => void
  ): UnaryResponse;
  oracleDataBySpec(
    requestMessage: api_trading_pb.OracleDataBySpecRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleDataBySpecResponse|null) => void
  ): UnaryResponse;
  oracleDataBySpec(
    requestMessage: api_trading_pb.OracleDataBySpecRequest,
    callback: (error: ServiceError|null, responseMessage: api_trading_pb.OracleDataBySpecResponse|null) => void
  ): UnaryResponse;
}

