import random
import os
import requests
import string
from typing import Any, Optional


def check_response(r: requests.Response) -> None:
    if r.status_code != 200:
        raise Exception(f"{r.url} returned HTTP {r.status_code} {r.text}")


def check_var(val: Optional[str]) -> bool:
    """
    Return true if the value is ok.
    """
    if missing(val):
        return False
    if invalid(val):
        return False
    return True


def check_url(url: Optional[str]) -> bool:
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
    val = os.getenv(var_name)
    if missing(val):
        print(f"Error: Missing environment variable {var_name}.")
        exit(1)

    return val


def invalid(val: str) -> bool:
    bzzt = [">>", "e.g.", "example"]
    return any(x in val for x in bzzt)


def missing(val: Optional[str]) -> bool:
    """
    Return true if the value is missing.
    """
    return val is None or val == ""


def random_string(length: int = 20) -> str:
    choices = string.ascii_letters + string.digits
    return "".join(random.choice(choices) for i in range(length))


def fix_walletserver_url(url: str) -> str:
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
