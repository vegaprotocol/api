// package: vega.snapshot.v1
// file: snapshot/v1/snapshot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vega_pb from "../../vega_pb";
import * as assets_pb from "../../assets_pb";
import * as governance_pb from "../../governance_pb";

export class Snapshot extends jspb.Message {
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): Snapshot;
    getState(): Uint8Array | string;
    getState_asU8(): Uint8Array;
    getState_asB64(): string;
    setState(value: Uint8Array | string): Snapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Snapshot.AsObject;
    static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Snapshot;
    static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
    export type AsObject = {
        hash: Uint8Array | string,
        state: Uint8Array | string,
    }
}

export class Checkpoint extends jspb.Message {
    getGovernance(): Uint8Array | string;
    getGovernance_asU8(): Uint8Array;
    getGovernance_asB64(): string;
    setGovernance(value: Uint8Array | string): Checkpoint;
    getAssets(): Uint8Array | string;
    getAssets_asU8(): Uint8Array;
    getAssets_asB64(): string;
    setAssets(value: Uint8Array | string): Checkpoint;
    getCollateral(): Uint8Array | string;
    getCollateral_asU8(): Uint8Array;
    getCollateral_asB64(): string;
    setCollateral(value: Uint8Array | string): Checkpoint;
    getNetworkParameters(): Uint8Array | string;
    getNetworkParameters_asU8(): Uint8Array;
    getNetworkParameters_asB64(): string;
    setNetworkParameters(value: Uint8Array | string): Checkpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Checkpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Checkpoint): Checkpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Checkpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Checkpoint;
    static deserializeBinaryFromReader(message: Checkpoint, reader: jspb.BinaryReader): Checkpoint;
}

export namespace Checkpoint {
    export type AsObject = {
        governance: Uint8Array | string,
        assets: Uint8Array | string,
        collateral: Uint8Array | string,
        networkParameters: Uint8Array | string,
    }
}

export class AssetEntry extends jspb.Message {
    getId(): string;
    setId(value: string): AssetEntry;

    hasAssetDetails(): boolean;
    clearAssetDetails(): void;
    getAssetDetails(): assets_pb.AssetDetails | undefined;
    setAssetDetails(value?: assets_pb.AssetDetails): AssetEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetEntry.AsObject;
    static toObject(includeInstance: boolean, msg: AssetEntry): AssetEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetEntry;
    static deserializeBinaryFromReader(message: AssetEntry, reader: jspb.BinaryReader): AssetEntry;
}

export namespace AssetEntry {
    export type AsObject = {
        id: string,
        assetDetails?: assets_pb.AssetDetails.AsObject,
    }
}

export class Assets extends jspb.Message {
    clearAssetsList(): void;
    getAssetsList(): Array<AssetEntry>;
    setAssetsList(value: Array<AssetEntry>): Assets;
    addAssets(value?: AssetEntry, index?: number): AssetEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Assets.AsObject;
    static toObject(includeInstance: boolean, msg: Assets): Assets.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Assets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Assets;
    static deserializeBinaryFromReader(message: Assets, reader: jspb.BinaryReader): Assets;
}

export namespace Assets {
    export type AsObject = {
        assetsList: Array<AssetEntry.AsObject>,
    }
}

export class AssetBalance extends jspb.Message {
    getParty(): string;
    setParty(value: string): AssetBalance;
    getAsset(): string;
    setAsset(value: string): AssetBalance;
    getBalance(): string;
    setBalance(value: string): AssetBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AssetBalance): AssetBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetBalance;
    static deserializeBinaryFromReader(message: AssetBalance, reader: jspb.BinaryReader): AssetBalance;
}

export namespace AssetBalance {
    export type AsObject = {
        party: string,
        asset: string,
        balance: string,
    }
}

export class Collateral extends jspb.Message {
    clearBalancesList(): void;
    getBalancesList(): Array<AssetBalance>;
    setBalancesList(value: Array<AssetBalance>): Collateral;
    addBalances(value?: AssetBalance, index?: number): AssetBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collateral.AsObject;
    static toObject(includeInstance: boolean, msg: Collateral): Collateral.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collateral, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collateral;
    static deserializeBinaryFromReader(message: Collateral, reader: jspb.BinaryReader): Collateral;
}

export namespace Collateral {
    export type AsObject = {
        balancesList: Array<AssetBalance.AsObject>,
    }
}

export class NetParams extends jspb.Message {
    clearParamsList(): void;
    getParamsList(): Array<vega_pb.NetworkParameter>;
    setParamsList(value: Array<vega_pb.NetworkParameter>): NetParams;
    addParams(value?: vega_pb.NetworkParameter, index?: number): vega_pb.NetworkParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetParams.AsObject;
    static toObject(includeInstance: boolean, msg: NetParams): NetParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetParams;
    static deserializeBinaryFromReader(message: NetParams, reader: jspb.BinaryReader): NetParams;
}

export namespace NetParams {
    export type AsObject = {
        paramsList: Array<vega_pb.NetworkParameter.AsObject>,
    }
}

export class Proposals extends jspb.Message {
    clearProposalsList(): void;
    getProposalsList(): Array<governance_pb.Proposal>;
    setProposalsList(value: Array<governance_pb.Proposal>): Proposals;
    addProposals(value?: governance_pb.Proposal, index?: number): governance_pb.Proposal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proposals.AsObject;
    static toObject(includeInstance: boolean, msg: Proposals): Proposals.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proposals, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proposals;
    static deserializeBinaryFromReader(message: Proposals, reader: jspb.BinaryReader): Proposals;
}

export namespace Proposals {
    export type AsObject = {
        proposalsList: Array<governance_pb.Proposal.AsObject>,
    }
}
