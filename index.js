// Resolve Dependencies
/////////////////////////////////////////////////

// Find calls to require from the entrypoint
// In each of the required files, find those
// calls to require.
// When theres no more, move back up and keep
// going until the whole dependency graph is built up.

// During this, a modules map should be created
// const modulesMap = {
//   // Require Path      Module factory function
//   //  |                         |
//   './app': (module, require) => {
//     /* The module (1) */
//   },
//   './log': (module, require) => {
//     /* ... */
//   },
//   './math': (module, require) => {
//     /* ... */
//   }
// }

// (1) the inner modules calls to require are
//     going to be replaced by the bundler.
//     the bundler will also replace the module
//     object.

// Packing
//////////////////////////////////////////////////

// Given a modules map, turn it into a single
// executable


((modulesMap) => {
  const require = name => {
    const module = { exports: {} }
    modulesMap[name](module, require)

    return module.exports
  }

  require('./app')
})(require('./modules-map'))
