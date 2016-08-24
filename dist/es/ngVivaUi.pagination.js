import angular from 'angular';

var name = "ng-viva-ui";

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var utils = createCommonjsModule(function (module) {
'use strict';

module.exports = {
  camelize: function camelize(str, options) {
    var strPieces = str.split('-');
    options = typeof options === 'undefined' ? {} : options;

    strPieces[0] = strPieces[0].charAt(0)[options.capitalize ? 'toUpperCase' : 'toLowerCase']() + strPieces[0].slice(1);

    return strPieces[0] + strPieces.slice(1).map(function (piece) {
      return piece.charAt(0).toUpperCase() + piece.slice(1);
    }).join('');
  }
};
});

interopDefault(utils);
var camelize = utils.camelize;

var moduleName$1 = camelize(name);

/**
 * @ngdoc overview
 * @name ngVivaUi
 * @description
 * #ngVivaUi
 * Viva Ui Kit's implementation for AngularJS.
 */
var mainModule = function () {
  try {
    return angular.module(moduleName$1);
  } catch (e) {
    return angular.module(moduleName$1, []);
  }
}();

var moduleName = moduleName$1 + '.pagination';

/**
 * @ngdoc overview
 * @name ngVivaUi.pagination
 * @requires ngVivaUi
 * @requires angularUtils.directives.dirPagination
 * @description
 * #ngVivaUi.pagination
 * Viva Ui Kit's pagination implementation for AngularJS.
 */
var paginationModule = function () {
  try {
    return angular.module(moduleName);
  } catch (e) {
    return angular.module(moduleName, [moduleName$1, 'angularUtils.directives.dirPagination']);
  }
}();

var $uiStyle = angular.element('<style type="text/css">');

function insertStyle() {
  var head = document.head;
  var firstChild = head.children[0];

  head.insertBefore($uiStyle[0], firstChild || null);
}

function applyStyle(style) {
  var $styleNode = angular.element(document.createTextNode(style));
  $uiStyle.append($styleNode);
}

mainModule.run(insertStyle);

var dirPaginate = "<div ng-if=\"1 < pages.length || !autoHide\">\n  <button viva-ui-flat-button=\"small\" ng-if=\"directionLinks\" ng-disabled=\"pagination.current == 1\" ng-click=\"setCurrent(pagination.current - 1)\">\n    <viva-ui-icon class=\"viva-ui-pagination-controls__arrow--prev\" icon=\"arrow\"></viva-ui-icon>\n    <span>Anterior</span>\n  </button>\n  <button viva-ui-flat-button=\"small\" ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-disabled=\"pageNumber === '...'\" ng-class=\"{active : pagination.current == pageNumber}\" ng-click=\"setCurrent(pageNumber)\" class=\"viva-ui-pagination-controls__track-button\">{{pageNumber}}</button>\n  <button viva-ui-flat-button=\"small\" ng-if=\"directionLinks\" ng-disabled=\"pagination.current == pagination.last\" ng-click=\"setCurrent(pagination.current + 1)\">\n    <span>Próximo</span>\n    <viva-ui-icon class=\"viva-ui-pagination-controls__arrow--next\" icon=\"arrow\"></viva-ui-icon>\n  </button>\n</div>";

var template = "<div ng-class=\"[$uiPagination.classPrefix + '__container']\">\n  <dir-pagination-controls pagination-id=\"paginationId || '__default'\" auto-hide=\"false\" max-size=\"maxSize\" on-page-change=\"$uiPagination.onPageChange(newPageNumber, oldPageNumber)\" template-url=\"vivaUiPaginationControls.template\"></dir-pagination-controls>\n</div>\n\n";

var style = ".viva-ui-pagination-controls__container {\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600; }\n  .viva-ui-pagination-controls__container:before, .viva-ui-pagination-controls__container:after {\n    content: \" \";\n    display: table; }\n  .viva-ui-pagination-controls__container:after {\n    clear: both; }\n  .viva-ui-pagination-controls__container button {\n    -o-transition: none;\n    -moz-transition: none;\n    -webkit-transition: none;\n    transition: none;\n    background-color: white;\n    border: 1px solid #dddddd;\n    border-right: none;\n    border-radius: 0;\n    float: left;\n    outline: none;\n    margin: 0; }\n    .viva-ui-pagination-controls__container button > * {\n      display: inline-block;\n      vertical-align: middle; }\n    .viva-ui-pagination-controls__container button.viva-ui-pagination-controls__track-button {\n      padding: 0;\n      width: 40px; }\n    .viva-ui-pagination-controls__container button.active {\n      background-color: #00acff;\n      border-color: #00acff;\n      color: white; }\n      .viva-ui-pagination-controls__container button.active + button {\n        border-left-color: #00acff; }\n    .viva-ui-pagination-controls__container button:disabled {\n      background-color: rgba(0, 0, 0, 0.12); }\n    .viva-ui-pagination-controls__container button:first-child {\n      border-top-left-radius: 2px;\n      border-bottom-left-radius: 2px; }\n    .viva-ui-pagination-controls__container button:last-child {\n      border-right: 1px solid #dddddd;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px; }\n\n.viva-ui-pagination-controls__arrow--prev {\n  -o-transform: translate(-6px, 1px);\n  -ms-transform: translate(-6px, 1px);\n  -moz-transform: translate(-6px, 1px);\n  -webkit-transform: translate(-6px, 1px);\n  transform: translate(-6px, 1px);\n  margin-right: 8px; }\n\n.viva-ui-pagination-controls__arrow--next {\n  -o-transform: translate(6px, -2px) rotate(180deg);\n  -ms-transform: translate(6px, -2px) rotate(180deg);\n  -moz-transform: translate(6px, -2px) rotate(180deg);\n  -webkit-transform: translate(6px, -2px) rotate(180deg);\n  transform: translate(6px, -2px) rotate(180deg);\n  margin-left: 8px; }\n";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var PaginationControlsHandler = function () {
  function PaginationControlsHandler($scope) {
    classCallCheck(this, PaginationControlsHandler);

    this.$scope = $scope;
    this.onPageChange = this.onPageChange.bind(this);
  }

  createClass(PaginationControlsHandler, [{
    key: 'onPageChange',
    value: function onPageChange(newPageNumber, oldPageNumber) {
      this.$scope.onPageChange({ newPageNumber: newPageNumber, oldPageNumber: oldPageNumber });
    }
  }]);
  return PaginationControlsHandler;
}();

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


paginationModule.directive('vivaUiPaginationControls', ['$templateCache', function ($templateCache) {
  $templateCache.put('vivaUiPaginationControls.template', dirPaginate);
  applyStyle(style);

  return {
    template: template,
    restrict: 'E',
    scope: {
      paginationId: '@',
      maxSize: '@',
      onPageChange: '&'
    },
    link: function link($scope, $element, $attrs) {
      var $uiPagination = $scope.$uiPagination = {};
      var handler = new PaginationControlsHandler($scope);

      $uiPagination.classPrefix = 'viva-ui-pagination-controls';
      $uiPagination.onPageChange = handler.onPageChange;
    }
  };
}]);

export default paginationModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9wYWdpbmF0aW9uL2RpcmVjdGl2ZXMvcGFnaW5hdGlvbkNvbnRyb2xzL3BhZ2luYXRpb25Db250cm9scy5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG1vZHVsZU5hbWUgYXMgbWFpbk1vZHVsZU5hbWUgfSBmcm9tICcuLi9tYWluL21haW4ubW9kdWxlJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gYCR7bWFpbk1vZHVsZU5hbWV9LnBhZ2luYXRpb25gXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaS5wYWdpbmF0aW9uXG4gKiBAcmVxdWlyZXMgbmdWaXZhVWlcbiAqIEByZXF1aXJlcyBhbmd1bGFyVXRpbHMuZGlyZWN0aXZlcy5kaXJQYWdpbmF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaS5wYWdpbmF0aW9uXG4gKiBWaXZhIFVpIEtpdCdzIHBhZ2luYXRpb24gaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgcGFnaW5hdGlvbk1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW21haW5Nb2R1bGVOYW1lLCAnYW5ndWxhclV0aWxzLmRpcmVjdGl2ZXMuZGlyUGFnaW5hdGlvbiddKVxuICB9XG59KSgpXG5cbmV4cG9ydCB7IHBhZ2luYXRpb25Nb2R1bGUgYXMgZGVmYXVsdCwgbW9kdWxlTmFtZSB9XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5cbmNvbnN0ICR1aVN0eWxlID0gYW5ndWxhci5lbGVtZW50KCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+JylcblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUgKCkge1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICBjb25zdCBmaXJzdENoaWxkID0gaGVhZC5jaGlsZHJlblswXVxuXG4gIGhlYWQuaW5zZXJ0QmVmb3JlKCR1aVN0eWxlWzBdLCBmaXJzdENoaWxkIHx8IG51bGwpXG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUgKHN0eWxlKSB7XG4gIGNvbnN0ICRzdHlsZU5vZGUgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGUpKVxuICAkdWlTdHlsZS5hcHBlbmQoJHN0eWxlTm9kZSlcbn1cblxubWFpbk1vZHVsZS5ydW4oaW5zZXJ0U3R5bGUpXG5leHBvcnQgeyAkdWlTdHlsZSwgYXBwbHlTdHlsZSB9XG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vbWFpbi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBkaXJQYWdpbmF0ZSBmcm9tICcuL2RpclBhZ2luYXRlLnRlbXBsYXRlLmh0bWwnXG5pbXBvcnQgcGFnaW5hdGlvbk1vZHVsZSBmcm9tICcuLi8uLi9wYWdpbmF0aW9uLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3BhZ2luYXRpb25Db250cm9scy5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcGFnaW5hdGlvbkNvbnRyb2xzLnNjc3MnXG5cbmNsYXNzIFBhZ2luYXRpb25Db250cm9sc0hhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uUGFnZUNoYW5nZSAobmV3UGFnZU51bWJlciwgb2xkUGFnZU51bWJlcikge1xuICAgIHRoaXMuJHNjb3BlLm9uUGFnZUNoYW5nZSh7bmV3UGFnZU51bWJlciwgb2xkUGFnZU51bWJlcn0pXG4gIH1cbn1cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5wYWdpbmF0aW9uLmRpcmVjdGl2ZTp2aXZhVWlQYWdpbmF0aW9uQ29udHJvbHNcbiAqIEByZXN0cmljdCBFXG4gKiBAc2NvcGVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBwYWdpbmF0aW9uIGNvbnRyb2xzIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhTaXplXSAoZGVmYXVsdCA9IDkpIFNwZWNpZnkgYSBtYXhpbXVtIG51bWJlciBvZiBwYWdpbmF0aW9uIGxpbmtzIHRvIGRpc3BsYXkuIFRoZSBkZWZhdWx0IGlzIDksIGFuZCB0aGUgbWluaW11bSBpcyA1IChzZXR0aW5nIGEgbG93ZXIgdmFsdWUgdGhhbiA1IHdpbGwgbm90IGhhdmUgYW4gZWZmZWN0KS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvblBhZ2VDaGFuZ2VdIFNwZWNpZnkgYSBjYWxsYmFjayBtZXRob2QgdG8gcnVuIGVhY2ggdGltZSBvbmUgb2YgdGhlIHBhZ2luYXRpb24gbGlua3MgaXMgY2xpY2tlZC4gVGhlIG1ldGhvZCB3aWxsIGJlIHBhc3NlZCB0aGUgb3B0aW9uYWwgYXJndW1lbnRzIG5ld1BhZ2VOdW1iZXIgYW5kIG9sZFBhZ2VOdW1iZXIsIHdoaWNoIGFyZSBpbnRlZ2VycyBlcXVhbCB0byB0aGUgcGFnZSBudW1iZXIgdGhhdCBoYXMganVzdCBiZWVuIG5hdmlnYXRlZCB0bywgYW5kIHRoZSBvbmUganVzdCBsZWZ0LCByZXNwZWN0aXZlbHkuIE5vdGUgeW91IG11c3QgdXNlIHRoYXQgZXhhY3QgYXJndW1lbnQgbmFtZSBpbiB5b3VyIHZpZXcsIGkuZS4gYGBgPHZpdmEtdWktcGFnaW5hdGlvbi1jb250cm9scyBvbi1wYWdlLWNoYW5nZT1cIm15TWV0aG9kKG5ld1BhZ2VOdW1iZXIsIG9sZFBhZ2VOdW1iZXIpXCI+YGBgLCBhbmQgdGhlIG1ldGhvZCB5b3Ugc3BlY2lmeSBtdXN0IGJlIGRlZmluZWQgb24geW91ciBjb250cm9sbGVyICRzY29wZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFnaW5hdGlvbklkXSBVc2VkIHRvIGdyb3VwIHRvZ2V0aGVyIHRoZSBkaXItcGFnaW5hdGlvbi1jb250cm9scyB3aXRoIGEgY29ycmVzcG9uZGluZyBkaXItcGFnaW5hdGUgd2hlbiB5b3UgbmVlZCBtb3JlIHRoYW4gb25lIHBhZ2luYXRpb24gaW5zdGFuY2UgcGVyIHBhZ2UuIFNlZSB0aGUgc2VjdGlvbiBiZWxvdyBvbiBzZXR0aW5nIHVwIG11bHRpcGxlIGluc3RhbmNlcy5cbiAqL1xucGFnaW5hdGlvbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaVBhZ2luYXRpb25Db250cm9scycsIFsnJHRlbXBsYXRlQ2FjaGUnLCAoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCd2aXZhVWlQYWdpbmF0aW9uQ29udHJvbHMudGVtcGxhdGUnLCBkaXJQYWdpbmF0ZSlcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlLFxuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIHBhZ2luYXRpb25JZDogJ0AnLFxuICAgICAgbWF4U2l6ZTogJ0AnLFxuICAgICAgb25QYWdlQ2hhbmdlOiAnJidcbiAgICB9LFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgIGNvbnN0ICR1aVBhZ2luYXRpb24gPSAkc2NvcGUuJHVpUGFnaW5hdGlvbiA9IHt9XG4gICAgICBjb25zdCBoYW5kbGVyID0gbmV3IFBhZ2luYXRpb25Db250cm9sc0hhbmRsZXIoJHNjb3BlKVxuXG4gICAgICAkdWlQYWdpbmF0aW9uLmNsYXNzUHJlZml4ID0gJ3ZpdmEtdWktcGFnaW5hdGlvbi1jb250cm9scydcbiAgICAgICR1aVBhZ2luYXRpb24ub25QYWdlQ2hhbmdlID0gaGFuZGxlci5vblBhZ2VDaGFuZ2VcbiAgICB9XG4gIH1cbn1dKVxuIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtYWluTW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtZQUNMLGtCQUFDLEdBQUQsRUFBTSxPQUFOLEVBQWtCO1FBQ3BCLFlBQVksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFsQjtjQUNVLE9BQU8sT0FBUCxLQUFtQixXQUFuQixHQUFpQyxFQUFqQyxHQUFzQyxPQUFoRDs7Y0FFVSxDQUFWLElBQWUsVUFBVSxDQUFWLEVBQWEsTUFBYixDQUFvQixDQUFwQixFQUF1QixRQUFRLFVBQVIsR0FBcUIsYUFBckIsR0FBcUMsYUFBNUQsTUFBK0UsVUFBVSxDQUFWLEVBQWEsS0FBYixDQUFtQixDQUFuQixDQUE5Rjs7V0FFTyxVQUFVLENBQVYsSUFBZSxVQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FDbEIsVUFBQyxLQUFELEVBQVc7YUFDRixNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBdkM7S0FGZ0IsRUFJbEIsSUFKa0IsQ0FJYixFQUphLENBQXRCOztDQVBKOzs7Ozs7QUNFQSxJQUFNQSxlQUFhLFNBQVMsSUFBVCxDQUFuQjs7Ozs7Ozs7O0FBU0EsSUFBTSxhQUFjLFlBQU07TUFDcEI7V0FDSyxRQUFRLE1BQVIsQ0FBZUEsWUFBZixDQUFQO0dBREYsQ0FFRSxPQUFPLENBQVAsRUFBVTtXQUNILFFBQVEsTUFBUixDQUFlQSxZQUFmLEVBQTJCLEVBQTNCLENBQVA7O0NBSmUsRUFBbkIsQ0FRQTs7QUNsQkEsSUFBTSxhQUFnQkMsWUFBaEIsZ0JBQU47Ozs7Ozs7Ozs7O0FBV0EsSUFBTSxtQkFBb0IsWUFBTTtNQUMxQjtXQUNLLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUNBLFlBQUQsRUFBaUIsdUNBQWpCLENBQTNCLENBQVA7O0NBSnFCLEVBQXpCLENBUUE7O0FDbkJBLElBQU0sV0FBVyxRQUFRLE9BQVIsQ0FBZ0IseUJBQWhCLENBQWpCOztBQUVBLFNBQVMsV0FBVCxHQUF3QjtNQUNoQixPQUFPLFNBQVMsSUFBdEI7TUFDTSxhQUFhLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBbkI7O09BRUssWUFBTCxDQUFrQixTQUFTLENBQVQsQ0FBbEIsRUFBK0IsY0FBYyxJQUE3Qzs7O0FBR0YsU0FBUyxVQUFULENBQXFCLEtBQXJCLEVBQTRCO01BQ3BCLGFBQWEsUUFBUSxPQUFSLENBQWdCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFoQixDQUFuQjtXQUNTLE1BQVQsQ0FBZ0IsVUFBaEI7OztBQUdGLFdBQVcsR0FBWCxDQUFlLFdBQWYsRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNaTTtxQ0FDUyxNQUFiLEVBQXFCOzs7U0FDZCxNQUFMLEdBQWMsTUFBZDtTQUNLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQXBCOzs7OztpQ0FHWSxlQUFlLGVBQWU7V0FDckMsTUFBTCxDQUFZLFlBQVosQ0FBeUIsRUFBQyw0QkFBRCxFQUFnQiw0QkFBaEIsRUFBekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNKLGlCQUFpQixTQUFqQixDQUEyQiwwQkFBM0IsRUFBdUQsQ0FBQyxnQkFBRCxFQUFtQixVQUFDLGNBQUQsRUFBb0I7aUJBQzdFLEdBQWYsQ0FBbUIsbUNBQW5CLEVBQXdELFdBQXhEO2FBQ1csS0FBWDs7U0FFTztzQkFBQTtjQUVLLEdBRkw7V0FHRTtvQkFDUyxHQURUO2VBRUksR0FGSjtvQkFHUztLQU5YO1VBUUMsY0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUE4QjtVQUM1QixnQkFBZ0IsT0FBTyxhQUFQLEdBQXVCLEVBQTdDO1VBQ00sVUFBVSxJQUFJLHlCQUFKLENBQThCLE1BQTlCLENBQWhCOztvQkFFYyxXQUFkLEdBQTRCLDZCQUE1QjtvQkFDYyxZQUFkLEdBQTZCLFFBQVEsWUFBckM7O0dBYko7Q0FKcUQsQ0FBdkQ7OyJ9