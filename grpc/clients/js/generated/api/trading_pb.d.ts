// package: api.v1
// file: api/trading.proto

import * as jspb from "google-protobuf";
import * as vega_pb from "../vega_pb";
import * as markets_pb from "../markets_pb";
import * as governance_pb from "../governance_pb";
import * as assets_pb from "../assets_pb";
import * as events_v1_events_pb from "../events/v1/events_pb";
import * as oracles_v1_spec_pb from "../oracles/v1/spec_pb";
import * as oracles_v1_data_pb from "../oracles/v1/data_pb";
import * as commands_v1_commands_pb from "../commands/v1/commands_pb";
import * as commands_v1_transaction_pb from "../commands/v1/transaction_pb";
import * as commands_v1_validator_commands_pb from "../commands/v1/validator_commands_pb";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../github.com/mwitkow/go-proto-validators/validator_pb";

export class PropagateChainEventRequest extends jspb.Message {
  hasEvt(): boolean;
  clearEvt(): void;
  getEvt(): commands_v1_validator_commands_pb.ChainEvent | undefined;
  setEvt(value?: commands_v1_validator_commands_pb.ChainEvent): void;

  getPubKey(): string;
  setPubKey(value: string): void;

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
    evt?: commands_v1_validator_commands_pb.ChainEvent.AsObject,
    pubKey: string,
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
  getTx(): vega_pb.SignedBundle | undefined;
  setTx(value?: vega_pb.SignedBundle): void;

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
    tx?: vega_pb.SignedBundle.AsObject,
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

export class SubmitTransactionV2Request extends jspb.Message {
  hasTx(): boolean;
  clearTx(): void;
  getTx(): commands_v1_transaction_pb.Transaction | undefined;
  setTx(value?: commands_v1_transaction_pb.Transaction): void;

  getType(): SubmitTransactionV2Request.TypeMap[keyof SubmitTransactionV2Request.TypeMap];
  setType(value: SubmitTransactionV2Request.TypeMap[keyof SubmitTransactionV2Request.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionV2Request.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionV2Request): SubmitTransactionV2Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTransactionV2Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionV2Request;
  static deserializeBinaryFromReader(message: SubmitTransactionV2Request, reader: jspb.BinaryReader): SubmitTransactionV2Request;
}

export namespace SubmitTransactionV2Request {
  export type AsObject = {
    tx?: commands_v1_transaction_pb.Transaction.AsObject,
    type: SubmitTransactionV2Request.TypeMap[keyof SubmitTransactionV2Request.TypeMap],
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_ASYNC: 1;
    TYPE_SYNC: 2;
    TYPE_COMMIT: 3;
  }

  export const Type: TypeMap;
}

export class SubmitTransactionV2Response extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionV2Response.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionV2Response): SubmitTransactionV2Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitTransactionV2Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionV2Response;
  static deserializeBinaryFromReader(message: SubmitTransactionV2Response, reader: jspb.BinaryReader): SubmitTransactionV2Response;
}

export namespace SubmitTransactionV2Response {
  export type AsObject = {
    success: boolean,
  }
}

export class PrepareWithdrawRequest extends jspb.Message {
  hasWithdraw(): boolean;
  clearWithdraw(): void;
  getWithdraw(): commands_v1_commands_pb.WithdrawSubmission | undefined;
  setWithdraw(value?: commands_v1_commands_pb.WithdrawSubmission): void;

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
    withdraw?: commands_v1_commands_pb.WithdrawSubmission.AsObject,
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

  getSubmitId(): string;
  setSubmitId(value: string): void;

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
    submitId: string,
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

export class PrepareSubmitOrderRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.OrderSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.OrderSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareSubmitOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareSubmitOrderRequest): PrepareSubmitOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareSubmitOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareSubmitOrderRequest;
  static deserializeBinaryFromReader(message: PrepareSubmitOrderRequest, reader: jspb.BinaryReader): PrepareSubmitOrderRequest;
}

export namespace PrepareSubmitOrderRequest {
  export type AsObject = {
    submission?: commands_v1_commands_pb.OrderSubmission.AsObject,
  }
}

export class PrepareCancelOrderRequest extends jspb.Message {
  hasCancellation(): boolean;
  clearCancellation(): void;
  getCancellation(): commands_v1_commands_pb.OrderCancellation | undefined;
  setCancellation(value?: commands_v1_commands_pb.OrderCancellation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareCancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareCancelOrderRequest): PrepareCancelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareCancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareCancelOrderRequest;
  static deserializeBinaryFromReader(message: PrepareCancelOrderRequest, reader: jspb.BinaryReader): PrepareCancelOrderRequest;
}

export namespace PrepareCancelOrderRequest {
  export type AsObject = {
    cancellation?: commands_v1_commands_pb.OrderCancellation.AsObject,
  }
}

export class PrepareAmendOrderRequest extends jspb.Message {
  hasAmendment(): boolean;
  clearAmendment(): void;
  getAmendment(): commands_v1_commands_pb.OrderAmendment | undefined;
  setAmendment(value?: commands_v1_commands_pb.OrderAmendment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareAmendOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareAmendOrderRequest): PrepareAmendOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareAmendOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareAmendOrderRequest;
  static deserializeBinaryFromReader(message: PrepareAmendOrderRequest, reader: jspb.BinaryReader): PrepareAmendOrderRequest;
}

export namespace PrepareAmendOrderRequest {
  export type AsObject = {
    amendment?: commands_v1_commands_pb.OrderAmendment.AsObject,
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
  getAssetsList(): Array<assets_pb.Asset>;
  setAssetsList(value: Array<assets_pb.Asset>): void;
  addAssets(value?: assets_pb.Asset, index?: number): assets_pb.Asset;

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
    assetsList: Array<assets_pb.Asset.AsObject>,
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
  getAsset(): assets_pb.Asset | undefined;
  setAsset(value?: assets_pb.Asset): void;

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
    asset?: assets_pb.Asset.AsObject,
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
  getSignaturesList(): Array<commands_v1_validator_commands_pb.NodeSignature>;
  setSignaturesList(value: Array<commands_v1_validator_commands_pb.NodeSignature>): void;
  addSignatures(value?: commands_v1_validator_commands_pb.NodeSignature, index?: number): commands_v1_validator_commands_pb.NodeSignature;

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
    signaturesList: Array<commands_v1_validator_commands_pb.NodeSignature.AsObject>,
  }
}

export class OptionalProposalState extends jspb.Message {
  getValue(): governance_pb.Proposal.StateMap[keyof governance_pb.Proposal.StateMap];
  setValue(value: governance_pb.Proposal.StateMap[keyof governance_pb.Proposal.StateMap]): void;

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
    value: governance_pb.Proposal.StateMap[keyof governance_pb.Proposal.StateMap],
  }
}

export class GetProposalsRequest extends jspb.Message {
  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetProposalsByPartyRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    partyId: string,
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetProposalsByPartyResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetVotesByPartyRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class GetVotesByPartyResponse extends jspb.Message {
  clearVotesList(): void;
  getVotesList(): Array<governance_pb.Vote>;
  setVotesList(value: Array<governance_pb.Vote>): void;
  addVotes(value?: governance_pb.Vote, index?: number): governance_pb.Vote;

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
    votesList: Array<governance_pb.Vote.AsObject>,
  }
}

export class GetNewMarketProposalsRequest extends jspb.Message {
  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetNewMarketProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetUpdateMarketProposalsRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    marketId: string,
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetUpdateMarketProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetNetworkParametersProposalsRequest extends jspb.Message {
  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetNetworkParametersProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetNewAssetProposalsRequest extends jspb.Message {
  hasSelectInState(): boolean;
  clearSelectInState(): void;
  getSelectInState(): OptionalProposalState | undefined;
  setSelectInState(value?: OptionalProposalState): void;

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
    selectInState?: OptionalProposalState.AsObject,
  }
}

export class GetNewAssetProposalsResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<governance_pb.GovernanceData>;
  setDataList(value: Array<governance_pb.GovernanceData>): void;
  addData(value?: governance_pb.GovernanceData, index?: number): governance_pb.GovernanceData;

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
    dataList: Array<governance_pb.GovernanceData.AsObject>,
  }
}

export class GetProposalByIDRequest extends jspb.Message {
  getProposalId(): string;
  setProposalId(value: string): void;

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
    proposalId: string,
  }
}

export class GetProposalByIDResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): governance_pb.GovernanceData | undefined;
  setData(value?: governance_pb.GovernanceData): void;

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
    data?: governance_pb.GovernanceData.AsObject,
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
  getData(): governance_pb.GovernanceData | undefined;
  setData(value?: governance_pb.GovernanceData): void;

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
    data?: governance_pb.GovernanceData.AsObject,
  }
}

export class ObserveGovernanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveGovernanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveGovernanceRequest): ObserveGovernanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveGovernanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveGovernanceRequest;
  static deserializeBinaryFromReader(message: ObserveGovernanceRequest, reader: jspb.BinaryReader): ObserveGovernanceRequest;
}

export namespace ObserveGovernanceRequest {
  export type AsObject = {
  }
}

export class ObserveGovernanceResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): governance_pb.GovernanceData | undefined;
  setData(value?: governance_pb.GovernanceData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveGovernanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveGovernanceResponse): ObserveGovernanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveGovernanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveGovernanceResponse;
  static deserializeBinaryFromReader(message: ObserveGovernanceResponse, reader: jspb.BinaryReader): ObserveGovernanceResponse;
}

export namespace ObserveGovernanceResponse {
  export type AsObject = {
    data?: governance_pb.GovernanceData.AsObject,
  }
}

export class ObservePartyProposalsRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class ObservePartyProposalsResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): governance_pb.GovernanceData | undefined;
  setData(value?: governance_pb.GovernanceData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservePartyProposalsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObservePartyProposalsResponse): ObservePartyProposalsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservePartyProposalsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservePartyProposalsResponse;
  static deserializeBinaryFromReader(message: ObservePartyProposalsResponse, reader: jspb.BinaryReader): ObservePartyProposalsResponse;
}

export namespace ObservePartyProposalsResponse {
  export type AsObject = {
    data?: governance_pb.GovernanceData.AsObject,
  }
}

export class ObserveProposalVotesRequest extends jspb.Message {
  getProposalId(): string;
  setProposalId(value: string): void;

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
    proposalId: string,
  }
}

export class ObserveProposalVotesResponse extends jspb.Message {
  hasVote(): boolean;
  clearVote(): void;
  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveProposalVotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveProposalVotesResponse): ObserveProposalVotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveProposalVotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveProposalVotesResponse;
  static deserializeBinaryFromReader(message: ObserveProposalVotesResponse, reader: jspb.BinaryReader): ObserveProposalVotesResponse;
}

export namespace ObserveProposalVotesResponse {
  export type AsObject = {
    vote?: governance_pb.Vote.AsObject,
  }
}

export class ObservePartyVotesRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class ObservePartyVotesResponse extends jspb.Message {
  hasVote(): boolean;
  clearVote(): void;
  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservePartyVotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObservePartyVotesResponse): ObservePartyVotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservePartyVotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservePartyVotesResponse;
  static deserializeBinaryFromReader(message: ObservePartyVotesResponse, reader: jspb.BinaryReader): ObservePartyVotesResponse;
}

export namespace ObservePartyVotesResponse {
  export type AsObject = {
    vote?: governance_pb.Vote.AsObject,
  }
}

export class MarginLevelsSubscribeRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    partyId: string,
    marketId: string,
  }
}

export class MarginLevelsSubscribeResponse extends jspb.Message {
  hasMarginLevels(): boolean;
  clearMarginLevels(): void;
  getMarginLevels(): vega_pb.MarginLevels | undefined;
  setMarginLevels(value?: vega_pb.MarginLevels): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginLevelsSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarginLevelsSubscribeResponse): MarginLevelsSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginLevelsSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginLevelsSubscribeResponse;
  static deserializeBinaryFromReader(message: MarginLevelsSubscribeResponse, reader: jspb.BinaryReader): MarginLevelsSubscribeResponse;
}

export namespace MarginLevelsSubscribeResponse {
  export type AsObject = {
    marginLevels?: vega_pb.MarginLevels.AsObject,
  }
}

export class MarginLevelsRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    partyId: string,
    marketId: string,
  }
}

export class MarginLevelsResponse extends jspb.Message {
  clearMarginLevelsList(): void;
  getMarginLevelsList(): Array<vega_pb.MarginLevels>;
  setMarginLevelsList(value: Array<vega_pb.MarginLevels>): void;
  addMarginLevels(value?: vega_pb.MarginLevels, index?: number): vega_pb.MarginLevels;

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
    marginLevelsList: Array<vega_pb.MarginLevels.AsObject>,
  }
}

export class MarketsDataSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class MarketsDataSubscribeResponse extends jspb.Message {
  hasMarketData(): boolean;
  clearMarketData(): void;
  getMarketData(): vega_pb.MarketData | undefined;
  setMarketData(value?: vega_pb.MarketData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsDataSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsDataSubscribeResponse): MarketsDataSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsDataSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsDataSubscribeResponse;
  static deserializeBinaryFromReader(message: MarketsDataSubscribeResponse, reader: jspb.BinaryReader): MarketsDataSubscribeResponse;
}

export namespace MarketsDataSubscribeResponse {
  export type AsObject = {
    marketData?: vega_pb.MarketData.AsObject,
  }
}

export class MarketDataByIDRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class MarketDataByIDResponse extends jspb.Message {
  hasMarketData(): boolean;
  clearMarketData(): void;
  getMarketData(): vega_pb.MarketData | undefined;
  setMarketData(value?: vega_pb.MarketData): void;

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
    marketData?: vega_pb.MarketData.AsObject,
  }
}

export class MarketsDataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsDataRequest): MarketsDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsDataRequest;
  static deserializeBinaryFromReader(message: MarketsDataRequest, reader: jspb.BinaryReader): MarketsDataRequest;
}

export namespace MarketsDataRequest {
  export type AsObject = {
  }
}

export class MarketsDataResponse extends jspb.Message {
  clearMarketsDataList(): void;
  getMarketsDataList(): Array<vega_pb.MarketData>;
  setMarketsDataList(value: Array<vega_pb.MarketData>): void;
  addMarketsData(value?: vega_pb.MarketData, index?: number): vega_pb.MarketData;

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
    marketsDataList: Array<vega_pb.MarketData.AsObject>,
  }
}

export class LastTradeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class LastTradeResponse extends jspb.Message {
  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): vega_pb.Trade | undefined;
  setTrade(value?: vega_pb.Trade): void;

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
    trade?: vega_pb.Trade.AsObject,
  }
}

export class MarketByIDRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class MarketByIDResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): markets_pb.Market | undefined;
  setMarket(value?: markets_pb.Market): void;

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
    market?: markets_pb.Market.AsObject,
  }
}

export class PartyByIDRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class PartyByIDResponse extends jspb.Message {
  hasParty(): boolean;
  clearParty(): void;
  getParty(): vega_pb.Party | undefined;
  setParty(value?: vega_pb.Party): void;

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
    party?: vega_pb.Party.AsObject,
  }
}

export class PartiesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartiesRequest): PartiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartiesRequest;
  static deserializeBinaryFromReader(message: PartiesRequest, reader: jspb.BinaryReader): PartiesRequest;
}

export namespace PartiesRequest {
  export type AsObject = {
  }
}

export class PartiesResponse extends jspb.Message {
  clearPartiesList(): void;
  getPartiesList(): Array<vega_pb.Party>;
  setPartiesList(value: Array<vega_pb.Party>): void;
  addParties(value?: vega_pb.Party, index?: number): vega_pb.Party;

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
    partiesList: Array<vega_pb.Party.AsObject>,
  }
}

export class TradesByPartyRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    partyId: string,
    marketId: string,
    pagination?: Pagination.AsObject,
  }
}

export class TradesByPartyResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<vega_pb.Trade>;
  setTradesList(value: Array<vega_pb.Trade>): void;
  addTrades(value?: vega_pb.Trade, index?: number): vega_pb.Trade;

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
    tradesList: Array<vega_pb.Trade.AsObject>,
  }
}

export class TradesByOrderRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

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
    orderId: string,
  }
}

export class TradesByOrderResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<vega_pb.Trade>;
  setTradesList(value: Array<vega_pb.Trade>): void;
  addTrades(value?: vega_pb.Trade, index?: number): vega_pb.Trade;

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
    tradesList: Array<vega_pb.Trade.AsObject>,
  }
}

export class AccountsSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  getType(): vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap];
  setType(value: vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap]): void;

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
    marketId: string,
    partyId: string,
    asset: string,
    type: vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap],
  }
}

export class AccountsSubscribeResponse extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): vega_pb.Account | undefined;
  setAccount(value?: vega_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsSubscribeResponse): AccountsSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountsSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsSubscribeResponse;
  static deserializeBinaryFromReader(message: AccountsSubscribeResponse, reader: jspb.BinaryReader): AccountsSubscribeResponse;
}

export namespace AccountsSubscribeResponse {
  export type AsObject = {
    account?: vega_pb.Account.AsObject,
  }
}

export class OrdersSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

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
    marketId: string,
    partyId: string,
  }
}

export class TradesSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

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
    marketId: string,
    partyId: string,
  }
}

export class CandlesSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getInterval(): vega_pb.IntervalMap[keyof vega_pb.IntervalMap];
  setInterval(value: vega_pb.IntervalMap[keyof vega_pb.IntervalMap]): void;

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
    marketId: string,
    interval: vega_pb.IntervalMap[keyof vega_pb.IntervalMap],
  }
}

export class CandlesSubscribeResponse extends jspb.Message {
  hasCandle(): boolean;
  clearCandle(): void;
  getCandle(): vega_pb.Candle | undefined;
  setCandle(value?: vega_pb.Candle): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandlesSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CandlesSubscribeResponse): CandlesSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandlesSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandlesSubscribeResponse;
  static deserializeBinaryFromReader(message: CandlesSubscribeResponse, reader: jspb.BinaryReader): CandlesSubscribeResponse;
}

export namespace CandlesSubscribeResponse {
  export type AsObject = {
    candle?: vega_pb.Candle.AsObject,
  }
}

export class MarketDepthSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class MarketDepthSubscribeResponse extends jspb.Message {
  hasMarketDepth(): boolean;
  clearMarketDepth(): void;
  getMarketDepth(): vega_pb.MarketDepth | undefined;
  setMarketDepth(value?: vega_pb.MarketDepth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthSubscribeResponse): MarketDepthSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthSubscribeResponse;
  static deserializeBinaryFromReader(message: MarketDepthSubscribeResponse, reader: jspb.BinaryReader): MarketDepthSubscribeResponse;
}

export namespace MarketDepthSubscribeResponse {
  export type AsObject = {
    marketDepth?: vega_pb.MarketDepth.AsObject,
  }
}

export class MarketDepthUpdatesSubscribeRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
  }
}

export class MarketDepthUpdatesSubscribeResponse extends jspb.Message {
  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): vega_pb.MarketDepthUpdate | undefined;
  setUpdate(value?: vega_pb.MarketDepthUpdate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDepthUpdatesSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDepthUpdatesSubscribeResponse): MarketDepthUpdatesSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDepthUpdatesSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDepthUpdatesSubscribeResponse;
  static deserializeBinaryFromReader(message: MarketDepthUpdatesSubscribeResponse, reader: jspb.BinaryReader): MarketDepthUpdatesSubscribeResponse;
}

export namespace MarketDepthUpdatesSubscribeResponse {
  export type AsObject = {
    update?: vega_pb.MarketDepthUpdate.AsObject,
  }
}

export class PositionsSubscribeRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    partyId: string,
    marketId: string,
  }
}

export class PositionsSubscribeResponse extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): vega_pb.Position | undefined;
  setPosition(value?: vega_pb.Position): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSubscribeResponse): PositionsSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSubscribeResponse;
  static deserializeBinaryFromReader(message: PositionsSubscribeResponse, reader: jspb.BinaryReader): PositionsSubscribeResponse;
}

export namespace PositionsSubscribeResponse {
  export type AsObject = {
    position?: vega_pb.Position.AsObject,
  }
}

export class OrdersByMarketRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrdersByMarketResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<vega_pb.Order>;
  setOrdersList(value: Array<vega_pb.Order>): void;
  addOrders(value?: vega_pb.Order, index?: number): vega_pb.Order;

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
    ordersList: Array<vega_pb.Order.AsObject>,
  }
}

export class OrdersByPartyRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrdersByPartyResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<vega_pb.Order>;
  setOrdersList(value: Array<vega_pb.Order>): void;
  addOrders(value?: vega_pb.Order, index?: number): vega_pb.Order;

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
    ordersList: Array<vega_pb.Order.AsObject>,
  }
}

export class OrderByMarketAndIDRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByMarketAndIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByMarketAndIDRequest): OrderByMarketAndIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByMarketAndIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIDRequest;
  static deserializeBinaryFromReader(message: OrderByMarketAndIDRequest, reader: jspb.BinaryReader): OrderByMarketAndIDRequest;
}

export namespace OrderByMarketAndIDRequest {
  export type AsObject = {
    marketId: string,
    orderId: string,
  }
}

export class OrderByMarketAndIDResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByMarketAndIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByMarketAndIDResponse): OrderByMarketAndIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByMarketAndIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByMarketAndIDResponse;
  static deserializeBinaryFromReader(message: OrderByMarketAndIDResponse, reader: jspb.BinaryReader): OrderByMarketAndIDResponse;
}

export namespace OrderByMarketAndIDResponse {
  export type AsObject = {
    order?: vega_pb.Order.AsObject,
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
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

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
    order?: vega_pb.Order.AsObject,
  }
}

export class MarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsRequest;
  static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
  export type AsObject = {
  }
}

export class MarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<markets_pb.Market>;
  setMarketsList(value: Array<markets_pb.Market>): void;
  addMarkets(value?: markets_pb.Market, index?: number): markets_pb.Market;

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
    marketsList: Array<markets_pb.Market.AsObject>,
  }
}

export class CandlesRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSinceTimestamp(): number;
  setSinceTimestamp(value: number): void;

  getInterval(): vega_pb.IntervalMap[keyof vega_pb.IntervalMap];
  setInterval(value: vega_pb.IntervalMap[keyof vega_pb.IntervalMap]): void;

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
    marketId: string,
    sinceTimestamp: number,
    interval: vega_pb.IntervalMap[keyof vega_pb.IntervalMap],
  }
}

export class CandlesResponse extends jspb.Message {
  clearCandlesList(): void;
  getCandlesList(): Array<vega_pb.Candle>;
  setCandlesList(value: Array<vega_pb.Candle>): void;
  addCandles(value?: vega_pb.Candle, index?: number): vega_pb.Candle;

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
    candlesList: Array<vega_pb.Candle.AsObject>,
  }
}

export class MarketDepthRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getMaxDepth(): number;
  setMaxDepth(value: number): void;

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
    marketId: string,
    maxDepth: number,
  }
}

export class MarketDepthResponse extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearBuyList(): void;
  getBuyList(): Array<vega_pb.PriceLevel>;
  setBuyList(value: Array<vega_pb.PriceLevel>): void;
  addBuy(value?: vega_pb.PriceLevel, index?: number): vega_pb.PriceLevel;

  clearSellList(): void;
  getSellList(): Array<vega_pb.PriceLevel>;
  setSellList(value: Array<vega_pb.PriceLevel>): void;
  addSell(value?: vega_pb.PriceLevel, index?: number): vega_pb.PriceLevel;

  hasLastTrade(): boolean;
  clearLastTrade(): void;
  getLastTrade(): vega_pb.Trade | undefined;
  setLastTrade(value?: vega_pb.Trade): void;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): void;

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
    marketId: string,
    buyList: Array<vega_pb.PriceLevel.AsObject>,
    sellList: Array<vega_pb.PriceLevel.AsObject>,
    lastTrade?: vega_pb.Trade.AsObject,
    sequenceNumber: number,
  }
}

export class TradesByMarketRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
    pagination?: Pagination.AsObject,
  }
}

export class TradesByMarketResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<vega_pb.Trade>;
  setTradesList(value: Array<vega_pb.Trade>): void;
  addTrades(value?: vega_pb.Trade, index?: number): vega_pb.Trade;

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
    tradesList: Array<vega_pb.Trade.AsObject>,
  }
}

export class PositionsByPartyRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

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
    partyId: string,
    marketId: string,
  }
}

export class PositionsByPartyResponse extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<vega_pb.Position>;
  setPositionsList(value: Array<vega_pb.Position>): void;
  addPositions(value?: vega_pb.Position, index?: number): vega_pb.Position;

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
    positionsList: Array<vega_pb.Position.AsObject>,
  }
}

export class GetVegaTimeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVegaTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVegaTimeRequest): GetVegaTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVegaTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVegaTimeRequest;
  static deserializeBinaryFromReader(message: GetVegaTimeRequest, reader: jspb.BinaryReader): GetVegaTimeRequest;
}

export namespace GetVegaTimeRequest {
  export type AsObject = {
  }
}

export class GetVegaTimeResponse extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVegaTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVegaTimeResponse): GetVegaTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVegaTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVegaTimeResponse;
  static deserializeBinaryFromReader(message: GetVegaTimeResponse, reader: jspb.BinaryReader): GetVegaTimeResponse;
}

export namespace GetVegaTimeResponse {
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

export class OrdersSubscribeResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<vega_pb.Order>;
  setOrdersList(value: Array<vega_pb.Order>): void;
  addOrders(value?: vega_pb.Order, index?: number): vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersSubscribeResponse): OrdersSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersSubscribeResponse;
  static deserializeBinaryFromReader(message: OrdersSubscribeResponse, reader: jspb.BinaryReader): OrdersSubscribeResponse;
}

export namespace OrdersSubscribeResponse {
  export type AsObject = {
    ordersList: Array<vega_pb.Order.AsObject>,
  }
}

export class TradesSubscribeResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<vega_pb.Trade>;
  setTradesList(value: Array<vega_pb.Trade>): void;
  addTrades(value?: vega_pb.Trade, index?: number): vega_pb.Trade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesSubscribeResponse): TradesSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesSubscribeResponse;
  static deserializeBinaryFromReader(message: TradesSubscribeResponse, reader: jspb.BinaryReader): TradesSubscribeResponse;
}

export namespace TradesSubscribeResponse {
  export type AsObject = {
    tradesList: Array<vega_pb.Trade.AsObject>,
  }
}

export class TransferResponsesSubscribeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponsesSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponsesSubscribeRequest): TransferResponsesSubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponsesSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponsesSubscribeRequest;
  static deserializeBinaryFromReader(message: TransferResponsesSubscribeRequest, reader: jspb.BinaryReader): TransferResponsesSubscribeRequest;
}

export namespace TransferResponsesSubscribeRequest {
  export type AsObject = {
  }
}

export class TransferResponsesSubscribeResponse extends jspb.Message {
  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): vega_pb.TransferResponse | undefined;
  setResponse(value?: vega_pb.TransferResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponsesSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponsesSubscribeResponse): TransferResponsesSubscribeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponsesSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponsesSubscribeResponse;
  static deserializeBinaryFromReader(message: TransferResponsesSubscribeResponse, reader: jspb.BinaryReader): TransferResponsesSubscribeResponse;
}

export namespace TransferResponsesSubscribeResponse {
  export type AsObject = {
    response?: vega_pb.TransferResponse.AsObject,
  }
}

export class PartyAccountsRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getType(): vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap];
  setType(value: vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap]): void;

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
    partyId: string,
    marketId: string,
    type: vega_pb.AccountTypeMap[keyof vega_pb.AccountTypeMap],
    asset: string,
  }
}

export class PartyAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<vega_pb.Account>;
  setAccountsList(value: Array<vega_pb.Account>): void;
  addAccounts(value?: vega_pb.Account, index?: number): vega_pb.Account;

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
    accountsList: Array<vega_pb.Account.AsObject>,
  }
}

export class MarketAccountsRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
    asset: string,
  }
}

export class MarketAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<vega_pb.Account>;
  setAccountsList(value: Array<vega_pb.Account>): void;
  addAccounts(value?: vega_pb.Account, index?: number): vega_pb.Account;

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
    accountsList: Array<vega_pb.Account.AsObject>,
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
  getAccountsList(): Array<vega_pb.Account>;
  setAccountsList(value: Array<vega_pb.Account>): void;
  addAccounts(value?: vega_pb.Account, index?: number): vega_pb.Account;

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
    accountsList: Array<vega_pb.Account.AsObject>,
  }
}

export class PrepareProposalSubmissionRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.ProposalSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.ProposalSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareProposalSubmissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareProposalSubmissionRequest): PrepareProposalSubmissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareProposalSubmissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareProposalSubmissionRequest;
  static deserializeBinaryFromReader(message: PrepareProposalSubmissionRequest, reader: jspb.BinaryReader): PrepareProposalSubmissionRequest;
}

export namespace PrepareProposalSubmissionRequest {
  export type AsObject = {
    submission?: commands_v1_commands_pb.ProposalSubmission.AsObject,
  }
}

export class PrepareProposalSubmissionResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.ProposalSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.ProposalSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareProposalSubmissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareProposalSubmissionResponse): PrepareProposalSubmissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareProposalSubmissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareProposalSubmissionResponse;
  static deserializeBinaryFromReader(message: PrepareProposalSubmissionResponse, reader: jspb.BinaryReader): PrepareProposalSubmissionResponse;
}

export namespace PrepareProposalSubmissionResponse {
  export type AsObject = {
    blob: Uint8Array | string,
    submission?: commands_v1_commands_pb.ProposalSubmission.AsObject,
  }
}

export class PrepareVoteSubmissionRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.VoteSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.VoteSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareVoteSubmissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareVoteSubmissionRequest): PrepareVoteSubmissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareVoteSubmissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareVoteSubmissionRequest;
  static deserializeBinaryFromReader(message: PrepareVoteSubmissionRequest, reader: jspb.BinaryReader): PrepareVoteSubmissionRequest;
}

export namespace PrepareVoteSubmissionRequest {
  export type AsObject = {
    submission?: commands_v1_commands_pb.VoteSubmission.AsObject,
  }
}

export class PrepareVoteSubmissionResponse extends jspb.Message {
  getBlob(): Uint8Array | string;
  getBlob_asU8(): Uint8Array;
  getBlob_asB64(): string;
  setBlob(value: Uint8Array | string): void;

  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.VoteSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.VoteSubmission): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareVoteSubmissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareVoteSubmissionResponse): PrepareVoteSubmissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareVoteSubmissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareVoteSubmissionResponse;
  static deserializeBinaryFromReader(message: PrepareVoteSubmissionResponse, reader: jspb.BinaryReader): PrepareVoteSubmissionResponse;
}

export namespace PrepareVoteSubmissionResponse {
  export type AsObject = {
    blob: Uint8Array | string,
    submission?: commands_v1_commands_pb.VoteSubmission.AsObject,
  }
}

export class PrepareLiquidityProvisionRequest extends jspb.Message {
  hasSubmission(): boolean;
  clearSubmission(): void;
  getSubmission(): commands_v1_commands_pb.LiquidityProvisionSubmission | undefined;
  setSubmission(value?: commands_v1_commands_pb.LiquidityProvisionSubmission): void;

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
    submission?: commands_v1_commands_pb.LiquidityProvisionSubmission.AsObject,
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
  getOrderId(): string;
  setOrderId(value: string): void;

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
    orderId: string,
    version: number,
  }
}

export class OrderByIDResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByIDResponse): OrderByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByIDResponse;
  static deserializeBinaryFromReader(message: OrderByIDResponse, reader: jspb.BinaryReader): OrderByIDResponse;
}

export namespace OrderByIDResponse {
  export type AsObject = {
    order?: vega_pb.Order.AsObject,
  }
}

export class OrderVersionsByIDRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

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
    orderId: string,
    pagination?: Pagination.AsObject,
  }
}

export class OrderVersionsByIDResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<vega_pb.Order>;
  setOrdersList(value: Array<vega_pb.Order>): void;
  addOrders(value?: vega_pb.Order, index?: number): vega_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderVersionsByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderVersionsByIDResponse): OrderVersionsByIDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderVersionsByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderVersionsByIDResponse;
  static deserializeBinaryFromReader(message: OrderVersionsByIDResponse, reader: jspb.BinaryReader): OrderVersionsByIDResponse;
}

export namespace OrderVersionsByIDResponse {
  export type AsObject = {
    ordersList: Array<vega_pb.Order.AsObject>,
  }
}

export class EstimateFeeRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

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
    order?: vega_pb.Order.AsObject,
  }
}

export class EstimateFeeResponse extends jspb.Message {
  hasFee(): boolean;
  clearFee(): void;
  getFee(): vega_pb.Fee | undefined;
  setFee(value?: vega_pb.Fee): void;

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
    fee?: vega_pb.Fee.AsObject,
  }
}

export class EstimateMarginRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): vega_pb.Order | undefined;
  setOrder(value?: vega_pb.Order): void;

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
    order?: vega_pb.Order.AsObject,
  }
}

export class EstimateMarginResponse extends jspb.Message {
  hasMarginLevels(): boolean;
  clearMarginLevels(): void;
  getMarginLevels(): vega_pb.MarginLevels | undefined;
  setMarginLevels(value?: vega_pb.MarginLevels): void;

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
    marginLevels?: vega_pb.MarginLevels.AsObject,
  }
}

export class ObserveEventBusRequest extends jspb.Message {
  clearTypeList(): void;
  getTypeList(): Array<events_v1_events_pb.BusEventTypeMap[keyof events_v1_events_pb.BusEventTypeMap]>;
  setTypeList(value: Array<events_v1_events_pb.BusEventTypeMap[keyof events_v1_events_pb.BusEventTypeMap]>): void;
  addType(value: events_v1_events_pb.BusEventTypeMap[keyof events_v1_events_pb.BusEventTypeMap], index?: number): events_v1_events_pb.BusEventTypeMap[keyof events_v1_events_pb.BusEventTypeMap];

  getMarketId(): string;
  setMarketId(value: string): void;

  getPartyId(): string;
  setPartyId(value: string): void;

  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveEventBusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveEventBusRequest): ObserveEventBusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveEventBusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveEventBusRequest;
  static deserializeBinaryFromReader(message: ObserveEventBusRequest, reader: jspb.BinaryReader): ObserveEventBusRequest;
}

export namespace ObserveEventBusRequest {
  export type AsObject = {
    typeList: Array<events_v1_events_pb.BusEventTypeMap[keyof events_v1_events_pb.BusEventTypeMap]>,
    marketId: string,
    partyId: string,
    batchSize: number,
  }
}

export class ObserveEventBusResponse extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<events_v1_events_pb.BusEvent>;
  setEventsList(value: Array<events_v1_events_pb.BusEvent>): void;
  addEvents(value?: events_v1_events_pb.BusEvent, index?: number): events_v1_events_pb.BusEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveEventBusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveEventBusResponse): ObserveEventBusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveEventBusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveEventBusResponse;
  static deserializeBinaryFromReader(message: ObserveEventBusResponse, reader: jspb.BinaryReader): ObserveEventBusResponse;
}

export namespace ObserveEventBusResponse {
  export type AsObject = {
    eventsList: Array<events_v1_events_pb.BusEvent.AsObject>,
  }
}

export class StatisticsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsRequest): StatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsRequest;
  static deserializeBinaryFromReader(message: StatisticsRequest, reader: jspb.BinaryReader): StatisticsRequest;
}

export namespace StatisticsRequest {
  export type AsObject = {
  }
}

export class StatisticsResponse extends jspb.Message {
  hasStatistics(): boolean;
  clearStatistics(): void;
  getStatistics(): vega_pb.Statistics | undefined;
  setStatistics(value?: vega_pb.Statistics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsResponse): StatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsResponse;
  static deserializeBinaryFromReader(message: StatisticsResponse, reader: jspb.BinaryReader): StatisticsResponse;
}

export namespace StatisticsResponse {
  export type AsObject = {
    statistics?: vega_pb.Statistics.AsObject,
  }
}

export class WithdrawalsRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class WithdrawalsResponse extends jspb.Message {
  clearWithdrawalsList(): void;
  getWithdrawalsList(): Array<vega_pb.Withdrawal>;
  setWithdrawalsList(value: Array<vega_pb.Withdrawal>): void;
  addWithdrawals(value?: vega_pb.Withdrawal, index?: number): vega_pb.Withdrawal;

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
    withdrawalsList: Array<vega_pb.Withdrawal.AsObject>,
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
  getWithdrawal(): vega_pb.Withdrawal | undefined;
  setWithdrawal(value?: vega_pb.Withdrawal): void;

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
    withdrawal?: vega_pb.Withdrawal.AsObject,
  }
}

export class ERC20WithdrawalApprovalRequest extends jspb.Message {
  getWithdrawalId(): string;
  setWithdrawalId(value: string): void;

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
    withdrawalId: string,
  }
}

export class ERC20WithdrawalApprovalResponse extends jspb.Message {
  getAssetSource(): string;
  setAssetSource(value: string): void;

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
    assetSource: string,
    amount: string,
    expiry: number,
    nonce: string,
    signatures: string,
  }
}

export class DepositsRequest extends jspb.Message {
  getPartyId(): string;
  setPartyId(value: string): void;

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
    partyId: string,
  }
}

export class DepositsResponse extends jspb.Message {
  clearDepositsList(): void;
  getDepositsList(): Array<vega_pb.Deposit>;
  setDepositsList(value: Array<vega_pb.Deposit>): void;
  addDeposits(value?: vega_pb.Deposit, index?: number): vega_pb.Deposit;

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
    depositsList: Array<vega_pb.Deposit.AsObject>,
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
  getDeposit(): vega_pb.Deposit | undefined;
  setDeposit(value?: vega_pb.Deposit): void;

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
    deposit?: vega_pb.Deposit.AsObject,
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
  clearNetworkParametersList(): void;
  getNetworkParametersList(): Array<vega_pb.NetworkParameter>;
  setNetworkParametersList(value: Array<vega_pb.NetworkParameter>): void;
  addNetworkParameters(value?: vega_pb.NetworkParameter, index?: number): vega_pb.NetworkParameter;

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
    networkParametersList: Array<vega_pb.NetworkParameter.AsObject>,
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
  clearLiquidityProvisionsList(): void;
  getLiquidityProvisionsList(): Array<vega_pb.LiquidityProvision>;
  setLiquidityProvisionsList(value: Array<vega_pb.LiquidityProvision>): void;
  addLiquidityProvisions(value?: vega_pb.LiquidityProvision, index?: number): vega_pb.LiquidityProvision;

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
    liquidityProvisionsList: Array<vega_pb.LiquidityProvision.AsObject>,
  }
}

export class OracleSpecRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpecRequest): OracleSpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpecRequest;
  static deserializeBinaryFromReader(message: OracleSpecRequest, reader: jspb.BinaryReader): OracleSpecRequest;
}

export namespace OracleSpecRequest {
  export type AsObject = {
    id: string,
  }
}

export class OracleSpecResponse extends jspb.Message {
  hasOracleSpec(): boolean;
  clearOracleSpec(): void;
  getOracleSpec(): oracles_v1_spec_pb.OracleSpec | undefined;
  setOracleSpec(value?: oracles_v1_spec_pb.OracleSpec): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpecResponse): OracleSpecResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpecResponse;
  static deserializeBinaryFromReader(message: OracleSpecResponse, reader: jspb.BinaryReader): OracleSpecResponse;
}

export namespace OracleSpecResponse {
  export type AsObject = {
    oracleSpec?: oracles_v1_spec_pb.OracleSpec.AsObject,
  }
}

export class OracleSpecsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpecsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpecsRequest): OracleSpecsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpecsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpecsRequest;
  static deserializeBinaryFromReader(message: OracleSpecsRequest, reader: jspb.BinaryReader): OracleSpecsRequest;
}

export namespace OracleSpecsRequest {
  export type AsObject = {
  }
}

export class OracleSpecsResponse extends jspb.Message {
  clearOracleSpecsList(): void;
  getOracleSpecsList(): Array<oracles_v1_spec_pb.OracleSpec>;
  setOracleSpecsList(value: Array<oracles_v1_spec_pb.OracleSpec>): void;
  addOracleSpecs(value?: oracles_v1_spec_pb.OracleSpec, index?: number): oracles_v1_spec_pb.OracleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpecsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpecsResponse): OracleSpecsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpecsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpecsResponse;
  static deserializeBinaryFromReader(message: OracleSpecsResponse, reader: jspb.BinaryReader): OracleSpecsResponse;
}

export namespace OracleSpecsResponse {
  export type AsObject = {
    oracleSpecsList: Array<oracles_v1_spec_pb.OracleSpec.AsObject>,
  }
}

export class OracleDataBySpecRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleDataBySpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OracleDataBySpecRequest): OracleDataBySpecRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleDataBySpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleDataBySpecRequest;
  static deserializeBinaryFromReader(message: OracleDataBySpecRequest, reader: jspb.BinaryReader): OracleDataBySpecRequest;
}

export namespace OracleDataBySpecRequest {
  export type AsObject = {
    id: string,
  }
}

export class OracleDataBySpecResponse extends jspb.Message {
  clearOracleDataList(): void;
  getOracleDataList(): Array<oracles_v1_data_pb.OracleData>;
  setOracleDataList(value: Array<oracles_v1_data_pb.OracleData>): void;
  addOracleData(value?: oracles_v1_data_pb.OracleData, index?: number): oracles_v1_data_pb.OracleData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleDataBySpecResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OracleDataBySpecResponse): OracleDataBySpecResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleDataBySpecResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleDataBySpecResponse;
  static deserializeBinaryFromReader(message: OracleDataBySpecResponse, reader: jspb.BinaryReader): OracleDataBySpecResponse;
}

export namespace OracleDataBySpecResponse {
  export type AsObject = {
    oracleDataList: Array<oracles_v1_data_pb.OracleData.AsObject>,
  }
}

