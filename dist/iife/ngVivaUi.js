var ngVivaUi = (function (angular) {
'use strict';

angular = 'default' in angular ? angular['default'] : angular;

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

var moduleName = camelize(name);

/**
 * @ngdoc overview
 * @name ngVivaUi
 * @description
 * #ngVivaUi
 * Viva Ui Kit's implementation for AngularJS.
 */
var mainModule = function () {
  try {
    return angular.module(moduleName);
  } catch (e) {
    return angular.module(moduleName, []);
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

var template = "<div ng-class=\"{'{{$uiCheckbox.classPrefix + '__container'}}': true, '{{$uiCheckbox.classPrefix + '__container--has-minus'}}': $uiCheckbox.hasMinusIcon}\">\n  <viva-ui-icon icon=\"check\" ng-class=\"[$uiCheckbox.classPrefix + '__check']\" ng-hide=\"$uiCheckbox.hasMinusIcon\"></viva-ui-icon>\n  <i ng-class=\"[$uiCheckbox.classPrefix + '__minus']\" ng-show=\"$uiCheckbox.hasMinusIcon\"></i>\n</div>";

var style = "[viva-ui-checkbox] {\n  display: none; }\n\n.viva-ui-checkbox__container {\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  background-color: #ffffff;\n  box-sizing: border-box;\n  display: inline-block;\n  color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  border-radius: 2px;\n  width: 16px;\n  height: 16px;\n  position: relative; }\n\n.viva-ui-checkbox__container:hover,\n[viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus:hover {\n  border-color: #00acff; }\n\n.viva-ui-checkbox__check {\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n  line-height: 0;\n  opacity: 0;\n  padding: 0px 1px;\n  width: 100%;\n  height: 100%; }\n\n.viva-ui-checkbox__minus {\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.38);\n  display: inline-block;\n  position: absolute;\n  height: 2px;\n  top: calc(50% - 1px);\n  left: 2px;\n  right: 2px; }\n\n[viva-ui-checkbox]:checked + .viva-ui-checkbox__container {\n  background-color: #00acff;\n  border-color: #00acff; }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus {\n    background-color: #ffffff;\n    border-color: rgba(0, 0, 0, 0.38); }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__check, [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__minus {\n    opacity: 1; }\n\n[viva-ui-checkbox]:disabled + .viva-ui-checkbox__container,\n[viva-ui-checkbox]:disabled:checked + .viva-ui-checkbox__container {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: #eeeeee;\n  border-color: rgba(0, 0, 0, 0.12); }\n";

var arrow = "<svg width=\"8px\" height=\"12px\" viewBox=\"0 0 8 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"currentcolor\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-75.000000, -228.000000)\">\n      <g transform=\"translate(64.000000, 216.000000)\">\n        <g transform=\"translate(4.000000, 6.000000)\">\n          <polyline transform=\"translate(11.333333, 12.000000) scale(1, -1) rotate(-90.000000) translate(-11.333333, -12.000000) \" points=\"6.73333333 15.6666667 11.3333333 11.108 15.9333333 15.6666667 17.3333333 14.2793333 11.3333333 8.33333333 5.33333333 14.2793333 6.73333333 15.6666667\"></polyline>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";

var check = "<svg width=\"12px\" height=\"10px\" viewBox=\"0 0 12 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-367.000000, -295.000000)\" fill=\"currentcolor\">\n      <g transform=\"translate(365.000000, 292.000000)\">\n        <g transform=\"translate(0.000000, 0.000000)\">\n          <polygon id=\"Rectangle-34-Copy\" points=\"6 13 2 8.83333333 3.6 7.16666667 6 9.66666667 12.4 3 14 4.66666667\"></polygon>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";



var uiIconset = Object.freeze({
	arrow: arrow,
	check: check
});

var style$1 = "viva-ui-icon {\n  display: inline-block; }\n  viva-ui-icon > svg {\n    width: 100%;\n    height: 100%; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiIcon
 * @restrict E
 * @description An iconset consumer.
 * @param {string} icon Icon's name.
 */
mainModule.directive('vivaUiIcon', function () {
  applyStyle(style$1);

  return {
    restrict: 'E',
    link: function link($scope, $element, $attrs) {
      $attrs.$observe('icon', function (iconName) {
        var icon = uiIconset[iconName];

        if (!icon) {
          $element.empty();
          return;
        }

        $element.html(icon);
      });
    }
  };
});

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

var CheckboxHandler = function () {
  function CheckboxHandler($scope, $element, $attrs, $ngModel, $uiCheckbox) {
    classCallCheck(this, CheckboxHandler);

    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    this.$ngModel = $ngModel;
    this.$uiCheckbox = $uiCheckbox;
  }

  createClass(CheckboxHandler, [{
    key: 'onClick',
    value: function onClick() {
      var element = this.$element[0];
      var isDisabled = element.disabled;

      if (isDisabled) {
        return;
      }

      var isChecked = element.checked;
      var trueVal = this.$attrs.hasOwnProperty('ngTrueValue') ? this.$scope.$eval(this.$attrs.ngTrueValue) : true;
      var falseVal = this.$attrs.hasOwnProperty('ngFalseValue') ? this.$scope.$eval(this.$attrs.ngFalseValue) : false;

      var value = isChecked ? falseVal : trueVal;
      this.$ngModel.$setViewValue(value);
      this.$ngModel.$render();
    }
  }]);
  return CheckboxHandler;
}();

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiCheckbox
 * @restrict A
 * @element input type="checkbox"
 * @description UI Kit's checkbox implementation.
 * @param {empty | enum:[minus]} vivaUiCheckbox Change checkbox's tick.
 */


mainModule.directive('vivaUiCheckbox', ['$compile', function ($compile) {
  applyStyle(style);

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link($scope, $element, $attrs, $ngModel) {
      var $innerScope = $scope.$new(true);

      var $uiCheckbox = $innerScope.$uiCheckbox = {};
      $uiCheckbox.classPrefix = 'viva-ui-checkbox';

      var $template = $compile(template)($innerScope);
      var handler = new CheckboxHandler($scope, $element, $attrs, $ngModel, $uiCheckbox);

      $element.after($template);

      $attrs.$observe('vivaUiCheckbox', function (val) {
        $uiCheckbox.hasMinusIcon = val === 'minus';
      });

      $template.bind('click', function (e) {
        handler.onClick();
        var ngClick = $attrs.ngClick;

        if (ngClick) {
          $scope.$event = e;
          $scope.$eval(ngClick);
          delete $scope.$event;
        }
      });
    }
  };
}]);

var style$2 = "[viva-ui-flat-button] {\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #00acff;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  padding: 0 16px;\n  text-align: center;\n  min-height: 48px;\n  min-width: 16px;\n  outline: none; }\n  [viva-ui-flat-button]:hover {\n    cursor: pointer; }\n  [viva-ui-flat-button]:active {\n    background-color: rgba(0, 172, 255, 0.1); }\n  [viva-ui-flat-button]:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n[viva-ui-flat-button=\"small\"] {\n  font-size: 13px;\n  min-height: 36px;\n  text-transform: uppercase; }\n\n[viva-ui-flat-button=\"large\"] {\n  min-height: 56px; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiFlatButton
 * @restrict A
 * @element button
 * @description UI Kit's flat button implementation.
 * @param {empty | enum:[small, medium, large]} vivaUiFlatButton Button's size, by default will be medium.
 */
mainModule.directive('vivaUiFlatButton', function () {
  applyStyle(style$2);

  return {
    restrict: 'A'
  };
});

return mainModule;

}(angular));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaWNvbi9pY29uLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ZsYXRCdXR0b24vZmxhdEJ1dHRvbi5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuXG5jb25zdCAkdWlTdHlsZSA9IGFuZ3VsYXIuZWxlbWVudCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPicpXG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlICgpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGhlYWQuY2hpbGRyZW5bMF1cblxuICBoZWFkLmluc2VydEJlZm9yZSgkdWlTdHlsZVswXSwgZmlyc3RDaGlsZCB8fCBudWxsKVxufVxuXG5mdW5jdGlvbiBhcHBseVN0eWxlIChzdHlsZSkge1xuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbm1haW5Nb2R1bGUucnVuKGluc2VydFN0eWxlKVxuZXhwb3J0IHsgJHVpU3R5bGUsIGFwcGx5U3R5bGUgfVxuIiwiaW1wb3J0ICogYXMgdWlJY29uc2V0IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aUljb25zZXQvdWlJY29uc2V0J1xuaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pY29uLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUljb25cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gQW4gaWNvbnNldCBjb25zdW1lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIEljb24ncyBuYW1lLlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpSWNvbicsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgPT4ge1xuICAgICAgJGF0dHJzLiRvYnNlcnZlKCdpY29uJywgKGljb25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSB1aUljb25zZXRbaWNvbk5hbWVdXG5cbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuaHRtbChpY29uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWNrYm94Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGVja2JveC5zY3NzJ1xuaW1wb3J0ICcuLi9pY29uL2ljb24uZGlyZWN0aXZlJ1xuXG5jbGFzcyBDaGVja2JveEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZVxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudFxuICAgIHRoaXMuJGF0dHJzID0gJGF0dHJzXG4gICAgdGhpcy4kbmdNb2RlbCA9ICRuZ01vZGVsXG4gICAgdGhpcy4kdWlDaGVja2JveCA9ICR1aUNoZWNrYm94XG4gIH1cblxuICBvbkNsaWNrICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDaGVja2VkID0gZWxlbWVudC5jaGVja2VkXG4gICAgY29uc3QgdHJ1ZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ1RydWVWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdUcnVlVmFsdWUpIDogdHJ1ZVxuICAgIGNvbnN0IGZhbHNlVmFsID0gdGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ25nRmFsc2VWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdGYWxzZVZhbHVlKSA6IGZhbHNlXG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzQ2hlY2tlZCA/IGZhbHNlVmFsIDogdHJ1ZVZhbFxuICAgIHRoaXMuJG5nTW9kZWwuJHNldFZpZXdWYWx1ZSh2YWx1ZSlcbiAgICB0aGlzLiRuZ01vZGVsLiRyZW5kZXIoKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNoZWNrYm94XG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgaW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBjaGVja2JveCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7ZW1wdHkgfCBlbnVtOlttaW51c119IHZpdmFVaUNoZWNrYm94IENoYW5nZSBjaGVja2JveCdzIHRpY2suXG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDaGVja2JveCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsKSA9PiB7XG4gICAgICBjb25zdCAkaW5uZXJTY29wZSA9ICRzY29wZS4kbmV3KHRydWUpXG5cbiAgICAgIGNvbnN0ICR1aUNoZWNrYm94ID0gJGlubmVyU2NvcGUuJHVpQ2hlY2tib3ggPSB7fVxuICAgICAgJHVpQ2hlY2tib3guY2xhc3NQcmVmaXggPSAndml2YS11aS1jaGVja2JveCdcblxuICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbXBpbGUodGVtcGxhdGUpKCRpbm5lclNjb3BlKVxuICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBDaGVja2JveEhhbmRsZXIoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpXG5cbiAgICAgICRlbGVtZW50LmFmdGVyKCR0ZW1wbGF0ZSlcblxuICAgICAgJGF0dHJzLiRvYnNlcnZlKCd2aXZhVWlDaGVja2JveCcsICh2YWwpID0+IHtcbiAgICAgICAgJHVpQ2hlY2tib3guaGFzTWludXNJY29uID0gdmFsID09PSAnbWludXMnXG4gICAgICB9KVxuXG4gICAgICAkdGVtcGxhdGUuYmluZCgnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBoYW5kbGVyLm9uQ2xpY2soKVxuICAgICAgICBjb25zdCBuZ0NsaWNrID0gJGF0dHJzLm5nQ2xpY2tcblxuICAgICAgICBpZiAobmdDbGljaykge1xuICAgICAgICAgICRzY29wZS4kZXZlbnQgPSBlXG4gICAgICAgICAgJHNjb3BlLiRldmFsKG5nQ2xpY2spXG4gICAgICAgICAgZGVsZXRlICRzY29wZS4kZXZlbnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1dKVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9mbGF0QnV0dG9uLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUZsYXRCdXR0b25cbiAqIEByZXN0cmljdCBBXG4gKiBAZWxlbWVudCBidXR0b25cbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBmbGF0IGJ1dHRvbiBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7ZW1wdHkgfCBlbnVtOltzbWFsbCwgbWVkaXVtLCBsYXJnZV19IHZpdmFVaUZsYXRCdXR0b24gQnV0dG9uJ3Mgc2l6ZSwgYnkgZGVmYXVsdCB3aWxsIGJlIG1lZGl1bS5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUZsYXRCdXR0b24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7WUFDTCxrQkFBQyxHQUFELEVBQU0sT0FBTixFQUFrQjtRQUNwQixZQUFZLElBQUksS0FBSixDQUFVLEdBQVYsQ0FBbEI7Y0FDVSxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUMsRUFBakMsR0FBc0MsT0FBaEQ7O2NBRVUsQ0FBVixJQUFlLFVBQVUsQ0FBVixFQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsUUFBUSxVQUFSLEdBQXFCLGFBQXJCLEdBQXFDLGFBQTVELE1BQStFLFVBQVUsQ0FBVixFQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBOUY7O1dBRU8sVUFBVSxDQUFWLElBQWUsVUFBVSxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQ2xCLFVBQUMsS0FBRCxFQUFXO2FBQ0YsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQXZDO0tBRmdCLEVBSWxCLElBSmtCLENBSWIsRUFKYSxDQUF0Qjs7Q0FQSjs7Ozs7O0FDRUEsSUFBTSxhQUFhLFNBQVMsSUFBVCxDQUFuQjs7Ozs7Ozs7O0FBU0EsSUFBTSxhQUFjLFlBQU07TUFDcEI7V0FDSyxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVA7R0FERixDQUVFLE9BQU8sQ0FBUCxFQUFVO1dBQ0gsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixFQUEzQixDQUFQOztDQUplLEVBQW5CLENBUUE7O0FDbEJBLElBQU0sV0FBVyxRQUFRLE9BQVIsQ0FBZ0IseUJBQWhCLENBQWpCOztBQUVBLFNBQVMsV0FBVCxHQUF3QjtNQUNo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