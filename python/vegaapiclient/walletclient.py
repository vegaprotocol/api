import requests

from typing import Any, Dict, List


class WalletClient(object):
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
        url = "{}/api/v1/wallets".format(self.url)
        r = self._httpsession.post(url, json=req)
        if r.status_code != 200:
            self.token = ""
        else:
            self.token = r.json()["token"]
        return r

    def login(self, walletname: str, passphrase: str) -> requests.Response:
        """
        Log in to an existing wallet. If the wallet does not exist, or if the
        passphrase is incorrect, the action fails. Otherwise, a JWN (json web
        token) is returned.
        """
        req = {"wallet": walletname, "passphrase": passphrase}
        url = "{}/api/v1/auth/token".format(self.url)
        r = self._httpsession.post(url, json=req)
        if r.status_code == 200:
            self.token = r.json()["token"]
        else:
            self.token = ""
        return r

    def logout(self) -> requests.Response:
        """
        Log out from a wallet. The token is deleted from the WalletClient
        object.
        """
        url = "{}/api/v1/auth/token".format(self.url)
        r = self._httpsession.delete(url, headers=self._header())
        if r.status_code == 200:
            self.token = ""
        return r

    def getkey(self, pubKey: str) -> requests.Response:
        """
        Get keypair information (excluding private key).

        pubKey must be a hex-encoded string.
        """
        url = "{}/api/v1/keys/{}".format(self.url, pubKey)
        return self._httpsession.get(url, headers=self._header())

    def taintkey(self, pubKey: str, passphrase: str) -> requests.Response:
        """
        Label a keypair as tainted.

        pubKey must be a hex-encoded string.
        """
        req = {"passphrase": passphrase}
        url = "{}/api/v1/keys/{}/taint".format(self.url, pubKey)
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

    def signtx(self, tx, pubKey) -> requests.Response:
        """
        Sign a transaction.

        tx must be a base64-encoded string, e.g.
        tx = base64.b64encode(b"someblob").decode("ascii")

        pubKey must be a hex-encoded string.
        """
        req = {"tx": tx, "pubKey": pubKey, "propagate": False}
        url = "{}/api/v1/messages".format(self.url)
        return self._httpsession.post(url, headers=self._header(), json=req)

    def updatekeymetadata(
        self, pubKey: str, passphrase: str, metadata: List[Dict[str, str]]
    ) -> requests.Response:
        """
        Update the metadata for a keypair. Any existing metadata is removed,
        and replaced with the supplied metadata.

        pubKey must be a hex-encoded string.
        """
        req = {"passphrase": passphrase, "meta": metadata}
        url = "{}/api/v1/keys/{}/metadata".format(self.url, pubKey)
        return self._httpsession.put(url, headers=self._header(), json=req)
