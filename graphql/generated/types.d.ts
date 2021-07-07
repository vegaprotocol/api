export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** An account record */
export type Account = {
  __typename?: 'Account';
  /** Balance as string - current account balance (approx. as balances can be updated several times per second) */
  balance: Scalars['String'];
  /** Asset, the 'currency' */
  asset: Asset;
  /** Account type (General, Margin, etc) */
  type: AccountType;
  /** Market (only relevant to margin accounts) */
  market?: Maybe<Market>;
};

/** The various account types we have (used by collateral) */
export enum AccountType {
  /** Insurance pool account - only for 'system' party */
  Insurance = 'Insurance',
  /** Settlement - only for 'system' party */
  Settlement = 'Settlement',
  /** Margin - The leverage account for traders */
  Margin = 'Margin',
  /** General account - the account containing 'unused' collateral for traders */
  General = 'General',
  /** Infrastructure fee account - the account where all infrastructure fees are collected */
  FeeInfrastructure = 'FeeInfrastructure',
  /** Liquidity fee account - the account where all infrastructure fees are collected */
  FeeLiquidity = 'FeeLiquidity',
  /** LockWithdraw - and account use for party in the process of withdrawing funds */
  LockWithdraw = 'LockWithdraw',
  /** Bond - an account use to maintain MM commitments */
  Bond = 'Bond'
}

/** Represents an asset in vega */
export type Asset = {
  __typename?: 'Asset';
  /** The id of the asset */
  id: Scalars['ID'];
  /** The full name of the asset (e.g: Great British Pound) */
  name: Scalars['String'];
  /** The symbol of the asset (e.g: GBP) */
  symbol: Scalars['String'];
  /** The total supply of the market */
  totalSupply: Scalars['String'];
  /** The precision of the asset */
  decimals: Scalars['Int'];
  /** The min stake to become an lp for any market using this asset for settlement */
  minLpStake: Scalars['String'];
  /** The origin source of the asset (e.g: an erc20 asset) */
  source: AssetSource;
  /** The infrastructure fee account for this asset */
  infrastructureFeeAccount: Account;
};

/** One of the possible asset sources */
export type AssetSource = BuiltinAsset | Erc20;

/**
 * An auction duration is used to configure 3 auction periods:
 * 1. `duration > 0`, `volume == 0`:
 * The auction will last for at least N seconds.
 * 2. `duration == 0`, `volume > 0`:
 * The auction will end once we can close with given traded volume.
 * 3. `duration > 0`, `volume > 0`:
 * The auction will take at least N seconds, but can end sooner if we can trade a certain volume.
 */
export type AuctionDuration = {
  __typename?: 'AuctionDuration';
  /** Duration of the auction in seconds */
  durationSecs: Scalars['Int'];
  /** Target uncrossing trading volume */
  volume: Scalars['Int'];
};

export type AuctionEvent = {
  __typename?: 'AuctionEvent';
  /** the market ID */
  marketId: Scalars['ID'];
  /** event fired because of auction end */
  leave: Scalars['Boolean'];
  /** event related to opening auction */
  openingAuction: Scalars['Boolean'];
  /** RFC3339Nano start time of auction */
  auctionStart: Scalars['String'];
  /** RFC3339Nano optional end time of auction */
  auctionEnd: Scalars['String'];
  /** What triggered the auction */
  trigger: AuctionTrigger;
  /** What, if anything, extended the ongoing auction */
  extensionTrigger?: Maybe<AuctionTrigger>;
};

export enum AuctionTrigger {
  /** Invalid trigger (or no auction) */
  Unspecified = 'Unspecified',
  /** Auction because market is trading FBA */
  Batch = 'Batch',
  /** Opening auction */
  Opening = 'Opening',
  /** Price monitoring */
  Price = 'Price',
  /** Liquidity monitoring */
  Liquidity = 'Liquidity'
}

/** A vega builtin asset, mostly for testing purpose */
export type BuiltinAsset = {
  __typename?: 'BuiltinAsset';
  /** Maximum amount that can be requested by a party through the built-in asset faucet at a time */
  maxFaucetAmountMint: Scalars['String'];
};

/** A vega builtin asset, mostly for testing purpose */
export type BuiltinAssetInput = {
  /** Maximum amount that can be requested by a party through the built-in asset faucet at a time */
  maxFaucetAmountMint: Scalars['String'];
};

export type BusEvent = {
  __typename?: 'BusEvent';
  /** the id for this event */
  eventId: Scalars['ID'];
  /** the block hash */
  block: Scalars['String'];
  /** the type of event we're dealing with */
  type: BusEventType;
  /** the payload - the wrapped event */
  event: Event;
};

export enum BusEventType {
  /** Vega Time has changed */
  TimeUpdate = 'TimeUpdate',
  /** A balance has been transferred between accounts */
  TransferResponses = 'TransferResponses',
  /** A position resolution event has occurred */
  PositionResolution = 'PositionResolution',
  /** An order has been created or updated */
  Order = 'Order',
  /** An account has been updated */
  Account = 'Account',
  /** A party has been updated */
  Party = 'Party',
  /** A trade has been created */
  Trade = 'Trade',
  /** Margin levels have changed for a position */
  MarginLevels = 'MarginLevels',
  /** A governance proposal has been created or updated */
  Proposal = 'Proposal',
  /** A vote has been placed on a governance proposal */
  Vote = 'Vote',
  /** Market data has been updated */
  MarketData = 'MarketData',
  /** Validator nodes signatures for an event */
  NodeSignature = 'NodeSignature',
  /** A position has been closed without sufficient insurance pool balance to cover it */
  LossSocialization = 'LossSocialization',
  /** A position has been settled */
  SettlePosition = 'SettlePosition',
  /** A distressed position has been settled */
  SettleDistressed = 'SettleDistressed',
  /** A new market has been created */
  MarketCreated = 'MarketCreated',
  /** A market has been updated */
  MarketUpdated = 'MarketUpdated',
  /** An asset has been created or update */
  Asset = 'Asset',
  /** A market has progressed by one tick */
  MarketTick = 'MarketTick',
  /** A market has either entered or exited auction */
  Auction = 'Auction',
  /** A risk factor adjustment was made */
  RiskFactor = 'RiskFactor',
  /** A liquidity commitment change occurred */
  LiquidityProvision = 'LiquidityProvision',
  /** Collateral has deposited in to this Vega network via the bridge */
  Deposit = 'Deposit',
  /** Collateral has been withdrawn from this Vega network via the bridge */
  Withdrawal = 'Withdrawal',
  /** An oracle spec has been registered */
  OracleSpec = 'OracleSpec',
  /** constant for market events - mainly used for logging */
  Market = 'Market'
}

/** Candle stick representation of trading */
export type Candle = {
  __typename?: 'Candle';
  /** Unix epoch+nanoseconds for when the candle occurred */
  timestamp: Scalars['String'];
  /** RFC3339Nano formatted date and time for the candle */
  datetime: Scalars['String'];
  /** High price (uint64) */
  high: Scalars['String'];
  /** Low price (uint64) */
  low: Scalars['String'];
  /** Open price (uint64) */
  open: Scalars['String'];
  /** Close price (uint64) */
  close: Scalars['String'];
  /** Volume price (uint64) */
  volume: Scalars['String'];
  /** Interval price (string) */
  interval: Interval;
};

/** Condition describes the condition that must be validated by the */
export type Condition = {
  __typename?: 'Condition';
  /** comparator is the type of comparison to make on the value. */
  operator: ConditionOperator;
  /** value is used by the comparator. */
  value?: Maybe<Scalars['String']>;
};

/** Condition describes the condition that must be validated by the */
export type ConditionInput = {
  /** comparator is the type of comparison to make on the value. */
  operator: ConditionOperator;
  /** value is used by the comparator. */
  value: Scalars['String'];
};

/** Comparator describes the type of comparison. */
export enum ConditionOperator {
  /** Verify if the property values are strictly equal or not. */
  OperatorEquals = 'OperatorEquals',
  /** Verify if the oracle data value is greater than the Condition value. */
  OperatorGreaterThan = 'OperatorGreaterThan',
  /**
   * Verify if the oracle data value is greater than or equal to the Condition
   * value.
   */
  OperatorGreaterThanOrEqual = 'OperatorGreaterThanOrEqual',
  /**  Verify if the oracle data value is less than the Condition value. */
  OperatorLessThan = 'OperatorLessThan',
  /**
   * Verify if the oracle data value is less or equal to than the Condition
   * value.
   */
  OperatorLessThanOrEqual = 'OperatorLessThanOrEqual'
}

/** A mode where Vega tries to execute orders as soon as they are received */
export type ContinuousTrading = {
  __typename?: 'ContinuousTrading';
  /** Size of an increment in price in terms of the quote currency */
  tickSize: Scalars['String'];
};

/** A mode where Vega try to execute order as soon as they are received */
export type ContinuousTradingInput = {
  /** Size of an increment in price in terms of the quote currency. Note this field should not be used and will be ignored */
  tickSize?: Maybe<Scalars['String']>;
};

/** The details of a deposit processed by vega */
export type Deposit = {
  __typename?: 'Deposit';
  /** The Vega internal id of the deposit */
  id: Scalars['ID'];
  /** The PartyID initiating the deposit */
  party: Party;
  /** The amount to be withdrawn */
  amount: Scalars['String'];
  /** The asset to be withdrawn */
  asset: Asset;
  /** The current status of the deposit */
  status: DepositStatus;
  /** RFC3339Nano time at which the deposit was created */
  createdTimestamp: Scalars['String'];
  /** RFC3339Nano time at which the deposit was finalized */
  creditedTimestamp?: Maybe<Scalars['String']>;
  /** Hash of the transaction on the foreign chain */
  txHash?: Maybe<Scalars['String']>;
};

/** The status of a deposit */
export enum DepositStatus {
  /** The deposit is open and being processed by the network */
  Open = 'Open',
  /** The deposit have been cancelled by the network, either because it expired, or something went wrong with the foreign chain */
  Cancelled = 'Cancelled',
  /** The deposit was finalized, it was first valid, the foreign chain has executed it and the network updated all accounts */
  Finalized = 'Finalized'
}

/** Frequent batch auctions trading mode */
export type DiscreteTrading = {
  __typename?: 'DiscreteTrading';
  /** Duration of the discrete trading batch in nanoseconds. Maximum 1 month. */
  duration: Scalars['Int'];
  /** Size of an increment in price in terms of the quote currency */
  tickSize: Scalars['String'];
};

/** Frequent batch auctions trading mode */
export type DiscreteTradingInput = {
  /** Duration of the discrete trading batch in nanoseconds. Maximum 1 month. */
  duration: Scalars['Int'];
  /** Size of an increment in price in terms of the quote currency. Note this field should not be used and will be ignored */
  tickSize?: Maybe<Scalars['String']>;
};

/** An asset originated from an Ethereum ERC20 Token */
export type Erc20 = {
  __typename?: 'ERC20';
  /** The address of the erc20 contract */
  contractAddress: Scalars['String'];
};

/** An asset originated from an Ethereum ERC20 Token */
export type Erc20Input = {
  /** The address of the erc20 contract */
  contractAddress: Scalars['String'];
};

/** All the data related to the approval of a withdrawal from the network */
export type Erc20WithdrawalApproval = {
  __typename?: 'Erc20WithdrawalApproval';
  /** The source asset in the ethereum network */
  assetSource: Scalars['String'];
  /** The amount to be withdrawn */
  amount: Scalars['String'];
  /** Timestamp in seconds for expiry of the approval */
  expiry: Scalars['String'];
  /** The nonce to be used in the request */
  nonce: Scalars['String'];
  /**
   * Signature aggregate from the nodes, in the following format:
   * 0x + sig1 + sig2 + ... + sigN
   */
  signatures: Scalars['String'];
};

/** Specific details for an erc20 withdrawal */
export type Erc20WithdrawalDetails = {
  __typename?: 'Erc20WithdrawalDetails';
  /** The ethereum address of the receiver of the asset funds */
  receiverAddress: Scalars['String'];
};

/** ERC20 specific details to start a withdrawal */
export type Erc20WithdrawalDetailsInput = {
  /** The ethereum address to which the withdrawn funds will be send to */
  receiverAddress: Scalars['String'];
};

/** An Ethereum oracle */
export type EthereumEvent = {
  __typename?: 'EthereumEvent';
  /** The ID of the ethereum contract to use (string) */
  contractId: Scalars['String'];
  /** Name of the Ethereum event to listen to. (string) */
  event: Scalars['String'];
};

/** union type for wrapped events in stream PROPOSAL is mapped to governance data, something to keep in mind */
export type Event = TimeUpdate | MarketEvent | TransferResponses | PositionResolution | Order | Trade | Account | Party | MarginLevels | Proposal | Vote | MarketData | NodeSignature | LossSocialization | SettlePosition | Market | Asset | MarketTick | SettleDistressed | AuctionEvent | RiskFactor | Deposit | Withdrawal | OracleSpec | LiquidityProvision;

/** The factors applied to calculate the fees */
export type FeeFactors = {
  __typename?: 'FeeFactors';
  /** The factor applied to calculate MakerFees, a non-negative float */
  makerFee: Scalars['String'];
  /** The factor applied to calculate InfrastructureFees, a non-negative float */
  infrastructureFee: Scalars['String'];
  /** The factor applied to calculate LiquidityFees, a non-negative float */
  liquidityFee: Scalars['String'];
};

/** The fees applicable to a market */
export type Fees = {
  __typename?: 'Fees';
  /** The factors used to calculate the different fees */
  factors: FeeFactors;
};

/**
 * Filter describes the conditions under which an oracle data is considered of
 * interest or not.
 */
export type Filter = {
  __typename?: 'Filter';
  /** key is the oracle data property key targeted by the filter. */
  key: PropertyKey;
  /**
   * conditions are the conditions that should be matched by the data to be
   * considered of interest.
   */
  conditions?: Maybe<Array<Condition>>;
};

/**
 * Filter describes the conditions under which an oracle data is considered of
 * interest or not.
 */
export type FilterInput = {
  /** key is the oracle data property key targeted by the filter. */
  key: PropertyKeyInput;
  /**
   * conditions are the conditions that should be matched by the data to be
   * considered of interest.
   */
  conditions?: Maybe<Array<ConditionInput>>;
};

/** A Future product */
export type Future = {
  __typename?: 'Future';
  /** RFC3339Nano maturity date of the product */
  maturity: Scalars['String'];
  /** The name of the asset (string) */
  settlementAsset: Asset;
  /** String representing the quote (e.g. BTCUSD -> USD is quote) */
  quoteName: Scalars['String'];
  /** The oracle spec describing the oracle data of interest. */
  oracleSpec: OracleSpec;
  /** The binding between the oracle spec and the settlement price */
  oracleSpecBinding: OracleSpecToFutureBinding;
};

export type FutureProduct = {
  __typename?: 'FutureProduct';
  /** RFC3339Nano time when the future products matures */
  maturity: Scalars['String'];
  /** Product asset ID */
  settlementAsset: Asset;
  /** String representing the quote (e.g. BTCUSD -> USD is quote) */
  quoteName: Scalars['String'];
  /** Describes the oracle data that an instrument wants to get from the oracle engine. */
  oracleSpec: OracleSpecConfiguration;
  /**
   * OracleSpecToFutureBinding tells on which property oracle data should be
   * used as settlement price.
   */
  oracleSpecBinding: OracleSpecToFutureBinding;
};

/** Future product configuration */
export type FutureProductInput = {
  /** Future product maturity (ISO8601/RFC3339 timestamp) */
  maturity: Scalars['String'];
  /** Product asset name */
  settlementAsset: Scalars['String'];
  /** String representing the quote (e.g. BTCUSD -> USD is quote) */
  quoteName: Scalars['String'];
  /** The oracle spec describing the oracle data of interest. */
  oracleSpec: OracleSpecConfigurationInput;
  /** The binding between the oracle spec and the settlement price */
  oracleSpecBinding: OracleSpecToFutureBindingInput;
};

/** Describe something that can be traded on Vega */
export type Instrument = {
  __typename?: 'Instrument';
  /** Uniquely identify an instrument accrods all instruments available on Vega (string) */
  id: Scalars['String'];
  /** A short non necessarily unique code used to easily describe the instrument (e.g: FX:BTCUSD/DEC18) (string) */
  code: Scalars['String'];
  /** Full and fairly descriptive name for the instrument */
  name: Scalars['String'];
  /** Metadata for this instrument */
  metadata: InstrumentMetadata;
  /** A reference to or instance of a fully specified product, including all required product parameters for that product (Product union) */
  product: Product;
};

export type InstrumentConfiguration = {
  __typename?: 'InstrumentConfiguration';
  /** Full and fairly descriptive name for the instrument */
  name: Scalars['String'];
  /** A short non necessarily unique code used to easily describe the instrument (e.g: FX:BTCUSD/DEC18) */
  code: Scalars['String'];
  /** Future product specification */
  futureProduct?: Maybe<FutureProduct>;
};

export type InstrumentConfigurationInput = {
  /** Full and fairly descriptive name for the instrument */
  name: Scalars['String'];
  /** A short non necessarily unique code used to easily describe the instrument (e.g: FX:BTCUSD/DEC18) */
  code: Scalars['String'];
  /** Future product specification */
  futureProduct?: Maybe<FutureProductInput>;
};

/** A set of metadata to associate to an instrument */
export type InstrumentMetadata = {
  __typename?: 'InstrumentMetadata';
  /** An arbitrary list of tags to associated to associate to the Instrument (string list) */
  tags?: Maybe<Array<Scalars['String']>>;
};

/** The interval for trade candles when subscribing via VEGA graphql, default is I15M */
export enum Interval {
  /** 1 minute interval */
  I1M = 'I1M',
  /** 5 minute interval */
  I5M = 'I5M',
  /** 15 minute interval (default) */
  I15M = 'I15M',
  /** 1 hour interval */
  I1H = 'I1H',
  /** 6 hour interval */
  I6H = 'I6H',
  /** 1 day interval */
  I1D = 'I1D'
}

export type LedgerEntry = {
  __typename?: 'LedgerEntry';
  /** account from which the asset was taken */
  fromAccount: Scalars['String'];
  /** account to which the balance was transferred */
  toAccount: Scalars['String'];
  /** the amount transferred */
  amount: Scalars['Int'];
  /** The transfer reference */
  reference: Scalars['String'];
  /** Type of ledger entry */
  type: Scalars['String'];
  /** RFC3339Nano time at which the transfer was made */
  timestamp: Scalars['String'];
};

/** Configuration of a market liquidity monitoring parameters */
export type LiquidityMonitoringParameters = {
  __typename?: 'LiquidityMonitoringParameters';
  /** Specifies parameters related to target stake calculation */
  targetStakeParameters: TargetStakeParameters;
  /** Specifies the triggering ratio for entering liquidity auction */
  triggeringRatio: Scalars['Float'];
};

/** A special order type for liquidity providers */
export type LiquidityOrder = {
  __typename?: 'LiquidityOrder';
  /** The value to which this order is tied */
  reference: PeggedReference;
  /** The proportion of the commitment allocted to this order */
  proportion: Scalars['Int'];
  /** Offset from the pegged reference */
  offset: Scalars['Int'];
};

/** A special order type for liquidity providers */
export type LiquidityOrderInput = {
  /** The value to which this order is tied */
  reference: PeggedReference;
  /** The proportion of the commitment allocted to this order */
  proportion: Scalars['Int'];
  /** Offset from the pegged reference */
  offset: Scalars['Int'];
};

export type LiquidityOrderReference = {
  __typename?: 'LiquidityOrderReference';
  /** The id of the pegged order generated to fulfill this commitment */
  order?: Maybe<Order>;
  /** The liquidity order */
  liquidityOrder: LiquidityOrder;
};

/** The equity like share of liquidity fee for each liquidity provider */
export type LiquidityProviderFeeShare = {
  __typename?: 'LiquidityProviderFeeShare';
  /** The liquidity provider party id */
  party: Party;
  /** The share own by this liquidity provider (float) */
  equityLikeShare: Scalars['String'];
  /** the average entry valuation of the liqidity provider for the market */
  averageEntryValuation: Scalars['String'];
};

/** The command to be sent to the chain for a liquidity provision submission */
export type LiquidityProvision = {
  __typename?: 'LiquidityProvision';
  /** Unique identifier for the order (set by the system after consensus) */
  id?: Maybe<Scalars['ID']>;
  /** The Id of the party making this commitment */
  party: Party;
  /** When the liquidity provision was initially created (formatted RFC3339) */
  createdAt: Scalars['String'];
  /** RFC3339Nano time of when the liquidity provision was updated */
  updatedAt?: Maybe<Scalars['String']>;
  /** Market identifier for the order */
  market: Market;
  /** Specified as a unitless number that represents the amount of settlement asset of the market. */
  commitmentAmount: Scalars['Int'];
  /** nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per setting fees and rewarding liquidity providers. */
  fee: Scalars['String'];
  /** a set of liquidity sell orders to meet the liquidity provision obligation, see MM orders spec. */
  sells: Array<LiquidityOrderReference>;
  /** a set of liquidity buy orders to meet the liquidity provision obligation, see MM orders spec. */
  buys: Array<LiquidityOrderReference>;
  /** The version of this LiquidityProvision */
  version: Scalars['String'];
  /** The current status of this liquidity provision */
  status: LiquidityProvisionStatus;
  /** A reference for the orders created out of this Liquidity provision */
  reference?: Maybe<Scalars['String']>;
};

/** Status of a liquidity provision order */
export enum LiquidityProvisionStatus {
  /** An active liquidity provision */
  Active = 'Active',
  /** A liquidity provision stopped by the network */
  Stopped = 'Stopped',
  /** A Cancelled Liquidity provision */
  Cancelled = 'Cancelled',
  /** A liquidity provision was invalid and got rejected */
  Rejected = 'Rejected',
  /** The liquidity provision is valid and accepted by network, but orders aren't deployed */
  Undeployed = 'Undeployed',
  /**
   * The liquidity provision is valid and accepted by network, but orders aren't deployed.
   * but have never been deployed. I when it's possible to deploy them for the first time
   * margin check fails, then they will be cancelled without any penalties.
   */
  Pending = 'Pending'
}

/** Parameters for the log normal risk model */
export type LogNormalModelParams = {
  __typename?: 'LogNormalModelParams';
  /** mu parameter */
  mu: Scalars['Float'];
  /** r parameter */
  r: Scalars['Float'];
  /** sigma parameter */
  sigma: Scalars['Float'];
};

export type LogNormalModelParamsInput = {
  /** mu parameter */
  mu: Scalars['Float'];
  /** r parameter */
  r: Scalars['Float'];
  /** sigma parameter */
  sigma: Scalars['Float'];
};

/** A type of risk model for futures trading */
export type LogNormalRiskModel = {
  __typename?: 'LogNormalRiskModel';
  /** Lambda parameter of the risk model */
  riskAversionParameter: Scalars['Float'];
  /** Tau parameter of the risk model */
  tau: Scalars['Float'];
  /** Params for the log normal risk model */
  params: LogNormalModelParams;
};

export type LogNormalRiskModelInput = {
  /** Lambda parameter of the risk model */
  riskAversionParameter: Scalars['Float'];
  /** Tau parameter of the risk model */
  tau: Scalars['Float'];
  /** Params for the log normal risk model */
  params: LogNormalModelParamsInput;
};

export type LossSocialization = {
  __typename?: 'LossSocialization';
  /** the market ID where loss socialization happened */
  marketId: Scalars['ID'];
  /** the party that was part of the loss socialization */
  partyId: Scalars['ID'];
  /** the amount lost */
  amount: Scalars['Int'];
};

export type MarginCalculator = {
  __typename?: 'MarginCalculator';
  /** The scaling factors that will be used for margin calculation */
  scalingFactors: ScalingFactors;
};

/** Margins for a given a trader */
export type MarginLevels = {
  __typename?: 'MarginLevels';
  /** market in which the margin is required for this trader */
  market: Market;
  /** asset for the current margins */
  asset: Asset;
  /** id of the trader for this margin */
  party: Party;
  /** minimal margin for the position to be maintained in the network (unsigned int actually) */
  maintenanceLevel: Scalars['String'];
  /** if the margin is between maintenance and search, the network will initiate a collateral search (unsigned int actually) */
  searchLevel: Scalars['String'];
  /** this is the minimal margin required for a trader to place a new order on the network (unsigned int actually) */
  initialLevel: Scalars['String'];
  /**
   * If the margin of the trader is greater than this level, then collateral will be released from the margin account into
   * the general account of the trader for the given asset.
   */
  collateralReleaseLevel: Scalars['String'];
  /** RFC3339Nano time from at which this margin level was relevant */
  timestamp: Scalars['String'];
};

/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type Market = {
  __typename?: 'Market';
  /** Market ID */
  id: Scalars['ID'];
  /** Market full name */
  name: Scalars['String'];
  /** Fees related data */
  fees: Fees;
  /** An instance of or reference to a tradable instrument. */
  tradableInstrument: TradableInstrument;
  /** Definitions and required configuration for the trading mode */
  tradingModeConfig: TradingMode;
  /**
   * decimalPlaces indicates the number of decimal places that an integer must be shifted by in order to get a correct
   * number denominated in the currency of the Market. (uint64)
   *
   * Examples:
   * Currency     Balance  decimalPlaces  Real Balance
   * GBP              100              0       GBP 100
   * GBP              100              2       GBP   1.00
   * GBP              100              4       GBP   0.01
   * GBP                1              4       GBP   0.0001   (  0.01p  )
   *
   * GBX (pence)      100              0       GBP   1.00     (100p     )
   * GBX (pence)      100              2       GBP   0.01     (  1p     )
   * GBX (pence)      100              4       GBP   0.0001   (  0.01p  )
   * GBX (pence)        1              4       GBP   0.000001 (  0.0001p)
   */
  decimalPlaces: Scalars['Int'];
  /**
   * Auction duration specifies how long the opening auction will run (minimum
   * duration and optionally a minimum traded volume).
   */
  openingAuction: AuctionDuration;
  /** Price monitoring settings for the market */
  priceMonitoringSettings: PriceMonitoringSettings;
  /** Liquidity monitoring parameters for the market */
  liquidityMonitoringParameters: LiquidityMonitoringParameters;
  /** Current mode of execution of the market */
  tradingMode: MarketTradingMode;
  /** Current state of the market */
  state: MarketState;
  /** The proposal which initiated this market */
  proposal?: Maybe<Proposal>;
  /** Orders on a market */
  orders?: Maybe<Array<Order>>;
  /** Get account for a party or market */
  accounts?: Maybe<Array<Account>>;
  /** Trades on a market */
  trades?: Maybe<Array<Trade>>;
  /** Current depth on the orderbook for this market */
  depth: MarketDepth;
  /** Candles on a market, for the 'last' n candles, at 'interval' seconds as specified by params */
  candles?: Maybe<Array<Maybe<Candle>>>;
  /** marketData for the given market */
  data?: Maybe<MarketData>;
  /** The list of the liquidity provision commitment for this market */
  liquidityProvisions?: Maybe<Array<LiquidityProvision>>;
  /** timestamps for state changes in the market */
  marketTimestamps: MarketTimestamps;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketOrdersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketAccountsArgs = {
  partyId?: Maybe<Scalars['ID']>;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketTradesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketDepthArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketCandlesArgs = {
  since: Scalars['String'];
  interval: Interval;
};


/** Represents a product & associated parameters that can be traded on Vega, has an associated OrderBook and Trade history */
export type MarketLiquidityProvisionsArgs = {
  party?: Maybe<Scalars['String']>;
};

/** Live data of a Market */
export type MarketData = {
  __typename?: 'MarketData';
  /** market id of the associated mark price */
  market: Market;
  /** the mark price (actually an unsgined int) */
  markPrice: Scalars['String'];
  /** the highest price level on an order book for buy orders. */
  bestBidPrice: Scalars['String'];
  /** the aggregated volume being bid at the best bid price. */
  bestBidVolume: Scalars['String'];
  /** the lowest price level on an order book for offer orders. */
  bestOfferPrice: Scalars['String'];
  /** the aggregated volume being offered at the best offer price. */
  bestOfferVolume: Scalars['String'];
  /** the highest price level on an order book for buy orders not including pegged orders. */
  bestStaticBidPrice: Scalars['String'];
  /** the aggregated volume being offered at the best static bid price, excluding pegged orders */
  bestStaticBidVolume: Scalars['String'];
  /** the lowest price level on an order book for offer orders not including pegged orders. */
  bestStaticOfferPrice: Scalars['String'];
  /** the aggregated volume being offered at the best static offer price, excluding pegged orders. */
  bestStaticOfferVolume: Scalars['String'];
  /** the arithmetic average of the best bid price and best offer price. */
  midPrice: Scalars['String'];
  /** the arithmetic average of the best static bid price and best static offer price */
  staticMidPrice: Scalars['String'];
  /** RFC3339Nano time at which this market price was releavant */
  timestamp: Scalars['String'];
  /** the sum of the size of all positions greater than 0. */
  openInterest: Scalars['String'];
  /** RFC3339Nano time at which the auction will stop (null if not in auction mode) */
  auctionEnd?: Maybe<Scalars['String']>;
  /** RFC3339Nano time at which the next auction will start (null if none is scheduled) */
  auctionStart?: Maybe<Scalars['String']>;
  /** indicative price if the auction ended now, 0 if not in auction mode */
  indicativePrice: Scalars['String'];
  /** indicative volume if the auction ended now, 0 if not in auction mode */
  indicativeVolume: Scalars['String'];
  /** what state the market is in (auction, continuous etc) */
  marketTradingMode: MarketTradingMode;
  /** what triggered an auction (if an auction was started) */
  trigger: AuctionTrigger;
  /** what extended the ongoing auction (if an auction was extended) */
  extensionTrigger: AuctionTrigger;
  /** the amount of stake targeted for this market */
  targetStake?: Maybe<Scalars['String']>;
  /** the supplied stake for the market */
  suppliedStake?: Maybe<Scalars['String']>;
  /** The liquidity commitments for a given market */
  commitments: MarketDataCommitments;
  /** A list of valid price ranges per associated trigger */
  priceMonitoringBounds?: Maybe<Array<PriceMonitoringBounds>>;
  /** the market value proxy */
  marketValueProxy: Scalars['String'];
  /** the equity like share of liquidity fee for each liquidity provider */
  liquidityProviderFeeShare?: Maybe<Array<LiquidityProviderFeeShare>>;
};

/** The MM commitments for this market */
export type MarketDataCommitments = {
  __typename?: 'MarketDataCommitments';
  /** a set of liquidity sell orders to meet the liquidity provision obligation, see MM orders spec. */
  sells?: Maybe<Array<LiquidityOrderReference>>;
  /** a set of liquidity buy orders to meet the liquidity provision obligation, see MM orders spec. */
  buys?: Maybe<Array<LiquidityOrderReference>>;
};

/**
 * Market Depth is a measure of the number of open buy and sell orders for a security or currency at different prices.
 * The depth of market measure provides an indication of the liquidity and depth for the instrument.
 */
export type MarketDepth = {
  __typename?: 'MarketDepth';
  /** Market id */
  market: Market;
  /** Buy side price levels (if available) */
  buy?: Maybe<Array<PriceLevel>>;
  /** Sell side price levels (if available) */
  sell?: Maybe<Array<PriceLevel>>;
  /** Last trade for the given market (if available) */
  lastTrade?: Maybe<Trade>;
  /** Sequence number for the current snapshot of the market depth */
  sequenceNumber: Scalars['String'];
};

/**
 * Market Depth Update is a delta to the current market depth which can be used to update the
 * market depth structure to keep it correct
 */
export type MarketDepthUpdate = {
  __typename?: 'MarketDepthUpdate';
  /** Market id */
  market: Market;
  /** Buy side price levels (if available) */
  buy?: Maybe<Array<PriceLevel>>;
  /** Sell side price levels (if available) */
  sell?: Maybe<Array<PriceLevel>>;
  /** Sequence number for the current snapshot of the market depth */
  sequenceNumber: Scalars['String'];
};

export type MarketEvent = {
  __typename?: 'MarketEvent';
  /** the market ID */
  marketId: Scalars['ID'];
  /** the message - market events are used for logging */
  payload: Scalars['String'];
};

/** The current state of a market */
export enum MarketState {
  /** The Governance proposal valid and accepted */
  Proposed = 'Proposed',
  /** Outcome of governance votes is to reject the market */
  Rejected = 'Rejected',
  /** Governance vote passes/wins */
  Pending = 'Pending',
  /**
   * Market triggers cancellation condition or governance
   * votes to close before market becomes Active
   */
  Cancelled = 'Cancelled',
  /** Enactment date reached and usual auction exit checks pass */
  Active = 'Active',
  /** Price monitoring or liquidity monitoring trigger */
  Suspended = 'Suspended',
  /** Governance vote (to close) */
  Closed = 'Closed',
  /**
   * Defined by the product (i.e. from a product parameter,
   * specified in market definition, giving close date/time)
   */
  TradingTerminated = 'TradingTerminated',
  /** Settlement triggered and completed as defined by product */
  Settled = 'Settled'
}

export type MarketTick = {
  __typename?: 'MarketTick';
  /** the market ID */
  marketId: Scalars['ID'];
  /** the block time */
  time: Scalars['String'];
};

/** timestamps for when the market changes state */
export type MarketTimestamps = {
  __typename?: 'MarketTimestamps';
  /** Time when the market is first proposed */
  proposed?: Maybe<Scalars['String']>;
  /** Time when the market has been voted in and waiting to be created */
  pending?: Maybe<Scalars['String']>;
  /** Time when the market is open and ready to accept trades */
  open?: Maybe<Scalars['String']>;
  /** Time when the market is closed */
  close?: Maybe<Scalars['String']>;
};

/** What market trading mode are we in */
export enum MarketTradingMode {
  /** Continuous trading where orders are processed and potentially matched on arrival */
  Continuous = 'Continuous',
  /** Auction trading where orders are uncrossed at the end of the opening auction period */
  OpeningAuction = 'OpeningAuction',
  /** Auction as normal trading mode for the market, where orders are uncrossed periodically */
  BatchAuction = 'BatchAuction',
  /** Auction triggered by price/liquidity monitoring */
  MonitoringAuction = 'MonitoringAuction'
}

/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Send a submit order request to be prepared, and returns a blob of the transaction to submit.
   * The OrderSubmit data is validated. Price and expiration will be converted to uint64 internally.
   */
  prepareOrderSubmit: PreparedSubmitOrder;
  /**
   * Send a cancel order request to be prepared. Returns a pending order + blob of the transaction to submit.
   * The data is verified. The response can be signed and submitted through the submitTransaction mutation.
   */
  prepareOrderCancel: PreparedCancelOrder;
  /**
   * Send an amend order request to be prepared. Returns a pending order + blob of the transaction to submit.
   * The data is verified. The response can be signed and submitted through the submitTransaction mutation.
   */
  prepareOrderAmend: PreparedAmendOrder;
  /**
   * Prepare a proposal so it can be sent into the network.
   * Returns a pending proposal along with a transaction blob ready for submission.
   * The data is verified. The response can be signed and submitted through the submitTransaction mutation.
   */
  prepareProposal: PreparedProposal;
  /**
   * Prepare a vote so it can be signed and submitted.
   * Returns a pending vote with a transaction blob for signing.
   * No validation other than the vote value being correct is done.
   */
  prepareVote: PreparedVote;
  /**
   * Prepare a withdrawal so it can be signed and submitted.
   * Returns a pending withdrawSubmission with a transaction blob for signing.
   */
  prepareWithdrawal: PreparedWithdrawal;
  /**
   * Submit a new, signed, transaction to the VEGA network. This transaction will not be executed immediately.
   * It validates the signature, and sends the transaction out for consensus
   */
  submitTransaction: TransactionSubmitted;
  /** Prepare a Liquidity provision order so it can be signed and submitted */
  prepareLiquidityProvision: PreparedLiquidityProvision;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareOrderSubmitArgs = {
  marketId: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  side: Side;
  timeInForce: OrderTimeInForce;
  expiration?: Maybe<Scalars['String']>;
  type: OrderType;
  reference?: Maybe<Scalars['String']>;
  peggedOrder?: Maybe<PeggedOrderInput>;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareOrderCancelArgs = {
  id?: Maybe<Scalars['ID']>;
  marketId?: Maybe<Scalars['ID']>;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareOrderAmendArgs = {
  id: Scalars['ID'];
  price: Scalars['String'];
  sizeDelta: Scalars['String'];
  expiration?: Maybe<Scalars['String']>;
  timeInForce: OrderTimeInForce;
  peggedReference?: Maybe<PeggedReference>;
  peggedOffset?: Maybe<Scalars['String']>;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareProposalArgs = {
  partyId: Scalars['ID'];
  reference?: Maybe<Scalars['String']>;
  proposalTerms: ProposalTermsInput;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareVoteArgs = {
  value: VoteValue;
  partyId: Scalars['ID'];
  proposalId: Scalars['ID'];
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareWithdrawalArgs = {
  amount: Scalars['String'];
  asset: Scalars['String'];
  erc20Details?: Maybe<Erc20WithdrawalDetailsInput>;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationSubmitTransactionArgs = {
  data: Scalars['String'];
  sig: SignatureInput;
  type?: Maybe<SubmitTransactionType>;
};


/** Mutations are similar to GraphQL queries, however they allow a caller to change or mutate data. */
export type MutationPrepareLiquidityProvisionArgs = {
  marketId: Scalars['ID'];
  commitmentAmount: Scalars['Int'];
  fee: Scalars['String'];
  sells: Array<LiquidityOrderInput>;
  buys: Array<LiquidityOrderInput>;
  reference?: Maybe<Scalars['String']>;
};

/** Representation of a network parameter */
export type NetworkParameter = {
  __typename?: 'NetworkParameter';
  /** The name of the network parameter */
  key: Scalars['String'];
  /** The value of the network parameter */
  value: Scalars['String'];
};

/** Representation of a network parameter */
export type NetworkParameterInput = {
  /** The name of the network parameter */
  key: Scalars['String'];
  /** The value of the network parameter */
  value: Scalars['String'];
};

/** A new asset proposal change */
export type NewAsset = {
  __typename?: 'NewAsset';
  /** The full name of the asset (e.g: Great British Pound) */
  name: Scalars['String'];
  /** The symbol of the asset (e.g: GBP) */
  symbol: Scalars['String'];
  /** The total supply of the market */
  totalSupply: Scalars['String'];
  /** The precision of the asset */
  decimals: Scalars['Int'];
  /** The min stake to become an lp for any market using this asset for settlement */
  minLpStake: Scalars['String'];
  /** the source of the new Asset */
  source: AssetSource;
};

/** A new asset to be added into vega */
export type NewAssetInput = {
  /** The full name of the asset (e.g: Great British Pound) */
  name: Scalars['String'];
  /** The symbol of the asset (e.g: GBP) */
  symbol: Scalars['String'];
  /** The total supply of the market */
  totalSupply: Scalars['String'];
  /** The precision of the asset */
  decimals: Scalars['Int'];
  /** The min stake to become an lp for any market using this asset for settlement */
  minLpStake: Scalars['String'];
  /** A new builtin assed to be created */
  builtinAsset?: Maybe<BuiltinAssetInput>;
  /** A new ERC20 asset to be created */
  erc20?: Maybe<Erc20Input>;
};

export type NewMarket = {
  __typename?: 'NewMarket';
  /** New market instrument configuration */
  instrument: InstrumentConfiguration;
  /** Decimal places used for the new market */
  decimalPlaces: Scalars['Int'];
  /** New market risk configuration */
  riskParameters: RiskModel;
  /** Metadata for this instrument, tags */
  metadata?: Maybe<Array<Scalars['String']>>;
  /** Trading mode */
  tradingMode: TradingMode;
  /** The liquidity commitment submitted with the new market */
  commitment?: Maybe<NewMarketCommitment>;
};

/** A commitment of liquidity to be made by the party which proposes a market */
export type NewMarketCommitment = {
  __typename?: 'NewMarketCommitment';
  /** Specified as a unitless number that represents the amount of settlement asset of the market */
  commitmentAmount: Scalars['String'];
  /**
   * Nominated liquidity fee factor, which is an input to the calculation of
   * taker fees on the market, as per setting fees and rewarding liquidity provider
   */
  fee: Scalars['String'];
  /** A set of liquidity sell orders to meet the liquidity provision obligation */
  sells?: Maybe<Array<LiquidityOrder>>;
  /** A set of liquidity buy orders to meet the liquidity provision obligation */
  buys?: Maybe<Array<LiquidityOrder>>;
  /** A reference to be associated to all orders created from this commitment */
  reference?: Maybe<Scalars['String']>;
};

/** A commitment of liquidity to be made by the party which proposes a market */
export type NewMarketCommitmentInput = {
  /** Specified as a unitless number that represents the amount of settlement asset of the market */
  commitmentAmount: Scalars['String'];
  /**
   * Nominated liquidity fee factor, which is an input to the calculation of
   * taker fees on the market, as per setting fees and rewarding liquidity provider
   */
  fee: Scalars['String'];
  /** A set of liquidity sell orders to meet the liquidity provision obligation */
  sells?: Maybe<Array<LiquidityOrderInput>>;
  /** A set of liquidity buy orders to meet the liquidity provision obligation */
  buys?: Maybe<Array<LiquidityOrderInput>>;
  /** A reference to be associated to all orders created from this commitment */
  reference?: Maybe<Scalars['String']>;
};

/** Allows creating new markets on the network */
export type NewMarketInput = {
  /** New market instrument configuration */
  instrument: InstrumentConfigurationInput;
  /** Decimal places used for the new market */
  decimalPlaces: Scalars['Int'];
  /** New market risk configuration */
  riskParameters: RiskParametersInput;
  /** Metadata for this instrument, tags */
  metadata?: Maybe<Array<Scalars['String']>>;
  /** Price monitoring configuration */
  priceMonitoringParameters?: Maybe<PriceMonitoringParametersInput>;
  /** A mode where Vega try to execute order as soon as they are received. Valid only if discreteTrading is not set */
  continuousTrading?: Maybe<ContinuousTradingInput>;
  /** Frequent batch auctions trading mode. Valid only if continuousTrading is not set */
  discreteTrading?: Maybe<DiscreteTradingInput>;
  /** The liquidity commitment submitted with the new market */
  commitment?: Maybe<NewMarketCommitmentInput>;
};

/** Represents a signature for the approval of a resource from a validator */
export type NodeSignature = {
  __typename?: 'NodeSignature';
  /** The id of the resource being signed for */
  id: Scalars['ID'];
  /** The signature, as base64 encoding */
  signature?: Maybe<Scalars['String']>;
  /** The kind of signature this is (e.g: withdrawal, new asset, etc) */
  kind?: Maybe<NodeSignatureKind>;
};

/** Represents the type signature provided by a node */
export enum NodeSignatureKind {
  /** A signature for proposing a new asset into the network */
  AssetNew = 'AssetNew',
  /** A signature for allowing a withdrawal of funds */
  AssetWithdrawal = 'AssetWithdrawal'
}

export type Oracle = EthereumEvent;

/** An oracle data contains the data sent by an oracle */
export type OracleData = {
  __typename?: 'OracleData';
  /** pubKeys is the list of public keys that signed the data */
  pubKeys?: Maybe<Array<Scalars['String']>>;
  /** data contains all the properties send by an oracle */
  data?: Maybe<Array<Property>>;
};

/**
 * An oracle spec describe the oracle data that a product (or a risk model)
 * wants to get from the oracle engine.
 */
export type OracleSpec = {
  __typename?: 'OracleSpec';
  /** id is a hash generated from the OracleSpec data. */
  id: Scalars['String'];
  /** RFC3339Nano creation date time */
  createdAt: Scalars['String'];
  /** RFC3339Nano last updated timestamp */
  updatedAt?: Maybe<Scalars['String']>;
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys?: Maybe<Array<Scalars['String']>>;
  /**
   * filters describes which oracle data are considered of interest or not for
   * the product (or the risk model).
   */
  filters?: Maybe<Array<Filter>>;
  /** status describes the status of the oracle spec */
  status: OracleSpecStatus;
  /** data list all the oracle data broadcast to this spec */
  data?: Maybe<Array<OracleData>>;
};

/**
 * An oracle spec describe the oracle data that an instrument wants to get from the
 * oracle engine.
 */
export type OracleSpecConfiguration = {
  __typename?: 'OracleSpecConfiguration';
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys?: Maybe<Array<Scalars['String']>>;
  /**
   * filters describes which oracle data are considered of interest or not for
   * the product (or the risk model).
   */
  filters?: Maybe<Array<Filter>>;
};

/**
 * An oracle spec describe the oracle data that a product (or a risk model)
 * wants to get from the oracle engine.
 */
export type OracleSpecConfigurationInput = {
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys?: Maybe<Array<Scalars['String']>>;
  /**
   * filters describes which oracle data are considered of interest or not for
   * the product (or the risk model).
   */
  filters?: Maybe<Array<FilterInput>>;
};

/** Status describe the status of the oracle spec */
export enum OracleSpecStatus {
  /** StatusActive describes an active oracle spec. */
  StatusActive = 'StatusActive',
  /**
   * StatusUnused describes an oracle spec that is not listening to data
   * anymore.
   */
  StatusUnused = 'StatusUnused'
}

/**
 * OracleSpecToFutureBinding tells on which property oracle data should be
 * used as settlement price.
 */
export type OracleSpecToFutureBinding = {
  __typename?: 'OracleSpecToFutureBinding';
  settlementPriceProperty: Scalars['String'];
};

/**
 * OracleSpecToFutureBindingInput tells on which property oracle data should be
 * used as settlement price.
 */
export type OracleSpecToFutureBindingInput = {
  settlementPriceProperty: Scalars['String'];
};

/** An order in Vega, if active it will be on the OrderBook for the market */
export type Order = {
  __typename?: 'Order';
  /** Hash of the order data */
  id: Scalars['ID'];
  /** The worst price the order will trade at (e.g. buy for price or less, sell for price or more) (uint64) */
  price: Scalars['String'];
  /** The timeInForce of order (determines how and if it executes, and whether it persists on the book) */
  timeInForce: OrderTimeInForce;
  /** Whether the order is to buy or sell */
  side: Side;
  /** The market the order is trading on (probably stored internally as a hash of the market details) */
  market?: Maybe<Market>;
  /** Total number of contracts that may be bought or sold (immutable) (uint64) */
  size: Scalars['String'];
  /** Number of contracts remaining of the total that have not yet been bought or sold (uint64) */
  remaining: Scalars['String'];
  /** The trader who place the order (probably stored internally as the trader's public key) */
  party: Party;
  /** RFC3339Nano formatted date and time for when the order was created (timestamp) */
  createdAt: Scalars['String'];
  /** Expiration time of this order (ISO-8601 RFC3339+Nano formatted date) */
  expiresAt?: Maybe<Scalars['String']>;
  /** The status of an order, for example 'Active' */
  status: OrderStatus;
  /** The external reference (if available) for the order */
  reference: Scalars['String'];
  /** Trades relating to this order */
  trades?: Maybe<Array<Trade>>;
  /** Type the order type (defaults to TRADER) */
  type?: Maybe<OrderType>;
  /** Reason for the order to be rejected */
  rejectionReason?: Maybe<OrderRejectionReason>;
  /** Version of this order, counts the number of amends */
  version: Scalars['String'];
  /** RFC3339Nano time the order was altered */
  updatedAt?: Maybe<Scalars['String']>;
  /** PeggedOrder contains the details about a pegged order */
  peggedOrder?: Maybe<PeggedOrder>;
  /** The liquidity provision this order was created from */
  liquidityProvision?: Maybe<LiquidityProvision>;
};

/** An estimate of the fee to be paid by the order */
export type OrderEstimate = {
  __typename?: 'OrderEstimate';
  /** The estimated fee if the order was to trade */
  fee: TradeFee;
  /** The total estimated amount of fee if the order was to trade */
  totalFeeAmount: Scalars['String'];
  /** The margin requirement for this order */
  marginLevels: MarginLevels;
};

/** Reason for the order being rejected by the core node */
export enum OrderRejectionReason {
  /** Market id is invalid */
  InvalidMarketId = 'InvalidMarketId',
  /** Order id is invalid */
  InvalidOrderId = 'InvalidOrderId',
  /** Order is out of sequence */
  OrderOutOfSequence = 'OrderOutOfSequence',
  /** Remaining size in the order is invalid */
  InvalidRemainingSize = 'InvalidRemainingSize',
  /** Time has failed us */
  TimeFailure = 'TimeFailure',
  /** Unable to remove the order */
  OrderRemovalFailure = 'OrderRemovalFailure',
  /** Expiration time is invalid */
  InvalidExpirationTime = 'InvalidExpirationTime',
  /** Order reference is invalid */
  InvalidOrderReference = 'InvalidOrderReference',
  /** Edit is not allowed */
  EditNotAllowed = 'EditNotAllowed',
  /** Order amend fail */
  OrderAmendFailure = 'OrderAmendFailure',
  /** Order does not exist */
  OrderNotFound = 'OrderNotFound',
  /** Party id is invalid */
  InvalidPartyId = 'InvalidPartyId',
  /** Market is closed */
  MarketClosed = 'MarketClosed',
  /** Margin check failed */
  MarginCheckFailed = 'MarginCheckFailed',
  /** Order missing general account */
  MissingGeneralAccount = 'MissingGeneralAccount',
  /** An internal error happened */
  InternalError = 'InternalError',
  /** Invalid size */
  InvalidSize = 'InvalidSize',
  /** Invalid persistence */
  InvalidPersistence = 'InvalidPersistence',
  /** Invalid type */
  InvalidType = 'InvalidType',
  /** Self trading */
  SelfTrading = 'SelfTrading',
  /** Insufficient funds to pay fees */
  InsufficientFundsToPayFees = 'InsufficientFundsToPayFees',
  /** Invalid Time In Force */
  InvalidTimeInForce = 'InvalidTimeInForce',
  /** Attempt to amend order to GTT without ExpiryAt */
  AmendToGttWithoutExpiryAt = 'AmendToGTTWithoutExpiryAt',
  /** Attempt to amend ExpiryAt to a value before CreatedAt */
  ExpiryAtBeforeCreatedAt = 'ExpiryAtBeforeCreatedAt',
  /** Attempt to amend to GTC without an ExpiryAt value */
  GtcWithExpiryAtNotValid = 'GTCWithExpiryAtNotValid',
  /** Amending to FOK or IOC is invalid */
  CannotAmendToFokOrIoc = 'CannotAmendToFOKOrIOC',
  /** Amending to GFA or GFN is invalid */
  CannotAmendToGfaOrGfn = 'CannotAmendToGFAOrGFN',
  /** Amending from GFA or GFN is invalid */
  CannotAmendFromGfaOrGfn = 'CannotAmendFromGFAOrGFN',
  /** Invalid Market Type */
  InvalidMarketType = 'InvalidMarketType',
  /** Good for normal order received during an auction */
  GfnOrderDuringAuction = 'GFNOrderDuringAuction',
  /** Good for auction order received during continuous trading */
  GfaOrderDuringContinuousTrading = 'GFAOrderDuringContinuousTrading',
  /** IOC orders are not allowed during auction */
  IocOrderDuringAuction = 'IOCOrderDuringAuction',
  /** FOK orders are not allowed during auction */
  FokOrderDuringAuction = 'FOKOrderDuringAuction',
  /** Pegged orders must be LIMIT orders */
  PeggedOrderMustBeLimitOrder = 'PeggedOrderMustBeLimitOrder',
  /** Pegged orders can only have TIF GTC or GTT */
  PeggedOrderMustBeGttOrGtc = 'PeggedOrderMustBeGTTOrGTC',
  /** Pegged order must have a reference price */
  PeggedOrderWithoutReferencePrice = 'PeggedOrderWithoutReferencePrice',
  /** Buy pegged order cannot reference best ask price */
  PeggedOrderBuyCannotReferenceBestAskPrice = 'PeggedOrderBuyCannotReferenceBestAskPrice',
  /** Pegged order offset must be <= 0 */
  PeggedOrderOffsetMustBeLessOrEqualToZero = 'PeggedOrderOffsetMustBeLessOrEqualToZero',
  /** Pegged order offset must be < 0 */
  PeggedOrderOffsetMustBeLessThanZero = 'PeggedOrderOffsetMustBeLessThanZero',
  /** Pegged order offset must be >= 0 */
  PeggedOrderOffsetMustBeGreaterOrEqualToZero = 'PeggedOrderOffsetMustBeGreaterOrEqualToZero',
  /** Sell pegged order cannot reference best bid price */
  PeggedOrderSellCannotReferenceBestBidPrice = 'PeggedOrderSellCannotReferenceBestBidPrice',
  /** Pegged order offset must be > zero */
  PeggedOrderOffsetMustBeGreaterThanZero = 'PeggedOrderOffsetMustBeGreaterThanZero',
  /** Insufficient balance to submit the order (no deposit made) */
  InsufficientAssetBalance = 'InsufficientAssetBalance',
  /** Cannot change pegged order fields on a non pegged order */
  CannotAmendPeggedOrderDetailsOnNonPeggedOrder = 'CannotAmendPeggedOrderDetailsOnNonPeggedOrder',
  /** Unable to reprice a pegged order */
  UnableToRepricePeggedOrder = 'UnableToRepricePeggedOrder',
  /** Unable to amend pegged order price */
  UnableToAmendPeggedOrderPrice = 'UnableToAmendPeggedOrderPrice',
  /** Non-persistent order exceeds price bounds */
  NonPersistentOrderExceedsPriceBounds = 'NonPersistentOrderExceedsPriceBounds'
}

/** Valid order statuses, these determine several states for an order that cannot be expressed with other fields in Order. */
export enum OrderStatus {
  /**
   * The order is active and not cancelled or expired, it could be unfilled, partially filled or fully filled.
   * Active does not necessarily mean it's still on the order book.
   */
  Active = 'Active',
  /** This order trades any amount and as much as possible and remains on the book until it either trades completely or expires. */
  Expired = 'Expired',
  /** The order is cancelled, the order could be partially filled or unfilled before it was cancelled. It is not possible to cancel an order with 0 remaining. */
  Cancelled = 'Cancelled',
  /** This order was of type IOC or FOK and could not be processed by the matching engine due to lack of liquidity. */
  Stopped = 'Stopped',
  /** This order is fully filled with remaining equals zero. */
  Filled = 'Filled',
  /** This order was rejected while being processed in the core. */
  Rejected = 'Rejected',
  /** This order was partially filled. */
  PartiallyFilled = 'PartiallyFilled',
  /** This order has been removed from the order book and applies to pegged orders only */
  Parked = 'Parked'
}

/** Valid order types, these determine what happens when an order is added to the book */
export enum OrderTimeInForce {
  /** The order either trades completely (remainingSize == 0 after adding) or not at all, does not remain on the book if it doesn't trade */
  Fok = 'FOK',
  /** The order trades any amount and as much as possible but does not remain on the book (whether it trades or not) */
  Ioc = 'IOC',
  /** This order trades any amount and as much as possible and remains on the book until it either trades completely or is cancelled */
  Gtc = 'GTC',
  /**
   * This order type trades any amount and as much as possible and remains on the book until they either trade completely, are cancelled, or expires at a set time
   * NOTE: this may in future be multiple types or have sub types for orders that provide different ways of specifying expiry
   */
  Gtt = 'GTT',
  /** This order is only accepted during an auction period */
  Gfa = 'GFA',
  /** This order is only accepted during normal trading (that can be continuous trading or frequent batched auctions) */
  Gfn = 'GFN'
}

export enum OrderType {
  /** the default order type */
  Market = 'Market',
  /** mentioned in ticket, but as yet unused order type */
  Limit = 'Limit',
  /**
   * Used for distressed traders, an order placed by the network to close out distressed traders
   * similar to Market order, only no party is attached to the order.
   */
  Network = 'Network'
}

/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type Party = {
  __typename?: 'Party';
  /** Party identifier */
  id: Scalars['ID'];
  /** Orders relating to a party */
  orders?: Maybe<Array<Order>>;
  /** Trades relating to a party (specifically where party is either buyer OR seller) */
  trades?: Maybe<Array<Trade>>;
  /** Collateral accounts relating to a party */
  accounts?: Maybe<Array<Account>>;
  /** Trading positions relating to a party */
  positions?: Maybe<Array<Position>>;
  /** marginLevels */
  margins?: Maybe<Array<MarginLevels>>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  votes?: Maybe<Array<Maybe<ProposalVote>>>;
  /** The list of all withdrawals initiated by the party */
  withdrawals?: Maybe<Array<Withdrawal>>;
  /** The list of all deposits for a party by the party */
  deposits?: Maybe<Array<Deposit>>;
  /** The list of the liquidity provision commitment from this party */
  liquidityProvisions?: Maybe<Array<LiquidityProvision>>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyOrdersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyTradesArgs = {
  marketId?: Maybe<Scalars['ID']>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyAccountsArgs = {
  marketId?: Maybe<Scalars['ID']>;
  asset?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyMarginsArgs = {
  marketId?: Maybe<Scalars['ID']>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyProposalsArgs = {
  inState?: Maybe<ProposalState>;
};


/** Represents a party on Vega, could be an ethereum wallet address in the future */
export type PartyLiquidityProvisionsArgs = {
  market?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

/** Create an order linked to an index rather than a price */
export type PeggedOrder = {
  __typename?: 'PeggedOrder';
  /** Index to link this order to */
  reference: PeggedReference;
  /** Price offset from the peg */
  offset: Scalars['String'];
};

/** Create an order linked to an index rather than a price */
export type PeggedOrderInput = {
  /** Index to link this order to */
  reference: PeggedReference;
  /** Price offset from the peg */
  offset: Scalars['String'];
};

/** Valid references used for pegged orders. */
export enum PeggedReference {
  /** Peg the order against the mid price of the order book */
  Mid = 'Mid',
  /** Peg the order against the best bid price of the order book */
  BestBid = 'BestBid',
  /** Peg the order against the best ask price of the order book */
  BestAsk = 'BestAsk'
}

/**
 * An individual trader at any point in time is considered net long or net short. This refers to their Open Volume,
 * calculated using FIFO. This volume is signed as either negative for LONG positions and positive for SHORT positions. A
 * single trade may end up "splitting" with some of its volume matched into closed volume and some of its volume
 * remaining as open volume. This is why we don't refer to positions being comprised of trades, rather of volume.
 */
export type Position = {
  __typename?: 'Position';
  /** Market relating to this position */
  market: Market;
  /** The party holding this position */
  party: Party;
  /** Open volume (uint64) */
  openVolume: Scalars['String'];
  /** Realised Profit and Loss (int64) */
  realisedPNL: Scalars['String'];
  /** Unrealised Profit and Loss (int64) */
  unrealisedPNL: Scalars['String'];
  /** Average entry price for this position */
  averageEntryPrice: Scalars['String'];
  /** margins of the party for the given position */
  margins?: Maybe<Array<MarginLevels>>;
  /** RFC3339Nano time the position was updated */
  updatedAt?: Maybe<Scalars['String']>;
};

export type PositionResolution = {
  __typename?: 'PositionResolution';
  /** the market ID where position resolution happened */
  marketId: Scalars['ID'];
  /** number of distressed traders on market */
  distressed: Scalars['Int'];
  /** number of traders closed out */
  closed: Scalars['Int'];
  /** the mark price at which traders were distressed/closed out */
  markPrice: Scalars['Int'];
};

export type PreparedAmendOrder = {
  __typename?: 'PreparedAmendOrder';
  /** the raw transaction to sign & submit */
  blob: Scalars['String'];
};

export type PreparedCancelOrder = {
  __typename?: 'PreparedCancelOrder';
  /** the raw transaction to sign & submit */
  blob: Scalars['String'];
};

/** A prepared LiquidityProvision command */
export type PreparedLiquidityProvision = {
  __typename?: 'PreparedLiquidityProvision';
  /** The blob to be send to the wallet and to be signed */
  blob: Scalars['String'];
};

export type PreparedProposal = {
  __typename?: 'PreparedProposal';
  /** Raw transaction data to sign & submit */
  blob: Scalars['String'];
  /** The pending proposal */
  pendingProposal: Proposal;
};

export type PreparedSubmitOrder = {
  __typename?: 'PreparedSubmitOrder';
  /** the raw transaction to sign & submit */
  blob: Scalars['String'];
};

export type PreparedVote = {
  __typename?: 'PreparedVote';
  /** Raw, serialised vote to be signed */
  blob: Scalars['String'];
  /** The vote serialised in the blob field */
  vote: ProposalVote;
};

export type PreparedWithdrawal = {
  __typename?: 'PreparedWithdrawal';
  /** the raw transaction to sign & submit */
  blob: Scalars['String'];
};

/** Represents a price on either the buy or sell side and all the orders at that price */
export type PriceLevel = {
  __typename?: 'PriceLevel';
  /** The price of all the orders at this level (uint64) */
  price: Scalars['String'];
  /** The total remaining size of all orders at this level (uint64) */
  volume: Scalars['String'];
  /** The number of orders at this price level (uint64) */
  numberOfOrders: Scalars['String'];
};

/** Range of valid prices and the associated price monitoring trigger */
export type PriceMonitoringBounds = {
  __typename?: 'PriceMonitoringBounds';
  /** Minimum price that isn't currently breaching the specified price monitoring trigger */
  minValidPrice: Scalars['String'];
  /** Maximum price that isn't currently breaching the specified price monitoring trigger */
  maxValidPrice: Scalars['String'];
  /** Price monitoring trigger associated with the bounds */
  trigger: PriceMonitoringTrigger;
  /** Reference price used to calculate the valid price range */
  referencePrice: Scalars['String'];
};

/** PriceMonitoringParameters holds a list of triggers */
export type PriceMonitoringParameters = {
  __typename?: 'PriceMonitoringParameters';
  /** The list of triggers for this price monitoring */
  triggers?: Maybe<Array<PriceMonitoringTrigger>>;
};

/** PriceMonitoringParameters holds a list of triggers */
export type PriceMonitoringParametersInput = {
  /** The list of triggers for this price monitoring */
  triggers?: Maybe<Array<PriceMonitoringTriggerInput>>;
};

/** Configuration of a market price monitorings auctions triggers */
export type PriceMonitoringSettings = {
  __typename?: 'PriceMonitoringSettings';
  /** Specified a set of PriceMonitoringParameters to be use for price monitoring purposes */
  parameters?: Maybe<PriceMonitoringParameters>;
  /** How often (in seconds) the price monitoring bounds should be updated */
  updateFrequencySecs: Scalars['Int'];
};

/** Configuration of a market price monitorings auctions triggers */
export type PriceMonitoringSettingsInput = {
  /** Specified a set of PriceMonitoringParameters to be use for price monitoring purposes */
  parameters?: Maybe<PriceMonitoringParametersInput>;
  /** How often (in seconds) the price monitoring bounds should be updated */
  updateFrequencySecs?: Maybe<Scalars['Int']>;
};

/** PriceMonitoringParameters holds together price projection horizon τ, probability level p, and auction extension duration */
export type PriceMonitoringTrigger = {
  __typename?: 'PriceMonitoringTrigger';
  /** Price monitoring projection horizon τ in seconds (> 0). */
  horizonSecs: Scalars['Int'];
  /** Price monitoring probability level p. (>0 and < 1) */
  probability: Scalars['Float'];
  /**
   * Price monitoring auction extension duration in seconds should the price
   * breach it's theoretical level over the specified horizon at the specified
   * probability level (> 0)
   */
  auctionExtensionSecs: Scalars['Int'];
};

/** PriceMonitoringParameters holds together price projection horizon τ, probability level p, and auction extension duration */
export type PriceMonitoringTriggerInput = {
  /** Price monitoring projection horizon τ in seconds (> 0). */
  horizonSecs: Scalars['Int'];
  /** Price monitoring probability level p. (>0 and < 1) */
  probability: Scalars['Float'];
  /**
   * Price monitoring auction extension duration in seconds should the price
   * breach it's theoretical level over the specified horizon at the specified
   * probability level (> 0)
   */
  auctionExtensionSecs: Scalars['Int'];
};

export type Product = Future;

/** A property associates a name to a value */
export type Property = {
  __typename?: 'Property';
  /** name of the property */
  name: Scalars['String'];
  /** value of the property */
  value: Scalars['String'];
};

/** PropertyKey describes the property key contained in an oracle data. */
export type PropertyKey = {
  __typename?: 'PropertyKey';
  /** name is the name of the property. */
  name?: Maybe<Scalars['String']>;
  /** type is the type of the property. */
  type: PropertyKeyType;
};

/** PropertyKey describes the property key contained in an oracle data. */
export type PropertyKeyInput = {
  /** name is the name of the property. */
  name: Scalars['String'];
  /** type is the type of the property. */
  type: PropertyKeyType;
};

/**
 * Type describes the type of properties that are supported by the oracle
 * engine.
 */
export enum PropertyKeyType {
  /** Any type. */
  TypeEmpty = 'TypeEmpty',
  /** Integer type. */
  TypeInteger = 'TypeInteger',
  /** String type. */
  TypeString = 'TypeString',
  /** Boolean type. */
  TypeBoolean = 'TypeBoolean',
  /** Any floating point decimal type. */
  TypeDecimal = 'TypeDecimal',
  /** Timestamp date type. */
  TypeTimestamp = 'TypeTimestamp'
}

export type Proposal = {
  __typename?: 'Proposal';
  /** Proposal ID that is filled by VEGA once proposal reaches the network */
  id?: Maybe<Scalars['ID']>;
  /** A UUID reference to aid tracking proposals on VEGA */
  reference: Scalars['String'];
  /** Party that prepared the proposal */
  party: Party;
  /** State of the proposal */
  state: ProposalState;
  /** RFC3339Nano time and date when the proposal reached Vega network */
  datetime: Scalars['String'];
  /** Terms of the proposal */
  terms: ProposalTerms;
  /** Votes cast for this proposal */
  votes: ProposalVotes;
  /** Reason for the proposal to be rejected by the core */
  rejectionReason?: Maybe<ProposalRejectionReason>;
  /** Error details of the rejectionReason */
  errorDetails?: Maybe<Scalars['String']>;
};

export type ProposalChange = NewMarket | UpdateMarket | UpdateNetworkParameter | NewAsset;

/** Reason for the proposal being rejected by the core node */
export enum ProposalRejectionReason {
  /** The specified close time is too early based on network parameters */
  CloseTimeTooSoon = 'CloseTimeTooSoon',
  /** The specified close time is too late based on network parameters */
  CloseTimeTooLate = 'CloseTimeTooLate',
  /** The specified enactment time is too early based on network parameters */
  EnactTimeTooSoon = 'EnactTimeTooSoon',
  /** The specified enactment time is too late based on network parameters */
  EnactTimeTooLate = 'EnactTimeTooLate',
  /** The proposer for this proposal has insufficient token */
  InsufficientTokens = 'InsufficientTokens',
  /** The instrument quote name and base name were the same */
  InvalidInstrumentSecurity = 'InvalidInstrumentSecurity',
  /** The proposal has no product specified */
  NoProduct = 'NoProduct',
  /** The specified product is not supported */
  UnsupportedProduct = 'UnsupportedProduct',
  /** Invalid future maturity timestamp (expect RFC3339) */
  InvalidFutureMaturityTimestamp = 'InvalidFutureMaturityTimestamp',
  /** The product maturity is already in the past */
  ProductMaturityIsPassed = 'ProductMaturityIsPassed',
  /** The proposal has no trading mode */
  NoTradingMode = 'NoTradingMode',
  /** The proposal has an unsupported trading mode */
  UnsupportedTradingMode = 'UnsupportedTradingMode',
  /** The proposal failed node validation */
  NodeValidationFailed = 'NodeValidationFailed',
  /** A builtin asset configuration is missing */
  MissingBuiltinAssetField = 'MissingBuiltinAssetField',
  /** The ERC20 contract address is missing from an ERC20 asset proposal */
  MissingErc20ContractAddress = 'MissingERC20ContractAddress',
  /** The specified asset for the market proposal is invalid */
  InvalidAsset = 'InvalidAsset',
  /** proposal terms timestamps are not compatible (Validation < Closing < Enactment) */
  IncompatibleTimestamps = 'IncompatibleTimestamps',
  /** Risk parameters are missing from the market proposal */
  NoRiskParameters = 'NoRiskParameters',
  /** Invalid key in update network parameter proposal */
  NetworkParameterInvalidKey = 'NetworkParameterInvalidKey',
  /** Invalid value in update network parameter proposal */
  NetworkParameterInvalidValue = 'NetworkParameterInvalidValue',
  /** Validation failed for network parameter proposal */
  NetworkParameterValidationFailed = 'NetworkParameterValidationFailed',
  /** Opening auction duration is less than the network minimum opening auction time */
  OpeningAuctionDurationTooSmall = 'OpeningAuctionDurationTooSmall',
  /** Opening auction duration is more than the network minimum opening auction time */
  OpeningAuctionDurationTooLarge = 'OpeningAuctionDurationTooLarge',
  /** Market proposal is missing a liquidity commitment */
  MarketMissingLiquidityCommitment = 'MarketMissingLiquidityCommitment',
  /** Market proposal market could not be instantiate in execution */
  CouldNotInstantiateMarket = 'CouldNotInstantiateMarket',
  /** Market proposal market contained invalid product definition */
  InvalidFutureProduct = 'InvalidFutureProduct',
  /** Market proposal is missing commitment amount */
  MissingCommitmentAmount = 'MissingCommitmentAmount',
  /** Market proposal have invalid fee amount */
  InvalidFeeAmount = 'InvalidFeeAmount',
  /** Market proposal have one or more invalid shape */
  InvalidShape = 'InvalidShape',
  /** Market proposal use an invalid risk parameter */
  InvalidRiskParameter = 'InvalidRiskParameter',
  /** Proposal declined because the majority threshold was not reached */
  MajorityThresholdNotReached = 'MajorityThresholdNotReached',
  /** Proposal declined because the participation threshold was not reached */
  ParticipationThresholdNotReached = 'ParticipationThresholdNotReached',
  /** Asset details are invalid */
  InvalidAssetDetails = 'InvalidAssetDetails'
}

/**
 * Various states a proposal can transition through:
 * Open ->
 * - Passed -> Enacted.
 * - Rejected.
 * Proposal can enter Failed state from any other state.
 */
export enum ProposalState {
  /** Proposal became invalid and cannot be processed */
  Failed = 'Failed',
  /** Proposal is open for voting */
  Open = 'Open',
  /** Proposal has gained enough support to be executed */
  Passed = 'Passed',
  /** Proposal didn't get enough votes */
  Declined = 'Declined',
  /** Proposal could not gain enough support to be executed */
  Rejected = 'Rejected',
  /** Proposal has been executed and the changes under this proposal have now been applied */
  Enacted = 'Enacted',
  /** Proposal is waiting for the node to run validation */
  WaitingForNodeVote = 'WaitingForNodeVote'
}

export type ProposalTerms = {
  __typename?: 'ProposalTerms';
  /**
   * RFC3339Nano time and date when voting closes for this proposal.
   * Constrained by "minClose" and "maxClose" network parameters.
   */
  closingDatetime: Scalars['String'];
  /**
   * RFC3339Nano time and date when this proposal is executed (if passed). Note that it has to be after closing date time.
   * Constrained by "minEnactInSeconds" and "maxEnactInSeconds" network parameters.
   */
  enactmentDatetime: Scalars['String'];
  /** Actual change being introduced by the proposal - action the proposal triggers if passed and enacted. */
  change: ProposalChange;
};

/** Proposal terms input. Only one kind of change is expected. Proposals with no changes or more than one will not be accepted. */
export type ProposalTermsInput = {
  /**
   * RFC3339Nano/ISO-8601 time and date when voting closes for this proposal.
   * Constrained by "minCloseInSeconds" and "maxCloseInSeconds" network parameters.
   */
  closingDatetime: Scalars['String'];
  /**
   * RFC3339Nano/ISO-8601 time and date when this proposal is executed (if passed). Note that it has to be after closing date time.
   * Constrained by "minEnactInSeconds" and "maxEnactInSeconds" network parameters.
   */
  enactmentDatetime: Scalars['String'];
  /**
   * Field defining new market change - the proposal will create new market if passed and enacted.
   * It can only be set if "updateMarket" and "updateNetwork" are not set (the proposal will be rejected otherwise).
   * One of "newMarket", "updateMarket", "updateNetwork" must be set (the proposal will be rejected otherwise).
   */
  newMarket?: Maybe<NewMarketInput>;
  /**
   * Field defining update market change - the proposal will update existing market if passed and enacted.
   * It can only be set if "newMarket" and "updateNetwork" are not set (the proposal will be rejected otherwise).
   * One of "newMarket", "updateMarket", "updateNetwork" must be set (the proposal will be rejected otherwise).
   */
  updateMarket?: Maybe<UpdateMarketInput>;
  /**
   * Field defining update network change - the proposal will update Vega network parameters if passed and enacted.
   * It can only be set if "newMarket" and "updateMarket" are not set (the proposal will be rejected otherwise).
   * One of "newMarket", "updateMarket", "updateNetwork" must be set (the proposal will be rejected otherwise).
   */
  updateNetworkParameter?: Maybe<UpdateNetworkParameterInput>;
  /** a new Asset proposal, this will create a new asset to be used in the vega network */
  newAsset?: Maybe<NewAssetInput>;
};

export type ProposalVote = {
  __typename?: 'ProposalVote';
  /** Cast vote */
  vote: Vote;
  /** Proposal casting the vote on */
  proposalId: Scalars['ID'];
};

export type ProposalVoteSide = {
  __typename?: 'ProposalVoteSide';
  /** All votes casted for this side */
  votes?: Maybe<Array<Vote>>;
  /** Total number of votes casted for this side */
  totalNumber: Scalars['String'];
  /** Total weight of governance token from the votes casted for this side */
  totalWeight: Scalars['String'];
  /** Total tokens of governance token from the votes casted for this side */
  totalTokens: Scalars['String'];
};

export type ProposalVotes = {
  __typename?: 'ProposalVotes';
  /** Yes votes cast for this proposal */
  yes: ProposalVoteSide;
  /** No votes cast for this proposal */
  no: ProposalVoteSide;
};

/** Queries allow a caller to read data and filter data via GraphQL. */
export type Query = {
  __typename?: 'Query';
  /** One or more instruments that are trading on the VEGA network */
  markets?: Maybe<Array<Market>>;
  /** An instrument that is trading on the VEGA network */
  market?: Maybe<Market>;
  /** One or more entities that are trading on the VEGA network */
  parties?: Maybe<Array<Party>>;
  /** An entity that is trading on the VEGA network */
  party?: Maybe<Party>;
  /** a bunch of statistics about the node */
  statistics: Statistics;
  /** The last block process by the blockchain */
  lastBlockHeight: Scalars['String'];
  /** All registered oracle specs */
  oracleSpecs?: Maybe<Array<OracleSpec>>;
  /** An oracle spec for a given oracle spec ID */
  oracleSpec?: Maybe<OracleSpec>;
  /** All oracle data for a given oracle spec ID */
  oracleDataBySpec?: Maybe<Array<OracleData>>;
  /** An order in the VEGA network found by orderID */
  orderByID: Order;
  /** Order versions (created via amendments if any) found by orderID */
  orderVersions?: Maybe<Array<Order>>;
  /** An order in the VEGA network found by referenceID */
  orderByReference: Order;
  /** All governance proposals in the VEGA network */
  proposals?: Maybe<Array<Proposal>>;
  /** A governance proposal located by either its id or reference. If both are set, id is used. */
  proposal: Proposal;
  /** Governance proposals that aim to create new markets */
  newMarketProposals?: Maybe<Array<Proposal>>;
  /** Governance proposals that aim to update existing markets */
  updateMarketProposals?: Maybe<Array<Proposal>>;
  /** Governance proposals that aim to update Vega network parameters */
  networkParametersProposals?: Maybe<Array<Proposal>>;
  /** Governance proposals that aim to create new assets in Vega */
  newAssetProposals?: Maybe<Array<Proposal>>;
  /** Return a list of aggregated node signature for a given resource ID */
  nodeSignatures?: Maybe<Array<NodeSignature>>;
  /** An asset which is used in the vega network */
  asset?: Maybe<Asset>;
  /** The list of all assets in use in the vega network */
  assets?: Maybe<Array<Asset>>;
  /** return an estimation of the potential cost for a new order */
  estimateOrder: OrderEstimate;
  /** find a withdrawal using its id */
  withdrawal?: Maybe<Withdrawal>;
  /** find an erc20 withdrawal approval using its withdrawal id */
  erc20WithdrawalApproval?: Maybe<Erc20WithdrawalApproval>;
  /** find a deposit using its id */
  deposit?: Maybe<Deposit>;
  /** return the full list of network parameters */
  networkParameters?: Maybe<Array<NetworkParameter>>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryMarketsArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryMarketArgs = {
  id: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryPartiesArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryPartyArgs = {
  id: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryOracleSpecArgs = {
  oracleSpecID: Scalars['String'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryOracleDataBySpecArgs = {
  oracleSpecID: Scalars['String'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryOrderByIdArgs = {
  orderId: Scalars['ID'];
  version?: Maybe<Scalars['Int']>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryOrderVersionsArgs = {
  orderId: Scalars['ID'];
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryOrderByReferenceArgs = {
  reference: Scalars['String'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryProposalsArgs = {
  inState?: Maybe<ProposalState>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryProposalArgs = {
  id?: Maybe<Scalars['ID']>;
  reference?: Maybe<Scalars['String']>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryNewMarketProposalsArgs = {
  inState?: Maybe<ProposalState>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryUpdateMarketProposalsArgs = {
  marketId?: Maybe<Scalars['ID']>;
  inState?: Maybe<ProposalState>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryNetworkParametersProposalsArgs = {
  inState?: Maybe<ProposalState>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryNewAssetProposalsArgs = {
  inState?: Maybe<ProposalState>;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryNodeSignaturesArgs = {
  resourceId: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryAssetArgs = {
  assetId: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryEstimateOrderArgs = {
  marketId: Scalars['ID'];
  partyId: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
  size: Scalars['String'];
  side: Side;
  timeInForce: OrderTimeInForce;
  expiration?: Maybe<Scalars['String']>;
  type: OrderType;
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryWithdrawalArgs = {
  id: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryErc20WithdrawalApprovalArgs = {
  withdrawalId: Scalars['ID'];
};


/** Queries allow a caller to read data and filter data via GraphQL. */
export type QueryDepositArgs = {
  id: Scalars['ID'];
};

/** A risk factor emitted by the risk model for a given market */
export type RiskFactor = {
  __typename?: 'RiskFactor';
  /** market the risk factor was emitted for */
  market: Scalars['String'];
  /** short factor */
  short: Scalars['Float'];
  /** long factor */
  long: Scalars['Float'];
};

export type RiskModel = LogNormalRiskModel | SimpleRiskModel;

export type RiskParametersInput = {
  /** Simple risk model parameters. Set only if risk model is Simple */
  simple?: Maybe<SimpleRiskModelParamsInput>;
  /** Log normal risk model parameters. Set only if risk model is LogNormal */
  logNormal?: Maybe<LogNormalRiskModelInput>;
};

export type ScalingFactors = {
  __typename?: 'ScalingFactors';
  /** the scaling factor that determines the margin level at which Vega has to search for more money */
  searchLevel: Scalars['Float'];
  /** the scaling factor that determines the optimal margin level */
  initialMargin: Scalars['Float'];
  /** The scaling factor that determines the overflow margin level */
  collateralRelease: Scalars['Float'];
};

export type SettleDistressed = {
  __typename?: 'SettleDistressed';
  /** the market in which a position was closed out */
  marketId: Scalars['ID'];
  /** the party who closed out */
  partyId: Scalars['ID'];
  /** the margin taken from distressed trader */
  margin: Scalars['Int'];
  /** the price at which position was closed out */
  price: Scalars['Int'];
};

export type SettlePosition = {
  __typename?: 'SettlePosition';
  /** the market in which a position was settled */
  marketId: Scalars['ID'];
  /** the party who settled a position */
  partyId: Scalars['ID'];
  /** the settle price */
  price: Scalars['Int'];
  /** the trades that were settled to close the overall position */
  tradeSettlements?: Maybe<Array<TradeSettlement>>;
};

/** Whether the placer of an order is aiming to buy or sell on the market */
export enum Side {
  /** The Placer of the order is aiming to buy */
  Buy = 'Buy',
  /** The placer of the order is aiming to sell */
  Sell = 'Sell'
}

/** A signature to be bundled with a transaction */
export type SignatureInput = {
  /** The signature, base64 encoded */
  sig: Scalars['String'];
  /** The algorithm used to produice the signature */
  algo: Scalars['String'];
  /** The version of the signature */
  version: Scalars['Int'];
};

/** A type of simple/dummy risk model where we can specify the risk factor long and short in params */
export type SimpleRiskModel = {
  __typename?: 'SimpleRiskModel';
  /** Params for the simple risk model */
  params: SimpleRiskModelParams;
};

/** Parameters for the simple risk model */
export type SimpleRiskModelParams = {
  __typename?: 'SimpleRiskModelParams';
  /** Risk factor for long */
  factorLong: Scalars['Float'];
  /** Risk factor for short */
  factorShort: Scalars['Float'];
};

export type SimpleRiskModelParamsInput = {
  /** Risk factor for long */
  factorLong: Scalars['Float'];
  /** Risk factor for short */
  factorShort: Scalars['Float'];
};

/** Statistics about the node */
export type Statistics = {
  __typename?: 'Statistics';
  /** Current block number */
  blockHeight: Scalars['Int'];
  /** Number of items in the backlog */
  backlogLength: Scalars['Int'];
  /** Total number of peers on the vega network */
  totalPeers: Scalars['Int'];
  /** RFC3339Nano genesis time of the chain */
  genesisTime: Scalars['String'];
  /** RFC3339Nano current time (real) */
  currentTime: Scalars['String'];
  /** RFC3339Nano uptime of the node */
  upTime: Scalars['String'];
  /** RFC3339Nano current time of the chain (decided through consensus) */
  vegaTime: Scalars['String'];
  /** Status of the vega application connection with the chain */
  status: Scalars['String'];
  /** Number of transaction processed per block */
  txPerBlock: Scalars['Int'];
  /** Average size of the transactions */
  averageTxBytes: Scalars['Int'];
  /** Average number of orders added per blocks */
  averageOrdersPerBlock: Scalars['Int'];
  /** Number of the trades per seconds */
  tradesPerSecond: Scalars['Int'];
  /** Number of orders per seconds */
  ordersPerSecond: Scalars['Int'];
  /** Total number of markets */
  totalMarkets: Scalars['Int'];
  /** Total number of amended orders */
  totalAmendOrder: Scalars['Int'];
  /** Total number of cancelled orders */
  totalCancelOrder: Scalars['Int'];
  /** Total number of orders created */
  totalCreateOrder: Scalars['Int'];
  /** Total number of orders */
  totalOrders: Scalars['Int'];
  /** Total number of trades */
  totalTrades: Scalars['Int'];
  /** Version commit hash of the vega node */
  appVersionHash: Scalars['String'];
  /** Version of the vega node (semver) */
  appVersion: Scalars['String'];
  /** Version of the chain (semver) */
  chainVersion: Scalars['String'];
  /** Duration of the last block, in nanoseconds */
  blockDuration: Scalars['Int'];
  /** Number of orders subscriptions */
  orderSubscriptions: Scalars['Int'];
  /** Number of trades subscriptions */
  tradeSubscriptions: Scalars['Int'];
  /** Number of candles subscriptions */
  candleSubscriptions: Scalars['Int'];
  /** Number of market depth subscriptions */
  marketDepthSubscriptions: Scalars['Int'];
  /** Number of market depth update subscriptions */
  marketDepthUpdateSubscriptions: Scalars['Int'];
  /** Number of positions subscriptions */
  positionsSubscriptions: Scalars['Int'];
};

/** The way the transaction is sent to the blockchain */
export enum SubmitTransactionType {
  /** The call will return as soon as submitted */
  Async = 'Async',
  /** The call will return once the mempool has run CheckTx on the transaction */
  Sync = 'Sync',
  /** The call will return once the transaction has been processed by the core */
  Commit = 'Commit'
}

/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to the candles updates */
  candles: Candle;
  /** Subscribe to orders updates */
  orders?: Maybe<Array<Order>>;
  /** Subscribe to the trades updates */
  trades?: Maybe<Array<Trade>>;
  /** Subscribe to the positions updates */
  positions: Position;
  /** Subscribe to the market depths update */
  marketDepth: MarketDepth;
  /** Subscribe to price level market depth updates */
  marketDepthUpdate: MarketDepthUpdate;
  /** Subscribe to the accounts updates */
  accounts: Account;
  /** Subscribe to the mark price changes */
  marketData: MarketData;
  /** Subscribe to the margin changes */
  margins: MarginLevels;
  /** Subscribe to proposals. Leave out all arguments to receive all proposals */
  proposals: Proposal;
  /** Subscribe to votes, either by proposal id or pary id */
  votes: ProposalVote;
  /** Subscribe to event data from the event bus */
  busEvents?: Maybe<Array<BusEvent>>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionCandlesArgs = {
  marketId: Scalars['ID'];
  interval: Interval;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionOrdersArgs = {
  marketId?: Maybe<Scalars['ID']>;
  partyId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionTradesArgs = {
  marketId?: Maybe<Scalars['ID']>;
  partyId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionPositionsArgs = {
  partyId?: Maybe<Scalars['ID']>;
  marketId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionMarketDepthArgs = {
  marketId: Scalars['ID'];
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionMarketDepthUpdateArgs = {
  marketId: Scalars['ID'];
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionAccountsArgs = {
  marketId?: Maybe<Scalars['ID']>;
  partyId?: Maybe<Scalars['ID']>;
  asset?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionMarketDataArgs = {
  marketId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionMarginsArgs = {
  partyId: Scalars['ID'];
  marketId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionProposalsArgs = {
  partyId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionVotesArgs = {
  proposalId?: Maybe<Scalars['ID']>;
  partyId?: Maybe<Scalars['ID']>;
};


/** Subscriptions allow a caller to receive new information as it is available from the VEGA platform. */
export type SubscriptionBusEventsArgs = {
  types: Array<BusEventType>;
  marketId?: Maybe<Scalars['ID']>;
  partyId?: Maybe<Scalars['ID']>;
  batchSize: Scalars['Int'];
};

/** TargetStakeParameters contains parameters used in target stake calculation */
export type TargetStakeParameters = {
  __typename?: 'TargetStakeParameters';
  /** Specifies length of time window expressed in seconds for target stake calculation */
  timeWindow: Scalars['Int'];
  /** Specifies scaling factors used in target stake calculation */
  scalingFactor: Scalars['Float'];
};

export type TimeUpdate = {
  __typename?: 'TimeUpdate';
  /** RFC3339Nano time of new block time */
  timestamp: Scalars['String'];
};

/** A tradable instrument is a combination of an instrument and a risk model */
export type TradableInstrument = {
  __typename?: 'TradableInstrument';
  /** An instance of or reference to a fully specified instrument. */
  instrument: Instrument;
  /** A reference to a risk model that is valid for the instrument */
  riskModel: RiskModel;
  /** Margin calculation info, currently only the scaling factors (search, initial, release) for this tradable instrument */
  marginCalculator?: Maybe<MarginCalculator>;
};

/** A trade on Vega, the result of two orders being 'matched' in the market */
export type Trade = {
  __typename?: 'Trade';
  /** The hash of the trade data */
  id: Scalars['ID'];
  /** The market the trade occurred on */
  market: Market;
  /** The order that bought */
  buyOrder: Scalars['String'];
  /** The order that sold */
  sellOrder: Scalars['String'];
  /** The party that bought */
  buyer: Party;
  /** The party that sold */
  seller: Party;
  /** The aggressor indicates whether this trade was related to a BUY or SELL */
  aggressor: Side;
  /** The price of the trade (probably initially the passive order price, other determination algorithms are possible though) (uint64) */
  price: Scalars['String'];
  /** The number of contracts trades, will always be <= the remaining size of both orders immediately before the trade (uint64) */
  size: Scalars['String'];
  /** RFC3339Nano time for when the trade occurred */
  createdAt: Scalars['String'];
  /** The type of trade */
  type: TradeType;
  /** The fee paid by the buyer side of the trade */
  buyerFee: TradeFee;
  /** The fee paid by the seller side of the trade */
  sellerFee: TradeFee;
  /** The batch in witch the buyer order was submitted (applies only for Auctions modes) */
  buyerAuctionBatch?: Maybe<Scalars['Int']>;
  /** The batch in witch the seller order was submitted (applies only for Auctions modes) */
  sellerAuctionBatch?: Maybe<Scalars['Int']>;
};

/** The fee paid by the party when a trade occurs */
export type TradeFee = {
  __typename?: 'TradeFee';
  /** The maker fee, aggressive party to the other party (the one who had an order in the book) */
  makerFee: Scalars['String'];
  /** The infrastructure fee, a fee paid to the node runner to maintain the vega network */
  infrastructureFee: Scalars['String'];
  /** The fee paid to the market makers to provide liquidity in the market */
  liquidityFee: Scalars['String'];
};

export type TradeSettlement = {
  __typename?: 'TradeSettlement';
  /** the size of the trade */
  size: Scalars['Int'];
  /** the price of the trade */
  price: Scalars['Int'];
};

/** Valid trade types */
export enum TradeType {
  /** Default trade type */
  Default = 'Default',
  /** Network close-out - good */
  NetworkCloseOutGood = 'NetworkCloseOutGood',
  /** Network close-out - bad */
  NetworkCloseOutBad = 'NetworkCloseOutBad'
}

export type TradingMode = ContinuousTrading | DiscreteTrading;

export type TransactionSubmitted = {
  __typename?: 'TransactionSubmitted';
  success: Scalars['Boolean'];
};

export type TransferBalance = {
  __typename?: 'TransferBalance';
  /** Account involved in transfer */
  account: Account;
  /** The new balance of the account */
  balance: Scalars['Int'];
};

export type TransferResponse = {
  __typename?: 'TransferResponse';
  /** the ledger entries and balances resulting from a transfer request */
  transfers?: Maybe<Array<LedgerEntry>>;
  /** the balances of accounts involved in the transfer */
  balances?: Maybe<Array<TransferBalance>>;
};

export type TransferResponses = {
  __typename?: 'TransferResponses';
  /** a group of transfer responses - events from core */
  responses?: Maybe<Array<TransferResponse>>;
};

/**
 * Incomplete change definition for governance proposal terms
 * TODO: complete the type
 */
export type UpdateMarket = {
  __typename?: 'UpdateMarket';
  marketId: Scalars['ID'];
};

export type UpdateMarketInput = {
  marketId: Scalars['ID'];
};

/** Allows submitting a proposal for changing network parameters */
export type UpdateNetworkParameter = {
  __typename?: 'UpdateNetworkParameter';
  networkParameter: NetworkParameter;
};

/** Allows submitting a proposal for changing network parameters */
export type UpdateNetworkParameterInput = {
  networkParameter: NetworkParameterInput;
};

export type Vote = {
  __typename?: 'Vote';
  /** The vote value cast */
  value: VoteValue;
  /** The party casting the vote */
  party: Party;
  /** RFC3339Nano time and date when the vote reached Vega network */
  datetime: Scalars['String'];
  /** The ID of the proposal this vote applies to */
  proposalId: Scalars['ID'];
  /** Total number of governance token for the party that casted the vote */
  governanceTokenBalance: Scalars['String'];
  /** The weight of this vote based on the total of governance token */
  governanceTokenWeight: Scalars['String'];
};

export enum VoteValue {
  /** No reject a proposal */
  No = 'No',
  /** Yes accept a proposal */
  Yes = 'Yes'
}

/** The details of a withdrawal processed by vega */
export type Withdrawal = {
  __typename?: 'Withdrawal';
  /** The Vega internal id of the withdrawal */
  id: Scalars['ID'];
  /** The PartyID initiating the witndrawal */
  party: Party;
  /** The amount to be withdrawn */
  amount: Scalars['String'];
  /** The asset to be withdrawn */
  asset: Asset;
  /** The current status of the withdrawal */
  status: WithdrawalStatus;
  /** A reference the foreign chain can use to refere to when processing the withdrawal */
  ref: Scalars['String'];
  /** RFC3339Nano time until the withdrawal will be invalid */
  expiry: Scalars['String'];
  /** RFC3339Nano time at which the withdrawal was created */
  createdTimestamp: Scalars['String'];
  /** RFC3339Nano time at which the withdrawal was finalized */
  withdrawnTimestamp?: Maybe<Scalars['String']>;
  /** Hash of the transaction on the foreign chain */
  txHash?: Maybe<Scalars['String']>;
  /** Foreign chain specific details about the withdrawal */
  details?: Maybe<WithdrawalDetails>;
};

export type WithdrawalDetails = Erc20WithdrawalDetails;

/** The status of a withdrawal */
export enum WithdrawalStatus {
  /** The withdrawal is open and being processed by the network */
  Open = 'Open',
  /** The withdrawal have been cancelled by the network, either because it expired, or something went wrong with the foreign chain */
  Cancelled = 'Cancelled',
  /** The withdrawal was finalized, it was first valid, the foreign chain have executed it and the network updated all accounts */
  Finalized = 'Finalized'
}
