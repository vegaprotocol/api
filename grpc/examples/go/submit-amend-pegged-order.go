package main

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	uuid "github.com/satori/go.uuid"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
	v1 "github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/commands/v1"
	"github.com/vegaprotocol/api/grpc/examples/go/helpers"

	"github.com/golang/protobuf/ptypes/wrappers"
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

	// __get_market:
	// Request the identifier for the market to place on
	marketRequest := api.MarketsRequest{}
	markets, err := dataClient.Markets(context.Background(), &marketRequest)
	if err != nil {
		panic(err)
	}
	marketId := markets.Markets[0].Id
	// :get_market__

	// __get_expiry_time:
	// Request the current blockchain time, calculate an expiry time
	request := api.GetVegaTimeRequest{}
	vegaTime, err := dataClient.GetVegaTime(context.Background(), &request)

	expireAt := vegaTime.Timestamp + (120 * 1e9)
	// :get_expiry_time__

	fmt.Printf("Blockchain time: %d\n", vegaTime.Timestamp)
	fmt.Printf("Order expiration time: %d\n", expireAt)

	// __prepare_submit_pegged_order:
	// Compose the submit order message with a pegged BUY order
	orderRef := fmt.Sprintf("%s-%s", pubkey, uuid.NewV4())
	peggedOrder := proto.PeggedOrder{
		Offset:    -5,
		Reference: proto.PeggedReference_PEGGED_REFERENCE_MID,
	}
	orderSubmission := &v1.OrderSubmission{
		Size:        1,
		Price:       100000,
		MarketId:    marketId,
		Side:        proto.Side_SIDE_BUY,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTT,
		Type:        proto.Order_TYPE_LIMIT,
		ExpiresAt:   expireAt,
		PeggedOrder: &peggedOrder,
		Reference:   orderRef,
	}
	// :prepare_submit_pegged_order__

	log.Printf("Order submission: %v\n", orderSubmission)

	// __sign_tx_order:
	reqCmd, _ := json.Marshal(orderSubmission)
	reqStr := fmt.Sprintf(
		"{ \"pub_key\": \"%s\", \"propagate\": true, \"order_submission\": %s }",
		pubkey, reqCmd)

	_, err = helpers.SignTransactionCommand(reqStr)
	if err != nil {
		panic(err)
	}
	// :sign_tx_order__

	fmt.Printf("Signed pegged order and sent to Vega\n")

	// Wait for order submission to be included in a block
	fmt.Printf("Waiting for blockchain...\n")
	time.Sleep(4 * time.Second)
	orderByRef := api.OrderByReferenceRequest{Reference: orderRef}

	orderByRefResp, err := dataClient.OrderByReference(context.Background(), &orderByRef)
	if err != nil {
		panic(err)
	}

	orderID := orderByRefResp.Order.Id
	orderStatus := orderByRefResp.Order.Status.String()
	fmt.Printf("Pegged order processed. ID: %s, Status: %s\n", orderID, orderStatus)

	// __prepare_amend_pegged_order:
	// Compose the amend pegged order message
	var peggedOffset wrappers.Int64Value
	peggedOffset.Value = -100

	orderAmendment := &v1.OrderAmendment{
		MarketId:        marketId,
		OrderId:         orderID,
		SizeDelta:       -25,
		TimeInForce:     proto.Order_TIME_IN_FORCE_GTC,
		PeggedReference: proto.PeggedReference_PEGGED_REFERENCE_BEST_BID,
		PeggedOffset:    &peggedOffset,
	}
	// :prepare_amend_pegged_order__
	log.Printf("Order amendment: %v\n", orderAmendment)

	// __sign_tx_amend:
	reqCmd, _ = json.Marshal(orderAmendment)
	reqStr = fmt.Sprintf(
		"{ \"pub_key\": \"%s\", \"propagate\": true, \"order_amendment\": %s }",
		pubkey, reqCmd)

	_, err = helpers.SignTransactionCommand(reqStr)
	if err != nil {
		panic(err)
	}
	// :sign_tx_amend__

	fmt.Printf("Signed pegged order amendment and sent to Vega\n")

	// Wait for amendment to be included in a block
	fmt.Printf("Waiting for blockchain...\n")
	time.Sleep(4 * time.Second)
	orderByRef = api.OrderByReferenceRequest{Reference: orderRef}
	orderByRefResp, err = dataClient.OrderByReference(context.Background(), &orderByRef)
	if err != nil {
		panic(err)
	}

	orderID = orderByRefResp.Order.Id
	orderStatus = orderByRefResp.Order.Status.String()
	oderSize := orderByRefResp.Order.Size
	orderTif := orderByRefResp.Order.TimeInForce.String()
	peggedOrderRef := orderByRefResp.Order.PeggedOrder

	fmt.Printf("Amended pegged order:\n")
	fmt.Printf("Pegged order processed. ID: %s, Status: %s\n", orderID, orderStatus)
	fmt.Printf("Size(Old): 50, Size(New): %d,\n", oderSize)
	fmt.Printf("TimeInForce(Old): TIME_IN_FORCE_GTT, TimeInForce(New): %s,\n", orderTif)
	fmt.Printf("Pegged at:\n%s\n", peggedOrderRef)
}
