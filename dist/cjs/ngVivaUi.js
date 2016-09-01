'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var angular$1 = _interopDefault(require('angular'));

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
    return angular$1.module(moduleName);
  } catch (e) {
    return angular$1.module(moduleName, []);
  }
}();

var $uiStyle = angular$1.element('<style type="text/css">');

function insertStyle() {
  var head = document.head;
  var firstChild = head.children[0];

  head.insertBefore($uiStyle[0], firstChild || null);
}

function applyStyle(style) {
  if (!document.contains($uiStyle[0])) {
    insertStyle();
  }

  var $styleNode = angular$1.element(document.createTextNode(style));
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
      <file name="app.html">
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
      <file name="app.html">
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
 * @param {enum:[checkbox]} type HTML's input type.
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

var style$3 = "viva-ui-completometro {\n  display: inline-block;\n  min-width: 64px; }\n  viva-ui-completometro .viva-ui-completometro__arch {\n    height: 32px;\n    overflow: hidden;\n    position: relative; }\n  viva-ui-completometro .viva-ui-completometro__arch-border,\n  viva-ui-completometro .viva-ui-completometro__arch-body {\n    border-radius: 50%; }\n  viva-ui-completometro .viva-ui-completometro__arch-border,\n  viva-ui-completometro .viva-ui-completometro__arch-border-bg,\n  viva-ui-completometro .viva-ui-completometro__arch-progress {\n    position: absolute; }\n  viva-ui-completometro .viva-ui-completometro__arch-border {\n    overflow: hidden;\n    width: 64px;\n    height: 64px; }\n  viva-ui-completometro .viva-ui-completometro__arch-border-bg {\n    background-color: red;\n    width: 100%;\n    height: 100%; }\n  viva-ui-completometro .viva-ui-completometro__arch-progress {\n    background-color: green;\n    height: 100%;\n    z-index: 10;\n    -o-transition: all 250ms ease-in-out;\n    -moz-transition: all 250ms ease-in-out;\n    -webkit-transition: all 250ms ease-in-out;\n    transition: all 250ms ease-in-out;\n    -o-transform: rotate(-90deg) translateX(0);\n    -ms-transform: rotate(-90deg) translateX(0);\n    -moz-transform: rotate(-90deg) translateX(0);\n    -webkit-transform: rotate(-90deg) translateX(0);\n    transform: rotate(-90deg) translateX(0); }\n  viva-ui-completometro .viva-ui-completometro__arch-body {\n    background-color: blue;\n    position: relative;\n    top: 3px;\n    left: 3px;\n    width: 58px;\n    height: 58px; }\n";

var template$1 = "<div class=\"viva-ui-completometro__arch\">\n  <div class=\"viva-ui-completometro__arch-border\">\n    <div class=\"viva-ui-completometro__arch-border-bg\"></div>\n    <div class=\"viva-ui-completometro__arch-progress\"></div>\n  </div>\n  <div class=\"viva-ui-completometro__arch-body\"></div>\n</div>";

var styleApplied = void 0;

var CompletometroHandler = function () {
  function CompletometroHandler($ctrl, $scope, $element, $progressCircle) {
    classCallCheck(this, CompletometroHandler);

    this.$ctrl = $ctrl;
    this.$scope = $scope;
    this.$element = $element;
    this.$progressCircle = $progressCircle;
  }

  createClass(CompletometroHandler, [{
    key: 'setProgress',
    value: function setProgress(progress) {
      var deg = progress * 1.8 - 90;
      // const translate = progress > 50 ? 25 : 0

      this.$progressCircle.css('width', progress + '%');
      this.$progressCircle.css('transform', 'rotate(' + deg + 'deg)');
      // this.$progressCircle.css('top', top)
    }
  }]);
  return CompletometroHandler;
}();

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiCompletometro
 * @restrict E
 * @description UI Kit's completômetro implementation.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <viva-ui-completometro progress="0"></viva-ui-completometro>
        <viva-ui-completometro progress="15"></viva-ui-completometro>
        <viva-ui-completometro progress="25"></viva-ui-completometro>
        <viva-ui-completometro progress="50"></viva-ui-completometro>
        <viva-ui-completometro progress="75"></viva-ui-completometro>
        <viva-ui-completometro progress="95"></viva-ui-completometro>
        <viva-ui-completometro progress="100"></viva-ui-completometro>
      </file>
    </example>
 */


mainModule.component('vivaUiCompletometro', {
  template: template$1,
  bindings: {
    progress: '='
  },
  controllerAs: '$uiCompletometro',
  controller: ['$scope', '$element', function ($scope, $element) {
    var _this = this;

    var handler = new CompletometroHandler(this, $scope, $element);

    if (!styleApplied) {
      styleApplied = !!applyStyle(style$3);
    }

    this.$onChanges = function (changesObj) {
      var progress = changesObj.progress;

      if (progress) {
        handler.setProgress(progress);
      }
    };

    this.$postLink = function () {
      handler.$progressCircle = angular.element($element[0].querySelector('.viva-ui-completometro__arch-progress'));

      handler.setProgress(_this.progress);
    };
  }]
});

var style$4 = "[viva-ui-flat-button] {\n  border: none;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #00acff;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  padding: 0 16px;\n  text-align: center;\n  min-height: 48px;\n  min-width: 16px;\n  outline: none;\n  font-family: 'Open Sans', sans-serif;\n  -o-transition: all 150ms ease-in-out;\n  -moz-transition: all 150ms ease-in-out;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out; }\n  [viva-ui-flat-button]:hover {\n    cursor: pointer; }\n  [viva-ui-flat-button]:active {\n    background-color: rgba(0, 172, 255, 0.1); }\n  [viva-ui-flat-button]:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n[viva-ui-flat-button=\"small\"] {\n  font-size: 13px;\n  min-height: 36px;\n  text-transform: uppercase; }\n\n[viva-ui-flat-button=\"large\"] {\n  min-height: 56px; }\n";

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
  applyStyle(style$4);

  return {
    restrict: 'A'
  };
});

var style$5 = "input[type=\"text\"][viva-ui-input] {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 16px;\n  line-height: 44px;\n  margin: 0;\n  outline: none;\n  min-height: 44px;\n  font-family: 'Open Sans', sans-serif;\n  padding-left: 16px;\n  padding-right: 16px;\n  -o-transition: border-color 250ms ease-in;\n  -moz-transition: border-color 250ms ease-in;\n  -webkit-transition: border-color 250ms ease-in;\n  transition: border-color 250ms ease-in; }\n  input[type=\"text\"][viva-ui-input]:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  input[type=\"text\"][viva-ui-input]:focus {\n    border-width: 2px;\n    border-color: #00acff;\n    padding-left: 15px;\n    padding-right: 15px; }\n\ninput[type=\"text\"][viva-ui-input=\"error\"], input[type=\"text\"][viva-ui-input=\"error\"]:focus {\n  border-width: 1px;\n  border-color: #e64a45;\n  padding-left: 16px;\n  padding-right: 16px; }\n\ninput[type=\"text\"][viva-ui-input=\"error\"] + [viva-ui-input-status] {\n  color: #e64a45;\n  font-size: 12px;\n  line-height: 18px; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiInput
 * @restrict A
 * @element input
 * @param {enum:[text]} type HTML's input type.
 * @description UI Kit's input implementation.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <div class="live-example">
          <input type="text" viva-ui-input placeholder="Input text">
        </div>

        <div class="live-example">
          <input type="text" viva-ui-input="error" placeholder="Input text with error">
          <span viva-ui-input-status>Error message</span>
        </div>
      </file>

      <file name="style.css">
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
      </file>
    </example>
 */
mainModule.directive('vivaUiInput', function () {
  applyStyle(style$5);

  return {
    restrict: 'A'
  };
});

var style$6 = "viva-ui-status-tag {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 2px;\n  font-size: 13px;\n  padding: 0 8px;\n  line-height: 24px;\n  font-family: 'Open Sans', sans-serif;\n  -o-transition: all 250ms ease-in-out;\n  -moz-transition: all 250ms ease-in-out;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  border-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.5); }\n  viva-ui-status-tag[status=\"success\"] {\n    border-color: #39d91e;\n    color: #39d91e; }\n";

/**
 * @ngdoc directive
 * @name ngVivaUi.directive:vivaUiStatusTag
 * @restrict E
 * @description UI Kit's status tag implementation.
 * @param {enum:[default, success]} [status=default] Tag status.
 * @example
    <example module="ngVivaUi">
      <file name="app.html">
        <viva-ui-status-tag class="live-example">Default</viva-ui-status-tag>
        <viva-ui-status-tag status="success" class="live-example">Success</viva-ui-status-tag>
      </file>

      <file name="style.css">
        .live-example {
          margin-right: 5px;
        }
      </file>
    </example>
 */
mainModule.directive('vivaUiStatusTag', function () {
  applyStyle(style$6);

  return {
    restrict: 'E'
  };
});

module.exports = mainModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvY2FyZC9jYXJkLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ljb24vaWNvbi5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9jaGVja2JveC9jaGVja2JveC5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9jb21wbGV0b21ldHJvL2NvbXBsZXRvbWV0cm8uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvZmxhdEJ1dHRvbi9mbGF0QnV0dG9uLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL3N0YXR1c1RhZy9zdGF0dXNUYWcuZGlyZWN0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FtZWxpemU6IChzdHIsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBzdHJQaWVjZXMgPSBzdHIuc3BsaXQoJy0nKVxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IG9wdGlvbnNcblxuICAgIHN0clBpZWNlc1swXSA9IHN0clBpZWNlc1swXS5jaGFyQXQoMClbb3B0aW9ucy5jYXBpdGFsaXplID8gJ3RvVXBwZXJDYXNlJyA6ICd0b0xvd2VyQ2FzZSddKCkgKyBzdHJQaWVjZXNbMF0uc2xpY2UoMSlcblxuICAgIHJldHVybiBzdHJQaWVjZXNbMF0gKyBzdHJQaWVjZXMuc2xpY2UoMSkubWFwKFxuICAgICAgICAocGllY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGllY2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwaWVjZS5zbGljZSgxKVxuICAgICAgICB9XG4gICAgICApLmpvaW4oJycpXG4gIH1cbn1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IHsgY2FtZWxpemUgfSBmcm9tICcuLi8uLi91dGlscy91dGlscydcblxuY29uc3QgbW9kdWxlTmFtZSA9IGNhbWVsaXplKG5hbWUpXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaVxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWlcbiAqIFZpdmEgVWkgS2l0J3MgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgbWFpbk1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIH1cbn0pKClcblxuZXhwb3J0IHsgbWFpbk1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5cbmNvbnN0ICR1aVN0eWxlID0gYW5ndWxhci5lbGVtZW50KCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+JylcblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUgKCkge1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICBjb25zdCBmaXJzdENoaWxkID0gaGVhZC5jaGlsZHJlblswXVxuXG4gIGhlYWQuaW5zZXJ0QmVmb3JlKCR1aVN0eWxlWzBdLCBmaXJzdENoaWxkIHx8IG51bGwpXG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUgKHN0eWxlKSB7XG4gIGlmICghZG9jdW1lbnQuY29udGFpbnMoJHVpU3R5bGVbMF0pKSB7XG4gICAgaW5zZXJ0U3R5bGUoKVxuICB9XG5cbiAgY29uc3QgJHN0eWxlTm9kZSA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZSkpXG4gICR1aVN0eWxlLmFwcGVuZCgkc3R5bGVOb2RlKVxufVxuXG5leHBvcnQgeyAkdWlTdHlsZSwgYXBwbHlTdHlsZSB9XG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2NhcmQuc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpQ2FyZFxuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBjYXJkIGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLWNhcmQ+XG4gICAgICAgICAgPHZpdmEtdWktY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPHNwYW4+SGVyZSBpdCBnb2VzIHNvbWUgY29udGVudC48L3NwYW4+XG4gICAgICAgICAgPC92aXZhLXVpLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8dml2YS11aS1jYXJkLWZvb3Rlcj5cbiAgICAgICAgICAgIDxzcGFuPkFuZCBoZXJlIGlzIHRoZSBmb290ZXIuPC9zcGFuPlxuICAgICAgICAgIDwvdml2YS11aS1jYXJkLWZvb3Rlcj5cbiAgICAgICAgPC92aXZhLXVpLWNhcmQ+XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpQ2FyZCcsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRSdcbiAgfVxufSlcbiIsImltcG9ydCAqIGFzIHVpSWNvbnNldCBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlJY29uc2V0L3VpSWNvbnNldCdcbmltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaWNvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJY29uXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIEFuIGljb25zZXQgY29uc3VtZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWNvbiBJY29uJ3MgbmFtZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8dml2YS11aS1pY29uIGljb249XCJjaGVja1wiPjwvdml2YS11aS1pY29uPlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUljb24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgnaWNvbicsIChpY29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gdWlJY29uc2V0W2ljb25OYW1lXVxuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoaWNvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jaGVja2JveC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2hlY2tib3guc2NzcydcbmltcG9ydCAnLi4vaWNvbi9pY29uLmRpcmVjdGl2ZSdcblxuY2xhc3MgQ2hlY2tib3hIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwsICR1aUNoZWNrYm94KSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJG5nTW9kZWwgPSAkbmdNb2RlbFxuICAgIHRoaXMuJHVpQ2hlY2tib3ggPSAkdWlDaGVja2JveFxuICB9XG5cbiAgb25DbGljayAoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF1cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudC5kaXNhYmxlZFxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGVsZW1lbnQuY2hlY2tlZFxuICAgIGNvbnN0IHRydWVWYWwgPSB0aGlzLiRhdHRycy5oYXNPd25Qcm9wZXJ0eSgnbmdUcnVlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nVHJ1ZVZhbHVlKSA6IHRydWVcbiAgICBjb25zdCBmYWxzZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ0ZhbHNlVmFsdWUnKSA/IHRoaXMuJHNjb3BlLiRldmFsKHRoaXMuJGF0dHJzLm5nRmFsc2VWYWx1ZSkgOiBmYWxzZVxuXG4gICAgY29uc3QgdmFsdWUgPSBpc0NoZWNrZWQgPyBmYWxzZVZhbCA6IHRydWVWYWxcbiAgICB0aGlzLiRuZ01vZGVsLiRzZXRWaWV3VmFsdWUodmFsdWUpXG4gICAgdGhpcy4kbmdNb2RlbC4kcmVuZGVyKClcbiAgfVxufVxuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDaGVja2JveFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0XG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY2hlY2tib3ggaW1wbGVtZW50YXRpb24uXG4gKiBAcGFyYW0ge2VtcHR5IHwgZW51bTpbbWludXNdfSB2aXZhVWlDaGVja2JveCBDaGFuZ2UgY2hlY2tib3gncyB0aWNrLlxuICogQHBhcmFtIHtlbnVtOltjaGVja2JveF19IHR5cGUgSFRNTCdzIGlucHV0IHR5cGUuXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtZXhhbXBsZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2aXZhLXVpLWNoZWNrYm94IG5nLW1vZGVsPVwiZGVmYXVsdENoZWNrYm94XCIgaWQ9XCJkZWZhdWx0LWNoZWNrYm94XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlZmF1bHQtY2hlY2tib3hcIj5EZWZhdWx0PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtZXhhbXBsZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2aXZhLXVpLWNoZWNrYm94PVwibWludXNcIiBuZy1tb2RlbD1cIm1pbnVzQ2hlY2tib3hcIiBpZD1cIm1pbnVzLWNoZWNrYm94XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm1pbnVzLWNoZWNrYm94XCI+TWludXM8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cblxuICAgICAgPGZpbGUgbmFtZT1cInN0eWxlLmNzc1wiPlxuICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGl2ZS1leGFtcGxlIGxhYmVsLCAubGl2ZS1leGFtcGxlIGlucHV0ICsgKiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDaGVja2JveCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsKSA9PiB7XG4gICAgICBjb25zdCAkaW5uZXJTY29wZSA9ICRzY29wZS4kbmV3KHRydWUpXG5cbiAgICAgIGNvbnN0ICR1aUNoZWNrYm94ID0gJGlubmVyU2NvcGUuJHVpQ2hlY2tib3ggPSB7fVxuICAgICAgJHVpQ2hlY2tib3guY2xhc3NQcmVmaXggPSAndml2YS11aS1jaGVja2JveCdcblxuICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbXBpbGUodGVtcGxhdGUpKCRpbm5lclNjb3BlKVxuICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBDaGVja2JveEhhbmRsZXIoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpXG5cbiAgICAgICRlbGVtZW50LmFmdGVyKCR0ZW1wbGF0ZSlcblxuICAgICAgJGF0dHJzLiRvYnNlcnZlKCd2aXZhVWlDaGVja2JveCcsICh2YWwpID0+IHtcbiAgICAgICAgJHVpQ2hlY2tib3guaGFzTWludXNJY29uID0gdmFsID09PSAnbWludXMnXG4gICAgICB9KVxuXG4gICAgICAkdGVtcGxhdGUuYmluZCgnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBoYW5kbGVyLm9uQ2xpY2soKVxuICAgICAgICBjb25zdCBuZ0NsaWNrID0gJGF0dHJzLm5nQ2xpY2tcblxuICAgICAgICBpZiAobmdDbGljaykge1xuICAgICAgICAgICRzY29wZS4kZXZlbnQgPSBlXG4gICAgICAgICAgJHNjb3BlLiRldmFsKG5nQ2xpY2spXG4gICAgICAgICAgZGVsZXRlICRzY29wZS4kZXZlbnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1dKVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLnNjc3MnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLmh0bWwnXG5cbmxldCBzdHlsZUFwcGxpZWRcblxuY2xhc3MgQ29tcGxldG9tZXRyb0hhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJGN0cmwsICRzY29wZSwgJGVsZW1lbnQsICRwcm9ncmVzc0NpcmNsZSkge1xuICAgIHRoaXMuJGN0cmwgPSAkY3RybFxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50XG4gICAgdGhpcy4kcHJvZ3Jlc3NDaXJjbGUgPSAkcHJvZ3Jlc3NDaXJjbGVcbiAgfVxuXG4gIHNldFByb2dyZXNzIChwcm9ncmVzcykge1xuICAgIGNvbnN0IGRlZyA9IHByb2dyZXNzICogMS44IC0gOTBcbiAgICAvLyBjb25zdCB0cmFuc2xhdGUgPSBwcm9ncmVzcyA+IDUwID8gMjUgOiAwXG5cbiAgICB0aGlzLiRwcm9ncmVzc0NpcmNsZS5jc3MoJ3dpZHRoJywgYCR7cHJvZ3Jlc3N9JWApXG4gICAgdGhpcy4kcHJvZ3Jlc3NDaXJjbGUuY3NzKCd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7ZGVnfWRlZylgKVxuICAgIC8vIHRoaXMuJHByb2dyZXNzQ2lyY2xlLmNzcygndG9wJywgdG9wKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNvbXBsZXRvbWV0cm9cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY29tcGxldMO0bWV0cm8gaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjBcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjE1XCI+PC92aXZhLXVpLWNvbXBsZXRvbWV0cm8+XG4gICAgICAgIDx2aXZhLXVpLWNvbXBsZXRvbWV0cm8gcHJvZ3Jlc3M9XCIyNVwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgICA8dml2YS11aS1jb21wbGV0b21ldHJvIHByb2dyZXNzPVwiNTBcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjc1XCI+PC92aXZhLXVpLWNvbXBsZXRvbWV0cm8+XG4gICAgICAgIDx2aXZhLXVpLWNvbXBsZXRvbWV0cm8gcHJvZ3Jlc3M9XCI5NVwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgICA8dml2YS11aS1jb21wbGV0b21ldHJvIHByb2dyZXNzPVwiMTAwXCI+PC92aXZhLXVpLWNvbXBsZXRvbWV0cm8+XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmNvbXBvbmVudCgndml2YVVpQ29tcGxldG9tZXRybycsIHtcbiAgdGVtcGxhdGUsXG4gIGJpbmRpbmdzOiB7XG4gICAgcHJvZ3Jlc3M6ICc9J1xuICB9LFxuICBjb250cm9sbGVyQXM6ICckdWlDb21wbGV0b21ldHJvJyxcbiAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJGVsZW1lbnQnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZWxlbWVudCkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgQ29tcGxldG9tZXRyb0hhbmRsZXIodGhpcywgJHNjb3BlLCAkZWxlbWVudClcblxuICAgIGlmICghc3R5bGVBcHBsaWVkKSB7XG4gICAgICBzdHlsZUFwcGxpZWQgPSAhIWFwcGx5U3R5bGUoc3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy4kb25DaGFuZ2VzID0gKGNoYW5nZXNPYmopID0+IHtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gY2hhbmdlc09iai5wcm9ncmVzc1xuXG4gICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgaGFuZGxlci5zZXRQcm9ncmVzcyhwcm9ncmVzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRwb3N0TGluayA9ICgpID0+IHtcbiAgICAgIGhhbmRsZXIuJHByb2dyZXNzQ2lyY2xlID0gYW5ndWxhci5lbGVtZW50KFxuICAgICAgICAkZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcudml2YS11aS1jb21wbGV0b21ldHJvX19hcmNoLXByb2dyZXNzJylcbiAgICAgIClcblxuICAgICAgaGFuZGxlci5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH1cbiAgfV1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZsYXRCdXR0b24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpRmxhdEJ1dHRvblxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGJ1dHRvblxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsYXQgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltzbWFsbCwgbWVkaXVtLCBsYXJnZV19IFt2aXZhVWlGbGF0QnV0dG9uPW1lZGl1bV0gQnV0dG9uJ3Mgc2l6ZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8YnV0dG9uIHZpdmEtdWktZmxhdC1idXR0b24+RmxhdCBidXR0b248L2J1dHRvbj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbnB1dC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJbnB1dFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0XG4gKiBAcGFyYW0ge2VudW06W3RleHRdfSB0eXBlIEhUTUwncyBpbnB1dCB0eXBlLlxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGlucHV0IGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgdGV4dFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dD1cImVycm9yXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCB0ZXh0IHdpdGggZXJyb3JcIj5cbiAgICAgICAgICA8c3BhbiB2aXZhLXVpLWlucHV0LXN0YXR1cz5FcnJvciBtZXNzYWdlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cblxuICAgICAgPGZpbGUgbmFtZT1cInN0eWxlLmNzc1wiPlxuICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+IHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlJbnB1dCcsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQSdcbiAgfVxufSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3RhdHVzVGFnLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaVN0YXR1c1RhZ1xuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBzdGF0dXMgdGFnIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltkZWZhdWx0LCBzdWNjZXNzXX0gW3N0YXR1cz1kZWZhdWx0XSBUYWcgc3RhdHVzLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5EZWZhdWx0PC92aXZhLXVpLXN0YXR1cy10YWc+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgc3RhdHVzPVwic3VjY2Vzc1wiIGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+U3VjY2Vzczwvdml2YS11aS1zdGF0dXMtdGFnPlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpU3RhdHVzVGFnJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7WUFDTCxrQkFBQyxHQUFELEVBQU0sT0FBTixFQUFrQjtRQUNwQixZQUFZLElBQUksS0FBSixDQUFVLEdBQVYsQ0FBbEI7Y0FDVSxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUMsRUFBakMsR0FBc0MsT0FBaEQ7O2NBRVUs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