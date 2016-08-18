import { applyStyle } from '../../providers/uiStylist/uiStylist'
import uiModule from '../../providers/uiModule/uiModule'
import template from './pagination.html'
import style from './pagination.scss'

/**
 * @ngdoc directive
 * @name ng-viva-ui.directive:vivaUiPagination
 * @restrict E
 * @scope
 * @description UI Kit's pagination implementation.
 * @param {number} current Current's page.
 */
uiModule.directive('vivaUiPagination', [() => {
  applyStyle(style)

  return {
    template,
    restrict: 'E',
    scope: {
      current: '=',
      total: '='
    },
    link: ($scope, $element, $attrs) => {
    }
  }
}])
