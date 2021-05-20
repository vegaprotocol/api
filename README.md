# Vega API

Version: 0.36.0

This repository contains everything you need for interacting with the Vega APIs.

There are currently 3 APIs:
* gRPC
* GraphQL
* REST

## gRPC

See https://grpc.io/ for general information on gRPC.

Vega provides a rich gRPC API. For a complete list of endpoints, see [`proto/api/trading.proto`](https://github.com/vegaprotocol/api/blob/develop/proto/api/trading.proto):

* Use `TradingService` for:
  * `Prepare*` endpoints are there for convenience, and will be removed in the near future
  * `SubmitTransaction` receives and executes a signed transaction. For transaction signing, see [go-wallet](https://github.com/vegaprotocol/go-wallet/).
* Use `TradingDataService` for public information on:
  * assets, e.g. Ethereum ERC20 tokens
  * balances for accounts: general, margin
  * market data and metadata
  * information on orders and trades
  * Governance data: proposals, votes
  * event stream subscriptions for the above

Before writing your own API client (either manually or using auto-generation), check if a pre-created on is already available. See [Auto-generated gRPC clients](#auto-generated-grpc-clients) below.

## GraphQL

See https://graphql.org/ for general information on GraphQL.

Vega provides a fully-featured GraphQL API. For the complete schema, see [`graphql/schema.graphql`](https://github.com/vegaprotocol/api/blob/develop/graphql/schema.graphql).

The GraphQL Playground is enabled for convenience on Testnet non-validator nodes: https://lb.testnet.vega.xyz/playground.

It is possible to use nested queries that return only the desired information.

## REST

Vega provides a limited REST API. Streaming of events is not supported.

For an [OpenAPI](https://swagger.io/docs/specification/about/) json file that describes all available endpoints, see [`rest/api/trading.swagger.json`](https://github.com/vegaprotocol/api/blob/develop/rest/api/trading.swagger.json). The mapping between gRPC endpoints and their REST equivalent is found in [`rest/grpc-rest-bindings.yml`](https://github.com/vegaprotocol/api/blob/develop/rest/grpc-rest-bindings.yml).

# Auto-generated gRPC clients

Vega uses [`buf`](https://buf.build/) to auto-generate API clients in various programming languages. The list of currently supported clients is found in [`buf.gen.yaml`](https://github.com/vegaprotocol/api/blob/develop/buf.gen.yaml), and the full build process is in the [`Makefile`](https://github.com/vegaprotocol/api/blob/develop/Makefile).

The per-language API clients are found in [`grpc/clients/`](https://github.com/vegaprotocol/api/tree/develop/grpc/clients/).

Pull requests for additional languages are gratefully received.

# Information for maintainers

## Update process - gRPC

Install BUF
* https://docs.buf.build/installation/

```bash
# Copy proto files from Core
cd .../api # repo root dir
VEGACORE=/path/to/go/src/vega make preproto

# Generate gRPC API clients, gRPC documentation, REST OpenAPI json.
make proto

# Run tests
GRPC_NODE=veganode.example.com:1234 WALLETSERVER=https://vegawallet.example.com make test
```

### Java gRPC generation

Install protobuf
* [Ubuntu 18.04 installation instructions](https://gist.github.com/olivoil/a2e0e4f3427db8b6ef4a6374f9c4cb32)

Install maven
* Linux: `sudo apt install maven`

Run the following make command

    make buf-generate-java

Run `./make-jar.sh` in the `grpc/clients/java` directory

## Update process - GraphQL

```bash
# Copy schema.graphql from Core
cd .../api/graphql
VEGACORE=/path/to/go/src/vega make pregraphql

# Generate GraphQL documentation
make graphql
```

## Release process

```bash
./setversion.sh 1.2.3  # no "v" prefix
```

# Licence

Distributed under the MIT License. See [`LICENSE`](https://github.com/vegaprotocol/api/blob/develop/LICENSE) for more information.
