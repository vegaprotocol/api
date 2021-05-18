# Run this script to get and store a new token

import requests
import os.path
import json
import helpers

wallet_url = os.getenv("WALLETSERVER_URL")
if not helpers.check_url(wallet_url):
    print("error: Missing wallet server URL, please set this in configuration")
    exit(1)


def load_token():
    if not os.path.isfile("token.temp"):
        print('error: no token file found: try running "python3 login.py"')
        exit(1)
    with open("token.temp", "r") as token_file:
        return json.load(token_file)["token"]


def get_pubkey(token):
    auth_headers = {"Authorization": "Bearer " + token}
    response = requests.get(wallet_url + "/api/v1/keys", headers=auth_headers)
    if response.status_code != 200:
        print("error listing keys: " + response.text)
        exit(1)
    keys = response.json()["keys"]
    if len(keys) < 1:
        print("error: no keys found, use console or Vega Wallet CLI to create one")
        exit(1)
    return keys[0]["pub"], auth_headers


if __name__ == "__main__":
    import getpass

    wallet_name = os.getenv("WALLET_NAME")
    wallet_passphrase = os.getenv("WALLET_PASSPHRASE")

    if not helpers.check_var(wallet_name) or not helpers.check_var(wallet_passphrase):
        wallet_name = input("Enter Vega wallet username: ")
        wallet_passphrase = getpass.getpass("Vega wallet passphrase: ")

    req = {"wallet": wallet_name, "passphrase": wallet_passphrase}
    response = requests.post(wallet_url + "/api/v1/auth/token", json=req)
    if response.status_code != 200:
        print("error logging in: " + response.text)
        exit(1)
    with open("token.temp", "w") as token_file:
        json.dump(response.json(), token_file)
    print('Token saved to "token.temp", done.')
    exit(0)


token = load_token()
pubkey, auth_headers = get_pubkey(token)
