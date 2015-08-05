observ-default
===

[Observ](https://github.com/raynos/observ) but with default value on null.

[![NPM](https://nodei.co/npm/observ-default.png)](https://nodei.co/npm/observ-default/)

## Example

```js
var ObservDefault = require('observ-default')

var obs = ObservDefault('default value')
obs() //=> 'default value'

obs.set('other value')
obs() //=> 'other value'


obs.set(null)
obs() //=> 'default value'
```