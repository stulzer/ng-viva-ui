define(['angular'], function (angular$1) { 'use strict';

angular$1 = 'default' in angular$1 ? angular$1['default'] : angular$1;

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

var clone = createCommonjsModule(function (module) {
var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}
});

var clone$1 = interopDefault(clone);


var require$$2 = Object.freeze({
  default: clone$1
});

var cssKeywords = createCommonjsModule(function (module) {
module.exports = {
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50]
};
});

var cssKeywords$1 = interopDefault(cssKeywords);
var aliceblue = cssKeywords.aliceblue;
var antiquewhite = cssKeywords.antiquewhite;
var aqua = cssKeywords.aqua;
var aquamarine = cssKeywords.aquamarine;
var azure = cssKeywords.azure;
var beige = cssKeywords.beige;
var bisque = cssKeywords.bisque;
var black = cssKeywords.black;
var blanchedalmond = cssKeywords.blanchedalmond;
var blue = cssKeywords.blue;
var blueviolet = cssKeywords.blueviolet;
var brown = cssKeywords.brown;
var burlywood = cssKeywords.burlywood;
var cadetblue = cssKeywords.cadetblue;
var chartreuse = cssKeywords.chartreuse;
var chocolate = cssKeywords.chocolate;
var coral = cssKeywords.coral;
var cornflowerblue = cssKeywords.cornflowerblue;
var cornsilk = cssKeywords.cornsilk;
var crimson = cssKeywords.crimson;
var cyan = cssKeywords.cyan;
var darkblue = cssKeywords.darkblue;
var darkcyan = cssKeywords.darkcyan;
var darkgoldenrod = cssKeywords.darkgoldenrod;
var darkgray = cssKeywords.darkgray;
var darkgreen = cssKeywords.darkgreen;
var darkgrey = cssKeywords.darkgrey;
var darkkhaki = cssKeywords.darkkhaki;
var darkmagenta = cssKeywords.darkmagenta;
var darkolivegreen = cssKeywords.darkolivegreen;
var darkorange = cssKeywords.darkorange;
var darkorchid = cssKeywords.darkorchid;
var darkred = cssKeywords.darkred;
var darksalmon = cssKeywords.darksalmon;
var darkseagreen = cssKeywords.darkseagreen;
var darkslateblue = cssKeywords.darkslateblue;
var darkslategray = cssKeywords.darkslategray;
var darkslategrey = cssKeywords.darkslategrey;
var darkturquoise = cssKeywords.darkturquoise;
var darkviolet = cssKeywords.darkviolet;
var deeppink = cssKeywords.deeppink;
var deepskyblue = cssKeywords.deepskyblue;
var dimgray = cssKeywords.dimgray;
var dimgrey = cssKeywords.dimgrey;
var dodgerblue = cssKeywords.dodgerblue;
var firebrick = cssKeywords.firebrick;
var floralwhite = cssKeywords.floralwhite;
var forestgreen = cssKeywords.forestgreen;
var fuchsia = cssKeywords.fuchsia;
var gainsboro = cssKeywords.gainsboro;
var ghostwhite = cssKeywords.ghostwhite;
var gold = cssKeywords.gold;
var goldenrod = cssKeywords.goldenrod;
var gray = cssKeywords.gray;
var green = cssKeywords.green;
var greenyellow = cssKeywords.greenyellow;
var grey = cssKeywords.grey;
var honeydew = cssKeywords.honeydew;
var hotpink = cssKeywords.hotpink;
var indianred = cssKeywords.indianred;
var indigo = cssKeywords.indigo;
var ivory = cssKeywords.ivory;
var khaki = cssKeywords.khaki;
var lavender = cssKeywords.lavender;
var lavenderblush = cssKeywords.lavenderblush;
var lawngreen = cssKeywords.lawngreen;
var lemonchiffon = cssKeywords.lemonchiffon;
var lightblue = cssKeywords.lightblue;
var lightcoral = cssKeywords.lightcoral;
var lightcyan = cssKeywords.lightcyan;
var lightgoldenrodyellow = cssKeywords.lightgoldenrodyellow;
var lightgray = cssKeywords.lightgray;
var lightgreen = cssKeywords.lightgreen;
var lightgrey = cssKeywords.lightgrey;
var lightpink = cssKeywords.lightpink;
var lightsalmon = cssKeywords.lightsalmon;
var lightseagreen = cssKeywords.lightseagreen;
var lightskyblue = cssKeywords.lightskyblue;
var lightslategray = cssKeywords.lightslategray;
var lightslategrey = cssKeywords.lightslategrey;
var lightsteelblue = cssKeywords.lightsteelblue;
var lightyellow = cssKeywords.lightyellow;
var lime = cssKeywords.lime;
var limegreen = cssKeywords.limegreen;
var linen = cssKeywords.linen;
var magenta = cssKeywords.magenta;
var maroon = cssKeywords.maroon;
var mediumaquamarine = cssKeywords.mediumaquamarine;
var mediumblue = cssKeywords.mediumblue;
var mediumorchid = cssKeywords.mediumorchid;
var mediumpurple = cssKeywords.mediumpurple;
var mediumseagreen = cssKeywords.mediumseagreen;
var mediumslateblue = cssKeywords.mediumslateblue;
var mediumspringgreen = cssKeywords.mediumspringgreen;
var mediumturquoise = cssKeywords.mediumturquoise;
var mediumvioletred = cssKeywords.mediumvioletred;
var midnightblue = cssKeywords.midnightblue;
var mintcream = cssKeywords.mintcream;
var mistyrose = cssKeywords.mistyrose;
var moccasin = cssKeywords.moccasin;
var navajowhite = cssKeywords.navajowhite;
var navy = cssKeywords.navy;
var oldlace = cssKeywords.oldlace;
var olive = cssKeywords.olive;
var olivedrab = cssKeywords.olivedrab;
var orange = cssKeywords.orange;
var orangered = cssKeywords.orangered;
var orchid = cssKeywords.orchid;
var palegoldenrod = cssKeywords.palegoldenrod;
var palegreen = cssKeywords.palegreen;
var paleturquoise = cssKeywords.paleturquoise;
var palevioletred = cssKeywords.palevioletred;
var papayawhip = cssKeywords.papayawhip;
var peachpuff = cssKeywords.peachpuff;
var peru = cssKeywords.peru;
var pink = cssKeywords.pink;
var plum = cssKeywords.plum;
var powderblue = cssKeywords.powderblue;
var purple = cssKeywords.purple;
var rebeccapurple = cssKeywords.rebeccapurple;
var red = cssKeywords.red;
var rosybrown = cssKeywords.rosybrown;
var royalblue = cssKeywords.royalblue;
var saddlebrown = cssKeywords.saddlebrown;
var salmon = cssKeywords.salmon;
var sandybrown = cssKeywords.sandybrown;
var seagreen = cssKeywords.seagreen;
var seashell = cssKeywords.seashell;
var sienna = cssKeywords.sienna;
var silver = cssKeywords.silver;
var skyblue = cssKeywords.skyblue;
var slateblue = cssKeywords.slateblue;
var slategray = cssKeywords.slategray;
var slategrey = cssKeywords.slategrey;
var snow = cssKeywords.snow;
var springgreen = cssKeywords.springgreen;
var steelblue = cssKeywords.steelblue;
var tan = cssKeywords.tan;
var teal = cssKeywords.teal;
var thistle = cssKeywords.thistle;
var tomato = cssKeywords.tomato;
var turquoise = cssKeywords.turquoise;
var violet = cssKeywords.violet;
var wheat = cssKeywords.wheat;
var white = cssKeywords.white;
var whitesmoke = cssKeywords.whitesmoke;
var yellow = cssKeywords.yellow;
var yellowgreen = cssKeywords.yellowgreen;

var require$$0$1 = Object.freeze({
	default: cssKeywords$1,
	aliceblue: aliceblue,
	antiquewhite: antiquewhite,
	aqua: aqua,
	aquamarine: aquamarine,
	azure: azure,
	beige: beige,
	bisque: bisque,
	black: black,
	blanchedalmond: blanchedalmond,
	blue: blue,
	blueviolet: blueviolet,
	brown: brown,
	burlywood: burlywood,
	cadetblue: cadetblue,
	chartreuse: chartreuse,
	chocolate: chocolate,
	coral: coral,
	cornflowerblue: cornflowerblue,
	cornsilk: cornsilk,
	crimson: crimson,
	cyan: cyan,
	darkblue: darkblue,
	darkcyan: darkcyan,
	darkgoldenrod: darkgoldenrod,
	darkgray: darkgray,
	darkgreen: darkgreen,
	darkgrey: darkgrey,
	darkkhaki: darkkhaki,
	darkmagenta: darkmagenta,
	darkolivegreen: darkolivegreen,
	darkorange: darkorange,
	darkorchid: darkorchid,
	darkred: darkred,
	darksalmon: darksalmon,
	darkseagreen: darkseagreen,
	darkslateblue: darkslateblue,
	darkslategray: darkslategray,
	darkslategrey: darkslategrey,
	darkturquoise: darkturquoise,
	darkviolet: darkviolet,
	deeppink: deeppink,
	deepskyblue: deepskyblue,
	dimgray: dimgray,
	dimgrey: dimgrey,
	dodgerblue: dodgerblue,
	firebrick: firebrick,
	floralwhite: floralwhite,
	forestgreen: forestgreen,
	fuchsia: fuchsia,
	gainsboro: gainsboro,
	ghostwhite: ghostwhite,
	gold: gold,
	goldenrod: goldenrod,
	gray: gray,
	green: green,
	greenyellow: greenyellow,
	grey: grey,
	honeydew: honeydew,
	hotpink: hotpink,
	indianred: indianred,
	indigo: indigo,
	ivory: ivory,
	khaki: khaki,
	lavender: lavender,
	lavenderblush: lavenderblush,
	lawngreen: lawngreen,
	lemonchiffon: lemonchiffon,
	lightblue: lightblue,
	lightcoral: lightcoral,
	lightcyan: lightcyan,
	lightgoldenrodyellow: lightgoldenrodyellow,
	lightgray: lightgray,
	lightgreen: lightgreen,
	lightgrey: lightgrey,
	lightpink: lightpink,
	lightsalmon: lightsalmon,
	lightseagreen: lightseagreen,
	lightskyblue: lightskyblue,
	lightslategray: lightslategray,
	lightslategrey: lightslategrey,
	lightsteelblue: lightsteelblue,
	lightyellow: lightyellow,
	lime: lime,
	limegreen: limegreen,
	linen: linen,
	magenta: magenta,
	maroon: maroon,
	mediumaquamarine: mediumaquamarine,
	mediumblue: mediumblue,
	mediumorchid: mediumorchid,
	mediumpurple: mediumpurple,
	mediumseagreen: mediumseagreen,
	mediumslateblue: mediumslateblue,
	mediumspringgreen: mediumspringgreen,
	mediumturquoise: mediumturquoise,
	mediumvioletred: mediumvioletred,
	midnightblue: midnightblue,
	mintcream: mintcream,
	mistyrose: mistyrose,
	moccasin: moccasin,
	navajowhite: navajowhite,
	navy: navy,
	oldlace: oldlace,
	olive: olive,
	olivedrab: olivedrab,
	orange: orange,
	orangered: orangered,
	orchid: orchid,
	palegoldenrod: palegoldenrod,
	palegreen: palegreen,
	paleturquoise: paleturquoise,
	palevioletred: palevioletred,
	papayawhip: papayawhip,
	peachpuff: peachpuff,
	peru: peru,
	pink: pink,
	plum: plum,
	powderblue: powderblue,
	purple: purple,
	rebeccapurple: rebeccapurple,
	red: red,
	rosybrown: rosybrown,
	royalblue: royalblue,
	saddlebrown: saddlebrown,
	salmon: salmon,
	sandybrown: sandybrown,
	seagreen: seagreen,
	seashell: seashell,
	sienna: sienna,
	silver: silver,
	skyblue: skyblue,
	slateblue: slateblue,
	slategray: slategray,
	slategrey: slategrey,
	snow: snow,
	springgreen: springgreen,
	steelblue: steelblue,
	tan: tan,
	teal: teal,
	thistle: thistle,
	tomato: tomato,
	turquoise: turquoise,
	violet: violet,
	wheat: wheat,
	white: white,
	whitesmoke: whitesmoke,
	yellow: yellow,
	yellowgreen: yellowgreen
});

var conversions = createCommonjsModule(function (module) {
/* MIT license */
var cssKeywords = interopDefault(require$$0$1);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key].join()] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3},
	hsl: {channels: 3},
	hsv: {channels: 3},
	hwb: {channels: 3},
	cmyk: {channels: 4},
	xyz: {channels: 3},
	lab: {channels: 3},
	lch: {channels: 3},
	hex: {channels: 1},
	keyword: {channels: 1},
	ansi16: {channels: 1},
	ansi256: {channels: 1},
	hcg: {channels: 3},
	apple: {channels: 3}
};

// hide .channels property
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		var channels = convert[model].channels;
		delete convert[model].channels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

convert.rgb.keyword = function (rgb) {
	return reverseKeywords[rgb.join()];
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var integer = parseInt(match[0], 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
});

var conversions$1 = interopDefault(conversions);
var rgb = conversions.rgb;
var hsl = conversions.hsl;
var hsv = conversions.hsv;
var hwb = conversions.hwb;
var cmyk = conversions.cmyk;
var xyz = conversions.xyz;
var lab = conversions.lab;
var lch = conversions.lch;
var hex = conversions.hex;
var keyword = conversions.keyword;
var ansi16 = conversions.ansi16;
var ansi256 = conversions.ansi256;
var hcg = conversions.hcg;
var apple = conversions.apple;

var require$$0 = Object.freeze({
	default: conversions$1,
	rgb: rgb,
	hsl: hsl,
	hsv: hsv,
	hwb: hwb,
	cmyk: cmyk,
	xyz: xyz,
	lab: lab,
	lch: lch,
	hex: hex,
	keyword: keyword,
	ansi16: ansi16,
	ansi256: ansi256,
	hcg: hcg,
	apple: apple
});

var route = createCommonjsModule(function (module) {
var conversions = interopDefault(require$$0);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};
});

var route$1 = interopDefault(route);


var require$$0$2 = Object.freeze({
	default: route$1
});

var index$1 = createCommonjsModule(function (module) {
var conversions = interopDefault(require$$0);
var route = interopDefault(require$$0$2);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;
});

var index$2 = interopDefault(index$1);


var require$$1 = Object.freeze({
	default: index$2
});

var index$3 = createCommonjsModule(function (module) {
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
});

var index$4 = interopDefault(index$3);


var require$$0$4 = Object.freeze({
	default: index$4
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */
var colorNames = interopDefault(require$$0$4);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}
});

var colorString$1 = interopDefault(colorString);
var getRgba = colorString.getRgba;
var getHsla = colorString.getHsla;
var getRgb = colorString.getRgb;
var getHsl = colorString.getHsl;
var getHwb = colorString.getHwb;
var getAlpha = colorString.getAlpha;
var hexString = colorString.hexString;
var rgbString = colorString.rgbString;
var rgbaString = colorString.rgbaString;
var percentString = colorString.percentString;
var percentaString = colorString.percentaString;
var hslString = colorString.hslString;
var hslaString = colorString.hslaString;
var hwbString = colorString.hwbString;
var keyword$1 = colorString.keyword;

var require$$0$3 = Object.freeze({
  default: colorString$1,
  getRgba: getRgba,
  getHsla: getHsla,
  getRgb: getRgb,
  getHsl: getHsl,
  getHwb: getHwb,
  getAlpha: getAlpha,
  hexString: hexString,
  rgbString: rgbString,
  rgbaString: rgbaString,
  percentString: percentString,
  percentaString: percentaString,
  hslString: hslString,
  hslaString: hslaString,
  hwbString: hwbString,
  keyword: keyword$1
});

var index = createCommonjsModule(function (module) {
/* MIT license */
var clone = interopDefault(require$$2);
var convert = interopDefault(require$$1);
var string = interopDefault(require$$0$3);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	hslaArray: function () {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function (ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function (ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function (ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function (ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function (ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		var col = new Color();
		col.values = clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		// cap values
		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		// color.red()
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

module.exports = Color;
});

var color = interopDefault(index);

var style$3 = "viva-ui-completometro {\n  display: inline-block;\n  min-width: 64px; }\n  viva-ui-completometro .viva-ui-completometro__arch {\n    height: 34px;\n    overflow: auto;\n    position: relative; }\n  viva-ui-completometro .viva-ui-completometro__arch-border,\n  viva-ui-completometro .viva-ui-completometro__arch-body {\n    border-radius: 50%; }\n  viva-ui-completometro .viva-ui-completometro__arch-border,\n  viva-ui-completometro .viva-ui-completometro__arch-border-bg,\n  viva-ui-completometro .viva-ui-completometro__arch-progress {\n    position: absolute; }\n  viva-ui-completometro .viva-ui-completometro__arch-border {\n    overflow: auto;\n    width: 64px;\n    height: 64px; }\n  viva-ui-completometro .viva-ui-completometro__arch-border-bg {\n    background-color: #f1f1f1;\n    width: 100%;\n    height: 100%; }\n  viva-ui-completometro .viva-ui-completometro__arch-progress {\n    background-color: #39d91e;\n    width: 100%;\n    height: 50%;\n    top: 50%;\n    -o-transform-origin: center top;\n    -ms-transform-origin: center top;\n    -moz-transform-origin: center top;\n    -webkit-transform-origin: center top;\n    transform-origin: center top;\n    -o-transition: transform 1000ms ease-in-out;\n    -moz-transition: transform 1000ms ease-in-out;\n    -webkit-transition: transform 1000ms ease-in-out;\n    transition: transform 1000ms ease-in-out; }\n  viva-ui-completometro .viva-ui-completometro__bottom-layer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 2px;\n    background-color: white; }\n  viva-ui-completometro .viva-ui-completometro__arch-body {\n    background-color: white;\n    position: relative;\n    top: 3px;\n    left: 3px;\n    width: 58px;\n    height: 58px; }\n  viva-ui-completometro .viva-ui-completometro__pointer {\n    position: absolute;\n    bottom: 50%;\n    left: 50%;\n    -o-transition: transform 1000ms ease-in-out;\n    -moz-transition: transform 1000ms ease-in-out;\n    -webkit-transition: transform 1000ms ease-in-out;\n    transition: transform 1000ms ease-in-out;\n    -o-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    -moz-transform: rotate(-90deg);\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    -o-transform-origin: bottom left;\n    -ms-transform-origin: bottom left;\n    -moz-transform-origin: bottom left;\n    -webkit-transform-origin: bottom left;\n    transform-origin: bottom left; }\n    viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-top,\n    viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-bottom {\n      width: 4px;\n      margin-left: -50%; }\n    viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-top {\n      height: 22px; }\n      viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-top::before {\n        display: block;\n        position: relative;\n        content: \" \";\n        width: 0;\n        height: 0;\n        border-bottom: 10px solid rgba(0, 0, 0, 0.38);\n        border-right: 1px solid transparent;\n        border-left: 1px solid transparent;\n        top: 7px;\n        left: 1px;\n        -o-transform: scale(2);\n        -ms-transform: scale(2);\n        -moz-transform: scale(2);\n        -webkit-transform: scale(2);\n        transform: scale(2); }\n    viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-bottom {\n      overflow: hidden;\n      position: relative;\n      height: 2px; }\n      viva-ui-completometro .viva-ui-completometro__pointer .viva-ui-completometro__pointer-bottom::after {\n        display: block;\n        content: \" \";\n        width: 4px;\n        height: 4px;\n        background-color: rgba(0, 0, 0, 0.38);\n        border-radius: 50%;\n        -o-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n        -webkit-transform: translateY(-50%);\n        transform: translateY(-50%); }\n";

var template$1 = "<div class=\"viva-ui-completometro__arch\">\n  <div class=\"viva-ui-completometro__arch-border\">\n    <div class=\"viva-ui-completometro__arch-border-bg\"></div>\n    <div class=\"viva-ui-completometro__arch-progress\"></div>\n  </div>\n  <div class=\"viva-ui-completometro__bottom-layer\"></div>\n  <div class=\"viva-ui-completometro__arch-body\">\n    <div class=\"viva-ui-completometro__pointer\">\n      <div class=\"viva-ui-completometro__pointer-top\"></div>\n      <div class=\"viva-ui-completometro__pointer-bottom\"></div>\n    </div>\n  </div>\n</div>";

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
      var _this = this;

      var stages = CompletometroHandler.stages;

      var _loop = function _loop(i) {
        var deg = progress * 1.8;
        var stage = stages[i];
        var next = stages[i + 1];
        var bgColor = void 0;

        if (next && progress > stage.maxPercent) {
          return 'continue';
        }

        bgColor = next ? color(next.color).mix(color(stage.color), progress / 100).hexString() : stage.color;

        setTimeout(function () {
          _this.$progressCircle.css({
            'background-color': bgColor,
            'transform': 'rotate(' + deg + 'deg)'
          });

          _this.$pointer.css('transform', 'rotate(' + (deg - 90) + 'deg)');
        });

        return 'break';
      };

      _loop2: for (var i = 0; i < stages.length; i++) {
        var _ret = _loop(i);

        switch (_ret) {
          case 'continue':
            continue;

          case 'break':
            break _loop2;}
      }
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
        <viva-ui-completometro progress="25"></viva-ui-completometro>
        <viva-ui-completometro progress="50"></viva-ui-completometro>
        <viva-ui-completometro progress="75"></viva-ui-completometro>
        <viva-ui-completometro progress="100"></viva-ui-completometro>
      </file>
    </example>
 */


CompletometroHandler.stages = [{ maxPercent: 49, text: 'Incompleto', color: '#e94b46' }, { maxPercent: 69, text: 'Falta informação', color: '#ff6d00' }, { maxPercent: 89, text: 'Pode melhorar', color: '#ffaf27' }, { maxPercent: 99, text: 'Quase completo', color: '#ffcd20' }, { maxPercent: 100, text: 'Completo', color: '#27cd6b' }];
mainModule.component('vivaUiCompletometro', {
  template: template$1,
  bindings: {
    progress: '='
  },
  controllerAs: '$uiCompletometro',
  controller: ['$scope', '$element', function ($scope, $element) {
    var _this2 = this;

    var handler = new CompletometroHandler(this, $scope, $element);

    if (!styleApplied) {
      applyStyle(style$3);
      styleApplied = true;
    }

    this.$onChanges = function (changesObj) {
      var progress = changesObj.progress;

      if (progress) {
        handler.setProgress(progress);
      }
    };

    this.$postLink = function () {
      handler.$progressCircle = angular.element($element[0].querySelector('.viva-ui-completometro__arch-progress'));

      handler.$pointer = angular.element($element[0].querySelector('.viva-ui-completometro__pointer'));

      handler.setProgress(_this2.progress);
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

return mainModule;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvY2FyZC9jYXJkLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ljb24vaWNvbi5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9jaGVja2JveC9jaGVja2JveC5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY3NzLWtleXdvcmRzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NvbXBsZXRvbWV0cm8vY29tcGxldG9tZXRyby5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9mbGF0QnV0dG9uL2ZsYXRCdXR0b24uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaW5wdXQvaW5wdXQuZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvc3RhdHVzVGFnL3N0YXR1c1RhZy5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuY29uc3QgJHVpU3R5bGUgPSBhbmd1bGFyLmVsZW1lbnQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nKVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZSAoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBoZWFkLmNoaWxkcmVuWzBdXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoJHVpU3R5bGVbMF0sIGZpcnN0Q2hpbGQgfHwgbnVsbClcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSAoc3R5bGUpIHtcbiAgaWYgKCFkb2N1bWVudC5jb250YWlucygkdWlTdHlsZVswXSkpIHtcbiAgICBpbnNlcnRTdHlsZSgpXG4gIH1cblxuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbmV4cG9ydCB7ICR1aVN0eWxlLCBhcHBseVN0eWxlIH1cbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2FyZC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDYXJkXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGNhcmQgaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPHZpdmEtdWktY2FyZD5cbiAgICAgICAgICA8dml2YS11aS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8c3Bhbj5IZXJlIGl0IGdvZXMgc29tZSBjb250ZW50Ljwvc3Bhbj5cbiAgICAgICAgICA8L3ZpdmEtdWktY2FyZC1jb250ZW50PlxuICAgICAgICAgIDx2aXZhLXVpLWNhcmQtZm9vdGVyPlxuICAgICAgICAgICAgPHNwYW4+QW5kIGhlcmUgaXMgdGhlIGZvb3Rlci48L3NwYW4+XG4gICAgICAgICAgPC92aXZhLXVpLWNhcmQtZm9vdGVyPlxuICAgICAgICA8L3ZpdmEtdWktY2FyZD5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDYXJkJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIiwiaW1wb3J0ICogYXMgdWlJY29uc2V0IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aUljb25zZXQvdWlJY29uc2V0J1xuaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pY29uLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUljb25cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gQW4gaWNvbnNldCBjb25zdW1lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIEljb24ncyBuYW1lLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLWljb24gaWNvbj1cImNoZWNrXCI+PC92aXZhLXVpLWljb24+XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpSWNvbicsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgPT4ge1xuICAgICAgJGF0dHJzLiRvYnNlcnZlKCdpY29uJywgKGljb25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSB1aUljb25zZXRbaWNvbk5hbWVdXG5cbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuaHRtbChpY29uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWNrYm94Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGVja2JveC5zY3NzJ1xuaW1wb3J0ICcuLi9pY29uL2ljb24uZGlyZWN0aXZlJ1xuXG5jbGFzcyBDaGVja2JveEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZVxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudFxuICAgIHRoaXMuJGF0dHJzID0gJGF0dHJzXG4gICAgdGhpcy4kbmdNb2RlbCA9ICRuZ01vZGVsXG4gICAgdGhpcy4kdWlDaGVja2JveCA9ICR1aUNoZWNrYm94XG4gIH1cblxuICBvbkNsaWNrICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDaGVja2VkID0gZWxlbWVudC5jaGVja2VkXG4gICAgY29uc3QgdHJ1ZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ1RydWVWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdUcnVlVmFsdWUpIDogdHJ1ZVxuICAgIGNvbnN0IGZhbHNlVmFsID0gdGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ25nRmFsc2VWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdGYWxzZVZhbHVlKSA6IGZhbHNlXG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzQ2hlY2tlZCA/IGZhbHNlVmFsIDogdHJ1ZVZhbFxuICAgIHRoaXMuJG5nTW9kZWwuJHNldFZpZXdWYWx1ZSh2YWx1ZSlcbiAgICB0aGlzLiRuZ01vZGVsLiRyZW5kZXIoKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNoZWNrYm94XG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgaW5wdXRcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBjaGVja2JveCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7ZW1wdHkgfCBlbnVtOlttaW51c119IHZpdmFVaUNoZWNrYm94IENoYW5nZSBjaGVja2JveCdzIHRpY2suXG4gKiBAcGFyYW0ge2VudW06W2NoZWNrYm94XX0gdHlwZSBIVE1MJ3MgaW5wdXQgdHlwZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3ggbmctbW9kZWw9XCJkZWZhdWx0Q2hlY2tib3hcIiBpZD1cImRlZmF1bHQtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVmYXVsdC1jaGVja2JveFwiPkRlZmF1bHQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3g9XCJtaW51c1wiIG5nLW1vZGVsPVwibWludXNDaGVja2JveFwiIGlkPVwibWludXMtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWludXMtY2hlY2tib3hcIj5NaW51czwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgbGFiZWwsIC5saXZlLWV4YW1wbGUgaW5wdXQgKyAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUNoZWNrYm94JywgWyckY29tcGlsZScsICgkY29tcGlsZSkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwpID0+IHtcbiAgICAgIGNvbnN0ICRpbm5lclNjb3BlID0gJHNjb3BlLiRuZXcodHJ1ZSlcblxuICAgICAgY29uc3QgJHVpQ2hlY2tib3ggPSAkaW5uZXJTY29wZS4kdWlDaGVja2JveCA9IHt9XG4gICAgICAkdWlDaGVja2JveC5jbGFzc1ByZWZpeCA9ICd2aXZhLXVpLWNoZWNrYm94J1xuXG4gICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY29tcGlsZSh0ZW1wbGF0ZSkoJGlubmVyU2NvcGUpXG4gICAgICBjb25zdCBoYW5kbGVyID0gbmV3IENoZWNrYm94SGFuZGxlcigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsLCAkdWlDaGVja2JveClcblxuICAgICAgJGVsZW1lbnQuYWZ0ZXIoJHRlbXBsYXRlKVxuXG4gICAgICAkYXR0cnMuJG9ic2VydmUoJ3ZpdmFVaUNoZWNrYm94JywgKHZhbCkgPT4ge1xuICAgICAgICAkdWlDaGVja2JveC5oYXNNaW51c0ljb24gPSB2YWwgPT09ICdtaW51cydcbiAgICAgIH0pXG5cbiAgICAgICR0ZW1wbGF0ZS5iaW5kKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGhhbmRsZXIub25DbGljaygpXG4gICAgICAgIGNvbnN0IG5nQ2xpY2sgPSAkYXR0cnMubmdDbGlja1xuXG4gICAgICAgIGlmIChuZ0NsaWNrKSB7XG4gICAgICAgICAgJHNjb3BlLiRldmVudCA9IGVcbiAgICAgICAgICAkc2NvcGUuJGV2YWwobmdDbGljaylcbiAgICAgICAgICBkZWxldGUgJHNjb3BlLiRldmVudFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufV0pXG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1XSxcblx0YW50aXF1ZXdoaXRlOiBbMjUwLCAyMzUsIDIxNV0sXG5cdGFxdWE6IFswLCAyNTUsIDI1NV0sXG5cdGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyXSxcblx0YXp1cmU6IFsyNDAsIDI1NSwgMjU1XSxcblx0YmVpZ2U6IFsyNDUsIDI0NSwgMjIwXSxcblx0YmlzcXVlOiBbMjU1LCAyMjgsIDE5Nl0sXG5cdGJsYWNrOiBbMCwgMCwgMF0sXG5cdGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNV0sXG5cdGJsdWU6IFswLCAwLCAyNTVdLFxuXHRibHVldmlvbGV0OiBbMTM4LCA0MywgMjI2XSxcblx0YnJvd246IFsxNjUsIDQyLCA0Ml0sXG5cdGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzVdLFxuXHRjYWRldGJsdWU6IFs5NSwgMTU4LCAxNjBdLFxuXHRjaGFydHJldXNlOiBbMTI3LCAyNTUsIDBdLFxuXHRjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzBdLFxuXHRjb3JhbDogWzI1NSwgMTI3LCA4MF0sXG5cdGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzN10sXG5cdGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMF0sXG5cdGNyaW1zb246IFsyMjAsIDIwLCA2MF0sXG5cdGN5YW46IFswLCAyNTUsIDI1NV0sXG5cdGRhcmtibHVlOiBbMCwgMCwgMTM5XSxcblx0ZGFya2N5YW46IFswLCAxMzksIDEzOV0sXG5cdGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTFdLFxuXHRkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJrZ3JlZW46IFswLCAxMDAsIDBdLFxuXHRkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJra2hha2k6IFsxODksIDE4MywgMTA3XSxcblx0ZGFya21hZ2VudGE6IFsxMzksIDAsIDEzOV0sXG5cdGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDddLFxuXHRkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDBdLFxuXHRkYXJrb3JjaGlkOiBbMTUzLCA1MCwgMjA0XSxcblx0ZGFya3JlZDogWzEzOSwgMCwgMF0sXG5cdGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyXSxcblx0ZGFya3NlYWdyZWVuOiBbMTQzLCAxODgsIDE0M10sXG5cdGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOV0sXG5cdGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3NsYXRlZ3JleTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDldLFxuXHRkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTFdLFxuXHRkZWVwcGluazogWzI1NSwgMjAsIDE0N10sXG5cdGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTVdLFxuXHRkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRpbWdyZXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NV0sXG5cdGZpcmVicmljazogWzE3OCwgMzQsIDM0XSxcblx0ZmxvcmFsd2hpdGU6IFsyNTUsIDI1MCwgMjQwXSxcblx0Zm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNF0sXG5cdGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NV0sXG5cdGdhaW5zYm9ybzogWzIyMCwgMjIwLCAyMjBdLFxuXHRnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NV0sXG5cdGdvbGQ6IFsyNTUsIDIxNSwgMF0sXG5cdGdvbGRlbnJvZDogWzIxOCwgMTY1LCAzMl0sXG5cdGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0Z3JlZW46IFswLCAxMjgsIDBdLFxuXHRncmVlbnllbGxvdzogWzE3MywgMjU1LCA0N10sXG5cdGdyZXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0aG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwXSxcblx0aG90cGluazogWzI1NSwgMTA1LCAxODBdLFxuXHRpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5Ml0sXG5cdGluZGlnbzogWzc1LCAwLCAxMzBdLFxuXHRpdm9yeTogWzI1NSwgMjU1LCAyNDBdLFxuXHRraGFraTogWzI0MCwgMjMwLCAxNDBdLFxuXHRsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTBdLFxuXHRsYXZlbmRlcmJsdXNoOiBbMjU1LCAyNDAsIDI0NV0sXG5cdGxhd25ncmVlbjogWzEyNCwgMjUyLCAwXSxcblx0bGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNV0sXG5cdGxpZ2h0Ymx1ZTogWzE3MywgMjE2LCAyMzBdLFxuXHRsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOF0sXG5cdGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTVdLFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwgMjUwLCAyMTBdLFxuXHRsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDRdLFxuXHRsaWdodGdyZXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5M10sXG5cdGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMl0sXG5cdGxpZ2h0c2VhZ3JlZW46IFszMiwgMTc4LCAxNzBdLFxuXHRsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwXSxcblx0bGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzbGF0ZWdyZXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyXSxcblx0bGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0XSxcblx0bGltZTogWzAsIDI1NSwgMF0sXG5cdGxpbWVncmVlbjogWzUwLCAyMDUsIDUwXSxcblx0bGluZW46IFsyNTAsIDI0MCwgMjMwXSxcblx0bWFnZW50YTogWzI1NSwgMCwgMjU1XSxcblx0bWFyb29uOiBbMTI4LCAwLCAwXSxcblx0bWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzBdLFxuXHRtZWRpdW1ibHVlOiBbMCwgMCwgMjA1XSxcblx0bWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExXSxcblx0bWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOV0sXG5cdG1lZGl1bXNlYWdyZWVuOiBbNjAsIDE3OSwgMTEzXSxcblx0bWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOF0sXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTRdLFxuXHRtZWRpdW10dXJxdW9pc2U6IFs3MiwgMjA5LCAyMDRdLFxuXHRtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzNdLFxuXHRtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMl0sXG5cdG1pbnRjcmVhbTogWzI0NSwgMjU1LCAyNTBdLFxuXHRtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1XSxcblx0bW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxXSxcblx0bmF2YWpvd2hpdGU6IFsyNTUsIDIyMiwgMTczXSxcblx0bmF2eTogWzAsIDAsIDEyOF0sXG5cdG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwXSxcblx0b2xpdmU6IFsxMjgsIDEyOCwgMF0sXG5cdG9saXZlZHJhYjogWzEwNywgMTQyLCAzNV0sXG5cdG9yYW5nZTogWzI1NSwgMTY1LCAwXSxcblx0b3JhbmdlcmVkOiBbMjU1LCA2OSwgMF0sXG5cdG9yY2hpZDogWzIxOCwgMTEyLCAyMTRdLFxuXHRwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MF0sXG5cdHBhbGVncmVlbjogWzE1MiwgMjUxLCAxNTJdLFxuXHRwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOF0sXG5cdHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3XSxcblx0cGFwYXlhd2hpcDogWzI1NSwgMjM5LCAyMTNdLFxuXHRwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1XSxcblx0cGVydTogWzIwNSwgMTMzLCA2M10sXG5cdHBpbms6IFsyNTUsIDE5MiwgMjAzXSxcblx0cGx1bTogWzIyMSwgMTYwLCAyMjFdLFxuXHRwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMF0sXG5cdHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcblx0cmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1M10sXG5cdHJlZDogWzI1NSwgMCwgMF0sXG5cdHJvc3licm93bjogWzE4OCwgMTQzLCAxNDNdLFxuXHRyb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjVdLFxuXHRzYWRkbGVicm93bjogWzEzOSwgNjksIDE5XSxcblx0c2FsbW9uOiBbMjUwLCAxMjgsIDExNF0sXG5cdHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTZdLFxuXHRzZWFncmVlbjogWzQ2LCAxMzksIDg3XSxcblx0c2Vhc2hlbGw6IFsyNTUsIDI0NSwgMjM4XSxcblx0c2llbm5hOiBbMTYwLCA4MiwgNDVdLFxuXHRzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcblx0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyMzVdLFxuXHRzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDVdLFxuXHRzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c2xhdGVncmV5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNub3c6IFsyNTUsIDI1MCwgMjUwXSxcblx0c3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyN10sXG5cdHN0ZWVsYmx1ZTogWzcwLCAxMzAsIDE4MF0sXG5cdHRhbjogWzIxMCwgMTgwLCAxNDBdLFxuXHR0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuXHR0aGlzdGxlOiBbMjE2LCAxOTEsIDIxNl0sXG5cdHRvbWF0bzogWzI1NSwgOTksIDcxXSxcblx0dHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4XSxcblx0dmlvbGV0OiBbMjM4LCAxMzAsIDIzOF0sXG5cdHdoZWF0OiBbMjQ1LCAyMjIsIDE3OV0sXG5cdHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXG5cdHdoaXRlc21va2U6IFsyNDUsIDI0NSwgMjQ1XSxcblx0eWVsbG93OiBbMjU1LCAyNTUsIDBdLFxuXHR5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MF1cbn07XG5cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCcuL2Nzcy1rZXl3b3JkcycpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XS5qb2luKCldID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDN9LFxuXHRoc3Y6IHtjaGFubmVsczogM30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzfSxcblx0Y215azoge2NoYW5uZWxzOiA0fSxcblx0eHl6OiB7Y2hhbm5lbHM6IDN9LFxuXHRsYWI6IHtjaGFubmVsczogM30sXG5cdGxjaDoge2NoYW5uZWxzOiAzfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDF9LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzfSxcblx0YXBwbGU6IHtjaGFubmVsczogM31cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIHByb3BlcnR5XG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciB2O1xuXG5cdGlmIChtYXggPT09IDApIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gKGRlbHRhIC8gbWF4ICogMTAwMCkgLyAxMDtcblx0fVxuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0diA9ICgobWF4IC8gMjU1KSAqIDEwMDApIC8gMTA7XG5cblx0cmV0dXJuIFtoLCBzLCB2XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZUtleXdvcmRzW3JnYi5qb2luKCldO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQobWF0Y2hbMF0sIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbi8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoJ2NvbG9yLXN0cmluZycpO1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAob2JqKSB7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqKTtcblx0fVxuXG5cdHRoaXMudmFsdWVzID0ge1xuXHRcdHJnYjogWzAsIDAsIDBdLFxuXHRcdGhzbDogWzAsIDAsIDBdLFxuXHRcdGhzdjogWzAsIDAsIDBdLFxuXHRcdGh3YjogWzAsIDAsIDBdLFxuXHRcdGNteWs6IFswLCAwLCAwLCAwXSxcblx0XHRhbHBoYTogMVxuXHR9O1xuXG5cdC8vIHBhcnNlIENvbG9yKCkgYXJndW1lbnRcblx0dmFyIHZhbHM7XG5cdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhbHMgPSBzdHJpbmcuZ2V0UmdiYShvYmopO1xuXHRcdGlmICh2YWxzKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEhzbGEob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRId2Iob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicgKyBvYmogKyAnXCInKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHR2YWxzID0gb2JqO1xuXHRcdGlmICh2YWxzLnIgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnJlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmwgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmxpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLnYgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc3YnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMud2hpdGVuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMuYyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMuY3lhbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnY215aycsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHJnYjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdyZ2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc2w6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHNsJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHN2OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzdicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGh3YjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdod2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRjbXlrOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2NteWsnLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHJnYkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLnJnYjtcblx0fSxcblx0aHNsQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHNsO1xuXHR9LFxuXHRoc3ZBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc3Y7XG5cdH0sXG5cdGh3YkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yjtcblx0fSxcblx0Y215a0FycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmNteWs7XG5cdH0sXG5cdHJnYmFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0cmV0dXJuIHJnYi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGhzbGFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBoc2wgPSB0aGlzLnZhbHVlcy5oc2w7XG5cdFx0cmV0dXJuIGhzbC5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHZhbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMCwgdmFsKTtcblx0fSxcblx0Z3JlZW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMiwgdmFsKTtcblx0fSxcblx0aHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0dmFsICU9IDM2MDtcblx0XHRcdHZhbCA9IHZhbCA8IDAgPyAzNjAgKyB2YWwgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDAsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAxLCB2YWwpO1xuXHR9LFxuXHRsaWdodG5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAyLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9udjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDEsIHZhbCk7XG5cdH0sXG5cdHdoaXRlbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsYWNrbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDIsIHZhbCk7XG5cdH0sXG5cdHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMiwgdmFsKTtcblx0fSxcblx0Y3lhbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAwLCB2YWwpO1xuXHR9LFxuXHRtYWdlbnRhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDEsIHZhbCk7XG5cdH0sXG5cdHllbGxvdzogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAyLCB2YWwpO1xuXHR9LFxuXHRibGFjazogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAzLCB2YWwpO1xuXHR9LFxuXG5cdGhleFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYik7XG5cdH0sXG5cdHJnYlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRyZ2JhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnZhbHVlcy5yZ2JbMF0gPDwgMTYpIHwgKHRoaXMudmFsdWVzLnJnYlsxXSA8PCA4KSB8IHRoaXMudmFsdWVzLnJnYlsyXTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRkYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGxpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmRhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IDI1NSAtIHRoaXMudmFsdWVzLnJnYltpXTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHJnYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdICs9IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdIC09IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gKz0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdIC09IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzFdICs9IHRoaXMudmFsdWVzLmh3YlsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsyXSArPSB0aGlzLnZhbHVlcy5od2JbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRncmV5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCBbdmFsLCB2YWwsIHZhbF0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsZWFyZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhIC0gKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSArICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBodWUgPSB0aGlzLnZhbHVlcy5oc2xbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzBdID0gaHVlO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBQb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdCAqL1xuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHR2YXIgY29sb3IxID0gdGhpcztcblx0XHR2YXIgY29sb3IyID0gbWl4aW5Db2xvcjtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKClcblx0XHRcdClcblx0XHRcdC5hbHBoYShjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJnYigpO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNvbCA9IG5ldyBDb2xvcigpO1xuXHRcdGNvbC52YWx1ZXMgPSBjbG9uZSh0aGlzLnZhbHVlcyk7XG5cdFx0cmV0dXJuIGNvbDtcblx0fVxufTtcblxuQ29sb3IucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSkge1xuXHR2YXIgdmFscyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHR2YWxzW3NwYWNlLmNoYXJBdChpKV0gPSB0aGlzLnZhbHVlc1tzcGFjZV1baV07XG5cdH1cblxuXHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHR2YWxzLmEgPSB0aGlzLnZhbHVlcy5hbHBoYTtcblx0fVxuXG5cdC8vIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAwLjR9XG5cdHJldHVybiB2YWxzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSwgdmFscykge1xuXHR2YXIgc3BhY2VzID0ge1xuXHRcdHJnYjogWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddLFxuXHRcdGhzbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnXSxcblx0XHRoc3Y6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAndmFsdWUnXSxcblx0XHRod2I6IFsnaHVlJywgJ3doaXRlbmVzcycsICdibGFja25lc3MnXSxcblx0XHRjbXlrOiBbJ2N5YW4nLCAnbWFnZW50YScsICd5ZWxsb3cnLCAnYmxhY2snXVxuXHR9O1xuXG5cdHZhciBtYXhlcyA9IHtcblx0XHRyZ2I6IFsyNTUsIDI1NSwgMjU1XSxcblx0XHRoc2w6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRoc3Y6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRod2I6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRjbXlrOiBbMTAwLCAxMDAsIDEwMCwgMTAwXVxuXHR9O1xuXG5cdHZhciBpO1xuXHR2YXIgYWxwaGEgPSAxO1xuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRhbHBoYSA9IHZhbHM7XG5cdH0gZWxzZSBpZiAodmFscy5sZW5ndGgpIHtcblx0XHQvLyBbMTAsIDEwLCAxMF1cblx0XHR0aGlzLnZhbHVlc1tzcGFjZV0gPSB2YWxzLnNsaWNlKDAsIHNwYWNlLmxlbmd0aCk7XG5cdFx0YWxwaGEgPSB2YWxzW3NwYWNlLmxlbmd0aF07XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZS5jaGFyQXQoMCldICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cjogMTAsIGc6IDEwLCBiOiAxMH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbc3BhY2UuY2hhckF0KGkpXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlc1tzcGFjZV1bMF1dICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cmVkOiAxMCwgZ3JlZW46IDEwLCBibHVlOiAxMH1cblx0XHR2YXIgY2hhbnMgPSBzcGFjZXNbc3BhY2VdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW2NoYW5zW2ldXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYWxwaGE7XG5cdH1cblxuXHR0aGlzLnZhbHVlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChhbHBoYSA9PT0gdW5kZWZpbmVkID8gdGhpcy52YWx1ZXMuYWxwaGEgOiBhbHBoYSkpKTtcblxuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgY2FwcGVkO1xuXG5cdC8vIGNhcCB2YWx1ZXMgb2YgdGhlIHNwYWNlIHByaW9yIGNvbnZlcnRpbmcgYWxsIHZhbHVlc1xuXHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzcGFjZV1baV0sIHRoaXMudmFsdWVzW3NwYWNlXVtpXSkpO1xuXHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0fVxuXG5cdC8vIGNvbnZlcnQgdG8gYWxsIHRoZSBvdGhlciBjb2xvciBzcGFjZXNcblx0Zm9yICh2YXIgc25hbWUgaW4gc3BhY2VzKSB7XG5cdFx0aWYgKHNuYW1lICE9PSBzcGFjZSkge1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdID0gY29udmVydFtzcGFjZV1bc25hbWVdKHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2FwIHZhbHVlc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBzbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc25hbWVdW2ldLCB0aGlzLnZhbHVlc1tzbmFtZV1baV0pKTtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRTcGFjZSA9IGZ1bmN0aW9uIChzcGFjZSwgYXJncykge1xuXHR2YXIgdmFscyA9IGFyZ3NbMF07XG5cblx0aWYgKHZhbHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJnYigpXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWVzKHNwYWNlKTtcblx0fVxuXG5cdC8vIGNvbG9yLnJnYigxMCwgMTAsIDEwKVxuXHRpZiAodHlwZW9mIHZhbHMgPT09ICdudW1iZXInKSB7XG5cdFx0dmFscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuXHR9XG5cblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHZhbHMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24gKHNwYWNlLCBpbmRleCwgdmFsKSB7XG5cdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJlZCgpXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF07XG5cdH0gZWxzZSBpZiAodmFsID09PSB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdKSB7XG5cdFx0Ly8gY29sb3IucmVkKGNvbG9yLnJlZCgpKVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gY29sb3IucmVkKDEwMClcblx0dGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSA9IHZhbDtcblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IGNvbG9yIGZyb20gJ2NvbG9yJ1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLnNjc3MnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLmh0bWwnXG5cbmxldCBzdHlsZUFwcGxpZWRcblxuY2xhc3MgQ29tcGxldG9tZXRyb0hhbmRsZXIge1xuICBzdGF0aWMgc3RhZ2VzID0gW1xuICAgIHsgbWF4UGVyY2VudDogNDksIHRleHQ6ICdJbmNvbXBsZXRvJywgY29sb3I6ICcjZTk0YjQ2JyB9LFxuICAgIHsgbWF4UGVyY2VudDogNjksIHRleHQ6ICdGYWx0YSBpbmZvcm1hw6fDo28nLCBjb2xvcjogJyNmZjZkMDAnIH0sXG4gICAgeyBtYXhQZXJjZW50OiA4OSwgdGV4dDogJ1BvZGUgbWVsaG9yYXInLCBjb2xvcjogJyNmZmFmMjcnIH0sXG4gICAgeyBtYXhQZXJjZW50OiA5OSwgdGV4dDogJ1F1YXNlIGNvbXBsZXRvJywgY29sb3I6ICcjZmZjZDIwJyB9LFxuICAgIHsgbWF4UGVyY2VudDogMTAwLCB0ZXh0OiAnQ29tcGxldG8nLCBjb2xvcjogJyMyN2NkNmInIH1cbiAgXVxuXG4gIGNvbnN0cnVjdG9yICgkY3RybCwgJHNjb3BlLCAkZWxlbWVudCwgJHByb2dyZXNzQ2lyY2xlKSB7XG4gICAgdGhpcy4kY3RybCA9ICRjdHJsXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRwcm9ncmVzc0NpcmNsZSA9ICRwcm9ncmVzc0NpcmNsZVxuICB9XG5cbiAgc2V0UHJvZ3Jlc3MgKHByb2dyZXNzKSB7XG4gICAgY29uc3Qgc3RhZ2VzID0gQ29tcGxldG9tZXRyb0hhbmRsZXIuc3RhZ2VzXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGVnID0gcHJvZ3Jlc3MgKiAxLjhcbiAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzW2ldXG4gICAgICBjb25zdCBuZXh0ID0gc3RhZ2VzW2kgKyAxXVxuICAgICAgbGV0IGJnQ29sb3JcblxuICAgICAgaWYgKG5leHQgJiYgcHJvZ3Jlc3MgPiBzdGFnZS5tYXhQZXJjZW50KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGJnQ29sb3IgPSBuZXh0ID8gY29sb3IobmV4dC5jb2xvcikubWl4KGNvbG9yKHN0YWdlLmNvbG9yKSwgcHJvZ3Jlc3MgLyAxMDApLmhleFN0cmluZygpIDogc3RhZ2UuY29sb3JcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQ2lyY2xlLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiBgcm90YXRlKCR7ZGVnfWRlZylgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kcG9pbnRlci5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoJHtkZWcgLSA5MH1kZWcpYClcbiAgICAgIH0pXG5cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNvbXBsZXRvbWV0cm9cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY29tcGxldMO0bWV0cm8gaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjBcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjI1XCI+PC92aXZhLXVpLWNvbXBsZXRvbWV0cm8+XG4gICAgICAgIDx2aXZhLXVpLWNvbXBsZXRvbWV0cm8gcHJvZ3Jlc3M9XCI1MFwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgICA8dml2YS11aS1jb21wbGV0b21ldHJvIHByb2dyZXNzPVwiNzVcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjEwMFwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5jb21wb25lbnQoJ3ZpdmFVaUNvbXBsZXRvbWV0cm8nLCB7XG4gIHRlbXBsYXRlLFxuICBiaW5kaW5nczoge1xuICAgIHByb2dyZXNzOiAnPSdcbiAgfSxcbiAgY29udHJvbGxlckFzOiAnJHVpQ29tcGxldG9tZXRybycsXG4gIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IENvbXBsZXRvbWV0cm9IYW5kbGVyKHRoaXMsICRzY29wZSwgJGVsZW1lbnQpXG5cbiAgICBpZiAoIXN0eWxlQXBwbGllZCkge1xuICAgICAgYXBwbHlTdHlsZShzdHlsZSlcbiAgICAgIHN0eWxlQXBwbGllZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLiRvbkNoYW5nZXMgPSAoY2hhbmdlc09iaikgPT4ge1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBjaGFuZ2VzT2JqLnByb2dyZXNzXG5cbiAgICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICBoYW5kbGVyLnNldFByb2dyZXNzKHByb2dyZXNzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJHBvc3RMaW5rID0gKCkgPT4ge1xuICAgICAgaGFuZGxlci4kcHJvZ3Jlc3NDaXJjbGUgPSBhbmd1bGFyLmVsZW1lbnQoXG4gICAgICAgICRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy52aXZhLXVpLWNvbXBsZXRvbWV0cm9fX2FyY2gtcHJvZ3Jlc3MnKVxuICAgICAgKVxuXG4gICAgICBoYW5kbGVyLiRwb2ludGVyID0gYW5ndWxhci5lbGVtZW50KFxuICAgICAgICAkZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcudml2YS11aS1jb21wbGV0b21ldHJvX19wb2ludGVyJylcbiAgICAgIClcblxuICAgICAgaGFuZGxlci5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH1cbiAgfV1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZsYXRCdXR0b24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpRmxhdEJ1dHRvblxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGJ1dHRvblxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsYXQgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltzbWFsbCwgbWVkaXVtLCBsYXJnZV19IFt2aXZhVWlGbGF0QnV0dG9uPW1lZGl1bV0gQnV0dG9uJ3Mgc2l6ZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8YnV0dG9uIHZpdmEtdWktZmxhdC1idXR0b24+RmxhdCBidXR0b248L2J1dHRvbj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbnB1dC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJbnB1dFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0XG4gKiBAcGFyYW0ge2VudW06W3RleHRdfSB0eXBlIEhUTUwncyBpbnB1dCB0eXBlLlxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGlucHV0IGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgdGV4dFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dD1cImVycm9yXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCB0ZXh0IHdpdGggZXJyb3JcIj5cbiAgICAgICAgICA8c3BhbiB2aXZhLXVpLWlucHV0LXN0YXR1cz5FcnJvciBtZXNzYWdlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cblxuICAgICAgPGZpbGUgbmFtZT1cInN0eWxlLmNzc1wiPlxuICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+IHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlJbnB1dCcsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQSdcbiAgfVxufSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3RhdHVzVGFnLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaVN0YXR1c1RhZ1xuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBzdGF0dXMgdGFnIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltkZWZhdWx0LCBzdWNjZXNzXX0gW3N0YXR1cz1kZWZhdWx0XSBUYWcgc3RhdHVzLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5EZWZhdWx0PC92aXZhLXVpLXN0YXR1cy10YWc+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgc3RhdHVzPVwic3VjY2Vzc1wiIGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+U3VjY2Vzczwvdml2YS11aS1zdGF0dXMtdGFnPlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpU3RhdHVzVGFnJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJzdHlsZSIsImNvbW1vbmpzSGVscGVycy5pbnRlcm9wRGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO1lBQ0wsa0JBQUMsR0FBRCxFQUFNLE9BQU4sRUFBa0I7UUFDcEIsWUFBWSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQWxCO2NBQ1UsT0FBTyxPQUFQLEtBQW1CLFdBQW5CLEdBQWlDLEVBQWpDLEdBQXNDLE9BQWhEOztjQUVVLENBQVYsSUFBZSxVQUFVLENBQVYsRUFBYSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLFFBQVEsVUFBUixHQUFxQixhQUFyQixHQUFxQyxhQUE1RCxNQUErRSxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLENBQW5CLENBQTlGOztXQUVPLFVBQVUsQ0FBVixJQUFlLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUNsQixVQUFDLEtBQUQsRUFBVzthQUNGLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsV0FBaEIsS0FBZ0MsTUFBTSxLQUFOLENBQVksQ0FBWixDQUF2QztLQUZnQixFQUlsQixJQUpr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VSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDMUIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDcEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDekIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDekIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDckIsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDdEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDbkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDckIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDN0IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDdEIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDMUIsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDN0IsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDekIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDMUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDcEIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDNUIsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDM0IsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDM0IsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDekIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDeEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDeEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDMUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDdEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDbkIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDekIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDbEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDcEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIs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LENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDakIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDcEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDckIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDdkIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDcEIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDckIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDN0IsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDaEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDMUIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDdkIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDckIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDekIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDcEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDbkIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDckIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDckIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDM0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ3RCLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQzs7Q0FFTixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7RUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNOLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO0VBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDO0VBQ3BCLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO0VBQ3JCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztFQUN4QixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDeEI7O0NBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Q0FFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0VBQ1YsQ0FBQyxJQUFJLEdBQUcsQ0FBQztFQUNUOztDQUVELENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDOztDQUVwQixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7RUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNOLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO0VBQ3BCLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3hCLE1BQU07RUFDTixDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDNUI7O0NBRUQsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUM3QixDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFO0NBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUN0QixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7O0NBRU4sSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO0VBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNOLE1BQU07RUFDTixDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7RUFDOUI7O0NBRUQsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO0VBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDTixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztFQUNwQixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDeEIsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDckIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDO0VBQ3hCOztDQUVELENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7O0NBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtFQUNWLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDVDs7Q0FFRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Q0FFOUIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDakIsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0NBRTlDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztDQUU5QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQzdCLENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7O0NBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQy9CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Q0FFL0IsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUM1QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxFQUFFO0NBQ3BDLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ25DLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxPQUFPLEVBQUU7Q0FDeEMsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDNUIsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7O0NBR3JCLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDckUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztDQUNyRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDOztDQUVyRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztDQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztDQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQzs7Q0FFbkQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDbkMsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7O0NBRU4sQ0FBQyxJQUFJLE1BQU0sQ0FBQztDQUNaLENBQUMsSUFBSSxHQUFHLENBQUM7Q0FDVCxDQUFDLElBQUksT0FBTyxDQUFDOztDQUViLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ2pFLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ2pFLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENB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LENBQUMsQ0FBQztDQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7Q0FDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUM3QixJQUFJLEVBQUUsQ0FBQztDQUNQLElBQUksQ0FBQyxDQUFDOztDQUVOLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDUCxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzFCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQ3BDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2hCLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Q0FFOUQsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUM5QixDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFO0NBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztDQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0QyxDQUFDLElBQUksR0FBRyxDQUFDOztDQUVULFFBQVEsRUFBRTtFQUNULEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLEtBQUssQ0FBQztHQUNMLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xCO0NBQ0QsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDN0IsSUFBSSxJQUFJLENBQUM7Q0FDVCxJQUFJLEVBQUUsQ0FBQztDQUNQLElBQUksQ0FBQyxDQUFDOztDQUVOLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2hCLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0NBQ3RCLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQ2QsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUNwQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNiLENBQUMsSUFBSSxDQUFDLENBQUM7O0NBRVAsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUM5QixDQUFDOzs7QUFHRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDdEIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN0QixJQUFJLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQ3BCLElBQUksQ0FB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LEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUMzQixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUN2QixnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2pDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQy9CLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3hCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQzVCLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDL0IsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDM0IsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdEIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDOUIsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDN0IsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDN0IsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDM0IsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDMUIsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDMUIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDeEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDckIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDM0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDcEIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDN0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDdEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDMUIsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsWUFBWSxFQUFFLENB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QUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUMzQixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUN2QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUN6QixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN6QixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNoQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNoQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNoQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM3QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUN0QixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN2QixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN2QixZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM3QixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztDQUN2QixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztDQUMvQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNsQixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMzQixhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztDQUM1QixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN6QixZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUM1QixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztDQUN6QixVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMzQixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztDQUN2QixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN6QixTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMxQixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztDQUMzQixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN2QixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM1QixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMzQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN0QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVB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TSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNsQztNQUNELENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0I7UUFDSSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1NBQ2xDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7T0FDdkQ7TUFDRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtNQUNyQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLEVBQUU7U0FDNUIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3RCO01BQ0QsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ1AsT0FBTztPQUNUO0lBQ0g7O0dBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7TUFDbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDO0dBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO01BQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNSO1FBQ0k7TUFDRixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckI7R0FDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ1gsT0FBTyxHQUFHLENBQUM7Q0FDYjs7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUU7R0FDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUNWLE9BQU87SUFDVDtHQUNELElBQUksR0FBRyxHQUFHLDBHQUEwRyxDQUFDO0dBQ3JILElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDOUIsSUFBSSxLQUFLLEVBQUU7TUFDUixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDakMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ3JDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDdkMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUN2QyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUM5QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEI7Q0FDSDs7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUU7R0FDckIsSUFBSSxDQUFDLE1BQU0sRUFBRTtNQUNWLE9BQU87SUFDVDtHQUNELElBQUksR0FBRyxHQUFHLHdHQUF3RyxDQUFDO0dBQ25ILElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDOUIsSUFBSSxLQUFLLEVBQUU7SUFDVixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0IsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ3JDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDdkMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUN2QyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUM5QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEI7Q0FDSDs7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUU7R0FDckIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzNCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMs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RUFDbEIsS0FBSyxFQUFFLENBQUM7RUFDUixDQUFDOzs7Q0FHRixJQUFJLElBQUksQ0FBQztDQUNULElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO0VBQzVCLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzNCLElBQUksSUFBSSxFQUFFO0dBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDNUIsTUFBTSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0dBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzVCLE1BQU0sSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtHQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM1QixNQUFNO0dBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDbkU7RUFDRCxNQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO0VBQ25DLElBQUksR0FBRyxHQUFHLENBQUM7RUFDWCxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO0dBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQzVCLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtHQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztHQUM1QixNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVB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LENBQUM7RUFDN0IsT0FBTyxJQUFJLENBQUM7RUFDWjs7Q0FFRCxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDbkIsSUFBSSxHQUFHLEVBQUU7R0FDUixHQUFHLElBQUksR0FBRyxDQUFDO0dBQ1gsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7R0FDaEM7RUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUMxQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QztDQUNELElBQUksRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2QztDQUNELE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2QztDQUNELE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2QztDQUNELEtBQUssRUFBRSxVQUFVLEdBQUcsRUFBRTtFQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN2Qzs7Q0FFRCxTQUFTLEVBQUUsWUFBWTtFQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN6QztDQUNELFNBQVMsRUFBRSxZQUFZO0VBQ3RCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzVEO0NBQ0QsVUFBVSxFQUFFLFlBQVk7RUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDN0Q7Q0FDRCxhQUFhLEVBQUUsWUFBWTtFQUMxQixPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNoRTtDQUNELFNBQVMsRUFBRSxZQUFZO0VBQ3RCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzVEO0NBQ0QsVUFBVSxFQUFFLFlBQVk7RUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDN0Q7Q0FDRCxTQUFTLEVBQUUsWUFBWTtFQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM1RDtDQUNELE9BQU8sRUFBRSxZQUFZO0VBQ3BCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzFEOztDQUVELFNBQVMsRUFBRSxZQUFZO0VBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFH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LENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBTyxJQUFJLENBQUM7RUFDWjs7Q0FFRCxNQUFNLEVBQUUsVUFBVSxLQUFLLEVBQUU7RUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0VBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBTyxJQUFJLENBQUM7RUFDWjs7Q0FFRCxRQUFRLEVBQUUsVUFBVSxLQUFLLEVBQUU7RUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0VBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBTyxJQUFJLENBQUM7RUFDWjs7Q0FFRCxVQUFVLEVBQUUsVUFBVSxLQUFLLEVBQUU7RUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0VBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdkMsT0FBTyxJQUFJLENBQUM7RUFDWjs7Q0FFRCxNQUFNLEVBQUUsVUFBVSxLQUFLLEVBQUU7RUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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dEIsS0FBSyxHQUFHLElBQUksQ0FBQztFQUNiLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztFQUV2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNqRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUMzQixNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7O0VBRS9DLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtHQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDOUM7O0VBRUQsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDZixNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTs7RUFFaEQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztFQUUxQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7R0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDdkM7O0VBRUQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDbkI7O0NBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFD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