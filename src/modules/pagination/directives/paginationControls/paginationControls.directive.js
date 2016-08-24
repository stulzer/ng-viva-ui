import { applyStyle } from '../../../main/providers/uiStylist/uiStylist'
import dirPaginate from './dirPaginate.template.html'
import paginationModule from '../../pagination.module'
import template from './paginationControls.html'
import style from './paginationControls.scss'

class PaginationControlsHandler {
  constructor ($scope) {
    this.$scope = $scope
    this.onPageChange = this.onPageChange.bind(this)
  }

  onPageChange (newPageNumber, oldPageNumber) {
    this.$scope.onPageChange({newPageNumber, oldPageNumber})
  }
}

/**
 * @ngdoc directive
 * @name ngVivaUi.pagination.directive:vivaUiPaginationControls
 * @restrict E
 * @scope
 * @description UI Kit's pagination controls implementation.
 * @param {number} [maxSize] (default = 9) Specify a maximum number of pagination links to display. The default is 9, and the minimum is 5 (setting a lower value than 5 will not have an effect).
 * @param {function} [onPageChange] Specify a callback method to run each time one of the pagination links is clicked. The method will be passed the optional arguments newPageNumber and oldPageNumber, which are integers equal to the page number that has just been navigated to, and the one just left, respectively. Note you must use that exact argument name in your view, i.e. ```<viva-ui-pagination-controls on-page-change="myMethod(newPageNumber, oldPageNumber)">```, and the method you specify must be defined on your controller $scope.
 * @param {string} [paginationId] Used to group together the dir-pagination-controls with a corresponding dir-paginate when you need more than one pagination instance per page. See the section below on setting up multiple instances.
 */
paginationModule.directive('vivaUiPaginationControls', ['$templateCache', ($templateCache) => {
  $templateCache.put('vivaUiPaginationControls.template', dirPaginate)
  applyStyle(style)

  return {
    template,
    restrict: 'E',
    scope: {
      paginationId: '@',
      maxSize: '@',
      onPageChange: '&'
    },
    link: ($scope, $element, $attrs) => {
      const $uiPagination = $scope.$uiPagination = {}
      const handler = new PaginationControlsHandler($scope)

      $uiPagination.classPrefix = 'viva-ui-pagination-controls'
      $uiPagination.onPageChange = handler.onPageChange
    }
  }
}])
