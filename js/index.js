// GENERATED CODE -- DO NOT EDIT!

var api_trading = require('./generated/api/trading_pb.js')
var assets = require('./generated/assets_pb.js')
var chain_events = require('./generated/chain_events_pb.js')
var events = require('./generated/events_pb.js')
var github_com_mwitkow_go_proto_validators_validator = require('./generated/github.com/mwitkow/go-proto-validators/validator_pb.js')
var governance = require('./generated/governance_pb.js')
var markets = require('./generated/markets_pb.js')
var oracles_v1_oracle_data = require('./generated/oracles/v1/oracle_data_pb.js')
var oracles_v1_oracle_spec = require('./generated/oracles/v1/oracle_spec_pb.js')
var tm_replay = require('./generated/tm/replay_pb.js')
var vega = require('./generated/vega_pb.js')

module.exports = {
  api: {
    trading: api_trading
  },
  assets: assets,
  chain_events: chain_events,
  events: events,
  github_com: {
    mwitkow: {
      go_proto_validators: {
        validator: github_com_mwitkow_go_proto_validators_validator
      }
    }
  },
  governance: governance,
  markets: markets,
  oracles: {
    v1: {
      oracle_data: oracles_v1_oracle_data,
      oracle_spec: oracles_v1_oracle_spec
    }
  },
  tm: {
    replay: tm_replay
  },
  vega: vega
}
