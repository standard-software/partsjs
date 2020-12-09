"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._unique = void 0;

var _includes = require("../compare/__includes.js");

var _returnFirstArgFunc = require("../common/__returnFirstArgFunc.js");

var _unique2 = require("../array/__unique.js");

/**
 * uniqe
 */
var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnFirstArgFunc.__returnFirstArgFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === _returnFirstArgFunc.__returnFirstArgFunc) {
    if (detail === false) {
      return (0, _unique2.__unique)(array);
    }
  }

  var index = [];
  var result = [];
  var count = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var indexResult = index.indexOf(funcResult);

    if (indexResult === -1) {
      index.push(funcResult);
      result.push(v);
      count.push(1);
    } else {
      count[indexResult] += 1;
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result,
      count: count
    };
  }

  return result;
};

exports._unique = _unique;
var _default = {
  _unique: _unique
};
exports["default"] = _default;