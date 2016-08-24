import angular from 'angular'
import mainModule from '../../main.module'

const $uiStyle = angular.element('<style type="text/css">')

function insertStyle () {
  const head = document.head
  const firstChild = head.children[0]

  head.insertBefore($uiStyle[0], firstChild || null)
}

function applyStyle (style) {
  const $styleNode = angular.element(document.createTextNode(style))
  $uiStyle.append($styleNode)
}

mainModule.run(insertStyle)
export { $uiStyle, applyStyle }
