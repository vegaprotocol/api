// package: vega
// file: chain_events.proto

import * as jspb from "google-protobuf";

export class BuiltinAssetDeposit extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltinAssetDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltinAssetDeposit): BuiltinAssetDeposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuiltinAssetDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltinAssetDeposit;
  static deserializeBinaryFromReader(message: BuiltinAssetDeposit, reader: jspb.BinaryReader): BuiltinAssetDeposit;
}

export namespace BuiltinAssetDeposit {
  export type AsObject = {
    vegaAssetId: string,
    partyId: string,
    amount: number,
  }
}

export class BuiltinAssetWithdrawal extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltinAssetWithdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltinAssetWithdrawal): BuiltinAssetWithdrawal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuiltinAssetWithdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltinAssetWithdrawal;
  static deserializeBinaryFromReader(message: BuiltinAssetWithdrawal, reader: jspb.BinaryReader): BuiltinAssetWithdrawal;
}

export namespace BuiltinAssetWithdrawal {
  export type AsObject = {
    vegaAssetId: string,
    partyId: string,
    amount: number,
  }
}

export class BuiltinAssetEvent extends jspb.Message {
  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): BuiltinAssetDeposit | undefined;
  setDeposit(value?: BuiltinAssetDeposit): void;

  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): BuiltinAssetWithdrawal | undefined;
  setWithdrawal(value?: BuiltinAssetWithdrawal): void;

  getActionCase(): BuiltinAssetEvent.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuiltinAssetEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BuiltinAssetEvent): BuiltinAssetEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuiltinAssetEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuiltinAssetEvent;
  static deserializeBinaryFromReader(message: BuiltinAssetEvent, reader: jspb.BinaryReader): BuiltinAssetEvent;
}

export namespace BuiltinAssetEvent {
  export type AsObject = {
    deposit?: BuiltinAssetDeposit.AsObject,
    withdrawal?: BuiltinAssetWithdrawal.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    DEPOSIT = 1001,
    WITHDRAWAL = 1002,
  }
}

export class ERC20AssetList extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20AssetList.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20AssetList): ERC20AssetList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20AssetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20AssetList;
  static deserializeBinaryFromReader(message: ERC20AssetList, reader: jspb.BinaryReader): ERC20AssetList;
}

export namespace ERC20AssetList {
  export type AsObject = {
    vegaAssetId: string,
  }
}

export class ERC20AssetDelist extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20AssetDelist.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20AssetDelist): ERC20AssetDelist.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20AssetDelist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20AssetDelist;
  static deserializeBinaryFromReader(message: ERC20AssetDelist, reader: jspb.BinaryReader): ERC20AssetDelist;
}

export namespace ERC20AssetDelist {
  export type AsObject = {
    vegaAssetId: string,
  }
}

export class ERC20Deposit extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getSourceEthereumAddress(): string;
  setSourceEthereumAddress(value: string): void;

  getTargetPartyId(): string;
  setTargetPartyId(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20Deposit): ERC20Deposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20Deposit;
  static deserializeBinaryFromReader(message: ERC20Deposit, reader: jspb.BinaryReader): ERC20Deposit;
}

export namespace ERC20Deposit {
  export type AsObject = {
    vegaAssetId: string,
    sourceEthereumAddress: string,
    targetPartyId: string,
    amount: string,
  }
}

export class ERC20Withdrawal extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getTargetEthereumAddress(): string;
  setTargetEthereumAddress(value: string): void;

  getReferenceNonce(): string;
  setReferenceNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20Withdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20Withdrawal): ERC20Withdrawal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20Withdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20Withdrawal;
  static deserializeBinaryFromReader(message: ERC20Withdrawal, reader: jspb.BinaryReader): ERC20Withdrawal;
}

export namespace ERC20Withdrawal {
  export type AsObject = {
    vegaAssetId: string,
    targetEthereumAddress: string,
    referenceNonce: string,
  }
}

export class ERC20Event extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getBlock(): number;
  setBlock(value: number): void;

  hasAssetList(): boolean;
  clearAssetList(): void;
  getAssetList(): ERC20AssetList | undefined;
  setAssetList(value?: ERC20AssetList): void;

  hasAssetDelist(): boolean;
  clearAssetDelist(): void;
  getAssetDelist(): ERC20AssetDelist | undefined;
  setAssetDelist(value?: ERC20AssetDelist): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): ERC20Deposit | undefined;
  setDeposit(value?: ERC20Deposit): void;

  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): ERC20Withdrawal | undefined;
  setWithdrawal(value?: ERC20Withdrawal): void;

  getActionCase(): ERC20Event.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20Event.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20Event): ERC20Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20Event;
  static deserializeBinaryFromReader(message: ERC20Event, reader: jspb.BinaryReader): ERC20Event;
}

export namespace ERC20Event {
  export type AsObject = {
    index: number,
    block: number,
    assetList?: ERC20AssetList.AsObject,
    assetDelist?: ERC20AssetDelist.AsObject,
    deposit?: ERC20Deposit.AsObject,
    withdrawal?: ERC20Withdrawal.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    ASSET_LIST = 1001,
    ASSET_DELIST = 1002,
    DEPOSIT = 1003,
    WITHDRAWAL = 1004,
  }
}

export class BTCDeposit extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getSourceBtcAddress(): string;
  setSourceBtcAddress(value: string): void;

  getTargetPartyId(): string;
  setTargetPartyId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: BTCDeposit): BTCDeposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTCDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCDeposit;
  static deserializeBinaryFromReader(message: BTCDeposit, reader: jspb.BinaryReader): BTCDeposit;
}

export namespace BTCDeposit {
  export type AsObject = {
    vegaAssetId: string,
    sourceBtcAddress: string,
    targetPartyId: string,
  }
}

export class BTCWithdrawal extends jspb.Message {
  getVegaAssetId(): string;
  setVegaAssetId(value: string): void;

  getSourcePartyId(): string;
  setSourcePartyId(value: string): void;

  getTargetBtcAddress(): string;
  setTargetBtcAddress(value: string): void;

  getReferenceNonce(): string;
  setReferenceNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCWithdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: BTCWithdrawal): BTCWithdrawal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTCWithdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCWithdrawal;
  static deserializeBinaryFromReader(message: BTCWithdrawal, reader: jspb.BinaryReader): BTCWithdrawal;
}

export namespace BTCWithdrawal {
  export type AsObject = {
    vegaAssetId: string,
    sourcePartyId: string,
    targetBtcAddress: string,
    referenceNonce: string,
  }
}

export class BTCEvent extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getBlock(): number;
  setBlock(value: number): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): BTCDeposit | undefined;
  setDeposit(value?: BTCDeposit): void;

  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): BTCWithdrawal | undefined;
  setWithdrawal(value?: BTCWithdrawal): void;

  getActionCase(): BTCEvent.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTCEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BTCEvent): BTCEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTCEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTCEvent;
  static deserializeBinaryFromReader(message: BTCEvent, reader: jspb.BinaryReader): BTCEvent;
}

export namespace BTCEvent {
  export type AsObject = {
    index: number,
    block: number,
    deposit?: BTCDeposit.AsObject,
    withdrawal?: BTCWithdrawal.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    DEPOSIT = 1001,
    WITHDRAWAL = 1002,
  }
}

export class EthereumAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthereumAddress.AsObject;
  static toObject(includeInstance: boolean, msg: EthereumAddress): EthereumAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthereumAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthereumAddress;
  static deserializeBinaryFromReader(message: EthereumAddress, reader: jspb.BinaryReader): EthereumAddress;
}

export namespace EthereumAddress {
  export type AsObject = {
    address: string,
  }
}

export class BitcoinAddress extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BitcoinAddress.AsObject;
  static toObject(includeInstance: boolean, msg: BitcoinAddress): BitcoinAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BitcoinAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BitcoinAddress;
  static deserializeBinaryFromReader(message: BitcoinAddress, reader: jspb.BinaryReader): BitcoinAddress;
}

export namespace BitcoinAddress {
  export type AsObject = {
    address: string,
  }
}

export class Identifier extends jspb.Message {
  hasEthereumAddress(): boolean;
  clearEthereumAddress(): void;
  getEthereumAddress(): EthereumAddress | undefined;
  setEthereumAddress(value?: EthereumAddress): void;

  hasBitcoinAddress(): boolean;
  clearBitcoinAddress(): void;
  getBitcoinAddress(): BitcoinAddress | undefined;
  setBitcoinAddress(value?: BitcoinAddress): void;

  getIdentifierCase(): Identifier.IdentifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    ethereumAddress?: EthereumAddress.AsObject,
    bitcoinAddress?: BitcoinAddress.AsObject,
  }

  export enum IdentifierCase {
    IDENTIFIER_NOT_SET = 0,
    ETHEREUM_ADDRESS = 1,
    BITCOIN_ADDRESS = 2,
  }
}

export class AddValidator extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): Identifier | undefined;
  setId(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddValidator.AsObject;
  static toObject(includeInstance: boolean, msg: AddValidator): AddValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddValidator;
  static deserializeBinaryFromReader(message: AddValidator, reader: jspb.BinaryReader): AddValidator;
}

export namespace AddValidator {
  export type AsObject = {
    id?: Identifier.AsObject,
  }
}

export class RemoveValidator extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): Identifier | undefined;
  setId(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveValidator.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveValidator): RemoveValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveValidator;
  static deserializeBinaryFromReader(message: RemoveValidator, reader: jspb.BinaryReader): RemoveValidator;
}

export namespace RemoveValidator {
  export type AsObject = {
    id?: Identifier.AsObject,
  }
}

export class ValidatorEvent extends jspb.Message {
  getSourceId(): string;
  setSourceId(value: string): void;

  hasAdd(): boolean;
  clearAdd(): void;
  getAdd(): AddValidator | undefined;
  setAdd(value?: AddValidator): void;

  hasRm(): boolean;
  clearRm(): void;
  getRm(): RemoveValidator | undefined;
  setRm(value?: RemoveValidator): void;

  getActionCase(): ValidatorEvent.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorEvent): ValidatorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorEvent;
  static deserializeBinaryFromReader(message: ValidatorEvent, reader: jspb.BinaryReader): ValidatorEvent;
}

export namespace ValidatorEvent {
  export type AsObject = {
    sourceId: string,
    add?: AddValidator.AsObject,
    rm?: RemoveValidator.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    ADD = 1001,
    RM = 1002,
  }
}

export class ChainEvent extends jspb.Message {
  getTxId(): string;
  setTxId(value: string): void;

  getNonce(): number;
  setNonce(value: number): void;

  hasBuiltin(): boolean;
  clearBuiltin(): void;
  getBuiltin(): BuiltinAssetEvent | undefined;
  setBuiltin(value?: BuiltinAssetEvent): void;

  hasErc20(): boolean;
  clearErc20(): void;
  getErc20(): ERC20Event | undefined;
  setErc20(value?: ERC20Event): void;

  hasBtc(): boolean;
  clearBtc(): void;
  getBtc(): BTCEvent | undefined;
  setBtc(value?: BTCEvent): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): ValidatorEvent | undefined;
  setValidator(value?: ValidatorEvent): void;

  getEventCase(): ChainEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ChainEvent): ChainEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainEvent;
  static deserializeBinaryFromReader(message: ChainEvent, reader: jspb.BinaryReader): ChainEvent;
}

export namespace ChainEvent {
  export type AsObject = {
    txId: string,
    nonce: number,
    builtin?: BuiltinAssetEvent.AsObject,
    erc20?: ERC20Event.AsObject,
    btc?: BTCEvent.AsObject,
    validator?: ValidatorEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BUILTIN = 1001,
    ERC20 = 1002,
    BTC = 1003,
    VALIDATOR = 1004,
  }
}

