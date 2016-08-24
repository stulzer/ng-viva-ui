'use strict'

module.exports = {
  cleanRollupObj: (obj) => {
    delete obj._entries
    delete obj._entry
    delete obj._formats
    delete obj._rollupPlugins
    delete obj._testEntry
    delete obj._testFormat
  }
}
