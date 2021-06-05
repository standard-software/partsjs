"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Today = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Today2 = require("./_Today.js");

var Today = function Today() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'isLocal')) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("Today args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _Today2._Today)(isLocal);
};

exports.Today = Today;
var _default = {
  Today: Today
};
exports["default"] = _default;