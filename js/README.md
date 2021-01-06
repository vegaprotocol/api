# Vega API client
This is the Vega API client, which can be used to produce transactions for the Vega GRPC API.

## Usage
For examples, see the [sample API scripts](https://github.com/vegaprotocol/sample-api-scripts/) repository, or check out the tests folder for basic usage.

## Browser usage
These transactions can be sent over [REST](https://docs.testnet.vega.xyz/docs/apis/rest/) or [GraphQL](https://docs.testnet.vega.xyz/docs/apis/graphql/) from a browser context. To sign these transactions with your keys, you will first need to sign the transaction with your Vega key, for which you will need [go-wallet](https://github.com/vegaprotocol/go-wallet).

As browsers don't support GRPC natively, to send transactions over GRPC you would need [grpc-web](https://github.com/grpc/grpc-web) or another solution.

## Tests
To run the full end-to end test, you will need to run an instance of go-wallet, and provide an address in an environment variable.
```shell
WALLET_SERVER=http://localhost:1789 npm run test
```

In case you don't have access to one, for the sake of convenience, the following command will the subset of tests that don't require a server:
```shell
npm run test:local
```

For pull requests, the full end-to-end test suite will run.

# Disclaimer
This is a community effort. It is not supported by Vega, nor is it guaranteed
to be up to date or compatible with new Vega releases.
