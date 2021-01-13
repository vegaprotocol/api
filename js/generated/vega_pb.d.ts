// package: vega
// file: vega.proto

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "./github.com/mwitkow/go-proto-validators/validator_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as markets_pb from "./markets_pb";

export class Price extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    value: number,
  }
}

export class Timestamp extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    value: number,
  }
}

export class Party extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Party.AsObject;
  static toObject(includeInstance: boolean, msg: Party): Party.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Party, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Party;
  static deserializeBinaryFromReader(message: Party, reader: jspb.BinaryReader): Party;
}

export namespace Party {
  export type AsObject = {
    id: string,
  }
}

export class RiskFactor extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getShort(): number;
  setShort(value: number): void;

  getLong(): number;
  setLong(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskFactor.AsObject;
  static toObject(includeInstance: boolean, msg: RiskFactor): RiskFactor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiskFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskFactor;
  static deserializeBinaryFromReader(message: RiskFactor, reader: jspb.BinaryReader): RiskFactor;
}

export namespace RiskFactor {
  export type AsObject = {
    market: string,
    pb_short: number,
    pb_long: number,
  }
}

export class RiskResult extends jspb.Message {
  getUpdatedtimestamp(): number;
  setUpdatedtimestamp(value: number): void;

  getRiskfactorsMap(): jspb.Map<string, RiskFactor>;
  clearRiskfactorsMap(): void;
  getNextupdatetimestamp(): number;
  setNextupdatetimestamp(value: number): void;

  getPredictednextriskfactorsMap(): jspb.Map<string, RiskFactor>;
  clearPredictednextriskfactorsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskResult.AsObject;
  static toObject(includeInstance: boolean, msg: RiskResult): RiskResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiskResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskResult;
  static deserializeBinaryFromReader(message: RiskResult, reader: jspb.BinaryReader): RiskResult;
}

export namespace RiskResult {
  export type AsObject = {
    updatedtimestamp: number,
    riskfactorsMap: Array<[string, RiskFactor.AsObject]>,
    nextupdatetimestamp: number,
    predictednextriskfactorsMap: Array<[string, RiskFactor.AsObject]>,
  }
}

export class PeggedOrder extends jspb.Message {
  getReference(): PeggedReferenceMap[keyof PeggedReferenceMap];
  setReference(value: PeggedReferenceMap[keyof PeggedReferenceMap]): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeggedOrder.AsObject;
  static toObject(includeInstance: boolean, msg: PeggedOrder): PeggedOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeggedOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeggedOrder;
  static deserializeBinaryFromReader(message: PeggedOrder, reader: jspb.BinaryReader): PeggedOrder;
}

export namespace PeggedOrder {
  export type AsObject = {
    reference: PeggedReferenceMap[keyof PeggedReferenceMap],
    offset: number,
  }
}

export class Order extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getSide(): SideMap[keyof SideMap];
  setSide(value: SideMap[keyof SideMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getRemaining(): number;
  setRemaining(value: number): void;

  getTimeinforce(): Order.TimeInForceMap[keyof Order.TimeInForceMap];
  setTimeinforce(value: Order.TimeInForceMap[keyof Order.TimeInForceMap]): void;

  getType(): Order.TypeMap[keyof Order.TypeMap];
  setType(value: Order.TypeMap[keyof Order.TypeMap]): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  getStatus(): Order.StatusMap[keyof Order.StatusMap];
  setStatus(value: Order.StatusMap[keyof Order.StatusMap]): void;

  getExpiresat(): number;
  setExpiresat(value: number): void;

  getReference(): string;
  setReference(value: string): void;

  getReason(): OrderErrorMap[keyof OrderErrorMap];
  setReason(value: OrderErrorMap[keyof OrderErrorMap]): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getBatchid(): number;
  setBatchid(value: number): void;

  hasPeggedorder(): boolean;
  clearPeggedorder(): void;
  getPeggedorder(): PeggedOrder | undefined;
  setPeggedorder(value?: PeggedOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string,
    marketid: string,
    partyid: string,
    side: SideMap[keyof SideMap],
    price: number,
    size: number,
    remaining: number,
    timeinforce: Order.TimeInForceMap[keyof Order.TimeInForceMap],
    type: Order.TypeMap[keyof Order.TypeMap],
    createdat: number,
    status: Order.StatusMap[keyof Order.StatusMap],
    expiresat: number,
    reference: string,
    reason: OrderErrorMap[keyof OrderErrorMap],
    updatedat: number,
    version: number,
    batchid: number,
    peggedorder?: PeggedOrder.AsObject,
  }

  export interface TimeInForceMap {
    TIF_UNSPECIFIED: 0;
    TIF_GTC: 1;
    TIF_GTT: 2;
    TIF_IOC: 3;
    TIF_FOK: 4;
    TIF_GFA: 5;
    TIF_GFN: 6;
  }

  export const TimeInForce: TimeInForceMap;

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_LIMIT: 1;
    TYPE_MARKET: 2;
    TYPE_NETWORK: 3;
  }

  export const Type: TypeMap;

  export interface StatusMap {
    STATUS_INVALID: 0;
    STATUS_ACTIVE: 1;
    STATUS_EXPIRED: 2;
    STATUS_CANCELLED: 3;
    STATUS_STOPPED: 4;
    STATUS_FILLED: 5;
    STATUS_REJECTED: 6;
    STATUS_PARTIALLY_FILLED: 7;
    STATUS_PARKED: 8;
  }

  export const Status: StatusMap;
}

export class OrderCancellationConfirmation extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Order | undefined;
  setOrder(value?: Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderCancellationConfirmation.AsObject;
  static toObject(includeInstance: boolean, msg: OrderCancellationConfirmation): OrderCancellationConfirmation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderCancellationConfirmation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderCancellationConfirmation;
  static deserializeBinaryFromReader(message: OrderCancellationConfirmation, reader: jspb.BinaryReader): OrderCancellationConfirmation;
}

export namespace OrderCancellationConfirmation {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class OrderConfirmation extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Order | undefined;
  setOrder(value?: Order): void;

  clearTradesList(): void;
  getTradesList(): Array<Trade>;
  setTradesList(value: Array<Trade>): void;
  addTrades(value?: Trade, index?: number): Trade;

  clearPassiveordersaffectedList(): void;
  getPassiveordersaffectedList(): Array<Order>;
  setPassiveordersaffectedList(value: Array<Order>): void;
  addPassiveordersaffected(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderConfirmation.AsObject;
  static toObject(includeInstance: boolean, msg: OrderConfirmation): OrderConfirmation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderConfirmation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderConfirmation;
  static deserializeBinaryFromReader(message: OrderConfirmation, reader: jspb.BinaryReader): OrderConfirmation;
}

export namespace OrderConfirmation {
  export type AsObject = {
    order?: Order.AsObject,
    tradesList: Array<Trade.AsObject>,
    passiveordersaffectedList: Array<Order.AsObject>,
  }
}

export class AuctionIndicativeState extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getIndicativeprice(): number;
  setIndicativeprice(value: number): void;

  getIndicativevolume(): number;
  setIndicativevolume(value: number): void;

  getAuctionstart(): number;
  setAuctionstart(value: number): void;

  getAuctionend(): number;
  setAuctionend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuctionIndicativeState.AsObject;
  static toObject(includeInstance: boolean, msg: AuctionIndicativeState): AuctionIndicativeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuctionIndicativeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuctionIndicativeState;
  static deserializeBinaryFromReader(message: AuctionIndicativeState, reader: jspb.BinaryReader): AuctionIndicativeState;
}

export namespace AuctionIndicativeState {
  export type AsObject = {
    marketid: string,
    indicativeprice: number,
    indicativevolume: number,
    auctionstart: number,
    auctionend: number,
  }
}

export class Trade extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getBuyer(): string;
  setBuyer(value: string): void;

  getSeller(): string;
  setSeller(value: string): void;

  getAggressor(): SideMap[keyof SideMap];
  setAggressor(value: SideMap[keyof SideMap]): void;

  getBuyorder(): string;
  setBuyorder(value: string): void;

  getSellorder(): string;
  setSellorder(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getType(): Trade.TypeMap[keyof Trade.TypeMap];
  setType(value: Trade.TypeMap[keyof Trade.TypeMap]): void;

  hasBuyerfee(): boolean;
  clearBuyerfee(): void;
  getBuyerfee(): Fee | undefined;
  setBuyerfee(value?: Fee): void;

  hasSellerfee(): boolean;
  clearSellerfee(): void;
  getSellerfee(): Fee | undefined;
  setSellerfee(value?: Fee): void;

  getBuyerauctionbatch(): number;
  setBuyerauctionbatch(value: number): void;

  getSellerauctionbatch(): number;
  setSellerauctionbatch(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    id: string,
    marketid: string,
    price: number,
    size: number,
    buyer: string,
    seller: string,
    aggressor: SideMap[keyof SideMap],
    buyorder: string,
    sellorder: string,
    timestamp: number,
    type: Trade.TypeMap[keyof Trade.TypeMap],
    buyerfee?: Fee.AsObject,
    sellerfee?: Fee.AsObject,
    buyerauctionbatch: number,
    sellerauctionbatch: number,
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_DEFAULT: 1;
    TYPE_NETWORK_CLOSE_OUT_GOOD: 2;
    TYPE_NETWORK_CLOSE_OUT_BAD: 3;
  }

  export const Type: TypeMap;
}

export class Fee extends jspb.Message {
  getMakerfee(): number;
  setMakerfee(value: number): void;

  getInfrastructurefee(): number;
  setInfrastructurefee(value: number): void;

  getLiquidityfee(): number;
  setLiquidityfee(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    makerfee: number,
    infrastructurefee: number,
    liquidityfee: number,
  }
}

export class TradeSet extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<Trade>;
  setTradesList(value: Array<Trade>): void;
  addTrades(value?: Trade, index?: number): Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeSet.AsObject;
  static toObject(includeInstance: boolean, msg: TradeSet): TradeSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeSet;
  static deserializeBinaryFromReader(message: TradeSet, reader: jspb.BinaryReader): TradeSet;
}

export namespace TradeSet {
  export type AsObject = {
    tradesList: Array<Trade.AsObject>,
  }
}

export class Candle extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDatetime(): string;
  setDatetime(value: string): void;

  getHigh(): number;
  setHigh(value: number): void;

  getLow(): number;
  setLow(value: number): void;

  getOpen(): number;
  setOpen(value: number): void;

  getClose(): number;
  setClose(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getInterval(): IntervalMap[keyof IntervalMap];
  setInterval(value: IntervalMap[keyof IntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candle.AsObject;
  static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candle;
  static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
  export type AsObject = {
    timestamp: number,
    datetime: string,
    high: number,
    low: number,
    open: number,
    close: number,
    volume: number,
    interval: IntervalMap[keyof IntervalMap],
  }
}

export class PriceLevel extends jspb.Message {
  getPrice(): number;
  setPrice(value: number): void;

  getNumberoforders(): number;
  setNumberoforders(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceLevel.AsObject;
  static toObject(includeInstance: boolean, msg: PriceLevel): PriceLevel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceLevel;
  static deserializeBinaryFromReader(message: PriceLevel, reader: jspb.BinaryReader): PriceLevel;
}

export namespace PriceLevel {
  export type AsObject = {
    price: number,
    numberoforders: number,
    volume: number,
  }
}

export class MarketDepth extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<PriceLevel>;
  setBuyList(value: Array<PriceLevel>): void;
  addBuy(value?: PriceLevel, index?: number): PriceLevel;

  clearSellList(): void;
  getSellList(): Array<PriceLevel>;
  setSellList(value: Array<PriceLevel>): void;
  addSell(value?: PriceLevel, index?: number): PriceLevel;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepth.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepth): MarketDepth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepth;
  static deserializeBinaryFromReader(message: MarketDepth, reader: jspb.BinaryReader): MarketDepth;
}

export namespace MarketDepth {
  export type AsObject = {
    marketid: string,
    buyList: Array<PriceLevel.AsObject>,
    sellList: Array<PriceLevel.AsObject>,
    sequencenumber: number,
  }
}

export class MarketDepthUpdate extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<PriceLevel>;
  setBuyList(value: Array<PriceLevel>): void;
  addBuy(value?: PriceLevel, index?: number): PriceLevel;

  clearSellList(): void;
  getSellList(): Array<PriceLevel>;
  setSellList(value: Array<PriceLevel>): void;
  addSell(value?: PriceLevel, index?: number): PriceLevel;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthUpdate): MarketDepthUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthUpdate;
  static deserializeBinaryFromReader(message: MarketDepthUpdate, reader: jspb.BinaryReader): MarketDepthUpdate;
}

export namespace MarketDepthUpdate {
  export type AsObject = {
    marketid: string,
    buyList: Array<PriceLevel.AsObject>,
    sellList: Array<PriceLevel.AsObject>,
    sequencenumber: number,
  }
}

export class Position extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getOpenvolume(): number;
  setOpenvolume(value: number): void;

  getRealisedpnl(): number;
  setRealisedpnl(value: number): void;

  getUnrealisedpnl(): number;
  setUnrealisedpnl(value: number): void;

  getAverageentryprice(): number;
  setAverageentryprice(value: number): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    marketid: string,
    partyid: string,
    openvolume: number,
    realisedpnl: number,
    unrealisedpnl: number,
    averageentryprice: number,
    updatedat: number,
  }
}

export class PositionTrade extends jspb.Message {
  getVolume(): number;
  setVolume(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionTrade.AsObject;
  static toObject(includeInstance: boolean, msg: PositionTrade): PositionTrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionTrade;
  static deserializeBinaryFromReader(message: PositionTrade, reader: jspb.BinaryReader): PositionTrade;
}

export namespace PositionTrade {
  export type AsObject = {
    volume: number,
    price: number,
  }
}

export class Statistics extends jspb.Message {
  getBlockheight(): number;
  setBlockheight(value: number): void;

  getBackloglength(): number;
  setBackloglength(value: number): void;

  getTotalpeers(): number;
  setTotalpeers(value: number): void;

  getGenesistime(): string;
  setGenesistime(value: string): void;

  getCurrenttime(): string;
  setCurrenttime(value: string): void;

  getVegatime(): string;
  setVegatime(value: string): void;

  getStatus(): ChainStatusMap[keyof ChainStatusMap];
  setStatus(value: ChainStatusMap[keyof ChainStatusMap]): void;

  getTxperblock(): number;
  setTxperblock(value: number): void;

  getAveragetxbytes(): number;
  setAveragetxbytes(value: number): void;

  getAverageordersperblock(): number;
  setAverageordersperblock(value: number): void;

  getTradespersecond(): number;
  setTradespersecond(value: number): void;

  getOrderspersecond(): number;
  setOrderspersecond(value: number): void;

  getTotalmarkets(): number;
  setTotalmarkets(value: number): void;

  getTotalamendorder(): number;
  setTotalamendorder(value: number): void;

  getTotalcancelorder(): number;
  setTotalcancelorder(value: number): void;

  getTotalcreateorder(): number;
  setTotalcreateorder(value: number): void;

  getTotalorders(): number;
  setTotalorders(value: number): void;

  getTotaltrades(): number;
  setTotaltrades(value: number): void;

  getOrdersubscriptions(): number;
  setOrdersubscriptions(value: number): void;

  getTradesubscriptions(): number;
  setTradesubscriptions(value: number): void;

  getCandlesubscriptions(): number;
  setCandlesubscriptions(value: number): void;

  getMarketdepthsubscriptions(): number;
  setMarketdepthsubscriptions(value: number): void;

  getPositionssubscriptions(): number;
  setPositionssubscriptions(value: number): void;

  getAccountsubscriptions(): number;
  setAccountsubscriptions(value: number): void;

  getMarketdatasubscriptions(): number;
  setMarketdatasubscriptions(value: number): void;

  getAppversionhash(): string;
  setAppversionhash(value: string): void;

  getAppversion(): string;
  setAppversion(value: string): void;

  getChainversion(): string;
  setChainversion(value: string): void;

  getBlockduration(): number;
  setBlockduration(value: number): void;

  getUptime(): string;
  setUptime(value: string): void;

  getChainid(): string;
  setChainid(value: string): void;

  getMarketdepthupdatessubscriptions(): number;
  setMarketdepthupdatessubscriptions(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Statistics.AsObject;
  static toObject(includeInstance: boolean, msg: Statistics): Statistics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Statistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Statistics;
  static deserializeBinaryFromReader(message: Statistics, reader: jspb.BinaryReader): Statistics;
}

export namespace Statistics {
  export type AsObject = {
    blockheight: number,
    backloglength: number,
    totalpeers: number,
    genesistime: string,
    currenttime: string,
    vegatime: string,
    status: ChainStatusMap[keyof ChainStatusMap],
    txperblock: number,
    averagetxbytes: number,
    averageordersperblock: number,
    tradespersecond: number,
    orderspersecond: number,
    totalmarkets: number,
    totalamendorder: number,
    totalcancelorder: number,
    totalcreateorder: number,
    totalorders: number,
    totaltrades: number,
    ordersubscriptions: number,
    tradesubscriptions: number,
    candlesubscriptions: number,
    marketdepthsubscriptions: number,
    positionssubscriptions: number,
    accountsubscriptions: number,
    marketdatasubscriptions: number,
    appversionhash: string,
    appversion: string,
    chainversion: string,
    blockduration: number,
    uptime: string,
    chainid: string,
    marketdepthupdatessubscriptions: number,
  }
}

export class Deposit extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): Deposit.StatusMap[keyof Deposit.StatusMap];
  setStatus(value: Deposit.StatusMap[keyof Deposit.StatusMap]): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxhash(): string;
  setTxhash(value: string): void;

  getCreditedtimestamp(): number;
  setCreditedtimestamp(value: number): void;

  getCreatedtimestamp(): number;
  setCreatedtimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    id: string,
    status: Deposit.StatusMap[keyof Deposit.StatusMap],
    partyid: string,
    asset: string,
    amount: string,
    txhash: string,
    creditedtimestamp: number,
    createdtimestamp: number,
  }

  export interface StatusMap {
    DEPOSIT_STATUS_UNSPECIFIED: 0;
    DEPOSIT_STATUS_OPEN: 1;
    DEPOSIT_STATUS_CANCELLED: 2;
    DEPOSIT_STATUS_FINALIZED: 3;
  }

  export const Status: StatusMap;
}

export class Withdrawal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  getStatus(): Withdrawal.StatusMap[keyof Withdrawal.StatusMap];
  setStatus(value: Withdrawal.StatusMap[keyof Withdrawal.StatusMap]): void;

  getRef(): string;
  setRef(value: string): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  getTxhash(): string;
  setTxhash(value: string): void;

  getCreatedtimestamp(): number;
  setCreatedtimestamp(value: number): void;

  getWithdrawntimestamp(): number;
  setWithdrawntimestamp(value: number): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): WithdrawExt | undefined;
  setExt(value?: WithdrawExt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Withdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Withdrawal;
  static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
}

export namespace Withdrawal {
  export type AsObject = {
    id: string,
    partyid: string,
    amount: number,
    asset: string,
    status: Withdrawal.StatusMap[keyof Withdrawal.StatusMap],
    ref: string,
    expiry: number,
    txhash: string,
    createdtimestamp: number,
    withdrawntimestamp: number,
    ext?: WithdrawExt.AsObject,
  }

  export interface StatusMap {
    WITHDRAWAL_STATUS_UNSPECIFIED: 0;
    WITHDRAWAL_STATUS_OPEN: 1;
    WITHDRAWAL_STATUS_CANCELLED: 2;
    WITHDRAWAL_STATUS_FINALIZED: 3;
  }

  export const Status: StatusMap;
}

export class WithdrawSubmission extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): WithdrawExt | undefined;
  setExt(value?: WithdrawExt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawSubmission.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawSubmission): WithdrawSubmission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawSubmission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawSubmission;
  static deserializeBinaryFromReader(message: WithdrawSubmission, reader: jspb.BinaryReader): WithdrawSubmission;
}

export namespace WithdrawSubmission {
  export type AsObject = {
    partyid: string,
    amount: number,
    asset: string,
    ext?: WithdrawExt.AsObject,
  }
}

export class WithdrawExt extends jspb.Message {
  hasErc20(): boolean;
  clearErc20(): void;
  getErc20(): Erc20WithdrawExt | undefined;
  setErc20(value?: Erc20WithdrawExt): void;

  getExtCase(): WithdrawExt.ExtCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawExt.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawExt): WithdrawExt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawExt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawExt;
  static deserializeBinaryFromReader(message: WithdrawExt, reader: jspb.BinaryReader): WithdrawExt;
}

export namespace WithdrawExt {
  export type AsObject = {
    erc20?: Erc20WithdrawExt.AsObject,
  }

  export enum ExtCase {
    EXT_NOT_SET = 0,
    ERC20 = 1,
  }
}

export class Erc20WithdrawExt extends jspb.Message {
  getReceiveraddress(): string;
  setReceiveraddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Erc20WithdrawExt.AsObject;
  static toObject(includeInstance: boolean, msg: Erc20WithdrawExt): Erc20WithdrawExt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Erc20WithdrawExt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Erc20WithdrawExt;
  static deserializeBinaryFromReader(message: Erc20WithdrawExt, reader: jspb.BinaryReader): Erc20WithdrawExt;
}

export namespace Erc20WithdrawExt {
  export type AsObject = {
    receiveraddress: string,
  }
}

export class OrderAmendment extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): Price | undefined;
  setPrice(value?: Price): void;

  getSizedelta(): number;
  setSizedelta(value: number): void;

  hasExpiresat(): boolean;
  clearExpiresat(): void;
  getExpiresat(): Timestamp | undefined;
  setExpiresat(value?: Timestamp): void;

  getTimeinforce(): Order.TimeInForceMap[keyof Order.TimeInForceMap];
  setTimeinforce(value: Order.TimeInForceMap[keyof Order.TimeInForceMap]): void;

  hasPeggedoffset(): boolean;
  clearPeggedoffset(): void;
  getPeggedoffset(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPeggedoffset(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getPeggedreference(): PeggedReferenceMap[keyof PeggedReferenceMap];
  setPeggedreference(value: PeggedReferenceMap[keyof PeggedReferenceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderAmendment.AsObject;
  static toObject(includeInstance: boolean, msg: OrderAmendment): OrderAmendment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderAmendment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderAmendment;
  static deserializeBinaryFromReader(message: OrderAmendment, reader: jspb.BinaryReader): OrderAmendment;
}

export namespace OrderAmendment {
  export type AsObject = {
    orderid: string,
    partyid: string,
    marketid: string,
    price?: Price.AsObject,
    sizedelta: number,
    expiresat?: Timestamp.AsObject,
    timeinforce: Order.TimeInForceMap[keyof Order.TimeInForceMap],
    peggedoffset?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    peggedreference: PeggedReferenceMap[keyof PeggedReferenceMap],
  }
}

export class OrderSubmission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getSide(): SideMap[keyof SideMap];
  setSide(value: SideMap[keyof SideMap]): void;

  getTimeinforce(): Order.TimeInForceMap[keyof Order.TimeInForceMap];
  setTimeinforce(value: Order.TimeInForceMap[keyof Order.TimeInForceMap]): void;

  getExpiresat(): number;
  setExpiresat(value: number): void;

  getType(): Order.TypeMap[keyof Order.TypeMap];
  setType(value: Order.TypeMap[keyof Order.TypeMap]): void;

  getReference(): string;
  setReference(value: string): void;

  hasPeggedorder(): boolean;
  clearPeggedorder(): void;
  getPeggedorder(): PeggedOrder | undefined;
  setPeggedorder(value?: PeggedOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderSubmission.AsObject;
  static toObject(includeInstance: boolean, msg: OrderSubmission): OrderSubmission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderSubmission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderSubmission;
  static deserializeBinaryFromReader(message: OrderSubmission, reader: jspb.BinaryReader): OrderSubmission;
}

export namespace OrderSubmission {
  export type AsObject = {
    id: string,
    marketid: string,
    partyid: string,
    price: number,
    size: number,
    side: SideMap[keyof SideMap],
    timeinforce: Order.TimeInForceMap[keyof Order.TimeInForceMap],
    expiresat: number,
    type: Order.TypeMap[keyof Order.TypeMap],
    reference: string,
    peggedorder?: PeggedOrder.AsObject,
  }
}

export class OrderCancellation extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderCancellation.AsObject;
  static toObject(includeInstance: boolean, msg: OrderCancellation): OrderCancellation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderCancellation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderCancellation;
  static deserializeBinaryFromReader(message: OrderCancellation, reader: jspb.BinaryReader): OrderCancellation;
}

export namespace OrderCancellation {
  export type AsObject = {
    orderid: string,
    marketid: string,
    partyid: string,
  }
}

export class NodeRegistration extends jspb.Message {
  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

  getChainpubkey(): Uint8Array | string;
  getChainpubkey_asU8(): Uint8Array;
  getChainpubkey_asB64(): string;
  setChainpubkey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: NodeRegistration): NodeRegistration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeRegistration;
  static deserializeBinaryFromReader(message: NodeRegistration, reader: jspb.BinaryReader): NodeRegistration;
}

export namespace NodeRegistration {
  export type AsObject = {
    pubkey: Uint8Array | string,
    chainpubkey: Uint8Array | string,
  }
}

export class NodeVote extends jspb.Message {
  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeVote.AsObject;
  static toObject(includeInstance: boolean, msg: NodeVote): NodeVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeVote;
  static deserializeBinaryFromReader(message: NodeVote, reader: jspb.BinaryReader): NodeVote;
}

export namespace NodeVote {
  export type AsObject = {
    pubkey: Uint8Array | string,
    reference: string,
  }
}

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  getBalance(): number;
  setBalance(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getType(): AccountTypeMap[keyof AccountTypeMap];
  setType(value: AccountTypeMap[keyof AccountTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    owner: string,
    balance: number,
    asset: string,
    marketid: string,
    type: AccountTypeMap[keyof AccountTypeMap],
  }
}

export class FinancialAmount extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialAmount.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialAmount): FinancialAmount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialAmount;
  static deserializeBinaryFromReader(message: FinancialAmount, reader: jspb.BinaryReader): FinancialAmount;
}

export namespace FinancialAmount {
  export type AsObject = {
    amount: number,
    asset: string,
  }
}

export class Transfer extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): FinancialAmount | undefined;
  setAmount(value?: FinancialAmount): void;

  getType(): TransferTypeMap[keyof TransferTypeMap];
  setType(value: TransferTypeMap[keyof TransferTypeMap]): void;

  getMinamount(): number;
  setMinamount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    owner: string,
    amount?: FinancialAmount.AsObject,
    type: TransferTypeMap[keyof TransferTypeMap],
    minamount: number,
  }
}

export class TransferRequest extends jspb.Message {
  clearFromaccountList(): void;
  getFromaccountList(): Array<Account>;
  setFromaccountList(value: Array<Account>): void;
  addFromaccount(value?: Account, index?: number): Account;

  clearToaccountList(): void;
  getToaccountList(): Array<Account>;
  setToaccountList(value: Array<Account>): void;
  addToaccount(value?: Account, index?: number): Account;

  getAmount(): number;
  setAmount(value: number): void;

  getMinamount(): number;
  setMinamount(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    fromaccountList: Array<Account.AsObject>,
    toaccountList: Array<Account.AsObject>,
    amount: number,
    minamount: number,
    asset: string,
    reference: string,
  }
}

export class LedgerEntry extends jspb.Message {
  getFromaccount(): string;
  setFromaccount(value: string): void;

  getToaccount(): string;
  setToaccount(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getReference(): string;
  setReference(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerEntry): LedgerEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerEntry;
  static deserializeBinaryFromReader(message: LedgerEntry, reader: jspb.BinaryReader): LedgerEntry;
}

export namespace LedgerEntry {
  export type AsObject = {
    fromaccount: string,
    toaccount: string,
    amount: number,
    reference: string,
    type: string,
    timestamp: number,
  }
}

export class TransferBalance extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): Account | undefined;
  setAccount(value?: Account): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferBalance.AsObject;
  static toObject(includeInstance: boolean, msg: TransferBalance): TransferBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferBalance;
  static deserializeBinaryFromReader(message: TransferBalance, reader: jspb.BinaryReader): TransferBalance;
}

export namespace TransferBalance {
  export type AsObject = {
    account?: Account.AsObject,
    balance: number,
  }
}

export class TransferResponse extends jspb.Message {
  clearTransfersList(): void;
  getTransfersList(): Array<LedgerEntry>;
  setTransfersList(value: Array<LedgerEntry>): void;
  addTransfers(value?: LedgerEntry, index?: number): LedgerEntry;

  clearBalancesList(): void;
  getBalancesList(): Array<TransferBalance>;
  setBalancesList(value: Array<TransferBalance>): void;
  addBalances(value?: TransferBalance, index?: number): TransferBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponse): TransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponse;
  static deserializeBinaryFromReader(message: TransferResponse, reader: jspb.BinaryReader): TransferResponse;
}

export namespace TransferResponse {
  export type AsObject = {
    transfersList: Array<LedgerEntry.AsObject>,
    balancesList: Array<TransferBalance.AsObject>,
  }
}

export class MarginLevels extends jspb.Message {
  getMaintenancemargin(): number;
  setMaintenancemargin(value: number): void;

  getSearchlevel(): number;
  setSearchlevel(value: number): void;

  getInitialmargin(): number;
  setInitialmargin(value: number): void;

  getCollateralreleaselevel(): number;
  setCollateralreleaselevel(value: number): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginLevels.AsObject;
  static toObject(includeInstance: boolean, msg: MarginLevels): MarginLevels.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginLevels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginLevels;
  static deserializeBinaryFromReader(message: MarginLevels, reader: jspb.BinaryReader): MarginLevels;
}

export namespace MarginLevels {
  export type AsObject = {
    maintenancemargin: number,
    searchlevel: number,
    initialmargin: number,
    collateralreleaselevel: number,
    partyid: string,
    marketid: string,
    asset: string,
    timestamp: number,
  }
}

export class MarketData extends jspb.Message {
  getMarkprice(): number;
  setMarkprice(value: number): void;

  getBestbidprice(): number;
  setBestbidprice(value: number): void;

  getBestbidvolume(): number;
  setBestbidvolume(value: number): void;

  getBestofferprice(): number;
  setBestofferprice(value: number): void;

  getBestoffervolume(): number;
  setBestoffervolume(value: number): void;

  getBeststaticbidprice(): number;
  setBeststaticbidprice(value: number): void;

  getBeststaticbidvolume(): number;
  setBeststaticbidvolume(value: number): void;

  getBeststaticofferprice(): number;
  setBeststaticofferprice(value: number): void;

  getBeststaticoffervolume(): number;
  setBeststaticoffervolume(value: number): void;

  getMidprice(): number;
  setMidprice(value: number): void;

  getStaticmidprice(): number;
  setStaticmidprice(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getOpeninterest(): number;
  setOpeninterest(value: number): void;

  getAuctionend(): number;
  setAuctionend(value: number): void;

  getAuctionstart(): number;
  setAuctionstart(value: number): void;

  getIndicativeprice(): number;
  setIndicativeprice(value: number): void;

  getIndicativevolume(): number;
  setIndicativevolume(value: number): void;

  getMarkettradingmode(): markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap];
  setMarkettradingmode(value: markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap]): void;

  getTrigger(): AuctionTriggerMap[keyof AuctionTriggerMap];
  setTrigger(value: AuctionTriggerMap[keyof AuctionTriggerMap]): void;

  getTargetstake(): string;
  setTargetstake(value: string): void;

  getSuppliedstake(): string;
  setSuppliedstake(value: string): void;

  clearPricemonitoringboundsList(): void;
  getPricemonitoringboundsList(): Array<PriceMonitoringBounds>;
  setPricemonitoringboundsList(value: Array<PriceMonitoringBounds>): void;
  addPricemonitoringbounds(value?: PriceMonitoringBounds, index?: number): PriceMonitoringBounds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketData.AsObject;
  static toObject(includeInstance: boolean, msg: MarketData): MarketData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketData;
  static deserializeBinaryFromReader(message: MarketData, reader: jspb.BinaryReader): MarketData;
}

export namespace MarketData {
  export type AsObject = {
    markprice: number,
    bestbidprice: number,
    bestbidvolume: number,
    bestofferprice: number,
    bestoffervolume: number,
    beststaticbidprice: number,
    beststaticbidvolume: number,
    beststaticofferprice: number,
    beststaticoffervolume: number,
    midprice: number,
    staticmidprice: number,
    market: string,
    timestamp: number,
    openinterest: number,
    auctionend: number,
    auctionstart: number,
    indicativeprice: number,
    indicativevolume: number,
    markettradingmode: markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap],
    trigger: AuctionTriggerMap[keyof AuctionTriggerMap],
    targetstake: string,
    suppliedstake: string,
    pricemonitoringboundsList: Array<PriceMonitoringBounds.AsObject>,
  }
}

export class PriceMonitoringBounds extends jspb.Message {
  getMinvalidprice(): number;
  setMinvalidprice(value: number): void;

  getMaxvalidprice(): number;
  setMaxvalidprice(value: number): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): markets_pb.PriceMonitoringTrigger | undefined;
  setTrigger(value?: markets_pb.PriceMonitoringTrigger): void;

  getReferenceprice(): number;
  setReferenceprice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceMonitoringBounds.AsObject;
  static toObject(includeInstance: boolean, msg: PriceMonitoringBounds): PriceMonitoringBounds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceMonitoringBounds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceMonitoringBounds;
  static deserializeBinaryFromReader(message: PriceMonitoringBounds, reader: jspb.BinaryReader): PriceMonitoringBounds;
}

export namespace PriceMonitoringBounds {
  export type AsObject = {
    minvalidprice: number,
    maxvalidprice: number,
    trigger?: markets_pb.PriceMonitoringTrigger.AsObject,
    referenceprice: number,
  }
}

export class ErrorDetail extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getInner(): string;
  setInner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetail): ErrorDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetail;
  static deserializeBinaryFromReader(message: ErrorDetail, reader: jspb.BinaryReader): ErrorDetail;
}

export namespace ErrorDetail {
  export type AsObject = {
    code: number,
    message: string,
    inner: string,
  }
}

export class Transaction extends jspb.Message {
  getInputdata(): Uint8Array | string;
  getInputdata_asU8(): Uint8Array;
  getInputdata_asB64(): string;
  setInputdata(value: Uint8Array | string): void;

  getNonce(): number;
  setNonce(value: number): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  hasPubkey(): boolean;
  clearPubkey(): void;
  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): void;

  getFromCase(): Transaction.FromCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    inputdata: Uint8Array | string,
    nonce: number,
    blockheight: number,
    address: Uint8Array | string,
    pubkey: Uint8Array | string,
  }

  export enum FromCase {
    FROM_NOT_SET = 0,
    ADDRESS = 1001,
    PUBKEY = 1002,
  }
}

export class Signature extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getAlgo(): string;
  setAlgo(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    sig: Uint8Array | string,
    algo: string,
    version: number,
  }
}

export class SignedBundle extends jspb.Message {
  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  hasSig(): boolean;
  clearSig(): void;
  getSig(): Signature | undefined;
  setSig(value?: Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedBundle.AsObject;
  static toObject(includeInstance: boolean, msg: SignedBundle): SignedBundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedBundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedBundle;
  static deserializeBinaryFromReader(message: SignedBundle, reader: jspb.BinaryReader): SignedBundle;
}

export namespace SignedBundle {
  export type AsObject = {
    tx: Uint8Array | string,
    sig?: Signature.AsObject,
  }
}

export class NodeSignature extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getKind(): NodeSignatureKindMap[keyof NodeSignatureKindMap];
  setKind(value: NodeSignatureKindMap[keyof NodeSignatureKindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeSignature.AsObject;
  static toObject(includeInstance: boolean, msg: NodeSignature): NodeSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeSignature;
  static deserializeBinaryFromReader(message: NodeSignature, reader: jspb.BinaryReader): NodeSignature;
}

export namespace NodeSignature {
  export type AsObject = {
    id: string,
    sig: Uint8Array | string,
    kind: NodeSignatureKindMap[keyof NodeSignatureKindMap],
  }
}

export class NetworkParameter extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkParameter): NetworkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkParameter;
  static deserializeBinaryFromReader(message: NetworkParameter, reader: jspb.BinaryReader): NetworkParameter;
}

export namespace NetworkParameter {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class LiquidityOrder extends jspb.Message {
  getReference(): PeggedReferenceMap[keyof PeggedReferenceMap];
  setReference(value: PeggedReferenceMap[keyof PeggedReferenceMap]): void;

  getProportion(): number;
  setProportion(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityOrder.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityOrder): LiquidityOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityOrder;
  static deserializeBinaryFromReader(message: LiquidityOrder, reader: jspb.BinaryReader): LiquidityOrder;
}

export namespace LiquidityOrder {
  export type AsObject = {
    reference: PeggedReferenceMap[keyof PeggedReferenceMap],
    proportion: number,
    offset: number,
  }
}

export class LiquidityProvisionSubmission extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getCommitmentamount(): number;
  setCommitmentamount(value: number): void;

  getFee(): string;
  setFee(value: string): void;

  clearSellsList(): void;
  getSellsList(): Array<LiquidityOrder>;
  setSellsList(value: Array<LiquidityOrder>): void;
  addSells(value?: LiquidityOrder, index?: number): LiquidityOrder;

  clearBuysList(): void;
  getBuysList(): Array<LiquidityOrder>;
  setBuysList(value: Array<LiquidityOrder>): void;
  addBuys(value?: LiquidityOrder, index?: number): LiquidityOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityProvisionSubmission.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityProvisionSubmission): LiquidityProvisionSubmission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityProvisionSubmission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityProvisionSubmission;
  static deserializeBinaryFromReader(message: LiquidityProvisionSubmission, reader: jspb.BinaryReader): LiquidityProvisionSubmission;
}

export namespace LiquidityProvisionSubmission {
  export type AsObject = {
    marketid: string,
    commitmentamount: number,
    fee: string,
    sellsList: Array<LiquidityOrder.AsObject>,
    buysList: Array<LiquidityOrder.AsObject>,
  }
}

export class LiquidityOrderReference extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  hasLiquidityorder(): boolean;
  clearLiquidityorder(): void;
  getLiquidityorder(): LiquidityOrder | undefined;
  setLiquidityorder(value?: LiquidityOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityOrderReference.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityOrderReference): LiquidityOrderReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityOrderReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityOrderReference;
  static deserializeBinaryFromReader(message: LiquidityOrderReference, reader: jspb.BinaryReader): LiquidityOrderReference;
}

export namespace LiquidityOrderReference {
  export type AsObject = {
    orderid: string,
    liquidityorder?: LiquidityOrder.AsObject,
  }
}

export class LiquidityProvision extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getCreatedat(): number;
  setCreatedat(value: number): void;

  getUpdatedat(): number;
  setUpdatedat(value: number): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getCommitmentamount(): number;
  setCommitmentamount(value: number): void;

  getFee(): string;
  setFee(value: string): void;

  clearSellsList(): void;
  getSellsList(): Array<LiquidityOrderReference>;
  setSellsList(value: Array<LiquidityOrderReference>): void;
  addSells(value?: LiquidityOrderReference, index?: number): LiquidityOrderReference;

  clearBuysList(): void;
  getBuysList(): Array<LiquidityOrderReference>;
  setBuysList(value: Array<LiquidityOrderReference>): void;
  addBuys(value?: LiquidityOrderReference, index?: number): LiquidityOrderReference;

  getVersion(): string;
  setVersion(value: string): void;

  getStatus(): LiquidityProvision.StatusMap[keyof LiquidityProvision.StatusMap];
  setStatus(value: LiquidityProvision.StatusMap[keyof LiquidityProvision.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityProvision.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityProvision): LiquidityProvision.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityProvision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityProvision;
  static deserializeBinaryFromReader(message: LiquidityProvision, reader: jspb.BinaryReader): LiquidityProvision;
}

export namespace LiquidityProvision {
  export type AsObject = {
    id: string,
    partyid: string,
    createdat: number,
    updatedat: number,
    marketid: string,
    commitmentamount: number,
    fee: string,
    sellsList: Array<LiquidityOrderReference.AsObject>,
    buysList: Array<LiquidityOrderReference.AsObject>,
    version: string,
    status: LiquidityProvision.StatusMap[keyof LiquidityProvision.StatusMap],
  }

  export interface StatusMap {
    LIQUIDITY_PROVISION_STATUS_UNSPECIFIED: 0;
    LIQUIDITY_PROVISION_STATUS_ACTIVE: 1;
    LIQUIDITY_PROVISION_STATUS_STOPPED: 2;
    LIQUIDITY_PROVISION_STATUS_CANCELLED: 3;
    LIQUIDITY_PROVISION_STATUS_REJECTED: 4;
  }

  export const Status: StatusMap;
}

export class EthereumConfig extends jspb.Message {
  getNetworkid(): string;
  setNetworkid(value: string): void;

  getChainid(): string;
  setChainid(value: string): void;

  getBridgeaddress(): string;
  setBridgeaddress(value: string): void;

  getConfirmations(): number;
  setConfirmations(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthereumConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EthereumConfig): EthereumConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthereumConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthereumConfig;
  static deserializeBinaryFromReader(message: EthereumConfig, reader: jspb.BinaryReader): EthereumConfig;
}

export namespace EthereumConfig {
  export type AsObject = {
    networkid: string,
    chainid: string,
    bridgeaddress: string,
    confirmations: number,
  }
}

export interface SideMap {
  SIDE_UNSPECIFIED: 0;
  SIDE_BUY: 1;
  SIDE_SELL: 2;
}

export const Side: SideMap;

export interface IntervalMap {
  INTERVAL_UNSPECIFIED: 0;
  INTERVAL_I1M: 60;
  INTERVAL_I5M: 300;
  INTERVAL_I15M: 900;
  INTERVAL_I1H: 3600;
  INTERVAL_I6H: 21600;
  INTERVAL_I1D: 86400;
}

export const Interval: IntervalMap;

export interface AuctionTriggerMap {
  AUCTION_TRIGGER_UNSPECIFIED: 0;
  AUCTION_TRIGGER_BATCH: 1;
  AUCTION_TRIGGER_OPENING: 2;
  AUCTION_TRIGGER_PRICE: 3;
  AUCTION_TRIGGER_LIQUIDITY: 4;
}

export const AuctionTrigger: AuctionTriggerMap;

export interface PeggedReferenceMap {
  PEGGED_REFERENCE_UNSPECIFIED: 0;
  PEGGED_REFERENCE_MID: 1;
  PEGGED_REFERENCE_BEST_BID: 2;
  PEGGED_REFERENCE_BEST_ASK: 3;
}

export const PeggedReference: PeggedReferenceMap;

export interface OrderErrorMap {
  ORDER_ERROR_NONE: 0;
  ORDER_ERROR_INVALID_MARKET_ID: 1;
  ORDER_ERROR_INVALID_ORDER_ID: 2;
  ORDER_ERROR_OUT_OF_SEQUENCE: 3;
  ORDER_ERROR_INVALID_REMAINING_SIZE: 4;
  ORDER_ERROR_TIME_FAILURE: 5;
  ORDER_ERROR_REMOVAL_FAILURE: 6;
  ORDER_ERROR_INVALID_EXPIRATION_DATETIME: 7;
  ORDER_ERROR_INVALID_ORDER_REFERENCE: 8;
  ORDER_ERROR_EDIT_NOT_ALLOWED: 9;
  ORDER_ERROR_AMEND_FAILURE: 10;
  ORDER_ERROR_NOT_FOUND: 11;
  ORDER_ERROR_INVALID_PARTY_ID: 12;
  ORDER_ERROR_MARKET_CLOSED: 13;
  ORDER_ERROR_MARGIN_CHECK_FAILED: 14;
  ORDER_ERROR_MISSING_GENERAL_ACCOUNT: 15;
  ORDER_ERROR_INTERNAL_ERROR: 16;
  ORDER_ERROR_INVALID_SIZE: 17;
  ORDER_ERROR_INVALID_PERSISTENCE: 18;
  ORDER_ERROR_INVALID_TYPE: 19;
  ORDER_ERROR_SELF_TRADING: 20;
  ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES: 21;
  ORDER_ERROR_INCORRECT_MARKET_TYPE: 22;
  ORDER_ERROR_INVALID_TIME_IN_FORCE: 23;
  ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION: 24;
  ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING: 25;
  ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT: 26;
  ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT: 27;
  ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT: 28;
  ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC: 29;
  ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN: 30;
  ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN: 31;
  ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION: 32;
  ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION: 33;
  ORDER_ERROR_MUST_BE_LIMIT_ORDER: 34;
  ORDER_ERROR_MUST_BE_GTT_OR_GTC: 35;
  ORDER_ERROR_WITHOUT_REFERENCE_PRICE: 36;
  ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE: 37;
  ORDER_ERROR_OFFSET_MUST_BE_LESS_OR_EQUAL_TO_ZERO: 38;
  ORDER_ERROR_OFFSET_MUST_BE_LESS_THAN_ZERO: 39;
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO: 40;
  ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE: 41;
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO: 42;
  ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE: 43;
  ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER: 44;
  ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER: 45;
  ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER: 46;
}

export const OrderError: OrderErrorMap;

export interface ChainStatusMap {
  CHAIN_STATUS_UNSPECIFIED: 0;
  CHAIN_STATUS_DISCONNECTED: 1;
  CHAIN_STATUS_REPLAYING: 2;
  CHAIN_STATUS_CONNECTED: 3;
}

export const ChainStatus: ChainStatusMap;

export interface AccountTypeMap {
  ACCOUNT_TYPE_UNSPECIFIED: 0;
  ACCOUNT_TYPE_INSURANCE: 1;
  ACCOUNT_TYPE_SETTLEMENT: 2;
  ACCOUNT_TYPE_MARGIN: 3;
  ACCOUNT_TYPE_GENERAL: 4;
  ACCOUNT_TYPE_FEES_INFRASTRUCTURE: 5;
  ACCOUNT_TYPE_FEES_LIQUIDITY: 6;
  ACCOUNT_TYPE_FEES_MAKER: 7;
  ACCOUNT_TYPE_LOCK_WITHDRAW: 8;
  ACCOUNT_TYPE_BOND: 9;
  ACCOUNT_TYPE_EXTERNAL: 10;
}

export const AccountType: AccountTypeMap;

export interface TransferTypeMap {
  TRANSFER_TYPE_UNSPECIFIED: 0;
  TRANSFER_TYPE_LOSS: 1;
  TRANSFER_TYPE_WIN: 2;
  TRANSFER_TYPE_CLOSE: 3;
  TRANSFER_TYPE_MTM_LOSS: 4;
  TRANSFER_TYPE_MTM_WIN: 5;
  TRANSFER_TYPE_MARGIN_LOW: 6;
  TRANSFER_TYPE_MARGIN_HIGH: 7;
  TRANSFER_TYPE_MARGIN_CONFISCATED: 8;
  TRANSFER_TYPE_MAKER_FEE_PAY: 9;
  TRANSFER_TYPE_MAKER_FEE_RECEIVE: 10;
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY: 11;
  TRANSFER_TYPE_LIQUIDITY_FEE_PAY: 12;
  TRANSFER_TYPE_BOND_LOW: 13;
  TRANSFER_TYPE_BOND_HIGH: 14;
  TRANSFER_TYPE_WITHDRAW_LOCK: 15;
  TRANSFER_TYPE_WITHDRAW: 16;
  TRANSFER_TYPE_DEPOSIT: 17;
}

export const TransferType: TransferTypeMap;

export interface NodeSignatureKindMap {
  NODE_SIGNATURE_KIND_UNSPECIFIED: 0;
  NODE_SIGNATURE_KIND_ASSET_NEW: 1;
  NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL: 2;
}

export const NodeSignatureKind: NodeSignatureKindMap;

