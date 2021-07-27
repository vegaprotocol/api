package main

import (
	"context"
	"fmt"

	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
	"github.com/vegaprotocol/api/grpc/examples/go/helpers"

	"google.golang.org/grpc"
)

func main() {
	nodeURLGrpc := helpers.GetFromEnv("NODE_URL_GRPC")
	conn, err := grpc.Dial(nodeURLGrpc, grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	dataClient := api.NewTradingDataServiceClient(conn)

	// __get_network_params:
	// Request a list of network parameters configured on a Vega network
	request := api.NetworkParametersRequest{}
	network, err := dataClient.NetworkParameters(context.Background(), &request)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Network Parameters: %s", network)
	// :get_network_params__
}
