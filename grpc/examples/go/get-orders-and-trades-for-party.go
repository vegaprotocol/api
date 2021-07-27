package main

import (
	"fmt"

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

	// __get_orders_for_party:
	// Request a list of orders by party (pubKey)
	ordersByPartyReq := api.OrdersByPartyRequest{PartyId: pubkey}
	ordersByPartyResp, err := dataClient.OrdersByParty(context.Background(), &ordersByPartyReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("OrdersByParty: %v\n", ordersByPartyResp)
	// :get_orders_for_party__

	// __get_trades_for_party:
	//Request a list of trades by market on a Vega network
	tradesByPartyReq := api.TradesByPartyRequest{PartyId: pubkey}
	tradesByPartyResp, err := dataClient.TradesByParty(context.Background(), &tradesByPartyReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("TradesByParty: %v\n", tradesByPartyResp)
	// :get_trades_for_party__
}
