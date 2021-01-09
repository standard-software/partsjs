"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.datetimeToString = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _datetimeToString2 = require("./_datetimeToString.js");

var datetimeToString = function datetimeToString(date, format) {
  var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _datetimeToString2._datetimeToString.func.DefaultObject();
  var isLocal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date, format', 'rule, isLocal')) {
    var _date = date;
    date = _date.date;
    format = _date.format;
    var _date$rule = _date.rule;
    rule = _date$rule === void 0 ? _datetimeToString2._datetimeToString.func.DefaultObject() : _date$rule;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'rule, isLocal')) {
    var _format = format;
    format = _format.format;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _datetimeToString2._datetimeToString.func.DefaultObject() : _format$rule;
    var _format$isLocal = _format.isLocal;
    isLocal = _format$isLocal === void 0 ? true : _format$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule', 'isLocal')) {
    var _rule = rule;
    rule = _rule.rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, 'isLocal')) {
    var _isLocal = isLocal;
    isLocal = _isLocal.isLocal;
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

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("datetimeToString args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _datetimeToString2._datetimeToString)(date, format, rule, isLocal);
};

exports.datetimeToString = datetimeToString;
datetimeToString.func = _datetimeToString2._datetimeToString.func;
var _default = {
  datetimeToString: datetimeToString
};
exports["default"] = _default;