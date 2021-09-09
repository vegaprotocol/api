// package: api.v1
// file: api/trading.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_trading_pb from "../api/trading_pb";
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

interface ITradingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitTransactionV2: ITradingServiceService_ISubmitTransactionV2;
    propagateChainEvent: ITradingServiceService_IPropagateChainEvent;
    statistics: ITradingServiceService_IStatistics;
    lastBlockHeight: ITradingServiceService_ILastBlockHeight;
    getVegaTime: ITradingServiceService_IGetVegaTime;
    observeEventBus: ITradingServiceService_IObserveEventBus;
}

interface ITradingServiceService_ISubmitTransactionV2 extends grpc.MethodDefinition<api_trading_pb.SubmitTransactionV2Request, api_trading_pb.SubmitTransactionV2Response> {
    path: "/api.v1.TradingService/SubmitTransactionV2";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_trading_pb.SubmitTransactionV2Request>;
    requestDeserialize: grpc.deserialize<api_trading_pb.SubmitTransactionV2Request>;
    responseSerialize: grpc.serialize<api_trading_pb.SubmitTransactionV2Response>;
    responseDeserialize: grpc.deserialize<api_trading_pb.SubmitTransactionV2Response>;
}
interface ITradingServiceService_IPropagateChainEvent extends grpc.MethodDefinition<api_trading_pb.PropagateChainEventRequest, api_trading_pb.PropagateChainEventResponse> {
    path: "/api.v1.TradingService/PropagateChainEvent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_trading_pb.PropagateChainEventRequest>;
    requestDeserialize: grpc.deserialize<api_trading_pb.PropagateChainEventRequest>;
    responseSerialize: grpc.serialize<api_trading_pb.PropagateChainEventResponse>;
    responseDeserialize: grpc.deserialize<api_trading_pb.PropagateChainEventResponse>;
}
interface ITradingServiceService_IStatistics extends grpc.MethodDefinition<api_trading_pb.StatisticsRequest, api_trading_pb.StatisticsResponse> {
    path: "/api.v1.TradingService/Statistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_trading_pb.StatisticsRequest>;
    requestDeserialize: grpc.deserialize<api_trading_pb.StatisticsRequest>;
    responseSerialize: grpc.serialize<api_trading_pb.StatisticsResponse>;
    responseDeserialize: grpc.deserialize<api_trading_pb.StatisticsResponse>;
}
interface ITradingServiceService_ILastBlockHeight extends grpc.MethodDefinition<api_trading_pb.LastBlockHeightRequest, api_trading_pb.LastBlockHeightResponse> {
    path: "/api.v1.TradingService/LastBlockHeight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_trading_pb.LastBlockHeightRequest>;
    requestDeserialize: grpc.deserialize<api_trading_pb.LastBlockHeightRequest>;
    responseSerialize: grpc.serialize<api_trading_pb.LastBlockHeightResponse>;
    responseDeserialize: grpc.deserialize<api_trading_pb.LastBlockHeightResponse>;
}
interface ITradingServiceService_IGetVegaTime extends grpc.MethodDefinition<api_trading_pb.GetVegaTimeRequest, api_trading_pb.GetVegaTimeResponse> {
    path: "/api.v1.TradingService/GetVegaTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_trading_pb.GetVegaTimeRequest>;
    requestDeserialize: grpc.deserialize<api_trading_pb.GetVegaTimeRequest>;
    responseSerialize: grpc.serialize<api_trading_pb.GetVegaTimeResponse>;
    responseDeserialize: grpc.deserialize<api_trading_pb.GetVegaTimeResponse>;
}
interface ITradingServiceService_IObserveEventBus extends grpc.MethodDefinition<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse> {
    path: "/api.v1.TradingService/ObserveEventBus";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<api_trading_pb.ObserveEventBusRequest>;
    requestDeserialize: grpc.deserialize<api_trading_pb.ObserveEventBusRequest>;
    responseSerialize: grpc.serialize<api_trading_pb.ObserveEventBusResponse>;
    responseDeserialize: grpc.deserialize<api_trading_pb.ObserveEventBusResponse>;
}

export const TradingServiceService: ITradingServiceService;

export interface ITradingServiceServer extends grpc.UntypedServiceImplementation {
    submitTransactionV2: grpc.handleUnaryCall<api_trading_pb.SubmitTransactionV2Request, api_trading_pb.SubmitTransactionV2Response>;
    propagateChainEvent: grpc.handleUnaryCall<api_trading_pb.PropagateChainEventRequest, api_trading_pb.PropagateChainEventResponse>;
    statistics: grpc.handleUnaryCall<api_trading_pb.StatisticsRequest, api_trading_pb.StatisticsResponse>;
    lastBlockHeight: grpc.handleUnaryCall<api_trading_pb.LastBlockHeightRequest, api_trading_pb.LastBlockHeightResponse>;
    getVegaTime: grpc.handleUnaryCall<api_trading_pb.GetVegaTimeRequest, api_trading_pb.GetVegaTimeResponse>;
    observeEventBus: grpc.handleBidiStreamingCall<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
}

export interface ITradingServiceClient {
    submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    statistics(request: api_trading_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    statistics(request: api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: api_trading_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    getVegaTime(request: api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    observeEventBus(): grpc.ClientDuplexStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
    observeEventBus(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
    observeEventBus(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
}

export class TradingServiceClient extends grpc.Client implements ITradingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    public submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    public submitTransactionV2(request: api_trading_pb.SubmitTransactionV2Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.SubmitTransactionV2Response) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public propagateChainEvent(request: api_trading_pb.PropagateChainEventRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.PropagateChainEventResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: api_trading_pb.StatisticsRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public statistics(request: api_trading_pb.StatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.StatisticsResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public lastBlockHeight(request: api_trading_pb.LastBlockHeightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.LastBlockHeightResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: api_trading_pb.GetVegaTimeRequest, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public getVegaTime(request: api_trading_pb.GetVegaTimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_trading_pb.GetVegaTimeResponse) => void): grpc.ClientUnaryCall;
    public observeEventBus(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
    public observeEventBus(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<api_trading_pb.ObserveEventBusRequest, api_trading_pb.ObserveEventBusResponse>;
}
