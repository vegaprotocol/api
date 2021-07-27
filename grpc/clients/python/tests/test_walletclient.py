import base64
import random
import requests
import string
from typing import Dict, List


def check_response(r: requests.Response) -> None:
    assert (
        r.status_code == 200
    ), f"{r.url} returned HTTP {r.status_code} {r.text}"


def random_metadata() -> List[Dict[str, str]]:
    return [
        {
            "key": "".join(
                random.choice(string.ascii_uppercase) for i in range(10)
            ),
            "value": "".join(
                random.choice(string.ascii_lowercase) for i in range(10)
            ),
        }
    ]


def test_walletclient(walletclient, walletname, walletpassphrase):
    wname = walletname
    wpass = walletpassphrase

    # Create wallet
    r = walletclient.create(wname, wpass)
    check_response(r)
    j = r.json()
    assert "token" in j, "Bad response: {}".format(j)

    # Log out
    r = walletclient.logout()
    check_response(r)
    j = r.json()
    assert "success" in j, "Bad response: {}".format(j)
    assert j["success"] is True

    # Log in
    r = walletclient.login(wname, wpass)
    check_response(r)
    j = r.json()
    assert "token" in j, "Bad response: {}".format(j)

    # Generate keypair
    meta = random_metadata()
    r = walletclient.generatekey(wpass, meta)
    check_response(r)
    j = r.json()
    assert "key" in j, "Bad response: {}".format(j)
    k = j["key"]
    assert len(k["pub"]) == 64  # ED25519 pubKey is 32 bytes

    # List keypairs
    r = walletclient.listkeys()
    check_response(r)
    j = r.json()
    assert "keys" in j, "Bad response: {}".format(j)
    assert len(j["keys"]) == 1

    # Get one keypair
    r = walletclient.getkey(k["pub"])
    check_response(r)
    j = r.json()
    assert "key" in j, "Bad response: {}".format(j)
    k2 = j["key"]
    assert k2 == k

    # Sign tx
    blob = b"abc123"
    tx = base64.b64encode(blob).decode("ascii")
    r = walletclient.signtx(tx, k["pub"], False)
    check_response(r)
    j = r.json()
    assert "signedTx" in j, "Bad response: {}".format(j)
    signedTx = j["signedTx"]
    assert blob in base64.b64decode(signedTx["tx"])
    # TODO: check signature

    # Update key metadata
    meta2 = random_metadata()
    r = walletclient.updatekeymetadata(k["pub"], wpass, meta2)
    check_response(r)
    j = r.json()
    assert "success" in j, "Bad response: {}".format(j)
    assert j["success"] is True

    # Get one keypair, again
    r = walletclient.getkey(k["pub"])
    check_response(r)
    j = r.json()
    assert "key" in j, "Bad response: {}".format(j)
    k3 = j["key"]
    assert k3["meta"] == meta2

    # Taint key
    r = walletclient.taintkey(k["pub"], wpass)
    check_response(r)
    j = r.json()
    assert "success" in j, "Bad response: {}".format(j)
    assert j["success"] is True
