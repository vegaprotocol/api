// package: vega
// file: vega.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "./github.com/mwitkow/go-proto-validators/validator_pb";
import * as markets_pb from "./markets_pb";
import * as assets_pb from "./assets_pb";

export class Price extends jspb.Message {
    getValue(): number;
    setValue(value: number): Price;

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
    setValue(value: number): Timestamp;

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
    setId(value: string): Party;
    clearDelegationsList(): void;
    getDelegationsList(): Array<Delegation>;
    setDelegationsList(value: Array<Delegation>): Party;
    addDelegations(value?: Delegation, index?: number): Delegation;

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
        delegationsList: Array<Delegation.AsObject>,
    }
}

export class RiskFactor extends jspb.Message {
    getMarket(): string;
    setMarket(value: string): RiskFactor;
    getShort(): number;
    setShort(value: number): RiskFactor;
    getLong(): number;
    setLong(value: number): RiskFactor;

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
    setUpdatedTimestamp(value: number): RiskResult;

    getRiskFactorsMap(): jspb.Map<string, RiskFactor>;
    clearRiskFactorsMap(): void;
    getNextUpdateTimestamp(): number;
    setNextUpdateTimestamp(value: number): RiskResult;

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
    getReference(): PeggedReference;
    setReference(value: PeggedReference): PeggedOrder;
    getOffset(): number;
    setOffset(value: number): PeggedOrder;

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
        reference: PeggedReference,
        offset: number,
    }
}

export class Order extends jspb.Message {
    getId(): string;
    setId(value: string): Order;
    getMarketId(): string;
    setMarketId(value: string): Order;
    getPartyId(): string;
    setPartyId(value: string): Order;
    getSide(): Side;
    setSide(value: Side): Order;
    getPrice(): number;
    setPrice(value: number): Order;
    getSize(): number;
    setSize(value: number): Order;
    getRemaining(): number;
    setRemaining(value: number): Order;
    getTimeInForce(): Order.TimeInForce;
    setTimeInForce(value: Order.TimeInForce): Order;
    getType(): Order.Type;
    setType(value: Order.Type): Order;
    getCreatedAt(): number;
    setCreatedAt(value: number): Order;
    getStatus(): Order.Status;
    setStatus(value: Order.Status): Order;
    getExpiresAt(): number;
    setExpiresAt(value: number): Order;
    getReference(): string;
    setReference(value: string): Order;
    getReason(): OrderError;
    setReason(value: OrderError): Order;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): Order;
    getVersion(): number;
    setVersion(value: number): Order;
    getBatchId(): number;
    setBatchId(value: number): Order;

    hasPeggedOrder(): boolean;
    clearPeggedOrder(): void;
    getPeggedOrder(): PeggedOrder | undefined;
    setPeggedOrder(value?: PeggedOrder): Order;
    getLiquidityProvisionId(): string;
    setLiquidityProvisionId(value: string): Order;

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
        side: Side,
        price: number,
        size: number,
        remaining: number,
        timeInForce: Order.TimeInForce,
        type: Order.Type,
        createdAt: number,
        status: Order.Status,
        expiresAt: number,
        reference: string,
        reason: OrderError,
        updatedAt: number,
        version: number,
        batchId: number,
        peggedOrder?: PeggedOrder.AsObject,
        liquidityProvisionId: string,
    }

    export enum TimeInForce {
    TIME_IN_FORCE_UNSPECIFIED = 0,
    TIME_IN_FORCE_GTC = 1,
    TIME_IN_FORCE_GTT = 2,
    TIME_IN_FORCE_IOC = 3,
    TIME_IN_FORCE_FOK = 4,
    TIME_IN_FORCE_GFA = 5,
    TIME_IN_FORCE_GFN = 6,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_LIMIT = 1,
    TYPE_MARKET = 2,
    TYPE_NETWORK = 3,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_ACTIVE = 1,
    STATUS_EXPIRED = 2,
    STATUS_CANCELLED = 3,
    STATUS_STOPPED = 4,
    STATUS_FILLED = 5,
    STATUS_REJECTED = 6,
    STATUS_PARTIALLY_FILLED = 7,
    STATUS_PARKED = 8,
    }

}

export class OrderCancellationConfirmation extends jspb.Message {

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): OrderCancellationConfirmation;

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
    setOrder(value?: Order): OrderConfirmation;
    clearTradesList(): void;
    getTradesList(): Array<Trade>;
    setTradesList(value: Array<Trade>): OrderConfirmation;
    addTrades(value?: Trade, index?: number): Trade;
    clearPassiveOrdersAffectedList(): void;
    getPassiveOrdersAffectedList(): Array<Order>;
    setPassiveOrdersAffectedList(value: Array<Order>): OrderConfirmation;
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
    setMarketId(value: string): AuctionIndicativeState;
    getIndicativePrice(): number;
    setIndicativePrice(value: number): AuctionIndicativeState;
    getIndicativeVolume(): number;
    setIndicativeVolume(value: number): AuctionIndicativeState;
    getAuctionStart(): number;
    setAuctionStart(value: number): AuctionIndicativeState;
    getAuctionEnd(): number;
    setAuctionEnd(value: number): AuctionIndicativeState;

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
    setId(value: string): Trade;
    getMarketId(): string;
    setMarketId(value: string): Trade;
    getPrice(): number;
    setPrice(value: number): Trade;
    getSize(): number;
    setSize(value: number): Trade;
    getBuyer(): string;
    setBuyer(value: string): Trade;
    getSeller(): string;
    setSeller(value: string): Trade;
    getAggressor(): Side;
    setAggressor(value: Side): Trade;
    getBuyOrder(): string;
    setBuyOrder(value: string): Trade;
    getSellOrder(): string;
    setSellOrder(value: string): Trade;
    getTimestamp(): number;
    setTimestamp(value: number): Trade;
    getType(): Trade.Type;
    setType(value: Trade.Type): Trade;

    hasBuyerFee(): boolean;
    clearBuyerFee(): void;
    getBuyerFee(): Fee | undefined;
    setBuyerFee(value?: Fee): Trade;

    hasSellerFee(): boolean;
    clearSellerFee(): void;
    getSellerFee(): Fee | undefined;
    setSellerFee(value?: Fee): Trade;
    getBuyerAuctionBatch(): number;
    setBuyerAuctionBatch(value: number): Trade;
    getSellerAuctionBatch(): number;
    setSellerAuctionBatch(value: number): Trade;

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
        aggressor: Side,
        buyOrder: string,
        sellOrder: string,
        timestamp: number,
        type: Trade.Type,
        buyerFee?: Fee.AsObject,
        sellerFee?: Fee.AsObject,
        buyerAuctionBatch: number,
        sellerAuctionBatch: number,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_DEFAULT = 1,
    TYPE_NETWORK_CLOSE_OUT_GOOD = 2,
    TYPE_NETWORK_CLOSE_OUT_BAD = 3,
    }

}

export class Fee extends jspb.Message {
    getMakerFee(): number;
    setMakerFee(value: number): Fee;
    getInfrastructureFee(): number;
    setInfrastructureFee(value: number): Fee;
    getLiquidityFee(): number;
    setLiquidityFee(value: number): Fee;

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
    setTradesList(value: Array<Trade>): TradeSet;
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
    setTimestamp(value: number): Candle;
    getDatetime(): string;
    setDatetime(value: string): Candle;
    getHigh(): number;
    setHigh(value: number): Candle;
    getLow(): number;
    setLow(value: number): Candle;
    getOpen(): number;
    setOpen(value: number): Candle;
    getClose(): number;
    setClose(value: number): Candle;
    getVolume(): number;
    setVolume(value: number): Candle;
    getInterval(): Interval;
    setInterval(value: Interval): Candle;

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
        interval: Interval,
    }
}

export class PriceLevel extends jspb.Message {
    getPrice(): number;
    setPrice(value: number): PriceLevel;
    getNumberOfOrders(): number;
    setNumberOfOrders(value: number): PriceLevel;
    getVolume(): number;
    setVolume(value: number): PriceLevel;

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
    setMarketId(value: string): MarketDepth;
    clearBuyList(): void;
    getBuyList(): Array<PriceLevel>;
    setBuyList(value: Array<PriceLevel>): MarketDepth;
    addBuy(value?: PriceLevel, index?: number): PriceLevel;
    clearSellList(): void;
    getSellList(): Array<PriceLevel>;
    setSellList(value: Array<PriceLevel>): MarketDepth;
    addSell(value?: PriceLevel, index?: number): PriceLevel;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): MarketDepth;

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
    setMarketId(value: string): MarketDepthUpdate;
    clearBuyList(): void;
    getBuyList(): Array<PriceLevel>;
    setBuyList(value: Array<PriceLevel>): MarketDepthUpdate;
    addBuy(value?: PriceLevel, index?: number): PriceLevel;
    clearSellList(): void;
    getSellList(): Array<PriceLevel>;
    setSellList(value: Array<PriceLevel>): MarketDepthUpdate;
    addSell(value?: PriceLevel, index?: number): PriceLevel;
    getSequenceNumber(): number;
    setSequenceNumber(value: number): MarketDepthUpdate;

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
    setMarketId(value: string): Position;
    getPartyId(): string;
    setPartyId(value: string): Position;
    getOpenVolume(): number;
    setOpenVolume(value: number): Position;
    getRealisedPnl(): number;
    setRealisedPnl(value: number): Position;
    getUnrealisedPnl(): number;
    setUnrealisedPnl(value: number): Position;
    getAverageEntryPrice(): number;
    setAverageEntryPrice(value: number): Position;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): Position;

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
    setVolume(value: number): PositionTrade;
    getPrice(): number;
    setPrice(value: number): PositionTrade;

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

export class Deposit extends jspb.Message {
    getId(): string;
    setId(value: string): Deposit;
    getStatus(): Deposit.Status;
    setStatus(value: Deposit.Status): Deposit;
    getPartyId(): string;
    setPartyId(value: string): Deposit;
    getAsset(): string;
    setAsset(value: string): Deposit;
    getAmount(): string;
    setAmount(value: string): Deposit;
    getTxHash(): string;
    setTxHash(value: string): Deposit;
    getCreditedTimestamp(): number;
    setCreditedTimestamp(value: number): Deposit;
    getCreatedTimestamp(): number;
    setCreatedTimestamp(value: number): Deposit;

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
        status: Deposit.Status,
        partyId: string,
        asset: string,
        amount: string,
        txHash: string,
        creditedTimestamp: number,
        createdTimestamp: number,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_OPEN = 1,
    STATUS_CANCELLED = 2,
    STATUS_FINALIZED = 3,
    }

}

export class Withdrawal extends jspb.Message {
    getId(): string;
    setId(value: string): Withdrawal;
    getPartyId(): string;
    setPartyId(value: string): Withdrawal;
    getAmount(): number;
    setAmount(value: number): Withdrawal;
    getAsset(): string;
    setAsset(value: string): Withdrawal;
    getStatus(): Withdrawal.Status;
    setStatus(value: Withdrawal.Status): Withdrawal;
    getRef(): string;
    setRef(value: string): Withdrawal;
    getExpiry(): number;
    setExpiry(value: number): Withdrawal;
    getTxHash(): string;
    setTxHash(value: string): Withdrawal;
    getCreatedTimestamp(): number;
    setCreatedTimestamp(value: number): Withdrawal;
    getWithdrawnTimestamp(): number;
    setWithdrawnTimestamp(value: number): Withdrawal;

    hasExt(): boolean;
    clearExt(): void;
    getExt(): WithdrawExt | undefined;
    setExt(value?: WithdrawExt): Withdrawal;

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
        status: Withdrawal.Status,
        ref: string,
        expiry: number,
        txHash: string,
        createdTimestamp: number,
        withdrawnTimestamp: number,
        ext?: WithdrawExt.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_OPEN = 1,
    STATUS_CANCELLED = 2,
    STATUS_FINALIZED = 3,
    }

}

export class WithdrawExt extends jspb.Message {

    hasErc20(): boolean;
    clearErc20(): void;
    getErc20(): Erc20WithdrawExt | undefined;
    setErc20(value?: Erc20WithdrawExt): WithdrawExt;

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
    setReceiverAddress(value: string): Erc20WithdrawExt;

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
    setId(value: string): Account;
    getOwner(): string;
    setOwner(value: string): Account;
    getBalance(): number;
    setBalance(value: number): Account;
    getAsset(): string;
    setAsset(value: string): Account;
    getMarketId(): string;
    setMarketId(value: string): Account;
    getType(): AccountType;
    setType(value: AccountType): Account;

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
        type: AccountType,
    }
}

export class FinancialAmount extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): FinancialAmount;
    getAsset(): string;
    setAsset(value: string): FinancialAmount;

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
    setOwner(value: string): Transfer;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): FinancialAmount | undefined;
    setAmount(value?: FinancialAmount): Transfer;
    getType(): TransferType;
    setType(value: TransferType): Transfer;
    getMinAmount(): number;
    setMinAmount(value: number): Transfer;

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
        type: TransferType,
        minAmount: number,
    }
}

export class TransferRequest extends jspb.Message {
    clearFromAccountList(): void;
    getFromAccountList(): Array<Account>;
    setFromAccountList(value: Array<Account>): TransferRequest;
    addFromAccount(value?: Account, index?: number): Account;
    clearToAccountList(): void;
    getToAccountList(): Array<Account>;
    setToAccountList(value: Array<Account>): TransferRequest;
    addToAccount(value?: Account, index?: number): Account;
    getAmount(): number;
    setAmount(value: number): TransferRequest;
    getMinAmount(): number;
    setMinAmount(value: number): TransferRequest;
    getAsset(): string;
    setAsset(value: string): TransferRequest;
    getReference(): string;
    setReference(value: string): TransferRequest;

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
    setFromAccount(value: string): LedgerEntry;
    getToAccount(): string;
    setToAccount(value: string): LedgerEntry;
    getAmount(): number;
    setAmount(value: number): LedgerEntry;
    getReference(): string;
    setReference(value: string): LedgerEntry;
    getType(): string;
    setType(value: string): LedgerEntry;
    getTimestamp(): number;
    setTimestamp(value: number): LedgerEntry;

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
    setAccount(value?: Account): TransferBalance;
    getBalance(): number;
    setBalance(value: number): TransferBalance;

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
    setTransfersList(value: Array<LedgerEntry>): TransferResponse;
    addTransfers(value?: LedgerEntry, index?: number): LedgerEntry;
    clearBalancesList(): void;
    getBalancesList(): Array<TransferBalance>;
    setBalancesList(value: Array<TransferBalance>): TransferResponse;
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
    setMaintenanceMargin(value: number): MarginLevels;
    getSearchLevel(): number;
    setSearchLevel(value: number): MarginLevels;
    getInitialMargin(): number;
    setInitialMargin(value: number): MarginLevels;
    getCollateralReleaseLevel(): number;
    setCollateralReleaseLevel(value: number): MarginLevels;
    getPartyId(): string;
    setPartyId(value: string): MarginLevels;
    getMarketId(): string;
    setMarketId(value: string): MarginLevels;
    getAsset(): string;
    setAsset(value: string): MarginLevels;
    getTimestamp(): number;
    setTimestamp(value: number): MarginLevels;

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
    setMarkPrice(value: number): MarketData;
    getBestBidPrice(): number;
    setBestBidPrice(value: number): MarketData;
    getBestBidVolume(): number;
    setBestBidVolume(value: number): MarketData;
    getBestOfferPrice(): number;
    setBestOfferPrice(value: number): MarketData;
    getBestOfferVolume(): number;
    setBestOfferVolume(value: number): MarketData;
    getBestStaticBidPrice(): number;
    setBestStaticBidPrice(value: number): MarketData;
    getBestStaticBidVolume(): number;
    setBestStaticBidVolume(value: number): MarketData;
    getBestStaticOfferPrice(): number;
    setBestStaticOfferPrice(value: number): MarketData;
    getBestStaticOfferVolume(): number;
    setBestStaticOfferVolume(value: number): MarketData;
    getMidPrice(): number;
    setMidPrice(value: number): MarketData;
    getStaticMidPrice(): number;
    setStaticMidPrice(value: number): MarketData;
    getMarket(): string;
    setMarket(value: string): MarketData;
    getTimestamp(): number;
    setTimestamp(value: number): MarketData;
    getOpenInterest(): number;
    setOpenInterest(value: number): MarketData;
    getAuctionEnd(): number;
    setAuctionEnd(value: number): MarketData;
    getAuctionStart(): number;
    setAuctionStart(value: number): MarketData;
    getIndicativePrice(): number;
    setIndicativePrice(value: number): MarketData;
    getIndicativeVolume(): number;
    setIndicativeVolume(value: number): MarketData;
    getMarketTradingMode(): markets_pb.Market.TradingMode;
    setMarketTradingMode(value: markets_pb.Market.TradingMode): MarketData;
    getTrigger(): AuctionTrigger;
    setTrigger(value: AuctionTrigger): MarketData;
    getExtensionTrigger(): AuctionTrigger;
    setExtensionTrigger(value: AuctionTrigger): MarketData;
    getTargetStake(): string;
    setTargetStake(value: string): MarketData;
    getSuppliedStake(): string;
    setSuppliedStake(value: string): MarketData;
    clearPriceMonitoringBoundsList(): void;
    getPriceMonitoringBoundsList(): Array<PriceMonitoringBounds>;
    setPriceMonitoringBoundsList(value: Array<PriceMonitoringBounds>): MarketData;
    addPriceMonitoringBounds(value?: PriceMonitoringBounds, index?: number): PriceMonitoringBounds;
    getMarketValueProxy(): string;
    setMarketValueProxy(value: string): MarketData;
    clearLiquidityProviderFeeShareList(): void;
    getLiquidityProviderFeeShareList(): Array<LiquidityProviderFeeShare>;
    setLiquidityProviderFeeShareList(value: Array<LiquidityProviderFeeShare>): MarketData;
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
        marketTradingMode: markets_pb.Market.TradingMode,
        trigger: AuctionTrigger,
        extensionTrigger: AuctionTrigger,
        targetStake: string,
        suppliedStake: string,
        priceMonitoringBoundsList: Array<PriceMonitoringBounds.AsObject>,
        marketValueProxy: string,
        liquidityProviderFeeShareList: Array<LiquidityProviderFeeShare.AsObject>,
    }
}

export class LiquidityProviderFeeShare extends jspb.Message {
    getParty(): string;
    setParty(value: string): LiquidityProviderFeeShare;
    getEquityLikeShare(): string;
    setEquityLikeShare(value: string): LiquidityProviderFeeShare;
    getAverageEntryValuation(): string;
    setAverageEntryValuation(value: string): LiquidityProviderFeeShare;

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
    setMinValidPrice(value: number): PriceMonitoringBounds;
    getMaxValidPrice(): number;
    setMaxValidPrice(value: number): PriceMonitoringBounds;

    hasTrigger(): boolean;
    clearTrigger(): void;
    getTrigger(): markets_pb.PriceMonitoringTrigger | undefined;
    setTrigger(value?: markets_pb.PriceMonitoringTrigger): PriceMonitoringBounds;
    getReferencePrice(): number;
    setReferencePrice(value: number): PriceMonitoringBounds;

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
    setCode(value: number): ErrorDetail;
    getMessage(): string;
    setMessage(value: string): ErrorDetail;
    getInner(): string;
    setInner(value: string): ErrorDetail;

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

export class NetworkParameter extends jspb.Message {
    getKey(): string;
    setKey(value: string): NetworkParameter;
    getValue(): string;
    setValue(value: string): NetworkParameter;

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
    getReference(): PeggedReference;
    setReference(value: PeggedReference): LiquidityOrder;
    getProportion(): number;
    setProportion(value: number): LiquidityOrder;
    getOffset(): number;
    setOffset(value: number): LiquidityOrder;

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
        reference: PeggedReference,
        proportion: number,
        offset: number,
    }
}

export class LiquidityOrderReference extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): LiquidityOrderReference;

    hasLiquidityOrder(): boolean;
    clearLiquidityOrder(): void;
    getLiquidityOrder(): LiquidityOrder | undefined;
    setLiquidityOrder(value?: LiquidityOrder): LiquidityOrderReference;

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
    setId(value: string): LiquidityProvision;
    getPartyId(): string;
    setPartyId(value: string): LiquidityProvision;
    getCreatedAt(): number;
    setCreatedAt(value: number): LiquidityProvision;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): LiquidityProvision;
    getMarketId(): string;
    setMarketId(value: string): LiquidityProvision;
    getCommitmentAmount(): number;
    setCommitmentAmount(value: number): LiquidityProvision;
    getFee(): string;
    setFee(value: string): LiquidityProvision;
    clearSellsList(): void;
    getSellsList(): Array<LiquidityOrderReference>;
    setSellsList(value: Array<LiquidityOrderReference>): LiquidityProvision;
    addSells(value?: LiquidityOrderReference, index?: number): LiquidityOrderReference;
    clearBuysList(): void;
    getBuysList(): Array<LiquidityOrderReference>;
    setBuysList(value: Array<LiquidityOrderReference>): LiquidityProvision;
    addBuys(value?: LiquidityOrderReference, index?: number): LiquidityOrderReference;
    getVersion(): string;
    setVersion(value: string): LiquidityProvision;
    getStatus(): LiquidityProvision.Status;
    setStatus(value: LiquidityProvision.Status): LiquidityProvision;
    getReference(): string;
    setReference(value: string): LiquidityProvision;

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
        status: LiquidityProvision.Status,
        reference: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_ACTIVE = 1,
    STATUS_STOPPED = 2,
    STATUS_CANCELLED = 3,
    STATUS_REJECTED = 4,
    STATUS_UNDEPLOYED = 5,
    STATUS_PENDING = 6,
    }

}

export class EthereumConfig extends jspb.Message {
    getNetworkId(): string;
    setNetworkId(value: string): EthereumConfig;
    getChainId(): string;
    setChainId(value: string): EthereumConfig;
    getBridgeAddress(): string;
    setBridgeAddress(value: string): EthereumConfig;
    getConfirmations(): number;
    setConfirmations(value: number): EthereumConfig;
    clearStakingBridgeAddressesList(): void;
    getStakingBridgeAddressesList(): Array<string>;
    setStakingBridgeAddressesList(value: Array<string>): EthereumConfig;
    addStakingBridgeAddresses(value: string, index?: number): string;

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
        stakingBridgeAddressesList: Array<string>,
    }
}

export class EpochTimestamps extends jspb.Message {
    getStartTime(): number;
    setStartTime(value: number): EpochTimestamps;
    getEndTime(): number;
    setEndTime(value: number): EpochTimestamps;
    getFirstBlock(): number;
    setFirstBlock(value: number): EpochTimestamps;
    getLastBlock(): number;
    setLastBlock(value: number): EpochTimestamps;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochTimestamps.AsObject;
    static toObject(includeInstance: boolean, msg: EpochTimestamps): EpochTimestamps.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochTimestamps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochTimestamps;
    static deserializeBinaryFromReader(message: EpochTimestamps, reader: jspb.BinaryReader): EpochTimestamps;
}

export namespace EpochTimestamps {
    export type AsObject = {
        startTime: number,
        endTime: number,
        firstBlock: number,
        lastBlock: number,
    }
}

export class Epoch extends jspb.Message {
    getSeq(): number;
    setSeq(value: number): Epoch;

    hasTimestamps(): boolean;
    clearTimestamps(): void;
    getTimestamps(): EpochTimestamps | undefined;
    setTimestamps(value?: EpochTimestamps): Epoch;
    clearValidatorsList(): void;
    getValidatorsList(): Array<Node>;
    setValidatorsList(value: Array<Node>): Epoch;
    addValidators(value?: Node, index?: number): Node;
    clearDelegationsList(): void;
    getDelegationsList(): Array<Delegation>;
    setDelegationsList(value: Array<Delegation>): Epoch;
    addDelegations(value?: Delegation, index?: number): Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Epoch.AsObject;
    static toObject(includeInstance: boolean, msg: Epoch): Epoch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Epoch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Epoch;
    static deserializeBinaryFromReader(message: Epoch, reader: jspb.BinaryReader): Epoch;
}

export namespace Epoch {
    export type AsObject = {
        seq: number,
        timestamps?: EpochTimestamps.AsObject,
        validatorsList: Array<Node.AsObject>,
        delegationsList: Array<Delegation.AsObject>,
    }
}

export class EpochParticipation extends jspb.Message {

    hasEpoch(): boolean;
    clearEpoch(): void;
    getEpoch(): Epoch | undefined;
    setEpoch(value?: Epoch): EpochParticipation;
    getOffline(): number;
    setOffline(value: number): EpochParticipation;
    getOnline(): number;
    setOnline(value: number): EpochParticipation;
    getTotalRewards(): number;
    setTotalRewards(value: number): EpochParticipation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochParticipation.AsObject;
    static toObject(includeInstance: boolean, msg: EpochParticipation): EpochParticipation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochParticipation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochParticipation;
    static deserializeBinaryFromReader(message: EpochParticipation, reader: jspb.BinaryReader): EpochParticipation;
}

export namespace EpochParticipation {
    export type AsObject = {
        epoch?: Epoch.AsObject,
        offline: number,
        online: number,
        totalRewards: number,
    }
}

export class EpochData extends jspb.Message {
    getTotal(): number;
    setTotal(value: number): EpochData;
    getOffline(): number;
    setOffline(value: number): EpochData;
    getOnline(): number;
    setOnline(value: number): EpochData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochData.AsObject;
    static toObject(includeInstance: boolean, msg: EpochData): EpochData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EpochData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochData;
    static deserializeBinaryFromReader(message: EpochData, reader: jspb.BinaryReader): EpochData;
}

export namespace EpochData {
    export type AsObject = {
        total: number,
        offline: number,
        online: number,
    }
}

export class Node extends jspb.Message {
    getId(): string;
    setId(value: string): Node;
    getPubKey(): string;
    setPubKey(value: string): Node;
    getInfoUrl(): string;
    setInfoUrl(value: string): Node;
    getLocation(): string;
    setLocation(value: string): Node;
    getStakedByOperator(): string;
    setStakedByOperator(value: string): Node;
    getStakedByDelegates(): string;
    setStakedByDelegates(value: string): Node;
    getStakedTotal(): string;
    setStakedTotal(value: string): Node;
    getMaxIntendedStake(): string;
    setMaxIntendedStake(value: string): Node;
    getPendingStake(): string;
    setPendingStake(value: string): Node;

    hasEpochData(): boolean;
    clearEpochData(): void;
    getEpochData(): EpochData | undefined;
    setEpochData(value?: EpochData): Node;
    getStatus(): NodeStatus;
    setStatus(value: NodeStatus): Node;
    clearDelagationsList(): void;
    getDelagationsList(): Array<Delegation>;
    setDelagationsList(value: Array<Delegation>): Node;
    addDelagations(value?: Delegation, index?: number): Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        id: string,
        pubKey: string,
        infoUrl: string,
        location: string,
        stakedByOperator: string,
        stakedByDelegates: string,
        stakedTotal: string,
        maxIntendedStake: string,
        pendingStake: string,
        epochData?: EpochData.AsObject,
        status: NodeStatus,
        delagationsList: Array<Delegation.AsObject>,
    }
}

export class NodeData extends jspb.Message {
    getStakedTotal(): string;
    setStakedTotal(value: string): NodeData;
    getTotalNodes(): number;
    setTotalNodes(value: number): NodeData;
    getInactiveNodes(): number;
    setInactiveNodes(value: number): NodeData;
    getValidatingNodes(): number;
    setValidatingNodes(value: number): NodeData;
    getUptime(): number;
    setUptime(value: number): NodeData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeData.AsObject;
    static toObject(includeInstance: boolean, msg: NodeData): NodeData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeData;
    static deserializeBinaryFromReader(message: NodeData, reader: jspb.BinaryReader): NodeData;
}

export namespace NodeData {
    export type AsObject = {
        stakedTotal: string,
        totalNodes: number,
        inactiveNodes: number,
        validatingNodes: number,
        uptime: number,
    }
}

export class Delegation extends jspb.Message {
    getParty(): string;
    setParty(value: string): Delegation;
    getNodeId(): string;
    setNodeId(value: string): Delegation;
    getAmount(): string;
    setAmount(value: string): Delegation;
    getEpochSeq(): string;
    setEpochSeq(value: string): Delegation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Delegation.AsObject;
    static toObject(includeInstance: boolean, msg: Delegation): Delegation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Delegation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Delegation;
    static deserializeBinaryFromReader(message: Delegation, reader: jspb.BinaryReader): Delegation;
}

export namespace Delegation {
    export type AsObject = {
        party: string,
        nodeId: string,
        amount: string,
        epochSeq: string,
    }
}

export class RewardDetails extends jspb.Message {
    getAssetId(): string;
    setAssetId(value: string): RewardDetails;
    getPartyId(): string;
    setPartyId(value: string): RewardDetails;
    getEpoch(): number;
    setEpoch(value: number): RewardDetails;
    getAmount(): string;
    setAmount(value: string): RewardDetails;
    getPercentageOfTotal(): string;
    setPercentageOfTotal(value: string): RewardDetails;
    getReceivedAt(): number;
    setReceivedAt(value: number): RewardDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardDetails.AsObject;
    static toObject(includeInstance: boolean, msg: RewardDetails): RewardDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardDetails;
    static deserializeBinaryFromReader(message: RewardDetails, reader: jspb.BinaryReader): RewardDetails;
}

export namespace RewardDetails {
    export type AsObject = {
        assetId: string,
        partyId: string,
        epoch: number,
        amount: string,
        percentageOfTotal: string,
        receivedAt: number,
    }
}

export class RewardPerAssetDetail extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): RewardPerAssetDetail;
    clearDetailsList(): void;
    getDetailsList(): Array<RewardDetails>;
    setDetailsList(value: Array<RewardDetails>): RewardPerAssetDetail;
    addDetails(value?: RewardDetails, index?: number): RewardDetails;
    getTotalForAsset(): string;
    setTotalForAsset(value: string): RewardPerAssetDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardPerAssetDetail.AsObject;
    static toObject(includeInstance: boolean, msg: RewardPerAssetDetail): RewardPerAssetDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardPerAssetDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardPerAssetDetail;
    static deserializeBinaryFromReader(message: RewardPerAssetDetail, reader: jspb.BinaryReader): RewardPerAssetDetail;
}

export namespace RewardPerAssetDetail {
    export type AsObject = {
        asset: string,
        detailsList: Array<RewardDetails.AsObject>,
        totalForAsset: string,
    }
}

export enum Side {
    SIDE_UNSPECIFIED = 0,
    SIDE_BUY = 1,
    SIDE_SELL = 2,
}

export enum Interval {
    INTERVAL_UNSPECIFIED = 0,
    INTERVAL_I1M = 60,
    INTERVAL_I5M = 300,
    INTERVAL_I15M = 900,
    INTERVAL_I1H = 3600,
    INTERVAL_I6H = 21600,
    INTERVAL_I1D = 86400,
}

export enum AuctionTrigger {
    AUCTION_TRIGGER_UNSPECIFIED = 0,
    AUCTION_TRIGGER_BATCH = 1,
    AUCTION_TRIGGER_OPENING = 2,
    AUCTION_TRIGGER_PRICE = 3,
    AUCTION_TRIGGER_LIQUIDITY = 4,
}

export enum PeggedReference {
    PEGGED_REFERENCE_UNSPECIFIED = 0,
    PEGGED_REFERENCE_MID = 1,
    PEGGED_REFERENCE_BEST_BID = 2,
    PEGGED_REFERENCE_BEST_ASK = 3,
}

export enum OrderError {
    ORDER_ERROR_UNSPECIFIED = 0,
    ORDER_ERROR_INVALID_MARKET_ID = 1,
    ORDER_ERROR_INVALID_ORDER_ID = 2,
    ORDER_ERROR_OUT_OF_SEQUENCE = 3,
    ORDER_ERROR_INVALID_REMAINING_SIZE = 4,
    ORDER_ERROR_TIME_FAILURE = 5,
    ORDER_ERROR_REMOVAL_FAILURE = 6,
    ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 7,
    ORDER_ERROR_INVALID_ORDER_REFERENCE = 8,
    ORDER_ERROR_EDIT_NOT_ALLOWED = 9,
    ORDER_ERROR_AMEND_FAILURE = 10,
    ORDER_ERROR_NOT_FOUND = 11,
    ORDER_ERROR_INVALID_PARTY_ID = 12,
    ORDER_ERROR_MARKET_CLOSED = 13,
    ORDER_ERROR_MARGIN_CHECK_FAILED = 14,
    ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 15,
    ORDER_ERROR_INTERNAL_ERROR = 16,
    ORDER_ERROR_INVALID_SIZE = 17,
    ORDER_ERROR_INVALID_PERSISTENCE = 18,
    ORDER_ERROR_INVALID_TYPE = 19,
    ORDER_ERROR_SELF_TRADING = 20,
    ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 21,
    ORDER_ERROR_INCORRECT_MARKET_TYPE = 22,
    ORDER_ERROR_INVALID_TIME_IN_FORCE = 23,
    ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION = 24,
    ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING = 25,
    ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 26,
    ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 27,
    ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 28,
    ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 29,
    ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 30,
    ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 31,
    ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 32,
    ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 33,
    ORDER_ERROR_MUST_BE_LIMIT_ORDER = 34,
    ORDER_ERROR_MUST_BE_GTT_OR_GTC = 35,
    ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 36,
    ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 37,
    ORDER_ERROR_OFFSET_MUST_BE_LESS_OR_EQUAL_TO_ZERO = 38,
    ORDER_ERROR_OFFSET_MUST_BE_LESS_THAN_ZERO = 39,
    ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 40,
    ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 41,
    ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 42,
    ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 43,
    ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 44,
    ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 45,
    ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 46,
    ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 47,
}

export enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_DISCONNECTED = 1,
    CHAIN_STATUS_REPLAYING = 2,
    CHAIN_STATUS_CONNECTED = 3,
}

export enum AccountType {
    ACCOUNT_TYPE_UNSPECIFIED = 0,
    ACCOUNT_TYPE_INSURANCE = 1,
    ACCOUNT_TYPE_SETTLEMENT = 2,
    ACCOUNT_TYPE_MARGIN = 3,
    ACCOUNT_TYPE_GENERAL = 4,
    ACCOUNT_TYPE_FEES_INFRASTRUCTURE = 5,
    ACCOUNT_TYPE_FEES_LIQUIDITY = 6,
    ACCOUNT_TYPE_FEES_MAKER = 7,
    ACCOUNT_TYPE_LOCK_WITHDRAW = 8,
    ACCOUNT_TYPE_BOND = 9,
    ACCOUNT_TYPE_EXTERNAL = 10,
    ACCOUNT_TYPE_GLOBAL_INSURANCE = 11,
    ACCOUNT_TYPE_GLOBAL_REWARD = 12,
}

export enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    TRANSFER_TYPE_LOSS = 1,
    TRANSFER_TYPE_WIN = 2,
    TRANSFER_TYPE_CLOSE = 3,
    TRANSFER_TYPE_MTM_LOSS = 4,
    TRANSFER_TYPE_MTM_WIN = 5,
    TRANSFER_TYPE_MARGIN_LOW = 6,
    TRANSFER_TYPE_MARGIN_HIGH = 7,
    TRANSFER_TYPE_MARGIN_CONFISCATED = 8,
    TRANSFER_TYPE_MAKER_FEE_PAY = 9,
    TRANSFER_TYPE_MAKER_FEE_RECEIVE = 10,
    TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY = 11,
    TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE = 12,
    TRANSFER_TYPE_LIQUIDITY_FEE_PAY = 13,
    TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE = 14,
    TRANSFER_TYPE_BOND_LOW = 15,
    TRANSFER_TYPE_BOND_HIGH = 16,
    TRANSFER_TYPE_WITHDRAW_LOCK = 17,
    TRANSFER_TYPE_WITHDRAW = 18,
    TRANSFER_TYPE_DEPOSIT = 19,
    TRANSFER_TYPE_BOND_SLASHING = 20,
    TRANSFER_TYPE_STAKE_REWARD = 21,
}

export enum NodeStatus {
    NODE_STATUS_UNSPECIFIED = 0,
    NODE_STATUS_VALIDATOR = 1,
    NODE_STATUS_NON_VALIDATOR = 2,
}
