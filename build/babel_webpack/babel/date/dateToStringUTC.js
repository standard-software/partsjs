"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dateToStringUTC = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _dateToStringUTC2 = require("./_dateToStringUTC.js");

var dateToStringUTC = function dateToStringUTC(date, format) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dateToStringUTC2._dateToStringUTC.func.Default();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _dateToString.func.Default() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'rule')) {
    var _format = format;
    format = _format.format;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _dateToString.func.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule', '')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("dateToStringUTC args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("dateToStringUTC args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("dateToStringUTC args(rule:".concat(rule, ") is not object"));
  }

  return (0, _dateToStringUTC2._dateToStringUTC)(date, format, rule);
};

exports.dateToStringUTC = dateToStringUTC;
dateToStringUTC.func = _dateToStringUTC2._dateToStringUTC.func;
var _default = {
  dateToStringUTC: dateToStringUTC
};
exports["default"] = _default;