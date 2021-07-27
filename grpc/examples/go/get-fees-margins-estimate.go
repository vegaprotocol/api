package main

import (
	"fmt"

	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
	"github.com/vegaprotocol/api/grpc/examples/go/helpers"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

func main() {
	// Helpers include logic to authenticate with a Vega wallet service
	// including token storage/public key operations/signing of commands
	// visit ./helpers/wallet.go for more detail
	pubkey := helpers.GetPubKey()

	nodeURLGrpc := helpers.GetFromEnv("NODE_URL_GRPC")
	conn, err := grpc.Dial(nodeURLGrpc, grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	dataClient := api.NewTradingDataServiceClient(conn)

	// Find market
	// __get_market:
	// Request a list of markets available on the specified Vega Network
	request := api.MarketsRequest{}
	markets, err := dataClient.Markets(context.Background(), &request)
	if err != nil {
		panic(err)
	}
	// :get_market__

	marketID := markets.Markets[0].Id
	fmt.Printf("Market id: %s\n", marketID)

	// Fee estimation
	// __get_fees_estimate:
	// Request to estimate trading fees on a Vega network
	order := proto.Order{
		MarketId:    marketID,
		PartyId:     pubkey,
		Price:       100000,
		Size:        100,
		Side:        proto.Side_SIDE_BUY,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTC,
		Type:        proto.Order_TYPE_LIMIT,
	}
	estimationRequest := api.EstimateFeeRequest{Order: &order}
	estimation, err := dataClient.EstimateFee(context.Background(), &estimationRequest)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Estimation: %v\n", estimation)
	// :get_fees_estimate__

	// Margin estimation
	// __get_margins_estimate:
	// Request to estimate trading margin on a Vega network
	order = proto.Order{
		MarketId:    marketID,
		PartyId:     pubkey,
		Price:       600000,
		Size:        100,
		Side:        proto.Side_SIDE_BUY,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTC,
		Type:        proto.Order_TYPE_LIMIT,
	}
	marginRequest := api.EstimateMarginRequest{Order: &order}
	margin, err := dataClient.EstimateMargin(context.Background(), &marginRequest)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Margin estimation: %v\n", margin)
	// :get_margins_estimate__
}
