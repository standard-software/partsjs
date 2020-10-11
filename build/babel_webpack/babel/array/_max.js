"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._max = void 0;

var _isType = require("../type/isType.js");

var _returnValueFunction = require("../common/returnValueFunction.js");

var _max2 = require("../array/__max.js");

/**
 * array.max
 */
var _max = function _max(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnValueFunction.returnValueFunction && detail === false) {
    return (0, _max2.__max)(array);
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
  result.value = -Infinity;

  for (var i = 0, l = array.length; i < l; i += 1) {
    var value = func(array[i]);

    if (!(0, _isType.isNumber)(value)) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result.value < value) {
      result.index = i;
      result.element = array[i];
      result.value = value;
    }
  }

  return detail ? result : result.value;
};

exports._max = _max;
var _default = {
  _max: _max
};
exports["default"] = _default;