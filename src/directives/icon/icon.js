import { applyStyle } from '../../providers/uiStylist/uiStylist'
import uiModule from '../../providers/uiModule/uiModule'
import * as uiIconset from '../../providers/uiIconset/uiIconset'
import style from './icon.scss'

/**
 * @ngdoc directive
 * @name ng-viva-ui.directive:vivaUiIcon
 * @restrict E
 * @description An iconset consumer.
 * @param {string} icon Icon's name.
 */
uiModule.directive('vivaUiIcon', () => {
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
