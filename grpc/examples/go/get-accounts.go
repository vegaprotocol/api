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

	// Get market
	marketRequest := api.MarketsRequest{}
	markets, err := dataClient.Markets(context.Background(), &marketRequest)
	if err != nil {
		panic(err)
	}
	marketID := markets.Markets[0].Id

	// __get_accounts_by_market:
	// Request a list of accounts for a market on a Vega network
	accountsReq := api.MarketAccountsRequest{MarketId: marketID}
	acconutsResp, err := dataClient.MarketAccounts(context.Background(), &accountsReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Market accounts: %v\n", acconutsResp)
	// :get_accounts_by_market__

	// __get_accounts_by_party:
	// Request a list of accounts for a party (pubkey) on a Vega network
	partyReq := api.PartyAccountsRequest{PartyId: pubkey}
	partyResp, err := dataClient.PartyAccounts(context.Background(), &partyReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Party accounts: %v\n", partyResp)
	// :get_accounts_by_party__

	// __get_positions_by_party:
	// Request a list of positions for a party (pubkey) on a Vega network
	partyPosReq := api.PositionsByPartyRequest{PartyId: pubkey}
	partyPosResp, err := dataClient.PositionsByParty(context.Background(), &partyPosReq)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Party positions: %v\n", partyPosResp)
	// :get_positions_by_party__
}
