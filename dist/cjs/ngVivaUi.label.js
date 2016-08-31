'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var angular = _interopDefault(require('angular'));
var Floatl = _interopDefault(require('floatl'));

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

module.exports = labelModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL2xhYmVsL2RpcmVjdGl2ZXMvZmxvYXRMYWJlbC9mbG9hdExhYmVsLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbWVsaXplOiAoc3RyLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgc3RyUGllY2VzID0gc3RyLnNwbGl0KCctJylcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8ge30gOiBvcHRpb25zXG5cbiAgICBzdHJQaWVjZXNbMF0gPSBzdHJQaWVjZXNbMF0uY2hhckF0KDApW29wdGlvbnMuY2FwaXRhbGl6ZSA/ICd0b1VwcGVyQ2FzZScgOiAndG9Mb3dlckNhc2UnXSgpICsgc3RyUGllY2VzWzBdLnNsaWNlKDEpXG5cbiAgICByZXR1cm4gc3RyUGllY2VzWzBdICsgc3RyUGllY2VzLnNsaWNlKDEpLm1hcChcbiAgICAgICAgKHBpZWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHBpZWNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGllY2Uuc2xpY2UoMSlcbiAgICAgICAgfVxuICAgICAgKS5qb2luKCcnKVxuICB9XG59XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IGNhbWVsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSBjYW1lbGl6ZShuYW1lKVxuXG4vKipcbiAqIEBuZ2RvYyBvdmVydmlld1xuICogQG5hbWUgbmdWaXZhVWlcbiAqIEBkZXNjcmlwdGlvblxuICogI25nVml2YVVpXG4gKiBWaXZhIFVpIEtpdCdzIGltcGxlbWVudGF0aW9uIGZvciBBbmd1bGFySlMuXG4gKi9cbmNvbnN0IG1haW5Nb2R1bGUgPSAoKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICB9XG59KSgpXG5cbmV4cG9ydCB7IG1haW5Nb2R1bGUgYXMgZGVmYXVsdCwgbW9kdWxlTmFtZSB9XG4iLCJpbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xuaW1wb3J0IHsgbW9kdWxlTmFtZSBhcyBtYWluTW9kdWxlTmFtZSB9IGZyb20gJy4uL21haW4vbWFpbi5tb2R1bGUnXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSBgJHttYWluTW9kdWxlTmFtZX0ubGFiZWxgXG5cbi8qKlxuICogQG5nZG9jIG92ZXJ2aWV3XG4gKiBAbmFtZSBuZ1ZpdmFVaS5sYWJlbFxuICogQHJlcXVpcmVzIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaS5sYWJlbFxuICogVml2YSBVaSBLaXQncyBsYWJlbCBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBsYWJlbE1vZHVsZSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW21haW5Nb2R1bGVOYW1lXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBsYWJlbE1vZHVsZSBhcyBkZWZhdWx0LCBtb2R1bGVOYW1lIH1cbiIsImltcG9ydCBGbG9hdGwgZnJvbSAnZmxvYXRsJ1xuaW1wb3J0IGxhYmVsTW9kdWxlIGZyb20gJy4uLy4uL2xhYmVsLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Zsb2F0TGFiZWwuaHRtbCdcblxuY2xhc3MgRmxvYXRMYWJlbEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJGF0dHJzLCAkaW5wdXQsICRsYWJlbCwgJGN0cmwpIHtcbiAgICB0aGlzLiRhdHRycyA9ICRhdHRyc1xuICAgIHRoaXMuJGlucHV0ID0gJGlucHV0XG4gICAgdGhpcy4kbGFiZWwgPSAkbGFiZWxcbiAgICB0aGlzLiRjdHJsID0gJGN0cmxcblxuICAgIHRoaXMuc2V0TGFiZWxDbGFzcyA9IHRoaXMuc2V0TGFiZWxDbGFzcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRUZXh0ID0gdGhpcy5zZXRUZXh0LmJpbmQodGhpcylcbiAgfVxuXG4gIHNldExhYmVsQ2xhc3MgKGxhYmVsQ2xhc3MpIHtcbiAgICB0aGlzLiRjdHJsLmxhYmVsQ2xhc3MgPSBsYWJlbENsYXNzXG4gIH1cblxuICBzZXRUZXh0ICgpIHtcbiAgICB0aGlzLiRsYWJlbC50ZXh0KHRoaXMuJGF0dHJzLmxhYmVsIHx8IHRoaXMuJGlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJykpXG4gIH1cbn1cblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5sYWJlbC5kaXJlY3RpdmU6dml2YVVpRmxvYXRMYWJlbFxuICogQHJlc3RyaWN0IEVcbiAqIEBzY29wZVxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsb2F0IGxhYmVsIGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaS5sYWJlbFwiPlxuICAgICAgPGZpbGUgbmFtZT1cImluZGV4Lmh0bWxcIj5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpdmUtZXhhbXBsZSBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPHZpdmEtdWktZmxvYXQtbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiRmxvYXQgbGFiZWxcIj5cbiAgICAgICAgICA8L3ZpdmEtdWktZmxvYXQtbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8dml2YS11aS1mbG9hdC1sYWJlbCBsYWJlbD1cIkknbSBhIGxhYmVsXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiSSdtIGEgcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICA8L3ZpdmEtdWktZmxvYXQtbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubGFiZWxNb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbG9hdExhYmVsJywgWyckY29tcGlsZScsICgkY29tcGlsZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlLFxuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHt9LFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgY29udHJvbGxlcjogKCkgPT4ge30sXG4gICAgY29udHJvbGxlckFzOiAnJGZsb2F0TGFiZWwnLFxuICAgIGxpbms6IHtcbiAgICAgIHBvc3Q6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRjdHJsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmbG9hdExhYmVsQ29udGFpbmVyID0gJGVsZW1lbnQuY2hpbGRyZW4oKVxuICAgICAgICBjb25zdCAkbmdUcmFzY2x1ZGVUYWcgPSAkZWxlbWVudC5maW5kKCduZy10cmFuc2NsdWRlJylcblxuICAgICAgICBjb25zdCAkaW5wdXQgPSAkZWxlbWVudC5maW5kKCdpbnB1dCcpXG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICRjb21waWxlKCc8bGFiZWwgY2xhc3M9XCJmbG9hdGxfX2xhYmVsXCIgbmctY2xhc3M9XCJbJGZsb2F0TGFiZWwubGFiZWxDbGFzc11cIj4nKSgkc2NvcGUpXG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBGbG9hdExhYmVsSGFuZGxlcigkYXR0cnMsICRpbnB1dCwgJGxhYmVsLCAkY3RybClcblxuICAgICAgICAkaW5wdXQuYWRkQ2xhc3MoJ2Zsb2F0bF9faW5wdXQnKVxuICAgICAgICAkZmxvYXRMYWJlbENvbnRhaW5lclswXS5pbnNlcnRCZWZvcmUoJGxhYmVsWzBdLCAkbmdUcmFzY2x1ZGVUYWdbMF0pXG5cbiAgICAgICAgJGF0dHJzLiRvYnNlcnZlKCdsYWJlbENsYXNzJywgaGFuZGxlci5zZXRMYWJlbENsYXNzKVxuICAgICAgICAkYXR0cnMuJG9ic2VydmUoJ2xhYmVsJywgaGFuZGxlci5zZXRUZXh0KVxuXG4gICAgICAgICRzY29wZS4kd2F0Y2goXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICRpbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYW5kbGVyLnNldFRleHRcbiAgICAgICAgKVxuXG4gICAgICAgIEZsb2F0bC5jYWxsKE9iamVjdC5jcmVhdGUoRmxvYXRsLnByb3RvdHlwZSksICRmbG9hdExhYmVsQ29udGFpbmVyWzBdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufV0pXG4iXSwibmFtZXMiOlsibW9kdWxlTmFtZSIsIm1haW5Nb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7WUFDTCxrQkFBQyxHQUFELEVBQU0sT0FBTixFQUFrQjtRQUNwQixZQUFZLElBQUksS0FBSixDQUFVLEdBQVYsQ0FBbEI7Y0FDVSxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUMsRUFBakMsR0FBc0MsT0FBaEQ7O2NBRVUsQ0FBVixJQUFlLFVBQVUsQ0FBVixFQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsUUFBUSxVQUFSLEdBQXFCLGFBQXJCLEdBQXFDLGFBQTVELE1BQStFLFVBQVUsQ0FBVixFQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBOUY7O1dBRU8sVUFBVSxDQUFWLElBQWUsVUFBVSxLQUFWLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQ2xCLFVBQUMsS0FBRCxFQUFXO2FBQ0YsTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixXQUFoQixLQUFnQyxNQUFNLEtBQU4sQ0FBWSxDQUFaLENBQXZDO0tBRmdCLEVBSWxCLElBSmtCLENBSWIsRUFKYSxDQUF0Qjs7Q0FQSjs7Ozs7O0FDRUEsSUFBTUEsZUFBYSxTQUFTLElBQVQsQ0FBbkI7Ozs7Ozs7OztBQVNBLElBQU0sYUFBYyxZQUFNO01BQ3BCO1dBQ0ssUUFBUSxNQUFSLENBQWVBLFlBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZUEsWUFBZixFQUEyQixFQUEzQixDQUFQOztDQUplLEVBQW5CLENBUUE7O0FDbEJBLElBQU0sYUFBZ0JDLFlBQWhCLFdBQU47Ozs7Ozs7Ozs7QUFVQSxJQUFNLGNBQWUsWUFBTTtNQUNyQjtXQUNLLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBUDtHQURGLENBRUUsT0FBTyxDQUFQLEVBQVU7V0FDSCxRQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQUNBLFlBQUQsQ0FBM0IsQ0FBUDs7Q0FKZ0IsRUFBcEIsQ0FRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCTTs2QkFDUyxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLEtBQXJDLEVBQTRDOzs7U0FDckMsTUFBTCxHQUFjLE1BQWQ7U0FDSyxNQUFMLEdBQWMsTUFBZDtTQUNLLE1BQUwsR0FBYyxNQUFkO1NBQ0ssS0FBTCxHQUFhLEtBQWI7O1NBRUssYUFBTCxHQUFxQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7U0FDSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixJQUFsQixDQUFmOzs7OztrQ0FHYSxZQUFZO1dBQ3BCLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLFVBQXhCOzs7OzhCQUdTO1dBQ0osTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBSyxNQUFMLENBQVksS0FBWixJQUFxQixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLGFBQWpCLENBQXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNKLFlBQVksU0FBWixDQUFzQixrQkFBdEIsRUFBMEMsQ0FBQyxVQUFELEVBQWEsVUFBQyxRQUFELEVBQWM7U0FDNUQ7c0JBQUE7Y0FFSyxHQUZMO1dBR0UsRUFIRjtnQkFJTyxJQUpQO2dCQUtPLHNCQUFNLEVBTGI7a0JBTVMsYUFOVDtVQU9DO1lBQ0UsY0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQixLQUEzQixFQUFxQztZQUNuQyx1QkFBdUIsU0FBUyxRQUFULEVBQTdCO1lBQ00sa0JBQWtCLFNBQVMsSUFBVCxDQUFjLGVBQWQsQ0FBeEI7O1lBRU0sU0FBUyxTQUFTLElBQVQsQ0FBYyxPQUFkLENBQWY7WUFDTSxTQUFTLFNBQVMsbUVBQVQsRUFBOEUsTUFBOUUsQ0FBZjs7WUFFTSxVQUFVLElBQUksaUJBQUosQ0FBc0IsTUFBdEIsRUFBOEIsTUFBOUIsRUFBc0MsTUFBdEMsRUFBOEMsS0FBOUMsQ0FBaEI7O2VBRU8sUUFBUCxDQUFnQixlQUFoQjs2QkFDcUIsQ0FBckIsRUFBd0IsWUFBeEIsQ0FBcUMsT0FBTyxDQUFQLENBQXJDLEVBQWdELGdCQUFnQixDQUFoQixDQUFoRDs7ZUFFTyxRQUFQLENBQWdCLFlBQWhCLEVBQThCLFFBQVEsYUFBdEM7ZUFDTyxRQUFQLENBQWdCLE9BQWhCLEVBQXlCLFFBQVEsT0FBakM7O2VBRU8sTUFBUCxDQUNFLFlBQU07aUJBQ0csT0FBTyxJQUFQLENBQVksYUFBWixDQUFQO1NBRkosRUFJRSxRQUFRLE9BSlY7O2VBT08sSUFBUCxDQUFZLE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsQ0FBWixFQUE2QyxxQkFBcUIsQ0FBckIsQ0FBN0M7OztHQTlCTjtDQUR3QyxDQUExQzs7In0=