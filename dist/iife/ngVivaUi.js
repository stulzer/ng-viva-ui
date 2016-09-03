var ngVivaUi = (function (angular$1) {
'use strict';

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

}(angular));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL3V0aWxzL3V0aWxzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL21haW4ubW9kdWxlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvY2FyZC9jYXJkLmRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2ljb24vaWNvbi5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9jaGVja2JveC9jaGVja2JveC5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY3NzLWtleXdvcmRzLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyIsIi9Vc2Vycy9yYWZhZWx0YXZhcmVzL1Byb2plY3RzL25nLXZpdmEtdWkvc3JjL21vZHVsZXMvbWFpbi9kaXJlY3RpdmVzL2NvbXBsZXRvbWV0cm8vY29tcGxldG9tZXRyby5kaXJlY3RpdmUuanMiLCIvVXNlcnMvcmFmYWVsdGF2YXJlcy9Qcm9qZWN0cy9uZy12aXZhLXVpL3NyYy9tb2R1bGVzL21haW4vZGlyZWN0aXZlcy9mbGF0QnV0dG9uL2ZsYXRCdXR0b24uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvaW5wdXQvaW5wdXQuZGlyZWN0aXZlLmpzIiwiL1VzZXJzL3JhZmFlbHRhdmFyZXMvUHJvamVjdHMvbmctdml2YS11aS9zcmMvbW9kdWxlcy9tYWluL2RpcmVjdGl2ZXMvc3RhdHVzVGFnL3N0YXR1c1RhZy5kaXJlY3RpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYW1lbGl6ZTogKHN0ciwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHN0clBpZWNlcyA9IHN0ci5zcGxpdCgnLScpXG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/IHt9IDogb3B0aW9uc1xuXG4gICAgc3RyUGllY2VzWzBdID0gc3RyUGllY2VzWzBdLmNoYXJBdCgwKVtvcHRpb25zLmNhcGl0YWxpemUgPyAndG9VcHBlckNhc2UnIDogJ3RvTG93ZXJDYXNlJ10oKSArIHN0clBpZWNlc1swXS5zbGljZSgxKVxuXG4gICAgcmV0dXJuIHN0clBpZWNlc1swXSArIHN0clBpZWNlcy5zbGljZSgxKS5tYXAoXG4gICAgICAgIChwaWVjZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwaWVjZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBpZWNlLnNsaWNlKDEpXG4gICAgICAgIH1cbiAgICAgICkuam9pbignJylcbiAgfVxufVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcbmltcG9ydCB7IG5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBtb2R1bGVOYW1lID0gY2FtZWxpemUobmFtZSlcblxuLyoqXG4gKiBAbmdkb2Mgb3ZlcnZpZXdcbiAqIEBuYW1lIG5nVml2YVVpXG4gKiBAZGVzY3JpcHRpb25cbiAqICNuZ1ZpdmFVaVxuICogVml2YSBVaSBLaXQncyBpbXBsZW1lbnRhdGlvbiBmb3IgQW5ndWxhckpTLlxuICovXG5jb25zdCBtYWluTW9kdWxlID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBhbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgfVxufSkoKVxuXG5leHBvcnQgeyBtYWluTW9kdWxlIGFzIGRlZmF1bHQsIG1vZHVsZU5hbWUgfVxuIiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcblxuY29uc3QgJHVpU3R5bGUgPSBhbmd1bGFyLmVsZW1lbnQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nKVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZSAoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBoZWFkLmNoaWxkcmVuWzBdXG5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoJHVpU3R5bGVbMF0sIGZpcnN0Q2hpbGQgfHwgbnVsbClcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSAoc3R5bGUpIHtcbiAgaWYgKCFkb2N1bWVudC5jb250YWlucygkdWlTdHlsZVswXSkpIHtcbiAgICBpbnNlcnRTdHlsZSgpXG4gIH1cblxuICBjb25zdCAkc3R5bGVOb2RlID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlKSlcbiAgJHVpU3R5bGUuYXBwZW5kKCRzdHlsZU5vZGUpXG59XG5cbmV4cG9ydCB7ICR1aVN0eWxlLCBhcHBseVN0eWxlIH1cbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vY2FyZC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlDYXJkXG4gKiBAcmVzdHJpY3QgRVxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGNhcmQgaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPHZpdmEtdWktY2FyZD5cbiAgICAgICAgICA8dml2YS11aS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8c3Bhbj5IZXJlIGl0IGdvZXMgc29tZSBjb250ZW50Ljwvc3Bhbj5cbiAgICAgICAgICA8L3ZpdmEtdWktY2FyZC1jb250ZW50PlxuICAgICAgICAgIDx2aXZhLXVpLWNhcmQtZm9vdGVyPlxuICAgICAgICAgICAgPHNwYW4+QW5kIGhlcmUgaXMgdGhlIGZvb3Rlci48L3NwYW4+XG4gICAgICAgICAgPC92aXZhLXVpLWNhcmQtZm9vdGVyPlxuICAgICAgICA8L3ZpdmEtdWktY2FyZD5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlDYXJkJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIiwiaW1wb3J0ICogYXMgdWlJY29uc2V0IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aUljb25zZXQvdWlJY29uc2V0J1xuaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pY29uLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUljb25cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gQW4gaWNvbnNldCBjb25zdW1lci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIEljb24ncyBuYW1lLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLWljb24gaWNvbj1cImNoZWNrXCI+PC92aXZhLXVpLWljb24+XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpSWNvbicsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgPT4ge1xuICAgICAgJGF0dHJzLiRvYnNlcnZlKCdpY29uJywgKGljb25OYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSB1aUljb25zZXRbaWNvbk5hbWVdXG5cbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgJGVsZW1lbnQuaHRtbChpY29uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2NoZWNrYm94Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGVja2JveC5zY3NzJ1xuaW1wb3J0ICcuLi9pY29uL2ljb24uZGlyZWN0aXZlJ1xuXG5jbGFzcyBDaGVja2JveEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvciAoJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbmdNb2RlbCwgJHVpQ2hlY2tib3gpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZVxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudFxuICAgIHRoaXMuJGF0dHJzID0gJGF0dHJzXG4gICAgdGhpcy4kbmdNb2RlbCA9ICRuZ01vZGVsXG4gICAgdGhpcy4kdWlDaGVja2JveCA9ICR1aUNoZWNrYm94XG4gIH1cblxuICBvbkNsaWNrICgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXVxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50LmRpc2FibGVkXG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDaGVja2VkID0gZWxlbWVudC5jaGVja2VkXG4gICAgY29uc3QgdHJ1ZVZhbCA9IHRoaXMuJGF0dHJzLmhhc093blByb3BlcnR5KCduZ1RydWVWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdUcnVlVmFsdWUpIDogdHJ1ZVxuICAgIGNvbnN0IGZhbHNlVmFsID0gdGhpcy4kYXR0cnMuaGFzT3duUHJvcGVydHkoJ25nRmFsc2VWYWx1ZScpID8gdGhpcy4kc2NvcGUuJGV2YWwodGhpcy4kYXR0cnMubmdGYWxzZVZhbHVlKSA6IGZhbHNlXG5cbiAgICBjb25zdCB2YWx1ZSA9IGlzQ2hlY2tlZCA/IGZhbHNlVmFsIDogdHJ1ZVZhbFxuICAgIHRoaXMuJG5nTW9kZWwuJHNldFZpZXdWYWx1ZSh2YWx1ZSlcbiAgICB0aGlzLiRuZ01vZGVsLiRyZW5kZXIoKVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNoZWNrYm94XG4gKiBAcmVzdHJpY3QgQVxuICogQGVsZW1lbnQgaW5wdXRcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBjaGVja2JveCBpbXBsZW1lbnRhdGlvbi5cbiAqIEBwYXJhbSB7ZW1wdHkgfCBlbnVtOlttaW51c119IHZpdmFVaUNoZWNrYm94IENoYW5nZSBjaGVja2JveCdzIHRpY2suXG4gKiBAcGFyYW0ge2VudW06W2NoZWNrYm94XX0gdHlwZSBIVE1MJ3MgaW5wdXQgdHlwZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3ggbmctbW9kZWw9XCJkZWZhdWx0Q2hlY2tib3hcIiBpZD1cImRlZmF1bHQtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVmYXVsdC1jaGVja2JveFwiPkRlZmF1bHQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZpdmEtdWktY2hlY2tib3g9XCJtaW51c1wiIG5nLW1vZGVsPVwibWludXNDaGVja2JveFwiIGlkPVwibWludXMtY2hlY2tib3hcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibWludXMtY2hlY2tib3hcIj5NaW51czwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgbGFiZWwsIC5saXZlLWV4YW1wbGUgaW5wdXQgKyAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5kaXJlY3RpdmUoJ3ZpdmFVaUNoZWNrYm94JywgWyckY29tcGlsZScsICgkY29tcGlsZSkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJG5nTW9kZWwpID0+IHtcbiAgICAgIGNvbnN0ICRpbm5lclNjb3BlID0gJHNjb3BlLiRuZXcodHJ1ZSlcblxuICAgICAgY29uc3QgJHVpQ2hlY2tib3ggPSAkaW5uZXJTY29wZS4kdWlDaGVja2JveCA9IHt9XG4gICAgICAkdWlDaGVja2JveC5jbGFzc1ByZWZpeCA9ICd2aXZhLXVpLWNoZWNrYm94J1xuXG4gICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY29tcGlsZSh0ZW1wbGF0ZSkoJGlubmVyU2NvcGUpXG4gICAgICBjb25zdCBoYW5kbGVyID0gbmV3IENoZWNrYm94SGFuZGxlcigkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMsICRuZ01vZGVsLCAkdWlDaGVja2JveClcblxuICAgICAgJGVsZW1lbnQuYWZ0ZXIoJHRlbXBsYXRlKVxuXG4gICAgICAkYXR0cnMuJG9ic2VydmUoJ3ZpdmFVaUNoZWNrYm94JywgKHZhbCkgPT4ge1xuICAgICAgICAkdWlDaGVja2JveC5oYXNNaW51c0ljb24gPSB2YWwgPT09ICdtaW51cydcbiAgICAgIH0pXG5cbiAgICAgICR0ZW1wbGF0ZS5iaW5kKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGhhbmRsZXIub25DbGljaygpXG4gICAgICAgIGNvbnN0IG5nQ2xpY2sgPSAkYXR0cnMubmdDbGlja1xuXG4gICAgICAgIGlmIChuZ0NsaWNrKSB7XG4gICAgICAgICAgJHNjb3BlLiRldmVudCA9IGVcbiAgICAgICAgICAkc2NvcGUuJGV2YWwobmdDbGljaylcbiAgICAgICAgICBkZWxldGUgJHNjb3BlLiRldmVudFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufV0pXG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1XSxcblx0YW50aXF1ZXdoaXRlOiBbMjUwLCAyMzUsIDIxNV0sXG5cdGFxdWE6IFswLCAyNTUsIDI1NV0sXG5cdGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyXSxcblx0YXp1cmU6IFsyNDAsIDI1NSwgMjU1XSxcblx0YmVpZ2U6IFsyNDUsIDI0NSwgMjIwXSxcblx0YmlzcXVlOiBbMjU1LCAyMjgsIDE5Nl0sXG5cdGJsYWNrOiBbMCwgMCwgMF0sXG5cdGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNV0sXG5cdGJsdWU6IFswLCAwLCAyNTVdLFxuXHRibHVldmlvbGV0OiBbMTM4LCA0MywgMjI2XSxcblx0YnJvd246IFsxNjUsIDQyLCA0Ml0sXG5cdGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzVdLFxuXHRjYWRldGJsdWU6IFs5NSwgMTU4LCAxNjBdLFxuXHRjaGFydHJldXNlOiBbMTI3LCAyNTUsIDBdLFxuXHRjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzBdLFxuXHRjb3JhbDogWzI1NSwgMTI3LCA4MF0sXG5cdGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzN10sXG5cdGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMF0sXG5cdGNyaW1zb246IFsyMjAsIDIwLCA2MF0sXG5cdGN5YW46IFswLCAyNTUsIDI1NV0sXG5cdGRhcmtibHVlOiBbMCwgMCwgMTM5XSxcblx0ZGFya2N5YW46IFswLCAxMzksIDEzOV0sXG5cdGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTFdLFxuXHRkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJrZ3JlZW46IFswLCAxMDAsIDBdLFxuXHRkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJra2hha2k6IFsxODksIDE4MywgMTA3XSxcblx0ZGFya21hZ2VudGE6IFsxMzksIDAsIDEzOV0sXG5cdGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDddLFxuXHRkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDBdLFxuXHRkYXJrb3JjaGlkOiBbMTUzLCA1MCwgMjA0XSxcblx0ZGFya3JlZDogWzEzOSwgMCwgMF0sXG5cdGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyXSxcblx0ZGFya3NlYWdyZWVuOiBbMTQzLCAxODgsIDE0M10sXG5cdGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOV0sXG5cdGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3NsYXRlZ3JleTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDldLFxuXHRkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTFdLFxuXHRkZWVwcGluazogWzI1NSwgMjAsIDE0N10sXG5cdGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTVdLFxuXHRkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRpbWdyZXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NV0sXG5cdGZpcmVicmljazogWzE3OCwgMzQsIDM0XSxcblx0ZmxvcmFsd2hpdGU6IFsyNTUsIDI1MCwgMjQwXSxcblx0Zm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNF0sXG5cdGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NV0sXG5cdGdhaW5zYm9ybzogWzIyMCwgMjIwLCAyMjBdLFxuXHRnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NV0sXG5cdGdvbGQ6IFsyNTUsIDIxNSwgMF0sXG5cdGdvbGRlbnJvZDogWzIxOCwgMTY1LCAzMl0sXG5cdGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0Z3JlZW46IFswLCAxMjgsIDBdLFxuXHRncmVlbnllbGxvdzogWzE3MywgMjU1LCA0N10sXG5cdGdyZXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0aG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwXSxcblx0aG90cGluazogWzI1NSwgMTA1LCAxODBdLFxuXHRpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5Ml0sXG5cdGluZGlnbzogWzc1LCAwLCAxMzBdLFxuXHRpdm9yeTogWzI1NSwgMjU1LCAyNDBdLFxuXHRraGFraTogWzI0MCwgMjMwLCAxNDBdLFxuXHRsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTBdLFxuXHRsYXZlbmRlcmJsdXNoOiBbMjU1LCAyNDAsIDI0NV0sXG5cdGxhd25ncmVlbjogWzEyNCwgMjUyLCAwXSxcblx0bGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNV0sXG5cdGxpZ2h0Ymx1ZTogWzE3MywgMjE2LCAyMzBdLFxuXHRsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOF0sXG5cdGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTVdLFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwgMjUwLCAyMTBdLFxuXHRsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDRdLFxuXHRsaWdodGdyZXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5M10sXG5cdGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMl0sXG5cdGxpZ2h0c2VhZ3JlZW46IFszMiwgMTc4LCAxNzBdLFxuXHRsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwXSxcblx0bGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzbGF0ZWdyZXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyXSxcblx0bGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0XSxcblx0bGltZTogWzAsIDI1NSwgMF0sXG5cdGxpbWVncmVlbjogWzUwLCAyMDUsIDUwXSxcblx0bGluZW46IFsyNTAsIDI0MCwgMjMwXSxcblx0bWFnZW50YTogWzI1NSwgMCwgMjU1XSxcblx0bWFyb29uOiBbMTI4LCAwLCAwXSxcblx0bWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzBdLFxuXHRtZWRpdW1ibHVlOiBbMCwgMCwgMjA1XSxcblx0bWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExXSxcblx0bWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOV0sXG5cdG1lZGl1bXNlYWdyZWVuOiBbNjAsIDE3OSwgMTEzXSxcblx0bWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOF0sXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTRdLFxuXHRtZWRpdW10dXJxdW9pc2U6IFs3MiwgMjA5LCAyMDRdLFxuXHRtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzNdLFxuXHRtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMl0sXG5cdG1pbnRjcmVhbTogWzI0NSwgMjU1LCAyNTBdLFxuXHRtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1XSxcblx0bW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxXSxcblx0bmF2YWpvd2hpdGU6IFsyNTUsIDIyMiwgMTczXSxcblx0bmF2eTogWzAsIDAsIDEyOF0sXG5cdG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwXSxcblx0b2xpdmU6IFsxMjgsIDEyOCwgMF0sXG5cdG9saXZlZHJhYjogWzEwNywgMTQyLCAzNV0sXG5cdG9yYW5nZTogWzI1NSwgMTY1LCAwXSxcblx0b3JhbmdlcmVkOiBbMjU1LCA2OSwgMF0sXG5cdG9yY2hpZDogWzIxOCwgMTEyLCAyMTRdLFxuXHRwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MF0sXG5cdHBhbGVncmVlbjogWzE1MiwgMjUxLCAxNTJdLFxuXHRwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOF0sXG5cdHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3XSxcblx0cGFwYXlhd2hpcDogWzI1NSwgMjM5LCAyMTNdLFxuXHRwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1XSxcblx0cGVydTogWzIwNSwgMTMzLCA2M10sXG5cdHBpbms6IFsyNTUsIDE5MiwgMjAzXSxcblx0cGx1bTogWzIyMSwgMTYwLCAyMjFdLFxuXHRwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMF0sXG5cdHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcblx0cmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1M10sXG5cdHJlZDogWzI1NSwgMCwgMF0sXG5cdHJvc3licm93bjogWzE4OCwgMTQzLCAxNDNdLFxuXHRyb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjVdLFxuXHRzYWRkbGVicm93bjogWzEzOSwgNjksIDE5XSxcblx0c2FsbW9uOiBbMjUwLCAxMjgsIDExNF0sXG5cdHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTZdLFxuXHRzZWFncmVlbjogWzQ2LCAxMzksIDg3XSxcblx0c2Vhc2hlbGw6IFsyNTUsIDI0NSwgMjM4XSxcblx0c2llbm5hOiBbMTYwLCA4MiwgNDVdLFxuXHRzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcblx0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyMzVdLFxuXHRzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDVdLFxuXHRzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c2xhdGVncmV5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNub3c6IFsyNTUsIDI1MCwgMjUwXSxcblx0c3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyN10sXG5cdHN0ZWVsYmx1ZTogWzcwLCAxMzAsIDE4MF0sXG5cdHRhbjogWzIxMCwgMTgwLCAxNDBdLFxuXHR0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuXHR0aGlzdGxlOiBbMjE2LCAxOTEsIDIxNl0sXG5cdHRvbWF0bzogWzI1NSwgOTksIDcxXSxcblx0dHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4XSxcblx0dmlvbGV0OiBbMjM4LCAxMzAsIDIzOF0sXG5cdHdoZWF0OiBbMjQ1LCAyMjIsIDE3OV0sXG5cdHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXG5cdHdoaXRlc21va2U6IFsyNDUsIDI0NSwgMjQ1XSxcblx0eWVsbG93OiBbMjU1LCAyNTUsIDBdLFxuXHR5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MF1cbn07XG5cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCcuL2Nzcy1rZXl3b3JkcycpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XS5qb2luKCldID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDN9LFxuXHRoc3Y6IHtjaGFubmVsczogM30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzfSxcblx0Y215azoge2NoYW5uZWxzOiA0fSxcblx0eHl6OiB7Y2hhbm5lbHM6IDN9LFxuXHRsYWI6IHtjaGFubmVsczogM30sXG5cdGxjaDoge2NoYW5uZWxzOiAzfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDF9LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzfSxcblx0YXBwbGU6IHtjaGFubmVsczogM31cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIHByb3BlcnR5XG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciB2O1xuXG5cdGlmIChtYXggPT09IDApIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gKGRlbHRhIC8gbWF4ICogMTAwMCkgLyAxMDtcblx0fVxuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0diA9ICgobWF4IC8gMjU1KSAqIDEwMDApIC8gMTA7XG5cblx0cmV0dXJuIFtoLCBzLCB2XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZUtleXdvcmRzW3JnYi5qb2luKCldO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQobWF0Y2hbMF0sIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbi8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoJ2NvbG9yLXN0cmluZycpO1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAob2JqKSB7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqKTtcblx0fVxuXG5cdHRoaXMudmFsdWVzID0ge1xuXHRcdHJnYjogWzAsIDAsIDBdLFxuXHRcdGhzbDogWzAsIDAsIDBdLFxuXHRcdGhzdjogWzAsIDAsIDBdLFxuXHRcdGh3YjogWzAsIDAsIDBdLFxuXHRcdGNteWs6IFswLCAwLCAwLCAwXSxcblx0XHRhbHBoYTogMVxuXHR9O1xuXG5cdC8vIHBhcnNlIENvbG9yKCkgYXJndW1lbnRcblx0dmFyIHZhbHM7XG5cdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhbHMgPSBzdHJpbmcuZ2V0UmdiYShvYmopO1xuXHRcdGlmICh2YWxzKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEhzbGEob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRId2Iob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicgKyBvYmogKyAnXCInKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHR2YWxzID0gb2JqO1xuXHRcdGlmICh2YWxzLnIgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnJlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmwgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmxpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLnYgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc3YnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMud2hpdGVuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMuYyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMuY3lhbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnY215aycsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHJnYjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdyZ2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc2w6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHNsJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHN2OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzdicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGh3YjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdod2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRjbXlrOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2NteWsnLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHJnYkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLnJnYjtcblx0fSxcblx0aHNsQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHNsO1xuXHR9LFxuXHRoc3ZBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc3Y7XG5cdH0sXG5cdGh3YkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yjtcblx0fSxcblx0Y215a0FycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmNteWs7XG5cdH0sXG5cdHJnYmFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0cmV0dXJuIHJnYi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGhzbGFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBoc2wgPSB0aGlzLnZhbHVlcy5oc2w7XG5cdFx0cmV0dXJuIGhzbC5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHZhbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMCwgdmFsKTtcblx0fSxcblx0Z3JlZW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMiwgdmFsKTtcblx0fSxcblx0aHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0dmFsICU9IDM2MDtcblx0XHRcdHZhbCA9IHZhbCA8IDAgPyAzNjAgKyB2YWwgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDAsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAxLCB2YWwpO1xuXHR9LFxuXHRsaWdodG5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAyLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9udjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDEsIHZhbCk7XG5cdH0sXG5cdHdoaXRlbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsYWNrbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDIsIHZhbCk7XG5cdH0sXG5cdHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMiwgdmFsKTtcblx0fSxcblx0Y3lhbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAwLCB2YWwpO1xuXHR9LFxuXHRtYWdlbnRhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDEsIHZhbCk7XG5cdH0sXG5cdHllbGxvdzogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAyLCB2YWwpO1xuXHR9LFxuXHRibGFjazogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAzLCB2YWwpO1xuXHR9LFxuXG5cdGhleFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYik7XG5cdH0sXG5cdHJnYlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRyZ2JhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnZhbHVlcy5yZ2JbMF0gPDwgMTYpIHwgKHRoaXMudmFsdWVzLnJnYlsxXSA8PCA4KSB8IHRoaXMudmFsdWVzLnJnYlsyXTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRkYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGxpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmRhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IDI1NSAtIHRoaXMudmFsdWVzLnJnYltpXTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHJnYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdICs9IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdIC09IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gKz0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdIC09IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzFdICs9IHRoaXMudmFsdWVzLmh3YlsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsyXSArPSB0aGlzLnZhbHVlcy5od2JbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRncmV5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCBbdmFsLCB2YWwsIHZhbF0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsZWFyZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhIC0gKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSArICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBodWUgPSB0aGlzLnZhbHVlcy5oc2xbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzBdID0gaHVlO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBQb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdCAqL1xuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHR2YXIgY29sb3IxID0gdGhpcztcblx0XHR2YXIgY29sb3IyID0gbWl4aW5Db2xvcjtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKClcblx0XHRcdClcblx0XHRcdC5hbHBoYShjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJnYigpO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNvbCA9IG5ldyBDb2xvcigpO1xuXHRcdGNvbC52YWx1ZXMgPSBjbG9uZSh0aGlzLnZhbHVlcyk7XG5cdFx0cmV0dXJuIGNvbDtcblx0fVxufTtcblxuQ29sb3IucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSkge1xuXHR2YXIgdmFscyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHR2YWxzW3NwYWNlLmNoYXJBdChpKV0gPSB0aGlzLnZhbHVlc1tzcGFjZV1baV07XG5cdH1cblxuXHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHR2YWxzLmEgPSB0aGlzLnZhbHVlcy5hbHBoYTtcblx0fVxuXG5cdC8vIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAwLjR9XG5cdHJldHVybiB2YWxzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSwgdmFscykge1xuXHR2YXIgc3BhY2VzID0ge1xuXHRcdHJnYjogWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddLFxuXHRcdGhzbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnXSxcblx0XHRoc3Y6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAndmFsdWUnXSxcblx0XHRod2I6IFsnaHVlJywgJ3doaXRlbmVzcycsICdibGFja25lc3MnXSxcblx0XHRjbXlrOiBbJ2N5YW4nLCAnbWFnZW50YScsICd5ZWxsb3cnLCAnYmxhY2snXVxuXHR9O1xuXG5cdHZhciBtYXhlcyA9IHtcblx0XHRyZ2I6IFsyNTUsIDI1NSwgMjU1XSxcblx0XHRoc2w6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRoc3Y6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRod2I6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRjbXlrOiBbMTAwLCAxMDAsIDEwMCwgMTAwXVxuXHR9O1xuXG5cdHZhciBpO1xuXHR2YXIgYWxwaGEgPSAxO1xuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRhbHBoYSA9IHZhbHM7XG5cdH0gZWxzZSBpZiAodmFscy5sZW5ndGgpIHtcblx0XHQvLyBbMTAsIDEwLCAxMF1cblx0XHR0aGlzLnZhbHVlc1tzcGFjZV0gPSB2YWxzLnNsaWNlKDAsIHNwYWNlLmxlbmd0aCk7XG5cdFx0YWxwaGEgPSB2YWxzW3NwYWNlLmxlbmd0aF07XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZS5jaGFyQXQoMCldICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cjogMTAsIGc6IDEwLCBiOiAxMH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbc3BhY2UuY2hhckF0KGkpXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlc1tzcGFjZV1bMF1dICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cmVkOiAxMCwgZ3JlZW46IDEwLCBibHVlOiAxMH1cblx0XHR2YXIgY2hhbnMgPSBzcGFjZXNbc3BhY2VdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW2NoYW5zW2ldXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYWxwaGE7XG5cdH1cblxuXHR0aGlzLnZhbHVlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChhbHBoYSA9PT0gdW5kZWZpbmVkID8gdGhpcy52YWx1ZXMuYWxwaGEgOiBhbHBoYSkpKTtcblxuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgY2FwcGVkO1xuXG5cdC8vIGNhcCB2YWx1ZXMgb2YgdGhlIHNwYWNlIHByaW9yIGNvbnZlcnRpbmcgYWxsIHZhbHVlc1xuXHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzcGFjZV1baV0sIHRoaXMudmFsdWVzW3NwYWNlXVtpXSkpO1xuXHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0fVxuXG5cdC8vIGNvbnZlcnQgdG8gYWxsIHRoZSBvdGhlciBjb2xvciBzcGFjZXNcblx0Zm9yICh2YXIgc25hbWUgaW4gc3BhY2VzKSB7XG5cdFx0aWYgKHNuYW1lICE9PSBzcGFjZSkge1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdID0gY29udmVydFtzcGFjZV1bc25hbWVdKHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2FwIHZhbHVlc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBzbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc25hbWVdW2ldLCB0aGlzLnZhbHVlc1tzbmFtZV1baV0pKTtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRTcGFjZSA9IGZ1bmN0aW9uIChzcGFjZSwgYXJncykge1xuXHR2YXIgdmFscyA9IGFyZ3NbMF07XG5cblx0aWYgKHZhbHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJnYigpXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWVzKHNwYWNlKTtcblx0fVxuXG5cdC8vIGNvbG9yLnJnYigxMCwgMTAsIDEwKVxuXHRpZiAodHlwZW9mIHZhbHMgPT09ICdudW1iZXInKSB7XG5cdFx0dmFscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuXHR9XG5cblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHZhbHMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24gKHNwYWNlLCBpbmRleCwgdmFsKSB7XG5cdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJlZCgpXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF07XG5cdH0gZWxzZSBpZiAodmFsID09PSB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdKSB7XG5cdFx0Ly8gY29sb3IucmVkKGNvbG9yLnJlZCgpKVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gY29sb3IucmVkKDEwMClcblx0dGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSA9IHZhbDtcblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IGNvbG9yIGZyb20gJ2NvbG9yJ1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLnNjc3MnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb21wbGV0b21ldHJvLmh0bWwnXG5cbmxldCBzdHlsZUFwcGxpZWRcblxuY2xhc3MgQ29tcGxldG9tZXRyb0hhbmRsZXIge1xuICBzdGF0aWMgc3RhZ2VzID0gW1xuICAgIHsgbWF4UGVyY2VudDogNDksIHRleHQ6ICdJbmNvbXBsZXRvJywgY29sb3I6ICcjZTk0YjQ2JyB9LFxuICAgIHsgbWF4UGVyY2VudDogNjksIHRleHQ6ICdGYWx0YSBpbmZvcm1hw6fDo28nLCBjb2xvcjogJyNmZjZkMDAnIH0sXG4gICAgeyBtYXhQZXJjZW50OiA4OSwgdGV4dDogJ1BvZGUgbWVsaG9yYXInLCBjb2xvcjogJyNmZmFmMjcnIH0sXG4gICAgeyBtYXhQZXJjZW50OiA5OSwgdGV4dDogJ1F1YXNlIGNvbXBsZXRvJywgY29sb3I6ICcjZmZjZDIwJyB9LFxuICAgIHsgbWF4UGVyY2VudDogMTAwLCB0ZXh0OiAnQ29tcGxldG8nLCBjb2xvcjogJyMyN2NkNmInIH1cbiAgXVxuXG4gIGNvbnN0cnVjdG9yICgkY3RybCwgJHNjb3BlLCAkZWxlbWVudCwgJHByb2dyZXNzQ2lyY2xlKSB7XG4gICAgdGhpcy4kY3RybCA9ICRjdHJsXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGVcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnRcbiAgICB0aGlzLiRwcm9ncmVzc0NpcmNsZSA9ICRwcm9ncmVzc0NpcmNsZVxuICB9XG5cbiAgc2V0UHJvZ3Jlc3MgKHByb2dyZXNzKSB7XG4gICAgY29uc3Qgc3RhZ2VzID0gQ29tcGxldG9tZXRyb0hhbmRsZXIuc3RhZ2VzXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGVnID0gcHJvZ3Jlc3MgKiAxLjhcbiAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzW2ldXG4gICAgICBjb25zdCBuZXh0ID0gc3RhZ2VzW2kgKyAxXVxuICAgICAgbGV0IGJnQ29sb3JcblxuICAgICAgaWYgKG5leHQgJiYgcHJvZ3Jlc3MgPiBzdGFnZS5tYXhQZXJjZW50KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGJnQ29sb3IgPSBuZXh0ID8gY29sb3IobmV4dC5jb2xvcikubWl4KGNvbG9yKHN0YWdlLmNvbG9yKSwgcHJvZ3Jlc3MgLyAxMDApLmhleFN0cmluZygpIDogc3RhZ2UuY29sb3JcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQ2lyY2xlLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yLFxuICAgICAgICAgICd0cmFuc2Zvcm0nOiBgcm90YXRlKCR7ZGVnfWRlZylgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kcG9pbnRlci5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoJHtkZWcgLSA5MH1kZWcpYClcbiAgICAgIH0pXG5cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaUNvbXBsZXRvbWV0cm9cbiAqIEByZXN0cmljdCBFXG4gKiBAZGVzY3JpcHRpb24gVUkgS2l0J3MgY29tcGxldMO0bWV0cm8gaW1wbGVtZW50YXRpb24uXG4gKiBAZXhhbXBsZVxuICAgIDxleGFtcGxlIG1vZHVsZT1cIm5nVml2YVVpXCI+XG4gICAgICA8ZmlsZSBuYW1lPVwiYXBwLmh0bWxcIj5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjBcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjI1XCI+PC92aXZhLXVpLWNvbXBsZXRvbWV0cm8+XG4gICAgICAgIDx2aXZhLXVpLWNvbXBsZXRvbWV0cm8gcHJvZ3Jlc3M9XCI1MFwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgICA8dml2YS11aS1jb21wbGV0b21ldHJvIHByb2dyZXNzPVwiNzVcIj48L3ZpdmEtdWktY29tcGxldG9tZXRybz5cbiAgICAgICAgPHZpdmEtdWktY29tcGxldG9tZXRybyBwcm9ncmVzcz1cIjEwMFwiPjwvdml2YS11aS1jb21wbGV0b21ldHJvPlxuICAgICAgPC9maWxlPlxuICAgIDwvZXhhbXBsZT5cbiAqL1xubWFpbk1vZHVsZS5jb21wb25lbnQoJ3ZpdmFVaUNvbXBsZXRvbWV0cm8nLCB7XG4gIHRlbXBsYXRlLFxuICBiaW5kaW5nczoge1xuICAgIHByb2dyZXNzOiAnPSdcbiAgfSxcbiAgY29udHJvbGxlckFzOiAnJHVpQ29tcGxldG9tZXRybycsXG4gIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRlbGVtZW50JywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IENvbXBsZXRvbWV0cm9IYW5kbGVyKHRoaXMsICRzY29wZSwgJGVsZW1lbnQpXG5cbiAgICBpZiAoIXN0eWxlQXBwbGllZCkge1xuICAgICAgYXBwbHlTdHlsZShzdHlsZSlcbiAgICAgIHN0eWxlQXBwbGllZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLiRvbkNoYW5nZXMgPSAoY2hhbmdlc09iaikgPT4ge1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBjaGFuZ2VzT2JqLnByb2dyZXNzXG5cbiAgICAgIGlmIChwcm9ncmVzcykge1xuICAgICAgICBoYW5kbGVyLnNldFByb2dyZXNzKHByb2dyZXNzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJHBvc3RMaW5rID0gKCkgPT4ge1xuICAgICAgaGFuZGxlci4kcHJvZ3Jlc3NDaXJjbGUgPSBhbmd1bGFyLmVsZW1lbnQoXG4gICAgICAgICRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoJy52aXZhLXVpLWNvbXBsZXRvbWV0cm9fX2FyY2gtcHJvZ3Jlc3MnKVxuICAgICAgKVxuXG4gICAgICBoYW5kbGVyLiRwb2ludGVyID0gYW5ndWxhci5lbGVtZW50KFxuICAgICAgICAkZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcudml2YS11aS1jb21wbGV0b21ldHJvX19wb2ludGVyJylcbiAgICAgIClcblxuICAgICAgaGFuZGxlci5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH1cbiAgfV1cbn0pXG4iLCJpbXBvcnQgeyBhcHBseVN0eWxlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VpU3R5bGlzdC91aVN0eWxpc3QnXG5pbXBvcnQgbWFpbk1vZHVsZSBmcm9tICcuLi8uLi9tYWluLm1vZHVsZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZsYXRCdXR0b24uc2NzcydcblxuLyoqXG4gKiBAbmdkb2MgZGlyZWN0aXZlXG4gKiBAbmFtZSBuZ1ZpdmFVaS5kaXJlY3RpdmU6dml2YVVpRmxhdEJ1dHRvblxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGJ1dHRvblxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGZsYXQgYnV0dG9uIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltzbWFsbCwgbWVkaXVtLCBsYXJnZV19IFt2aXZhVWlGbGF0QnV0dG9uPW1lZGl1bV0gQnV0dG9uJ3Mgc2l6ZS5cbiAqIEBleGFtcGxlXG4gICAgPGV4YW1wbGUgbW9kdWxlPVwibmdWaXZhVWlcIj5cbiAgICAgIDxmaWxlIG5hbWU9XCJhcHAuaHRtbFwiPlxuICAgICAgICA8YnV0dG9uIHZpdmEtdWktZmxhdC1idXR0b24+RmxhdCBidXR0b248L2J1dHRvbj5cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlGbGF0QnV0dG9uJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJ1xuICB9XG59KVxuIiwiaW1wb3J0IHsgYXBwbHlTdHlsZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91aVN0eWxpc3QvdWlTdHlsaXN0J1xuaW1wb3J0IG1haW5Nb2R1bGUgZnJvbSAnLi4vLi4vbWFpbi5tb2R1bGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbnB1dC5zY3NzJ1xuXG4vKipcbiAqIEBuZ2RvYyBkaXJlY3RpdmVcbiAqIEBuYW1lIG5nVml2YVVpLmRpcmVjdGl2ZTp2aXZhVWlJbnB1dFxuICogQHJlc3RyaWN0IEFcbiAqIEBlbGVtZW50IGlucHV0XG4gKiBAcGFyYW0ge2VudW06W3RleHRdfSB0eXBlIEhUTUwncyBpbnB1dCB0eXBlLlxuICogQGRlc2NyaXB0aW9uIFVJIEtpdCdzIGlucHV0IGltcGxlbWVudGF0aW9uLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2aXZhLXVpLWlucHV0IHBsYWNlaG9sZGVyPVwiSW5wdXQgdGV4dFwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdml2YS11aS1pbnB1dD1cImVycm9yXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCB0ZXh0IHdpdGggZXJyb3JcIj5cbiAgICAgICAgICA8c3BhbiB2aXZhLXVpLWlucHV0LXN0YXR1cz5FcnJvciBtZXNzYWdlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmlsZT5cblxuICAgICAgPGZpbGUgbmFtZT1cInN0eWxlLmNzc1wiPlxuICAgICAgICAubGl2ZS1leGFtcGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpdmUtZXhhbXBsZSA+IHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXZlLWV4YW1wbGUgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvZmlsZT5cbiAgICA8L2V4YW1wbGU+XG4gKi9cbm1haW5Nb2R1bGUuZGlyZWN0aXZlKCd2aXZhVWlJbnB1dCcsICgpID0+IHtcbiAgYXBwbHlTdHlsZShzdHlsZSlcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQSdcbiAgfVxufSlcbiIsImltcG9ydCB7IGFwcGx5U3R5bGUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdWlTdHlsaXN0L3VpU3R5bGlzdCdcbmltcG9ydCBtYWluTW9kdWxlIGZyb20gJy4uLy4uL21haW4ubW9kdWxlJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3RhdHVzVGFnLnNjc3MnXG5cbi8qKlxuICogQG5nZG9jIGRpcmVjdGl2ZVxuICogQG5hbWUgbmdWaXZhVWkuZGlyZWN0aXZlOnZpdmFVaVN0YXR1c1RhZ1xuICogQHJlc3RyaWN0IEVcbiAqIEBkZXNjcmlwdGlvbiBVSSBLaXQncyBzdGF0dXMgdGFnIGltcGxlbWVudGF0aW9uLlxuICogQHBhcmFtIHtlbnVtOltkZWZhdWx0LCBzdWNjZXNzXX0gW3N0YXR1cz1kZWZhdWx0XSBUYWcgc3RhdHVzLlxuICogQGV4YW1wbGVcbiAgICA8ZXhhbXBsZSBtb2R1bGU9XCJuZ1ZpdmFVaVwiPlxuICAgICAgPGZpbGUgbmFtZT1cImFwcC5odG1sXCI+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgY2xhc3M9XCJsaXZlLWV4YW1wbGVcIj5EZWZhdWx0PC92aXZhLXVpLXN0YXR1cy10YWc+XG4gICAgICAgIDx2aXZhLXVpLXN0YXR1cy10YWcgc3RhdHVzPVwic3VjY2Vzc1wiIGNsYXNzPVwibGl2ZS1leGFtcGxlXCI+U3VjY2Vzczwvdml2YS11aS1zdGF0dXMtdGFnPlxuICAgICAgPC9maWxlPlxuXG4gICAgICA8ZmlsZSBuYW1lPVwic3R5bGUuY3NzXCI+XG4gICAgICAgIC5saXZlLWV4YW1wbGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICA8L2ZpbGU+XG4gICAgPC9leGFtcGxlPlxuICovXG5tYWluTW9kdWxlLmRpcmVjdGl2ZSgndml2YVVpU3RhdHVzVGFnJywgKCkgPT4ge1xuICBhcHBseVN0eWxlKHN0eWxlKVxuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJ1xuICB9XG59KVxuIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJzdHlsZSIsImNvbW1vbmpzSGVscGVycy5pbnRlcm9wRGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtZQUNMLGtCQUFDLEdBQUQsRUFBTSxPQUFOLEVBQWtCO1FBQ3BCLFlBQVksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFsQjtjQUNVLE9BQU8sT0FBUCxLQUFtQixXQUFuQixHQUFpQyxFQUFqQyxHQUFzQyxPQUFoRDs7Y0FFVSxDQUFWLElBQWUsVUFBVSxDQUFWLEVBQWEsTUFBYixDQUFvQixDQUFwQixFQUF1QixRQUFRLFVBQVIsR0FBcUIsYUFBckIsR0FBcUMsYUFBNUQsTUFBK0UsVUFBVSxDQUFWLEVBQWEsS0FBYixDQUFtQixDQUFuQixDQUE5Rjs7V0FFTyxVQUFVLENBQVYsSUFBZSxVQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FDbEIsVUFBQyxLQUFELEVBQVc7YUFDRixNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLFdBQWhCLEtBQWdDLE1BQU0sS0FBTixDQUFZLENBQVosQ0FBdkM7S0FGZ0IsRUFJbEIsSUFK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QVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzFCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3BCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3pCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3pCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3JCLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQy9CLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3RCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ25CLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzdCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3RCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQzFCLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzdCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3pCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzFCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3BCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzdCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzVCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzNCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzNCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3hCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzFCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ25CLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3pCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ2xCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzNCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3BCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3hCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzdCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLG9CQUFvQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDckMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDakIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDeEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDdEIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDbkIsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNqQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztDQUN2QixZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztDQUM1QixZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM3QixjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUM5QixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNoQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2hDLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQy9CLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ2pCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3BCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3pCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3JCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ3ZCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3BCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzdCLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ2hCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzFCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQ3ZCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3JCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3BCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ25CLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQ3JCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3JCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUN0QixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7O0NBRU4sSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO0VBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDTixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQztFQUNwQixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtFQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDeEIsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDckIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDO0VBQ3hCOztDQUVELENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7O0NBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtFQUNWLENBQUMsSUFBSSxHQUFHLENBQUM7RUFDVDs7Q0FFRCxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQzs7Q0FFcEIsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO0VBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDTixNQUFNLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtFQUNwQixDQUFDLEdBQUcsS0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztFQUN4QixNQUFNO0VBQ04sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQzVCOztDQUVELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDN0IsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtDQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVCLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDdEIsSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDOztDQUVOLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtFQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDTixNQUFNO0VBQ04sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0VBQzlCOztDQUVELElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ04sTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7RUFDcEIsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7RUFDckIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDO0VBQ3hCLE1BQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO0VBQ3JCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FB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QUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsT0FBTyxFQUFFO0NBQ3hDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzVCLENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7OztDQUdyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQ3JFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDckUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQzs7Q0FFckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7Q0FDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7Q0FDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7O0NBRW5ELE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ25DLENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDaEMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDOztDQUVOLENBQUMsSUFBSSxNQUFNLENBQUM7Q0FDWixDQUFDLElBQUksR0FBRyxDQUFDO0NBQ1QsQ0FBQyxJQUFJLE9BQU8sQ0FBQzs7Q0FFYixDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUNqRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUNqRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxD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LEdBQUcsQ0FBQztDQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Q0FFM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdEMsQ0FBQyxJQUFJLEdBQUcsQ0FBQzs7Q0FFVCxRQUFRLEVBQUU7RUFDVCxLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQixLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQixLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQixLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQixLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQixLQUFLLENBQUM7R0FDTCxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNsQjtDQUNELENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzdCLElBQUksSUFBSSxDQUFDO0NBQ1QsSUFBSSxFQUFFLENBQUM7Q0FDUCxJQUFJLENBQUMsQ0FBQzs7Q0FFTixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNoQixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztDQUN0QixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUNkLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Q0FDcEMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDYixDQUFDLElBQUksQ0FBQyxDQUFDOztDQUVQLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDOUIsQ0FBQzs7O0FBR0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3RCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDdEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUNwQixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQzs7O0NBR04sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0VBQ2QsRUFBRSxJQUFJLEtBQUssQ0FBQztFQUNaLEVBQUUsSUFBSSxLQUFLLENBQUM7RUFDWjs7Q0FFRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDdEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDWCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0NBRWQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFO0VBQ3JCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1Y7O0NBRUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztDQUV0QixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7Q0FDTixRQUFRLENBQUM7RUFDUixRQUFRO0VBQ1IsS0FBSyxDQUFDLENBQUM7RUFDUCxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0VBQ3BDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07RUFDcEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTTtFQUNwQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO0VBQ3BDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07RUFDcEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTTtFQUNwQzs7Q0FFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUNuQyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsSUFBSSxFQUFFO0NBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDdEIsSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksQ0FBQyxDQUFDOztDQUVOLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNyQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENB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R0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDZixJQUFJLEVBQUUsQ0FBQztDQUNQLElBQUksQ0FBQyxDQUFDO0NBQ04sSUFBSSxDQUFDLENBQUM7O0NBRU4sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDOztDQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7RUFDVixDQUFDLElBQUksR0FBRyxDQUFDO0VBQ1Q7O0NBRUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0NBRTdCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ2pCLENBQUM7O0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUU7Q0FDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2YsSUFBSSxDQUFDLENBQUM7Q0FDTixJQUFJLENBQUMsQ0FBQztDQUNOLElBQUksRUFBRSxDQUFDOztDQUVQLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0NBQzNCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNyQixDQUFDLEdB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LENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztDQUM5QyxDQUFDOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFO0NBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Q0FFVixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7RUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN0Qjs7Q0FFRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ2xDLENBQUM7O0FBRUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxLQUFLLEVBQUU7Q0FDcEMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxD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Q3RCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzdCLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQy9CLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzlCLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzdCLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzdCLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0NBQzFCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzFCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzlCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzVCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzdCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3JCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzNCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3BCLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0NBQzdCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3ZCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzFCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0NBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0NBQ3RCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3hCLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzNCLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2hDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQzFCLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQy9CLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzdCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQzVCLHNCQUFzQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDL0IsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNqQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2pDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDakMsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDbkIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDMUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDeEIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDeEIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDckIsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNuQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztDQUN6QixjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztDQUM5QixjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUMvQixnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2hDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDbEMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUNsQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2pDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDakMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDN0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDOUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDbkIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDdEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDM0IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDdkIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDekIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEMsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDaEMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDdEIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDN0IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Q0FDdkIsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDL0IsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDbEIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsYUFBYSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDNUIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDNUIsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Q0FDekIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDdkIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDekIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDMUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7Q0FDM0IsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdkIsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDM0IsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDdEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxF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QU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7U0FDbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDbEM7TUFDRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO09BQ3ZEO01BQ0QsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQjtRQUNJLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDckMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxFQUFFO1NBQzVCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN0QjtNQUNELEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUNQLE9BQU87T0FDVDtJQUNIOztHQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO01BQ2xDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQztHQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNmLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDUjtRQUNJO01BQ0YsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JCO0dBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNYLE9BQU8sR0FBRyxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFO0dBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUU7TUFDVixPQUFPO0lBQ1Q7R0FDRCxJQUFJLEdBQUcsR0FBRywwR0FBMEcsQ0FBQztHQUNySCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzlCLElBQUksS0FBSyxFQUFFO01BQ1IsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNyQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ3ZDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDdkMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDOUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCO0NBQ0g7O0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0dBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUU7TUFDVixPQUFPO0lBQ1Q7R0FDRCxJQUFJLEdBQUcsR0FBRyx3R0FBd0csQ0FBQztHQUNuSCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzlCLElBQUksS0FBSyxFQUFFO0lBQ1YsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9CLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUNyQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ3ZDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDdkMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDOUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCO0NBQ0g7O0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0dBQ3JCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUMzQixPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFD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QUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRDtHQUNELE9BQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSzthQUN6RCxLQUFLLEdBQUcsR0FBRyxDQUFDO0NBQ3hCOzs7O0FBSUQsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtHQUM1QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7TUFDdEIsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDO0dBQ0QsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO2NBQ2xELEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUMzRTs7QUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7RUFDcEIsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0Qzs7O0FBR0QsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7R0FDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzNDOztBQUVELFNBQVMsU0FBUyxDQUFDLEdB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T0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdEM7Q0FDRCxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkM7Q0FDRCxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkM7Q0FDRCxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkM7Q0FDRCxLQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUU7RUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDdkM7O0NBRUQsU0FBUyxFQUFFLFlBQVk7RUFDdEIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekM7Q0FDRCxTQUFTLEVBQUUsWUFBWTtFQUN0QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM1RDtDQUNELFVB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UyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sSUFBSSxDQUFDO0VBQ1o7O0NBRUQsTUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFO0VBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sSUFBSSxDQUFDO0VBQ1o7O0NBRUQsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFO0VBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sSUFBSSxDQUFDO0VBQ1o7O0NBRUQsVUFBVSxFQUFFLFVBQVUsS0FBSyxFQUFFO0VBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDLE9BQU8sSUFBSSxDQUFDO0VBQ1o7O0NBRUQsTUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFO0VBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FB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