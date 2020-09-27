"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__loop = void 0;

var _type = require("../type/type.js");

var _IntegerArray2 = require("../array/_IntegerArray.js");

/**
 * loop
 */
var __loop = function __loop(loopArray) {
  return function (func) {
    if (!(0, _type.isFunction)(func)) {
      throw new TypeError('loop()(func) func is not function');
    }

    for (var i = 0, l = loopArray.length; i < l; i += 1) {
      var element = loopArray[i];
      var index = i;
      var array = loopArray;
      var loopFirst = i === 0;
      var loopLast = i === loopArray.length - 1;
      var result = func(element, index, array, loopFirst, loopLast);

      if (!(0, _type.isUndefined)(result) && result["break"] === true) {
        return result;
      }
    }

    return {};
  };
};

exports.__loop = __loop;
var _default = {
  __loop: __loop
};
exports["default"] = _default;