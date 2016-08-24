'use strict'

module.exports = {
  hifen2CamelCase: (str, capitalize) => {
    const strPieces = str.split('-')
    strPieces[0] = strPieces[0].charAt(0)[capitalize ? 'toUpperCase' : 'toLowerCase']() + strPieces[0].slice(1)

    return strPieces[0] + strPieces.slice(1).map(
        (piece) => {
          return piece.charAt(0).toUpperCase() + piece.slice(1)
        }
      ).join('')
  }
}
