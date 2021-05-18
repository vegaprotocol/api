import random
import os
import requests
import string
from typing import Any


def check_response(r: requests.Response) -> None:
    """
    Raise a helpful exception if the HTTP response was not 200.
    """
    if r.status_code != 200:
        raise Exception(f"{r.url} returned HTTP {r.status_code} {r.text}")


def check_var(val: str) -> bool:
    """
    Return true if the value is ok.
    """
    if val is not None and val == "":
        return False
    if val is not None and invalid(val):
        return False
    return True


def check_url(url: str) -> bool:
    """
    Return true if the URL is ok.
    """
    if not check_var(url):
        return False
    if not any(url.startswith(prefix) for prefix in ["http://", "https://"]):
        return False
    return True


def get_from_env(var_name: str) -> str:
    """
    Get a value from an environment variable. Used in CI for testing.
    """
    val = os.getenv(var_name, "")
    if val == "":
        print(f"Error: Missing environment variable {var_name}.")
        exit(1)

    return val


def invalid(val: str) -> bool:
    """
    Return true if none of the invalid strings are found in the value.
    """
    bzzt = [">>", "e.g.", "example"]
    return any(x in val for x in bzzt)


def random_string(length: int = 20) -> str:
    """
    Generate a random string, made of letters and digits.
    """
    choices = string.ascii_letters + string.digits
    return "".join(random.choice(choices) for i in range(length))


def fix_walletserver_url(url: str) -> str:
    """
    Help guide users against including api version suffix in wallet server URL.
    """
    for suffix in ["/api/v1/", "/api/v1", "/api/", "/api", "/"]:
        if not url.endswith(suffix):
            continue
        print(
            f'There\'s no need to add "{suffix}" to the wallet server URL. '
            "Removing it and continuing..."
        )
        url = url[: -len(suffix)]

    return url


def enum_to_str(e: Any, val: int) -> str:
    return e.keys()[e.values().index(val)]