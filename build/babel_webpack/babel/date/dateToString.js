"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateToString = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _dateToString2 = require("./_dateToString.js");

var dateToString = function dateToString(date, format, timezoneOffset) {
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToString2._dateToString.rule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'timezoneOffset, rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    timezoneOffset = _date.timezoneOffset;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'timezoneOffset, rule')) {
    var _format = format;
    format = _format.format;
    timezoneOffset = _format.timezoneOffset;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', 'rule')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
    var _timezoneOffset$rule = _timezoneOffset.rule;
    rule = _timezoneOffset$rule === void 0 ? _dateToString2._dateToString.rule.Default() : _timezoneOffset$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dateToString args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("dateToString args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("dateToString args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("dateToString args(rule:".concat(rule, ") is not object"));
  }

  return (0, _dateToString2._dateToString)(date, format, timezoneOffset, rule);
};

exports.dateToString = dateToString;
dateToString.rule = _dateToString2._dateToString.rule;
var _default = {
  dateToString: dateToString
};
exports["default"] = _default;