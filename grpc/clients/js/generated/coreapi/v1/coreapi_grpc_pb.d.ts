// package: vega.coreapi.v1
// file: coreapi/v1/coreapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as coreapi_v1_coreapi_pb from "../../coreapi/v1/coreapi_pb";
import * as assets_pb from "../../assets_pb";
import * as vega_pb from "../../vega_pb";
import * as events_v1_events_pb from "../../events/v1/events_pb";

interface ICoreApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAccounts: ICoreApiServiceService_IListAccounts;
    listAssets: ICoreApiServiceService_IListAssets;
    listNetworkParameters: ICoreApiServiceService_IListNetworkParameters;
    listParties: ICoreApiServiceService_IListParties;
    listValidators: ICoreApiServiceService_IListValidators;
}

interface ICoreApiServiceService_IListAccounts extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListAccountsRequest, coreapi_v1_coreapi_pb.ListAccountsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListAccountsRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListAccountsRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListAccountsResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListAccountsResponse>;
}
interface ICoreApiServiceService_IListAssets extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListAssetsRequest, coreapi_v1_coreapi_pb.ListAssetsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListAssetsRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListAssetsRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListAssetsResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListAssetsResponse>;
}
interface ICoreApiServiceService_IListNetworkParameters extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListNetworkParametersRequest, coreapi_v1_coreapi_pb.ListNetworkParametersResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListNetworkParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListNetworkParametersRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListNetworkParametersRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
}
interface ICoreApiServiceService_IListParties extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListPartiesRequest, coreapi_v1_coreapi_pb.ListPartiesResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListParties";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListPartiesRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListPartiesRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListPartiesResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListPartiesResponse>;
}
interface ICoreApiServiceService_IListValidators extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListValidatorsRequest, coreapi_v1_coreapi_pb.ListValidatorsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListValidators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListValidatorsRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListValidatorsRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListValidatorsResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListValidatorsResponse>;
}

export const CoreApiServiceService: ICoreApiServiceService;

export interface ICoreApiServiceServer extends grpc.UntypedServiceImplementation {
    listAccounts: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListAccountsRequest, coreapi_v1_coreapi_pb.ListAccountsResponse>;
    listAssets: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListAssetsRequest, coreapi_v1_coreapi_pb.ListAssetsResponse>;
    listNetworkParameters: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListNetworkParametersRequest, coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
    listParties: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListPartiesRequest, coreapi_v1_coreapi_pb.ListPartiesResponse>;
    listValidators: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListValidatorsRequest, coreapi_v1_coreapi_pb.ListValidatorsResponse>;
}

export interface ICoreApiServiceClient {
    listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
}

export class CoreApiServiceClient extends grpc.Client implements ICoreApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAccounts(request: coreapi_v1_coreapi_pb.ListAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAccountsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listAssets(request: coreapi_v1_coreapi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListAssetsResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listNetworkParameters(request: coreapi_v1_coreapi_pb.ListNetworkParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListNetworkParametersResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listParties(request: coreapi_v1_coreapi_pb.ListPartiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListPartiesResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
    public listValidators(request: coreapi_v1_coreapi_pb.ListValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListValidatorsResponse) => void): grpc.ClientUnaryCall;
}
