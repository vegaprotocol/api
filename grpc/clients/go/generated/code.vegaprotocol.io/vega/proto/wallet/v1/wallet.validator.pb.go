// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: wallet/v1/wallet.proto

package v1

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
	_ "github.com/vegaprotocol/api/grpc/clients/go/generated/code.vegaprotocol.io/vega/proto/commands/v1"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

func (this *SubmitTransactionRequest) Validate() error {
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_OrderSubmission); ok {
		if oneOfNester.OrderSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_OrderCancellation); ok {
		if oneOfNester.OrderCancellation != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderCancellation); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderCancellation", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_OrderAmendment); ok {
		if oneOfNester.OrderAmendment != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderAmendment); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderAmendment", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_WithdrawSubmission); ok {
		if oneOfNester.WithdrawSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.WithdrawSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("WithdrawSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_ProposalSubmission); ok {
		if oneOfNester.ProposalSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ProposalSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ProposalSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_VoteSubmission); ok {
		if oneOfNester.VoteSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.VoteSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("VoteSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_LiquidityProvisionSubmission); ok {
		if oneOfNester.LiquidityProvisionSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.LiquidityProvisionSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("LiquidityProvisionSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_DelegateSubmission); ok {
		if oneOfNester.DelegateSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.DelegateSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("DelegateSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_UndelegateSubmission); ok {
		if oneOfNester.UndelegateSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.UndelegateSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("UndelegateSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_NodeRegistration); ok {
		if oneOfNester.NodeRegistration != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeRegistration); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeRegistration", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_NodeVote); ok {
		if oneOfNester.NodeVote != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeVote); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeVote", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_NodeSignature); ok {
		if oneOfNester.NodeSignature != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeSignature); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeSignature", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_ChainEvent); ok {
		if oneOfNester.ChainEvent != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ChainEvent); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ChainEvent", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*SubmitTransactionRequest_OracleDataSubmission); ok {
		if oneOfNester.OracleDataSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OracleDataSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OracleDataSubmission", err)
			}
		}
	}
	return nil
}
