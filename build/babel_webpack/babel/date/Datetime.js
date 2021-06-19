"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Datetime = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _number = require("../number/number.js");

var _Datetime2 = require("./_Datetime.js");

/* eslint-disable max-len */

/**
 * Datetime
 */
var Datetime = function Datetime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var timezoneOffset = arguments.length > 7 ? arguments[7] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(year, '', 'year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _year = year;
    var _year$year = _year.year;
    year = _year$year === void 0 ? 1970 : _year$year;
    var _year$month = _year.month;
    month = _year$month === void 0 ? 1 : _year$month;
    var _year$day = _year.day;
    day = _year$day === void 0 ? 1 : _year$day;
    var _year$hours = _year.hours;
    hours = _year$hours === void 0 ? 0 : _year$hours;
    var _year$minutes = _year.minutes;
    minutes = _year$minutes === void 0 ? 0 : _year$minutes;
    var _year$seconds = _year.seconds;
    seconds = _year$seconds === void 0 ? 0 : _year$seconds;
    var _year$milliseconds = _year.milliseconds;
    milliseconds = _year$milliseconds === void 0 ? 0 : _year$milliseconds;
    timezoneOffset = _year.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(month, '', 'month, day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _month = month;
    var _month$month = _month.month;
    month = _month$month === void 0 ? 1 : _month$month;
    var _month$day = _month.day;
    day = _month$day === void 0 ? 1 : _month$day;
    var _month$hours = _month.hours;
    hours = _month$hours === void 0 ? 0 : _month$hours;
    var _month$minutes = _month.minutes;
    minutes = _month$minutes === void 0 ? 0 : _month$minutes;
    var _month$seconds = _month.seconds;
    seconds = _month$seconds === void 0 ? 0 : _month$seconds;
    var _month$milliseconds = _month.milliseconds;
    milliseconds = _month$milliseconds === void 0 ? 0 : _month$milliseconds;
    timezoneOffset = _month.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(day, '', 'day, hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _day = day;
    var _day$day = _day.day;
    day = _day$day === void 0 ? 1 : _day$day;
    var _day$hours = _day.hours;
    hours = _day$hours === void 0 ? 0 : _day$hours;
    var _day$minutes = _day.minutes;
    minutes = _day$minutes === void 0 ? 0 : _day$minutes;
    var _day$seconds = _day.seconds;
    seconds = _day$seconds === void 0 ? 0 : _day$seconds;
    var _day$milliseconds = _day.milliseconds;
    milliseconds = _day$milliseconds === void 0 ? 0 : _day$milliseconds;
    timezoneOffset = _day.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(hours, '', 'hours, minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _hours = hours;
    var _hours$hours = _hours.hours;
    hours = _hours$hours === void 0 ? 0 : _hours$hours;
    var _hours$minutes = _hours.minutes;
    minutes = _hours$minutes === void 0 ? 0 : _hours$minutes;
    var _hours$seconds = _hours.seconds;
    seconds = _hours$seconds === void 0 ? 0 : _hours$seconds;
    var _hours$milliseconds = _hours.milliseconds;
    milliseconds = _hours$milliseconds === void 0 ? 0 : _hours$milliseconds;
    timezoneOffset = _hours.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(minutes, '', 'minutes, seconds, milliseconds, timezoneOffset', 1)) {
    var _minutes = minutes;
    var _minutes$minutes = _minutes.minutes;
    minutes = _minutes$minutes === void 0 ? 0 : _minutes$minutes;
    var _minutes$seconds = _minutes.seconds;
    seconds = _minutes$seconds === void 0 ? 0 : _minutes$seconds;
    var _minutes$milliseconds = _minutes.milliseconds;
    milliseconds = _minutes$milliseconds === void 0 ? 0 : _minutes$milliseconds;
    timezoneOffset = _minutes.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(seconds, '', 'seconds, milliseconds, timezoneOffset', 1)) {
    var _seconds = seconds;
    var _seconds$seconds = _seconds.seconds;
    seconds = _seconds$seconds === void 0 ? 0 : _seconds$seconds;
    var _seconds$milliseconds = _seconds.milliseconds;
    milliseconds = _seconds$milliseconds === void 0 ? 0 : _seconds$milliseconds;
    timezoneOffset = _seconds.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(milliseconds, '', 'milliseconds, timezoneOffset', 1)) {
    var _milliseconds = milliseconds;
    var _milliseconds$millise = _milliseconds.milliseconds;
    milliseconds = _milliseconds$millise === void 0 ? 0 : _milliseconds$millise;
    timezoneOffset = _milliseconds.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, '', 'timezoneOffset', 1)) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if (!(0, _isType.isInteger)(year)) {
    throw new TypeError("Datetime args(year:".concat(year, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(month)) {
    throw new TypeError("Datetime args(month:".concat(month, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(day)) {
    throw new TypeError("Datetime args(day:".concat(day, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(hours)) {
    throw new TypeError("Datetime args(hours:".concat(hours, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(minutes)) {
    throw new TypeError("Datetime args(minutes:".concat(minutes, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(seconds)) {
    throw new TypeError("Datetime args(seconds:".concat(seconds, ") is not integer"));
  }

  if (!(0, _isType.isInteger)(milliseconds)) {
    throw new TypeError("Datetime args(milliseconds:".concat(milliseconds, ") is not integer"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Datetime args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Datetime2._Datetime)(year, month, day, hours, minutes, seconds, milliseconds, timezoneOffset);
};

exports.Datetime = Datetime;
var _default = {
  Datetime: Datetime
};
exports["default"] = _default;