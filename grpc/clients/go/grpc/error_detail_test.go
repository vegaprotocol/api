package grpc_test

import (
	"errors"
	"testing"

	apigrpc "github.com/vegaprotocol/api/grpc/clients/go/grpc"

	"github.com/stretchr/testify/require"
	gstatus "google.golang.org/genproto/googleapis/rpc/status"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/anypb"
)

func TestErrorDetail_Unknown(t *testing.T) {
	e := errors.New("bzzt")
	e2 := apigrpc.ErrorDetail(e)
	require.NotNil(t, e2)
	require.Equal(t, "gRPCError{code=Unknown message='bzzt'}", e2.Error())
}

func TestErrorDetail_Simple(t *testing.T) {
	e := status.Error(codes.InvalidArgument, "x should be y")
	e2 := apigrpc.ErrorDetail(e)
	require.NotNil(t, e2)
	require.Equal(t, "gRPCError{code=InvalidArgument message='x should be y'}", e2.Error())
}

func TestErrorDetail_WithDetails(t *testing.T) {
	e1 := gstatus.Status{
		Code:    int32(codes.PermissionDenied),
		Message: "missing token",
		Details: []*anypb.Any{
			// {
			// 	// TODO: Add a real Detail that ends up in the message
			// 	TypeUrl: "bzzt",
			// 	Value:   nil,
			// },
		},
	}
	e := status.ErrorProto(&e1)
	e2 := apigrpc.ErrorDetail(e)
	require.NotNil(t, e2)
	// require.Equal(t, "gRPCError{code=PermissionDenied message='missing token' details=[proto: not found]}", e2.Error())
	require.Equal(t, "gRPCError{code=PermissionDenied message='missing token'}", e2.Error())
}
