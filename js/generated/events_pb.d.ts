// package: vega
// file: events.proto

import * as jspb from "google-protobuf";
import * as markets_pb from "./markets_pb";
import * as assets_pb from "./assets_pb";
import * as governance_pb from "./governance_pb";
import * as vega_pb from "./vega_pb";

export class MarketEvent extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPayload(): string;
  setPayload(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MarketEvent): MarketEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketEvent;
  static deserializeBinaryFromReader(message: MarketEvent, reader: jspb.BinaryReader): MarketEvent;
}

export namespace MarketEvent {
  export type AsObject = {
    marketId: string,
    payload: string,
  }
}

export class TxErrorEvent extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getErrMsg(): string;
  setErrMsg(value: string): void;

  hasOrderSubmission(): boolean;
  clearOrderSubmission(): void;
  getOrderSubmission(): vega_pb.OrderSubmission | undefined;
  setOrderSubmission(value?: vega_pb.OrderSubmission): void;

  hasOrderAmendment(): boolean;
  clearOrderAmendment(): void;
  getOrderAmendment(): vega_pb.OrderAmendment | undefined;
  setOrderAmendment(value?: vega_pb.OrderAmendment): void;

  hasOrderCancellation(): boolean;
  clearOrderCancellation(): void;
  getOrderCancellation(): vega_pb.OrderCancellation | undefined;
  setOrderCancellation(value?: vega_pb.OrderCancellation): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): governance_pb.Proposal | undefined;
  setProposal(value?: governance_pb.Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): void;

  getTransactionCase(): TxErrorEvent.TransactionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TxErrorEvent): TxErrorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxErrorEvent;
  static deserializeBinaryFromReader(message: TxErrorEvent, reader: jspb.BinaryReader): TxErrorEvent;
}

export namespace TxErrorEvent {
  export type AsObject = {
    partyId: string,
    errMsg: string,
    orderSubmission?: vega_pb.OrderSubmission.AsObject,
    orderAmendment?: vega_pb.OrderAmendment.AsObject,
    orderCancellation?: vega_pb.OrderCancellation.AsObject,
    proposal?: governance_pb.Proposal.AsObject,
    vote?: governance_pb.Vote.AsObject,
  }

  export enum TransactionCase {
    TRANSACTION_NOT_SET = 0,
    ORDER_SUBMISSION = 101,
    ORDER_AMENDMENT = 102,
    ORDER_CANCELLATION = 103,
    PROPOSAL = 104,
    VOTE = 105,
  }
}

export class TimeUpdate extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: TimeUpdate): TimeUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeUpdate;
  static deserializeBinaryFromReader(message: TimeUpdate, reader: jspb.BinaryReader): TimeUpdate;
}

export namespace TimeUpdate {
  export type AsObject = {
    timestamp: number,
  }
}

export class TransferResponses extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<vega_pb.TransferResponse>;
  setResponsesList(value: Array<vega_pb.TransferResponse>): void;
  addResponses(value?: vega_pb.TransferResponse, index?: number): vega_pb.TransferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponses.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponses): TransferResponses.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponses;
  static deserializeBinaryFromReader(message: TransferResponses, reader: jspb.BinaryReader): TransferResponses;
}

export namespace TransferResponses {
  export type AsObject = {
    responsesList: Array<vega_pb.TransferResponse.AsObject>,
  }
}

export class PositionResolution extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getDistressed(): number;
  setDistressed(value: number): void;

  getClosed(): number;
  setClosed(value: number): void;

  getMarkPrice(): number;
  setMarkPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionResolution.AsObject;
  static toObject(includeInstance: boolean, msg: PositionResolution): PositionResolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionResolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionResolution;
  static deserializeBinaryFromReader(message: PositionResolution, reader: jspb.BinaryReader): PositionResolution;
}

export namespace PositionResolution {
  export type AsObject = {
    marketId: string,
    distressed: number,
    closed: number,
    markPrice: number,
  }
}

export class LossSocialization extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LossSocialization.AsObject;
  static toObject(includeInstance: boolean, msg: LossSocialization): LossSocialization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LossSocialization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LossSocialization;
  static deserializeBinaryFromReader(message: LossSocialization, reader: jspb.BinaryReader): LossSocialization;
}

export namespace LossSocialization {
  export type AsObject = {
    marketId: string,
    partyId: string,
    amount: number,
  }
}

export class TradeSettlement extends jspb.Message {
  getSize(): number;
  setSize(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeSettlement.AsObject;
  static toObject(includeInstance: boolean, msg: TradeSettlement): TradeSettlement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeSettlement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeSettlement;
  static deserializeBinaryFromReader(message: TradeSettlement, reader: jspb.BinaryReader): TradeSettlement;
}

export namespace TradeSettlement {
  export type AsObject = {
    size: number,
    price: number,
  }
}

export class SettlePosition extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  clearTradeSettlementsList(): void;
  getTradeSettlementsList(): Array<TradeSettlement>;
  setTradeSettlementsList(value: Array<TradeSettlement>): void;
  addTradeSettlements(value?: TradeSettlement, index?: number): TradeSettlement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettlePosition.AsObject;
  static toObject(includeInstance: boolean, msg: SettlePosition): SettlePosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettlePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettlePosition;
  static deserializeBinaryFromReader(message: SettlePosition, reader: jspb.BinaryReader): SettlePosition;
}

export namespace SettlePosition {
  export type AsObject = {
    marketId: string,
    partyId: string,
    price: number,
    tradeSettlementsList: Array<TradeSettlement.AsObject>,
  }
}

export class SettleDistressed extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getMargin(): number;
  setMargin(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleDistressed.AsObject;
  static toObject(includeInstance: boolean, msg: SettleDistressed): SettleDistressed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleDistressed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleDistressed;
  static deserializeBinaryFromReader(message: SettleDistressed, reader: jspb.BinaryReader): SettleDistressed;
}

export namespace SettleDistressed {
  export type AsObject = {
    marketId: string,
    partyId: string,
    margin: number,
    price: number,
  }
}

export class MarketTick extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketTick.AsObject;
  static toObject(includeInstance: boolean, msg: MarketTick): MarketTick.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketTick, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketTick;
  static deserializeBinaryFromReader(message: MarketTick, reader: jspb.BinaryReader): MarketTick;
}

export namespace MarketTick {
  export type AsObject = {
    id: string,
    time: number,
  }
}

export class AuctionEvent extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getOpeningAuction(): boolean;
  setOpeningAuction(value: boolean): void;

  getLeave(): boolean;
  setLeave(value: boolean): void;

  getStart(): number;
  setStart(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getTrigger(): vega_pb.AuctionTriggerMap[keyof vega_pb.AuctionTriggerMap];
  setTrigger(value: vega_pb.AuctionTriggerMap[keyof vega_pb.AuctionTriggerMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuctionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuctionEvent): AuctionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuctionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuctionEvent;
  static deserializeBinaryFromReader(message: AuctionEvent, reader: jspb.BinaryReader): AuctionEvent;
}

export namespace AuctionEvent {
  export type AsObject = {
    marketId: string,
    openingAuction: boolean,
    leave: boolean,
    start: number,
    end: number,
    trigger: vega_pb.AuctionTriggerMap[keyof vega_pb.AuctionTriggerMap],
  }
}

export class BusEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBlock(): string;
  setBlock(value: string): void;

  getType(): BusEventTypeMap[keyof BusEventTypeMap];
  setType(value: BusEventTypeMap[keyof BusEventTypeMap]): void;

  hasTimeUpdate(): boolean;
  clearTimeUpdate(): void;
  getTimeUpdate(): TimeUpdate | undefined;
  setTimeUpdate(value?: TimeUpdate): void;

  hasTransferResponses(): boolean;
  clearTransferResponses(): void;
  getTransferResponses(): TransferResponses | undefined;
  setTransferResponses(value?: TransferResponses): void;

  hasPositionResolution(): boolean;
  clearPositionResolution(): void;
  getPositionResolution(): PositionResolution | undefined;
  setPositionResolution(value?: PositionResolution): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): vega_pb.Account | undefined;
  setAccount(value?: vega_pb.Account): void;

  hasParty(): boolean;
  clearParty(): void;
  getParty(): vega_pb.Party | undefined;
  setParty(value?: vega_pb.Party): void;

  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): vega_pb.Trade | undefined;
  setTrade(value?: vega_pb.Trade): void;

  hasMarginLevels(): boolean;
  clearMarginLevels(): void;
  getMarginLevels(): vega_pb.MarginLevels | undefined;
  setMarginLevels(value?: vega_pb.MarginLevels): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): governance_pb.Proposal | undefined;
  setProposal(value?: governance_pb.Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): void;

  hasMarketData(): boolean;
  clearMarketData(): void;
  getMarketData(): vega_pb.MarketData | undefined;
  setMarketData(value?: vega_pb.MarketData): void;

  hasNodeSignature(): boolean;
  clearNodeSignature(): void;
  getNodeSignature(): vega_pb.NodeSignature | undefined;
  setNodeSignature(value?: vega_pb.NodeSignature): void;

  hasLossSocialization(): boolean;
  clearLossSocialization(): void;
  getLossSocialization(): LossSocialization | undefined;
  setLossSocialization(value?: LossSocialization): void;

  hasSettlePosition(): boolean;
  clearSettlePosition(): void;
  getSettlePosition(): SettlePosition | undefined;
  setSettlePosition(value?: SettlePosition): void;

  hasSettleDistressed(): boolean;
  clearSettleDistressed(): void;
  getSettleDistressed(): SettleDistressed | undefined;
  setSettleDistressed(value?: SettleDistressed): void;

  hasMarketCreated(): boolean;
  clearMarketCreated(): void;
  getMarketCreated(): markets_pb.Market | undefined;
  setMarketCreated(value?: markets_pb.Market): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): assets_pb.Asset | undefined;
  setAsset(value?: assets_pb.Asset): void;

  hasMarketTick(): boolean;
  clearMarketTick(): void;
  getMarketTick(): MarketTick | undefined;
  setMarketTick(value?: MarketTick): void;

  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): vega_pb.Withdrawal | undefined;
  setWithdrawal(value?: vega_pb.Withdrawal): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): vega_pb.Deposit | undefined;
  setDeposit(value?: vega_pb.Deposit): void;

  hasAuction(): boolean;
  clearAuction(): void;
  getAuction(): AuctionEvent | undefined;
  setAuction(value?: AuctionEvent): void;

  hasRiskFactor(): boolean;
  clearRiskFactor(): void;
  getRiskFactor(): vega_pb.RiskFactor | undefined;
  setRiskFactor(value?: vega_pb.RiskFactor): void;

  hasNetworkParameter(): boolean;
  clearNetworkParameter(): void;
  getNetworkParameter(): vega_pb.NetworkParameter | undefined;
  setNetworkParameter(value?: vega_pb.NetworkParameter): void;

  hasLiquidityProvision(): boolean;
  clearLiquidityProvision(): void;
  getLiquidityProvision(): vega_pb.LiquidityProvision | undefined;
  setLiquidityProvision(value?: vega_pb.LiquidityProvision): void;

  hasMarketUpdated(): boolean;
  clearMarketUpdated(): void;
  getMarketUpdated(): markets_pb.Market | undefined;
  setMarketUpdated(value?: markets_pb.Market): void;

  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): MarketEvent | undefined;
  setMarket(value?: MarketEvent): void;

  hasTxErrEvent(): boolean;
  clearTxErrEvent(): void;
  getTxErrEvent(): TxErrorEvent | undefined;
  setTxErrEvent(value?: TxErrorEvent): void;

  getEventCase(): BusEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BusEvent): BusEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusEvent;
  static deserializeBinaryFromReader(message: BusEvent, reader: jspb.BinaryReader): BusEvent;
}

export namespace BusEvent {
  export type AsObject = {
    id: string,
    block: string,
    type: BusEventTypeMap[keyof BusEventTypeMap],
    timeUpdate?: TimeUpdate.AsObject,
    transferResponses?: TransferResponses.AsObject,
    positionResolution?: PositionResolution.AsObject,
    order?: vega_pb.Order.AsObject,
    account?: vega_pb.Account.AsObject,
    party?: vega_pb.Party.AsObject,
    trade?: vega_pb.Trade.AsObject,
    marginLevels?: vega_pb.MarginLevels.AsObject,
    proposal?: governance_pb.Proposal.AsObject,
    vote?: governance_pb.Vote.AsObject,
    marketData?: vega_pb.MarketData.AsObject,
    nodeSignature?: vega_pb.NodeSignature.AsObject,
    lossSocialization?: LossSocialization.AsObject,
    settlePosition?: SettlePosition.AsObject,
    settleDistressed?: SettleDistressed.AsObject,
    marketCreated?: markets_pb.Market.AsObject,
    asset?: assets_pb.Asset.AsObject,
    marketTick?: MarketTick.AsObject,
    withdrawal?: vega_pb.Withdrawal.AsObject,
    deposit?: vega_pb.Deposit.AsObject,
    auction?: AuctionEvent.AsObject,
    riskFactor?: vega_pb.RiskFactor.AsObject,
    networkParameter?: vega_pb.NetworkParameter.AsObject,
    liquidityProvision?: vega_pb.LiquidityProvision.AsObject,
    marketUpdated?: markets_pb.Market.AsObject,
    market?: MarketEvent.AsObject,
    txErrEvent?: TxErrorEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    TIME_UPDATE = 101,
    TRANSFER_RESPONSES = 102,
    POSITION_RESOLUTION = 103,
    ORDER = 104,
    ACCOUNT = 105,
    PARTY = 106,
    TRADE = 107,
    MARGIN_LEVELS = 108,
    PROPOSAL = 109,
    VOTE = 110,
    MARKET_DATA = 111,
    NODE_SIGNATURE = 112,
    LOSS_SOCIALIZATION = 113,
    SETTLE_POSITION = 114,
    SETTLE_DISTRESSED = 115,
    MARKET_CREATED = 116,
    ASSET = 117,
    MARKET_TICK = 118,
    WITHDRAWAL = 119,
    DEPOSIT = 120,
    AUCTION = 121,
    RISK_FACTOR = 122,
    NETWORK_PARAMETER = 123,
    LIQUIDITY_PROVISION = 124,
    MARKET_UPDATED = 125,
    MARKET = 1001,
    TX_ERR_EVENT = 2001,
  }
}

export interface BusEventTypeMap {
  BUS_EVENT_TYPE_UNSPECIFIED: 0;
  BUS_EVENT_TYPE_ALL: 1;
  BUS_EVENT_TYPE_TIME_UPDATE: 2;
  BUS_EVENT_TYPE_TRANSFER_RESPONSES: 3;
  BUS_EVENT_TYPE_POSITION_RESOLUTION: 4;
  BUS_EVENT_TYPE_ORDER: 5;
  BUS_EVENT_TYPE_ACCOUNT: 6;
  BUS_EVENT_TYPE_PARTY: 7;
  BUS_EVENT_TYPE_TRADE: 8;
  BUS_EVENT_TYPE_MARGIN_LEVELS: 9;
  BUS_EVENT_TYPE_PROPOSAL: 10;
  BUS_EVENT_TYPE_VOTE: 11;
  BUS_EVENT_TYPE_MARKET_DATA: 12;
  BUS_EVENT_TYPE_NODE_SIGNATURE: 13;
  BUS_EVENT_TYPE_LOSS_SOCIALIZATION: 14;
  BUS_EVENT_TYPE_SETTLE_POSITION: 15;
  BUS_EVENT_TYPE_SETTLE_DISTRESSED: 16;
  BUS_EVENT_TYPE_MARKET_CREATED: 17;
  BUS_EVENT_TYPE_ASSET: 18;
  BUS_EVENT_TYPE_MARKET_TICK: 19;
  BUS_EVENT_TYPE_WITHDRAWAL: 20;
  BUS_EVENT_TYPE_DEPOSIT: 21;
  BUS_EVENT_TYPE_AUCTION: 22;
  BUS_EVENT_TYPE_RISK_FACTOR: 23;
  BUS_EVENT_TYPE_NETWORK_PARAMETER: 24;
  BUS_EVENT_TYPE_LIQUIDITY_PROVISION: 25;
  BUS_EVENT_TYPE_MARKET_UPDATED: 26;
  BUS_EVENT_TYPE_MARKET: 101;
  BUS_EVENT_TYPE_TX_ERROR: 201;
}

export const BusEventType: BusEventTypeMap;

