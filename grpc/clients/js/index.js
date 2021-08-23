// GENERATED CODE -- DO NOT EDIT!

var api_trading = require('./generated/api/trading_pb.js')
var assets = require('./generated/assets_pb.js')
var chain_events = require('./generated/chain_events_pb.js')
var commands_v1_commands = require('./generated/commands/v1/commands_pb.js')
var commands_v1_oracles = require('./generated/commands/v1/oracles_pb.js')
var commands_v1_transaction = require('./generated/commands/v1/transaction_pb.js')
var commands_v1_validator_commands = require('./generated/commands/v1/validator_commands_pb.js')
var events_v1_events = require('./generated/events/v1/events_pb.js')
var github_com_mwitkow_go_proto_validators_validator = require('./generated/github.com/mwitkow/go-proto-validators/validator_pb.js')
var governance = require('./generated/governance_pb.js')
var markets = require('./generated/markets_pb.js')
var oracles_v1_data = require('./generated/oracles/v1/data_pb.js')
var oracles_v1_spec = require('./generated/oracles/v1/spec_pb.js')
var tm_replay = require('./generated/tm/replay_pb.js')
var vega = require('./generated/vega_pb.js')
var wallet_v1_wallet = require('./generated/wallet/v1/wallet_pb.js')

module.exports = {
  api: {
    trading: api_trading
  },
  assets: assets,
  chain_events: chain_events,
  commands: {
    v1: {
      commands: commands_v1_commands,
      oracles: commands_v1_oracles,
      transaction: commands_v1_transaction,
      validator_commands: commands_v1_validator_commands
    }
  },
  events: {
    v1: {
      events: events_v1_events
    }
  },
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
      data: oracles_v1_data,
      spec: oracles_v1_spec
    }
  },
  tm: {
    replay: tm_replay
  },
  vega: vega,
  wallet: {
    v1: {
      wallet: wallet_v1_wallet
    }
  }
}
