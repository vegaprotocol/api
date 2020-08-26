import os
import pytest
import random
import string
from typing import Any, Tuple

import vegaapiclient as vac


@pytest.fixture(scope="module")
def trading():
    """
    Provide a VegaTradingClient, connected to $GRPC_NODE.
    """
    grpc_node = os.getenv("GRPC_NODE")
    assert grpc_node is not None and grpc_node != ""
    return vac.VegaTradingClient(grpc_node)


@pytest.fixture(scope="module")
def tradingdata():
    """
    Provide a VegaTradingDataClient, connected to $GRPC_NODE.
    """
    grpc_node = os.getenv("GRPC_NODE")
    assert grpc_node is not None and grpc_node != ""
    return vac.VegaTradingDataClient(grpc_node)


@pytest.fixture(scope="module")
def faucetclient():
    """
    Provide a FaucetClient, connected to $FAUCETSERVER.
    """
    faucetserver = os.getenv("FAUCETSERVER")
    assert faucetserver is not None and faucetserver != ""
    return vac.FaucetClient(faucetserver)


@pytest.fixture(scope="module")
def walletclient():
    """
    Provide a WalletClient, connected to $WALLETSERVER.
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
def walletClientWalletKeypair(
    walletclient, walletname, walletpassphrase
) -> Tuple[Any, str, str, str]:
    """
    Provide a WalletClient that has had a wallet and keypair added.

    Returns:
    * a WalletClient
    * a random wallet name
    * a random passphrase
    * a public key
    """

    # Create wallet
    r = walletclient.create(walletname, walletpassphrase)
    assert r.status_code == 200
    j = r.json()
    assert "token" in j, "Bad response from CreateWallet: {}".format(j)

    # Create a keypair
    r = walletclient.generatekey(walletpassphrase, [])
    assert r.status_code == 200
    pubKey = r.json()["key"]["pub"]

    return (walletclient, walletname, walletpassphrase, pubKey)
