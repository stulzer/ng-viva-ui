(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('angular')) :
	typeof define === 'function' && define.amd ? define(['angular'], factory) :
	(global.ngVivaUi = factory(global.angular));
}(this, (function (angular) { 'use strict';

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

var style = "[viva-ui-checkbox] {\n  display: none; }\n\n.viva-ui-checkbox__container {\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  background-color: #ffffff;\n  box-sizing: border-box;\n  display: inline-block;\n  color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  border-radius: 2px;\n  width: 16px;\n  height: 16px;\n  position: relative; }\n\n.viva-ui-checkbox__check {\n  -o-transform: translate(10%, -17%);\n  -ms-transform: translate(10%, -17%);\n  -moz-transform: translate(10%, -17%);\n  -webkit-transform: translate(10%, -17%);\n  transform: translate(10%, -17%);\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  line-height: 0;\n  opacity: 0; }\n\n.viva-ui-checkbox__minus {\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.38);\n  display: inline-block;\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: calc(50% - 1px);\n  left: calc(50% - 5px); }\n\n[viva-ui-checkbox]:checked + .viva-ui-checkbox__container {\n  background-color: #00acff;\n  border-color: #00acff; }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus {\n    background-color: #ffffff;\n    border-color: rgba(0, 0, 0, 0.38); }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__check, [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__minus {\n    opacity: 1; }\n\n[viva-ui-checkbox]:disabled + .viva-ui-checkbox__container,\n[viva-ui-checkbox]:disabled:checked + .viva-ui-checkbox__container {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: #eeeeee;\n  border-color: rgba(0, 0, 0, 0.12); }\n";

var arrow = "<svg width=\"8px\" height=\"12px\" viewBox=\"0 0 8 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"currentcolor\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-75.000000, -228.000000)\">\n      <g transform=\"translate(64.000000, 216.000000)\">\n        <g transform=\"translate(4.000000, 6.000000)\">\n          <polyline transform=\"translate(11.333333, 12.000000) scale(1, -1) rotate(-90.000000) translate(-11.333333, -12.000000) \" points=\"6.73333333 15.6666667 11.3333333 11.108 15.9333333 15.6666667 17.3333333 14.2793333 11.3333333 8.33333333 5.33333333 14.2793333 6.73333333 15.6666667\"></polyline>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";

var check = "<svg width=\"12px\" height=\"10px\" viewBox=\"0 0 12 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-367.000000, -295.000000)\" fill=\"currentcolor\">\n      <g transform=\"translate(365.000000, 292.000000)\">\n        <g transform=\"translate(0.000000, 0.000000)\">\n          <polygon id=\"Rectangle-34-Copy\" points=\"6 13 2 8.83333333 3.6 7.16666667 6 9.66666667 12.4 3 14 4.66666667\"></polygon>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";



var uiIconset = Object.freeze({
	arrow: arrow,
	check: check
});

var style$1 = "viva-ui-icon {\n  display: inline-block; }\n";

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
    this.onClick = this.onClick.bind(this);
  }

  createClass(CheckboxHandler, [{
    key: 'setIcon',
    value: function setIcon() {
      var element = this.$element[0];
      var isDisabled = element.disabled;
      var isChecked = element.checked;

      var icon = 'checkbox';
      icon += isChecked ? 'On' : 'Off';

      if (isDisabled) {
        icon += 'Disabled';
      }

      this.$uiCheckbox.icon = icon;
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _this = this;

      var element = this.$element[0];
      var isDisabled = element.disabled;

      if (isDisabled) {
        return;
      }

      var isChecked = element.checked;
      var trueVal = this.$attrs.hasOwnProperty('ngTrueValue') ? this.$scope.$eval(this.$attrs.ngTrueValue) : true;
      var falseVal = this.$attrs.hasOwnProperty('ngFalseValue') ? this.$scope.$eval(this.$attrs.ngFalseValue) : false;

      this.$ngModel.$setViewValue(isChecked ? falseVal : trueVal);
      this.$ngModel.$render();

      this.$scope.$applyAsync(function () {
        _this.setIcon();
      });
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

      $scope.$watch(function () {
        var element = $element[0];
        var disabled = element.disabled;
        var checked = element.checked;

        return { disabled: disabled, checked: checked };
      }, function () {
        handler.setIcon();
      }, true);

      $template.bind('click', handler.onClick);
    }
  };
}]);

var style$2 = "[viva-ui-flat-button] {\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #00acff;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif;\n  padding: 0 16px;\n  text-align: center;\n  min-height: 48px;\n  min-width: 16px;\n  outline: none; }\n  [viva-ui-flat-button]:hover {\n    cursor: pointer; }\n  [viva-ui-flat-button]:active {\n    background-color: rgba(0, 172, 255, 0.1); }\n  [viva-ui-flat-button]:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n[viva-ui-flat-button=\"small\"] {\n  font-size: 13px;\n  min-height: 36px;\n  text-transform: uppercase; }\n\n[viva-ui-flat-button=\"large\"] {\n  min-height: 56px; }\n";

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

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaWNvbi9pY29uLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NoZWNrYm94L2NoZWNrYm94LmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ZsYXRCdXR0b24vZmxhdEJ1dHRvbi5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoaWZlbjJDYW1lbENhc2U6IChzdHIsIGNhcGl0YWxpemUpID0+IHtcbiAgICBjb25zdCBzdHJQaWVjZXMgPSBzdHIuc3BsaXQoJy0nKVxuICAgIHN0clBpZWNlc1swXSA9IHN0clBpZWNlc1swXS5jaGFyQXQoMClbY2FwaXRhbGl6ZSA/ICd0b1VwcGVyQ2FzZScgOiAndG9Mb3dlckNhc2UnXSgpICsgc3RyUGllY2VzWzBdLnNsaWNlKDEpXG5cbiAgICByZXR1cm4gc3RyUGllY2VzWzBdICsgc3RyUGllY2VzLnNsaWNlKDEpLm1hcChcbiAgICAgICAgKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBpZWNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGllY2Uuc2xpY2UoMSlcbiAgICAgICAgfVxuICAgICAgKS5qb2luKCcnKVxuICB9XG59XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IGhpZmVuMkNhbWVsQ2FzZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gaGlmZW4yQ2FtZWxDYXNlKG5hbWUpXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaVxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWlcbiAqIFZpdmEgVWkgS2l0J3MgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgbWFpbk1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIH1cbn0pKClcblxuZXhwb3J0IHsgbWFpbk1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcblxuY29uc3QgJHVpU3R5bGUgPSBhbmd1bGFyLmVsZW1lbnQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nKVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZSAoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBoZWFkLmNoaWxkcmVuWzBdXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoJHVpU3R5bGVbMF0sIGZpcnN0Q2hpbGQgfHwgbnVsbClcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSAoc3R5bGUpIHtcbiAgY29uc3QgJHN0eWxlTm9kZSA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZSkpXG4gICR1aVN0eWxlLmFwcGVuZCgkc3R5bGVOb2RlKVxufVxuXG5tYWluTW9kdWxlLnJ1bihpbnNlcnRTdHlsZSlcbmV4cG9ydCB7ICR1aVN0eWxlLCBhcHBseVN0eWxlIH1cbiIsImltcG9ydCAqIGFzIHVpSWNvbnNldCBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlJY29uc2V0L3VpSWNvbnNldCdcbmltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaWNvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJY29uXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIEFuIGljb25zZXQgY29uc3VtZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWNvbiBJY29uJ3MgbmFtZS5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUljb24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgnaWNvbicsIChpY29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gdWlJY29uc2V0W2ljb25OYW1lXVxuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoaWNvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jaGVja2JveC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2hlY2tib3guc2NzcydcbmltcG9ydCAnLi4vaWNvbi9pY29uLmRpcmVjdGl2ZSdcblxuY2xhc3MgQ2hlY2tib3hIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJG5nTW9kZWwgPSAkbmdNb2RlbFxuICAgIHRoaXMuJHVpQ2hlY2tib3ggPSAkdWlDaGVja2JveFxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRJY29uICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG4gICAgY29uc3QgaXNDaGVja2VkID0gZWxlbWVudC5jaGVja2VkXG5cbiAgICBsZXQgaWNvbiA9ICdjaGVja2JveCdcbiAgICBpY29uICs9IGlzQ2hlY2tlZCA/ICdPbicgOiAnT2ZmJ1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIGljb24gKz0gJ0Rpc2FibGVkJ1xuICAgIH1cblxuICAgIHRoaXMuJHVpQ2hlY2tib3guaWNvbiA9IGljb25cbiAgfVxuXG4gIG9uQ2xpY2sgKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50WzBdXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQuZGlzYWJsZWRcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0NoZWNrZWQgPSBlbGVtZW50LmNoZWNrZWRcbiAgICBjb25zdCB0cnVlVmFsID0gdGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ25nVHJ1ZVZhbHVlJykgPyB0aGlzLiRzY29wZS4kZXZhbCh0aGlzLiRhdHRycy5uZ1RydWVWYWx1ZSkgOiB0cnVlXG4gICAgY29uc3QgZmFsc2VWYWwgPSB0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnbmdGYWxzZVZhbHVlJykgPyB0aGlzLiRzY29wZS4kZXZhbCh0aGlzLiRhdHRycy5uZ0ZhbHNlVmFsdWUpIDogZmFsc2VcblxuICAgIHRoaXMuJG5nTW9kZWwuJHNldFZpZXdWYWx1ZShpc0NoZWNrZWQgPyBmYWxzZVZhbCA6IHRydWVWYWwpXG4gICAgdGhpcy4kbmdNb2RlbC4kcmVuZGVyKClcblxuICAgIHRoaXMuJHNjb3BlLiRhcHBseUFzeW5jKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0SWNvbigpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDaGVja2JveFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY2hlY2tib3ggaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbbWludXNdfSB2aXZhVWlDaGVja2JveCBDaGFuZ2UgY2hlY2tib3gncyB0aWNrLlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpQ2hlY2tib3gnLCBbJyRjb21waWxlJywgKCRjb21waWxlKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCkgPT4ge1xuICAgICAgY29uc3QgJGlubmVyU2NvcGUgPSAkc2NvcGUuJG5ldyh0cnVlKVxuXG4gICAgICBjb25zdCAkdWlDaGVja2JveCA9ICRpbm5lclNjb3BlLiR1aUNoZWNrYm94ID0ge31cbiAgICAgICR1aUNoZWNrYm94LmNsYXNzUHJlZml4ID0gJ3ZpdmEtdWktY2hlY2tib3gnXG5cbiAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICRjb21waWxlKHRlbXBsYXRlKSgkaW5uZXJTY29wZSlcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgQ2hlY2tib3hIYW5kbGVyKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KVxuXG4gICAgICAkZWxlbWVudC5hZnRlcigkdGVtcGxhdGUpXG5cbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgndml2YVVpQ2hlY2tib3gnLCAodmFsKSA9PiB7XG4gICAgICAgICR1aUNoZWNrYm94Lmhhc01pbnVzSWNvbiA9IHZhbCA9PT0gJ21pbnVzJ1xuICAgICAgfSlcblxuICAgICAgJHNjb3BlLiR3YXRjaChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkZWxlbWVudFswXVxuICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGNoZWNrZWQgfSA9IGVsZW1lbnRcbiAgICAgICAgICByZXR1cm4ge2Rpc2FibGVkLCBjaGVja2VkfVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlci5zZXRJY29uKClcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuXG4gICAgICAkdGVtcGxhdGUuYmluZCgnY2xpY2snLCBoYW5kbGVyLm9uQ2xpY2spXG4gICAgfVxuICB9XG59XSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vZmxhdEJ1dHRvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlGbGF0QnV0dG9uXG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgYnV0dG9uXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgZmxhdCBidXR0b24gaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbc21hbGwsIG1lZGl1bSwgbGFyZ2VdfSB2aXZhVWlGbGF0QnV0dG9uIEJ1dHRvbidzIHNpemUsIGJ5IGRlZmF1bHQgd2lsbCBiZSBtZWRpdW0uXG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO21CQUNFLHlCQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO1FBQzlCLFlBQVksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFsQjtjQUNVLENBQVYsSUFBZSxVQUFVLENBQVYsRUFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLGFBQWEsYUFBYixHQUE2QixhQUFwRCxNQUF1RSxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLENBQW5CLENBQXRGOztXQUVPLFVBQVUsQ0FBVixJQUFlLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUNsQixVQUFDLEtBQUQsRUFBVzthQUNGLE1BQU0sTUFBTixDQUFhLENB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