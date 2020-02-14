'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
exports.onCreateNode = require('./gatsby-node/index').createNode
exports.createPages = require('./gatsby-node/index').createPages
