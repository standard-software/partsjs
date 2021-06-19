"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimezoneOffset = void 0;

var _type = require("../type/type.js");

var _isObjectParameter2 = require("../object/isObjectParameter.js");

var _getTimezoneOffset2 = require("./_getTimezoneOffset.js");

var getTimezoneOffset = function getTimezoneOffset(date) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date')) {
    var _date = date;
    date = _date.date;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getTimezoneOffset args(date:".concat(date, ") is not date"));
  }

  return (0, _getTimezoneOffset2._getTimezoneOffset)(date);
};

exports.getTimezoneOffset = getTimezoneOffset;