"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThisYear = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _ThisYear2 = require("./_ThisYear.js");

var ThisYear = function ThisYear() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'isLocal')) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("ThisYear args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _ThisYear2._ThisYear)(isLocal);
};

exports.ThisYear = ThisYear;
var _default = {
  ThisYear: ThisYear
};
exports["default"] = _default;