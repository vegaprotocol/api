# Vega API auto-generated gRPC clients

Version: 0.23.0-pre2

This repository contains auto-generated gRPC clients for various languages.

## Update process

```bash
# Copy proto files from Core
VEGACORE=/path/to/go/src/vega make preproto

# Generate API clients
make proto

# Run tests
GRPC_NODE=veganode.example.com:1234 WALLETSERVER=https://vegawallet.example.com make test
```

## Release process

```bash
./setversion.sh 1.2.3  # no "v" prefix
```
