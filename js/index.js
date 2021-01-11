// GENERATED CODE -- DO NOT EDIT!

<<<<<<< HEAD
var assets = require('./generated/assets_pb.js')
var chain_events = require('./generated/chain_events_pb.js')
var events = require('./generated/events_pb.js')
var governance = require('./generated/governance_pb.js')
var markets = require('./generated/markets_pb.js')
var vega = require('./generated/vega_pb.js')
var api_trading = require('./generated/api/trading_pb.js')
var go_proto_validators_validator = require('./generated/github.com/mwitkow/go-proto-validators/validator_pb.js')
var tm_replay = require('./generated/tm/replay_pb.js')
=======
var assets = require('./generated/proto/assets_pb.js')
var chain_events = require('./generated/proto/chain_events_pb.js')
var events = require('./generated/proto/events_pb.js')
var governance = require('./generated/proto/governance_pb.js')
var markets = require('./generated/proto/markets_pb.js')
var vega = require('./generated/proto/vega_pb.js')
var api_trading = require('./generated/proto/api/trading_pb.js')
var tm_replay = require('./generated/proto/tm/replay_pb.js')
var tx = require('./tx/index')
>>>>>>> ec27893... Terrible JS split

module.exports = {
  assets: assets,
  chain_events: chain_events,
  events: events,
  governance: governance,
  markets: markets,
  vega: vega,
  api: {
    trading: api_trading,
  },
  go_proto_validators: {
    validator: go_proto_validators_validator,
  },
  tm: {
    replay: tm_replay,
  },
  tx: tx
}
