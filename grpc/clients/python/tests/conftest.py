import os
import pytest
import random
import string
from typing import Any, Tuple

import vegaapiclient as vac


@pytest.fixture(scope="module")
def trading():
    """
    Provide a `VegaTradingClient`, connected to $CORE_GRPC_NODE.
    """
    grpc_node = os.getenv("CORE_GRPC_NODE")
    assert grpc_node is not None and grpc_node != ""
    return vac.VegaTradingClient(grpc_node)


@pytest.fixture(scope="module")
def coreapi():
    """
    Provide a `VegaCoreAPIClient`, connected to $DATA_GRPC_NODE.
    """
    grpc_node = os.getenv("DATA_GRPC_NODE")
    assert grpc_node is not None and grpc_node != ""
    return vac.VegaCoreAPIClient(grpc_node)


@pytest.fixture(scope="module")
def walletclient():
    """
    Provide a `WalletClient`, connected to `$WALLETSERVER`.
    """
    walletserver = os.getenv("WALLETSERVER")
    assert walletserver is not None and walletserver != ""
    return vac.WalletClient(walletserver)


@pytest.fixture(scope="module")
def walletname() -> str:
    """
    Return a random wallet name.
    """
    choices = string.ascii_letters + string.digits
    return "".join(random.choice(choices) for i in range(40))


@pytest.fixture(scope="module")
def walletpassphrase() -> str:
    """
    Return a random wallet passphrase, passing strength requirements.
    """
    return "".join(
        "".join(random.choice(req) for i in range(5))
        for req in [
            string.ascii_uppercase,
            string.ascii_lowercase,
            string.digits,
            string.punctuation,
        ]
    )


@pytest.fixture(scope="module")
def walletClientWalletKeypair(walletclient) -> Tuple[Any, str, str, str]:
    """
    Provide a `WalletClient` that has had a wallet and keypair added.

    Returns:
    * a `WalletClient`
    * a random wallet name
    * a random passphrase
    * a public key
    """

    # Use a traderbot bot for Staging.
    wname = "demo"
    wpass = "123"

    # Log in
    r = walletclient.login(wname, wpass)
    assert (
        r.status_code == 200
    ), f"{r.url} returned HTTP {r.status_code} {r.text}"

    r = walletclient.listkeys()
    assert (
        r.status_code == 200
    ), f"{r.url} returned HTTP {r.status_code} {r.text}"
    j = r.json()
    assert len(j["keys"]) > 0
    pubkey = j["keys"][0]["pub"]

    return (walletclient, wname, wpass, pubkey)
