'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var angular = _interopDefault(require('angular'));

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
  hifen2CamelCase: function hifen2CamelCase(str, capitalize) {
    var strPieces = str.split('-');
    strPieces[0] = strPieces[0].charAt(0)[capitalize ? 'toUpperCase' : 'toLowerCase']() + strPieces[0].slice(1);

    return strPieces[0] + strPieces.slice(1).map(function (piece) {
      return piece.charAt(0).toUpperCase() + piece.slice(1);
    }).join('');
  }
};
});

interopDefault(utils);
var hifen2CamelCase = utils.hifen2CamelCase;

var moduleName$1 = hifen2CamelCase(name);

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

var dirPaginate = "<div ng-if=\"1 < pages.length || !autoHide\">\n  <button viva-ui-flat-button=\"small\" ng-if=\"directionLinks\" ng-disabled=\"pagination.current == 1\" ng-click=\"setCurrent(pagination.current - 1)\">\n    <viva-ui-icon class=\"viva-ui-pagination-controls__arrow--prev\" icon=\"arrow\"></viva-ui-icon>\n    <span>Anterior</span>\n  </button>\n  <button viva-ui-flat-button=\"small\" ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-disabled=\"pageNumber === '...'\" ng-class=\"{active : pagination.current == pageNumber}\" ng-click=\"setCurrent(pageNumber)\">{{pageNumber}}</button>\n  <button viva-ui-flat-button=\"small\" ng-if=\"directionLinks\" ng-disabled=\"pagination.current == pagination.last\" ng-click=\"setCurrent(pagination.current + 1)\">\n    <span>Próximo</span>\n    <viva-ui-icon class=\"viva-ui-pagination-controls__arrow--next\" icon=\"arrow\"></viva-ui-icon>\n  </button>\n</div>";

var template = "<div ng-class=\"[$uiPagination.classPrefix + '__container']\">\n  <dir-pagination-controls pagination-id=\"paginationId || '__default'\" auto-hide=\"false\" max-size=\"maxSize\" on-page-change=\"$uiPagination.onPageChange(newPageNumber, oldPageNumber)\" template-url=\"vivaUiPaginationControls.template\"></dir-pagination-controls>\n</div>\n\n";

var style = ".viva-ui-pagination-controls__container {\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600; }\n  .viva-ui-pagination-controls__container:before, .viva-ui-pagination-controls__container:after {\n    content: \" \";\n    display: table; }\n  .viva-ui-pagination-controls__container:after {\n    clear: both; }\n  .viva-ui-pagination-controls__container button {\n    background-color: white;\n    border: 1px solid #dddddd;\n    border-right: none;\n    border-radius: 0;\n    float: left;\n    outline: none;\n    margin: 0; }\n    .viva-ui-pagination-controls__container button > * {\n      display: inline-block;\n      vertical-align: middle; }\n    .viva-ui-pagination-controls__container button.active {\n      background-color: #00acff;\n      border-color: #00acff;\n      color: white; }\n      .viva-ui-pagination-controls__container button.active + button {\n        border-left-color: #00acff; }\n    .viva-ui-pagination-controls__container button:disabled {\n      background-color: rgba(0, 0, 0, 0.12); }\n    .viva-ui-pagination-controls__container button:first-child {\n      border-top-left-radius: 2px;\n      border-bottom-left-radius: 2px; }\n    .viva-ui-pagination-controls__container button:last-child {\n      border-right: 1px solid #dddddd;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px; }\n\n.viva-ui-pagination-controls__arrow--prev {\n  -moz-transform: translate(-6px, 1px);\n  -webkit-transform: translate(-6px, 1px);\n  transform: translate(-6px, 1px);\n  margin-right: 8px; }\n\n.viva-ui-pagination-controls__arrow--next {\n  -moz-transform: translate(6px, -2px) rotate(180deg);\n  -webkit-transform: translate(6px, -2px) rotate(180deg);\n  transform: translate(6px, -2px) rotate(180deg);\n  margin-left: 8px; }\n";

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

module.exports = paginationModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9wYWdpbmF0aW9uL2RpcmVjdGl2ZXMvcGFnaW5hdGlvbkNvbnRyb2xzL3BhZ2luYXRpb25Db250cm9scy5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoaWZlbjJDYW1lbENhc2U6IChzdHIsIGNhcGl0YWxpemUpID0+IHtcbiAgICBjb25zdCBzdHJQaWVjZXMgPSBzdHIuc3BsaXQoJy0nKVxuICAgIHN0clBpZWNlc1swXSA9IHN0clBpZWNlc1swXS5jaGFyQXQoMClbY2FwaXRhbGl6ZSA/ICd0b1VwcGVyQ2FzZScgOiAndG9Mb3dlckNhc2UnXSgpICsgc3RyUGllY2VzWzBdLnNsaWNlKDEpXG5cbiAgICByZXR1cm4gc3RyUGllY2VzWzBdICsgc3RyUGllY2VzLnNsaWNlKDEpLm1hcChcbiAgICAgICAgKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBpZWNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGllY2Uuc2xpY2UoMSlcbiAgICAgICAgfVxuICAgICAgKS5qb2luKCcnKVxuICB9XG59XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IGhpZmVuMkNhbWVsQ2FzZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gaGlmZW4yQ2FtZWxDYXNlKG5hbWUpXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaVxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWlcbiAqIFZpdmEgVWkgS2l0J3MgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgbWFpbk1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIH1cbn0pKClcblxuZXhwb3J0IHsgbWFpbk1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgeyBtb2R1bGVOYW1lIGFzIG1haW5Nb2R1bGVOYW1lIH0gZnJvbSAnLi4vbWFpbi9tYWluLm1vZHVsZSdcblxuY29uc3QgbW9kdWxlTmFtZSA9IGAke21haW5Nb2R1bGVOYW1lfS5wYWdpbmF0aW9uYFxuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgbmdWaXZhVWkucGFnaW5hdGlvblxuICogQHJlcXVpcmVzIG5nVml2YVVpXG4gKiBAcmVxdWlyZXMgYW5ndWxhclV0aWxzLmRpcmVjdGl2ZXMuZGlyUGFnaW5hdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWkucGFnaW5hdGlvblxuICogVml2YSBVaSBLaXQncyBwYWdpbmF0aW9uIGltcGxlbWVudGF0aW9uIGZvciBBbmd1bGFySlMuXG4gKi9cbmNvbnN0IHBhZ2luYXRpb25Nb2R1bGUgPSAoKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFttYWluTW9kdWxlTmFtZSwgJ2FuZ3VsYXJVdGlscy5kaXJlY3RpdmVzLmRpclBhZ2luYXRpb24nXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBwYWdpbmF0aW9uTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuXG5jb25zdCAkdWlTdHlsZSA9IGFuZ3VsYXIuZWxlbWVudCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPicpXG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlICgpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGhlYWQuY2hpbGRyZW5bMF1cblxuICBoZWFkLmluc2VydEJlZm9yZSgkdWlTdHlsZVswXSwgZmlyc3RDaGlsZCB8fCBudWxsKVxufVxuXG5mdW5jdGlvbiBhcHBseVN0eWxlIChzdHlsZSkge1xuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbm1haW5Nb2R1bGUucnVuKGluc2VydFN0eWxlKVxuZXhwb3J0IHsgJHVpU3R5bGUsIGFwcGx5U3R5bGUgfVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uLy4uL21haW4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgZGlyUGFnaW5hdGUgZnJvbSAnLi9kaXJQYWdpbmF0ZS50ZW1wbGF0ZS5odG1sJ1xuaW1wb3J0IHBhZ2luYXRpb25Nb2R1bGUgZnJvbSAnLi4vLi4vcGFnaW5hdGlvbi5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9wYWdpbmF0aW9uQ29udHJvbHMuaHRtbCdcbmltcG9ydCBzdHlsZSBmcm9tICcuL3BhZ2luYXRpb25Db250cm9scy5zY3NzJ1xuXG5jbGFzcyBQYWdpbmF0aW9uQ29udHJvbHNIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRzY29wZSkge1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvblBhZ2VDaGFuZ2UgKG5ld1BhZ2VOdW1iZXIsIG9sZFBhZ2VOdW1iZXIpIHtcbiAgICB0aGlzLiRzY29wZS5vblBhZ2VDaGFuZ2Uoe25ld1BhZ2VOdW1iZXIsIG9sZFBhZ2VOdW1iZXJ9KVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkucGFnaW5hdGlvbi5kaXJlY3RpdmU6dml2YVVpUGFnaW5hdGlvbkNvbnRyb2xzXG4gKiBAcmVzdHJpY3QgRVxuICogQHNjb3BlXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgcGFnaW5hdGlvbiBjb250cm9scyBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4U2l6ZV0gKGRlZmF1bHQgPSA5KSBTcGVjaWZ5IGEgbWF4aW11bSBudW1iZXIgb2YgcGFnaW5hdGlvbiBsaW5rcyB0byBkaXNwbGF5LiBUaGUgZGVmYXVsdCBpcyA5LCBhbmQgdGhlIG1pbmltdW0gaXMgNSAoc2V0dGluZyBhIGxvd2VyIHZhbHVlIHRoYW4gNSB3aWxsIG5vdCBoYXZlIGFuIGVmZmVjdCkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb25QYWdlQ2hhbmdlXSBTcGVjaWZ5IGEgY2FsbGJhY2sgbWV0aG9kIHRvIHJ1biBlYWNoIHRpbWUgb25lIG9mIHRoZSBwYWdpbmF0aW9uIGxpbmtzIGlzIGNsaWNrZWQuIFRoZSBtZXRob2Qgd2lsbCBiZSBwYXNzZWQgdGhlIG9wdGlvbmFsIGFyZ3VtZW50cyBuZXdQYWdlTnVtYmVyIGFuZCBvbGRQYWdlTnVtYmVyLCB3aGljaCBhcmUgaW50ZWdlcnMgZXF1YWwgdG8gdGhlIHBhZ2UgbnVtYmVyIHRoYXQgaGFzIGp1c3QgYmVlbiBuYXZpZ2F0ZWQgdG8sIGFuZCB0aGUgb25lIGp1c3QgbGVmdCwgcmVzcGVjdGl2ZWx5LiBOb3RlIHlvdSBtdXN0IHVzZSB0aGF0IGV4YWN0IGFyZ3VtZW50IG5hbWUgaW4geW91ciB2aWV3LCBpLmUuIGBgYDx2aXZhLXVpLXBhZ2luYXRpb24tY29udHJvbHMgb24tcGFnZS1jaGFuZ2U9XCJteU1ldGhvZChuZXdQYWdlTnVtYmVyLCBvbGRQYWdlTnVtYmVyKVwiPmBgYCwgYW5kIHRoZSBtZXRob2QgeW91IHNwZWNpZnkgbXVzdCBiZSBkZWZpbmVkIG9uIHlvdXIgY29udHJvbGxlciAkc2NvcGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhZ2luYXRpb25JZF0gVXNlZCB0byBncm91cCB0b2dldGhlciB0aGUgZGlyLXBhZ2luYXRpb24tY29udHJvbHMgd2l0aCBhIGNvcnJlc3BvbmRpbmcgZGlyLXBhZ2luYXRlIHdoZW4geW91IG5lZWQgbW9yZSB0aGFuIG9uZSBwYWdpbmF0aW9uIGluc3RhbmNlIHBlciBwYWdlLiBTZWUgdGhlIHNlY3Rpb24gYmVsb3cgb24gc2V0dGluZyB1cCBtdWx0aXBsZSBpbnN0YW5jZXMuXG4gKi9cbnBhZ2luYXRpb25Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlQYWdpbmF0aW9uQ29udHJvbHMnLCBbJyR0ZW1wbGF0ZUNhY2hlJywgKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgndml2YVVpUGFnaW5hdGlvbkNvbnRyb2xzLnRlbXBsYXRlJywgZGlyUGFnaW5hdGUpXG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZSxcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBwYWdpbmF0aW9uSWQ6ICdAJyxcbiAgICAgIG1heFNpemU6ICdAJyxcbiAgICAgIG9uUGFnZUNoYW5nZTogJyYnXG4gICAgfSxcbiAgICBsaW5rOiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzKSA9PiB7XG4gICAgICBjb25zdCAkdWlQYWdpbmF0aW9uID0gJHNjb3BlLiR1aVBhZ2luYXRpb24gPSB7fVxuICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBQYWdpbmF0aW9uQ29udHJvbHNIYW5kbGVyKCRzY29wZSlcblxuICAgICAgJHVpUGFnaW5hdGlvbi5jbGFzc1ByZWZpeCA9ICd2aXZhLXVpLXBhZ2luYXRpb24tY29udHJvbHMnXG4gICAgICAkdWlQYWdpbmF0aW9uLm9uUGFnZUNoYW5nZSA9IGhhbmRsZXIub25QYWdlQ2hhbmdlXG4gICAgfVxuICB9XG59XSlcbiJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibWFpbk1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO21CQUNFLHlCQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO1FBQzlCLFlBQVksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFsQjtjQUNVLENBQVYsSUFBZSxVQUFVLENBQVYsRUFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLGFBQWEsYUFBYixHQUE2QixhQUFwRCxNQUF1RSxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLENBQW5CLENBQXRGOztXQUVPLFVBQVUsQ0FBVixJQUFlLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUNsQixVQUFDLEtBQUQsRUFBVzthQUNGLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF2QztLQUZnQixFQUlsQixJQUprQixDQUliLEVBSmEsQ0FBdEI7O0NBTEo7Ozs7OztBQ0VBLElBQU1BLGVBQWEsZ0JBQWdCLElBQWhCLENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLGFBQWMsWUFBTTtNQUNwQjtXQUNLLFFBQVEsTUFBUixDQUFlQSxZQUFmLENBQVA7R0FERixDQUVFLE9BQU8sQ0FBUCxFQUFVO1dBQ0gsUUFBUSxNQUFSLENBQWVBLFlBQWYsRUFBMkIsRUFBM0IsQ0FBUDs7Q0FKZSxFQUFuQixDQVFBOztBQ2xCQSxJQUFNLGFBQWdCQyxZQUFoQixnQkFBTjs7Ozs7Ozs7Ozs7QUFXQSxJQUFNLG1CQUFvQixZQUFNO01BQzFCO1dBQ0ssUUFBUSxNQUFSLENBQWUsVUFBZixDQUFQO0dBREYsQ0FFRSxPQUFPLENBQVAsRUFBVTtXQUNILFFBQVEsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FBQ0EsWUFBRCxFQUFpQix1Q0FBakIsQ0FBM0IsQ0FBUDs7Q0FKcUIsRUFBekIsQ0FRQTs7QUNuQkEsSUFBTSxXQUFXLFFBQVEsT0FBUixDQUFnQix5QkFBaEIsQ0FBakI7O0FBRUEsU0FBUyxXQUFULEdBQXdCO01BQ2hCLE9BQU8sU0FBUyxJQUF0QjtNQUNNLGFBQWEsS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFuQjs7T0FFSyxZQUFMLENBQWtCLFNBQVMsQ0FBVCxDQUFsQixFQUErQixjQUFjLElBQTdDOzs7QUFHRixTQUFTLFVBQVQsQ0FBcUIsS0FBckIsRUFBNEI7TUFDcEIsYUFBYSxRQUFRLE9BQVIsQ0FBZ0IsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQWhCLENBQW5CO1dBQ1MsTUFBVCxDQUFnQixVQUFoQjs7O0FBR0YsV0FBVyxHQUFYLENBQWUsV0FBZixFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1pNO3FDQUNTLE1BQWIsRUFBcUI7OztTQUNkLE1BQUwsR0FBYyxNQUFkO1NBQ0ssWUFBTCxHQUFvQixLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7Ozs7O2lDQUdZLGVBQWUsZUFBZTtXQUNyQyxNQUFMLENBQVksWUFBWixDQUF5QixFQUFDLDRCQUFELEVBQWdCLDRCQUFoQixFQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0osaUJBQWlCLFNBQWpCLENBQTJCLDBCQUEzQixFQUF1RCxDQUFDLGdCQUFELEVBQW1CLFVBQUMsY0FBRCxFQUFvQjtpQkFDN0UsR0FBZixDQUFtQixtQ0FBbkIsRUFBd0QsV0FBeEQ7YUFDVyxLQUFYOztTQUVPO3NCQUFBO2NBRUssR0FGTDtXQUdFO29CQUNTLEdBRFQ7ZUFFSSxHQUZKO29CQUdTO0tBTlg7VUFRQyxjQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQThCO1VBQzVCLGdCQUFnQixPQUFPLGFBQVAsR0FBdUIsRUFBN0M7VUFDTSxVQUFVLElBQUkseUJBQUosQ0FBOEIsTUFBOUIsQ0FBaEI7O29CQUVjLFdBQWQsR0FBNEIsNkJBQTVCO29CQUNjLFlBQWQsR0FBNkIsUUFBUSxZQUFyQzs7R0FiSjtDQUpxRCxDQUF2RDs7In0=