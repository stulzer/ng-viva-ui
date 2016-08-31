import * as uiIconset from '../../providers/uiIconset/uiIconset'
import { applyStyle } from '../../providers/uiStylist/uiStylist'
import mainModule from '../../main.module'
import style from './icon.scss'

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiIcon
 * @restrict E
 * @description An iconset consumer.
 * @param {string} icon Icon's name.
 * @example
    <example module="ngVivaUi">
      <file name="index.html">
        <viva-ui-icon icon="check"></viva-ui-icon>
      </file>
    </example>
 */
mainModule.directive('vivaUiIcon', () => {
  applyStyle(style)

  return {
    restrict: 'E',
    link: ($scope, $element, $attrs) => {
      $attrs.$observe('icon', (iconName) => {
        const icon = uiIconset[iconName]

        if (!icon) {
          $element.empty()
          return
        }

        $element.html(icon)
      })
    }
  }
})
