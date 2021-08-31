// package: vega
// file: chain_events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BuiltinAssetDeposit extends jspb.Message {
    getVegaAssetId(): string;
    setVegaAssetId(value: string): BuiltinAssetDeposit;
    getPartyId(): string;
    setPartyId(value: string): BuiltinAssetDeposit;
    getAmount(): number;
    setAmount(value: number): BuiltinAssetDeposit;

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
    setVegaAssetId(value: string): BuiltinAssetWithdrawal;
    getPartyId(): string;
    setPartyId(value: string): BuiltinAssetWithdrawal;
    getAmount(): number;
    setAmount(value: number): BuiltinAssetWithdrawal;

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
    setDeposit(value?: BuiltinAssetDeposit): BuiltinAssetEvent;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): BuiltinAssetWithdrawal | undefined;
    setWithdrawal(value?: BuiltinAssetWithdrawal): BuiltinAssetEvent;

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
    setVegaAssetId(value: string): ERC20AssetList;

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
    setVegaAssetId(value: string): ERC20AssetDelist;

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
    setVegaAssetId(value: string): ERC20Deposit;
    getSourceEthereumAddress(): string;
    setSourceEthereumAddress(value: string): ERC20Deposit;
    getTargetPartyId(): string;
    setTargetPartyId(value: string): ERC20Deposit;
    getAmount(): string;
    setAmount(value: string): ERC20Deposit;

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
    setVegaAssetId(value: string): ERC20Withdrawal;
    getTargetEthereumAddress(): string;
    setTargetEthereumAddress(value: string): ERC20Withdrawal;
    getReferenceNonce(): string;
    setReferenceNonce(value: string): ERC20Withdrawal;

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
    setIndex(value: number): ERC20Event;
    getBlock(): number;
    setBlock(value: number): ERC20Event;

    hasAssetList(): boolean;
    clearAssetList(): void;
    getAssetList(): ERC20AssetList | undefined;
    setAssetList(value?: ERC20AssetList): ERC20Event;

    hasAssetDelist(): boolean;
    clearAssetDelist(): void;
    getAssetDelist(): ERC20AssetDelist | undefined;
    setAssetDelist(value?: ERC20AssetDelist): ERC20Event;

    hasDeposit(): boolean;
    clearDeposit(): void;
    getDeposit(): ERC20Deposit | undefined;
    setDeposit(value?: ERC20Deposit): ERC20Event;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): ERC20Withdrawal | undefined;
    setWithdrawal(value?: ERC20Withdrawal): ERC20Event;

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
    setVegaAssetId(value: string): BTCDeposit;
    getSourceBtcAddress(): string;
    setSourceBtcAddress(value: string): BTCDeposit;
    getTargetPartyId(): string;
    setTargetPartyId(value: string): BTCDeposit;

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
    setVegaAssetId(value: string): BTCWithdrawal;
    getSourcePartyId(): string;
    setSourcePartyId(value: string): BTCWithdrawal;
    getTargetBtcAddress(): string;
    setTargetBtcAddress(value: string): BTCWithdrawal;
    getReferenceNonce(): string;
    setReferenceNonce(value: string): BTCWithdrawal;

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
    setIndex(value: number): BTCEvent;
    getBlock(): number;
    setBlock(value: number): BTCEvent;

    hasDeposit(): boolean;
    clearDeposit(): void;
    getDeposit(): BTCDeposit | undefined;
    setDeposit(value?: BTCDeposit): BTCEvent;

    hasWithdrawal(): boolean;
    clearWithdrawal(): void;
    getWithdrawal(): BTCWithdrawal | undefined;
    setWithdrawal(value?: BTCWithdrawal): BTCEvent;

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
    setAddress(value: string): EthereumAddress;

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
    setAddress(value: string): BitcoinAddress;

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
    setEthereumAddress(value?: EthereumAddress): Identifier;

    hasBitcoinAddress(): boolean;
    clearBitcoinAddress(): void;
    getBitcoinAddress(): BitcoinAddress | undefined;
    setBitcoinAddress(value?: BitcoinAddress): Identifier;

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
    setId(value?: Identifier): AddValidator;

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
    setId(value?: Identifier): RemoveValidator;

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
    setSourceId(value: string): ValidatorEvent;

    hasAdd(): boolean;
    clearAdd(): void;
    getAdd(): AddValidator | undefined;
    setAdd(value?: AddValidator): ValidatorEvent;

    hasRm(): boolean;
    clearRm(): void;
    getRm(): RemoveValidator | undefined;
    setRm(value?: RemoveValidator): ValidatorEvent;

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

export class StakingEvent extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): StakingEvent;
    getBlock(): number;
    setBlock(value: number): StakingEvent;

    hasStakeDeposited(): boolean;
    clearStakeDeposited(): void;
    getStakeDeposited(): StakeDeposited | undefined;
    setStakeDeposited(value?: StakeDeposited): StakingEvent;

    hasStakeRemoved(): boolean;
    clearStakeRemoved(): void;
    getStakeRemoved(): StakeRemoved | undefined;
    setStakeRemoved(value?: StakeRemoved): StakingEvent;

    getActionCase(): StakingEvent.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakingEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StakingEvent): StakingEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakingEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakingEvent;
    static deserializeBinaryFromReader(message: StakingEvent, reader: jspb.BinaryReader): StakingEvent;
}

export namespace StakingEvent {
    export type AsObject = {
        index: number,
        block: number,
        stakeDeposited?: StakeDeposited.AsObject,
        stakeRemoved?: StakeRemoved.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        STAKE_DEPOSITED = 1001,
        STAKE_REMOVED = 1002,
    }

}

export class StakeDeposited extends jspb.Message {
    getEthereumAddress(): string;
    setEthereumAddress(value: string): StakeDeposited;
    getVegaPublicKey(): string;
    setVegaPublicKey(value: string): StakeDeposited;
    getAmount(): string;
    setAmount(value: string): StakeDeposited;
    getBlockTime(): number;
    setBlockTime(value: number): StakeDeposited;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeDeposited.AsObject;
    static toObject(includeInstance: boolean, msg: StakeDeposited): StakeDeposited.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeDeposited, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeDeposited;
    static deserializeBinaryFromReader(message: StakeDeposited, reader: jspb.BinaryReader): StakeDeposited;
}

export namespace StakeDeposited {
    export type AsObject = {
        ethereumAddress: string,
        vegaPublicKey: string,
        amount: string,
        blockTime: number,
    }
}

export class StakeRemoved extends jspb.Message {
    getEthereumAddress(): string;
    setEthereumAddress(value: string): StakeRemoved;
    getVegaPublicKey(): string;
    setVegaPublicKey(value: string): StakeRemoved;
    getAmount(): string;
    setAmount(value: string): StakeRemoved;
    getBlockTime(): number;
    setBlockTime(value: number): StakeRemoved;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeRemoved.AsObject;
    static toObject(includeInstance: boolean, msg: StakeRemoved): StakeRemoved.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeRemoved, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeRemoved;
    static deserializeBinaryFromReader(message: StakeRemoved, reader: jspb.BinaryReader): StakeRemoved;
}

export namespace StakeRemoved {
    export type AsObject = {
        ethereumAddress: string,
        vegaPublicKey: string,
        amount: string,
        blockTime: number,
    }
}
