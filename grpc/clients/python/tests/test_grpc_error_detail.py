import json

import grpc

import vegaapiclient as vac


def test_grpc_error_detail(coreapi):
    # Construct a request of the WRONG type.
    req = vac.api.trading.SubmitTransactionV2Request(
        tx=vac.commands.v1.transaction.Transaction(
            input_data=bytes("\x00\x01\x02", "ascii"),
        ),
    )
    # TODO: use: with pytest.raises(grpc.RpcError) as e_info:
    try:
        # Make a call using the WRONG request type.
        result = coreapi.ListAccounts(req)
        print(f"result={result}")
        assert False, (
            "The gRPC call using the WRONG request message type should have"
            "failed, but did not."
        )
    except grpc.RpcError as exc:
        errd = vac.grpc_error_detail(exc)
        print(json.dumps(errd, indent=2, sort_keys=True))
        assert "gRPCerror" in errd
        missing = [
            dictkey
            for dictkey in [
                "code",
                "debug_error_string",
                "details",
                "metadata",
            ]
            if dictkey not in errd["gRPCerror"]
        ]
        assert missing == [], f"Items missing in gRPCerror dict: {missing}"
