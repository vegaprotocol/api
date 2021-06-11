// package: vega.commands.v1
// file: commands/v1/transaction.proto

import * as jspb from "google-protobuf";
import * as commands_v1_commands_pb from "../../commands/v1/commands_pb";
import * as commands_v1_validator_commands_pb from "../../commands/v1/validator_commands_pb";
import * as commands_v1_oracles_pb from "../../commands/v1/oracles_pb";

export class InputData extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  hasOrderSubmission(): boolean;
  clearOrderSubmission(): void;
  getOrderSubmission(): commands_v1_commands_pb.OrderSubmission | undefined;
  setOrderSubmission(value?: commands_v1_commands_pb.OrderSubmission): void;

  hasOrderCancellation(): boolean;
  clearOrderCancellation(): void;
  getOrderCancellation(): commands_v1_commands_pb.OrderCancellation | undefined;
  setOrderCancellation(value?: commands_v1_commands_pb.OrderCancellation): void;

  hasOrderAmendment(): boolean;
  clearOrderAmendment(): void;
  getOrderAmendment(): commands_v1_commands_pb.OrderAmendment | undefined;
  setOrderAmendment(value?: commands_v1_commands_pb.OrderAmendment): void;

  hasWithdrawSubmission(): boolean;
  clearWithdrawSubmission(): void;
  getWithdrawSubmission(): commands_v1_commands_pb.WithdrawSubmission | undefined;
  setWithdrawSubmission(value?: commands_v1_commands_pb.WithdrawSubmission): void;

  hasProposalSubmission(): boolean;
  clearProposalSubmission(): void;
  getProposalSubmission(): commands_v1_commands_pb.ProposalSubmission | undefined;
  setProposalSubmission(value?: commands_v1_commands_pb.ProposalSubmission): void;

  hasVoteSubmission(): boolean;
  clearVoteSubmission(): void;
  getVoteSubmission(): commands_v1_commands_pb.VoteSubmission | undefined;
  setVoteSubmission(value?: commands_v1_commands_pb.VoteSubmission): void;

  hasLiquidityProvisionSubmission(): boolean;
  clearLiquidityProvisionSubmission(): void;
  getLiquidityProvisionSubmission(): commands_v1_commands_pb.LiquidityProvisionSubmission | undefined;
  setLiquidityProvisionSubmission(value?: commands_v1_commands_pb.LiquidityProvisionSubmission): void;

  hasNodeRegistration(): boolean;
  clearNodeRegistration(): void;
  getNodeRegistration(): commands_v1_validator_commands_pb.NodeRegistration | undefined;
  setNodeRegistration(value?: commands_v1_validator_commands_pb.NodeRegistration): void;

  hasNodeVote(): boolean;
  clearNodeVote(): void;
  getNodeVote(): commands_v1_validator_commands_pb.NodeVote | undefined;
  setNodeVote(value?: commands_v1_validator_commands_pb.NodeVote): void;

  hasNodeSignature(): boolean;
  clearNodeSignature(): void;
  getNodeSignature(): commands_v1_validator_commands_pb.NodeSignature | undefined;
  setNodeSignature(value?: commands_v1_validator_commands_pb.NodeSignature): void;

  hasChainEvent(): boolean;
  clearChainEvent(): void;
  getChainEvent(): commands_v1_validator_commands_pb.ChainEvent | undefined;
  setChainEvent(value?: commands_v1_validator_commands_pb.ChainEvent): void;

  hasOracleDataSubmission(): boolean;
  clearOracleDataSubmission(): void;
  getOracleDataSubmission(): commands_v1_oracles_pb.OracleDataSubmission | undefined;
  setOracleDataSubmission(value?: commands_v1_oracles_pb.OracleDataSubmission): void;

  getCommandCase(): InputData.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputData.AsObject;
  static toObject(includeInstance: boolean, msg: InputData): InputData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputData;
  static deserializeBinaryFromReader(message: InputData, reader: jspb.BinaryReader): InputData;
}

export namespace InputData {
  export type AsObject = {
    nonce: number,
    blockHeight: number,
    orderSubmission?: commands_v1_commands_pb.OrderSubmission.AsObject,
    orderCancellation?: commands_v1_commands_pb.OrderCancellation.AsObject,
    orderAmendment?: commands_v1_commands_pb.OrderAmendment.AsObject,
    withdrawSubmission?: commands_v1_commands_pb.WithdrawSubmission.AsObject,
    proposalSubmission?: commands_v1_commands_pb.ProposalSubmission.AsObject,
    voteSubmission?: commands_v1_commands_pb.VoteSubmission.AsObject,
    liquidityProvisionSubmission?: commands_v1_commands_pb.LiquidityProvisionSubmission.AsObject,
    nodeRegistration?: commands_v1_validator_commands_pb.NodeRegistration.AsObject,
    nodeVote?: commands_v1_validator_commands_pb.NodeVote.AsObject,
    nodeSignature?: commands_v1_validator_commands_pb.NodeSignature.AsObject,
    chainEvent?: commands_v1_validator_commands_pb.ChainEvent.AsObject,
    oracleDataSubmission?: commands_v1_oracles_pb.OracleDataSubmission.AsObject,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    ORDER_SUBMISSION = 1001,
    ORDER_CANCELLATION = 1002,
    ORDER_AMENDMENT = 1003,
    WITHDRAW_SUBMISSION = 1004,
    PROPOSAL_SUBMISSION = 1005,
    VOTE_SUBMISSION = 1006,
    LIQUIDITY_PROVISION_SUBMISSION = 1007,
    NODE_REGISTRATION = 2001,
    NODE_VOTE = 2002,
    NODE_SIGNATURE = 2003,
    CHAIN_EVENT = 2004,
    ORACLE_DATA_SUBMISSION = 3001,
  }
}

export class Transaction extends jspb.Message {
  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Signature | undefined;
  setSignature(value?: Signature): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string;
  setAddress(value: string): void;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): string;
  setPubKey(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getFromCase(): Transaction.FromCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    inputData: Uint8Array | string,
    signature?: Signature.AsObject,
    address: string,
    pubKey: string,
    version: number,
  }

  export enum FromCase {
    FROM_NOT_SET = 0,
    ADDRESS = 1001,
    PUB_KEY = 1002,
  }
}

export class Signature extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getAlgo(): string;
  setAlgo(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    value: string,
    algo: string,
    version: number,
  }
}

