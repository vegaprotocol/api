// package: vega.commands.v1
// file: commands/v1/commands.proto

import * as jspb from "google-protobuf";
import * as governance_pb from "../../governance_pb";
import * as vega_pb from "../../vega_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";

export class OrderSubmission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getSide(): vega_pb.SideMap[keyof vega_pb.SideMap];
  setSide(value: vega_pb.SideMap[keyof vega_pb.SideMap]): void;

  getTimeInForce(): vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap];
  setTimeInForce(value: vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap]): void;

  getExpiresAt(): number;
  setExpiresAt(value: number): void;

  getType(): vega_pb.Order.TypeMap[keyof vega_pb.Order.TypeMap];
  setType(value: vega_pb.Order.TypeMap[keyof vega_pb.Order.TypeMap]): void;

  getReference(): string;
  setReference(value: string): void;

  hasPeggedOrder(): boolean;
  clearPeggedOrder(): void;
  getPeggedOrder(): vega_pb.PeggedOrder | undefined;
  setPeggedOrder(value?: vega_pb.PeggedOrder): void;

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
    id: string,
    marketId: string,
    partyId: string,
    price: number,
    size: number,
    side: vega_pb.SideMap[keyof vega_pb.SideMap],
    timeInForce: vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap],
    expiresAt: number,
    type: vega_pb.Order.TypeMap[keyof vega_pb.Order.TypeMap],
    reference: string,
    peggedOrder?: vega_pb.PeggedOrder.AsObject,
  }
}

export class OrderCancellation extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
  setOrderId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): vega_pb.Price | undefined;
  setPrice(value?: vega_pb.Price): void;

  getSizeDelta(): number;
  setSizeDelta(value: number): void;

  hasExpiresAt(): boolean;
  clearExpiresAt(): void;
  getExpiresAt(): vega_pb.Timestamp | undefined;
  setExpiresAt(value?: vega_pb.Timestamp): void;

  getTimeInForce(): vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap];
  setTimeInForce(value: vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap]): void;

  hasPeggedOffset(): boolean;
  clearPeggedOffset(): void;
  getPeggedOffset(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPeggedOffset(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getPeggedReference(): vega_pb.PeggedReferenceMap[keyof vega_pb.PeggedReferenceMap];
  setPeggedReference(value: vega_pb.PeggedReferenceMap[keyof vega_pb.PeggedReferenceMap]): void;

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
    partyId: string,
    marketId: string,
    price?: vega_pb.Price.AsObject,
    sizeDelta: number,
    expiresAt?: vega_pb.Timestamp.AsObject,
    timeInForce: vega_pb.Order.TimeInForceMap[keyof vega_pb.Order.TimeInForceMap],
    peggedOffset?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    peggedReference: vega_pb.PeggedReferenceMap[keyof vega_pb.PeggedReferenceMap],
  }
}

export class LiquidityProvisionSubmission extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getCommitmentAmount(): number;
  setCommitmentAmount(value: number): void;

  getFee(): string;
  setFee(value: string): void;

  clearSellsList(): void;
  getSellsList(): Array<vega_pb.LiquidityOrder>;
  setSellsList(value: Array<vega_pb.LiquidityOrder>): void;
  addSells(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;

  clearBuysList(): void;
  getBuysList(): Array<vega_pb.LiquidityOrder>;
  setBuysList(value: Array<vega_pb.LiquidityOrder>): void;
  addBuys(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;

  getReference(): string;
  setReference(value: string): void;

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
    commitmentAmount: number,
    fee: string,
    sellsList: Array<vega_pb.LiquidityOrder.AsObject>,
    buysList: Array<vega_pb.LiquidityOrder.AsObject>,
    reference: string,
  }
}

export class WithdrawSubmission extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getAsset(): string;
  setAsset(value: string): void;

  hasExt(): boolean;
  clearExt(): void;
  getExt(): vega_pb.WithdrawExt | undefined;
  setExt(value?: vega_pb.WithdrawExt): void;

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
    amount: number,
    asset: string,
    ext?: vega_pb.WithdrawExt.AsObject,
  }
}

export class ProposalSubmission extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  hasTerms(): boolean;
  clearTerms(): void;
  getTerms(): governance_pb.ProposalTerms | undefined;
  setTerms(value?: governance_pb.ProposalTerms): void;

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
  setProposalId(value: string): void;

  getValue(): governance_pb.Vote.ValueMap[keyof governance_pb.Vote.ValueMap];
  setValue(value: governance_pb.Vote.ValueMap[keyof governance_pb.Vote.ValueMap]): void;

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
    value: governance_pb.Vote.ValueMap[keyof governance_pb.Vote.ValueMap],
  }
}

