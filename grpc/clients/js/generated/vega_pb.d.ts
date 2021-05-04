// package: vega
// file: vega.proto

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "./github.com/mwitkow/go-proto-validators/validator_pb";
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
  getUpdatedTimestamp(): number;
  setUpdatedTimestamp(value: number): void;

  getRiskFactorsMap(): jspb.Map<string, RiskFactor>;
  clearRiskFactorsMap(): void;
  getNextUpdateTimestamp(): number;
  setNextUpdateTimestamp(value: number): void;

  getPredictedNextRiskFactorsMap(): jspb.Map<string, RiskFactor>;
  clearPredictedNextRiskFactorsMap(): void;
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
    updatedTimestamp: number,
    riskFactorsMap: Array<[string, RiskFactor.AsObject]>,
    nextUpdateTimestamp: number,
    predictedNextRiskFactorsMap: Array<[string, RiskFactor.AsObject]>,
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

  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getSide(): SideMap[keyof SideMap];
  setSide(value: SideMap[keyof SideMap]): void;

  getPrice(): number;
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getRemaining(): number;
  setRemaining(value: number): void;

  getTimeInForce(): Order.TimeInForceMap[keyof Order.TimeInForceMap];
  setTimeInForce(value: Order.TimeInForceMap[keyof Order.TimeInForceMap]): void;

  getType(): Order.TypeMap[keyof Order.TypeMap];
  setType(value: Order.TypeMap[keyof Order.TypeMap]): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getStatus(): Order.StatusMap[keyof Order.StatusMap];
  setStatus(value: Order.StatusMap[keyof Order.StatusMap]): void;

  getExpiresAt(): number;
  setExpiresAt(value: number): void;

  getReference(): string;
  setReference(value: string): void;

  getReason(): OrderErrorMap[keyof OrderErrorMap];
  setReason(value: OrderErrorMap[keyof OrderErrorMap]): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getBatchId(): number;
  setBatchId(value: number): void;

  hasPeggedOrder(): boolean;
  clearPeggedOrder(): void;
  getPeggedOrder(): PeggedOrder | undefined;
  setPeggedOrder(value?: PeggedOrder): void;

  getLiquidityProvisionId(): string;
  setLiquidityProvisionId(value: string): void;

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
    marketId: string,
    partyId: string,
    side: SideMap[keyof SideMap],
    price: number,
    size: number,
    remaining: number,
    timeInForce: Order.TimeInForceMap[keyof Order.TimeInForceMap],
    type: Order.TypeMap[keyof Order.TypeMap],
    createdAt: number,
    status: Order.StatusMap[keyof Order.StatusMap],
    expiresAt: number,
    reference: string,
    reason: OrderErrorMap[keyof OrderErrorMap],
    updatedAt: number,
    version: number,
    batchId: number,
    peggedOrder?: PeggedOrder.AsObject,
    liquidityProvisionId: string,
  }

  export interface TimeInForceMap {
    TIME_IN_FORCE_UNSPECIFIED: 0;
    TIME_IN_FORCE_GTC: 1;
    TIME_IN_FORCE_GTT: 2;
    TIME_IN_FORCE_IOC: 3;
    TIME_IN_FORCE_FOK: 4;
    TIME_IN_FORCE_GFA: 5;
    TIME_IN_FORCE_GFN: 6;
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
    STATUS_UNSPECIFIED: 0;
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

  clearPassiveOrdersAffectedList(): void;
  getPassiveOrdersAffectedList(): Array<Order>;
  setPassiveOrdersAffectedList(value: Array<Order>): void;
  addPassiveOrdersAffected(value?: Order, index?: number): Order;

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
    passiveOrdersAffectedList: Array<Order.AsObject>,
  }
}

export class AuctionIndicativeState extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIndicativePrice(): number;
  setIndicativePrice(value: number): void;

  getIndicativeVolume(): number;
  setIndicativeVolume(value: number): void;

  getAuctionStart(): number;
  setAuctionStart(value: number): void;

  getAuctionEnd(): number;
  setAuctionEnd(value: number): void;

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
    marketId: string,
    indicativePrice: number,
    indicativeVolume: number,
    auctionStart: number,
    auctionEnd: number,
  }
}

export class Trade extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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

  getBuyOrder(): string;
  setBuyOrder(value: string): void;

  getSellOrder(): string;
  setSellOrder(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getType(): Trade.TypeMap[keyof Trade.TypeMap];
  setType(value: Trade.TypeMap[keyof Trade.TypeMap]): void;

  hasBuyerFee(): boolean;
  clearBuyerFee(): void;
  getBuyerFee(): Fee | undefined;
  setBuyerFee(value?: Fee): void;

  hasSellerFee(): boolean;
  clearSellerFee(): void;
  getSellerFee(): Fee | undefined;
  setSellerFee(value?: Fee): void;

  getBuyerAuctionBatch(): number;
  setBuyerAuctionBatch(value: number): void;

  getSellerAuctionBatch(): number;
  setSellerAuctionBatch(value: number): void;

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
    marketId: string,
    price: number,
    size: number,
    buyer: string,
    seller: string,
    aggressor: SideMap[keyof SideMap],
    buyOrder: string,
    sellOrder: string,
    timestamp: number,
    type: Trade.TypeMap[keyof Trade.TypeMap],
    buyerFee?: Fee.AsObject,
    sellerFee?: Fee.AsObject,
    buyerAuctionBatch: number,
    sellerAuctionBatch: number,
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
  getMakerFee(): number;
  setMakerFee(value: number): void;

  getInfrastructureFee(): number;
  setInfrastructureFee(value: number): void;

  getLiquidityFee(): number;
  setLiquidityFee(value: number): void;

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
    makerFee: number,
    infrastructureFee: number,
    liquidityFee: number,
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

  getNumberOfOrders(): number;
  setNumberOfOrders(value: number): void;

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
    numberOfOrders: number,
    volume: number,
  }
}

export class MarketDepth extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<PriceLevel>;
  setBuyList(value: Array<PriceLevel>): void;
  addBuy(value?: PriceLevel, index?: number): PriceLevel;

  clearSellList(): void;
  getSellList(): Array<PriceLevel>;
  setSellList(value: Array<PriceLevel>): void;
  addSell(value?: PriceLevel, index?: number): PriceLevel;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

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
    marketId: string,
    buyList: Array<PriceLevel.AsObject>,
    sellList: Array<PriceLevel.AsObject>,
    sequenceNumber: number,
  }
}

export class MarketDepthUpdate extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<PriceLevel>;
  setBuyList(value: Array<PriceLevel>): void;
  addBuy(value?: PriceLevel, index?: number): PriceLevel;

  clearSellList(): void;
  getSellList(): Array<PriceLevel>;
  setSellList(value: Array<PriceLevel>): void;
  addSell(value?: PriceLevel, index?: number): PriceLevel;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

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
    marketId: string,
    buyList: Array<PriceLevel.AsObject>,
    sellList: Array<PriceLevel.AsObject>,
    sequenceNumber: number,
  }
}

export class Position extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getOpenVolume(): number;
  setOpenVolume(value: number): void;

  getRealisedPnl(): number;
  setRealisedPnl(value: number): void;

  getUnrealisedPnl(): number;
  setUnrealisedPnl(value: number): void;

  getAverageEntryPrice(): number;
  setAverageEntryPrice(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

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
    marketId: string,
    partyId: string,
    openVolume: number,
    realisedPnl: number,
    unrealisedPnl: number,
    averageEntryPrice: number,
    updatedAt: number,
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
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getBacklogLength(): number;
  setBacklogLength(value: number): void;

  getTotalPeers(): number;
  setTotalPeers(value: number): void;

  getGenesisTime(): string;
  setGenesisTime(value: string): void;

  getCurrentTime(): string;
  setCurrentTime(value: string): void;

  getVegaTime(): string;
  setVegaTime(value: string): void;

  getStatus(): ChainStatusMap[keyof ChainStatusMap];
  setStatus(value: ChainStatusMap[keyof ChainStatusMap]): void;

  getTxPerBlock(): number;
  setTxPerBlock(value: number): void;

  getAverageTxBytes(): number;
  setAverageTxBytes(value: number): void;

  getAverageOrdersPerBlock(): number;
  setAverageOrdersPerBlock(value: number): void;

  getTradesPerSecond(): number;
  setTradesPerSecond(value: number): void;

  getOrdersPerSecond(): number;
  setOrdersPerSecond(value: number): void;

  getTotalMarkets(): number;
  setTotalMarkets(value: number): void;

  getTotalAmendOrder(): number;
  setTotalAmendOrder(value: number): void;

  getTotalCancelOrder(): number;
  setTotalCancelOrder(value: number): void;

  getTotalCreateOrder(): number;
  setTotalCreateOrder(value: number): void;

  getTotalOrders(): number;
  setTotalOrders(value: number): void;

  getTotalTrades(): number;
  setTotalTrades(value: number): void;

  getOrderSubscriptions(): number;
  setOrderSubscriptions(value: number): void;

  getTradeSubscriptions(): number;
  setTradeSubscriptions(value: number): void;

  getCandleSubscriptions(): number;
  setCandleSubscriptions(value: number): void;

  getMarketDepthSubscriptions(): number;
  setMarketDepthSubscriptions(value: number): void;

  getPositionsSubscriptions(): number;
  setPositionsSubscriptions(value: number): void;

  getAccountSubscriptions(): number;
  setAccountSubscriptions(value: number): void;

  getMarketDataSubscriptions(): number;
  setMarketDataSubscriptions(value: number): void;

  getAppVersionHash(): string;
  setAppVersionHash(value: string): void;

  getAppVersion(): string;
  setAppVersion(value: string): void;

  getChainVersion(): string;
  setChainVersion(value: string): void;

  getBlockDuration(): number;
  setBlockDuration(value: number): void;

  getUptime(): string;
  setUptime(value: string): void;

  getChainId(): string;
  setChainId(value: string): void;

  getMarketDepthUpdatesSubscriptions(): number;
  setMarketDepthUpdatesSubscriptions(value: number): void;

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
    blockHeight: number,
    backlogLength: number,
    totalPeers: number,
    genesisTime: string,
    currentTime: string,
    vegaTime: string,
    status: ChainStatusMap[keyof ChainStatusMap],
    txPerBlock: number,
    averageTxBytes: number,
    averageOrdersPerBlock: number,
    tradesPerSecond: number,
    ordersPerSecond: number,
    totalMarkets: number,
    totalAmendOrder: number,
    totalCancelOrder: number,
    totalCreateOrder: number,
    totalOrders: number,
    totalTrades: number,
    orderSubscriptions: number,
    tradeSubscriptions: number,
    candleSubscriptions: number,
    marketDepthSubscriptions: number,
    positionsSubscriptions: number,
    accountSubscriptions: number,
    marketDataSubscriptions: number,
    appVersionHash: string,
    appVersion: string,
    chainVersion: string,
    blockDuration: number,
    uptime: string,
    chainId: string,
    marketDepthUpdatesSubscriptions: number,
  }
}

export class Deposit extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): Deposit.StatusMap[keyof Deposit.StatusMap];
  setStatus(value: Deposit.StatusMap[keyof Deposit.StatusMap]): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getCreditedTimestamp(): number;
  setCreditedTimestamp(value: number): void;

  getCreatedTimestamp(): number;
  setCreatedTimestamp(value: number): void;

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
    partyId: string,
    asset: string,
    amount: string,
    txHash: string,
    creditedTimestamp: number,
    createdTimestamp: number,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_OPEN: 1;
    STATUS_CANCELLED: 2;
    STATUS_FINALIZED: 3;
  }

  export const Status: StatusMap;
}

export class Withdrawal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

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

  getTxHash(): string;
  setTxHash(value: string): void;

  getCreatedTimestamp(): number;
  setCreatedTimestamp(value: number): void;

  getWithdrawnTimestamp(): number;
  setWithdrawnTimestamp(value: number): void;

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
    partyId: string,
    amount: number,
    asset: string,
    status: Withdrawal.StatusMap[keyof Withdrawal.StatusMap],
    ref: string,
    expiry: number,
    txHash: string,
    createdTimestamp: number,
    withdrawnTimestamp: number,
    ext?: WithdrawExt.AsObject,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_OPEN: 1;
    STATUS_CANCELLED: 2;
    STATUS_FINALIZED: 3;
  }

  export const Status: StatusMap;
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
  getReceiverAddress(): string;
  setReceiverAddress(value: string): void;

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
    receiverAddress: string,
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

  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
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

  getMinAmount(): number;
  setMinAmount(value: number): void;

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
    minAmount: number,
  }
}

export class TransferRequest extends jspb.Message {
  clearFromAccountList(): void;
  getFromAccountList(): Array<Account>;
  setFromAccountList(value: Array<Account>): void;
  addFromAccount(value?: Account, index?: number): Account;

  clearToAccountList(): void;
  getToAccountList(): Array<Account>;
  setToAccountList(value: Array<Account>): void;
  addToAccount(value?: Account, index?: number): Account;

  getAmount(): number;
  setAmount(value: number): void;

  getMinAmount(): number;
  setMinAmount(value: number): void;

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
    fromAccountList: Array<Account.AsObject>,
    toAccountList: Array<Account.AsObject>,
    amount: number,
    minAmount: number,
    asset: string,
    reference: string,
  }
}

export class LedgerEntry extends jspb.Message {
  getFromAccount(): string;
  setFromAccount(value: string): void;

  getToAccount(): string;
  setToAccount(value: string): void;

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
    fromAccount: string,
    toAccount: string,
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
  getMaintenanceMargin(): number;
  setMaintenanceMargin(value: number): void;

  getSearchLevel(): number;
  setSearchLevel(value: number): void;

  getInitialMargin(): number;
  setInitialMargin(value: number): void;

  getCollateralReleaseLevel(): number;
  setCollateralReleaseLevel(value: number): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    maintenanceMargin: number,
    searchLevel: number,
    initialMargin: number,
    collateralReleaseLevel: number,
    partyId: string,
    marketId: string,
    asset: string,
    timestamp: number,
  }
}

export class MarketData extends jspb.Message {
  getMarkPrice(): number;
  setMarkPrice(value: number): void;

  getBestBidPrice(): number;
  setBestBidPrice(value: number): void;

  getBestBidVolume(): number;
  setBestBidVolume(value: number): void;

  getBestOfferPrice(): number;
  setBestOfferPrice(value: number): void;

  getBestOfferVolume(): number;
  setBestOfferVolume(value: number): void;

  getBestStaticBidPrice(): number;
  setBestStaticBidPrice(value: number): void;

  getBestStaticBidVolume(): number;
  setBestStaticBidVolume(value: number): void;

  getBestStaticOfferPrice(): number;
  setBestStaticOfferPrice(value: number): void;

  getBestStaticOfferVolume(): number;
  setBestStaticOfferVolume(value: number): void;

  getMidPrice(): number;
  setMidPrice(value: number): void;

  getStaticMidPrice(): number;
  setStaticMidPrice(value: number): void;

  getMarket(): string;
  setMarket(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getOpenInterest(): number;
  setOpenInterest(value: number): void;

  getAuctionEnd(): number;
  setAuctionEnd(value: number): void;

  getAuctionStart(): number;
  setAuctionStart(value: number): void;

  getIndicativePrice(): number;
  setIndicativePrice(value: number): void;

  getIndicativeVolume(): number;
  setIndicativeVolume(value: number): void;

  getMarketTradingMode(): markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap];
  setMarketTradingMode(value: markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap]): void;

  getTrigger(): AuctionTriggerMap[keyof AuctionTriggerMap];
  setTrigger(value: AuctionTriggerMap[keyof AuctionTriggerMap]): void;

  getTargetStake(): string;
  setTargetStake(value: string): void;

  getSuppliedStake(): string;
  setSuppliedStake(value: string): void;

  clearPriceMonitoringBoundsList(): void;
  getPriceMonitoringBoundsList(): Array<PriceMonitoringBounds>;
  setPriceMonitoringBoundsList(value: Array<PriceMonitoringBounds>): void;
  addPriceMonitoringBounds(value?: PriceMonitoringBounds, index?: number): PriceMonitoringBounds;

  getMarketValueProxy(): string;
  setMarketValueProxy(value: string): void;

  clearLiquidityProviderFeeShareList(): void;
  getLiquidityProviderFeeShareList(): Array<LiquidityProviderFeeShare>;
  setLiquidityProviderFeeShareList(value: Array<LiquidityProviderFeeShare>): void;
  addLiquidityProviderFeeShare(value?: LiquidityProviderFeeShare, index?: number): LiquidityProviderFeeShare;

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
    markPrice: number,
    bestBidPrice: number,
    bestBidVolume: number,
    bestOfferPrice: number,
    bestOfferVolume: number,
    bestStaticBidPrice: number,
    bestStaticBidVolume: number,
    bestStaticOfferPrice: number,
    bestStaticOfferVolume: number,
    midPrice: number,
    staticMidPrice: number,
    market: string,
    timestamp: number,
    openInterest: number,
    auctionEnd: number,
    auctionStart: number,
    indicativePrice: number,
    indicativeVolume: number,
    marketTradingMode: markets_pb.Market.TradingModeMap[keyof markets_pb.Market.TradingModeMap],
    trigger: AuctionTriggerMap[keyof AuctionTriggerMap],
    targetStake: string,
    suppliedStake: string,
    priceMonitoringBoundsList: Array<PriceMonitoringBounds.AsObject>,
    marketValueProxy: string,
    liquidityProviderFeeShareList: Array<LiquidityProviderFeeShare.AsObject>,
  }
}

export class LiquidityProviderFeeShare extends jspb.Message {
  getParty(): string;
  setParty(value: string): void;

  getEquityLikeShare(): string;
  setEquityLikeShare(value: string): void;

  getAverageEntryValuation(): string;
  setAverageEntryValuation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityProviderFeeShare.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityProviderFeeShare): LiquidityProviderFeeShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityProviderFeeShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityProviderFeeShare;
  static deserializeBinaryFromReader(message: LiquidityProviderFeeShare, reader: jspb.BinaryReader): LiquidityProviderFeeShare;
}

export namespace LiquidityProviderFeeShare {
  export type AsObject = {
    party: string,
    equityLikeShare: string,
    averageEntryValuation: string,
  }
}

export class PriceMonitoringBounds extends jspb.Message {
  getMinValidPrice(): number;
  setMinValidPrice(value: number): void;

  getMaxValidPrice(): number;
  setMaxValidPrice(value: number): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): markets_pb.PriceMonitoringTrigger | undefined;
  setTrigger(value?: markets_pb.PriceMonitoringTrigger): void;

  getReferencePrice(): number;
  setReferencePrice(value: number): void;

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
    minValidPrice: number,
    maxValidPrice: number,
    trigger?: markets_pb.PriceMonitoringTrigger.AsObject,
    referencePrice: number,
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
  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): void;

  getNonce(): number;
  setNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): Uint8Array | string;
  getPubKey_asU8(): Uint8Array;
  getPubKey_asB64(): string;
  setPubKey(value: Uint8Array | string): void;

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
    inputData: Uint8Array | string,
    nonce: number,
    blockHeight: number,
    address: Uint8Array | string,
    pubKey: Uint8Array | string,
  }

  export enum FromCase {
    FROM_NOT_SET = 0,
    ADDRESS = 1001,
    PUB_KEY = 1002,
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

export class LiquidityOrderReference extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  hasLiquidityOrder(): boolean;
  clearLiquidityOrder(): void;
  getLiquidityOrder(): LiquidityOrder | undefined;
  setLiquidityOrder(value?: LiquidityOrder): void;

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
    orderId: string,
    liquidityOrder?: LiquidityOrder.AsObject,
  }
}

export class LiquidityProvision extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getCommitmentAmount(): number;
  setCommitmentAmount(value: number): void;

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

  getReference(): string;
  setReference(value: string): void;

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
    partyId: string,
    createdAt: number,
    updatedAt: number,
    marketId: string,
    commitmentAmount: number,
    fee: string,
    sellsList: Array<LiquidityOrderReference.AsObject>,
    buysList: Array<LiquidityOrderReference.AsObject>,
    version: string,
    status: LiquidityProvision.StatusMap[keyof LiquidityProvision.StatusMap],
    reference: string,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_ACTIVE: 1;
    STATUS_STOPPED: 2;
    STATUS_CANCELLED: 3;
    STATUS_REJECTED: 4;
    STATUS_UNDEPLOYED: 5;
    STATUS_PENDING: 6;
  }

  export const Status: StatusMap;
}

export class EthereumConfig extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): void;

  getChainId(): string;
  setChainId(value: string): void;

  getBridgeAddress(): string;
  setBridgeAddress(value: string): void;

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
    networkId: string,
    chainId: string,
    bridgeAddress: string,
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
  ORDER_ERROR_UNSPECIFIED: 0;
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
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE: 12;
  TRANSFER_TYPE_LIQUIDITY_FEE_PAY: 13;
  TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE: 14;
  TRANSFER_TYPE_BOND_LOW: 15;
  TRANSFER_TYPE_BOND_HIGH: 16;
  TRANSFER_TYPE_WITHDRAW_LOCK: 17;
  TRANSFER_TYPE_WITHDRAW: 18;
  TRANSFER_TYPE_DEPOSIT: 19;
  TRANSFER_TYPE_BOND_SLASHING: 20;
}

export const TransferType: TransferTypeMap;

