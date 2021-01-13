// package: vega
// file: events.proto

import * as jspb from "google-protobuf";
import * as markets_pb from "./markets_pb";
import * as assets_pb from "./assets_pb";
import * as governance_pb from "./governance_pb";
import * as vega_pb from "./vega_pb";

export class MarketEvent extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

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
    marketid: string,
    payload: string,
  }
}

export class TxErrorEvent extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getErrmsg(): string;
  setErrmsg(value: string): void;

  hasOrdersubmission(): boolean;
  clearOrdersubmission(): void;
  getOrdersubmission(): vega_pb.OrderSubmission | undefined;
  setOrdersubmission(value?: vega_pb.OrderSubmission): void;

  hasOrderamendment(): boolean;
  clearOrderamendment(): void;
  getOrderamendment(): vega_pb.OrderAmendment | undefined;
  setOrderamendment(value?: vega_pb.OrderAmendment): void;

  hasOrdercancellation(): boolean;
  clearOrdercancellation(): void;
  getOrdercancellation(): vega_pb.OrderCancellation | undefined;
  setOrdercancellation(value?: vega_pb.OrderCancellation): void;

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
    partyid: string,
    errmsg: string,
    ordersubmission?: vega_pb.OrderSubmission.AsObject,
    orderamendment?: vega_pb.OrderAmendment.AsObject,
    ordercancellation?: vega_pb.OrderCancellation.AsObject,
    proposal?: governance_pb.Proposal.AsObject,
    vote?: governance_pb.Vote.AsObject,
  }

  export enum TransactionCase {
    TRANSACTION_NOT_SET = 0,
    ORDERSUBMISSION = 101,
    ORDERAMENDMENT = 102,
    ORDERCANCELLATION = 103,
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
  getMarketid(): string;
  setMarketid(value: string): void;

  getDistressed(): number;
  setDistressed(value: number): void;

  getClosed(): number;
  setClosed(value: number): void;

  getMarkprice(): number;
  setMarkprice(value: number): void;

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
    marketid: string,
    distressed: number,
    closed: number,
    markprice: number,
  }
}

export class LossSocialization extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

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
    marketid: string,
    partyid: string,
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
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  clearTradesettlementsList(): void;
  getTradesettlementsList(): Array<TradeSettlement>;
  setTradesettlementsList(value: Array<TradeSettlement>): void;
  addTradesettlements(value?: TradeSettlement, index?: number): TradeSettlement;

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
    marketid: string,
    partyid: string,
    price: number,
    tradesettlementsList: Array<TradeSettlement.AsObject>,
  }
}

export class SettleDistressed extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

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
    marketid: string,
    partyid: string,
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
  getMarketid(): string;
  setMarketid(value: string): void;

  getOpeningauction(): boolean;
  setOpeningauction(value: boolean): void;

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
    marketid: string,
    openingauction: boolean,
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

  hasTimeupdate(): boolean;
  clearTimeupdate(): void;
  getTimeupdate(): TimeUpdate | undefined;
  setTimeupdate(value?: TimeUpdate): void;

  hasTransferresponses(): boolean;
  clearTransferresponses(): void;
  getTransferresponses(): TransferResponses | undefined;
  setTransferresponses(value?: TransferResponses): void;

  hasPositionresolution(): boolean;
  clearPositionresolution(): void;
  getPositionresolution(): PositionResolution | undefined;
  setPositionresolution(value?: PositionResolution): void;

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

  hasMarginlevels(): boolean;
  clearMarginlevels(): void;
  getMarginlevels(): vega_pb.MarginLevels | undefined;
  setMarginlevels(value?: vega_pb.MarginLevels): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): governance_pb.Proposal | undefined;
  setProposal(value?: governance_pb.Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): void;

  hasMarketdata(): boolean;
  clearMarketdata(): void;
  getMarketdata(): vega_pb.MarketData | undefined;
  setMarketdata(value?: vega_pb.MarketData): void;

  hasNodesignature(): boolean;
  clearNodesignature(): void;
  getNodesignature(): vega_pb.NodeSignature | undefined;
  setNodesignature(value?: vega_pb.NodeSignature): void;

  hasLosssocialization(): boolean;
  clearLosssocialization(): void;
  getLosssocialization(): LossSocialization | undefined;
  setLosssocialization(value?: LossSocialization): void;

  hasSettleposition(): boolean;
  clearSettleposition(): void;
  getSettleposition(): SettlePosition | undefined;
  setSettleposition(value?: SettlePosition): void;

  hasSettledistressed(): boolean;
  clearSettledistressed(): void;
  getSettledistressed(): SettleDistressed | undefined;
  setSettledistressed(value?: SettleDistressed): void;

  hasMarketcreated(): boolean;
  clearMarketcreated(): void;
  getMarketcreated(): markets_pb.Market | undefined;
  setMarketcreated(value?: markets_pb.Market): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): assets_pb.Asset | undefined;
  setAsset(value?: assets_pb.Asset): void;

  hasMarkettick(): boolean;
  clearMarkettick(): void;
  getMarkettick(): MarketTick | undefined;
  setMarkettick(value?: MarketTick): void;

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

  hasRiskfactor(): boolean;
  clearRiskfactor(): void;
  getRiskfactor(): vega_pb.RiskFactor | undefined;
  setRiskfactor(value?: vega_pb.RiskFactor): void;

  hasNetworkparameter(): boolean;
  clearNetworkparameter(): void;
  getNetworkparameter(): vega_pb.NetworkParameter | undefined;
  setNetworkparameter(value?: vega_pb.NetworkParameter): void;

  hasLiquidityprovision(): boolean;
  clearLiquidityprovision(): void;
  getLiquidityprovision(): vega_pb.LiquidityProvision | undefined;
  setLiquidityprovision(value?: vega_pb.LiquidityProvision): void;

  hasMarketupdated(): boolean;
  clearMarketupdated(): void;
  getMarketupdated(): markets_pb.Market | undefined;
  setMarketupdated(value?: markets_pb.Market): void;

  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): MarketEvent | undefined;
  setMarket(value?: MarketEvent): void;

  hasTxerrevent(): boolean;
  clearTxerrevent(): void;
  getTxerrevent(): TxErrorEvent | undefined;
  setTxerrevent(value?: TxErrorEvent): void;

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
    timeupdate?: TimeUpdate.AsObject,
    transferresponses?: TransferResponses.AsObject,
    positionresolution?: PositionResolution.AsObject,
    order?: vega_pb.Order.AsObject,
    account?: vega_pb.Account.AsObject,
    party?: vega_pb.Party.AsObject,
    trade?: vega_pb.Trade.AsObject,
    marginlevels?: vega_pb.MarginLevels.AsObject,
    proposal?: governance_pb.Proposal.AsObject,
    vote?: governance_pb.Vote.AsObject,
    marketdata?: vega_pb.MarketData.AsObject,
    nodesignature?: vega_pb.NodeSignature.AsObject,
    losssocialization?: LossSocialization.AsObject,
    settleposition?: SettlePosition.AsObject,
    settledistressed?: SettleDistressed.AsObject,
    marketcreated?: markets_pb.Market.AsObject,
    asset?: assets_pb.Asset.AsObject,
    markettick?: MarketTick.AsObject,
    withdrawal?: vega_pb.Withdrawal.AsObject,
    deposit?: vega_pb.Deposit.AsObject,
    auction?: AuctionEvent.AsObject,
    riskfactor?: vega_pb.RiskFactor.AsObject,
    networkparameter?: vega_pb.NetworkParameter.AsObject,
    liquidityprovision?: vega_pb.LiquidityProvision.AsObject,
    marketupdated?: markets_pb.Market.AsObject,
    market?: MarketEvent.AsObject,
    txerrevent?: TxErrorEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    TIMEUPDATE = 101,
    TRANSFERRESPONSES = 102,
    POSITIONRESOLUTION = 103,
    ORDER = 104,
    ACCOUNT = 105,
    PARTY = 106,
    TRADE = 107,
    MARGINLEVELS = 108,
    PROPOSAL = 109,
    VOTE = 110,
    MARKETDATA = 111,
    NODESIGNATURE = 112,
    LOSSSOCIALIZATION = 113,
    SETTLEPOSITION = 114,
    SETTLEDISTRESSED = 115,
    MARKETCREATED = 116,
    ASSET = 117,
    MARKETTICK = 118,
    WITHDRAWAL = 119,
    DEPOSIT = 120,
    AUCTION = 121,
    RISKFACTOR = 122,
    NETWORKPARAMETER = 123,
    LIQUIDITYPROVISION = 124,
    MARKETUPDATED = 125,
    MARKET = 1001,
    TXERREVENT = 2001,
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

