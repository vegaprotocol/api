import vegaapiclient as vac


def test_ListAssets(coreapi):
    req = vac.coreapi.v1.coreapi.ListAssetsRequest()
    assets = coreapi.ListAssets(req).assets
    assert len(assets) > 0
    asset_id = assets[0].id

    req = vac.coreapi.v1.coreapi.ListAssetsRequest(asset=asset_id)
    assets = coreapi.ListAssets(req).assets
    assert len(assets) == 1
    assert assets[0].id == asset_id
