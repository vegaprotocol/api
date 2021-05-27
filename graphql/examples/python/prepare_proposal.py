#!/usr/bin/env python3
"""
This script tests the preparation of a proposal using GraphQL.
"""

import argparse
import json
import sys

import requests

DEFAULT_VEGA_NODE_URL = "https://lb.testnet.vega.xyz"

GQL_PREPAREPROPOSAL_MUTATION = """mutation prepareProposal(
  $partyId: ID!
  $reference: String!
  $proposalTerms: ProposalTermsInput!
) {
  prepareProposal(
    partyId: $partyId
    reference: $reference
    proposalTerms: $proposalTerms
  ) {
    blob
  }
}
"""


def parse_args() -> argparse.Namespace:
    """Parse commandline arguments."""
    parser = argparse.ArgumentParser(
        description="Prepare a proposal with GraphQL",
    )

    parser.add_argument(
        "--proposal",
        type=str,
        required=True,
        help="Path to a JSON file containing a proposal",
    )

    parser.add_argument(
        "--url",
        type=str,
        required=False,
        default=DEFAULT_VEGA_NODE_URL,
        help=f"URL to a Vega node (default: {DEFAULT_VEGA_NODE_URL}",
    )

    parser.add_argument(
        "--verbose",
        type=bool,
        required=False,
        default=False,
        help="Verbose output",
    )
    return parser.parse_args()


def main():
    """Main"""
    args = parse_args()

    with open(args.proposal, "r") as handle:
        variables = json.load(handle)

    request = {
        "query": GQL_PREPAREPROPOSAL_MUTATION,
        "variables": variables,
    }
    if args.verbose:
        print("Request:")
        print(json.dumps(request, indent=2, sort_keys=True))
    response = requests.post(
        f"{args.url}/query",
        json=request,
    )
    if response.status_code != 200:
        print(f"HTTP {response.status_code}: {response.text}")
        sys.exit(1)
    jsonresponse = response.json()
    if "errors" in jsonresponse:
        print("Failed to prepare the proposal: Errors:")
        errors = jsonresponse["errors"]
        print(json.dumps(errors, indent=2, sort_keys=True))
        sys.exit(1)

    if "data" not in jsonresponse or jsonresponse["data"] is None:
        print("Failed to prepare the proposal: Missing data")
        sys.exit(1)

    blob = jsonresponse["data"]["prepareProposal"]["blob"]
    print("The proposal passed validation and was successfully prepared.")
    if args.verbose:
        print("Blob:")
        print(blob)
    sys.exit(0)


if __name__ == "__main__":
    main()
