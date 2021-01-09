"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dayOfWeekJapaneseShort = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var dayOfWeekJapaneseShort = function dayOfWeekJapaneseShort(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal')) {
    var _date = date;
    date = _date.date;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, 'isLocal')) {
    var _isLocal = isLocal;
    isLocal = _isLocal.isLocal;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dayOfWeekJapaneseShort args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("dayOfWeekJapaneseShort args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, _dayOfWeek2._dayOfWeek.names.JapaneseShort());
};

exports.dayOfWeekJapaneseShort = dayOfWeekJapaneseShort;
var _default = {
  dayOfWeekJapaneseShort: dayOfWeekJapaneseShort
};
exports["default"] = _default;