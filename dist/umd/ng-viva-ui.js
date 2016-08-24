(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('angular')) :
	typeof define === 'function' && define.amd ? define(['angular'], factory) :
	(global.ng-viva-ui = factory(global.angular));
}(this, (function (angular) { 'use strict';

angular = 'default' in angular ? angular['default'] : angular;

var name = "ng-viva-ui";

var uiModule = angular.module(name, []);

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

uiModule.run(insertStyle);

var template = "<div ng-class=\"{'{{$uiCheckbox.classPrefix + '__container'}}': true, '{{$uiCheckbox.classPrefix + '__container--has-minus'}}': $uiCheckbox.hasMinusIcon}\">\n  <viva-ui-icon icon=\"check\" ng-class=\"[$uiCheckbox.classPrefix + '__check']\" ng-hide=\"$uiCheckbox.hasMinusIcon\"></viva-ui-icon>\n  <i ng-class=\"[$uiCheckbox.classPrefix + '__minus']\" ng-show=\"$uiCheckbox.hasMinusIcon\"></i>\n</div>";

var style = "[viva-ui-checkbox] {\n  display: none; }\n\n.viva-ui-checkbox__container {\n  background-color: #ffffff;\n  box-sizing: border-box;\n  display: inline-block;\n  color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  border-radius: 2px;\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  position: relative; }\n\n.viva-ui-checkbox__check {\n  opacity: 0;\n  -webkit-transform: translate(10%, -10%);\n  transform: translate(10%, -10%); }\n\n.viva-ui-checkbox__minus {\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.38);\n  display: inline-block;\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: calc(50% - 1px);\n  left: calc(50% - 5px); }\n\n[viva-ui-checkbox]:checked + .viva-ui-checkbox__container {\n  background-color: #00acff;\n  border-color: #00acff; }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container.viva-ui-checkbox__container--has-minus {\n    background-color: #ffffff;\n    border-color: rgba(0, 0, 0, 0.38); }\n  [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__check, [viva-ui-checkbox]:checked + .viva-ui-checkbox__container .viva-ui-checkbox__minus {\n    opacity: 1; }\n\n[viva-ui-checkbox]:disabled + .viva-ui-checkbox__container,\n[viva-ui-checkbox]:disabled:checked + .viva-ui-checkbox__container {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: #eeeeee;\n  border-color: rgba(0, 0, 0, 0.12); }\n";

var check = "<svg width=\"12px\" height=\"10px\" viewBox=\"0 0 12 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-367.000000, -295.000000)\" fill=\"currentcolor\">\n      <g transform=\"translate(365.000000, 292.000000)\">\n        <g transform=\"translate(0.000000, 0.000000)\">\n          <polygon id=\"Rectangle-34-Copy\" points=\"6 13 2 8.83333333 3.6 7.16666667 6 9.66666667 12.4 3 14 4.66666667\"></polygon>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>";



var uiIconset = Object.freeze({
	check: check
});

var style$1 = "viva-ui-icon {\n  display: inline-block; }\n";

/**
 * @ngdoc directive
 * @name ng-viva-ui.directive:vivaUiIcon
 * @restrict E
 * @description An iconset consumer.
 * @param {string} icon Icon's name.
 */
uiModule.directive('vivaUiIcon', function () {
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
  function CheckboxHandler($element, $uiCheckbox) {
    classCallCheck(this, CheckboxHandler);

    this.$element = $element;
    this.$uiCheckbox = $uiCheckbox;
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
  }]);
  return CheckboxHandler;
}();

/**
 * @ngdoc directive
 * @name ng-viva-ui.directive:vivaUiCheckbox
 * @restrict A
 * @element input type="checkbox"
 * @description UI Kit's checkbox implementation.
 * @param {empty | enum:[minus]} vivaUiCheckbox Change checkbox's tick.
 */


uiModule.directive('vivaUiCheckbox', ['$compile', function ($compile) {
  applyStyle(style);

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link($scope, $element, $attrs, $ngModel) {
      var $innerScope = $scope.$new(true);

      var $uiCheckbox = $innerScope.$uiCheckbox = {};
      $uiCheckbox.classPrefix = 'viva-ui-checkbox';

      var $template = $compile(template)($innerScope);
      var handler = new CheckboxHandler($element, $uiCheckbox);

      $element.after($template);

      $attrs.$observe('vivaUICheckbox', function (val) {
        $uiCheckbox.hasMinusIcon = val === 'minus';
      });

      $scope.$watch(function () {
        var element = $element[0];
        var disabled = element.disabled;
        var checked = element.checked;

        return { disabled: disabled, checked: checked };
      }, function (val) {
        handler.setIcon();
      }, true);

      $template.bind('click', function () {
        var element = $element[0];
        var isDisabled = element.disabled;

        if (isDisabled) {
          return;
        }

        var isChecked = element.checked;
        var trueVal = $attrs.hasOwnProperty('ngTrueValue') ? $scope.$eval($attrs.ngTrueValue) : true;
        var falseVal = $attrs.hasOwnProperty('ngFalseValue') ? $scope.$eval($attrs.ngFalseValue) : false;

        $ngModel.$setViewValue(isChecked ? falseVal : trueVal);
        $ngModel.$render();

        $scope.$applyAsync(function () {
          handler.setIcon();
        });
      });
    }
  };
}]);

return uiModule;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3Byb3ZpZGVycy91aU1vZHVsZS91aU1vZHVsZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvZGlyZWN0aXZlcy9pY29uL2ljb24uanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9kaXJlY3RpdmVzL2NoZWNrYm94L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG5jb25zdCB1aU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIFtdKVxuZXhwb3J0IGRlZmF1bHQgdWlNb2R1bGVcbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgdWlNb2R1bGUgZnJvbSAnLi4vdWlNb2R1bGUvdWlNb2R1bGUnXG5cbmNvbnN0ICR1aVN0eWxlID0gYW5ndWxhci5lbGVtZW50KCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+JylcblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUgKCkge1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICBjb25zdCBmaXJzdENoaWxkID0gaGVhZC5jaGlsZHJlblswXVxuXG4gIGhlYWQuaW5zZXJ0QmVmb3JlKCR1aVN0eWxlWzBdLCBmaXJzdENoaWxkIHx8IG51bGwpXG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUgKHN0eWxlKSB7XG4gIGNvbnN0ICRzdHlsZU5vZGUgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGUpKVxuICAkdWlTdHlsZS5hcHBlbmQoJHN0eWxlTm9kZSlcbn1cblxudWlNb2R1bGUucnVuKGluc2VydFN0eWxlKVxuXG5leHBvcnQgeyAkdWlTdHlsZSwgYXBwbHlTdHlsZSB9XG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgdWlNb2R1bGUgZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpTW9kdWxlL3VpTW9kdWxlJ1xuaW1wb3J0ICogYXMgdWlJY29uc2V0IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aUljb25zZXQvdWlJY29uc2V0J1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vaWNvbi5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nLXZpdmEtdWkuZGlyZWN0aXZlOnZpdmFVaUljb25cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gQW4gaWNvbnNldCBjb25zdW1lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIEljb24ncyBuYW1lLlxuICovXG51aU1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUljb24nLCAoKSA9PiB7XG4gIGFwcGx5U3R5bGUoc3R5bGUpXG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpID0+IHtcbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgnaWNvbicsIChpY29uTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gdWlJY29uc2V0W2ljb25OYW1lXVxuXG4gICAgICAgIGlmICghaWNvbikge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICRlbGVtZW50Lmh0bWwoaWNvbilcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IHVpTW9kdWxlIGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aU1vZHVsZS91aU1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWNrYm94Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGVja2JveC5zY3NzJ1xuaW1wb3J0ICcuLi9pY29uL2ljb24nXG5cbmNsYXNzIENoZWNrYm94SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yICgkZWxlbWVudCwgJHVpQ2hlY2tib3gpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiR1aUNoZWNrYm94ID0gJHVpQ2hlY2tib3hcbiAgfVxuXG4gIHNldEljb24gKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50WzBdXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQuZGlzYWJsZWRcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBlbGVtZW50LmNoZWNrZWRcblxuICAgIGxldCBpY29uID0gJ2NoZWNrYm94J1xuICAgIGljb24gKz0gaXNDaGVja2VkID8gJ09uJyA6ICdPZmYnXG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgaWNvbiArPSAnRGlzYWJsZWQnXG4gICAgfVxuXG4gICAgdGhpcy4kdWlDaGVja2JveC5pY29uID0gaWNvblxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmctdml2YS11aS5kaXJlY3RpdmU6dml2YVVpQ2hlY2tib3hcbiAqIEByZXN0cmljdCBBXG4gKiBAZWxlbWVudCBpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGNoZWNrYm94IGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbXB0eSB8IGVudW06W21pbnVzXX0gdml2YVVpQ2hlY2tib3ggQ2hhbmdlIGNoZWNrYm94J3MgdGljay5cbiAqL1xudWlNb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDaGVja2JveCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsKSA9PiB7XG4gICAgICBjb25zdCAkaW5uZXJTY29wZSA9ICRzY29wZS4kbmV3KHRydWUpXG5cbiAgICAgIGNvbnN0ICR1aUNoZWNrYm94ID0gJGlubmVyU2NvcGUuJHVpQ2hlY2tib3ggPSB7fVxuICAgICAgJHVpQ2hlY2tib3guY2xhc3NQcmVmaXggPSAndml2YS11aS1jaGVja2JveCdcblxuICAgICAgY29uc3QgJHRlbXBsYXRlID0gJGNvbXBpbGUodGVtcGxhdGUpKCRpbm5lclNjb3BlKVxuICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBDaGVja2JveEhhbmRsZXIoJGVsZW1lbnQsICR1aUNoZWNrYm94KVxuXG4gICAgICAkZWxlbWVudC5hZnRlcigkdGVtcGxhdGUpXG5cbiAgICAgICRhdHRycy4kb2JzZXJ2ZSgndml2YVVJQ2hlY2tib3gnLCAodmFsKSA9PiB7XG4gICAgICAgICR1aUNoZWNrYm94Lmhhc01pbnVzSWNvbiA9IHZhbCA9PT0gJ21pbnVzJ1xuICAgICAgfSlcblxuICAgICAgJHNjb3BlLiR3YXRjaChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAkZWxlbWVudFswXVxuICAgICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGNoZWNrZWQgfSA9IGVsZW1lbnRcbiAgICAgICAgICByZXR1cm4geyBkaXNhYmxlZCwgY2hlY2tlZCB9XG4gICAgICAgIH0sXG4gICAgICAgICh2YWwpID0+IHtcbiAgICAgICAgICBoYW5kbGVyLnNldEljb24oKVxuICAgICAgICB9LFxuICAgICAgICB0cnVlXG4gICAgICApXG5cbiAgICAgICR0ZW1wbGF0ZS5iaW5kKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICRlbGVtZW50WzBdXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG5cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGVsZW1lbnQuY2hlY2tlZFxuICAgICAgICBjb25zdCB0cnVlVmFsID0gJGF0dHJzLmhhc093blByb3BlcnR5KCduZ1RydWVWYWx1ZScpID8gJHNjb3BlLiRldmFsKCRhdHRycy5uZ1RydWVWYWx1ZSkgOiB0cnVlXG4gICAgICAgIGNvbnN0IGZhbHNlVmFsID0gJGF0dHJzLmhhc093blByb3BlcnR5KCduZ0ZhbHNlVmFsdWUnKSA/ICRzY29wZS4kZXZhbCgkYXR0cnMubmdGYWxzZVZhbHVlKSA6IGZhbHNlXG5cbiAgICAgICAgJG5nTW9kZWwuJHNldFZpZXdWYWx1ZShpc0NoZWNrZWQgPyBmYWxzZVZhbCA6IHRydWVWYWwpXG4gICAgICAgICRuZ01vZGVsLiRyZW5kZXIoKVxuXG4gICAgICAgICRzY29wZS4kYXBwbHlBc3luYygoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlci5zZXRJY29uKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XSlcbiJdLCJuYW1lcyI6WyJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLElBQU0sV0FBVyxRQUFRLE1BQVIsQ0FBZSxJQUFmLEVBQXFCLEVBQXJCLENBQWpCLENBQ0E7O0FDREEsSUFBTSxXQUFXLFFBQVEsT0FBUixDQUFnQix5QkFBaEIsQ0FBakI7O0FBRUEsU0FBUyxXQUFULEdBQXdCO01BQ2hCLE9BQU8sU0FBUyxJQUF0QjtNQUNNLGFBQWEsS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFuQjs7T0FFSyxZQUFMLENBQWtCLFNBQVMsQ0FBVCxDQUFsQixFQUErQixj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