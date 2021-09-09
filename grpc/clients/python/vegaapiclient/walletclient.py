import json
from typing import Any, Dict, List

import google.protobuf.json_format as goog_json
import requests


class WalletClient:
    """
    `WalletClient` is a thin wrapper, and does little more than take care of
    the token.
    """

    def __init__(self, url: str) -> None:
        self.token = ""
        self.url = url

        self._httpsession = requests.Session()

    def _header(self) -> Dict[str, Any]:
        if self.token == "":
            raise Exception("not logged in")
        return {"Authorization": "Bearer " + self.token}

    def create(self, walletname: str, passphrase: str) -> requests.Response:
        """
        Create a wallet using a wallet name and a passphrase. If a wallet
        already exists, the action fails. Otherwise, a JWT (json web token) is
        returned.
        """
        req = {"wallet": walletname, "passphrase": passphrase}
        url = f"{self.url}/api/v1/wallets"
        response = self._httpsession.post(url, json=req)
        if response.status_code != 200:
            self.token = ""
        else:
            self.token = response.json()["token"]
        return response

    def login(self, walletname: str, passphrase: str) -> requests.Response:
        """
        Log in to an existing wallet. If the wallet does not exist, or if the
        passphrase is incorrect, the action fails. Otherwise, a JWT (json web
        token) is returned.
        """
        req = {"wallet": walletname, "passphrase": passphrase}
        url = "{}/api/v1/auth/token".format(self.url)
        response = self._httpsession.post(url, json=req)
        if response.status_code == 200:
            self.token = response.json()["token"]
        else:
            self.token = ""
        return response

    def logout(self) -> requests.Response:
        """
        Log out from a wallet. The token is deleted from the `WalletClient`
        object.
        """
        url = "{}/api/v1/auth/token".format(self.url)
        response = self._httpsession.delete(url, headers=self._header())
        if response.status_code == 200:
            self.token = ""
        return response

    def getkey(self, pub_key: str) -> requests.Response:
        """
        Get keypair information (excluding private key).

        `pub_key` must be a hex-encoded string.
        """
        url = "{}/api/v1/keys/{}".format(self.url, pub_key)
        return self._httpsession.get(url, headers=self._header())

    def taintkey(self, pub_key: str, passphrase: str) -> requests.Response:
        """
        Label a keypair as tainted.

        pub_key must be a hex-encoded string.
        """
        req = {"passphrase": passphrase}
        url = "{}/api/v1/keys/{}/taint".format(self.url, pub_key)
        return self._httpsession.put(url, headers=self._header(), json=req)

    def listkeys(self) -> requests.Response:
        """
        List information (excluding private keys) on all keypairs.
        """
        url = "{}/api/v1/keys".format(self.url)
        return self._httpsession.get(url, headers=self._header())

    def generatekey(
        self, passphrase: str, metadata: List[Dict[str, str]]
    ) -> requests.Response:
        """
        Generate a new keypair with the given metadata.
        """
        req = {"passphrase": passphrase, "meta": metadata}
        url = "{}/api/v1/keys".format(self.url)
        return self._httpsession.post(url, headers=self._header(), json=req)

    def signtxv2(self, txn) -> requests.Response:
        """Sign a transaction V2."""
        # `https://googleapis.dev/python/protobuf/latest/google/protobuf`
        # `/json_format.html#google.protobuf.json_format.MessageToJson`

        req = json.loads(goog_json.MessageToJson(txn))
        url = f"{self.url}/api/v1/command"
        return self._httpsession.post(url, headers=self._header(), json=req)

    def updatekeymetadata(
        self, pub_key: str, passphrase: str, metadata: List[Dict[str, str]]
    ) -> requests.Response:
        """
        Update the metadata for a key pair. Any existing metadata is removed,
        and replaced with the supplied metadata.

        `pub_key` must be a hex-encoded string.
        """
        req = {"passphrase": passphrase, "meta": metadata}
        url = "{}/api/v1/keys/{}/metadata".format(self.url, pub_key)
        return self._httpsession.put(url, headers=self._header(), json=req)
