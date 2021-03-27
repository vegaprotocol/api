# Vega API auto-generated gRPC clients

Version: 0.33.0

This repository contains auto-generated gRPC clients for various languages.

## Update process - gRPC

```bash
# Copy proto files from Core
cd grpc
VEGACORE=/path/to/go/src/vega make preproto

# Generate API clients
make proto

# Run tests
GRPC_NODE=veganode.example.com:1234 WALLETSERVER=https://vegawallet.example.com make test
```

## Update process - GraphQL
```bash
# Copy schema.graphql from Core
cd graphql
VEGACORE=/path/to/go/src/vega make pregraphql

# Generate documentation
make graphql
```

## Release process

```bash
./setversion.sh 1.2.3  # no "v" prefix
```
