// package: api.v1
// file: api/trading.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_pb from "../vega_pb";
import * as markets_pb from "../markets_pb";
import * as governance_pb from "../governance_pb";
import * as assets_pb from "../assets_pb";
import * as events_v1_events_pb from "../events/v1/events_pb";
import * as oracles_v1_spec_pb from "../oracles/v1/spec_pb";
import * as oracles_v1_data_pb from "../oracles/v1/data_pb";
import * as commands_v1_commands_pb from "../commands/v1/commands_pb";
import * as commands_v1_transaction_pb from "../commands/v1/transaction_pb";
import * as commands_v1_validator_commands_pb from "../commands/v1/validator_commands_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../github.com/mwitkow/go-proto-validators/validator_pb";

export class PropagateChainEventRequest extends jspb.Message {
    getEvent(): Uint8Array | string;
    getEvent_asU8(): Uint8Array;
    getEvent_asB64(): string;
    setEvent(value: Uint8Array | string): PropagateChainEventRequest;
    getPubKey(): string;
    setPubKey(value: string): PropagateChainEventRequest;
    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): PropagateChainEventRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PropagateChainEventRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PropagateChainEventRequest): PropagateChainEventRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PropagateChainEventRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PropagateChainEventRequest;
    static deserializeBinaryFromReader(message: PropagateChainEventRequest, reader: jspb.BinaryReader): PropagateChainEventRequest;
}

export namespace PropagateChainEventRequest {
    export type AsObject = {
        event: Uint8Array | string,
        pubKey: string,
        signature: Uint8Array | string,
    }
}

export class PropagateChainEventResponse extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): PropagateChainEventResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PropagateChainEventResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PropagateChainEventResponse): PropagateChainEventResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PropagateChainEventResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PropagateChainEventResponse;
    static deserializeBinaryFromReader(message: PropagateChainEventResponse, reader: jspb.BinaryReader): PropagateChainEventResponse;
}

export namespace PropagateChainEventResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class SubmitTransactionV2Request extends jspb.Message {

    hasTx(): boolean;
    clearTx(): void;
    getTx(): commands_v1_transaction_pb.Transaction | undefined;
    setTx(value?: commands_v1_transaction_pb.Transaction): SubmitTransactionV2Request;
    getType(): SubmitTransactionV2Request.Type;
    setType(value: SubmitTransactionV2Request.Type): SubmitTransactionV2Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitTransactionV2Request.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitTransactionV2Request): SubmitTransactionV2Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitTransactionV2Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitTransactionV2Request;
    static deserializeBinaryFromReader(message: SubmitTransactionV2Request, reader: jspb.BinaryReader): SubmitTransactionV2Request;
}

export namespace SubmitTransactionV2Request {
    export type AsObject = {
        tx?: commands_v1_transaction_pb.Transaction.AsObject,
        type: SubmitTransactionV2Request.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_ASYNC = 1,
    TYPE_SYNC = 2,
    TYPE_COMMIT = 3,
    }

}

export class SubmitTransactionV2Response extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): SubmitTransactionV2Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitTransactionV2Response.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitTransactionV2Response): SubmitTransactionV2Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitTransactionV2Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitTransactionV2Response;
    static deserializeBinaryFromReader(message: SubmitTransactionV2Response, reader: jspb.BinaryReader): SubmitTransactionV2Response;
}

export namespace SubmitTransactionV2Response {
    export type AsObject = {
        success: boolean,
    }
}

export class GetVegaTimeRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVegaTimeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVegaTimeRequest): GetVegaTimeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVegaTimeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVegaTimeRequest;
    static deserializeBinaryFromReader(message: GetVegaTimeRequest, reader: jspb.BinaryReader): GetVegaTimeRequest;
}

export namespace GetVegaTimeRequest {
    export type AsObject = {
    }
}

export class GetVegaTimeResponse extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): GetVegaTimeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVegaTimeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetVegaTimeResponse): GetVegaTimeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVegaTimeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVegaTimeResponse;
    static deserializeBinaryFromReader(message: GetVegaTimeResponse, reader: jspb.BinaryReader): GetVegaTimeResponse;
}

export namespace GetVegaTimeResponse {
    export type AsObject = {
        timestamp: number,
    }
}

export class ObserveEventBusRequest extends jspb.Message {
    clearTypeList(): void;
    getTypeList(): Array<events_v1_events_pb.BusEventType>;
    setTypeList(value: Array<events_v1_events_pb.BusEventType>): ObserveEventBusRequest;
    addType(value: events_v1_events_pb.BusEventType, index?: number): events_v1_events_pb.BusEventType;
    getMarketId(): string;
    setMarketId(value: string): ObserveEventBusRequest;
    getPartyId(): string;
    setPartyId(value: string): ObserveEventBusRequest;
    getBatchSize(): number;
    setBatchSize(value: number): ObserveEventBusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveEventBusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveEventBusRequest): ObserveEventBusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveEventBusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveEventBusRequest;
    static deserializeBinaryFromReader(message: ObserveEventBusRequest, reader: jspb.BinaryReader): ObserveEventBusRequest;
}

export namespace ObserveEventBusRequest {
    export type AsObject = {
        typeList: Array<events_v1_events_pb.BusEventType>,
        marketId: string,
        partyId: string,
        batchSize: number,
    }
}

export class ObserveEventBusResponse extends jspb.Message {
    clearEventsList(): void;
    getEventsList(): Array<events_v1_events_pb.BusEvent>;
    setEventsList(value: Array<events_v1_events_pb.BusEvent>): ObserveEventBusResponse;
    addEvents(value?: events_v1_events_pb.BusEvent, index?: number): events_v1_events_pb.BusEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObserveEventBusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ObserveEventBusResponse): ObserveEventBusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObserveEventBusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObserveEventBusResponse;
    static deserializeBinaryFromReader(message: ObserveEventBusResponse, reader: jspb.BinaryReader): ObserveEventBusResponse;
}

export namespace ObserveEventBusResponse {
    export type AsObject = {
        eventsList: Array<events_v1_events_pb.BusEvent.AsObject>,
    }
}

export class StatisticsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsRequest): StatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsRequest;
    static deserializeBinaryFromReader(message: StatisticsRequest, reader: jspb.BinaryReader): StatisticsRequest;
}

export namespace StatisticsRequest {
    export type AsObject = {
    }
}

export class StatisticsResponse extends jspb.Message {

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): Statistics | undefined;
    setStatistics(value?: Statistics): StatisticsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatisticsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatisticsResponse): StatisticsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatisticsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatisticsResponse;
    static deserializeBinaryFromReader(message: StatisticsResponse, reader: jspb.BinaryReader): StatisticsResponse;
}

export namespace StatisticsResponse {
    export type AsObject = {
        statistics?: Statistics.AsObject,
    }
}

export class Statistics extends jspb.Message {
    getBlockHeight(): number;
    setBlockHeight(value: number): Statistics;
    getBacklogLength(): number;
    setBacklogLength(value: number): Statistics;
    getTotalPeers(): number;
    setTotalPeers(value: number): Statistics;
    getGenesisTime(): string;
    setGenesisTime(value: string): Statistics;
    getCurrentTime(): string;
    setCurrentTime(value: string): Statistics;
    getVegaTime(): string;
    setVegaTime(value: string): Statistics;
    getStatus(): vega_pb.ChainStatus;
    setStatus(value: vega_pb.ChainStatus): Statistics;
    getTxPerBlock(): number;
    setTxPerBlock(value: number): Statistics;
    getAverageTxBytes(): number;
    setAverageTxBytes(value: number): Statistics;
    getAverageOrdersPerBlock(): number;
    setAverageOrdersPerBlock(value: number): Statistics;
    getTradesPerSecond(): number;
    setTradesPerSecond(value: number): Statistics;
    getOrdersPerSecond(): number;
    setOrdersPerSecond(value: number): Statistics;
    getTotalMarkets(): number;
    setTotalMarkets(value: number): Statistics;
    getTotalAmendOrder(): number;
    setTotalAmendOrder(value: number): Statistics;
    getTotalCancelOrder(): number;
    setTotalCancelOrder(value: number): Statistics;
    getTotalCreateOrder(): number;
    setTotalCreateOrder(value: number): Statistics;
    getTotalOrders(): number;
    setTotalOrders(value: number): Statistics;
    getTotalTrades(): number;
    setTotalTrades(value: number): Statistics;
    getOrderSubscriptions(): number;
    setOrderSubscriptions(value: number): Statistics;
    getTradeSubscriptions(): number;
    setTradeSubscriptions(value: number): Statistics;
    getCandleSubscriptions(): number;
    setCandleSubscriptions(value: number): Statistics;
    getMarketDepthSubscriptions(): number;
    setMarketDepthSubscriptions(value: number): Statistics;
    getPositionsSubscriptions(): number;
    setPositionsSubscriptions(value: number): Statistics;
    getAccountSubscriptions(): number;
    setAccountSubscriptions(value: number): Statistics;
    getMarketDataSubscriptions(): number;
    setMarketDataSubscriptions(value: number): Statistics;
    getAppVersionHash(): string;
    setAppVersionHash(value: string): Statistics;
    getAppVersion(): string;
    setAppVersion(value: string): Statistics;
    getChainVersion(): string;
    setChainVersion(value: string): Statistics;
    getBlockDuration(): number;
    setBlockDuration(value: number): Statistics;
    getUptime(): string;
    setUptime(value: string): Statistics;
    getChainId(): string;
    setChainId(value: string): Statistics;
    getMarketDepthUpdatesSubscriptions(): number;
    setMarketDepthUpdatesSubscriptions(value: number): Statistics;

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
        status: vega_pb.ChainStatus,
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

export class LastBlockHeightRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastBlockHeightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LastBlockHeightRequest): LastBlockHeightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastBlockHeightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastBlockHeightRequest;
    static deserializeBinaryFromReader(message: LastBlockHeightRequest, reader: jspb.BinaryReader): LastBlockHeightRequest;
}

export namespace LastBlockHeightRequest {
    export type AsObject = {
    }
}

export class LastBlockHeightResponse extends jspb.Message {
    getHeight(): number;
    setHeight(value: number): LastBlockHeightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastBlockHeightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LastBlockHeightResponse): LastBlockHeightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastBlockHeightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastBlockHeightResponse;
    static deserializeBinaryFromReader(message: LastBlockHeightResponse, reader: jspb.BinaryReader): LastBlockHeightResponse;
}

export namespace LastBlockHeightResponse {
    export type AsObject = {
        height: number,
    }
}
