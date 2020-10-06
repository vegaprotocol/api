import requests


def check_response(r: requests.Response) -> None:
    assert (
        r.status_code == 200
    ), f"{r.url} returned HTTP {r.status_code} {r.text}"
