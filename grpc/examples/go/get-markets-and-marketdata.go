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

	// __get_markets:
	// Request a list of markets available on the specified Vega Network
	request := api.MarketsRequest{}
	markets, err := dataClient.Markets(context.Background(), &request)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Markets: %s", markets)
	// :get_markets__
	marketId := markets.Markets[0].Id

	// __get_market_data:
	// Request a single market by identifier on a Vega network
	requestMarket := api.MarketByIDRequest{MarketId: marketId}
	MarketObject, err := dataClient.MarketByID(context.Background(), &requestMarket)
	if err != nil {
		panic(err)
	}

	fmt.Printf("MarketData: %s", MarketObject)
	// :get_market_data__
}
