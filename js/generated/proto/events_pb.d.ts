// package: vega
// file: proto/events.proto

import * as jspb from "google-protobuf";
import * as proto_markets_pb from "../proto/markets_pb";
import * as proto_assets_pb from "../proto/assets_pb";
import * as proto_governance_pb from "../proto/governance_pb";
import * as proto_vega_pb from "../proto/vega_pb";

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
  getOrdersubmission(): proto_vega_pb.OrderSubmission | undefined;
  setOrdersubmission(value?: proto_vega_pb.OrderSubmission): void;

  hasOrderamendment(): boolean;
  clearOrderamendment(): void;
  getOrderamendment(): proto_vega_pb.OrderAmendment | undefined;
  setOrderamendment(value?: proto_vega_pb.OrderAmendment): void;

  hasOrdercancellation(): boolean;
  clearOrdercancellation(): void;
  getOrdercancellation(): proto_vega_pb.OrderCancellation | undefined;
  setOrdercancellation(value?: proto_vega_pb.OrderCancellation): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): proto_governance_pb.Proposal | undefined;
  setProposal(value?: proto_governance_pb.Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): proto_governance_pb.Vote | undefined;
  setVote(value?: proto_governance_pb.Vote): void;

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
    ordersubmission?: proto_vega_pb.OrderSubmission.AsObject,
    orderamendment?: proto_vega_pb.OrderAmendment.AsObject,
    ordercancellation?: proto_vega_pb.OrderCancellation.AsObject,
    proposal?: proto_governance_pb.Proposal.AsObject,
    vote?: proto_governance_pb.Vote.AsObject,
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
  getResponsesList(): Array<proto_vega_pb.TransferResponse>;
  setResponsesList(value: Array<proto_vega_pb.TransferResponse>): void;
  addResponses(value?: proto_vega_pb.TransferResponse, index?: number): proto_vega_pb.TransferResponse;

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
    responsesList: Array<proto_vega_pb.TransferResponse.AsObject>,
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

  getTrigger(): proto_vega_pb.AuctionTriggerMap[keyof proto_vega_pb.AuctionTriggerMap];
  setTrigger(value: proto_vega_pb.AuctionTriggerMap[keyof proto_vega_pb.AuctionTriggerMap]): void;

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
    trigger: proto_vega_pb.AuctionTriggerMap[keyof proto_vega_pb.AuctionTriggerMap],
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
  getOrder(): proto_vega_pb.Order | undefined;
  setOrder(value?: proto_vega_pb.Order): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): proto_vega_pb.Account | undefined;
  setAccount(value?: proto_vega_pb.Account): void;

  hasParty(): boolean;
  clearParty(): void;
  getParty(): proto_vega_pb.Party | undefined;
  setParty(value?: proto_vega_pb.Party): void;

  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): proto_vega_pb.Trade | undefined;
  setTrade(value?: proto_vega_pb.Trade): void;

  hasMarginlevels(): boolean;
  clearMarginlevels(): void;
  getMarginlevels(): proto_vega_pb.MarginLevels | undefined;
  setMarginlevels(value?: proto_vega_pb.MarginLevels): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): proto_governance_pb.Proposal | undefined;
  setProposal(value?: proto_governance_pb.Proposal): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): proto_governance_pb.Vote | undefined;
  setVote(value?: proto_governance_pb.Vote): void;

  hasMarketdata(): boolean;
  clearMarketdata(): void;
  getMarketdata(): proto_vega_pb.MarketData | undefined;
  setMarketdata(value?: proto_vega_pb.MarketData): void;

  hasNodesignature(): boolean;
  clearNodesignature(): void;
  getNodesignature(): proto_vega_pb.NodeSignature | undefined;
  setNodesignature(value?: proto_vega_pb.NodeSignature): void;

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
  getMarketcreated(): proto_markets_pb.Market | undefined;
  setMarketcreated(value?: proto_markets_pb.Market): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): proto_assets_pb.Asset | undefined;
  setAsset(value?: proto_assets_pb.Asset): void;

  hasMarkettick(): boolean;
  clearMarkettick(): void;
  getMarkettick(): MarketTick | undefined;
  setMarkettick(value?: MarketTick): void;

  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): proto_vega_pb.Withdrawal | undefined;
  setWithdrawal(value?: proto_vega_pb.Withdrawal): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): proto_vega_pb.Deposit | undefined;
  setDeposit(value?: proto_vega_pb.Deposit): void;

  hasAuction(): boolean;
  clearAuction(): void;
  getAuction(): AuctionEvent | undefined;
  setAuction(value?: AuctionEvent): void;

  hasRiskfactor(): boolean;
  clearRiskfactor(): void;
  getRiskfactor(): proto_vega_pb.RiskFactor | undefined;
  setRiskfactor(value?: proto_vega_pb.RiskFactor): void;

  hasNetworkparameter(): boolean;
  clearNetworkparameter(): void;
  getNetworkparameter(): proto_vega_pb.NetworkParameter | undefined;
  setNetworkparameter(value?: proto_vega_pb.NetworkParameter): void;

  hasLiquidityprovision(): boolean;
  clearLiquidityprovision(): void;
  getLiquidityprovision(): proto_vega_pb.LiquidityProvision | undefined;
  setLiquidityprovision(value?: proto_vega_pb.LiquidityProvision): void;

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
    order?: proto_vega_pb.Order.AsObject,
    account?: proto_vega_pb.Account.AsObject,
    party?: proto_vega_pb.Party.AsObject,
    trade?: proto_vega_pb.Trade.AsObject,
    marginlevels?: proto_vega_pb.MarginLevels.AsObject,
    proposal?: proto_governance_pb.Proposal.AsObject,
    vote?: proto_governance_pb.Vote.AsObject,
    marketdata?: proto_vega_pb.MarketData.AsObject,
    nodesignature?: proto_vega_pb.NodeSignature.AsObject,
    losssocialization?: LossSocialization.AsObject,
    settleposition?: SettlePosition.AsObject,
    settledistressed?: SettleDistressed.AsObject,
    marketcreated?: proto_markets_pb.Market.AsObject,
    asset?: proto_assets_pb.Asset.AsObject,
    markettick?: MarketTick.AsObject,
    withdrawal?: proto_vega_pb.Withdrawal.AsObject,
    deposit?: proto_vega_pb.Deposit.AsObject,
    auction?: AuctionEvent.AsObject,
    riskfactor?: proto_vega_pb.RiskFactor.AsObject,
    networkparameter?: proto_vega_pb.NetworkParameter.AsObject,
    liquidityprovision?: proto_vega_pb.LiquidityProvision.AsObject,
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
  BUS_EVENT_TYPE_MARKET: 101;
  BUS_EVENT_TYPE_TX_ERROR: 201;
}

export const BusEventType: BusEventTypeMap;

