var ObservDefault = require('./')
var assert = require('assert')

var obs = ObservDefault('default value')
assert.equal(obs(), 'default value')

obs.set('other value')
assert.equal(obs(), 'other value')

obs.set(null)
assert.equal(obs(), 'default value')
