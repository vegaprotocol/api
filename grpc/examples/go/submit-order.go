package main

import (
	"encoding/base64"
	"fmt"

	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
	v1 "github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/commands/v1"
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
	tradingClient := api.NewTradingServiceClient(conn)

	// __get_market:
	// Get a list of markets
	marketRequest := api.MarketsRequest{}
	markets, err := dataClient.Markets(context.Background(), &marketRequest)
	if err != nil {
		panic(err)
	}
	marketId := markets.Markets[0].Id
	// :get_market__

	// __prepare_order:
	// Vega node: Prepare the SubmitOrder
	orderSubmission := v1.OrderSubmission{
		Size:        1,
		Price:       100000,
		MarketId:    marketId,
		Side:        proto.Side_SIDE_BUY,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTC,
		Type:        proto.Order_TYPE_LIMIT,
	}

	order := api.PrepareSubmitOrderRequest{Submission: &orderSubmission}
	prepareResponse, err := tradingClient.PrepareSubmitOrder(context.Background(), &order)
	if err != nil {
		panic(err)
	}
	// :prepare_order__

	// Sign the prepared transaction
	data := prepareResponse.Blob
	sEnc := base64.StdEncoding.EncodeToString([]byte(data))

	// __sign_tx_order:
	reqStr := fmt.Sprintf(
		"{ \"pubKey\": \"%s\", \"propagate\": true, \"tx\": \"%s\" }",
		pubkey, sEnc)

	_, err = helpers.SignTransactionDeprecated(reqStr)
	if err != nil {
		panic(err)
	}
	// :sign_tx_order__
}
