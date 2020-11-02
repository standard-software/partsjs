"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SortFunc = void 0;

var _isType = require("../type/isType.js");

var _allMatchAll2 = require("../compare/allMatchAll.js");

var _SortFunc2 = require("../array/_SortFunc.js");

var SortFunc = function SortFunc(orderSettingArray) {
  if (!(0, _isType.isArray)(orderSettingArray)) {
    throw new TypeError('SortFunc args(orderSettingArray) is not array');
  }

  if (!(0, _allMatchAll2._allMatchAll)(orderSettingArray, [_isType.isArray, function (element) {
    return (0, _isType.isFunction)(element[0]) && (0, _isType.isFunction)(element[1]);
  }])) {
    throw new TypeError('SortFunc args(orderSettingArray) element[0|1] is not function ');
  }

  return (0, _SortFunc2._SortFunc)(orderSettingArray);
};

exports.SortFunc = SortFunc;
SortFunc.order = _SortFunc2._SortFunc.order;
var _default = {
  SortFunc: SortFunc
};
exports["default"] = _default;