// package: tm
// file: tm/replay.proto

import * as jspb from "google-protobuf";

export class TmEvent extends jspb.Message {
  hasReqInitChain(): boolean;
  clearReqInitChain(): void;
  getReqInitChain(): RequestInitChain | undefined;
  setReqInitChain(value?: RequestInitChain): void;

  hasResInitChain(): boolean;
  clearResInitChain(): void;
  getResInitChain(): ResponseInitChain | undefined;
  setResInitChain(value?: ResponseInitChain): void;

  hasReqDeliverTx(): boolean;
  clearReqDeliverTx(): void;
  getReqDeliverTx(): RequestDeliverTx | undefined;
  setReqDeliverTx(value?: RequestDeliverTx): void;

  hasResDeliverTx(): boolean;
  clearResDeliverTx(): void;
  getResDeliverTx(): ResponseDeliverTx | undefined;
  setResDeliverTx(value?: ResponseDeliverTx): void;

  hasReqBeginBlock(): boolean;
  clearReqBeginBlock(): void;
  getReqBeginBlock(): RequestBeginBlock | undefined;
  setReqBeginBlock(value?: RequestBeginBlock): void;

  hasResBeginBlock(): boolean;
  clearResBeginBlock(): void;
  getResBeginBlock(): ResponseBeginBlock | undefined;
  setResBeginBlock(value?: ResponseBeginBlock): void;

  getActionCase(): TmEvent.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TmEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TmEvent): TmEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TmEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TmEvent;
  static deserializeBinaryFromReader(message: TmEvent, reader: jspb.BinaryReader): TmEvent;
}

export namespace TmEvent {
  export type AsObject = {
    reqInitChain?: RequestInitChain.AsObject,
    resInitChain?: ResponseInitChain.AsObject,
    reqDeliverTx?: RequestDeliverTx.AsObject,
    resDeliverTx?: ResponseDeliverTx.AsObject,
    reqBeginBlock?: RequestBeginBlock.AsObject,
    resBeginBlock?: ResponseBeginBlock.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    REQ_INIT_CHAIN = 1,
    RES_INIT_CHAIN = 2,
    REQ_DELIVER_TX = 3,
    RES_DELIVER_TX = 4,
    REQ_BEGIN_BLOCK = 5,
    RES_BEGIN_BLOCK = 6,
  }
}

export class RequestInitChain extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  getChainId(): string;
  setChainId(value: string): void;

  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): ConsensusParams | undefined;
  setConsensusParams(value?: ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppStateBytes(): Uint8Array | string;
  getAppStateBytes_asU8(): Uint8Array;
  getAppStateBytes_asB64(): string;
  setAppStateBytes(value: Uint8Array | string): void;

  getInitialHeight(): number;
  setInitialHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: RequestInitChain): RequestInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestInitChain;
  static deserializeBinaryFromReader(message: RequestInitChain, reader: jspb.BinaryReader): RequestInitChain;
}

export namespace RequestInitChain {
  export type AsObject = {
    time: number,
    chainId: string,
    consensusParams?: ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appStateBytes: Uint8Array | string,
    initialHeight: number,
  }
}

export class RequestBeginBlock extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasLastCommitInfo(): boolean;
  clearLastCommitInfo(): void;
  getLastCommitInfo(): LastCommitInfo | undefined;
  setLastCommitInfo(value?: LastCommitInfo): void;

  clearByzantineValidatorsList(): void;
  getByzantineValidatorsList(): Array<Evidence>;
  setByzantineValidatorsList(value: Array<Evidence>): void;
  addByzantineValidators(value?: Evidence, index?: number): Evidence;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestBeginBlock.AsObject;
  static toObject(includeInstance: boolean, msg: RequestBeginBlock): RequestBeginBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestBeginBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestBeginBlock;
  static deserializeBinaryFromReader(message: RequestBeginBlock, reader: jspb.BinaryReader): RequestBeginBlock;
}

export namespace RequestBeginBlock {
  export type AsObject = {
    hash: Uint8Array | string,
    header?: Header.AsObject,
    lastCommitInfo?: LastCommitInfo.AsObject,
    byzantineValidatorsList: Array<Evidence.AsObject>,
  }
}

export class RequestDeliverTx extends jspb.Message {
  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeliverTx.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeliverTx): RequestDeliverTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestDeliverTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeliverTx;
  static deserializeBinaryFromReader(message: RequestDeliverTx, reader: jspb.BinaryReader): RequestDeliverTx;
}

export namespace RequestDeliverTx {
  export type AsObject = {
    tx: Uint8Array | string,
  }
}

export class ResponseInitChain extends jspb.Message {
  hasConsensusParams(): boolean;
  clearConsensusParams(): void;
  getConsensusParams(): ConsensusParams | undefined;
  setConsensusParams(value?: ConsensusParams): void;

  clearValidatorsList(): void;
  getValidatorsList(): Array<ValidatorUpdate>;
  setValidatorsList(value: Array<ValidatorUpdate>): void;
  addValidators(value?: ValidatorUpdate, index?: number): ValidatorUpdate;

  getAppHash(): Uint8Array | string;
  getAppHash_asU8(): Uint8Array;
  getAppHash_asB64(): string;
  setAppHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseInitChain.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseInitChain): ResponseInitChain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseInitChain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseInitChain;
  static deserializeBinaryFromReader(message: ResponseInitChain, reader: jspb.BinaryReader): ResponseInitChain;
}

export namespace ResponseInitChain {
  export type AsObject = {
    consensusParams?: ConsensusParams.AsObject,
    validatorsList: Array<ValidatorUpdate.AsObject>,
    appHash: Uint8Array | string,
  }
}

export class ResponseBeginBlock extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseBeginBlock.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseBeginBlock): ResponseBeginBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseBeginBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseBeginBlock;
  static deserializeBinaryFromReader(message: ResponseBeginBlock, reader: jspb.BinaryReader): ResponseBeginBlock;
}

export namespace ResponseBeginBlock {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
  }
}

export class ResponseDeliverTx extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getLog(): string;
  setLog(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getCodespace(): string;
  setCodespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseDeliverTx.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseDeliverTx): ResponseDeliverTx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseDeliverTx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseDeliverTx;
  static deserializeBinaryFromReader(message: ResponseDeliverTx, reader: jspb.BinaryReader): ResponseDeliverTx;
}

export namespace ResponseDeliverTx {
  export type AsObject = {
    code: number,
    data: Uint8Array | string,
    log: string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    eventsList: Array<Event.AsObject>,
    codespace: string,
  }
}

export class Event extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<EventAttribute>;
  setAttributesList(value: Array<EventAttribute>): void;
  addAttributes(value?: EventAttribute, index?: number): EventAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    type: string,
    attributesList: Array<EventAttribute.AsObject>,
  }
}

export class EventAttribute extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getIndex(): boolean;
  setIndex(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EventAttribute): EventAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAttribute;
  static deserializeBinaryFromReader(message: EventAttribute, reader: jspb.BinaryReader): EventAttribute;
}

export namespace EventAttribute {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    index: boolean,
  }
}

export class ValidatorUpdate extends jspb.Message {
  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): PublicKey | undefined;
  setPubKey(value?: PublicKey): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorUpdate): ValidatorUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorUpdate;
  static deserializeBinaryFromReader(message: ValidatorUpdate, reader: jspb.BinaryReader): ValidatorUpdate;
}

export namespace ValidatorUpdate {
  export type AsObject = {
    pubKey?: PublicKey.AsObject,
    power: number,
  }
}

export class ConsensusParams extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): BlockParams | undefined;
  setBlock(value?: BlockParams): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): EvidenceParams | undefined;
  setEvidence(value?: EvidenceParams): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): ValidatorParams | undefined;
  setValidator(value?: ValidatorParams): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): VersionParams | undefined;
  setVersion(value?: VersionParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusParams.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusParams): ConsensusParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusParams;
  static deserializeBinaryFromReader(message: ConsensusParams, reader: jspb.BinaryReader): ConsensusParams;
}

export namespace ConsensusParams {
  export type AsObject = {
    block?: BlockParams.AsObject,
    evidence?: EvidenceParams.AsObject,
    validator?: ValidatorParams.AsObject,
    version?: VersionParams.AsObject,
  }
}

export class BlockParams extends jspb.Message {
  getMaxBytes(): number;
  setMaxBytes(value: number): void;

  getMaxGas(): number;
  setMaxGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockParams.AsObject;
  static toObject(includeInstance: boolean, msg: BlockParams): BlockParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockParams;
  static deserializeBinaryFromReader(message: BlockParams, reader: jspb.BinaryReader): BlockParams;
}

export namespace BlockParams {
  export type AsObject = {
    maxBytes: number,
    maxGas: number,
  }
}

export class Evidence extends jspb.Message {
  getType(): EvidenceTypeMap[keyof EvidenceTypeMap];
  setType(value: EvidenceTypeMap[keyof EvidenceTypeMap]): void;

  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getTotalVotingPower(): number;
  setTotalVotingPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Evidence.AsObject;
  static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Evidence;
  static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
}

export namespace Evidence {
  export type AsObject = {
    type: EvidenceTypeMap[keyof EvidenceTypeMap],
    validator?: Validator.AsObject,
    height: number,
    time: number,
    totalVotingPower: number,
  }
}

export class Validator extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getPower(): number;
  setPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    address: Uint8Array | string,
    power: number,
  }
}

export class LastCommitInfo extends jspb.Message {
  getRound(): number;
  setRound(value: number): void;

  clearVotesList(): void;
  getVotesList(): Array<VoteInfo>;
  setVotesList(value: Array<VoteInfo>): void;
  addVotes(value?: VoteInfo, index?: number): VoteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastCommitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LastCommitInfo): LastCommitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastCommitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastCommitInfo;
  static deserializeBinaryFromReader(message: LastCommitInfo, reader: jspb.BinaryReader): LastCommitInfo;
}

export namespace LastCommitInfo {
  export type AsObject = {
    round: number,
    votesList: Array<VoteInfo.AsObject>,
  }
}

export class VoteInfo extends jspb.Message {
  hasValidator(): boolean;
  clearValidator(): void;
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): void;

  getSignedLastBlock(): boolean;
  setSignedLastBlock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoteInfo): VoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteInfo;
  static deserializeBinaryFromReader(message: VoteInfo, reader: jspb.BinaryReader): VoteInfo;
}

export namespace VoteInfo {
  export type AsObject = {
    validator?: Validator.AsObject,
    signedLastBlock: boolean,
  }
}

export class EvidenceParams extends jspb.Message {
  getMaxAgeNumBlocks(): number;
  setMaxAgeNumBlocks(value: number): void;

  getMaxAgeDuration(): number;
  setMaxAgeDuration(value: number): void;

  getMaxNum(): number;
  setMaxNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvidenceParams.AsObject;
  static toObject(includeInstance: boolean, msg: EvidenceParams): EvidenceParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvidenceParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvidenceParams;
  static deserializeBinaryFromReader(message: EvidenceParams, reader: jspb.BinaryReader): EvidenceParams;
}

export namespace EvidenceParams {
  export type AsObject = {
    maxAgeNumBlocks: number,
    maxAgeDuration: number,
    maxNum: number,
  }
}

export class ValidatorParams extends jspb.Message {
  clearPubKeyTypesList(): void;
  getPubKeyTypesList(): Array<string>;
  setPubKeyTypesList(value: Array<string>): void;
  addPubKeyTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorParams.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorParams): ValidatorParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorParams;
  static deserializeBinaryFromReader(message: ValidatorParams, reader: jspb.BinaryReader): ValidatorParams;
}

export namespace ValidatorParams {
  export type AsObject = {
    pubKeyTypesList: Array<string>,
  }
}

export class VersionParams extends jspb.Message {
  getAppVersion(): number;
  setAppVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionParams.AsObject;
  static toObject(includeInstance: boolean, msg: VersionParams): VersionParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionParams;
  static deserializeBinaryFromReader(message: VersionParams, reader: jspb.BinaryReader): VersionParams;
}

export namespace VersionParams {
  export type AsObject = {
    appVersion: number,
  }
}

export class Header extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    chainId: string,
    height: number,
    time: number,
  }
}

export class PublicKey extends jspb.Message {
  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): Uint8Array | string;
  getEd25519_asU8(): Uint8Array;
  getEd25519_asB64(): string;
  setEd25519(value: Uint8Array | string): void;

  getSumCase(): PublicKey.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    ed25519: Uint8Array | string,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    ED25519 = 1,
  }
}

export interface EvidenceTypeMap {
  UNKNOWN: 0;
  DUPLICATE_VOTE: 1;
  LIGHT_CLIENT_ATTACK: 2;
}

export const EvidenceType: EvidenceTypeMap;

