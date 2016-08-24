import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './flatButton.scss'

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiFlatButton
 * @restrict A
 * @element button
 * @description UI Kit's flat button implementation.
 * @param {empty | enum:[small, medium, large]} vivaUiFlatButton Button's size, by default will be medium.
 */
mainModule.directive('vivaUiFlatButton', () => {
  applyStyle(style)

  return {
    restrict: 'A'
  }
})
