"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateToString = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _dateToString2 = require("./_dateToString.js");

var dateToString = function dateToString(date, format) {
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : date.getTimezoneOffset();
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToString2._dateToString.func.Default();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'timezoneOffset, rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    var _date$timezoneOffset = _date.timezoneOffset;
    timezoneOffset = _date$timezoneOffset === void 0 ? date.getTimezoneOffset() : _date$timezoneOffset;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _dateToString2._dateToString.func.Default() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'timezoneOffset, rule')) {
    var _format = format;
    format = _format.format;
    var _format$timezoneOffse = _format.timezoneOffset;
    timezoneOffset = _format$timezoneOffse === void 0 ? date.getTimezoneOffset() : _format$timezoneOffse;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _dateToString2._dateToString.func.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'timezoneOffset', 'rule')) {
    var _rule = rule;
    timezoneOffset = _rule.timezoneOffset;
    var _rule$rule = _rule.rule;
    rule = _rule$rule === void 0 ? _dateToString2._dateToString.func.Default() : _rule$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule2 = rule;
    rule = _rule2.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dateToString args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("dateToString args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isInteger)(timezoneOffset)) {
    throw new TypeError("dateToString args(timezoneOffset:".concat(timezoneOffset, ") is not integer"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("dateToString args(rule:".concat(rule, ") is not object"));
  }

  return (0, _dateToString2._dateToString)(date, format, timezoneOffset, rule);
};

exports.dateToString = dateToString;
dateToString.func = _dateToString2._dateToString.func;
var _default = {
  dateToString: dateToString
};
exports["default"] = _default;