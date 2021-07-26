import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccountKeySpecifier = ('balance' | 'asset' | 'type' | 'market' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('id' | 'name' | 'symbol' | 'totalSupply' | 'decimals' | 'minLpStake' | 'source' | 'infrastructureFeeAccount' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	minLpStake?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	infrastructureFeeAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionDurationKeySpecifier = ('durationSecs' | 'volume' | AuctionDurationKeySpecifier)[];
export type AuctionDurationFieldPolicy = {
	durationSecs?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionEventKeySpecifier = ('marketId' | 'leave' | 'openingAuction' | 'auctionStart' | 'auctionEnd' | 'trigger' | 'extensionTrigger' | AuctionEventKeySpecifier)[];
export type AuctionEventFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	leave?: FieldPolicy<any> | FieldReadFunction<any>,
	openingAuction?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionStart?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionEnd?: FieldPolicy<any> | FieldReadFunction<any>,
	trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	extensionTrigger?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BuiltinAssetKeySpecifier = ('maxFaucetAmountMint' | BuiltinAssetKeySpecifier)[];
export type BuiltinAssetFieldPolicy = {
	maxFaucetAmountMint?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BusEventKeySpecifier = ('eventId' | 'block' | 'type' | 'event' | BusEventKeySpecifier)[];
export type BusEventFieldPolicy = {
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CandleKeySpecifier = ('timestamp' | 'datetime' | 'high' | 'low' | 'open' | 'close' | 'volume' | 'interval' | CandleKeySpecifier)[];
export type CandleFieldPolicy = {
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	datetime?: FieldPolicy<any> | FieldReadFunction<any>,
	high?: FieldPolicy<any> | FieldReadFunction<any>,
	low?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	close?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConditionKeySpecifier = ('operator' | 'value' | ConditionKeySpecifier)[];
export type ConditionFieldPolicy = {
	operator?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContinuousTradingKeySpecifier = ('tickSize' | ContinuousTradingKeySpecifier)[];
export type ContinuousTradingFieldPolicy = {
	tickSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepositKeySpecifier = ('id' | 'party' | 'amount' | 'asset' | 'status' | 'createdTimestamp' | 'creditedTimestamp' | 'txHash' | DepositKeySpecifier)[];
export type DepositFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	createdTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	creditedTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscreteTradingKeySpecifier = ('duration' | 'tickSize' | DiscreteTradingKeySpecifier)[];
export type DiscreteTradingFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	tickSize?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ERC20KeySpecifier = ('contractAddress' | ERC20KeySpecifier)[];
export type ERC20FieldPolicy = {
	contractAddress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Erc20WithdrawalApprovalKeySpecifier = ('assetSource' | 'amount' | 'expiry' | 'nonce' | 'signatures' | Erc20WithdrawalApprovalKeySpecifier)[];
export type Erc20WithdrawalApprovalFieldPolicy = {
	assetSource?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	expiry?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	signatures?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Erc20WithdrawalDetailsKeySpecifier = ('receiverAddress' | Erc20WithdrawalDetailsKeySpecifier)[];
export type Erc20WithdrawalDetailsFieldPolicy = {
	receiverAddress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthereumEventKeySpecifier = ('contractId' | 'event' | EthereumEventKeySpecifier)[];
export type EthereumEventFieldPolicy = {
	contractId?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeFactorsKeySpecifier = ('makerFee' | 'infrastructureFee' | 'liquidityFee' | FeeFactorsKeySpecifier)[];
export type FeeFactorsFieldPolicy = {
	makerFee?: FieldPolicy<any> | FieldReadFunction<any>,
	infrastructureFee?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityFee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeesKeySpecifier = ('factors' | FeesKeySpecifier)[];
export type FeesFieldPolicy = {
	factors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilterKeySpecifier = ('key' | 'conditions' | FilterKeySpecifier)[];
export type FilterFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	conditions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FutureKeySpecifier = ('maturity' | 'settlementAsset' | 'quoteName' | 'oracleSpecForSettlementPrice' | 'oracleSpecForTradingTermination' | 'oracleSpecBinding' | FutureKeySpecifier)[];
export type FutureFieldPolicy = {
	maturity?: FieldPolicy<any> | FieldReadFunction<any>,
	settlementAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	quoteName?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecForSettlementPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecForTradingTermination?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecBinding?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FutureProductKeySpecifier = ('maturity' | 'settlementAsset' | 'quoteName' | 'oracleSpecForSettlementPrice' | 'oracleSpecForTradingTermination' | 'oracleSpecBinding' | FutureProductKeySpecifier)[];
export type FutureProductFieldPolicy = {
	maturity?: FieldPolicy<any> | FieldReadFunction<any>,
	settlementAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	quoteName?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecForSettlementPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecForTradingTermination?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecBinding?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstrumentKeySpecifier = ('id' | 'code' | 'name' | 'metadata' | 'product' | InstrumentKeySpecifier)[];
export type InstrumentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstrumentConfigurationKeySpecifier = ('name' | 'code' | 'futureProduct' | InstrumentConfigurationKeySpecifier)[];
export type InstrumentConfigurationFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	futureProduct?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InstrumentMetadataKeySpecifier = ('tags' | InstrumentMetadataKeySpecifier)[];
export type InstrumentMetadataFieldPolicy = {
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LedgerEntryKeySpecifier = ('fromAccount' | 'toAccount' | 'amount' | 'reference' | 'type' | 'timestamp' | LedgerEntryKeySpecifier)[];
export type LedgerEntryFieldPolicy = {
	fromAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	toAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityMonitoringParametersKeySpecifier = ('targetStakeParameters' | 'triggeringRatio' | LiquidityMonitoringParametersKeySpecifier)[];
export type LiquidityMonitoringParametersFieldPolicy = {
	targetStakeParameters?: FieldPolicy<any> | FieldReadFunction<any>,
	triggeringRatio?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityOrderKeySpecifier = ('reference' | 'proportion' | 'offset' | LiquidityOrderKeySpecifier)[];
export type LiquidityOrderFieldPolicy = {
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	proportion?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityOrderReferenceKeySpecifier = ('order' | 'liquidityOrder' | LiquidityOrderReferenceKeySpecifier)[];
export type LiquidityOrderReferenceFieldPolicy = {
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityProviderFeeShareKeySpecifier = ('party' | 'equityLikeShare' | 'averageEntryValuation' | LiquidityProviderFeeShareKeySpecifier)[];
export type LiquidityProviderFeeShareFieldPolicy = {
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	equityLikeShare?: FieldPolicy<any> | FieldReadFunction<any>,
	averageEntryValuation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityProvisionKeySpecifier = ('id' | 'party' | 'createdAt' | 'updatedAt' | 'market' | 'commitmentAmount' | 'fee' | 'sells' | 'buys' | 'version' | 'status' | 'reference' | LiquidityProvisionKeySpecifier)[];
export type LiquidityProvisionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	commitmentAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	sells?: FieldPolicy<any> | FieldReadFunction<any>,
	buys?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogNormalModelParamsKeySpecifier = ('mu' | 'r' | 'sigma' | LogNormalModelParamsKeySpecifier)[];
export type LogNormalModelParamsFieldPolicy = {
	mu?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	sigma?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogNormalRiskModelKeySpecifier = ('riskAversionParameter' | 'tau' | 'params' | LogNormalRiskModelKeySpecifier)[];
export type LogNormalRiskModelFieldPolicy = {
	riskAversionParameter?: FieldPolicy<any> | FieldReadFunction<any>,
	tau?: FieldPolicy<any> | FieldReadFunction<any>,
	params?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LossSocializationKeySpecifier = ('marketId' | 'partyId' | 'amount' | LossSocializationKeySpecifier)[];
export type LossSocializationFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	partyId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarginCalculatorKeySpecifier = ('scalingFactors' | MarginCalculatorKeySpecifier)[];
export type MarginCalculatorFieldPolicy = {
	scalingFactors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarginLevelsKeySpecifier = ('market' | 'asset' | 'party' | 'maintenanceLevel' | 'searchLevel' | 'initialLevel' | 'collateralReleaseLevel' | 'timestamp' | MarginLevelsKeySpecifier)[];
export type MarginLevelsFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	maintenanceLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	searchLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	initialLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	collateralReleaseLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketKeySpecifier = ('id' | 'name' | 'fees' | 'tradableInstrument' | 'tradingModeConfig' | 'decimalPlaces' | 'openingAuction' | 'priceMonitoringSettings' | 'liquidityMonitoringParameters' | 'tradingMode' | 'state' | 'proposal' | 'orders' | 'accounts' | 'trades' | 'depth' | 'candles' | 'data' | 'liquidityProvisions' | 'marketTimestamps' | MarketKeySpecifier)[];
export type MarketFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	tradableInstrument?: FieldPolicy<any> | FieldReadFunction<any>,
	tradingModeConfig?: FieldPolicy<any> | FieldReadFunction<any>,
	decimalPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	openingAuction?: FieldPolicy<any> | FieldReadFunction<any>,
	priceMonitoringSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityMonitoringParameters?: FieldPolicy<any> | FieldReadFunction<any>,
	tradingMode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	proposal?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	trades?: FieldPolicy<any> | FieldReadFunction<any>,
	depth?: FieldPolicy<any> | FieldReadFunction<any>,
	candles?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityProvisions?: FieldPolicy<any> | FieldReadFunction<any>,
	marketTimestamps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketDataKeySpecifier = ('market' | 'markPrice' | 'bestBidPrice' | 'bestBidVolume' | 'bestOfferPrice' | 'bestOfferVolume' | 'bestStaticBidPrice' | 'bestStaticBidVolume' | 'bestStaticOfferPrice' | 'bestStaticOfferVolume' | 'midPrice' | 'staticMidPrice' | 'timestamp' | 'openInterest' | 'auctionEnd' | 'auctionStart' | 'indicativePrice' | 'indicativeVolume' | 'marketTradingMode' | 'trigger' | 'extensionTrigger' | 'targetStake' | 'suppliedStake' | 'commitments' | 'priceMonitoringBounds' | 'marketValueProxy' | 'liquidityProviderFeeShare' | MarketDataKeySpecifier)[];
export type MarketDataFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	markPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	bestBidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	bestBidVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	bestOfferPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	bestOfferVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	bestStaticBidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	bestStaticBidVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	bestStaticOfferPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	bestStaticOfferVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	midPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	staticMidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	openInterest?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionEnd?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionStart?: FieldPolicy<any> | FieldReadFunction<any>,
	indicativePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	indicativeVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	marketTradingMode?: FieldPolicy<any> | FieldReadFunction<any>,
	trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	extensionTrigger?: FieldPolicy<any> | FieldReadFunction<any>,
	targetStake?: FieldPolicy<any> | FieldReadFunction<any>,
	suppliedStake?: FieldPolicy<any> | FieldReadFunction<any>,
	commitments?: FieldPolicy<any> | FieldReadFunction<any>,
	priceMonitoringBounds?: FieldPolicy<any> | FieldReadFunction<any>,
	marketValueProxy?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityProviderFeeShare?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketDataCommitmentsKeySpecifier = ('sells' | 'buys' | MarketDataCommitmentsKeySpecifier)[];
export type MarketDataCommitmentsFieldPolicy = {
	sells?: FieldPolicy<any> | FieldReadFunction<any>,
	buys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketDepthKeySpecifier = ('market' | 'buy' | 'sell' | 'lastTrade' | 'sequenceNumber' | MarketDepthKeySpecifier)[];
export type MarketDepthFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	buy?: FieldPolicy<any> | FieldReadFunction<any>,
	sell?: FieldPolicy<any> | FieldReadFunction<any>,
	lastTrade?: FieldPolicy<any> | FieldReadFunction<any>,
	sequenceNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketDepthUpdateKeySpecifier = ('market' | 'buy' | 'sell' | 'sequenceNumber' | MarketDepthUpdateKeySpecifier)[];
export type MarketDepthUpdateFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	buy?: FieldPolicy<any> | FieldReadFunction<any>,
	sell?: FieldPolicy<any> | FieldReadFunction<any>,
	sequenceNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketEventKeySpecifier = ('marketId' | 'payload' | MarketEventKeySpecifier)[];
export type MarketEventFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketTickKeySpecifier = ('marketId' | 'time' | MarketTickKeySpecifier)[];
export type MarketTickFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketTimestampsKeySpecifier = ('proposed' | 'pending' | 'open' | 'close' | MarketTimestampsKeySpecifier)[];
export type MarketTimestampsFieldPolicy = {
	proposed?: FieldPolicy<any> | FieldReadFunction<any>,
	pending?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>,
	close?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('prepareOrderSubmit' | 'prepareOrderCancel' | 'prepareOrderAmend' | 'prepareProposal' | 'prepareVote' | 'prepareWithdrawal' | 'submitTransaction' | 'prepareLiquidityProvision' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	prepareOrderSubmit?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareOrderCancel?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareOrderAmend?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareProposal?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareVote?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareWithdrawal?: FieldPolicy<any> | FieldReadFunction<any>,
	submitTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	prepareLiquidityProvision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetworkParameterKeySpecifier = ('key' | 'value' | NetworkParameterKeySpecifier)[];
export type NetworkParameterFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewAssetKeySpecifier = ('name' | 'symbol' | 'totalSupply' | 'decimals' | 'minLpStake' | 'source' | NewAssetKeySpecifier)[];
export type NewAssetFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSupply?: FieldPolicy<any> | FieldReadFunction<any>,
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	minLpStake?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewMarketKeySpecifier = ('instrument' | 'decimalPlaces' | 'riskParameters' | 'metadata' | 'tradingMode' | 'commitment' | NewMarketKeySpecifier)[];
export type NewMarketFieldPolicy = {
	instrument?: FieldPolicy<any> | FieldReadFunction<any>,
	decimalPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	riskParameters?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	tradingMode?: FieldPolicy<any> | FieldReadFunction<any>,
	commitment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewMarketCommitmentKeySpecifier = ('commitmentAmount' | 'fee' | 'sells' | 'buys' | 'reference' | NewMarketCommitmentKeySpecifier)[];
export type NewMarketCommitmentFieldPolicy = {
	commitmentAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	sells?: FieldPolicy<any> | FieldReadFunction<any>,
	buys?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeSignatureKeySpecifier = ('id' | 'signature' | 'kind' | NodeSignatureKeySpecifier)[];
export type NodeSignatureFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	signature?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OracleDataKeySpecifier = ('pubKeys' | 'data' | OracleDataKeySpecifier)[];
export type OracleDataFieldPolicy = {
	pubKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OracleSpecKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'pubKeys' | 'filters' | 'status' | 'data' | OracleSpecKeySpecifier)[];
export type OracleSpecFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	pubKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OracleSpecConfigurationKeySpecifier = ('pubKeys' | 'filters' | OracleSpecConfigurationKeySpecifier)[];
export type OracleSpecConfigurationFieldPolicy = {
	pubKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	filters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OracleSpecToFutureBindingKeySpecifier = ('settlementPriceProperty' | 'tradingTerminationProperty' | OracleSpecToFutureBindingKeySpecifier)[];
export type OracleSpecToFutureBindingFieldPolicy = {
	settlementPriceProperty?: FieldPolicy<any> | FieldReadFunction<any>,
	tradingTerminationProperty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'price' | 'timeInForce' | 'side' | 'market' | 'size' | 'remaining' | 'party' | 'createdAt' | 'expiresAt' | 'status' | 'reference' | 'trades' | 'type' | 'rejectionReason' | 'version' | 'updatedAt' | 'peggedOrder' | 'liquidityProvision' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	timeInForce?: FieldPolicy<any> | FieldReadFunction<any>,
	side?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	trades?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionReason?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	peggedOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityProvision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderEstimateKeySpecifier = ('fee' | 'totalFeeAmount' | 'marginLevels' | OrderEstimateKeySpecifier)[];
export type OrderEstimateFieldPolicy = {
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	totalFeeAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	marginLevels?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartyKeySpecifier = ('id' | 'orders' | 'trades' | 'accounts' | 'positions' | 'margins' | 'proposals' | 'votes' | 'withdrawals' | 'deposits' | 'liquidityProvisions' | PartyKeySpecifier)[];
export type PartyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	trades?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	margins?: FieldPolicy<any> | FieldReadFunction<any>,
	proposals?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawals?: FieldPolicy<any> | FieldReadFunction<any>,
	deposits?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityProvisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PeggedOrderKeySpecifier = ('reference' | 'offset' | PeggedOrderKeySpecifier)[];
export type PeggedOrderFieldPolicy = {
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionKeySpecifier = ('market' | 'party' | 'openVolume' | 'realisedPNL' | 'unrealisedPNL' | 'averageEntryPrice' | 'margins' | 'updatedAt' | PositionKeySpecifier)[];
export type PositionFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	openVolume?: FieldPolicy<any> | FieldReadFunction<any>,
	realisedPNL?: FieldPolicy<any> | FieldReadFunction<any>,
	unrealisedPNL?: FieldPolicy<any> | FieldReadFunction<any>,
	averageEntryPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	margins?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionResolutionKeySpecifier = ('marketId' | 'distressed' | 'closed' | 'markPrice' | PositionResolutionKeySpecifier)[];
export type PositionResolutionFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	distressed?: FieldPolicy<any> | FieldReadFunction<any>,
	closed?: FieldPolicy<any> | FieldReadFunction<any>,
	markPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedAmendOrderKeySpecifier = ('blob' | PreparedAmendOrderKeySpecifier)[];
export type PreparedAmendOrderFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedCancelOrderKeySpecifier = ('blob' | PreparedCancelOrderKeySpecifier)[];
export type PreparedCancelOrderFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedLiquidityProvisionKeySpecifier = ('blob' | PreparedLiquidityProvisionKeySpecifier)[];
export type PreparedLiquidityProvisionFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedProposalKeySpecifier = ('blob' | 'pendingProposal' | PreparedProposalKeySpecifier)[];
export type PreparedProposalFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>,
	pendingProposal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedSubmitOrderKeySpecifier = ('blob' | PreparedSubmitOrderKeySpecifier)[];
export type PreparedSubmitOrderFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedVoteKeySpecifier = ('blob' | 'vote' | PreparedVoteKeySpecifier)[];
export type PreparedVoteFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>,
	vote?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreparedWithdrawalKeySpecifier = ('blob' | PreparedWithdrawalKeySpecifier)[];
export type PreparedWithdrawalFieldPolicy = {
	blob?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceLevelKeySpecifier = ('price' | 'volume' | 'numberOfOrders' | PriceLevelKeySpecifier)[];
export type PriceLevelFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfOrders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceMonitoringBoundsKeySpecifier = ('minValidPrice' | 'maxValidPrice' | 'trigger' | 'referencePrice' | PriceMonitoringBoundsKeySpecifier)[];
export type PriceMonitoringBoundsFieldPolicy = {
	minValidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	maxValidPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	trigger?: FieldPolicy<any> | FieldReadFunction<any>,
	referencePrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceMonitoringParametersKeySpecifier = ('triggers' | PriceMonitoringParametersKeySpecifier)[];
export type PriceMonitoringParametersFieldPolicy = {
	triggers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceMonitoringSettingsKeySpecifier = ('parameters' | 'updateFrequencySecs' | PriceMonitoringSettingsKeySpecifier)[];
export type PriceMonitoringSettingsFieldPolicy = {
	parameters?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFrequencySecs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceMonitoringTriggerKeySpecifier = ('horizonSecs' | 'probability' | 'auctionExtensionSecs' | PriceMonitoringTriggerKeySpecifier)[];
export type PriceMonitoringTriggerFieldPolicy = {
	horizonSecs?: FieldPolicy<any> | FieldReadFunction<any>,
	probability?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionExtensionSecs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PropertyKeySpecifier = ('name' | 'value' | PropertyKeySpecifier)[];
export type PropertyFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PropertyKeyKeySpecifier = ('name' | 'type' | PropertyKeyKeySpecifier)[];
export type PropertyKeyFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProposalKeySpecifier = ('id' | 'reference' | 'party' | 'state' | 'datetime' | 'terms' | 'votes' | 'rejectionReason' | 'errorDetails' | ProposalKeySpecifier)[];
export type ProposalFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reference?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	datetime?: FieldPolicy<any> | FieldReadFunction<any>,
	terms?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionReason?: FieldPolicy<any> | FieldReadFunction<any>,
	errorDetails?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProposalTermsKeySpecifier = ('closingDatetime' | 'enactmentDatetime' | 'change' | ProposalTermsKeySpecifier)[];
export type ProposalTermsFieldPolicy = {
	closingDatetime?: FieldPolicy<any> | FieldReadFunction<any>,
	enactmentDatetime?: FieldPolicy<any> | FieldReadFunction<any>,
	change?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProposalVoteKeySpecifier = ('vote' | 'proposalId' | ProposalVoteKeySpecifier)[];
export type ProposalVoteFieldPolicy = {
	vote?: FieldPolicy<any> | FieldReadFunction<any>,
	proposalId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProposalVoteSideKeySpecifier = ('votes' | 'totalNumber' | 'totalWeight' | 'totalTokens' | ProposalVoteSideKeySpecifier)[];
export type ProposalVoteSideFieldPolicy = {
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	totalWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProposalVotesKeySpecifier = ('yes' | 'no' | ProposalVotesKeySpecifier)[];
export type ProposalVotesFieldPolicy = {
	yes?: FieldPolicy<any> | FieldReadFunction<any>,
	no?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('markets' | 'market' | 'parties' | 'party' | 'statistics' | 'lastBlockHeight' | 'oracleSpecs' | 'oracleSpec' | 'oracleDataBySpec' | 'orderByID' | 'orderVersions' | 'orderByReference' | 'proposals' | 'proposal' | 'newMarketProposals' | 'updateMarketProposals' | 'networkParametersProposals' | 'newAssetProposals' | 'nodeSignatures' | 'asset' | 'assets' | 'estimateOrder' | 'withdrawal' | 'erc20WithdrawalApproval' | 'deposit' | 'networkParameters' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	markets?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	parties?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	statistics?: FieldPolicy<any> | FieldReadFunction<any>,
	lastBlockHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpecs?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleSpec?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleDataBySpec?: FieldPolicy<any> | FieldReadFunction<any>,
	orderByID?: FieldPolicy<any> | FieldReadFunction<any>,
	orderVersions?: FieldPolicy<any> | FieldReadFunction<any>,
	orderByReference?: FieldPolicy<any> | FieldReadFunction<any>,
	proposals?: FieldPolicy<any> | FieldReadFunction<any>,
	proposal?: FieldPolicy<any> | FieldReadFunction<any>,
	newMarketProposals?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMarketProposals?: FieldPolicy<any> | FieldReadFunction<any>,
	networkParametersProposals?: FieldPolicy<any> | FieldReadFunction<any>,
	newAssetProposals?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeSignatures?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	estimateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawal?: FieldPolicy<any> | FieldReadFunction<any>,
	erc20WithdrawalApproval?: FieldPolicy<any> | FieldReadFunction<any>,
	deposit?: FieldPolicy<any> | FieldReadFunction<any>,
	networkParameters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RiskFactorKeySpecifier = ('market' | 'short' | 'long' | RiskFactorKeySpecifier)[];
export type RiskFactorFieldPolicy = {
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	short?: FieldPolicy<any> | FieldReadFunction<any>,
	long?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScalingFactorsKeySpecifier = ('searchLevel' | 'initialMargin' | 'collateralRelease' | ScalingFactorsKeySpecifier)[];
export type ScalingFactorsFieldPolicy = {
	searchLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	initialMargin?: FieldPolicy<any> | FieldReadFunction<any>,
	collateralRelease?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettleDistressedKeySpecifier = ('marketId' | 'partyId' | 'margin' | 'price' | SettleDistressedKeySpecifier)[];
export type SettleDistressedFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	partyId?: FieldPolicy<any> | FieldReadFunction<any>,
	margin?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettlePositionKeySpecifier = ('marketId' | 'partyId' | 'price' | 'tradeSettlements' | SettlePositionKeySpecifier)[];
export type SettlePositionFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>,
	partyId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	tradeSettlements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleRiskModelKeySpecifier = ('params' | SimpleRiskModelKeySpecifier)[];
export type SimpleRiskModelFieldPolicy = {
	params?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimpleRiskModelParamsKeySpecifier = ('factorLong' | 'factorShort' | SimpleRiskModelParamsKeySpecifier)[];
export type SimpleRiskModelParamsFieldPolicy = {
	factorLong?: FieldPolicy<any> | FieldReadFunction<any>,
	factorShort?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatisticsKeySpecifier = ('blockHeight' | 'backlogLength' | 'totalPeers' | 'genesisTime' | 'currentTime' | 'upTime' | 'vegaTime' | 'status' | 'txPerBlock' | 'averageTxBytes' | 'averageOrdersPerBlock' | 'tradesPerSecond' | 'ordersPerSecond' | 'totalMarkets' | 'totalAmendOrder' | 'totalCancelOrder' | 'totalCreateOrder' | 'totalOrders' | 'totalTrades' | 'appVersionHash' | 'appVersion' | 'chainVersion' | 'blockDuration' | 'orderSubscriptions' | 'tradeSubscriptions' | 'candleSubscriptions' | 'marketDepthSubscriptions' | 'marketDepthUpdateSubscriptions' | 'positionsSubscriptions' | StatisticsKeySpecifier)[];
export type StatisticsFieldPolicy = {
	blockHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	backlogLength?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPeers?: FieldPolicy<any> | FieldReadFunction<any>,
	genesisTime?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTime?: FieldPolicy<any> | FieldReadFunction<any>,
	upTime?: FieldPolicy<any> | FieldReadFunction<any>,
	vegaTime?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	txPerBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	averageTxBytes?: FieldPolicy<any> | FieldReadFunction<any>,
	averageOrdersPerBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	tradesPerSecond?: FieldPolicy<any> | FieldReadFunction<any>,
	ordersPerSecond?: FieldPolicy<any> | FieldReadFunction<any>,
	totalMarkets?: FieldPolicy<any> | FieldReadFunction<any>,
	totalAmendOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCancelOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCreateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	totalOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTrades?: FieldPolicy<any> | FieldReadFunction<any>,
	appVersionHash?: FieldPolicy<any> | FieldReadFunction<any>,
	appVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	chainVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	blockDuration?: FieldPolicy<any> | FieldReadFunction<any>,
	orderSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	tradeSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	candleSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	marketDepthSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	marketDepthUpdateSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	positionsSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('candles' | 'orders' | 'trades' | 'positions' | 'marketDepth' | 'marketDepthUpdate' | 'accounts' | 'marketData' | 'margins' | 'proposals' | 'votes' | 'busEvents' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	candles?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	trades?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	marketDepth?: FieldPolicy<any> | FieldReadFunction<any>,
	marketDepthUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	marketData?: FieldPolicy<any> | FieldReadFunction<any>,
	margins?: FieldPolicy<any> | FieldReadFunction<any>,
	proposals?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	busEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetStakeParametersKeySpecifier = ('timeWindow' | 'scalingFactor' | TargetStakeParametersKeySpecifier)[];
export type TargetStakeParametersFieldPolicy = {
	timeWindow?: FieldPolicy<any> | FieldReadFunction<any>,
	scalingFactor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeUpdateKeySpecifier = ('timestamp' | TimeUpdateKeySpecifier)[];
export type TimeUpdateFieldPolicy = {
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TradableInstrumentKeySpecifier = ('instrument' | 'riskModel' | 'marginCalculator' | TradableInstrumentKeySpecifier)[];
export type TradableInstrumentFieldPolicy = {
	instrument?: FieldPolicy<any> | FieldReadFunction<any>,
	riskModel?: FieldPolicy<any> | FieldReadFunction<any>,
	marginCalculator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TradeKeySpecifier = ('id' | 'market' | 'buyOrder' | 'sellOrder' | 'buyer' | 'seller' | 'aggressor' | 'price' | 'size' | 'createdAt' | 'type' | 'buyerFee' | 'sellerFee' | 'buyerAuctionBatch' | 'sellerAuctionBatch' | TradeKeySpecifier)[];
export type TradeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	market?: FieldPolicy<any> | FieldReadFunction<any>,
	buyOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	sellOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	buyer?: FieldPolicy<any> | FieldReadFunction<any>,
	seller?: FieldPolicy<any> | FieldReadFunction<any>,
	aggressor?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	buyerFee?: FieldPolicy<any> | FieldReadFunction<any>,
	sellerFee?: FieldPolicy<any> | FieldReadFunction<any>,
	buyerAuctionBatch?: FieldPolicy<any> | FieldReadFunction<any>,
	sellerAuctionBatch?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TradeFeeKeySpecifier = ('makerFee' | 'infrastructureFee' | 'liquidityFee' | TradeFeeKeySpecifier)[];
export type TradeFeeFieldPolicy = {
	makerFee?: FieldPolicy<any> | FieldReadFunction<any>,
	infrastructureFee?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidityFee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TradeSettlementKeySpecifier = ('size' | 'price' | TradeSettlementKeySpecifier)[];
export type TradeSettlementFieldPolicy = {
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionSubmittedKeySpecifier = ('success' | TransactionSubmittedKeySpecifier)[];
export type TransactionSubmittedFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferBalanceKeySpecifier = ('account' | 'balance' | TransferBalanceKeySpecifier)[];
export type TransferBalanceFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferResponseKeySpecifier = ('transfers' | 'balances' | TransferResponseKeySpecifier)[];
export type TransferResponseFieldPolicy = {
	transfers?: FieldPolicy<any> | FieldReadFunction<any>,
	balances?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferResponsesKeySpecifier = ('responses' | TransferResponsesKeySpecifier)[];
export type TransferResponsesFieldPolicy = {
	responses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMarketKeySpecifier = ('marketId' | UpdateMarketKeySpecifier)[];
export type UpdateMarketFieldPolicy = {
	marketId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateNetworkParameterKeySpecifier = ('networkParameter' | UpdateNetworkParameterKeySpecifier)[];
export type UpdateNetworkParameterFieldPolicy = {
	networkParameter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteKeySpecifier = ('value' | 'party' | 'datetime' | 'proposalId' | 'governanceTokenBalance' | 'governanceTokenWeight' | VoteKeySpecifier)[];
export type VoteFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	datetime?: FieldPolicy<any> | FieldReadFunction<any>,
	proposalId?: FieldPolicy<any> | FieldReadFunction<any>,
	governanceTokenBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	governanceTokenWeight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithdrawalKeySpecifier = ('id' | 'party' | 'amount' | 'asset' | 'status' | 'ref' | 'expiry' | 'createdTimestamp' | 'withdrawnTimestamp' | 'txHash' | 'details' | WithdrawalKeySpecifier)[];
export type WithdrawalFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	party?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	ref?: FieldPolicy<any> | FieldReadFunction<any>,
	expiry?: FieldPolicy<any> | FieldReadFunction<any>,
	createdTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawnTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	txHash?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AuctionDuration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionDurationKeySpecifier | (() => undefined | AuctionDurationKeySpecifier),
		fields?: AuctionDurationFieldPolicy,
	},
	AuctionEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionEventKeySpecifier | (() => undefined | AuctionEventKeySpecifier),
		fields?: AuctionEventFieldPolicy,
	},
	BuiltinAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BuiltinAssetKeySpecifier | (() => undefined | BuiltinAssetKeySpecifier),
		fields?: BuiltinAssetFieldPolicy,
	},
	BusEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BusEventKeySpecifier | (() => undefined | BusEventKeySpecifier),
		fields?: BusEventFieldPolicy,
	},
	Candle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CandleKeySpecifier | (() => undefined | CandleKeySpecifier),
		fields?: CandleFieldPolicy,
	},
	Condition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConditionKeySpecifier | (() => undefined | ConditionKeySpecifier),
		fields?: ConditionFieldPolicy,
	},
	ContinuousTrading?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContinuousTradingKeySpecifier | (() => undefined | ContinuousTradingKeySpecifier),
		fields?: ContinuousTradingFieldPolicy,
	},
	Deposit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepositKeySpecifier | (() => undefined | DepositKeySpecifier),
		fields?: DepositFieldPolicy,
	},
	DiscreteTrading?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscreteTradingKeySpecifier | (() => undefined | DiscreteTradingKeySpecifier),
		fields?: DiscreteTradingFieldPolicy,
	},
	ERC20?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ERC20KeySpecifier | (() => undefined | ERC20KeySpecifier),
		fields?: ERC20FieldPolicy,
	},
	Erc20WithdrawalApproval?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Erc20WithdrawalApprovalKeySpecifier | (() => undefined | Erc20WithdrawalApprovalKeySpecifier),
		fields?: Erc20WithdrawalApprovalFieldPolicy,
	},
	Erc20WithdrawalDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Erc20WithdrawalDetailsKeySpecifier | (() => undefined | Erc20WithdrawalDetailsKeySpecifier),
		fields?: Erc20WithdrawalDetailsFieldPolicy,
	},
	EthereumEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthereumEventKeySpecifier | (() => undefined | EthereumEventKeySpecifier),
		fields?: EthereumEventFieldPolicy,
	},
	FeeFactors?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeFactorsKeySpecifier | (() => undefined | FeeFactorsKeySpecifier),
		fields?: FeeFactorsFieldPolicy,
	},
	Fees?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeesKeySpecifier | (() => undefined | FeesKeySpecifier),
		fields?: FeesFieldPolicy,
	},
	Filter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilterKeySpecifier | (() => undefined | FilterKeySpecifier),
		fields?: FilterFieldPolicy,
	},
	Future?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FutureKeySpecifier | (() => undefined | FutureKeySpecifier),
		fields?: FutureFieldPolicy,
	},
	FutureProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FutureProductKeySpecifier | (() => undefined | FutureProductKeySpecifier),
		fields?: FutureProductFieldPolicy,
	},
	Instrument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstrumentKeySpecifier | (() => undefined | InstrumentKeySpecifier),
		fields?: InstrumentFieldPolicy,
	},
	InstrumentConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstrumentConfigurationKeySpecifier | (() => undefined | InstrumentConfigurationKeySpecifier),
		fields?: InstrumentConfigurationFieldPolicy,
	},
	InstrumentMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InstrumentMetadataKeySpecifier | (() => undefined | InstrumentMetadataKeySpecifier),
		fields?: InstrumentMetadataFieldPolicy,
	},
	LedgerEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LedgerEntryKeySpecifier | (() => undefined | LedgerEntryKeySpecifier),
		fields?: LedgerEntryFieldPolicy,
	},
	LiquidityMonitoringParameters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityMonitoringParametersKeySpecifier | (() => undefined | LiquidityMonitoringParametersKeySpecifier),
		fields?: LiquidityMonitoringParametersFieldPolicy,
	},
	LiquidityOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityOrderKeySpecifier | (() => undefined | LiquidityOrderKeySpecifier),
		fields?: LiquidityOrderFieldPolicy,
	},
	LiquidityOrderReference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityOrderReferenceKeySpecifier | (() => undefined | LiquidityOrderReferenceKeySpecifier),
		fields?: LiquidityOrderReferenceFieldPolicy,
	},
	LiquidityProviderFeeShare?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityProviderFeeShareKeySpecifier | (() => undefined | LiquidityProviderFeeShareKeySpecifier),
		fields?: LiquidityProviderFeeShareFieldPolicy,
	},
	LiquidityProvision?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityProvisionKeySpecifier | (() => undefined | LiquidityProvisionKeySpecifier),
		fields?: LiquidityProvisionFieldPolicy,
	},
	LogNormalModelParams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogNormalModelParamsKeySpecifier | (() => undefined | LogNormalModelParamsKeySpecifier),
		fields?: LogNormalModelParamsFieldPolicy,
	},
	LogNormalRiskModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogNormalRiskModelKeySpecifier | (() => undefined | LogNormalRiskModelKeySpecifier),
		fields?: LogNormalRiskModelFieldPolicy,
	},
	LossSocialization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LossSocializationKeySpecifier | (() => undefined | LossSocializationKeySpecifier),
		fields?: LossSocializationFieldPolicy,
	},
	MarginCalculator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarginCalculatorKeySpecifier | (() => undefined | MarginCalculatorKeySpecifier),
		fields?: MarginCalculatorFieldPolicy,
	},
	MarginLevels?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarginLevelsKeySpecifier | (() => undefined | MarginLevelsKeySpecifier),
		fields?: MarginLevelsFieldPolicy,
	},
	Market?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketKeySpecifier | (() => undefined | MarketKeySpecifier),
		fields?: MarketFieldPolicy,
	},
	MarketData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketDataKeySpecifier | (() => undefined | MarketDataKeySpecifier),
		fields?: MarketDataFieldPolicy,
	},
	MarketDataCommitments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketDataCommitmentsKeySpecifier | (() => undefined | MarketDataCommitmentsKeySpecifier),
		fields?: MarketDataCommitmentsFieldPolicy,
	},
	MarketDepth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketDepthKeySpecifier | (() => undefined | MarketDepthKeySpecifier),
		fields?: MarketDepthFieldPolicy,
	},
	MarketDepthUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketDepthUpdateKeySpecifier | (() => undefined | MarketDepthUpdateKeySpecifier),
		fields?: MarketDepthUpdateFieldPolicy,
	},
	MarketEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketEventKeySpecifier | (() => undefined | MarketEventKeySpecifier),
		fields?: MarketEventFieldPolicy,
	},
	MarketTick?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketTickKeySpecifier | (() => undefined | MarketTickKeySpecifier),
		fields?: MarketTickFieldPolicy,
	},
	MarketTimestamps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketTimestampsKeySpecifier | (() => undefined | MarketTimestampsKeySpecifier),
		fields?: MarketTimestampsFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NetworkParameter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetworkParameterKeySpecifier | (() => undefined | NetworkParameterKeySpecifier),
		fields?: NetworkParameterFieldPolicy,
	},
	NewAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewAssetKeySpecifier | (() => undefined | NewAssetKeySpecifier),
		fields?: NewAssetFieldPolicy,
	},
	NewMarket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewMarketKeySpecifier | (() => undefined | NewMarketKeySpecifier),
		fields?: NewMarketFieldPolicy,
	},
	NewMarketCommitment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewMarketCommitmentKeySpecifier | (() => undefined | NewMarketCommitmentKeySpecifier),
		fields?: NewMarketCommitmentFieldPolicy,
	},
	NodeSignature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeSignatureKeySpecifier | (() => undefined | NodeSignatureKeySpecifier),
		fields?: NodeSignatureFieldPolicy,
	},
	OracleData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OracleDataKeySpecifier | (() => undefined | OracleDataKeySpecifier),
		fields?: OracleDataFieldPolicy,
	},
	OracleSpec?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OracleSpecKeySpecifier | (() => undefined | OracleSpecKeySpecifier),
		fields?: OracleSpecFieldPolicy,
	},
	OracleSpecConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OracleSpecConfigurationKeySpecifier | (() => undefined | OracleSpecConfigurationKeySpecifier),
		fields?: OracleSpecConfigurationFieldPolicy,
	},
	OracleSpecToFutureBinding?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OracleSpecToFutureBindingKeySpecifier | (() => undefined | OracleSpecToFutureBindingKeySpecifier),
		fields?: OracleSpecToFutureBindingFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderEstimate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderEstimateKeySpecifier | (() => undefined | OrderEstimateKeySpecifier),
		fields?: OrderEstimateFieldPolicy,
	},
	Party?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartyKeySpecifier | (() => undefined | PartyKeySpecifier),
		fields?: PartyFieldPolicy,
	},
	PeggedOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PeggedOrderKeySpecifier | (() => undefined | PeggedOrderKeySpecifier),
		fields?: PeggedOrderFieldPolicy,
	},
	Position?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		fields?: PositionFieldPolicy,
	},
	PositionResolution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionResolutionKeySpecifier | (() => undefined | PositionResolutionKeySpecifier),
		fields?: PositionResolutionFieldPolicy,
	},
	PreparedAmendOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedAmendOrderKeySpecifier | (() => undefined | PreparedAmendOrderKeySpecifier),
		fields?: PreparedAmendOrderFieldPolicy,
	},
	PreparedCancelOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedCancelOrderKeySpecifier | (() => undefined | PreparedCancelOrderKeySpecifier),
		fields?: PreparedCancelOrderFieldPolicy,
	},
	PreparedLiquidityProvision?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedLiquidityProvisionKeySpecifier | (() => undefined | PreparedLiquidityProvisionKeySpecifier),
		fields?: PreparedLiquidityProvisionFieldPolicy,
	},
	PreparedProposal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedProposalKeySpecifier | (() => undefined | PreparedProposalKeySpecifier),
		fields?: PreparedProposalFieldPolicy,
	},
	PreparedSubmitOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedSubmitOrderKeySpecifier | (() => undefined | PreparedSubmitOrderKeySpecifier),
		fields?: PreparedSubmitOrderFieldPolicy,
	},
	PreparedVote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedVoteKeySpecifier | (() => undefined | PreparedVoteKeySpecifier),
		fields?: PreparedVoteFieldPolicy,
	},
	PreparedWithdrawal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreparedWithdrawalKeySpecifier | (() => undefined | PreparedWithdrawalKeySpecifier),
		fields?: PreparedWithdrawalFieldPolicy,
	},
	PriceLevel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceLevelKeySpecifier | (() => undefined | PriceLevelKeySpecifier),
		fields?: PriceLevelFieldPolicy,
	},
	PriceMonitoringBounds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceMonitoringBoundsKeySpecifier | (() => undefined | PriceMonitoringBoundsKeySpecifier),
		fields?: PriceMonitoringBoundsFieldPolicy,
	},
	PriceMonitoringParameters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceMonitoringParametersKeySpecifier | (() => undefined | PriceMonitoringParametersKeySpecifier),
		fields?: PriceMonitoringParametersFieldPolicy,
	},
	PriceMonitoringSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceMonitoringSettingsKeySpecifier | (() => undefined | PriceMonitoringSettingsKeySpecifier),
		fields?: PriceMonitoringSettingsFieldPolicy,
	},
	PriceMonitoringTrigger?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceMonitoringTriggerKeySpecifier | (() => undefined | PriceMonitoringTriggerKeySpecifier),
		fields?: PriceMonitoringTriggerFieldPolicy,
	},
	Property?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PropertyKeySpecifier | (() => undefined | PropertyKeySpecifier),
		fields?: PropertyFieldPolicy,
	},
	PropertyKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PropertyKeyKeySpecifier | (() => undefined | PropertyKeyKeySpecifier),
		fields?: PropertyKeyFieldPolicy,
	},
	Proposal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProposalKeySpecifier | (() => undefined | ProposalKeySpecifier),
		fields?: ProposalFieldPolicy,
	},
	ProposalTerms?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProposalTermsKeySpecifier | (() => undefined | ProposalTermsKeySpecifier),
		fields?: ProposalTermsFieldPolicy,
	},
	ProposalVote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProposalVoteKeySpecifier | (() => undefined | ProposalVoteKeySpecifier),
		fields?: ProposalVoteFieldPolicy,
	},
	ProposalVoteSide?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProposalVoteSideKeySpecifier | (() => undefined | ProposalVoteSideKeySpecifier),
		fields?: ProposalVoteSideFieldPolicy,
	},
	ProposalVotes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProposalVotesKeySpecifier | (() => undefined | ProposalVotesKeySpecifier),
		fields?: ProposalVotesFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RiskFactor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RiskFactorKeySpecifier | (() => undefined | RiskFactorKeySpecifier),
		fields?: RiskFactorFieldPolicy,
	},
	ScalingFactors?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScalingFactorsKeySpecifier | (() => undefined | ScalingFactorsKeySpecifier),
		fields?: ScalingFactorsFieldPolicy,
	},
	SettleDistressed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettleDistressedKeySpecifier | (() => undefined | SettleDistressedKeySpecifier),
		fields?: SettleDistressedFieldPolicy,
	},
	SettlePosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettlePositionKeySpecifier | (() => undefined | SettlePositionKeySpecifier),
		fields?: SettlePositionFieldPolicy,
	},
	SimpleRiskModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleRiskModelKeySpecifier | (() => undefined | SimpleRiskModelKeySpecifier),
		fields?: SimpleRiskModelFieldPolicy,
	},
	SimpleRiskModelParams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimpleRiskModelParamsKeySpecifier | (() => undefined | SimpleRiskModelParamsKeySpecifier),
		fields?: SimpleRiskModelParamsFieldPolicy,
	},
	Statistics?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatisticsKeySpecifier | (() => undefined | StatisticsKeySpecifier),
		fields?: StatisticsFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	TargetStakeParameters?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetStakeParametersKeySpecifier | (() => undefined | TargetStakeParametersKeySpecifier),
		fields?: TargetStakeParametersFieldPolicy,
	},
	TimeUpdate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeUpdateKeySpecifier | (() => undefined | TimeUpdateKeySpecifier),
		fields?: TimeUpdateFieldPolicy,
	},
	TradableInstrument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TradableInstrumentKeySpecifier | (() => undefined | TradableInstrumentKeySpecifier),
		fields?: TradableInstrumentFieldPolicy,
	},
	Trade?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TradeKeySpecifier | (() => undefined | TradeKeySpecifier),
		fields?: TradeFieldPolicy,
	},
	TradeFee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TradeFeeKeySpecifier | (() => undefined | TradeFeeKeySpecifier),
		fields?: TradeFeeFieldPolicy,
	},
	TradeSettlement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TradeSettlementKeySpecifier | (() => undefined | TradeSettlementKeySpecifier),
		fields?: TradeSettlementFieldPolicy,
	},
	TransactionSubmitted?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionSubmittedKeySpecifier | (() => undefined | TransactionSubmittedKeySpecifier),
		fields?: TransactionSubmittedFieldPolicy,
	},
	TransferBalance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferBalanceKeySpecifier | (() => undefined | TransferBalanceKeySpecifier),
		fields?: TransferBalanceFieldPolicy,
	},
	TransferResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferResponseKeySpecifier | (() => undefined | TransferResponseKeySpecifier),
		fields?: TransferResponseFieldPolicy,
	},
	TransferResponses?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferResponsesKeySpecifier | (() => undefined | TransferResponsesKeySpecifier),
		fields?: TransferResponsesFieldPolicy,
	},
	UpdateMarket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMarketKeySpecifier | (() => undefined | UpdateMarketKeySpecifier),
		fields?: UpdateMarketFieldPolicy,
	},
	UpdateNetworkParameter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateNetworkParameterKeySpecifier | (() => undefined | UpdateNetworkParameterKeySpecifier),
		fields?: UpdateNetworkParameterFieldPolicy,
	},
	Vote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		fields?: VoteFieldPolicy,
	},
	Withdrawal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithdrawalKeySpecifier | (() => undefined | WithdrawalKeySpecifier),
		fields?: WithdrawalFieldPolicy,
	}
};