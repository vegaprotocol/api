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

	// List proposals
	// __get_proposals:
	// Request a list of proposals on a Vega network

	proposalsRequest := api.GetProposalsRequest{}
	proposalsRequest = api.GetProposalsRequest{}
	proposalResponse, err := dataClient.GetProposals(context.Background(), &proposalsRequest)
	fmt.Printf("Proposals: %+v\n", proposalResponse)
	// :get_proposals__

	if len(proposalResponse.Data) == 0 {
		fmt.Println("No open proposal, exit!")
		return
	}

	proposalID := proposalResponse.Data[0].Proposal.Id

	// Get proposal details
	// __get_proposal_detail:
	// Request results of a specific proposal on a Vega network
	proposalByIDRequest := api.GetProposalByIDRequest{ProposalId: proposalID}
	proposalByIDResponse, err := dataClient.GetProposalByID(context.Background(), &proposalByIDRequest)

	fmt.Printf("ProposalById: %+v\n", proposalByIDResponse)
	// :get_proposal_detail__

	// Party proposals
	// __get_proposals_by_party:
	// Request results of a specific proposal on a Vega network
	proposalsByPartyIDRequest := api.GetProposalsByPartyRequest{PartyId: pubkey}
	proposalsByPartyIDResponse, err := dataClient.GetProposalsByParty(context.Background(), &proposalsByPartyIDRequest)

	fmt.Printf("ProposalByPartyId: %+v\n", proposalsByPartyIDResponse)
	// :get_proposals_by_party__

}
