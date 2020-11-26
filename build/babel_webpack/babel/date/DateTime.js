"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DateTime = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _number = require("../number/number.js");

var _DateTime2 = require("./_DateTime.js");

/* eslint-disable max-len */

/**
 * DateTime
 */
var DateTime = function DateTime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var millisecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var isLocal = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;

  if ((0, _isObjectParameter.isObjectParameter)(year, '', 'year, month, day, hour, minute, second, millisecond, isLocal', 1)) {
    var _year = year;
    var _year$year = _year.year;
    year = _year$year === void 0 ? 1970 : _year$year;
    var _year$month = _year.month;
    month = _year$month === void 0 ? 1 : _year$month;
    var _year$day = _year.day;
    day = _year$day === void 0 ? 1 : _year$day;
    var _year$hour = _year.hour;
    hour = _year$hour === void 0 ? 0 : _year$hour;
    var _year$minute = _year.minute;
    minute = _year$minute === void 0 ? 0 : _year$minute;
    var _year$second = _year.second;
    second = _year$second === void 0 ? 0 : _year$second;
    var _year$millisecond = _year.millisecond;
    millisecond = _year$millisecond === void 0 ? 0 : _year$millisecond;
    var _year$isLocal = _year.isLocal;
    isLocal = _year$isLocal === void 0 ? true : _year$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(month, '', 'month, day, hour, minute, second, millisecond, isLocal', 1)) {
    var _month = month;
    var _month$month = _month.month;
    month = _month$month === void 0 ? 1 : _month$month;
    var _month$day = _month.day;
    day = _month$day === void 0 ? 1 : _month$day;
    var _month$hour = _month.hour;
    hour = _month$hour === void 0 ? 0 : _month$hour;
    var _month$minute = _month.minute;
    minute = _month$minute === void 0 ? 0 : _month$minute;
    var _month$second = _month.second;
    second = _month$second === void 0 ? 0 : _month$second;
    var _month$millisecond = _month.millisecond;
    millisecond = _month$millisecond === void 0 ? 0 : _month$millisecond;
    var _month$isLocal = _month.isLocal;
    isLocal = _month$isLocal === void 0 ? true : _month$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(day, '', 'day, hour, minute, second, millisecond, isLocal', 1)) {
    var _day = day;
    var _day$day = _day.day;
    day = _day$day === void 0 ? 1 : _day$day;
    var _day$hour = _day.hour;
    hour = _day$hour === void 0 ? 0 : _day$hour;
    var _day$minute = _day.minute;
    minute = _day$minute === void 0 ? 0 : _day$minute;
    var _day$second = _day.second;
    second = _day$second === void 0 ? 0 : _day$second;
    var _day$millisecond = _day.millisecond;
    millisecond = _day$millisecond === void 0 ? 0 : _day$millisecond;
    var _day$isLocal = _day.isLocal;
    isLocal = _day$isLocal === void 0 ? true : _day$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(hour, '', 'hour, minute, second, millisecond, isLocal', 1)) {
    var _hour = hour;
    var _hour$hour = _hour.hour;
    hour = _hour$hour === void 0 ? 0 : _hour$hour;
    var _hour$minute = _hour.minute;
    minute = _hour$minute === void 0 ? 0 : _hour$minute;
    var _hour$second = _hour.second;
    second = _hour$second === void 0 ? 0 : _hour$second;
    var _hour$millisecond = _hour.millisecond;
    millisecond = _hour$millisecond === void 0 ? 0 : _hour$millisecond;
    var _hour$isLocal = _hour.isLocal;
    isLocal = _hour$isLocal === void 0 ? true : _hour$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(minute, '', 'minute, second, millisecond, isLocal', 1)) {
    var _minute = minute;
    var _minute$minute = _minute.minute;
    minute = _minute$minute === void 0 ? 0 : _minute$minute;
    var _minute$second = _minute.second;
    second = _minute$second === void 0 ? 0 : _minute$second;
    var _minute$millisecond = _minute.millisecond;
    millisecond = _minute$millisecond === void 0 ? 0 : _minute$millisecond;
    var _minute$isLocal = _minute.isLocal;
    isLocal = _minute$isLocal === void 0 ? true : _minute$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(second, '', 'second, millisecond, isLocal', 1)) {
    var _second = second;
    var _second$second = _second.second;
    second = _second$second === void 0 ? 0 : _second$second;
    var _second$millisecond = _second.millisecond;
    millisecond = _second$millisecond === void 0 ? 0 : _second$millisecond;
    var _second$isLocal = _second.isLocal;
    isLocal = _second$isLocal === void 0 ? true : _second$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(millisecond, '', 'millisecond, isLocal', 1)) {
    var _millisecond = millisecond;
    var _millisecond$millisec = _millisecond.millisecond;
    millisecond = _millisecond$millisec === void 0 ? 0 : _millisecond$millisec;
    var _millisecond$isLocal = _millisecond.isLocal;
    isLocal = _millisecond$isLocal === void 0 ? true : _millisecond$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'isLocal', 1)) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
  }

  if (!(0, _isType.isInteger)(year)) {
    throw new TypeError("DateTime args(year:".concat(year, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(month)) {
    throw new TypeError("DateTime args(month:".concat(month, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(day)) {
    throw new TypeError("DateTime args(day:".concat(day, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(hour)) {
    throw new TypeError("DateTime args(hour:".concat(hour, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(minute)) {
    throw new TypeError("DateTime args(minute:".concat(minute, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(second)) {
    throw new TypeError("DateTime args(second:".concat(second, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(millisecond)) {
    throw new TypeError("DateTime args(millisecond:".concat(millisecond, ") is not integer"));
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("DateTime args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _DateTime2._DateTime)(year, month, day, hour, minute, second, millisecond, isLocal);
};

exports.DateTime = DateTime;
var _default = {
  DateTime: DateTime
};
exports["default"] = _default;