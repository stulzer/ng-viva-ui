import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './flatButton.scss'

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiFlatButton
 * @restrict A
 * @element button
 * @description UI Kit's flat button implementation.
 * @param {enum:[small, medium, large]} [vivaUiFlatButton=medium] Button's size.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <button viva-ui-flat-button>Flat button</button>
      </file>
    </example>
 */
mainModule.directive('vivaUiFlatButton', () => {
  applyStyle(style)

  return {
    restrict: 'A'
  }
})
