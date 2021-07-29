// package: vega.wallet.v1
// file: wallet/v1/wallet.proto

import * as jspb from "google-protobuf";
import * as commands_v1_commands_pb from "../../commands/v1/commands_pb";
import * as commands_v1_validator_commands_pb from "../../commands/v1/validator_commands_pb";
import * as commands_v1_oracles_pb from "../../commands/v1/oracles_pb";

export class SubmitTransactionRequest extends jspb.Message {
  getPubKey(): string;
  setPubKey(value: string): void;

  getPropagate(): boolean;
  setPropagate(value: boolean): void;

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

  hasDelegateSubmission(): boolean;
  clearDelegateSubmission(): void;
  getDelegateSubmission(): commands_v1_commands_pb.DelegateSubmission | undefined;
  setDelegateSubmission(value?: commands_v1_commands_pb.DelegateSubmission): void;

  hasUndelegateAtEpochEndSubmission(): boolean;
  clearUndelegateAtEpochEndSubmission(): void;
  getUndelegateAtEpochEndSubmission(): commands_v1_commands_pb.UndelegateAtEpochEndSubmission | undefined;
  setUndelegateAtEpochEndSubmission(value?: commands_v1_commands_pb.UndelegateAtEpochEndSubmission): void;

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

  getCommandCase(): SubmitTransactionRequest.CommandCase;
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
    pubKey: string,
    propagate: boolean,
    orderSubmission?: commands_v1_commands_pb.OrderSubmission.AsObject,
    orderCancellation?: commands_v1_commands_pb.OrderCancellation.AsObject,
    orderAmendment?: commands_v1_commands_pb.OrderAmendment.AsObject,
    withdrawSubmission?: commands_v1_commands_pb.WithdrawSubmission.AsObject,
    proposalSubmission?: commands_v1_commands_pb.ProposalSubmission.AsObject,
    voteSubmission?: commands_v1_commands_pb.VoteSubmission.AsObject,
    liquidityProvisionSubmission?: commands_v1_commands_pb.LiquidityProvisionSubmission.AsObject,
    delegateSubmission?: commands_v1_commands_pb.DelegateSubmission.AsObject,
    undelegateAtEpochEndSubmission?: commands_v1_commands_pb.UndelegateAtEpochEndSubmission.AsObject,
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
    DELEGATE_SUBMISSION = 1008,
    UNDELEGATE_AT_EPOCH_END_SUBMISSION = 1009,
    NODE_REGISTRATION = 2001,
    NODE_VOTE = 2002,
    NODE_SIGNATURE = 2003,
    CHAIN_EVENT = 2004,
    ORACLE_DATA_SUBMISSION = 3001,
  }
}

