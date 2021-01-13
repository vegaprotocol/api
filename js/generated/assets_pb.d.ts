// package: vega
// file: assets.proto

import * as jspb from "google-protobuf";

export class Asset extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getTotalsupply(): string;
  setTotalsupply(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): AssetSource | undefined;
  setSource(value?: AssetSource): void;

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
    name: string,
    symbol: string,
    totalsupply: string,
    decimals: number,
    source?: AssetSource.AsObject,
  }
}

export class AssetSource extends jspb.Message {
  hasBuiltinasset(): boolean;
  clearBuiltinasset(): void;
  getBuiltinasset(): BuiltinAsset | undefined;
  setBuiltinasset(value?: BuiltinAsset): void;

  hasErc20(): boolean;
  clearErc20(): void;
  getErc20(): ERC20 | undefined;
  setErc20(value?: ERC20): void;

  getSourceCase(): AssetSource.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetSource.AsObject;
  static toObject(includeInstance: boolean, msg: AssetSource): AssetSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetSource;
  static deserializeBinaryFromReader(message: AssetSource, reader: jspb.BinaryReader): AssetSource;
}

export namespace AssetSource {
  export type AsObject = {
    builtinasset?: BuiltinAsset.AsObject,
    erc20?: ERC20.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    BUILTINASSET = 1,
    ERC20 = 2,
  }
}

export class BuiltinAsset extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getTotalsupply(): string;
  setTotalsupply(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getMaxfaucetamountmint(): string;
  setMaxfaucetamountmint(value: string): void;

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
    name: string,
    symbol: string,
    totalsupply: string,
    decimals: number,
    maxfaucetamountmint: string,
  }
}

export class ERC20 extends jspb.Message {
  getContractaddress(): string;
  setContractaddress(value: string): void;

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
    contractaddress: string,
  }
}

export class DevAssets extends jspb.Message {
  clearSourcesList(): void;
  getSourcesList(): Array<AssetSource>;
  setSourcesList(value: Array<AssetSource>): void;
  addSources(value?: AssetSource, index?: number): AssetSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DevAssets.AsObject;
  static toObject(includeInstance: boolean, msg: DevAssets): DevAssets.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DevAssets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DevAssets;
  static deserializeBinaryFromReader(message: DevAssets, reader: jspb.BinaryReader): DevAssets;
}

export namespace DevAssets {
  export type AsObject = {
    sourcesList: Array<AssetSource.AsObject>,
  }
}

