package main

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/satori/go.uuid"

	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/commands/v1"
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
	marketId := markets.Markets[0].Id

	// Get Blockchain time
	// __get_expiry_time:
	// Request the current blockchain time, calculate an expiry time
	request := api.GetVegaTimeRequest{}
	vegaTime, err := dataClient.GetVegaTime(context.Background(), &request)
	if err != nil {
		panic(err)
	}
	expireAt := vegaTime.Timestamp + (120 * 1e9)

	// :get_expiry_time__
	fmt.Printf("Blockchain time: %d\n", vegaTime.Timestamp)
	fmt.Printf("Order expiration time: %d\n", expireAt)

	// __prepare_submit_order:
	// Compose a submit order message
	orderRef := fmt.Sprintf("%s-%s", pubkey, uuid.NewV4())
	orderSubmission := &v1.OrderSubmission{
		Size:        10,
		Price:       1,
		MarketId:    marketId,
		Side:        proto.Side_SIDE_BUY,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTT,
		Type:        proto.Order_TYPE_LIMIT,
		ExpiresAt:   expireAt,
		Reference:   orderRef,
	}
	// :prepare_submit_order__

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

	fmt.Printf("Signed order and sent to Vega\n")

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
	fmt.Printf("Order processed. ID: %s, Status: %s\n", orderID, orderStatus)

	// Amend order
	// __prepare_amend_order:
	// Compose an amend order message
	price := proto.Price{Value: 2}
	orderAmendment := &v1.OrderAmendment{
		MarketId:    marketId,
		OrderId:     orderID,
		Price:       &price,
		TimeInForce: proto.Order_TIME_IN_FORCE_GTC,
	}
	// :prepare_amend_order__

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

	fmt.Printf("Signed order amendment and sent to Vega\n")

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
	orderSize := orderByRefResp.Order.Size
	orderPrice := orderByRefResp.Order.Price
	orderTif := orderByRefResp.Order.TimeInForce.String()

	fmt.Printf("Amended order:\n")
	fmt.Printf("ID: %s, Status: %s, Price(Old): 1,\n", orderID, orderStatus)
	fmt.Printf("Price(New): %d, Size(Old): 100, Size(New): %d\n", orderPrice, orderSize)
	fmt.Printf("TimeInForce(Old): TIME_IN_FORCE_GTT, TimeInForce(New): %s,\n", orderTif)


	// Cancel order
	// __prepare_cancel_order_req1:
	// 1 - Cancel single order for party (pubkey)
	orderCancellation := &v1.OrderCancellation{
		OrderId:  orderID,
		MarketId: marketId,
	}
	// :prepare_cancel_order_req1__

	// __prepare_cancel_order_req2:
	// 2 - Cancel all orders on market for party (pubkey)
	orderCancellation = &v1.OrderCancellation{
		MarketId: marketId,
	}
	// :prepare_cancel_order_req2__

	// __prepare_cancel_order_req3:
	// 3 - Cancel all orders on all markets for party (pubkey)
	orderCancellation = &v1.OrderCancellation{}
	// :prepare_cancel_order_req3__


	log.Printf("Order cancellation: %v\n", orderCancellation)

	// __sign_tx_cancel:
	reqCmd, _ = json.Marshal(orderCancellation)
	reqStr = fmt.Sprintf(
		"{ \"pub_key\": \"%s\", \"propagate\": true, \"order_cancellation\": %s }",
		pubkey, reqCmd)

	_, err = helpers.SignTransactionCommand(reqStr)
	if err != nil {
		panic(err)
	}
	// :sign_tx_cancel__

	fmt.Printf("Signed order cancellation request and sent to Vega\n")

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

	fmt.Printf("Cancelled order:\n")
	fmt.Printf("ID: %s, Status: %s\n", orderID, orderStatus)
}
