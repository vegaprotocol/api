// package: vega
// file: governance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "./github.com/mwitkow/go-proto-validators/validator_pb";
import * as markets_pb from "./markets_pb";
import * as vega_pb from "./vega_pb";
import * as assets_pb from "./assets_pb";
import * as oracles_v1_spec_pb from "./oracles/v1/spec_pb";

export class FutureProduct extends jspb.Message {
    getMaturity(): string;
    setMaturity(value: string): FutureProduct;
    getSettlementAsset(): string;
    setSettlementAsset(value: string): FutureProduct;
    getQuoteName(): string;
    setQuoteName(value: string): FutureProduct;

    hasOracleSpecForSettlementPrice(): boolean;
    clearOracleSpecForSettlementPrice(): void;
    getOracleSpecForSettlementPrice(): oracles_v1_spec_pb.OracleSpecConfiguration | undefined;
    setOracleSpecForSettlementPrice(value?: oracles_v1_spec_pb.OracleSpecConfiguration): FutureProduct;

    hasOracleSpecForTradingTermination(): boolean;
    clearOracleSpecForTradingTermination(): void;
    getOracleSpecForTradingTermination(): oracles_v1_spec_pb.OracleSpecConfiguration | undefined;
    setOracleSpecForTradingTermination(value?: oracles_v1_spec_pb.OracleSpecConfiguration): FutureProduct;

    hasOracleSpecBinding(): boolean;
    clearOracleSpecBinding(): void;
    getOracleSpecBinding(): markets_pb.OracleSpecToFutureBinding | undefined;
    setOracleSpecBinding(value?: markets_pb.OracleSpecToFutureBinding): FutureProduct;

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
        settlementAsset: string,
        quoteName: string,
        oracleSpecForSettlementPrice?: oracles_v1_spec_pb.OracleSpecConfiguration.AsObject,
        oracleSpecForTradingTermination?: oracles_v1_spec_pb.OracleSpecConfiguration.AsObject,
        oracleSpecBinding?: markets_pb.OracleSpecToFutureBinding.AsObject,
    }
}

export class InstrumentConfiguration extends jspb.Message {
    getName(): string;
    setName(value: string): InstrumentConfiguration;
    getCode(): string;
    setCode(value: string): InstrumentConfiguration;

    hasFuture(): boolean;
    clearFuture(): void;
    getFuture(): FutureProduct | undefined;
    setFuture(value?: FutureProduct): InstrumentConfiguration;

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
    setInstrument(value?: InstrumentConfiguration): NewMarketConfiguration;
    getDecimalPlaces(): number;
    setDecimalPlaces(value: number): NewMarketConfiguration;
    clearMetadataList(): void;
    getMetadataList(): Array<string>;
    setMetadataList(value: Array<string>): NewMarketConfiguration;
    addMetadata(value: string, index?: number): string;

    hasPriceMonitoringParameters(): boolean;
    clearPriceMonitoringParameters(): void;
    getPriceMonitoringParameters(): markets_pb.PriceMonitoringParameters | undefined;
    setPriceMonitoringParameters(value?: markets_pb.PriceMonitoringParameters): NewMarketConfiguration;

    hasLiquidityMonitoringParameters(): boolean;
    clearLiquidityMonitoringParameters(): void;
    getLiquidityMonitoringParameters(): markets_pb.LiquidityMonitoringParameters | undefined;
    setLiquidityMonitoringParameters(value?: markets_pb.LiquidityMonitoringParameters): NewMarketConfiguration;

    hasSimple(): boolean;
    clearSimple(): void;
    getSimple(): markets_pb.SimpleModelParams | undefined;
    setSimple(value?: markets_pb.SimpleModelParams): NewMarketConfiguration;

    hasLogNormal(): boolean;
    clearLogNormal(): void;
    getLogNormal(): markets_pb.LogNormalRiskModel | undefined;
    setLogNormal(value?: markets_pb.LogNormalRiskModel): NewMarketConfiguration;

    hasContinuous(): boolean;
    clearContinuous(): void;
    getContinuous(): markets_pb.ContinuousTrading | undefined;
    setContinuous(value?: markets_pb.ContinuousTrading): NewMarketConfiguration;

    hasDiscrete(): boolean;
    clearDiscrete(): void;
    getDiscrete(): markets_pb.DiscreteTrading | undefined;
    setDiscrete(value?: markets_pb.DiscreteTrading): NewMarketConfiguration;

    getRiskParametersCase(): NewMarketConfiguration.RiskParametersCase;
    getTradingModeCase(): NewMarketConfiguration.TradingModeCase;

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
        decimalPlaces: number,
        metadataList: Array<string>,
        priceMonitoringParameters?: markets_pb.PriceMonitoringParameters.AsObject,
        liquidityMonitoringParameters?: markets_pb.LiquidityMonitoringParameters.AsObject,
        simple?: markets_pb.SimpleModelParams.AsObject,
        logNormal?: markets_pb.LogNormalRiskModel.AsObject,
        continuous?: markets_pb.ContinuousTrading.AsObject,
        discrete?: markets_pb.DiscreteTrading.AsObject,
    }

    export enum RiskParametersCase {
        RISK_PARAMETERS_NOT_SET = 0,
        SIMPLE = 100,
        LOG_NORMAL = 101,
    }

    export enum TradingModeCase {
        TRADING_MODE_NOT_SET = 0,
        CONTINUOUS = 200,
        DISCRETE = 201,
    }

}

export class NewMarketCommitment extends jspb.Message {
    getCommitmentAmount(): string;
    setCommitmentAmount(value: string): NewMarketCommitment;
    getFee(): string;
    setFee(value: string): NewMarketCommitment;
    clearSellsList(): void;
    getSellsList(): Array<vega_pb.LiquidityOrder>;
    setSellsList(value: Array<vega_pb.LiquidityOrder>): NewMarketCommitment;
    addSells(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;
    clearBuysList(): void;
    getBuysList(): Array<vega_pb.LiquidityOrder>;
    setBuysList(value: Array<vega_pb.LiquidityOrder>): NewMarketCommitment;
    addBuys(value?: vega_pb.LiquidityOrder, index?: number): vega_pb.LiquidityOrder;
    getReference(): string;
    setReference(value: string): NewMarketCommitment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewMarketCommitment.AsObject;
    static toObject(includeInstance: boolean, msg: NewMarketCommitment): NewMarketCommitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewMarketCommitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewMarketCommitment;
    static deserializeBinaryFromReader(message: NewMarketCommitment, reader: jspb.BinaryReader): NewMarketCommitment;
}

export namespace NewMarketCommitment {
    export type AsObject = {
        commitmentAmount: string,
        fee: string,
        sellsList: Array<vega_pb.LiquidityOrder.AsObject>,
        buysList: Array<vega_pb.LiquidityOrder.AsObject>,
        reference: string,
    }
}

export class NewMarket extends jspb.Message {

    hasChanges(): boolean;
    clearChanges(): void;
    getChanges(): NewMarketConfiguration | undefined;
    setChanges(value?: NewMarketConfiguration): NewMarket;

    hasLiquidityCommitment(): boolean;
    clearLiquidityCommitment(): void;
    getLiquidityCommitment(): NewMarketCommitment | undefined;
    setLiquidityCommitment(value?: NewMarketCommitment): NewMarket;

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
        liquidityCommitment?: NewMarketCommitment.AsObject,
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
    getChanges(): vega_pb.NetworkParameter | undefined;
    setChanges(value?: vega_pb.NetworkParameter): UpdateNetworkParameter;

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
        changes?: vega_pb.NetworkParameter.AsObject,
    }
}

export class NewAsset extends jspb.Message {

    hasChanges(): boolean;
    clearChanges(): void;
    getChanges(): assets_pb.AssetDetails | undefined;
    setChanges(value?: assets_pb.AssetDetails): NewAsset;

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
        changes?: assets_pb.AssetDetails.AsObject,
    }
}

export class ProposalTerms extends jspb.Message {
    getClosingTimestamp(): number;
    setClosingTimestamp(value: number): ProposalTerms;
    getEnactmentTimestamp(): number;
    setEnactmentTimestamp(value: number): ProposalTerms;
    getValidationTimestamp(): number;
    setValidationTimestamp(value: number): ProposalTerms;

    hasUpdateMarket(): boolean;
    clearUpdateMarket(): void;
    getUpdateMarket(): UpdateMarket | undefined;
    setUpdateMarket(value?: UpdateMarket): ProposalTerms;

    hasNewMarket(): boolean;
    clearNewMarket(): void;
    getNewMarket(): NewMarket | undefined;
    setNewMarket(value?: NewMarket): ProposalTerms;

    hasUpdateNetworkParameter(): boolean;
    clearUpdateNetworkParameter(): void;
    getUpdateNetworkParameter(): UpdateNetworkParameter | undefined;
    setUpdateNetworkParameter(value?: UpdateNetworkParameter): ProposalTerms;

    hasNewAsset(): boolean;
    clearNewAsset(): void;
    getNewAsset(): NewAsset | undefined;
    setNewAsset(value?: NewAsset): ProposalTerms;

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
        closingTimestamp: number,
        enactmentTimestamp: number,
        validationTimestamp: number,
        updateMarket?: UpdateMarket.AsObject,
        newMarket?: NewMarket.AsObject,
        updateNetworkParameter?: UpdateNetworkParameter.AsObject,
        newAsset?: NewAsset.AsObject,
    }

    export enum ChangeCase {
        CHANGE_NOT_SET = 0,
        UPDATE_MARKET = 101,
        NEW_MARKET = 102,
        UPDATE_NETWORK_PARAMETER = 103,
        NEW_ASSET = 104,
    }

}

export class GovernanceData extends jspb.Message {

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): Proposal | undefined;
    setProposal(value?: Proposal): GovernanceData;
    clearYesList(): void;
    getYesList(): Array<Vote>;
    setYesList(value: Array<Vote>): GovernanceData;
    addYes(value?: Vote, index?: number): Vote;
    clearNoList(): void;
    getNoList(): Array<Vote>;
    setNoList(value: Array<Vote>): GovernanceData;
    addNo(value?: Vote, index?: number): Vote;

    getYesPartyMap(): jspb.Map<string, Vote>;
    clearYesPartyMap(): void;

    getNoPartyMap(): jspb.Map<string, Vote>;
    clearNoPartyMap(): void;

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

        yesPartyMap: Array<[string, Vote.AsObject]>,

        noPartyMap: Array<[string, Vote.AsObject]>,
    }
}

export class Proposal extends jspb.Message {
    getId(): string;
    setId(value: string): Proposal;
    getReference(): string;
    setReference(value: string): Proposal;
    getPartyId(): string;
    setPartyId(value: string): Proposal;
    getState(): Proposal.State;
    setState(value: Proposal.State): Proposal;
    getTimestamp(): number;
    setTimestamp(value: number): Proposal;

    hasTerms(): boolean;
    clearTerms(): void;
    getTerms(): ProposalTerms | undefined;
    setTerms(value?: ProposalTerms): Proposal;
    getReason(): ProposalError;
    setReason(value: ProposalError): Proposal;
    getErrorDetails(): string;
    setErrorDetails(value: string): Proposal;

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
        partyId: string,
        state: Proposal.State,
        timestamp: number,
        terms?: ProposalTerms.AsObject,
        reason: ProposalError,
        errorDetails: string,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    STATE_FAILED = 1,
    STATE_OPEN = 2,
    STATE_PASSED = 3,
    STATE_REJECTED = 4,
    STATE_DECLINED = 5,
    STATE_ENACTED = 6,
    STATE_WAITING_FOR_NODE_VOTE = 7,
    }

}

export class Vote extends jspb.Message {
    getPartyId(): string;
    setPartyId(value: string): Vote;
    getValue(): Vote.Value;
    setValue(value: Vote.Value): Vote;
    getProposalId(): string;
    setProposalId(value: string): Vote;
    getTimestamp(): number;
    setTimestamp(value: number): Vote;
    getTotalGovernanceTokenBalance(): string;
    setTotalGovernanceTokenBalance(value: string): Vote;
    getTotalGovernanceTokenWeight(): string;
    setTotalGovernanceTokenWeight(value: string): Vote;

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
        partyId: string,
        value: Vote.Value,
        proposalId: string,
        timestamp: number,
        totalGovernanceTokenBalance: string,
        totalGovernanceTokenWeight: string,
    }

    export enum Value {
    VALUE_UNSPECIFIED = 0,
    VALUE_NO = 1,
    VALUE_YES = 2,
    }

}

export enum ProposalError {
    PROPOSAL_ERROR_UNSPECIFIED = 0,
    PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 1,
    PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 2,
    PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 3,
    PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 4,
    PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 5,
    PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 6,
    PROPOSAL_ERROR_NO_PRODUCT = 7,
    PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 8,
    PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT_TIMESTAMP = 9,
    PROPOSAL_ERROR_PRODUCT_MATURITY_IS_PASSED = 10,
    PROPOSAL_ERROR_NO_TRADING_MODE = 11,
    PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 12,
    PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 13,
    PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 14,
    PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 15,
    PROPOSAL_ERROR_INVALID_ASSET = 16,
    PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 17,
    PROPOSAL_ERROR_NO_RISK_PARAMETERS = 18,
    PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 19,
    PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 20,
    PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 21,
    PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 22,
    PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 23,
    PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT = 24,
    PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 25,
    PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 26,
    PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT = 27,
    PROPOSAL_ERROR_INVALID_FEE_AMOUNT = 28,
    PROPOSAL_ERROR_INVALID_SHAPE = 29,
    PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 30,
    PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 31,
    PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 32,
    PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 33,
}
