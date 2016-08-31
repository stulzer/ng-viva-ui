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
      <file name="index.html">
        <style>
          .live-example {
            display: inline-block;
            width: 33%;
            vertical-align: top;
          }

          .live-example input[type="text"]:focus {
            box-shadow: none;
          }
        </style>

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
    </example>
 */


labelModule.directive('vivaUiFloatLabel', ['$compile', function ($compile) {
  return {
    template: template,
    restrict: 'E',
    scope: {},
    transclude: true,
    controller: function controller() {},
    controllerAs: '$floatLabel',
    link: {
      post: function post($scope, $element, $attrs, $ctrl) {
        var $floatLabelContainer = $element.children();
        var $ngTrascludeTag = $element.find('ng-transclude');

        var $input = $element.find('input');
        var $label = $compile('<label class="floatl__label" ng-class="[$floatLabel.labelClass]">')($scope);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL2xhYmVsL2RpcmVjdGl2ZXMvZmxvYXRMYWJlbC9mbG9hdExhYmVsLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhpZmVuMkNhbWVsQ2FzZTogKHN0ciwgY2FwaXRhbGl6ZSkgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtjYXBpdGFsaXplID8gJ3RvVXBwZXJDYXNlJyA6ICd0b0xvd2VyQ2FzZSddKCkgKyBzdHJQaWVjZXNbMF0uc2xpY2UoMSlcblxuICAgIHJldHVybiBzdHJQaWVjZXNbMF0gKyBzdHJQaWVjZXMuc2xpY2UoMSkubWFwKFxuICAgICAgICAocGllY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gcGllY2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwaWVjZS5zbGljZSgxKVxuICAgICAgICB9XG4gICAgICApLmpvaW4oJycpXG4gIH1cbn1cbiIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IHsgaGlmZW4yQ2FtZWxDYXNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSBoaWZlbjJDYW1lbENhc2UobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG1vZHVsZU5hbWUgYXMgbWFpbk1vZHVsZU5hbWUgfSBmcm9tICcuLi9tYWluL21haW4ubW9kdWxlJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gYCR7bWFpbk1vZHVsZU5hbWV9LmxhYmVsYFxuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgbmdWaXZhVWkubGFiZWxcbiAqIEByZXF1aXJlcyBuZ1ZpdmFVaVxuICogQGRlc2NyaXB0aW9uXG4gKiAjbmdWaXZhVWkubGFiZWxcbiAqIFZpdmEgVWkgS2l0J3MgbGFiZWwgaW1wbGVtZW50YXRpb24gZm9yIEFuZ3VsYXJKUy5cbiAqL1xuY29uc3QgbGFiZWxNb2R1bGUgPSAoKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFttYWluTW9kdWxlTmFtZV0pXG4gIH1cbn0pKClcblxuZXhwb3J0IHsgbGFiZWxNb2R1bGUgYXMgZGVmYXVsdCwgbW9kdWxlTmFtZSB9XG4iLCJpbXBvcnQgRmxvYXRsIGZyb20gJ2Zsb2F0bCdcbmltcG9ydCBsYWJlbE1vZHVsZSBmcm9tICcuLi8uLi9sYWJlbC5tb2R1bGUnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9mbG9hdExhYmVsLmh0bWwnXG5cbmNsYXNzIEZsb2F0TGFiZWxIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKCRhdHRycywgJGlucHV0LCAkbGFiZWwsICRjdHJsKSB7XG4gICAgdGhpcy4kYXR0cnMgPSAkYXR0cnNcbiAgICB0aGlzLiRpbnB1dCA9ICRpbnB1dFxuICAgIHRoaXMuJGxhYmVsID0gJGxhYmVsXG4gICAgdGhpcy4kY3RybCA9ICRjdHJsXG5cbiAgICB0aGlzLnNldExhYmVsQ2xhc3MgPSB0aGlzLnNldExhYmVsQ2xhc3MuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0VGV4dCA9IHRoaXMuc2V0VGV4dC5iaW5kKHRoaXMpXG4gIH1cblxuICBzZXRMYWJlbENsYXNzIChsYWJlbENsYXNzKSB7XG4gICAgdGhpcy4kY3RybC5sYWJlbENsYXNzID0gbGFiZWxDbGFzc1xuICB9XG5cbiAgc2V0VGV4dCAoKSB7XG4gICAgdGhpcy4kbGFiZWwudGV4dCh0aGlzLiRhdHRycy5sYWJlbCB8fCB0aGlzLiRpbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkubGFiZWwuZGlyZWN0aXZlOnZpdmFVaUZsb2F0TGFiZWxcbiAqIEByZXN0cmljdCBFXG4gKiBAc2NvcGVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBmbG9hdCBsYWJlbCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWkubGFiZWxcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXZlLWV4YW1wbGUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtZXhhbXBsZVwiPlxuICAgICAgICAgIDx2aXZhLXVpLWZsb2F0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dCBwbGFjZWhvbGRlcj1cIkZsb2F0IGxhYmVsXCI+XG4gICAgICAgICAgPC92aXZhLXVpLWZsb2F0LWxhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPHZpdmEtdWktZmxvYXQtbGFiZWwgbGFiZWw9XCJJJ20gYSBsYWJlbFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dCBwbGFjZWhvbGRlcj1cIkknbSBhIHBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgPC92aXZhLXVpLWZsb2F0LWxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbmxhYmVsTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpRmxvYXRMYWJlbCcsIFsnJGNvbXBpbGUnLCAoJGNvbXBpbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZW1wbGF0ZSxcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7fSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIGNvbnRyb2xsZXI6ICgpID0+IHt9LFxuICAgIGNvbnRyb2xsZXJBczogJyRmbG9hdExhYmVsJyxcbiAgICBsaW5rOiB7XG4gICAgICBwb3N0OiAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkY3RybCkgPT4ge1xuICAgICAgICBjb25zdCAkZmxvYXRMYWJlbENvbnRhaW5lciA9ICRlbGVtZW50LmNoaWxkcmVuKClcbiAgICAgICAgY29uc3QgJG5nVHJhc2NsdWRlVGFnID0gJGVsZW1lbnQuZmluZCgnbmctdHJhbnNjbHVkZScpXG5cbiAgICAgICAgY29uc3QgJGlucHV0ID0gJGVsZW1lbnQuZmluZCgnaW5wdXQnKVxuICAgICAgICBjb25zdCAkbGFiZWwgPSAkY29tcGlsZSgnPGxhYmVsIGNsYXNzPVwiZmxvYXRsX19sYWJlbFwiIG5nLWNsYXNzPVwiWyRmbG9hdExhYmVsLmxhYmVsQ2xhc3NdXCI+JykoJHNjb3BlKVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgRmxvYXRMYWJlbEhhbmRsZXIoJGF0dHJzLCAkaW5wdXQsICRsYWJlbCwgJGN0cmwpXG5cbiAgICAgICAgJGlucHV0LmFkZENsYXNzKCdmbG9hdGxfX2lucHV0JylcbiAgICAgICAgJGZsb2F0TGFiZWxDb250YWluZXJbMF0uaW5zZXJ0QmVmb3JlKCRsYWJlbFswXSwgJG5nVHJhc2NsdWRlVGFnWzBdKVxuXG4gICAgICAgICRhdHRycy4kb2JzZXJ2ZSgnbGFiZWxDbGFzcycsIGhhbmRsZXIuc2V0TGFiZWxDbGFzcylcbiAgICAgICAgJGF0dHJzLiRvYnNlcnZlKCdsYWJlbCcsIGhhbmRsZXIuc2V0VGV4dClcblxuICAgICAgICAkc2NvcGUuJHdhdGNoKFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAkaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFuZGxlci5zZXRUZXh0XG4gICAgICAgIClcblxuICAgICAgICBGbG9hdGwuY2FsbChPYmplY3QuY3JlYXRlKEZsb2F0bC5wcm90b3R5cGUpLCAkZmxvYXRMYWJlbENvbnRhaW5lclswXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dKVxuIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtYWluTW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7bUJBQ0UseUJBQUMsR0FBRCxFQUFNLFVBQU4sRUFBcUI7UUFDOUIsWUFBWSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWxCO2NBQ1UsQ0FBVixJQUFlLFVBQVUsQ0FBVixFQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsYUFBYSxhQUFiLEdBQTZCLGFBQXBELE1BQXVFLFVBQVUsQ0FBVixFQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdEY7O1dBRU8sVUFBVSxDQUFWLElBQWUsVUFBVSxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQ2xCLFVBQUMsS0FBRCxFQUFXO2FBQ0YsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQXZDO0tBRmdCLEVBSWxCLElBSmtCLENBSWIsRUFKYSxDQUF0Qjs7Q0FMSjs7Ozs7O0FDRUEsSUFBTUEsZUFBYSxnQkFBZ0IsSUFBaEIsQ0FBbkI7Ozs7Ozs7OztBQVNBLElBQU0sYUFBYyxZQUFNO01BQ3BCO1dBQ0ssUUFBUSxNQUFSLENBQWVBLFlBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZUEsWUFBZixFQUEyQixFQUEzQixDQUFQOztDQUplLEVBQW5CLENBUUE7O0FDbEJBLElBQU0sYUFBZ0JDLFlBQWhCLFdBQU47Ozs7Ozs7Ozs7QUFVQSxJQUFNLGNBQWUsWUFBTTtNQUNyQjtXQUNLLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUNBLFlBQUQsQ0FBM0IsQ0FBUDs7Q0FKZ0IsRUFBcEIsQ0FRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCTTs2QkFDUyxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLEtBQXJDLEVBQTRDOzs7U0FDckMsTUFBTCxHQUFjLE1BQWQ7U0FDSyxNQUFMLEdBQWMsTUFBZDtTQUNLLE1BQUwsR0FBYyxNQUFkO1NBQ0ssS0FBTCxHQUFhLEtBQWI7O1NBRUssYUFBTCxHQUFxQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7U0FDSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixJQUFsQixDQUFmOzs7OztrQ0FHYSxZQUFZO1dBQ3BCLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLFVBQXhCOzs7OzhCQUdTO1dBQ0osTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxNQUFMLENBQVksS0FBWixJQUFxQixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLGFBQWpCLENBQXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNKLFlBQVksU0FBWixDQUFzQixrQkFBdEIsRUFBMEMsQ0FBQyxVQUFELEVBQWEsVUFBQyxRQUFELEVBQWM7U0FDNUQ7c0JBQUE7Y0FFSyxHQUZMO1dBR0UsRUFIRjtnQkFJTyxJQUpQO2dCQUtPLHNCQUFNLEVBTGI7a0JBTVMsYUFOVDtVQU9DO1lBQ0UsY0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQixLQUEzQixFQUFxQztZQUNuQyx1QkFBdUIsU0FBUyxRQUFULEVBQTdCO1lBQ00sa0JBQWtCLFNBQVMsSUFBVCxDQUFjLGVBQWQsQ0FBeEI7O1lBRU0sU0FBUyxTQUFTLElBQVQsQ0FBYyxPQUFkLENBQWY7WUFDTSxTQUFTLFNBQVMsbUVBQVQsRUFBOEUsTUFBOUUsQ0FBZjs7WUFFTSxVQUFVLElBQUksaUJBQUosQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsS0FBOUMsQ0FBaEI7O2VBRU8sUUFBUCxDQUFnQixlQUFoQjs2QkFDcUIsQ0FBckIsRUFBd0IsWUFBeEIsQ0FBcUMsT0FBTyxDQUFQLENBQXJDLEVBQWdELGdCQUFnQixDQUFoQixDQUFoRDs7ZUFFTyxRQUFQLENBQWdCLFlBQWhCLEVBQThCLFFBQVEsYUFBdEM7ZUFDTyxRQUFQLENBQWdCLE9BQWhCLEVBQXlCLFFBQVEsT0FBakM7O2VBRU8sTUFBUCxDQUNFLFlBQU07aUJBQ0csT0FBTyxJQUFQLENBQVksYUFBWixDQUFQO1NBRkosRUFJRSxRQUFRLE9BSlY7O2VBT08sSUFBUCxDQUFZLE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsQ0FBWixFQUE2QyxxQkFBcUIsQ0FBckIsQ0FBN0M7OztHQTlCTjtDQUR3QyxDQUExQzs7In0=