// A modules map for the example

module.exports = {
  './app': (module, require) => {
    const log = require('./log')
    const math = require('./math')

    log(math.add(1, 2))
  },
  './log': (module, require) => {
    module.exports = str => console.log(str)
  },
  './math': (module, require) => {
    const add = (a, b) => a + b
    const sub = (a, b) => a - b

    module.exports = { add, sub }
  }
}
