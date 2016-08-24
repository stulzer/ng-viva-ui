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

var moduleName = hifen2CamelCase(name);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaWNvbi9pY29uLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ZsYXRCdXR0b24vZmxhdEJ1dHRvbi5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoaWZlbjJDYW1lbENhc2U6IChzdHIsIGNhcGl0YWxpemUpID0+IHtcbiAgICBjb25zdCBzdHJQaWVjZXMgPSBzdHIuc3BsaXQoJy0nKVxuICAgIHN0clBpZWNlc1swXSA9IHN0clBpZWNlc1swXS5jaGFyQXQoMClbY2FwaXRhbGl6ZSA/ICd0b1VwcGVyQ2FzZScgOiAndG9Mb3dlckNhc2UnXSgpICsgc3RyUGllY2VzWzBdLnNsaWNlKDEpXG5cbiAgICByZXR1cm4gc3RyUGllY2VzWzBdICsgc3RyUGllY2VzLnNsaWNlKDEpLm1hcChcbiAgICAgICAgKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBpZWNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGllY2Uuc2xpY2UoMSlcbiAgICAgICAgfVxuICAgICAgKS5qb2luKCcnKVxuICB9XG59XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IGhpZmVuMkNhbWVsQ2FzZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gaGlmZW4yQ2FtZWxDYXNlKG5hbWUpXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaVxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWlcbiAqIFZpdmEgVWkgS2l0J3MgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgbWFpbk1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIH1cbn0pKClcblxuZXhwb3J0IHsgbWFpbk1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcblxuY29uc3QgJHVpU3R5bGUgPSBhbmd1bGFyLmVsZW1lbnQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nKVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZSAoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBoZWFkLmNoaWxkcmVuWzBdXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoJHVpU3R5bGVbMF0sIGZpcnN0Q2hpbGQgfHwgbnVsbClcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSAoc3R5bGUpIHtcbiAgY29uc3QgJHN0eWxlTm9kZSA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZSkpXG4gICR1aVN0eWxlLmFwcGVuZCgkc3R5bGVOb2RlKVxufVxuXG5tYWluTW9kdWxlLnJ1bihpbnNlcnRTdHlsZSlcbmV4cG9ydCB7ICR1aVN0eWxlLCBhcHBseVN0eWxlIH1cbiIsImltcG9ydCAqIGFzIHVpSWNvbnNldCBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlJY29uc2V0L3VpSWNvbnNldCdcbmltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaWNvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJY29uXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIEFuIGljb25zZXQgY29uc3VtZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWNvbiBJY29uJ3MgbmFtZS5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUljb24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgnaWNvbicsIChpY29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gdWlJY29uc2V0W2ljb25OYW1lXVxuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoaWNvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jaGVja2JveC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2hlY2tib3guc2NzcydcbmltcG9ydCAnLi4vaWNvbi9pY29uLmRpcmVjdGl2ZSdcblxuY2xhc3MgQ2hlY2tib3hIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJG5nTW9kZWwgPSAkbmdNb2RlbFxuICAgIHRoaXMuJHVpQ2hlY2tib3ggPSAkdWlDaGVja2JveFxuICB9XG5cbiAgb25DbGljayAoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF1cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudC5kaXNhYmxlZFxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGVsZW1lbnQuY2hlY2tlZFxuICAgIGNvbnN0IHRydWVWYWwgPSB0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnbmdUcnVlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nVHJ1ZVZhbHVlKSA6IHRydWVcbiAgICBjb25zdCBmYWxzZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ0ZhbHNlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nRmFsc2VWYWx1ZSkgOiBmYWxzZVxuXG4gICAgY29uc3QgdmFsdWUgPSBpc0NoZWNrZWQgPyBmYWxzZVZhbCA6IHRydWVWYWxcbiAgICB0aGlzLiRuZ01vZGVsLiRzZXRWaWV3VmFsdWUodmFsdWUpXG4gICAgdGhpcy4kbmdNb2RlbC4kcmVuZGVyKClcbiAgfVxufVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDaGVja2JveFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY2hlY2tib3ggaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbbWludXNdfSB2aXZhVWlDaGVja2JveCBDaGFuZ2UgY2hlY2tib3gncyB0aWNrLlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpQ2hlY2tib3gnLCBbJyRjb21waWxlJywgKCRjb21waWxlKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCkgPT4ge1xuICAgICAgY29uc3QgJGlubmVyU2NvcGUgPSAkc2NvcGUuJG5ldyh0cnVlKVxuXG4gICAgICBjb25zdCAkdWlDaGVja2JveCA9ICRpbm5lclNjb3BlLiR1aUNoZWNrYm94ID0ge31cbiAgICAgICR1aUNoZWNrYm94LmNsYXNzUHJlZml4ID0gJ3ZpdmEtdWktY2hlY2tib3gnXG5cbiAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICRjb21waWxlKHRlbXBsYXRlKSgkaW5uZXJTY29wZSlcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgQ2hlY2tib3hIYW5kbGVyKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KVxuXG4gICAgICAkZWxlbWVudC5hZnRlcigkdGVtcGxhdGUpXG5cbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgndml2YVVpQ2hlY2tib3gnLCAodmFsKSA9PiB7XG4gICAgICAgICR1aUNoZWNrYm94Lmhhc01pbnVzSWNvbiA9IHZhbCA9PT0gJ21pbnVzJ1xuICAgICAgfSlcblxuICAgICAgJHRlbXBsYXRlLmJpbmQoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoYW5kbGVyLm9uQ2xpY2soKVxuICAgICAgICBjb25zdCBuZ0NsaWNrID0gJGF0dHJzLm5nQ2xpY2tcblxuICAgICAgICBpZiAobmdDbGljaykge1xuICAgICAgICAgIGNvbnN0IGUgPSBuZXcgd2luZG93Lk1vdXNlRXZlbnQoJ2NsaWNrJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pXG4gICAgICAgICAgJGVsZW1lbnRbMF0uZGlzcGF0Y2hFdmVudChlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufV0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZsYXRCdXR0b24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpRmxhdEJ1dHRvblxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGJ1dHRvblxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsYXQgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbXB0eSB8IGVudW06W3NtYWxsLCBtZWRpdW0sIGxhcmdlXX0gdml2YVVpRmxhdEJ1dHRvbiBCdXR0b24ncyBzaXplLCBieSBkZWZhdWx0IHdpbGwgYmUgbWVkaXVtLlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpRmxhdEJ1dHRvbicsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQSdcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7bUJBQ0UseUJBQUMsR0FBRCxFQUFNLFVBQU4sRUFBcUI7UUFDOUIsWUFBWSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWxCO2NBQ1UsQ0FBVixJQUFlLFVBQVUsQ0FBVixFQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsYUFBYSxhQUFiLEdBQTZCLGFBQXBELE1BQXVFLFVBQVUsQ0FBVixFQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdEY7O1dBRU8sVUFBVSxDQUFWLElBQWUsVUFBVSxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQ2xCLFVBQUMsS0FBRCxFQUFXO2FBQ0YsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQXZDO0tBRmdCLEVBSWxCLElBSmtCLENBSWIsRUFKYSxDQUF0Qjs7Q0FMSjs7Ozs7O0FDRUEsSUFBTSxhQUFhLGdCQUFnQixJQUFoQixDQUFuQjs7Ozs7Ozs7O0FBU0EsSUFBTSxhQUFjLFlBQU07TUFDcEI7V0FDSyxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVA7R0FERixDQUVFLE9BQU8sQ0FBUCxFQUFVO1dBQ0gsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixFQUEzQixDQUFQOztDQUplLEVBQW5CLENBUUE7O0FDbEJBLElBQU0sV0FBVyxRQUFRLE9BQVIsQ0FBZ0IseUJBQWhCLENBQWpCOztBQUVBLFNBQVMsV0FBVCxHQUF3QjtNQUNoQixPQUFPLFNBQVMsSUFBdEI7TUFDTSxhQUFhLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBbkI7O09BRUssWUFBTCxDQUFrQixTQUFTLENBQVQsQ0FBbEIsRUFBK0IsY0FBYyxJQUE3Qzs7O0FBR0YsU0FBUyxVQUFULENBQXFCLEtBQXJCLEVBQTRCO01BQ3BCLGFBQWEsUUFBUSxPQUFSLENBQWdCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFoQixDQUFuQjtXQUNTLE1BQVQsQ0FBZ0IsVUFBaEI7OztBQUdGLFdBQVcsR0FBWCxDQUFlLFdBQWYsRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7O0FBT0EsV0FBVyxTQUFYLENBQXFCLFlBQXJCLEVBQW1DLFlBQU07YUFDNUJBLE9BQVg7O1NBRU87Y0FDSyxHQURMO1VBRUMsY0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUE4QjthQUMzQixRQUFQLENBQWdCLE1BQWhCLEVBQXdCLFVBQUMsUUFBRCxFQUFjO1lBQzlCLE9BQU8sVUFBVSxRQUFWLENBQWI7O1lBRUksQ0FBQyxJQUFMLEVBQVc7bUJBQ0EsS0FBVDs7OztpQkFJTyxJQUFULENBQWMsSUFBZDtPQVJGOztHQUhKO0NBSEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDTk07MkJBQ1MsTUFBYixFQUFxQixRQUFyQixFQUErQixNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxXQUFqRCxFQUE4RDs7O1NBQ3ZELE1BQUwsR0FBYyxNQUFkO1NBQ0ssUUFBTCxHQUFnQixRQUFoQjtTQUNLLE1BQUwsR0FBYyxNQUFkO1NBQ0ssUUFBTCxHQUFnQixRQUFoQjtTQUNLLFdBQUwsR0FBbUIsV0FBbkI7Ozs7OzhCQUdTO1VBQ0gsVUFBVSxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQWhCO1VBQ00sYUFBYSxRQUFRLFFBQTNCOztVQUVJLFVBQUosRUFBZ0I7Ozs7VUFJVixZQUFZLFFBQVEsT0FBMUI7VUFDTSxVQUFVLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsYUFBM0IsSUFBNEMsS0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixLQUFLLE1BQUwsQ0FBWSxXQUE5QixDQUE1QyxHQUF5RixJQUF6RztVQUNNLFdBQVcsS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixjQUEzQixJQUE2QyxLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEtBQUssTUFBTCxDQUFZLFlBQTlCLENBQTdDLEdBQTJGLEtBQTVHOztVQUVNLFFBQVEsWUFBWSxRQUFaLEdBQXVCLE9BQXJDO1dBQ0ssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsS0FBNUI7V0FDSyxRQUFMLENBQWMsT0FBZDs7Ozs7Ozs7Ozs7Ozs7OztBQVlKLFdBQVcsU0FBWCxDQUFxQixnQkFBckIsRUFBdUMsQ0FBQyxVQUFELEVBQWEsVUFBQyxRQUFELEVBQWM7YUFDckQsS0FBWDs7U0FFTztjQUNLLEdBREw7YUFFSSxTQUZKO1VBR0MsY0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQixRQUEzQixFQUF3QztVQUN0QyxjQUFjLE9BQU8sSUFBUCxDQUFZLElBQVosQ0FBcEI7O1VBRU0sY0FBYyxZQUFZLFdBQVosR0FBMEIsRUFBOUM7a0JBQ1ksV0FBWixHQUEwQixrQkFBMUI7O1VBRU0sWUFBWSxTQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FBbEI7VUFDTSxVQUFVLElBQUksZUFBSixDQUFvQixNQUFwQixFQUE0QixRQUE1QixFQUFzQyxNQUF0QyxFQUE4QyxRQUE5QyxFQUF3RCxXQUF4RCxDQUFoQjs7ZUFFUyxLQUFULENBQWUsU0FBZjs7YUFFTyxRQUFQLENBQWdCLGdCQUFoQixFQUFrQyxVQUFDLEdBQUQsRUFBUztvQkFDN0IsWUFBWixHQUEyQixRQUFRLE9BQW5DO09BREY7O2dCQUlVLElBQVYsQ0FBZSxPQUFmLEVBQXdCLFlBQU07Z0JBQ3BCLE9BQVI7WUFDTSxVQUFVLE9BQU8sT0FBdkI7O1lBRUksT0FBSixFQUFhO2NBQ0wsSUFBSSxJQUFJLE9BQU8sVUFBWCxDQUFzQixPQUF0QixFQUErQixFQUFFLFNBQVMsSUFBWCxFQUFpQixZQUFZLElBQTdCLEVBQS9CLENBQVY7bUJBQ1MsQ0FBVCxFQUFZLGFBQVosQ0FBMEIsQ0FBMUI7O09BTko7O0dBbEJKO0NBSHFDLENBQXZDOzs7O0FDckNBOzs7Ozs7OztBQVFBLFdBQVcsU0FBWCxDQUFxQixrQkFBckIsRUFBeUMsWUFBTTthQUNsQ0EsT0FBWDs7U0FFTztjQUNLO0dBRFo7Q0FIRjs7In0=