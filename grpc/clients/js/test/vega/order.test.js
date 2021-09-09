var test = require('tape');
var { skipIfLocalOnly } = require('../lib/env')

// var grpc = require('@grpc/grpc-js');
// var protoLoader = require('@grpc/proto-loader');
var xhr = require("xmlhttprequest");

var { commands, vega, api } = require('../../index')

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
    const order = new commands.v1.commands.OrderSubmission()
    t.equal(typeof order, 'object')
    t.end()
})

test('Basic test: Can serialise an empty order to an unsigned tx', t => {
    const order = new commands.v1.commands.OrderSubmission()
    t.deepEqual(order.serializeBinary(), new Uint8Array(), 'An empty order should serialise to an empty Uint8Array')
    t.end()
})

test('A basic order can be constructed and serialised to an unsigned tx', t => {
    const hardcodedExpectedOutput = new Uint8Array([10, 14, 116, 101, 115, 116, 45, 109, 97, 114, 107, 101, 116, 45, 105, 100, 16, 10, 24, 20, 32, 1])

    const order = new commands.v1.commands.OrderSubmission()
    order.setMarketId('test-market-id')
    order.setPrice(10)
    order.setSize(20)
    order.setSide(vega.Side.SIDE_BUY)

    let got = order.serializeBinary()
    t.deepEqual(got, hardcodedExpectedOutput, 'The serialised order should match the hardcoded output. Got ' + got)
    t.end()
})

test('A basic order can be deserialised', t => {
    const existingSerializedOrder = new Uint8Array([10, 14, 116, 101, 115, 116, 45, 109, 97, 114, 107, 101, 116, 45, 105, 100, 16, 10, 24, 20, 32, 1])

    const order = new commands.v1.commands.OrderSubmission.deserializeBinary(existingSerializedOrder)

    t.equal(order.getMarketId(), 'test-market-id')
    t.equal(order.getPrice(), 10)
    t.equal(order.getSize(), 20)
    t.equal(order.getSide(), vega.Side.SIDE_BUY)

    t.end()
})

test('Order Validation: An order size must be a number', t => {
    const order = new commands.v1.commands.OrderSubmission()
    order.setSize('this is bad')

    t.equal(order.getSize(), 'this is bad')
    t.throws(() => {
       order.serializeBinary()
    },'Assertion failed', 'An order with a size set to a string should fail to serialise')
    t.end()
})

test('Order Validation: An order price must be a number', t => {
    const order = new commands.v1.commands.OrderSubmission()
    order.setPrice('this is bad')

    t.equal(order.getPrice(), 'this is bad')
    t.throws(() => {
        order.serializeBinary()
    },'Assertion failed', 'An order with a price set to a string should fail to serialise')
    t.end()
})

test('Order Validation: An order expiry date must be a number', t => {
    const dateShouldBeANumber = new Date().toDateString()

    const order = new commands.v1.commands.OrderSubmission()

    order.setExpiresAt(dateShouldBeANumber)

    t.equal(order.getExpiresAt(), dateShouldBeANumber)
    t.throws(() => {
        order.serializeBinary()
    },'Assertion failed', 'An order with a date set to a string should fail to serialise')
    t.end()
})

test('Order can be a pegged order when an order peg is provided', t => {
    const dateShouldBeANumber = new Date().toDateString()

    const order = new commands.v1.commands.OrderSubmission()
    const orderPeg = new vega.PeggedOrder()
    orderPeg.setOffset(1)

    order.setPeggedOrder(orderPeg)
    t.deepEqual(order.getPeggedOrder(), orderPeg)

    t.doesNotThrow(() => {
        order.serializeBinary()
    })
    t.end()
})
