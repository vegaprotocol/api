package main

import "github.com/vegaprotocol/api/grpc/examples/go/helpers"

func main() {
    // Perform login attempts to log in to the configured
    // Vega wallet and get an access token for use when
    // signing and interacting with the wallet
    helpers.PerformLogin()

    // If there are --ci args passed when running the script
    // then it will use the details from env vars directly
}
