import vegaapiclient as vac


def test_ListAccounts(coreapi):
    req = vac.coreapi.v1.coreapi.ListAccountsRequest()
    accounts = coreapi.ListAccounts(req).accounts
    assert len(accounts) > 0
    party_id = accounts[0].id

    req = vac.coreapi.v1.coreapi.ListAccountsRequest(party=party_id)
    accounts = coreapi.ListAccounts(req).accounts
    assert len(accounts) == 1
    assert accounts[0].id == party_id
