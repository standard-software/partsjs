"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dateToStringUTC = void 0;

var _dateToStringRule = require("./__dateToStringRule.js");

var _dateToString = require("./__dateToString.js");

var _dateToStringUTC = function _dateToStringUTC(date, format) {
  var formatRule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dateToStringRule.__dateToStringRule.Default();
  return (0, _dateToString.__dateToString)(date, format, null, formatRule);
};

exports._dateToStringUTC = _dateToStringUTC;
_dateToStringUTC.func = _dateToString.__dateToString.func;
var _default = {
  _dateToStringUTC: _dateToStringUTC
};
exports["default"] = _default;