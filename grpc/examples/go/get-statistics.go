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

	// __get_statistics:
	// Request the statistics for a node on Vega
	request := api.StatisticsRequest{}
	statistics, err := dataClient.Statistics(context.Background(), &request)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Network statistics: %s", statistics)
	// :get_statistics__
}
