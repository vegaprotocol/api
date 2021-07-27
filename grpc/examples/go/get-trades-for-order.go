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

	// __get_trades_for_order:
	// Request a list of trades for a specific order on a Vega network
	orderID := "V0000929211-0046318720"
	tradesByOrderReq := api.TradesByOrderRequest{OrderId: orderID}
	tradesByOrderResp, err := dataClient.TradesByOrder(context.Background(), &tradesByOrderReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("TradesByOrder: %v\n", tradesByOrderResp)
	// :get_trades_for_order__

}
