import angular from 'angular';
import Floatl from 'floatl';

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

var moduleName = moduleName$1 + '.label';

/**
 * @ngdoc overview
 * @name ngVivaUi.label
 * @requires ngVivaUi
 * @description
 * #ngVivaUi.label
 * Viva Ui Kit's label implementation for AngularJS.
 */
var labelModule = function () {
  try {
    return angular.module(moduleName);
  } catch (e) {
    return angular.module(moduleName, [moduleName$1]);
  }
}();

var template = "<div class=\"floatl\">\n  <ng-transclude></ng-transclude>\n</div>\n";

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

var FloatLabelHandler = function () {
  function FloatLabelHandler($attrs, $input, $label, $ctrl) {
    classCallCheck(this, FloatLabelHandler);

    this.$attrs = $attrs;
    this.$input = $input;
    this.$label = $label;
    this.$ctrl = $ctrl;

    this.setLabelClass = this.setLabelClass.bind(this);
    this.setText = this.setText.bind(this);
  }

  createClass(FloatLabelHandler, [{
    key: 'setLabelClass',
    value: function setLabelClass(labelClass) {
      this.$ctrl.labelClass = labelClass;
    }
  }, {
    key: 'setText',
    value: function setText() {
      this.$label.text(this.$attrs.label || this.$input.attr('placeholder'));
    }
  }]);
  return FloatLabelHandler;
}();

/**
 * @ngdoc directive
 * @name ngVivaUi.label.directive:vivaUiFloatLabel
 * @restrict E
 * @scope
 * @description UI Kit's float label implementation.
 * @example
    <example module="ngVivaUi.label">
      <file name="app.html">
        <div class="live-example">
          <viva-ui-float-label>
            <input type="text" viva-ui-input placeholder="Float label">
          </viva-ui-float-label>
        </div>

        <div class="live-example">
          <viva-ui-float-label label="I'm a label">
            <input type="text" viva-ui-input placeholder="I'm a placeholder">
          </viva-ui-float-label>
        </div>
      </file>

      <file name="style.css">
        .live-example {
          display: inline-block;
          width: 33%;
          vertical-align: top;
        }

        .live-example input[type="text"]:focus {
          box-shadow: none;
        }
      </file>
    </example>
 */


labelModule.directive('vivaUiFloatLabel', ['$compile', function ($compile) {
  return {
    template: template,
    restrict: 'E',
    scope: {},
    transclude: true,
    controllerAs: '$uiFloatLabel',
    controller: function controller() {},
    link: {
      post: function post($scope, $element, $attrs, $ctrl) {
        var $floatLabelContainer = $element.children();
        var $ngTrascludeTag = $element.find('ng-transclude');

        var $input = $element.find('input');
        var $label = $compile('<label class="floatl__label" ng-class="[$uiFloatLabel.labelClass]">')($scope);

        var handler = new FloatLabelHandler($attrs, $input, $label, $ctrl);

        $input.addClass('floatl__input');
        $floatLabelContainer[0].insertBefore($label[0], $ngTrascludeTag[0]);

        $attrs.$observe('labelClass', handler.setLabelClass);
        $attrs.$observe('label', handler.setText);

        $scope.$watch(function () {
          return $input.attr('placeholder');
        }, handler.setText);

        Floatl.call(Object.create(Floatl.prototype), $floatLabelContainer[0]);
      }
    }
  };
}]);

export default labelModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL2xhYmVsL2RpcmVjdGl2ZXMvZmxvYXRMYWJlbC9mbG9hdExhYmVsLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbWVsaXplOiAoc3RyLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgc3RyUGllY2VzID0gc3RyLnNwbGl0KCctJylcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8ge30gOiBvcHRpb25zXG5cbiAgICBzdHJQaWVjZXNbMF0gPSBzdHJQaWVjZXNbMF0uY2hhckF0KDApW29wdGlvbnMuY2FwaXRhbGl6ZSA/ICd0b1VwcGVyQ2FzZScgOiAndG9Mb3dlckNhc2UnXSgpICsgc3RyUGllY2VzWzBdLnNsaWNlKDEpXG5cbiAgICByZXR1cm4gc3RyUGllY2VzWzBdICsgc3RyUGllY2VzLnNsaWNlKDEpLm1hcChcbiAgICAgICAgKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBpZWNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGllY2Uuc2xpY2UoMSlcbiAgICAgICAgfVxuICAgICAgKS5qb2luKCcnKVxuICB9XG59XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IGNhbWVsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSBjYW1lbGl6ZShuYW1lKVxuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgbmdWaXZhVWlcbiAqIEBkZXNjcmlwdGlvblxuICogI25nVml2YVVpXG4gKiBWaXZhIFVpIEtpdCdzIGltcGxlbWVudGF0aW9uIGZvciBBbmd1bGFySlMuXG4gKi9cbmNvbnN0IG1haW5Nb2R1bGUgPSAoKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICB9XG59KSgpXG5cbmV4cG9ydCB7IG1haW5Nb2R1bGUgYXMgZGVmYXVsdCwgbW9kdWxlTmFtZSB9XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbW9kdWxlTmFtZSBhcyBtYWluTW9kdWxlTmFtZSB9IGZyb20gJy4uL21haW4vbWFpbi5tb2R1bGUnXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSBgJHttYWluTW9kdWxlTmFtZX0ubGFiZWxgXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaS5sYWJlbFxuICogQHJlcXVpcmVzIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaS5sYWJlbFxuICogVml2YSBVaSBLaXQncyBsYWJlbCBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBsYWJlbE1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW21haW5Nb2R1bGVOYW1lXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBsYWJlbE1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBGbG9hdGwgZnJvbSAnZmxvYXRsJ1xuaW1wb3J0IGxhYmVsTW9kdWxlIGZyb20gJy4uLy4uL2xhYmVsLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Zsb2F0TGFiZWwuaHRtbCdcblxuY2xhc3MgRmxvYXRMYWJlbEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJGF0dHJzLCAkaW5wdXQsICRsYWJlbCwgJGN0cmwpIHtcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJGlucHV0ID0gJGlucHV0XG4gICAgdGhpcy4kbGFiZWwgPSAkbGFiZWxcbiAgICB0aGlzLiRjdHJsID0gJGN0cmxcblxuICAgIHRoaXMuc2V0TGFiZWxDbGFzcyA9IHRoaXMuc2V0TGFiZWxDbGFzcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRUZXh0ID0gdGhpcy5zZXRUZXh0LmJpbmQodGhpcylcbiAgfVxuXG4gIHNldExhYmVsQ2xhc3MgKGxhYmVsQ2xhc3MpIHtcbiAgICB0aGlzLiRjdHJsLmxhYmVsQ2xhc3MgPSBsYWJlbENsYXNzXG4gIH1cblxuICBzZXRUZXh0ICgpIHtcbiAgICB0aGlzLiRsYWJlbC50ZXh0KHRoaXMuJGF0dHJzLmxhYmVsIHx8IHRoaXMuJGlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJykpXG4gIH1cbn1cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5sYWJlbC5kaXJlY3RpdmU6dml2YVVpRmxvYXRMYWJlbFxuICogQHJlc3RyaWN0IEVcbiAqIEBzY29wZVxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsb2F0IGxhYmVsIGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaS5sYWJlbFwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8dml2YS11aS1mbG9hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZpdmEtdWktaW5wdXQgcGxhY2Vob2xkZXI9XCJGbG9hdCBsYWJlbFwiPlxuICAgICAgICAgIDwvdml2YS11aS1mbG9hdC1sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtZXhhbXBsZVwiPlxuICAgICAgICAgIDx2aXZhLXVpLWZsb2F0LWxhYmVsIGxhYmVsPVwiSSdtIGEgbGFiZWxcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZpdmEtdWktaW5wdXQgcGxhY2Vob2xkZXI9XCJJJ20gYSBwbGFjZWhvbGRlclwiPlxuICAgICAgICAgIDwvdml2YS11aS1mbG9hdC1sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpbGU+XG5cbiAgICAgIDxmaWxlIG5hbWU9XCJzdHlsZS5jc3NcIj5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbmxhYmVsTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpRmxvYXRMYWJlbCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZSxcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7fSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJyR1aUZsb2F0TGFiZWwnLFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgpIHt9LFxuICAgIGxpbms6IHtcbiAgICAgIHBvc3Q6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRjdHJsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmbG9hdExhYmVsQ29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKVxuICAgICAgICBjb25zdCAkbmdUcmFzY2x1ZGVUYWcgPSAkZWxlbWVudC5maW5kKCduZy10cmFuc2NsdWRlJylcblxuICAgICAgICBjb25zdCAkaW5wdXQgPSAkZWxlbWVudC5maW5kKCdpbnB1dCcpXG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICRjb21waWxlKCc8bGFiZWwgY2xhc3M9XCJmbG9hdGxfX2xhYmVsXCIgbmctY2xhc3M9XCJbJHVpRmxvYXRMYWJlbC5sYWJlbENsYXNzXVwiPicpKCRzY29wZSlcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gbmV3IEZsb2F0TGFiZWxIYW5kbGVyKCRhdHRycywgJGlucHV0LCAkbGFiZWwsICRjdHJsKVxuXG4gICAgICAgICRpbnB1dC5hZGRDbGFzcygnZmxvYXRsX19pbnB1dCcpXG4gICAgICAgICRmbG9hdExhYmVsQ29udGFpbmVyWzBdLmluc2VydEJlZm9yZSgkbGFiZWxbMF0sICRuZ1RyYXNjbHVkZVRhZ1swXSlcblxuICAgICAgICAkYXR0cnMuJG9ic2VydmUoJ2xhYmVsQ2xhc3MnLCBoYW5kbGVyLnNldExhYmVsQ2xhc3MpXG4gICAgICAgICRhdHRycy4kb2JzZXJ2ZSgnbGFiZWwnLCBoYW5kbGVyLnNldFRleHQpXG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaChcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJGlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhbmRsZXIuc2V0VGV4dFxuICAgICAgICApXG5cbiAgICAgICAgRmxvYXRsLmNhbGwoT2JqZWN0LmNyZWF0ZShGbG9hdGwucHJvdG90eXBlKSwgJGZsb2F0TGFiZWxDb250YWluZXJbMF0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XSlcbiJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibWFpbk1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO1lBQ0wsa0JBQUMsR0FBRCxFQUFNLE9BQU4sRUFBa0I7UUFDcEIsWUFBWSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWxCO2NBQ1UsT0FBTyxPQUFQLEtBQW1CLFdBQW5CLEdBQWlDLEVBQWpDLEdBQXNDLE9BQWhEOztjQUVVLENBQVYsSUFBZSxVQUFVLENBQVYsRUFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLFFBQVEsVUFBUixHQUFxQixhQUFyQixHQUFxQyxhQUE1RCxNQUErRSxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLENBQW5CLENBQTlGOztXQUVPLFVBQVUsQ0FBVixJQUFlLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUNsQixVQUFDLEtBQUQsRUFBVzthQUNGLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF2QztLQUZnQixFQUlsQixJQUprQixDQUliLEVBSmEsQ0FBdEI7O0NBUEo7Ozs7OztBQ0VBLElBQU1BLGVBQWEsU0FBUyxJQUFULENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLGFBQWMsWUFBTTtNQUNwQjtXQUNLLFFBQVEsTUFBUixDQUFlQSxZQUFmLENBQVA7R0FERixDQUVFLE9BQU8sQ0FBUCxFQUFVO1dBQ0gsUUFBUSxNQUFSLENBQWVBLFlBQWYsRUFBMkIsRUFBM0IsQ0FBUDs7Q0FKZSxFQUFuQixDQVFBOztBQ2xCQSxJQUFNLGFBQWdCQyxZQUFoQixXQUFOOzs7Ozs7Ozs7O0FBVUEsSUFBTSxjQUFlLFlBQU07TUFDckI7V0FDSyxRQUFRLE1BQVIsQ0FBZSxVQUFmLENBQVA7R0FERixDQUVFLE9BQU8sQ0FBUCxFQUFVO1dBQ0gsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixDQUFDQSxZQUFELENBQTNCLENBQVA7O0NBSmdCLEVBQXBCLENBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQk07NkJBQ1MsTUFBYixFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxLQUFyQyxFQUE0Qzs7O1NBQ3JDLE1BQUwsR0FBYyxNQUFkO1NBQ0ssTUFBTCxHQUFjLE1BQWQ7U0FDSyxNQUFMLEdBQWMsTUFBZDtTQUNLLEtBQUwsR0FBYSxLQUFiOztTQUVLLGFBQUwsR0FBcUIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQXJCO1NBQ0ssT0FBTCxHQUFlLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjs7Ozs7a0NBR2EsWUFBWTtXQUNwQixLQUFMLENBQVcsVUFBWCxHQUF3QixVQUF4Qjs7Ozs4QkFHUztXQUNKLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEtBQUssTUFBTCxDQUFZLEtBQVosSUFBcUIsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixhQUFqQixDQUF0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDSixZQUFZLFNBQVosQ0FBc0Isa0JBQXRCLEVBQTBDLENBQUMsVUFBRCxFQUFhLFVBQUMsUUFBRCxFQUFjO1NBQzVEO3NCQUFBO2NBRUssR0FGTDtXQUdFLEVBSEY7Z0JBSU8sSUFKUDtrQkFLUyxlQUxUO2dCQU1PLHNCQUFZLEVBTm5CO1VBT0M7WUFDRSxjQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLEtBQTNCLEVBQXFDO1lBQ25DLHVCQUF1QixTQUFTLFFBQVQsRUFBN0I7WUFDTSxrQkFBa0IsU0FBUyxJQUFULENBQWMsZUFBZCxDQUF4Qjs7WUFFTSxTQUFTLFNBQVMsSUFBVCxDQUFjLE9BQWQsQ0FBZjtZQUNNLFNBQVMsU0FBUyxxRUFBVCxFQUFnRixNQUFoRixDQUFmOztZQUVNLFVBQVUsSUFBSSxpQkFBSixDQUFzQixNQUF0QixFQUE4QixNQUE5QixFQUFzQyxNQUF0QyxFQUE4QyxLQUE5QyxDQUFoQjs7ZUFFTyxRQUFQLENBQWdCLGVBQWhCOzZCQUNxQixDQUFyQixFQUF3QixZQUF4QixDQUFxQyxPQUFPLENBQVAsQ0FBckMsRUFBZ0QsZ0JBQWdCLENBQWhCLENBQWhEOztlQUVPLFFBQVAsQ0FBZ0IsWUFBaEIsRUFBOEIsUUFBUSxhQUF0QztlQUNPLFFBQVAsQ0FBZ0IsT0FBaEIsRUFBeUIsUUFBUSxPQUFqQzs7ZUFFTyxNQUFQLENBQ0UsWUFBTTtpQkFDRyxPQUFPLElBQVAsQ0FBWSxhQUFaLENBQVA7U0FGSixFQUlFLFFBQVEsT0FKVjs7ZUFPTyxJQUFQLENBQVksT0FBTyxNQUFQLENBQWMsT0FBTyxTQUFyQixDQUFaLEVBQTZDLHFCQUFxQixDQUFyQixDQUE3Qzs7O0dBOUJOO0NBRHdDLENBQTFDOzsifQ==