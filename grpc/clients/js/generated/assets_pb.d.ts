// package: vega
// file: assets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Asset extends jspb.Message {
    getId(): string;
    setId(value: string): Asset;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): AssetDetails | undefined;
    setDetails(value?: AssetDetails): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
    export type AsObject = {
        id: string,
        details?: AssetDetails.AsObject,
    }
}

export class AssetDetails extends jspb.Message {
    getName(): string;
    setName(value: string): AssetDetails;
    getSymbol(): string;
    setSymbol(value: string): AssetDetails;
    getTotalSupply(): string;
    setTotalSupply(value: string): AssetDetails;
    getDecimals(): number;
    setDecimals(value: number): AssetDetails;
    getMinLpStake(): string;
    setMinLpStake(value: string): AssetDetails;

    hasBuiltinAsset(): boolean;
    clearBuiltinAsset(): void;
    getBuiltinAsset(): BuiltinAsset | undefined;
    setBuiltinAsset(value?: BuiltinAsset): AssetDetails;

    hasErc20(): boolean;
    clearErc20(): void;
    getErc20(): ERC20 | undefined;
    setErc20(value?: ERC20): AssetDetails;

    getSourceCase(): AssetDetails.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AssetDetails): AssetDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetDetails;
    static deserializeBinaryFromReader(message: AssetDetails, reader: jspb.BinaryReader): AssetDetails;
}

export namespace AssetDetails {
    export type AsObject = {
        name: string,
        symbol: string,
        totalSupply: string,
        decimals: number,
        minLpStake: string,
        builtinAsset?: BuiltinAsset.AsObject,
        erc20?: ERC20.AsObject,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        BUILTIN_ASSET = 101,
        ERC20 = 102,
    }

}

export class BuiltinAsset extends jspb.Message {
    getMaxFaucetAmountMint(): string;
    setMaxFaucetAmountMint(value: string): BuiltinAsset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuiltinAsset.AsObject;
    static toObject(includeInstance: boolean, msg: BuiltinAsset): BuiltinAsset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuiltinAsset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuiltinAsset;
    static deserializeBinaryFromReader(message: BuiltinAsset, reader: jspb.BinaryReader): BuiltinAsset;
}

export namespace BuiltinAsset {
    export type AsObject = {
        maxFaucetAmountMint: string,
    }
}

export class ERC20 extends jspb.Message {
    getContractAddress(): string;
    setContractAddress(value: string): ERC20;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC20.AsObject;
    static toObject(includeInstance: boolean, msg: ERC20): ERC20.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC20, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC20;
    static deserializeBinaryFromReader(message: ERC20, reader: jspb.BinaryReader): ERC20;
}

export namespace ERC20 {
    export type AsObject = {
        contractAddress: string,
    }
}
