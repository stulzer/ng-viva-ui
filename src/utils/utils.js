'use strict'

module.exports = {
  camelize: (str, options) => {
    const strPieces = str.split('-')
    options = typeof options === 'undefined' ? {} : options

    strPieces[0] = strPieces[0].charAt(0)[options.capitalize ? 'toUpperCase' : 'toLowerCase']() + strPieces[0].slice(1)

    return strPieces[0] + strPieces.slice(1).map(
        (piece) => {
          return piece.charAt(0).toUpperCase() + piece.slice(1)
        }
      ).join('')
  }
}
