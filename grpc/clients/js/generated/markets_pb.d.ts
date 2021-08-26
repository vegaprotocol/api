// package: vega
// file: markets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "./github.com/mwitkow/go-proto-validators/validator_pb";
import * as oracles_v1_spec_pb from "./oracles/v1/spec_pb";

export class AuctionDuration extends jspb.Message {
    getDuration(): number;
    setDuration(value: number): AuctionDuration;
    getVolume(): number;
    setVolume(value: number): AuctionDuration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuctionDuration.AsObject;
    static toObject(includeInstance: boolean, msg: AuctionDuration): AuctionDuration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuctionDuration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuctionDuration;
    static deserializeBinaryFromReader(message: AuctionDuration, reader: jspb.BinaryReader): AuctionDuration;
}

export namespace AuctionDuration {
    export type AsObject = {
        duration: number,
        volume: number,
    }
}

export class ContinuousTrading extends jspb.Message {
    getTickSize(): string;
    setTickSize(value: string): ContinuousTrading;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContinuousTrading.AsObject;
    static toObject(includeInstance: boolean, msg: ContinuousTrading): ContinuousTrading.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContinuousTrading, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContinuousTrading;
    static deserializeBinaryFromReader(message: ContinuousTrading, reader: jspb.BinaryReader): ContinuousTrading;
}

export namespace ContinuousTrading {
    export type AsObject = {
        tickSize: string,
    }
}

export class DiscreteTrading extends jspb.Message {
    getDurationNs(): number;
    setDurationNs(value: number): DiscreteTrading;
    getTickSize(): string;
    setTickSize(value: string): DiscreteTrading;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscreteTrading.AsObject;
    static toObject(includeInstance: boolean, msg: DiscreteTrading): DiscreteTrading.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscreteTrading, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscreteTrading;
    static deserializeBinaryFromReader(message: DiscreteTrading, reader: jspb.BinaryReader): DiscreteTrading;
}

export namespace DiscreteTrading {
    export type AsObject = {
        durationNs: number,
        tickSize: string,
    }
}

export class Future extends jspb.Message {
    getMaturity(): string;
    setMaturity(value: string): Future;
    getSettlementAsset(): string;
    setSettlementAsset(value: string): Future;
    getQuoteName(): string;
    setQuoteName(value: string): Future;

    hasOracleSpecForSettlementPrice(): boolean;
    clearOracleSpecForSettlementPrice(): void;
    getOracleSpecForSettlementPrice(): oracles_v1_spec_pb.OracleSpec | undefined;
    setOracleSpecForSettlementPrice(value?: oracles_v1_spec_pb.OracleSpec): Future;

    hasOracleSpecForTradingTermination(): boolean;
    clearOracleSpecForTradingTermination(): void;
    getOracleSpecForTradingTermination(): oracles_v1_spec_pb.OracleSpec | undefined;
    setOracleSpecForTradingTermination(value?: oracles_v1_spec_pb.OracleSpec): Future;

    hasOracleSpecBinding(): boolean;
    clearOracleSpecBinding(): void;
    getOracleSpecBinding(): OracleSpecToFutureBinding | undefined;
    setOracleSpecBinding(value?: OracleSpecToFutureBinding): Future;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Future.AsObject;
    static toObject(includeInstance: boolean, msg: Future): Future.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Future, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Future;
    static deserializeBinaryFromReader(message: Future, reader: jspb.BinaryReader): Future;
}

export namespace Future {
    export type AsObject = {
        maturity: string,
        settlementAsset: string,
        quoteName: string,
        oracleSpecForSettlementPrice?: oracles_v1_spec_pb.OracleSpec.AsObject,
        oracleSpecForTradingTermination?: oracles_v1_spec_pb.OracleSpec.AsObject,
        oracleSpecBinding?: OracleSpecToFutureBinding.AsObject,
    }
}

export class OracleSpecToFutureBinding extends jspb.Message {
    getSettlementPriceProperty(): string;
    setSettlementPriceProperty(value: string): OracleSpecToFutureBinding;
    getTradingTerminationProperty(): string;
    setTradingTerminationProperty(value: string): OracleSpecToFutureBinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleSpecToFutureBinding.AsObject;
    static toObject(includeInstance: boolean, msg: OracleSpecToFutureBinding): OracleSpecToFutureBinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleSpecToFutureBinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleSpecToFutureBinding;
    static deserializeBinaryFromReader(message: OracleSpecToFutureBinding, reader: jspb.BinaryReader): OracleSpecToFutureBinding;
}

export namespace OracleSpecToFutureBinding {
    export type AsObject = {
        settlementPriceProperty: string,
        tradingTerminationProperty: string,
    }
}

export class InstrumentMetadata extends jspb.Message {
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): InstrumentMetadata;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentMetadata): InstrumentMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentMetadata;
    static deserializeBinaryFromReader(message: InstrumentMetadata, reader: jspb.BinaryReader): InstrumentMetadata;
}

export namespace InstrumentMetadata {
    export type AsObject = {
        tagsList: Array<string>,
    }
}

export class Instrument extends jspb.Message {
    getId(): string;
    setId(value: string): Instrument;
    getCode(): string;
    setCode(value: string): Instrument;
    getName(): string;
    setName(value: string): Instrument;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): InstrumentMetadata | undefined;
    setMetadata(value?: InstrumentMetadata): Instrument;

    hasFuture(): boolean;
    clearFuture(): void;
    getFuture(): Future | undefined;
    setFuture(value?: Future): Instrument;

    getProductCase(): Instrument.ProductCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instrument.AsObject;
    static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instrument;
    static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
    export type AsObject = {
        id: string,
        code: string,
        name: string,
        metadata?: InstrumentMetadata.AsObject,
        future?: Future.AsObject,
    }

    export enum ProductCase {
        PRODUCT_NOT_SET = 0,
        FUTURE = 100,
    }

}

export class LogNormalRiskModel extends jspb.Message {
    getRiskAversionParameter(): number;
    setRiskAversionParameter(value: number): LogNormalRiskModel;
    getTau(): number;
    setTau(value: number): LogNormalRiskModel;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): LogNormalModelParams | undefined;
    setParams(value?: LogNormalModelParams): LogNormalRiskModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogNormalRiskModel.AsObject;
    static toObject(includeInstance: boolean, msg: LogNormalRiskModel): LogNormalRiskModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogNormalRiskModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogNormalRiskModel;
    static deserializeBinaryFromReader(message: LogNormalRiskModel, reader: jspb.BinaryReader): LogNormalRiskModel;
}

export namespace LogNormalRiskModel {
    export type AsObject = {
        riskAversionParameter: number,
        tau: number,
        params?: LogNormalModelParams.AsObject,
    }
}

export class LogNormalModelParams extends jspb.Message {
    getMu(): number;
    setMu(value: number): LogNormalModelParams;
    getR(): number;
    setR(value: number): LogNormalModelParams;
    getSigma(): number;
    setSigma(value: number): LogNormalModelParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogNormalModelParams.AsObject;
    static toObject(includeInstance: boolean, msg: LogNormalModelParams): LogNormalModelParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogNormalModelParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogNormalModelParams;
    static deserializeBinaryFromReader(message: LogNormalModelParams, reader: jspb.BinaryReader): LogNormalModelParams;
}

export namespace LogNormalModelParams {
    export type AsObject = {
        mu: number,
        r: number,
        sigma: number,
    }
}

export class SimpleRiskModel extends jspb.Message {

    hasParams(): boolean;
    clearParams(): void;
    getParams(): SimpleModelParams | undefined;
    setParams(value?: SimpleModelParams): SimpleRiskModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleRiskModel.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleRiskModel): SimpleRiskModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleRiskModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleRiskModel;
    static deserializeBinaryFromReader(message: SimpleRiskModel, reader: jspb.BinaryReader): SimpleRiskModel;
}

export namespace SimpleRiskModel {
    export type AsObject = {
        params?: SimpleModelParams.AsObject,
    }
}

export class SimpleModelParams extends jspb.Message {
    getFactorLong(): number;
    setFactorLong(value: number): SimpleModelParams;
    getFactorShort(): number;
    setFactorShort(value: number): SimpleModelParams;
    getMaxMoveUp(): number;
    setMaxMoveUp(value: number): SimpleModelParams;
    getMinMoveDown(): number;
    setMinMoveDown(value: number): SimpleModelParams;
    getProbabilityOfTrading(): number;
    setProbabilityOfTrading(value: number): SimpleModelParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleModelParams.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleModelParams): SimpleModelParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleModelParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleModelParams;
    static deserializeBinaryFromReader(message: SimpleModelParams, reader: jspb.BinaryReader): SimpleModelParams;
}

export namespace SimpleModelParams {
    export type AsObject = {
        factorLong: number,
        factorShort: number,
        maxMoveUp: number,
        minMoveDown: number,
        probabilityOfTrading: number,
    }
}

export class ScalingFactors extends jspb.Message {
    getSearchLevel(): number;
    setSearchLevel(value: number): ScalingFactors;
    getInitialMargin(): number;
    setInitialMargin(value: number): ScalingFactors;
    getCollateralRelease(): number;
    setCollateralRelease(value: number): ScalingFactors;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalingFactors.AsObject;
    static toObject(includeInstance: boolean, msg: ScalingFactors): ScalingFactors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalingFactors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalingFactors;
    static deserializeBinaryFromReader(message: ScalingFactors, reader: jspb.BinaryReader): ScalingFactors;
}

export namespace ScalingFactors {
    export type AsObject = {
        searchLevel: number,
        initialMargin: number,
        collateralRelease: number,
    }
}

export class MarginCalculator extends jspb.Message {

    hasScalingFactors(): boolean;
    clearScalingFactors(): void;
    getScalingFactors(): ScalingFactors | undefined;
    setScalingFactors(value?: ScalingFactors): MarginCalculator;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarginCalculator.AsObject;
    static toObject(includeInstance: boolean, msg: MarginCalculator): MarginCalculator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarginCalculator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarginCalculator;
    static deserializeBinaryFromReader(message: MarginCalculator, reader: jspb.BinaryReader): MarginCalculator;
}

export namespace MarginCalculator {
    export type AsObject = {
        scalingFactors?: ScalingFactors.AsObject,
    }
}

export class TradableInstrument extends jspb.Message {

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Instrument | undefined;
    setInstrument(value?: Instrument): TradableInstrument;

    hasMarginCalculator(): boolean;
    clearMarginCalculator(): void;
    getMarginCalculator(): MarginCalculator | undefined;
    setMarginCalculator(value?: MarginCalculator): TradableInstrument;

    hasLogNormalRiskModel(): boolean;
    clearLogNormalRiskModel(): void;
    getLogNormalRiskModel(): LogNormalRiskModel | undefined;
    setLogNormalRiskModel(value?: LogNormalRiskModel): TradableInstrument;

    hasSimpleRiskModel(): boolean;
    clearSimpleRiskModel(): void;
    getSimpleRiskModel(): SimpleRiskModel | undefined;
    setSimpleRiskModel(value?: SimpleRiskModel): TradableInstrument;

    getRiskModelCase(): TradableInstrument.RiskModelCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradableInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: TradableInstrument): TradableInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradableInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradableInstrument;
    static deserializeBinaryFromReader(message: TradableInstrument, reader: jspb.BinaryReader): TradableInstrument;
}

export namespace TradableInstrument {
    export type AsObject = {
        instrument?: Instrument.AsObject,
        marginCalculator?: MarginCalculator.AsObject,
        logNormalRiskModel?: LogNormalRiskModel.AsObject,
        simpleRiskModel?: SimpleRiskModel.AsObject,
    }

    export enum RiskModelCase {
        RISK_MODEL_NOT_SET = 0,
        LOG_NORMAL_RISK_MODEL = 100,
        SIMPLE_RISK_MODEL = 101,
    }

}

export class FeeFactors extends jspb.Message {
    getMakerFee(): string;
    setMakerFee(value: string): FeeFactors;
    getInfrastructureFee(): string;
    setInfrastructureFee(value: string): FeeFactors;
    getLiquidityFee(): string;
    setLiquidityFee(value: string): FeeFactors;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeeFactors.AsObject;
    static toObject(includeInstance: boolean, msg: FeeFactors): FeeFactors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeeFactors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeeFactors;
    static deserializeBinaryFromReader(message: FeeFactors, reader: jspb.BinaryReader): FeeFactors;
}

export namespace FeeFactors {
    export type AsObject = {
        makerFee: string,
        infrastructureFee: string,
        liquidityFee: string,
    }
}

export class Fees extends jspb.Message {

    hasFactors(): boolean;
    clearFactors(): void;
    getFactors(): FeeFactors | undefined;
    setFactors(value?: FeeFactors): Fees;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fees.AsObject;
    static toObject(includeInstance: boolean, msg: Fees): Fees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fees;
    static deserializeBinaryFromReader(message: Fees, reader: jspb.BinaryReader): Fees;
}

export namespace Fees {
    export type AsObject = {
        factors?: FeeFactors.AsObject,
    }
}

export class PriceMonitoringTrigger extends jspb.Message {
    getHorizon(): number;
    setHorizon(value: number): PriceMonitoringTrigger;
    getProbability(): number;
    setProbability(value: number): PriceMonitoringTrigger;
    getAuctionExtension(): number;
    setAuctionExtension(value: number): PriceMonitoringTrigger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceMonitoringTrigger.AsObject;
    static toObject(includeInstance: boolean, msg: PriceMonitoringTrigger): PriceMonitoringTrigger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceMonitoringTrigger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceMonitoringTrigger;
    static deserializeBinaryFromReader(message: PriceMonitoringTrigger, reader: jspb.BinaryReader): PriceMonitoringTrigger;
}

export namespace PriceMonitoringTrigger {
    export type AsObject = {
        horizon: number,
        probability: number,
        auctionExtension: number,
    }
}

export class PriceMonitoringParameters extends jspb.Message {
    clearTriggersList(): void;
    getTriggersList(): Array<PriceMonitoringTrigger>;
    setTriggersList(value: Array<PriceMonitoringTrigger>): PriceMonitoringParameters;
    addTriggers(value?: PriceMonitoringTrigger, index?: number): PriceMonitoringTrigger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceMonitoringParameters.AsObject;
    static toObject(includeInstance: boolean, msg: PriceMonitoringParameters): PriceMonitoringParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceMonitoringParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceMonitoringParameters;
    static deserializeBinaryFromReader(message: PriceMonitoringParameters, reader: jspb.BinaryReader): PriceMonitoringParameters;
}

export namespace PriceMonitoringParameters {
    export type AsObject = {
        triggersList: Array<PriceMonitoringTrigger.AsObject>,
    }
}

export class PriceMonitoringSettings extends jspb.Message {

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): PriceMonitoringParameters | undefined;
    setParameters(value?: PriceMonitoringParameters): PriceMonitoringSettings;
    getUpdateFrequency(): number;
    setUpdateFrequency(value: number): PriceMonitoringSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceMonitoringSettings.AsObject;
    static toObject(includeInstance: boolean, msg: PriceMonitoringSettings): PriceMonitoringSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceMonitoringSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceMonitoringSettings;
    static deserializeBinaryFromReader(message: PriceMonitoringSettings, reader: jspb.BinaryReader): PriceMonitoringSettings;
}

export namespace PriceMonitoringSettings {
    export type AsObject = {
        parameters?: PriceMonitoringParameters.AsObject,
        updateFrequency: number,
    }
}

export class LiquidityMonitoringParameters extends jspb.Message {

    hasTargetStakeParameters(): boolean;
    clearTargetStakeParameters(): void;
    getTargetStakeParameters(): TargetStakeParameters | undefined;
    setTargetStakeParameters(value?: TargetStakeParameters): LiquidityMonitoringParameters;
    getTriggeringRatio(): number;
    setTriggeringRatio(value: number): LiquidityMonitoringParameters;
    getAuctionExtension(): number;
    setAuctionExtension(value: number): LiquidityMonitoringParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiquidityMonitoringParameters.AsObject;
    static toObject(includeInstance: boolean, msg: LiquidityMonitoringParameters): LiquidityMonitoringParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiquidityMonitoringParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiquidityMonitoringParameters;
    static deserializeBinaryFromReader(message: LiquidityMonitoringParameters, reader: jspb.BinaryReader): LiquidityMonitoringParameters;
}

export namespace LiquidityMonitoringParameters {
    export type AsObject = {
        targetStakeParameters?: TargetStakeParameters.AsObject,
        triggeringRatio: number,
        auctionExtension: number,
    }
}

export class TargetStakeParameters extends jspb.Message {
    getTimeWindow(): number;
    setTimeWindow(value: number): TargetStakeParameters;
    getScalingFactor(): number;
    setScalingFactor(value: number): TargetStakeParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetStakeParameters.AsObject;
    static toObject(includeInstance: boolean, msg: TargetStakeParameters): TargetStakeParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetStakeParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetStakeParameters;
    static deserializeBinaryFromReader(message: TargetStakeParameters, reader: jspb.BinaryReader): TargetStakeParameters;
}

export namespace TargetStakeParameters {
    export type AsObject = {
        timeWindow: number,
        scalingFactor: number,
    }
}

export class Market extends jspb.Message {
    getId(): string;
    setId(value: string): Market;

    hasTradableInstrument(): boolean;
    clearTradableInstrument(): void;
    getTradableInstrument(): TradableInstrument | undefined;
    setTradableInstrument(value?: TradableInstrument): Market;
    getDecimalPlaces(): number;
    setDecimalPlaces(value: number): Market;

    hasFees(): boolean;
    clearFees(): void;
    getFees(): Fees | undefined;
    setFees(value?: Fees): Market;

    hasOpeningAuction(): boolean;
    clearOpeningAuction(): void;
    getOpeningAuction(): AuctionDuration | undefined;
    setOpeningAuction(value?: AuctionDuration): Market;

    hasContinuous(): boolean;
    clearContinuous(): void;
    getContinuous(): ContinuousTrading | undefined;
    setContinuous(value?: ContinuousTrading): Market;

    hasDiscrete(): boolean;
    clearDiscrete(): void;
    getDiscrete(): DiscreteTrading | undefined;
    setDiscrete(value?: DiscreteTrading): Market;

    hasPriceMonitoringSettings(): boolean;
    clearPriceMonitoringSettings(): void;
    getPriceMonitoringSettings(): PriceMonitoringSettings | undefined;
    setPriceMonitoringSettings(value?: PriceMonitoringSettings): Market;

    hasLiquidityMonitoringParameters(): boolean;
    clearLiquidityMonitoringParameters(): void;
    getLiquidityMonitoringParameters(): LiquidityMonitoringParameters | undefined;
    setLiquidityMonitoringParameters(value?: LiquidityMonitoringParameters): Market;
    getTradingMode(): Market.TradingMode;
    setTradingMode(value: Market.TradingMode): Market;
    getState(): Market.State;
    setState(value: Market.State): Market;

    hasMarketTimestamps(): boolean;
    clearMarketTimestamps(): void;
    getMarketTimestamps(): MarketTimestamps | undefined;
    setMarketTimestamps(value?: MarketTimestamps): Market;

    getTradingModeConfigCase(): Market.TradingModeConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        id: string,
        tradableInstrument?: TradableInstrument.AsObject,
        decimalPlaces: number,
        fees?: Fees.AsObject,
        openingAuction?: AuctionDuration.AsObject,
        continuous?: ContinuousTrading.AsObject,
        discrete?: DiscreteTrading.AsObject,
        priceMonitoringSettings?: PriceMonitoringSettings.AsObject,
        liquidityMonitoringParameters?: LiquidityMonitoringParameters.AsObject,
        tradingMode: Market.TradingMode,
        state: Market.State,
        marketTimestamps?: MarketTimestamps.AsObject,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    STATE_PROPOSED = 1,
    STATE_REJECTED = 2,
    STATE_PENDING = 3,
    STATE_CANCELLED = 4,
    STATE_ACTIVE = 5,
    STATE_SUSPENDED = 6,
    STATE_CLOSED = 7,
    STATE_TRADING_TERMINATED = 8,
    STATE_SETTLED = 9,
    }

    export enum TradingMode {
    TRADING_MODE_UNSPECIFIED = 0,
    TRADING_MODE_CONTINUOUS = 1,
    TRADING_MODE_BATCH_AUCTION = 2,
    TRADING_MODE_OPENING_AUCTION = 3,
    TRADING_MODE_MONITORING_AUCTION = 4,
    }


    export enum TradingModeConfigCase {
        TRADING_MODE_CONFIG_NOT_SET = 0,
        CONTINUOUS = 100,
        DISCRETE = 101,
    }

}

export class MarketTimestamps extends jspb.Message {
    getProposed(): number;
    setProposed(value: number): MarketTimestamps;
    getPending(): number;
    setPending(value: number): MarketTimestamps;
    getOpen(): number;
    setOpen(value: number): MarketTimestamps;
    getClose(): number;
    setClose(value: number): MarketTimestamps;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketTimestamps.AsObject;
    static toObject(includeInstance: boolean, msg: MarketTimestamps): MarketTimestamps.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketTimestamps, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketTimestamps;
    static deserializeBinaryFromReader(message: MarketTimestamps, reader: jspb.BinaryReader): MarketTimestamps;
}

export namespace MarketTimestamps {
    export type AsObject = {
        proposed: number,
        pending: number,
        open: number,
        close: number,
    }
}
