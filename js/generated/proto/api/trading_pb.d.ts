// package: api
// file: proto/api/trading.proto

import * as jspb from "google-protobuf";
import * as proto_vega_pb from "../../proto/vega_pb";
import * as proto_markets_pb from "../../proto/markets_pb";
import * as proto_governance_pb from "../../proto/governance_pb";
import * as proto_chain_events_pb from "../../proto/chain_events_pb";
import * as proto_assets_pb from "../../proto/assets_pb";
import * as proto_events_pb from "../../proto/events_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../../github.com/mwitkow/go-proto-validators/validator_pb";

export class PropagateChainEventRequest extends jspb.Message {
  hasEvt(): boolean;
  clearEvt(): void;
  getEvt(): proto_chain_events_pb.ChainEvent | undefined;
  setEvt(value?: proto_chain_events_pb.ChainEvent): void;

  getPubkey(): string;
  setPubkey(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropagateChainEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PropagateChainEventRequest): PropagateChainEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropagateChainEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropagateChainEventRequest;
  static deserializeBinaryFromReader(message: PropagateChainEventRequest, reader: jspb.BinaryReader): PropagateChainEventRequest;
}

export namespace PropagateChainEventRequest {
  export type AsObject = {
    evt?: proto_chain_events_pb.ChainEvent.AsObject,
    pubkey: string,
    signature: Uint8Array | string,
  }
}

export class PropagateChainEventResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropagateChainEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PropagateChainEventResponse): PropagateChainEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropagateChainEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropagateChainEventResponse;
  static deserializeBinaryFromReader(message: PropagateChainEventResponse, reader: jspb.BinaryReader): PropagateChainEventResponse;
}

export namespace PropagateChainEventResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class SubmitTransactionRequest extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): proto_vega_pb.SignedBundle | undefined;
  setTx(value?: proto_vega_pb.SignedBundle): void;

  getType(): SubmitTransactionRequest.TypeMap[keyof SubmitTransactionRequest.TypeMap];
  setType(value: SubmitTransactionRequest.TypeMap[keyof SubmitTransactionRequest.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionRequest): SubmitTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionRequest;
  static deserializeBinaryFromReader(message: SubmitTransactionRequest, reader: jspb.BinaryReader): SubmitTransactionRequest;
}

export namespace SubmitTransactionRequest {
  export type AsObject = {
    tx?: proto_vega_pb.SignedBundle.AsObject,
    type: SubmitTransactionRequest.TypeMap[keyof SubmitTransactionRequest.TypeMap],
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_ASYNC: 1;
    TYPE_SYNC: 2;
    TYPE_COMMIT: 3;
  }

  export const Type: TypeMap;
}

export class SubmitTransactionResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionResponse): SubmitTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionResponse;
  static deserializeBinaryFromReader(message: SubmitTransactionResponse, reader: jspb.BinaryReader): SubmitTransactionResponse;
}

export namespace SubmitTransactionResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class PrepareWithdrawRequest extends jspb.Message {
  hasWithdraw(): boolean;
  clearWithdraw(): void;
  getWithdraw(): proto_vega_pb.WithdrawSubmission | undefined;
  setWithdraw(value?: proto_vega_pb.WithdrawSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareWithdrawRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareWithdrawRequest): PrepareWithdrawRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareWithdrawRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareWithdrawRequest;
  static deserializeBinaryFromReader(message: PrepareWithdrawRequest, reader: jspb.BinaryReader): PrepareWithdrawRequest;
}

export namespace PrepareWithdrawRequest {
  export type AsObject = {
    withdraw?: proto_vega_pb.WithdrawSubmission.AsObject,
  }
}

export class PrepareWithdrawResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareWithdrawResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareWithdrawResponse): PrepareWithdrawResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareWithdrawResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareWithdrawResponse;
  static deserializeBinaryFromReader(message: PrepareWithdrawResponse, reader: jspb.BinaryReader): PrepareWithdrawResponse;
}

export namespace PrepareWithdrawResponse {
  export type AsObject = {
    blob: Uint8Array | string,
  }
}

export class PrepareSubmitOrderResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  getSubmitid(): string;
  setSubmitid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareSubmitOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareSubmitOrderResponse): PrepareSubmitOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareSubmitOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareSubmitOrderResponse;
  static deserializeBinaryFromReader(message: PrepareSubmitOrderResponse, reader: jspb.BinaryReader): PrepareSubmitOrderResponse;
}

export namespace PrepareSubmitOrderResponse {
  export type AsObject = {
    blob: Uint8Array | string,
    submitid: string,
  }
}

export class PrepareCancelOrderResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareCancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareCancelOrderResponse): PrepareCancelOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareCancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareCancelOrderResponse;
  static deserializeBinaryFromReader(message: PrepareCancelOrderResponse, reader: jspb.BinaryReader): PrepareCancelOrderResponse;
}

export namespace PrepareCancelOrderResponse {
  export type AsObject = {
    blob: Uint8Array | string,
  }
}

export class PrepareAmendOrderResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareAmendOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareAmendOrderResponse): PrepareAmendOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareAmendOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareAmendOrderResponse;
  static deserializeBinaryFromReader(message: PrepareAmendOrderResponse, reader: jspb.BinaryReader): PrepareAmendOrderResponse;
}

export namespace PrepareAmendOrderResponse {
  export type AsObject = {
    blob: Uint8Array | string,
  }
}

export class SubmitOrderRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): proto_vega_pb.OrderSubmission | undefined;
  setSubmission(value?: proto_vega_pb.OrderSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitOrderRequest): SubmitOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitOrderRequest;
  static deserializeBinaryFromReader(message: SubmitOrderRequest, reader: jspb.BinaryReader): SubmitOrderRequest;
}

export namespace SubmitOrderRequest {
  export type AsObject = {
    submission?: proto_vega_pb.OrderSubmission.AsObject,
  }
}

export class CancelOrderRequest extends jspb.Message {
  hasCancellation(): boolean;
  clearCancellation(): void;
  getCancellation(): proto_vega_pb.OrderCancellation | undefined;
  setCancellation(value?: proto_vega_pb.OrderCancellation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    cancellation?: proto_vega_pb.OrderCancellation.AsObject,
  }
}

export class AmendOrderRequest extends jspb.Message {
  hasAmendment(): boolean;
  clearAmendment(): void;
  getAmendment(): proto_vega_pb.OrderAmendment | undefined;
  setAmendment(value?: proto_vega_pb.OrderAmendment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmendOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AmendOrderRequest): AmendOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmendOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmendOrderRequest;
  static deserializeBinaryFromReader(message: AmendOrderRequest, reader: jspb.BinaryReader): AmendOrderRequest;
}

export namespace AmendOrderRequest {
  export type AsObject = {
    amendment?: proto_vega_pb.OrderAmendment.AsObject,
  }
}

export class AssetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetsRequest): AssetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetsRequest;
  static deserializeBinaryFromReader(message: AssetsRequest, reader: jspb.BinaryReader): AssetsRequest;
}

export namespace AssetsRequest {
  export type AsObject = {
  }
}

export class AssetsResponse extends jspb.Message {
  clearAssetsList(): void;
  getAssetsList(): Array<proto_assets_pb.Asset>;
  setAssetsList(value: Array<proto_assets_pb.Asset>): void;
  addAssets(value?: proto_assets_pb.Asset, index?: number): proto_assets_pb.Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssetsResponse): AssetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetsResponse;
  static deserializeBinaryFromReader(message: AssetsResponse, reader: jspb.BinaryReader): AssetsResponse;
}

export namespace AssetsResponse {
  export type AsObject = {
    assetsList: Array<proto_assets_pb.Asset.AsObject>,
  }
}

export class AssetByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetByIDRequest): AssetByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetByIDRequest;
  static deserializeBinaryFromReader(message: AssetByIDRequest, reader: jspb.BinaryReader): AssetByIDRequest;
}

export namespace AssetByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class AssetByIDResponse extends jspb.Message {
  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): proto_assets_pb.Asset | undefined;
  setAsset(value?: proto_assets_pb.Asset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AssetByIDResponse): AssetByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetByIDResponse;
  static deserializeBinaryFromReader(message: AssetByIDResponse, reader: jspb.BinaryReader): AssetByIDResponse;
}

export namespace AssetByIDResponse {
  export type AsObject = {
    asset?: proto_assets_pb.Asset.AsObject,
  }
}

export class GetNodeSignaturesAggregateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeSignaturesAggregateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeSignaturesAggregateRequest): GetNodeSignaturesAggregateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeSignaturesAggregateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeSignaturesAggregateRequest;
  static deserializeBinaryFromReader(message: GetNodeSignaturesAggregateRequest, reader: jspb.BinaryReader): GetNodeSignaturesAggregateRequest;
}

export namespace GetNodeSignaturesAggregateRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetNodeSignaturesAggregateResponse extends jspb.Message {
  clearSignaturesList(): void;
  getSignaturesList(): Array<proto_vega_pb.NodeSignature>;
  setSignaturesList(value: Array<proto_vega_pb.NodeSignature>): void;
  addSignatures(value?: proto_vega_pb.NodeSignature, index?: number): proto_vega_pb.NodeSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeSignaturesAggregateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeSignaturesAggregateResponse): GetNodeSignaturesAggregateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeSignaturesAggregateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeSignaturesAggregateResponse;
  static deserializeBinaryFromReader(message: GetNodeSignaturesAggregateResponse, reader: jspb.BinaryReader): GetNodeSignaturesAggregateResponse;
}

export namespace GetNodeSignaturesAggregateResponse {
  export type AsObject = {
    signaturesList: Array<proto_vega_pb.NodeSignature.AsObject>,
  }
}

export class OptionalProposalState extends jspb.Message {
  getValue(): proto_governance_pb.Proposal.StateMap[keyof proto_governance_pb.Proposal.StateMap];
  setValue(value: proto_governance_pb.Proposal.StateMap[keyof proto_governance_pb.Proposal.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionalProposalState.AsObject;
  static toObject(includeInstance: boolean, msg: OptionalProposalState): OptionalProposalState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OptionalProposalState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionalProposalState;
  static deserializeBinaryFromReader(message: OptionalProposalState, reader: jspb.BinaryReader): OptionalProposalState;
}

export namespace OptionalProposalState {
  export type AsObject = {
    value: proto_governance_pb.Proposal.StateMap[keyof proto_governance_pb.Proposal.StateMap],
  }
}

export class GetProposalsRequest extends jspb.Message {
  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalsRequest): GetProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalsRequest;
  static deserializeBinaryFromReader(message: GetProposalsRequest, reader: jspb.BinaryReader): GetProposalsRequest;
}

export namespace GetProposalsRequest {
  export type AsObject = {
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalsResponse): GetProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalsResponse;
  static deserializeBinaryFromReader(message: GetProposalsResponse, reader: jspb.BinaryReader): GetProposalsResponse;
}

export namespace GetProposalsResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetProposalsByPartyRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalsByPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalsByPartyRequest): GetProposalsByPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalsByPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalsByPartyRequest;
  static deserializeBinaryFromReader(message: GetProposalsByPartyRequest, reader: jspb.BinaryReader): GetProposalsByPartyRequest;
}

export namespace GetProposalsByPartyRequest {
  export type AsObject = {
    partyid: string,
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetProposalsByPartyResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalsByPartyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalsByPartyResponse): GetProposalsByPartyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalsByPartyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalsByPartyResponse;
  static deserializeBinaryFromReader(message: GetProposalsByPartyResponse, reader: jspb.BinaryReader): GetProposalsByPartyResponse;
}

export namespace GetProposalsByPartyResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetVotesByPartyRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVotesByPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVotesByPartyRequest): GetVotesByPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVotesByPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVotesByPartyRequest;
  static deserializeBinaryFromReader(message: GetVotesByPartyRequest, reader: jspb.BinaryReader): GetVotesByPartyRequest;
}

export namespace GetVotesByPartyRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class GetVotesByPartyResponse extends jspb.Message {
  clearVotesList(): void;
  getVotesList(): Array<proto_governance_pb.Vote>;
  setVotesList(value: Array<proto_governance_pb.Vote>): void;
  addVotes(value?: proto_governance_pb.Vote, index?: number): proto_governance_pb.Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVotesByPartyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVotesByPartyResponse): GetVotesByPartyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVotesByPartyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVotesByPartyResponse;
  static deserializeBinaryFromReader(message: GetVotesByPartyResponse, reader: jspb.BinaryReader): GetVotesByPartyResponse;
}

export namespace GetVotesByPartyResponse {
  export type AsObject = {
    votesList: Array<proto_governance_pb.Vote.AsObject>,
  }
}

export class GetNewMarketProposalsRequest extends jspb.Message {
  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewMarketProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewMarketProposalsRequest): GetNewMarketProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewMarketProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewMarketProposalsRequest;
  static deserializeBinaryFromReader(message: GetNewMarketProposalsRequest, reader: jspb.BinaryReader): GetNewMarketProposalsRequest;
}

export namespace GetNewMarketProposalsRequest {
  export type AsObject = {
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetNewMarketProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewMarketProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewMarketProposalsResponse): GetNewMarketProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewMarketProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewMarketProposalsResponse;
  static deserializeBinaryFromReader(message: GetNewMarketProposalsResponse, reader: jspb.BinaryReader): GetNewMarketProposalsResponse;
}

export namespace GetNewMarketProposalsResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetUpdateMarketProposalsRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdateMarketProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdateMarketProposalsRequest): GetUpdateMarketProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdateMarketProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdateMarketProposalsRequest;
  static deserializeBinaryFromReader(message: GetUpdateMarketProposalsRequest, reader: jspb.BinaryReader): GetUpdateMarketProposalsRequest;
}

export namespace GetUpdateMarketProposalsRequest {
  export type AsObject = {
    marketid: string,
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetUpdateMarketProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUpdateMarketProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUpdateMarketProposalsResponse): GetUpdateMarketProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUpdateMarketProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUpdateMarketProposalsResponse;
  static deserializeBinaryFromReader(message: GetUpdateMarketProposalsResponse, reader: jspb.BinaryReader): GetUpdateMarketProposalsResponse;
}

export namespace GetUpdateMarketProposalsResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetNetworkParametersProposalsRequest extends jspb.Message {
  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkParametersProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkParametersProposalsRequest): GetNetworkParametersProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkParametersProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkParametersProposalsRequest;
  static deserializeBinaryFromReader(message: GetNetworkParametersProposalsRequest, reader: jspb.BinaryReader): GetNetworkParametersProposalsRequest;
}

export namespace GetNetworkParametersProposalsRequest {
  export type AsObject = {
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetNetworkParametersProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkParametersProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkParametersProposalsResponse): GetNetworkParametersProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkParametersProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkParametersProposalsResponse;
  static deserializeBinaryFromReader(message: GetNetworkParametersProposalsResponse, reader: jspb.BinaryReader): GetNetworkParametersProposalsResponse;
}

export namespace GetNetworkParametersProposalsResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetNewAssetProposalsRequest extends jspb.Message {
  hasSelectinstate(): boolean;
  clearSelectinstate(): void;
  getSelectinstate(): OptionalProposalState | undefined;
  setSelectinstate(value?: OptionalProposalState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewAssetProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewAssetProposalsRequest): GetNewAssetProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewAssetProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewAssetProposalsRequest;
  static deserializeBinaryFromReader(message: GetNewAssetProposalsRequest, reader: jspb.BinaryReader): GetNewAssetProposalsRequest;
}

export namespace GetNewAssetProposalsRequest {
  export type AsObject = {
    selectinstate?: OptionalProposalState.AsObject,
  }
}

export class GetNewAssetProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<proto_governance_pb.GovernanceData>;
  setDataList(value: Array<proto_governance_pb.GovernanceData>): void;
  addData(value?: proto_governance_pb.GovernanceData, index?: number): proto_governance_pb.GovernanceData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNewAssetProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNewAssetProposalsResponse): GetNewAssetProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNewAssetProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNewAssetProposalsResponse;
  static deserializeBinaryFromReader(message: GetNewAssetProposalsResponse, reader: jspb.BinaryReader): GetNewAssetProposalsResponse;
}

export namespace GetNewAssetProposalsResponse {
  export type AsObject = {
    dataList: Array<proto_governance_pb.GovernanceData.AsObject>,
  }
}

export class GetProposalByIDRequest extends jspb.Message {
  getProposalid(): string;
  setProposalid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalByIDRequest): GetProposalByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalByIDRequest;
  static deserializeBinaryFromReader(message: GetProposalByIDRequest, reader: jspb.BinaryReader): GetProposalByIDRequest;
}

export namespace GetProposalByIDRequest {
  export type AsObject = {
    proposalid: string,
  }
}

export class GetProposalByIDResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): proto_governance_pb.GovernanceData | undefined;
  setData(value?: proto_governance_pb.GovernanceData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalByIDResponse): GetProposalByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalByIDResponse;
  static deserializeBinaryFromReader(message: GetProposalByIDResponse, reader: jspb.BinaryReader): GetProposalByIDResponse;
}

export namespace GetProposalByIDResponse {
  export type AsObject = {
    data?: proto_governance_pb.GovernanceData.AsObject,
  }
}

export class GetProposalByReferenceRequest extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalByReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalByReferenceRequest): GetProposalByReferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalByReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalByReferenceRequest;
  static deserializeBinaryFromReader(message: GetProposalByReferenceRequest, reader: jspb.BinaryReader): GetProposalByReferenceRequest;
}

export namespace GetProposalByReferenceRequest {
  export type AsObject = {
    reference: string,
  }
}

export class GetProposalByReferenceResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): proto_governance_pb.GovernanceData | undefined;
  setData(value?: proto_governance_pb.GovernanceData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProposalByReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProposalByReferenceResponse): GetProposalByReferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProposalByReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProposalByReferenceResponse;
  static deserializeBinaryFromReader(message: GetProposalByReferenceResponse, reader: jspb.BinaryReader): GetProposalByReferenceResponse;
}

export namespace GetProposalByReferenceResponse {
  export type AsObject = {
    data?: proto_governance_pb.GovernanceData.AsObject,
  }
}

export class ObservePartyProposalsRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservePartyProposalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObservePartyProposalsRequest): ObservePartyProposalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservePartyProposalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservePartyProposalsRequest;
  static deserializeBinaryFromReader(message: ObservePartyProposalsRequest, reader: jspb.BinaryReader): ObservePartyProposalsRequest;
}

export namespace ObservePartyProposalsRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class ObserveProposalVotesRequest extends jspb.Message {
  getProposalid(): string;
  setProposalid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveProposalVotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveProposalVotesRequest): ObserveProposalVotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveProposalVotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveProposalVotesRequest;
  static deserializeBinaryFromReader(message: ObserveProposalVotesRequest, reader: jspb.BinaryReader): ObserveProposalVotesRequest;
}

export namespace ObserveProposalVotesRequest {
  export type AsObject = {
    proposalid: string,
  }
}

export class ObservePartyVotesRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservePartyVotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObservePartyVotesRequest): ObservePartyVotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservePartyVotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservePartyVotesRequest;
  static deserializeBinaryFromReader(message: ObservePartyVotesRequest, reader: jspb.BinaryReader): ObservePartyVotesRequest;
}

export namespace ObservePartyVotesRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class MarginLevelsSubscribeRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginLevelsSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarginLevelsSubscribeRequest): MarginLevelsSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginLevelsSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginLevelsSubscribeRequest;
  static deserializeBinaryFromReader(message: MarginLevelsSubscribeRequest, reader: jspb.BinaryReader): MarginLevelsSubscribeRequest;
}

export namespace MarginLevelsSubscribeRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
  }
}

export class MarginLevelsRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginLevelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarginLevelsRequest): MarginLevelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginLevelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginLevelsRequest;
  static deserializeBinaryFromReader(message: MarginLevelsRequest, reader: jspb.BinaryReader): MarginLevelsRequest;
}

export namespace MarginLevelsRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
  }
}

export class MarginLevelsResponse extends jspb.Message {
  clearMarginlevelsList(): void;
  getMarginlevelsList(): Array<proto_vega_pb.MarginLevels>;
  setMarginlevelsList(value: Array<proto_vega_pb.MarginLevels>): void;
  addMarginlevels(value?: proto_vega_pb.MarginLevels, index?: number): proto_vega_pb.MarginLevels;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginLevelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarginLevelsResponse): MarginLevelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginLevelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginLevelsResponse;
  static deserializeBinaryFromReader(message: MarginLevelsResponse, reader: jspb.BinaryReader): MarginLevelsResponse;
}

export namespace MarginLevelsResponse {
  export type AsObject = {
    marginlevelsList: Array<proto_vega_pb.MarginLevels.AsObject>,
  }
}

export class MarketsDataSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsDataSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsDataSubscribeRequest): MarketsDataSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsDataSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsDataSubscribeRequest;
  static deserializeBinaryFromReader(message: MarketsDataSubscribeRequest, reader: jspb.BinaryReader): MarketsDataSubscribeRequest;
}

export namespace MarketsDataSubscribeRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class MarketDataByIDRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataByIDRequest): MarketDataByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDataByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataByIDRequest;
  static deserializeBinaryFromReader(message: MarketDataByIDRequest, reader: jspb.BinaryReader): MarketDataByIDRequest;
}

export namespace MarketDataByIDRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class MarketDataByIDResponse extends jspb.Message {
  hasMarketdata(): boolean;
  clearMarketdata(): void;
  getMarketdata(): proto_vega_pb.MarketData | undefined;
  setMarketdata(value?: proto_vega_pb.MarketData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataByIDResponse): MarketDataByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDataByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataByIDResponse;
  static deserializeBinaryFromReader(message: MarketDataByIDResponse, reader: jspb.BinaryReader): MarketDataByIDResponse;
}

export namespace MarketDataByIDResponse {
  export type AsObject = {
    marketdata?: proto_vega_pb.MarketData.AsObject,
  }
}

export class MarketsDataResponse extends jspb.Message {
  clearMarketsdataList(): void;
  getMarketsdataList(): Array<proto_vega_pb.MarketData>;
  setMarketsdataList(value: Array<proto_vega_pb.MarketData>): void;
  addMarketsdata(value?: proto_vega_pb.MarketData, index?: number): proto_vega_pb.MarketData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsDataResponse): MarketsDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsDataResponse;
  static deserializeBinaryFromReader(message: MarketsDataResponse, reader: jspb.BinaryReader): MarketsDataResponse;
}

export namespace MarketsDataResponse {
  export type AsObject = {
    marketsdataList: Array<proto_vega_pb.MarketData.AsObject>,
  }
}

export class LastTradeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastTradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LastTradeRequest): LastTradeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastTradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastTradeRequest;
  static deserializeBinaryFromReader(message: LastTradeRequest, reader: jspb.BinaryReader): LastTradeRequest;
}

export namespace LastTradeRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class LastTradeResponse extends jspb.Message {
  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): proto_vega_pb.Trade | undefined;
  setTrade(value?: proto_vega_pb.Trade): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastTradeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LastTradeResponse): LastTradeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastTradeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastTradeResponse;
  static deserializeBinaryFromReader(message: LastTradeResponse, reader: jspb.BinaryReader): LastTradeResponse;
}

export namespace LastTradeResponse {
  export type AsObject = {
    trade?: proto_vega_pb.Trade.AsObject,
  }
}

export class MarketByIDRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketByIDRequest): MarketByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketByIDRequest;
  static deserializeBinaryFromReader(message: MarketByIDRequest, reader: jspb.BinaryReader): MarketByIDRequest;
}

export namespace MarketByIDRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class MarketByIDResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): proto_markets_pb.Market | undefined;
  setMarket(value?: proto_markets_pb.Market): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketByIDResponse): MarketByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketByIDResponse;
  static deserializeBinaryFromReader(message: MarketByIDResponse, reader: jspb.BinaryReader): MarketByIDResponse;
}

export namespace MarketByIDResponse {
  export type AsObject = {
    market?: proto_markets_pb.Market.AsObject,
  }
}

export class PartyByIDRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartyByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartyByIDRequest): PartyByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartyByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartyByIDRequest;
  static deserializeBinaryFromReader(message: PartyByIDRequest, reader: jspb.BinaryReader): PartyByIDRequest;
}

export namespace PartyByIDRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class PartyByIDResponse extends jspb.Message {
  hasParty(): boolean;
  clearParty(): void;
  getParty(): proto_vega_pb.Party | undefined;
  setParty(value?: proto_vega_pb.Party): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartyByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PartyByIDResponse): PartyByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartyByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartyByIDResponse;
  static deserializeBinaryFromReader(message: PartyByIDResponse, reader: jspb.BinaryReader): PartyByIDResponse;
}

export namespace PartyByIDResponse {
  export type AsObject = {
    party?: proto_vega_pb.Party.AsObject,
  }
}

export class PartiesResponse extends jspb.Message {
  clearPartiesList(): void;
  getPartiesList(): Array<proto_vega_pb.Party>;
  setPartiesList(value: Array<proto_vega_pb.Party>): void;
  addParties(value?: proto_vega_pb.Party, index?: number): proto_vega_pb.Party;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PartiesResponse): PartiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartiesResponse;
  static deserializeBinaryFromReader(message: PartiesResponse, reader: jspb.BinaryReader): PartiesResponse;
}

export namespace PartiesResponse {
  export type AsObject = {
    partiesList: Array<proto_vega_pb.Party.AsObject>,
  }
}

export class TradesByPartyRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByPartyRequest): TradesByPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByPartyRequest;
  static deserializeBinaryFromReader(message: TradesByPartyRequest, reader: jspb.BinaryReader): TradesByPartyRequest;
}

export namespace TradesByPartyRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
    pagination?: Pagination.AsObject,
  }
}

export class TradesByPartyResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<proto_vega_pb.Trade>;
  setTradesList(value: Array<proto_vega_pb.Trade>): void;
  addTrades(value?: proto_vega_pb.Trade, index?: number): proto_vega_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByPartyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByPartyResponse): TradesByPartyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByPartyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByPartyResponse;
  static deserializeBinaryFromReader(message: TradesByPartyResponse, reader: jspb.BinaryReader): TradesByPartyResponse;
}

export namespace TradesByPartyResponse {
  export type AsObject = {
    tradesList: Array<proto_vega_pb.Trade.AsObject>,
  }
}

export class TradesByOrderRequest extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByOrderRequest): TradesByOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByOrderRequest;
  static deserializeBinaryFromReader(message: TradesByOrderRequest, reader: jspb.BinaryReader): TradesByOrderRequest;
}

export namespace TradesByOrderRequest {
  export type AsObject = {
    orderid: string,
  }
}

export class TradesByOrderResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<proto_vega_pb.Trade>;
  setTradesList(value: Array<proto_vega_pb.Trade>): void;
  addTrades(value?: proto_vega_pb.Trade, index?: number): proto_vega_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByOrderResponse): TradesByOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByOrderResponse;
  static deserializeBinaryFromReader(message: TradesByOrderResponse, reader: jspb.BinaryReader): TradesByOrderResponse;
}

export namespace TradesByOrderResponse {
  export type AsObject = {
    tradesList: Array<proto_vega_pb.Trade.AsObject>,
  }
}

export class AccountsSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  getType(): proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap];
  setType(value: proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsSubscribeRequest): AccountsSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountsSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsSubscribeRequest;
  static deserializeBinaryFromReader(message: AccountsSubscribeRequest, reader: jspb.BinaryReader): AccountsSubscribeRequest;
}

export namespace AccountsSubscribeRequest {
  export type AsObject = {
    marketid: string,
    partyid: string,
    asset: string,
    type: proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap],
  }
}

export class OrdersSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersSubscribeRequest): OrdersSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersSubscribeRequest;
  static deserializeBinaryFromReader(message: OrdersSubscribeRequest, reader: jspb.BinaryReader): OrdersSubscribeRequest;
}

export namespace OrdersSubscribeRequest {
  export type AsObject = {
    marketid: string,
    partyid: string,
  }
}

export class TradesSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesSubscribeRequest): TradesSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesSubscribeRequest;
  static deserializeBinaryFromReader(message: TradesSubscribeRequest, reader: jspb.BinaryReader): TradesSubscribeRequest;
}

export namespace TradesSubscribeRequest {
  export type AsObject = {
    marketid: string,
    partyid: string,
  }
}

export class CandlesSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getInterval(): proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap];
  setInterval(value: proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandlesSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CandlesSubscribeRequest): CandlesSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandlesSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandlesSubscribeRequest;
  static deserializeBinaryFromReader(message: CandlesSubscribeRequest, reader: jspb.BinaryReader): CandlesSubscribeRequest;
}

export namespace CandlesSubscribeRequest {
  export type AsObject = {
    marketid: string,
    interval: proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap],
  }
}

export class MarketDepthSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthSubscribeRequest): MarketDepthSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthSubscribeRequest;
  static deserializeBinaryFromReader(message: MarketDepthSubscribeRequest, reader: jspb.BinaryReader): MarketDepthSubscribeRequest;
}

export namespace MarketDepthSubscribeRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class MarketDepthUpdatesSubscribeRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthUpdatesSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthUpdatesSubscribeRequest): MarketDepthUpdatesSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthUpdatesSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthUpdatesSubscribeRequest;
  static deserializeBinaryFromReader(message: MarketDepthUpdatesSubscribeRequest, reader: jspb.BinaryReader): MarketDepthUpdatesSubscribeRequest;
}

export namespace MarketDepthUpdatesSubscribeRequest {
  export type AsObject = {
    marketid: string,
  }
}

export class PositionsSubscribeRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSubscribeRequest): PositionsSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSubscribeRequest;
  static deserializeBinaryFromReader(message: PositionsSubscribeRequest, reader: jspb.BinaryReader): PositionsSubscribeRequest;
}

export namespace PositionsSubscribeRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
  }
}

export class OrdersByMarketRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersByMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersByMarketRequest): OrdersByMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersByMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersByMarketRequest;
  static deserializeBinaryFromReader(message: OrdersByMarketRequest, reader: jspb.BinaryReader): OrdersByMarketRequest;
}

export namespace OrdersByMarketRequest {
  export type AsObject = {
    marketid: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrdersByMarketResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<proto_vega_pb.Order>;
  setOrdersList(value: Array<proto_vega_pb.Order>): void;
  addOrders(value?: proto_vega_pb.Order, index?: number): proto_vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersByMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersByMarketResponse): OrdersByMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersByMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersByMarketResponse;
  static deserializeBinaryFromReader(message: OrdersByMarketResponse, reader: jspb.BinaryReader): OrdersByMarketResponse;
}

export namespace OrdersByMarketResponse {
  export type AsObject = {
    ordersList: Array<proto_vega_pb.Order.AsObject>,
  }
}

export class OrdersByPartyRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersByPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersByPartyRequest): OrdersByPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersByPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersByPartyRequest;
  static deserializeBinaryFromReader(message: OrdersByPartyRequest, reader: jspb.BinaryReader): OrdersByPartyRequest;
}

export namespace OrdersByPartyRequest {
  export type AsObject = {
    partyid: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrdersByPartyResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<proto_vega_pb.Order>;
  setOrdersList(value: Array<proto_vega_pb.Order>): void;
  addOrders(value?: proto_vega_pb.Order, index?: number): proto_vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersByPartyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersByPartyResponse): OrdersByPartyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersByPartyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersByPartyResponse;
  static deserializeBinaryFromReader(message: OrdersByPartyResponse, reader: jspb.BinaryReader): OrdersByPartyResponse;
}

export namespace OrdersByPartyResponse {
  export type AsObject = {
    ordersList: Array<proto_vega_pb.Order.AsObject>,
  }
}

export class OrderByMarketAndIdRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByMarketAndIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByMarketAndIdRequest): OrderByMarketAndIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByMarketAndIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIdRequest;
  static deserializeBinaryFromReader(message: OrderByMarketAndIdRequest, reader: jspb.BinaryReader): OrderByMarketAndIdRequest;
}

export namespace OrderByMarketAndIdRequest {
  export type AsObject = {
    marketid: string,
    orderid: string,
  }
}

export class OrderByMarketAndIdResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_vega_pb.Order | undefined;
  setOrder(value?: proto_vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByMarketAndIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByMarketAndIdResponse): OrderByMarketAndIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByMarketAndIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIdResponse;
  static deserializeBinaryFromReader(message: OrderByMarketAndIdResponse, reader: jspb.BinaryReader): OrderByMarketAndIdResponse;
}

export namespace OrderByMarketAndIdResponse {
  export type AsObject = {
    order?: proto_vega_pb.Order.AsObject,
  }
}

export class OrderByReferenceRequest extends jspb.Message {
  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByReferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByReferenceRequest): OrderByReferenceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByReferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByReferenceRequest;
  static deserializeBinaryFromReader(message: OrderByReferenceRequest, reader: jspb.BinaryReader): OrderByReferenceRequest;
}

export namespace OrderByReferenceRequest {
  export type AsObject = {
    reference: string,
  }
}

export class OrderByReferenceResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_vega_pb.Order | undefined;
  setOrder(value?: proto_vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByReferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByReferenceResponse): OrderByReferenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByReferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByReferenceResponse;
  static deserializeBinaryFromReader(message: OrderByReferenceResponse, reader: jspb.BinaryReader): OrderByReferenceResponse;
}

export namespace OrderByReferenceResponse {
  export type AsObject = {
    order?: proto_vega_pb.Order.AsObject,
  }
}

export class MarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<proto_markets_pb.Market>;
  setMarketsList(value: Array<proto_markets_pb.Market>): void;
  addMarkets(value?: proto_markets_pb.Market, index?: number): proto_markets_pb.Market;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsResponse): MarketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsResponse;
  static deserializeBinaryFromReader(message: MarketsResponse, reader: jspb.BinaryReader): MarketsResponse;
}

export namespace MarketsResponse {
  export type AsObject = {
    marketsList: Array<proto_markets_pb.Market.AsObject>,
  }
}

export class CandlesRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getSincetimestamp(): number;
  setSincetimestamp(value: number): void;

  getInterval(): proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap];
  setInterval(value: proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CandlesRequest): CandlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandlesRequest;
  static deserializeBinaryFromReader(message: CandlesRequest, reader: jspb.BinaryReader): CandlesRequest;
}

export namespace CandlesRequest {
  export type AsObject = {
    marketid: string,
    sincetimestamp: number,
    interval: proto_vega_pb.IntervalMap[keyof proto_vega_pb.IntervalMap],
  }
}

export class CandlesResponse extends jspb.Message {
  clearCandlesList(): void;
  getCandlesList(): Array<proto_vega_pb.Candle>;
  setCandlesList(value: Array<proto_vega_pb.Candle>): void;
  addCandles(value?: proto_vega_pb.Candle, index?: number): proto_vega_pb.Candle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CandlesResponse): CandlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandlesResponse;
  static deserializeBinaryFromReader(message: CandlesResponse, reader: jspb.BinaryReader): CandlesResponse;
}

export namespace CandlesResponse {
  export type AsObject = {
    candlesList: Array<proto_vega_pb.Candle.AsObject>,
  }
}

export class MarketDepthRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getMaxdepth(): number;
  setMaxdepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthRequest): MarketDepthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthRequest;
  static deserializeBinaryFromReader(message: MarketDepthRequest, reader: jspb.BinaryReader): MarketDepthRequest;
}

export namespace MarketDepthRequest {
  export type AsObject = {
    marketid: string,
    maxdepth: number,
  }
}

export class MarketDepthResponse extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<proto_vega_pb.PriceLevel>;
  setBuyList(value: Array<proto_vega_pb.PriceLevel>): void;
  addBuy(value?: proto_vega_pb.PriceLevel, index?: number): proto_vega_pb.PriceLevel;

  clearSellList(): void;
  getSellList(): Array<proto_vega_pb.PriceLevel>;
  setSellList(value: Array<proto_vega_pb.PriceLevel>): void;
  addSell(value?: proto_vega_pb.PriceLevel, index?: number): proto_vega_pb.PriceLevel;

  hasLasttrade(): boolean;
  clearLasttrade(): void;
  getLasttrade(): proto_vega_pb.Trade | undefined;
  setLasttrade(value?: proto_vega_pb.Trade): void;

  getSequencenumber(): number;
  setSequencenumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthResponse): MarketDepthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthResponse;
  static deserializeBinaryFromReader(message: MarketDepthResponse, reader: jspb.BinaryReader): MarketDepthResponse;
}

export namespace MarketDepthResponse {
  export type AsObject = {
    marketid: string,
    buyList: Array<proto_vega_pb.PriceLevel.AsObject>,
    sellList: Array<proto_vega_pb.PriceLevel.AsObject>,
    lasttrade?: proto_vega_pb.Trade.AsObject,
    sequencenumber: number,
  }
}

export class TradesByMarketRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByMarketRequest): TradesByMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByMarketRequest;
  static deserializeBinaryFromReader(message: TradesByMarketRequest, reader: jspb.BinaryReader): TradesByMarketRequest;
}

export namespace TradesByMarketRequest {
  export type AsObject = {
    marketid: string,
    pagination?: Pagination.AsObject,
  }
}

export class TradesByMarketResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<proto_vega_pb.Trade>;
  setTradesList(value: Array<proto_vega_pb.Trade>): void;
  addTrades(value?: proto_vega_pb.Trade, index?: number): proto_vega_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesByMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesByMarketResponse): TradesByMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesByMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesByMarketResponse;
  static deserializeBinaryFromReader(message: TradesByMarketResponse, reader: jspb.BinaryReader): TradesByMarketResponse;
}

export namespace TradesByMarketResponse {
  export type AsObject = {
    tradesList: Array<proto_vega_pb.Trade.AsObject>,
  }
}

export class PositionsByPartyRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsByPartyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsByPartyRequest): PositionsByPartyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsByPartyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsByPartyRequest;
  static deserializeBinaryFromReader(message: PositionsByPartyRequest, reader: jspb.BinaryReader): PositionsByPartyRequest;
}

export namespace PositionsByPartyRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
  }
}

export class PositionsByPartyResponse extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<proto_vega_pb.Position>;
  setPositionsList(value: Array<proto_vega_pb.Position>): void;
  addPositions(value?: proto_vega_pb.Position, index?: number): proto_vega_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsByPartyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsByPartyResponse): PositionsByPartyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsByPartyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsByPartyResponse;
  static deserializeBinaryFromReader(message: PositionsByPartyResponse, reader: jspb.BinaryReader): PositionsByPartyResponse;
}

export namespace PositionsByPartyResponse {
  export type AsObject = {
    positionsList: Array<proto_vega_pb.Position.AsObject>,
  }
}

export class VegaTimeResponse extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VegaTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VegaTimeResponse): VegaTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VegaTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VegaTimeResponse;
  static deserializeBinaryFromReader(message: VegaTimeResponse, reader: jspb.BinaryReader): VegaTimeResponse;
}

export namespace VegaTimeResponse {
  export type AsObject = {
    timestamp: number,
  }
}

export class Pagination extends jspb.Message {
  getSkip(): number;
  setSkip(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getDescending(): boolean;
  setDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pagination.AsObject;
  static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pagination;
  static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
  export type AsObject = {
    skip: number,
    limit: number,
    descending: boolean,
  }
}

export class OrdersStream extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<proto_vega_pb.Order>;
  setOrdersList(value: Array<proto_vega_pb.Order>): void;
  addOrders(value?: proto_vega_pb.Order, index?: number): proto_vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersStream.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersStream): OrdersStream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersStream;
  static deserializeBinaryFromReader(message: OrdersStream, reader: jspb.BinaryReader): OrdersStream;
}

export namespace OrdersStream {
  export type AsObject = {
    ordersList: Array<proto_vega_pb.Order.AsObject>,
  }
}

export class TradesStream extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<proto_vega_pb.Trade>;
  setTradesList(value: Array<proto_vega_pb.Trade>): void;
  addTrades(value?: proto_vega_pb.Trade, index?: number): proto_vega_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesStream.AsObject;
  static toObject(includeInstance: boolean, msg: TradesStream): TradesStream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesStream;
  static deserializeBinaryFromReader(message: TradesStream, reader: jspb.BinaryReader): TradesStream;
}

export namespace TradesStream {
  export type AsObject = {
    tradesList: Array<proto_vega_pb.Trade.AsObject>,
  }
}

export class PartyAccountsRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getType(): proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap];
  setType(value: proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap]): void;

  getAsset(): string;
  setAsset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartyAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartyAccountsRequest): PartyAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartyAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartyAccountsRequest;
  static deserializeBinaryFromReader(message: PartyAccountsRequest, reader: jspb.BinaryReader): PartyAccountsRequest;
}

export namespace PartyAccountsRequest {
  export type AsObject = {
    partyid: string,
    marketid: string,
    type: proto_vega_pb.AccountTypeMap[keyof proto_vega_pb.AccountTypeMap],
    asset: string,
  }
}

export class PartyAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<proto_vega_pb.Account>;
  setAccountsList(value: Array<proto_vega_pb.Account>): void;
  addAccounts(value?: proto_vega_pb.Account, index?: number): proto_vega_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartyAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PartyAccountsResponse): PartyAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartyAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartyAccountsResponse;
  static deserializeBinaryFromReader(message: PartyAccountsResponse, reader: jspb.BinaryReader): PartyAccountsResponse;
}

export namespace PartyAccountsResponse {
  export type AsObject = {
    accountsList: Array<proto_vega_pb.Account.AsObject>,
  }
}

export class MarketAccountsRequest extends jspb.Message {
  getMarketid(): string;
  setMarketid(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketAccountsRequest): MarketAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketAccountsRequest;
  static deserializeBinaryFromReader(message: MarketAccountsRequest, reader: jspb.BinaryReader): MarketAccountsRequest;
}

export namespace MarketAccountsRequest {
  export type AsObject = {
    marketid: string,
    asset: string,
  }
}

export class MarketAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<proto_vega_pb.Account>;
  setAccountsList(value: Array<proto_vega_pb.Account>): void;
  addAccounts(value?: proto_vega_pb.Account, index?: number): proto_vega_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketAccountsResponse): MarketAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketAccountsResponse;
  static deserializeBinaryFromReader(message: MarketAccountsResponse, reader: jspb.BinaryReader): MarketAccountsResponse;
}

export namespace MarketAccountsResponse {
  export type AsObject = {
    accountsList: Array<proto_vega_pb.Account.AsObject>,
  }
}

export class FeeInfrastructureAccountsRequest extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeInfrastructureAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeeInfrastructureAccountsRequest): FeeInfrastructureAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeInfrastructureAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeInfrastructureAccountsRequest;
  static deserializeBinaryFromReader(message: FeeInfrastructureAccountsRequest, reader: jspb.BinaryReader): FeeInfrastructureAccountsRequest;
}

export namespace FeeInfrastructureAccountsRequest {
  export type AsObject = {
    asset: string,
  }
}

export class FeeInfrastructureAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<proto_vega_pb.Account>;
  setAccountsList(value: Array<proto_vega_pb.Account>): void;
  addAccounts(value?: proto_vega_pb.Account, index?: number): proto_vega_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeInfrastructureAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeeInfrastructureAccountsResponse): FeeInfrastructureAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeInfrastructureAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeInfrastructureAccountsResponse;
  static deserializeBinaryFromReader(message: FeeInfrastructureAccountsResponse, reader: jspb.BinaryReader): FeeInfrastructureAccountsResponse;
}

export namespace FeeInfrastructureAccountsResponse {
  export type AsObject = {
    accountsList: Array<proto_vega_pb.Account.AsObject>,
  }
}

export class PrepareProposalRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): proto_governance_pb.ProposalTerms | undefined;
  setProposal(value?: proto_governance_pb.ProposalTerms): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareProposalRequest): PrepareProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareProposalRequest;
  static deserializeBinaryFromReader(message: PrepareProposalRequest, reader: jspb.BinaryReader): PrepareProposalRequest;
}

export namespace PrepareProposalRequest {
  export type AsObject = {
    partyid: string,
    reference: string,
    proposal?: proto_governance_pb.ProposalTerms.AsObject,
  }
}

export class PrepareProposalResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  hasPendingproposal(): boolean;
  clearPendingproposal(): void;
  getPendingproposal(): proto_governance_pb.Proposal | undefined;
  setPendingproposal(value?: proto_governance_pb.Proposal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareProposalResponse): PrepareProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareProposalResponse;
  static deserializeBinaryFromReader(message: PrepareProposalResponse, reader: jspb.BinaryReader): PrepareProposalResponse;
}

export namespace PrepareProposalResponse {
  export type AsObject = {
    blob: Uint8Array | string,
    pendingproposal?: proto_governance_pb.Proposal.AsObject,
  }
}

export class PrepareVoteRequest extends jspb.Message {
  hasVote(): boolean;
  clearVote(): void;
  getVote(): proto_governance_pb.Vote | undefined;
  setVote(value?: proto_governance_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareVoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareVoteRequest): PrepareVoteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareVoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareVoteRequest;
  static deserializeBinaryFromReader(message: PrepareVoteRequest, reader: jspb.BinaryReader): PrepareVoteRequest;
}

export namespace PrepareVoteRequest {
  export type AsObject = {
    vote?: proto_governance_pb.Vote.AsObject,
  }
}

export class PrepareVoteResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  hasVote(): boolean;
  clearVote(): void;
  getVote(): proto_governance_pb.Vote | undefined;
  setVote(value?: proto_governance_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareVoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareVoteResponse): PrepareVoteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareVoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareVoteResponse;
  static deserializeBinaryFromReader(message: PrepareVoteResponse, reader: jspb.BinaryReader): PrepareVoteResponse;
}

export namespace PrepareVoteResponse {
  export type AsObject = {
    blob: Uint8Array | string,
    vote?: proto_governance_pb.Vote.AsObject,
  }
}

export class PrepareLiquidityProvisionRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): proto_vega_pb.LiquidityProvisionSubmission | undefined;
  setSubmission(value?: proto_vega_pb.LiquidityProvisionSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareLiquidityProvisionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareLiquidityProvisionRequest): PrepareLiquidityProvisionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareLiquidityProvisionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareLiquidityProvisionRequest;
  static deserializeBinaryFromReader(message: PrepareLiquidityProvisionRequest, reader: jspb.BinaryReader): PrepareLiquidityProvisionRequest;
}

export namespace PrepareLiquidityProvisionRequest {
  export type AsObject = {
    submission?: proto_vega_pb.LiquidityProvisionSubmission.AsObject,
  }
}

export class PrepareLiquidityProvisionResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareLiquidityProvisionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareLiquidityProvisionResponse): PrepareLiquidityProvisionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareLiquidityProvisionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareLiquidityProvisionResponse;
  static deserializeBinaryFromReader(message: PrepareLiquidityProvisionResponse, reader: jspb.BinaryReader): PrepareLiquidityProvisionResponse;
}

export namespace PrepareLiquidityProvisionResponse {
  export type AsObject = {
    blob: Uint8Array | string,
  }
}

export class OrderByIDRequest extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByIDRequest): OrderByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByIDRequest;
  static deserializeBinaryFromReader(message: OrderByIDRequest, reader: jspb.BinaryReader): OrderByIDRequest;
}

export namespace OrderByIDRequest {
  export type AsObject = {
    orderid: string,
    version: number,
  }
}

export class OrderVersionsByIDRequest extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): Pagination | undefined;
  setPagination(value?: Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderVersionsByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderVersionsByIDRequest): OrderVersionsByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderVersionsByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderVersionsByIDRequest;
  static deserializeBinaryFromReader(message: OrderVersionsByIDRequest, reader: jspb.BinaryReader): OrderVersionsByIDRequest;
}

export namespace OrderVersionsByIDRequest {
  export type AsObject = {
    orderid: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrderVersionsResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<proto_vega_pb.Order>;
  setOrdersList(value: Array<proto_vega_pb.Order>): void;
  addOrders(value?: proto_vega_pb.Order, index?: number): proto_vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderVersionsResponse): OrderVersionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderVersionsResponse;
  static deserializeBinaryFromReader(message: OrderVersionsResponse, reader: jspb.BinaryReader): OrderVersionsResponse;
}

export namespace OrderVersionsResponse {
  export type AsObject = {
    ordersList: Array<proto_vega_pb.Order.AsObject>,
  }
}

export class EstimateFeeRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_vega_pb.Order | undefined;
  setOrder(value?: proto_vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateFeeRequest): EstimateFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateFeeRequest;
  static deserializeBinaryFromReader(message: EstimateFeeRequest, reader: jspb.BinaryReader): EstimateFeeRequest;
}

export namespace EstimateFeeRequest {
  export type AsObject = {
    order?: proto_vega_pb.Order.AsObject,
  }
}

export class EstimateFeeResponse extends jspb.Message {
  hasFee(): boolean;
  clearFee(): void;
  getFee(): proto_vega_pb.Fee | undefined;
  setFee(value?: proto_vega_pb.Fee): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateFeeResponse): EstimateFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateFeeResponse;
  static deserializeBinaryFromReader(message: EstimateFeeResponse, reader: jspb.BinaryReader): EstimateFeeResponse;
}

export namespace EstimateFeeResponse {
  export type AsObject = {
    fee?: proto_vega_pb.Fee.AsObject,
  }
}

export class EstimateMarginRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_vega_pb.Order | undefined;
  setOrder(value?: proto_vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateMarginRequest): EstimateMarginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateMarginRequest;
  static deserializeBinaryFromReader(message: EstimateMarginRequest, reader: jspb.BinaryReader): EstimateMarginRequest;
}

export namespace EstimateMarginRequest {
  export type AsObject = {
    order?: proto_vega_pb.Order.AsObject,
  }
}

export class EstimateMarginResponse extends jspb.Message {
  hasMarginlevels(): boolean;
  clearMarginlevels(): void;
  getMarginlevels(): proto_vega_pb.MarginLevels | undefined;
  setMarginlevels(value?: proto_vega_pb.MarginLevels): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateMarginResponse): EstimateMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateMarginResponse;
  static deserializeBinaryFromReader(message: EstimateMarginResponse, reader: jspb.BinaryReader): EstimateMarginResponse;
}

export namespace EstimateMarginResponse {
  export type AsObject = {
    marginlevels?: proto_vega_pb.MarginLevels.AsObject,
  }
}

export class ObserveEventsRequest extends jspb.Message {
  clearTypeList(): void;
  getTypeList(): Array<proto_events_pb.BusEventTypeMap[keyof proto_events_pb.BusEventTypeMap]>;
  setTypeList(value: Array<proto_events_pb.BusEventTypeMap[keyof proto_events_pb.BusEventTypeMap]>): void;
  addType(value: proto_events_pb.BusEventTypeMap[keyof proto_events_pb.BusEventTypeMap], index?: number): proto_events_pb.BusEventTypeMap[keyof proto_events_pb.BusEventTypeMap];

  getMarketid(): string;
  setMarketid(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getBatchsize(): number;
  setBatchsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveEventsRequest): ObserveEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveEventsRequest;
  static deserializeBinaryFromReader(message: ObserveEventsRequest, reader: jspb.BinaryReader): ObserveEventsRequest;
}

export namespace ObserveEventsRequest {
  export type AsObject = {
    typeList: Array<proto_events_pb.BusEventTypeMap[keyof proto_events_pb.BusEventTypeMap]>,
    marketid: string,
    partyid: string,
    batchsize: number,
  }
}

export class ObserveEventsResponse extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<proto_events_pb.BusEvent>;
  setEventsList(value: Array<proto_events_pb.BusEvent>): void;
  addEvents(value?: proto_events_pb.BusEvent, index?: number): proto_events_pb.BusEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveEventsResponse): ObserveEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveEventsResponse;
  static deserializeBinaryFromReader(message: ObserveEventsResponse, reader: jspb.BinaryReader): ObserveEventsResponse;
}

export namespace ObserveEventsResponse {
  export type AsObject = {
    eventsList: Array<proto_events_pb.BusEvent.AsObject>,
  }
}

export class WithdrawalsRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalsRequest): WithdrawalsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawalsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalsRequest;
  static deserializeBinaryFromReader(message: WithdrawalsRequest, reader: jspb.BinaryReader): WithdrawalsRequest;
}

export namespace WithdrawalsRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class WithdrawalsResponse extends jspb.Message {
  clearWithdrawalsList(): void;
  getWithdrawalsList(): Array<proto_vega_pb.Withdrawal>;
  setWithdrawalsList(value: Array<proto_vega_pb.Withdrawal>): void;
  addWithdrawals(value?: proto_vega_pb.Withdrawal, index?: number): proto_vega_pb.Withdrawal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalsResponse): WithdrawalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalsResponse;
  static deserializeBinaryFromReader(message: WithdrawalsResponse, reader: jspb.BinaryReader): WithdrawalsResponse;
}

export namespace WithdrawalsResponse {
  export type AsObject = {
    withdrawalsList: Array<proto_vega_pb.Withdrawal.AsObject>,
  }
}

export class WithdrawalRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalRequest): WithdrawalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalRequest;
  static deserializeBinaryFromReader(message: WithdrawalRequest, reader: jspb.BinaryReader): WithdrawalRequest;
}

export namespace WithdrawalRequest {
  export type AsObject = {
    id: string,
  }
}

export class WithdrawalResponse extends jspb.Message {
  hasWithdrawal(): boolean;
  clearWithdrawal(): void;
  getWithdrawal(): proto_vega_pb.Withdrawal | undefined;
  setWithdrawal(value?: proto_vega_pb.Withdrawal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalResponse): WithdrawalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalResponse;
  static deserializeBinaryFromReader(message: WithdrawalResponse, reader: jspb.BinaryReader): WithdrawalResponse;
}

export namespace WithdrawalResponse {
  export type AsObject = {
    withdrawal?: proto_vega_pb.Withdrawal.AsObject,
  }
}

export class ERC20WithdrawalApprovalRequest extends jspb.Message {
  getWithdrawalid(): string;
  setWithdrawalid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20WithdrawalApprovalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20WithdrawalApprovalRequest): ERC20WithdrawalApprovalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20WithdrawalApprovalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20WithdrawalApprovalRequest;
  static deserializeBinaryFromReader(message: ERC20WithdrawalApprovalRequest, reader: jspb.BinaryReader): ERC20WithdrawalApprovalRequest;
}

export namespace ERC20WithdrawalApprovalRequest {
  export type AsObject = {
    withdrawalid: string,
  }
}

export class ERC20WithdrawalApprovalResponse extends jspb.Message {
  getAssetsource(): string;
  setAssetsource(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  getNonce(): string;
  setNonce(value: string): void;

  getSignatures(): string;
  setSignatures(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20WithdrawalApprovalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20WithdrawalApprovalResponse): ERC20WithdrawalApprovalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20WithdrawalApprovalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20WithdrawalApprovalResponse;
  static deserializeBinaryFromReader(message: ERC20WithdrawalApprovalResponse, reader: jspb.BinaryReader): ERC20WithdrawalApprovalResponse;
}

export namespace ERC20WithdrawalApprovalResponse {
  export type AsObject = {
    assetsource: string,
    amount: string,
    expiry: number,
    nonce: string,
    signatures: string,
  }
}

export class DepositsRequest extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositsRequest): DepositsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositsRequest;
  static deserializeBinaryFromReader(message: DepositsRequest, reader: jspb.BinaryReader): DepositsRequest;
}

export namespace DepositsRequest {
  export type AsObject = {
    partyid: string,
  }
}

export class DepositsResponse extends jspb.Message {
  clearDepositsList(): void;
  getDepositsList(): Array<proto_vega_pb.Deposit>;
  setDepositsList(value: Array<proto_vega_pb.Deposit>): void;
  addDeposits(value?: proto_vega_pb.Deposit, index?: number): proto_vega_pb.Deposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepositsResponse): DepositsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositsResponse;
  static deserializeBinaryFromReader(message: DepositsResponse, reader: jspb.BinaryReader): DepositsResponse;
}

export namespace DepositsResponse {
  export type AsObject = {
    depositsList: Array<proto_vega_pb.Deposit.AsObject>,
  }
}

export class DepositRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositRequest): DepositRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositRequest;
  static deserializeBinaryFromReader(message: DepositRequest, reader: jspb.BinaryReader): DepositRequest;
}

export namespace DepositRequest {
  export type AsObject = {
    id: string,
  }
}

export class DepositResponse extends jspb.Message {
  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): proto_vega_pb.Deposit | undefined;
  setDeposit(value?: proto_vega_pb.Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepositResponse): DepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositResponse;
  static deserializeBinaryFromReader(message: DepositResponse, reader: jspb.BinaryReader): DepositResponse;
}

export namespace DepositResponse {
  export type AsObject = {
    deposit?: proto_vega_pb.Deposit.AsObject,
  }
}

export class NetworkParametersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkParametersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkParametersRequest): NetworkParametersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkParametersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkParametersRequest;
  static deserializeBinaryFromReader(message: NetworkParametersRequest, reader: jspb.BinaryReader): NetworkParametersRequest;
}

export namespace NetworkParametersRequest {
  export type AsObject = {
  }
}

export class NetworkParametersResponse extends jspb.Message {
  clearNetworkparametersList(): void;
  getNetworkparametersList(): Array<proto_vega_pb.NetworkParameter>;
  setNetworkparametersList(value: Array<proto_vega_pb.NetworkParameter>): void;
  addNetworkparameters(value?: proto_vega_pb.NetworkParameter, index?: number): proto_vega_pb.NetworkParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkParametersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkParametersResponse): NetworkParametersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkParametersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkParametersResponse;
  static deserializeBinaryFromReader(message: NetworkParametersResponse, reader: jspb.BinaryReader): NetworkParametersResponse;
}

export namespace NetworkParametersResponse {
  export type AsObject = {
    networkparametersList: Array<proto_vega_pb.NetworkParameter.AsObject>,
  }
}

export class LiquidityProvisionsRequest extends jspb.Message {
  getMarket(): string;
  setMarket(value: string): void;

  getParty(): string;
  setParty(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityProvisionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityProvisionsRequest): LiquidityProvisionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityProvisionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityProvisionsRequest;
  static deserializeBinaryFromReader(message: LiquidityProvisionsRequest, reader: jspb.BinaryReader): LiquidityProvisionsRequest;
}

export namespace LiquidityProvisionsRequest {
  export type AsObject = {
    market: string,
    party: string,
  }
}

export class LiquidityProvisionsResponse extends jspb.Message {
  clearLiquidityprovisionsList(): void;
  getLiquidityprovisionsList(): Array<proto_vega_pb.LiquidityProvision>;
  setLiquidityprovisionsList(value: Array<proto_vega_pb.LiquidityProvision>): void;
  addLiquidityprovisions(value?: proto_vega_pb.LiquidityProvision, index?: number): proto_vega_pb.LiquidityProvision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityProvisionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityProvisionsResponse): LiquidityProvisionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityProvisionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityProvisionsResponse;
  static deserializeBinaryFromReader(message: LiquidityProvisionsResponse, reader: jspb.BinaryReader): LiquidityProvisionsResponse;
}

export namespace LiquidityProvisionsResponse {
  export type AsObject = {
    liquidityprovisionsList: Array<proto_vega_pb.LiquidityProvision.AsObject>,
  }
}

