// package: vega.coreapi.v1
// file: coreapi/v1/coreapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as coreapi_v1_coreapi_pb from "../../coreapi/v1/coreapi_pb";
import * as assets_pb from "../../assets_pb";
import * as governance_pb from "../../governance_pb";
import * as markets_pb from "../../markets_pb";
import * as vega_pb from "../../vega_pb";
import * as events_v1_events_pb from "../../events/v1/events_pb";

interface ICoreApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAccounts: ICoreApiServiceService_IListAccounts;
    listAssets: ICoreApiServiceService_IListAssets;
    listNetworkParameters: ICoreApiServiceService_IListNetworkParameters;
    listParties: ICoreApiServiceService_IListParties;
    listValidators: ICoreApiServiceService_IListValidators;
    listMarkets: ICoreApiServiceService_IListMarkets;
    listProposals: ICoreApiServiceService_IListProposals;
    listMarketsData: ICoreApiServiceService_IListMarketsData;
    listVotes: ICoreApiServiceService_IListVotes;
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
interface ICoreApiServiceService_IListMarkets extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListMarketsRequest, coreapi_v1_coreapi_pb.ListMarketsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListMarkets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListMarketsRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListMarketsRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListMarketsResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListMarketsResponse>;
}
interface ICoreApiServiceService_IListProposals extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListProposalsRequest, coreapi_v1_coreapi_pb.ListProposalsResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListProposals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListProposalsRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListProposalsRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListProposalsResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListProposalsResponse>;
}
interface ICoreApiServiceService_IListMarketsData extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListMarketsDataRequest, coreapi_v1_coreapi_pb.ListMarketsDataResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListMarketsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListMarketsDataRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListMarketsDataRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
}
interface ICoreApiServiceService_IListVotes extends grpc.MethodDefinition<coreapi_v1_coreapi_pb.ListVotesRequest, coreapi_v1_coreapi_pb.ListVotesResponse> {
    path: "/vega.coreapi.v1.CoreApiService/ListVotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListVotesRequest>;
    requestDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListVotesRequest>;
    responseSerialize: grpc.serialize<coreapi_v1_coreapi_pb.ListVotesResponse>;
    responseDeserialize: grpc.deserialize<coreapi_v1_coreapi_pb.ListVotesResponse>;
}

export const CoreApiServiceService: ICoreApiServiceService;

export interface ICoreApiServiceServer extends grpc.UntypedServiceImplementation {
    listAccounts: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListAccountsRequest, coreapi_v1_coreapi_pb.ListAccountsResponse>;
    listAssets: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListAssetsRequest, coreapi_v1_coreapi_pb.ListAssetsResponse>;
    listNetworkParameters: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListNetworkParametersRequest, coreapi_v1_coreapi_pb.ListNetworkParametersResponse>;
    listParties: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListPartiesRequest, coreapi_v1_coreapi_pb.ListPartiesResponse>;
    listValidators: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListValidatorsRequest, coreapi_v1_coreapi_pb.ListValidatorsResponse>;
    listMarkets: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListMarketsRequest, coreapi_v1_coreapi_pb.ListMarketsResponse>;
    listProposals: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListProposalsRequest, coreapi_v1_coreapi_pb.ListProposalsResponse>;
    listMarketsData: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListMarketsDataRequest, coreapi_v1_coreapi_pb.ListMarketsDataResponse>;
    listVotes: grpc.handleUnaryCall<coreapi_v1_coreapi_pb.ListVotesRequest, coreapi_v1_coreapi_pb.ListVotesResponse>;
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
    listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
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
    public listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listMarkets(request: coreapi_v1_coreapi_pb.ListMarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listProposals(request: coreapi_v1_coreapi_pb.ListProposalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListProposalsResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listMarketsData(request: coreapi_v1_coreapi_pb.ListMarketsDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListMarketsDataResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
    public listVotes(request: coreapi_v1_coreapi_pb.ListVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coreapi_v1_coreapi_pb.ListVotesResponse) => void): grpc.ClientUnaryCall;
}
