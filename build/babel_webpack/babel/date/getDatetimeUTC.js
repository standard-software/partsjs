"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetimeUTC = void 0;

var _type = require("../type/type.js");

var _isObjectParameter2 = require("../object/isObjectParameter.js");

var _getDatetimeUTC2 = require("./_getDatetimeUTC.js");

var getDatetimeUTC = function getDatetimeUTC(date) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date')) {
    var _date = date;
    date = _date.date;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getDatetimeUTC args(date:".concat(date, ") is not date"));
  }

  return (0, _getDatetimeUTC2._getDatetimeUTC)(date, null);
};

exports.getDatetimeUTC = getDatetimeUTC;