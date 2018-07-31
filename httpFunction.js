const { hook } = require('fc-helper')

exports.handler = hook(async (context) => {
  context.body = 'hello world!\n'
})
