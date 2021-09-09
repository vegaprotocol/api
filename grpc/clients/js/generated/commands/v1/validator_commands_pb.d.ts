// package: vega.commands.v1
// file: commands/v1/validator_commands.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as chain_events_pb from "../../chain_events_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";

export class NodeRegistration extends jspb.Message {
    getVegaPubKey(): string;
    setVegaPubKey(value: string): NodeRegistration;
    getEthereumAddress(): string;
    setEthereumAddress(value: string): NodeRegistration;
    getChainPubKey(): string;
    setChainPubKey(value: string): NodeRegistration;
    getInfoUrl(): string;
    setInfoUrl(value: string): NodeRegistration;
    getCountry(): string;
    setCountry(value: string): NodeRegistration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeRegistration.AsObject;
    static toObject(includeInstance: boolean, msg: NodeRegistration): NodeRegistration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeRegistration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeRegistration;
    static deserializeBinaryFromReader(message: NodeRegistration, reader: jspb.BinaryReader): NodeRegistration;
}

export namespace NodeRegistration {
    export type AsObject = {
        vegaPubKey: string,
        ethereumAddress: string,
        chainPubKey: string,
        infoUrl: string,
        country: string,
    }
}

export class NodeVote extends jspb.Message {
    getPubKey(): Uint8Array | string;
    getPubKey_asU8(): Uint8Array;
    getPubKey_asB64(): string;
    setPubKey(value: Uint8Array | string): NodeVote;
    getReference(): string;
    setReference(value: string): NodeVote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeVote.AsObject;
    static toObject(includeInstance: boolean, msg: NodeVote): NodeVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeVote;
    static deserializeBinaryFromReader(message: NodeVote, reader: jspb.BinaryReader): NodeVote;
}

export namespace NodeVote {
    export type AsObject = {
        pubKey: Uint8Array | string,
        reference: string,
    }
}

export class NodeSignature extends jspb.Message {
    getId(): string;
    setId(value: string): NodeSignature;
    getSig(): Uint8Array | string;
    getSig_asU8(): Uint8Array;
    getSig_asB64(): string;
    setSig(value: Uint8Array | string): NodeSignature;
    getKind(): NodeSignatureKind;
    setKind(value: NodeSignatureKind): NodeSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeSignature.AsObject;
    static toObject(includeInstance: boolean, msg: NodeSignature): NodeSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeSignature;
    static deserializeBinaryFromReader(message: NodeSignature, reader: jspb.BinaryReader): NodeSignature;
}

export namespace NodeSignature {
    export type AsObject = {
        id: string,
        sig: Uint8Array | string,
        kind: NodeSignatureKind,
    }
}

export class ChainEvent extends jspb.Message {
    getTxId(): string;
    setTxId(value: string): ChainEvent;
    getNonce(): number;
    setNonce(value: number): ChainEvent;

    hasBuiltin(): boolean;
    clearBuiltin(): void;
    getBuiltin(): chain_events_pb.BuiltinAssetEvent | undefined;
    setBuiltin(value?: chain_events_pb.BuiltinAssetEvent): ChainEvent;

    hasErc20(): boolean;
    clearErc20(): void;
    getErc20(): chain_events_pb.ERC20Event | undefined;
    setErc20(value?: chain_events_pb.ERC20Event): ChainEvent;

    hasBtc(): boolean;
    clearBtc(): void;
    getBtc(): chain_events_pb.BTCEvent | undefined;
    setBtc(value?: chain_events_pb.BTCEvent): ChainEvent;

    hasValidator(): boolean;
    clearValidator(): void;
    getValidator(): chain_events_pb.ValidatorEvent | undefined;
    setValidator(value?: chain_events_pb.ValidatorEvent): ChainEvent;

    hasStakingEvent(): boolean;
    clearStakingEvent(): void;
    getStakingEvent(): chain_events_pb.StakingEvent | undefined;
    setStakingEvent(value?: chain_events_pb.StakingEvent): ChainEvent;

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
        builtin?: chain_events_pb.BuiltinAssetEvent.AsObject,
        erc20?: chain_events_pb.ERC20Event.AsObject,
        btc?: chain_events_pb.BTCEvent.AsObject,
        validator?: chain_events_pb.ValidatorEvent.AsObject,
        stakingEvent?: chain_events_pb.StakingEvent.AsObject,
    }

    export enum EventCase {
        EVENT_NOT_SET = 0,
        BUILTIN = 1001,
        ERC20 = 1002,
        BTC = 1003,
        VALIDATOR = 1004,
        STAKING_EVENT = 1005,
    }

}

export enum NodeSignatureKind {
    NODE_SIGNATURE_KIND_UNSPECIFIED = 0,
    NODE_SIGNATURE_KIND_ASSET_NEW = 1,
    NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL = 2,
}
