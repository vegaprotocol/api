// package: vega.coreapi.v1
// file: coreapi/v1/coreapi.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as assets_pb from "../../assets_pb";
import * as vega_pb from "../../vega_pb";
import * as events_v1_events_pb from "../../events/v1/events_pb";

export class Account extends jspb.Message {
    getParty(): string;
    setParty(value: string): Account;
    getMarket(): string;
    setMarket(value: string): Account;
    getBalance(): string;
    setBalance(value: string): Account;
    getAsset(): string;
    setAsset(value: string): Account;
    getType(): string;
    setType(value: string): Account;

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
        party: string,
        market: string,
        balance: string,
        asset: string,
        type: string,
    }
}

export class ListAccountsRequest extends jspb.Message {
    getParty(): string;
    setParty(value: string): ListAccountsRequest;
    getMarket(): string;
    setMarket(value: string): ListAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountsRequest): ListAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountsRequest;
    static deserializeBinaryFromReader(message: ListAccountsRequest, reader: jspb.BinaryReader): ListAccountsRequest;
}

export namespace ListAccountsRequest {
    export type AsObject = {
        party: string,
        market: string,
    }
}

export class ListAccountsResponse extends jspb.Message {
    clearAccountsList(): void;
    getAccountsList(): Array<Account>;
    setAccountsList(value: Array<Account>): ListAccountsResponse;
    addAccounts(value?: Account, index?: number): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountsResponse): ListAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountsResponse;
    static deserializeBinaryFromReader(message: ListAccountsResponse, reader: jspb.BinaryReader): ListAccountsResponse;
}

export namespace ListAccountsResponse {
    export type AsObject = {
        accountsList: Array<Account.AsObject>,
    }
}

export class ListAssetsRequest extends jspb.Message {
    getAsset(): string;
    setAsset(value: string): ListAssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
    static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
    export type AsObject = {
        asset: string,
    }
}

export class ListAssetsResponse extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<assets_pb.Asset>;
    setAssetsList(value: Array<assets_pb.Asset>): ListAssetsResponse;
    addAssets(value?: assets_pb.Asset, index?: number): assets_pb.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAssetsResponse): ListAssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAssetsResponse;
    static deserializeBinaryFromReader(message: ListAssetsResponse, reader: jspb.BinaryReader): ListAssetsResponse;
}

export namespace ListAssetsResponse {
    export type AsObject = {
        assetsList: Array<assets_pb.Asset.AsObject>,
    }
}

export class ListNetworkParametersRequest extends jspb.Message {
    getNetworkParameterKey(): string;
    setNetworkParameterKey(value: string): ListNetworkParametersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkParametersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkParametersRequest): ListNetworkParametersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkParametersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkParametersRequest;
    static deserializeBinaryFromReader(message: ListNetworkParametersRequest, reader: jspb.BinaryReader): ListNetworkParametersRequest;
}

export namespace ListNetworkParametersRequest {
    export type AsObject = {
        networkParameterKey: string,
    }
}

export class ListNetworkParametersResponse extends jspb.Message {
    clearNetworkParametersList(): void;
    getNetworkParametersList(): Array<vega_pb.NetworkParameter>;
    setNetworkParametersList(value: Array<vega_pb.NetworkParameter>): ListNetworkParametersResponse;
    addNetworkParameters(value?: vega_pb.NetworkParameter, index?: number): vega_pb.NetworkParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkParametersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkParametersResponse): ListNetworkParametersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkParametersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkParametersResponse;
    static deserializeBinaryFromReader(message: ListNetworkParametersResponse, reader: jspb.BinaryReader): ListNetworkParametersResponse;
}

export namespace ListNetworkParametersResponse {
    export type AsObject = {
        networkParametersList: Array<vega_pb.NetworkParameter.AsObject>,
    }
}

export class ListPartiesRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesRequest): ListPartiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesRequest;
    static deserializeBinaryFromReader(message: ListPartiesRequest, reader: jspb.BinaryReader): ListPartiesRequest;
}

export namespace ListPartiesRequest {
    export type AsObject = {
    }
}

export class ListPartiesResponse extends jspb.Message {
    clearPartiesList(): void;
    getPartiesList(): Array<vega_pb.Party>;
    setPartiesList(value: Array<vega_pb.Party>): ListPartiesResponse;
    addParties(value?: vega_pb.Party, index?: number): vega_pb.Party;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPartiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPartiesResponse): ListPartiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPartiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPartiesResponse;
    static deserializeBinaryFromReader(message: ListPartiesResponse, reader: jspb.BinaryReader): ListPartiesResponse;
}

export namespace ListPartiesResponse {
    export type AsObject = {
        partiesList: Array<vega_pb.Party.AsObject>,
    }
}

export class ListValidatorsRequest extends jspb.Message {

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsRequest): ListValidatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsRequest;
    static deserializeBinaryFromReader(message: ListValidatorsRequest, reader: jspb.BinaryReader): ListValidatorsRequest;
}

export namespace ListValidatorsRequest {
    export type AsObject = {
    }
}

export class ListValidatorsResponse extends jspb.Message {
    clearValidatorsList(): void;
    getValidatorsList(): Array<events_v1_events_pb.ValidatorUpdate>;
    setValidatorsList(value: Array<events_v1_events_pb.ValidatorUpdate>): ListValidatorsResponse;
    addValidators(value?: events_v1_events_pb.ValidatorUpdate, index?: number): events_v1_events_pb.ValidatorUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValidatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListValidatorsResponse): ListValidatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListValidatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValidatorsResponse;
    static deserializeBinaryFromReader(message: ListValidatorsResponse, reader: jspb.BinaryReader): ListValidatorsResponse;
}

export namespace ListValidatorsResponse {
    export type AsObject = {
        validatorsList: Array<events_v1_events_pb.ValidatorUpdate.AsObject>,
    }
}
