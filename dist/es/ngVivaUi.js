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
  if (!document.contains($uiStyle[0])) {
    insertStyle();
  }

  var $styleNode = angular.element(document.createTextNode(style));
  $uiStyle.append($styleNode);
}

var style = "viva-ui-card {\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  background-color: white;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12); }\n  viva-ui-card, viva-ui-card viva-ui-card-content, viva-ui-card viva-ui-card-footer {\n    display: block; }\n  viva-ui-card viva-ui-card-content, viva-ui-card viva-ui-card-footer {\n    padding: 8px 16px; }\n  viva-ui-card viva-ui-card-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12); }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiCard
 * @restrict E
 * @description UI Kit's card implementation.
 * @example
    <example module="ngVivaUi">
      <file name="index.html">
        <viva-ui-card>
          <viva-ui-card-content>
            <span>Here it goes some content.</span>
          </viva-ui-card-content>
          <viva-ui-card-footer>
            <span>And here is the footer.</span>
          </viva-ui-card-footer>
        </viva-ui-card>
      </file>
    </example>
 */
mainModule.directive('vivaUiCard', function () {
  applyStyle(style);

  return {
    restrict: 'E'
  };
});

var template = "<div ng-class=\"{'{{$uiCheckbox.classPrefix + '__container'}}': true, '{{$uiCheckbox.classPrefix + '__container--has-minus'}}': $uiCheckbox.hasMinusIcon}\">\n  <viva-ui-icon icon=\"check\" ng-class=\"[$uiCheckbox.classPrefix + '__check']\" ng-hide=\"$uiCheckbox.hasMinusIcon\"></viva-ui-icon>\n  <i ng-class=\"[$uiCheckbox.classPrefix + '__minus']\" ng-show=\"$uiCheckbox.hasMinusIcon\"></i>\n</div>";

var style$1 = "input[type=\"checkbox\"][viva-ui-checkbox] {\n  display: none; }\n  input[type=\"checkbox\"][viva-ui-checkbox] + .viva-ui-checkbox__container {\n    -o-transition: all 250ms ease-in-out;\n    -moz-transition: all 250ms ease-in-out;\n    -webkit-transition: all 250ms ease-in-out;\n    transition: all 250ms ease-in-out;\n    background-color: #ffffff;\n    box-sizing: border-box;\n    display: inline-block;\n    color: #ffffff;\n    border: 1px solid rgba(0, 0, 0, 0.38);\n    border-radius: 2px;\n    width: 16px;\n    height: 16px;\n    position: relative; }\n    input[type=\"checkbox\"][viva-ui-checkbox] + .viva-ui-checkbox__container .viva-ui-checkbox__check {\n      -ms-user-select: none;\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      box-sizing: border-box;\n      line-height: 0;\n      opacity: 0;\n      padding: 0px 1px;\n      width: 100%;\n      height: 100%; }\n    input[type=\"checkbox\"][viva-ui-checkbox] + .viva-ui-checkbox__container .viva-ui-checkbox__minus {\n      opacity: 0;\n      background-color: rgba(0, 0, 0, 0.38);\n      display: inline-block;\n      position: absolute;\n      height: 2px;\n      top: calc(50% - 1px);\n      left: 2px;\n      right: 2px; }\n  input[type=\"checkbox\"][viva-ui-checkbox]:checked + .viva-ui-checkbox__container {\n    background-color: #00acff;\n    border-color: #00acff; }\n    input[type=\"checkbox\"][viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus {\n      background-color: #ffffff;\n      border-color: rgba(0, 0, 0, 0.38); }\n    input[type=\"checkbox\"][viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__check, input[type=\"checkbox\"][viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__minus {\n      opacity: 1; }\n  input[type=\"checkbox\"][viva-ui-checkbox] + .viva-ui-checkbox__container:hover,\n  input[type=\"checkbox\"][viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus:hover {\n    border-color: #00acff; }\n  input[type=\"checkbox\"][viva-ui-checkbox]:disabled + .viva-ui-checkbox__container, input[type=\"checkbox\"][viva-ui-checkbox]:disabled:checked + .viva-ui-checkbox__container {\n    color: rgba(0, 0, 0, 0.38);\n    background-color: #eeeeee;\n    border-color: rgba(0, 0, 0, 0.12); }\n";

var arrow = "<svg width=\"8px\" height=\"12px\" viewBox=\"0 0 8 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"currentcolor\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-75.000000, -228.000000)\">\n      <g transform=\"translate(64.000000, 216.000000)\">\n        <g transform=\"translate(4.000000, 6.000000)\">\n          <polyline transform=\"translate(11.333333, 12.000000) scale(1, -1) rotate(-90.000000) translate(-11.333333, -12.000000) \" points=\"6.73333333 15.6666667 11.3333333 11.108 15.9333333 15.6666667 17.3333333 14.2793333 11.3333333 8.33333333 5.33333333 14.2793333 6.73333333 15.6666667\"></polyline>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";

var check = "<svg width=\"12px\" height=\"10px\" viewBox=\"0 0 12 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-367.000000, -295.000000)\" fill=\"currentcolor\">\n      <g transform=\"translate(365.000000, 292.000000)\">\n        <g transform=\"translate(0.000000, 0.000000)\">\n          <polygon id=\"Rectangle-34-Copy\" points=\"6 13 2 8.83333333 3.6 7.16666667 6 9.66666667 12.4 3 14 4.66666667\"></polygon>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";



var uiIconset = Object.freeze({
	arrow: arrow,
	check: check
});

var style$2 = "viva-ui-icon {\n  display: inline-block; }\n  viva-ui-icon > svg {\n    width: 100%;\n    height: 100%; }\n";

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
mainModule.directive('vivaUiIcon', function () {
  applyStyle(style$2);

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
 * @element input
 * @description UI Kit's checkbox implementation.
 * @param {empty | enum:[minus]} vivaUiCheckbox Change checkbox's tick.
 * @param {enum:[checkbox]} [type=checkbox] HTML's input type.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <div class="live-example">
          <input type="checkbox" viva-ui-checkbox ng-model="defaultCheckbox" id="default-checkbox">
          <label for="default-checkbox">Default</label>
        </div>

        <div class="live-example">
          <input type="checkbox" viva-ui-checkbox="minus" ng-model="minusCheckbox" id="minus-checkbox">
          <label for="minus-checkbox">Minus</label>
        </div>
      </file>

      <file name="style.css">
        .live-example {
          margin-bottom: 5px;
        }

        .live-example label, .live-example input + * {
          display: inline-block;
          vertical-align: middle;
          line-height: normal;
          margin: 0;
        }
      </file>
    </example>
 */


mainModule.directive('vivaUiCheckbox', ['$compile', function ($compile) {
  applyStyle(style$1);

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

var style$3 = "[viva-ui-flat-button] {\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #00acff;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  padding: 0 16px;\n  text-align: center;\n  min-height: 48px;\n  min-width: 16px;\n  outline: none;\n  font-family: 'Open Sans', sans-serif;\n  -o-transition: all 150ms ease-in-out;\n  -moz-transition: all 150ms ease-in-out;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out; }\n  [viva-ui-flat-button]:hover {\n    cursor: pointer; }\n  [viva-ui-flat-button]:active {\n    background-color: rgba(0, 172, 255, 0.1); }\n  [viva-ui-flat-button]:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n[viva-ui-flat-button=\"small\"] {\n  font-size: 13px;\n  min-height: 36px;\n  text-transform: uppercase; }\n\n[viva-ui-flat-button=\"large\"] {\n  min-height: 56px; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiFlatButton
 * @restrict A
 * @element button
 * @description UI Kit's flat button implementation.
 * @param {enum:[small, medium, large]} [vivaUiFlatButton=medium] Button's size.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <button viva-ui-flat-button>Flat button</button>
      </file>
    </example>
 */
mainModule.directive('vivaUiFlatButton', function () {
  applyStyle(style$3);

  return {
    restrict: 'A'
  };
});

var style$4 = "input[type=\"text\"][viva-ui-input] {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 16px;\n  line-height: 44px;\n  margin: 0;\n  outline: none;\n  min-height: 44px;\n  font-family: 'Open Sans', sans-serif;\n  padding-left: 16px;\n  padding-right: 16px;\n  -o-transition: border-color 250ms ease-in;\n  -moz-transition: border-color 250ms ease-in;\n  -webkit-transition: border-color 250ms ease-in;\n  transition: border-color 250ms ease-in; }\n  input[type=\"text\"][viva-ui-input]:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]:focus {\n    border-width: 2px;\n    border-color: #00acff;\n    padding-left: 15px;\n    padding-right: 15px; }\n\ninput[type=\"text\"][viva-ui-input=\"error\"], input[type=\"text\"][viva-ui-input=\"error\"]:focus {\n  border-width: 1px;\n  border-color: #e64a45;\n  padding-left: 16px;\n  padding-right: 16px; }\n\ninput[type=\"text\"][viva-ui-input=\"error\"] + [viva-ui-input-status] {\n  color: #e64a45;\n  font-size: 12px;\n  line-height: 18px; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiInput
 * @restrict A
 * @element input type="text"
 * @description UI Kit's input implementation.
 * @example
    <example module="ngVivaUi">
      <file name="index.html">
        <style>
          .live-example {
            display: inline-block;
            width: 33%;
            vertical-align: top;
          }

          .live-example > * {
            display: block;
          }

          .live-example > span {
            margin-top: 4px;
          }

          .live-example input[type="text"]:focus {
            box-shadow: none;
          }
        </style>

        <div class="live-example">
          <input type="text" viva-ui-input placeholder="Input text">
        </div>

        <div class="live-example">
          <input type="text" viva-ui-input="error" placeholder="Input text with error">
          <span viva-ui-input-status>Error message</span>
        </div>
      </file>
    </example>
 */
mainModule.directive('vivaUiInput', function () {
  applyStyle(style$4);

  return {
    restrict: 'A'
  };
});

var style$5 = "viva-ui-status-tag {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 2px;\n  font-size: 13px;\n  padding: 0 8px;\n  line-height: 24px;\n  font-family: 'Open Sans', sans-serif;\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  border-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.5); }\n  viva-ui-status-tag[status=\"success\"] {\n    border-color: #39d91e;\n    color: #39d91e; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiStatusTag
 * @restrict E
 * @description UI Kit's status tag implementation.
 * @param {string} [status] Tag status.
 * @example
    <example module="ngVivaUi">
      <file name="index.html">
        <style>
          .live-example {
            margin-right: 5px;
          }
        </style>

        <viva-ui-status-tag class="live-example">Default</viva-ui-status-tag>
        <viva-ui-status-tag status="success" class="live-example">Success</viva-ui-status-tag>
      </file>
    </example>
 */
mainModule.directive('vivaUiStatusTag', function () {
  applyStyle(style$5);

  return {
    restrict: 'E'
  };
});

export default mainModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvY2FyZC9jYXJkLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ljb24vaWNvbi5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9jaGVja2JveC9jaGVja2JveC5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9mbGF0QnV0dG9uL2ZsYXRCdXR0b24uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaW5wdXQvaW5wdXQuZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvc3RhdHVzVGFnL3N0YXR1c1RhZy5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuY29uc3QgJHVpU3R5bGUgPSBhbmd1bGFyLmVsZW1lbnQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nKVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZSAoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBoZWFkLmNoaWxkcmVuWzBdXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoJHVpU3R5bGVbMF0sIGZpcnN0Q2hpbGQgfHwgbnVsbClcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSAoc3R5bGUpIHtcbiAgaWYgKCFkb2N1bWVudC5jb250YWlucygkdWlTdHlsZVswXSkpIHtcbiAgICBpbnNlcnRTdHlsZSgpXG4gIH1cblxuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbmV4cG9ydCB7ICR1aVN0eWxlLCBhcHBseVN0eWxlIH1cbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2FyZC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDYXJkXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGNhcmQgaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICA8dml2YS11aS1jYXJkPlxuICAgICAgICAgIDx2aXZhLXVpLWNhcmQtY29udGVudD5cbiAgICAgICAgICAgIDxzcGFuPkhlcmUgaXQgZ29lcyBzb21lIGNvbnRlbnQuPC9zcGFuPlxuICAgICAgICAgIDwvdml2YS11aS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPHZpdmEtdWktY2FyZC1mb290ZXI+XG4gICAgICAgICAgICA8c3Bhbj5BbmQgaGVyZSBpcyB0aGUgZm9vdGVyLjwvc3Bhbj5cbiAgICAgICAgICA8L3ZpdmEtdWktY2FyZC1mb290ZXI+XG4gICAgICAgIDwvdml2YS11aS1jYXJkPlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUNhcmQnLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnXG4gIH1cbn0pXG4iLCJpbXBvcnQgKiBhcyB1aUljb25zZXQgZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpSWNvbnNldC91aUljb25zZXQnXG5pbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ljb24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpSWNvblxuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBBbiBpY29uc2V0IGNvbnN1bWVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGljb24gSWNvbidzIG5hbWUuXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICA8dml2YS11aS1pY29uIGljb249XCJjaGVja1wiPjwvdml2YS11aS1pY29uPlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUljb24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgnaWNvbicsIChpY29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gdWlJY29uc2V0W2ljb25OYW1lXVxuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoaWNvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jaGVja2JveC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2hlY2tib3guc2NzcydcbmltcG9ydCAnLi4vaWNvbi9pY29uLmRpcmVjdGl2ZSdcblxuY2xhc3MgQ2hlY2tib3hIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJG5nTW9kZWwgPSAkbmdNb2RlbFxuICAgIHRoaXMuJHVpQ2hlY2tib3ggPSAkdWlDaGVja2JveFxuICB9XG5cbiAgb25DbGljayAoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF1cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudC5kaXNhYmxlZFxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGVsZW1lbnQuY2hlY2tlZFxuICAgIGNvbnN0IHRydWVWYWwgPSB0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnbmdUcnVlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nVHJ1ZVZhbHVlKSA6IHRydWVcbiAgICBjb25zdCBmYWxzZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ0ZhbHNlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nRmFsc2VWYWx1ZSkgOiBmYWxzZVxuXG4gICAgY29uc3QgdmFsdWUgPSBpc0NoZWNrZWQgPyBmYWxzZVZhbCA6IHRydWVWYWxcbiAgICB0aGlzLiRuZ01vZGVsLiRzZXRWaWV3VmFsdWUodmFsdWUpXG4gICAgdGhpcy4kbmdNb2RlbC4kcmVuZGVyKClcbiAgfVxufVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDaGVja2JveFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0XG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY2hlY2tib3ggaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbbWludXNdfSB2aXZhVWlDaGVja2JveCBDaGFuZ2UgY2hlY2tib3gncyB0aWNrLlxuICogQHBhcmFtIHtlbnVtOltjaGVja2JveF19IFt0eXBlPWNoZWNrYm94XSBIVE1MJ3MgaW5wdXQgdHlwZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3ggbmctbW9kZWw9XCJkZWZhdWx0Q2hlY2tib3hcIiBpZD1cImRlZmF1bHQtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVmYXVsdC1jaGVja2JveFwiPkRlZmF1bHQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3g9XCJtaW51c1wiIG5nLW1vZGVsPVwibWludXNDaGVja2JveFwiIGlkPVwibWludXMtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWludXMtY2hlY2tib3hcIj5NaW51czwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgbGFiZWwsIC5saXZlLWV4YW1wbGUgaW5wdXQgKyAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUNoZWNrYm94JywgWyckY29tcGlsZScsICgkY29tcGlsZSkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwpID0+IHtcbiAgICAgIGNvbnN0ICRpbm5lclNjb3BlID0gJHNjb3BlLiRuZXcodHJ1ZSlcblxuICAgICAgY29uc3QgJHVpQ2hlY2tib3ggPSAkaW5uZXJTY29wZS4kdWlDaGVja2JveCA9IHt9XG4gICAgICAkdWlDaGVja2JveC5jbGFzc1ByZWZpeCA9ICd2aXZhLXVpLWNoZWNrYm94J1xuXG4gICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY29tcGlsZSh0ZW1wbGF0ZSkoJGlubmVyU2NvcGUpXG4gICAgICBjb25zdCBoYW5kbGVyID0gbmV3IENoZWNrYm94SGFuZGxlcigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsLCAkdWlDaGVja2JveClcblxuICAgICAgJGVsZW1lbnQuYWZ0ZXIoJHRlbXBsYXRlKVxuXG4gICAgICAkYXR0cnMuJG9ic2VydmUoJ3ZpdmFVaUNoZWNrYm94JywgKHZhbCkgPT4ge1xuICAgICAgICAkdWlDaGVja2JveC5oYXNNaW51c0ljb24gPSB2YWwgPT09ICdtaW51cydcbiAgICAgIH0pXG5cbiAgICAgICR0ZW1wbGF0ZS5iaW5kKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGhhbmRsZXIub25DbGljaygpXG4gICAgICAgIGNvbnN0IG5nQ2xpY2sgPSAkYXR0cnMubmdDbGlja1xuXG4gICAgICAgIGlmIChuZ0NsaWNrKSB7XG4gICAgICAgICAgJHNjb3BlLiRldmVudCA9IGVcbiAgICAgICAgICAkc2NvcGUuJGV2YWwobmdDbGljaylcbiAgICAgICAgICBkZWxldGUgJHNjb3BlLiRldmVudFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufV0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZsYXRCdXR0b24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpRmxhdEJ1dHRvblxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGJ1dHRvblxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsYXQgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltzbWFsbCwgbWVkaXVtLCBsYXJnZV19IFt2aXZhVWlGbGF0QnV0dG9uPW1lZGl1bV0gQnV0dG9uJ3Mgc2l6ZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8YnV0dG9uIHZpdmEtdWktZmxhdC1idXR0b24+RmxhdCBidXR0b248L2J1dHRvbj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbnB1dC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJbnB1dFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBpbnB1dCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXZlLWV4YW1wbGUgPiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXZlLWV4YW1wbGUgPiBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGl2ZS1leGFtcGxlIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgdGV4dFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dD1cImVycm9yXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCB0ZXh0IHdpdGggZXJyb3JcIj5cbiAgICAgICAgICA8c3BhbiB2aXZhLXVpLWlucHV0LXN0YXR1cz5FcnJvciBtZXNzYWdlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlJbnB1dCcsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQSdcbiAgfVxufSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3RhdHVzVGFnLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaVN0YXR1c1RhZ1xuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBzdGF0dXMgdGFnIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFtzdGF0dXNdIFRhZyBzdGF0dXMuXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgLmxpdmUtZXhhbXBsZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPHZpdmEtdWktc3RhdHVzLXRhZyBjbGFzcz1cImxpdmUtZXhhbXBsZVwiPkRlZmF1bHQ8L3ZpdmEtdWktc3RhdHVzLXRhZz5cbiAgICAgICAgPHZpdmEtdWktc3RhdHVzLXRhZyBzdGF0dXM9XCJzdWNjZXNzXCIgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5TdWNjZXNzPC92aXZhLXVpLXN0YXR1cy10YWc+XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpU3RhdHVzVGFnJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO1lBQ0wsa0JBQUMsR0FBRCxFQUFNLE9BQU4sRUFBa0I7UUFDcEIsWUFBWSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWxCO2NBQ1UsT0FBTyxPQUFQLEtBQW1CLFdBQW5CLEdBQWlDLEVBQWpDLEdBQXNDLE9BQWhEOztjQUVVLENBQVYsSUFBZSxVQUFVLENBQVYsRUFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLFFBQVEsVUFBUixHQUFxQixhQUFyQixHQUFxQyxhQUE1RCxNQUErRSxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLENBQW5CLENBQTlGOztXQUVPLFVBQVUsQ0FBVixJQUFlLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUNsQixVQUFDLEtBQUQsRUFBVzthQUNGLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF2QztLQUZnQixFQUlsQixJQUprQixDQUliLEVBSmEsQ0FBdEI7O0NBUEo7Ozs7OztBQ0VBLElBQU0sYUFBYSxTQUFTLElBQVQsQ0FBbkI7Ozs7Ozs7OztBQVNBLElBQU0sYUFBYyxZQUFNO01BQ3BCO1dBQ0ssUUFBUSxNQUFSLENBQWUsVUFBZixDQUFQO0dBREYsQ0FFRSxPQUFPLENBQVAsRUFBVTtXQUNILFFBQVEsTUFBUixDQUFlLFVBQWYsRUFBMkIsRUFBM0IsQ0FBUDs7Q0FKZSxFQUFuQixDQVFBOztBQ25CQSxJQUFNLFdBQVcsUUFBUSxPQUFSLENBQWdCLHlCQUFoQixDQUFqQjs7QUFFQSxTQUFTLFdBQVQsR0FBd0I7TUFDaEIsT0FBTyxTQUFTLElBQXRCO01BQ00sYUFBYSxLQUFLLFFBQUwsQ0FBYyxDQUFk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