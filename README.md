# API Clients

This repository contains auto-generated Vega API clients.

## Update process

```bash
# Copy proto files from Core
VEGACORE=/path/to/go/src/vega make preproto

# Generate API clients
make proto

# Run tests
GRPC_NODE=veganode.example.com:1234 WALLETSERVER=https://vegawallet.example.com make test
```
