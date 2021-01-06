var skip = (process.env.WALLET_SERVER === 'false')

module.exports = {
    skipIfLocalOnly: { skip: skip }
}