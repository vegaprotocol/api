// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_trading_pb = require('../api/trading_pb.js');
var vega_pb = require('../vega_pb.js');
var markets_pb = require('../markets_pb.js');
var governance_pb = require('../governance_pb.js');
var assets_pb = require('../assets_pb.js');
var events_v1_events_pb = require('../events/v1/events_pb.js');
var oracles_v1_spec_pb = require('../oracles/v1/spec_pb.js');
var oracles_v1_data_pb = require('../oracles/v1/data_pb.js');
var commands_v1_commands_pb = require('../commands/v1/commands_pb.js');
var commands_v1_transaction_pb = require('../commands/v1/transaction_pb.js');
var commands_v1_validator_commands_pb = require('../commands/v1/validator_commands_pb.js');
var github_com_mwitkow_go$proto$validators_validator_pb = require('../github.com/mwitkow/go-proto-validators/validator_pb.js');

function serialize_api_v1_GetVegaTimeRequest(arg) {
  if (!(arg instanceof api_trading_pb.GetVegaTimeRequest)) {
    throw new Error('Expected argument of type api.v1.GetVegaTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_GetVegaTimeRequest(buffer_arg) {
  return api_trading_pb.GetVegaTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_GetVegaTimeResponse(arg) {
  if (!(arg instanceof api_trading_pb.GetVegaTimeResponse)) {
    throw new Error('Expected argument of type api.v1.GetVegaTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_GetVegaTimeResponse(buffer_arg) {
  return api_trading_pb.GetVegaTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_LastBlockHeightRequest(arg) {
  if (!(arg instanceof api_trading_pb.LastBlockHeightRequest)) {
    throw new Error('Expected argument of type api.v1.LastBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_LastBlockHeightRequest(buffer_arg) {
  return api_trading_pb.LastBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_LastBlockHeightResponse(arg) {
  if (!(arg instanceof api_trading_pb.LastBlockHeightResponse)) {
    throw new Error('Expected argument of type api.v1.LastBlockHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_LastBlockHeightResponse(buffer_arg) {
  return api_trading_pb.LastBlockHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_ObserveEventBusRequest(arg) {
  if (!(arg instanceof api_trading_pb.ObserveEventBusRequest)) {
    throw new Error('Expected argument of type api.v1.ObserveEventBusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_ObserveEventBusRequest(buffer_arg) {
  return api_trading_pb.ObserveEventBusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_ObserveEventBusResponse(arg) {
  if (!(arg instanceof api_trading_pb.ObserveEventBusResponse)) {
    throw new Error('Expected argument of type api.v1.ObserveEventBusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_ObserveEventBusResponse(buffer_arg) {
  return api_trading_pb.ObserveEventBusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_PropagateChainEventRequest(arg) {
  if (!(arg instanceof api_trading_pb.PropagateChainEventRequest)) {
    throw new Error('Expected argument of type api.v1.PropagateChainEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_PropagateChainEventRequest(buffer_arg) {
  return api_trading_pb.PropagateChainEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_PropagateChainEventResponse(arg) {
  if (!(arg instanceof api_trading_pb.PropagateChainEventResponse)) {
    throw new Error('Expected argument of type api.v1.PropagateChainEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_PropagateChainEventResponse(buffer_arg) {
  return api_trading_pb.PropagateChainEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_StatisticsRequest(arg) {
  if (!(arg instanceof api_trading_pb.StatisticsRequest)) {
    throw new Error('Expected argument of type api.v1.StatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_StatisticsRequest(buffer_arg) {
  return api_trading_pb.StatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_StatisticsResponse(arg) {
  if (!(arg instanceof api_trading_pb.StatisticsResponse)) {
    throw new Error('Expected argument of type api.v1.StatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_StatisticsResponse(buffer_arg) {
  return api_trading_pb.StatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_SubmitTransactionV2Request(arg) {
  if (!(arg instanceof api_trading_pb.SubmitTransactionV2Request)) {
    throw new Error('Expected argument of type api.v1.SubmitTransactionV2Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_SubmitTransactionV2Request(buffer_arg) {
  return api_trading_pb.SubmitTransactionV2Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_v1_SubmitTransactionV2Response(arg) {
  if (!(arg instanceof api_trading_pb.SubmitTransactionV2Response)) {
    throw new Error('Expected argument of type api.v1.SubmitTransactionV2Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_v1_SubmitTransactionV2Response(buffer_arg) {
  return api_trading_pb.SubmitTransactionV2Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradingServiceService = exports.TradingServiceService = {
  // Submit a signed transaction (v2)
submitTransactionV2: {
    path: '/api.v1.TradingService/SubmitTransactionV2',
    requestStream: false,
    responseStream: false,
    requestType: api_trading_pb.SubmitTransactionV2Request,
    responseType: api_trading_pb.SubmitTransactionV2Response,
    requestSerialize: serialize_api_v1_SubmitTransactionV2Request,
    requestDeserialize: deserialize_api_v1_SubmitTransactionV2Request,
    responseSerialize: serialize_api_v1_SubmitTransactionV2Response,
    responseDeserialize: deserialize_api_v1_SubmitTransactionV2Response,
  },
  // Propagate a chain event
propagateChainEvent: {
    path: '/api.v1.TradingService/PropagateChainEvent',
    requestStream: false,
    responseStream: false,
    requestType: api_trading_pb.PropagateChainEventRequest,
    responseType: api_trading_pb.PropagateChainEventResponse,
    requestSerialize: serialize_api_v1_PropagateChainEventRequest,
    requestDeserialize: deserialize_api_v1_PropagateChainEventRequest,
    responseSerialize: serialize_api_v1_PropagateChainEventResponse,
    responseDeserialize: deserialize_api_v1_PropagateChainEventResponse,
  },
  // Get Statistics on Vega
statistics: {
    path: '/api.v1.TradingService/Statistics',
    requestStream: false,
    responseStream: false,
    requestType: api_trading_pb.StatisticsRequest,
    responseType: api_trading_pb.StatisticsResponse,
    requestSerialize: serialize_api_v1_StatisticsRequest,
    requestDeserialize: deserialize_api_v1_StatisticsRequest,
    responseSerialize: serialize_api_v1_StatisticsResponse,
    responseDeserialize: deserialize_api_v1_StatisticsResponse,
  },
  // Get the height of the last tendermint block
lastBlockHeight: {
    path: '/api.v1.TradingService/LastBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: api_trading_pb.LastBlockHeightRequest,
    responseType: api_trading_pb.LastBlockHeightResponse,
    requestSerialize: serialize_api_v1_LastBlockHeightRequest,
    requestDeserialize: deserialize_api_v1_LastBlockHeightRequest,
    responseSerialize: serialize_api_v1_LastBlockHeightResponse,
    responseDeserialize: deserialize_api_v1_LastBlockHeightResponse,
  },
  // Get Time
getVegaTime: {
    path: '/api.v1.TradingService/GetVegaTime',
    requestStream: false,
    responseStream: false,
    requestType: api_trading_pb.GetVegaTimeRequest,
    responseType: api_trading_pb.GetVegaTimeResponse,
    requestSerialize: serialize_api_v1_GetVegaTimeRequest,
    requestDeserialize: deserialize_api_v1_GetVegaTimeRequest,
    responseSerialize: serialize_api_v1_GetVegaTimeResponse,
    responseDeserialize: deserialize_api_v1_GetVegaTimeResponse,
  },
  // Subscribe to a stream of events from the core
observeEventBus: {
    path: '/api.v1.TradingService/ObserveEventBus',
    requestStream: true,
    responseStream: true,
    requestType: api_trading_pb.ObserveEventBusRequest,
    responseType: api_trading_pb.ObserveEventBusResponse,
    requestSerialize: serialize_api_v1_ObserveEventBusRequest,
    requestDeserialize: deserialize_api_v1_ObserveEventBusRequest,
    responseSerialize: serialize_api_v1_ObserveEventBusResponse,
    responseDeserialize: deserialize_api_v1_ObserveEventBusResponse,
  },
};

exports.TradingServiceClient = grpc.makeGenericClientConstructor(TradingServiceService);
