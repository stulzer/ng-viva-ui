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

      $template.bind('click', function () {
        handler.onClick();
        var ngClick = $attrs.ngClick;

        if (ngClick) {
          var e = new window.MouseEvent('click', { bubbles: true, cancelable: true });
          $element[0].dispatchEvent(e);
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

module.exports = mainModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaWNvbi9pY29uLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ZsYXRCdXR0b24vZmxhdEJ1dHRvbi5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuXG5jb25zdCAkdWlTdHlsZSA9IGFuZ3VsYXIuZWxlbWVudCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPicpXG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlICgpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGhlYWQuY2hpbGRyZW5bMF1cblxuICBoZWFkLmluc2VydEJlZm9yZSgkdWlTdHlsZVswXSwgZmlyc3RDaGlsZCB8fCBudWxsKVxufVxuXG5mdW5jdGlvbiBhcHBseVN0eWxlIChzdHlsZSkge1xuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbm1haW5Nb2R1bGUucnVuKGluc2VydFN0eWxlKVxuZXhwb3J0IHsgJHVpU3R5bGUsIGFwcGx5U3R5bGUgfVxuIiwiaW1wb3J0ICogYXMgdWlJY29uc2V0IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aUljb25zZXQvdWlJY29uc2V0J1xuaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pY29uLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUljb25cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gQW4gaWNvbnNldCBjb25zdW1lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIEljb24ncyBuYW1lLlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpSWNvbicsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgPT4ge1xuICAgICAgJGF0dHJzLiRvYnNlcnZlKCdpY29uJywgKGljb25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSB1aUljb25zZXRbaWNvbk5hbWVdXG5cbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuaHRtbChpY29uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWNrYm94Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGVja2JveC5zY3NzJ1xuaW1wb3J0ICcuLi9pY29uL2ljb24uZGlyZWN0aXZlJ1xuXG5jbGFzcyBDaGVja2JveEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZVxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudFxuICAgIHRoaXMuJGF0dHJzID0gJGF0dHJzXG4gICAgdGhpcy4kbmdNb2RlbCA9ICRuZ01vZGVsXG4gICAgdGhpcy4kdWlDaGVja2JveCA9ICR1aUNoZWNrYm94XG4gIH1cblxuICBvbkNsaWNrICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDaGVja2VkID0gZWxlbWVudC5jaGVja2VkXG4gICAgY29uc3QgdHJ1ZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ1RydWVWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdUcnVlVmFsdWUpIDogdHJ1ZVxuICAgIGNvbnN0IGZhbHNlVmFsID0gdGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ25nRmFsc2VWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdGYWxzZVZhbHVlKSA6IGZhbHNlXG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzQ2hlY2tlZCA/IGZhbHNlVmFsIDogdHJ1ZVZhbFxuICAgIHRoaXMuJG5nTW9kZWwuJHNldFZpZXdWYWx1ZSh2YWx1ZSlcbiAgICB0aGlzLiRuZ01vZGVsLiRyZW5kZXIoKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNoZWNrYm94XG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgaW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBjaGVja2JveCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7ZW1wdHkgfCBlbnVtOlttaW51c119IHZpdmFVaUNoZWNrYm94IENoYW5nZSBjaGVja2JveCdzIHRpY2suXG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDaGVja2JveCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsKSA9PiB7XG4gICAgICBjb25zdCAkaW5uZXJTY29wZSA9ICRzY29wZS4kbmV3KHRydWUpXG5cbiAgICAgIGNvbnN0ICR1aUNoZWNrYm94ID0gJGlubmVyU2NvcGUuJHVpQ2hlY2tib3ggPSB7fVxuICAgICAgJHVpQ2hlY2tib3guY2xhc3NQcmVmaXggPSAndml2YS11aS1jaGVja2JveCdcblxuICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbXBpbGUodGVtcGxhdGUpKCRpbm5lclNjb3BlKVxuICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBDaGVja2JveEhhbmRsZXIoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpXG5cbiAgICAgICRlbGVtZW50LmFmdGVyKCR0ZW1wbGF0ZSlcblxuICAgICAgJGF0dHJzLiRvYnNlcnZlKCd2aXZhVWlDaGVja2JveCcsICh2YWwpID0+IHtcbiAgICAgICAgJHVpQ2hlY2tib3guaGFzTWludXNJY29uID0gdmFsID09PSAnbWludXMnXG4gICAgICB9KVxuXG4gICAgICAkdGVtcGxhdGUuYmluZCgnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhhbmRsZXIub25DbGljaygpXG4gICAgICAgIGNvbnN0IG5nQ2xpY2sgPSAkYXR0cnMubmdDbGlja1xuXG4gICAgICAgIGlmIChuZ0NsaWNrKSB7XG4gICAgICAgICAgY29uc3QgZSA9IG5ldyB3aW5kb3cuTW91c2VFdmVudCgnY2xpY2snLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcbiAgICAgICAgICAkZWxlbWVudFswXS5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vZmxhdEJ1dHRvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlGbGF0QnV0dG9uXG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgYnV0dG9uXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgZmxhdCBidXR0b24gaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbc21hbGwsIG1lZGl1bSwgbGFyZ2VdfSB2aXZhVWlGbGF0QnV0dG9uIEJ1dHRvbidzIHNpemUsIGJ5IGRlZmF1bHQgd2lsbCBiZSBtZWRpdW0uXG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtZQUNMLGtCQUFDLEdBQUQsRUFBTSxPQUFOLEVBQWtCO1FBQ3BCLFlBQVksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFsQjtjQUNVLE9BQU8sT0FBUCxLQUFtQixXQUFuQixHQUFpQyxFQUFqQyxHQUFzQyxPQUFoRDs7Y0FFVSxDQUFWLElBQWUsVUFBVSxDQUFWLEVBQWEsTUFBYixDQUFvQixDQUFwQixFQUF1QixRQUFRLFVBQVIsR0FBcUIsYUFBckIsR0FBcUMsYUFBNUQsTUFBK0UsVUFBVSxDQUFWLEVBQWEsS0FBYixDQUFtQixDQUFuQixDQUE5Rjs7V0FFTyxVQUFVLENBQVYsSUFBZSxVQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FDbEIsVUFBQyxLQUFELEVBQVc7YUFDRixNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBdkM7S0FGZ0IsRUFJbEIsSUFKa0IsQ0FJYixFQUphLENBQXRCOztDQVBKOzs7Ozs7QUNFQSxJQUFNLGFBQWEsU0FBUyxJQUFULENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLGFBQWMsWUFBTTtNQUNwQjtXQUNLLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLEVBQTNCLENBQVA7O0NBSmUsRUFBbkIsQ0FRQTs7QUNsQkEsSUFBTSxXQUFXLFFBQVEsT0FBUixDQUFnQix5QkFB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