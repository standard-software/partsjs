"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThisMonth = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _ThisMonth2 = require("./_ThisMonth.js");

var ThisMonth = function ThisMonth() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'isLocal')) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("ThisMonth args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _ThisMonth2._ThisMonth)(isLocal);
};

exports.ThisMonth = ThisMonth;
var _default = {
  ThisMonth: ThisMonth
};
exports["default"] = _default;