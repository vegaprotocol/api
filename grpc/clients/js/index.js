// GENERATED CODE -- DO NOT EDIT!

var api_trading_grpc = require('./generated/api/trading_grpc_pb.js')
var api_trading = require('./generated/api/trading_pb.js')
var assets_grpc = require('./generated/assets_grpc_pb.js')
var assets = require('./generated/assets_pb.js')
var chain_events_grpc = require('./generated/chain_events_grpc_pb.js')
var chain_events = require('./generated/chain_events_pb.js')
var commands_v1_commands_grpc = require('./generated/commands/v1/commands_grpc_pb.js')
var commands_v1_commands = require('./generated/commands/v1/commands_pb.js')
var commands_v1_oracles_grpc = require('./generated/commands/v1/oracles_grpc_pb.js')
var commands_v1_oracles = require('./generated/commands/v1/oracles_pb.js')
var commands_v1_transaction_grpc = require('./generated/commands/v1/transaction_grpc_pb.js')
var commands_v1_transaction = require('./generated/commands/v1/transaction_pb.js')
var commands_v1_validator_commands_grpc = require('./generated/commands/v1/validator_commands_grpc_pb.js')
var commands_v1_validator_commands = require('./generated/commands/v1/validator_commands_pb.js')
var coreapi_v1_coreapi_grpc = require('./generated/coreapi/v1/coreapi_grpc_pb.js')
var coreapi_v1_coreapi = require('./generated/coreapi/v1/coreapi_pb.js')
var events_v1_events_grpc = require('./generated/events/v1/events_grpc_pb.js')
var events_v1_events = require('./generated/events/v1/events_pb.js')
var github_com_mwitkow_go_proto_validators_validator_grpc = require('./generated/github.com/mwitkow/go-proto-validators/validator_grpc_pb.js')
var github_com_mwitkow_go_proto_validators_validator = require('./generated/github.com/mwitkow/go-proto-validators/validator_pb.js')
var governance_grpc = require('./generated/governance_grpc_pb.js')
var governance = require('./generated/governance_pb.js')
var markets_grpc = require('./generated/markets_grpc_pb.js')
var markets = require('./generated/markets_pb.js')
var oracles_v1_data_grpc = require('./generated/oracles/v1/data_grpc_pb.js')
var oracles_v1_data = require('./generated/oracles/v1/data_pb.js')
var oracles_v1_spec_grpc = require('./generated/oracles/v1/spec_grpc_pb.js')
var oracles_v1_spec = require('./generated/oracles/v1/spec_pb.js')
var snapshot_v1_snapshot_grpc = require('./generated/snapshot/v1/snapshot_grpc_pb.js')
var snapshot_v1_snapshot = require('./generated/snapshot/v1/snapshot_pb.js')
var tm_replay_grpc = require('./generated/tm/replay_grpc_pb.js')
var tm_replay = require('./generated/tm/replay_pb.js')
var vega_grpc = require('./generated/vega_grpc_pb.js')
var vega = require('./generated/vega_pb.js')
var wallet_v1_wallet_grpc = require('./generated/wallet/v1/wallet_grpc_pb.js')
var wallet_v1_wallet = require('./generated/wallet/v1/wallet_pb.js')

module.exports = {
  api: {
    trading: api_trading,
    trading_grpc: api_trading_grpc
  },
  assets: assets,
  assets_grpc: assets_grpc,
  chain_events: chain_events,
  chain_events_grpc: chain_events_grpc,
  commands: {
    v1: {
      commands: commands_v1_commands,
      commands_grpc: commands_v1_commands_grpc,
      oracles: commands_v1_oracles,
      oracles_grpc: commands_v1_oracles_grpc,
      transaction: commands_v1_transaction,
      transaction_grpc: commands_v1_transaction_grpc,
      validator_commands: commands_v1_validator_commands,
      validator_commands_grpc: commands_v1_validator_commands_grpc
    }
  },
  coreapi: {
    v1: {
      coreapi: coreapi_v1_coreapi,
      coreapi_grpc: coreapi_v1_coreapi_grpc
    }
  },
  events: {
    v1: {
      events: events_v1_events,
      events_grpc: events_v1_events_grpc
    }
  },
  github_com: {
    mwitkow: {
      go_proto_validators: {
        validator: github_com_mwitkow_go_proto_validators_validator,
        validator_grpc: github_com_mwitkow_go_proto_validators_validator_grpc
      }
    }
  },
  governance: governance,
  governance_grpc: governance_grpc,
  markets: markets,
  markets_grpc: markets_grpc,
  oracles: {
    v1: {
      data: oracles_v1_data,
      data_grpc: oracles_v1_data_grpc,
      spec: oracles_v1_spec,
      spec_grpc: oracles_v1_spec_grpc
    }
  },
  snapshot: {
    v1: {
      snapshot: snapshot_v1_snapshot,
      snapshot_grpc: snapshot_v1_snapshot_grpc
    }
  },
  tm: {
    replay: tm_replay,
    replay_grpc: tm_replay_grpc
  },
  vega: vega,
  vega_grpc: vega_grpc,
  wallet: {
    v1: {
      wallet: wallet_v1_wallet,
      wallet_grpc: wallet_v1_wallet_grpc
    }
  }
}
