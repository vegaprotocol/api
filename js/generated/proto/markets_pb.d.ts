// package: vega
// file: proto/markets.proto

import * as jspb from "google-protobuf";
import * as github_com_mwitkow_go_proto_validators_validator_pb from "../github.com/mwitkow/go-proto-validators/validator_pb";

export class AuctionDuration extends jspb.Message {
  getDuration(): number;
  setDuration(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

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
  getTicksize(): string;
  setTicksize(value: string): void;

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
    ticksize: string,
  }
}

export class DiscreteTrading extends jspb.Message {
  getDurationns(): number;
  setDurationns(value: number): void;

  getTicksize(): string;
  setTicksize(value: string): void;

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
    durationns: number,
    ticksize: string,
  }
}

export class Future extends jspb.Message {
  getMaturity(): string;
  setMaturity(value: string): void;

  getAsset(): string;
  setAsset(value: string): void;

  hasEthereumevent(): boolean;
  clearEthereumevent(): void;
  getEthereumevent(): EthereumEvent | undefined;
  setEthereumevent(value?: EthereumEvent): void;

  getOracleCase(): Future.OracleCase;
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
    asset: string,
    ethereumevent?: EthereumEvent.AsObject,
  }

  export enum OracleCase {
    ORACLE_NOT_SET = 0,
    ETHEREUMEVENT = 100,
  }
}

export class EthereumEvent extends jspb.Message {
  getContractid(): string;
  setContractid(value: string): void;

  getEvent(): string;
  setEvent(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthereumEvent.AsObject;
  static toObject(includeInstance: boolean, msg: EthereumEvent): EthereumEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthereumEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthereumEvent;
  static deserializeBinaryFromReader(message: EthereumEvent, reader: jspb.BinaryReader): EthereumEvent;
}

export namespace EthereumEvent {
  export type AsObject = {
    contractid: string,
    event: string,
    value: number,
  }
}

export class InstrumentMetadata extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
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
  setId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getQuotename(): string;
  setQuotename(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): InstrumentMetadata | undefined;
  setMetadata(value?: InstrumentMetadata): void;

  getInitialmarkprice(): number;
  setInitialmarkprice(value: number): void;

  hasFuture(): boolean;
  clearFuture(): void;
  getFuture(): Future | undefined;
  setFuture(value?: Future): void;

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
    quotename: string,
    metadata?: InstrumentMetadata.AsObject,
    initialmarkprice: number,
    future?: Future.AsObject,
  }

  export enum ProductCase {
    PRODUCT_NOT_SET = 0,
    FUTURE = 100,
  }
}

export class LogNormalRiskModel extends jspb.Message {
  getRiskaversionparameter(): number;
  setRiskaversionparameter(value: number): void;

  getTau(): number;
  setTau(value: number): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): LogNormalModelParams | undefined;
  setParams(value?: LogNormalModelParams): void;

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
    riskaversionparameter: number,
    tau: number,
    params?: LogNormalModelParams.AsObject,
  }
}

export class LogNormalModelParams extends jspb.Message {
  getMu(): number;
  setMu(value: number): void;

  getR(): number;
  setR(value: number): void;

  getSigma(): number;
  setSigma(value: number): void;

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
  setParams(value?: SimpleModelParams): void;

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
  getFactorlong(): number;
  setFactorlong(value: number): void;

  getFactorshort(): number;
  setFactorshort(value: number): void;

  getMaxmoveup(): number;
  setMaxmoveup(value: number): void;

  getMinmovedown(): number;
  setMinmovedown(value: number): void;

  getProbabilityoftrading(): number;
  setProbabilityoftrading(value: number): void;

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
    factorlong: number,
    factorshort: number,
    maxmoveup: number,
    minmovedown: number,
    probabilityoftrading: number,
  }
}

export class ScalingFactors extends jspb.Message {
  getSearchlevel(): number;
  setSearchlevel(value: number): void;

  getInitialmargin(): number;
  setInitialmargin(value: number): void;

  getCollateralrelease(): number;
  setCollateralrelease(value: number): void;

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
    searchlevel: number,
    initialmargin: number,
    collateralrelease: number,
  }
}

export class MarginCalculator extends jspb.Message {
  hasScalingfactors(): boolean;
  clearScalingfactors(): void;
  getScalingfactors(): ScalingFactors | undefined;
  setScalingfactors(value?: ScalingFactors): void;

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
    scalingfactors?: ScalingFactors.AsObject,
  }
}

export class TradableInstrument extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Instrument | undefined;
  setInstrument(value?: Instrument): void;

  hasMargincalculator(): boolean;
  clearMargincalculator(): void;
  getMargincalculator(): MarginCalculator | undefined;
  setMargincalculator(value?: MarginCalculator): void;

  hasLognormalriskmodel(): boolean;
  clearLognormalriskmodel(): void;
  getLognormalriskmodel(): LogNormalRiskModel | undefined;
  setLognormalriskmodel(value?: LogNormalRiskModel): void;

  hasSimpleriskmodel(): boolean;
  clearSimpleriskmodel(): void;
  getSimpleriskmodel(): SimpleRiskModel | undefined;
  setSimpleriskmodel(value?: SimpleRiskModel): void;

  getRiskmodelCase(): TradableInstrument.RiskmodelCase;
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
    margincalculator?: MarginCalculator.AsObject,
    lognormalriskmodel?: LogNormalRiskModel.AsObject,
    simpleriskmodel?: SimpleRiskModel.AsObject,
  }

  export enum RiskmodelCase {
    RISKMODEL_NOT_SET = 0,
    LOGNORMALRISKMODEL = 100,
    SIMPLERISKMODEL = 101,
  }
}

export class FeeFactors extends jspb.Message {
  getMakerfee(): string;
  setMakerfee(value: string): void;

  getInfrastructurefee(): string;
  setInfrastructurefee(value: string): void;

  getLiquidityfee(): string;
  setLiquidityfee(value: string): void;

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
    makerfee: string,
    infrastructurefee: string,
    liquidityfee: string,
  }
}

export class Fees extends jspb.Message {
  hasFactors(): boolean;
  clearFactors(): void;
  getFactors(): FeeFactors | undefined;
  setFactors(value?: FeeFactors): void;

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
  setHorizon(value: number): void;

  getProbability(): number;
  setProbability(value: number): void;

  getAuctionextension(): number;
  setAuctionextension(value: number): void;

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
    auctionextension: number,
  }
}

export class PriceMonitoringParameters extends jspb.Message {
  clearTriggersList(): void;
  getTriggersList(): Array<PriceMonitoringTrigger>;
  setTriggersList(value: Array<PriceMonitoringTrigger>): void;
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
  setParameters(value?: PriceMonitoringParameters): void;

  getUpdatefrequency(): number;
  setUpdatefrequency(value: number): void;

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
    updatefrequency: number,
  }
}

export class TargetStakeParameters extends jspb.Message {
  getTimewindow(): number;
  setTimewindow(value: number): void;

  getScalingfactor(): number;
  setScalingfactor(value: number): void;

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
    timewindow: number,
    scalingfactor: number,
  }
}

export class Market extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTradableinstrument(): boolean;
  clearTradableinstrument(): void;
  getTradableinstrument(): TradableInstrument | undefined;
  setTradableinstrument(value?: TradableInstrument): void;

  getDecimalplaces(): number;
  setDecimalplaces(value: number): void;

  hasFees(): boolean;
  clearFees(): void;
  getFees(): Fees | undefined;
  setFees(value?: Fees): void;

  hasOpeningauction(): boolean;
  clearOpeningauction(): void;
  getOpeningauction(): AuctionDuration | undefined;
  setOpeningauction(value?: AuctionDuration): void;

  hasContinuous(): boolean;
  clearContinuous(): void;
  getContinuous(): ContinuousTrading | undefined;
  setContinuous(value?: ContinuousTrading): void;

  hasDiscrete(): boolean;
  clearDiscrete(): void;
  getDiscrete(): DiscreteTrading | undefined;
  setDiscrete(value?: DiscreteTrading): void;

  hasPricemonitoringsettings(): boolean;
  clearPricemonitoringsettings(): void;
  getPricemonitoringsettings(): PriceMonitoringSettings | undefined;
  setPricemonitoringsettings(value?: PriceMonitoringSettings): void;

  hasTargetstakeparameters(): boolean;
  clearTargetstakeparameters(): void;
  getTargetstakeparameters(): TargetStakeParameters | undefined;
  setTargetstakeparameters(value?: TargetStakeParameters): void;

  getTradingmodeCase(): Market.TradingmodeCase;
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
    tradableinstrument?: TradableInstrument.AsObject,
    decimalplaces: number,
    fees?: Fees.AsObject,
    openingauction?: AuctionDuration.AsObject,
    continuous?: ContinuousTrading.AsObject,
    discrete?: DiscreteTrading.AsObject,
    pricemonitoringsettings?: PriceMonitoringSettings.AsObject,
    targetstakeparameters?: TargetStakeParameters.AsObject,
  }

  export enum TradingmodeCase {
    TRADINGMODE_NOT_SET = 0,
    CONTINUOUS = 100,
    DISCRETE = 101,
  }
}

