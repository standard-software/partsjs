"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatetime = void 0;

var _type = require("../type/type.js");

var _isObjectParameter2 = require("../object/isObjectParameter.js");

var _getDatetime2 = require("./_getDatetime.js");

var getDatetime = function getDatetime(date, timezoneOffset) {
  if ((0, _isObjectParameter2._isObjectParameter)(date, 'date', 'timezoneOffset')) {
    var _date = date;
    date = _date.date;
    timezoneOffset = _date.timezoneOffset;
  } else if ((0, _isObjectParameter2._isObjectParameter)(timezoneOffset, 'timezoneOffset')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if (!(0, _type.isDate)(date)) {
    throw new TypeError("getDatetime args(date:".concat(date, ") is not date"));
  }

  if (!(0, _type.isUndefined)(timezoneOffset) && !(0, _type.isNumber)(timezoneOffset)) {
    throw new TypeError("getDatetime args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _getDatetime2._getDatetime)(date, timezoneOffset);
};

exports.getDatetime = getDatetime;