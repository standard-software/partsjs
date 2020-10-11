"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._min = exports.minDefaultFunc = void 0;

var _isType = require("../type/isType.js");

var _min2 = require("../array/__min.js");

/**
 * array.min
 */
var minDefaultFunc = function minDefaultFunc(v) {
  return v;
};

exports.minDefaultFunc = minDefaultFunc;

var _min = function _min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : minDefaultFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === minDefaultFunc && detail === false) {
    return (0, _min2.__min)(array);
  }

  var result = {
    index: -1,
    element: null,
    value: null
  };

  if (array.length === 0) {
    return detail ? result : result.value;
  }

  result.index = 0;
  result.element = array[0];
  result.value = Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (value < result.value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._min = _min;
var _default = {
  _min: _min,
  minDefaultFunc: minDefaultFunc
};
exports["default"] = _default;