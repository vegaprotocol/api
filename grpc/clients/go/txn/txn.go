package txn

import (
	protobufproto "github.com/golang/protobuf/proto"
	uuid "github.com/satori/go.uuid"
	"github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/api"
)

// Command is a one-byte prefix added to transactions.
type Command byte

// Custom blockchain command encoding, lighter-weight than proto.
const (
	// SubmitOrderCommand ...
	SubmitOrderCommand Command = 0x40
	// CancelOrderCommand ...
	CancelOrderCommand Command = 0x41
	// AmendOrderCommand ...
	AmendOrderCommand Command = 0x42
	// WithdrawCommand ...
	WithdrawCommand Command = 0x44
	// ProposeCommand ...
	ProposeCommand Command = 0x45
	// VoteCommand ...
	VoteCommand Command = 0x46
	// RegisterNodecommand ...
	RegisterNodeCommand Command = 0x47
	// NodeVoteCommand ...
	NodeVoteCommand Command = 0x48
	// NodeSignatureCommand ...
	NodeSignatureCommand Command = 0x49
	// LiquidityProvisionCommand ...
	LiquidityProvisionCommand Command = 0x4A
	// ChainEventCommand ...
	ChainEventCommand Command = 0x50
	// SubmitOracleDataCommand ...
	SubmitOracleDataCommand Command = 0x51
)

// marshalEncode takes a Tx payload and a command and builds a raw Tx.
func marshalEncode(submission protobufproto.Message, cmd Command) (encoded []byte, err error) {
	raw, err := protobufproto.Marshal(submission)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal request", err)
	}

	prefixBytes := []byte(uuid.NewV4().String())
	commandInput := append([]byte{byte(cmd)}, raw...)
	return append(prefixBytes, commandInput...), nil
}

// PrepareLiquidityProvision prepares an API request. Code copied from Core.
func PrepareLiquidityProvision(req *api.PrepareLiquidityProvisionRequest) (*api.PrepareLiquidityProvisionResponse, error) {
	if req == nil || req.Submission == nil {
		return nil, errors.New("nil pointer")
	}
	if err := req.Validate(); err != nil {
		return nil, fmt.Errorf("failed to validate: %w", err)
	}

	raw, err := marshalEncode(req.Submission, LiquidityProvisionCommand)
	if err != nil {
		return nil, err // no need to wrap
	}

	return &api.PrepareLiquidityProvisionResponse{Blob: raw}, nil
}

// PrepareSubmitOrder prepares an API request. Code copied from Core.
func PrepareSubmitOrder(req *api.PrepareSubmitOrderRequest) (*api.PrepareSubmitOrderResponse, error) {
	if req == nil || req.Submission == nil {
		return nil, errors.New("nil pointer")
	}
	if err := req.Validate(); err != nil {
		return nil, fmt.Errorf("failed to validate: %w", err)
	}

	if req.Submission.Reference == "" {
		req.Submission.Reference = uuid.NewV4().String()
	}
	raw, err := marshalEncode(req.Submission, SubmitOrderCommand)
	if err != nil {
		return nil, err // no need to wrap
	}
	return &api.PrepareSubmitOrderResponse{
		Blob:     raw,
		SubmitId: req.Submission.Reference,
	}, nil
}
