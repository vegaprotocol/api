var skip = (process.env.WALLETSERVER === 'false')

module.exports = {
    skipIfLocalOnly: { skip: skip }
}
