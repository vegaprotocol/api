package grpc

import (
	"errors"
	"fmt"
	"strings"

	"google.golang.org/grpc/status"
)

// GRPCErrorDetail takes an error, converts it to a gRPC Status object, and pulls out the code, message, and (most
// importantly) the details list.
func GRPCErrorDetail(err error) error {
	errStatus, _ := status.FromError(err)
	var b strings.Builder
	b.WriteString("gRPCError{code=")
	b.WriteString(errStatus.Code().String())
	b.WriteString(" message='")
	b.WriteString(errStatus.Message())
	b.WriteString("'")
	details := errStatus.Details()
	if len(details) > 0 {
		b.WriteString(" details=[")
		for i, d := range details {
			if i > 0 {
				b.WriteString(", ")
			}
			b.WriteString(fmt.Sprintf("%v", d))
		}
		b.WriteString("]")
	}
	b.WriteString("}")
	return errors.New(b.String())
}
