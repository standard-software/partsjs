"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._unique = void 0;

var _includes = require("../compare/__includes.js");

var _returnValueFunction = require("../common/__returnValueFunction.js");

var _unique2 = require("../array/__unique.js");

/**
 * uniqe
 */
var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnValueFunction.__returnValueFunction) {
    if (detail === false) {
      return (0, _unique2.__unique)(array);
    }
  }

  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);

    if (!(0, _includes.__includes)(index, funcResult)) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._unique = _unique;
var _default = {
  _unique: _unique
};
exports["default"] = _default;