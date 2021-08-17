import vegaapiclient as vac


def test_api():
    assert "trading" in dir(vac.api)


def test_commands():
    assert "v1" in dir(vac.commands)


def test_events():
    assert "v1" in dir(vac.events)


def test_oracles():
    assert "v1" in dir(vac.oracles)


def test_tm():
    assert "replay" in dir(vac.tm)


def test_wallet():
    assert "v1" in dir(vac.wallet)
