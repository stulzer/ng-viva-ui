import angular from 'angular'

const $uiStyle = angular.element('<style type="text/css">')

function insertStyle () {
  const head = document.head
  const firstChild = head.children[0]

  head.insertBefore($uiStyle[0], firstChild || null)
}

function applyStyle (style) {
  if (!document.contains($uiStyle[0])) {
    insertStyle()
  }

  const $styleNode = angular.element(document.createTextNode(style))
  $uiStyle.append($styleNode)
}

export { $uiStyle, applyStyle }
