var test = require('tape');
var { skipIfLocalOnly } = require('../lib/env')

// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');
var xhr = require("xmlhttprequest");

var { vega, api } = require('../../index')

function wallet_server_login(walletServerURL, walletName, walletPassphrase) {
    var request = new xhr.XMLHttpRequest();
    var token;
    request.onload = function () {
        if (request.status !== 200) {
            throw "Failed to log in to wallet server: HTTP " + request.status + " " + request.responseText;
        }
        var j = JSON.parse(request.responseText);
        if (j === undefined) {
            throw "Failed to get parse response JSON: " + request.responseText;
        }
        token = j.token;
        if (token === undefined) {
            throw "Failed to get token from response body: " + request.responseText;
        }
    }
    request.open("POST", walletServerURL + "/api/v1/auth/token", true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify({wallet: walletName, passphrase: walletPassphrase}, null, 2));
    return token;
}

test('Basic test: Can create an order', t => {
    const order = new vega.OrderSubmission()
    t.equal(typeof order, 'object')
    t.end()
})

test('Basic test: Can serialise an empty order to an unsigned tx', t => {
    const order = new vega.OrderSubmission()
    t.deepEqual(order.serializeBinary(), new Uint8Array(), 'An empty order should serialise to an empty Uint8Array')
    t.end()
})

test('A basic order can be constructed and serialised to an unsigned tx', t => {
    const hardcodedExpectedOutput =  new Uint8Array([18, 14, 116, 101, 115, 116, 45, 109, 97, 114, 107, 101, 116, 45, 105, 100, 32, 10, 40, 20, 48, 1])

    const order = new vega.OrderSubmission()
    order.setMarketid('test-market-id')
    order.setPrice(10)
    order.setSize(20)
    order.setSide(vega.Side.SIDE_BUY)

    t.deepEqual(order.serializeBinary(), hardcodedExpectedOutput, 'The serialised order should match the hardcoded output')
    t.end()
})

test('A basic order can be deserialised', t => {
    const existingSerializedOrder =  new Uint8Array([18, 14, 116, 101, 115, 116, 45, 109, 97, 114, 107, 101, 116, 45, 105, 100, 32, 10, 40, 20, 48, 1])

    const order = new vega.OrderSubmission.deserializeBinary(existingSerializedOrder)

    t.equal(order.getMarketid(), 'test-market-id')
    t.equal(order.getPrice(), 10)
    t.equal(order.getSize(), 20)
    t.equal(order.getSide(), vega.Side.SIDE_BUY)

    t.end()
})

test('Order Validation: An order size must be a number', t => {
    const order = new vega.OrderSubmission()
    order.setSize('this is bad')

    t.equal(order.getSize(), 'this is bad')
    t.throws(() => {
       order.serializeBinary()
    },'Assertion failed', 'An order with a size set to a string should fail to serialise')
    t.end()
})

test('Order Validation: An order price must be a number', t => {
    const order = new vega.OrderSubmission()
    order.setPrice('this is bad')

    t.equal(order.getPrice(), 'this is bad')
    t.throws(() => {
        order.serializeBinary()
    },'Assertion failed', 'An order with a price set to a string should fail to serialise')
    t.end()
})

test('Order Validation: An order expiry date must be a number', t => {
    const dateShouldBeANumber = new Date().toDateString()

    const order = new vega.OrderSubmission()

    order.setExpiresat(dateShouldBeANumber)

    t.equal(order.getExpiresat(), dateShouldBeANumber)
    t.throws(() => {
        order.serializeBinary()
    },'Assertion failed', 'An order with a date set to a string should fail to serialise')
    t.end()
})

test('Order can be a pegged order when an order peg is provided', t => {
    const dateShouldBeANumber = new Date().toDateString()

    const order = new vega.OrderSubmission()
    const orderPeg = new vega.PeggedOrder()
    orderPeg.setOffset(1)

    order.setPeggedorder(orderPeg)
    t.deepEqual(order.getPeggedorder(), orderPeg)

    t.doesNotThrow(() => {
        order.serializeBinary()
    })
    t.end()
})

test('Submit Order', t => {
    // Log in to wallet server
    const walletName = "de3mo";
    const walletPass = "123";
    const walletServer = process.env.WALLETSERVER;
    let token

    if (walletServer === undefined) {
        t.fail("Missing WALLETSERVER");
        return t.end()
    }

    try {
        token = wallet_server_login(t, walletServer, walletName, walletPass);
    } catch (e) {
        t.fail("Failed to log in to waller server: " + e);
        return t.end()
    }

    const sub = new vega.OrderSubmission()
    sub.setExpiresat(2000000000000000000)
    sub.setMarketid("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPP")
    sub.setPartyid("1122aabb") // a public key
    sub.setPrice(99912345)
    sub.setSide(vega.Side.SIDE_BUY)
    sub.setSize(1)
    sub.setTimeinforce(vega.Order.TimeInForce.TIF_GTT)
    sub.setType(vega.Order.Type.TYPE_LIMIT)

    const req1 = new api.trading.SubmitOrderRequest();
    req1.setSubmission(sub)

    const req2 = api.trading.SubmitOrderRequest.deserializeBinary(req1.serializeBinary())

    // For some reason, nested wrappers can be null or {}.
    req2.wrappers_["1"].wrappers_ = {};

    t.deepEqual(req2, req1)
    t.end()

}, skipIfLocalOnly);
