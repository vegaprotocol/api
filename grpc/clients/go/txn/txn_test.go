package txn_test

import (
	"testing"

	"github.com/vegaprotocol/api/grpc/clients/go/txn"

	"github.com/stretchr/testify/require"
)

func TestPrepareLiquidityProvision(t *testing.T) {
	// in: *api.PrepareLiquidityProvisionRequest
	// out: *api.PrepareLiquidityProvisionResponse, error

	response, err := txn.PrepareLiquidityProvision(nil)
	require.Nil(t, response)
	require.Error(t, err)
	require.Contains(t, err.Error(), "nil pointer")
}

// PrepareSubmitOrder prepares an API request. Code copied from Core.
func TestPrepareSubmitOrder(t *testing.T) {
	// in: *api.PrepareSubmitOrderRequest
	// out: *api.PrepareSubmitOrderResponse, error

	response, err := txn.PrepareSubmitOrder(nil)
	require.Nil(t, response)
	require.Error(t, err)
	require.Contains(t, err.Error(), "nil pointer")
}
