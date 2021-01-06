"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.datetimeToString = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _detetimeToStringFunc = require("../date/__detetimeToStringFunc.js");

var _datetimeToString2 = require("./_datetimeToString.js");

var datetimeToString = function datetimeToString(date, format) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _detetimeToStringFunc.__detetimeToStringFunc.DefaultObject();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'rule')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _detetimeToStringFunc.__detetimeToStringFunc.DefaultObject() : _date$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'rule')) {
    var _format = format;
    format = _format.format;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _detetimeToStringFunc.__detetimeToStringFunc.DefaultObject() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("datetimeToString args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("datetimeToString args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("datetimeToString args(rule:".concat(rule, ") is not object"));
  }

  return (0, _datetimeToString2._datetimeToString)(date, format, rule);
};

exports.datetimeToString = datetimeToString;
var _default = {
  datetimeToString: datetimeToString
};
exports["default"] = _default;