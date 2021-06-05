"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dateToString = void 0;

var _dateToStringRule = require("./__dateToStringRule.js");

var _dateToString2 = require("./__dateToString.js");

var _dateToString = function _dateToString(date, format) {
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : date.getTimezoneOffset();
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToStringRule.__dateToStringRule.Default();
  return (0, _dateToString2.__dateToString)(date, format, timezoneOffset, rule);
};

exports._dateToString = _dateToString;
_dateToString.func = _dateToString2.__dateToString.func;
var _default = {
  _dateToString: _dateToString
};
exports["default"] = _default;