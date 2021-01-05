var test = require('tape');

// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');
var xhr = require("xmlhttprequest");

var x = require('../index')

function wallet_server_login(walletServerURL, walletName, walletPassphrase) {
  var request = new xhr.XMLHttpRequest();
  var token;
  request.onload = function () {
    if(request.status !== 200) {
      throw "Failed to log in to wallet server: HTTP " + request.status + " " + request.responseText;
    }
    var j = JSON.parse(request.responseText);
    if(j === undefined) {
      throw "Failed to get parse response JSON: " + request.responseText;
    }
    token = j.token;
    if(token === undefined) {
      throw "Failed to get token from response body: " + request.responseText;
    }
  }
  request.open("POST", wserver + "/api/v1/auth/token", true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify({wallet: wname, passphrase: wpass}, null, 2));
  return token;
}



test('Submit Order', function (t) {
  t.plan(3);

  // Log in to wallet server
  wname = "de3mo";
  wpass = "123";
  wserver = process.env.WALLETSERVER;
  if(wserver === undefined) {
    t.fail("Missing WALLETSERVER");
  }
  try {
    var token = wallet_server_login(t, wserver, wname, wpass);
  } catch (e) {
    t.fail("Failed to log in to waller server: " + e);
    process.exit(1);

  }
  // if(token === undefined) {
  // }


  var sub = new x.vega.OrderSubmission()
  sub.setExpiresat(2000000000000000000)
  sub.setMarketid("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPP")
  sub.setPartyid("1122aabb") // a public key
  sub.setPrice(99912345)
  sub.setSide(x.vega.Side.SIDE_BUY)
  sub.setSize(1)
  sub.setTimeinforce(x.vega.Order.TimeInForce.TIF_GTT)
  sub.setType(x.vega.Order.Type.TYPE_LIMIT)

  var req1 = new x.api.trading.SubmitOrderRequest();
  req1.setSubmission(sub)

  var req2 = x.api.trading.SubmitOrderRequest.deserializeBinary(req1.serializeBinary())

  // For some reason, nested wrappers can be null or {}.
  req2.wrappers_["1"].wrappers_ = {};

  t.deepEqual(req2, req1)
});
