// package: api
// file: proto/api/trading.proto

import * as proto_api_trading_pb from "../../proto/api/trading_pb";
import * as proto_vega_pb from "../../proto/vega_pb";
import * as proto_governance_pb from "../../proto/governance_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type tradingPrepareSubmitOrder = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.SubmitOrderRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareSubmitOrderResponse;
};

type tradingPrepareCancelOrder = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.CancelOrderRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareCancelOrderResponse;
};

type tradingPrepareAmendOrder = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.AmendOrderRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareAmendOrderResponse;
};

type tradingPrepareWithdraw = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PrepareWithdrawRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareWithdrawResponse;
};

type tradingSubmitTransaction = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.SubmitTransactionRequest;
  readonly responseType: typeof proto_api_trading_pb.SubmitTransactionResponse;
};

type tradingPrepareProposal = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PrepareProposalRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareProposalResponse;
};

type tradingPrepareVote = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PrepareVoteRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareVoteResponse;
};

type tradingPropagateChainEvent = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PropagateChainEventRequest;
  readonly responseType: typeof proto_api_trading_pb.PropagateChainEventResponse;
};

type tradingPrepareLiquidityProvision = {
  readonly methodName: string;
  readonly service: typeof trading;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PrepareLiquidityProvisionRequest;
  readonly responseType: typeof proto_api_trading_pb.PrepareLiquidityProvisionResponse;
};

export class trading {
  static readonly serviceName: string;
  static readonly PrepareSubmitOrder: tradingPrepareSubmitOrder;
  static readonly PrepareCancelOrder: tradingPrepareCancelOrder;
  static readonly PrepareAmendOrder: tradingPrepareAmendOrder;
  static readonly PrepareWithdraw: tradingPrepareWithdraw;
  static readonly SubmitTransaction: tradingSubmitTransaction;
  static readonly PrepareProposal: tradingPrepareProposal;
  static readonly PrepareVote: tradingPrepareVote;
  static readonly PropagateChainEvent: tradingPropagateChainEvent;
  static readonly PrepareLiquidityProvision: tradingPrepareLiquidityProvision;
}

type trading_dataMarketAccounts = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.MarketAccountsRequest;
  readonly responseType: typeof proto_api_trading_pb.MarketAccountsResponse;
};

type trading_dataPartyAccounts = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PartyAccountsRequest;
  readonly responseType: typeof proto_api_trading_pb.PartyAccountsResponse;
};

type trading_dataFeeInfrastructureAccounts = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.FeeInfrastructureAccountsRequest;
  readonly responseType: typeof proto_api_trading_pb.FeeInfrastructureAccountsResponse;
};

type trading_dataCandles = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.CandlesRequest;
  readonly responseType: typeof proto_api_trading_pb.CandlesResponse;
};

type trading_dataMarketDataByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.MarketDataByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.MarketDataByIDResponse;
};

type trading_dataMarketsData = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_api_trading_pb.MarketsDataResponse;
};

type trading_dataMarketByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.MarketByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.MarketByIDResponse;
};

type trading_dataMarketDepth = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.MarketDepthRequest;
  readonly responseType: typeof proto_api_trading_pb.MarketDepthResponse;
};

type trading_dataMarkets = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_api_trading_pb.MarketsResponse;
};

type trading_dataOrderByMarketAndID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrderByMarketAndIdRequest;
  readonly responseType: typeof proto_api_trading_pb.OrderByMarketAndIdResponse;
};

type trading_dataOrderByReference = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrderByReferenceRequest;
  readonly responseType: typeof proto_api_trading_pb.OrderByReferenceResponse;
};

type trading_dataOrdersByMarket = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrdersByMarketRequest;
  readonly responseType: typeof proto_api_trading_pb.OrdersByMarketResponse;
};

type trading_dataOrdersByParty = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrdersByPartyRequest;
  readonly responseType: typeof proto_api_trading_pb.OrdersByPartyResponse;
};

type trading_dataOrderByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrderByIDRequest;
  readonly responseType: typeof proto_vega_pb.Order;
};

type trading_dataOrderVersionsByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.OrderVersionsByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.OrderVersionsResponse;
};

type trading_dataMarginLevels = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.MarginLevelsRequest;
  readonly responseType: typeof proto_api_trading_pb.MarginLevelsResponse;
};

type trading_dataParties = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_api_trading_pb.PartiesResponse;
};

type trading_dataPartyByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PartyByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.PartyByIDResponse;
};

type trading_dataPositionsByParty = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.PositionsByPartyRequest;
  readonly responseType: typeof proto_api_trading_pb.PositionsByPartyResponse;
};

type trading_dataLastTrade = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.LastTradeRequest;
  readonly responseType: typeof proto_api_trading_pb.LastTradeResponse;
};

type trading_dataTradesByMarket = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.TradesByMarketRequest;
  readonly responseType: typeof proto_api_trading_pb.TradesByMarketResponse;
};

type trading_dataTradesByOrder = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.TradesByOrderRequest;
  readonly responseType: typeof proto_api_trading_pb.TradesByOrderResponse;
};

type trading_dataTradesByParty = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.TradesByPartyRequest;
  readonly responseType: typeof proto_api_trading_pb.TradesByPartyResponse;
};

type trading_dataGetProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetProposalsRequest;
  readonly responseType: typeof proto_api_trading_pb.GetProposalsResponse;
};

type trading_dataGetProposalsByParty = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetProposalsByPartyRequest;
  readonly responseType: typeof proto_api_trading_pb.GetProposalsByPartyResponse;
};

type trading_dataGetVotesByParty = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetVotesByPartyRequest;
  readonly responseType: typeof proto_api_trading_pb.GetVotesByPartyResponse;
};

type trading_dataGetNewMarketProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetNewMarketProposalsRequest;
  readonly responseType: typeof proto_api_trading_pb.GetNewMarketProposalsResponse;
};

type trading_dataGetUpdateMarketProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetUpdateMarketProposalsRequest;
  readonly responseType: typeof proto_api_trading_pb.GetUpdateMarketProposalsResponse;
};

type trading_dataGetNetworkParametersProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetNetworkParametersProposalsRequest;
  readonly responseType: typeof proto_api_trading_pb.GetNetworkParametersProposalsResponse;
};

type trading_dataGetNewAssetProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetNewAssetProposalsRequest;
  readonly responseType: typeof proto_api_trading_pb.GetNewAssetProposalsResponse;
};

type trading_dataGetProposalByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetProposalByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.GetProposalByIDResponse;
};

type trading_dataGetProposalByReference = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetProposalByReferenceRequest;
  readonly responseType: typeof proto_api_trading_pb.GetProposalByReferenceResponse;
};

type trading_dataObserveGovernance = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_governance_pb.GovernanceData;
};

type trading_dataObservePartyProposals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.ObservePartyProposalsRequest;
  readonly responseType: typeof proto_governance_pb.GovernanceData;
};

type trading_dataObservePartyVotes = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.ObservePartyVotesRequest;
  readonly responseType: typeof proto_governance_pb.Vote;
};

type trading_dataObserveProposalVotes = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.ObserveProposalVotesRequest;
  readonly responseType: typeof proto_governance_pb.Vote;
};

type trading_dataObserveEventBus = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.ObserveEventsRequest;
  readonly responseType: typeof proto_api_trading_pb.ObserveEventsResponse;
};

type trading_dataStatistics = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_vega_pb.Statistics;
};

type trading_dataGetVegaTime = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_api_trading_pb.VegaTimeResponse;
};

type trading_dataAccountsSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.AccountsSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.Account;
};

type trading_dataCandlesSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.CandlesSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.Candle;
};

type trading_dataMarginLevelsSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.MarginLevelsSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.MarginLevels;
};

type trading_dataMarketDepthSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.MarketDepthSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.MarketDepth;
};

type trading_dataMarketDepthUpdatesSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.MarketDepthUpdatesSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.MarketDepthUpdate;
};

type trading_dataMarketsDataSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.MarketsDataSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.MarketData;
};

type trading_dataOrdersSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.OrdersSubscribeRequest;
  readonly responseType: typeof proto_api_trading_pb.OrdersStream;
};

type trading_dataPositionsSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.PositionsSubscribeRequest;
  readonly responseType: typeof proto_vega_pb.Position;
};

type trading_dataTradesSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_api_trading_pb.TradesSubscribeRequest;
  readonly responseType: typeof proto_api_trading_pb.TradesStream;
};

type trading_dataTransferResponsesSubscribe = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof proto_vega_pb.TransferResponse;
};

type trading_dataGetNodeSignaturesAggregate = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.GetNodeSignaturesAggregateRequest;
  readonly responseType: typeof proto_api_trading_pb.GetNodeSignaturesAggregateResponse;
};

type trading_dataAssetByID = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.AssetByIDRequest;
  readonly responseType: typeof proto_api_trading_pb.AssetByIDResponse;
};

type trading_dataAssets = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.AssetsRequest;
  readonly responseType: typeof proto_api_trading_pb.AssetsResponse;
};

type trading_dataEstimateFee = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.EstimateFeeRequest;
  readonly responseType: typeof proto_api_trading_pb.EstimateFeeResponse;
};

type trading_dataEstimateMargin = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.EstimateMarginRequest;
  readonly responseType: typeof proto_api_trading_pb.EstimateMarginResponse;
};

type trading_dataERC20WithdrawalApproval = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.ERC20WithdrawalApprovalRequest;
  readonly responseType: typeof proto_api_trading_pb.ERC20WithdrawalApprovalResponse;
};

type trading_dataWithdrawal = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.WithdrawalRequest;
  readonly responseType: typeof proto_api_trading_pb.WithdrawalResponse;
};

type trading_dataWithdrawals = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.WithdrawalsRequest;
  readonly responseType: typeof proto_api_trading_pb.WithdrawalsResponse;
};

type trading_dataDeposit = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.DepositRequest;
  readonly responseType: typeof proto_api_trading_pb.DepositResponse;
};

type trading_dataDeposits = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.DepositsRequest;
  readonly responseType: typeof proto_api_trading_pb.DepositsResponse;
};

type trading_dataNetworkParameters = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.NetworkParametersRequest;
  readonly responseType: typeof proto_api_trading_pb.NetworkParametersResponse;
};

type trading_dataLiquidityProvisions = {
  readonly methodName: string;
  readonly service: typeof trading_data;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_api_trading_pb.LiquidityProvisionsRequest;
  readonly responseType: typeof proto_api_trading_pb.LiquidityProvisionsResponse;
};

export class trading_data {
  static readonly serviceName: string;
  static readonly MarketAccounts: trading_dataMarketAccounts;
  static readonly PartyAccounts: trading_dataPartyAccounts;
  static readonly FeeInfrastructureAccounts: trading_dataFeeInfrastructureAccounts;
  static readonly Candles: trading_dataCandles;
  static readonly MarketDataByID: trading_dataMarketDataByID;
  static readonly MarketsData: trading_dataMarketsData;
  static readonly MarketByID: trading_dataMarketByID;
  static readonly MarketDepth: trading_dataMarketDepth;
  static readonly Markets: trading_dataMarkets;
  static readonly OrderByMarketAndID: trading_dataOrderByMarketAndID;
  static readonly OrderByReference: trading_dataOrderByReference;
  static readonly OrdersByMarket: trading_dataOrdersByMarket;
  static readonly OrdersByParty: trading_dataOrdersByParty;
  static readonly OrderByID: trading_dataOrderByID;
  static readonly OrderVersionsByID: trading_dataOrderVersionsByID;
  static readonly MarginLevels: trading_dataMarginLevels;
  static readonly Parties: trading_dataParties;
  static readonly PartyByID: trading_dataPartyByID;
  static readonly PositionsByParty: trading_dataPositionsByParty;
  static readonly LastTrade: trading_dataLastTrade;
  static readonly TradesByMarket: trading_dataTradesByMarket;
  static readonly TradesByOrder: trading_dataTradesByOrder;
  static readonly TradesByParty: trading_dataTradesByParty;
  static readonly GetProposals: trading_dataGetProposals;
  static readonly GetProposalsByParty: trading_dataGetProposalsByParty;
  static readonly GetVotesByParty: trading_dataGetVotesByParty;
  static readonly GetNewMarketProposals: trading_dataGetNewMarketProposals;
  static readonly GetUpdateMarketProposals: trading_dataGetUpdateMarketProposals;
  static readonly GetNetworkParametersProposals: trading_dataGetNetworkParametersProposals;
  static readonly GetNewAssetProposals: trading_dataGetNewAssetProposals;
  static readonly GetProposalByID: trading_dataGetProposalByID;
  static readonly GetProposalByReference: trading_dataGetProposalByReference;
  static readonly ObserveGovernance: trading_dataObserveGovernance;
  static readonly ObservePartyProposals: trading_dataObservePartyProposals;
  static readonly ObservePartyVotes: trading_dataObservePartyVotes;
  static readonly ObserveProposalVotes: trading_dataObserveProposalVotes;
  static readonly ObserveEventBus: trading_dataObserveEventBus;
  static readonly Statistics: trading_dataStatistics;
  static readonly GetVegaTime: trading_dataGetVegaTime;
  static readonly AccountsSubscribe: trading_dataAccountsSubscribe;
  static readonly CandlesSubscribe: trading_dataCandlesSubscribe;
  static readonly MarginLevelsSubscribe: trading_dataMarginLevelsSubscribe;
  static readonly MarketDepthSubscribe: trading_dataMarketDepthSubscribe;
  static readonly MarketDepthUpdatesSubscribe: trading_dataMarketDepthUpdatesSubscribe;
  static readonly MarketsDataSubscribe: trading_dataMarketsDataSubscribe;
  static readonly OrdersSubscribe: trading_dataOrdersSubscribe;
  static readonly PositionsSubscribe: trading_dataPositionsSubscribe;
  static readonly TradesSubscribe: trading_dataTradesSubscribe;
  static readonly TransferResponsesSubscribe: trading_dataTransferResponsesSubscribe;
  static readonly GetNodeSignaturesAggregate: trading_dataGetNodeSignaturesAggregate;
  static readonly AssetByID: trading_dataAssetByID;
  static readonly Assets: trading_dataAssets;
  static readonly EstimateFee: trading_dataEstimateFee;
  static readonly EstimateMargin: trading_dataEstimateMargin;
  static readonly ERC20WithdrawalApproval: trading_dataERC20WithdrawalApproval;
  static readonly Withdrawal: trading_dataWithdrawal;
  static readonly Withdrawals: trading_dataWithdrawals;
  static readonly Deposit: trading_dataDeposit;
  static readonly Deposits: trading_dataDeposits;
  static readonly NetworkParameters: trading_dataNetworkParameters;
  static readonly LiquidityProvisions: trading_dataLiquidityProvisions;
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

export class tradingClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  prepareSubmitOrder(
    requestMessage: proto_api_trading_pb.SubmitOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareSubmitOrderResponse|null) => void
  ): UnaryResponse;
  prepareSubmitOrder(
    requestMessage: proto_api_trading_pb.SubmitOrderRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareSubmitOrderResponse|null) => void
  ): UnaryResponse;
  prepareCancelOrder(
    requestMessage: proto_api_trading_pb.CancelOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareCancelOrderResponse|null) => void
  ): UnaryResponse;
  prepareCancelOrder(
    requestMessage: proto_api_trading_pb.CancelOrderRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareCancelOrderResponse|null) => void
  ): UnaryResponse;
  prepareAmendOrder(
    requestMessage: proto_api_trading_pb.AmendOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareAmendOrderResponse|null) => void
  ): UnaryResponse;
  prepareAmendOrder(
    requestMessage: proto_api_trading_pb.AmendOrderRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareAmendOrderResponse|null) => void
  ): UnaryResponse;
  prepareWithdraw(
    requestMessage: proto_api_trading_pb.PrepareWithdrawRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareWithdrawResponse|null) => void
  ): UnaryResponse;
  prepareWithdraw(
    requestMessage: proto_api_trading_pb.PrepareWithdrawRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareWithdrawResponse|null) => void
  ): UnaryResponse;
  submitTransaction(
    requestMessage: proto_api_trading_pb.SubmitTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.SubmitTransactionResponse|null) => void
  ): UnaryResponse;
  submitTransaction(
    requestMessage: proto_api_trading_pb.SubmitTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.SubmitTransactionResponse|null) => void
  ): UnaryResponse;
  prepareProposal(
    requestMessage: proto_api_trading_pb.PrepareProposalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareProposalResponse|null) => void
  ): UnaryResponse;
  prepareProposal(
    requestMessage: proto_api_trading_pb.PrepareProposalRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareProposalResponse|null) => void
  ): UnaryResponse;
  prepareVote(
    requestMessage: proto_api_trading_pb.PrepareVoteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareVoteResponse|null) => void
  ): UnaryResponse;
  prepareVote(
    requestMessage: proto_api_trading_pb.PrepareVoteRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareVoteResponse|null) => void
  ): UnaryResponse;
  propagateChainEvent(
    requestMessage: proto_api_trading_pb.PropagateChainEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PropagateChainEventResponse|null) => void
  ): UnaryResponse;
  propagateChainEvent(
    requestMessage: proto_api_trading_pb.PropagateChainEventRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PropagateChainEventResponse|null) => void
  ): UnaryResponse;
  prepareLiquidityProvision(
    requestMessage: proto_api_trading_pb.PrepareLiquidityProvisionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareLiquidityProvisionResponse|null) => void
  ): UnaryResponse;
  prepareLiquidityProvision(
    requestMessage: proto_api_trading_pb.PrepareLiquidityProvisionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PrepareLiquidityProvisionResponse|null) => void
  ): UnaryResponse;
}

export class trading_dataClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  marketAccounts(
    requestMessage: proto_api_trading_pb.MarketAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketAccountsResponse|null) => void
  ): UnaryResponse;
  marketAccounts(
    requestMessage: proto_api_trading_pb.MarketAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketAccountsResponse|null) => void
  ): UnaryResponse;
  partyAccounts(
    requestMessage: proto_api_trading_pb.PartyAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartyAccountsResponse|null) => void
  ): UnaryResponse;
  partyAccounts(
    requestMessage: proto_api_trading_pb.PartyAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartyAccountsResponse|null) => void
  ): UnaryResponse;
  feeInfrastructureAccounts(
    requestMessage: proto_api_trading_pb.FeeInfrastructureAccountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.FeeInfrastructureAccountsResponse|null) => void
  ): UnaryResponse;
  feeInfrastructureAccounts(
    requestMessage: proto_api_trading_pb.FeeInfrastructureAccountsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.FeeInfrastructureAccountsResponse|null) => void
  ): UnaryResponse;
  candles(
    requestMessage: proto_api_trading_pb.CandlesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.CandlesResponse|null) => void
  ): UnaryResponse;
  candles(
    requestMessage: proto_api_trading_pb.CandlesRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.CandlesResponse|null) => void
  ): UnaryResponse;
  marketDataByID(
    requestMessage: proto_api_trading_pb.MarketDataByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketDataByIDResponse|null) => void
  ): UnaryResponse;
  marketDataByID(
    requestMessage: proto_api_trading_pb.MarketDataByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketDataByIDResponse|null) => void
  ): UnaryResponse;
  marketsData(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketsDataResponse|null) => void
  ): UnaryResponse;
  marketsData(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketsDataResponse|null) => void
  ): UnaryResponse;
  marketByID(
    requestMessage: proto_api_trading_pb.MarketByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketByIDResponse|null) => void
  ): UnaryResponse;
  marketByID(
    requestMessage: proto_api_trading_pb.MarketByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketByIDResponse|null) => void
  ): UnaryResponse;
  marketDepth(
    requestMessage: proto_api_trading_pb.MarketDepthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketDepthResponse|null) => void
  ): UnaryResponse;
  marketDepth(
    requestMessage: proto_api_trading_pb.MarketDepthRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketDepthResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  orderByMarketAndID(
    requestMessage: proto_api_trading_pb.OrderByMarketAndIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderByMarketAndIdResponse|null) => void
  ): UnaryResponse;
  orderByMarketAndID(
    requestMessage: proto_api_trading_pb.OrderByMarketAndIdRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderByMarketAndIdResponse|null) => void
  ): UnaryResponse;
  orderByReference(
    requestMessage: proto_api_trading_pb.OrderByReferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderByReferenceResponse|null) => void
  ): UnaryResponse;
  orderByReference(
    requestMessage: proto_api_trading_pb.OrderByReferenceRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderByReferenceResponse|null) => void
  ): UnaryResponse;
  ordersByMarket(
    requestMessage: proto_api_trading_pb.OrdersByMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrdersByMarketResponse|null) => void
  ): UnaryResponse;
  ordersByMarket(
    requestMessage: proto_api_trading_pb.OrdersByMarketRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrdersByMarketResponse|null) => void
  ): UnaryResponse;
  ordersByParty(
    requestMessage: proto_api_trading_pb.OrdersByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrdersByPartyResponse|null) => void
  ): UnaryResponse;
  ordersByParty(
    requestMessage: proto_api_trading_pb.OrdersByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrdersByPartyResponse|null) => void
  ): UnaryResponse;
  orderByID(
    requestMessage: proto_api_trading_pb.OrderByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_vega_pb.Order|null) => void
  ): UnaryResponse;
  orderByID(
    requestMessage: proto_api_trading_pb.OrderByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_vega_pb.Order|null) => void
  ): UnaryResponse;
  orderVersionsByID(
    requestMessage: proto_api_trading_pb.OrderVersionsByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderVersionsResponse|null) => void
  ): UnaryResponse;
  orderVersionsByID(
    requestMessage: proto_api_trading_pb.OrderVersionsByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.OrderVersionsResponse|null) => void
  ): UnaryResponse;
  marginLevels(
    requestMessage: proto_api_trading_pb.MarginLevelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarginLevelsResponse|null) => void
  ): UnaryResponse;
  marginLevels(
    requestMessage: proto_api_trading_pb.MarginLevelsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.MarginLevelsResponse|null) => void
  ): UnaryResponse;
  parties(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartiesResponse|null) => void
  ): UnaryResponse;
  parties(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartiesResponse|null) => void
  ): UnaryResponse;
  partyByID(
    requestMessage: proto_api_trading_pb.PartyByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartyByIDResponse|null) => void
  ): UnaryResponse;
  partyByID(
    requestMessage: proto_api_trading_pb.PartyByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PartyByIDResponse|null) => void
  ): UnaryResponse;
  positionsByParty(
    requestMessage: proto_api_trading_pb.PositionsByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PositionsByPartyResponse|null) => void
  ): UnaryResponse;
  positionsByParty(
    requestMessage: proto_api_trading_pb.PositionsByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.PositionsByPartyResponse|null) => void
  ): UnaryResponse;
  lastTrade(
    requestMessage: proto_api_trading_pb.LastTradeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.LastTradeResponse|null) => void
  ): UnaryResponse;
  lastTrade(
    requestMessage: proto_api_trading_pb.LastTradeRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.LastTradeResponse|null) => void
  ): UnaryResponse;
  tradesByMarket(
    requestMessage: proto_api_trading_pb.TradesByMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByMarketResponse|null) => void
  ): UnaryResponse;
  tradesByMarket(
    requestMessage: proto_api_trading_pb.TradesByMarketRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByMarketResponse|null) => void
  ): UnaryResponse;
  tradesByOrder(
    requestMessage: proto_api_trading_pb.TradesByOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByOrderResponse|null) => void
  ): UnaryResponse;
  tradesByOrder(
    requestMessage: proto_api_trading_pb.TradesByOrderRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByOrderResponse|null) => void
  ): UnaryResponse;
  tradesByParty(
    requestMessage: proto_api_trading_pb.TradesByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByPartyResponse|null) => void
  ): UnaryResponse;
  tradesByParty(
    requestMessage: proto_api_trading_pb.TradesByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.TradesByPartyResponse|null) => void
  ): UnaryResponse;
  getProposals(
    requestMessage: proto_api_trading_pb.GetProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposals(
    requestMessage: proto_api_trading_pb.GetProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposalsByParty(
    requestMessage: proto_api_trading_pb.GetProposalsByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalsByPartyResponse|null) => void
  ): UnaryResponse;
  getProposalsByParty(
    requestMessage: proto_api_trading_pb.GetProposalsByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalsByPartyResponse|null) => void
  ): UnaryResponse;
  getVotesByParty(
    requestMessage: proto_api_trading_pb.GetVotesByPartyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetVotesByPartyResponse|null) => void
  ): UnaryResponse;
  getVotesByParty(
    requestMessage: proto_api_trading_pb.GetVotesByPartyRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetVotesByPartyResponse|null) => void
  ): UnaryResponse;
  getNewMarketProposals(
    requestMessage: proto_api_trading_pb.GetNewMarketProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNewMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getNewMarketProposals(
    requestMessage: proto_api_trading_pb.GetNewMarketProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNewMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getUpdateMarketProposals(
    requestMessage: proto_api_trading_pb.GetUpdateMarketProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetUpdateMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getUpdateMarketProposals(
    requestMessage: proto_api_trading_pb.GetUpdateMarketProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetUpdateMarketProposalsResponse|null) => void
  ): UnaryResponse;
  getNetworkParametersProposals(
    requestMessage: proto_api_trading_pb.GetNetworkParametersProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNetworkParametersProposalsResponse|null) => void
  ): UnaryResponse;
  getNetworkParametersProposals(
    requestMessage: proto_api_trading_pb.GetNetworkParametersProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNetworkParametersProposalsResponse|null) => void
  ): UnaryResponse;
  getNewAssetProposals(
    requestMessage: proto_api_trading_pb.GetNewAssetProposalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNewAssetProposalsResponse|null) => void
  ): UnaryResponse;
  getNewAssetProposals(
    requestMessage: proto_api_trading_pb.GetNewAssetProposalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNewAssetProposalsResponse|null) => void
  ): UnaryResponse;
  getProposalByID(
    requestMessage: proto_api_trading_pb.GetProposalByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalByIDResponse|null) => void
  ): UnaryResponse;
  getProposalByID(
    requestMessage: proto_api_trading_pb.GetProposalByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalByIDResponse|null) => void
  ): UnaryResponse;
  getProposalByReference(
    requestMessage: proto_api_trading_pb.GetProposalByReferenceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalByReferenceResponse|null) => void
  ): UnaryResponse;
  getProposalByReference(
    requestMessage: proto_api_trading_pb.GetProposalByReferenceRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetProposalByReferenceResponse|null) => void
  ): UnaryResponse;
  observeGovernance(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<proto_governance_pb.GovernanceData>;
  observePartyProposals(requestMessage: proto_api_trading_pb.ObservePartyProposalsRequest, metadata?: grpc.Metadata): ResponseStream<proto_governance_pb.GovernanceData>;
  observePartyVotes(requestMessage: proto_api_trading_pb.ObservePartyVotesRequest, metadata?: grpc.Metadata): ResponseStream<proto_governance_pb.Vote>;
  observeProposalVotes(requestMessage: proto_api_trading_pb.ObserveProposalVotesRequest, metadata?: grpc.Metadata): ResponseStream<proto_governance_pb.Vote>;
  observeEventBus(metadata?: grpc.Metadata): BidirectionalStream<proto_api_trading_pb.ObserveEventsRequest, proto_api_trading_pb.ObserveEventsResponse>;
  statistics(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_vega_pb.Statistics|null) => void
  ): UnaryResponse;
  statistics(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: proto_vega_pb.Statistics|null) => void
  ): UnaryResponse;
  getVegaTime(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.VegaTimeResponse|null) => void
  ): UnaryResponse;
  getVegaTime(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.VegaTimeResponse|null) => void
  ): UnaryResponse;
  accountsSubscribe(requestMessage: proto_api_trading_pb.AccountsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.Account>;
  candlesSubscribe(requestMessage: proto_api_trading_pb.CandlesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.Candle>;
  marginLevelsSubscribe(requestMessage: proto_api_trading_pb.MarginLevelsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.MarginLevels>;
  marketDepthSubscribe(requestMessage: proto_api_trading_pb.MarketDepthSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.MarketDepth>;
  marketDepthUpdatesSubscribe(requestMessage: proto_api_trading_pb.MarketDepthUpdatesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.MarketDepthUpdate>;
  marketsDataSubscribe(requestMessage: proto_api_trading_pb.MarketsDataSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.MarketData>;
  ordersSubscribe(requestMessage: proto_api_trading_pb.OrdersSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_api_trading_pb.OrdersStream>;
  positionsSubscribe(requestMessage: proto_api_trading_pb.PositionsSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.Position>;
  tradesSubscribe(requestMessage: proto_api_trading_pb.TradesSubscribeRequest, metadata?: grpc.Metadata): ResponseStream<proto_api_trading_pb.TradesStream>;
  transferResponsesSubscribe(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<proto_vega_pb.TransferResponse>;
  getNodeSignaturesAggregate(
    requestMessage: proto_api_trading_pb.GetNodeSignaturesAggregateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNodeSignaturesAggregateResponse|null) => void
  ): UnaryResponse;
  getNodeSignaturesAggregate(
    requestMessage: proto_api_trading_pb.GetNodeSignaturesAggregateRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.GetNodeSignaturesAggregateResponse|null) => void
  ): UnaryResponse;
  assetByID(
    requestMessage: proto_api_trading_pb.AssetByIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.AssetByIDResponse|null) => void
  ): UnaryResponse;
  assetByID(
    requestMessage: proto_api_trading_pb.AssetByIDRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.AssetByIDResponse|null) => void
  ): UnaryResponse;
  assets(
    requestMessage: proto_api_trading_pb.AssetsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.AssetsResponse|null) => void
  ): UnaryResponse;
  assets(
    requestMessage: proto_api_trading_pb.AssetsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.AssetsResponse|null) => void
  ): UnaryResponse;
  estimateFee(
    requestMessage: proto_api_trading_pb.EstimateFeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.EstimateFeeResponse|null) => void
  ): UnaryResponse;
  estimateFee(
    requestMessage: proto_api_trading_pb.EstimateFeeRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.EstimateFeeResponse|null) => void
  ): UnaryResponse;
  estimateMargin(
    requestMessage: proto_api_trading_pb.EstimateMarginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.EstimateMarginResponse|null) => void
  ): UnaryResponse;
  estimateMargin(
    requestMessage: proto_api_trading_pb.EstimateMarginRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.EstimateMarginResponse|null) => void
  ): UnaryResponse;
  eRC20WithdrawalApproval(
    requestMessage: proto_api_trading_pb.ERC20WithdrawalApprovalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.ERC20WithdrawalApprovalResponse|null) => void
  ): UnaryResponse;
  eRC20WithdrawalApproval(
    requestMessage: proto_api_trading_pb.ERC20WithdrawalApprovalRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.ERC20WithdrawalApprovalResponse|null) => void
  ): UnaryResponse;
  withdrawal(
    requestMessage: proto_api_trading_pb.WithdrawalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.WithdrawalResponse|null) => void
  ): UnaryResponse;
  withdrawal(
    requestMessage: proto_api_trading_pb.WithdrawalRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.WithdrawalResponse|null) => void
  ): UnaryResponse;
  withdrawals(
    requestMessage: proto_api_trading_pb.WithdrawalsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.WithdrawalsResponse|null) => void
  ): UnaryResponse;
  withdrawals(
    requestMessage: proto_api_trading_pb.WithdrawalsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.WithdrawalsResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: proto_api_trading_pb.DepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.DepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: proto_api_trading_pb.DepositRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.DepositResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: proto_api_trading_pb.DepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.DepositsResponse|null) => void
  ): UnaryResponse;
  deposits(
    requestMessage: proto_api_trading_pb.DepositsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.DepositsResponse|null) => void
  ): UnaryResponse;
  networkParameters(
    requestMessage: proto_api_trading_pb.NetworkParametersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.NetworkParametersResponse|null) => void
  ): UnaryResponse;
  networkParameters(
    requestMessage: proto_api_trading_pb.NetworkParametersRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.NetworkParametersResponse|null) => void
  ): UnaryResponse;
  liquidityProvisions(
    requestMessage: proto_api_trading_pb.LiquidityProvisionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.LiquidityProvisionsResponse|null) => void
  ): UnaryResponse;
  liquidityProvisions(
    requestMessage: proto_api_trading_pb.LiquidityProvisionsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_api_trading_pb.LiquidityProvisionsResponse|null) => void
  ): UnaryResponse;
}

