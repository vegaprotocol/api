#!/usr/bin/env python3

import jinja2
import json
import os
from typing import Any, Dict, List, Tuple


def fn_to_js_varname(fn: str) -> str:
    """
    Convert a file name to a Javascript variable name.
    """
    if fn.endswith("_pb.js"):
        fn = fn[:-6]
    else:
        raise Exception("expected file path to end with '_pb.js'")

    # Split by path separator
    pathparts = fn.split(os.path.sep)
    if pathparts[0] != ".":
        raise Exception("expected '.' as first part of file path")
    if pathparts[1] != "generated":
        raise Exception("expected 'generated' as second part of file path")

    # Chop "." and "generated"
    pathparts = pathparts[2:]

    # Rejoin
    varname = os.path.join(*pathparts)

    # Squash non-varname-friendly chars
    for ch in ["/", ".", "-"]:
        varname = varname.replace(ch, "_")

    return varname


def fn_to_ts_varname(fn: str) -> str:
    """
    Convert a file name to a Typescript variable name.
    """
    if fn.endswith("_pb.d.ts"):
        fn = fn[:-len("_pb.d.ts")]
    elif fn.endswith("_pb_service.d.ts"):
        fn = fn[:-len("_pb_service.d.ts")] + "_service"
    else:
        raise Exception(
            "expected file path to end with '_pb.d.ts' or  '_pb_service.d.ts'")

    # Split by path separator
    pathparts = fn.split(os.path.sep)
    if pathparts[0] != ".":
        raise Exception("expected '.' as first part of file path")
    if pathparts[1] != "generated":
        raise Exception("expected 'generated' as second part of file path")

    # Chop "." and "generated"
    pathparts = pathparts[2:]

    # Rejoin
    varname = os.path.join(*pathparts)

    # Squash non-varname-friendly chars
    for ch in ["/", ".", "-"]:
        varname = varname.replace(ch, "_")

    return varname


def js_requires(files: List[str]) -> List[Tuple[str, str]]:
    return [
        (fn_to_js_varname(f), f)
        for f in files
        if f.endswith("_pb.js")
    ]


def js_module_exports(files: List[str]) -> str:
    result: Dict[str, Any] = {}
    for f in files:
        if not f.endswith("_pb.js"):
            continue

        resultref = result
        for x in f.split(os.path.sep):
            for ch in ["/", ".", "-"]:
                x = x.replace(ch, "_")
            if x not in resultref:
                if x.endswith("_pb_js"):
                    x = x[:-6]
                    resultref[x] = fn_to_js_varname(f)
                else:
                    resultref[x] = {}

            resultref = resultref[x]

    return json.dumps(result["_"]["generated"], indent=2, sort_keys=True).replace('"', "")


def ts_exports(files: List[str]) -> List[Tuple[str, str]]:
    return [
        [fn_to_ts_varname(f), f[:-5]]
        for f in files
        if any(f.endswith(p) for p in ["_pb.d.ts", "_pb_service.d.ts"])
    ]


def main():
    files = sorted([
        os.path.join(root, f)
        for root, _, files in os.walk("./generated")
        for f in sorted(files)
    ])
    env = jinja2.Environment(loader=jinja2.FileSystemLoader("."))

    js_data = {
        "js_requires": js_requires(files),
        "js_module_exports": js_module_exports(files),
    }
    template = env.get_template("index.js.jinja2")
    with open("index.js", "w") as fh:
        fh.write(template.render(js_data))

    ts_data = {
        "ts_exports": ts_exports(files),
    }
    template = env.get_template("index.d.ts.jinja2")
    with open("index.d.ts", "w") as fh:
        fh.write(template.render(ts_data))

if __name__ == "__main__":
    main()






# requires="$(mktemp)"
# modexports="$(mktemp)"
# ts_exports="$(mktemp)"

# # Handle top-level proto
# find "$protodir" -name '*_pb.js' | sort | while read -r pbjs
# do
#     echo "$pbjs"
#     filename="$(basename "$pbjs")"
#     varname="$(echo "$pbjs" | sed -e "s#^$protodir/##;"' s/_pb.js$//' | tr ./- _)"
#     echo "var $varname = require('$pbjs')" >>"$requires"
#     echo "  $varname: $varname," >>"$modexports"

#     echo "export * as $varname from \"${pbjs//.js/}\";" >>"$ts_exports"
# done

# # # Handle proto subdirs
# # find "$protodir" -name '*_pb.js' -print0 | xargs -0 dirname | sort -u | tail +2 | while read -r protosubdir ; do
# #     echo "  $(basename "$protosubdir" | tr - _): {" >>"$modexports"
# #     find "$protosubdir" -maxdepth 1 -name '*_pb.js' | sort | while read -r pbjs
# #     do
# #         filename="$(basename "$pbjs")"
# #         varname="$(echo "$filename" | tr - _ | sed -e 's/_pb.js$//')"
# #         prefix="$(basename "$(dirname "$pbjs")" | tr - _)"
# #         echo "var ${prefix}_${varname} = require('$pbjs')" >>"$requires"
# #         echo "    $varname: ${prefix}_${varname}," >>"$modexports"

# #         echo "export * as ${prefix}_${varname} from \"${pbjs//.js/}\";" >>"$ts_exports"
# #     done
# #     echo "  }," >>"$modexports"
# # done

# cat >index.js <<EOF
# // GENERATED CODE -- DO NOT EDIT!

# $(cat "$requires")

# module.exports = {
# $(cat "$modexports")
# }
# EOF

# cat >index.d.ts <<EOF
# // GENERATED CODE -- DO NOT EDIT!

# $(cat "$ts_exports")
# EOF

# rm -f "$requires" "$modexports" "$ts_exports"
