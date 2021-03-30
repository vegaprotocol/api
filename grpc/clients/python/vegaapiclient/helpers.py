import grpc
import itertools
import json
import re
from typing import Any, Dict, List

import google.rpc.status_pb2 as goog_status


def remove_control_chars(s: str) -> str:
    # https://stackoverflow.com/questions/92438
    control_chars = "".join(
        map(chr, itertools.chain(range(0x00, 0x20), range(0x7F, 0xA0)))
    )
    control_char_re = re.compile(f"[{re.escape(control_chars)}]")
    return control_char_re.sub("?", s)


def grpc_error_detail(err: grpc.RpcError) -> Dict[str, Any]:
    """
    This function takes a `grpc.RpcError` and returns a dict containing the
    error details.

    Usage example:

    ```python
    import vegaapiclient as vac
    grpc_client = vac.VegaTradingClient(node_grpc_url)
    grpc_request = ...
    try:
        grpc_response = grpc_client.NameOfEndpoint(grpc_request)
    except grpc.RpcError as exc:
        print(json.dumps(vac.grpc_error_detail(exc), indent=2, sort_keys=True))
        exit(1)
    ```
    """

    if not isinstance(err, grpc.RpcError):
        raise ValueError(f"Not a gRPC error: {err}")

    e: Dict[str, Any] = {}
    for arg in err.args:
        for attr in ["code", "details"]:
            if hasattr(arg, attr):
                e[attr] = str(getattr(arg, attr))

        if hasattr(arg, "debug_error_string"):
            try:
                parsed = json.loads(arg.debug_error_string)
                e["debug_error_string"] = parsed
            except json.decoder.JSONDecodeError:
                e["debug_error_string_raw"] = arg.debug_error_string

    md: List[Dict[str, Any]] = []
    for tmd in err.trailing_metadata():
        if not (
            hasattr(tmd, "key")
            and hasattr(tmd, "value")
            and tmd.key.startswith("grpc-status-details")
        ):
            continue

        status = goog_status.Status()
        status.MergeFromString(tmd.value)
        md.append(
            {
                "code": str(status.code),
                "message": status.message,
                "details": [
                    {
                        "type": d.type_url,
                        "value": remove_control_chars(
                            d.value.decode("utf-8", errors="backslashreplace")
                        ),
                    }
                    for d in status.details
                ],
            }
        )

    e["metadata"] = md

    return {"gRPCerror": e}
