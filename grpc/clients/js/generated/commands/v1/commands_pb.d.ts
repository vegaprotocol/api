// package: vega.commands.v1
// file: commands/v1/commands.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as governance_pb from "../../governance_pb";
import * as vega_pb from "../../vega_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";

export class OrderSubmission extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): OrderSubmission;
    getPrice(): string;
    setPrice(value: string): OrderSubmission;
    getSize(): number;
    setSize(value: number): OrderSubmission;
    getSide(): vega_pb.Side;
    setSide(value: vega_pb.Side): OrderSubmission;
    getTimeInForce(): vega_pb.Order.TimeInForce;
    setTimeInForce(value: vega_pb.Order.TimeInForce): OrderSubmission;
    getExpiresAt(): number;
    setExpiresAt(value: number): OrderSubmission;
    getType(): vega_pb.Order.Type;
    setType(value: vega_pb.Order.Type): OrderSubmission;
    getReference(): string;
    setReference(value: string): OrderSubmission;

    hasPeggedOrder(): boolean;
    clearPeggedOrder(): void;
    getPeggedOrder(): vega_pb.PeggedOrder | undefined;
    setPeggedOrder(value?: vega_pb.PeggedOrder): OrderSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: OrderSubmission): OrderSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderSubmission;
    static deserializeBinaryFromReader(message: OrderSubmission, reader: jspb.BinaryReader): OrderSubmission;
}

export namespace OrderSubmission {
    export type AsObject = {
        marketId: string,
        price: string,
        size: number,
        side: vega_pb.Side,
        timeInForce: vega_pb.Order.TimeInForce,
        expiresAt: number,
        type: vega_pb.Order.Type,
        reference: string,
        peggedOrder?: vega_pb.PeggedOrder.AsObject,
    }
}

export class OrderCancellation extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): OrderCancellation;
    getMarketId(): string;
    setMarketId(value: string): OrderCancellation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderCancellation.AsObject;
    static toObject(includeInstance: boolean, msg: OrderCancellation): OrderCancellation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderCancellation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderCancellation;
    static deserializeBinaryFromReader(message: OrderCancellation, reader: jspb.BinaryReader): OrderCancellation;
}

export namespace OrderCancellation {
    export type AsObject = {
        orderId: string,
        marketId: string,
    }
}

export class OrderAmendment extends jspb.Message {
    getOrderId(): string;
    setOrderId(value: string): OrderAmendment;
    getMarketId(): string;
    setMarketId(value: string): OrderAmendment;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): vega_pb.Price | undefined;
    setPrice(value?: vega_pb.Price): OrderAmendment;
    getSizeDelta(): number;
    setSizeDelta(value: number): OrderAmendment;

    hasExpiresAt(): boolean;
    clearExpiresAt(): void;
    getExpiresAt(): vega_pb.Timestamp | undefined;
    setExpiresAt(value?: vega_pb.Timestamp): OrderAmendment;
    getTimeInForce(): vega_pb.Order.TimeInForce;
    setTimeInForce(value: vega_pb.Order.TimeInForce): OrderAmendment;

    hasPeggedOffset(): boolean;
    clearPeggedOffset(): void;
    getPeggedOffset(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPeggedOffset(value?: google_protobuf_wrappers_pb.Int64Value): OrderAmendment;
    getPeggedReference(): vega_pb.PeggedReference;
    setPeggedReference(value: vega_pb.PeggedReference): OrderAmendment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderAmendment.AsObject;
    static toObject(includeInstance: boolean, msg: OrderAmendment): OrderAmendment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderAmendment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderAmendment;
    static deserializeBinaryFromReader(message: OrderAmendment, reader: jspb.BinaryReader): OrderAmendment;
}

export namespace OrderAmendment {
    export type AsObject = {
        orderId: string,
        marketId: string,
        price?: vega_pb.Price.AsObject,
        sizeDelta: number,
        expiresAt?: vega_pb.Timestamp.AsObject,
        timeInForce: vega_pb.Order.TimeInForce,
        peggedOffset?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        peggedReference: vega_pb.PeggedReference,
    }
}

export class LiquidityProvisionSubmission extends jspb.Message {
    getMarketId(): string;
    setMarketId(value: string): LiquidityProvisionSubmission;
    getCommitmentAmount(): string;
    setCommitmentAmount(value: string): LiquidityProvisionSubmission;
    getFee(): string;
    setFee(value: string): LiquidityProvisionSubmission;
    clearSellsList(): void;
    getSellsList(): Array<vega_pb.LiquidityOrder>;
    setSellsList(value: Array<vega_pb.LiquidityOrder>): LiquidityProvisionSubmission;
    addSells(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;
    clearBuysList(): void;
    getBuysList(): Array<vega_pb.LiquidityOrder>;
    setBuysList(value: Array<vega_pb.LiquidityOrder>): LiquidityProvisionSubmission;
    addBuys(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;
    getReference(): string;
    setReference(value: string): LiquidityProvisionSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityProvisionSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityProvisionSubmission): LiquidityProvisionSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityProvisionSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityProvisionSubmission;
    static deserializeBinaryFromReader(message: LiquidityProvisionSubmission, reader: jspb.BinaryReader): LiquidityProvisionSubmission;
}

export namespace LiquidityProvisionSubmission {
    export type AsObject = {
        marketId: string,
        commitmentAmount: string,
        fee: string,
        sellsList: Array<vega_pb.LiquidityOrder.AsObject>,
        buysList: Array<vega_pb.LiquidityOrder.AsObject>,
        reference: string,
    }
}

export class WithdrawSubmission extends jspb.Message {
    getAmount(): string;
    setAmount(value: string): WithdrawSubmission;
    getAsset(): string;
    setAsset(value: string): WithdrawSubmission;

    hasExt(): boolean;
    clearExt(): void;
    getExt(): vega_pb.WithdrawExt | undefined;
    setExt(value?: vega_pb.WithdrawExt): WithdrawSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawSubmission): WithdrawSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawSubmission;
    static deserializeBinaryFromReader(message: WithdrawSubmission, reader: jspb.BinaryReader): WithdrawSubmission;
}

export namespace WithdrawSubmission {
    export type AsObject = {
        amount: string,
        asset: string,
        ext?: vega_pb.WithdrawExt.AsObject,
    }
}

export class ProposalSubmission extends jspb.Message {
    getReference(): string;
    setReference(value: string): ProposalSubmission;

    hasTerms(): boolean;
    clearTerms(): void;
    getTerms(): governance_pb.ProposalTerms | undefined;
    setTerms(value?: governance_pb.ProposalTerms): ProposalSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposalSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: ProposalSubmission): ProposalSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposalSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposalSubmission;
    static deserializeBinaryFromReader(message: ProposalSubmission, reader: jspb.BinaryReader): ProposalSubmission;
}

export namespace ProposalSubmission {
    export type AsObject = {
        reference: string,
        terms?: governance_pb.ProposalTerms.AsObject,
    }
}

export class VoteSubmission extends jspb.Message {
    getProposalId(): string;
    setProposalId(value: string): VoteSubmission;
    getValue(): governance_pb.Vote.Value;
    setValue(value: governance_pb.Vote.Value): VoteSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: VoteSubmission): VoteSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoteSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteSubmission;
    static deserializeBinaryFromReader(message: VoteSubmission, reader: jspb.BinaryReader): VoteSubmission;
}

export namespace VoteSubmission {
    export type AsObject = {
        proposalId: string,
        value: governance_pb.Vote.Value,
    }
}

export class DelegateSubmission extends jspb.Message {
    getNodeId(): string;
    setNodeId(value: string): DelegateSubmission;
    getAmount(): string;
    setAmount(value: string): DelegateSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegateSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: DelegateSubmission): DelegateSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegateSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegateSubmission;
    static deserializeBinaryFromReader(message: DelegateSubmission, reader: jspb.BinaryReader): DelegateSubmission;
}

export namespace DelegateSubmission {
    export type AsObject = {
        nodeId: string,
        amount: string,
    }
}

export class UndelegateSubmission extends jspb.Message {
    getNodeId(): string;
    setNodeId(value: string): UndelegateSubmission;
    getAmount(): string;
    setAmount(value: string): UndelegateSubmission;
    getMethod(): UndelegateSubmission.Method;
    setMethod(value: UndelegateSubmission.Method): UndelegateSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UndelegateSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: UndelegateSubmission): UndelegateSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UndelegateSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UndelegateSubmission;
    static deserializeBinaryFromReader(message: UndelegateSubmission, reader: jspb.BinaryReader): UndelegateSubmission;
}

export namespace UndelegateSubmission {
    export type AsObject = {
        nodeId: string,
        amount: string,
        method: UndelegateSubmission.Method,
    }

    export enum Method {
    METHOD_UNSPECIFIED = 0,
    METHOD_NOW = 1,
    METHOD_AT_END_OF_EPOCH = 2,
    METHOD_IN_ANGER = 3,
    }

}

export class RestoreSnapshot extends jspb.Message {
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RestoreSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreSnapshot.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreSnapshot): RestoreSnapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreSnapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreSnapshot;
    static deserializeBinaryFromReader(message: RestoreSnapshot, reader: jspb.BinaryReader): RestoreSnapshot;
}

export namespace RestoreSnapshot {
    export type AsObject = {
        data: Uint8Array | string,
    }
}
