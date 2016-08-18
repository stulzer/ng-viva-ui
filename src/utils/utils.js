'use strict'

module.exports = {
  hifen2LowerCase: (str) => {
    const strPieces = str.split('-')

    return strPieces[0] + strPieces.slice(1).map(
        (piece) => {
          return piece.charAt(0).toUpperCase() + piece.slice(1)
        }
      ).join('')
  },
  cleanRollupObj: (obj) => {
    delete obj._formats
    delete obj._rollupPlugins
    delete obj._testFormat
  }
}
