"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._group = void 0;

var _returnValueFunction = require("../common/returnValueFunction.js");

/**
 * group
 */
var _group = function _group(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var i = index.indexOf(funcResult);

    if (i === -1) {
      index.push(funcResult);
      result.push([v]);
    } else {
      result[i].push(v);
    }
  });

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._group = _group;
var _default = {
  _group: _group
};
exports["default"] = _default;