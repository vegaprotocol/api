// package: vega
// file: proto/governance.proto

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../github.com/mwitkow/go-proto-validators/validator_pb";
import * as proto_markets_pb from "../proto/markets_pb";
import * as proto_vega_pb from "../proto/vega_pb";
import * as proto_assets_pb from "../proto/assets_pb";

export class FutureProduct extends jspb.Message {
  getMaturity(): string;
  setMaturity(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FutureProduct.AsObject;
  static toObject(includeInstance: boolean, msg: FutureProduct): FutureProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FutureProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FutureProduct;
  static deserializeBinaryFromReader(message: FutureProduct, reader: jspb.BinaryReader): FutureProduct;
}

export namespace FutureProduct {
  export type AsObject = {
    maturity: string,
    asset: string,
  }
}

export class InstrumentConfiguration extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getQuotename(): string;
  setQuotename(value: string): void;

  hasFuture(): boolean;
  clearFuture(): void;
  getFuture(): FutureProduct | undefined;
  setFuture(value?: FutureProduct): void;

  getProductCase(): InstrumentConfiguration.ProductCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentConfiguration): InstrumentConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentConfiguration;
  static deserializeBinaryFromReader(message: InstrumentConfiguration, reader: jspb.BinaryReader): InstrumentConfiguration;
}

export namespace InstrumentConfiguration {
  export type AsObject = {
    name: string,
    code: string,
    quotename: string,
    future?: FutureProduct.AsObject,
  }

  export enum ProductCase {
    PRODUCT_NOT_SET = 0,
    FUTURE = 100,
  }
}

export class NewMarketConfiguration extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): InstrumentConfiguration | undefined;
  setInstrument(value?: InstrumentConfiguration): void;

  getDecimalplaces(): number;
  setDecimalplaces(value: number): void;

  clearMetadataList(): void;
  getMetadataList(): Array<string>;
  setMetadataList(value: Array<string>): void;
  addMetadata(value: string, index?: number): string;

  getOpeningauctionduration(): number;
  setOpeningauctionduration(value: number): void;

  hasPricemonitoringparameters(): boolean;
  clearPricemonitoringparameters(): void;
  getPricemonitoringparameters(): proto_markets_pb.PriceMonitoringParameters | undefined;
  setPricemonitoringparameters(value?: proto_markets_pb.PriceMonitoringParameters): void;

  hasSimple(): boolean;
  clearSimple(): void;
  getSimple(): proto_markets_pb.SimpleModelParams | undefined;
  setSimple(value?: proto_markets_pb.SimpleModelParams): void;

  hasLognormal(): boolean;
  clearLognormal(): void;
  getLognormal(): proto_markets_pb.LogNormalRiskModel | undefined;
  setLognormal(value?: proto_markets_pb.LogNormalRiskModel): void;

  hasContinuous(): boolean;
  clearContinuous(): void;
  getContinuous(): proto_markets_pb.ContinuousTrading | undefined;
  setContinuous(value?: proto_markets_pb.ContinuousTrading): void;

  hasDiscrete(): boolean;
  clearDiscrete(): void;
  getDiscrete(): proto_markets_pb.DiscreteTrading | undefined;
  setDiscrete(value?: proto_markets_pb.DiscreteTrading): void;

  getRiskparametersCase(): NewMarketConfiguration.RiskparametersCase;
  getTradingmodeCase(): NewMarketConfiguration.TradingmodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMarketConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: NewMarketConfiguration): NewMarketConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewMarketConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMarketConfiguration;
  static deserializeBinaryFromReader(message: NewMarketConfiguration, reader: jspb.BinaryReader): NewMarketConfiguration;
}

export namespace NewMarketConfiguration {
  export type AsObject = {
    instrument?: InstrumentConfiguration.AsObject,
    decimalplaces: number,
    metadataList: Array<string>,
    openingauctionduration: number,
    pricemonitoringparameters?: proto_markets_pb.PriceMonitoringParameters.AsObject,
    simple?: proto_markets_pb.SimpleModelParams.AsObject,
    lognormal?: proto_markets_pb.LogNormalRiskModel.AsObject,
    continuous?: proto_markets_pb.ContinuousTrading.AsObject,
    discrete?: proto_markets_pb.DiscreteTrading.AsObject,
  }

  export enum RiskparametersCase {
    RISKPARAMETERS_NOT_SET = 0,
    SIMPLE = 100,
    LOGNORMAL = 101,
  }

  export enum TradingmodeCase {
    TRADINGMODE_NOT_SET = 0,
    CONTINUOUS = 200,
    DISCRETE = 201,
  }
}

export class NewMarket extends jspb.Message {
  hasChanges(): boolean;
  clearChanges(): void;
  getChanges(): NewMarketConfiguration | undefined;
  setChanges(value?: NewMarketConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMarket.AsObject;
  static toObject(includeInstance: boolean, msg: NewMarket): NewMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMarket;
  static deserializeBinaryFromReader(message: NewMarket, reader: jspb.BinaryReader): NewMarket;
}

export namespace NewMarket {
  export type AsObject = {
    changes?: NewMarketConfiguration.AsObject,
  }
}

export class UpdateMarket extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarket): UpdateMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarket;
  static deserializeBinaryFromReader(message: UpdateMarket, reader: jspb.BinaryReader): UpdateMarket;
}

export namespace UpdateMarket {
  export type AsObject = {
  }
}

export class UpdateNetworkParameter extends jspb.Message {
  hasChanges(): boolean;
  clearChanges(): void;
  getChanges(): proto_vega_pb.NetworkParameter | undefined;
  setChanges(value?: proto_vega_pb.NetworkParameter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNetworkParameter.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNetworkParameter): UpdateNetworkParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNetworkParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNetworkParameter;
  static deserializeBinaryFromReader(message: UpdateNetworkParameter, reader: jspb.BinaryReader): UpdateNetworkParameter;
}

export namespace UpdateNetworkParameter {
  export type AsObject = {
    changes?: proto_vega_pb.NetworkParameter.AsObject,
  }
}

export class NewAsset extends jspb.Message {
  hasChanges(): boolean;
  clearChanges(): void;
  getChanges(): proto_assets_pb.AssetSource | undefined;
  setChanges(value?: proto_assets_pb.AssetSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewAsset.AsObject;
  static toObject(includeInstance: boolean, msg: NewAsset): NewAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewAsset;
  static deserializeBinaryFromReader(message: NewAsset, reader: jspb.BinaryReader): NewAsset;
}

export namespace NewAsset {
  export type AsObject = {
    changes?: proto_assets_pb.AssetSource.AsObject,
  }
}

export class ProposalTerms extends jspb.Message {
  getClosingtimestamp(): number;
  setClosingtimestamp(value: number): void;

  getEnactmenttimestamp(): number;
  setEnactmenttimestamp(value: number): void;

  getValidationtimestamp(): number;
  setValidationtimestamp(value: number): void;

  hasUpdatemarket(): boolean;
  clearUpdatemarket(): void;
  getUpdatemarket(): UpdateMarket | undefined;
  setUpdatemarket(value?: UpdateMarket): void;

  hasNewmarket(): boolean;
  clearNewmarket(): void;
  getNewmarket(): NewMarket | undefined;
  setNewmarket(value?: NewMarket): void;

  hasUpdatenetworkparameter(): boolean;
  clearUpdatenetworkparameter(): void;
  getUpdatenetworkparameter(): UpdateNetworkParameter | undefined;
  setUpdatenetworkparameter(value?: UpdateNetworkParameter): void;

  hasNewasset(): boolean;
  clearNewasset(): void;
  getNewasset(): NewAsset | undefined;
  setNewasset(value?: NewAsset): void;

  getChangeCase(): ProposalTerms.ChangeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalTerms.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalTerms): ProposalTerms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalTerms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalTerms;
  static deserializeBinaryFromReader(message: ProposalTerms, reader: jspb.BinaryReader): ProposalTerms;
}

export namespace ProposalTerms {
  export type AsObject = {
    closingtimestamp: number,
    enactmenttimestamp: number,
    validationtimestamp: number,
    updatemarket?: UpdateMarket.AsObject,
    newmarket?: NewMarket.AsObject,
    updatenetworkparameter?: UpdateNetworkParameter.AsObject,
    newasset?: NewAsset.AsObject,
  }

  export enum ChangeCase {
    CHANGE_NOT_SET = 0,
    UPDATEMARKET = 101,
    NEWMARKET = 102,
    UPDATENETWORKPARAMETER = 103,
    NEWASSET = 104,
  }
}

export class GovernanceData extends jspb.Message {
  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): Proposal | undefined;
  setProposal(value?: Proposal): void;

  clearYesList(): void;
  getYesList(): Array<Vote>;
  setYesList(value: Array<Vote>): void;
  addYes(value?: Vote, index?: number): Vote;

  clearNoList(): void;
  getNoList(): Array<Vote>;
  setNoList(value: Array<Vote>): void;
  addNo(value?: Vote, index?: number): Vote;

  getYespartyMap(): jspb.Map<string, Vote>;
  clearYespartyMap(): void;
  getNopartyMap(): jspb.Map<string, Vote>;
  clearNopartyMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GovernanceData.AsObject;
  static toObject(includeInstance: boolean, msg: GovernanceData): GovernanceData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GovernanceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GovernanceData;
  static deserializeBinaryFromReader(message: GovernanceData, reader: jspb.BinaryReader): GovernanceData;
}

export namespace GovernanceData {
  export type AsObject = {
    proposal?: Proposal.AsObject,
    yesList: Array<Vote.AsObject>,
    noList: Array<Vote.AsObject>,
    yespartyMap: Array<[string, Vote.AsObject]>,
    nopartyMap: Array<[string, Vote.AsObject]>,
  }
}

export class Proposal extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  getPartyid(): string;
  setPartyid(value: string): void;

  getState(): Proposal.StateMap[keyof Proposal.StateMap];
  setState(value: Proposal.StateMap[keyof Proposal.StateMap]): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasTerms(): boolean;
  clearTerms(): void;
  getTerms(): ProposalTerms | undefined;
  setTerms(value?: ProposalTerms): void;

  getReason(): ProposalErrorMap[keyof ProposalErrorMap];
  setReason(value: ProposalErrorMap[keyof ProposalErrorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    id: string,
    reference: string,
    partyid: string,
    state: Proposal.StateMap[keyof Proposal.StateMap],
    timestamp: number,
    terms?: ProposalTerms.AsObject,
    reason: ProposalErrorMap[keyof ProposalErrorMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_FAILED: 1;
    STATE_OPEN: 2;
    STATE_PASSED: 3;
    STATE_REJECTED: 4;
    STATE_DECLINED: 5;
    STATE_ENACTED: 6;
    STATE_WAITING_FOR_NODE_VOTE: 7;
  }

  export const State: StateMap;
}

export class Vote extends jspb.Message {
  getPartyid(): string;
  setPartyid(value: string): void;

  getValue(): Vote.ValueMap[keyof Vote.ValueMap];
  setValue(value: Vote.ValueMap[keyof Vote.ValueMap]): void;

  getProposalid(): string;
  setProposalid(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    partyid: string,
    value: Vote.ValueMap[keyof Vote.ValueMap],
    proposalid: string,
    timestamp: number,
  }

  export interface ValueMap {
    VALUE_UNSPECIFIED: 0;
    VALUE_NO: 1;
    VALUE_YES: 2;
  }

  export const Value: ValueMap;
}

export interface ProposalErrorMap {
  PROPOSAL_ERROR_UNSPECIFIED: 0;
  PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON: 1;
  PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE: 2;
  PROPOSAL_ERROR_ENACT_TIME_TOO_SOON: 3;
  PROPOSAL_ERROR_ENACT_TIME_TOO_LATE: 4;
  PROPOSAL_ERROR_INSUFFICIENT_TOKENS: 5;
  PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY: 6;
  PROPOSAL_ERROR_NO_PRODUCT: 7;
  PROPOSAL_ERROR_UNSUPPORTED_PRODUCT: 8;
  PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT_TIMESTAMP: 9;
  PROPOSAL_ERROR_PRODUCT_MATURITY_IS_PASSED: 10;
  PROPOSAL_ERROR_NO_TRADING_MODE: 11;
  PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE: 12;
  PROPOSAL_ERROR_NODE_VALIDATION_FAILED: 13;
  PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD: 14;
  PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS: 15;
  PROPOSAL_ERROR_INVALID_ASSET: 16;
  PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS: 17;
  PROPOSAL_ERROR_NO_RISK_PARAMETERS: 18;
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY: 19;
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE: 20;
  PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED: 21;
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL: 22;
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE: 23;
}

export const ProposalError: ProposalErrorMap;

