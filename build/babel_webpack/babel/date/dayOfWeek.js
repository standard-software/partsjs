"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dayOfWeek = void 0;

var _isType = require("../type/isType.js");

var _isTypeArray = require("../type/isTypeArray.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _dayOfWeek2 = require("../date/_dayOfWeek.js");

var dayOfWeek = function dayOfWeek(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dayOfWeekNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dayOfWeek2._dayOfWeek.names.EnglishShort();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal, dayOfWeekNames')) {
    var _date = date;
    date = _date.date;
    var _date$dayOfWeekNames = _date.dayOfWeekNames;
    dayOfWeekNames = _date$dayOfWeekNames === void 0 ? _dayOfWeek2._dayOfWeek.names.EnglishShort() : _date$dayOfWeekNames;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'dayOfWeekNames, isLocal', 1)) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
    var _isLocal$dayOfWeekNam = _isLocal.dayOfWeekNames;
    dayOfWeekNames = _isLocal$dayOfWeekNam === void 0 ? _dayOfWeek2._dayOfWeek.names.EnglishShort() : _isLocal$dayOfWeekNam;
  } else if ((0, _isObjectParameter.isObjectParameter)(dayOfWeekNames, 'dayOfWeekNames')) {
    var _dayOfWeekNames = dayOfWeekNames;
    dayOfWeekNames = _dayOfWeekNames.dayOfWeekNames;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dayOfWeek args(date:".concat(date, ") is not date"));
  }

  if (!((0, _isTypeArray.isStringArray)(dayOfWeekNames) && dayOfWeekNames.length === 7)) {
    throw new TypeError("dayOfWeek args(dayOfWeekNames:".concat(dayOfWeekNames, ")") + " is not stringArray.length is 7");
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("dayOfWeek args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _dayOfWeek2._dayOfWeek)(date, isLocal, dayOfWeekNames);
};

exports.dayOfWeek = dayOfWeek;
dayOfWeek.names = _dayOfWeek2._dayOfWeek.names;
var _default = {
  dayOfWeek: dayOfWeek
};
exports["default"] = _default;